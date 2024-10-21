var i = n(200651);
n(192379);
var a = n(481060),
    s = n(570140),
    r = n(317770),
    l = n(689938);
class o extends r.Z {
    _initialize() {
        s.Z.subscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        s.Z.unsubscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, a.openModal)((e) =>
            (0, i.jsx)(a.ConfirmModal, {
                ...e,
                header: l.Z.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_TITLE,
                confirmText: l.Z.Messages.CONFIRM,
                confirmButtonColor: a.Button.Colors.GREEN,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: l.Z.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_BODY
                })
            })
        );
    }
}
t.Z = new o();
