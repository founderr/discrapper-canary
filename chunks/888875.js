var r = n(653041);
var i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(377108),
    l = n(147913),
    u = n(654455),
    c = n(822245),
    d = n(339085),
    _ = n(178106),
    E = n(822179),
    f = n(580005),
    h = n(70956),
    p = n(675478),
    m = n(581883),
    I = n(48481),
    T = n(526761),
    g = n(674563);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let A = 10 + Math.random() * (10 * h.Z.Millis.SECOND),
    v = 2 * h.Z.Millis.HOUR + Math.floor(Math.random() * (10 * h.Z.Millis.MINUTE)),
    N = null,
    O = !1;
class R extends l.Z {
    _initialize() {
        p.DZ.beforeSendCallbacks.push({
            hasChanges: () => !1,
            processProto: () => {
                D(v, !1);
            }
        }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => E.Z.hasPendingUsage() && m.Z.hasLoaded(T.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!E.Z.hasPendingUsage()) m.Z.hasLoaded(T.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.stickerFrecency = s.ls.create()), (e.stickerFrecency.stickers = (0, I.tU)(E.Z.stickerFrecencyWithoutFetchingLatest.usageHistory, 100)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => d.ZP.hasPendingUsage() && m.Z.hasLoaded(T.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!d.ZP.hasPendingUsage()) m.Z.hasLoaded(T.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.emojiFrecency = s.PL.create()), (e.emojiReactionFrecency = s.PL.create()), (e.emojiFrecency.emojis = (0, I.tU)(d.ZP.emojiFrecencyWithoutFetchingLatest.usageHistory, 100)), (e.emojiReactionFrecency.emojis = (0, I.tU)(d.ZP.emojiReactionFrecencyWithoutFetchingLatest.usageHistory, 100)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => _.Z.hasPendingUsage() && m.Z.hasLoaded(T.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!_.Z.hasPendingUsage()) m.Z.hasLoaded(T.yP.FRECENCY_AND_FAVORITES_SETTINGS) && !o().isEmpty(_.Z.playedSoundHistory) && ((e.playedSoundFrecency = s.pL.create()), (e.playedSoundFrecency.playedSounds = (0, I.tU)(_.Z.playedSoundHistory, 100)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => u.ZP.hasPendingUsage() && m.Z.hasLoaded(T.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!u.ZP.hasPendingUsage()) m.Z.hasLoaded(T.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.applicationCommandFrecency = s.YI.create()), (e.applicationCommandFrecency.applicationCommands = (0, I.tU)(u.ZP.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => c.Z.hasPendingUsage() && m.Z.hasLoaded(T.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!c.Z.hasPendingUsage()) m.Z.hasLoaded(T.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.applicationFrecency = s.UY.create()), (e.applicationFrecency.applications = (0, I.tU)(c.Z.getApplicationFrecencyWithoutLoadingLatest().usageHistory, g.yP)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => f.Z.hasPendingUsage() && m.Z.hasLoaded(T.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!f.Z.hasPendingUsage()) m.Z.hasLoaded(T.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.guildAndChannelFrecency = s.lG.create()), (e.guildAndChannelFrecency.guildAndChannels = (0, I.tU)(f.Z.frecencyWithoutFetchingLatest.usageHistory, f.C)));
                }
            });
    }
    constructor(...e) {
        super(...e),
            S(this, 'actions', {
                POST_CONNECTION_OPEN: C,
                CONNECTION_RESUMED: C,
                CONNECTION_CLOSED: b,
                APP_STATE_UPDATE: y
            });
    }
}
function C() {
    (O = !0), D(A, !0);
}
function y(e) {
    O && 'active' !== e.state && (clearTimeout(N), (N = null), L(!1));
}
function b() {
    O && (clearTimeout(N), (N = null), L(!1));
}
async function L(e) {
    D(v, !1),
        !m.Z.hasLoaded(T.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (E.Z.hasPendingUsage() || d.ZP.hasPendingUsage() || u.ZP.hasPendingUsage() || c.Z.hasPendingUsage() || (f.Z.hasPendingUsage() && !e)) && ((0, p.T6)(), await p.DZ.loadIfNecessary()),
        o().forEach(p.aj, (e) => {
            e.markDirtyIfHasPendingChange();
        });
}
function D(e, t) {
    null != N && clearTimeout(N), (N = setTimeout(() => L(t), e));
}
t.Z = new R();
