r.d(n, {
    W: function () {
        return o;
    },
    l: function () {
        return s;
    }
});
var i = r(430824),
    a = r(388032);
let s = (e) => {
        switch (e) {
            case 'home':
            case 'guide':
                return a.intl.string(a.t.VbpLyc);
            case 'browse':
                return a.intl.string(a.t.et6wam);
            case 'customize':
                return a.intl.string(a.t.h9mGOD);
            case 'linked-roles':
                return a.intl.string(a.t.ghtnsr);
        }
        return null;
    },
    o = (e, n, r) => {
        switch (e) {
            case 'linked-roles':
                var a;
                if (null == r) break;
                let s = i.Z.getRole(r, n);
                if (null == s || (null === (a = s.tags) || void 0 === a ? void 0 : a.guild_connections) !== null) break;
                return s.name;
        }
        return null;
    };
