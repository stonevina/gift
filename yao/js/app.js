 /**
 * @author iXieMin
 */
$(function() {
    function M(a, b) {
        var c = E.clone();
        c.x = a, c.y = b, c.rotation = Math.random() * 360, c.alpha = 0, c.scaleX = c.scaleY = Math.random() + .4, c.compositeOperation = "lighter", c.gotoAndPlay(Math.random() * 13 | 0), J.addChild(c)
    }
    function fb() {
        createjs.Ticker.setFPS(30)
    }
    function hb() {
        createjs.Ticker.setFPS(80)
    }
    function ib() {
        createjs.Ticker.setFPS(500)
    }
    function jb() {
        d.update()
    }
    var a = $("#myCanvas"), b = a.get(0);
    $(window);
    var d = new createjs.Stage(b), e = new createjs.Shape((new createjs.Graphics).beginFill("#3D6E99").drawRect(0, 0, b.width + 1, b.height));
    e.alpha = .25, d.addChild(e), d.autoClear = !1;
    var f = new createjs.Container, g = new createjs.Text("我可以等", "36px 微软雅黑", "#fff");
    g.x = 100, g.y = 80, f.addChild(g);
    var h = new createjs.Text("1", "bold 35px Josefin Slab", "#fff");
    h.x = 581, h.y = 80, f.addChild(h);
    var i = new createjs.Text("3", "bold 35px Josefin Slab", "#fff");
    i.x = 579, i.y = 60, i.alpha = 0, f.addChild(i);
    var j = new createjs.Text("6", "bold 200px Josefin Slab", "#fff");
    j.x = 530, j.y = 10, j.alpha = 0, f.addChild(j);
    var k = new createjs.Text(" years.", "35px Josefin Slab", "#fff");
    k.x = 600, k.y = 80, f.addChild(k), d.addChild(f), createjs.Tween.get(h).wait(2e3).to({alpha: 0}, 500).to({text: 2}).wait(600).to({alpha: 1}, 500).wait(500).call(ib).to({y: 598,x: 579 + Math.random(-5, 5),rotation: Math.random(70, 100)}, 3e3, createjs.Ease.bounceOut).call(fb).to({alpha: 0}, 5e3), createjs.Tween.get(i).wait(6e3).to({y: 80,alpha: 1}, 1e3).wait(800).to({y: 180,alpha: 0}, 1e3).to({text: 4,x: 560,y: 80}).wait(500).to({x: 579,alpha: 1}, 1e3).wait(800).to({x: 610,alpha: 0}, 1e3).to({text: 5,x: 590,y: 90,scaleX: 0,scaleY: 0}).wait(500).to({x: 579,y: 80,scaleX: 1,scaleY: 1,alpha: 1}, 500).wait(1300).to({alpha: 0}), createjs.Tween.get(j).wait(14e3).to({alpha: .6}, 100, createjs.Ease.quintIn).to({x: 579,y: 80,scaleX: .18,scaleY: .18,color: "#fa67be",alpha: 1}, 300, createjs.Ease.circInOut).call(hb);
    var l = new createjs.Container, m = new createjs.Text("我想大声说：", "35px 微软雅黑", "#fff");
    m.x = 420, m.y = 130, m.alpha = 0, l.addChild(m);
    var n = new createjs.Text("your tolerance", "35px Josefin Slab", "#fff");
    //n.x = 598, n.y = 200, n.alpha = 0, l.addChild(n);
    var o = new createjs.Text("and", "35px Josefin Slab", "#fff");
    //o.x = 770, o.y = 290, o.alpha = 0, l.addChild(o);
    var p = new createjs.Text("your precious love", "35px Josefin Slab", "#fff");
    //p.x = 520, p.y = 360, p.alpha = 0, l.addChild(p);
    var q = new createjs.Text("over these 6 years.", "35px Josefin Slab", "#fff");
    /*q.x = 741, q.y = 430, q.alpha = 0, l.addChild(q), */d.addChild(l), createjs.Tween.get(m).wait(16e3).to({y: 150,alpha: 1}, 1e3), createjs.Tween.get(n).wait(18500).to({x: 598,y: 220,alpha: 1}, 1e3, createjs.Ease.circOut), createjs.Tween.get(o).wait(21e3).to({x: 750,alpha: 1}, 1e3, createjs.Ease.circOut), createjs.Tween.get(p).wait(23500).to({x: 540,alpha: 1}, 1e3), createjs.Tween.get(q).wait(26e3).to({alpha: 1}, 2e3).call(fb);
    var r = 18000;
    createjs.Tween.get(f).wait(r).to({alpha: .08}, 11500), createjs.Tween.get(l).wait(r).to({alpha: .08}, 11500);
    for (var v, w, s = new createjs.Container, t = ["#42a8cb", "#ee823d", "#cb9bce", "#a8a9a8", "#3b8d3a", "#1e4484", "#c0000b"], u = [9, 10, 11, 12, 13], x = 0, y = 0, z = 0; 19 > z; z++) {
        var A = new createjs.Shape, B = A.graphics;
        B.beginFill(t[Math.random(0, 6)]), 11 > z ? (v = 180 + Math.random(-5, 5), w = 220 + x * 12 + Math.random(-3, 3), A.x = v, A.y = w, x++) : (v = 180 + y * 12 + Math.random(-3, 3), w = 350 + Math.random(-4, 4), A.x = v, A.y = w, y++), B.drawCircle(v, w, u[Math.random(0, 4)]), B.endFill(), A.alpha = Math.random(0, .7, 2), A.scaleX = A.scaleY = 0, s.addChild(A)
    }
    d.addChild(s);
    for (var C = s.getNumChildren(), D = r + 180 * C, z = 0; C > z; z++)
        createjs.Tween.get(s.getChildAt(z)).wait(r + 180 * z).to({scaleX: 1,scaleY: 1,x: 0,y: 0}, 180, createjs.Ease.elasticOut);
    var E, F, G, H = Math.PI * 2 / 50, I = Math.PI, J = new createjs.Container, K = new Image;
    K.src = "images/sparkle_21x23.png";
    var L = {images: [K],frames: {width: 21,height: 23,regX: 10,regY: 11}};
    E = new createjs.BitmapAnimation(new createjs.SpriteSheet(L));
    for (var z = 0; 50 > z; z++)
        I += H, F = 435 + 5 * 16 * Math.pow(Math.sin(I), 3), G = 260 - 5 * (13 * Math.cos(I) - 5 * Math.cos(2 * I) - 2 * Math.cos(3 * I) - Math.cos(4 * I)), M(F, G);
    d.addChild(J);
    for (var N = J.getNumChildren(), O = D + 80 * N, z = 0; N > z; z++)
        createjs.Tween.get(J.getChildAt(z)).wait(D + 80 * z).to({alpha: Math.random() * .5 + .2}, 80, createjs.Ease.elasticOut);
    for (var S, T, U, P = new createjs.Container, Q = ["#42a8cb", "#ee823d", "#cb9bce", "#a8a9a8", "#3b8d3a", "#1e4484", "#c0000b"], R = [12, 13, 14, 15, 16], x = 0, y = 0, z = 0; 22 > z; z++) {
        var V = new createjs.Shape, B = V.graphics;
        B.setStrokeStyle(Math.random(1, 3), "round").beginStroke(Q[Math.random(0, 6)]), 11 > z ? (T = 605 + x * 6 + Math.random(-5, 5), U = 220 + x * 12 + Math.random(-3, 3), V.x = T, V.y = U, x++) : (T = 735 - y * 6 + Math.random(-5, 5), U = 220 + y * 12 + Math.random(-3, 3), V.x = T, V.y = U, y++), S = R[Math.random(0, 4)], Math.random() > .5 ? (B.drawCircle(T, U, u[Math.random(0, 4)]), V.alpha = Math.random(0, .8, 2)) : (S = R[Math.random(0, 4)], B.drawRect(T, U, S, S), V.alpha = Math.random(0, .7, 2)), B.endFill(), V.scaleX = V.scaleY = 0, P.addChild(V)
    }
    d.addChild(P);
    for (var W = P.getNumChildren(), X = O + 3e3, z = 0; W > z; z++)
        createjs.Tween.get(P.getChildAt(z)).wait(O).to({scaleX: 1,scaleY: 1,x: 0,y: 0}, 3e3, createjs.Ease.circOut);
    for (var Y = new createjs.Container, Z = ["#42a8cb", "#ee823d", "#cb9bce", "#a8a9a8", "#3b8d3a", "#1e4484", "#c0000b"], _ = [4, 5, 7, 9], z = 0; 16 > z; z++) {
        var ab = new createjs.Shape, B = ab.graphics;
        B.setStrokeStyle(_[Math.random(0, 3)], "round").beginStroke(Z[Math.random(0, 6)]), 4 > z ? (B.moveTo(840 + Math.random(-8, 8), 220 + Math.random(-8, 8)), B.lineTo(840 + Math.random(-8, 8), 355 + Math.random(-8, 8))) : 8 > z && z > 3 ? (B.moveTo(840 + Math.random(-8, 8), 220 + Math.random(-8, 8)), B.lineTo(930 + Math.random(-8, 8), 220 + Math.random(-8, 8))) : 12 > z && z > 7 ? (B.moveTo(840 + Math.random(-8, 8), 287.5 + Math.random(-8, 8)), B.lineTo(930 + Math.random(-8, 8), 287.5 + Math.random(-8, 8))) : 16 > z && z > 11 && (B.moveTo(840 + Math.random(-8, 8), 355 + Math.random(-8, 8)), B.lineTo(930 + Math.random(-8, 8), 355 + Math.random(-8, 8))), ab.alpha = 0, Y.addChild(ab)
    }
    d.addChild(Y);
    for (var bb = Y.getNumChildren(), z = 0; bb > z; z++)
        createjs.Tween.get(Y.getChildAt(z)).wait(X + Math.random(400, 1600)).to({alpha: Math.random(0, .6, 2)}, 500, createjs.Ease.bounceOut);
    var cb = new createjs.Container, db = new createjs.Text("Waiting for you 哈哈，吓着了吧！！", "60px Courgette", "#f50");
    db.x = 210, db.y = 510, db.alpha = 0, cb.addChild(db), d.addChild(cb);  
    var eb = X + 1600 + 1e3;
    createjs.Tween.get(db).wait(eb).to({alpha: 1}, 3e3), createjs.Ticker.addListener(jb)
});
var native_random = Math.random;
Math.random = function(a, b, c) {
    if (arguments.length === 0)
        return native_random();
    arguments.length === 1 && (b = a, a = 0);
    var d = a + native_random() * (b - a);
    return c === void 0 ? Math.round(d) : d.toFixed(c)
}
