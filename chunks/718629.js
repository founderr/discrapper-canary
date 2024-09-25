var r = n(570140),
    E = n(668781),
    i = n(287734),
    a = n(881052),
    u = n(314897),
    o = n(592125),
    c = n(979651),
    s = n(352954),
    _ = n(630759),
    l = n(760373),
    f = n(981631),
    d = n(689938);
async function S(e, t) {
    if (e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: e
        });
        try {
            await (0, _.om)(l.GB), null == t || t();
        } catch (t) {
            var n;
            let e = new a.Hx(t);
            r.Z.dispatch({
                type: 'SECURE_FRAMES_SETTINGS_UPDATE',
                persistentCodesEnabled: !1
            }),
                E.Z.show({
                    title: d.Z.Messages.ERROR_GENERIC_TITLE,
                    body: null !== (n = e.getAnyErrorMessage()) && void 0 !== n ? n : d.Z.Messages.GENERIC_ERROR_BODY
                });
        }
    } else
        r.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: e
        }),
            null == t || t();
}
async function I(e) {
    let t = (function () {
        let e = c.Z.getVoiceStateForUser(u.default.getId()),
            t = o.Z.getChannel(null == e ? void 0 : e.channelId);
        return u.default.getSessionId() === (null == e ? void 0 : e.sessionId) && null != t && t.type !== f.d4z.GUILD_STAGE_VOICE ? t.id : null;
    })();
    null != t
        ? s.Z.openSecureFramesUpdateConfirmation({
              title: e ? d.Z.Messages.E2EE_ENABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_TITLE : d.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_TITLE,
              subtitle: e ? d.Z.Messages.E2EE_ENABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_SUBTITLE : d.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_SUBTITLE,
              confirmText: d.Z.Messages.E2EE_PERSISTENT_KEYS_RECONNECT_CONFIRM,
              onConfirm: async () => {
                  await S(e, () => {
                      i.default.disconnect(), i.default.selectVoiceChannel(t);
                  });
              }
          })
        : await S(e);
}
t.Z = {
    clearUploadedKeyVersions: function () {
        r.Z.dispatch({ type: 'SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR' });
    },
    updatePersistentCodesEnabled: I,
    addUploadedKeyVersion: function (e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD',
            keyVersion: e
        });
    },
    createSecureFramesVerifiedKey: function (e, t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_CREATE',
            userId: e,
            key: t
        });
    },
    deleteSecureFramesVerifiedKey: function (e, t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_DELETE',
            userId: e,
            serializedKey: t
        });
    },
    deleteSecureFramesUserVerifiedKeys: function (e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE',
            userId: e
        });
    },
    createSecureFramesTransientKey: function (e, t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_CREATE',
            userId: e,
            key: t
        });
    },
    deleteSecureFramesTransientKey: function (e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_DELETE',
            userId: e
        });
    }
};
