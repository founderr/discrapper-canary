n.d(t, {
    H: function () {
        return I;
    },
    v: function () {
        return T;
    }
});
var r = n(47120);
var i = n(512722),
    a = n.n(i),
    o = n(652874),
    s = n(313361),
    l = n(683860),
    u = n(731965),
    c = n(442837),
    d = n(592125),
    _ = n(559241);
function E(e, t, n) {
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
let f = new Set(),
    h = {
        layoutType: s.X.LIST,
        sortOrder: l.z.CREATION_DATE,
        tagFilter: f,
        scrollPosition: 0
    };
class p {
    constructor(e, t) {
        E(this, 'set', void 0),
            E(this, 'get', void 0),
            E(this, 'channelStates', void 0),
            E(this, 'setChannelState', void 0),
            E(this, 'getChannelState', void 0),
            E(this, 'toggleTagFilter', void 0),
            E(this, 'setTagFilter', void 0),
            E(this, 'setSortOrder', void 0),
            E(this, 'setLayoutType', void 0),
            E(this, 'setScrollPosition', void 0),
            (this.set = e),
            (this.get = t),
            (this.channelStates = {}),
            (this.setChannelState = (e, t) => {
                let n = this.get(),
                    r = this.getChannelState(e),
                    i = { ...n.channelStates };
                (i[e] = {
                    ...r,
                    ...t
                }),
                    (0, u.j)(() => this.set({ channelStates: i }));
            }),
            (this.getChannelState = (e) => {
                if (null == e) return h;
                let { channelStates: t } = this.get(),
                    n = t[e];
                if (null == n) {
                    let t = d.Z.getChannel(e);
                    a()(null != t, '[Forum Channel Store] The channel should not be missing.'),
                        (n = {
                            layoutType: t.getDefaultLayout(),
                            sortOrder: t.getDefaultSortOrder(),
                            tagFilter: f,
                            scrollPosition: 0
                        });
                }
                return n;
            }),
            (this.toggleTagFilter = (e, t) => {
                let n = new Set(this.getChannelState(e).tagFilter);
                n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n);
            }),
            (this.setTagFilter = (e, t) => {
                this.setChannelState(e, { tagFilter: t }), _.Z.setFilterTagIds(t);
            }),
            (this.setSortOrder = (e, t) => {
                this.setChannelState(e, { sortOrder: t }), _.Z.setSortOrder(t);
            }),
            (this.setLayoutType = (e, t) => {
                this.setChannelState(e, { layoutType: t }), _.Z.setLayout(t);
            }),
            (this.setScrollPosition = (e, t) => {
                this.setChannelState(e, { scrollPosition: t });
            });
    }
}
let m = (0, o.Z)((e, t) => new p(e, t)),
    I = (e) => {
        let t = m();
        return null == (0, c.e7)([d.Z], () => d.Z.getChannel(e)) ? h : t.getChannelState(e);
    },
    T = () => m;
