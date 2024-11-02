n.d(t, {
    W: function () {
        return s;
    },
    l: function () {
        return a;
    }
});
var r = n(430824),
    i = n(388032);
let a = (e) => {
        switch (e) {
            case 'home':
            case 'guide':
                return i.intl.string(i.t.VbpLyc);
            case 'browse':
                return i.intl.string(i.t.et6wam);
            case 'customize':
                return i.intl.string(i.t.h9mGOD);
            case 'linked-roles':
                return i.intl.string(i.t.ghtnsr);
        }
        return null;
    },
    s = (e, t, n) => {
        switch (e) {
            case 'linked-roles':
                var i;
                if (null == n) break;
                let a = r.Z.getRole(n, t);
                if (null == a || (null === (i = a.tags) || void 0 === i ? void 0 : i.guild_connections) !== null) break;
                return a.name;
        }
        return null;
    };
