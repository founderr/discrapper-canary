n.d(t, {
    m: function () {
        return I;
    }
});
var r = n(951953);
var i = n(970173);
var a = n(520712);
var o = n(268111);
var s = n(941497);
var l = n(32026);
var u = n(480839);
var c = n(744285);
var d = n(492257);
var _ = n(873817);
function E(e, t, n) {
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
let f = new (n(259443).Y)('RenderingContextWebGL'),
    h = '\nattribute vec4 position;\nattribute vec2 texcoord;\nuniform mat4 transform;\nvarying vec2 out_texcoord;\n\nvoid main() {\n   gl_Position = transform * position;\n   out_texcoord = texcoord;\n}\n',
    p = '\nprecision mediump float;\n\nvarying vec2 out_texcoord;\nuniform sampler2D texture;\n\nvoid main() {\n   gl_FragColor = texture2D(texture, out_texcoord);\n}\n';
class m {
    static create(e) {
        if (null == e) return null;
        let t = this.createShader(e, e.VERTEX_SHADER, h),
            n = this.createShader(e, e.FRAGMENT_SHADER, p);
        if (null == t || null == n) return null;
        let r = this.createProgram(e, t, n);
        if (null == r) return null;
        let i = e.getAttribLocation(r, 'position'),
            a = e.getAttribLocation(r, 'texcoord');
        if (-1 === i || -1 === a) return null;
        let o = e.getUniformLocation(r, 'transform'),
            s = e.getUniformLocation(r, 'texture');
        if (null == o || null == s) return null;
        let l = e.createBuffer();
        if (null == l) return null;
        e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]), e.STATIC_DRAW);
        let u = e.createTexture();
        return null == u
            ? null
            : new m({
                  gl: e,
                  program: r,
                  positionLoc: i,
                  texcoordLoc: a,
                  transformLoc: o,
                  textureLoc: s,
                  vertexBuffer: l,
                  texture: u
              });
    }
    static createShader(e, t, n) {
        let r = e.createShader(t);
        if (null == r) return null;
        if ((e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS))) {
            f.warn('Failed to compile shader!');
            let t = e.getShaderInfoLog(r);
            return null != t && f.log(t), e.deleteShader(r), null;
        }
        return r;
    }
    static createProgram(e, t, n) {
        if (null == t || null == n) return null;
        let r = e.createProgram();
        if (null == r) return null;
        if ((e.attachShader(r, t), e.attachShader(r, n), e.linkProgram(r), !e.getProgramParameter(r, e.LINK_STATUS))) {
            f.warn('Failed to link program!');
            let t = e.getProgramInfoLog(r);
            return null != t && f.log(t), e.deleteProgram(r), null;
        }
        return r;
    }
    render(e) {
        if (null == e) return;
        let t = e.width,
            n = e.height,
            r = this.gl;
        r.bindTexture(r.TEXTURE_2D, this.texture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, t, n, 0, r.RGBA, r.UNSIGNED_BYTE, e.data), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.viewport(0, 0, t, n), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT), r.useProgram(this.program), r.bindBuffer(r.ARRAY_BUFFER, this.vertexBuffer), r.enableVertexAttribArray(this.positionLoc), r.vertexAttribPointer(this.positionLoc, 2, r.FLOAT, !1, 0, 0), r.enableVertexAttribArray(this.texcoordLoc), r.vertexAttribPointer(this.texcoordLoc, 2, r.FLOAT, !1, 0, 0), r.uniformMatrix4fv(this.transformLoc, !1, this.transform), r.uniform1i(this.textureLoc, 0), r.drawArrays(r.TRIANGLES, 0, 6);
    }
    constructor({ gl: e, program: t, positionLoc: n, texcoordLoc: r, transformLoc: i, textureLoc: a, vertexBuffer: o, texture: s }) {
        E(this, 'transform', new Float32Array([2, 0, 0, 0, 0, -2, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1])), E(this, 'gl', void 0), E(this, 'program', void 0), E(this, 'positionLoc', void 0), E(this, 'texcoordLoc', void 0), E(this, 'transformLoc', void 0), E(this, 'textureLoc', void 0), E(this, 'vertexBuffer', void 0), E(this, 'texture', void 0), (this.gl = e), (this.program = t), (this.positionLoc = n), (this.texcoordLoc = r), (this.transformLoc = i), (this.textureLoc = a), (this.vertexBuffer = o), (this.texture = s);
    }
}
function I(e) {
    let t = e.getContext('webgl2');
    return null == t ? null : m.create(t);
}
