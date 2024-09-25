var r, i;
n.d(t, {
    SV: function () {
        return a;
    }
}),
    !(function (e) {
        (e[(e.SKIP_MIGRATION = 0)] = 'SKIP_MIGRATION'), (e[(e.SEND_DATA = 1)] = 'SEND_DATA'), (e[(e.DATA_MIGRATED = 2)] = 'DATA_MIGRATED'), (e[(e.DATA_MIGRATED_CONFIRMED = 3)] = 'DATA_MIGRATED_CONFIRMED');
    })(r || (r = {})),
    !(function (e) {
        (e[(e.MIGRATION_SOURCE_DOMAIN = 0)] = 'MIGRATION_SOURCE_DOMAIN'), (e[(e.MIGRATION_DESTINATION_DOMAIN = 1)] = 'MIGRATION_DESTINATION_DOMAIN');
    })(i || (i = {}));
let a = 'domainMigrationSuccess';
function o(e, t) {
    let n = 0 === t ? window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN : window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN;
    return e.origin === n && null != e.data.domainMigrationEvent && !0;
}
