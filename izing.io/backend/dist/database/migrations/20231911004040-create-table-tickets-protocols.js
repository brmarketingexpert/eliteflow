'use strict';
const _0x2f4400 = _0x1d5e;
function _0x1d5e(_0x38429f, _0x4f4baf) {
    const _0x4194d1 = _0x1317();
    return _0x1d5e = function (_0xbb56d9, _0x378fb0) {
        _0xbb56d9 = _0xbb56d9 - (0x47c + 0x1c78 + 0x1 * -0x1fd8);
        let _0xebe9c5 = _0x4194d1[_0xbb56d9];
        return _0xebe9c5;
    }, _0x1d5e(_0x38429f, _0x4f4baf);
}
(function (_0x3eebbc, _0x44e289) {
    const _0x1fa4b2 = _0x1d5e, _0xb26150 = _0x3eebbc();
    while (!![]) {
        try {
            const _0x1972f9 = parseInt(_0x1fa4b2(0x12d)) / (0x50 + 0xd + -0x5c) + -parseInt(_0x1fa4b2(0x11e)) / (-0x215 + -0x1c94 * -0x1 + -0x1 * 0x1a7d) + -parseInt(_0x1fa4b2(0x11d)) / (0x126d + -0x12 + 0x2 * -0x92c) + -parseInt(_0x1fa4b2(0x12b)) / (-0x6d * -0x37 + 0x10fd + 0x1432 * -0x2) + parseInt(_0x1fa4b2(0x129)) / (-0x137 * 0xe + 0xe17 * -0x2 + 0x2d35) + -parseInt(_0x1fa4b2(0x131)) / (-0xeb4 * -0x1 + 0x1e41 + -0x1 * 0x2cef) + parseInt(_0x1fa4b2(0x13b)) / (-0x1249 * -0x2 + 0xe6f + -0x32fa) * (parseInt(_0x1fa4b2(0x133)) / (0x16b6 + 0x1248 + -0x28f6));
            if (_0x1972f9 === _0x44e289)
                break;
            else
                _0xb26150['push'](_0xb26150['shift']());
        } catch (_0xaf7879) {
            _0xb26150['push'](_0xb26150['shift']());
        }
    }
}(_0x1317, 0x2ea * -0x7d3 + -0x1cd0a * 0x1 + 0x77655 * 0x5));
const _0x214b98 = {};
_0x214b98[_0x2f4400(0x122)] = !![], Object[_0x2f4400(0x123) + _0x2f4400(0x138)](exports, _0x2f4400(0x132), _0x214b98);
const sequelize_1 = require(_0x2f4400(0x125));
module[_0x2f4400(0x121)] = {
    'up': _0x3d76bc => {
        const _0x1d2633 = _0x2f4400, _0x48d21e = {};
        _0x48d21e[_0x1d2633(0x127)] = _0x1d2633(0x13e) + _0x1d2633(0x136), _0x48d21e[_0x1d2633(0x141)] = _0x1d2633(0x124), _0x48d21e[_0x1d2633(0x13c)] = _0x1d2633(0x126), _0x48d21e[_0x1d2633(0x120)] = _0x1d2633(0x13a), _0x48d21e[_0x1d2633(0x134)] = _0x1d2633(0x13d), _0x48d21e[_0x1d2633(0x12c)] = _0x1d2633(0x11c);
        const _0x5e4b1c = _0x48d21e, _0x333584 = {};
        return _0x333584[_0x1d2633(0x12e)] = sequelize_1[_0x1d2633(0x140)][_0x1d2633(0x130)], _0x333584[_0x1d2633(0x137) + _0x1d2633(0x11f)] = !![], _0x333584[_0x1d2633(0x13f)] = !![], _0x333584[_0x1d2633(0x128)] = ![], _0x3d76bc[_0x1d2633(0x139) + 'e'](_0x5e4b1c[_0x1d2633(0x127)], {
            'id': _0x333584,
            'evaluation': {
                'type': sequelize_1[_0x1d2633(0x140)][_0x1d2633(0x142)],
                'onUpdate': _0x5e4b1c[_0x1d2633(0x141)],
                'onDelete': _0x5e4b1c[_0x1d2633(0x13c)],
                'allowNull': ![]
            },
            'attempts': {
                'type': sequelize_1[_0x1d2633(0x140)][_0x1d2633(0x130)],
                'onUpdate': _0x5e4b1c[_0x1d2633(0x141)],
                'onDelete': _0x5e4b1c[_0x1d2633(0x141)],
                'allowNull': ![]
            },
            'ticketId': {
                'type': sequelize_1[_0x1d2633(0x140)][_0x1d2633(0x130)],
                'onUpdate': _0x5e4b1c[_0x1d2633(0x141)],
                'onDelete': _0x5e4b1c[_0x1d2633(0x141)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[_0x1d2633(0x140)][_0x1d2633(0x130)],
                'references': {
                    'model': _0x5e4b1c[_0x1d2633(0x120)],
                    'key': 'id'
                },
                'onUpdate': _0x5e4b1c[_0x1d2633(0x141)],
                'onDelete': _0x5e4b1c[_0x1d2633(0x134)]
            },
            'tenantId': {
                'type': sequelize_1[_0x1d2633(0x140)][_0x1d2633(0x130)],
                'references': {
                    'model': _0x5e4b1c[_0x1d2633(0x12c)],
                    'key': 'id'
                },
                'onUpdate': _0x5e4b1c[_0x1d2633(0x141)],
                'onDelete': _0x5e4b1c[_0x1d2633(0x141)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0x1d2633(0x140)][_0x1d2633(0x12f)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x1d2633(0x140)][_0x1d2633(0x12f)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x41b123 => {
        const _0x1e4d70 = _0x2f4400, _0x379061 = {};
        _0x379061[_0x1e4d70(0x12a)] = _0x1e4d70(0x13e) + _0x1e4d70(0x136);
        const _0x22c906 = _0x379061;
        return _0x41b123[_0x1e4d70(0x135)](_0x22c906[_0x1e4d70(0x12a)]);
    }
};
function _0x1317() {
    const _0x2c7e53 = [
        'primaryKey',
        'DataTypes',
        'tfdgu',
        'STRING',
        'Tenants',
        '604449GMrJtR',
        '2734736eWHgMj',
        'ent',
        'lDAyU',
        'exports',
        'value',
        'defineProp',
        'CASCADE',
        'sequelize',
        'RESTRICT',
        'jSdTf',
        'allowNull',
        '1554230HksFPn',
        'dGMSv',
        '5986296wwneFg',
        'LBpUR',
        '1397257grPALh',
        'type',
        'DATE',
        'INTEGER',
        '5549100REaNfs',
        '__esModule',
        '24921064LUiixB',
        'hcszM',
        'dropTable',
        'uations',
        'autoIncrem',
        'erty',
        'createTabl',
        'Users',
        '7XQYQqw',
        'Iupjo',
        'SET\x20NULL',
        'TicketEval'
    ];
    _0x1317 = function () {
        return _0x2c7e53;
    };
    return _0x1317();
}