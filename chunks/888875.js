n(653041), n(47120);
var r = n(392711),
    i = n.n(r),
    a = n(377108),
    s = n(147913),
    o = n(654455),
    l = n(822245),
    u = n(339085),
    c = n(178106),
    d = n(822179),
    f = n(580005),
    _ = n(70956),
    p = n(675478),
    h = n(581883),
    m = n(48481),
    g = n(526761),
    E = n(674563);
let v = 10 + Math.random() * (10 * _.Z.Millis.SECOND),
    I = 2 * _.Z.Millis.HOUR + Math.floor(Math.random() * (10 * _.Z.Millis.MINUTE)),
    b = null,
    S = !1;
class T extends s.Z {
    _initialize() {
        p.DZ.beforeSendCallbacks.push({
            hasChanges: () => !1,
            processProto: () => {
                R(I, !1);
            }
        }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => d.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!d.Z.hasPendingUsage()) h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.stickerFrecency = a.ls.create()), (e.stickerFrecency.stickers = (0, m.tU)(d.Z.stickerFrecencyWithoutFetchingLatest.usageHistory, 100)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => u.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!u.ZP.hasPendingUsage()) h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.emojiFrecency = a.PL.create()), (e.emojiReactionFrecency = a.PL.create()), (e.emojiFrecency.emojis = (0, m.tU)(u.ZP.emojiFrecencyWithoutFetchingLatest.usageHistory, 100)), (e.emojiReactionFrecency.emojis = (0, m.tU)(u.ZP.emojiReactionFrecencyWithoutFetchingLatest.usageHistory, 100)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => c.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!c.Z.hasPendingUsage()) h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && !i().isEmpty(c.Z.playedSoundHistory) && ((e.playedSoundFrecency = a.pL.create()), (e.playedSoundFrecency.playedSounds = (0, m.tU)(c.Z.playedSoundHistory, 100)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => o.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!o.ZP.hasPendingUsage()) h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.applicationCommandFrecency = a.YI.create()), (e.applicationCommandFrecency.applicationCommands = (0, m.tU)(o.ZP.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => l.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!l.Z.hasPendingUsage()) h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.applicationFrecency = a.UY.create()), (e.applicationFrecency.applications = (0, m.tU)(l.Z.getApplicationFrecencyWithoutLoadingLatest().usageHistory, E.yP)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => f.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!f.Z.hasPendingUsage()) h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.guildAndChannelFrecency = a.lG.create()), (e.guildAndChannelFrecency.guildAndChannels = (0, m.tU)(f.Z.frecencyWithoutFetchingLatest.usageHistory, f.C)));
                }
            });
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: y,
                CONNECTION_RESUMED: y,
                CONNECTION_CLOSED: N,
                APP_STATE_UPDATE: A
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
function y() {
    (S = !0), R(v, !0);
}
function A(e) {
    S && 'active' !== e.state && (clearTimeout(b), (b = null), C(!1));
}
function N() {
    S && (clearTimeout(b), (b = null), C(!1));
}
async function C(e) {
    R(I, !1),
        !h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (d.Z.hasPendingUsage() || u.ZP.hasPendingUsage() || o.ZP.hasPendingUsage() || l.Z.hasPendingUsage() || (f.Z.hasPendingUsage() && !e)) && ((0, p.T6)(), await p.DZ.loadIfNecessary()),
        i().forEach(p.aj, (e) => {
            e.markDirtyIfHasPendingChange();
        });
}
function R(e, t) {
    null != b && clearTimeout(b), (b = setTimeout(() => C(t), e));
}
t.Z = new T();
