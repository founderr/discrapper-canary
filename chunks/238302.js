r.d(n, {
    Kq: function () {
        return o;
    },
    Mo: function () {
        return l;
    },
    kj: function () {
        return u;
    },
    xs: function () {
        return s;
    },
    zO: function () {
        return a;
    }
});
var i = r(570140);
let a = (e) => {
        i.Z.dispatch({
            type: 'UPDATE_BACKGROUND_GRADIENT_PRESET',
            presetId: e
        });
    },
    s = () => {
        i.Z.dispatch({
            type: 'UPDATE_BACKGROUND_GRADIENT_PRESET',
            presetId: null
        });
    },
    o = () => {
        i.Z.dispatch({ type: 'CLIENT_THEMES_EDITOR_OPEN' });
    },
    l = () => {
        i.Z.dispatch({ type: 'CLIENT_THEMES_EDITOR_CLOSE' });
    },
    u = () => {
        i.Z.dispatch({ type: 'RESET_PREVIEW_CLIENT_THEME' });
    };
