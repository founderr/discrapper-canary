n.d(t, {
    W: function () {
        return o;
    },
    l: function () {
        return a;
    }
});
var r = n(430824),
    i = n(689938);
let a = (e) => {
        switch (e) {
            case 'home':
            case 'guide':
                return i.Z.Messages.SERVER_GUIDE;
            case 'browse':
                return i.Z.Messages.CHANNEL_BROWSER_TITLE;
            case 'customize':
                return i.Z.Messages.CHANNELS_AND_ROLES;
            case 'linked-roles':
                return i.Z.Messages.CONNECTIONS_ROLES_CHANNEL_NAME;
        }
        return null;
    },
    o = (e, t, n) => {
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
