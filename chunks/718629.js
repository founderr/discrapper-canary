var n = t(570140),
    a = t(668781),
    i = t(881052),
    r = t(352954),
    o = t(630759),
    l = t(651941),
    c = t(760373),
    d = t(689938);
async function _(e) {
    if (e) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: e
        });
        try {
            await (0, o.om)(c.GB);
        } catch (t) {
            var s;
            let e = new i.Hx(t);
            n.Z.dispatch({
                type: 'SECURE_FRAMES_SETTINGS_UPDATE',
                persistentCodesEnabled: !1
            }),
                a.Z.show({
                    title: d.Z.Messages.ERROR_GENERIC_TITLE,
                    body: null !== (s = e.getAnyErrorMessage()) && void 0 !== s ? s : d.Z.Messages.GENERIC_ERROR_BODY
                });
        }
    } else {
        let s = () => {
            n.Z.dispatch({
                type: 'SECURE_FRAMES_SETTINGS_UPDATE',
                persistentCodesEnabled: e
            }),
                n.Z.dispatch({ type: 'SECURE_FRAMES_ALL_VERIFIED_KEYS_DELETE' });
        };
        l.Z.getUserIds().length > 0
            ? r.Z.openSecureFramesUpdateConfirmation({
                  title: d.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_TITLE,
                  subtitle: d.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_SUBTITLE,
                  onConfirm: s
              })
            : s();
    }
}
s.Z = {
    updatePersistentCodesEnabled: _,
    addCurrentUserUploadedKeyVersionCached: function (e) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_UPLOAD_PUBLIC_KEY_SUCCESS',
            keyVersion: e
        });
    },
    createVerifiedKey: function (e, s) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_CREATE',
            userId: e,
            key: s
        });
    },
    deleteVerifiedKey: function (e, s) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_DELETE',
            userId: e,
            serializedKey: s
        });
    },
    deleteAllUserVerifiedKeys: function (e) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE',
            userId: e
        });
    },
    createSecureFramesTransientKey: function (e, s) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_CREATE',
            userId: e,
            key: s
        });
    },
    deleteSecureFramesTransientKey: function (e) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_DELETE',
            userId: e
        });
    }
};
