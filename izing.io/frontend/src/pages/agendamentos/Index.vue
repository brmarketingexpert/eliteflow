<template>
  <div v-if="userProfile === 'admin'">
    <q-table
      flat
      bordered
      square
      hide-bottom
      class="my-sticky-dynamic q-ma-lg"
      title="Agendamentos"
      :data="agendadas"
      :columns="columns"
      :loading="loading"
      row-key="id"
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
    >
      <template v-slot:body-cell-color="props">
        <q-td class="text-center">
            {{ props.row.contact.name }}
        </q-td>
      </template>
      <template v-slot:body-cell-acoes="props">
        <q-td class="text-center">
          <q-btn
            flat
            round
            icon="mdi-delete"
            @click="deletarMensagem(props.row)"
          />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ListarAgendadas, DeletarMensagem } from 'src/service/tickets'
export default {
  name: 'Agendamentos',
  data () {
    return {
      userProfile: 'user',
      agendadas: [],
      pagination: {
        rowsPerPage: 40,
        rowsNumber: 0,
        lastIndex: 0
      },
      loading: false,
      columns: [
        { name: 'id', label: '#', field: 'id', align: 'left' },
        { name: 'body', label: 'Mensagem', field: 'body', align: 'left' },
        { name: 'contactName', label: 'Contato', field: 'contactName', align: 'center' },
        { name: 'scheduleDate', label: 'Data', field: 'scheduleDate', align: 'center' },
        { name: 'acoes', label: 'Ações', field: 'acoes', align: 'center' }
      ]
    }
  },
  methods: {
    async listarAgendadas () {
      try {
        this.loading = true;
        const data = await ListarAgendadas();
        this.agendadas = data.data.messages
        .filter(message => !message.isDeleted)
        .map(message => ({
          ...message,
          contactName: message.contact.name
        }));
      } catch (error) {
        console.error('Erro ao listar as mensagens:', error);
      } finally {
        this.loading = false;
      }
    },
    deletarMensagem(mensagem) {
      this.$q
        .dialog({
          title: 'Atenção!! Deseja realmente deletar essa mensagem? ',
          message: 'Mensagens antigas não serão apagadas no cliente.',
          cancel: {
            label: 'Não',
            color: 'primary',
            push: true,
          },
          ok: {
            label: 'Sim',
            color: 'negative',
            push: true,
          },
          persistent: true,
        })
        .onOk(() => {
          this.loading = true
          DeletarMensagem(mensagem)
            .then((res) => {
              this.loading = false
              mensagem.isDeleted = true
            })
            .catch((error) => {
              this.loading = false
              console.error(error)
              this.$notificarErro('Não foi possível apagar a mensagem', error)
            })
        })
        .onCancel(() => {})
    },
  },
  mounted () {
    this.listarAgendadas()
    this.userProfile = localStorage.getItem('profile')
  }
}
</script>

<style lang="scss" scoped>
</style>
