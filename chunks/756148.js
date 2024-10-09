class n {
    getSiteKey(e) {
        return null != e ? e : 'production' === window.GLOBAL_ENV.PROJECT_ENV ? '6LeYqFcqAAAAAD6iZesmNgVulsO4PkpBdr6NVG6M' : '6LdtfVMqAAAAAMurhtf2pDhK0oqD4eLqeQPh025y';
    }
    loadRecaptchaScript(e) {
        let t = document.createElement('script');
        (t.src = 'https://www.google.com/recaptcha/enterprise.js?render='.concat(this.getSiteKey(e))), (t.async = !0), (t.defer = !0), document.body.appendChild(t);
    }
    constructor(e) {
        this.loadRecaptchaScript(e);
    }
}
t.Z = {
    instance: null,
    init(e) {
        null == this.instance && (this.instance = new n(e));
    }
};
