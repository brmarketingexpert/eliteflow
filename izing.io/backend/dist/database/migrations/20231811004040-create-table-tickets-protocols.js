'use strict';
const _0x45b385 = _0x3c9e;
(function (_0x368a9e, _0x28a563) {
    const _0x4a5e04 = _0x3c9e, _0xb565f4 = _0x368a9e();
    while (!![]) {
        try {
            const _0x36bcb9 = parseInt(_0x4a5e04(0x10b)) / (-0xf * -0x43 + 0x8b2 + -0x1 * 0xc9e) + -parseInt(_0x4a5e04(0x114)) / (-0x1c9c * -0x1 + -0x182f + -0x57 * 0xd) * (-parseInt(_0x4a5e04(0x10e)) / (-0xd1f + 0x100f + -0x2ed)) + parseInt(_0x4a5e04(0x11c)) / (-0xda9 + 0xb8 * 0x10 + 0x1 * 0x22d) + parseInt(_0x4a5e04(0x11f)) / (-0xaeb + 0x1cb2 + 0x11c2 * -0x1) + -parseInt(_0x4a5e04(0x102)) / (0x2639 + 0x1 * -0x829 + -0x1e0a) + parseInt(_0x4a5e04(0x107)) / (-0x67 * -0x8 + 0x1c82 + 0x21d * -0xf) + -parseInt(_0x4a5e04(0x106)) / (0x182 * -0x6 + 0x1902 + 0x1 * -0xfee);
            if (_0x36bcb9 === _0x28a563)
                break;
            else
                _0xb565f4['push'](_0xb565f4['shift']());
        } catch (_0x395903) {
            _0xb565f4['push'](_0xb565f4['shift']());
        }
    }
}(_0x40f7, -0xe1e8 + -0x15e6 * -0x14 + 0xe * 0x210a));
function _0x3c9e(_0x2f66ef, _0x362003) {
    const _0x556ae7 = _0x40f7();
    return _0x3c9e = function (_0x153c94, _0x174fe7) {
        _0x153c94 = _0x153c94 - (0x11 * -0x11e + 0x445 * 0x9 + -0x1273 * 0x1);
        let _0x33e7bb = _0x556ae7[_0x153c94];
        return _0x33e7bb;
    }, _0x3c9e(_0x2f66ef, _0x362003);
}
function _0x40f7() {
    const _0x157ba0 = [
        'allowNull',
        '807048gBryaT',
        'createTabl',
        'DATE',
        '380545EUbcEd',
        'DataTypes',
        'type',
        'Tenants',
        'dropTable',
        'ocols',
        'autoIncrem',
        'RESTRICT',
        'value',
        'primaryKey',
        '426426WflhLp',
        'ent',
        'hXfTl',
        'exports',
        '4121744WWeSXl',
        '871871JCeTyM',
        'Users',
        'LLEhp',
        'sequelize',
        '206880bUElfw',
        'STRING',
        'YNGNu',
        '15EuXrKQ',
        'ZvKNZ',
        'AJGhP',
        'INTEGER',
        'defineProp',
        'TicketProt',
        '59874jcrAId',
        'acWKk',
        'qWLPe',
        'erty',
        'CASCADE',
        'SET\x20NULL',
        '__esModule'
    ];
    _0x40f7 = function () {
        return _0x157ba0;
    };
    return _0x40f7();
}
const _0x2b0df1 = {};
_0x2b0df1[_0x45b385(0x100)] = !![], Object[_0x45b385(0x112) + _0x45b385(0x117)](exports, _0x45b385(0x11a), _0x2b0df1);
const sequelize_1 = require(_0x45b385(0x10a));
module[_0x45b385(0x105)] = {
    'up': _0x46c74e => {
        const _0x22cbc6 = _0x45b385, _0x43c789 = {};
        _0x43c789[_0x22cbc6(0x109)] = _0x22cbc6(0x113) + _0x22cbc6(0xfd), _0x43c789[_0x22cbc6(0x104)] = _0x22cbc6(0x118), _0x43c789[_0x22cbc6(0x110)] = _0x22cbc6(0xff), _0x43c789[_0x22cbc6(0x115)] = _0x22cbc6(0x108), _0x43c789[_0x22cbc6(0x116)] = _0x22cbc6(0x119), _0x43c789[_0x22cbc6(0x10f)] = _0x22cbc6(0x122);
        const _0x475c5f = _0x43c789, _0x1c629b = {};
        return _0x1c629b[_0x22cbc6(0x121)] = sequelize_1[_0x22cbc6(0x120)][_0x22cbc6(0x111)], _0x1c629b[_0x22cbc6(0xfe) + _0x22cbc6(0x103)] = !![], _0x1c629b[_0x22cbc6(0x101)] = !![], _0x1c629b[_0x22cbc6(0x11b)] = ![], _0x46c74e[_0x22cbc6(0x11d) + 'e'](_0x475c5f[_0x22cbc6(0x109)], {
            'id': _0x1c629b,
            'protocol': {
                'type': sequelize_1[_0x22cbc6(0x120)][_0x22cbc6(0x10c)],
                'onUpdate': _0x475c5f[_0x22cbc6(0x104)],
                'onDelete': _0x475c5f[_0x22cbc6(0x110)],
                'allowNull': ![]
            },
            'ticketId': {
                'type': sequelize_1[_0x22cbc6(0x120)][_0x22cbc6(0x111)],
                'onUpdate': _0x475c5f[_0x22cbc6(0x104)],
                'onDelete': _0x475c5f[_0x22cbc6(0x104)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[_0x22cbc6(0x120)][_0x22cbc6(0x111)],
                'references': {
                    'model': _0x475c5f[_0x22cbc6(0x115)],
                    'key': 'id'
                },
                'onUpdate': _0x475c5f[_0x22cbc6(0x104)],
                'onDelete': _0x475c5f[_0x22cbc6(0x116)]
            },
            'tenantId': {
                'type': sequelize_1[_0x22cbc6(0x120)][_0x22cbc6(0x111)],
                'references': {
                    'model': _0x475c5f[_0x22cbc6(0x10f)],
                    'key': 'id'
                },
                'onUpdate': _0x475c5f[_0x22cbc6(0x104)],
                'onDelete': _0x475c5f[_0x22cbc6(0x104)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0x22cbc6(0x120)][_0x22cbc6(0x11e)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x22cbc6(0x120)][_0x22cbc6(0x11e)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x41a5a9 => {
        const _0x172fb2 = _0x45b385, _0x5ca7d5 = {};
        _0x5ca7d5[_0x172fb2(0x10d)] = _0x172fb2(0x113) + _0x172fb2(0xfd);
        const _0x275126 = _0x5ca7d5;
        return _0x41a5a9[_0x172fb2(0xfc)](_0x275126[_0x172fb2(0x10d)]);
    }
};