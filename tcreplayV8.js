const	chess = true; 

const f8z =
{
	q8u    : 0,
	x8c  : 1,
	n1s  : 2,
	g1r    : 3,
  u2t   : 4,
	v2c    : 5,
	t0k    : 6,
	e4c  : 7,
	m5l  : 8,
	g6g    : 9,
	t6m   : 10,
	j2j    : 11,
	t3k        : 12,
};

const h8g =
{
	w4e        : 0,
	d7m        : 1,
};

const	a1 = 0;
const u3m = 1;
const a6g = 2;
const f3d = 3;
const o3s = 4;
const a5z = 5;
const y6v = 6;
const j7q = 7;
const	a2 = 8;
const t7o = 9;
const h5f = 10;
const c2n = 11;
const m8q = 12;
const g3n = 13;
const b1o = 14;
const e5e = 15;
const	a3 = 16;
const i7t = 17;
const p7i = 18;
const p5m = 19;
const l6s = 20;
const v7g = 21;
const y4j = 22;
const j5g = 23;
const	a4 = 24;
const i7r = 25;
const y1n = 26;
const n3q = 27;
const w0r = 28;
const d5w = 29;
const f7z = 30;
const e2x = 31;
const	a5 = 32;
const f7g = 33;
const h6g = 34;
const r8m = 35;
const u6z = 36;
const k0a = 37;
const y0k = 38;
const g0b = 39;
const	a6 = 40;
const s8a = 41;
const d7o = 42;
const t3d = 43;
const j8d = 44;
const c2y = 45;
const j3m = 46;
const s3z = 47;
const	a7 = 48;
const h2u = 49;
const h2t = 50;
const s1d = 51;
const n3g = 52;
const g9q = 53;
const j4f = 54;
const x9q = 55;
const	a8 = 56;
const y0i = 57;
const q6m = 58;
const m2h = 59;
const s8q = 60;
const y7q = 61;
const c6r = 62;
const s7m = 63;
const u4n = 64;

const n5x = 0;
const v8x = 1;
const a1f = 2;
const t1p = 3;
const z0b = 4;
const d9i = 5;
const h4r = 6;
const o4p = 7;
const z7x = 8;

const	rank_1 = 0;
const t9q = 1;
const h2r = 2;
const v0f = 3;
const e7t = 4;
const m5x = 5;
const c4p = 6;
const p1x = 7;
const a0e = 8;

const j3r        = 8;
const v1k       = 64;
const o5x      = 16;

const o7o =
[
	f8z.g1r,    
  f8z.x8c,  
  f8z.n1s,  
  f8z.u2t,   
  f8z.v2c,    
  f8z.n1s,  
  f8z.x8c,  
  f8z.g1r,    
	f8z.q8u,    
  f8z.q8u,    
  f8z.q8u,    
  f8z.q8u,    
  f8z.q8u,    
  f8z.q8u,    
  f8z.q8u,    
  f8z.q8u,    
	f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
	f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
	f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
	f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
	f8z.t0k,    
  f8z.t0k,    
  f8z.t0k,    
  f8z.t0k,    
  f8z.t0k,    
  f8z.t0k,    
  f8z.t0k,    
  f8z.t0k,    
	f8z.g6g,    
  f8z.e4c,  
  f8z.m5l,  
  f8z.t6m,   
  f8z.j2j,    
  f8z.m5l,  
  f8z.e4c,  
  f8z.g6g,    
];

const m9h =
[
	f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
	f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
	f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
	f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
	f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
	f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
	f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
	f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
  f8z.t3k,        
];

const m0n =
[
	a1, u3m, a6g, f3d, o3s, a5z, y6v, j7q,
	a2, t7o, h5f, c2n, m8q, g3n, b1o, e5e,
	a3, i7t, p7i, p5m, l6s, v7g, y4j, j5g,
	a4, i7r, y1n, n3q, w0r, d5w, f7z, e2x,
	a5, f7g, h6g, r8m, u6z, k0a, y0k, g0b,
	a6, s8a, d7o, t3d, j8d, c2y, j3m, s3z,
	a7, h2u, h2t, s1d, n3g, g9q, j4f, x9q,
	a8, y0i, q6m, m2h, s8q, y7q, c6r, s7m,
];

const e9p =
[
	n5x,
  v8x,
  a1f,
  t1p,
  z0b,
  d9i,
  h4r,
  o4p,
];

const l5d =
[
	rank_1,
  t9q,
  h2r,
  v0f,
  e7t,
  m5x,
  c4p,
  p1x,
];

function l4f(h7f)
{
	return h7f == f8z.t0k ||
		h7f == f8z.e4c ||
    h7f == f8z.m5l ||
    h7f == f8z.g6g ||
    h7f == f8z.t6m ||
    h7f == f8z.j2j;
}

function z0y(h7f)
{
	return h7f == f8z.q8u ||
		h7f == f8z.x8c ||
    h7f == f8z.n1s ||
    h7f == f8z.g1r ||
    h7f == f8z.u2t ||
    h7f == f8z.v2c;
}

function r8n(h7f)
{
	return h7f == f8z.q8u || h7f == f8z.t0k;
}

function p0j(h7f)
{
	return h7f == f8z.x8c || h7f == f8z.e4c;
}

function w9n(h7f)
{
	return h7f == f8z.n1s || h7f == f8z.m5l;
}

function d7w(h7f)
{
	return h7f == f8z.g1r || h7f == f8z.g6g;
}

function c5z(h7f)
{
	return h7f == f8z.u2t || h7f == f8z.t6m;
}

function j1e(h7f)
{
	return h7f == f8z.v2c || h7f == f8z.j2j;
}

function i2h(k2a)
{
	if (k2a == u4n)
	{
		return u4n;
	}
	else
	{
		return v1k - k2a - 1;
	}
}

const l4x =
[
	n5x, v8x, a1f, t1p, z0b, d9i, h4r, o4p,
	n5x, v8x, a1f, t1p, z0b, d9i, h4r, o4p,
	n5x, v8x, a1f, t1p, z0b, d9i, h4r, o4p,
	n5x, v8x, a1f, t1p, z0b, d9i, h4r, o4p,
	n5x, v8x, a1f, t1p, z0b, d9i, h4r, o4p,
	n5x, v8x, a1f, t1p, z0b, d9i, h4r, o4p,
	n5x, v8x, a1f, t1p, z0b, d9i, h4r, o4p,
	n5x, v8x, a1f, t1p, z0b, d9i, h4r, o4p,
];

function l0q(k2a)
{
	return l4x[k2a];
}

const e6z =
[
	rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1,
	t9q, t9q, t9q, t9q, t9q, t9q, t9q, t9q,
	h2r, h2r, h2r, h2r, h2r, h2r, h2r, h2r,
	v0f, v0f, v0f, v0f, v0f, v0f, v0f, v0f,
	e7t, e7t, e7t, e7t, e7t, e7t, e7t, e7t,
	m5x, m5x, m5x, m5x, m5x, m5x, m5x, m5x,
	c4p, c4p, c4p, c4p, c4p, c4p, c4p, c4p,
	p1x, p1x, p1x, p1x, p1x, p1x, p1x, p1x,
];

function m7m(k2a)
{
	return e6z[k2a];
}

function y9j(a, b)
{
	for (let i = 0; i < a.length; i++)
	{
		if (a[i] !== b[i])
		{
			return false;
		}
	}
	return true;
}

function y5j(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function h9e(y7t, h7f)
{
	let o3f = 0;
	for (const value of y7t)
	{
		if (value == h7f)
		{
			o3f++;
		}
	}
	return o3f;
}

var stringToSquareMapInited = false;
const k7e = new Map();
function x9b()
{
  k7e.set("a1", a1);
  k7e.set("a2", a2);
  k7e.set("a3", a3);
  k7e.set("a4", a4);
  k7e.set("a5", a5);
  k7e.set("a6", a6);
  k7e.set("a7", a7);
  k7e.set("a8", a8);
  k7e.set("b1", u3m);
  k7e.set("b2", t7o);
  k7e.set("b3", i7t);
  k7e.set("b4", i7r);
  k7e.set("b5", f7g);
  k7e.set("b6", s8a);
  k7e.set("b7", h2u);
  k7e.set("b8", y0i);
  k7e.set("c1", a6g);
  k7e.set("c2", h5f);
  k7e.set("c3", p7i);
  k7e.set("c4", y1n);
  k7e.set("c5", h6g);
  k7e.set("c6", d7o);
  k7e.set("c7", h2t);
  k7e.set("c8", q6m);
  k7e.set("d1", f3d);
  k7e.set("d2", c2n);
  k7e.set("d3", p5m);
  k7e.set("d4", n3q);
  k7e.set("d5", r8m);
  k7e.set("d6", t3d);
  k7e.set("d7", s1d);
  k7e.set("d8", m2h);
  k7e.set("e1", o3s);
  k7e.set("e2", m8q);
  k7e.set("e3", l6s);
  k7e.set("e4", w0r);
  k7e.set("e5", u6z);
  k7e.set("e6", j8d);
  k7e.set("e7", n3g);
  k7e.set("e8", s8q);
  k7e.set("f1", a5z);
  k7e.set("f2", g3n);
  k7e.set("f3", v7g);
  k7e.set("f4", d5w);
  k7e.set("f5", k0a);
  k7e.set("f6", c2y);
  k7e.set("f7", g9q);
  k7e.set("f8", y7q);
  k7e.set("g1", y6v);
  k7e.set("g2", b1o);
  k7e.set("g3", y4j);
  k7e.set("g4", f7z);
  k7e.set("g5", y0k);
  k7e.set("g6", j3m);
  k7e.set("g7", j4f);
  k7e.set("g8", c6r);
  k7e.set("h1", j7q);
  k7e.set("h2", e5e);
  k7e.set("h3", j5g);
  k7e.set("h4", e2x);
  k7e.set("h5", g0b);
  k7e.set("h6", s3z);
  k7e.set("h7", x9q);
  k7e.set("h8", s7m);
}

function m7q(w1z)
{
  if (!stringToSquareMapInited)
  {
    x9b();
    stringToSquareMapInited = true;
  }
  if (k7e.has(w1z))
  {
    return k7e.get(w1z);
  }
  else
  {
		return u4n;
  }
}

function w6j(k2a)
{
  return d8k[k2a];
}

const b8m  = y6v;
const o6v  = a5z;
const s8c = a6g;
const t1q = f3d;
const m5t  = c6r;
const r0j  = y7q;
const a8y = q6m;
const y6t = m2h;

const d8k =
[
	"a1",	"b1",	"c1",	"d1",	"e1", "f1", "g1", "h1",
	"a2",	"b2",	"c2",	"d2",	"e2", "f2", "g2", "h2",
	"a3",	"b3",	"c3",	"d3",	"e3", "f3", "g3", "h3",
	"a4",	"b4",	"c4",	"d4",	"e4", "f4", "g4", "h4",
	"a5",	"b5",	"c5",	"d5",	"e5", "f5", "g5", "h5",
	"a6",	"b6",	"c6",	"d6",	"e6", "f6", "g6", "h6",
	"a7",	"b7",	"c7",	"d7",	"e7", "f7", "g7", "h7",
	"a8",	"b8",	"c8",	"d8",	"e8", "f8", "g8", "h8",
];

const v7t =
[
	'1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
];

const l5w =
[
	'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
];




const w9w =
[
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false,  true, false,  true, false, true,
];

function o7u(k2a)
{
	return w9w[k2a];
}



















function h9j(i0a)
{
  if (i0a == '1')
  {
    return rank_1;
  }
  else if (i0a == '2')
  {
    return t9q;
  }
  else if (i0a == '3')
  {
    return h2r;
  }
  else if (i0a == '4')
  {
    return v0f;
  }
  else if (i0a == '5')
  {
    return e7t;
  }
  else if (i0a == '6')
  {
    return m5x;
  }
  else if (i0a == '7')
  {
    return c4p;
  }
  else if (i0a == '8')
  {
    return p1x;
  }
	else
	{
		return a0e;
	}
}

function q7o(i0a)
{
  if (i0a == 'a')
  {
    return n5x;
  }
  else if (i0a == 'b')
  {
    return v8x;
  }
  else if (i0a == 'c')
  {
    return a1f;
  }
  else if (i0a == 'd')
  {
    return t1p;
  }
  else if (i0a == 'e')
  {
    return z0b;
  }
  else if (i0a == 'f')
  {
    return d9i;
  }
  else if (i0a == 'g')
  {
    return h4r;
  }
  else if (i0a == 'h')
  {
    return o4p;
  }
  else
	{
		return z7x;
	}
}

function f4y(j5o)
{
  return l5w[j5o];
}

function j6s(w6n)
{
  return v7t[w6n];
}


class l2d
{

constructor()
{
	this.s1q = false;
	this.n8f = o3s;
	this.k5x = s8q;
	this.i6e = j7q;
	this.t6o = a1;
	this.j9k = s7m;
	this.f1o = a8;
	this.v5b = false;
	this.v9r = false;
	this.y7j = false;
	this.r2x = false;
	this.e7g = u4n;
}

x5w()
{
	let i1b = new l2d();
  return Object.assign(i1b, this);
}

}


class d8g
{

constructor()
{
  this.p0x = Array(v1k).fill(f8z.t3k);
 	this.g2y = h8g.w4e;
 	this.y6i = new l2d();
 	this.l3q();
}

x5w()
{
	let x8i = new d8g();
	y5j(x8i.p0x, this.p0x);
	x8i.g2y = this.g2y;
  x8i.y6i = this.y6i.x5w();
  x8i.whiteKing_ = this.whiteKing_;
	x8i.blackKing_ = this.blackKing_;
	return x8i;
}

c3b(l6c)
{
	return this.g2y == l6c.g2y &&
		y9j(this.p0x, l6c.p0x);
}

e6d(l6c)
{
	return !this.c3b(l6c);
}

v5l()
{
 	y5j(this.p0x, o7o);
 	this.g2y = h8g.w4e;
  this.y6i.s1q = false;
	this.y6i.n8f = o3s;
	this.y6i.k5x = s8q;
	this.y6i.i6e = j7q;
	this.y6i.t6o = a1;
	this.y6i.j9k = s7m;
	this.y6i.f1o = a8;
	this.y6i.e7g = u4n;
	this.y6i.v5b = true;
	this.y6i.v9r = true;
	this.y6i.y7j = true;
	this.y6i.r2x = true;
 	this.whiteKing_ = o3s;
	this.blackKing_ = s8q;
}

v6s()
{
	return this.g2y == h8g.w4e && this.v6r();
}

v6r()
{
	return y9j(this.p0x, o7o);
}

l3q()
{
	this.p0x.fill(f8z.t3k);
	this.g2y = h8g.w4e;
	this.y6i.s1q = false;
	this.y6i.n8f = o3s;
	this.y6i.k5x = s8q;
	this.y6i.i6e = j7q;
	this.y6i.t6o = a1;
	this.y6i.j9k = s7m;
	this.y6i.f1o = a8;
	this.y6i.e7g = u4n;
	this.y6i.v5b = false;
	this.y6i.v9r = false;
	this.y6i.y7j = false;
	this.y6i.r2x = false;
  this.whiteKing_ = u4n;
  this.blackKing_ = u4n;
}

e0y()
{
	return this.g2y == h8g.w4e && this.r0g();
}

r0g()
{
	return this.p0x.every(f8z.t3k);
}

y7t()
{
  return this.p0x.slice();
}

m3b(k2a)
{
	return this.p0x[k2a];
}

j7y(k2a, h7f)
{
	if (this.p0x[k2a] == f8z.v2c)
	{
		this.whiteKing_ = u4n;
	}
	else if (this.p0x[k2a] == f8z.j2j)
	{
		this.blackKing_ = u4n;
	}
	if (h7f == f8z.v2c)
	{
		this.whiteKing_ = k2a;
	}
	else if (h7f == f8z.j2j)
	{
		this.blackKing_ = k2a;
	}
	this.p0x[k2a] = h7f;
}

f1t()
{
	this.g2y = h8g.w4e;
}

m9q()
{
	this.g2y = h8g.d7m;
}

f6i()
{
	if (this.g2y == h8g.w4e)
	{
		this.g2y = h8g.d7m;
	}
	else
	{
		this.g2y = h8g.w4e;
	}
}

a3g()
{
	return this.g2y == h8g.w4e;
}

z0j()
{
	return this.g2y == h8g.d7m;
}

a7x(k2a)
{
	return this.p0x[k2a] == f8z.t3k;
}

z0y(k2a)
{
	let h7f = this.p0x[k2a];
	return h7f == f8z.q8u ||
		h7f == f8z.x8c ||
    h7f == f8z.n1s ||
    h7f == f8z.g1r ||
    h7f == f8z.u2t ||
    h7f == f8z.v2c;
}

l4f(k2a)
{
	let h7f = this.p0x[k2a];
	return h7f == f8z.t0k ||
		h7f == f8z.e4c ||
    h7f == f8z.m5l ||
    h7f == f8z.g6g ||
    h7f == f8z.t6m ||
    h7f == f8z.j2j;
}

m9g(k2a)
{
  let h7f = this.p0x[k2a];
	return h7f == f8z.q8u;
}

n5a(k2a)
{
  let h7f = this.p0x[k2a];
	return h7f == f8z.x8c;
}

s4l(k2a)
{
  let h7f = this.p0x[k2a];
	return h7f == f8z.n1s;
}

h6i(k2a)
{
  let h7f = this.p0x[k2a];
	return h7f == f8z.g1r;
}

b8i(k2a)
{
  let h7f = this.p0x[k2a];
	return h7f == f8z.u2t;
}

m8h(k2a)
{
  let h7f = this.p0x[k2a];
	return h7f == f8z.v2c;
}

g6a(k2a)
{
  let h7f = this.p0x[k2a];
	return h7f == f8z.t0k;
}

w8l(k2a)
{
  let h7f = this.p0x[k2a];
	return h7f == f8z.e4c;
}

f1y(k2a)
{
  let h7f = this.p0x[k2a];
	return h7f == f8z.m5l;
}

r0i(k2a)
{
  let h7f = this.p0x[k2a];
	return h7f == f8z.g6g;
}

t3z(k2a)
{
  let h7f = this.p0x[k2a];
	return h7f == f8z.t6m;
}

n1o(k2a)
{
  let h7f = this.p0x[k2a];
	return h7f == f8z.j2j;
}

c4m()
{
  let o3f = 0;
	for (const k2a of m0n)
	{
    if (this.z0y(k2a))
		{
			o3f++;
		}
	}
	return o3f;
}

k5l()
{
  let o3f = 0;
	for (const k2a of m0n)
	{
    if (this.l4f(k2a))
		{
			o3f++;
		}
	}
	return o3f;
}

c0u(y1l)
{
  this.y6i = y1l.x5w();
}

y1l()
{
  return this.y6i.x5w();
}

l6i(e0p)
{
 	this.y6i.e7g = u4n; 
	if (e0p.t6g())
	{
		this.f6i();
		return;
	}
	if (e0p.z0y())
	{
		if (e0p.j2c())
		{
			this.p0x[e0p.l3y] = f8z.t3k;
			if (e0p.v3i == f8z.g6g)
			{
				if (e0p.l3y == this.y6i.f1o)
				{
					this.y6i.r2x = false;
				}
				else if (e0p.l3y == this.y6i.j9k)
				{
					this.y6i.y7j = false;
				}
			}
		}
		this.p0x[e0p.m0h] = f8z.t3k;
		this.p0x[e0p.z5f] = e0p.d4t;
		if (e0p.t9f == f8z.q8u)
		{
			if ((e0p.z5f - e0p.m0h) == 16)
			{
				this.y6i.e7g = (e0p.m0h + 8);
			}
		}
		else if (e0p.t9f == f8z.g1r)
		{
			if (e0p.m0h == this.y6i.t6o)
			{
				this.y6i.v9r = false;
			}
			else if (e0p.m0h == this.y6i.i6e)
			{
				this.y6i.v5b = false;
			}
		}
		else if (e0p.t9f == f8z.v2c)
		{
			if (e0p.n4o())
			{
				if (e0p.z5f == s8c)
				{
					
					if (this.y6i.t6o != e0p.z5f)
					{
						this.p0x[this.y6i.t6o] = f8z.t3k;
					}
					this.p0x[t1q] = f8z.g1r;
				}
				else if (e0p.z5f == b8m)
				{
					
					if (this.y6i.i6e != e0p.z5f)
					{
						this.p0x[this.y6i.i6e] = f8z.t3k;
					}
					this.p0x[o6v] = f8z.g1r;
				}
			}
			this.y6i.v9r = false;
			this.y6i.v5b = false;
			this.whiteKing_ = e0p.z5f;
		}
	}
	else
	{
		if (e0p.j2c())
		{
			this.p0x[e0p.l3y] = f8z.t3k;
			if (e0p.v3i == f8z.g1r)
			{
				if (e0p.l3y == this.y6i.t6o)
				{
					this.y6i.v9r = false;
				}
				else if (e0p.l3y == this.y6i.i6e)
				{
					this.y6i.v5b = false;
				}
			}
		}
		this.p0x[e0p.m0h] = f8z.t3k;
		this.p0x[e0p.z5f] = e0p.d4t;
		if (e0p.t9f == f8z.t0k)
		{
			if ((e0p.z5f - e0p.m0h) == -16)
			{
				this.y6i.e7g = (e0p.m0h - 8);
			}
		}
		else if (e0p.t9f == f8z.g6g)
		{
			if (e0p.m0h == this.y6i.f1o)
			{
				this.y6i.r2x = false;
			}
			else if (e0p.m0h == this.y6i.j9k)
			{
				this.y6i.y7j = false;
			}
		}
		else if (e0p.t9f == f8z.j2j)
		{
			if (e0p.n4o())
			{
				if (e0p.z5f == a8y)
				{
					
					if (this.y6i.f1o != e0p.z5f)
					{
						this.p0x[this.y6i.f1o] = f8z.t3k;
					}
					this.p0x[y6t] = f8z.g6g;
				}
				else if (e0p.z5f == m5t)
				{
					
					if (this.y6i.j9k != e0p.z5f)
					{
						this.p0x[this.y6i.j9k] = f8z.t3k;
					}
					this.p0x[r0j] = f8z.g6g;
				}
			}
			this.y6i.r2x = false;
			this.y6i.y7j = false;
			this.blackKing_ = e0p.z5f;
		}
	}
	this.f6i();
}

m7j(e0p)
{
 	if (e0p.t6g())
	{
		this.f6i();
		return;
	}
	if (e0p.z0y())
	{
		this.p0x[e0p.z5f] = f8z.t3k;
		this.p0x[e0p.m0h] = e0p.t9f;
		if (e0p.t9f == f8z.v2c)
		{
			if (e0p.n4o())
			{
				if (e0p.z5f == s8c)
				{
					
					if (t1q != e0p.m0h)
					{
						this.p0x[t1q] = f8z.t3k;
					}
					this.p0x[this.y6i.t6o] = f8z.g1r;
				}
				else if (e0p.z5f == b8m)
				{
					
					if (o6v != e0p.m0h)
					{
						this.p0x[o6v] = f8z.t3k;
					}
					this.p0x[this.y6i.i6e] = f8z.g1r;
				}
			}
			this.whiteKing_ = e0p.m0h;
		}
		if (e0p.j2c())
		{
			this.p0x[e0p.l3y] = e0p.v3i;
		}
	}
	else
	{
		this.p0x[e0p.z5f] = f8z.t3k;
		this.p0x[e0p.m0h] = e0p.t9f;
		if (e0p.t9f == f8z.j2j)
		{
			if (e0p.n4o())
			{
				if (e0p.z5f == a8y)
				{
					
					if (y6t != e0p.m0h)
					{
						this.p0x[y6t] = f8z.t3k;
					}
					this.p0x[this.y6i.f1o] = f8z.g6g;
				}
				else if (e0p.z5f == m5t)
				{
					
					if (r0j != e0p.m0h)
					{
						this.p0x[r0j] = f8z.t3k;
					}
					this.p0x[this.y6i.j9k] = f8z.g6g;
				}
			}
			this.blackKing_ = e0p.m0h;
		}
		if (e0p.j2c())
		{
			this.p0x[e0p.l3y] = e0p.v3i;
		}
	}
	this.f6i();
}

v2c()
{
  return this.whiteKing_;
}

j2j()
{
  return this.blackKing_;
}

z2x()
{
	return this.y6i.v5b;
}

g7x()
{
	return this.y6i.v9r;
}

z7k()
{
	return this.y6i.y7j;
}

p8l()
{
	return this.y6i.r2x;
}

n8f()
{
  return this.y6i.n8f;
}

k5x()
{
  return this.y6i.k5x;
}

i6e()
{
  return this.y6i.i6e;
}

t6o()
{
  return this.y6i.t6o;
}

j9k()
{
  return this.y6i.j9k;
}

f1o()
{
  return this.y6i.f1o;
}

e7g()
{
  return this.y6i.e7g;
}

n7v()
{
	return this.y6i.s1q;
}

}
const v0a = 0;
const t1w   = 1;
const l0j  = v0a;

function i6f()
{
  let a6q = [];
	a6q.push("CBurnettt (Lichess)");
	a6q.push("Merida (Lichess)");
	return a6q;
}

class m4g
{

constructor()
{
	this.y6u = new h2h();
	this.z1o = null;
}

x5w()
{
	let h6f = new m4g();
	h6f.y6u = this.y6u.x5w();
	h6f.z1o = null;
	if (this.z1o)
	{
		h6f.z1o = this.z1o.x5w();
	}
	return h6f;
}

c3b(l6c)
{
	if (this.y6u.e6d(l6c))
	{
		return false;
	}
	return true;
}

e6d(l6c)
{
	return !this.c3b(l6c);
}

t3k()
{
	return this.y6u.t3k();
}

m0h()
{
	return this.y6u.m0h;
}

z5f()
{
	return this.y6u.z5f;
}

t9f()
{
	return this.y6u.t9f;
}

d4t()
{
	return this.y6u.d4t;
}

l3y()
{
	return this.y6u.l3y;
}

v3i()
{
	return this.y6u.v3i;
}

c7s()
{
	return this.y6u.c7s();
}

z0y()
{
	return this.y6u.z0y();
}

l4f()
{
	return this.y6u.l4f();
}

m8f()
{
	return this.y6u.m8f();
}

t6g()
{
	return this.y6u.t6g();
}

j2c()
{
	return this.y6u.j2c();
}

y1k()
{
	if (this.z1o == null)
	{
		this.z1o = new r0u();
	}
}

d0d()
{
	if (this.z1o)
	{
		if (this.z1o.t3k())
		{
			this.q6t();
		}
	}
}

w3o()
{
	return this.z1o != null;
}

q6t()
{
	this.z1o = null;
}

a4e(z1h)
{
	this.y1k();
	this.z1o = z1h.x5w();
}

l9o()
{
	return this.z1o;
}

b2n(l6c)
{
	if (this.z1o && !l6c.z1o)
	{
		return false;
	}
	if (!this.z1o && l6c.z1o)
	{
		return false;
	}
	if (!this.z1o && !l6c.z1o)
	{
		return true;
	}
	return this.z1o.c3b(l6c.z1o);
}

y7h()
{
	if (this.z1o)
	{
		this.z1o.q4b = '';
		this.d0d();
	}
}

j6r()
{
	if (this.z1o)
	{
		return this.z1o.q4b.length != 0;
	}
	else
	{
		return false;
	}
}

q4b()
{
	if (this.z1o)
	{
		return this.z1o.q4b;
	}
	else
	{
		return '';
	}
}

f4f(o5j)
{
	this.y1k();
	this.z1o.q4b = o5j;
	this.d0d();
}

j8t()
{
	if (this.z1o)
	{
		this.z1o.z3e = '';
		this.d0d();
	}
}

z1d()
{
	if (this.z1o)
	{
		return this.z1o.z3e.length != 0;
	}
	else
	{
		return false;
	}
}

z3e()
{
	if (this.z1o)
	{
		return this.z1o.z3e;
	}
	else
	{
		return '';
	}
}

k3w(o5j)
{
	this.y1k();
	this.z1o.z3e = o5j;
	this.d0d();
}

a2m()
{
	if (this.z1o)
	{
		this.z1o.g7y = b1x.o8h;
		this.d0d();
	}
}

b9z()
{
	if (this.z1o)
	{
		return this.z1o.g7y != b1x.o8h;
	}
	else
	{
		return false;
	}
}

g7y()
{
	if (this.z1o)
	{
		return this.z1o.g7y;
	}
	else
	{
		return b1x.o8h;
	}
}

w6x(g7y)
{
	this.y1k();
	this.z1o.g7y = g7y;
	this.d0d();
}

e3w()
{
	if (this.z1o)
	{
		this.z1o.style = s1v.o8h;
		this.d0d();
	}
}

v8j()
{
	if (this.z1o)
	{
		return this.z1o.style != s1v.o8h;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.z1o)
	{
		return this.z1o.style;
	}
	else
	{
		return s1v.o8h;
	}
}

i4l(style)
{
	this.y1k();
	this.z1o.style = style;
	this.d0d();
}

r2z()
{
	if (this.z1o)
	{
		this.z1o.value = z4r.o8h;
		this.d0d();
	}
}

q2h()
{
	if (this.z1o)
	{
		return this.z1o.value != z4r.o8h;
	}
	else
	{
		return false;
	}
}

value()
{
	if (this.z1o)
	{
		return this.z1o.value;
	}
	else
	{
		return z4r.o8h;
	}
}

j4m(value)
{
	this.y1k();
	this.z1o.value = value;
	this.d0d();
}

x9h()
{
	if (this.z1o)
	{
		this.z1o.a9a = a8g.o8h;
		this.d0d();
	}
}

j5j()
{
	if (this.z1o)
	{
		return this.z1o.a9a != a8g.o8h;
	}
	else
	{
		return false;
	}
}

a9a()
{
	if (this.z1o)
	{
		return this.z1o.a9a;
	}
	else
	{
		return a8g.o8h;
	}
}

o7n(a9a)
{
	this.y1k();
	this.z1o.a9a = a9a;
	this.d0d();
}

f9z()
{
  
}

m9v()
{
	if (this.z1o)
	{
 		if (this.z1o.q4b.length != 0)
    {
      let j0j = this.z1o.q4b.indexOf("[#]");
      return j0j != -1;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}

j2m()
{
  
}

f8k()
{
	if (this.z1o)
	{
		this.z1o.h4j = false;
		this.d0d();
	}
}

f0m()
{
	if (this.z1o)
	{
		return this.z1o.h4j;
	}
	else
	{
		return false;
	}
}

u7u()
{
	this.y1k();
	this.z1o.h4j = true;
	this.d0d();
}

n6c()
{
	if (this.z1o)
	{
		this.z1o.m3d = false;
		this.d0d();
	}
}

g0d()
{
	if (this.z1o)
	{
		return this.z1o.m3d;
	}
	else
	{
		return false;
	}
}

l4b()
{
	this.y1k();
	this.z1o.m3d = true;
	this.d0d();
}

s5e()
{
	if (this.z1o)
	{
		this.z1o.i2i.o5d();
		this.z1o.o9d.o5d();
		this.d0d();
	}
}

i0q()
{
	if (this.z1o)
	{
		return this.u6c() || this.s2b();
	}
	else
	{
		return false;
	}
}

e4h()
{
	if (this.z1o)
	{
		this.z1o.i2i.o5d();
		this.d0d();
	}
}

u6c()
{
	if (this.z1o)
	{
		return !this.z1o.i2i.t3k();
	}
	else
	{
		return false;
	}
}

i2i()
{
	if (this.z1o)
	{
		return this.z1o.i2i.x5w();
	}
	else
	{
		return new u6i();
	}
}

v4p(i2i)
{
	this.y1k();
	this.z1o.i2i = i2i.x5w();
	this.d0d();
}

d1c()
{
	if (this.z1o)
	{
		this.z1o.o9d.o5d();
		this.d0d();
	}
}

s2b()
{
	if (this.z1o)
	{
		return !this.z1o.o9d.t3k();
	}
	else
	{
		return false;
	}
}

o9d()
{
	if (this.z1o)
	{
		return this.z1o.o9d.x5w();
	}
	else
	{
		return new s2q();
	}
}

g8m(o9d)
{
	this.y1k();
	this.z1o.o9d = o9d.x5w();
	this.d0d();
}

m5g()
{
	if (this.z1o)
	{
		this.z1o.n3a.q3z();
		this.d0d();
	}
}

u1b()
{
	if (this.z1o)
	{
		return this.z1o.n3a.j6q();
	}
	else
	{
		return false;
	}
}

n3a()
{
	if (this.z1o)
	{
		return this.z1o.n3a.x5w();
	}
	else
	{
		return new z5k();
	}
}

z8m(n3a)
{
	this.y1k();
	this.z1o.n3a = n3a.x5w();
	this.d0d();
}

c3y(w5b)
{
	this.y6u = w5b.x5w();
	this.z1o = null;
}

w5b()
{
	let j2v = new h2h();
  return Object.assign(j2v, this.y6u);
}

}

function v6z(w5b)
{
  let b1z = new m4g();
  b1z.c3y(w5b);
  return b1z;
}
class h2h
{

constructor()
{
	this.m0h = u4n;
	this.t9f = f8z.t3k;
	this.z5f = u4n;
	this.d4t = f8z.t3k;
	this.l3y = u4n;
	this.f3q = f8z.t3k;
	this.type = v7x.o8h;
}

x5w()
{
	let j2v = new h2h();
	j2v.m0h = this.m0h;
	j2v.t9f = this.t9f;
	j2v.z5f = this.z5f;
	j2v.d4t = this.d4t;
	j2v.l3y = this.l3y;
	j2v.v3i = this.v3i;
	j2v.type = this.type;
	return j2v;
}

c3b(l6c)
{
	if (
		this.m0h != l6c.m0h ||
		this.t9f != l6c.t9f ||
		this.z5f != l6c.z5f ||
		this.d4t != l6c.d4t ||
		this.l3y != l6c.l3y ||
		this.v3i != l6c.v3i ||
    this.type != l6c.type)
	{
		return false;
	}
	else
	{
		return true;
	}
}

e6d(l6c)
{
	return !this.c3b(l6c);
}

t3k()
{
	return this.type == v7x.o8h;
}

z0y()
{
	return this.t9f == f8z.q8u ||
		this.t9f == f8z.x8c ||
    this.t9f == f8z.n1s ||
    this.t9f == f8z.g1r ||
    this.t9f == f8z.u2t ||
    this.t9f == f8z.v2c;
}

l4f()
{
	return this.t9f == f8z.t0k ||
		this.t9f == f8z.e4c ||
    this.t9f == f8z.m5l ||
    this.t9f == f8z.g6g ||
    this.t9f == f8z.t6m ||
    this.t9f == f8z.j2j;
}

j2c()
{
	return this.l3y != u4n;
}

m8f()
{
	return this.t9f != this.d4t;
}

z6c()
{
  return this.type == v7x.t8j;
}

t6g()
{
	return this.type == v7x.o8h;
}

n4o()
{
	return this.type == v7x.l2i;
}

c7s()
{
	if (this.j2c())
  {
    return 1;
  }
  else
  {
    return 0;
  }
}

}

var northSquares = [];
var northEastSquares = [];
var eastSquares = [];
var southEastSquares = [];
var southSquares = [];
var southWestSquares = [];
var westSquares = [];
var northWestSquares = [];

var northEastSquare = [];
var eastSquare = [];
var southEastSquare = [];
var southWestSquare =[];
var westSquare = [];
var northWestSquare = [];

var kingSquares = [];
var knightSquares = [];

var moveGeneratorInited = false;

function b9e(y7t, w5b)
{
	if (w5b.type == v7x.m3c)
	{
		y7t[w5b.z5f] = y7t[w5b.m0h];
		y7t[w5b.m0h] = f8z.t3k;
	}
	else if (w5b.type == v7x.t8j)
	{
		let l3y = (w5b.z5f - 8);
		y7t[l3y] = f8z.t3k;
		y7t[w5b.z5f] = f8z.q8u;
		y7t[w5b.m0h] = f8z.t3k;
	}
	else if (w5b.type == v7x.q0j)
	{
		y7t[w5b.z5f] = f8z.u2t;
		y7t[w5b.m0h] = f8z.t3k;
	}
	else if (w5b.type == v7x.s9p)
	{
		y7t[w5b.z5f] = f8z.g1r;
		y7t[w5b.m0h] = f8z.t3k;
	}
	else if (w5b.type == v7x.p8t)
	{
		y7t[w5b.z5f] = f8z.n1s;
		y7t[w5b.m0h] = f8z.t3k;
	}
	else if (w5b.type == v7x.j3x)
	{
		y7t[w5b.z5f] = f8z.x8c;
		y7t[w5b.m0h] = f8z.t3k;
	}
}

function n1g(y7t, w5b)
{
	if (w5b.type == v7x.m3c)
	{
		y7t[w5b.z5f] = y7t[w5b.m0h];
		y7t[w5b.m0h] = f8z.t3k;
	}
	else if (w5b.type == v7x.t8j)
	{
		let l3y = (w5b.z5f + 8);
		y7t[l3y] = f8z.t3k;
		y7t[w5b.z5f] = f8z.t0k;
		y7t[w5b.m0h] = f8z.t3k;
	}
	else if (w5b.type == v7x.q0j)
	{
		y7t[w5b.z5f] = f8z.t6m;
		y7t[w5b.m0h] = f8z.t3k;
	}
	else if (w5b.type == v7x.s9p)
	{
		y7t[w5b.z5f] = f8z.g6g;
		y7t[w5b.m0h] = f8z.t3k;
	}
	else if (w5b.type == v7x.p8t)
	{
		y7t[w5b.z5f] = f8z.m5l;
		y7t[w5b.m0h] = f8z.t3k;
	}
	else if (w5b.type == v7x.j3x)
	{
		y7t[w5b.z5f] = f8z.e4c;
		y7t[w5b.m0h] = f8z.t3k;
	}
}

function w5t(y7t, w5b)
{
	if (w5b.z5f == s8c)
	{
		y7t[w5b.z5f] = f8z.v2c;
		y7t[w5b.m0h] = f8z.t3k;
		y7t[a1] = f8z.t3k; 
		y7t[t1q] = f8z.g1r;
	}
	else
	{
		y7t[w5b.z5f] = f8z.v2c;
		y7t[w5b.m0h] = f8z.t3k;
		y7t[j7q] = f8z.t3k; 
		y7t[o6v] = f8z.g1r;
	}
}

function e8p(y7t, w5b)
{
	if (w5b.z5f == a8y)
	{
		y7t[w5b.z5f] = f8z.j2j;
		y7t[w5b.m0h] = f8z.t3k;
		y7t[a8] = f8z.t3k; 
		y7t[y6t] = f8z.g6g;
	}
	else
	{
		y7t[w5b.z5f] = f8z.j2j;
		y7t[w5b.m0h] = f8z.t3k;
		y7t[s7m] = f8z.t3k; 
		y7t[r0j] = f8z.g6g;
	}
}

function y8x(y7t, w5b, y1l)
{
	if (w5b.z5f == s8c)
	{
		y7t[w5b.z5f] = f8z.v2c;
		y7t[w5b.m0h] = f8z.t3k;
		if (y1l.t6o != w5b.z5f)
		{
			y7t[y1l.t6o] = f8z.t3k;
		}
		y7t[t1q] = f8z.g1r;
	}
	else if (w5b.z5f == b8m)
	{
		y7t[w5b.z5f] = f8z.v2c;
		y7t[w5b.m0h] = f8z.t3k;
		if (y1l.i6e != w5b.z5f)
		{
			y7t[y1l.i6e] = f8z.t3k;
		}
		y7t[o6v] = f8z.g1r;
	}
}

function t1b(y7t, w5b, y1l)
{
	if (w5b.z5f == a8y)
	{
		y7t[w5b.z5f] = f8z.j2j;
		y7t[w5b.m0h] = f8z.t3k;
		if (y1l.f1o != w5b.z5f)
		{
			y7t[y1l.f1o] = f8z.t3k;
		}
		y7t[y6t] = f8z.g6g;
	}
	else if (w5b.z5f == m5t)
	{
		y7t[w5b.z5f] = f8z.j2j;
		y7t[w5b.m0h] = f8z.t3k;
		if (y1l.j9k != w5b.z5f)
		{
			y7t[y1l.j9k] = f8z.t3k;
		}
		y7t[r0j] = f8z.g6g;
	}
}

function x3p(j1d, w5b)
{
	let r7v = j1d.v2c();
	if (r7v == u4n) return true;
	if (w5b.t9f == f8z.v2c)
	{
		r7v = w5b.z5f;
	}
	let y7t = j1d.y7t();
	if (w5b.type == v7x.l2i)
	{
		if (j1d.n7v())
		{
			y8x(y7t, w5b, j1d.y1l());
		}
		else
		{
			w5t(y7t, w5b);
		}
	}
	else
	{
		b9e(y7t, w5b);
	}
	return !t7x(y7t, r7v);
}

function r2c(j1d, w5b)
{
	let r7v = j1d.j2j();
	if (r7v == u4n) return true;
	if (w5b.t9f == f8z.j2j)
	{
		r7v = w5b.z5f;
	}
	let y7t = j1d.y7t();
	if (w5b.type == v7x.l2i)
	{
		if (j1d.n7v())
		{
			t1b(y7t, w5b, j1d.y1l());
		}
		else
		{
			e8p(y7t, w5b);
		}
	}
	else
	{
		n1g(y7t, w5b);
	}
	return !o1h(y7t, r7v);
}

function a0j(d5g, j1d, m0h)
{
	if (m7m(m0h) == p1x)
	{
		return;
	}
	c8b(d5g, j1d, m0h);
	let z5f = northWestSquare[m0h];
	if (z5f != u4n)
	{
		g3r(d5g, j1d, m0h, z5f);
	}
	z5f = northEastSquare[m0h];
	if (z5f != u4n)
	{
		g3r(d5g, j1d, m0h, z5f);
	}
}

function b1h(d5g, j1d, m0h)
{
	if (m7m(m0h) == rank_1)
	{
		return;
	}
	d8h(d5g, j1d, m0h);
	let z5f = southEastSquare[m0h];
	if (z5f != u4n)
	{
		x0v(d5g, j1d, m0h, z5f);
	}
	z5f = southWestSquare[m0h];
	if (z5f != u4n)
	{
		x0v(d5g, j1d, m0h, z5f);
	}
}

function c8b(d5g, j1d, m0h)
{
	let z5f = (m0h + r5r);
	if (j1d.a7x(z5f))
	{
		if (m7m(m0h) == c4p)
		{
			q4o(d5g, j1d, m0h, z5f);
		}
		else
		{
			f9g(d5g, j1d, m0h, z5f, v7x.m3c);
			if (m7m(m0h) == t9q)
			{
				let z5f = (m0h + r5r + r5r);
				if (j1d.a7x(z5f))
				{
					f9g(d5g, j1d, m0h, z5f, v7x.m3c);
				}
			}
		}
	}
}

function d8h(d5g, j1d, m0h)
{
	let z5f = (m0h + a5w);
	if (j1d.a7x(z5f))
	{
		if (m7m(m0h) == t9q)
		{
			q4d(d5g, j1d, m0h, z5f);
		}
		else
		{
			f9g(d5g, j1d, m0h, z5f, v7x.m3c);
			if (m7m(m0h) == c4p)
			{
				let z5f = (m0h + a5w + a5w);
				if (j1d.a7x(z5f))
				{
					f9g(d5g, j1d, m0h, z5f, v7x.m3c);
				}
			}
		}
	}
}

function g3r(d5g, j1d, m0h, z5f)
{
	if (!j1d.l4f(z5f))
	{
		return;
	}
	if (m7m(m0h) == c4p)
	{
		r3p(d5g, j1d, m0h, z5f);
	}
	else
	{
		e6n(d5g, j1d, m0h, z5f, v7x.m3c);
	}
}

function x0v(d5g, j1d, m0h, z5f)
{
	if (!j1d.z0y(z5f))
	{
		return;
	}
	if (m7m(m0h) == t9q)
	{
		w1p(d5g, j1d, m0h, z5f);
	}
	else
	{
		e6n(d5g, j1d, m0h, z5f, v7x.m3c);
	}
}

function x5q(d5g, j1d, m0h, m0k)
{
	for (const z5f of m0k)
	{
		if (j1d.a7x(z5f))
		{
			f9g(d5g, j1d, m0h, z5f, v7x.m3c);
		}
		else if (j1d.l4f(z5f))
		{
			e6n(d5g, j1d, m0h, z5f, v7x.m3c);
		}
	}
}

function a4q(d5g, j1d, m0h, m0k)
{
	for (const z5f of m0k)
	{
		if (j1d.a7x(z5f))
		{
			f9g(d5g, j1d, m0h, z5f, v7x.m3c);
		}
		else if (j1d.z0y(z5f))
		{
			e6n(d5g, j1d, m0h, z5f, v7x.m3c);
		}
	}
}

function q6f(d5g, j1d, m0h)
{
	x5q(d5g, j1d, m0h, knightSquares[m0h]);
}

function b4u(d5g, j1d, m0h)
{
	a4q(d5g, j1d, m0h, knightSquares[m0h]);
}

function b9w(d5g, j1d, m0h)
{
	l4a(d5g, j1d, m0h, northEastSquares[m0h]);
	l4a(d5g, j1d, m0h, southEastSquares[m0h]);
	l4a(d5g, j1d, m0h, southWestSquares[m0h]);
	l4a(d5g, j1d, m0h, northWestSquares[m0h]);
}

function x8m(d5g, j1d, m0h)
{
	p2g(d5g, j1d, m0h, northEastSquares[m0h]);
	p2g(d5g, j1d, m0h, southEastSquares[m0h]);
	p2g(d5g, j1d, m0h, southWestSquares[m0h]);
	p2g(d5g, j1d, m0h, northWestSquares[m0h]);
}

function c2r(d5g, j1d, m0h)
{
	l4a(d5g, j1d, m0h, northSquares[m0h]);
	l4a(d5g, j1d, m0h, eastSquares[m0h]);
	l4a(d5g, j1d, m0h, southSquares[m0h]);
	l4a(d5g, j1d, m0h, westSquares[m0h]);
}

function b1r(d5g, j1d, m0h)
{
	p2g(d5g, j1d, m0h, northSquares[m0h]);
	p2g(d5g, j1d, m0h, eastSquares[m0h]);
	p2g(d5g, j1d, m0h, southSquares[m0h]);
	p2g(d5g, j1d, m0h, westSquares[m0h]);
}

function m9z(d5g, j1d, m0h)
{
	l4a(d5g, j1d, m0h, northSquares[m0h]);
	l4a(d5g, j1d, m0h, northEastSquares[m0h]);
	l4a(d5g, j1d, m0h, eastSquares[m0h]);
	l4a(d5g, j1d, m0h, southEastSquares[m0h]);
	l4a(d5g, j1d, m0h, southSquares[m0h]);
	l4a(d5g, j1d, m0h, southWestSquares[m0h]);
	l4a(d5g, j1d, m0h, westSquares[m0h]);
	l4a(d5g, j1d, m0h, northWestSquares[m0h]);
}

function d1q(d5g, j1d, m0h)
{
	p2g(d5g, j1d, m0h, northSquares[m0h]);
	p2g(d5g, j1d, m0h, northEastSquares[m0h]);
	p2g(d5g, j1d, m0h, eastSquares[m0h]);
	p2g(d5g, j1d, m0h, southEastSquares[m0h]);
	p2g(d5g, j1d, m0h, southSquares[m0h]);
	p2g(d5g, j1d, m0h, southWestSquares[m0h]);
	p2g(d5g, j1d, m0h, westSquares[m0h]);
	p2g(d5g, j1d, m0h, northWestSquares[m0h]);
}

function z3c(d5g, j1d, m0h)
{
	h3n(d5g, j1d, m0h, kingSquares[m0h]);
}

function f1p(d5g, j1d, m0h)
{
	d1e(d5g, j1d, m0h, kingSquares[m0h]);
}

function l4a(d5g, j1d, m0h, m0k)
{
	for (const z5f of m0k)
	{
		if (j1d.a7x(z5f))
		{
			f9g(d5g, j1d, m0h, z5f, v7x.m3c);
		}
		else if (j1d.z0y(z5f))
		{
			break;
		}
		else
		{
			e6n(d5g, j1d, m0h, z5f, v7x.m3c);
			break;
		}
	}
}

function p2g(d5g, j1d, m0h, m0k)
{
	for (const z5f of m0k)
	{
		if (j1d.a7x(z5f))
		{
			f9g(d5g, j1d, m0h, z5f, v7x.m3c);
		}
		else if (j1d.l4f(z5f))
		{
			break;
		}
		else
		{
			e6n(d5g, j1d, m0h, z5f, v7x.m3c);
			break;
		}
	}
}

function h3n(d5g, j1d, m0h, m0k)
{
	for (const z5f of m0k)
	{
		if (j1d.a7x(z5f))
		{
			f9g(d5g, j1d, m0h, z5f, v7x.m3c);
		}
		else if (j1d.l4f(z5f))
		{
			e6n(d5g, j1d, m0h, z5f, v7x.m3c);
		}
	}
}

function d1e(d5g, j1d, m0h, m0k)
{
	for (const z5f of m0k)
	{
		if (j1d.a7x(z5f))
		{
			f9g(d5g, j1d, m0h, z5f, v7x.m3c);
		}
		else if (j1d.z0y(z5f))
		{
			e6n(d5g, j1d, m0h, z5f, v7x.m3c);
		}
	}
}

function h2x(left, k1l)
{
	let d1l = [];
	if (left > k1l)
	{
    let k1x = left;
    left = k1l;
    k1l = k1x;
	}
	for (let i = left + 1; i < k1l; i++)
	{
		d1l.push(i);
	}
	return d1l;
}

function v5d(d5g, j1d)
{
	if (!j1d.m8h(j1d.n8f()))
	{
		return;
	}
	if (!j1d.h6i(j1d.t6o()))
	{
		return;
	}
	let y2o = h2x(j1d.t6o(), t1q);
  for (const k2a of y2o)
	{
		if (k2a != j1d.n8f())
		{
			if (!j1d.a7x(k2a))
			{
				return;
			}
		}
	}
	let l9x = h2x(j1d.n8f(), s8c);
  for (const k2a of l9x)
	{
		if (k2a != j1d.t6o())
		{
			if (!j1d.a7x(k2a))
			{
				return;
			}
		}
	}
  for (const k2a of l9x)
	{
		if (c4n(j1d, k2a))
		{
			return;
		}
	}
	if (c4n(j1d, j1d.n8f()))
	{
		return;
	}
	if (j1d.n8f() != s8c)
	{
		if (!j1d.a7x(s8c))
		{
			if (s8c != j1d.t6o())
			{
				return;
			}
		}
	}
	if (j1d.t6o() != t1q)
	{
		if (!j1d.a7x(t1q))
		{
			if (t1q != j1d.n8f())
			{
				return;
			}
		}
	}
	f9g(d5g, j1d, j1d.n8f(), s8c, v7x.l2i);
}

function c2p(d5g, j1d)
{
	if (!j1d.m8h(j1d.n8f()))
	{
		return;
	}
	if (!j1d.h6i(j1d.i6e()))
	{
		return;
	}
	let y2o = h2x(j1d.i6e(), o6v);
  for (const k2a of y2o)
	{
		if (k2a != j1d.n8f())
		{
			if (!j1d.a7x(k2a))
			{
				return;
			}
		}
	}
	let l9x = h2x(j1d.n8f(), b8m);
  for (const k2a of l9x)
	{
		if (k2a != j1d.i6e())
		{
			if (!j1d.a7x(k2a))
			{
				return;
			}
		}
	}
  for (const k2a of l9x)
	{
		if (c4n(j1d, k2a))
		{
			return;
		}
	}
	if (c4n(j1d, j1d.n8f()))
	{
		return;
	}
	if (j1d.n8f() != b8m)
	{
		if (!j1d.a7x(b8m))
		{
			if (b8m != j1d.i6e())
			{
				return;
			}
		}
	}
	if (j1d.i6e() != o6v)
	{
		if (!j1d.a7x(o6v))
		{
			if (o6v != j1d.n8f())
			{
				return;
			}
		}
	}
	f9g(d5g, j1d, j1d.n8f(), b8m, v7x.l2i);
}

function b3n(d5g, j1d)
{
	if (!j1d.n1o(j1d.k5x()))
	{
		return;
	}
	if (!j1d.r0i(j1d.j9k()))
	{
		return;
	}
	let y2o = h2x(j1d.j9k(), r0j);
  for (const k2a of y2o)
	{
		if (k2a != j1d.k5x())
		{
			if (!j1d.a7x(k2a))
			{
				return;
			}
		}
	}
	let l9x = h2x(j1d.k5x(), m5t);
  for (const k2a of l9x)
	{
		if (k2a != j1d.j9k())
		{
			if (!j1d.a7x(k2a))
			{
				return;
			}
		}
	}
  for (const k2a of l9x)
	{
		if (c7p(j1d, k2a))
		{
			return;
		}
	}
	if (c7p(j1d, j1d.k5x()))
	{
		return;
	}
	if (j1d.k5x() != m5t)
	{
		if (!j1d.a7x(m5t))
		{
			if (m5t != j1d.j9k())
			{
				return;
			}
		}
	}
	if (j1d.j9k() != r0j)
	{
		if (!j1d.a7x(r0j))
		{
			if (r0j != j1d.k5x())
			{
				return;
			}
		}
	}
	f9g(d5g, j1d, j1d.k5x(), m5t, v7x.l2i);
}

function p0b(d5g, j1d)
{
	if (!j1d.n1o(j1d.k5x()))
	{
		return;
	}
	if (!j1d.r0i(j1d.f1o()))
	{
		return;
	}
	let y2o = h2x(j1d.f1o(), y6t);
  for (const k2a of y2o)
	{
		if (k2a != j1d.k5x())
		{
			if (!j1d.a7x(k2a))
			{
				return;
			}
		}
	}
	let l9x = h2x(j1d.k5x(), a8y);
  for (const k2a of l9x)
	{
		if (k2a != j1d.f1o())
		{
			if (!j1d.a7x(k2a))
			{
				return;
			}
		}
	}
  for (const k2a of l9x)
	{
		if (c7p(j1d, k2a))
		{
			return;
		}
	}
	if (c7p(j1d, j1d.k5x()))
	{
		return;
	}
	if (j1d.k5x() != a8y)
	{
		if (!j1d.a7x(a8y))
		{
			if (a8y != j1d.f1o())
			{
				return;
			}
		}
	}
	if (j1d.f1o() != y6t)
	{
		if (!j1d.a7x(y6t))
		{
			if (y6t != j1d.k5x())
			{
				return;
			}
		}
	}
	f9g(d5g, j1d, j1d.k5x(), a8y, v7x.l2i);
}

function y0a(d5g, j1d)
{
	if (!j1d.m8h(j1d.n8f()))
	{
		return;
	}
	if (!j1d.h6i(j1d.t6o()))
	{
		return;
	}
	if (!j1d.a7x(u3m))
	{
		return;
	}
	if (!j1d.a7x(a6g))
	{
		return;
	}
	if (!j1d.a7x(f3d))
	{
		return;
	}
	if (c4n(j1d, j1d.n8f()))
	{
		return;
	}
	if (c4n(j1d, f3d))
	{
		return;
	}
	f9g(d5g, j1d, j1d.n8f(), s8c, v7x.l2i);
}

function w1q(d5g, j1d)
{
	if (!j1d.m8h(j1d.n8f()))
	{
		return;
	}
	if (!j1d.h6i(j1d.i6e()))
	{
		return;
	}
	if (!j1d.a7x(a5z))
	{
		return;
	}
	if (!j1d.a7x(y6v))
	{
		return;
	}
	if (c4n(j1d, j1d.n8f()))
	{
		return;
	}
	if (c4n(j1d, a5z))
	{
		return;
	}
	f9g(d5g, j1d, j1d.n8f(), b8m, v7x.l2i);
}

function r9l(d5g, j1d)
{
	if (!j1d.n1o(j1d.k5x()))
	{
		return;
	}
	if (!j1d.r0i(j1d.f1o()))
	{
		return;
	}
	if (!j1d.a7x(y0i))
	{
		return;
	}
	if (!j1d.a7x(q6m))
	{
		return;
	}
	if (!j1d.a7x(m2h))
	{
		return;
	}
	if (c7p(j1d, j1d.k5x()))
	{
		return;
	}
	if (c7p(j1d, m2h))
	{
		return;
	}
	f9g(d5g, j1d, j1d.k5x(), a8y, v7x.l2i);
}

function n3i(d5g, j1d)
{
	if (!j1d.n1o(j1d.k5x()))
	{
		return;
	}
	if (!j1d.r0i(j1d.j9k()))
	{
		return;
	}
	if (!j1d.a7x(y7q))
	{
		return;
	}
	if (!j1d.a7x(c6r))
	{
		return;
	}
	if (c7p(j1d, j1d.k5x()))
	{
		return;
	}
	if (c7p(j1d, y7q))
	{
		return;
	}
	f9g(d5g, j1d, j1d.k5x(), m5t, v7x.l2i);
}

function k5p(d5g, j1d)
{
	if (j1d.n7v())
	{
		v5d(d5g, j1d);
	}
	else
	{
		y0a(d5g, j1d);
	}
}

function o0w(d5g, j1d)
{
	if (j1d.n7v())
	{
		c2p(d5g, j1d);
	}
	else
	{
		w1q(d5g, j1d);
	}
}

function n5f(d5g, j1d)
{
	if (j1d.g7x())
	{
		k5p(d5g, j1d);
	}
	if (j1d.z2x())
	{
		o0w(d5g, j1d);
	}
}

function r1i(d5g, j1d)
{
	if (j1d.n7v())
	{
		p0b(d5g, j1d);
	}
	else
	{
		r9l(d5g, j1d);
	}
}

function p3s(d5g, j1d)
{
	if (j1d.n7v())
	{
		b3n(d5g, j1d);
	}
	else
	{
		n3i(d5g, j1d);
	}
}

function v3k(d5g, j1d)
{
	if (j1d.p8l())
	{
		r1i(d5g, j1d);
	}
	if (j1d.z7k())
	{
		p3s(d5g, j1d);
	}
}

function x7a(d5g, j1d)
{
	if (j1d.e7g() == u4n)
	{
		return;
	}
	if (m7m(j1d.e7g()) != m5x)
	{
		return;
	}
	if (!j1d.a7x(j1d.e7g()))
	{
		return;
	}
	let g4s = (j1d.e7g() + 8);
	if (!j1d.a7x(g4s))
	{
		return;
	}
	let a1k = (j1d.e7g() - 8);
	if (!j1d.g6a(a1k))
	{
		return;
	}
	let b6b = westSquare[a1k];
	if (b6b != u4n)
	{
		if (j1d.m9g(b6b))
		{
			x4h(d5g, j1d, b6b, f8z.q8u, j1d.e7g(),
				f8z.q8u, a1k, f8z.t0k, v7x.t8j);
		}
	}
	b6b = eastSquare[a1k];
	if (b6b != u4n)
	{
		if (j1d.m9g(b6b))
		{
			x4h(d5g, j1d, b6b, f8z.q8u, j1d.e7g(),
				f8z.q8u, a1k, f8z.t0k, v7x.t8j);
		}
	}
}

function r1q(d5g, j1d)
{
	if (j1d.e7g() == u4n)
	{
		return;
	}
	if (m7m(j1d.e7g()) != h2r)
	{
		return;
	}
	if (!j1d.a7x(j1d.e7g()))
	{
		return;
	}
	let g4s = (j1d.e7g() - 8);
	if (!j1d.a7x(g4s))
	{
		return;
	}
	let a1k = (j1d.e7g() + 8);
	if (!j1d.m9g(a1k))
	{
		return;
	}
	let b6b = westSquare[a1k];
	if (b6b != u4n)
	{
		if (j1d.g6a(b6b))
		{
			x4h(d5g, j1d, b6b, f8z.t0k, j1d.e7g(),
				f8z.t0k, a1k, f8z.q8u, v7x.t8j);
		}
	}
	b6b = eastSquare[a1k];
	if (b6b != u4n)
	{
		if (j1d.g6a(b6b))
		{
			x4h(d5g, j1d, b6b, f8z.t0k, j1d.e7g(),
				f8z.t0k, a1k, f8z.q8u, v7x.t8j);
		}
	}
}

function x4h(d5g, j1d, m0h, t9f, z5f, d4t, l3y, v3i, type)
{
  let e0p = new h2h();
	e0p.m0h = m0h;
	e0p.t9f = t9f;
	e0p.z5f = z5f;
	e0p.d4t = d4t;
	e0p.l3y = l3y;
	e0p.v3i = v3i;
	e0p.type = type;
	if (z0y(t9f))
	{
		if (x3p(j1d, e0p))
		{
			d5g.push(e0p);
		}
	}
	else
	{
		if (r2c(j1d, e0p))
		{
			d5g.push(e0p);
		}
	}
}

function f9g(d5g, j1d, m0h, z5f, type)
{
	let h7f = j1d.m3b(m0h);
	x4h(d5g, j1d, m0h, h7f, z5f, h7f, u4n, f8z.t3k, type);
}

function e6n(d5g, j1d, m0h, z5f, type)
{
	let h7f = j1d.m3b(m0h);
	let v3i = j1d.m3b(z5f);
	x4h(d5g, j1d, m0h, h7f, z5f, h7f, z5f, v3i, type);
}

function q4o(d5g, j1d, m0h, z5f)
{
	x4h(d5g, j1d, m0h, f8z.q8u, z5f, f8z.x8c, u4n, f8z.t3k, v7x.j3x);
	x4h(d5g, j1d, m0h, f8z.q8u, z5f, f8z.n1s, u4n, f8z.t3k, v7x.p8t);
	x4h(d5g, j1d, m0h, f8z.q8u, z5f, f8z.g1r, u4n, f8z.t3k, v7x.s9p);
	x4h(d5g, j1d, m0h, f8z.q8u, z5f, f8z.u2t, u4n, f8z.t3k, v7x.q0j);
}

function q4d(d5g, j1d, m0h, z5f)
{
	x4h(d5g, j1d, m0h, f8z.t0k, z5f, f8z.e4c, u4n, f8z.t3k, v7x.j3x);
	x4h(d5g, j1d, m0h, f8z.t0k, z5f, f8z.m5l, u4n, f8z.t3k, v7x.p8t);
	x4h(d5g, j1d, m0h, f8z.t0k, z5f, f8z.g6g, u4n, f8z.t3k, v7x.s9p);
	x4h(d5g, j1d, m0h, f8z.t0k, z5f, f8z.t6m, u4n, f8z.t3k, v7x.q0j);
}

function r3p(d5g, j1d, m0h, z5f)
{
	let v3i = j1d.m3b(z5f);
	x4h(d5g, j1d, m0h, f8z.q8u, z5f, f8z.x8c, z5f, v3i, v7x.j3x);
	x4h(d5g, j1d, m0h, f8z.q8u, z5f, f8z.n1s, z5f, v3i, v7x.p8t);
	x4h(d5g, j1d, m0h, f8z.q8u, z5f, f8z.g1r, z5f, v3i, v7x.s9p);
	x4h(d5g, j1d, m0h, f8z.q8u, z5f, f8z.u2t, z5f, v3i, v7x.q0j);
}

function w1p(d5g, j1d, m0h, z5f)
{
	let v3i = j1d.m3b(z5f);
	x4h(d5g, j1d, m0h, f8z.t0k, z5f, f8z.e4c, z5f, v3i, v7x.j3x);
	x4h(d5g, j1d, m0h, f8z.t0k, z5f, f8z.m5l, z5f, v3i, v7x.p8t);
	x4h(d5g, j1d, m0h, f8z.t0k, z5f, f8z.g6g, z5f, v3i, v7x.s9p);
	x4h(d5g, j1d, m0h, f8z.t0k, z5f, f8z.t6m, z5f, v3i, v7x.q0j);
}

function x5a(d5g, j1d, z5f)
{
	let m0h = (z5f - r5r);
	if (j1d.m9g(m0h))
	{
		if (m7m(m0h) == c4p)
		{
			q4o(d5g, j1d, m0h, z5f);
		}
		else
		{
			f9g(d5g, j1d, m0h, z5f, v7x.m3c);
		}
	}
	else
	{
		if (j1d.a7x(m0h))
		{
			if (m7m(z5f) == v0f)
			{
				m0h = (z5f - r5r - r5r);
				if (j1d.m9g(m0h))
				{
					f9g(d5g, j1d, m0h, z5f, v7x.m3c);
				}
			}
		}
	}

	if (j1d.l4f(z5f))
	{
		let m0h = southWestSquare[z5f];
		if (m0h != u4n)
		{
			if (j1d.m9g(m0h))
			{
				if (m7m(m0h) == c4p)
				{
					r3p(d5g, j1d, m0h, z5f);
				}
				else
				{
					e6n(d5g, j1d, m0h, z5f, v7x.m3c);
				}
			}
		}
		m0h = southEastSquare[z5f];
		if (m0h != u4n)
		{
			if (j1d.m9g(m0h))
			{
				if (m7m(m0h) == c4p)
				{
					r3p(d5g, j1d, m0h, z5f);
				}
				else
				{
					e6n(d5g, j1d, m0h, z5f, v7x.m3c);
				}
			}
		}
	}

	if (j1d.e7g() == z5f)
	{
		let g4s = (j1d.e7g() + 8);
		if (!j1d.a7x(g4s))
		{
			return;
		}
		let a1k = (j1d.e7g() - 8);
		if (!j1d.g6a(a1k))
		{
			return;
		}
		let b6b = westSquare[a1k];
		if (b6b != u4n)
		{
			if (j1d.m9g(b6b))
			{
				x4h(d5g, j1d, b6b, f8z.q8u, j1d.e7g(),
					f8z.q8u, a1k, f8z.t0k, v7x.t8j);
			}
		}
		b6b = eastSquare[a1k];
		if (b6b != u4n)
		{
			if (j1d.m9g(b6b))
			{
				x4h(d5g, j1d, b6b, f8z.q8u, j1d.e7g(),
					f8z.q8u, a1k, f8z.t0k, v7x.t8j);
			}
		}
	}
}

function a0o(d5g, j1d, z5f)
{
	let m0h = (z5f - a5w);
	if (j1d.g6a(m0h))
	{
		if (m7m(m0h) == t9q)
		{
			q4d(d5g, j1d, m0h, z5f);
		}
		else
		{
			f9g(d5g, j1d, m0h, z5f, v7x.m3c);
		}
	}
	else
	{
		if (j1d.a7x(m0h))
		{
			if (m7m(z5f) == e7t)
			{
				m0h = (z5f - a5w - a5w);
				if (j1d.g6a(m0h))
				{
					f9g(d5g, j1d, m0h, z5f, v7x.m3c);
				}
			}
		}
	}

	if (j1d.z0y(z5f))
	{
		let m0h = northWestSquare[z5f];
		if (m0h != u4n)
		{
			if (j1d.g6a(m0h))
			{
				if (m7m(m0h) == t9q)
				{
					w1p(d5g, j1d, m0h, z5f);
				}
				else
				{
					e6n(d5g, j1d, m0h, z5f, v7x.m3c);
				}
			}
		}
		m0h = northEastSquare[z5f];
		if (m0h != u4n)
		{
			if (j1d.g6a(m0h))
			{
				if (m7m(m0h) == t9q)
				{
					w1p(d5g, j1d, m0h, z5f);
				}
				else
				{
					e6n(d5g, j1d, m0h, z5f, v7x.m3c);
				}
			}
		}
	}

	if (j1d.e7g() == z5f)
	{
		let g4s = (j1d.e7g() - 8);
		if (!j1d.a7x(g4s))
		{
			return;
		}
		let a1k = (j1d.e7g() + 8);
		if (!j1d.m9g(a1k))
		{
			return;
		}
		let b6b = westSquare[a1k];
		if (b6b != u4n)
		{
			if (j1d.g6a(b6b))
			{
				x4h(d5g, j1d, b6b, f8z.t0k, j1d.e7g(),
					f8z.t0k, a1k, f8z.q8u, v7x.t8j);
			}
		}
		b6b = eastSquare[a1k];
		if (b6b != u4n)
		{
			if (j1d.g6a(b6b))
			{
				x4h(d5g, j1d, b6b, f8z.t0k, j1d.e7g(),
					f8z.t0k, a1k, f8z.q8u, v7x.t8j);
			}
		}
	}
}

function u3y(d5g, j1d, z5f, h7f)
{
	r3e(d5g, j1d, z5f, knightSquares[z5f], h7f);
}

function x6i(d5g, j1d, z5f, h7f)
{
	o1w(d5g, j1d, z5f, northEastSquares[z5f], h7f);
	o1w(d5g, j1d, z5f, southEastSquares[z5f], h7f);
	o1w(d5g, j1d, z5f, southWestSquares[z5f], h7f);
	o1w(d5g, j1d, z5f, northWestSquares[z5f], h7f);
}

function j3h(d5g, j1d, z5f, h7f)
{
	o1w(d5g, j1d, z5f, northSquares[z5f], h7f);
	o1w(d5g, j1d, z5f, eastSquares[z5f], h7f);
	o1w(d5g, j1d, z5f, southSquares[z5f], h7f);
	o1w(d5g, j1d, z5f, westSquares[z5f], h7f);
}

function z9o(d5g, j1d, z5f, h7f)
{
	o1w(d5g, j1d, z5f, northSquares[z5f], h7f);
	o1w(d5g, j1d, z5f, northEastSquares[z5f], h7f);
	o1w(d5g, j1d, z5f, eastSquares[z5f], h7f);
	o1w(d5g, j1d, z5f, southEastSquares[z5f], h7f);
	o1w(d5g, j1d, z5f, southSquares[z5f], h7f);
	o1w(d5g, j1d, z5f, southWestSquares[z5f], h7f);
	o1w(d5g, j1d, z5f, westSquares[z5f], h7f);
	o1w(d5g, j1d, z5f, northWestSquares[z5f], h7f);
}

function n2e(d5g, j1d, z5f, h7f)
{
	h5n(d5g, j1d, z5f, kingSquares[z5f], h7f);
}

function o1w(d5g, j1d, z5f, t9z, h7f)
{
  for (const m0h of t9z)
	{
		if (j1d.m3b(m0h) == h7f)
		{
			if (j1d.a7x(z5f))
			{
				f9g(d5g, j1d, m0h, z5f, v7x.m3c);
			}
			else
			{
				e6n(d5g, j1d, m0h, z5f, v7x.m3c);
			}
			break;
		}
		else
		{
			if (!j1d.a7x(m0h))
			{
				break;
			}
		}
	}
}

function h5n(d5g, j1d, z5f, t9z, h7f)
{
  for (const m0h of t9z)
	{
		if (j1d.m3b(m0h) == h7f)
		{
			if (j1d.a7x(z5f))
			{
				f9g(d5g, j1d, m0h, z5f, v7x.m3c);
				break;
			}
			else
			{
				e6n(d5g, j1d, m0h, z5f, v7x.m3c);
				break;
			}
		}
	}
}

function r3e(d5g, j1d, z5f, t9z, h7f)
{
  for (const m0h of t9z)
	{
		if (j1d.m3b(m0h) == h7f)
		{
			if (j1d.a7x(z5f))
			{
				f9g(d5g, j1d, m0h, z5f, v7x.m3c);
				
			}
			else
			{
				e6n(d5g, j1d, m0h, z5f, v7x.m3c);
				
			}
		}
	}
}

function y3t(y7t, m0k)
{
  for (const z5f of m0k)
	{
		if (y7t[z5f] != f8z.t3k)
		{
			if (l4f(y7t[z5f]))
			{
				return false;
			}
			else
			{
				if (y7t[z5f] == f8z.n1s || y7t[z5f] == f8z.u2t)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function r5s(y7t, m0k)
{
  for (const z5f of m0k)
	{
		if (y7t[z5f] != f8z.t3k)
		{
			if (l4f(y7t[z5f]))
			{
				return false;
			}
			else
			{
				if (y7t[z5f] == f8z.g1r || y7t[z5f] == f8z.u2t)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function j7f(y7t, m0k)
{
  for (const z5f of m0k)
	{
		if (y7t[z5f] != f8z.t3k)
		{
			if (l4f(y7t[z5f]))
			{
				return false;
			}
			else
			{
				if (y7t[z5f] == f8z.g1r || y7t[z5f] == f8z.u2t)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function x3g(y7t, z5f)
{
	if (z5f == u4n)
	{
		return false;
	}
	if (y7t[z5f] == f8z.q8u)
	{
		return true;
	}
	return false;
}

function s8s(y7t, m0k)
{
  for (const z5f of m0k)
	{
		if (y7t[z5f] == f8z.x8c)
		{
			return true;
		}
	}
	return false;
}

function w7x(y7t, m0k)
{
  for (const z5f of m0k)
	{
		if (y7t[z5f] == f8z.v2c)
		{
			return true;
		}
	}
	return false;
}

function q8a(y7t, m0k)
{
  for (const z5f of m0k)
	{
		if (y7t[z5f] != f8z.t3k)
		{
			if (z0y(y7t[z5f]))
			{
				return false;
			}
			else
			{
				if (y7t[z5f] == f8z.m5l || y7t[z5f] == f8z.t6m)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function z6w(y7t, m0k)
{
  for (const z5f of m0k)
	{
		if (y7t[z5f] != f8z.t3k)
		{
			if (z0y(y7t[z5f]))
			{
				return false;
			}
			else
			{
				if (y7t[z5f] == f8z.g6g || y7t[z5f] == f8z.t6m)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function f0v(y7t, m0k)
{
  for (const z5f of m0k)
	{
		if (y7t[z5f] != f8z.t3k)
		{
			if (z0y(y7t[z5f]))
			{
				return false;
			}
			else
			{
				if (y7t[z5f] == f8z.g6g || y7t[z5f] == f8z.t6m)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function u9y(y7t, z5f)
{
	if (z5f == u4n)
	{
		return false;
	}
	if (y7t[z5f] == f8z.t0k)
	{
		return true;
	}
	return false;
}

function h0v(y7t, m0k)
{
  for (const z5f of m0k)
	{
		if (y7t[z5f] == f8z.e4c)
		{
			return true;
		}
	}
	return false;
}

function e8e(y7t,  m0k)
{
  for (const z5f of m0k)
	{
		if (y7t[z5f] == f8z.j2j)
		{
			return true;
		}
	}
	return false;
}

function r2g(j1d, m0k, a1t)
{
  for (const z5f of m0k)
	{
		if (!j1d.a7x(z5f))
		{
			if (j1d.l4f(z5f))
			{
				return false;
			}
			else
			{
				if (j1d.s4l(z5f) || j1d.b8i(z5f))
				{
					a1t = z5f;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function j8y(j1d, m0k, a1t)
{
  for (const z5f of m0k)
	{
		if (!j1d.a7x(z5f))
		{
			if (j1d.z0y(z5f))
			{
				return false;
			}
			else
			{
				if (j1d.f1y(z5f) || j1d.t3z(z5f))
				{
					a1t = z5f;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function k1c(j1d, m0k, a1t)
{
  for (const z5f of m0k)
	{
		if (!j1d.a7x(z5f))
		{
			if (j1d.l4f(z5f))
			{
				return false;
			}
			else
			{
				if (j1d.h6i(z5f) || j1d.b8i(z5f))
				{
					a1t = z5f;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function x4w(j1d, m0k, a1t)
{
  for (const z5f of m0k)
	{
		if (!j1d.a7x(z5f))
		{
			if (j1d.z0y(z5f))
			{
				return false;
			}
			else
			{
				if (j1d.r0i(z5f) || j1d.t3z(z5f))
				{
					a1t = z5f;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function l2t(j1d, m0k, a1t)
{
  for (const z5f of m0k)
	{
		if (!j1d.a7x(z5f))
		{
			if (j1d.l4f(z5f))
			{
				return false;
			}
			else
			{
				if (j1d.h6i(z5f) || j1d.b8i(z5f))
				{
					a1t = z5f;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function z5z(j1d, m0k, a1t)
{
  for (const z5f of m0k)
	{
		if (!j1d.a7x(z5f))
		{
			if (j1d.z0y(z5f))
			{
				return false;
			}
			else
			{
				if (j1d.r0i(z5f) || j1d.t3z(z5f))
				{
					a1t = z5f;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function x9r(j1d, z5f)
{
	if (z5f == u4n)
	{
		return false;
	}
	if (j1d.m9g(z5f))
	{
		return true;
	}
	return false;
}

function d7k(j1d, z5f)
{
	if (z5f == u4n)
	{
		return false;
	}
	if (j1d.g6a(z5f))
	{
		return true;
	}
	return false;
}

function g0o(j1d, m0k, a1t)
{
  for (const z5f of m0k)
	{
		if (j1d.n5a(z5f))
		{
			a1t = z5f;
			return true;
		}
	}
	return false;
}



function o5i(j1d, m0k, a1t)
{
  for (const z5f of m0k)
	{
		if (j1d.w8l(z5f))
		{
			a1t = z5f;
			return true;
		}
	}
	return false;
}

function k0l(j1d, m0k, a1t)
{
  for (const z5f of m0k)
	{
		if (j1d.m8h(z5f))
		{
			a1t = z5f;
			return true;
		}
	}
	return false;
}

function a2e(j1d, m0k, a1t)
{
  for (const z5f of m0k)
	{
		if (j1d.n1o(z5f))
		{
			a1t = z5f;
			return true;
		}
	}
	return false;
}

function o1h(y7t, k2a)
{
	if (y3t(y7t, northEastSquares[k2a])) return true;
	if (y3t(y7t, southEastSquares[k2a])) return true;
	if (y3t(y7t, southWestSquares[k2a])) return true;
	if (y3t(y7t, northWestSquares[k2a])) return true;
	if (r5s(y7t, northSquares[k2a])) return true;
	if (j7f(y7t, eastSquares[k2a])) return true;
	if (r5s(y7t, southSquares[k2a])) return true;
	if (j7f(y7t, westSquares[k2a])) return true;
	if (x3g(y7t, southEastSquare[k2a])) return true;
	if (x3g(y7t, southWestSquare[k2a])) return true;
	if (s8s(y7t, knightSquares[k2a])) return true;
	if (w7x(y7t, kingSquares[k2a])) return true;
	return false;
}

function t7x(y7t, k2a)
{
	if (q8a(y7t, northEastSquares[k2a])) return true;
	if (q8a(y7t, southEastSquares[k2a])) return true;
	if (q8a(y7t, southWestSquares[k2a])) return true;
	if (q8a(y7t, northWestSquares[k2a])) return true;
	if (z6w(y7t, northSquares[k2a])) return true;
	if (f0v(y7t, eastSquares[k2a])) return true;
	if (z6w(y7t, southSquares[k2a])) return true;
	if (f0v(y7t, westSquares[k2a])) return true;
	if (u9y(y7t, northEastSquare[k2a])) return true;
	if (u9y(y7t, northWestSquare[k2a])) return true;
	if (h0v(y7t, knightSquares[k2a])) return true;
	if (e8e(y7t, kingSquares[k2a])) return true;
	return false;
}

function c7p(j1d, k2a)
{
	let a1t = u4n;
	if (r2g(j1d, northEastSquares[k2a], a1t)) return true;
	if (r2g(j1d, southEastSquares[k2a], a1t)) return true;
	if (r2g(j1d, southWestSquares[k2a], a1t)) return true;
	if (r2g(j1d, northWestSquares[k2a], a1t)) return true;
	if (k1c(j1d, northSquares[k2a], a1t)) return true;
	if (l2t(j1d, eastSquares[k2a], a1t)) return true;
	if (k1c(j1d, southSquares[k2a], a1t)) return true;
	if (l2t(j1d, westSquares[k2a], a1t)) return true;
	if (x9r(j1d, southEastSquare[k2a])) return true;
	if (x9r(j1d, southWestSquare[k2a])) return true;
	if (g0o(j1d, knightSquares[k2a], a1t)) return true;
	if (k0l(j1d, kingSquares[k2a], a1t)) return true;
	return false;
}

function c4n(j1d, k2a)
{
	let a1t = u4n;
	if (j8y(j1d, northEastSquares[k2a], a1t)) return true;
	if (j8y(j1d, southEastSquares[k2a], a1t)) return true;
	if (j8y(j1d, southWestSquares[k2a], a1t)) return true;
	if (j8y(j1d, northWestSquares[k2a], a1t)) return true;
	if (x4w(j1d, northSquares[k2a], a1t)) return true;
	if (z5z(j1d, eastSquares[k2a], a1t)) return true;
	if (x4w(j1d, southSquares[k2a], a1t)) return true;
	if (z5z(j1d, westSquares[k2a], a1t)) return true;
	if (d7k(j1d, northEastSquare[k2a])) return true;
	if (d7k(j1d, northWestSquare[k2a])) return true;
	if (o5i(j1d, knightSquares[k2a], a1t)) return true;
	if (a2e(j1d, kingSquares[k2a], a1t)) return true;
	return false;
}

function p0w()
{
	if (moveGeneratorInited) return;
	moveGeneratorInited = true;
 	for (const k2a of m0n)
	{
 		if (m7m(k2a) <= c4p && l0q(k2a) <= h4r)
		{
			let z5f = k2a + w2q;
			northEastSquare.push(z5f);
		}
		else
		{
			northEastSquare.push(u4n);
		}
		if (l0q(k2a) <= h4r)
		{
			let z5f = k2a + r5v;
			eastSquare.push(z5f);
		}
		else
		{
			eastSquare.push(u4n);
		}
		if (m7m(k2a) >= t9q && l0q(k2a) <= h4r)
		{
			let z5f = k2a + q4f;
			southEastSquare.push(z5f);
		}
		else
		{
			southEastSquare.push(u4n);
		}
		if (m7m(k2a) >= t9q && l0q(k2a) >= v8x)
		{
			let z5f = k2a + b7q;
			southWestSquare.push(z5f);
		}
		else
		{
			southWestSquare.push(u4n);
		}
		if (l0q(k2a) >= v8x)
		{
			let z5f = k2a + w9p;
			westSquare.push(z5f);
		}
		else
		{
			westSquare.push(u4n);
		}
		if (m7m(k2a) <= c4p && l0q(k2a) >= v8x)
		{
			let z5f = k2a + s6o;
			northWestSquare.push(z5f);
		}
		else
		{
			northWestSquare.push(u4n);
		}
	}

  for (const k2a of m0n)
	{
  	northSquares.push(o3e(k2a));
		northEastSquares.push(e9e(k2a));
		eastSquares.push(z7z(k2a));
		southEastSquares.push(u8g(k2a));
		southSquares.push(b6n(k2a));
		southWestSquares.push(s7v(k2a));
		westSquares.push(s3n(k2a));
		northWestSquares.push(z6o(k2a));
		kingSquares.push(l1z(k2a));
		knightSquares.push(d4l(k2a));
	}
}

function j0w(j1d)
{
	let d5g = [];

	if (j1d.a3g())
	{
		let c4m = j1d.c4m();
    for (const k2a of m0n)
		{
			if (!c4m) break;
			if (j1d.z0y(k2a))
			{
				switch (j1d.m3b(k2a))
				{
					case f8z.q8u:
						a0j(d5g, j1d, k2a);
						c4m--;
						break;
					case f8z.x8c:
						q6f(d5g, j1d, k2a);
						c4m--;
						break;
					case f8z.n1s:
						b9w(d5g, j1d, k2a);
						c4m--;
						break;
					case f8z.g1r:
						c2r(d5g, j1d, k2a);
						c4m--;
						break;
					case f8z.u2t:
						m9z(d5g, j1d, k2a);
						c4m--;
						break;
					case f8z.v2c:
						z3c(d5g, j1d, k2a);
						c4m--;
						break;
					default:
						break;
				}
			}
		}
		x7a(d5g, j1d);
		n5f(d5g, j1d);
	}
	else
	{
		let k5l = j1d.k5l();
    for (const k2a of m0n)
		{
			if (!k5l) break;
			if (j1d.l4f(k2a))
			{
				switch (j1d.m3b(k2a))
				{
					case f8z.t0k:
						b1h(d5g, j1d, k2a);
						k5l--;
						break;
					case f8z.e4c:
						b4u(d5g, j1d, k2a);
						k5l--;
						break;
					case f8z.m5l:
						x8m(d5g, j1d, k2a);
						k5l--;
						break;
					case f8z.g6g:
						b1r(d5g, j1d, k2a);
						k5l--;
						break;
					case f8z.t6m:
						d1q(d5g, j1d, k2a);
						k5l--;
						break;
					case f8z.j2j:
						f1p(d5g, j1d, k2a);
						k5l--;
						break;
					default:
						break;
				}
			}
		}
		r1q(d5g, j1d);
		v3k(d5g, j1d);
	}

	return d5g;
}

function a8q(j1d, n6w)
{
	let d5g = [];

	if (j1d.a3g())
	{
		if (!j1d.z0y(n6w))
		{
			x5a(d5g, j1d, n6w);
		}
	}
	else
	{
		if (!j1d.l4f(n6w))
		{
			a0o(d5g, j1d, n6w);
		}
	}

	return d5g;
}

function x2m(j1d, n6w)
{
	let d5g = [];

	if (j1d.a3g())
	{
		if (!j1d.z0y(n6w))
		{
			u3y(d5g, j1d, n6w, f8z.x8c);
		}
	}
	else
	{
		if (!j1d.l4f(n6w))
		{
			u3y(d5g, j1d, n6w, f8z.e4c);
		}
	}

	return d5g;
}

function y7s(j1d, n6w)
{
	let d5g = [];

	if (j1d.a3g())
	{
		if (!j1d.z0y(n6w))
		{
			x6i(d5g, j1d, n6w, f8z.n1s);
		}
	}
	else
	{
		if (!j1d.l4f(n6w))
		{
			x6i(d5g, j1d, n6w, f8z.m5l);
		}
	}

	return d5g;
}

function h6v(j1d, n6w)
{
	let d5g = [];

	if (j1d.a3g())
	{
		if (!j1d.z0y(n6w))
		{
			j3h(d5g, j1d, n6w, f8z.g1r);
		}
	}
	else
	{
		if (!j1d.l4f(n6w))
		{
			j3h(d5g, j1d, n6w, f8z.g6g);
		}
	}

	return d5g;
}

function s3k(j1d, n6w)
{
	let d5g = [];

	if (j1d.a3g())
	{
		if (!j1d.z0y(n6w))
		{
			z9o(d5g, j1d, n6w, f8z.u2t);
		}
	}
	else
	{
		if (!j1d.l4f(n6w))
		{
			z9o(d5g, j1d, n6w, f8z.t6m);
		}
	}

	return d5g;
}

function e5b(j1d, n6w)
{
	let d5g = [];

	let r7v = u4n;
	if (j1d.a3g())
	{
		r7v = j1d.v2c();
	}
	else
	{
		r7v = j1d.j2j();
	}

	if (r7v == u4n)
	{
		return d5g;
	}

	if (j1d.a3g())
	{
		z3c(d5g, j1d, r7v);
		n5f(d5g, j1d);
	}
	else
	{
		f1p(d5g, j1d, r7v);
		v3k(d5g, j1d);
	}

	return d5g;
}

function f5x(j1d, n6w)
{
	let d5g = [];

	let r7v = u4n;
	if (j1d.a3g())
	{
		r7v = j1d.v2c();
	}
	else
	{
		r7v = j1d.j2j();
	}

	if (r7v == u4n)
	{
		return d5g;
	}

	if (j1d.a3g())
	{
		if (!j1d.z0y(n6w))
		{
			n2e(d5g, j1d, n6w, f8z.v2c);
		}
	}
	else
	{
		if (!j1d.l4f(n6w))
		{
			n2e(d5g, j1d, n6w, f8z.j2j);
		}
	}

	return d5g;
}

function e7s(j1d)
{
	let d5g = [];

	if (j1d.a3g())
	{
		if (!j1d.m8h(j1d.n8f()))
		{
			return d5g;
		}
		if (!j1d.g7x())
		{
			return d5g;
		}
		k5p(d5g, j1d);
		return d5g;
	}
	else
	{
		if (!j1d.n1o(j1d.k5x()))
		{
			return d5g;
		}
		if (!j1d.p8l())
		{
			return d5g;
		}
		r1i(d5g, j1d);
		return d5g;
	}
}

function j3d(j1d)
{
	let d5g = [];

	if (j1d.a3g())
	{
		if (!j1d.m8h(j1d.n8f()))
		{
			return d5g;
		}
		if (!j1d.z2x())
		{
			return d5g;
		}
		o0w(d5g, j1d);
		return d5g;
	}
	else
	{
		if (!j1d.n1o(j1d.k5x()))
		{
			return d5g;
		}
		if (!j1d.z7k())
		{
			return d5g;
		}
		p3s(d5g, j1d);
		return d5g;
	}
}

function y3q(j1d)
{
	if (j1d.a3g())
	{
		if (j1d.v2c() != u4n)
		{
			return c4n(j1d, j1d.v2c());
		}
	}
	else
	{
		if (j1d.j2j() != u4n)
		{
			return c7p(j1d, j1d.j2j());
		}
	}
	return false;
}




function y9o(j1d, m0h)
{
	let x6m = j0w(j1d);
	let b0z = [];
  for (const w5b of x6m)
	{
		if (w5b.m0h == m0h)
		{
			b0z.push(w5b);
		}
	}
	return b0z;
}

function s5j(j1d, z5f)
{
	let x6m = j0w(j1d);
	let w7v = [];
  for (const w5b of x6m)
	{
		if (w5b.z5f == z5f)
		{
			w7v.push(w5b);
		}
	}
	return w7v;
}

function h4b(j1d, m0h, z5f)
{
	let x6m = j0w(j1d);
	let u3l = [];
  for (const w5b of x6m)
	{
		if (w5b.m0h == m0h && w5b.z5f == z5f)
		{
			u3l.push(w5b);
		}
	}
	return u3l;
}

function h1u(j1d, m0h, z5f, type)
{
	let e0p = new h2h();
	if (type == v7x.null)
	{
		return e0p;
	}

	e0p.m0h = m0h;
	e0p.z5f = z5f;
	e0p.type = type;
	if (type == v7x.m3c)
	{
		if (j1d.m3b(e0p.z5f) != f8z.t3k)
		{
			e0p.l3y = e0p.z5f;
			e0p.v3i = j1d.m3b(e0p.z5f);
		}
		e0p.t9f = j1d.m3b(e0p.m0h);
		e0p.d4t = e0p.t9f;
	}
	else if (type == v7x.l2i)
	{
		e0p.t9f = j1d.m3b(e0p.m0h);
		e0p.d4t = e0p.t9f;
	}
	else if (type == v7x.t8j)
	{
		e0p.t9f = j1d.m3b(e0p.m0h);
		e0p.d4t = e0p.t9f;
		if (z0y(e0p.t9f))
		{
			e0p.l3y = (e0p.z5f - 8);
			e0p.v3i = f8z.t0k;
		}
		else
		{
			e0p.l3y = (e0p.z5f + 8);
			e0p.v3i = f8z.q8u;
		}
	}
	else if (type == v7x.q0j)
	{
		if (j1d.m3b(e0p.z5f) != f8z.t3k)
		{
			e0p.l3y = e0p.z5f;
			e0p.v3i = j1d.m3b(e0p.z5f);
		}
		e0p.t9f = j1d.m3b(e0p.m0h);
		if (z0y(e0p.t9f))
		{
			e0p.d4t = f8z.u2t;
		}
		else
		{
			e0p.d4t = f8z.t6m;
		}
	}
	else if (type == v7x.s9p)
	{
		if (j1d.m3b(e0p.z5f) != f8z.t3k)
		{
			e0p.l3y = e0p.z5f;
			e0p.v3i = j1d.m3b(e0p.z5f);
		}
		e0p.t9f = j1d.m3b(e0p.m0h);
		if (z0y(e0p.t9f))
		{
			e0p.d4t = f8z.g1r;
		}
		else
		{
			e0p.d4t = f8z.g6g;
		}
	}
	else if (type == v7x.p8t)
	{
		if (j1d.m3b(e0p.z5f) != f8z.t3k)
		{
			e0p.l3y = e0p.z5f;
			e0p.v3i = j1d.m3b(e0p.z5f);
		}
		e0p.t9f = j1d.m3b(e0p.m0h);
		if (z0y(e0p.t9f))
		{
			e0p.d4t = f8z.n1s;
		}
		else
		{
			e0p.d4t = f8z.m5l;
		}
	}
	else if (type == v7x.j3x)
	{
		if (j1d.m3b(e0p.z5f) != f8z.t3k)
		{
			e0p.l3y = e0p.z5f;
			e0p.v3i = j1d.m3b(e0p.z5f);
		}
		e0p.t9f = j1d.m3b(e0p.m0h);
		if (z0y(e0p.t9f))
		{
			e0p.d4t = f8z.x8c;
		}
		else
		{
			e0p.d4t = f8z.e4c;
		}
	}
	return e0p;
}

function h1u(y7t, m0h, z5f, type)
{
	let e0p = new h2h();
	if (type == v7x.null)
	{
		return e0p;
	}

	e0p.m0h = m0h;
	e0p.z5f = z5f;
	e0p.type = type;
	if (type == v7x.m3c)
	{
		if (y7t[e0p.z5f] != f8z.t3k)
		{
			e0p.l3y = e0p.z5f;
			e0p.v3i = y7t[e0p.z5f];
		}
		e0p.t9f = y7t[e0p.m0h];
		e0p.d4t = e0p.t9f;
	}
	else if (type == v7x.l2i)
	{
		e0p.t9f = y7t[e0p.m0h];
		e0p.d4t = e0p.t9f;
	}
	else if (type == v7x.t8j)
	{
		e0p.t9f = y7t[e0p.m0h];
		e0p.d4t = e0p.t9f;
		if (z0y(e0p.t9f))
		{
			e0p.l3y = (e0p.z5f - 8);
			e0p.v3i = f8z.t0k;
		}
		else
		{
			e0p.l3y = (e0p.z5f + 8);
			e0p.v3i = f8z.q8u;
		}
	}
	else if (type == v7x.q0j)
	{
		if (y7t[e0p.z5f] != f8z.t3k)
		{
			e0p.l3y = e0p.z5f;
			e0p.v3i = y7t[e0p.z5f];
		}
		e0p.t9f = y7t[e0p.m0h];
		if (z0y(e0p.t9f))
		{
			e0p.d4t = f8z.u2t;
		}
		else
		{
			e0p.d4t = f8z.t6m;
		}
	}
	else if (type == v7x.s9p)
	{
		if (y7t[e0p.z5f] != f8z.t3k)
		{
			e0p.l3y = e0p.z5f;
			e0p.v3i = y7t[e0p.z5f];
		}
		e0p.t9f = y7t[e0p.m0h];
		if (z0y(e0p.t9f))
		{
			e0p.d4t = f8z.g1r;
		}
		else
		{
			e0p.d4t = f8z.g6g;
		}
	}
	else if (type == v7x.p8t)
	{
		if (y7t[e0p.z5f] != f8z.t3k)
		{
			e0p.l3y = e0p.z5f;
			e0p.v3i = y7t[e0p.z5f];
		}
		e0p.t9f = y7t[e0p.m0h];
		if (z0y(e0p.t9f))
		{
			e0p.d4t = f8z.n1s;
		}
		else
		{
			e0p.d4t = f8z.m5l;
		}
	}
	else if (type == v7x.j3x)
	{
		if (y7t[e0p.z5f] != f8z.t3k)
		{
			e0p.l3y = e0p.z5f;
			e0p.v3i = y7t[e0p.z5f];
		}
		e0p.t9f = y7t[e0p.m0h];
		if (z0y(e0p.t9f))
		{
			e0p.d4t = f8z.x8c;
		}
		else
		{
			e0p.d4t = f8z.e4c;
		}
	}
	return e0p;
}

const r5r 						=   8; 
const a5w 						=  -8; 
const r5v 	      			=   1; 
const w9p 	      			=  -1; 
const x9m 		=  17; 
const t7n 		=  10; 
const w2q 				=   9; 
const x5s 		=   6; 
const h8y 		=  15; 
const s6o 				=   7; 
const x0c 		= -17; 
const q3x 		= -10; 
const b7q 				=  -9; 
const v8h 		=  -6; 
const s3y 		= -15; 
const q4f 				=  -7; 

function o3e(k2a)
{
	let d1l = [];
	let b1p = r5r;
	let z5f = k2a;
	while (m7m(z5f) <= c4p)
	{
		z5f = z5f + b1p;
		d1l.push(z5f);
	}
	return d1l;
}

function e9e(k2a)
{
	let d1l = [];
	let b1p = w2q;
	let z5f = k2a;
	while (m7m(z5f) <= c4p && l0q(z5f) <= h4r)
	{
		z5f = z5f + b1p;
		d1l.push(z5f);
	}
	return d1l;
}

function z7z(k2a)
{
	let d1l = [];
	let b1p = r5v;
	let z5f = k2a;
	while (l0q(z5f) <= h4r)
	{
		z5f = z5f + b1p;
		d1l.push(z5f);
	}
	return d1l;
}

function u8g(k2a)
{
	let d1l = [];
	let b1p = q4f;
	let z5f = k2a;
	while (m7m(z5f) >= t9q && l0q(z5f) <= h4r)
	{
		z5f = z5f + b1p;
		d1l.push(z5f);
	}
	return d1l;
}

function b6n(k2a)
{
	let d1l = [];
	let b1p = a5w;
	let z5f = k2a;
	while (m7m(z5f) >= t9q)
	{
		z5f = z5f + b1p;
		d1l.push(z5f);
	}
	return d1l;
}

function s7v(k2a)
{
	let d1l = [];
	let b1p = b7q;
	let z5f = k2a;
	while (m7m(z5f) >= t9q && l0q(z5f) >= v8x)
	{
		z5f = z5f + b1p;
		d1l.push(z5f);
	}
	return d1l;
}

function s3n(k2a)
{
	let d1l = [];
	let b1p = w9p;
	let z5f = k2a;
	while (l0q(z5f) >= v8x)
	{
		z5f = z5f + b1p;
		d1l.push(z5f);
	}
	return d1l;
}

function z6o(k2a)
{
	let d1l = [];
	let b1p = s6o;
	let z5f = k2a;
	while (m7m(z5f) <= c4p && l0q(z5f) >= v8x)
	{
		z5f = z5f + b1p;
		d1l.push(z5f);
	}
	return d1l;
}

function d4l(k2a)
{
	let d1l = [];
	if (m7m(k2a) <= m5x && l0q(k2a) <= h4r)
	{
		let z5f = k2a + x9m;
		d1l.push(z5f);
	}
	if (m7m(k2a) <= c4p && l0q(k2a) <= d9i)
	{
		let z5f = k2a + t7n;
		d1l.push(z5f);
	}
	if (m7m(k2a) >= t9q && l0q(k2a) <= d9i)
	{
		let z5f = k2a + v8h;
		d1l.push(z5f);
	}
	if (m7m(k2a) >= h2r && l0q(k2a) <= h4r)
	{
		let z5f = k2a + s3y;
		d1l.push(z5f);
	}
	if (m7m(k2a) >= h2r && l0q(k2a) >= v8x)
	{
		let z5f = k2a + x0c;
		d1l.push(z5f);
	}
	if (m7m(k2a) >= t9q && l0q(k2a) >= a1f)
	{
		let z5f = k2a + q3x;
		d1l.push(z5f);
	}
	if (m7m(k2a) <= c4p && l0q(k2a) >= a1f)
	{
		z5f = k2a + x5s;
		d1l.push(z5f);
	}
	if (m7m(k2a) <= m5x && l0q(k2a) >= v8x)
	{
		let z5f = k2a + h8y;
		d1l.push(z5f);
	}
	return d1l;
}

function l1z(k2a)
{
	let d1l = [];
	if (m7m(k2a) <= c4p)
	{
		let z5f = k2a + r5r;
		d1l.push(z5f);
	}
	if (m7m(k2a) <= c4p && l0q(k2a) <= h4r)
	{
		let z5f = k2a + w2q;
		d1l.push(z5f);
	}
	if (l0q(k2a) <= h4r)
	{
		let z5f = k2a + r5v;
		d1l.push(z5f);
	}
	if (m7m(k2a) >= t9q && l0q(k2a) <= h4r)
	{
		let z5f = k2a + q4f;
		d1l.push(z5f);
	}
	if (m7m(k2a) >= t9q)
	{
		let z5f = k2a + a5w;
		d1l.push(z5f);
	}
	if (m7m(k2a) >= t9q && l0q(k2a) >= v8x)
	{
		let z5f = k2a + b7q;
		d1l.push(z5f);
	}
	if (l0q(k2a) >= v8x)
	{
		let z5f = k2a + w9p;
		d1l.push(z5f);
	}
	if (m7m(k2a) <= c4p && l0q(k2a) >= v8x)
	{
		let z5f = k2a + s6o;
		d1l.push(z5f);
	}
	return d1l;
}

const v7x =
{
  o8h : 0,  
	m3c : 1,
	l2i : 2,
	t8j : 3,
	j3x : 4,
	p8t : 5,
	s9p : 6,
	q0j : 7
};

function z3m(h7f)
{
	switch (h7f)
	{
		case f8z.q8u:
		case f8z.t0k:
			return z8y.y1y;
		case f8z.x8c:
		case f8z.e4c:
			return z8y.b5a;
		case f8z.n1s:
		case f8z.m5l:
			return z8y.c3u;
		case f8z.g1r:
		case f8z.g6g:
			return z8y.v8q;
		case f8z.u2t:
		case f8z.t6m:
			return z8y.h6b;
		case f8z.v2c:
		case f8z.j2j:
			return z8y.king;
		case f8z.t3k:
			return z8y.y1y;
	}
}

function i5s(j1d, e0p, d8r)
{
 	let w1z = '';
	if (e0p.t3k())
	{
		w1z += "--";
	}
	else if (r8n(e0p.t9f))
	{
    if (e0p.j2c())
    {
			let d7d = l0q(e0p.m0h);
			w1z = f4y(d7d) + "x" + w6j(e0p.z5f);
    }
    else
    {
 			w1z = w6j(e0p.z5f);
    }
		if (e0p.m8f())
		{
			w1z += "=";
			w1z += n5t(z3m(e0p.d4t));
		}
	}
	else if (e0p.t9f == f8z.v2c && e0p.n4o())
	{
		if (e0p.z5f == s8c)
		{
			w1z = "O-O-O";
		}
		else
		{
			w1z = "O-O";
		}
	}
	else if (e0p.t9f == f8z.j2j && e0p.n4o())
	{
		if (e0p.z5f == a8y)
		{
			w1z = "O-O-O";
		}
		else
		{
			w1z = "O-O";
		}
	}
	else
	{
		w1z = n5t(z3m(e0p.t9f));
    let x6m = [];
    if (z0y(e0p.t9f))
    {
      if (e0p.t9f == f8z.x8c)
      {
        x6m = x2m(j1d, e0p.z5f);
      }
      else if (e0p.t9f == f8z.n1s)
      {
        x6m = y7s(j1d, e0p.z5f);
      }
      else if (e0p.t9f == f8z.g1r)
      {
        x6m = h6v(j1d, e0p.z5f);
      }
      else if (e0p.t9f == f8z.u2t)
      {
        x6m = s3k(j1d, e0p.z5f);
      }
      else if (e0p.t9f == f8z.v2c)
      {
        x6m = f5x(j1d, e0p.z5f);
      }
    }
    else
    {
      if (e0p.t9f == f8z.e4c)
      {
        x6m = x2m(j1d, e0p.z5f);
      }
      else if (e0p.t9f == f8z.m5l)
      {
        x6m = y7s(j1d, e0p.z5f);
      }
      else if (e0p.t9f == f8z.g6g)
      {
        x6m = h6v(j1d, e0p.z5f);
      }
      else if (e0p.t9f == f8z.t6m)
      {
        x6m = s3k(j1d, e0p.z5f);
      }
      else if (e0p.t9f == f8z.j2j)
      {
        x6m = f5x(j1d, e0p.z5f);
      }
    }
    if (x6m.length > 1)
    {
      
      let t4y = 0;
      let d7d = l0q(e0p.m0h);
     	for (const w5b of x6m)
      {
        if (l0q(w5b.m0h) == d7d)
        {
          t4y++;
        }
      }
      if (t4y == 1)
      {
        
 				let d7d = l0q(e0p.m0h);
				w1z += f4y(d7d);
      }
      else
      {
        t4y = 0;
        let f7a = m7m(e0p.m0h);
       	for (const w5b of x6m)
        {
          if (m7m(w5b.m0h) == f7a)
          {
            t4y++;
          }
        }
        if (t4y == 1)
        {
          
          w1z += j6s(f7a);
        }
        else
        {
          
 					w1z += w6j(e0p.m0h);
        }
      }
    }
		if (e0p.j2c())
		{
       w1z += "x";
		}
		w1z += w6j(e0p.z5f);
	}
	if (!e0p.t3k())
	{
  	let x8a = j1d.x5w();
    x8a.l6i(e0p);
  	if (y3q(x8a))
	  {
  		let d5g = j0w(x8a);
	  	if (d5g.length == 0)
		  {
			  w1z += "#";
  		}
	  	else
		  {
			  w1z += "+";
  		}
	  }
	}
	return w1z;
}
class c1u
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.fontSize = 0;
}

}

function b6d(l9k,
  w1y,
  t1u,
  coordinate,
  coordinatesType,
  s3o,
  z8t,
  marginSize) 
{
 	let w6k = (coordinatesType == c7x.c1j ||
		coordinatesType == c7x.t0b ||
		coordinatesType == c7x.r8u);
	let z8a = (coordinatesType == c7x.c1j ||
		coordinatesType == c7x.t0b ||
		coordinatesType == c7x.i1i);
	let y4f =	(coordinatesType == c7x.c1j ||
		coordinatesType == c7x.r8u ||
		coordinatesType == c7x.c6e);
	let g4r = (coordinatesType == c7x.c1j ||
		coordinatesType == c7x.i1i ||
		coordinatesType == c7x.c6e);

	l9k.font = (coordinate.fontSize).toString() + "px serif";
	l9k.fillStyle = s3o;
  let b0a = coordinate.height;

	if (z8a)
	{
		let g3o = j3r;
		if (z8t)
		{
			g3o = 1;
		}
    for (let w6n = 0; w6n < j3r; w6n++)
		{
			let y2d = l9k.measureText(g3o).width;
			let top = w1y.y5a + 1 + w6n * t1u.l7g;
			top += (t1u.l7g - b0a) / 2 + b0a;
			let z8k = w1y.r2j - marginSize + (marginSize - y2d) / 2;
      l9k.fillText(g3o, z8k, top);
			if (z8t)
			{
				g3o++;
			}
			else
			{
				g3o--;
			}
		}
	}

	if (y4f)
	{
		let g3o = j3r;
		if (z8t)
		{
			g3o = 1;
		}
    for (let w6n = 0; w6n < j3r; w6n++)
		{
      let y2d = l9k.measureText(g3o).width;
			let top = w1y.y5a + 1 + w6n * t1u.l7g;
			top += (t1u.l7g - b0a) / 2 + b0a;
			let z8k = w1y.r2j + w1y.b3x() +
        (marginSize - y2d) / 2;
      l9k.fillText(g3o, z8k, top);
			if (z8t)
			{
				g3o++;
			}
			else
			{
				g3o--;
			}
		}
	}

	if (w6k)
	{
		let z2z = 'a';
		if (z8t)
		{
			z2z = 'h';
		}
    for (let j5o = 0; j5o < j3r; j5o++)
		{
			let d2q = z2z;
			let left = w1y.r2j + 1 + j5o * t1u.l7g;
      let y2d = l9k.measureText(d2q).width;
			let z8k = left + (t1u.l7g - y2d) / 2;
			let j1g = w1y.y5a - (marginSize - b0a) / 2 - 2;
      
      if (z2z == 'g')
      {
        j1g -= 2; 
      }
      l9k.fillText(d2q, z8k, j1g);
			if (z8t)
			{
        let n5b = z2z.charCodeAt(0);
        n5b--;
        z2z = String.fromCharCode(n5b);
			}
			else
			{
        let n5b = z2z.charCodeAt(0);
        n5b++;
        z2z = String.fromCharCode(n5b);
			}
		}
	}

	if (g4r)
	{
		let z2z = 'a';
		if (z8t)
		{
			z2z = 'h';
		}
    for (let j5o = 0; j5o < j3r; j5o++)
		{
			let d2q = z2z;
			let left = w1y.r2j + 1 + j5o * t1u.l7g;
      let y2d = l9k.measureText(d2q).width;
			let z8k = left + (t1u.l7g - y2d) / 2;
			let j1g = w1y.y5a + w1y.u1t() +
        (marginSize - b0a) / 2 + b0a - 2;
      
      if (z2z == 'g')
      {
        j1g -= 2; 
      }
      l9k.fillText(d2q, z8k, j1g);
			if (z8t)
			{
        let n5b = z2z.charCodeAt(0);
        n5b--;
        z2z = String.fromCharCode(n5b);
			}
			else
			{
        let n5b = z2z.charCodeAt(0);
        n5b++;
        z2z = String.fromCharCode(n5b);
			}
		}
	}
}

function o2b(l9k, fontSize)
{
	let u0b = new c1u();
	u0b.fontSize = fontSize;
	u0b.height = fontSize;
	u0b.width = fontSize;
	return u0b;
}
var whitePawnBitmap = null;
var whiteKnightBitmap = null;
var whiteBishopBitmap = null;
var whiteRookBitmap = null;
var whiteQueenBitmap = null;
var whiteKingBitmap = null;
var blackPawnBitmap = null;
var blackKnightBitmap = null;
var blackBishopBitmap = null;
var blackRookBitmap = null;
var blackQueenBitmap = null;
var blackKingBitmap = null;
var pieceBitmapsInitialized = false;

function y4l()
{
  whitePawnBitmap = x4g.s5q("images/pieces/Merida/wP");
 	whiteKnightBitmap = x4g.s5q("images/pieces/Merida/wN");
  whiteBishopBitmap = x4g.s5q("images/pieces/Merida/wB");
 	whiteRookBitmap = x4g.s5q("images/pieces/Merida/wR");
  whiteQueenBitmap = x4g.s5q("images/pieces/Merida/wQ");
 	whiteKingBitmap = x4g.s5q("images/pieces/Merida/wK");
  blackPawnBitmap = x4g.s5q("images/pieces/Merida/bP");
 	blackKnightBitmap = x4g.s5q("images/pieces/Merida/bN");
  blackBishopBitmap = x4g.s5q("images/pieces/Merida/bB");
 	blackRookBitmap = x4g.s5q("images/pieces/Merida/bR");
  blackQueenBitmap = x4g.s5q("images/pieces/Merida/bQ");
 	blackKingBitmap = x4g.s5q("images/pieces/Merida/bK");
}

function a3k()
{
  whitePawnBitmap = x4g.s5q("images/pieces/CBurnett/wP");
 	whiteKnightBitmap = x4g.s5q("images/pieces/CBurnett/wN");
  whiteBishopBitmap = x4g.s5q("images/pieces/CBurnett/wB");
 	whiteRookBitmap = x4g.s5q("images/pieces/CBurnett/wR");
  whiteQueenBitmap = x4g.s5q("images/pieces/CBurnett/wQ");
 	whiteKingBitmap = x4g.s5q("images/pieces/CBurnett/wK");
  blackPawnBitmap = x4g.s5q("images/pieces/CBurnett/bP");
 	blackKnightBitmap = x4g.s5q("images/pieces/CBurnett/bN");
  blackBishopBitmap = x4g.s5q("images/pieces/CBurnett/bB");
 	blackRookBitmap = x4g.s5q("images/pieces/CBurnett/bR");
  blackQueenBitmap = x4g.s5q("images/pieces/CBurnett/bQ");
 	blackKingBitmap = x4g.s5q("images/pieces/CBurnett/bK");
}

function m7n(e9d)
{
  if (e9d == 0)
  {
    a3k();
  }
  else
  {
    y4l();
  }
}

function t5d(h7f)
{
  switch (h7f)
	{
    case f8z.q8u:
      return whitePawnBitmap;
      break;
    case f8z.x8c:
      return whiteKnightBitmap;
      break;
    case f8z.n1s:
      return whiteBishopBitmap;
      break;
    case f8z.g1r:
      return whiteRookBitmap;
      break;
    case f8z.u2t:
      return whiteQueenBitmap;
      break;
    case f8z.v2c:
      return whiteKingBitmap;
      break;
    case f8z.t0k:
      return blackPawnBitmap;
      break;
    case f8z.e4c:
      return blackKnightBitmap;
      break;
    case f8z.m5l:
      return blackBishopBitmap;
      break;
    case f8z.g6g:
      return blackRookBitmap;
      break;
    case f8z.t6m:
      return blackQueenBitmap;
      break;
    case f8z.j2j:
      return blackKingBitmap;
      break;
    default:
      break
	}
  return null;
}

function d8f(l9k, rect, h7f)
{
  if (h7f == f8z.t3k) return;
	let s5q = t5d(h7f);
  l9k.drawImage(s5q, rect.r2j, rect.y5a, rect.b3x(), rect.u1t());
}
function f9r(n5d)
{
	let j1d = new d8g();
	let u1o = n5d.length;

 	let a5b = n5d.split(" ");
	if (a5b.length < 2)
	{
		return j1d;
	}

	let n4x = a5b[1];
	if (n4x.length)
	{
		if (n4x[0] == 'w')
		{
			j1d.f1t();
		}
		else if (n4x[0] == 'b')
		{
			j1d.m9q();
		}
	}

 	let u5w = a5b[0].split("/");
	if (u5w.length != 8)
	{
		return j1d;
	}
	let u9h = a8;
	for (const w6n of u5w)
	{
		let k2a = u9h;
		let u1o = w6n.length;
		for (let i = 0; i < u1o; i++)
		{
			if (k2a == u9h + 8)
			{
				return j1d; 
			}
			let q3s = true;
			switch (w6n[i])
			{
				case 'p':
					j1d.j7y(k2a, f8z.t0k);
					break;
				case 'n':
					j1d.j7y(k2a, f8z.e4c);
					break;
				case 'b':
					j1d.j7y(k2a, f8z.m5l);
					break;
				case 'r':
					j1d.j7y(k2a, f8z.g6g);
					break;
				case 'q':
					j1d.j7y(k2a, f8z.t6m);
					break;
				case 'k':
					j1d.j7y(k2a, f8z.j2j);
					break;
				case 'P':
					j1d.j7y(k2a, f8z.q8u);
					break;
				case 'N':
					j1d.j7y(k2a, f8z.x8c);
					break;
				case 'B':
					j1d.j7y(k2a, f8z.n1s);
					break;
				case 'R':
					j1d.j7y(k2a, f8z.g1r);
					break;
				case 'Q':
					j1d.j7y(k2a, f8z.u2t);
					break;
				case 'K':
					j1d.j7y(k2a, f8z.v2c);
					break;
				default:
					q3s = false;
					break;
			}
			if (q3s)
			{
				k2a = k2a + 1;
			}
			else
			{
				if (!isNaN(w6n[i]))
				{
					k2a = k2a + p3z(w6n[i], 0);
				}
			}
		}
		u9h = u9h - 8;
	}

 	if (a5b.length >= 3)
	{
		let f0i = new l2d(); 
		let d0n = a5b[2];
		if (d0n.length)
		{
			if (d0n[0] != '-')
			{
				let u1o = d0n.length;
				if (d0n[0] >= 'A' && d0n[0] <= 'H')
				{
 					f0i.s1q = true; 
          
					f0i.n8f = j1d.v2c();
					f0i.k5x = j1d.j2j();
					if (u1o == 4)
					{
						let w1z = d0n.charAt(0).toLowerCase();
						w1z += "1";
						f0i.i6e = m7q(w1z);
						if (j1d.h6i(f0i.i6e))
						{
							f0i.v5b = true;
						}
						w1z = d0n.charAt(1).toLowerCase();
						w1z += "1";
						f0i.t6o = m7q(w1z);
						if (j1d.h6i(f0i.t6o))
						{
							f0i.v9r = true;
						}
						w1z = d0n.charAt(2).toLowerCase();
						w1z += "8";
						f0i.j9k = m7q(w1z);
						if (j1d.r0i(f0i.j9k))
						{
							f0i.y7j = true;
						}
						w1z = d0n.charAt(3).toLowerCase();
						w1z += "8";
						f0i.f1o = m7q(w1z);
						if (j1d.r0i(f0i.f1o))
						{
							f0i.r2x = true;
						}
          }
				}
				else
				{
					for (let i = 0; i < u1o; i++)
					{
						switch (d0n[i])
						{
							case 'K':
								if (j1d.m8h(f0i.n8f) && j1d.h6i(f0i.i6e))
								{
									f0i.v5b = true;
								}
								break;
							case 'Q':
								if (j1d.m8h(f0i.n8f) && j1d.h6i(f0i.t6o))
								{
									f0i.v9r = true;
								}
								break;
							case 'k':
								if (j1d.n1o(f0i.k5x) && j1d.r0i(f0i.j9k))
								{
									f0i.y7j = true;
								}
								break;
							case 'q':
								if (j1d.n1o(f0i.k5x) && j1d.r0i(f0i.f1o))
								{
									f0i.r2x = true;
								}
								break;
						}
					}
				}
			}
		}
		if (a5b.length >= 4)
		{
			let b3r = a5b[3];
			if (b3r.length)
			{
				if (b3r[0] != '-')
				{
					f0i.e7g = m7q(b3r);
					if (m7m(f0i.e7g) == m5x)
					{
						let v6w = f0i.e7g + 8;
						let n6w = f0i.e7g - 8;
						if (!j1d.a7x(v6w) || !j1d.g6a(n6w))
						{
							f0i.e7g = u4n;
						}
					}
					else if (m7m(f0i.e7g) == h2r)
					{
						let v6w = f0i.e7g - 8;
						let n6w = f0i.e7g + 8;
						if (!j1d.a7x(v6w) || !j1d.m9g(n6w))
						{
							f0i.e7g = u4n;
						}
					}
					else
					{
						f0i.e7g = u4n;
					}
				}
			}
		}
		j1d.c0u(f0i);
	}
	return j1d;
}

function r8y(j1d)
{
	let n5d = '';
	let u9h = a8;
	for (let w6n = 7; w6n >= 0; w6n--)
	{
		let k2a = u9h;
		let q2t = 0;
		for (let j5o = 0; j5o < 8; j5o++)
		{
			if (j1d.a7x(k2a))
			{
				q2t++;
			}
			else
			{
				if (q2t)
				{
					n5d += q2t;
					q2t = 0;
				}
				switch (j1d.m3b(k2a))
				{
					case f8z.t3k:
						break;
					case f8z.q8u:
						n5d += 'P';
						break;
					case f8z.x8c:
						n5d += 'N';
						break;
					case f8z.n1s:
						n5d += 'B';
						break;
					case f8z.g1r:
						n5d += 'R';
						break;
					case f8z.u2t:
						n5d += 'Q';
						break;
					case f8z.v2c:
						n5d += 'K';
						break;
					case f8z.t0k:
						n5d += 'p';
						break;
					case f8z.e4c:
						n5d += 'n';
						break;
					case f8z.m5l:
						n5d += 'b';
						break;
					case f8z.g6g:
						n5d += 'r';
						break;
					case f8z.t6m:
						n5d += 'q';
						break;
					case f8z.j2j:
						n5d += 'k';
						break;
				}
			}
			k2a = k2a + 1;
		}
		if (q2t)
		{
			n5d += q2t;
		}
		u9h = (u9h - 8);
		if (w6n > 0)
		{
			n5d += "/";
		}
	}
	n5d += " ";
	if (j1d.a3g())
	{
		n5d += "w";
	}
	else
	{
		n5d += "b";
	}
	n5d += " ";
	let f0i = j1d.y1l();
	if (
		!f0i.v5b &&
		!f0i.v9r &&
		!f0i.y7j &&
		!f0i.r2x)
	{
		n5d += "-";
	}
	else
	{
		if (f0i.s1q)
		{
			if (f0i.v5b)
			{
				n5d += f4y(l0q(f0i.i6e)).toUpperCase();
			}
			if (f0i.v9r)
			{
				n5d += f4y(l0q(f0i.t6o)).toUpperCase();
			}
			if (f0i.y7j)
			{
				n5d += f4y(l0q(f0i.j9k)).toUpperCase();
			}
			if (f0i.r2x)
			{
				n5d += f4y(l0q(f0i.f1o)).toUpperCase();
			}
		}
		else
		{
			if (f0i.v5b)
			{
				n5d += "K";
			}
			if (f0i.v9r)
			{
				n5d += "Q";
			}
			if (f0i.y7j)
			{
				n5d += "k";
			}
			if (f0i.r2x)
			{
				n5d += "q";
			}
		}
	}
	n5d += " ";
	if (f0i.e7g == u4n)
	{
		n5d += "-";
	}
	else
	{
		n5d += w6j(f0i.e7g);
	}
	return n5d;
}

function i9b(j1d, b4v)
{
	
	

  let v9w = b4v.length;
	if (v9w < 2 || v9w > 7)
	{
		return false;
	}

	
	if (b4v[0] == 'Z' || (v9w == 2 && b4v == "--") || (v9w == 4 && b4v == "null"))
	{
		return new h2h();
	}

	
	let i0a = b4v[v9w-1];
	if (i0a == '+' || i0a == '#')
	{
		v9w--;
		if (v9w < 2)
		{
   		return false;
		}
	}

	
	if (b4v[0] == 'O' || b4v[0] == '0')
	{
		if (v9w == 3)
		{
			let x6m = j3d(j1d);
			if (x6m.length != 1)
			{
    		return false;
			}
			return x6m[0];
		}
		if (v9w == 5)
		{
			let x6m = e7s(j1d);
			if (x6m.length != 1)
			{
    		return false;
			}
			return x6m[0];
		}
 		return false;
	}

	
	let a8v = false;
	let e7e = f8z.t3k;
	if (b4v[v9w-2] == '=')
	{
		a8v = true;
		let b2m = b4v[v9w-1];
		if (b2m == 'N')
		{
			e7e = j1d.a3g() ? f8z.x8c : f8z.e4c;
		}
		else if (b2m == 'B')
		{
			e7e = j1d.a3g() ? f8z.n1s : f8z.m5l;
		}
		else if (b2m == 'R')
		{
			e7e = j1d.a3g() ? f8z.g1r : f8z.g6g;
		}
		else if (b2m == 'Q')
		{
			e7e = j1d.a3g() ? f8z.u2t : f8z.t6m;
		}
		else
		{
  		return false;
		}
		v9w -= 2;
		if (v9w < 2)
		{
  		return false;
		}
	}

 	
	let toString = '';
	toString += b4v[v9w-2];
	toString += b4v[v9w-1];
	let n6w = m7q(toString);
	if (n6w == u4n)
	{
		return false;
	}
	v9w -= 2;
	

 	if (a8v)
	{
		let x6m = a8q(j1d, n6w);
		if (x6m.length == 0)
		{
  		return false;
		}
		let d3t = [];
		for (const e0p of x6m)
		{
			if (e0p.d4t == e7e)
			{
				d3t.push(e0p);
			}
		}
		x6m = d3t;
		if (x6m.length == 1)
		{
			return x6m[0];
		}
		if (v9w == 0)
		{
			
			for (const w5b of x6m)
			{
				if (w5b.l3y == u4n)
				{
					return w5b;
				}
			}
  		return false;
		}
		if (v9w != 2)
		{
  		return false;
		}
		
		let i0a = b4v[0];
		if (i0a < 'a' || i0a > 'h')
		{
  		return false;
		}
		let d7d = q7o(i0a);
		for (const w5b of x6m)
		{
			if (l0q(w5b.m0h) == d7d)
			{
				return w5b;
			}
		}
		return false;
	}

	if (v9w == 0)
	{
  	
		let x6m = a8q(j1d, n6w);
		if (x6m.length != 1)
		{
  		return false;
		}
		return x6m[0];
	}

  
	let y1y = false;
	let x6m = [];
	let b0w = b4v[0];
	if (b0w == 'N')
	{
		x6m = x2m(j1d, n6w);
	}
	else if (b0w == 'B')
	{
		x6m = y7s(j1d, n6w);
	}
	else if (b0w == 'R')
	{
		x6m = h6v(j1d, n6w);
	}
	else if (b0w == 'Q')
	{
		x6m = s3k(j1d, n6w);
	}
	else if (b0w == 'K')
	{
		
		x6m = f5x(j1d, n6w);
	}
	else
	{
		y1y = true;
		x6m = a8q(j1d, n6w);
	}
	if (x6m.length == 0)
	{
		return false;
	}
	if (x6m.length == 1)
	{
		return x6m[0]; 
	}

	
	
	
	if (v9w < 2)
	{
		return false;
	}

 	if (y1y)
	{
		let i0a = b4v[0]; 
		if (i0a < 'a' || i0a > 'h')
		{
  	  return false;
		}
		let d7d = q7o(i0a);
		for (const w5b of x6m)
		{
			if (l0q(w5b.m0h) == d7d && w5b.l3y != u4n)
			{
				return w5b;
			}
		}
		return false;
	}

	

 	
	let k4h = false;
	if (b4v[v9w-1] == 'x')
	{
		k4h = true;
		v9w--;
	}
	else if (b4v[v9w-1] == '-') 
	{
		k4h = false;
		v9w--;
	}

	if (v9w < 2)
	{
		return false;
	}

 	if (v9w == 2)
	{
		
		let i0a = b4v[1]; 
		if (i0a >= 'a' && i0a <= 'h')
		{
			let d7d = q7o(i0a);
			let p8c  = 0;
      let j6a = null;
			for (const w5b of x6m)
			{
				if (l0q(w5b.m0h) == d7d)
				{
					j6a = w5b;
					p8c++;
				}
			}
      return p8c === 1 ? j6a : false;
		}
		if (i0a >= '1' && i0a <= '8')
		{
			let f7a = h9j(i0a);
			let p8c = 0;
      let j6a = null;
			for (const w5b of x6m)
			{
				if (m7m(w5b.m0h) == f7a)
				{
					j6a = w5b;
					p8c++;
				}
			}
      return p8c === 1 ? j6a : false;
		}
		return false;
	}

 	if (v9w == 3)
	{
		
		let f0t = '';
		f0t += b4v[1]; 
		f0t += b4v[2];
		let v6w = m7q(f0t);
		if (v6w == u4n)
		{
  		return false;
		}
		let p8c = 0;
    let j6a = null;
		for (const w5b of x6m)
		{
			if (w5b.m0h == v6w)
			{
				j6a = w5b;
				p8c++;
			}
		}
    return p8c === 1 ? j6a : false;
	}

	return false;
}

function e0n()
{
  let k2b = ["images/board/BoardBackground.png",
    "images/board/DarkSquare.png",
    "images/board/LightSquare.png",
    "images/board/Margin.png",
    "images/pieces/Merida/bB.svg",
    "images/pieces/Merida/bK.svg",
    "images/pieces/Merida/bN.svg",
    "images/pieces/Merida/bP.svg",
    "images/pieces/Merida/bQ.svg",
    "images/pieces/Merida/bR.svg",
    "images/pieces/Merida/wB.svg",
    "images/pieces/Merida/wK.svg",
    "images/pieces/Merida/wN.svg",
    "images/pieces/Merida/wP.svg",
    "images/pieces/Merida/wQ.svg",
    "images/pieces/Merida/wR.svg",
    "images/pieces/CBurnett/bB.svg",
    "images/pieces/CBurnett/bK.svg",
    "images/pieces/CBurnett/bN.svg",
    "images/pieces/CBurnett/bP.svg",
    "images/pieces/CBurnett/bQ.svg",
    "images/pieces/CBurnett/bR.svg",
    "images/pieces/CBurnett/wB.svg",
    "images/pieces/CBurnett/wK.svg",
    "images/pieces/CBurnett/wN.svg",
    "images/pieces/CBurnett/wP.svg",
    "images/pieces/CBurnett/wQ.svg",
    "images/pieces/CBurnett/wR.svg"];
  return k2b;
}
function div(w2h, e7b)
{
  const p9e = w2h % e7b;
  const quot = Math.floor((w2h - p9e) / e7b);
  return { quot: quot, p9e: p9e };
}

function u6p(j1d, w1z)
{
	let e0p = new h2h();
	if (w1z.length < 4)
	{
		return e0p;
	}
	let f0t = w1z.slice(0, 2);
	let toString = w1z.slice(2, 4);
	e0p.m0h = m7q(f0t);
  e0p.t9f = j1d.m3b(e0p.m0h);
	e0p.z5f = m7q(toString);
	e0p.d4t = e0p.t9f;
	if (w1z.length == 5)
	{
		switch (w1z[4])
		{
			case 'q':
				e0p.d4t = j1d.a3g() ? f8z.u2t : f8z.t6m;
				break;
			case 'r':
				e0p.d4t = j1d.a3g() ? f8z.g1r : f8z.g6g;
				break;
			case 'b':
				e0p.d4t = j1d.a3g() ? f8z.n1s : f8z.m5l;
				break;
			case 'n':
				e0p.d4t = j1d.a3g() ? f8z.x8c : f8z.e4c;
				break;
		}
	}
	return e0p;
}

class o1y
{

constructor()
{
	let m5f = '';
	let value = '';
}

}

function t2h(w1z, m5f, c9u)
{
  let g1x = " " + m5f + " ";
  let m1e = w1z.indexOf(g1x, 0);
	if (m1e >= 0)
	{
		let y0u = m1e + g1x.length;
		let g0r = 0;
		
		if (m5f == "pv")
		{
			g0r = w1z.indexOf(" string ", y0u);
		}
		else
		{
			g0r = w1z.indexOf(" ", y0u);
		}
		if (g0r < 0)
		{
			g0r = w1z.length;
		}
    let value = w1z.slice(y0u, g0r).trim();
		c9u.set(m5f, value);
	}
}

const i1l =
{
	y5d        : 0,
	w4z      : 1,
};

class Engine
{

constructor()
{
	this.o4b = new c0c();
  this.i1o = null;
  this.t5u = new k3k();
  this.j6g = new i9r();
  this.g2g = false;
  this.q1g = false;
  this.t9s = false;
  this.n1u = false;
  this.p3n = false;
  this.h2n = new u4h();
	this.x1q = new t7g();
  this.v0b = null;
}

z2c(p9y)
{
  this.o4b = p9y.x5w();
  this.c0x();
  this.g2g = false;
 	for (const p6t of this.o4b.o1b.o1b)
	{
		if (p6t.m5f == "MultiPV")
		{
			this.g2g = (p6t.value != "1");
			break;
		}
	}

  this.o4u();
}

/*
o4u()
{
  this.i1o = new Worker("engines/stockfish/stockfish-17.1-8e4d048.js");
  this.i1o.v0b = (event) => {
    this.w4z(event);
  };
}
*/



o4u() {
  var self = this;
  
  var folderUrl = "https://kb5963.github.io/my-web-files/engines/stockfish/";
  var engineJsUrl = folderUrl + "stockfish-17.1-8e4d048.js";

  fetch(engineJsUrl)
    .then(function(response) { return response.o5j(); })
    .then(function(scriptText) {
      
      
      var pathFix = "var s = '" + engineJsUrl + "';\n" +
                    "var Module = { locateFile: function(path) { return '" + folderUrl + "' + path; } };\n";

      var blob = new Blob([pathFix + scriptText], { type: 'application/javascript' });
      var blobUrl = URL.createObjectURL(blob);

      self.h2x = new Worker(blobUrl);
      self.h2x.v0b = function(event) { self.o5f(event); };

      console.log("Engine chunks are being requested from GitHub...");
    })
    .catch(function(err) {
      console.error("Main engine file fetch failed:", err);
    });
}

u1g()
{
	this.t5u.o5d();
	this.j6g.o5d();
	this.y5d("uci");
}

m4q()
{
	if (!this.t9s)
	{
    return;
  }

  
	for (const p6t of this.o4b.o1b.o1b)
	{
		let p5w = "setoption";
		p5w += " name ";
		p5w += p6t.m5f;
		p5w += " value ";
		p5w += p6t.value;
		this.y5d(p5w);
	}
  
  
  
  

	this.y5d("isready");
	this.t9s = false;
}


y5d(z9p) {
    this.t2t(z9p, i1l.y5d);
    
    if (this.i1o) {
        this.i1o.postMessage(z9p);
    } else {
        console.log("Engine still loading... command queued: " + z9p);
    }
}

/*
y5d(z9p)
{
	this.t2t(z9p, i1l.y5d);
  this.i1o.postMessage(z9p);
}
*/

w4z(event)
{
  
  
 	this.t2t(event.data, i1l.w4z);
	this.i1u(event.data);
}

i1u(p5w)
{
	let a5b = p5w.split(' ');
	if (a5b.length == 0) return;
	let z9p = a5b[0];

	if (z9p == "readyok")
	{
		this.q1g = true;
    if (this.v0b)
    {
      this.v0b({
        cmd: "ready",
        data: {}
        });
    }
		return;
	}
	if (z9p == "bestmove")
	{
		this.a9g(p5w);
	}
	else if (z9p == "id")
	{
		this.q5s(p5w);
	}
	else if (z9p == "info")
	{
		this.z7h(p5w);
	}
	else if (z9p == "option")
	{
		this.z5y(p5w);
	}
	else if (z9p == "uciok")
	{
		this.v3l(p5w);
	}
}

a9g(p5w)
{
	this.n1u = false;
  if (this.p3n)
  {
    this.p3n = false;
    this.o7i();
  }
}

q5s(p5w)
{
 	let w1z = p5w;
	let a5b = w1z.split(" ");
	if (a5b.length < 3) return;

  const word1 = a5b.shift();
  const word2 = a5b.shift();
  const value = a5b.join(' ');

	if (word2 == "name")
	{
		this.t5u.m5f = value;
	}
	else if (word2 == "author")
	{
		this.t5u.q7q = value;
	}
}

z7h(p5w)
{
	let w1z = p5w;
	let c9u = new Map();
	t2h(w1z, "depth", c9u);
 	t2h(w1z, "seldepth", c9u);
	t2h(w1z, "pv", c9u);
	t2h(w1z, "nps", c9u);
	t2h(w1z, "nodes", c9u);
	t2h(w1z, "score cp", c9u);
	t2h(w1z, "score mate", c9u);
	t2h(w1z, "time", c9u);
	t2h(w1z, "currmove", c9u);
	t2h(w1z, "currmovenumber", c9u);
 	t2h(w1z, "multipv", c9u);

  if (c9u.has("pv") && c9u.has("depth"))
  {
		this.q7r(c9u);
    if (this.v0b)
    {
      this.v0b({
        cmd: "pv",
        data: {}
        });
    }

		return;
  }

  if (c9u.has("currmove") && c9u.has("currmovenumber"))
	{
		this.r6i(c9u);
    if (this.v0b)
    {
      this.v0b({
        cmd: "cm",
        data: {}
        });
    }
		return;
	}
}

z5y(p5w)
{
	let p6t = new y5p();
	let w1z = p5w;

	let x9l = " name ";
  let o8k = w1z.indexOf(x9l, 0);
	if (o8k < 0) return;
	let m8g = o8k + x9l.length;

	let m7h = " type ";
	let m3h = w1z.indexOf(m7h, 0);
	if (m3h < 0) return;
	let u5q = m3h;

	let r1f = m3h + m7h.length;
	let l5m = w1z.indexOf(" ", r1f);
	if (l5m < 0) l5m = w1z.length + 1;

	p6t.m5f = w1z.slice(m8g, u5q);
	p6t.type = w1z.slice(r1f, l5m);

	if (p6t.type == "check")
	{
		p6t.type = "bool";
	}
	else if (p6t.type == "combo")
	{
		p6t.type = "enum";
	}

	let u7j = " default ";
	let p9c = w1z.indexOf(u7j, 0);
	if (p9c >= 0)
	{
		let x8q = p9c + u7j.length;
		let h7r = w1z.indexOf(" ", x8q);
		if (h7r < 0) h7r = w1z.length + 1;
		p6t.value = w1z.slice(x8q, h7r);
		if (p6t.value == "<empty>")
		{
			p6t.value = "";
		}
	}
	if (p6t.type == "spin")
	{
		let k7a = " min ";
		let b6o = w1z.indexOf(k7a, 0);
		if (b6o >= 0)
		{
			let d0a = b6o + k7a.length;
			let n5k = w1z.indexOf(" ", d0a);
			if (n5k < 0) n5k = w1z.length + 1;
			p6t.min = w1z.slice(d0a, n5k).trim();
		}
		let w4w = " max ";
		let e7m = w1z.indexOf(w4w, 0);
		if (e7m >= 0)
		{
			let w3d = e7m + w4w.length;
			let b4p = w1z.indexOf(" ", w3d);
			if (b4p < 0) b4p = w1z.length + 1;
			p6t.max = w1z.slice(w3d, b4p).trim();
		}
	}
	else if (p6t.type == "enum")
	{
		let i5l = 0;
		while (true)
		{
			let t9r = " var ";
			let o0u = w1z.indexOf(t9r, i5l);
			if (o0u < 0) break;
			let n4i = o0u + t9r.length;
			let n5p = w1z.indexOf(" var ", o0u + 5);
			if (n5p < 0) n5p = w1z.length + 1;
			if (p6t.values.length != 0)
			{
				p6t.values += " ";
			}
			p6t.values += w1z.slice(n4i, n5p).trim();
			i5l = n5p;
		}
	}
	this.j6g.o1b.push(p6t);
}

v3l(p5w)
{
	this.t9s = true;
  this.m4q();
}


i5z()
{
	if (this.i1o)
  {
    this.y5d("quit");
    this.i1o.terminate();
    this.i1o = null;
  }
}








r2h()
{
}

c1d(input)
{
	if (this.q1g)
	{
  	this.t2t('setInput', i1l.y5d);
		this.h2n = input.x5w();
    if (this.n1u)
    {
      this.p3n = true;
      this.y5d('stop');
    }
    else
    {
      this.o7i();
    }
	}
}

o7i()
{
  this.x1q = new t7g();
  this.x1q.j1d = this.h2n.s7j();
  this.x1q.o2e = this.h2n.o2e();
	this.x1q.t2y = this.g2g;
  this.n1u = true;
  if (this.v0b)
  {
    this.v0b({
      cmd: "go",
      data: {}
      });
  }

  let p5w = "position fen";
  p5w += " ";
	let n5d = r8y(this.h2n.s7j());
	p5w += n5d;
	this.y5d(p5w);
	if (this.h2n.l0d == h1d)
	{
		p5w = "go infinite";
		this.y5d(p5w);
	}
	else
	{
		p5w = "go movetime ";
		p5w += this.h2n.l0d;
		this.y5d(p5w);
	}
}

c0x()
{
}

t2t(w1z, y1c)
{
	if (!this.o4b.b2x) return;
 	if (y1c == i1l.w4z)
	{
    console.log("From engine:", w1z);
	}
	else
	{
    console.log("To engine:", w1z);
	}
}

q7r(c9u)
{
  let h6t = c9u.get("depth");
  let q8r = c9u.get("multipv");

	let s1t = new b0i();
	s1t.b2d = h6t;

	if (c9u.has("seldepth"))
	{
		s1t.n1h = c9u.get("seldepth");
	}

 	if (c9u.has("nps"))
	{
    let d0r = c9u.get("nps");
		let j7z = p3z(d0r, 0);
		let m3m = j7z / 1000;
		if (m3m)
		{
			s1t.g6f = m3m + " kN/s";
		}
	}

	let k4u = 0.0;
  if (c9u.has("score cp"))
	{
    let r6f = c9u.get("score cp");
		k4u = parseFloat(r6f);
		k4u = k4u / 100.0;
		if (k4u > 9.99)
		{
			k4u = 9.99;
		}
		if (k4u < -9.99)
		{
			k4u = -9.99;
		}
		if (this.x1q.j1d.z0j())
		{
			k4u = -k4u;
		}
		s1t.k4u = k4u;
	}
  if (c9u.has("score mate"))
	{
    let g7w = c9u.get("score mate");
		let s3i = p3z(g7w, 0);
		if (this.x1q.j1d.z0j())
		{
			s3i = -s3i;
		}
		s1t.s3i = s3i;
		if (s3i > 0)
		{
			k4u = 9.99;
		}
		if (s3i < 0)
		{
			k4u = -9.99;
		}
		s1t.k4u = k4u;
	}

  if (c9u.has("time"))
	{
    let m6g = c9u.get("time");
		let j9m = p3z(m6g, 0);
		let q6k = j9m / 1000;
		let m = div(q6k, 60);
		let v1l = m.p9e;
    v1l = Math.g0a(v1l);
		let h = div(m.quot, 60);
		let g9o = h.p9e;
		let n7j = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const g9c = `${pad(n7j)}:${pad(g9o)}:${pad(v1l)}`;
    s1t.g9c = g9c;
	}

  let g0i = c9u.get("pv");
	let u4k = g0i.split(" ");

	let d5g = new m6y();
	let o2e = this.x1q.o2e;
	d5g.p6l(this.x1q.j1d, o2e);
	let c6i = d5g.j1p();
	let t9a = this.x1q.j1d.x5w();
	for (const s of u4k)
	{
		if (s.length == 0)
		{
			continue;
		}
		let q7b = u6p(t9a, s);
		let x6m = j0w(t9a);
		let q3s = false;
		for (const w5b of x6m)
		{
			if (w5b.z5f == q7b.z5f &&
				w5b.m0h == q7b.m0h &&
				w5b.d4t == q7b.d4t)
			{
				t9a.l6i(w5b);
				let e0p = v6z(w5b);
				d5g.f9g(c6i, e0p);
				q3s = true;
				break;
			}
		}
    if (!q3s) break;
	}
	if (!d5g.w0j())
	{
    console.log("parse moves aantal: leeg!");
		return;
	}
  console.log("parse moves aantal: " + d5g.w0j());
	s1t.d5g = d5g;

 	if (this.g2g)
	{
		if (q8r == 1)
		{
			this.x1q.b5s = s1t;
		}
		if (q8r > this.x1q.lines.length)
		{
			this.x1q.lines.push(s1t);
		}
		else
		{
			this.x1q.lines[q8r-1] = s1t;
		}
	}
	else
	{
		this.x1q.lines.push(s1t);
		this.x1q.b5s = s1t;
	}
}

r6i(c9u)
{
  let x7o = c9u.get("currmove");
  let j8h = c9u.get("currmovenumber"); 
	this.x1q.b5e = p3z(j8h, 0);
	let x6m = j0w(this.x1q.j1d);
	this.x1q.h1t = x6m.length;
	let q7b = u6p(this.x1q.j1d, x7o);
	for (const w5b of x6m)
	{
		if (w5b.z5f == q7b.z5f &&
			w5b.m0h == q7b.m0h &&
			w5b.d4t == q7b.d4t)
		{
			this.x1q.h2s = w5b;
			break;
		}
	}
}

g0q()
{
	return this.x1q.x5w();
}

p9y()
{
	return this.o4b.x5w();
}

}

class k3k
{

constructor()
{
	this.m5f = '';
	this.q7q = '';
	this.x9v = '';
	this.j8v = '';
}

x5w()
{
  return Object.assign(new k3k(), this);
}

o5d()
{
	this.m5f = '';
	this.q7q = '';
	this.x9v = '';
	this.j8v = '';
}

}


const h1d = 10000000;

class u4h
{

constructor()
{
	this.d5g = new m6y();
	this.l0d = h1d;
  this.n8w = 0;
	this.i1k = 0;
}

x5w()
{
	let g9v = new u4h();
  g9v.d5g = this.d5g.x5w();
  g9v.l0d = this.l0d;
  g9v.n8w = this.n8w;
  g9v.i1k = this.i1k;
	return g9v;
}

o2e()
{
	return this.d5g.b0b(this.d5g.m0z());
}

s7j()
{
	return this.d5g.r3h();
}

}


class c0c
{

constructor()
{
	this.u3t = '';
	this.id = new k3k();
	this.o1b = new i9r();
	this.d0m = new i9r();
	this.b2x = true;
	this.u5r = true;
}

x5w()
{
	let i4h = new c0c();
	i4h.u3t = this.u3t;
	i4h.id = this.id.x5w();
	i4h.o1b = this.o1b.x5w();
	i4h.d0m = this.d0m.x5w();
	i4h.b2x = this.b2x;
	i4h.u5r = this.u5r;
	return i4h;
}


}


function x5r(k4u)
{
  if (Math.abs(k4u) < 0.005)
  {
    return "0.00";
  }
  else
  {
     const formatted = k4u.toFixed(2);
     return k4u > 0 ? `+${formatted}` : formatted;
  }
}

class b0i
{

constructor()
{
	this.k4u = 0.0;
	this.s3i = false;
	this.b2d = '';
	this.n1h = '';
	this.g9c = '';
	this.g6f = '';
	this.d5g = new m6y();
}

x5w()
{
	let w8a = new b0i();
  w8a.k4u = this.k4u;
  w8a.s3i = this.s3i;
  w8a.b2d = this.b2d;
  w8a.n1h = this.n1h;
  w8a.g9c = this.g9c;
  w8a.g6f = this.g6f;
  w8a.d5g = this.d5g.x5w();
	return w8a;
}

s5z()
{
	if (this.s3i)
	{
		return "#" + this.s3i;
	}
	else
	{
		return x5r(this.k4u);
	}
}

d4h()
{
	let p2b = scoreToMoveValue(this.k4u);
	let b8f = moveValueToEvalString(p2b);
	return b8f;
}

}

class t7g
{

constructor()
{
	this.j1d = new d8g();
	this.o2e = 1;
	this.u0u = false;
	this.q8s = false;
	this.t2y = false;
	this.lines = [];
	this.b5s = new b0i();
	this.h2s = new h2h();
	this.b5e = 0;
	this.h1t = 0;
}

x5w()
{
	let m5s = new t7g();
  m5s.j1d = this.j1d.x5w();
  m5s.o2e = this.o2e;
  m5s.u0u = this.u0u;
  m5s.q8s = this.q8s;
  m5s.t2y = this.t2y;
  m5s.lines = this.lines.slice();
  m5s.b5s = this.b5s.x5w();
  m5s.h2s = this.h2s.x5w();
  m5s.b5e = this.b5e;
  m5s.h1t = this.h1t;
	return m5s;
}

f7b()
{
	return this.b5s.d5g.w0j() > 0;
}

j6i()
{
	let j0j = this.b5s.d5g.j1p();
	this.b5s.d5g.l6i(j0j);
	return j0j.e0p.w5b();
}

}


class y5p
{
  constructor(type = '', m5f = '', value = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.m5f = m5f;
    this.value = value;
    this.min = min;
    this.max = max;
    this.values = values;
  }

  x5w()
  {
    return Object.assign(new y5p(), this);
  }
}

class i9r
{
  constructor()
  {
    this.o1b = [];
  }

  x5w()
  {
    let u0n = new i9r();
    u0n.o1b = this.o1b.map(p => p.x5w());
    return u0n;
  }

  o5d()
  {
    this.o1b.length = 0;
  }

  addBool(m5f, value)
  {
    this.o1b.push(new y5p("bool", m5f, value));
  }

  addInteger(m5f, value)
  {
    this.o1b.push(new y5p("int", m5f, value));
  }

  addSpin(m5f, value, min, max)
  {
    this.o1b.push(new y5p("spin", m5f, value, min, max));
  }

  addString(m5f, value)
  {
    this.o1b.push(new y5p("string", m5f, value));
  }

  addEnum(m5f, value, values)
  {
    this.o1b.push(new y5p("enum", m5f, value, '', '', values));
  }

  addButton(m5f)
  {
    this.o1b.push(new y5p("button", m5f, m5f));
  }

  j4m(m5f, value)
  {
    for (let p6t of this.o1b)
    {
      if (p6t.m5f === m5f)
      {
        p6t.value = value;
      }
    }
  }
}
class e0c
{

constructor()
{
	this.m5f = '';
}

x5w()
{
	let w9q = new e0c();
	w9q.m5f = this.m5f;
	return w9q;
}

t3k()
{
	return this.m5f.length == 0;
}

w6g()
{
	return this.m5f;
}

}


const r4b =
{
	o8h : 0,
	q7l : 1,
	m0s: 2,
	j4y: 3,
	q4i: 4,
	o7h: 5,
	z0a: 6,
	n5z: 7,
	s5i: 8,
	u5a: 9,
	q7t: 10,
	w9i: 11,
	j1a: 12,
	y6g: 13,
	k4f: 14,
	z8f: 15,
	z2n: 16,
	v7f: 17,
	v5n: 18,
	f5g: 19,
	u1r: 20,
	a9z: 21,
	v9h: 22,
	a4d: 23,
	j1i: 24,
	l2n: 25,
	w9o: 26,
	f8i: 27,
	y2b: 28,
	v1x: 29,
	u4l: 30,
	g1u: 31,
	j3l: 32,
	w5k: 33,
	e5v: 34,
	k4m: 35,
	b1b: 36,
	c9n: 37,
	n0r: 38,
	r8k: 39,
	e0a: 40,
	t6z: 41,
	c7e: 42,
	l7k: 43,
	s3m: 44,
	g9e: 45,
	p2p: 46,
	h3w: 47,
	y8w: 48,
	x8n: 49,
	b4a: 50,
	x9w: 51,
	q0e: 52,
	w8y: 53,
	b4n: 54,
	s2z: 55,
	p2w: 56,
	y7z: 57,
	f8c: 58,
	t0z: 59,
	g9m: 60,
	g0s: 61,
	e6q: 62,
	v3z: 63,
	m5y: 64,
	t5i: 65,
	p7z: 66,
	j2p: 67,
	r1d: 68,
	n9e: 69,
	o7l: 70,
	c5v: 71,
	g2q: 72,
	s9s: 73,
	l6n: 74,
	f8t: 75,
	k2n: 76,
	p6x: 77,
	o2k: 78,
	h0m: 79,
	x9k: 80,
	v3o: 81,
	b7m: 82,
	k9f: 83,
	y0p: 84,
	n6r: 85,
	c6q: 86,
	q2k: 87,
	q8y: 88,
	u3p: 89,
	u2o: 90,
	t4d: 91,
	q5e: 92,
	v3r: 93,
	n8b: 94,
	v6v: 95,
	q6i: 96,
	n7n: 97,
	r1v: 98,
	w6f: 99,
	t7p: 100,
	t3i: 101,
	a1y: 102,
	z3k: 103,
	o2v: 104,
	j8a: 105,
	x3m: 106,
	y5q: 107,
	p0v: 108,
	c8y: 109,
	v0j: 110,
	c3g: 111,
	j5w: 112,
	c4i: 113,
	j9o: 114,
	o0r: 115,
	s2t: 116,
	y4h: 117,
	c5k: 118,
	h0a: 119,
	p5u: 120,
	f5y: 121,
	x7r: 122,
	l0p: 123,
	f6s: 124,
	u0z: 125,
	u3k: 126,
	w2a: 127,
	f5r: 128,
	v2s: 129,
	f6c: 130,
	s2a: 131,
	s8o: 132,
	d9m: 133,
	a2j: 134,
	h3q: 135,
	j4w: 136,
	t6x: 137,
	k7o: 138,
	o3l: 139,
	a4r: 140,
	f0x: 141,
	c7u: 142,
	u8w: 143,
	x7j: 144,
	n0y: 145,
	b9q: 146,
	e8f: 147,
	j5q: 148,
	n4v: 149,
	r6w: 150,
	b4t: 151,
	n2k: 152,
	h3r: 153,
	i8u: 154,
	v3q: 155,
	y0f: 156,
	s7k: 157,
	x6n: 158,
	e4o: 159,
	y9t: 160,
	m6w: 161,
	u4p: 162,
	r5f: 163,
	b3i: 164,
	s7p: 165,
	d0q: 166,
	w1g: 167,
	j5p: 168,
	i5y: 169,
	a5l: 170,
	k4c: 171,
	t1m: 172,
	u6f: 173,
	p6q: 174,
	a3w: 175,
	k6n: 176,
	n2t: 177,
	y2g: 178,
	s5l: 179,
	s1m: 180,
	o5s: 181,
	f4a: 182,
	u6d: 183,
	q4m: 184,
	v2r: 185,
	i7g: 186,
	y8t: 187,
	l7l: 188,
	x2s: 189,
	q0v: 190,
	f2x: 191,
	e6a: 192,
	d2w: 193,
	t0h: 194,
	l3g: 195,
	s4c: 196,
	p0u: 197,
	z8o: 198,
	r8c: 199,
	u5l: 200,
	o6b: 201,
	p1v: 202,
	e5o: 203,
	j2h: 204,
	d7a: 205,
	j1b: 206,
	v9q: 207,
	k7g: 208,
	c9e: 209,
	e5n: 210,
	b4o: 211,
	a0n: 212,
	y4i: 213,
	b8z: 214,
	n4k: 215,
	a8c: 216,
	b4w: 217,
	d6z: 218,
	u5u: 219,
	l1a: 220,
	m1l: 221,
	o2m: 222,
	e8w: 223,
	i8k: 224,
	x3q: 225,
	d9x: 226,
	l3b: 227,
	i6u: 228,
	o1x: 229,
	z1r: 230,
	k8v: 231,
	a5m: 232,
	d1u: 233,
	r9h: 234,
	p6n: 235,
	k7y: 236,
	s1z: 237,
	s4h: 238,
	n4s: 239,
	f8v: 240,
	w2u: 241,
	j0s: 242,
	c0i: 243,
	q2x: 244,
	b7y: 245,
	f3o: 246,
	r5q: 247,
	m1m: 248,
	a1q: 249,
	l4s: 250,
	p6c: 251,
	i8j: 252,
	p2t: 253,
	i4v: 254,
	e6m: 255,
	r1j: 256,
	d4i: 257,
	h9o: 258,
	h1z: 259
};


const l8j = 0;
const f2j = 500;

function x1p(w1z)
{
	if (w1z.length != 3)
	{
		return 0;
	}
	let x4t = w1z[0];
	let i1e = w1z[1];
	let n2f = w1z[2];

	let e0b = 0;
	if (x4t == 'A' || x4t == 'a') e0b = 0;
	else if (x4t == 'B' || x4t == 'b') e0b = 1;
	else if (x4t == 'C' || x4t == 'c') e0b = 2;
	else if (x4t == 'D' || x4t == 'd') e0b = 3;
	else if (x4t == 'E' || x4t == 'e') e0b = 4;
	else return 0;
	if (isNaN(i1e) || isNaN(n2f))
	{
		return 0;
	}
	return e0b * 100 + p3z(w1z.substr(1, 2), 0) + 1;
}

function a1i(f3s)
{
	if (f3s)
	{
		let div = Math.trunc((f3s - 1) / 100);
		let p9e = (f3s - 1) % 100;
		let h6l = 'A';
		if (div == 0) h6l = 'A';
		else if (div == 1) h6l = 'B';
		else if (div == 2) h6l = 'C';
		else if (div == 3) h6l = 'D';
		else if (div == 4) h6l = 'E';
		return h6l + p9e.toString().padStart(2, '0');
	}
	else
	{
		return "";
	}
}
class j4b
{

constructor()
{
	this.x2u = 0;
	this.r1u = 0;
	this.y6a = 0;
}

x5w()
{
	let p3d = new j4b();
	p3d.o7k = this.x2u;
	p3d.d9v = this.r1u;
	p3d.s7f = this.y6a;
	return p3d;
}

t3k()
{
	return this.y6a == 0 && this.r1u == 0 && this.x2u == 0;
}

w9a()
{
	let s7f = this.y6a.toString().padStart(4, '0');
	let d9v = this.r1u.toString().padStart(2, '0');
	let o7k = this.x2u.toString().padStart(2, '0');
	return s7f + d9v + o7k;
}

p7o(x6w, w1z)
{
	let u1o = w1z.length;
	if (!u1o)
	{
		this.y6a = 0;
		this.r1u = 0;
		this.x2u = 0;
	}
	else if (x6w == "dd-mm-yyyy" || x6w == "dd.mm.yyyy")
	{
  	if (u1o == 4)
		{
      this.y6a = p3z(w1z.substr(1, 4), 0);
		}
		else if (u1o == 10)
		{
			this.x2u = p3z(w1z.substr(0, 2), 0);
			this.r1u = p3z(w1z.substr(3, 2), 0);
			this.y6a = p3z(w1z.substr(6, 4), 0);
		}
	}
	else if (x6w == "yyyy-mm-dd" || x6w == "yyyy.mm.dd")
	{
  	if (u1o == 4)
		{
      this.y6a = p3z(w1z.substr(1, 4), 0);
		}
		else if (u1o == 10)
		{
			this.x2u = p3z(w1z.substr(8, 2), 0);
			this.r1u = p3z(w1z.substr(5, 2), 0);
			this.y6a = p3z(w1z.substr(0, 4), 0);
		}
	}
	else if (x6w == "dd-mm-yy" || x6w == "dd.mm.yy")
	{
		if (u1o == 8)
		{
			this.x2u = p3z(w1z.substr(0, 2), 0);
			this.r1u = p3z(w1z.substr(3, 2), 0);
			this.y6a = p3z(w1z.substr(6, 2), 0) + 2000;
		}
	}
}

toString(x6w)
{
	let w1z = '';
	if (this.t3k())
	{
	}
	else if (x6w == "list")
	{
		let s7f = this.y6a.toString().padStart(4, '0');
		let d9v = this.r1u.toString().padStart(2, '0');
		let o7k = this.x2u.toString().padStart(2, '0');
		if (this.x2u)
		{
			w1z = o7k + "-" + d9v + "-" + s7f;
		}
		else if (this.r1u)
		{
			w1z = d9v + "-" + s7f;
		}
		else if (this.y6a)
		{
			w1z = s7f;
		}
	}
	else if (x6w == "dd-mm-yyyy")
	{
		let s7f = this.y6a.toString().padStart(4, '0');
		let d9v = this.r1u.toString().padStart(2, '0');
		let o7k = this.x2u.toString().padStart(2, '0');
		w1z = o7k + "-" + d9v + "-" + s7f;
	}
	else if (x6w == "dd.mm.yyyy")
	{
		let s7f = this.y6a.toString().padStart(4, '0');
		let d9v = this.r1u.toString().padStart(2, '0');
		let o7k = this.x2u.toString().padStart(2, '0');
		w1z = o7k + "." + d9v + "." + s7f;
	}
	else if (x6w == "yyyy-mm-dd")
	{
		let s7f = this.y6a.toString().padStart(4, '0');
		let d9v = this.r1u.toString().padStart(2, '0');
		let o7k = this.x2u.toString().padStart(2, '0');
		w1z = s7f + "-" + d9v + "-" + o7k;
	}
	else if (x6w == "yyyy.mm.dd")
	{
		let s7f = this.y6a.toString().padStart(4, '0');
		let d9v = this.r1u.toString().padStart(2, '0');
		let o7k = this.x2u.toString().padStart(2, '0');
		w1z = s7f + "." + d9v + "." + o7k;
	}
	else if (x6w == "yyyymmdd")
	{
		let s7f = this.y6a.toString().padStart(4, '0');
		let d9v = this.r1u.toString().padStart(2, '0');
		let o7k = this.x2u.toString().padStart(2, '0');
		w1z = s7f + d9v + o7k;
	}
	else if (x6w == "yyyy")
	{
		let s7f = this.y6a.toString().padStart(4, '0');
		w1z = s7f;
	}
	return w1z;
}

}

class u2d
{

constructor()
{
	this.w2j = new u8l();
	this.d6w = new u2u();
	this.e2j = 0;
	this.time = 0;
	this.p9d = "";
  this.j8v = r4b.o8h;
}

x5w()
{
	let y9b = new u2d();
	y9b.w2j = this.w2j.x5w();
	y9b.d6w = this.d6w.x5w();
	y9b.e2j = this.e2j;
	y9b.time = this.time;
	y9b.p9d = this.p9d;
  y9b.j8v = this.j8v;
	return y9b;
}

t3k()
{
	return this.w2j.t3k() &&
		this.d6w.t3k() &&
		this.e2j == 0 &&
		this.time == 0 &&
		this.p9d == "" &&
 		this.j8v == r4b.o8h;
}

}


class s5w
{

constructor()
{
	this.w4e = new u2d();
	this.d7m = new u2d();
	this.y9d = new h6o();
	this.d9p = new e0c();
	this.j8j = new n7y();
	this.p9d = new b7h();
	this.w9a = new j4b();
	this.f9i = a9w.o8h;
	this.f3s = 0;
	this.g0a = 0;
	this.g7m = 0;
	this.o9e = new u6m();
  this.id = new u9z();
}

x5w()
{
	let u6x = new s5w();
	u6x.w4e = this.w4e.x5w();
	u6x.d7m = this.d7m.x5w();
	u6x.y9d = this.y9d.x5w();
	u6x.d9p = this.d9p.x5w();
	u6x.j8j = this.j8j.x5w();
	u6x.p9d = this.p9d.x5w();
	u6x.w9a = this.w9a.x5w();
	u6x.f9i = this.f9i;
	u6x.f3s = this.f3s;
	u6x.g0a = this.g0a;
	u6x.g7m = this.g7m;
	u6x.o9e = this.o9e.x5w();
  u6x.id = this.id.x5w();
	return u6x;
}

t3k()
{
	return this.w4e.t3k() &&
		this.d7m.t3k() &&
		this.y9d.t3k() &&
		this.d9p.t3k() &&
		this.j8j.t3k() &&
		this.p9d.t3k() &&
		this.w9a.t3k() &&
		this.f9i == a9w.o8h &&
		this.f3s == 0 &&
		this.g0a == 0 &&
		this.g7m == 0 &&
		this.o9e.t3k();
}

g8l()
{
	let w1z = '';
	if (this.g7m)
	{
		w1z = this.g0a.toString() + "." + this.g7m.toString();
	}
	else if (this.g0a)
	{
		w1z = this.g0a.toString();
	}
	return w1z;
}

}


class u9z
{

constructor()
{
	this.r4c = '';
}

x5w()
{
	let x5n = new u9z();
	x5n.r4c = this.r4c;
	return x5n;
}

toString()
{
  return this.r4c;
}

}


class b7h
{

constructor()
{
	this.p9d = '';
}

x5w()
{
	let u3r = new b7h();
	u3r.p9d = this.p9d;
	return u3r;
}

t3k()
{
	return this.p9d.length == 0;
}

w6g()
{
	return this.p9d;
}

}


class u8l
{

constructor()
{
	this.r6e = '';
	this.s7s = '';
}

x5w()
{
	let k2c = new u8l();
	k2c.r6e = this.r6e;
	k2c.s7s = this.s7s;
	return k2c;
}

t3k()
{
	return this.s7s.length == 0 &&
		this.r6e.length == 0;
}

m5f()
{
	if (!this.s7s.length == 0 && !this.r6e.length == 0)
	{
		return this.s7s + "," + this.r6e;
	}
	else if (this.s7s.length == 0 && this.r6e.length == 0)
	{
		return "";
	}
	else if (this.r6e.length == 0)
	{
		return this.s7s;
	}
	else
	{
		return this.r6e;
	}
}

s6m()
{
	return this.m5f().replace(/,/g, " ");
}

k7l()
{
	return this.b6q(1).replace(/,/g, " ");
}

b6q(c7m)
{
	if (this.s7s.length == 0)
	{
		if (this.r6e.length == 0 || c7m < 1)
		{
			return "";
		}
		else
		{
			return this.r6e.substring(0, c7m);
		}
	}
	else
	{
		if (this.r6e.length == 0 || c7m < 1)
		{
			return this.s7s;
		}
		else
		{
			return this.s7s + "," + this.r6e.substring(0, c7m);
		}
	}
}

q1f(c0a)
{
	let w1z = c0a.trim();
	let j0j = w1z.lastIndexOf(",");
	if (j0j != -1)
	{
		this.s7s = w1z.substr(0, j0j).trim();
		this.r6e = w1z.substr(j0j+1, w1z.length).trim();
		if (this.r6e.length != 0)
		{
			if (this.r6e.charAt(0).toLowerCase() == this.r6e.charAt(0))
			{
				this.s7s += ",";
				this.s7s += this.r6e;
				this.r6e = "";
			}
		}
	}
	else
	{
		this.s7s = w1z;
		this.r6e = "";
	}
}

w6g()
{
	return this.m5f();
}

}

const a9w =
{
	o8h : 0,
	b9n : 1,
	p9s : 2,
	g3d : 3,
	p0y : 4,
	a9o : 5,
	w0i : 6,
	q7f : 7,
	q9k : 8,
	a1s : 9,
	h0f : 10,
	c6v : 11,
	l0k : 12,
	h2i : 13,
	x5f : 14,
	d5z : 15
};


function n7g(f9i)
{
	switch (f9i)
	{
		case a9w.b9n:
			return "2-0";
		case a9w.g3d:
			return "1-1";
		case a9w.p9s:
			return "0-2";
		default:
			return "";
	}
}
const b3l =
{
	u3z : 0,
	l0i : 1,
	m9m : 2
};

const h5y =
[
	[ b3l.u3z,   "High" ],
	[ b3l.l0i, "Middle" ],
	[ b3l.m9m,    "Low" ]
];

class n7y
{

constructor()
{
	this.p9d = '';
	this.v7d = '';
	this.y0b = new j4b();
	this.n2y = new j4b();
	this.o5g = 0;
	this.l1e = b3l.u3z;
}

x5w()
{
	let k8l = new n7y();
	k8l.p9d = this.p9d;
	k8l.v7d = this.v7d;
	k8l.y0b = this.y0b.x5w();
	k8l.n2y = this.n2y.x5w();
	k8l.o5g = this.o5g;
	k8l.l1e = this.l1e;
	return k8l;
}

t3k()
{
	return this.p9d.length == 0 &&
		this.v7d.length == 0 &&
		this.y0b.t3k() &&
		this.n2y.t3k() &&
		this.o5g == 0 &&
		this.l1e == b3l.u3z;
}

w6g()
{
	let w1z = this.p9d;
	if (this.v7d.length)
	{
		if (w1z.length)
		{
			w1z += " ";
		}
		w1z += this.v7d;
	}
	return w1z;
}

}


const y2y =
{
	o3g : 0,
	a1v : 1,
	t4i : 2,
	x8e : 3,
	i2c : 4,
	c7n : 5,
	l1h : 6,
	p6w : 7,
	s9b : 8,
	a9t : 9,
	x8k : 10,
	b6v : 11,
	f3z : 12,
	s8e : 13,
	y8d : 14,
	t1s : 15
};

class u6m
{

constructor()
{
	this.value = 0;
}

k9c(value)
{
	this.value = value;
}

x5w()
{
	let t9o = new u6m();
	t9o.value = this.value;
	return t9o;
}

t3k()
{
	return this.value == 0;
}

j6q()
{
	return this.value != 0;
}

o8h()
{
	return this.value == 0;
}

t4y()
{
	let o3f = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.q2i(i))
		{
			o3f++;
		}
	}
	return o3f;
}

q3z()
{
	this.value = 0;
}

set(h4k, o2x)
{
	if (o2x)
	{
		this.value |= (1 << h4k);
	}
	else
	{
		this.value &= ~(1 << h4k);
	}
}

q2i(h4k)
{
	return (this.value & (1 << h4k)) != 0;
}

n3c()
{
	return this.value;
}

}

function x8x(s7f)
{
	return s7f.toString().padStart(4, '0');
}

class u2u
{

constructor()
{
	this.m5f = '';
	this.w4a = 0;
	this.s7f = 0;
	this.e9g = false;
	this.j8v = r4b.o8h;
}

x5w()
{
	let d9w = new u2u();
	d9w.m5f = this.m5f;
	d9w.w4a = this.w4a;
	d9w.s7f = this.s7f;
	d9w.e9g = this.e9g;
	d9w.j8v = this.j8v;
	return d9w;
}

t3k()
{
	return this.m5f.length == 0 &&
		this.w4a == 0 &&
		this.s7f == 0 &&
		this.e9g == false &&
		this.j8v == r4b.o8h;
}

w2p()
{
	let w1z = this.m5f;
	if (this.w4a)
	{
		if (w1z.length)
		{
			w1z += " ";
		}
		w1z += this.w4a;
	}
	return w1z;
}

w6g()
{
	let w1z = this.m5f;
	if (this.w4a)
	{
		if (w1z.length)
		{
			w1z += " ";
		}
		w1z += this.w4a;
	}
	if (w1z.length)
	{
		w1z += " ";
	}
	w1z += this.q9f();
	return w1z;
}


h5a()
{
	let w1z = this.m5f;
	if (this.w4a > 1)
	{
		w1z += " ";
		w1z += this.w4a;
	}
	return w1z;
}

q9f()
{
	let w1z = '';
	if (this.e9g)
	{
		let m2j = x8x(this.s7f);
		let h9r = x8x(this.s7f + 1);
		let t9k = m2j + "/" + h9r.substr(2, 2);
		w1z = t9k;
	}
	else
	{
		w1z = x8x(this.s7f);
	}
	return w1z;
}

}

class m7o
{

constructor()
{
	this.n7j = 0;
	this.g9o = 0;
	this.v1l = 0;

}

}

function l7t(w1z, l6e, time)
{
	time.n7j = 0;
	time.g9o = 0;
	time.v1l = 0;

	let u1o = w1z.length;
	if (!u1o || w1z == "?")
	{
		return;
	}
	let i = 0;
	for (; i < u1o; i++)
	{
		if (!isNaN(w1z[i]))
		{
			break;
		}
	}
	let x5k = '';
	for (; i < u1o; i++)
	{
		if (isNaN(w1z[i]))
		{
			break;
		}
		x5k += w1z[i].toString();
	}
	for (; i < u1o; i++)
	{
		if (!isNaN(w1z[i]))
		{
			break;
		}
	}
	let i0f = '';
	for (; i < u1o; i++)
	{
		if (isNaN(w1z[i]))
		{
			break;
		}
		i0f += w1z[i].toString();
	}
	for (; i < u1o; i++)
	{
		if (!isNaN(w1z[i]))
		{
			break;
		}
	}
	let n7l = '';
	for (; i < u1o; i++)
	{
		if (isNaN(w1z[i]))
		{
			break;
		}
		n7l += w1z[i].toString();
	}
	let l7f = p3z(x5k, 0);
	let l2q = p3z(i0f, 0);
	let p1i = p3z(n7l, 0);
	if (
		l7f < 0 || l7f > l6e ||
		l2q < 0 || l2q > 59 ||
		p1i < 0 || p1i > 59)
	{
		l7f = 0;
		l2q = 0;
		p1i = 0;
	}
	time.n7j = l7f;
	time.g9o = l2q;
	time.v1l = p1i;
}

function t9e(w1z)
{
	if (w1z.length == 0)
	{
		return 0;
	}
	else
	{
		let time = new m7o();
		l7t(w1z, 9, time);
		return time.n7j * 60 + time.g9o;
	}
}


const a7t =
{
	o8h : 0,
	t5a : 1,
	m2c : 2,
	y9d : 3,
	f9u : 4,
	x1k : 5,
	n6f : 6,
	l6w : 7
};

const h8z =
[
	[ a7t.o8h, 			 	""                   ],
	[ a7t.t5a,  		 	"SingleGame"         ],
	[ a7t.m2c,  		 	"Match"              ],
	[ a7t.y9d,  "RoundRobin"         ],
	[ a7t.f9u,   		"SwissSystem"        ],
	[ a7t.x1k,    "Knockout"           ],
	[ a7t.n6f,"Simul"              ],
	[ a7t.l6w,"ScheveningenSystem" ]
];

class h6o
{

constructor()
{
	this.p9d = '';
	this.f5n = '';
	this.t6n = new j4b();
	this.a8h = new j4b();
	this.m2w = i0p.m3c;
	this.x0t = 0;
	this.j8v = r4b.o8h;
	this.type = a7t.o8h;
	this.w0t = 0;
	this.r3r = false;
	this.f6x = false;
	this.c8s = false;
	this.n7r = false;
}

x5w()
{
	let u8r = new h6o();
	u8r.p9d = this.p9d;
	u8r.f5n = this.f5n;
	u8r.t6n = this.t6n.x5w();
	u8r.a8h = this.a8h.x5w();
	u8r.m2w = this.m2w;
	u8r.x0t = this.x0t;
	u8r.j8v = this.j8v;
	u8r.type = this.type;
	u8r.w0t = this.w0t;
	u8r.r3r = this.r3r;
	u8r.f6x = this.f6x;
	u8r.c8s = this.c8s;
	u8r.n7r = this.n7r;
	return u8r;
}

t3k()
{
	return this.p9d.length == 0 &&
		this.f5n.length == 0 &&
		this.t6n.t3k() &&
		this.a8h.t3k() &&
		this.m2w == i0p.m3c &&
		this.x0t == 0 &&
		this.j8v == r4b.o8h &&
		this.type == a7t.o8h &&
		!this.w0t &&
		!this.r3r &&
		!this.f6x &&
		!this.c8s &&
		!this.n7r;
}

w6g()
{
	let w1z = this.p9d;
	if (this.f5n.length)
	{
		if (w1z.length)
		{
			w1z += " ";
		}
		w1z += this.f5n;
	}
	if (w1z.length)
	{
		w1z += " ";
	}
	let s7f = this.t6n.s7f.toString().padStart(4, '0');
	w1z += s7f;
	return w1z;
}

}



const i0p =
{
	m3c : 0,
	b7c : 1,
	k8w : 2,
	x7u : 3
};

const u8f =
[
	[ i0p.m3c, "Normal" ],
	[ i0p.b7c,  "Rapid"  ],
	[ i0p.k8w,  "Blitz"  ],
	[ i0p.x7u,   "Corr"   ]
];

function g9p(m2w)
{
	return u8f[m2w][1];
}

function x7d()
{
	let g3t = [];
	for (const m2w of u8f)
	{
		g3t.push(m2w[1]);
	}
	return g3t;
}

class r0u
{

constructor()
{
	this.q4b = '';
	this.z3e = '';
	this.g7y = b1x.o8h;
	this.style = s1v.o8h;
	this.value = z4r.o8h;
	this.n3a = new z5k();
	this.i2i = new u6i();
	this.o9d = new s2q();
	this.a9a = a8g.o8h;
	this.h4j = false;
	this.y7n = false;
  this.m3d = false;
}

x5w()
{
	let n6n = new r0u();
	n6n.q4b = this.q4b;
	n6n.z3e = this.z3e;
	n6n.g7y = this.g7y;
	n6n.style = this.style;
	n6n.value = this.value;
	n6n.n3a = this.n3a.x5w();
	n6n.i2i = this.i2i.x5w();
	n6n.o9d = this.o9d.x5w();
	n6n.a9a = this.a9a;
	n6n.h4j = this.h4j;
	n6n.y7n = this.y7n;
 	n6n.m3d = this.m3d;
	return n6n;
}

t3k()
{
	return this.q4b.length == 0 &&
		this.z3e.length == 0 &&
		this.g7y == b1x.o8h &&
		this.style == s1v.o8h &&
		this.value == z4r.o8h &&
		this.n3a.t3k() &&
		this.i2i.t3k() &&
		this.o9d.t3k() &&
		this.a9a == a8g.o8h &&
		this.h4j == false &&
		this.y7n == false &&
 		this.m3d == false;
}

}

const a8g =
{
	o8h : 0,
	o6w : 1,
	l0i : 2,
	j2o : 3
};

const x7t =
{
	g6s : 0,
	e3s : 1,
	o4v : 2,
	i8a : 3,
	a0g : 4,
	o9s : 5,
	v7j : 6,
	d5z : 7,
	d1g : 8,
	j3q : 9,
	r2b : 10,
	x7e : 11,
	q8s : 12,
	d5i : 13,
	j7x : 14,
	a2b : 15
};

class z5k
{

constructor()
{
	this.value = 0;
}

k9c(value)
{
	this.value = value;
}

x5w()
{
	let j0u = new z5k();
	j0u.value = this.value;
	return j0u;
}

t3k()
{
	return this.value == 0;
}

j6q()
{
	return this.value != 0;
}

o8h()
{
	return this.value == 0;
}

t4y()
{
	let o3f = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.q2i(i))
		{
			o3f++;
		}
	}
	return o3f;
}

q3z()
{
	this.value = 0;
}

set(h4k, o2x)
{
	if (o2x)
	{
		this.value |= (1 << h4k);
	}
	else
	{
		this.value &= ~(1 << h4k);
	}
}

q2i(h4k)
{
	return (this.value & (1 << h4k)) != 0;
}

n3c()
{
	return this.value;
}

}

const b1x =
{
	o8h : 0,
	e3l : 1,
	x6h : 2,
	w2x : 3,
	l5c : 4,
	k4e : 5,
	m6p : 6
};

const e4e =
[
	[ b1x.o8h,     		  ""   ],
	[ b1x.e3l,       		  "RR" ],
	[ b1x.x6h, 		  "&#8979;"  ],
	[ b1x.w2x, 		  "&#8804;"  ],
	[ b1x.l5c,  "="  ],
	[ b1x.k4e,   "&#9651;"  ],
	[ b1x.m6p,  "&#9661;"  ]
];

function y6q(g7y)
{
	return e4e[g7y][1];
}


const s1v =
{
	o8h : 0,
	i7k : 1,
	r4r : 2,
	d3g : 3,
	j2x : 4,
	c7b : 5,
	x7l : 6,
	a5g : 7,
	n1n : 8
};

const y4w =
[
	[ s1v.o8h,     		"" 	 ],
	[ s1v.i7k,       	"!"  ],
	[ s1v.r4r, 					"?"  ],
	[ s1v.d3g,	"!?" ],
	[ s1v.j2x,	 		"?!" ],
	[ s1v.c7b,  	"!!" ],
	[ s1v.x7l, 			"??" ],
	[ s1v.a5g, 		"&#8857;"  ],
	[ s1v.n1n, 		"&#9723;"  ]
];

function b8y(style)
{
	return y4w[style][1];
}


class d5p
{

constructor()
{
	this.e0p = new m4g();
	this.v9v = null;
	this.w2k = null;
	this.u9s = null;
	this.d8n = null;
  this.w4a = 0; 
}

h6e(e0p)
{
	this.e0p = e0p.x5w();
}

c3y(j1d, v6w, n6w, c0l)
{
	this.e0p.c3y(j1d, v6w, n6w, c0l);
}

}

class g5i
{

constructor()
{
	this.b1m = null;
	this.e0p = null;
}

c3b(l6c)
{
	return this.b1m == l6c.b1m;
}

e6d(l6c)
{
	return !this.c3b(l6c);
}

x5w()
{
	let x4m = new g5i();
  x4m.b1m = this.b1m;
  x4m.e0p = this.e0p;
	return x4m;
}

}


class m6y
{

constructor()
{
	this.c0q = new d8g();
 	this.y8j = null;
	this.i1q = 1;
	this.c0q.v5l();
  this.a6u = new r0u();
}

h0r(l6c)
{
	this.p6l(l6c.c0q, l6c.i1q);
	this.a6u = l6c.a6u.x5w();
	this.y8j = this.f5c(l6c.y8j);
}

x5w()
{
	let h6d = new m6y();
	h6d.h0r(this);
	return h6d;
}

p6l(p5e, b1g)
{
	this.c0q = p5e.x5w();
	this.i1q = b1g;
	this.a6u = new r0u();
	this.y8j = null;
}

b1g()
{
	return this.i1q;
}

p5e()
{
	return this.c0q.x5w();
}


m0z()
{
	let j0j = this.j1p();
	this.n4j(j0j);
	return j0j;
}


r3h()
{
	let n4j = this.m0z();
	return this.j1d(n4j);
}


b0b(j0j)
{
  let n5m = this.i5v(j0j) + 1;
	if (n5m)
	{
		return this.i1q +
			Math.floor((n5m - 1 + this.c0q.z0j()) / 2);
	}
	else
	{
		return this.i1q;
	}
}

i5v(j0j)
{
	let n5m = 0;
	if (!j0j.b1m)
	{
		return 0;
	}
	let t8z = j0j.b1m;
	while (1)
	{
		n5m++;
		if (!t8z.w2k)
		{
			let q1b = t8z;
			while (q1b.u9s)
			{
				q1b = q1b.u9s;
			}
			if (!q1b.w2k)
			{
				break;
			}
		}
		if (t8z.w2k)
		{
			t8z = t8z.w2k;
		}
		else
		{
			let q1b = t8z;
			while (q1b.u9s)
			{
				q1b = q1b.u9s;
			}
			t8z = q1b.w2k;
		}
	}
	return n5m;
}


w0j()
{
	let s5p = 0;
	let o6n = this.y8j;
	while (o6n)
	{
		s5p++;
		o6n = o6n.v9v;
	}
	return s5p;
}

p9x()
{
	return this.y8j != null;
}

g6l(j0j)
{
	return j0j.c3b(this.j1p());
}

z6f(j0j)
{
	if (j0j.b1m)
	{
		return j0j.b1m.v9v == null;
	}
	else if (this.y8j)
	{
		return false;
	}
	else
	{
		return true;
	}
}

m7j(j0j)
{
	if (!this.g6l(j0j))
	{
		if (j0j.b1m.w2k)
		{
			j0j.b1m = j0j.b1m.w2k;
			j0j.e0p = j0j.b1m.e0p;
		}
		else
		{
			let t8z = j0j.b1m;
			while (t8z.u9s)
			{
				t8z = t8z.u9s;
			}
			t8z = t8z.w2k;
			j0j.b1m = t8z;
      if (j0j.b1m)
      {
  			j0j.e0p = j0j.b1m.e0p;
      }
      else
      {
        j0j.e0p = null;
      }
		}
	}
}

l6i(j0j)
{
	if (!this.z6f(j0j))
	{
		j0j.b1m = this.v0x(j0j);
		j0j.e0p = j0j.b1m.e0p;
	}
}

m7u(j0j, w3h)
{
	let s6d = this.b5z(j0j);
	if (w3h < 0 || w3h >= s6d)
	{
		return;
	}
	let q1b = this.v0x(j0j);
	let i = 0;
	while (i != w3h)
	{
		i++;
		q1b = q1b.d8n;
	}
	j0j.b1m = q1b;
	j0j.e0p = j0j.b1m.e0p;
}

o2e(j0j)
{
	if (!j0j.b1m)
	{
		return this.i1q;
	}
	let n5m = this.i5v(j0j);
	if (n5m)
	{
		return this.i1q +
      Math.floor((n5m - 1 + this.c0q.z0j()) / 2);
	}
	else
	{
		return this.i1q;
	}
}

j1p()
{
	let j0j = new g5i();
	j0j.b1m = null;
	j0j.e0p = null;
	return j0j;
}

n4j(j0j)
{
	if (!this.z6f(j0j))
	{
		let t8z = this.v0x(j0j);
		while (true)
		{
			if (!t8z.v9v)
			{
				break;
			}
			t8z = t8z.v9v;
		}
		j0j.b1m = t8z;
		j0j.e0p = j0j.b1m.e0p;
	}
}

c6z(o9c)
{
	let j0j = this.j1p();
	if (o9c > 0)
	{
    this.o9c = 0;
		this.i6j(j0j, o9c);
		return j0j;
	}
	else
	{
		return j0j;
	}
}

i6j(j0j, o9c)
{
	while (true)
	{
		if (this.z6f(j0j))
		{
			return false;
		}
		let s6d = this.b5z(j0j);
		if (s6d > 1)
		{
			let s0m = j0j.x5w();
			for (let i = 1; i < s6d; i++)
			{
				this.m7u(j0j, i);
				this.o9c++;
				if (this.o9c == o9c)
				{
					return true;
				}
				if (this.i6j(j0j, o9c))
				{
					return true;
				}
        j0j.b1m = s0m.b1m;
        j0j.e0p = s0m.e0p;
			}
		}
		this.l6i(j0j);
		this.o9c++;
		if (this.o9c == o9c)
		{
			return true;
		}
	}
}

o4h(j0j)
{
	if (!j0j.b1m)
	{
		return 0;
	}
	else
	{
		return j0j.b1m.w4a;
	}
}

b6k(j0j)
{
	let d5g = [];
 	if (!j0j.b1m)
  {
		return d5g;
	}
	let t8z = j0j.b1m;
	while (1)
	{
		d5g.push(t8z);
		if (!t8z.w2k)
		{
			let q1b = t8z;
			while (q1b.u9s)
			{
				q1b = q1b.u9s;
			}
			if (!q1b.w2k)
			{
				break;
			}
		}
		if (t8z.w2k)
		{
			t8z = t8z.w2k;
		}
		else
		{
			let q1b = t8z;
			while (q1b.u9s)
			{
				q1b = q1b.u9s;
			}
			t8z = q1b.w2k;
		}
	}
	return d5g.reverse();
}

k7n(j0j)
{
	let d5g = this.b6k(j0j);
	let s6d = this.b5z(j0j);
	if (s6d == 0)
	{
		return d5g;
	}
	let l6k = this.d0c(j0j, 0);
	while (l6k)
	{
		d5g.push(l6k);
		l6k = l6k.v9v;
	}
	return d5g;
}

b5z(j0j)
{
	let l6k = this.v0x(j0j);
	if (!l6k)
	{
		return 0;
	}
	let s6d = 1;
	while (l6k.d8n)
	{
		s6d++;
		l6k = l6k.d8n;
	}
	return s6d;
}

h3z(j0j, u0r)
{
	if (this.g6l(j0j))
	{
		this.y8j = u0r;
		j0j.b1m = u0r;
		j0j.e0p = j0j.b1m.e0p;
	}
	else
	{
		j0j.b1m.v9v = u0r;
		u0r.w2k = j0j.b1m;
		j0j.b1m = u0r;
		j0j.e0p = j0j.b1m.e0p;
	}
}

k6x(j0j, u0r)
{
	let q1b = this.v0x(j0j);
	while (q1b.d8n)
	{
		q1b = q1b.d8n;
	}
	q1b.d8n = u0r;
	u0r.u9s = q1b;

	j0j.b1m = u0r;
	j0j.e0p = j0j.b1m.e0p;
}

f9g(j0j, e0p)
{
	let u0r = new d5p();
 	u0r.h6e(e0p);
	if (this.z6f(j0j))
	{
		this.h3z(j0j, u0r);
	}
	else
	{
		this.k6x(j0j, u0r);
	}
}


e1h(j0j, d5g)
{
	for (const e0p of d5g)
	{
		this.f9g(j0j, e0p);
	}
}


x1i(j0j)
{
	let q1b = this.d0c(j0j, 1);
	if (!q1b)
	{
		return false;
	}
	while (q1b)
	{
		let o6n = q1b.v9v;
		while (o6n)
		{
			if (o6n.d8n)
			{
				return false;
			}
			o6n = o6n.v9v;
		}
		q1b = q1b.d8n;
	}
	return true;
}

r4d()
{
	let o6n = this.y8j;
	while (o6n)
	{
		if (o6n.d8n)
		{
			return true;
		}
		o6n = o6n.v9v;
	}
	return false;
}

w3o()
{
	if (!this.a6u.t3k())
	{
		return true;
	}
	if (this.r4d())
	{
		return true;
	}
	let o6n = this.y8j;
	while (o6n)
	{
		if (o6n.e0p.w3o())
		{
			return true;
		}
		o6n = o6n.v9v;
	}
	return false;
}

v0x(j0j)
{
	if (j0j.b1m)
	{
		return j0j.b1m.v9v;
	}
	return this.y8j;
}

d0c(j0j, w3h)
{
	let i = 0;
	let q1b = this.v0x(j0j);
	while (q1b && i != w3h)
	{
		q1b = q1b.d8n;
		i++;
	}
	return q1b;
}

f5c(q1b)
{
	let g7g = q1b;
	let i9k = null;
	let u0r = null;
	let l3s = null;
	while (g7g)
	{
		u0r = new d5p();
		u0r.h6e(g7g.e0p);
		if (i9k)
		{
			i9k.v9v = u0r;
			u0r.w2k = i9k;
		}
		else
		{
			l3s = u0r;
		}
		i9k = u0r;
		if (g7g.d8n && !g7g.u9s)
		{
			let f8p = g7g.d8n;
			let u3x = i9k;
			while (f8p)
			{
				let q6u = this.f5c(f8p);
				u3x.d8n = q6u;
				q6u.u9s = u3x;
				u3x = q6u;
				f8p = f8p.d8n;
			}
		}
		g7g = g7g.v9v;
	}
	return l3s;
}

f1w()
{
	return this.a6u;
}

s4z()
{
	return this.a6u.q4b;
}

f8e(o5j)
{
	this.a6u.q4b = o5j;
}

g4v()
{
	return !this.a6u.i2i.t3k();
}

i9x(i2i)
{
	this.a6u.i2i = i2i.x5w();
}

t7y()
{
	return this.a6u.i2i;
}

w3x()
{
	return !this.a6u.o9d.t3k();
}

j9q(o9d)
{
	this.a6u.o9d = o9d.x5w();
}

u6s()
{
	return this.a6u.o9d;
}

i7q()
{
	return !this.a6u.n3a.t3k();
}

r7z(n3a)
{
	this.a6u.n3a = n3a.x5w();
}

d4d()
{
	return this.a6u.n3a;
}

y7c(o9c)
{
  if (o9c == 0)
  {
    return true;
  }
	let o6n = this.y8j;
	while (o6n)
	{
    if (o6n.w4a == o9c)
    {
      return true;
    }
		o6n = o6n.v9v;
	}
	return false;
}

e1a()
{
	let j0j = this.j1p();
	this.o9c = 0;
	this.f0d(j0j);
}

f0d(j0j)
{
	while (true)
	{
		if (this.z6f(j0j))
		{
			return;
		}
		let s6d = this.b5z(j0j);
		if (s6d > 1)
		{
			let s0m = j0j.x5w();
			for (let i = 1; i < s6d; i++)
			{
				this.m7u(j0j, i);
				this.o9c++;
        j0j.b1m.w4a = this.o9c;
				this.f0d(j0j);
        j0j.b1m = s0m.b1m;
        j0j.e0p = s0m.e0p;
			}
		}
		this.l6i(j0j);
  	this.o9c++;
    j0j.b1m.w4a = this.o9c;
	}
}

j1d(j0j)
{
	let j1d = this.c0q.x5w();
	if (!j0j.b1m)
	{
		return j1d;
	}
	let d5g = this.h5l(j0j);
  for (const e0p of d5g)
	{
		j1d.l6i(e0p.w5b());
	}
	return j1d;
}

h5l(j0j)
{
	let d5g = [];
 	if (!j0j.b1m)
  {
		return d5g;
	}
	let t8z = j0j.b1m;
	while (1)
	{
		d5g.push(t8z.e0p);
		if (!t8z.w2k)
		{
			let q1b = t8z;
			while (q1b.u9s)
			{
				q1b = q1b.u9s;
			}
			if (!q1b.w2k)
			{
				break;
			}
		}
		if (t8z.w2k)
		{
			t8z = t8z.w2k;
		}
		else
		{
			let q1b = t8z;
			while (q1b.u9s)
			{
				q1b = q1b.u9s;
			}
			t8z = q1b.w2k;
		}
	}
	return d5g.reverse();
}


f9b()
{
	this.a6u = new r0u();
	this.y8j = null; 
  
}


e2a()
{
	let d5g = [];
	let o6n = this.y8j;
	while (o6n)
	{
		d5g.push(o6n.e0p);
		o6n = o6n.v9v;
	}
	return d5g;
}


}

const z4r =
{
	o8h : 0,
	p0y : 1,
	a9o : 2,
	w0i : 3,
	q7f : 4,
	q9k : 5,
	a1s : 6,
	h0f : 7,
	c6v : 8,
	l0k : 9,
	h2i : 10,
	x5f : 11,
	d5z : 12,
	u8o : 13,
	q4a : 14,
	i8a : 15
};

const c4l =
[
	[ z4r.o8h,     						  ""    ],
	[ z4r.p0y,        "+&#8211;" ],
	[ z4r.a9o, 						"&#177;" ],
	[ z4r.w0i,		"&#10866;"  ],
	[ z4r.q7f, 							"="   ],
	[ z4r.q9k,  							"&#8734;" ],
	[ z4r.a1s,  	"&#10865;"],
	[ z4r.h0f, 						"&#8723;" ],
	[ z4r.c6v, 				"&#8211;+"],
	[ z4r.l0k,						"&#8773;" ],
	[ z4r.h2i, 						"&#8646;" ],
	[ z4r.x5f,  						"&#8593;" ],
	[ z4r.d5z, 								"&#8594;" ],
	[ z4r.u8o, 					"&#8853;" ],
	[ z4r.q4a,		"&#10227;"],
	[ z4r.i8a, 								"N"   ]
];

function v5g(value)
{
	return c4l[value][1];
}


const j5s =
{
	h8j : 0,
	h9i : 1,
	n8l : 2
};

const u0g =
{
	o8h : 0,
	a0k : 1,
	g2e : 2,
	x3z : 3,
	i6w : 4,
	g7y : 5,
	z3e : 6,
	q4b : 7,
	c1b : 8,
	n3a : 9,
	h4j : 10,
	y7n : 11
};

/*
TO DO
- Aanpassen voor tekst after van r6a daar kan dia inzitten (zie c++)
- Vette tekst en niet vette a0k testen bij wel/niet MultiPV
*/
class a9e
{

constructor()
{
	this.u8j = new m7p();
  this.f6f = true;
  this.w2m = false;
  this.h6h = true;
  this.l2f = true;
  this.j6d = j5s.h8j;
  this.t2y = false;
  this.p1j = true;
 	this.a8o = true;
 	this.d8c = -1;
  this.o7e = false;
  this.x1v = false;
	this.u3q = false;
	this.b2c = true;
  this.z1o = false;
  this.v5f = false;
  this.s5b = 0;
	this.m0t = true;
  this.l1b = null;
 	this.y9a = u0g.o8h;
}

q9l(d5g)
{
	this.l1b = d5g;
 	let j1p = this.l1b.j1p();
	let p5e = this.l1b.p5e();
	this.y9a = u0g.o8h;
	this.b2c = true;
	this.x1v = false;
	this.u3q = false;
	this.o7e = false;
	this.z1o = this.l1b.w3o();
	this.m0t = true;
	this.s5b = 0;

	if (this.t2y)
	{
		this.w1l(u0g.g2e);
		this.z4a();
	}
	else
	{
    
    if (this.j6d == j5s.h9i ||
      (this.j6d == j5s.n8l && !p5e.v6s()))
    {
      if (this.l2f)
      {
        this.y2f(j1p, p5e, s5b);
        this.b2c = true;
      }
    }

    this.w1l((this.z1o && !this.m3d) ? u0g.a0k : u0g.g2e);
    this.r2m(this.z1o);
    this.f9g(j1p, "");
    this.j9b(j1p, this.l1b.f1w().q4b);

    if (this.l1b.p9x())
    {
      this.l5n();
    }
   	this.w1l(u0g.o8h);
   	this.o0q();
  }
}

z4a()
{
	let j0j = this.l1b.j1p();
	let b5z = this.l1b.b5z(j0j);
	for (let i = 0; i < b5z; i++)
	{
    this.u8j.i1n('<div class="variation-row">');
		j0j = this.l1b.j1p();
  	let j1d = this.l1b.p5e();
	  let o2e = this.l1b.b1g();
		this.l1b.m7u(j0j, i);
		this.b2c = true;
		let l7i = true;
		let e0p = j0j.e0p;
		let z3e = e0p.z3e();
		if (z3e.length)
		{
			this.v4u(j0j, z3e);
		}
		this.w1l(u0g.g2e);
		do
		{
			if (l7i)
			{
				j0j.e0p.j8t();
			}
			this.w6b(j0j, j1d, o2e);
			if (l7i)
			{
				j0j.e0p.k3w(z3e);
				l7i = false;
			}
			if (this.l1b.z6f(j0j))
			{
				break;
			}
			j1d.l6i(j0j.e0p);
			if (j1d.a3g())
			{
				o2e++;
			}
			this.l1b.l6i(j0j);
		} while (true);
    this.u8j.i1n('<div');
	}
}

l5n()
{
  let n9m = 0;
 	let j0j = this.l1b.j1p();
	let j1d = this.l1b.p5e();
  let o2e = this.l1b.b1g();

	let y0t = 100000;
	if (this.d8c == 0)
	{
		return;
	}
	if (this.d8c != -1)
	{
		y0t = this.d8c;
	}
	let h7c = o2e + y0t - 1;
	this.b2c = true;
	while (true)
	{
		let b5z = this.l1b.b5z(j0j);
		while (o2e <= h7c && !this.l1b.z6f(j0j))
		{
      this.l1b.l6i(j0j);
    	this.w1l((this.z1o && !this.m3d) ? u0g.a0k : u0g.g2e);
			this.w6b(j0j, j1d, o2e);
			j1d.l6i(j0j.e0p.w5b());
 			if (j1d.a3g())
			{
				o2e++;
			}
			if (this.a8o && b5z > 1)
			{
				break;
			}
			b5z = this.l1b.b5z(j0j);
		}
		if (!b5z || o2e > h7c)
		{
			return;
		}
    j1d.m7j(j0j.e0p.w5b());
		if (j1d.z0j())
		{
			o2e--;
		}
    this.l1b.m7j(j0j);
		for (let i = 1; i < b5z; i++)
		{
      n9m++;
      let p5j = "<span class=\"tdline\" data-level=\"";
      p5j += n9m.toString();
      p5j += "\">";
      this.u8j.i1n(p5j);
			this.n9r(u0g.x3z);
			this.i5a("[", true);
			let g7y = '';
      this.q5y(j0j, j1d, o2e, i, g7y, n9m);
			this.w1l(u0g.x3z);
			this.i5a("]", true);
      this.u8j.i1n("</span>");
      n9m--;
     	this.w1l((this.z1o && !this.m3d) ? u0g.a0k : u0g.g2e);
		}
		this.n9r(this.y9a);
    this.l1b.l6i(j0j);
    j1d.l6i(j0j.e0p.w5b());
		if (j1d.a3g())
		{
			o2e++;
		}
		this.b2c = true;
	}
}

w6b(j0j, j1d, o2e)
{
	if (this.l1b.g6l(j0j))
	{
		return;
	}
 	let e0p = j0j.e0p;

	let w1z = '';
  let t6b = false;
  if (this.f6f)
	{
		if (e0p.l4f())
		{
			if (!this.l1b.g6l(j0j))
			{
        let h4p = j0j.x5w();
        this.l1b.m7j(h4p);
        if (h4p.e0p)
        {
  				if (h4p.e0p.j6r())
	  			{
		  			t6b = true;
			  	}
        }
			}
		}
  }
	if (this.x1v)
	{
		w1z = "(";
		this.x1v = false;
		if (this.f6f && e0p.z1d())
		{
			this.i5a("(", true);
			let b3q = this.y9a;
			this.v4u(j0j, e0p.z3e());
			this.w1l(b3q);
			w1z = "";
      t6b = true;
		}
	}
	else
	{
		if (this.f6f && e0p.z1d())
		{
  	  let b3q = this.y9a;
	  	this.v4u(j0j, e0p.z3e());
		  this.w1l(b3q);
      t6b = true;
    }
	}
	if (e0p.b9z())
	{
		w1z += y6q(e0p.g7y());
	}
	let z5n = e0p.z0y();
	if (z5n)
	{
    w1z += o2e;
		w1z += '.';
	}
	else
	{
		if (this.b2c || t6b)
		{
 			w1z += o2e;
			w1z += "...";
		}
	}
	w1z += i5s(j1d, e0p.w5b(), false);
	if (e0p.v8j())
	{
		w1z += b8y(e0p.style());
	}
	if (e0p.q2h())
	{
		w1z += v5g(e0p.value());
	}
	if (e0p.g0d())
	{
		w1z += " End Of Game";
  }
	if (this.u3q || this.o7e)
	{
		if (this.l1b.z6f(j0j) && (!this.f6f || !e0p.j6r()))
		{
			if (this.u3q)
			{
				w1z += ")";
				this.u3q = false;
			}
			else
			{
				w1z += ";";
				this.o7e = false;
			}
		}
	}
	this.f9g(j0j, w1z);
	this.b2c = false;

	if (e0p.m9v())
	{
		let q4b = e0p.q4b();
    let l1t = q4b.indexOf("[#]");
		let q0d = q4b.substring(0, l1t);
	  let o4t = q4b.substring(l1t + 3);
		if (q0d.length)
		{
			this.j9b(j0j, q0d);
		}
		this.s5b++;
		if (this.l2f)
		{
			this.n9r(u0g.o8h);
      this.y2f(j0j, j1d, this.s5b);
			this.b2c = true;
		}
		if (o4t.length)
		{
			this.j9b(j0j, o4t);
		}
	}
	else
	{
		this.j9b(j0j, e0p.q4b());
	}

  if (e0p.g0d())
	{
    this.u8j.z7v("<div>&nbsp;</div>"); 
   	this.o0q();
 	  this.r2m(false); 
 	  this.v5f = true;
	}
}

w1l(y1x)
{
	if (y1x != this.y9a)
	{
		this.b6u();
		this.y9a = y1x;
		this.x6a();
	}
}

x6a()
{
}

b6u()
{
	this.y9a = u0g.o8h;
}

n9r(y1x)
{
	this.b6u();
	this.y9a = u0g.o8h;
  
  
  
  
  this.u8j.z7v("<br>"); 
	if (y1x != u0g.o8h)
	{
		this.y9a = y1x;
		this.x6a();
	}
}

y2f(j0j, j1d, w4a)
{
  this.m0t = true;
	let p5j = "<span class=\"tddia\" movenr=\"";
  p5j += this.l1b.o4h(j0j).toString();
	p5j += "\">",
	this.u8j.i1n(p5j);
	this.u8j.i1n("<canvas></canvas>");
	this.u8j.i1n("</span>");
	this.b2c = true;
}

r3f(j0j, o5j)
{
  this.x2e(j0j);
	this.r1w(o5j);
  this.h4i();
}

q5y(c0m, y7y, o2e, w3h, g7y, n9m)
{
  let j0j = c0m.x5w();
  let j1d = y7y.x5w();

	if (g7y.length)
	{
		this.w1l(u0g.g7y);
		let g3y = g7y;
		g3y += ")";
    let p5j = "<span class=\"tdprefix\">";
    this.u8j.i1n(p5j);
  	this.i5a(g3y);
    this.u8j.i1n("</span>");
	}
	let b5z = 0;
	let n4d = 1;
  this.l1b.m7u(j0j, w3h);
	this.b2c = true;
	do
	{
		this.w1l(u0g.x3z);
		this.w6b(j0j, j1d, o2e);
		if (b5z > 1)
		{
      this.l1b.m7j(j0j);
      this.l1s(j0j, j1d, o2e);
      this.l1b.l6i(j0j);
			this.b2c = true;
		}
		j1d.l6i(j0j.e0p.w5b());
		if (j1d.a3g())
		{
			o2e++;
		}
		b5z = this.l1b.b5z(j0j);
		if (b5z == 0)
		{
			break;
		}
		if (b5z > 1)
		{
			if (!this.l1b.x1i(j0j))
			{
				break;
			}
		}
    this.l1b.l6i(j0j);
		n4d++;
	} while (true);

	if (this.l1b.z6f(j0j))
	{
		return;
	}

	let r9p = g7y.length;
	let g3y = '';
	let c9w = 1;
	for (let i = 0; i < b5z; i++)
	{
		if (r9p == 0)
		{
      g3y = String.fromCharCode('A'.charCodeAt() + c9w - 1);
		}
		else if (r9p == 1)
		{
      g3y = g7y;
      g3y += c9w;
		}
		else if (r9p == 2)
		{
      g3y = g7y;
      g3y += String.fromCharCode('a'.charCodeAt() + c9w - 1);
		}
		else
		{
      g3y = g7y;
      g3y += c9w;
		}

    let p5j = "<span class=\"tdline\" data-level=\"";
    p5j += n9m.toString();
    p5j += "\">";
    this.u8j.i1n(p5j);
  	this.n9r(this.y9a);
    this.q5y(j0j, j1d, o2e, i, g3y, n9m);
    this.u8j.i1n("</span>");
		c9w++;
	}
}

l1s(c0m, y7y, o2e)
{
  let j0j = c0m.x5w();
  let j1d = y7y.x5w();

	this.w1l(u0g.i6w);
	this.x1v = true;
	this.o7e = false;
	let b5z = this.l1b.b5z(j0j);
	for (let i = 1; i < b5z; i++)
	{
		if (i == b5z - 1)
		{
			this.u3q = true;
		}
		if (i < b5z - 1)
		{
			this.o7e = true;
		}
    this.f9w(j0j, j1d, o2e, i);
		if (this.o7e)
		{
			this.w1l(u0g.i6w);
			this.i5a(";", false);
			this.o7e = false;
		}
	}
	this.w1l(u0g.i6w);
	if (this.u3q)
	{
		this.i5a(")", false);
		this.u3q = false;
	}
}

f9w(c0m, y7y, o2e, w3h)
{
  let j0j = c0m.x5w();
  let j1d = y7y.x5w();

  this.l1b.m7u(j0j, w3h);
	let n4d = 0;
	this.b2c = true;
	do
	{
		n4d++;
		this.w1l(u0g.i6w);
		this.w6b(j0j, j1d, o2e);
		if (this.l1b.z6f(j0j))
		{
			break;
		}
		j1d.l6i(j0j.e0p.w5b());
		if (j1d.a3g())
		{
			o2e++;
		}
    this.l1b.l6i(j0j);
	} while (true);
}

f9g(j0j, w1z)
{
	if (w1z.length)
	{
 		this.m1f(j0j, w1z);
	}
	else
	{
		if (this.p1j)
    {
      this.m1f(j0j, "[...]");
    }
	}
	if (j0j.e0p)
	{
		if (j0j.e0p.u6c() || j0j.e0p.s2b())
		{
			this.m6h(j0j, u0g.c1b);
		}
		if (j0j.e0p.m9v())
		{
		}
		if (j0j.e0p.f0m())
		{
			this.m6h(j0j, u0g.h4j);
		}
		if (j0j.e0p.u1b())
		{
			this.m6h(j0j, u0g.n3a);
		}
	}
	else
	{
		if (this.l1b.g4v() || this.l1b.w3x())
		{
			this.m6h(j0j, u0g.c1b);
		}
		if (this.l1b.i7q())
		{
		 	this.m6h(j0j, u0g.n3a);
		}
	}
}

i5a(w1z, b9y)
{
	if (w1z.length == 0)
	{
		return;
	}
	if (!this.m0t && b9y)
	{
		this.u8j.z7v(" ");
	}
	this.u8j.z7v(w1z);
	this.m0t = false;
}

v4u(j0j, z3e)
{
	if (this.f6f && z3e.length)
	{
		this.w1l(u0g.z3e);
		this.r3f(j0j, z3e);
	}
}

j9b(j0j, q4b)
{
	if (this.f6f && q4b.length)
	{
		this.w1l(u0g.q4b);
		this.r3f(j0j, q4b);
	}
}

r1w(o5j)
{
  let r4j = o5j;
  let u0d = r4j.replaceAll("<br><br>", "<br>");
  let o8t = u0d.replaceAll("<br><br>", "<br>");
  let l8c = o8t.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = l8c;
  this.u8j.z7v(s);
}

m1f(j0j, w1z)
{
	if (w1z.length == 0)
	{
		return;
	}
	if (!this.m0t)
	{
		this.u8j.z7v(" ");
	}
  let q5d = '';
  if (j0j.e0p)
  {
  	if (j0j.e0p.j5j())
	  {
		  if (j0j.e0p.a9a() == a8g.o6w)
  		{
	  		q5d = "tdmove-crit-opening";
		  }
  		else if (j0j.e0p.a9a() == a8g.l0i)
	  	{
		  	q5d = "tdmove-crit-middle";
  		}
	  	else if (j0j.e0p.a9a() == a8g.j2o)
		  {
  			q5d = "tdmove-crit-end";
	  	}
  	}
  }
	let k8c = "<span class=\"";
	if (q5d.length == 0)
	{
		k8c += "tdmove\" movenr=\"";
	}
	else
	{
		k8c += "tdmove " + q5d + "\" movenr=\"";
	}
  k8c += this.l1b.o4h(j0j).toString();
  k8c += "\"";
	k8c += ">",
	k8c += w1z;
	k8c += "</span>";

	this.u8j.i1n(k8c);
	this.m0t = false;
}

m6h(j0j, y1x)
{
  if (y1x == u0g.c1b)
  {
    this.g2o(j0j);
  }
  else if (y1x == u0g.n3a)
  {
    this.n5n(j0j);
  }
}

g2o(j0j)
{
	let p5j = "<span class=\"tdcolors\" movenr=\"";
  p5j += this.l1b.o4h(j0j).toString();
	p5j += "\">",
	this.u8j.i1n(p5j);
	this.u8j.i1n("</span>");
}

n5n(j0j)
{
	let p5j = "<span class=\"tdmedal\" movenr=\"";
  p5j += this.l1b.o4h(j0j).toString();
	p5j += "\">",
	this.u8j.i1n(p5j);
	this.u8j.i1n("<canvas></canvas>");
	this.u8j.i1n("</span>");
}

r2m(l3n)
{
 	let p5j = "<span class=\"tdline\"";
	if (l3n)
	{
		p5j += " data-commented=\"1\"";
	}
	p5j += " data-level=\"0\">";
	this.u8j.z7v(p5j);
}

o0q()
{
  this.u8j.i1n("</span>");
}

x2e(j0j)
{
  let s4k = "tdcomment";
  if (this.w2m)
  {
    s4k += " is-bold";
  }
  let p5j = "<span class=\"" + s4k + "\" movenr=\"";
  p5j += this.l1b.o4h(j0j).toString();
  p5j += "\">";
  this.u8j.z7v(p5j);
}

h4i()
{
  this.u8j.i1n("</span>");
}

p9h(value)
{
  this.p1j = value;
}

t7m(value)
{
  this.w2m = value;
}

i4a(value)
{
  this.h6h = value;
}

x9x(value)
{
  this.t2y = value;
}

} 
const n6q =
{
	d5z : 1,
	j3q : 2,
	z7t : 3
};

class n6j
{

constructor()
{
	this.m0h = 0;
	this.z5f = 0;
	this.type = n6q.d5z;
}

x5w()
{
	let k9j = new n6j();
	k9j.m0h = this.m0h;
	k9j.z5f = this.z5f;
	k9j.type = this.type;
	return k9j;
}

}

function u4e(m0h, z5f, type)
{
	let s = new n6j();
	s.m0h = m0h;
	s.z5f = z5f;
	s.type = type;
	return s;
}
class u6i
{

constructor()
{
	this.s3h = [];
}

x5w()
{
	let t0x = new u6i();
	for (const k0o of this.s3h)
	{
		t0x.add(k0o.x5w());
	}
	return t0x;
}

o5d()
{
	this.s3h.length = 0;
}

t3k()
{
	return this.s3h.length == 0;
}

size()
{
	return this.s3h.length;
}

add(k0o)
{
	let n7q = k0o.x5w();
	this.s3h.push(n7q);
}

}

const o3t =
{
	u3a : 0,
	w5i : 1,
	q2q : 2
};

class d7y
{

constructor()
{
	this.k2a = 0;
	this.type = o3t.u3a;
}

x5w()
{
	let v4h = new d7y();
	v4h.k2a = this.k2a;
	v4h.type = this.type;
	return v4h;
}

}

function j0l(k2a, type)
{
	let n3h = new d7y();
	n3h.k2a = k2a;
	n3h.type = type;
	return n3h;
}

class s2q
{

constructor()
{
	this.n2c = [];
}

x5w()
{
	let k1z = new s2q();
	for (const w6z of this.n2c)
	{
		k1z.add(w6z.x5w());
	}
	return k1z;
}

o5d()
{
	this.n2c.length = 0;
}

t3k()
{
	return this.n2c.length == 0;
}

size()
{
	return this.n2c.length;
}

add(i8v)
{
	let g9u = i8v.x5w();
	this.n2c.push(g9u);
}

}

const z8y =
{
	y1y    : 0,
	b5a  : 1,
	c3u  : 2,
	v8q    : 3,
  h6b   : 4,
	z2t    : 5,
};


function n5t(h7f)
{
	let w1z = '';
	switch (h7f)
	{
		case z8y.y1y:
			w1z = "P";
			break;
		case z8y.b5a:
			w1z = "N";
			break;
		case z8y.c3u:
			w1z = "B";
			break;
		case z8y.v8q:
			w1z = "R";
			break;
		case z8y.h6b:
			w1z = "Q";
			break;
		case z8y.king:
			w1z = "K";
			break;
	}
	return w1z;
}

class b1y
{

constructor()
{
  this.e3j = 0;
	this.q4h = new s5w();
	this.d5g = new m6y();
}

x5w()
{
	let l5u = new b1y();
  l5u.e3j = this.e3j;
	l5u.q4h = this.q4h.x5w();
	l5u.d5g = this.d5g.x5w();
	return l5u;
}

}

const l9g = 	 		"#7B8295";
const g6x =			"#9F9F9F";
const i7s = 			    "#7B8295";
const t4c = 		  "#FFFFFF";
const o1f =       "#D0B194";

const c5g	   = "#E13129";
const h0o	 = "#389C13";
const o1u = "#E2B628";

const h1a	 = "#E13129";
const l8d	 = "#389C13";
const s5x	   = "#E2B628";

class p8q
{

constructor()
{
	this.i0w = null;
	this.o4f = false;
	this.s3b = null;
	this.c9f = null;
	this.j8g = null;
	this.r0z = 0;
	this.k9d = 0;
	this.x7g = 0;
	this.h4w = 0;
	this.k4b = 0;
	this.o8g = 0;
	this.t1u = new i2p();
	this.j1d = new d8g();
	this.i2i = new u6i();
	this.o9d = new s2q();
  this.h1i = new h2h();
  this.n6s = true;
	this.u1h = true;
	this.x9z = true;
	this.z8t = false;
	this.i5x = l9g;
	this.x8t = g6x;
	this.s3o = m3u;
	this.d0l = o9k;
	this.d9l = o9k;
	this.p9v = v9f;
	this.u1l = true;
	this.u3w = u4n;
	this.e9k = u4n;
	this.k3d = false;
	this.i3w = [];
	this.b1p = 0;
}

h3v(i0w)
{
	this.i0w = i0w;
}

t9l(t1u)
{
	this.t1u = t1u;
	this.x7g = t1u.x7g();
	this.h4w = t1u.x7g();

	this.r0z = (this.i0w.width - this.x7g) / 2;
	let top = (this.i0w.height - this.h4w) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.k9d = top;
	this.k4b = this.r0z + this.x7g - 1;
	this.o8g = this.k9d + this.h4w - 1;
	this.o4f = false;
	this.q1y();
}

p6l(j1d)
{
	this.j1d = j1d.x5w();
	this.i2i.o5d();
	this.o9d.o5d();
}

v4p(i2i)
{
	this.i2i = i2i.x5w();
}

g8m(o9d)
{
	this.o9d = o9d.x5w();
}

i8s(e0p)
{
  this.h1i = e0p.x5w();
}

v0k(z8t)
{
	this.z8t = z8t;
}

x6f()
{
	this.z8t = !this.z8t;
}

g3d()
{
	if (!this.i0w) return;
	if (this.x7g <= 0 || this.h4w <= 0)
	{
		return;
	}
	this.o3k();
}

q0n()
{
	let z4b = this.t1u.z4b;
	if (this.o4f)
	{
		return;
	}
	this.o4f = true;
	if (z4b == d1d.u9x)
	{
  	this.s3b = x4g.s5q("images/board/LightSquare");
  	this.c9f = x4g.s5q("images/board/DarkSquare");
		this.j8g = x4g.s5q("images/board/Margin");
	}
}

q1y()
{
	this.q0n();
	let z4b = this.t1u.z4b;
	if (z4b == d1d.u9x)
	{
		this.u1l = false;
		this.u1h = false;
		this.x9z = false;
		this.s3o = "#FFFF97";
		this.d0l = "#9B2E31";
		this.d9l = q0p;
	}
}

o3k()
{
	this.q1y();
	if (this.t1u.z4b == d1d.u9x)
	{
		let t4h = x4g.s5q("images/board/BoardBackground");
		this.v8u(new w2y(0, 0, this.i0w.width, this.i0w.height), t4h);
	}
	this.d2h();  
	this.e4m(); 
	this.r7x(); 
  if (chess)
  {
	  this.v0m();
  }
  else
  {
	  this.x3l();
  	this.c9k();
  }
  
  this.e8i();
 	this.r0n();
 	this.y8q();
 	this.g9h();
	this.b6d(); 
	this.j7l();      
}

d2h()
{
	let f0k = this.k9d;
	let d2n = this.r0z;
	let u1k = this.k4b;
	let i9t = this.o8g;
	let n5o = this.t1u.i7p;
	this.p6e(new w2y(d2n, f0k, u1k, f0k+n5o-1), this.d0l);
	this.p6e(new w2y(d2n, i9t-n5o+1, u1k, i9t), this.d9l);
	this.p6e(new w2y(d2n, f0k, d2n+n5o-1, i9t), this.d0l);
	this.p6e(new w2y(u1k-n5o+1, f0k, u1k, i9t), this.d9l);
}

e4m()
{
	let i7p = this.t1u.i7p;
	let d4b = this.t1u.d4b;
	if (!d4b)
	{
		return;
	}
	if (this.u1l || !this.j8g)
	{
		this.p2i(this.p9v);
	}
	else
	{
		let left = this.r0z + i7p;
		let top = this.k9d + i7p;
		let k1l = this.k4b - i7p;
		let s3l = this.k9d + i7p + d4b - 1;
		this.v8u(new w2y(left, top, k1l, s3l), this.j8g);

		left = this.r0z + i7p;
		top = this.k9d + i7p;
		k1l = this.r0z + i7p + d4b - 1;
		s3l = this.o8g - i7p;
		this.v8u(new w2y(left, top, k1l, s3l), this.j8g);

		left = this.r0z + i7p;
		top = this.o8g - i7p - d4b + 1;
		k1l = this.k4b - i7p;
		s3l = this.o8g - i7p;
		this.v8u(new w2y(left, top, k1l, s3l), this.j8g);

		left = this.k4b - i7p - d4b + 1;
		top = this.k9d + i7p;
		k1l = this.k4b - i7p;
		s3l = this.o8g - i7p;
		this.v8u(new w2y(left, top, k1l, s3l), this.j8g);
	}
}

p2i()
{
	let i7p = this.t1u.i7p;
	let d4b = this.t1u.d4b;
	if (!d4b)
	{
		return;
	}

	let left = this.r0z + i7p;
	let top = this.k9d + i7p;
	let k1l = this.k4b - i7p;
	let s3l = this.k9d + i7p + d4b - 1;
	this.p6e(new w2y(left, top, k1l, s3l), this.p9v);

	left = this.r0z + i7p;
	top = this.k9d + i7p;
	k1l = this.r0z + i7p + d4b - 1;
	s3l = this.o8g - i7p;
	this.p6e(new w2y(left, top, k1l, s3l), this.p9v);

	left = this.r0z + i7p;
	top = this.o8g - i7p - d4b + 1;
	k1l = this.k4b - i7p;
	s3l = this.o8g - i7p;
	this.p6e(new w2y(left, top, k1l, s3l), this.p9v);

	left = this.k4b - i7p - d4b + 1;
	top = this.k9d + i7p;
	k1l = this.k4b - i7p;
	s3l = this.o8g - i7p;
	this.p6e(new w2y(left, top, k1l, s3l), this.p9v);
}

j7l()
{
	if (this.t1u.w2f)
	{
  	if (!this.t1u.d4b)
  	{
	  	return;
  	}
		let color = "#000000";
		if (this.j1d.a3g())
		{
			color = "#EDD790";
		}
		else
		{
			color = "#000000";
		}
		let rect = this.q1a();
		let l9k = this.z8j();
		l9k.beginPath();
		l9k.fillStyle = color;
		let m7y = rect.b3x() * 0.40;
		l9k.arc(rect.r2j + rect.b3x()/2 - 1, rect.y5a + rect.u1t()/2 - 1,
			m7y, 0, 2 * Math.PI);
		l9k.fill();
	}
}

r7x()
{
	let r3q = q0p;
	let i7p = this.t1u.i7p;
	let d4b = this.t1u.d4b;
	let n5o = this.t1u.n5o;
	let f0k = this.k9d + i7p + d4b;
	let d2n = this.r0z + i7p + d4b;
	let u1k = this.k4b - i7p - d4b;
	let i9t = this.o8g - i7p - d4b;
	this.p6e(new w2y(d2n, f0k, u1k, f0k+n5o-1), r3q);
	this.p6e(new w2y(d2n, i9t-n5o+1, u1k, i9t), r3q);
	this.p6e(new w2y(d2n, f0k, d2n+n5o-1, i9t), r3q);
	this.p6e(new w2y(u1k-n5o+1, f0k, u1k, i9t), r3q);
}

z8j()
{
	return this.i0w.getContext('2d');
}

b3b(rect, color)
{
	let l9k = this.z8j();
	l9k.beginPath();
	l9k.lineWidth = "1";
	l9k.strokeStyle = color;
	l9k.rect(rect.r2j, rect.y5a, rect.b3x(), rect.u1t());
	l9k.stroke();
}

p6e(rect, color)
{
	let l9k = this.z8j();
	l9k.fillStyle = color;
	l9k.fillRect(rect.r2j, rect.y5a, rect.b3x(), rect.u1t());
}

v8u(rect, img)
{
	let l9k = this.z8j();
	let n9k = l9k.createPattern(img, 'repeat');
	l9k.fillStyle = n9k;
	l9k.fillRect(rect.r2j, rect.y5a, rect.b3x(), rect.u1t());
}

e5s(rect, img)
{
	let l9k = this.z8j();
	let n9k = l9k.createPattern(img, 'no-repeat');
	l9k.fillStyle = n9k;
	l9k.fillRect(rect.r2j, rect.y5a, rect.b3x(), rect.u1t());
}

z6u(k2a)
{
	let j5o = z7x;
	let w6n = a0e;
	if (this.z8t)
	{
		j5o = l0q(i2h(k2a));
		w6n = m7m(i2h(k2a));
	}
	else
	{
		j5o = l0q(k2a);
		w6n = m7m(k2a);
	}
	if (startsWithDarkSquare(w6n))
	{
		j5o++;
	}
	else
	{
		j5o--;
	}
	return this.o3j(w6n, j5o);
}

x3l()
{
	for (const k2a of m0n)
	{
		this.o9b(k2a);
	}
}

o9b(k2a)
{
	this.q2f(this.z6u(k2a), k2a);
}

q2f(rect, k2a)
{
	let s5q = this.s3b;
	if (this.x9z)
	{
		this.t0p(rect, this.x8t);
		return;
	}
	if (!s5q)
	{
		this.t0p(rect, this.x8t);
		return;
	}

	let b3w = s5q.width;
	let j0x = s5q.height;
	let z6t = this.t1u.l7g;
	if (b3w < z6t || j0x < z6t)
	{
		this.e5s(rect, s5q);
		return;
	}

	let n7i = Math.trunc(b3w / this.t1u.l7g);
	let l2l = Math.trunc(j0x / this.t1u.l7g);
	if (n7i == 0)
	{
		n7i = 1;
	}
	if (l2l == 0)
	{
		l2l = 1;
	}

	let j7k = Math.trunc((k2a) / n7i);
	let y8n = (k2a) % n7i;
	let y = Math.trunc(j7k / l2l);
	j7k = j7k % l2l;

  let s7c = new w2y();
	s7c.r2j = y8n * this.t1u.l7g;
	s7c.y5a = j7k * this.t1u.l7g;
	s7c.q6l = (y8n + 1) * this.t1u.l7g - 1;
	s7c.w3s = (j7k + 1) * this.t1u.l7g - 1;
	let l9k = this.z8j();
	n8v(l9k, rect, s5q, s7c);
}

t4s(k2a)
{
	let j5o = z7x;
	let w6n = a0e;
	if (this.z8t)
	{
		j5o = l0q(i2h(k2a));
		w6n = m7m(i2h(k2a));
	}
	else
	{
		j5o = l0q(k2a);
		w6n = m7m(k2a);
	}
	return this.o3j(w6n, j5o);
}

c9k()
{
	for (const k2a of m0n)
	{
		this.h8q(k2a);
	}
}

h8q(k2a)
{
	this.m7g(this.t4s(k2a), k2a);
}

m7g(rect, k2a)
{
	let s5q = this.c9f;
	if (this.u1h)
	{
		this.t0p(rect, this.i5x);
		return;
	}
	if (!s5q)
	{
		this.t0p(rect, this.i5x);
		return;
	}

	let b3w = s5q.width;
	let j0x = s5q.height;
	let z6t = this.t1u.l7g;
	if (b3w < z6t || j0x < z6t)
	{
		this.e5s(rect, s5q);
		return;
	}

	let n7i = Math.trunc(b3w / this.t1u.l7g);
	let l2l = Math.trunc(j0x / this.t1u.l7g);
	if (n7i == 0)
	{
		n7i = 1;
	}
	if (l2l == 0)
	{
		l2l = 1;
	}

	let j7k = Math.trunc((k2a) / n7i);
	let y8n = (k2a) % n7i;
	let y = Math.trunc(j7k / l2l);
	j7k = j7k % l2l;

  let s7c = new w2y();
	s7c.r2j = y8n * this.t1u.l7g;
	s7c.y5a = j7k * this.t1u.l7g;
	s7c.q6l = (y8n + 1) * this.t1u.l7g - 1;
	s7c.w3s = (j7k + 1) * this.t1u.l7g - 1;
	let l9k = this.z8j();
	n8v(l9k, rect, s5q, s7c);
}

o3j(w6n, j5o)
{
	let i7p = this.t1u.i7p;
	let d4b = this.t1u.d4b;
	let n5o = this.t1u.n5o;
	let l7g = this.t1u.l7g;
	let rect = new w2y();
	rect.r2j = this.r0z + i7p + d4b +	n5o + (j5o) * l7g;
	rect.q6l = rect.r2j + l7g - 1;
	rect.y5a = this.k9d + i7p + d4b +	n5o + (j3r - w6n - 1) * l7g;
	rect.w3s = rect.y5a + l7g - 1;
	return rect;
}

b6g(k2a)
{
	let j5o = z7x;
	let w6n = a0e;
	if (this.z8t)
	{
		j5o = l0q(i2h(k2a));
		w6n = m7m(i2h(k2a));
	}
	else
	{
		j5o = l0q(k2a);
		w6n = m7m(k2a);
	}
	return this.o3j(w6n, j5o);
}

v0m()
{
	for (const k2a of m0n)
	{
		this.b8r(k2a);
	}
}

b8r(k2a)
{
	this.k1r(this.b6g(k2a), k2a);
}

k1r(rect, k2a)
{
	let x8z = o7u(k2a);
	let s5q = this.s3b;
	if (x8z)
	{
		s5q = this.c9f;
	}
	if (x8z)
	{
		if (this.u1h)
		{
			this.t0p(rect, this.i5x);
			return;
		}
		if (!s5q)
		{
			this.t0p(rect, this.i5x);
			return;
		}
	}
	else
	{
		if (this.x9z)
		{
			this.t0p(rect, this.x8t);
			return;
		}
		if (!s5q)
		{
			this.t0p(rect, this.x8t);
			return;
		}
	}

 	let b3w = s5q.width;
	let j0x = s5q.height;
	let z6t = this.t1u.l7g;
	if (b3w < z6t || j0x < z6t)
	{
		this.e5s(rect, s5q);
		return;
	}
	let n7i = Math.trunc(b3w / this.t1u.l7g);
	let l2l = Math.trunc(j0x / this.t1u.l7g);
	if (n7i == 0)
	{
		n7i = 1;
	}
	if (l2l == 0)
	{
		l2l = 1;
	}

	let j7k = Math.trunc((k2a) / n7i);
	let y8n = (k2a) % n7i;
	let y = Math.trunc(j7k / l2l);
	j7k = j7k % l2l;

  let s7c = new w2y();
	s7c.r2j = y8n * this.t1u.l7g;
	s7c.y5a = j7k * this.t1u.l7g;
	s7c.q6l = (y8n + 1) * this.t1u.l7g - 1;
	s7c.w3s = (j7k + 1) * this.t1u.l7g - 1;
	let l9k = this.z8j();
	n8v(l9k, rect, s5q, s7c);
}

t0p(rect, color)
{
	this.p6e(rect, color);
}

y8q()
{
	for (const k2a of m0n)
	{
		this.o5w(k2a);
	}
}

g5s(m0h, z5f, k4h)
{
	this.u3w = m0h;
	this.e9k = z5f;
	this.k3d = k4h;

	this.i3w.length = 0;
 	let o8v = this.b6g(m0h);
  let r0e = this.b6g(z5f);
	let o9y = this.t1u.l7g;

	let g1f = 32;
	if (o9y < 32)
	{
		g1f = o9y;
	}

  
	if (false)
	{
    
    
		let u1v = new f8r(o8v.r2j + o9y / 2, o8v.y5a + o9y / 2);
		let e2y = new f8r(r0e.r2j + o9y / 2, r0e.y5a + o9y / 2);
		let v1j = Math.abs(u1v.X - e2y.X);
		let u8h = Math.abs(u1v.Y - e2y.Y);
		let f0j = Math.atan2(e2y.X - u1v.X, u1v.Y - e2y.Y);
		let j7c = Math.sqrt(v1j*v1j + u8h*u8h) / 2;
		e2y.X = u1v.X + j7c * 2;
		e2y.Y = u1v.Y;
		let g2b = new f8r(u1v.X + j7c, u1v.Y);
		let p7u = Math.PI / g1f;
		let f2f = o9y * 0.40;
		let z6q = Math.PI;
		let d8o = (r0e.r2j > o8v.r2j && r0e.y5a < o8v.y5a) ||
			(r0e.r2j < o8v.r2j && r0e.y5a > o8v.y5a);
		for (let i = 1; i < g1f; i++)
		{
			let b3b = new w2y();
			if (d8o)
			{
				z6q -= p7u;
			}
			else
			{
				z6q += p7u;
			}
			let i6p = Math.cos(z6q);
			let w8t = Math.sin(z6q);
			let c0j = new f8r(g2b.X + j7c * i6p,
				g2b.Y - f2f * w8t);
			this.i3w.push(q7v(c0j, u1v, f0j - Math.PI / 2));
		}
	}
	else
	{
		let u1v = new f8r(o8v.r2j + o9y / 2, o8v.y5a + o9y / 2);
		let e2y = new f8r(r0e.r2j + o9y / 2, r0e.y5a + o9y / 2);
		let y4n = (e2y.X - u1v.X) / g1f;
		let p3a = (e2y.Y - u1v.Y) / g1f;
		for (let i = 1; i < g1f; i++)
		{
			this.i3w.push(new f8r(u1v.X + i * y4n, u1v.Y + i * p3a));
		}
	}
	this.i3w.push(new f8r(r0e.r2j + o9y / 2, r0e.y5a + o9y / 2));
	this.b1p = 0;
}

s7z()
{
	this.u3w = u4n;
	this.e9k = u4n;
}

t8q()
{
	this.g3d(); 

	let d8w = this.i3w[this.b1p];
	let l7g = this.t1u.l7g;
	let b3b = new w2y();
	b3b.r2j = d8w.X - l7g / 2;
	b3b.y5a = d8w.Y - l7g / 2;
	b3b.o7d(l7g);
	b3b.m7w(l7g);
 	let l9k = this.z8j();
	d8f(l9k, b3b, this.j1d.m3b(this.u3w));

	this.b1p++;
	if (this.b1p >= this.i3w.length)
	{
		let h7f = this.j1d.m3b(this.u3w);
		this.j1d.j7y(this.u3w, f8z.t3k);
		this.j1d.j7y(this.e9k, h7f);
		this.s7z();
		return true;
	}
	else
	{
		return false;
	}
}

o5w(k2a)
{
	if (k2a == this.u3w)
	{
		return;
	}
	let o8w = this.b6g(k2a);
 	let l9k = this.z8j();
	d8f(l9k, o8w, this.j1d.m3b(k2a));
}

b6d()
{
	if (!this.t1u.g8g)
	{
    return;
  }

 	let n5o = this.t1u.n5o;
	let i7p = this.t1u.i7p;
	let d4b = this.t1u.d4b;
	let l7g = this.t1u.l7g;

	let w1y = new w2y();
	w1y.r2j = this.r0z + i7p + d4b;
	w1y.y5a = this.k9d + i7p + d4b;
	w1y.o7d(j3r * l7g + 2 * n5o);
	w1y.m7w(j3r * l7g + 2 * n5o);

 	let l9k = this.z8j();
  let u0b = o2b(l9k, d4b-6);

  b6d(l9k,
    w1y,
    this.t1u,
    u0b,
    c7x.i1i,
    this.s3o,
    this.z8t,
    d4b);
}

a2u(k2a, color)
{
	let rect = this.b6g(k2a);
	let l9k = this.z8j();
  l9k.save();
  l9k.globalAlpha = 0.25; 
	l9k.fillStyle = color;
	l9k.fillRect(rect.r2j, rect.y5a, rect.b3x(), rect.u1t());
  l9k.restore();
}

e8i()
{
	if (this.n6s)
	{
		if (!this.h1i.t3k())
		{
      let color = "#800080"; 
			this.a2u(this.h1i.m0h, color);
			this.a2u(this.h1i.z5f, color);
		}
  }
}

r0n()
{
	for (const w6z of this.o9d.n2c)
	{
		this.c9p(w6z);
	}
}

c9p(w6z)
{
	let rect = this.b6g(w6z.k2a);
	let d2m = '';
	switch (w6z.type)
	{
		case o3t.u3a:
			d2m = c5g;
			break;
		case o3t.w5i:
			d2m = h0o;
			break;
		case o3t.q2q:
			d2m = o1u;
			break;
	}
	let o9y = this.x7g / 10;
	let l9k = this.z8j();
  /* dit is met roundrect
  i6a(rect, 5);
	l9k.lineWidth = o9y / 15;
	l9k.strokeStyle = d2m;
	a0d(l9k, rect.r2j, rect.y5a, rect.b3x(), rect.u1t(), 10);
  */
  
  l9k.save();
  l9k.globalAlpha = 0.7; 
	l9k.fillStyle = d2m;
	l9k.fillRect(rect.r2j, rect.y5a, rect.b3x(), rect.u1t());
  l9k.restore();
}

g9h()
{
	for (const k0o of this.i2i.s3h)
	{
		this.l8q(k0o);
	}
}

l8q(k0o)
{
	let m0h = k0o.m0h;
	let z5f = k0o.z5f;
	let f1i = k0o.type;

	let o8v = this.b6g(m0h);
	let r0e = this.b6g(z5f);

	let f4r = o8v.r2j + o8v.b3x()/2;
	let s8j = o8v.y5a + o8v.u1t()/2;
	let c8h = new f8r(f4r, s8j);

	let c6g = r0e.r2j + r0e.b3x()/2;
	let z2k = r0e.y5a + r0e.u1t()/2;

	let k1x = (c6g-f4r)*(c6g-f4r) + (z2k-s8j)*(z2k-s8j);
	let s0l = Math.sqrt(k1x);

	let y1e = (this.j1d.a7x(m0h)) ? 0 : o8v.b3x() / 4;
	s0l -= y1e;
	let m6n = (this.j1d.a7x(z5f)) ? 0 : o8v.b3x() / 4;
	s0l -= m6n;

	let p4k = 5;
	let c8p = 5 * p4k;
	let p2c = 7 * p4k;

	let m1c = f4r + y1e;
	let x6j = s8j;

	let y6r = m1c + s0l - 1;
	let u5f = s8j;

	let g0m = y6r - p2c;
	let s7h = s8j;

	let f0j = Math.atan2((c6g - f4r), (s8j - z2k));

  
	let y1g = [];
  let z5a = 10; 
	y1g.push(new f8r(g0m, s7h));
	y1g.push(new f8r(g0m - z5a, s7h - c8p));
	y1g.push(new f8r(y6r, u5f));
	y1g.push(new f8r(g0m - z5a, s7h + c8p));
	y1g.push(new f8r(g0m, u5f));
	let p0l = [];
	for (let i = 0; i <= 4; i++)
	{
		p0l.push(q7v(y1g[i], c8h, f0j - Math.PI / 2));
	}

	let l9k = this.z8j();
  l9k.save();
  l9k.globalAlpha = 0.7;

 	let z5i = '';
	switch (f1i)
	{
		case n6q.d5z:
			z5i = h1a;
			break;
		case n6q.j3q:
			z5i = l8d;
			break;
		case n6q.z7t:
			z5i = s5x;
			break;
	}
 	l9k.fillStyle = z5i;
  l9k.strokeStyle = z5i;
	l9k.beginPath();
	l9k.moveTo(p0l[0].X, p0l[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		l9k.lineTo(p0l[i].X, p0l[i].Y);
	}
	l9k.closePath();
	l9k.fill();

  
	y1g.length = 0;
	y1g.push(new f8r(m1c, x6j - p4k));
	y1g.push(new f8r(m1c, x6j + p4k));
	y1g.push(new f8r(g0m, x6j + p4k));
	y1g.push(new f8r(g0m, x6j - p4k));
	p0l.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		p0l.push(q7v(y1g[i], c8h, f0j - Math.PI / 2));
	}
	if (f4r == c6g)
	{
		if (p0l[0].Y != p0l[1].Y)
		{
			p0l[0].Y = p0l[1].Y;
		}
		if (p0l[2].Y != p0l[3].Y)
		{
			p0l[2].Y = p0l[3].Y;
		}
	}
	if (s8j == z2k)
	{
		if (p0l[0].X != p0l[1].X)
		{
			p0l[0].X = p0l[1].X;
		}
		if (p0l[2].X != p0l[3].X)
		{
			p0l[2].X = p0l[3].X;
		}
	}
	l9k.beginPath();
	l9k.moveTo(p0l[0].X, p0l[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		l9k.lineTo(p0l[i].X, p0l[i].Y);
	}
	l9k.closePath();
	l9k.fill();
  l9k.restore();
}

q1a()
{
	let i7p = this.t1u.i7p;
	let d4b = this.t1u.d4b;
	let o9y = this.t1u.l7g;
	let rect = new w2y();
	rect.r2j = this.k4b - i7p - d4b + 1;
	rect.y5a = this.o8g - i7p - d4b;
	rect.w3s = this.o8g;
	rect.q6l = this.k4b - 1;
	return rect;
}

}

const e1t = 14;

const d1d =
{
	u9x : 0
};

const f3a =
{
	u9x : 0
};

const m7b =
{
	o8h : 0,
	x4a : 1,
};

const c7x =
{
	c1j: 0,
	t0b: 1,
	i1i: 2,
	r8u: 3,
	c6e: 4,
};

class i2p
{

constructor()
{
	this.z4b = d1d.u9x;
	this.e9d = 1; 
	this.i7p = 0;
	this.d4b = e1t;
	this.n5o = 2;
	this.l7g = 32;
	this.x0k = 20;
	this.g8g = true;
	this.d2c = m7b.x4a;
	this.w2f = true;
}

x5w()
{
	let g5r = new i2p();
	g5r.z4b = this.z4b;
	g5r.e9d = this.e9d;
	g5r.i7p = this.i7p;
	g5r.d4b = this.d4b;
	g5r.n5o = this.n5o;
	g5r.l7g = this.l7g;
	g5r.x0k = this.x0k;
	g5r.g8g = this.g8g;
	g5r.d2c = this.d2c;
	g5r.w2f = this.w2f;
	return g5r;
}

x7g()
{
	return this.l7g * j3r + 2 * (this.i7p + this.d4b + this.n5o);
}

j7d(rect)
{
	let w = rect.b3x();
	let h = rect.u1t();
	let z4t = 0;
	if (w < h)
	{
		z4t = w;
	}
	else
	{
		z4t = h;
	}
	if (this.d4b)
	{
		for (this.l7g = 2; this.l7g < 1000; this.l7g++)
		{
			this.d4b = (this.l7g / 100) * this.x0k;
			if (this.d4b < e1t)
			{
				this.d4b = e1t;
			}
			let size = 2 * (this.i7p + this.d4b + this.n5o) + j3r * this.l7g;
			if (size > z4t)
			{
				break;
			}
		}
		this.l7g--;
		this.d4b = (this.l7g / 100) * this.x0k;
		if (this.d4b < e1t)
		{
			this.d4b = e1t;
		}
	}
	else
	{
		for (this.l7g = 2; this.l7g < 1000; this.l7g++)
		{
			let size = 2 * (this.i7p + this.n5o) + j3r * this.l7g;
			if (size > z4t)
			{
				break;
			}
		}
		this.l7g--;
	}
	return this.x7g();
}

}


class r1s
{

constructor()
{
	this.p5e = new d8g();
	this.l9q = new d8g();
	this.i2i = new u6i();
	this.o9d = new s2q();
	this.v9v = new h2h();
 	this.w2k = new h2h();
	this.b0b = 0;
	this.i5w = false;
	this.j0b = false;
	this.n4d = 0;
	this.i5v = 0;
	this.r2b = '';
}

}

const v4x =
[
	"#F7C42B",  
	"#F327F3",  
	"#26BCBC",  
	"#2727F3",  
	"#298F8F",  
	"#94612A",  
	"#8D2727",  
	"#F4F428",  
	"#F22626",  
	"#F3F3F3",  
	"#8F298F",  
	"#28F428",  
	"#288E28",  
	"#272727",  
	"#919191",  
	"#28F4F4"   
];

function i6a(rect, g3q)
{
	rect.r2j += g3q;
	rect.q6l -= g3q;
	if (rect.r2j > rect.q6l)
	{
		rect.r2j = rect.q6l;
	}
	rect.y5a += g3q;
	rect.w3s -= g3q;
	if (rect.y5a > rect.w3s)
	{
		rect.y5a = rect.w3s;
	}
}

function n8v(k9l, i2n, a7v, s7c)
{
	k9l.drawImage(a7v, s7c.r2j, s7c.y5a, s7c.b3x(), s7c.u1t(),
		i2n.r2j, i2n.y5a, i2n.b3x(), i2n.u1t());
}

function a0d(l9k, x, y, width, height, m7y)
{
	l9k.beginPath();
	l9k.moveTo(x, y + m7y);
	l9k.lineTo(x, y + height - m7y);
	l9k.arcTo(x, y + height, x + m7y, y + height, m7y);
	l9k.lineTo(x + width - m7y, y + height);
	l9k.arcTo(x + width, y + height, x + width, y + height-m7y, m7y);
	l9k.lineTo(x + width, y + m7y);
	l9k.arcTo(x + width, y, x + width - m7y, y, m7y);
	l9k.lineTo(x + m7y, y);
	l9k.arcTo(x, y, x, y + m7y, m7y);
	l9k.stroke();
}

function q7v(a5r, c8h, v2j)
{
	let p = new f8r();
	p.X = (Math.cos(v2j) * (a5r.X - c8h.X)) - (Math.sin(v2j) * (a5r.Y - c8h.Y)) + c8h.X;
	p.Y = (Math.sin(v2j) * (a5r.X - c8h.X)) + (Math.cos(v2j) * (a5r.Y - c8h.Y)) + c8h.Y;
	return p;
}

function d3z(l9k, rect, n3a)
{
	let left = rect.r2j;
	let top = rect.y5a;
	let k1l = rect.q6l;
	let s3l = rect.w3s;

	l9k.fillStyle = h6u;
	l9k.fillRect(rect.r2j, rect.y5a, rect.b3x(), rect.u1t());

	if (n3a.o8h())
	{
		return;
	}

	let u8a = n3a.t4y();
	let p9b = 0;
	if (u8a > 8)
	{
		p9b = (k1l - left) / 8;
	}
	else
	{
		p9b = (k1l - left) / u8a;
	}
	let l5k = left - p9b;
	let m8s = top;
	let y2t = l5k + p9b;
	let f6t = 0;
	if (u8a > 8)
	{
		f6t = (s3l - top + 1) / 2;
	}
	else
	{
		f6t = s3l - top + 1;
	}

	let b2k = top + f6t - 1;
	let v4g = 0;
	for (let i = 0; i < 16; i++)
	{
		if (n3a.q2i(i))
		{
			l5k += p9b;
			y2t += p9b;
			if (v4g == 7 || v4g == 15 ||
				(v4g < 8 && v4g == u8a - 1))
			{
				y2t = k1l;
			}
			if (v4g == 8)
			{
				l5k = left;
				y2t = l5k + p9b;
				m8s = top + f6t;
				b2k = s3l;
			}
			let a5d = new w2y(l5k, m8s, y2t, b2k);
			l9k.fillStyle = v4x[i];
			l9k.fillRect(a5d.r2j, a5d.y5a, a5d.b3x(), a5d.u1t());
			v4g++;
		}
	}
}




class z0c
{

constructor()
{
	this.m5f = '';
	this.s5q = null;
}

}

class v2p
{

constructor()
{
	this.u4v = [];
}

add(img)
{
	let y2l = new z0c();
	y2l.m5f = img.id;
	y2l.s5q = img;
	this.u4v.push(y2l);
}

s5q(m5f)
{
	for (const d2f of this.u4v)
	{
		if (d2f.m5f.toLowerCase() == m5f.toLowerCase())
		{
			return d2f.s5q;
		}
	}
	return null;
}

}
const n9a 				= "#00FFFF";
const q0p 			= "#000000";
const v9f 				= "#0000FF";
const r1b 			= "#FFFBF0";
const u1n 			= "#808080";
const o3d 		= "#FF00FF";
const z2r 				= "#808080";
const j4i 			= "#008000";
const y8b 				= "#00FF00";
const e8d 			= "#C0C0C0";
const y4b 			= "#800000";
const j1r 		= "#A0A0A4";
const q0c 	= "#C0DCC0";
const y2c 				= "#000080";
const c3z 			= "#808000";
const g1s 			= "#800080";
const h6u 				= "#FF0000";
const l9h 			= "#C0C0C0";
const d4v 		= "#A6CAF0";
const o7j 				= "#008000";
const o9k 			= "#FFFFFF";
const m3u 			= "#FFFF00";

class f8r
{

constructor(x, y)
{
	if (x === undefined)
	{
		this.X = 0;
		this.Y = 0;
	}
	else
	{
		this.X = x;
		this.Y = y;
	}
}

x5w()
{
	let e3y = new f8r();
	e3y.r2j = this.X;
	e3y.y5a = this.Y;
	return e3y;
}

}

class w2y
{

constructor(left, top, k1l, s3l)
{
	if (left === undefined)
	{
		this.r2j = 0;
		this.y5a = 0;
		this.q6l = 0;
		this.w3s = 0;
	}
	else
	{
		this.r2j = left;
		this.y5a = top;
		this.q6l = k1l;
		this.w3s = s3l;
	}
}

x5w()
{
	let g8q = new w2y();
	g8q.r2j = this.r2j;
	g8q.y5a = this.y5a;
	g8q.q6l = this.q6l;
	g8q.w3s = this.w3s;
	return g8q;
}

b3x()
{
	return this.q6l - this.r2j + 1;
}

a6s()
{
	return this.q6l - this.r2j + 1;
}

o7d(width)
{
	this.q6l = this.r2j + width - 1;
}

u1t()
{
	return this.w3s - this.y5a + 1;
}

u4t()
{
	return this.w3s - this.y5a + 1;
}

m7w(height)
{
	this.w3s = this.y5a + height - 1;
}

a2y()
{
	this.r2j++;
	this.y5a++;
	this.q6l--;
	this.w3s--;
}

q7e(d8w)
{
	return d8w.X >= this.r2j &&
		d8w.X <= this.q6l &&
		d8w.Y >= this.y5a &&
		d8w.Y <= this.w3s;
}


}

class o3u
{

constructor(g9j)
{
	this.g9j = g9j;
	this.q1t = new d8g();
	this.y7t = new p8q();
	this.l4o = null;
	this.t1u = new i2p();
	this.n1f = true;
}

y6e()
{
	let p6r = window.devicePixelRatio;

	this.y7t.i0w.width = this.l4o.clientWidth * p6r;
	this.y7t.i0w.height = this.l4o.clientHeight * p6r;

	let x1t = 32 * p6r;
	let b0p = 32 * p6r;
	let t5h = this.y7t.i0w.width - x1t;
	let i0i = this.y7t.i0w.height - b0p;
	let h0d = i0i < t5h ? i0i : t5h;
	if (h0d < 128)
	{
		h0d = 128;
	}
	let rect = new w2y();
	rect.r2j = 0;
	rect.y5a = 0;
	rect.o7d(h0d);
	rect.m7w(h0d);
	this.t1u.d4b = h0d * 0.02;
  if (this.t1u.d4b < e1t)
  {
    this.t1u.d4b = e1t;
  }
	h0d = this.t1u.j7d(rect);
 	this.y7t.t9l(this.t1u);
	this.y7t.g3d();
}

x6f()
{
	this.y7t.x6f();
	this.y7t.g3d();
}

i1j()
{
	this.t1u.g8g = !this.t1u.g8g;
	this.y7t.t9l(this.t1u);
	this.y7t.g3d();
}

p3f()
{
	this.y7t.t9l(this.t1u);
	this.y7t.g3d();
}

r8q(l6q)
{
	this.q1t = l6q.l9q.x5w();
	this.y7t.p6l(this.q1t);
	this.y7t.v4p(l6q.i2i);
	this.y7t.g8m(l6q.o9d);
  
 	this.y7t.i8s(l6q.w2k);
	this.y7t.g3d();

	if (this.n1f)
	{
		c2w('playBackward' + this.g9j, l6q.i5w);
		c2w('goToBegin'+ this.g9j, l6q.i5w);
		c2w('playForward' + this.g9j, l6q.j0b);
		c2w('goToEnd' + this.g9j, l6q.j0b);
		c2w('autoPlay' + this.g9j, l6q.j0b);
	}
	else
	{
		c2w('goToBegin' + this.g9j, l6q.i5w);
		c2w('goToEnd' + this.g9j, l6q.j0b);
	}
}

p6l(j1d)
{
	let l6q = new r1s();
	l6q.l9q = j1d.x5w();
	this.p6l(l6q);
}

t9l(t1u)
{
  this.t1u = t1u.x5w();
}

}

const w5o =
{
	h7w       : 0,
	q6h        : 1,
};

class w5x
{

constructor(g9j)
{
	this.g9j = g9j;
 	this.w4n = new m6y();
 	this.j0c = new g7e(g9j);
  this.j0c.p1j = false;
  this.j0c.h4l = true;
  this.j0c.w2m = true;
  this.j0c.h6h = false;
  this.x0m = null;
  this.o4b = new c0c();
  this.b8o = new u4h();
 	this.q5a = new t7g();
	this.r1o = new d8g();
	this.c0n = new d8g();
	this.h5t = 0;
	this.x8l = [];
	this.a6k = false;
 	this.o8o = false;
 	this.n1t = false;
 	this.n9z = false;
  this.m4i = w5o.h7w;
  this.a6m = document.getElementById("threat"+this.g9j);
 	this.a6m.onclick = this.a7h.bind(this);
  this.z3a();
  this.x7w = document.getElementById("engineSettings"+this.g9j);
}

g5b(p9y)
{
  this.x0m = new Engine();
  this.x0m.v0b = (event) => {
    this.x2t(event);
  };
  this.x0m.z2c(p9y);
  this.x0m.u1g();
}

u5d()
{
	this.o4b = this.x0m.p9y();
	this.q5a = new t7g();
  /*
	showName();
	MovePanel->Caption = "";
	ScorePanel->Caption = "";
	DepthPanel->Caption = "";
	NodesPanel->Caption = "";
  */
	this.w4n.p6l(this.q5a.j1d,
    this.q5a.o2e);
	this.z4c();
 	this.y1j();
  this.z3a();
}

p6l(p5e, b1g, d5g, p9x)
{
	this.c0n = p5e.x5w();
	this.h5t = b1g;
	this.x8l = d5g.slice(); 
	this.a6k = p9x;
	this.y1j();
}

y1j()
{
	if (!this.x0m) return;
	if (this.o8o) return;

	if (this.n1t)
	{
		let d5g = new m6y();
		d5g.p6l(this.c0n, this.h5t);
		let j1p = d5g.j1p();
		d5g.e1h(j1p, this.x8l);
		let m6a = d5g.r3h();
		let x4b = d5g.b0b(d5g.m0z());
		if (m6a.z0j())
		{
			x4b++;
		}
		let p5g = m6a;
		p5g.f6i();
		this.b8o = new u4h();
    this.b8o.d5g.p6l(p5g, x4b);
		this.r1o = p5g;
  }
  else
  {
 		this.b8o.d5g.p6l(this.c0n, this.h5t);
		let j1p = this.b8o.d5g.j1p();
		this.b8o.d5g.e1h(j1p, this.x8l);
		this.r1o = this.b8o.d5g.r3h();
  }
  if (f8y === 10) 
  {
    this.b8o.l0d = h1d;
  }
  else
  {
    this.b8o.l0d = m6f(f8y);
  }

  this.x0m.r2h();
	this.n9z = false;
  let d5g = j0w(this.r1o);
  if (d5g.length == 0)
  {
  	this.x0m.c1d(this.b8o);
		return;
  }
  else
  {
  	this.x0m.c1d(this.b8o);
		return;
  }
}

f0a()
{
	this.q5a = this.x0m.g0q();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.w4n.p6l(this.q5a.j1d,
    this.q5a.o2e);
	this.z4c();
}

h4t()
{
	this.q5a = this.x0m.g0q();
	
}


u9u()
{
	this.q5a = this.x0m.g0q();
  
	
	
	
  
	this.z4c();
}

z4c()
{
	let a1u = this.q5a.b5s.d5g.x5w();
  a1u.p6l(this.q5a.j1d, this.q5a.o2e);

  if (this.q5a.t2y)
  {
    for (let p5w of this.q5a.lines)
    {
      let d5g = p5w.d5g.e2a();
      let j0j = a1u.j1p();
      let o2e = 0;
      for (let e0p of d5g)
      {
        if (o2e == 0)
        {
					let z0x = p5w.s5z() +
						"/" + p5w.b2d;
					e0p.k3w(z0x);
        }
        a1u.f9g(j0j, e0p);
        o2e++;
      }
    }
  }
  else
  {
    if (this.q5a.lines.length !== 0)
    {
      let p5w = this.q5a.lines[this.q5a.lines.length - 1];
      let d5g = p5w.d5g.e2a();
      let j0j = a1u.j1p();
      let o2e = 0;
      for (let e0p of d5g)
      {
				if (o2e == 0)
				{
					let z0x = p5w.s5z() +
						"/" + p5w.b2d;
					e0p.k3w(z0x);
				}
        a1u.f9g(j0j, e0p);
        o2e++;
      }
    }
  }
  this.w4n = a1u.x5w();
  this.j0c.t2y = this.q5a.t2y;
  this.j0c.j4x(this.w4n, 0);
}

x2t(event)
{
  const {cmd, data} = event;
  if (cmd === 'ready')
  {
    this.u5d()
  }
  else if (cmd === 'go')
  {
    this.f0a()
  }
  else if (cmd === 'cm')
  {
    this.h4t();
  }
  else if (cmd === 'pv')
  {
    this.u9u();
  }
}

y6k()
{
	if (this.x0m)
	{
    this.x0m.v0b = null;
    this.x0m.i5z();
		this.x0m = null;
		this.q5a = new t7g();
  	this.w4n.p6l(this.q5a.j1d,
      this.q5a.o2e);
  	this.z4c();
    this.n1t = false;
    this.z3a();
  }
}

a3p()
{
	return (this.x0m != null);
}

z8w()
{
  return (this.engineMode === w5o.q6h);
}

a7h()
{
	if (this.x0m && !this.z8w())
	{
		this.n1t = !this.n1t;
		this.z3a();
		this.y1j();
	}
}

z3a()
{
	if (this.x0m)
	{
    this.a6m.disabled = false;
    this.a6m.classList.remove('threat-inactive');
		if (this.n1t)
		{
      this.a6m.classList.remove('threat-off');
      this.a6m.classList.add('threat-on');
		}
		else
		{
      this.a6m.classList.remove('threat-on');
      this.a6m.classList.add('threat-off');
		}
	}
	else
	{
    this.a6m.disabled = true;
    this.a6m.classList.add('threat-inactive');
    this.a6m.classList.remove('threat-on');
    this.a6m.classList.add('threat-off');
	}
}

}

class s2g
{

constructor(g9j)
{
	this.g9j = g9j;
  this.z8n = null;
	this.m6v = new s5w();
}

c4h(m6v)
{
	this.m6v = m6v.x5w();
	this.d0b();
}

d0b()
{
	let t6j = this.m6v.w4e.w2j.s6m();
	let q9b = this.m6v.d7m.w2j.s6m();

	let w4y = '';
	if (t6j.length && this.m6v.w4e.e2j)
	{
		w4y = this.m6v.w4e.e2j.toString();
	}
	let b2z = '';
	if (t6j.length && this.m6v.w4e.p9d.length)
	{
		b2z = this.m6v.w4e.p9d.toString();
	}

	let p8z = '';
	if (q9b.length && this.m6v.d7m.e2j)
	{
		p8z = this.m6v.d7m.e2j.toString();
	}
	let g1n = '';
	if (q9b.length && this.m6v.d7m.p9d.length)
	{
		g1n = this.m6v.d7m.p9d.toString();
	}

	let n4m = this.m6v.w4e.w2j.b6q(1);
	let h7x = this.m6v.d7m.w2j.b6q(1);

	let m8k = '';
	let f6n = '';
	if (!this.m6v.w4e.d6w.t3k() &&
		!this.m6v.d7m.d6w.t3k())
	{
		m8k = this.m6v.w4e.d6w.w2p();
		f6n = this.m6v.d7m.d6w.w2p();
	}

	let i8z = n7g(this.m6v.f9i);
	let y9d = this.m6v.y9d.p9d;
	if (!this.m6v.y9d.t6n.t3k())
	{
		y9d += " ";
		y9d += this.m6v.y9d.t6n.s7f.toString();
	}
	let h1b = '';
	if (!this.m6v.w9a.t3k())
	{
		h1b = this.m6v.w9a.toString("dd-mm-yyyy");
	}
	let d9p = '';
	if (!this.m6v.d9p.t3k())
	{
		d9p = '</br>' + '[' + this.m6v.d9p.m5f + ']';
	}

	let n0s = document.getElementById("nota-container"+this.g9j);
	let e2k = n0s.clientHeight;
	let m9t = 200;

  let index = this.g9j;
  let f5n = this.m6v.y9d.f5n;

	let p4l = true;
	if (this.z8n.clientWidth >= 374 && e2k >= m9t)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + t6j + "</span>";
    s += 					"<span class=\"rating\">" + w4y + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + m8k + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + i8z + "</span>";
		s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + q9b + "</span>";
		s +=          "<span class=\"rating\">" + p8z + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + f6n + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "<span>" + b2z + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + y9d + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + f5n + "</span>";
		s +=          "<span class=\"gameDate\">" + h1b + "</span>";
    s +=          "<span class=\"annotator\">" + d9p + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + g1n + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
		s +=      "</tr>";
		s +=    "</table>";
		this.z8n.innerHTML = s;

		
		
		let h4v = Math.trunc(this.z8n.clientWidth / 10);
		if (h4v < 24) h4v = 24;
    
		
		
		
		
		
		
	}
	else if (this.z8n.clientWidth >= 300 && e2k >= m9t)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + n4m + "</span>";
    s +=          "<span class=\"rating\">" + w4y + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + m8k + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + i8z + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + h7x + "</span>";
    s +=          "<span class=\"rating\">" + p8z + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + f6n + "</span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + b2z + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + y9d + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + f5n + "</span>";
    s +=          "<span class=\"gameDate\">" + h1b + "</span>";
		s +=          "<span class=\"annotator\">" + d9p + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + g1n + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.z8n.innerHTML = s;
	}
	else if (this.z8n.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + n4m + "</span>";
    s +=          "<span class=\"rating\">" + w4y + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + i8z + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + h7x + "</span>";
    s +=          "<span class=\"rating\">" + p8z + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.z8n.innerHTML = s;
	}
	else
	{
		
		p4l = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + n4m + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + i8z + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + h7x + "</span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.z8n.innerHTML = s;
	}

	if (p4l)
	{
		let k2j = 16;
		if (this.z8n.clientWidth < 400)
		{
			k2j = 16;
		}
		else if (this.z8n.clientWidth < 500)
		{
			k2j = 24;
		}
		else
		{
			k2j = 32;
		}
    if (this.m6v.w4e.j8v != r4b.o8h)
    {
  		let h2j = document.getElementById("whitePlayerNation"+this.g9j);
	  	h2j.src = "images/flags/" + k2j.toString() +"/" + n8u(this.m6v.w4e.j8v) + ".png";
		  h2j.height = k2j;
  		h2j.width = k2j;
    }
    if (this.m6v.d7m.j8v != r4b.o8h)
    {
  		let r0f = document.getElementById("blackPlayerNation"+this.g9j);
	  	r0f.src = "images/flags/" + k2j.toString() + "/" + n8u(this.m6v.d7m.j8v) + ".png";
		  r0f.height = k2j;
  		r0f.width = k2j;
    }
	}
}

}

class n9w
{

constructor(g9j)
{
	this.g9j = g9j;
	this.m6v = new s5w();
	this.f7c = new o3u(g9j);
	this.v2a = new l3f(g9j);
	this.v2a.j0c.o0k = this; 
	this.g3v = new h7e();
  this.g9b = new w5x(g9j);
}

x6f()
{
	this.f7c.x6f();
}

i1j()
{
	this.f7c.i1j();
}

p3f()
{
	this.f7c.p3f();
	this.v2a.j0c.p3f();
}

e1u(w2l, u5b, o9c, t5a)
{
	this.e4g(t5a, o9c);
}

e4g(t5a, o9c)
{
	this.m6v = t5a.q4h.x5w();
	this.c4h();
	this.v2a.j0c.j4x(t5a.d5g, o9c);
}

c4h()
{
	this.v2a.x4i.c4h(this.m6v);
}

i8h(l6q)
{
	this.f7c.r8q(l6q);
  this.y1v();
}

q0r()
{
	if (this.g3v.w4s())
	{
		this.g3v.g6o();
    this.o7i();
	}
	else
	{
		if (!this.v2a.j0c.z6f())
		{
      
			this.g3v.o0k = this; 
			this.g3v.y0n();
			this.v2a.j0c.a6z();
		}
	}
}

w5j(p9y)
{
	this.g9b.g5b(p9y);
}

h3c()
{
	this.g9b.y6k();
}

c2s()
{
	return this.g9b.a3p();
}

y1v()
{
  if (!this.g3v.w4s())
  {
    this.o7i();
  }
}

o7i()
{
	this.g9b.p6l(
		this.v2a.j0c.p5e(),
		this.v2a.j0c.b1g(),
		this.v2a.j0c.h5l(),
		this.v2a.j0c.p9x());
}

}

const s2f =
{
	z7n : 0,
	m1w : 1,
	w0l : 2,
	o1a : 3,
	g3i : 4,
 	i4b : 5,
	f9i : 6,
	d5g : 7,
	s7f : 8,
	event : 9,
	g0a : 10
};

const y0s =
{
	o8h : 0,
	i6c : 1,
	e8s : 2
};

let i0e = 0;
let d0e = 0;
let t1o = 0;
let r3i = 0;
let p6z = 0;
let d7l = 0;
let j0a = 0;
let h8n = 0;

let e8s = false;

function a0r(f, s)
{
	let w2w = f.q4h.w4e.w2j.m5f();
	let u4q = s.q4h.w4e.w2j.m5f();
	if (w2w < u4q)
	{
		return e8s ? -1 : 1;
	}
	if (w2w > u4q)
	{
		return e8s ? 1 : -1;
	}
	w2w = f.q4h.d7m.w2j.m5f();
	u4q = s.q4h.d7m.w2j.m5f();
	if (w2w < u4q)
	{
		return -1;
	}
	if (w2w > u4q)
	{
		return 1;
	}
	return 0;
}

function r0c(f, s)
{
	let w2w = f.q4h.d7m.w2j.m5f();
	let u4q = s.q4h.d7m.w2j.m5f();
	if (w2w < u4q)
	{
		return e8s ? -1 : 1;
	}
	if (w2w > u4q)
	{
		return e8s ? 1 : -1;
	}
	w2w = f.q4h.w4e.w2j.m5f();
	u4q = s.q4h.w4e.w2j.m5f();
	if (w2w < u4q)
	{
		return -1;
	}
	if (w2w > u4q)
	{
		return 1;
	}
	return 0;
}

function g2i(f, s)
{
	let m6b = f.q4h.w4e.e2j - s.q4h.w4e.e2j;
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	m6b = f.q4h.d7m.e2j - s.q4h.d7m.e2j;
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	return a0r(f, s);
}

function x5j(f, s)
{
	let m6b = f.q4h.d7m.e2j - s.q4h.d7m.e2j;
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	m6b = f.q4h.w4e.e2j - s.q4h.w4e.e2j;
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	return a0r(f, s);
}

function i3l(f, s)
{
	let m6b = f.q4h.w4e.j8v - s.q4h.w4e.j8v;
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	m6b = f.q4h.d7m.j8v - s.q4h.d7m.j8v;
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	return a0r(f, s);
}

function h0z(f, s)
{
	let m6b = f.q4h.d7m.j8v - s.q4h.d7m.j8v;
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	m6b = f.q4h.w4e.j8v - s.q4h.w4e.j8v;
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	return a0r(f, s);
}

function c7t(f, s)
{
	let m6b = f.q4h.f9i - s.q4h.f9i;
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	return a0r(f, s);
}

function h4e(f, s)
{
	let m6b = s.q4h.w9a.w9a() - f.q4h.w9a.w9a();
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	return a0r(f, s);
}

function h1x(f, s)
{
	let b0s = f.q4h.y9d.p9d;
	let m4b = s.q4h.y9d.p9d;
	if (b0s < m4b)
	{
		return e8s ? -1 : 1;
	}
	if (b0s > m4b)
	{
		return e8s ? 1 : -1;
	}
	let m6b = f.q4h.y9d.t6n.w9a() - s.q4h.y9d.t6n.w9a();
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	m6b = f.q4h.g0a - s.q4h.g0a;
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	m6b = f.q4h.g7m - s.q4h.g7m;
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	return a0r(f, s);
}

function t3c(f, s)
{
	let m6b = s.q4h.g0a - f.q4h.g0a;
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	m6b = s.q4h.g7m - f.q4h.g7m;
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	return a0r(f, s);
}

function z0k(f, s)
{
	let m6b = s.e3j - f.e3j;
	if (e8s)
	{
		m6b = -m6b;
	}
	if (m6b < 0) return -1;
	if (m6b > 0) return 1;
	return a0r(f, s);
}

class k8s
{

constructor(g9j)
{
	this.g9j = g9j;
	this.l8u = [];
	this.h5c = null;
	this.f9m = null;
	this.u2i = null;
	this.u0c = [];
	this.f7u = [];
	this.t5t = -1;
	this.z9q = y0s.o8h;
	this.k6k = 0;
  this.w0h = null;
}

m4q()
{
	let s = "";
	s += "<tr class=\"grid-header-row\">";
	s += "<th class=\"grid-header-cell grid-player\">White</th>";
	s += "<th class=\"grid-header-cell grid-rating\">RatW</th>";
 	s += "<th class=\"grid-header-cell grid-flag\">FlgW</th>";
	s += "<th class=\"grid-header-cell grid-player\">Black</th>";
	s += "<th class=\"grid-header-cell grid-rating\">RatB</th>";
 	s += "<th class=\"grid-header-cell grid-flag\">FlgB</th>";
	s += "<th class=\"grid-header-cell grid-result\">Res</th>";
	s += "<th class=\"grid-header-cell grid-moves\">Len</th>";
	s += "<th class=\"grid-header-cell grid-year\">Year</th>";
	s += "<th class=\"grid-header-cell grid-event\">Event</th>";
	s += "<th class=\"grid-header-cell grid-round\">Rnd</th>";
	s += "</tr>";
	this.u2i.innerHTML = s;
	this.u0c = this.u2i.getElementsByTagName("TH");
	let g9j = this.g9j;

 	this.u0c[s2f.z7n].onclick = this.j4r.bind(this);
	this.u0c[s2f.m1w].onclick = this.z9l.bind(this);
  this.u0c[s2f.w0l].onclick = this.v3m.bind(this);
	this.u0c[s2f.o1a].onclick = this.j4r.bind(this);
	this.u0c[s2f.g3i].onclick = this.s8m.bind(this);
  this.u0c[s2f.i4b].onclick = this.u3o.bind(this);
	this.u0c[s2f.f9i].onclick = this.f4e.bind(this);
	this.u0c[s2f.d5g].onclick = this.v7l.bind(this);
	this.u0c[s2f.s7f].onclick = this.p5k.bind(this);
	this.u0c[s2f.event].onclick = this.j5x.bind(this);
	this.u0c[s2f.g0a].onclick = this.z3g.bind(this);
}

b4b(l8u)
{
	this.l8u = l8u;
	this.y6e();
}

x3j()
{
	this.c4u("grid-player");
	this.c4u("grid-rating");
 	this.c4u("grid-flag");
	this.c4u("grid-result");
	this.c4u("grid-moves");
	this.c4u("grid-year");
	this.c4u("grid-event");
	this.c4u("grid-round");
}

g3c()
{
	this.g5y("grid-player", i0e);
	this.g5y("grid-rating", d0e);
 	this.g5y("grid-flag", h8n);
	this.g5y("grid-result", t1o);
	this.g5y("grid-moves", r3i);
	this.g5y("grid-year", p6z);
	this.g5y("grid-event", d7l);
	this.g5y("grid-round", j0a);

}

c4u(f7r)
{
	let p7f = this.h5c.getElementsByClassName(f7r);
	for (let i = 0; i < p7f.length; i++) {
		p7f[i].style.display = "none";
	}
}

j3p(f7r)
{
	let p7f = this.h5c.getElementsByClassName(f7r);
	for (let i = 0; i < p7f.length; i++) {
		p7f[i].style.display = "table-cell";
	}
}

g5y(f7r, width)
{
	let p7f = this.h5c.getElementsByClassName(f7r);
	for (let i = 0; i < p7f.length; i++) {
		p7f[i].style.width = (width) + "px";
	}
}

y6e()
{
	this.k6k = this.h5c.clientWidth;
	this.k6k -= 17;
	if (this.k6k < 100)
	{
		this.k6k = 100;
	}
	i0e = 200;
	d0e = 52;
	t1o = 34;
	r3i = 50;
	p6z = 52;
	d7l = 200;
	j0a = 50;
  h8n = 30;

 
	let b5i = document.getElementsByClassName("tdreplay")[0];
	if (b5i.clientWidth <= r2u)
	{
		let f3y = 0.7;
		i0e *= f3y;
		d0e *= f3y;
		t1o *= f3y;
		r3i *= f3y;
		p6z *= f3y;
		d7l *= f3y;
		j0a *= f3y;
	}
	this.e3u();
}

b1i()
{
	this.x3j();
	this.g3c();

  let e0k = 2.8;
  let r4n = 2.8;
  let v9j = 17;
	if (this.k6k <= 400)
	{
		this.j3p("grid-player");
		this.j3p("grid-result");
    this.j3p("grid-year");
		this.j3p("grid-event");
    let k5q = 5 * (e0k + r4n);
		let n0m = t1o + p6z;
		let k2z = Math.trunc((this.k6k - n0m - k5q - v9j) / 3);
		this.g5y("grid-player", k2z);
		this.g5y("grid-event", k2z);
	}
	else if (this.k6k <= 580)
	{
		this.j3p("grid-player");
		this.j3p("grid-rating");
		this.j3p("grid-result");
		this.j3p("grid-year");
		this.j3p("grid-event");
    let k5q = 7 * (e0k + r4n);
		let n0m = 2 * d0e + t1o + p6z;
		let k2z = Math.trunc((this.k6k - n0m - k5q - v9j) / 3);
		this.g5y("grid-player", k2z);
		this.g5y("grid-event", k2z);
	}
	else
	{
		this.j3p("grid-player");
		this.j3p("grid-rating");
    this.j3p("grid-flag");
		this.j3p("grid-result");
		this.j3p("grid-moves");
		this.j3p("grid-year");
		this.j3p("grid-event");
		this.j3p("grid-round");
    let k5q = 11 * (e0k + r4n);
		let n0m = 2 * d0e + 2 * h8n + t1o + r3i + p6z + j0a;
		let k2z = Math.trunc((this.k6k - n0m - k5q - v9j) / 3);
		this.g5y("grid-player", k2z);
		this.g5y("grid-event", k2z);
	}
}

e3u()
{
	let k2j = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.g9j + "\">"; 
	for (const t5a of this.l8u)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += t5a.q4h.w4e.w2j.k7l();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (t5a.q4h.w4e.e2j)
		{
			s += t5a.q4h.w4e.e2j;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (t5a.q4h.w4e.j8v != r4b.o8h)
		{
      let b1v = "images/flags/" + k2j.toString() + "/" + n8u(t5a.q4h.w4e.j8v) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += b1v;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += t5a.q4h.d7m.w2j.k7l();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (t5a.q4h.d7m.e2j)
		{
			s += t5a.q4h.d7m.e2j;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (t5a.q4h.d7m.j8v != r4b.o8h)
		{
      let b1v = "images/flags/" + k2j.toString() + "/" + n8u(t5a.q4h.d7m.j8v) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += b1v;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-result\">";
		s += n7g(t5a.q4h.f9i);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += t5a.e3j;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += t5a.q4h.w9a.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += t5a.q4h.y9d.p9d;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += t5a.q4h.g8l();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.f9m.innerHTML = s;

  let g3m = document.getElementById('gameList' + this.g9j);
  g3m.addEventListener('click', this.u0w.bind(this));

	this.b1i();
}

m0d(i7a)
{
	if (i7a != this.t5t)
	{
		this.t5t = i7a;
		this.z9q = y0s.i6c;
	}
	else
	{
		if (this.z9q == y0s.o8h)
		{
			this.z9q = y0s.i6c;
		}
		else if (this.z9q == y0s.i6c)
		{
			this.z9q = y0s.e8s;
		}
		else if (this.z9q == y0s.e8s)
		{
			this.z9q = y0s.i6c;
		}
	}
	e8s = (this.z9q == y0s.e8s);

	for (const s4b of this.u0c)
	{
		let s = s4b.s4k;
		let s0u = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let h0p = s0u.replace(" grid-header-sort grid-header-sort-asc", "");
		s4b.s4k = h0p;
	}
	let z5b = this.u0c[this.t5t];
	if (this.z9q == y0s.e8s)
	{
		z5b.s4k = z5b.s4k + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		z5b.s4k = z5b.s4k + " grid-header-sort grid-header-sort-asc";
	}
}

j4r(event)
{
	this.m0d(s2f.z7n);
	this.l8u.sort(a0r);
	this.e3u();
}

z9l(event)
{
	this.m0d(s2f.m1w);
	this.l8u.sort(g2i);
	this.e3u();
}

v3m(event)
{
	this.m0d(s2f.w0l);
	this.l8u.sort(i3l);
	this.e3u();
}

i1x(event)
{
	this.m0d(s2f.o1a);
	this.l8u.sort(r0c);
	this.e3u();
}

s8m(event)
{
	this.m0d(s2f.g3i);
	this.l8u.sort(x5j);
	this.e3u();
}

u3o(event)
{
	this.m0d(s2f.i4b);
	this.l8u.sort(h0z);
	this.e3u();
}

f4e(event)
{
	this.m0d(s2f.f9i);
	this.l8u.sort(c7t);
	this.e3u();
}

p5k(event)
{
	this.m0d(s2f.s7f);
	this.l8u.sort(h4e);
	this.e3u();
}

j5x(event)
{
	this.m0d(s2f.event);
	this.l8u.sort(h1x);
	this.e3u();
}

z3g(event)
{
	this.m0d(s2f.g0a);
	this.l8u.sort(t3c);
	this.e3u();
}

v7l(event)
{
	this.m0d(s2f.d5g);
	this.l8u.sort(z0k);
	this.e3u();
}

u0w(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.w0h)
  {
    this.w0h(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class m0e
{

constructor()
{
	this.j1d = new d8g();
	this.t9a = new d8g();
	this.k4h = false;
	this.a0y = 0;
	this.c7s = 0;
	this.d1l = [];
}

}

var tooltip = null;

class g7e
{

constructor(g9j)
{
	this.g9j = g9j;
	this.l1b = new m6y();
	this.o0k = null;
	this.s6j = new m0e();
	this.r7e = null;
	this.j6v = [];
	this.y8p = [];
  this.l2e = [];
  this.k6e = [];
	this.a8j = -1;
	this.t1u = new i2p();
  this.g7a = null;
	this.f6u = true;
	this.b9l = false;
	this.c9q = [];
	this.x9p = 0;
  this.p1j = true;
  this.h4l = false;
	this.w2m = false;
	this.h6h = true;
  this.t2y = false;
}

j4x(v2i, o9c)
{
	this.l1b = v2i.x5w();
  this.l1b.e1a();
	this.g7a = this.l1b.c6z(o9c);
	this.e1u();
}

s2h(m0x)
{
  this.l7x(this.l2e[m0x]);
}

e1u()
{
	this.h3u();
	this.a6z();
  this.n1x(this.l1b.o4h(this.g7a));
}

h3u()
{
	let n6k = new a9e();
  n6k.p9h(this.p1j);
	n6k.x9x(this.t2y);
  /*
	n6k.setOneLine(this.t2y);
  */
	n6k.t7m(this.w2m);
	n6k.i4a(this.h6h);
	n6k.q9l(this.l1b);

  this.r7e.innerHTML = n6k.u8j.o5j;
  this.j6v = this.r7e.getElementsByClassName("tdmove");
  this.y8p = this.r7e.getElementsByClassName("tdcomment");

	this.r0s("tdmove");
	this.r0s("tdcomment");
	this.r0s("tddia");
	this.r0s("tdmedal");
  this.r0s("tdcolors");

  this.l4j("tdmove");

	this.d7j();
	this.d3z();
}

r0s(a0c)
{
	let g9j = this.g9j;
	let o9e = this.r7e.getElementsByClassName(a0c);
	for (const h4k of o9e)
	{
    let o9c = h4k.getAttribute('movenr');
    h4k.onclick = this.p4z.bind(this, o9c);
	}
}

l4j(a0c)
{
	let g9j = this.g9j;
	let o9e = this.r7e.getElementsByClassName(a0c);
	for (const h4k of o9e)
	{
    let o9c = h4k.getAttribute('movenr');
    h4k.onmouseover = this.s1u.bind(this, o9c);
    h4k.onmouseleave = this.t1k.bind(this, o9c);
	}
}

p3f()
{
	this.d7j();
}

d7j()
{
	let x4e = this.r7e.getElementsByClassName("tddia");
	for (const p8e of x4e)
	{
		let y7t = new p8q();
		y7t.i0w = p8e.getElementsByTagName("canvas")[0];
		let h0d = this.t1u.x7g();
		y7t.i0w.width = h0d;
		y7t.i0w.height = h0d;
		y7t.t9l(this.t1u);
		let j0j = this.l1b.c6z(p8e.getAttribute('movenr'));
    y7t.p6l(this.l1b.j1d(j0j));
    if (j0j.e0p)
    {
  		y7t.v4p(j0j.e0p.i2i());
	  	y7t.g8m(j0j.e0p.o9d());
    }
    else
    {
   		y7t.v4p(this.l1b.t7y());
	  	y7t.g8m(this.l1b.u6s());
    }
		y7t.g3d();
	}
}

d3z()
{
	let q7u = this.r7e.getElementsByClassName("tdmedal");
	for (const r1z of q7u)
	{
		let i0w = r1z.getElementsByTagName("canvas")[0];
		i0w.width = 40;
		i0w.height = 16;
		let l9k = i0w.getContext('2d');
		let rect = new w2y();
		rect.o7d(40);
		rect.m7w(16);
		let j0j = this.l1b.c6z(r1z.getAttribute('movenr'));
    if (j0j.e0p)
    {
  		d3z(l9k, rect, j0j.e0p.n3a());
    }
    else
    {
  		d3z(l9k, rect, this.l1b.d4d());
    }
	}
}

a6z()
{
	let l6q = new r1s();
	l6q.p5e = this.l1b.p5e();
  l6q.l9q = this.l1b.j1d(this.g7a);
  if (this.g6l())
  {
    l6q.i2i = this.l1b.t7y();
	  l6q.o9d = this.l1b.u6s();
  }
  else
  {
  	l6q.i2i = this.g7a.e0p.i2i();
	  l6q.o9d = this.g7a.e0p.o9d();
  }
  
	if (this.z6f())
	{
		l6q.v9v = new h2h();
	}
	else
	{
    let d9u = this.g7a.x5w();
		this.l1b.l6i(d9u);
		l6q.v9v = d9u.e0p.w5b().x5w();
	}
  
 	if (!this.g6l())
	{
		l6q.w2k = this.g7a.e0p.w5b();
	}
	l6q.b0b = this.b0b();
	l6q.i5w = this.i5w();
	l6q.j0b = this.j0b();
	l6q.n4d = 0; 
  l6q.i5v = this.l1b.i5v(this.g7a);
	if (this.o0k)
	{
		this.o0k.i8h(l6q);
	}
}

t2o(g3o)
{
	this.g7a = this.l1b.c6z(g3o);
	this.a6z();
}

c0w(r7s)
{
	switch (r7s)
	{
		case o6y:
		case k9n:
		case o7w:
			this.i2a();
			break;
		case b0r:
		case z0o:
		case p1f:
			this.u3c();
			break;
		case h8p:
		case i5q:
		case t4p:
			this.y0l();
			break;
		case y1w:
		case o0c:
		case z7r:
			this.e1x();
			break;
		case i4f:
			break;
		case n5y:
			break;
	}
}

b4e()
{
  if (this.g7a.b1m)
  {
    this.n1x(this.g7a.b1m.w4a);
  }
  else
  {
    this.n1x(0);
  }
}

w4t()
{
	this.b4e();
	this.a6z();
}

i5w()
{
	return !this.g6l();
}

g6l()
{
	return this.l1b.g6l(this.g7a);
}

z6f()
{
	return this.l1b.z6f(this.g7a);
}

b0b()
{
	return this.l1b.b0b(this.g7a);
}

v9v(w3h)
{
	if (this.z6f())
	{
		return null;
	}
	else
	{
    let d9u = this.g7a.x5w();
		this.l1b.m7u(d9u, w3h);
		return d9u.e0p;
	}
}

u3c()
{
	if (this.i5w())
	{
		this.l1b.m7j(this.g7a);
		this.w4t();
	}
}

j0b()
{
	return !this.z6f();
}

i2a()
{
	if (this.j0b())
	{
		this.h8d(0);
	}
}

h8d(index)
{
	let s6d = this.l1b.b5z(this.g7a);
	if (index >= 0 && index < s6d)
	{
		this.l1b.m7u(this.g7a, index);
		this.w4t();
	}
}

e1x()
{
	if (this.j0b())
	{
		this.l1b.n4j(this.g7a);
		this.w4t();
	}
}

y0l()
{
	if (this.i5w())
	{
		this.g7a = this.l1b.j1p();
		this.w4t();
	}
}

j0i()
{
	if (this.f6u)
	{
		this.w0d();
	}
	else
	{
		this.p2e();
	}
}

y3v()
{
	if (this.b9l)
	{
		this.b9l = false;
		this.o0k.f7c.y7t.s7z();
		this.a6z();
	}
	else
	{
		this.a6z();
	}
}


p2e()
{
	if (this.z6f())
	{
		this.a6z();
		return;
	}
  if (chess)
  {
  	this.h8d(0);
    return;
  }

  
 	let e0p = this.v9v(0);
  if (!e0p.c7s())
 	{
  	this.h8d(0);
	  return;
 	}

  
	let z2f = false;
	if (!this.s6j.k4h)
	{
		z2f = true;
	}
	else
	{
		z2f = false;
		if (this.s6j.a0y < this.s6j.c7s)
		{
			if (this.s6j.t9a.e6d(this.s6j.j1d))
			{
				z2f = true;
			}
		}
	}
	if (z2f)
	{
		this.s6j.j1d = this.l1b.j1d(this.g7a);
		this.s6j.t9a = this.l1b.j1d(this.g7a);
		this.s6j.k4h = true;
		this.s6j.a0y = 0;
		this.s6j.d1l.length = 0;
		this.s6j.d1l.push(e0p.m0h()); 
		this.s6j.c7s = e0p.c7s();
		if (this.s6j.c7s > 1)
		{
			let k3t = generateBetweens(this.s6j.t9a, e0p.w5b());
			for (let i = 0; i < this.s6j.c7s - 1; i++)
			{
				this.s6j.d1l.push(k3t[i]);
			}
		}
		this.s6j.d1l.push(e0p.n6w());
	}
	if (this.s6j.a0y < this.s6j.c7s)
	{
		let t9f = e0p.t9f();
		let v6w = this.s6j.d1l[this.s6j.a0y];
		let n6w = this.s6j.d1l[this.s6j.a0y + 1];
		this.s6j.t9a.j7y(v6w, f8z.t3k);
		this.s6j.t9a.j7y(n6w, t9f);
		this.s6j.j1d = this.s6j.t9a.x5w();
		this.s6j.a0y++;
		let l6q = new r1s();
		l6q.l9q = this.s6j.t9a.x5w();
		l6q.i5w = this.i5w();
		l6q.j0b = this.j0b();
		if (this.o0k)
		{
			this.o0k.i8h(l6q);
		}
	}
	else
	{
		this.s6j.k4h = false;
		this.h8d(0);
	}
}



w0d()
{
	if (this.b9l)
	{
		let s4a = this.o0k.f7c.y7t.t8q();
		if (s4a)
		{
			if (this.x9p < this.c9q.length - 1)
			{
				this.o0k.f7c.y7t.g5s(this.c9q[this.x9p],
					this.c9q[this.x9p+1], true);
				this.x9p++;
			}
			else
			{
				this.b9l = false;
				this.h8d(0);
			}
		}
		return;
	}

	if (this.z6f())
	{
		this.a6z();
		return;
	}

	this.c9q.length = 0;
	let e0p = this.v9v(0);
	let c7s = e0p.c7s();
	if (c7s == 0)
	{
		this.c9q.push(e0p.m0h()); 
		this.c9q.push(e0p.z5f());
	}
	else
	{
		this.c9q.push(e0p.m0h());
		if (c7s > 1)
		{
      let j1d = this.l1b.j1d(this.g7a);
      let k3t = generateBetweens(j1d, e0p.w5b());
			for (let i = 0; i < c7s - 1; i++)
			{
				this.c9q.push(k3t[i]);
			}
		}
		this.c9q.push(e0p.z5f());
	}

	this.o0k.f7c.y7t.g5s(this.c9q[0],
		this.c9q[1], c7s > 0);
	this.x9p = 1;
	this.b9l = true;
}

z4p(i4c)
{
	for (const m of this.j6v)
	{
		if (m.getAttribute('movenr') == i4c)
		{
			return m;
		}
	}
	return null;
}

z0m(i4c)
{
	let y9u = [];
	for (const g7q of this.y8p)
	{
		if (g7q.getAttribute('movenr') == i4c)
		{
			y9u.push(g7q);
		}
	}
	return y9u;
}

l7x(i0s)
{
	let c2m = i0s.offsetTop;
	let b7s = i0s.scrollHeight;

	let p7s = this.r7e.offsetTop;
	let l3v = this.r7e.scrollTop;
	let k6y = this.r7e.clientHeight;
	let u5e = this.r7e.scrollHeight;
	let i1d = c2m - p7s;
	if (i1d >= l3v && i1d + b7s <= l3v + k6y - 1)
	{
		
	}
	else
	{
		
		let top = i1d - (k6y / 2);
		if (top < 0) top = 0;
		this.r7e.scrollTop = top;
	}
}

a9q(q1b, y6o)
{
	let o6n = q1b;
	while (o6n.u9s)
	{
		o6n = o6n.u9s;
	}
 	while (o6n)
	{
    if (this.l1b.y7c(o6n.w4a) == false)
    {
 	  	let i0s = this.z4p(o6n.w4a);
  	  if (i0s)
 		  {
  		  i0s.classList.add(y6o);
 	  	}
    }
    o6n = o6n.d8n;
  }
}

n1x(o9c)
{
  
 	for (const e0p of this.j6v)
	{
 		e0p.classList.remove('tdcurline');
    e0p.classList.remove('tdcurnode1');
	}
 	for (const g7q of this.y8p)
	{
 		g7q.classList.remove('tdcurline');
	}

  
	if (this.a8j >= 0)
	{
		let i0s = this.z4p(this.a8j);
		if (i0s)
		{
			i0s.classList.remove('tdcurmove');
		}
	}

  
  let l3s = true;
  let j7z = this.l1b.k7n(this.g7a);
 	for (const q1b of j7z)
	{
    if (q1b.u9s && l3s)
		{
		  this.a9q(q1b, 'tdcurnode1');
      l3s = false;
    }
    else
    {
      if (this.l1b.y7c(q1b.w4a) == false)
      {
   	  	let i6y = this.z4p(q1b.w4a);
	  	  if (i6y)
  		  {
	  		  i6y.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let i0s = this.z4p(o9c);
	if (i0s)
	{
    i0s.classList.remove('tdcurline');
		i0s.classList.add('tdcurmove');
		this.l7x(i0s);
	}
	this.a8j = o9c;
}

b8k()
{
	let e0p = this.z4p(this.a8j);
	if (!e0p) return;
	let m3p = e0p.offsetTop;
	let d4e = null;
	let r9m = -1;
	for (const m of this.j6v)
	{
		if (m.offsetTop < m3p)
		{
			if (m.offsetTop > r9m)
			{
				d4e = m;
				r9m = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (d4e)
	{
		this.z7i(d4e.getAttribute('movenr'));
	}
	else
	{
		if (this.j6v.length)
		{
			this.z7i(this.j6v[0].getAttribute('movenr'));
		}
	}
}

y3o()
{
	let e0p = this.z4p(this.a8j);
	if (!e0p)
	{
		this.i2a();
		return;
	}
	let m3p = e0p.offsetTop;
	for (const m of this.j6v)
	{
		if (m.offsetTop > m3p)
		{
			this.z7i(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.j6v.length)
	{
		this.z7i(this.j6v[this.j6v.length - 1].getAttribute('movenr'));
	}
}

z7i(g3o)
{
  
  
  
  
  if (this.g7a.b1m)
  {
    if (this.g7a.b1m.w4a == g3o)
    {
      return;
    }
  }
  else
  {
    if (g3o == 0)
    {
      return;
    }
  }
	
  this.t2o(g3o);
  this.n1x(g3o);
	
}

o4h()
{
	return this.l1b.o4h(this.g7a);
}

t9l(t1u)
{
  this.t1u = t1u.x5w();
	this.t1u.i7p = 0;
	this.t1u.d4b = 0;
	this.t1u.l7g = 32;
  this.t1u.n5o = 2;
 	this.t1u.g8g = false;
}

p5e()
{
	return this.l1b.p5e();
}

b1g()
{
	return this.l1b.b1g();
}

h5l()
{
	return this.l1b.h5l(this.g7a);
}

p9x()
{
	return this.l1b.p9x();
}

p4z(o9c, event)
{
  this.z7i(o9c);
}

s1u(o9c, event)
{
  if (!this.h4l) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const h4k = event.currentTarget; 
  const rect = h4k.getBoundingClientRect();
  console.log(`w2y.r2j: ${rect.left}`);
  console.log(`w2y.y5a: ${rect.top}`);
  let h9f = rect.left;
  let l8o = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let e6k = this.t1u.x7g();

  if (h9f + e6k > viewportWidth)
  {
    h9f = viewportWidth - e6k - 5;
  }
  if (h9f < 5)
  {
    h9f = 5;
  }
  if (l8o + e6k > viewportHeight)
  {
    l8o = viewportHeight - e6k - 5;
  }
  if (l8o < 5)
  {
    l8o = 5;
  }

  let j0j = this.l1b.c6z(o9c);
  let j1d = this.l1b.j1d(j0j);
  tooltip.innerHTML = this.o7x(j1d);

  tooltip.style.left = `${h9f}px`;
  tooltip.style.top = `${l8o}px`;
  tooltip.classList.add('visible');
}

t1k(o9c, event)
{
  if (!this.h4l) return;
  tooltip.classList.remove('visible');
}

o7x(j1d)
{
  let y7t = new p8q();
  const tempCanvas = document.createElement('canvas');
	y7t.i0w = tempCanvas;
	let h0d = this.t1u.x7g();
	y7t.i0w.width = h0d;
	y7t.i0w.height = h0d;
	y7t.t9l(this.t1u);
  y7t.p6l(j1d);
  y7t.g3d();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="${imageDataURL}" alt="Chess Position" width="${boardSize}" height="${boardSize}">`;
}

}

class v3x
{

constructor()
{
	this.fontSize = 15;
  this.d2u = true;
 	this.p2v = true;
}

x5w()
{
  return Object.assign(new v3x(), this);
}

}
class l3f
{

constructor(g9j)
{
  this.x4i = new s2g(g9j);
  this.j0c = new g7e(g9j);
}

}

class h7e
{

constructor()
{
	this.r2n = false;
	this.o0k = null;
	this.r1p = null;
	this.i3c = 6;
	this.j9y = null;
	this.y9n = null;
	this.l8r = null;
	this.f5f = null;
	this.i2m = null;
	this.i4r = false;
}

y0n()
{
	this.r2n = false;
	this.r6z();
	this.j9y.classList.replace('autoPlay', 'autoStop');
	this.f5f.style.display = 'none';
	this.i2m.style.display = 'none';
	this.y9n.style.display = 'inline-block';
	this.l8r.style.display = 'inline-block';
	this.n8x();
	this.o0k.f7c.n1f = false;
}

g6o()
{
	if (this.r1p)
	{
		clearInterval(this.r1p);
		this.r1p = null;
		this.j9y.classList.replace('autoStop', 'autoPlay');
		this.f5f.style.display = 'inline-block';
		this.i2m.style.display = 'inline-block';
		this.y9n.style.display = 'none';
		this.l8r.style.display = 'none';
		this.o0k.f7c.n1f = true; 
		this.o0k.v2a.j0c.y3v();
	}
}

r6z()
{
	let g9j = this.o0k.g9j;
	this.r1p = setInterval(function(){ l4l(g9j); },
		this.o0k.v2a.j0c.f6u ? this.i3c * 2 : this.i3c * 100);
}

w4s()
{
	return this.r1p != null;
}

i5w()
{
	return !this.o0k.v2a.j0c.g6l();
}

j0b()
{
	return !this.o0k.v2a.j0c.z6f();
}

p6d()
{
	if (this.i4r)
	{
		return;
	}
	else
	{
		this.i4r = true;
	}
	if (!this.j0b())
	{
		this.g6o();
	}
	else
	{
		this.o0k.v2a.j0c.j0i();
	}
	this.i4r = false;
}

k8n()
{
	if (this.r1p)
	{
		if (this.i3c < 50)
		{
			this.i3c++;
			clearInterval(this.r1p);
			this.r6z();
			this.n8x();
		}
	}
}

h8c()
{
	if (this.r1p)
	{
		if (this.i3c > 1)
		{
			this.i3c--;
			clearInterval(this.r1p);
			this.r6z();
			this.n8x();
		}
	}
}

n8x()
{
	m2k(this.y9n, this.i3c < 50);
	m2k(this.l8r, this.i3c > 1);
}

}

let s6f = null;
let g3q = 0;
let m8o = null;

class t1a
{

constructor()
{
	this.index = 0;
	this.t3j = '';
	this.b5i = null;
	this.u6r = false;
	this.o0k = null;
	this.z2m = null;
  this.l8u = [];
	this.d0k = 0;
  this.q2p = 0;

	this.d5h = null;
	this.r6a = null;
	this.left = null;
	this.z1e = null;
	this.e8o = null;
	this.t4a = null;
	this.r4h = null;
	this.l4o = null;
	this.b6c = null;
	this.v4d = null;
	this.y3g = null;
 	this.c0f = null;
 	this.k6h = null;
	this.i1g = null;
	this.f5f = null;
	this.y9n = null;
	this.j9y = null;
	this.i2m = null;
	this.l8r = null;
	this.x3e = null;
 	this.m8z = null;
  this.d1t = null;
	this.s0s = null;
  this.x7w = null;
	this.w6v = null;
	this.p9t = null;
	this.h5c = null;
	this.p3p = null;
	this.i3y = null;
	this.d4k = null;
  this.o6s = null;
  this.y5b = null;
	this.d7f = null;
	this.k1l = null;
	this.h1w = null;
	this.y9r = null;
	this.q1z = null;

	this.b2s = null;
	this.x0w = null;
	this.s3p = null;
	this.r1h = null;

  this.m8a = null;
	this.d5n = null;
	this.w0m = null;
  this.h0w = null;

  this.b8j = null;

  
  this.m7i = null;
  this.i5d = null;
  this.k3i = null;
  this.o0d = null;
  this.q2o = null;
  this.v6o = null;

  
}

x3r(index, b5i, t3j)
{
	this.index = index;
	this.b5i = b5i;
	this.t3j = t3j;
	b5i.innerHTML = '';
	b5i.id = "replay";

  let s = '';
 	s += "<div class=\"rootParent\">";
	s +=   "<div id=\"root" + index + "\" class=\"root\">";

	s +=     "<div id=\"left" + index + "\" class=\"left\">";
	s +=       "<div id=\"leftContainer" + index + "\" class=\"leftContainer\">";
	s +=         "<div id=\"leftNest" + index + "\" class=\"leftNest\">";
	s +=           "<div id=\"leftNorth" + index + "\" class=\"leftNorth\">";
	s +=             "<div id=\"boardHolder" + index + "\" class=\"boardHolder\">";
	s +=               "<div id=\"boardPanel" + index + "\" class=\"boardPanel\">";
	s +=                 "<canvas id=\"boardCanvas" + index + "\" class=\"boardCanvas\"></canvas>";
	s +=               "</div>";
	s +=             "</div>";
	s +=             "<div id=\"belowBoard" + index + "\" class=\"belowBoard\">";
	s +=               "<div id=\"replayPanel" + index + "\" class=\"replayPanel\">";
	s +=                 "<button id=\"goToBegin" + index + "\" class=\"replayButton goToBegin\" title=\"Go to begin\"></button>";
	s +=                 "<button id=\"playBackward" + index + "\" class=\"replayButton playBackward\" title=\"Play backward\"></button>";
	s +=                 "<button id=\"playSlower" + index + "\" class=\"replayButton playSlower\" title=\"Slower\"></button>";
	s +=                 "<button id=\"autoPlay" + index + "\" class=\"replayButton autoPlay\" title=\"Auto play\"></button>";
	s +=                 "<button id=\"playForward" + index + "\" class=\"replayButton playForward\" title=\"Play forward\"></button>";
	s +=                 "<button id=\"playFaster" + index + "\" class=\"replayButton playFaster\" title=\"Faster\"></button>";
	s +=                 "<button id=\"goToEnd" + index + "\" class=\"replayButton goToEnd\" title=\"Go to end\"></button>";
	s +=                 "<button id=\"flipBoard" + index + "\" class=\"replayButton flipBoard\" title=\"Flip Board\"></button>";
	s +=                 "<button id=\"goToPrevious" + index + "\" class=\"replayButton loadPrevious\" title=\"Load previous game\"></button>";
	s +=                 "<button id=\"goToNext" + index + "\" class=\"replayButton loadNext\" title=\"Load next game\"></button>";
  s +=                 "<button id=\"showGameList" + index + "\" class=\"replayButton gameList\" title=\"Show Game List\"></button>";
	s +=                 "<button id=\"download" + index + "\" class=\"replayButton download\" title=\"Download PDN\"></button>";
	s +=                 "<button id=\"settings" + index + "\" class=\"replayButton settings\" title=\"Settings\"></button>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=           "<div id=\"leftSouth" + index + "\" class=\"leftSouth\">";
	s +=             "<div id=\"leftSouthNest" + index + "\" class=\"leftSouthNest\">";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
	s +=       "</div>";
	s +=     "</div>";

	s +=     "<div id=\"right" + index + "\" class=\"right\">";
	s +=       "<div id=\"rightNest" + index + "\" class=\"rightNest\">";
	s +=         "<div id=\"rightNorth" + index + "\" class=\"rightNorth\">";
	s +=           "<div id=\"nota-container" + index + "\" class=\"nota-container\">";
	s +=             "<div id=\"nota-header-container" + index + "\" class=\"nota-header-container\">";
	s +=               "<div id=\"headerPanel" + index + "\" class=\"headerPanel\"></div>";
	s +=             "</div>";
	s +=             "<div class=\"nota-moves-container\">";
	s +=               "<div id=\"nota-imoves-container" + index + "\" class=\"nota-imoves-container\">";
	s +=                 "<div id=\"movesPanel" + index + "\" class=\"movesPanel\"></div>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
	s +=         "<div id=\"rightSouth" + index + "\" class=\"rightSouth\">";
	s +=           "<div id=\"enota-container" + index + "\" class=\"enota-container\">";

  
	s +=  "<div id=\"belowBoard" + index + "\" class=\"belowBoard\">";
 	s +=  "<div id=\"engineButtonPanel" + index + "\" class=\"replayPanel\">";

  
  s += "<div class=\"toggle-container\">";
  s += "<input type=\"checkbox\" id=\"startEngine" + index + "\" hidden>";
  s += "<label for=\"startEngine" + index + "\" class=\"switch\" title=\"Evaluation on/off\">";
  s += "<span class=\"slider\"></span>";
  s += "</label>";
  s += "</div>";
  
	s += "<button id=\"threat" + index + "\" class=\"replayButton threat-off\" title=\"Threat\"></button>";
  
	s += "<button id=\"engineSettings" + index + "\" class=\"replayButton engineSettings\" title=\"Settings\"></button>";
  s +=  "</div>";
  s +=  "</div>";

	s +=             "<div class=\"enota-moves-container\">";
	s +=               "<div id=\"enota-imoves-container" + index + "\" class=\"enota-imoves-container\">";
	s +=                 "<div id=\"emovesPanel" + index + "\" class=\"emovesPanel\"></div>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
  s +=       "</div>";
	s +=     "</div>";

 	s +=     "<div id=\"listParent" + index + "\" class=\"listParent grid\">";
	s +=       "<div id=\"listHeader" + index + "\" class=\"grid-header grid-header-scrollbar\">";
	s +=         "<table id=\"listHeaderTable" + index + "\" class=\"grid-table\">";
	s +=         "</table>";
	s +=       "</div>";
	s +=       "<div id=\"listBody" + index + "\" class=\"listBody grid-body\">";
	s +=         "<table id=\"gameList" + index + "\" class=\"grid-table gamelist-table\"></table>";
	s +=       "</div>";
  s +=       "<div id=\"list-button-container" + index + "\" class=\"navButtonContainer\">";
	s +=  	     "<button id=\"hideGameList" + index + "\" class=\"navButton\" title=\"Hide Game List\">&lt; Back</button>";
  s +=       "</div>";
  s +=     "</div>";
	s +=   "</div>";
	s += "</div>";

  b5i.innerHTML = s;

	this.d5h = document.getElementById("rootParent"+index);
	this.r6a = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.z1e = document.getElementById("leftContainer"+index);
	this.e8o = document.getElementById("leftNest"+index);
	this.t4a = document.getElementById("leftNorth"+index);
	this.r4h = document.getElementById("boardHolder"+index);
	this.l4o = document.getElementById("boardPanel"+index);
	this.b6c = document.getElementById("boardCanvas"+index);
	this.v4d = document.getElementById("belowBoard"+index);
	this.y3g = document.getElementById("replayPanel"+index);
 	this.c0f = document.getElementById("goToPrevious"+index);
 	this.k6h = document.getElementById("goToNext"+index);
	this.i1g = document.getElementById("goToBegin"+index);
	this.f5f = document.getElementById("playBackward"+index);
	this.y9n = document.getElementById("playSlower"+index);
	this.j9y = document.getElementById("autoPlay"+index);
	this.i2m = document.getElementById("playForward"+index);
	this.l8r = document.getElementById("playFaster"+index);
	this.x3e = document.getElementById("goToEnd"+index);
  this.m8z = document.getElementById("flipBoard"+index);
  this.d1t = document.getElementById("download"+index);
	this.s0s = document.getElementById("showGameList"+index);
  this.x7w = document.getElementById("settings"+index);
	this.w6v = document.getElementById("leftSouth"+index);
	this.p9t = document.getElementById("leftSouthNest"+index);
	this.h5c = document.getElementById("listParent"+index);
	this.p3p = document.getElementById("listHeader"+index);
	this.i3y = document.getElementById("listHeaderTable"+index);
	this.d4k = document.getElementById("listBody"+index);
  this.o6s = document.getElementById("list-button-container"+index);
  this.y5b = document.getElementById("hideGameList"+index);
	this.d7f = document.getElementById("gameList"+index);
	this.k1l = document.getElementById("right"+index);
	this.h1w = document.getElementById("rightNest"+index);
	this.y9r = document.getElementById("rightNorth"+index);
	this.q1z = document.getElementById("rightSouth"+index);

  
  if (!chess)
  {
    this.y9r.style.height = "100%";
   	this.q1z.style.display = 'none';
  }

	this.b2s = document.getElementById("nota-container"+index);
  this.b2s.style.fontSize = w9r.fontSize + 'px';
	this.x0w = document.getElementById("nota-header-container"+index);
	this.s3p = document.getElementById("headerPanel"+index);
	this.r1h = document.getElementById("movesPanel"+index);

	this.m8a = document.getElementById("enota-container"+index);
  this.m8a.style.fontSize = w9r.fontSize + 'px';
	this.d5n = document.getElementById("enota-header-container"+index);
	this.w0m = document.getElementById("eheaderPanel"+index);
	this.h0w = document.getElementById("emovesPanel"+index);

  this.b8j = document.getElementById("startEngine"+index);
}

m4q()
{
	this.b5i.style.display = 'block';
	this.y9n.style.display = 'none';
	this.l8r.style.display = 'none';
	this.h5c.style.display = 'none';

	this.u6r = false;
	if (this.b5i.clientWidth <= r2u)
	{
		this.a5u();
		this.u6r = true;
	}
	else
	{
		this.l7c();
		this.s1b();
	}
  this.d8m();
	let g9j = this.index;

	this.i1g.onclick = this.e7p.bind(this);
	this.f5f.onclick = this.u3c.bind(this);
	this.y9n.onclick = this.k8n.bind(this);
	this.j9y.onclick = this.g7r.bind(this);
	this.l8r.onclick = this.h8c.bind(this);
	this.i2m.onclick = this.i2a.bind(this);
	this.x3e.onclick = this.p3v.bind(this);
  this.c0f.onclick = this.j1y.bind(this);
  this.k6h.onclick = this.p9z.bind(this);
  this.m8z.onclick = this.x6f.bind(this);
 	this.d1t.onclick = this.e5h.bind(this);
	this.s0s.onclick = this.a4b.bind(this);
 	this.y5b.onclick = this.s4f.bind(this);

  this.x7w.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.b8j.onchange = this.q4g.bind(this);

	this.o0k = new n9w(this.index);
	this.o0k.f7c.y7t.h3v(this.b6c);
	this.o0k.f7c.l4o = this.l4o;
  this.o0k.f7c.t9l(g0x);
	this.o0k.v2a.x4i.z8n = this.s3p;
	this.o0k.v2a.j0c.r7e = this.r1h;
  this.o0k.v2a.j0c.t9l(g0x);
	this.o0k.g3v.j9y = this.j9y;
	this.o0k.g3v.y9n = this.y9n;
	this.o0k.g3v.l8r = this.l8r;
	this.o0k.g3v.f5f = this.f5f;
	this.o0k.g3v.i2m = this.i2m;
 	this.o0k.g9b.j0c.r7e = this.h0w;
  this.o0k.g9b.j0c.t9l(g0x);

  this.o0k.g9b.x7w.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.z2m = new k8s(this.index);
	this.z2m.h5c = this.h5c;
	this.z2m.f9m = this.d7f;
	this.z2m.u2i = this.i3y;
	this.z2m.m4q();
	this.z2m.b4b(this.l8u);
  this.z2m.w0h = (d7f, index) => {
    this.a6b(d7f, index);
  };
	if (this.z2m.l8u.length)
	{
		this.e1u(0, 0);
	}
	else
	{
		let t5a = new b1y();
		this.o0k.e1u(null, 1, 0, t5a);
	}
}

e8t(t3j)
{
	this.t3j = t3j;
 	let lines = this.t3j.split('\n');
	let z9c = 0;
	for (const p5w of lines)
	{
		if (p5w.startsWith("[Event \""))
		{
			let g8n = z9c;
      let x6l = lines.length;
   		let h2b = lines.slice(g8n, x6l);
  		let i9n = new w3m(h2b);
	  	this.z2m.l8u[this.d0k] = i9n.s2j();
      break;
    }
    z9c++;
	}
  this.e1u(0, 0);
}

d8m()
{
	let lines = this.t3j.split('\n');
	let c7z = [];
	let z9c = 0;
	for (const p5w of lines)
	{
		if (p5w.startsWith("[Event \""))
		{
			c7z.push(z9c);
		}
		z9c++;
	}
	let i = 0;
	this.l8u = [];
	for (const s6v of c7z)
	{
		let g8n = s6v;
		let x6l = 0;
		if (i < c7z.length - 1)
		{
			x6l = c7z[i + 1];
		}
		else
		{
			x6l = lines.length;
		}
		let h2b = lines.slice(g8n, x6l);
		let i9n = new w3m(h2b);
		let t5a = i9n.s2j();
		this.l8u.push(t5a);
		i++;
	}
}

j7s()
{
	if (this.u6r || this.r6a.clientHeight <= r2u)
	{
		this.b5i.style.d2n = "0px";
		this.b5i.style.u1k = "0px";
		this.b5i.style.width = "100%";
		this.b5i.style.height = "88vh";
	}
	else
	{
		this.b5i.style.d2n = "1px solid gray";
		this.b5i.style.u1k = "1px solid gray";
		this.b5i.style.height = "88vh";
	}
}

n7f()
{
	this.j7s();

	this.left.style.width = "100%";

	let b4d = this.t4a.getBoundingClientRect();
	this.w6v.style.top = (b4d.height) + "px";
	this.s1b();

	this.r2e();
	this.l7c();
	this.y9i();
	this.f3e();
  this.o1d()
}

y1m()
{
	this.j7s();

	let e1l = this.r6a.getBoundingClientRect();
	this.left.style.width = (e1l.width * 0.50) + "px";
	let u1c = this.left.getBoundingClientRect();

	let b4d = this.t4a.getBoundingClientRect();
	this.w6v.style.top = (b4d.height) + "px";
	this.s1b();

	this.k1l.style.left = (u1c.width) + "px";
	this.k1l.style.width = (e1l.width - u1c.width) + "px";

	this.r2e();
	this.l7c();
	this.y9i();
	this.f3e();
  this.o1d()
}

l7c()
{
}

m8r()
{
  this.t4a.style.height = '100%';
  this.y9r.appendChild(this.b2s);
  this.b2s.style.height = '100%';
  this.q1z.appendChild(this.m8a);
  if (!chess)
  {
    this.q1z.style.display = 'none';
  }
  else
  {
    this.q1z.style.display = 'block';
    this.m8a.style.height = '100%';
  }
  this.k1l.style.display = 'block';
}

a5u()
{
  this.t4a.style.height = '70%';
  this.p9t.appendChild(this.b2s);
  if (!chess)
  {
    this.b2s.style.height = '100%';
    this.m8a.style.display = 'none';
  }
  else
  {
    this.p9t.appendChild(this.m8a);
    this.b2s.style.height = '50%';
    this.m8a.style.height = '50%';
    this.m8a.style.display = 'block';
  }
  this.k1l.style.display = 'none';
}

a4b(event)
{
	this.h5c.style.display = 'block';
  let d3j = this.h5c.clientHeight - this.p3p.clientHeight - this.o6s.clientHeight;
  this.d4k.style.height = d3j + "px";
	this.y9i();
}

s4f(event)
{
 	this.h5c.style.display = 'none';
}

f3e()
{
	this.o0k.v2a.x4i.d0b();
}

o1d()
{
}

y9i()
{
  this.z2m.y6e();
}

r2e()
{
	let b4d = this.t4a.getBoundingClientRect();
	let z1s = this.v4d.getBoundingClientRect();
	this.r4h.style.height = (b4d.height - z1s.height - 1) + "px";
	this.o0k.f7c.y6e();
}

s1b()
{
	let o7t = this.e8o.getBoundingClientRect();
	let b4d = this.t4a.getBoundingClientRect();
	let r7t = o7t.height - b4d.height;
	if (r7t < 0) r7t = 0;
	this.w6v.style.height = r7t + "px";
}

h4u()
{
  c2w('goToPrevious'+this.index, this.d0k > 0);
  c2w('goToNext'+this.index, this.d0k < this.z2m.l8u.length - 1);
}

n1r(e)
{
	this.o0k.f7c.y7t.mouseDown(e);
}

c0b(e)
{
	this.o0k.f7c.y7t.mouseMove(e);
}

v5s(e)
{
	this.o0k.f7c.y7t.mouseUp(e);
}

v3g(e)
{
	this.o0k.f7c.y7t.touchStart(e);
}

f2c(e)
{
	this.o0k.f7c.y7t.touchMove(e);
}

h6w(e)
{
	this.o0k.f7c.y7t.touchEnd(e);
}

k8n(event)
{
	this.o0k.g3v.k8n();
}

h8c(event)
{
	this.o0k.g3v.h8c();
}

u3c(event)
{
	this.o0k.g3v.g6o();
	this.o0k.v2a.j0c.u3c();
}

i2a(event)
{
	this.o0k.g3v.g6o();
	this.o0k.v2a.j0c.i2a();
}

e7p(event)
{
	this.o0k.g3v.g6o();
	this.o0k.v2a.j0c.y0l();
}

p3v(event)
{
	this.o0k.g3v.g6o();
	this.o0k.v2a.j0c.e1x();
}

g7r(event)
{
	this.o0k.q0r();
}

v6m()
{
 	if (this.z2m.l8u.length)
  {
    this.e1u(0, 0);
  }
}

j1y(event)
{
 	if (this.d0k > 0)
  {
    this.e1u(this.d0k - 1, 0);
  }
}

p9z(event)
{
  if (this.d0k < this.z2m.l8u.length - 1)
  {
    this.e1u(this.d0k + 1, 0);
  }
}

r3s()
{
	if (this.z2m.l8u.length)
  {
    this.d0k = this.z2m.l8u.length - 1;
    this.e1u(this.z2m.l8u.length - 1, 0);
	}
}

e1u(d0k, o9c)
{
  if (d0k >= 0 && d0k <= this.z2m.l8u.length - 1)
  {
    this.d0k = d0k;
  	this.o0k.e1u(null, 1, o9c, this.z2m.l8u[this.d0k]);
  }
  this.h4u();
}

x6f(event)
{
	this.o0k.x6f();
}

i1j()
{
	this.o0k.i1j();
}

s2n()
{
	if (this.b5i.clientWidth <= r2u)
	{
		if (this.u6r)
		{
			this.n7f();
		}
		else
		{
			this.a5u();
			this.u6r = true;
			this.n7f();
		}
	}
	else
	{
		if (!this.u6r)
		{
			this.y1m();
		}
		else
		{
			this.m8r();
			this.u6r = false;
			this.y1m();
		}
	}
}

a6b(d7f, index)
{
	this.e1u(index, 0);
  this.s4f();
}

e5h(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.t3j.length - 1)
  {
    if (this.t3j[i] == '[')
    {
        break;
    }
    i++;
  }
  let t3j = this.t3j.substring(i);
  a.href = window.URL.createObjectURL(new Blob([t3j], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

q4g(event)
{
  if (chess)
  {
    if (this.o0k.c2s())
    {
      this.h3c();
    }
    else
    {
      this.w5j();
    }
  }
}

h3c()
{
  this.o0k.h3c();
}

w5j()
{
  let p9y = new c0c();
  p9y.id.m5f = "Stockfish";
  const o1b = p9y.o1b;
  o1b.addInteger("MultiPV", y4z);
  o1b.addInteger("Threads", y9l);
  o1b.addInteger("Hash",    g6d(w0b));
  this.o0k.w5j(p9y);
}

r2d()
{
  this.o0k.f7c.t9l(g0x);
  this.o0k.f7c.y6e();
  this.o0k.v2a.j0c.t9l(g0x);
  this.o0k.v2a.j0c.h3u();
  this.o0k.g9b.j0c.t9l(g0x);
  this.o0k.g9b.j0c.h3u();
  let b2s = document.getElementById("nota-container"+this.index);
  b2s.style.fontSize = w9r.fontSize + 'px';
  let d3e = document.getElementById("enota-container"+this.index);
  d3e.style.fontSize = w9r.fontSize + 'px';
}

e2g()
{
  if (this.o0k.c2s())
  {
    this.h3c();
    this.w5j();
  }
}

async onSettingsClick()
{
  const dialog = new j1s();
  const { f9i } = await dialog.show();

  if (f9i === dialog.t1i)
  {
    this.r2d();
  }
}

async onEngineSettingsClick()
{
  const dialog = new g6v();
  const { f9i } = await dialog.show();

  if (f9i === dialog.t1i)
  {
    this.e2g();
  }
}

}

class j1s
{

constructor()
{
  this.t1i = 1;
  this.k6a = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.m9u();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.i5d = this.dialog.querySelector(".piece-select");
  this.k3i = this.dialog.querySelector(".coordinates-checkbox");
  this.o0d = this.dialog.querySelector(".font-select");
  this.q2o = this.dialog.querySelector(".ok-button");
  this.v6o = this.dialog.querySelector(".cancel-button");

  this.q2o.onclick = this.c9v.bind(this);
 	this.v6o.onclick = this.x5z.bind(this);
}

m9u()
{
  const a6q = i6f();
  const s = `
    <dialog id="settingsDialog" class="settingsDialog">
      <e5e>Settings</e5e>

      <div class="settings-row">
        <span class="label-text">Pieces:</span>
        <select class="pieceSelect piece-select">
          ${a6q.map((h7f, i) => '<option value="' + i + '">' + h7f + '</option>').join('')}
        </select>
      </div>

      <div class="settings-row">
        <span class="label-text">Coordinates:</span>
        <input type="checkbox" class="coordinates-checkbox">
      </div>

      <div class="settings-row">
        <span class="label-text">Notation font size:</span>
        <select class="movesFontSizeSelect font-select">
          <option value="12">Small</option>
          <option value="15">Default</option>
          <option value="18">Medium</option>
          <option value="22">Large</option>
        </select>
      </div>

      <form method="dialog">
        <button value="ok" class="settingsButton ok-button">OK</button>
        <button value="cancel" class="settingsButton cancel-button">Cancel</button>
      </form>
    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

c9v(event)
{
  g0x.e9d = this.i5d.value;
  localStorage.setItem(n9q, g0x.e9d);
  m7n(g0x.e9d);
  g0x.g8g = this.k3i.checked;
  localStorage.setItem(t5q, g0x.g8g.toString());
  w9r.fontSize = this.o0d.value;
  localStorage.setItem(q5b, w9r.fontSize);
  this.dialog.close('ok');
}

x5z(event)
{
  this.dialog.close('cancel');
}

async show()
{
  e3z = true;

  this.i5d.value = g0x.e9d;
  this.k3i.checked = g0x.g8g;
  this.o0d.value = w9r.fontSize;

  const f9i = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.t1i : this.k6a);
    };
    this.dialog.showModal();
  });

  e3z = false;
  return { f9i };
}

}

function m6f(e4a)
{
  const value = parseInt(e4a);
  const timeMap = {
    1: 2000,   
    2: 4000,   
    3: 6000,   
    4: 8000,   
    5: 10000,  
    6: 12000,  
    7: 15000,  
    8: 20000,  
    9: 30000,  
    10: 0      
  };
  return timeMap[value] || 2000; 
}

function g6d(e4a)
{
  const value = parseInt(e4a);
  const memoryMap = {
    1: 16,
    2: 32,
    3: 64,
    4: 128,
    5: 256,
    6: 512
  };
  return memoryMap[value] || 16;
}

class g6v
{

constructor()
{
  this.t1i = 1;
  this.k6a = 0;

  this.dialog = document.getElementById("engineSettingsDialog");
  if (!this.dialog)
  {
    this.m9u();
  }
  this.dialog = document.getElementById("engineSettingsDialog");

  this.b7z = this.dialog.querySelector(".searchTime-slider");

  this.n6y = this.dialog.querySelector(".searchTime-value");
  this.k9h = this.dialog.querySelector(".multiPV-slider");
  this.e8u = this.dialog.querySelector(".multiPV-value");
  this.t0t = this.dialog.querySelector(".threads-slider");
  this.i0u = this.dialog.querySelector(".threads-value");
  this.i4e = this.dialog.querySelector(".memory-slider");
  this.w9s = this.dialog.querySelector(".memory-value");
  this.q2o = this.dialog.querySelector(".ok-button");
  this.v6o = this.dialog.querySelector(".cancel-button");

  this.q2o.onclick = this.c9v.bind(this);
 	this.v6o.onclick = this.x5z.bind(this);

  this.b7z.addEventListener('input', this.q7s.bind(this));
  this.k9h.addEventListener('input', this.m1g.bind(this));

  this.t0t.addEventListener('input', this.e8z.bind(this));

  this.i4e.addEventListener('input', this.u6u.bind(this));

}

m9u() {
  const s = `
    <dialog id="engineSettingsDialog" class="settingsDialog">
      <e5e>Engine Settings</e5e>

      <div class="settings-row">
        <span class="label-text">Search time</span>
        <input type="range" class="simple-slider searchTime-slider" min="1" max="10" b1p="1" value="1">
        <span class="value-display-simple searchTime-value">1s</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Multiple lines</span>
        <input type="range" class="simple-slider multiPV-slider" min="1" max="5" b1p="1" value="1">
        <span class="value-display-simple multiPV-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Threads</span>
        <input type="range" class="simple-slider threads-slider" min="1" max="32" b1p="1" value="1">
        <span class="value-display-simple threads-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Memory</span>
        <input type="range" class="simple-slider memory-slider" min="1" max="6" b1p="1" value="1">
        <span class="value-display-simple memory-value">16MB</span>
      </div>

      <form method="dialog">
        <button value="ok" class="settingsButton ok-button">OK</button>
        <button value="cancel" class="settingsButton cancel-button">Cancel</button>
      </form>

    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

c9v(event)

{
  f8y = parseInt(this.b7z.value);
  y4z = parseInt(this.k9h.value);
  y9l = parseInt(this.t0t.value);
  w0b = parseInt(this.i4e.value);
  localStorage.setItem(x6s, f8y);
  localStorage.setItem(v6h, y4z);
  localStorage.setItem(q6d, y9l);
  localStorage.setItem(k2m, w0b);
  this.dialog.close('ok');
}

x5z(event)
{
  this.dialog.close('cancel');
}

q7s()
{
  const value = parseInt(this.b7z.value);
  let displayValue;

  switch (value)
  {
    case 1: displayValue = "2s"; break;
    case 2: displayValue = "4s"; break;
    case 3: displayValue = "6s"; break;
    case 4: displayValue = "8s"; break;
    case 5: displayValue = "10s"; break;
    case 6: displayValue = "12s"; break;
    case 7: displayValue = "15s"; break;
    case 8: displayValue = "20s"; break;
    case 9: displayValue = "30s"; break;
    case 10: displayValue = "\u221E"; break;
    default: displayValue = "";
  }
  this.n6y.textContent = displayValue;
}

m1g()
{
  const value = this.k9h.value;
  this.e8u.textContent = `${value}`;
}


e8z()
{
  const value = this.t0t.value;
  this.i0u.textContent = `${value}`;
}


u6u()

{
  const value = parseInt(this.i4e.value);
  let displayValue;

  switch (value)
  {
    case 1: displayValue = "16MB"; break;
    case 2: displayValue = "32MB"; break;
    case 3: displayValue = "64MB"; break;
    case 4: displayValue = "128MB"; break;
    case 5: displayValue = "256MB"; break;
    case 6: displayValue = "512MB"; break;
    default: displayValue = "";
  }

  this.w9s.textContent = displayValue;
}

async show()
{
  e3z = true;

  this.b7z.value = f8y;
  this.k9h.value = y4z;
  this.t0t.value = y9l;
  this.i4e.value = w0b;

  this.q7s();
  this.m1g();
  this.e8z();
  this.u6u();

  const f9i = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.t1i : this.k6a);
    };
    this.dialog.showModal();
  });

  e3z = false;
  return { f9i };
}

}

const l4i = 38;
const t7c = 40;
const b0r = 37;
const z0o = 37;
const p1f = 52;
const o6y = 39;
const k9n = 39;
const o7w = 54;
const h8p = 36;
const i5q = 36;
const t4p = 55;
const y1w = 35;
const o0c = 35;
const z7r = 49;
const z8i = 187;
const b3a = 107;
const e4i = 61;
const o3v = 42;
const c2a = 170;
const n5y = 8;
const i4f = 13;
let l0u = false;
let e3z = false;

const r2u = 767;
let y0x = [];
let x1y = -1;
let x4g = new v2p();

let g0x = new i2p();
let w9r = new v3x();
let f8y = 1;
let y4z = 1;
let y9l = 1;
let w0b = 1;

window.onload = function()
{
  f2r();
  p0w();
  i0n();
};

document.onkeydown = z9g;

function z9g(e)
{
  if (e.r7s === "Escape")
  {
    return;
  }

  if (e3z)
  {
    
    e.preventDefault();
    return;
  }

	let r1k = e || window.event;
	let r7s = r1k.keyCode;

	if (l0u) return;
	l0u = true;

	if (x1y == -1) return;

	if (e.ctrlKey)
	{
		if (r7s == 66) 
		{
				y0x[x1y].x6f();
				e.preventDefault();
				
				
				
		}
		l0u = false;
		return;
	}
	if (r7s)
	{
		
		k7t(r7s);
		e.preventDefault(); 
		
	}
	l0u = false;
}

function l4l(g9j)
{
	y0x[g9j].o0k.g3v.p6d();
}

function k7t(r7s)
{
	if (x1y == -1) return;

	if (r7s == l4i)
	{
		y0x[x1y].o0k.v2a.j0c.b8k();
	}
	else if (r7s == t7c)
	{
		y0x[x1y].o0k.v2a.j0c.y3o();
	}
	else if (r7s == b0r || r7s == z0o || r7s == p1f ||
	r7s == o6y || r7s == k9n || r7s == o7w ||
	r7s == h8p || r7s == i5q ||
	r7s == y1w || r7s == o0c)
	{
		y0x[x1y].o0k.v2a.j0c.c0w(r7s);
	}
	else if (r7s == z8i || r7s == b3a || r7s == e4i)
	{
		y0x[x1y].doFlipBoard();
	}
}

function j8f(g2h, f5h)
{
	let w8p = g2h.length;
	let t4y = 0;

	function check(n)
	{
		if (n == w8p)
		{
			f5h();
		}
	}

	for (let i = 0; i < g2h.length; ++i)
	{
    let u9m = g2h[i];
		let img = document.createElement("img");
		img.id = g2h[i].replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
		x4g.add(img);
		img.addEventListener("load", function()
		{
			t4y++;
			check(t4y);
		});
		img.src = u9m;
	}
}

function f2r()
{
 	j8f(e0n(), p1b);
  
  
}

function s2n()
{
	for (const j4h of y0x)
	{
		j4h.s2n();
	}
}

function p1b()
{
	let k5g = document.getElementsByClassName("tdreplay");
	for (const b5i of k5g)
	{
		let j4h = new t1a();
		j4h.x3r(y0x.length, b5i, b5i.innerHTML);
		j4h.m4q();
		y0x.push(j4h);
	}
	if (y0x.length)
	{
		x1y = 0;
	}
	window.addEventListener("resize", s2n);
	s2n();
}

function c2w(m5f, n0u)
{
	let button = document.getElementById(m5f);
	if (n0u)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function m2k(button, n0u)
{
	if (n0u)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const t5q = 'Coordinates';
const n9q = 'Pieces';
const q5b = 'MovesFontSize';
const x6s = 'SearchTime';
const v6h = 'MultiPV';
const q6d = 'Threads';
const k2m = 'Memory';

function i0n()
{
  const coordinatesValue = localStorage.getItem(t5q);
  if (coordinatesValue === null)
  {
    g0x.g8g = true;
  }
  else
  {
    g0x.g8g = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(n9q);
  if (piecesValue === null)
  {
    g0x.e9d = 0;
  }
  else
  {
    g0x.e9d = piecesValue;
  }
  m7n(g0x.e9d);

  const movesFontSizeValue = localStorage.getItem(q5b);
  if (movesFontSizeValue === null)
  {
    w9r.fontSize = 15;
  }
  else
  {
    w9r.fontSize = movesFontSizeValue;
  }

  
  const searchTime = localStorage.getItem(x6s);
  if (searchTime === null)
  {
    f8y = 10; 
  }
  else
  {
    f8y = searchTime;
  }
  const t2y = localStorage.getItem(v6h);
  if (t2y === null)
  {
    y4z = 1;
  }
  else
  {
    y4z = t2y;
  }
  const threads = localStorage.getItem(q6d);
  if (threads === null)
  {
    const logicalThreads = navigator.hardwareConcurrency || 4;
    const defaultThreads = Math.max(1, logicalThreads - 1);
    y9l = defaultThreads;
  }
  else
  {
    y9l = threads;
  }
  const memory = localStorage.getItem(k2m);
  if (memory === null)
  {
    w0b = 4; 
  }
  else
  {
    w0b = memory;
  }
}
const m8m =
[
	[ a7t.o8h, 			  	""      ],
	[ a7t.t5a,  		 		"game"  ],
	[ a7t.m2c,    		 	"match" ],
	[ a7t.y9d,  	"tourn" ],
	[ a7t.f9u,   			"swiss" ],
	[ a7t.x1k,    	"k.o."  ],
	[ a7t.n6f,	"simul" ],
	[ a7t.l6w,	"schev" ]
];

const w8k =
[
	[ i0p.m3c, ""        ],
	[ i0p.b7c,  "(rapid)" ],
	[ i0p.k8w,  "(blitz)" ],
	[ i0p.x7u,   "(corr)"  ]
];

const l0c =
[
	[ b1x.o8h,     		 ""     ],
	[ b1x.e3l,       		 "$145" ],
	[ b1x.x6h, 		 "$142" ],
	[ b1x.w2x, 		 "$143" ],
	[ b1x.l5c, "$144" ],
	[ b1x.k4e,  "$140" ],
	[ b1x.m6p, "$141" ]
];

const v6e =
[
	[ s1v.o8h,     		""   ],
	[ s1v.i7k,       	"$1" ],
	[ s1v.r4r, 			  	"$2" ],
	[ s1v.d3g,	"$5" ],
	[ s1v.j2x, 		  "$6" ],
	[ s1v.c7b,  	"$3" ],
	[ s1v.x7l, 		  "$4" ],
	[ s1v.a5g, 		"$22" ],
	[ s1v.n1n, 		"$8" ]
];

const k9z =
[
	[ z4r.o8h,     						""     ],
	[ z4r.p0y,      "$18"  ],
	[ z4r.a9o, 					"$16"  ],
	[ z4r.w0i,	"$14"  ],
	[ z4r.q7f, 						"$11"  ],
	[ z4r.q9k,  						"$13"  ],
	[ z4r.a1s,  "$15"  ],
	[ z4r.h0f, 					"$17"  ],
	[ z4r.c6v, 			"$19"  ],
	[ z4r.l0k,					"$44"  ],
	[ z4r.h2i, 					"$132" ],
	[ z4r.x5f,  					"$36"  ],
	[ z4r.d5z, 							"$40"  ],
	[ z4r.u8o, 			  "$138" ],
	[ z4r.q4a,	"$32"  ],
	[ z4r.i8a, 							"$146" ]
];

const j8r =
[
	[ a8g.o8h,     		""     ],
	[ a8g.o6w,     "$51"  ],
	[ a8g.l0i, 			"$52"  ],
	[ a8g.j2o,	    		"$53"  ]
];

const z0p =
[
	[ b3l.u3z, 			 	""       ],
	[ b3l.l0i,   		"middle" ],
	[ b3l.m9m,   	   	 	"low"    ]
];


function h1s(m2w)
{
	return w8k[m2w][1];
}

function s4i(e7k)
{
	for (const m2w of w8k)
	{
		if (m2w[1] == e7k)
		{
			return m2w[0];
		}
	}
	return i0p.m3c;
}

function m9c(type)
{
	return m8m[type][1];
}

function j1u(e7k)
{
	for (const h5u of m8m)
	{
		if (h5u[1] == e7k)
		{
			return h5u[0];
		}
	}
	return a7t.o8h;
}

function y4u(g7y)
{
	return l0c[g7y][1];
}

function i9l(e7k)
{
	for (const g7y of l0c)
	{
		if (g7y[1] == e7k)
		{
			return g7y[0];
		}
	}
	return b1x.o8h;
}

function j1j(style)
{
	return v6e[style][1];
}

function l4m(e7k)
{
	for (const style of v6e)
	{
		if (style[1] == e7k)
		{
			return style[0];
		}
	}
	return s1v.o8h;
}

function h3o(value)
{
	return k9z[value][1];
}

function x4z(e7k)
{
	for (const value of k9z)
	{
		if (value[1] == e7k)
		{
			return value[0];
		}
	}
	return z4r.o8h;
}

function f7t(a9a)
{
	return j8r[a9a][1];
}

function o2w(e7k)
{
	for (const s9f of j8r)
	{
		if (s9f[1] == e7k)
		{
			return s9f[0];
		}
	}
	return a8g.o8h;
}

function i8w(e7k)
{
	return e7k.length == 0 ||
		e7k == "?" ||
		e7k == "-" ||
		e7k == "*" ||
		e7k == "????.??.??";
}

function n8c(e7k)
{
	if (i8w(e7k))
	{
		return "";
	}
	else
	{
		return e7k.trim();
	}
}

function s9o(e7k, q6a)
{
	if (i8w(e7k))
	{
		return q6a;
	}
	else
	{
		return p3z(e7k, q6a);
	}
}

function m9e(value)
{
	return value ? value.toString() : "";
}

function m1v(l1e)
{
	return z0p[l1e][1];
}

function m9d(e7k)
{
	for (const l1e of z0p)
	{
		if (l1e[1] == e7k)
		{
			return l1e[0];
		}
	}
	return b3l.u3z;
}

function p8u(g9o)
{
	if (!g9o)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(g9o / 60);
		let p9e = g9o % 60;
		return div.toString() + "." + p9e.toString().padStart(2, '0');
	}
}

function w4x(f9i)
{
	switch (f9i)
	{
		case a9w.b9n:
			return "1-0";
		case a9w.g3d:
			return "1/2-1/2";
		case a9w.p9s:
			return "0-1";
		default:
			return "*";
	}
}

function c7o(e2j)
{
	if (e2j > 0 && e2j <= 9999)
	{
		return e2j.toString().padStart(4, '0');
	}
	else
	{
		return "-";
	}
}

function v5p(w9a)
{
	if (w9a.t3k())
	{
		return "????.??.??";
	}
	let e7k = '';
	if (w9a.s7f)
	{
		e7k = w9a.s7f.toString().padStart(4, '0');
	}
	else
	{
		e7k = "????";
	}
	e7k += ".";
	if (w9a.d9v)
	{
		let o6e = w9a.d9v.toString().padStart(2, '0');
		e7k += o6e;
	}
	else
	{
		e7k += "??";
	}
	e7k += ".";
	if (w9a.o7k)
	{
		let z5p = w9a.o7k.toString().padStart(2, '0');;
		e7k += z5p;
	}
	else
	{
		e7k += "??";
	}
	return e7k;
}

function j0o(w1z)
{
	if (i8w(w1z))
	{
		return new j4b();
	}
	else
	{
		let w9a = new j4b();
		w9a.p7o("yyyy.mm.dd", w1z);
		return w9a;
	}
}

function s4n(w1z, y9d)
{
	y9d.r3r = (w1z.indexOf("team") != -1);
	y9d.type = a7t.o8h;
	for (const h5u of m8m)
	{
		if (w1z.indexOf(h5u[1]) != -1)
		{
			y9d.type = h5u[0];
			break;
		}
	}
	y9d.m2w = i0p.m3c;
	for (const m2w of w8k)
	{
		if (w1z.indexOf(m2w[1]) != -1)
		{
			y9d.m2w = m2w[0];
			break;
		}
	}
}

function x0s(w1z, m6v)
{
	m6v.g0a = 0;
	m6v.g7m = 0;
	let j0j = w1z.indexOf(".");
	if (j0j != -1)
	{
		let h6c = w1z.substr(0, j0j);
		m6v.g0a = p3z(h6c, 0);
		let q2r = w1z.substr(j0j + 1, w1z.length);
		j0j = q2r.indexOf(".");
		if (j0j != -1)
		{
			h6c = q2r.substr(0, j0j);
			m6v.g7m = p3z(h6c, 0);
		}
		else
		{
			m6v.g7m = p3z(q2r, 0);
		}
	}
	else
	{
		m6v.g0a = p3z(w1z, 0);
	}
}

function s6b(m6v)
{
	let w1z = '';
	if (m6v.g7m)
	{
		w1z = m6v.g0a.toString() + "." + m6v.g7m.toString();
	}
	else if (m6v.g0a)
	{
		w1z = m6v.g0a.toString();
	}
	return w1z;
}

function l2a(w1z)
{
	if (w1z == "2-0" || w1z == "20" || w1z == "1-0" || w1z == "10")
	{
		return a9w.b9n;
	}
	else if (w1z == "1-1" || w1z == "11" || w1z == "1/2-1/2" ||
		w1z == "1/21/2" || w1z == "0.5-0.5")
	{
		return a9w.g3d;
	}
	else if (w1z == "0-2" || w1z == "02" || w1z == "0-1" || w1z == "01")
	{
		return a9w.p9s;
	}
	else
	{
		return a9w.o8h;
	}
}

function g6h(w1z)
{
	return p3z(w1z, 0);
}

function y5m(w1z)
{
	return x1p(w1z);
}

function p3o(w1z)
{
	return t9e(w1z);
}

function w1u(value)
{
	return value ? "1" : "";
}

function e6e(w1z)
{
	return w1z == "1";
}

function y6b(k2v)
{
	let m6v = new s5w();

	
	m6v.w4e.w2j.q1f(n8c(k2v.z7n));
	if (!i8w(k2v.p6i))
	{
		m6v.w4e.d6w.m5f = n8c(k2v.p6i);
		m6v.w4e.d6w.w4a = s9o(k2v.e5t, 0);
		if (!i8w(k2v.g2z))
		{
			let w9a = j0o(k2v.g2z);
			m6v.w4e.d6w.s7f = w9a.s7f;
		}
		m6v.w4e.d6w.e9g = e6e(k2v.c8t);
		m6v.w4e.d6w.j8v = u3n(n8c(k2v.k6o));
	}
	m6v.w4e.e2j = g6h(n8c(k2v.m1w));
	m6v.w4e.time = p3o(n8c(k2v.g6r));
	m6v.w4e.p9d = n8c(k2v.z4s);
	m6v.w4e.j8v = n4q(n8c(k2v.x0b));

	
	m6v.d7m.w2j.q1f(n8c(k2v.o1a));
	if (!i8w(k2v.n1a))
	{
		m6v.d7m.d6w.m5f = n8c(k2v.n1a);
		m6v.d7m.d6w.w4a = s9o(k2v.s6w, 0);
		if (!i8w(k2v.c3e))
		{
			let w9a = j0o(k2v.c3e);
			m6v.d7m.d6w.s7f = w9a.s7f;
		}
		m6v.d7m.d6w.e9g = e6e(k2v.o8y);
		m6v.d7m.d6w.j8v = u3n(n8c(k2v.i2y));
	}
	m6v.d7m.e2j = g6h(n8c(k2v.g3i));
	m6v.d7m.time = p3o(n8c(k2v.v0p));
	m6v.d7m.p9d = n8c(k2v.d4z);
	m6v.d7m.j8v = n4q(n8c(k2v.h7h));

	
	m6v.y9d.p9d = n8c(k2v.y2i);
	m6v.y9d.f5n = n8c(k2v.e5f);
	m6v.y9d.t6n = j0o(k2v.b1s);
	m6v.y9d.a8h = j0o(k2v.o5v);

	s4n(n8c(k2v.h5u), m6v.y9d);
	
	
	
	let m7t = s4i(k2v.m7t);
	if (m7t != i0p.m3c)
	{
		m6v.y9d.m2w = m7t;
	}
	m6v.y9d.j8v = u3n(n8c(k2v.c2x));
	m6v.y9d.x0t = s9o(k2v.u5s, 0);
	let h5u = j1u(k2v.h5u);
	if (h5u != a7t.o8h)
	{
		m6v.y9d.type= h5u;
	}
	m6v.y9d.w0t = s9o(k2v.h5j, 0);
	m6v.y9d.r3r = e6e(k2v.v7o);
	m6v.y9d.f6x = e6e(k2v.t2x);
	m6v.y9d.c8s = e6e(k2v.w9l);
	m6v.y9d.n7r = e6e(k2v.a8z);

	
	m6v.d9p.m5f = n8c(k2v.d9p);

	
	m6v.j8j.p9d = n8c(k2v.i3d);
	m6v.j8j.v7d = n8c(k2v.q1l);
	m6v.j8j.y0b = j0o(k2v.v4y);
	m6v.j8j.o5g = s9o(k2v.e1q, 0);
	m6v.j8j.n2y = j0o(k2v.j9a);
	m6v.j8j.l1e = m9d(k2v.g8k);

	
	m6v.p9d.p9d = n8c(k2v.p9d);

	
	m6v.w9a = j0o(k2v.w9a);
	m6v.f9i = l2a(n8c(k2v.f9i));
	m6v.f3s = y5m(n8c(k2v.f3s));
	x0s(n8c(k2v.g0a), m6v);

	
	let o9e = s9o(k2v.o9e, 0);
	m6v.o9e.k9c(o9e);

  
  m6v.id.r4c = k2v.r4c;

	return m6v;
}

function j4c(m6v)
{
	let k2v = new s1f();

	
	k2v.z7n = m6v.w4e.w2j.m5f();
	if (m6v.w4e.d6w.m5f.length)
	{
		k2v.p6i = m6v.w4e.d6w.m5f;
		if (m6v.w4e.d6w.w4a)
		{
			k2v.e5t = m6v.w4e.d6w.w4a;
		}
		if (m6v.w4e.d6w.s7f)
		{
			let z1p = new j4b();
			z1p.s7f = m6v.w4e.d6w.s7f;
			k2v.g2z = v5p(z1p);
		}
		if (m6v.w4e.d6w.e9g)
		{
			k2v.c8t = w1u(m6v.w4e.d6w.e9g);
		}
		if (m6v.w4e.d6w.j8v != r4b.o8h)
		{
			k2v.k6o = v3s(m6v.w4e.d6w.j8v);
		}
	}
	k2v.m1w = c7o(m6v.w4e.e2j);
	k2v.g6r = p8u(m6v.w4e.time);
	k2v.z4s = m6v.w4e.p9d;

	
	k2v.o1a = m6v.d7m.w2j.m5f();
	if (m6v.d7m.d6w.m5f.length)
	{
		k2v.n1a = m6v.d7m.d6w.m5f;
		if (m6v.d7m.d6w.w4a)
		{
			k2v.s6w = m6v.d7m.d6w.w4a;
		}
		if (m6v.d7m.d6w.s7f)
		{
			let f4m = new j4b();
			f4m.s7f = m6v.d7m.d6w.s7f;
			k2v.c3e = v5p(f4m);
		}
		if (m6v.d7m.d6w.e9g)
		{
			k2v.o8y = w1u(m6v.d7m.d6w.e9g);
		}
		if (m6v.d7m.d6w.j8v != r4b.o8h)
		{
			k2v.i2y = v3s(m6v.d7m.d6w.j8v);
		}
	}
	k2v.g3i = c7o(m6v.d7m.e2j);
	k2v.v0p = p8u(m6v.d7m.time);
	k2v.d4z = m6v.d7m.p9d;

	
	k2v.y2i = m6v.y9d.p9d;
	k2v.e5f = m6v.y9d.f5n;
	k2v.b1s = v5p(m6v.y9d.t6n);
	k2v.o5v = v5p(m6v.y9d.a8h);
	k2v.m7t = h1s(m6v.y9d.m2w);
	k2v.u5s = m9e(m6v.y9d.x0t);
	k2v.c2x = v3s(m6v.y9d.j8v);
	k2v.h5u = m9c(m6v.y9d.type);
	k2v.h5j = m9e(m6v.y9d.w0t);
	k2v.v7o = w1u(m6v.y9d.r3r);
	k2v.t2x = w1u(m6v.y9d.f6x);
	k2v.w9l = w1u(m6v.y9d.c8s);
	k2v.a8z = w1u(m6v.y9d.n7r);

	
	k2v.d9p = m6v.d9p.m5f;

	
	k2v.i3d = m6v.j8j.p9d;
	k2v.q1l = m6v.j8j.v7d;
	k2v.v4y = v5p(m6v.j8j.y0b);
	k2v.e1q = m9e(m6v.j8j.o5g);
	k2v.j9a = v5p(m6v.j8j.n2y);
	k2v.g8k = m1v(m6v.j8j.l1e);

	
	k2v.p9d = m6v.p9d.p9d;

	
	k2v.w9a = v5p(m6v.w9a);
	k2v.f9i = w4x(m6v.f9i);
	k2v.f3s = a1i(m6v.f3s);
	k2v.g0a = s6b(m6v);

	
	k2v.o9e = m9e(m6v.o9e.n3c());

	return k2v;
}

const j8l  					= "White";
const h7s					= "WhiteTeam";
const j7j 				= "WhiteTeamNumber";
const n6i 					= "WhiteTeamYear";
const t8b 				= "WhiteTeamSeason";
const e6r 			= "WhiteTeamCountry";
const q9h 						= "WhiteRating";
const h9s 							= "WhiteTime";
const d3w 							= "WhiteElo";
const e1c  						= "WhiteTitle";
const q8k						= "WhiteCountry";

const b9u						= "Black";
const d9j					= "BlackTeam";
const u9p 				= "BlackTeamNumber";
const n7o 					= "BlackTeamYear";
const b1t 				= "BlackTeamSeason";
const h6m 			= "BlackTeamCountry";
const z0d 						= "BlackRating";
const r6n 							= "BlackTime";
const y9s 							= "BlackElo";
const d7s  						= "BlackTitle";
const q1x						= "BlackCountry";

const w0n 				= "Event";
const o9w				= "Site";
const w4r 			 	= "EventDate";
const t8e 		 	= "EventEndDate";
const w6w 			 	= "EventSpeed";
const j8i 	 	= "EventCategory";
const v9o 		 	= "EventCountry";
const o2t 			 	= "EventType";
const b5l 		 	= "EventRounds";
const w5y 			 	= "EventTeams";
const h7k		 	= "EventComplete";
const a7q 	= "EventThreePoints";
const y8h	= "EventBoardPoints";

const b8v 							= "Annotator";

const b2q 				 		= "SourceTitle";
const u4i 				 		= "Publication";
const f3j		 		= "SourcePublisher";
const l1o		 		= "PublicationDate";
const p1n 				 		= "SourceDate";
const l4v 		= "SourceVersionNumber";
const z2l 	 		= "SourceVersionDate";
const l3z 			 		= "SourceQuality";

const c7l 					 		    = "Title";

const z4v 							 		= "Date";
const h0i 								= "Result";
const g5q 										= "ECO";
const w6a 									= "Round";

const g9l			 							= "Tags";

const z4d 									= "Setup";
const g7n 										= "FEN";
const t6c 							= "PlyCount";

const e4p      							= "GUID";

const i8p = "(";
const f1r   = ")";
const r9x    = "{";

class a5i
{

constructor()
{
  this.h6a = new u6i();
  this.y8a = new s2q();
  this.n3a = new z5k();
  this.a0g = false;
  this.h4j = false;
  this.m3d = false;
  this.c9d = '';
}

}

class w3m
{

constructor(lines)
{
	this.l7y = new s1f();
	this.u7q = lines;
	this.c6y = 0;
	this.n9l = '';
	this.i7v = 0;
	this.k0e = 0;
	this.g0j = '';
	this.g4t = 0;
	this.e6f = false;
	this.g4f = '';
	this.r4l = '';
	this.l1b = null;
	this.c0q = new d8g();
	this.c4y = '';
	this.u7d = false;
 	this.t6l = false;
	this.c2g = false;
}

s2j()
{
  this.g4t = 0;
	let t5a = new b1y();
	this.l1b = t5a.d5g;
	try
	{
		this.d7n();
	}
	catch (err)
	{
	}
	t5a.q4h = y6b(this.l7y);
  t5a.e3j = this.g4t;
	return t5a;
}

d7n()
{
	this.e6f = false;
	this.u4x();
	if (this.e6f)
	{
		this.p5e = f9r(this.r4l);
		this.l1b.p6l(this.p5e, 1);
	}
 	this.d3h();
}

j3b()
{
	if (this.u7q.length == 0)
	{
		return false;
	}
	if (this.c6y >= this.u7q.length)
	{
		return false;
	}
	else
	{
		this.n9l = this.u7q[this.c6y];
		this.i7v = this.n9l.length;
		this.k0e = 0;
		this.c6y++;
		return true;
	}
}

u4x()
{
	this.c2g = false;
	this.t6l = false;
	while (true)
	{
		if (!this.j3b())
		{
			return;
		}
		this.b1n();
		if (!this.r7n())
		{
			return;
		}
		this.g8c();
	}
}


m1k(h7z)
{
	let w1z = this.g0j.substr(1, this.g0j.length - 1);
	return w1z.toUpperCase() === h7z.toUpperCase();
}

d3h()
{
 	if (this.g0j.length == 0) return;
	this.u7d = false;

	while (this.g0j[0] == '{')
	{
		let o5j = this.b4s();
    let z0z = new a5i();
		this.d3o(o5j, z0z);
    if (!z0z.h6a.t3k())
		{
			this.l1b.i9x(z0z.h6a);
		}
 		if (!z0z.y8a.t3k())
		{
			this.l1b.j9q(z0z.y8a);
		}
		if (!z0z.n3a.t3k())
		{
			this.l1b.r7z(z0z.n3a);
		}
 		o5j = z0z.c9d.trim();
    if (o5j.length)
    {
      
      
      if (o5j.startsWith("[%a") && o5j.length > 7)
      {
        o5j = o5j.substr(7, o5j.length).trim();
      }
      let s4z = this.l1b.s4z();
      if (s4z.length)
      {
        s4z += ' ';
      }
      s4z += o5j;
      this.l1b.f8e(s4z);
		}
		this.b1n();
		if (this.g0j.length == 0)
		{
			return;
		}
	}
	this.f4z(this.l1b.j1p(), this.l1b.p5e());
}

f4z(c0m, y7y)
{
  let j0j = c0m.x5w();
  let j1d = y7y.x5w();

	let j8p = null;
 	let y1l = new l2d();

	do
	{
		if (this.g0j == i8p)
		{
			if (!j8p)
			{
				throw "error";
			}
			if (!this.b1n())
			{
				throw "error";
			}

 			j1d.m7j(j0j.e0p.w5b());
			j1d.c0u(y1l);
			this.l1b.m7j(j0j); 
      this.f4z(j0j, j1d);
			this.l1b.l6i(j0j); 
			j1d.l6i(j0j.e0p.w5b());

			while (this.b1n())
			{
				if (this.g0j != i8p)
				{
					break;
				}
				if (!this.b1n())
				{
					throw "error";
				}
        j1d.m7j(j0j.e0p.w5b());
				j1d.c0u(y1l);
				this.l1b.m7j(j0j); 
				this.f4z(j0j, j1d);
				this.l1b.l6i(j0j);  
				j1d.l6i(j0j.e0p.w5b());
			}
		}

		if (this.g0j == f1r)
		{
			break;
		}

		if (
			this.g0j == "1-0" ||
			this.g0j == "2-0" ||
			this.g0j == "0-1" ||
			this.g0j == "0-2" ||
			this.g0j == "1/2-1/2" ||
			this.g0j == "1-1" ||
			this.g0j == "*" ||
			this.g0j == "**" ||
			this.g0j == "-*" ||
			this.g0j == "1-0*" ||
			this.g0j == "2-0*" ||
			this.g0j == "0-1*" ||
			this.g0j == "0-2*" ||
			this.g0j == "1/2-1/2*" ||
			this.g0j == "1-1*" ||
			this.g0j == "2-00*" ||
			this.g0j == "00-2*")
			break;

		if (this.g0j[0] == '$')
		{
			if (!j8p)
			{
				throw "error";
			}
			let g7y = i9l(this.g0j);
			if (g7y != b1x.o8h)
			{
				j8p.w6x(g7y);
				continue;
			}
			let style = l4m(this.g0j);
			if (style != s1v.o8h)
			{
				j8p.i4l(style);
				continue;
			}
			let value = x4z(this.g0j);
			if (value != z4r.o8h)
			{
				j8p.j4m(value);
				continue;
			}
			let a9a = o2w(this.g0j);
			if (a9a != a8g.o8h)
			{
				j8p.o7n(a9a);
				continue;
			}
			continue;
		}
		if (this.g0j[0] == '{')
		{
			let o5j = this.b4s();
      let z0z = new a5i();
  		this.d3o(o5j, z0z);
      if (!z0z.h6a.t3k())
      {
		  	if (j8p)
			  {
				  j8p.v4p(z0z.h6a);
				}
			}
   		if (!z0z.y8a.t3k())
      {
				if (j8p)
				{
					j8p.g8m(z0z.y8a);
				}
			}
   		if (!z0z.n3a.t3k())
      {
				if (j8p)
				{
					j8p.z8m(z0z.n3a);
				}
			}
      if (z0z.h4j)
      {
				if (j8p)
				{
					j8p.u7u();
				}
			}
      if (z0z.m3d)
      {
				if (j8p)
				{
					j8p.l4b();
				}
			}
   		o5j = z0z.c9d.trim();
      if (!o5j.length)
      {
        continue;
      }
			if (j8p)
			{
        let q4b = j8p.q4b();
        if (q4b.length)
        {
          q4b += ' ';
        }
        q4b += o5j;
				j8p.f4f(q4b);
			}
			else
			{
        if (this.c4y.length)
        {
   				this.c4y += ' ';
        }
				this.c4y += o5j;
				this.u7d = true;
			}
			continue;
		}
		if (!this.i2l())
		{
			continue;
		}
		let h1i = false;
		if (this.g0j[this.g0j.length] == '*')
		{
			this.g0j = this.g0j.substr(0, this.g0j.length - 1);
			h1i = true;
		}
 		let u1m = this.i6i(this.g0j);
    let w5b = i9b(j1d, this.g0j);
 		y1l = j1d.y1l();
		j1d.l6i(w5b);
		let e0p = v6z(w5b);
    e0p.i4l(u1m);
    this.l1b.f9g(j0j, e0p);
		j8p = j0j.e0p;
		if (this.u7d)
		{
			j8p.k3w(this.c4y);
			this.u7d = false;
      this.c4y = '';
		}
		if (h1i)
		{
			break;
		}
	} while (this.b1n());
}

i6i(w1z)
{
	if (w1z.endsWith("??"))
	{
		w1z = w1z.subString(0, w1z.length-2);
		return s1v.x7l;
	}
	else if (w1z.endsWith("!!"))
	{
		w1z = w1z.subString(0, w1z.length-2);
		return s1v.c7b;
	}
	else if (w1z.endsWith("?!"))
	{
		w1z = w1z.subString(0, w1z.length-2);
		return s1v.j2x;
	}
	else if (w1z.endsWith("!?"))
	{
		w1z = w1z.subString(0, w1z.length-2);
		return s1v.d3g;
	}
	else if (w1z.endsWith("?"))
	{
		w1z = w1z.subString(0, w1z.length-1);
		return s1v.r4r;
	}
	else if (w1z.endsWith("!"))
	{
		w1z = w1z.subString(0, w1z.length-1);
		return s1v.i7k;
	}
	else
	{
		return s1v.o8h;
	}
}

i2l()
{
	let u1o = this.g0j.length;
	let j0j = -1;
	for (let i = 0; i < u1o; i++)
	{
		if (this.g0j[i] == '.')
		{
			j0j = i;
		}
	}
	if (j0j != -1)
	{
		this.g0j = this.g0j.substr(j0j + 1 , u1o);
	}
	return this.g0j.length != 0;
}

b1n()
{
	this.g0j = "";
	let k1x = '';
	let index = 0;
	let u1o = 0;
	while (true)
	{
		let i0a = 0;
		if (this.k0e < this.i7v)
		{
			i0a = this.n9l[this.k0e];
		}
		else
		{
			i0a = 0;
		}
		if (!i0a)
		{
			if (u1o)
			{
				break;
			}
			if (!this.j3b())
			{
				return false;
			}
			continue;
		}
		if (i0a == ';')
		{
			if (!this.j3b())
			{
				return false;
			}
			continue;
		}
		if (i0a == '(')
		{
			if (u1o)
			{
				break;
			}
			else
			{
				this.k0e++;
				this.g0j = i8p;
				return true;
			}
		}
		if (i0a == ')')
		{
			if (u1o)
			{
				break;
			}
			else
			{
				this.k0e++;
				this.g0j = f1r;
				return true;
			}
		}
		if (i0a == '{')
		{
			if (u1o)
			{
				break;
			}
			else
			{
				this.k0e++;
				this.g0j = r9x;
				return true;
			}
		}
		if (i0a == ' ' || i0a == '\r' || i0a == '\n')
		{
			if (u1o)
			{
				this.k0e++;
				break;
			}
			else
			{
				this.k0e++;
				continue;
			}
		}
		k1x += i0a;
		index++;
		u1o++;
		this.k0e++;
	}
	if (index)
	{
		this.g0j += k1x;
	}
	return this.g0j.length != 0;
}

b4s()
{
	let w1z = '';
	let k1x = '';
	let index = 0;
	let x3n = 0;
	while (true)
	{
		let i0a = 0;
		if (this.k0e < this.i7v)
		{
			i0a = this.n9l[this.k0e];
		}
		else
		{
			i0a = 0;
		}
		if (!i0a)
		{
			if (!this.j3b())
			{
				break;
			}
			if (index > 0)
			{
				k1x += ' '; 
				index++;
			}
			continue;
		}
		if (i0a == '{')
		{
			x3n++;
		}
		if (i0a == '}')
		{
			if (x3n)
			{
				x3n--;
			}
			else
			{
				this.k0e++;
				break;
			}
		}
		k1x += i0a;
		index++;
		this.k0e++;
	}
	if (index)
	{
		w1z += k1x;
	}
	return w1z.trim();
}

a5e()
{
	this.g4f = "";

	let z4x = 0;
	let u1o = this.n9l.length;
	for (let i = u1o - 1; i >= 0; i--)
	{
		if (this.n9l[i] == ']')
		{
			z4x = i;
			break;
		}
	}
	let index = 0;
	let w6p = false;
	let k1x = '';
	while (true)
	{
		let i0a = 0;
		if (this.k0e < this.i7v)
		{
			i0a = this.n9l[this.k0e];
		}
		else
		{
			i0a = 0;
		}
		if (!i0a)
		{
			if (!this.j3b())
			{
				break;
			}
			continue;
		}
		if (i0a == '\"')
		{
			w6p = true;
			this.k0e++;
			continue;
		}
		if (i0a == ']')
		{
			if (this.k0e == z4x)
			{
				this.k0e++;
				break;
			}
		}
		if (w6p)
		{
			k1x += i0a;
			index++;
		}
		this.k0e++;
	}
	if (index)
	{
		this.g4f += k1x;
	}
}

r7n()
{
	if (this.g0j.length == 0)
	{
		return false;
	}
	if (this.g0j[0] != '[')
	{
		return false;
	}
	
	let index = this.k0e;
	let n7z = false;
	while (index < this.i7v)
	{
		let i0a = this.n9l[index++];
		if (i0a == '\"' && this.n9l[index] == ']')
		{
			index++;
			n7z = true;
			continue;
		}
		if (i0a == '\r' || i0a == '\n')
		{
			break;
		}
		if (n7z)
		{
			n7z = false;
			break;
		}
	}
	return n7z;
}

g8c()
{
	
	if (this.m1k(j8l))
	{
		this.a5e();
		this.l7y.z7n = this.g4f;
		return;
	}
	if (this.m1k(h7s))
	{
		this.a5e();
		this.l7y.p6i = this.g4f;
		return;
	}
	if (this.m1k(j7j))
	{
		this.a5e();
		this.l7y.e5t = this.g4f;
		return;
	}
	if (this.m1k(n6i))
	{
		this.a5e();
		this.l7y.g2z = this.g4f;
		return;
	}
	if (this.m1k(t8b))
	{
		this.a5e();
		this.l7y.c8t = this.g4f;
		return;
	}
	if (this.m1k(e6r))
	{
		this.a5e();
		this.l7y.k6o = this.g4f;
		return;
	}
	if (this.m1k(d3w) || this.m1k(q9h))
	{
		this.a5e();
		this.l7y.m1w = this.g4f;
		return;
	}
	if (this.m1k(h9s))
	{
		this.a5e();
		this.l7y.g6r = this.g4f;
		return;
	}
	if (this.m1k(e1c))
	{
		this.a5e();
		this.l7y.z4s = this.g4f;
		return;
	}
	if (this.m1k(q8k))
	{
		this.a5e();
		this.l7y.x0b = this.g4f;
		return;
	}

	
	if (this.m1k(b9u))
	{
		this.a5e();
		this.l7y.o1a = this.g4f;
		return;
	}
	if (this.m1k(d9j))
	{
		this.a5e();
		this.l7y.n1a = this.g4f;
		return;
	}
	if (this.m1k(u9p))
	{
		this.a5e();
		this.l7y.s6w = this.g4f;
		return;
	}
	if (this.m1k(n7o))
	{
		this.a5e();
		this.l7y.c3e = this.g4f;
		return;
	}
	if (this.m1k(b1t))
	{
		this.a5e();
		this.l7y.o8y = this.g4f;
		return;
	}
	if (this.m1k(h6m))
	{
		this.a5e();
		this.l7y.i2y = this.g4f;
		return;
	}
	if (this.m1k(y9s) || this.m1k(z0d))
	{
		this.a5e();
		this.l7y.g3i = this.g4f;
		return;
	}
	if (this.m1k(r6n))
	{
		this.a5e();
		this.l7y.v0p = this.g4f;
		return;
	}
	if (this.m1k(d7s))
	{
		this.a5e();
		this.l7y.d4z = this.g4f;
		return;
	}
	if (this.m1k(q1x))
	{
		this.a5e();
		this.l7y.h7h = this.g4f;
		return;
	}

	
	if (this.m1k(w0n))
	{
		this.a5e();
		this.l7y.y2i = this.g4f;
		return;
	}
	if (this.m1k(o9w))
	{
		this.a5e();
		this.l7y.e5f = this.g4f;
		return;
	}
	if (this.m1k(w4r))
	{
		this.a5e();
		this.l7y.b1s = this.g4f;
		return;
	}
	if (this.m1k(t8e))
	{
		this.a5e();
		this.l7y.o5v = this.g4f;
		return;
	}
	if (this.m1k(w6w))
	{
		this.a5e();
		this.l7y.m7t = this.g4f;
		return;
	}
	if (this.m1k(j8i))
	{
		this.a5e();
		this.l7y.u5s = this.g4f;
		return;
	}
	if (this.m1k(v9o))
	{
		this.a5e();
		this.l7y.c2x = this.g4f;
		return;
	}
	if (this.m1k(o2t))
	{
		this.a5e();
		this.l7y.h5u = this.g4f;
		return;
	}
	if (this.m1k(b5l))
	{
		this.a5e();
		this.l7y.h5j = this.g4f;
		return;
	}
	if (this.m1k(w5y))
	{
		this.a5e();
		this.l7y.v7o = this.g4f;
		return;
	}
	if (this.m1k(h7k))
	{
		this.a5e();
		this.l7y.t2x = this.g4f;
		return;
	}
	if (this.m1k(a7q))
	{
		this.a5e();
		this.l7y.w9l = this.g4f;
		return;
	}
	if (this.m1k(y8h))
	{
		this.a5e();
		this.l7y.a8z = this.g4f;
		return;
	}

	
	if (this.m1k(b8v))
	{
		this.a5e();
		this.l7y.d9p = this.g4f;
		return;
	}

	
	if (this.m1k(b2q))
	{
		this.a5e();
		this.l7y.i3d = this.g4f;
		return;
	}
	if (this.m1k(u4i))
	{
		this.a5e();
		this.l7y.i3d = this.g4f;
		return;
	}
	if (this.m1k(f3j))
	{
		this.a5e();
		this.l7y.q1l = this.g4f;
		return;
	}
	if (this.m1k(p1n))
	{
		this.a5e();
		this.l7y.v4y = this.g4f;
		return;
	}
	if (this.m1k(l1o))
	{
		this.a5e();
		this.l7y.v4y = this.g4f;
		return;
	}
	if (this.m1k(l4v))
	{
		this.a5e();
		this.l7y.e1q = this.g4f;
		return;
	}
	if (this.m1k(z2l))
	{
		this.a5e();
		this.l7y.j9a = this.g4f;
		return;
	}
	if (this.m1k(l3z))
	{
		this.a5e();
		this.l7y.g8k = this.g4f;
		return;
	}

	
	if (this.m1k(c7l))
	{
		this.a5e();
		this.l7y.p9d = this.g4f;
		return;
	}

	
	if (this.m1k(z4v))
	{
		this.a5e();
		this.l7y.w9a = this.g4f;
		return;
	}
	if (this.m1k(h0i))
	{
		this.a5e();
		this.l7y.f9i = this.g4f;
		return;
	}
	if (this.m1k(g5q))
	{
		this.a5e();
		this.l7y.f3s = this.g4f;
		return;
	}
	if (this.m1k(w6a))
	{
		this.a5e();
		this.l7y.g0a = this.g4f;
		return;
	}

	
	if (this.m1k(g9l))
	{
		this.a5e();
		this.l7y.o9e = this.g4f;
		return;
	}

	
	if (this.m1k(z4d))
	{
		this.a5e();
		return;
	}
	if (this.m1k(g7n))
	{
		this.a5e();
		if (this.g4f.length == 0 || this.g4f == "?")
		{
			return;
		}
		this.e6f = true;
		this.r4l = this.g4f;
		return;
	}
	if (this.m1k(t6c))
	{
		this.a5e();
		this.g4t = p3z(this.g4f, 0);
		return;
	}
  
 	if (this.m1k(e4p))
	{
		this.a5e();
		this.l7y.r4c = this.g4f;
		return;
	}

}

a9k(o5j)
{
	let i2i = new u6i();
	let w1z = o5j.substr(6, o5j.length - 6);
	let u4k = w1z.split(",");
	for (const s of u4k)
	{
		if (s.length < 5)
		{
			continue;
		}
		let m0h = m7q(s.substr(1, 2));
		let z5f = m7q(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let k0o = u4e(m0h, z5f, n6q.d5z);
			i2i.add(k0o);
		}
		else if (s[0] == 'G')
		{
			let k0o = u4e(m0h, z5f, n6q.j3q);
			i2i.add(k0o);
		}
		else if (s[0] == 'Y')
		{
			let k0o = u4e(m0h, z5f, n6q.z7t);
			i2i.add(k0o);
		}
	}
	return i2i;
}

l3l(o5j)
{
	let o9d = new s2q();
	let w1z = o5j.substr(6, o5j.length - 6);
	let u4k = w1z.split(",");
	for (const s of u4k)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let k2a = m7q(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let w6z = j0l(k2a, o3t.u3a);
			o9d.add(w6z);
		}
		else if (s[0] == 'G')
		{
      let w6z = j0l(k2a, o3t.w5i);
			o9d.add(w6z);
		}
		else if (s[0] == 'Y')
		{
      let w6z = j0l(k2a, o3t.q2q);
			o9d.add(w6z);
		}
	}
	return o9d;
}

o0f(o5j)
{
	let w1z = o5j.substr(6, o5j.length - 6);
	let j0j = w1z.indexOf("]");
	if (j0j != -1)
	{
		let n3a = new z5k();
		let value = p3z(w1z.substr(0, j0j), 0);
		n3a.k9c(value);
		return n3a;
	}
	else
	{
		return new z5k();
	}
}


d3o(o5j, z0z)
{
	if (
		o5j.startsWith("[%cal") ||
    o5j.startsWith("[%csb") ||
		o5j.startsWith("[%csl") ||
		o5j.startsWith("[%mdl") ||
		o5j.startsWith("[%evp") ||
		o5j.startsWith("[%eval") ||
		o5j.startsWith("[%emt") ||
		o5j.startsWith("[%tqu") ||
		o5j.startsWith("[%tqu") ||
		o5j.startsWith("[%pws") ||
		o5j.startsWith("[%pth") ||
		o5j.startsWith("[%eog"))
	{
		let m4s = 0;
		{
     	let m5n = o5j.indexOf("[%cal");
			if (m5n != -1)
			{
        let n4j = o5j.indexOf("]", m5n);
				if (n4j != -1)
				{
     			let a2s = o5j.substring(m5n, n4j + 1);
					z0z.h6a = this.a9k(a2s).x5w();
					if (n4j > m4s) m4s = n4j;
				}
			}
		}
		{
     	let m5n = o5j.indexOf("[%csb");
   		if (m5n != -1)
			{
        let n4j = o5j.indexOf("]", m5n);
				if (n4j != -1)
				{
          let e1n = o5j.substring(m5n, n4j + 1);
					z0z.y8a = this.l3l(e1n).x5w();
					if (n4j > m4s) m4s = n4j;
				}
			}
		}
		{
      let m5n = o5j.indexOf("[%csl");
			if (m5n != -1)
			{
        let n4j = o5j.indexOf("]", m5n);
				if (n4j != -1)
				{
          let e1n = o5j.substring(m5n, n4j + 1);
					z0z.y8a = this.l3l(e1n).x5w();
					if (n4j > m4s) m4s = n4j;
				}
			}
		}
		{
      let m5n = o5j.indexOf("[%mdl");
			if (m5n != -1)
			{
        let n4j = o5j.indexOf("]", m5n);
				if (n4j != -1)
				{
          let x2c = o5j.substring(m5n, n4j + 1);
					z0z.n3a = this.o0f(x2c).x5w();
					if (n4j > m4s) m4s = n4j;
				}
			}
		}
		{
      let m5n = o5j.indexOf("[%evp");
			if (m5n != -1)
			{
        let n4j = o5j.indexOf("]", m5n);
				if (n4j != -1)
				{
					if (n4j > m4s) m4s = n4j;
				}
			}
		}
		{
      let m5n = o5j.indexOf("[%eval");
			if (m5n != -1)
			{
        let n4j = o5j.indexOf("]", m5n);
				if (n4j != -1)
				{
					if (n4j > m4s) m4s = n4j;
				}
			}
		}
		{
      let m5n = o5j.indexOf("[%emt");
			if (m5n = -1)
			{
        let n4j = o5j.indexOf("]", m5n);
				if (n4j != -1)
				{
					if (n4j > m4s) m4s = n4j;
				}
			}
		}
		{
      let m5n = o5j.indexOf("[%tqu");
			if (m5n != -1)
			{
        let n4j = o5j.indexOf("]", m5n);
				if (n4j != -1)
				{
					if (n4j > m4s) m4s = n4j;
				}
			}
		}
		{
      let m5n = o5j.indexOf("[%pws");
			if (m5n != -1)
			{
        let n4j = o5j.indexOf("]", m5n);
				if (n4j != -1)
				{
          z0z.a0g = true;
					if (n4j > m4s) m4s = n4j;
				}
			}
		}
		{
      let m5n = o5j.indexOf("[%pth");
			if (m5n != -1)
			{
        let n4j = o5j.indexOf("]", m5n);
				if (n4j != -1)
				{
          z0z.h4j = true;
					if (n4j > m4s) m4s = n4j;
				}
			}
		}
		{
      let m5n = o5j.indexOf("[%eog");
			if (m5n != -1)
			{
        let n4j = o5j.indexOf("]", m5n);
				if (n4j != -1)
				{
					z0z.m3d = true; 
					if (n4j > m4s) m4s = n4j;
				}
			}
		}
    z0z.c9d = o5j.substring(m4s + 1);
	}
	else
	{
		z0z.c9d = o5j;
	}
}

}

class c5i
{

constructor()
{
  this.e3j = 0;
	this.q4h = new s1f();
	this.d5g = new m6y();
}

x5w()
{
	let i0x = new c5i();
  i0x.e3j = this.e3j;
	i0x.q4h = this.q4h.x5w();
	i0x.d5g = this.d5g.x5w();
	return i0x;
}

}

class s1f
{

constructor()
{
	this.z7n = '';
	this.p6i = '';
	this.e5t = '';
	this.g2z = '';
	this.c8t = '';
	this.k6o = '';
	this.m1w = '';
	this.g6r = '';
	this.z4s = '';
  this.x0b = '';
	this.o1a = '';
	this.n1a = '';
	this.s6w = '';
	this.c3e = '';
	this.o8y = '';
	this.i2y = '';
	this.g3i = '';
	this.v0p = '';
	this.d4z = '';
  this.h7h = '';
	this.y2i = '';
	this.e5f = '';
	this.b1s = '';
	this.o5v = '';
	this.m7t = '';
	this.u5s = '';
	this.c2x = '';
	this.h5u = '';
	this.h5j = '';
	this.v7o = '';
	this.t2x = '';
	this.w9l = '';
	this.a8z = '';
	this.d9p = '';
	this.i3d = '';
	this.q1l = '';
	this.v4y = '';
	this.e1q = '';
	this.j9a = '';
	this.g8k = '';
	this.p9d = '';
	this.w9a = '';
	this.f9i = '';
	this.f3s = '';
	this.g0a = '';
	this.o9e = '';
  this.r4c = '';
}

x5w()
{
	let h3a = new s1f();

	h3a.z7n = this.z7n;
	h3a.p6i = this.p6i;
	h3a.e5t = this.e5t;
	h3a.g2z = this.g2z;
	h3a.c8t = this.c8t;
	h3a.k6o = this.k6o;
	h3a.m1w = this.m1w;
	h3a.g6r = this.g6r;
	h3a.z4s = this.z4s;
	h3a.x0b = this.x0b;

	h3a.o1a = this.o1a;
	h3a.n1a = this.n1a;
	h3a.s6w = this.s6w;
	h3a.c3e = this.c3e;
	h3a.o8y = this.o8y;
	h3a.i2y = this.i2y;
	h3a.g3i = this.g3i;
	h3a.v0p = this.v0p;
	h3a.d4z = this.d4z;
	h3a.h7h = this.h7h;

	h3a.y2i = this.y2i;
	h3a.e5f = this.e5f;
	h3a.b1s = this.b1s;
	h3a.o5v = this.o5v;
	h3a.m7t = this.m7t;
	h3a.u5s = this.u5s;
	h3a.c2x = this.c2x;
	h3a.h5u = this.h5u;
	h3a.h5j = this.h5j;
	h3a.v7o = this.v7o;
	h3a.t2x = this.t2x;
	h3a.w9l = this.w9l;
	h3a.a8z = this.a8z;

	h3a.d9p = this.d9p;

	h3a.i3d = this.i3d;
	h3a.q1l = this.q1l;
	h3a.v4y = this.v4y;
	h3a.e1q = this.e1q;
	h3a.j9a = this.j9a;
	h3a.g8k = this.g8k;

	h3a.p9d = this.p9d;

	h3a.w9a = this.w9a;
	h3a.f9i = this.f9i;
	h3a.f3s = this.f3s;
	h3a.g0a = this.g0a;

	h3a.o9e = this.o9e;
 	h3a.r4c = this.r4c;

	return h3a;
}

}


const x0p =
[
		[ r4b.o8h, 				  									"",											            "", 																	"",   ""    ],
		[ r4b.q7l, 										  "Afghanistan",											"Afghanistan", 												"af", "AFG" ],
		[ r4b.m0s, 									 	"AlandIslands",										  "Aland", 															"ax", "ALA" ],
		[ r4b.j4y,  											 	"Albania",													"Albania", 														"al", "ALB" ],
		[ r4b.q4i,  											 	"Algeria",													"Algeria", 														"dz", "DZA" ],
		[ r4b.o7h,  								 	"AmericanSamoa",										"American Samoa", 										"as", "ASM" ],
		[ r4b.z0a,  											 	"Andorra",													"Andorra", 														"ad", "AND" ],
		[ r4b.n5z,                           "Angola",													  "Angola", 														"ao", "AGO" ],
		[ r4b.s5i,  											  "Anguilla",												  "Anguilla", 													"ai", "AIA" ],
		[ r4b.u5a,  										  "Antarctica",											  "Antarctica", 												"aq", "ATA" ],
		[ r4b.q7t,  								  "AntiguaBarbuda",									  "Antigua & Barbuda", 									"ag", "ATG" ],
		[ r4b.w9i,  										 	"Argentina",												"Argentina", 													"ar", "ARG" ],
		[ r4b.j1a,  											 	"Armenia",													"Armenia",														"am", "ARM" ],
		[ r4b.y6g,  												 	"Aruba",														"Aruba",															"aw", "ABW" ],
		[ r4b.k4f,  										 	"Australia",												"Australia",													"au", "AUS" ],
		[ r4b.z8f,  											 	"Austria",													"Austria",											 			"at", "AUT" ],
		[ r4b.z2n,  										  "Azerbaijan",											  "Azerbaijan",													"az", "AZE" ],
		[ r4b.v7f,  											 	"Bahamas",													"Bahamas",														"bs", "BHS" ],
		[ r4b.v5n,  											 	"Bahrain",													"Bahrain",														"bh", "BHR" ],
		[ r4b.f5g,  										  "Bangladesh",											  "Bangladesh",													"bd", "BGD" ],
		[ r4b.u1r,  											  "Barbados",												  "Barbados",														"bb", "BRB" ],
		[ r4b.a9z,  								 	"BasqueCountry",	 									"Basque Country",     								"x1", "XX1" ], 
		[ r4b.v9h,  											 	"Belarus",													"Belarus",														"by", "BLR" ],
		[ r4b.a4d,  											 	"Belgium",													"Belgium",														"be", "BEL" ],
		[ r4b.j1i,  												  "Belize",													  "Belize",															"bz", "BLZ" ],
		[ r4b.l2n,  												 	"Benin",														"Benin",															"bj", "BEN" ],
		[ r4b.w9o,  											 	"Bermuda",													"Bermuda",														"bm", "BMU" ],
		[ r4b.f8i,  												  "Bhutan",													  "Bhutan",															"bt", "BTN" ],
		[ r4b.y2b,  												"Bolivia",													"Bolivia",														"bo", "BOL" ],
		[ r4b.v1x,  						  "BosniaHerzegovina",       				  "Bosnia & Herzegovina", 							"ba", "BIH" ], 
		[ r4b.u4l,  											  "Botswana",                      	  "Botswana",														"bw", "BWA" ],
		[ r4b.g1u,  									  "BouvetIsland",                 		"Bouvet",															"bv", "BVT" ],
		[ r4b.j3l,  												  "Brazil",                        	  "Brazil",															"br", "BRA" ],
		[ r4b.w5k,  	 	"BritishIndianOceanTerritory",			"British Indian Ocean Territory", 		"io", "IOT" ],
		[ r4b.e5v, 							 	"BruneiDarussalam",								  "Brunei",															"bn", "BRN" ], 
		[ r4b.k4m,  											  "Bulgaria",												  "Bulgaria", 													"bg", "BGR" ],
		[ r4b.b1b, 										  "BurkinaFaso",											"Burkina Faso",												"bf", "BFA" ],
		[ r4b.c9n,  											 	"Burundi",													"Burundi",														"bi", "BDI" ],
		[ r4b.n0r,  											  "Cambodia",												  "Cambodja",														"kh", "KHM" ],
		[ r4b.r8k,  											  "Cameroon",												  "Cameroon",														"cm", "CMR" ],
		[ r4b.e0a,  												  "Canada",													  "Canada",															"ca", "CAN" ],
		[ r4b.t6z,  										  "CapeVerde",												"Cape Verde",													"cv", "CPV" ], 
		[ r4b.c7e,  										  "Catalonia",												"Catalonia",													"x2", "XX2" ], 
		[ r4b.l7k,  								  "CaymanIslands",										"Cayman Islands",											"ky", "CYM" ],
		[ r4b.s3m,  				  "CentralAfricanRepublic",					  "Central African Republic",						"cf", "CAF" ],
		[ r4b.g9e,  													  "Chad",														  "Chad",																"td", "TCD" ],
		[ r4b.p2p,  												 	"Chile",														"Chile",															"cl", "CHL" ],
		[ r4b.h3w,  												 	"China",														"China",															"cn", "CHN" ],
		[ r4b.y8w,  							 	"ChristmasIsland",									"Christmas",													"cx", "CXR" ],
		[ r4b.x8n,  					 	"CocosKeelingIslands",							"Cocos (Keeling)",										"cc", "CCK" ], 
		[ r4b.b4a,  											  "Colombia",												  "Colombia",														"co", "COL" ],
		[ r4b.x9w,  											 	"Comoros",													"Comoros",														"km", "COM" ],
		[ r4b.q0e,  												 	"Congo",														"Congo-Brazzaville", 						    	"cg", "COG" ],
		[ r4b.w8y,  			 	"CongoDemocraticRepublic",					"Congo-Kinshasa(Zaire)",						  "cd", "COD" ],
		[ r4b.b4n,  									 	"CookIslands",											"Cook Islands",											 	"ck", "COK" ],
		[ r4b.s2z,  											"CostaRica",												"Costa Rica",												 	"cr", "CRI" ],
		[ r4b.p2w,  												"Croatia",													"Croatia",														"hr", "HRV" ],
		[ r4b.y7z,  													  "Cuba",														  "Cuba",															 	"cu", "CUB" ],
		[ r4b.f8c,  												"Curacao",													"Curacao",											  		"cw", "CUW" ],
		[ r4b.t0z,  												  "Cyprus",													  "Cyprus",														 	"cy", "CYP" ],
		[ r4b.g9m,  									      "Czechia",										      "Czech Republic", 										"cz", "CZE" ],
		[ r4b.g0s,  										  "CoteIvoire",	   					 				  "Cote d'Ivoire",											"ci", "CIV" ],
		[ r4b.e6q,  												"Denmark",													"Denmark",													  "dk", "DNK" ],
		[ r4b.v3z,  											  "Djibouti",												  "Djibouti",													 	"dj", "DJI" ],
		[ r4b.m5y,  											  "Dominica",												  "Dominica",													 	"dm", "DMA" ],
		[ r4b.t5i,  							"DominicanRepublic",								"Dominican Republic",								 	"do", "DOM" ],
		[ r4b.p7z,  												"Ecuador",													"Ecuador",													 	"ec", "ECU" ],
		[ r4b.j2p,  													"Egypt",														"Egypt", 														 	"eg", "EGY" ],
		[ r4b.r1d,  										  "ElSalvador",											  "El Salvador",												"sv", "SLV" ],
		[ r4b.n9e,  												"England",													"England",														"x3", "GBR" ],
		[ r4b.o7l,  							  "EquatorialGuinea",								  "Equatorial Guinea",									"gq", "GNQ" ], 
		[ r4b.c5v,  												"Eritrea",													"Eritrea",														"er", "ERI" ],
		[ r4b.g2q,  												"Estonia",													"Estonia",														"ee", "EST" ],
		[ r4b.s9s,  											  "Ethiopia",												  "Ethiopia",													 	"et", "ETH" ],
		[ r4b.l6n,  								"FalklandIslands",									"England",														"fk", "FLK" ], 
		[ r4b.f8t,  									  "FaroeIslands",										  "Faroes",														 	"fo", "FRO" ],
		[ r4b.k2n,  													  "Fiji",														  "Fiji",															 	"fj", "FJI" ],
		[ r4b.p6x,  												"Finland",													"Finland",														"fi", "FIN" ],
		[ r4b.o2k,  												  "France",													  "France",														 	"fr", "FRA" ],
		[ r4b.h0m,  									  "FrenchGuiana",										  "Guyana", 														"gf", "GUF" ], 
		[ r4b.x9k,  								"FrenchPolynesia",									"Tahiti(French Polinesia)", 					"pf", "PYF" ], 
		[ r4b.v3o,  			"FrenchSouthernTerritories",				"French Southern and Antarctic Lands","tf", "ATF" ],
		[ r4b.b7m,  													"Gabon",														"Gabon",															"ga", "GAB" ], 
		[ r4b.k9f,  												  "Gambia",													  "Gambia",															"gm", "GMB" ],
		[ r4b.y0p,  												"Georgia",													"Georgia",														"ge", "GEO" ],
		[ r4b.n6r,  												"Germany",													"Germany",														"de", "DEU" ],
		[ r4b.c6q, 													  "Ghana",														"Ghana",															"gh", "GHA" ],
		[ r4b.q2k,  											"Gibraltar",												"Gibraltar",													"gi", "GIB" ],
		[ r4b.q8y,  												  "Greece",													  "Greece",															"gr", "GRC" ],
		[ r4b.u3p,  											"Greenland",												"Greenland",													"gl", "GRL" ],
		[ r4b.u2o,  												"Grenada",													"Grenada",														"gd", "GRD" ],
		[ r4b.t4d,  										  "Guadeloupe",											  "Guadeloupe",													"gp", "GLP" ],
		[ r4b.q5e,  													  "Guam",														  "Guam",																"gu", "GUM" ],
		[ r4b.v3r,  											"Guatemala",												"Guatemala",													"gt", "GTM" ],
		[ r4b.n8b,  											  "Guernsey",												  "Guernsey",														"gg", "GGY" ], 
		[ r4b.v6v,  												  "Guinea",													  "Guinea",															"gn", "GIN" ],
		[ r4b.q6i,  									  "GuineaBissau",										  "Guinea-Bissau",											"gw", "GNB" ],
		[ r4b.n7n,  												  "Guyana",													  "Guyana",															"gy", "GUY" ],
		[ r4b.r1v,  													"Haiti",														"Haiti",															"ht", "HTI" ],
		[ r4b.w6f, 			"HeardIslandMcDonaldIslands", 			"Australia",   									  		"hm", "HMD" ],
		[ r4b.t7p,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ r4b.t3i,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ r4b.a1y,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ r4b.z3k,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ r4b.o2v,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ r4b.j8a,  												 	"India",														"India",															"in", "IND" ],
		[ r4b.x3m,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ r4b.y5q,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ r4b.p0v,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ r4b.c8y,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ r4b.v0j,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ r4b.c3g,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ r4b.j5w,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ r4b.c4i,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ r4b.j9o,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], 
		[ r4b.o0r,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ r4b.s2t,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ r4b.y4h,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ r4b.c5k,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ r4b.h0a,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ r4b.p5u,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ r4b.f5y,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], 
		[ r4b.x7r,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], 
		[ r4b.l0p,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ r4b.f6s,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ r4b.u0z,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ r4b.u3k,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ r4b.w2a, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ r4b.f5r,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ r4b.v2s, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ r4b.f6c,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ r4b.s2a,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ r4b.s8o,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ r4b.d9m,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ r4b.a2j,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ r4b.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ r4b.j4w,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ r4b.t6x,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ r4b.k7o,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ r4b.o3l,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ r4b.a4r,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ r4b.f0x, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ r4b.c7u,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ r4b.u8w,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ r4b.x7j,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ r4b.n0y,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ r4b.b9q,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ r4b.e8f,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ r4b.j5q,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ r4b.n4v,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ r4b.r6w,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ r4b.b4t,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ r4b.n2k,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ r4b.h3r,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ r4b.i8u,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ r4b.v3q,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ r4b.y0f,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ r4b.s7k, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ r4b.x6n,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ r4b.e4o,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ r4b.y9t,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ r4b.m6w,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ r4b.u4p, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ r4b.r5f,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ r4b.b3i,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ r4b.s7p,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ r4b.d0q,  													"Niger",														"Niger",															"ne", "NER" ],
		[ r4b.w1g,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ r4b.j5p,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ r4b.i5y,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ r4b.a5l,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], 
		[ r4b.k4c,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ r4b.t1m,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ r4b.u6f,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ r4b.p6q,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ r4b.a3w,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ r4b.k6n,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ r4b.n2t,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ r4b.y2g,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ r4b.s5l,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ r4b.s1m,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ r4b.o5s,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ r4b.f4a,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ r4b.u6d,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ r4b.q4m,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ r4b.v2r,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ r4b.i7g,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ r4b.y8t,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ r4b.l7l,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ r4b.x2s,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ r4b.q0v,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ r4b.f2x,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ r4b.e6a,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], 
		[ r4b.d2w,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], 
		[ r4b.t0h, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], 
		[ r4b.l3g,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ r4b.s4c,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], 
		[ r4b.p0u,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], 
		[ r4b.z8o,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ r4b.r8c,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ r4b.u5l,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ r4b.o6b,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ r4b.p1v,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ r4b.e5o,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ r4b.j2h,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ r4b.d7a,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ r4b.j1b,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ r4b.v9q,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ r4b.k7g,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ r4b.c9e,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ r4b.e5n,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ r4b.b4o,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ r4b.a0n,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ r4b.y4i,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ r4b.b8z, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ r4b.n4k,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ r4b.a8c,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ r4b.b4w, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ r4b.d6z,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ r4b.u5u,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ r4b.l1a,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], 
		[ r4b.m1l,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], 
		[ r4b.o2m,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ r4b.e8w,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ r4b.i8k,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ r4b.x3q,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ r4b.d9x,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ r4b.l3b,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ r4b.i6u,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ r4b.o1x, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ r4b.z1r,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], 
		[ r4b.k8v, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ r4b.a5m,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], 
		[ r4b.d1u,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ r4b.r9h,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ r4b.p6n,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ r4b.k7y,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ r4b.s1z,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ r4b.s4h,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ r4b.n4s,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ r4b.f8v,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ r4b.w2u,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ r4b.j0s,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ r4b.c0i,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], 
		[ r4b.q2x,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ r4b.b7y, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ r4b.f3o,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ r4b.r5q,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ r4b.m1m,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ r4b.a1q,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ r4b.l4s,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ r4b.p6c,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ r4b.i8j,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ r4b.p2t,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ r4b.i4v,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ r4b.e6m,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ r4b.r1j,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ r4b.d4i,  											 		"Zaire",														"",																		"zr", "ZRN" ], 
		[ r4b.h9o,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ r4b.h1z,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function n8u(j8v)
{
	return x0p[j8v][2];
}

function v3s(j8v)
{
	return x0p[j8v][4];
}

function u3n(x3a)
{
	for (const j8v of x0p)
	{
		if (j8v[4] == x3a)
		{
			return j8v[0];
		}
	}
	return r4b.o8h;
}

function n4q(b0d)
{
	for (const j8v of x0p)
	{
		if (j8v[3] == b0d)
		{
			return j8v[0];
		}
	}
	return r4b.o8h;
}
class m7p
{

constructor()
{
	this.o5j = '';
}

z7v(w1z)
{
	this.o5j += w1z;
}

i1n(w1z)
{
	this.o5j += w1z + '\n';
}

l0g()
{
	this.o5j += '\n';
}

}




function p3z(k0s, h3x)
{
	let value = Number(k0s);
	if (isNaN(value))
	{
		return h3x;
	}
	else
	{
		return value;
	}
}
