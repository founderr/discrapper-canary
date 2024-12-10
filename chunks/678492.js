var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    a = n(317770),
    o = n(388032);
class s extends a.Z {
    _initialize() {
        l.Z.subscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        l.Z.unsubscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, r.openModal)((e) =>
            (0, i.jsx)(r.ConfirmModal, {
                ...e,
                header: o.intl.string(o.t.wDQgnZ),
                confirmText: o.intl.string(o.t['cY+Ooa']),
                confirmButtonColor: r.Button.Colors.GREEN,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    children: o.intl.string(o.t.OJklbW)
                })
            })
        );
    }
}
t.Z = new s();
