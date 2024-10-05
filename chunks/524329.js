E.d(_, {
    Es: function () {
        return o;
    },
    RM: function () {
        return a;
    },
    VP: function () {
        return l;
    },
    Xb: function () {
        return T;
    },
    sm: function () {
        return I;
    },
    y0: function () {
        return r;
    }
});
var s = E(544891),
    n = E(570140),
    t = E(981631);
let r = function (e) {
        let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        n.Z.dispatch({
            type: 'WELCOME_SCREEN_VIEW',
            guildId: e,
            isLurking: _
        });
    },
    a = async (e) => {
        n.Z.dispatch({ type: 'WELCOME_SCREEN_FETCH_START' });
        try {
            let _ = await s.tn.get({
                url: t.ANM.GUILD_WELCOME_SCREEN(e),
                oldFormErrors: !0
            });
            return (
                n.Z.dispatch({
                    type: 'WELCOME_SCREEN_FETCH_SUCCESS',
                    guildId: e,
                    welcomeScreen: _.body
                }),
                _.body
            );
        } catch (e) {
            n.Z.dispatch({ type: 'WELCOME_SCREEN_FETCH_FAIL' });
        }
    },
    T = () => {
        n.Z.dispatch({ type: 'WELCOME_SCREEN_SETTINGS_RESET' });
    },
    I = () => {
        n.Z.dispatch({ type: 'WELCOME_SCREEN_SETTINGS_CLEAR' });
    },
    l = (e) => {
        n.Z.dispatch({
            type: 'WELCOME_SCREEN_SETTINGS_UPDATE',
            settings: e
        });
    },
    o = async (e, _) => {
        n.Z.dispatch({ type: 'WELCOME_SCREEN_SUBMIT' });
        try {
            let E = await s.tn.patch({
                url: t.ANM.GUILD_WELCOME_SCREEN(e),
                body: {
                    description: _.description,
                    welcome_channels: _.channels,
                    enabled: _.enabled
                },
                oldFormErrors: !0
            });
            n.Z.dispatch({
                type: 'WELCOME_SCREEN_SUBMIT_SUCCESS',
                guildId: e,
                welcomeScreen: E.body
            });
        } catch (e) {
            n.Z.dispatch({ type: 'WELCOME_SCREEN_SUBMIT_FAILURE' });
        }
    };
