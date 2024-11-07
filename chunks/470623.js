n.d(t, {
    AF: function () {
        return g;
    },
    NU: function () {
        return v;
    },
    oL: function () {
        return p;
    },
    xH: function () {
        return f;
    }
}),
    n(47120);
var i = n(905837),
    o = n(588744),
    a = n(731965),
    s = n(430742),
    l = n(752305),
    r = n(592125),
    c = n(703558),
    d = n(883429),
    u = n(228392);
function h(e, t, n) {
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
class m {
    constructor(e, t, n) {
        var i, o, m;
        h(this, 'channelId', void 0),
            h(this, '_set', void 0),
            h(this, 'get', void 0),
            h(this, 'editorHeight', void 0),
            h(this, 'editorAdditionRowHeight', void 0),
            h(this, 'listViewCardHeights', void 0),
            h(this, 'cardHeightVersion', void 0),
            h(this, 'nameError', void 0),
            h(this, 'messageError', void 0),
            h(this, 'appliedTags', void 0),
            h(this, 'popoutOpen', void 0),
            h(this, 'guidelinesOpen', void 0),
            h(this, 'previewing', void 0),
            h(this, 'onboardingExpanded', void 0),
            h(this, 'submitting', void 0),
            h(this, 'formOpen', void 0),
            h(this, 'name', void 0),
            h(this, 'textAreaState', void 0),
            h(this, 'hasClickedForm', void 0),
            h(this, 'titleFocused', void 0),
            h(this, 'bodyFocused', void 0),
            h(this, 'set', void 0),
            h(this, 'setEditorHeight', void 0),
            h(this, 'setEditorAdditionRowHeight', void 0),
            h(this, 'setCardHeight', void 0),
            h(this, 'setNameError', void 0),
            h(this, 'setMessageError', void 0),
            h(this, 'toggleAppliedTag', void 0),
            h(this, 'setPopoutOpen', void 0),
            h(this, 'setGuidelinesOpen', void 0),
            h(this, 'setPreviewing', void 0),
            h(this, 'setSubmitting', void 0),
            h(this, 'setFormOpen', void 0),
            h(this, 'setOnboardingExpanded', void 0),
            h(this, 'setTitleFocused', void 0),
            h(this, 'setBodyFocused', void 0),
            h(this, 'setName', void 0),
            h(this, 'setTextAreaState', void 0),
            h(this, 'setHasClickedForm', void 0),
            h(this, 'resetFormState', void 0),
            h(this, 'setFormOpenFromUserAction', void 0),
            (this.channelId = e),
            (this._set = t),
            (this.get = n),
            (this.editorHeight = 64),
            (this.editorAdditionRowHeight = 0),
            (this.listViewCardHeights = {}),
            (this.cardHeightVersion = 0),
            (this.nameError = null),
            (this.messageError = null),
            (this.appliedTags = new Set()),
            (this.popoutOpen = !1),
            (this.guidelinesOpen = !1),
            (this.previewing = !1),
            (this.onboardingExpanded = !1),
            (this.submitting = !1),
            (this.formOpen = !1),
            (this.name = ''),
            (this.textAreaState = (0, l.eK)('')),
            (this.hasClickedForm = !1),
            (this.titleFocused = !1),
            (this.bodyFocused = !1),
            (this.set = (e) => {
                (0, a.j)(() => this._set(e));
            }),
            (this.setEditorHeight = (e) => {
                this.set({ editorHeight: e });
            }),
            (this.setEditorAdditionRowHeight = (e) => {
                this.set({ editorAdditionRowHeight: e });
            }),
            (this.setCardHeight = (e, t) => {
                let { listViewCardHeights: n, cardHeightVersion: i } = this.get();
                n[e] !== t && ((n[e] = t), this.set({ cardHeightVersion: i + 1 }));
            }),
            (this.setNameError = (e) => {
                this.set({ nameError: e });
            }),
            (this.setMessageError = (e) => {
                this.set({ messageError: e });
            }),
            (this.toggleAppliedTag = (e) => {
                let { appliedTags: t } = this.get();
                (t = new Set(t)).has(e) ? t.delete(e) : t.add(e), this.set({ appliedTags: t }), s.Z.changeThreadSettings(this.channelId, { appliedTags: t });
            }),
            (this.setPopoutOpen = (e) => {
                this.set({ popoutOpen: e });
            }),
            (this.setGuidelinesOpen = (e) => {
                this.set({ guidelinesOpen: e });
            }),
            (this.setPreviewing = (e) => {
                this.set({ previewing: e });
            }),
            (this.setSubmitting = (e) => {
                this.set({ submitting: e });
            }),
            (this.setFormOpen = (e) => {
                this.set({ formOpen: e }), d.Z.clearForumSearch(this.channelId);
            }),
            (this.setOnboardingExpanded = (e) => {
                this.set({ onboardingExpanded: e });
            }),
            (this.setTitleFocused = (e) => {
                this.set({ titleFocused: e });
            }),
            (this.setBodyFocused = (e) => {
                this.set({ bodyFocused: e });
            }),
            (this.setName = (e) => {
                this.set({ name: e }), s.Z.changeThreadSettings(this.channelId, { name: e });
            }),
            (this.setTextAreaState = (e) => {
                this.set({ textAreaState: e }), s.Z.saveDraft(this.channelId, e.textValue, c.d.FirstThreadMessage);
            }),
            (this.setHasClickedForm = (e) => {
                this.set({ hasClickedForm: e });
            }),
            (this.resetFormState = () => {
                let e = r.Z.getChannel(this.channelId),
                    t = null == e ? '' : null == e.template ? '' : e.template.trim();
                this.set({
                    name: '',
                    textAreaState: (0, l.eK)(t),
                    appliedTags: new Set(),
                    hasClickedForm: !1
                }),
                    d.Z.clearForumSearch(this.channelId);
            }),
            (this.setFormOpenFromUserAction = () => {
                if (this.hasClickedForm) return;
                let e = r.Z.getChannel(this.channelId);
                null != e &&
                    (0, u.HR)({
                        guildId: e.guild_id,
                        channelId: this.channelId
                    }),
                    this.set({
                        hasClickedForm: !0,
                        formOpen: !0
                    }),
                    d.Z.clearForumSearch(this.channelId);
            });
        let p = r.Z.getChannel(e);
        if (null == p) return;
        let f = null !== (i = c.Z.getThreadSettings(p.id)) && void 0 !== i ? i : {},
            g = null == p.template ? '' : p.template.trim(),
            v = c.Z.getDraft(p.id, c.d.FirstThreadMessage),
            b = (0, l.eK)(null != v && '' !== v.trim() ? v : g);
        (this.name = null !== (o = f.name) && void 0 !== o ? o : ''), (m = new Set(f.appliedTags)), (this.appliedTags = void 0 !== m ? m : new Set()), (this.formOpen = this.name.length > 0), (this.textAreaState = b);
    }
}
let { Provider: p, useStore: f, useStoreApi: g } = (0, o.Z)();
function v(e) {
    return (0, i.ZP)((t, n) => new m(e.id, t, n));
}
