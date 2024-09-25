n.d(t, {
    Br: function () {
        return u;
    },
    MH: function () {
        return c;
    },
    Ol: function () {
        return d;
    },
    TG: function () {
        return f;
    },
    UF: function () {
        return E;
    },
    sJ: function () {
        return _;
    }
});
var r = n(411104);
var i = n(544891),
    a = n(570140),
    o = n(439849),
    s = n(358085),
    l = n(981631);
async function u(e) {
    if (e.platform_type === l.ABu.XBOX) {
        let t = e.parsed_launch_parameters.titleId,
            n = e.parsed_launch_parameters.inviteToken;
        if (!(0, s.isWindows)() || null == t || null == n) return;
        let r = await h(t, !1),
            i = await m(n);
        a.Z.dispatch({
            type: 'GAME_INVITE_UPDATE_STATUS',
            inviteId: e.invite_id,
            installed: r,
            joinable: i
        });
    } else throw Error('Unsupported invite platform ' + e.platform_type);
}
async function c(e) {
    if (e.platform_type === l.ABu.XBOX) {
        let t = e.parsed_launch_parameters.titleId;
        return !!(0, s.isWindows)() && null != t && (await p(t));
    }
    throw Error('Unsupported invite platform ' + e.platform_type);
}
async function d(e) {
    if (e.platform_type === l.ABu.XBOX) {
        let t = e.parsed_launch_parameters.inviteToken;
        return !!(0, s.isWindows)() && null != t && (await I(t));
    }
    throw Error('Unsupported invite platform ' + e.platform_type);
}
function _() {
    a.Z.dispatch({ type: 'GAME_INVITE_CLEAR_UNSEEN' });
}
async function E(e) {
    await i.tn.del({ url: l.ANM.GAME_INVITE(e.invite_id) });
}
async function f() {
    await i.tn.del({ url: l.ANM.GAME_INVITES });
}
async function h(e, t) {
    if (!(0, s.isWindows)()) return !1;
    let n = await (0, o.Z)();
    return new Promise((r, i) => {
        if ((null == n ? void 0 : n.xboxIsApplicationInstalled) == null) {
            i(Error('Game utils module not loaded'));
            return;
        }
        n.xboxIsApplicationInstalled(e, t, (e) => {
            r(e);
        });
    });
}
async function p(e) {
    if (!(0, s.isWindows)()) return !1;
    let t = await (0, o.Z)();
    return new Promise((n, r) => {
        if ((null == t ? void 0 : t.xboxLaunchGame) == null) {
            r(Error('Game utils module not loaded'));
            return;
        }
        t.xboxLaunchGame(e, (e) => {
            n(e);
        });
    });
}
async function m(e) {
    if (!(0, s.isWindows)()) return !1;
    let t = await (0, o.Z)();
    return new Promise((n, r) => {
        if ((null == t ? void 0 : t.xboxIsInviteTokenValid) == null) {
            r(Error('Game utils module not loaded'));
            return;
        }
        t.xboxIsInviteTokenValid(e, (e) => {
            n(e);
        });
    });
}
async function I(e) {
    if (!(0, s.isWindows)()) return !1;
    let t = await (0, o.Z)();
    return new Promise((n, r) => {
        if ((null == t ? void 0 : t.xboxAcceptGameInvite) == null) {
            r(Error('Game utils module not loaded'));
            return;
        }
        t.xboxAcceptGameInvite(e, (e) => {
            n(e);
        });
    });
}
