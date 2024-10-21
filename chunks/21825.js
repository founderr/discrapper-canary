n.d(t, {
    S: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var s = n(997638),
    a = n(113570),
    l = n(482641),
    r = n(613725);
let o = Object.freeze({
        'voice-conversations': {
            popoutPosition: 'right',
            highPriority: !0,
            textAlign: s.iu.CENTER,
            media: () => (0, i.jsx)(l.Z, {})
        },
        'writing-messages': {
            popoutPosition: 'top',
            highPriority: !0,
            textAlign: s.iu.CENTER,
            spacing: 10,
            media: () => (0, i.jsx)(r.Z, {})
        },
        'direct-messages': { popoutPosition: 'right' },
        'create-first-server': {
            popoutPosition: 'right',
            highPriority: !0
        },
        'organize-by-topic': {
            popoutPosition: 'right',
            textAlign: s.iu.CENTER,
            spacing: 8,
            media: () => (0, i.jsx)(a.Z, {})
        },
        'instant-invite': {
            popoutPosition: 'right',
            spacing: 24,
            highPriority: !0
        },
        'whos-online': {
            spacing: 16,
            popoutPosition: 'left'
        },
        'server-settings': {
            popoutPosition: 'bottom',
            spacing: 10
        },
        'friends-list': {
            spacing: 8,
            popoutPosition: 'right'
        },
        'create-more-servers': {
            spacing: 8,
            popoutPosition: 'right'
        }
    }),
    c = (e) => (e in o ? o[e] : null);
