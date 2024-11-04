var i = n(200651);
n(192379);
var r = n(481060),
    a = n(570140),
    l = n(317770),
    s = n(388032);
class o extends l.Z {
    _initialize() {
        a.Z.subscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        a.Z.unsubscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, r.openModal)((e) =>
            (0, i.jsx)(r.ConfirmModal, {
                ...e,
                header: s.intl.string(s.t.wDQgnZ),
                confirmText: s.intl.string(s.t['cY+Ooa']),
                confirmButtonColor: r.Button.Colors.GREEN,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    children: s.intl.string(s.t.OJklbW)
                })
            })
        );
    }
}
t.Z = new o();
