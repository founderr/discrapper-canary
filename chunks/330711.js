var i = r(973361),
    a = r(627420);
r(211604);
let s = new a.ZP({
    initialLocale: i.parse(document.cookie).locale,
    getMessages: (e) => r(292516)('./'.concat(e)),
    getLanguages: () => r(34859)
});
s.addListener('locale', (e) => {
    document.cookie = 'locale='.concat(e, ';path=/');
}),
    (n.Z = s);
