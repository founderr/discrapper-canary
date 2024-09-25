var r = n(653041);
var i = n(97613),
    a = n.n(i),
    o = n(570140),
    s = n(777639),
    l = n(272423),
    u = n(808663),
    c = n(178535),
    d = n(981631);
t.Z = {
    push(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a()('modal'),
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d.IlC.APP;
        return (
            (0, l.Ll)({
                key: n,
                modal: (0, c.Z)(e, {}, t, n),
                ...r
            }),
            o.Z.dispatch({
                type: 'MODAL_PUSH',
                modal: e,
                props: t,
                key: n,
                appContext: i
            }),
            n
        );
    },
    pushLazy(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a()('modal'),
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = (0, s.D)();
        return null != i && i.isReady()
            ? (e instanceof Promise
                  ? e.then((e) => {
                        let { default: t } = e;
                        return t;
                    })
                  : e()
              ).then((e) => this.push(e, t, n, r))
            : new Promise((i) => u.Z.enqueue(() => i(this.pushLazy(e, t, n, r))));
    },
    updateAnimation(e, t) {
        o.Z.dispatch({
            type: 'MODAL_UPDATE',
            key: e,
            props: {},
            partial: !0,
            animation: t
        });
    },
    pop() {
        (0, l.GZ)(), o.Z.dispatch({ type: 'MODAL_POP' });
    },
    popWithKey(e, t) {
        (0, l.GZ)(e, t),
            o.Z.dispatch({
                type: 'MODAL_POP',
                key: e,
                onExited: t
            });
    },
    popAll() {
        (0, l.lE)(),
            o.Z.dispatch({ type: 'MODAL_POP_ALL' }),
            o.Z.dispatch({ type: 'CHANNEL_SETTINGS_CLOSE' }),
            o.Z.dispatch({ type: 'EMAIL_VERIFICATION_MODAL_CLOSE' }),
            o.Z.dispatch({ type: 'GUILD_SETTINGS_CLOSE' }),
            o.Z.dispatch({ type: 'HIDE_ACTION_SHEET' }),
            o.Z.dispatch({ type: 'DISPLAYED_INVITE_CLEAR' }),
            o.Z.dispatch({
                type: 'DRAWER_CLOSE',
                animated: !0
            }),
            o.Z.dispatch({ type: 'NOTIFICATION_SETTINGS_MODAL_CLOSE' }),
            o.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' }),
            o.Z.dispatch({ type: 'MENTION_MODAL_CLOSE' }),
            o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_CLOSE' }),
            o.Z.dispatch({ type: 'SEARCH_MODAL_CLOSE' }),
            o.Z.dispatch({ type: 'CONNECTIONS_GRID_MODAL_HIDE' }),
            o.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
    }
};
