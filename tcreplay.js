const	chess = true; 

const r4u =
{
	z0j    : 0,
	f3a  : 1,
	m1p  : 2,
	l5x    : 3,
  n3b   : 4,
	w6p    : 5,
	f1o    : 6,
	s7h  : 7,
	d5l  : 8,
	t2o    : 9,
	n8i   : 10,
	n1f    : 11,
	f7c        : 12,
};

const v4q =
{
	j1n        : 0,
	f0n        : 1,
};

const	a1 = 0;
const a3m = 1;
const y7r = 2;
const k0i = 3;
const k7m = 4;
const w9b = 5;
const g0r = 6;
const m0d = 7;
const	a2 = 8;
const t7z = 9;
const g8i = 10;
const h9i = 11;
const t8r = 12;
const t3o = 13;
const l0c = 14;
const h1g = 15;
const	a3 = 16;
const f4e = 17;
const i1b = 18;
const y1m = 19;
const z0i = 20;
const n0m = 21;
const m4t = 22;
const t3q = 23;
const	a4 = 24;
const l2c = 25;
const p2b = 26;
const m2g = 27;
const r1r = 28;
const o6w = 29;
const g7w = 30;
const b0j = 31;
const	a5 = 32;
const f3e = 33;
const c0b = 34;
const g7m = 35;
const n5n = 36;
const m2u = 37;
const q4j = 38;
const u1w = 39;
const	a6 = 40;
const r7o = 41;
const j1c = 42;
const d9p = 43;
const a9e = 44;
const m6v = 45;
const d4z = 46;
const h2f = 47;
const	a7 = 48;
const i6w = 49;
const w2g = 50;
const e2c = 51;
const e2o = 52;
const z9x = 53;
const x4h = 54;
const p1n = 55;
const	a8 = 56;
const b7g = 57;
const i5x = 58;
const a6e = 59;
const j2k = 60;
const j7j = 61;
const r1l = 62;
const e9f = 63;
const f1k = 64;

const c7e = 0;
const u8b = 1;
const g4i = 2;
const y9o = 3;
const j0n = 4;
const r6l = 5;
const f7r = 6;
const a1m = 7;
const a7j = 8;

const	rank_1 = 0;
const f3f = 1;
const n1c = 2;
const g2f = 3;
const n2d = 4;
const t7m = 5;
const b9y = 6;
const s6i = 7;
const o6s = 8;

const n3x        = 8;
const u8t       = 64;
const n7n      = 16;

const x2y =
[
	r4u.l5x,    
  r4u.f3a,  
  r4u.m1p,  
  r4u.n3b,   
  r4u.w6p,    
  r4u.m1p,  
  r4u.f3a,  
  r4u.l5x,    
	r4u.z0j,    
  r4u.z0j,    
  r4u.z0j,    
  r4u.z0j,    
  r4u.z0j,    
  r4u.z0j,    
  r4u.z0j,    
  r4u.z0j,    
	r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
	r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
	r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
	r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
	r4u.f1o,    
  r4u.f1o,    
  r4u.f1o,    
  r4u.f1o,    
  r4u.f1o,    
  r4u.f1o,    
  r4u.f1o,    
  r4u.f1o,    
	r4u.t2o,    
  r4u.s7h,  
  r4u.d5l,  
  r4u.n8i,   
  r4u.n1f,    
  r4u.d5l,  
  r4u.s7h,  
  r4u.t2o,    
];

const b2y =
[
	r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
	r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
	r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
	r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
	r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
	r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
	r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
	r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
  r4u.f7c,        
];

const b7a =
[
	a1, a3m, y7r, k0i, k7m, w9b, g0r, m0d,
	a2, t7z, g8i, h9i, t8r, t3o, l0c, h1g,
	a3, f4e, i1b, y1m, z0i, n0m, m4t, t3q,
	a4, l2c, p2b, m2g, r1r, o6w, g7w, b0j,
	a5, f3e, c0b, g7m, n5n, m2u, q4j, u1w,
	a6, r7o, j1c, d9p, a9e, m6v, d4z, h2f,
	a7, i6w, w2g, e2c, e2o, z9x, x4h, p1n,
	a8, b7g, i5x, a6e, j2k, j7j, r1l, e9f,
];

const h7h =
[
	c7e,
  u8b,
  g4i,
  y9o,
  j0n,
  r6l,
  f7r,
  a1m,
];

const l8v =
[
	rank_1,
  f3f,
  n1c,
  g2f,
  n2d,
  t7m,
  b9y,
  s6i,
];

function a7b(h1e)
{
	return h1e == r4u.f1o ||
		h1e == r4u.s7h ||
    h1e == r4u.d5l ||
    h1e == r4u.t2o ||
    h1e == r4u.n8i ||
    h1e == r4u.n1f;
}

function c0t(h1e)
{
	return h1e == r4u.z0j ||
		h1e == r4u.f3a ||
    h1e == r4u.m1p ||
    h1e == r4u.l5x ||
    h1e == r4u.n3b ||
    h1e == r4u.w6p;
}

function w6s(h1e)
{
	return h1e == r4u.z0j || h1e == r4u.f1o;
}

function c7a(h1e)
{
	return h1e == r4u.f3a || h1e == r4u.s7h;
}

function t7b(h1e)
{
	return h1e == r4u.m1p || h1e == r4u.d5l;
}

function t7n(h1e)
{
	return h1e == r4u.l5x || h1e == r4u.t2o;
}

function k9l(h1e)
{
	return h1e == r4u.n3b || h1e == r4u.n8i;
}

function b2u(h1e)
{
	return h1e == r4u.w6p || h1e == r4u.n1f;
}

function m6j(k2d)
{
	if (k2d == f1k)
	{
		return f1k;
	}
	else
	{
		return u8t - k2d - 1;
	}
}

const r3u =
[
	c7e, u8b, g4i, y9o, j0n, r6l, f7r, a1m,
	c7e, u8b, g4i, y9o, j0n, r6l, f7r, a1m,
	c7e, u8b, g4i, y9o, j0n, r6l, f7r, a1m,
	c7e, u8b, g4i, y9o, j0n, r6l, f7r, a1m,
	c7e, u8b, g4i, y9o, j0n, r6l, f7r, a1m,
	c7e, u8b, g4i, y9o, j0n, r6l, f7r, a1m,
	c7e, u8b, g4i, y9o, j0n, r6l, f7r, a1m,
	c7e, u8b, g4i, y9o, j0n, r6l, f7r, a1m,
];

function z7g(k2d)
{
	return r3u[k2d];
}

const s2c =
[
	rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1,
	f3f, f3f, f3f, f3f, f3f, f3f, f3f, f3f,
	n1c, n1c, n1c, n1c, n1c, n1c, n1c, n1c,
	g2f, g2f, g2f, g2f, g2f, g2f, g2f, g2f,
	n2d, n2d, n2d, n2d, n2d, n2d, n2d, n2d,
	t7m, t7m, t7m, t7m, t7m, t7m, t7m, t7m,
	b9y, b9y, b9y, b9y, b9y, b9y, b9y, b9y,
	s6i, s6i, s6i, s6i, s6i, s6i, s6i, s6i,
];

function a3p(k2d)
{
	return s2c[k2d];
}

function g9s(a, b)
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

function v8t(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function q6r(f1l, h1e)
{
	let s7n = 0;
	for (const value of f1l)
	{
		if (value == h1e)
		{
			s7n++;
		}
	}
	return s7n;
}

var stringToSquareMapInited = false;
const e8c = new Map();
function b4w()
{
  e8c.set("a1", a1);
  e8c.set("a2", a2);
  e8c.set("a3", a3);
  e8c.set("a4", a4);
  e8c.set("a5", a5);
  e8c.set("a6", a6);
  e8c.set("a7", a7);
  e8c.set("a8", a8);
  e8c.set("b1", a3m);
  e8c.set("b2", t7z);
  e8c.set("b3", f4e);
  e8c.set("b4", l2c);
  e8c.set("b5", f3e);
  e8c.set("b6", r7o);
  e8c.set("b7", i6w);
  e8c.set("b8", b7g);
  e8c.set("c1", y7r);
  e8c.set("c2", g8i);
  e8c.set("c3", i1b);
  e8c.set("c4", p2b);
  e8c.set("c5", c0b);
  e8c.set("c6", j1c);
  e8c.set("c7", w2g);
  e8c.set("c8", i5x);
  e8c.set("d1", k0i);
  e8c.set("d2", h9i);
  e8c.set("d3", y1m);
  e8c.set("d4", m2g);
  e8c.set("d5", g7m);
  e8c.set("d6", d9p);
  e8c.set("d7", e2c);
  e8c.set("d8", a6e);
  e8c.set("e1", k7m);
  e8c.set("e2", t8r);
  e8c.set("e3", z0i);
  e8c.set("e4", r1r);
  e8c.set("e5", n5n);
  e8c.set("e6", a9e);
  e8c.set("e7", e2o);
  e8c.set("e8", j2k);
  e8c.set("f1", w9b);
  e8c.set("f2", t3o);
  e8c.set("f3", n0m);
  e8c.set("f4", o6w);
  e8c.set("f5", m2u);
  e8c.set("f6", m6v);
  e8c.set("f7", z9x);
  e8c.set("f8", j7j);
  e8c.set("g1", g0r);
  e8c.set("g2", l0c);
  e8c.set("g3", m4t);
  e8c.set("g4", g7w);
  e8c.set("g5", q4j);
  e8c.set("g6", d4z);
  e8c.set("g7", x4h);
  e8c.set("g8", r1l);
  e8c.set("h1", m0d);
  e8c.set("h2", h1g);
  e8c.set("h3", t3q);
  e8c.set("h4", b0j);
  e8c.set("h5", u1w);
  e8c.set("h6", h2f);
  e8c.set("h7", p1n);
  e8c.set("h8", e9f);
}

function z0q(c7b)
{
  if (!stringToSquareMapInited)
  {
    b4w();
    stringToSquareMapInited = true;
  }
  if (e8c.has(c7b))
  {
    return e8c.get(c7b);
  }
  else
  {
		return f1k;
  }
}

function u1k(k2d)
{
  return m8y[k2d];
}

const s9p  = g0r;
const b0h  = w9b;
const s2j = y7r;
const q3b = k0i;
const z4j  = r1l;
const w2r  = j7j;
const h9y = i5x;
const i0u = a6e;

const m8y =
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

const c6t =
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

const z1z =
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




const m6g =
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

function q3c(k2d)
{
	return m6g[k2d];
}



















function l0m(u1s)
{
  if (u1s == '1')
  {
    return rank_1;
  }
  else if (u1s == '2')
  {
    return f3f;
  }
  else if (u1s == '3')
  {
    return n1c;
  }
  else if (u1s == '4')
  {
    return g2f;
  }
  else if (u1s == '5')
  {
    return n2d;
  }
  else if (u1s == '6')
  {
    return t7m;
  }
  else if (u1s == '7')
  {
    return b9y;
  }
  else if (u1s == '8')
  {
    return s6i;
  }
	else
	{
		return o6s;
	}
}

function l2u(u1s)
{
  if (u1s == 'a')
  {
    return c7e;
  }
  else if (u1s == 'b')
  {
    return u8b;
  }
  else if (u1s == 'c')
  {
    return g4i;
  }
  else if (u1s == 'd')
  {
    return y9o;
  }
  else if (u1s == 'e')
  {
    return j0n;
  }
  else if (u1s == 'f')
  {
    return r6l;
  }
  else if (u1s == 'g')
  {
    return f7r;
  }
  else if (u1s == 'h')
  {
    return a1m;
  }
  else
	{
		return a7j;
	}
}

function i6f(a7c)
{
  return z1z[a7c];
}

function h7n(u5h)
{
  return c6t[u5h];
}


class m8h
{

constructor()
{
	this.u1y = false;
	this.c4b = k7m;
	this.a4l = j2k;
	this.a0r = m0d;
	this.x4q = a1;
	this.l7r = e9f;
	this.n7w = a8;
	this.q1d = false;
	this.a8t = false;
	this.e1q = false;
	this.d9z = false;
	this.t7e = f1k;
}

z4e()
{
	let w9m = new m8h();
  return Object.assign(w9m, this);
}

}


class b6u
{

constructor()
{
  this.w7y = Array(u8t).fill(r4u.f7c);
 	this.d2x = v4q.j1n;
 	this.l6c = new m8h();
 	this.g3g();
}

z4e()
{
	let y2r = new b6u();
	v8t(y2r.w7y, this.w7y);
	y2r.d2x = this.d2x;
  y2r.l6c = this.l6c.z4e();
  y2r.whiteKing_ = this.whiteKing_;
	y2r.blackKing_ = this.blackKing_;
	return y2r;
}

q0w(o8d)
{
	return this.d2x == o8d.d2x &&
		g9s(this.w7y, o8d.w7y);
}

t5w(o8d)
{
	return !this.q0w(o8d);
}

n9y()
{
 	v8t(this.w7y, x2y);
 	this.d2x = v4q.j1n;
  this.l6c.u1y = false;
	this.l6c.c4b = k7m;
	this.l6c.a4l = j2k;
	this.l6c.a0r = m0d;
	this.l6c.x4q = a1;
	this.l6c.l7r = e9f;
	this.l6c.n7w = a8;
	this.l6c.t7e = f1k;
	this.l6c.q1d = true;
	this.l6c.a8t = true;
	this.l6c.e1q = true;
	this.l6c.d9z = true;
 	this.whiteKing_ = k7m;
	this.blackKing_ = j2k;
}

l5f()
{
	return this.d2x == v4q.j1n && this.e2a();
}

e2a()
{
	return g9s(this.w7y, x2y);
}

g3g()
{
	this.w7y.fill(r4u.f7c);
	this.d2x = v4q.j1n;
	this.l6c.u1y = false;
	this.l6c.c4b = k7m;
	this.l6c.a4l = j2k;
	this.l6c.a0r = m0d;
	this.l6c.x4q = a1;
	this.l6c.l7r = e9f;
	this.l6c.n7w = a8;
	this.l6c.t7e = f1k;
	this.l6c.q1d = false;
	this.l6c.a8t = false;
	this.l6c.e1q = false;
	this.l6c.d9z = false;
  this.whiteKing_ = f1k;
  this.blackKing_ = f1k;
}

p8r()
{
	return this.d2x == v4q.j1n && this.y5p();
}

y5p()
{
	return this.w7y.every(r4u.f7c);
}

f1l()
{
  return this.w7y.slice();
}

j0s(k2d)
{
	return this.w7y[k2d];
}

t8a(k2d, h1e)
{
	if (this.w7y[k2d] == r4u.w6p)
	{
		this.whiteKing_ = f1k;
	}
	else if (this.w7y[k2d] == r4u.n1f)
	{
		this.blackKing_ = f1k;
	}
	if (h1e == r4u.w6p)
	{
		this.whiteKing_ = k2d;
	}
	else if (h1e == r4u.n1f)
	{
		this.blackKing_ = k2d;
	}
	this.w7y[k2d] = h1e;
}

b3t()
{
	this.d2x = v4q.j1n;
}

l8s()
{
	this.d2x = v4q.f0n;
}

i0x()
{
	if (this.d2x == v4q.j1n)
	{
		this.d2x = v4q.f0n;
	}
	else
	{
		this.d2x = v4q.j1n;
	}
}

q8y()
{
	return this.d2x == v4q.j1n;
}

a7q()
{
	return this.d2x == v4q.f0n;
}

l4f(k2d)
{
	return this.w7y[k2d] == r4u.f7c;
}

c0t(k2d)
{
	let h1e = this.w7y[k2d];
	return h1e == r4u.z0j ||
		h1e == r4u.f3a ||
    h1e == r4u.m1p ||
    h1e == r4u.l5x ||
    h1e == r4u.n3b ||
    h1e == r4u.w6p;
}

a7b(k2d)
{
	let h1e = this.w7y[k2d];
	return h1e == r4u.f1o ||
		h1e == r4u.s7h ||
    h1e == r4u.d5l ||
    h1e == r4u.t2o ||
    h1e == r4u.n8i ||
    h1e == r4u.n1f;
}

m8u(k2d)
{
  let h1e = this.w7y[k2d];
	return h1e == r4u.z0j;
}

g2z(k2d)
{
  let h1e = this.w7y[k2d];
	return h1e == r4u.f3a;
}

v8k(k2d)
{
  let h1e = this.w7y[k2d];
	return h1e == r4u.m1p;
}

w7f(k2d)
{
  let h1e = this.w7y[k2d];
	return h1e == r4u.l5x;
}

e2x(k2d)
{
  let h1e = this.w7y[k2d];
	return h1e == r4u.n3b;
}

p3k(k2d)
{
  let h1e = this.w7y[k2d];
	return h1e == r4u.w6p;
}

j0l(k2d)
{
  let h1e = this.w7y[k2d];
	return h1e == r4u.f1o;
}

x6d(k2d)
{
  let h1e = this.w7y[k2d];
	return h1e == r4u.s7h;
}

b6q(k2d)
{
  let h1e = this.w7y[k2d];
	return h1e == r4u.d5l;
}

x4w(k2d)
{
  let h1e = this.w7y[k2d];
	return h1e == r4u.t2o;
}

c7z(k2d)
{
  let h1e = this.w7y[k2d];
	return h1e == r4u.n8i;
}

e2s(k2d)
{
  let h1e = this.w7y[k2d];
	return h1e == r4u.n1f;
}

g4z()
{
  let s7n = 0;
	for (const k2d of b7a)
	{
    if (this.c0t(k2d))
		{
			s7n++;
		}
	}
	return s7n;
}

a1q()
{
  let s7n = 0;
	for (const k2d of b7a)
	{
    if (this.a7b(k2d))
		{
			s7n++;
		}
	}
	return s7n;
}

r9h(m7e)
{
  this.l6c = m7e.z4e();
}

m7e()
{
  return this.l6c.z4e();
}

i8p(c7j)
{
 	this.l6c.t7e = f1k; 
	if (c7j.l3z())
	{
		this.i0x();
		return;
	}
	if (c7j.c0t())
	{
		if (c7j.t7p())
		{
			this.w7y[c7j.i9e] = r4u.f7c;
			if (c7j.q1n == r4u.t2o)
			{
				if (c7j.i9e == this.l6c.n7w)
				{
					this.l6c.d9z = false;
				}
				else if (c7j.i9e == this.l6c.l7r)
				{
					this.l6c.e1q = false;
				}
			}
		}
		this.w7y[c7j.d4d] = r4u.f7c;
		this.w7y[c7j.z4d] = c7j.o9x;
		if (c7j.v5m == r4u.z0j)
		{
			if ((c7j.z4d - c7j.d4d) == 16)
			{
				this.l6c.t7e = (c7j.d4d + 8);
			}
		}
		else if (c7j.v5m == r4u.l5x)
		{
			if (c7j.d4d == this.l6c.x4q)
			{
				this.l6c.a8t = false;
			}
			else if (c7j.d4d == this.l6c.a0r)
			{
				this.l6c.q1d = false;
			}
		}
		else if (c7j.v5m == r4u.w6p)
		{
			if (c7j.t2p())
			{
				if (c7j.z4d == s2j)
				{
					
					if (this.l6c.x4q != c7j.z4d)
					{
						this.w7y[this.l6c.x4q] = r4u.f7c;
					}
					this.w7y[q3b] = r4u.l5x;
				}
				else if (c7j.z4d == s9p)
				{
					
					if (this.l6c.a0r != c7j.z4d)
					{
						this.w7y[this.l6c.a0r] = r4u.f7c;
					}
					this.w7y[b0h] = r4u.l5x;
				}
			}
			this.l6c.a8t = false;
			this.l6c.q1d = false;
			this.whiteKing_ = c7j.z4d;
		}
	}
	else
	{
		if (c7j.t7p())
		{
			this.w7y[c7j.i9e] = r4u.f7c;
			if (c7j.q1n == r4u.l5x)
			{
				if (c7j.i9e == this.l6c.x4q)
				{
					this.l6c.a8t = false;
				}
				else if (c7j.i9e == this.l6c.a0r)
				{
					this.l6c.q1d = false;
				}
			}
		}
		this.w7y[c7j.d4d] = r4u.f7c;
		this.w7y[c7j.z4d] = c7j.o9x;
		if (c7j.v5m == r4u.f1o)
		{
			if ((c7j.z4d - c7j.d4d) == -16)
			{
				this.l6c.t7e = (c7j.d4d - 8);
			}
		}
		else if (c7j.v5m == r4u.t2o)
		{
			if (c7j.d4d == this.l6c.n7w)
			{
				this.l6c.d9z = false;
			}
			else if (c7j.d4d == this.l6c.l7r)
			{
				this.l6c.e1q = false;
			}
		}
		else if (c7j.v5m == r4u.n1f)
		{
			if (c7j.t2p())
			{
				if (c7j.z4d == h9y)
				{
					
					if (this.l6c.n7w != c7j.z4d)
					{
						this.w7y[this.l6c.n7w] = r4u.f7c;
					}
					this.w7y[i0u] = r4u.t2o;
				}
				else if (c7j.z4d == z4j)
				{
					
					if (this.l6c.l7r != c7j.z4d)
					{
						this.w7y[this.l6c.l7r] = r4u.f7c;
					}
					this.w7y[w2r] = r4u.t2o;
				}
			}
			this.l6c.d9z = false;
			this.l6c.e1q = false;
			this.blackKing_ = c7j.z4d;
		}
	}
	this.i0x();
}

o1f(c7j)
{
 	if (c7j.l3z())
	{
		this.i0x();
		return;
	}
	if (c7j.c0t())
	{
		this.w7y[c7j.z4d] = r4u.f7c;
		this.w7y[c7j.d4d] = c7j.v5m;
		if (c7j.v5m == r4u.w6p)
		{
			if (c7j.t2p())
			{
				if (c7j.z4d == s2j)
				{
					
					if (q3b != c7j.d4d)
					{
						this.w7y[q3b] = r4u.f7c;
					}
					this.w7y[this.l6c.x4q] = r4u.l5x;
				}
				else if (c7j.z4d == s9p)
				{
					
					if (b0h != c7j.d4d)
					{
						this.w7y[b0h] = r4u.f7c;
					}
					this.w7y[this.l6c.a0r] = r4u.l5x;
				}
			}
			this.whiteKing_ = c7j.d4d;
		}
		if (c7j.t7p())
		{
			this.w7y[c7j.i9e] = c7j.q1n;
		}
	}
	else
	{
		this.w7y[c7j.z4d] = r4u.f7c;
		this.w7y[c7j.d4d] = c7j.v5m;
		if (c7j.v5m == r4u.n1f)
		{
			if (c7j.t2p())
			{
				if (c7j.z4d == h9y)
				{
					
					if (i0u != c7j.d4d)
					{
						this.w7y[i0u] = r4u.f7c;
					}
					this.w7y[this.l6c.n7w] = r4u.t2o;
				}
				else if (c7j.z4d == z4j)
				{
					
					if (w2r != c7j.d4d)
					{
						this.w7y[w2r] = r4u.f7c;
					}
					this.w7y[this.l6c.l7r] = r4u.t2o;
				}
			}
			this.blackKing_ = c7j.d4d;
		}
		if (c7j.t7p())
		{
			this.w7y[c7j.i9e] = c7j.q1n;
		}
	}
	this.i0x();
}

w6p()
{
  return this.whiteKing_;
}

n1f()
{
  return this.blackKing_;
}

x5u()
{
	return this.l6c.q1d;
}

l1o()
{
	return this.l6c.a8t;
}

m0z()
{
	return this.l6c.e1q;
}

h8l()
{
	return this.l6c.d9z;
}

c4b()
{
  return this.l6c.c4b;
}

a4l()
{
  return this.l6c.a4l;
}

a0r()
{
  return this.l6c.a0r;
}

x4q()
{
  return this.l6c.x4q;
}

l7r()
{
  return this.l6c.l7r;
}

n7w()
{
  return this.l6c.n7w;
}

t7e()
{
  return this.l6c.t7e;
}

d0a()
{
	return this.l6c.u1y;
}

}
const m1w = 0;
const u4u   = 1;
const c8w  = m1w;

function z8h()
{
  let f1w = [];
	f1w.push("CBurnettt (Lichess)");
	f1w.push("Merida (Lichess)");
	return f1w;
}

class m1z
{

constructor()
{
	this.p1d = new j7i();
	this.s5p = null;
}

z4e()
{
	let k0h = new m1z();
	k0h.p1d = this.p1d.z4e();
	k0h.s5p = null;
	if (this.s5p)
	{
		k0h.s5p = this.s5p.z4e();
	}
	return k0h;
}

q0w(o8d)
{
	if (this.p1d.t5w(o8d))
	{
		return false;
	}
	return true;
}

t5w(o8d)
{
	return !this.q0w(o8d);
}

f7c()
{
	return this.p1d.f7c();
}

d4d()
{
	return this.p1d.d4d;
}

z4d()
{
	return this.p1d.z4d;
}

v5m()
{
	return this.p1d.v5m;
}

o9x()
{
	return this.p1d.o9x;
}

i9e()
{
	return this.p1d.i9e;
}

q1n()
{
	return this.p1d.q1n;
}

g8c()
{
	return this.p1d.g8c();
}

c0t()
{
	return this.p1d.c0t();
}

a7b()
{
	return this.p1d.a7b();
}

t4b()
{
	return this.p1d.t4b();
}

l3z()
{
	return this.p1d.l3z();
}

t7p()
{
	return this.p1d.t7p();
}

l6r()
{
	if (this.s5p == null)
	{
		this.s5p = new f6g();
	}
}

r9f()
{
	if (this.s5p)
	{
		if (this.s5p.f7c())
		{
			this.a4u();
		}
	}
}

o8m()
{
	return this.s5p != null;
}

a4u()
{
	this.s5p = null;
}

q4s(r2w)
{
	this.l6r();
	this.s5p = r2w.z4e();
}

m3s()
{
	return this.s5p;
}

n0i(o8d)
{
	if (this.s5p && !o8d.s5p)
	{
		return false;
	}
	if (!this.s5p && o8d.s5p)
	{
		return false;
	}
	if (!this.s5p && !o8d.s5p)
	{
		return true;
	}
	return this.s5p.q0w(o8d.s5p);
}

n2u()
{
	if (this.s5p)
	{
		this.s5p.u4n = '';
		this.r9f();
	}
}

f3o()
{
	if (this.s5p)
	{
		return this.s5p.u4n.length != 0;
	}
	else
	{
		return false;
	}
}

u4n()
{
	if (this.s5p)
	{
		return this.s5p.u4n;
	}
	else
	{
		return '';
	}
}

q0s(m3t)
{
	this.l6r();
	this.s5p.u4n = m3t;
	this.r9f();
}

i5y()
{
	if (this.s5p)
	{
		this.s5p.k2c = '';
		this.r9f();
	}
}

j9u()
{
	if (this.s5p)
	{
		return this.s5p.k2c.length != 0;
	}
	else
	{
		return false;
	}
}

k2c()
{
	if (this.s5p)
	{
		return this.s5p.k2c;
	}
	else
	{
		return '';
	}
}

g9m(m3t)
{
	this.l6r();
	this.s5p.k2c = m3t;
	this.r9f();
}

v8w()
{
	if (this.s5p)
	{
		this.s5p.s4h = z1r.i6p;
		this.r9f();
	}
}

f6c()
{
	if (this.s5p)
	{
		return this.s5p.s4h != z1r.i6p;
	}
	else
	{
		return false;
	}
}

s4h()
{
	if (this.s5p)
	{
		return this.s5p.s4h;
	}
	else
	{
		return z1r.i6p;
	}
}

d0w(s4h)
{
	this.l6r();
	this.s5p.s4h = s4h;
	this.r9f();
}

e8o()
{
	if (this.s5p)
	{
		this.s5p.style = l9b.i6p;
		this.r9f();
	}
}

s2h()
{
	if (this.s5p)
	{
		return this.s5p.style != l9b.i6p;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.s5p)
	{
		return this.s5p.style;
	}
	else
	{
		return l9b.i6p;
	}
}

d7g(style)
{
	this.l6r();
	this.s5p.style = style;
	this.r9f();
}

b1p()
{
	if (this.s5p)
	{
		this.s5p.value = c3i.i6p;
		this.r9f();
	}
}

o8u()
{
	if (this.s5p)
	{
		return this.s5p.value != c3i.i6p;
	}
	else
	{
		return false;
	}
}

value()
{
	if (this.s5p)
	{
		return this.s5p.value;
	}
	else
	{
		return c3i.i6p;
	}
}

s0b(value)
{
	this.l6r();
	this.s5p.value = value;
	this.r9f();
}

v4w()
{
	if (this.s5p)
	{
		this.s5p.k2p = f7p.i6p;
		this.r9f();
	}
}

t9n()
{
	if (this.s5p)
	{
		return this.s5p.k2p != f7p.i6p;
	}
	else
	{
		return false;
	}
}

k2p()
{
	if (this.s5p)
	{
		return this.s5p.k2p;
	}
	else
	{
		return f7p.i6p;
	}
}

h9r(k2p)
{
	this.l6r();
	this.s5p.k2p = k2p;
	this.r9f();
}

n1w()
{
  
}

q3h()
{
	if (this.s5p)
	{
 		if (this.s5p.u4n.length != 0)
    {
      let b9l = this.s5p.u4n.indexOf("[#]");
      return b9l != -1;
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

n8b()
{
  
}

d8c()
{
	if (this.s5p)
	{
		this.s5p.a5n = false;
		this.r9f();
	}
}

g5i()
{
	if (this.s5p)
	{
		return this.s5p.a5n;
	}
	else
	{
		return false;
	}
}

l9f()
{
	this.l6r();
	this.s5p.a5n = true;
	this.r9f();
}

p6e()
{
	if (this.s5p)
	{
		this.s5p.x8r = false;
		this.r9f();
	}
}

y5z()
{
	if (this.s5p)
	{
		return this.s5p.x8r;
	}
	else
	{
		return false;
	}
}

s6r()
{
	this.l6r();
	this.s5p.x8r = true;
	this.r9f();
}

m5p()
{
	if (this.s5p)
	{
		this.s5p.c6n.p7a();
		this.s5p.q7k.p7a();
		this.r9f();
	}
}

b3i()
{
	if (this.s5p)
	{
		return this.h2g() || this.l8w();
	}
	else
	{
		return false;
	}
}

y7b()
{
	if (this.s5p)
	{
		this.s5p.c6n.p7a();
		this.r9f();
	}
}

h2g()
{
	if (this.s5p)
	{
		return !this.s5p.c6n.f7c();
	}
	else
	{
		return false;
	}
}

c6n()
{
	if (this.s5p)
	{
		return this.s5p.c6n.z4e();
	}
	else
	{
		return new n3j();
	}
}

f4h(c6n)
{
	this.l6r();
	this.s5p.c6n = c6n.z4e();
	this.r9f();
}

n3m()
{
	if (this.s5p)
	{
		this.s5p.q7k.p7a();
		this.r9f();
	}
}

l8w()
{
	if (this.s5p)
	{
		return !this.s5p.q7k.f7c();
	}
	else
	{
		return false;
	}
}

q7k()
{
	if (this.s5p)
	{
		return this.s5p.q7k.z4e();
	}
	else
	{
		return new k4l();
	}
}

j9q(q7k)
{
	this.l6r();
	this.s5p.q7k = q7k.z4e();
	this.r9f();
}

m0t()
{
	if (this.s5p)
	{
		this.s5p.s8d.i9b();
		this.r9f();
	}
}

g1d()
{
	if (this.s5p)
	{
		return this.s5p.s8d.q0i();
	}
	else
	{
		return false;
	}
}

s8d()
{
	if (this.s5p)
	{
		return this.s5p.s8d.z4e();
	}
	else
	{
		return new f2p();
	}
}

n3q(s8d)
{
	this.l6r();
	this.s5p.s8d = s8d.z4e();
	this.r9f();
}

a5a(x2v)
{
	this.p1d = x2v.z4e();
	this.s5p = null;
}

x2v()
{
	let b5k = new j7i();
  return Object.assign(b5k, this.p1d);
}

}

function a7k(x2v)
{
  let i2z = new m1z();
  i2z.a5a(x2v);
  return i2z;
}
class j7i
{

constructor()
{
	this.d4d = f1k;
	this.v5m = r4u.f7c;
	this.z4d = f1k;
	this.o9x = r4u.f7c;
	this.i9e = f1k;
	this.v0f = r4u.f7c;
	this.type = u5u.i6p;
}

z4e()
{
	let b5k = new j7i();
	b5k.d4d = this.d4d;
	b5k.v5m = this.v5m;
	b5k.z4d = this.z4d;
	b5k.o9x = this.o9x;
	b5k.i9e = this.i9e;
	b5k.q1n = this.q1n;
	b5k.type = this.type;
	return b5k;
}

q0w(o8d)
{
	if (
		this.d4d != o8d.d4d ||
		this.v5m != o8d.v5m ||
		this.z4d != o8d.z4d ||
		this.o9x != o8d.o9x ||
		this.i9e != o8d.i9e ||
		this.q1n != o8d.q1n ||
    this.type != o8d.type)
	{
		return false;
	}
	else
	{
		return true;
	}
}

t5w(o8d)
{
	return !this.q0w(o8d);
}

f7c()
{
	return this.type == u5u.i6p;
}

c0t()
{
	return this.v5m == r4u.z0j ||
		this.v5m == r4u.f3a ||
    this.v5m == r4u.m1p ||
    this.v5m == r4u.l5x ||
    this.v5m == r4u.n3b ||
    this.v5m == r4u.w6p;
}

a7b()
{
	return this.v5m == r4u.f1o ||
		this.v5m == r4u.s7h ||
    this.v5m == r4u.d5l ||
    this.v5m == r4u.t2o ||
    this.v5m == r4u.n8i ||
    this.v5m == r4u.n1f;
}

t7p()
{
	return this.i9e != f1k;
}

t4b()
{
	return this.v5m != this.o9x;
}

a0k()
{
  return this.type == u5u.a8n;
}

l3z()
{
	return this.type == u5u.i6p;
}

t2p()
{
	return this.type == u5u.g2x;
}

g8c()
{
	if (this.t7p())
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

function y7q(f1l, x2v)
{
	if (x2v.type == u5u.j5k)
	{
		f1l[x2v.z4d] = f1l[x2v.d4d];
		f1l[x2v.d4d] = r4u.f7c;
	}
	else if (x2v.type == u5u.a8n)
	{
		let i9e = (x2v.z4d - 8);
		f1l[i9e] = r4u.f7c;
		f1l[x2v.z4d] = r4u.z0j;
		f1l[x2v.d4d] = r4u.f7c;
	}
	else if (x2v.type == u5u.z5d)
	{
		f1l[x2v.z4d] = r4u.n3b;
		f1l[x2v.d4d] = r4u.f7c;
	}
	else if (x2v.type == u5u.h0w)
	{
		f1l[x2v.z4d] = r4u.l5x;
		f1l[x2v.d4d] = r4u.f7c;
	}
	else if (x2v.type == u5u.k8w)
	{
		f1l[x2v.z4d] = r4u.m1p;
		f1l[x2v.d4d] = r4u.f7c;
	}
	else if (x2v.type == u5u.f5e)
	{
		f1l[x2v.z4d] = r4u.f3a;
		f1l[x2v.d4d] = r4u.f7c;
	}
}

function s7b(f1l, x2v)
{
	if (x2v.type == u5u.j5k)
	{
		f1l[x2v.z4d] = f1l[x2v.d4d];
		f1l[x2v.d4d] = r4u.f7c;
	}
	else if (x2v.type == u5u.a8n)
	{
		let i9e = (x2v.z4d + 8);
		f1l[i9e] = r4u.f7c;
		f1l[x2v.z4d] = r4u.f1o;
		f1l[x2v.d4d] = r4u.f7c;
	}
	else if (x2v.type == u5u.z5d)
	{
		f1l[x2v.z4d] = r4u.n8i;
		f1l[x2v.d4d] = r4u.f7c;
	}
	else if (x2v.type == u5u.h0w)
	{
		f1l[x2v.z4d] = r4u.t2o;
		f1l[x2v.d4d] = r4u.f7c;
	}
	else if (x2v.type == u5u.k8w)
	{
		f1l[x2v.z4d] = r4u.d5l;
		f1l[x2v.d4d] = r4u.f7c;
	}
	else if (x2v.type == u5u.f5e)
	{
		f1l[x2v.z4d] = r4u.s7h;
		f1l[x2v.d4d] = r4u.f7c;
	}
}

function j2f(f1l, x2v)
{
	if (x2v.z4d == s2j)
	{
		f1l[x2v.z4d] = r4u.w6p;
		f1l[x2v.d4d] = r4u.f7c;
		f1l[a1] = r4u.f7c; 
		f1l[q3b] = r4u.l5x;
	}
	else
	{
		f1l[x2v.z4d] = r4u.w6p;
		f1l[x2v.d4d] = r4u.f7c;
		f1l[m0d] = r4u.f7c; 
		f1l[b0h] = r4u.l5x;
	}
}

function x2w(f1l, x2v)
{
	if (x2v.z4d == h9y)
	{
		f1l[x2v.z4d] = r4u.n1f;
		f1l[x2v.d4d] = r4u.f7c;
		f1l[a8] = r4u.f7c; 
		f1l[i0u] = r4u.t2o;
	}
	else
	{
		f1l[x2v.z4d] = r4u.n1f;
		f1l[x2v.d4d] = r4u.f7c;
		f1l[e9f] = r4u.f7c; 
		f1l[w2r] = r4u.t2o;
	}
}

function d4j(f1l, x2v, m7e)
{
	if (x2v.z4d == s2j)
	{
		f1l[x2v.z4d] = r4u.w6p;
		f1l[x2v.d4d] = r4u.f7c;
		if (m7e.x4q != x2v.z4d)
		{
			f1l[m7e.x4q] = r4u.f7c;
		}
		f1l[q3b] = r4u.l5x;
	}
	else if (x2v.z4d == s9p)
	{
		f1l[x2v.z4d] = r4u.w6p;
		f1l[x2v.d4d] = r4u.f7c;
		if (m7e.a0r != x2v.z4d)
		{
			f1l[m7e.a0r] = r4u.f7c;
		}
		f1l[b0h] = r4u.l5x;
	}
}

function h8d(f1l, x2v, m7e)
{
	if (x2v.z4d == h9y)
	{
		f1l[x2v.z4d] = r4u.n1f;
		f1l[x2v.d4d] = r4u.f7c;
		if (m7e.n7w != x2v.z4d)
		{
			f1l[m7e.n7w] = r4u.f7c;
		}
		f1l[i0u] = r4u.t2o;
	}
	else if (x2v.z4d == z4j)
	{
		f1l[x2v.z4d] = r4u.n1f;
		f1l[x2v.d4d] = r4u.f7c;
		if (m7e.l7r != x2v.z4d)
		{
			f1l[m7e.l7r] = r4u.f7c;
		}
		f1l[w2r] = r4u.t2o;
	}
}

function y8w(e3i, x2v)
{
	let g0u = e3i.w6p();
	if (g0u == f1k) return true;
	if (x2v.v5m == r4u.w6p)
	{
		g0u = x2v.z4d;
	}
	let f1l = e3i.f1l();
	if (x2v.type == u5u.g2x)
	{
		if (e3i.d0a())
		{
			d4j(f1l, x2v, e3i.m7e());
		}
		else
		{
			j2f(f1l, x2v);
		}
	}
	else
	{
		y7q(f1l, x2v);
	}
	return !p6v(f1l, g0u);
}

function p6b(e3i, x2v)
{
	let g0u = e3i.n1f();
	if (g0u == f1k) return true;
	if (x2v.v5m == r4u.n1f)
	{
		g0u = x2v.z4d;
	}
	let f1l = e3i.f1l();
	if (x2v.type == u5u.g2x)
	{
		if (e3i.d0a())
		{
			h8d(f1l, x2v, e3i.m7e());
		}
		else
		{
			x2w(f1l, x2v);
		}
	}
	else
	{
		s7b(f1l, x2v);
	}
	return !o1m(f1l, g0u);
}

function e4m(z1l, e3i, d4d)
{
	if (a3p(d4d) == s6i)
	{
		return;
	}
	e8t(z1l, e3i, d4d);
	let z4d = northWestSquare[d4d];
	if (z4d != f1k)
	{
		r4v(z1l, e3i, d4d, z4d);
	}
	z4d = northEastSquare[d4d];
	if (z4d != f1k)
	{
		r4v(z1l, e3i, d4d, z4d);
	}
}

function x3o(z1l, e3i, d4d)
{
	if (a3p(d4d) == rank_1)
	{
		return;
	}
	f3z(z1l, e3i, d4d);
	let z4d = southEastSquare[d4d];
	if (z4d != f1k)
	{
		v5v(z1l, e3i, d4d, z4d);
	}
	z4d = southWestSquare[d4d];
	if (z4d != f1k)
	{
		v5v(z1l, e3i, d4d, z4d);
	}
}

function e8t(z1l, e3i, d4d)
{
	let z4d = (d4d + j5l);
	if (e3i.l4f(z4d))
	{
		if (a3p(d4d) == b9y)
		{
			k7a(z1l, e3i, d4d, z4d);
		}
		else
		{
			d4y(z1l, e3i, d4d, z4d, u5u.j5k);
			if (a3p(d4d) == f3f)
			{
				let z4d = (d4d + j5l + j5l);
				if (e3i.l4f(z4d))
				{
					d4y(z1l, e3i, d4d, z4d, u5u.j5k);
				}
			}
		}
	}
}

function f3z(z1l, e3i, d4d)
{
	let z4d = (d4d + z2i);
	if (e3i.l4f(z4d))
	{
		if (a3p(d4d) == f3f)
		{
			f6r(z1l, e3i, d4d, z4d);
		}
		else
		{
			d4y(z1l, e3i, d4d, z4d, u5u.j5k);
			if (a3p(d4d) == b9y)
			{
				let z4d = (d4d + z2i + z2i);
				if (e3i.l4f(z4d))
				{
					d4y(z1l, e3i, d4d, z4d, u5u.j5k);
				}
			}
		}
	}
}

function r4v(z1l, e3i, d4d, z4d)
{
	if (!e3i.a7b(z4d))
	{
		return;
	}
	if (a3p(d4d) == b9y)
	{
		a6u(z1l, e3i, d4d, z4d);
	}
	else
	{
		r1e(z1l, e3i, d4d, z4d, u5u.j5k);
	}
}

function v5v(z1l, e3i, d4d, z4d)
{
	if (!e3i.c0t(z4d))
	{
		return;
	}
	if (a3p(d4d) == f3f)
	{
		e0q(z1l, e3i, d4d, z4d);
	}
	else
	{
		r1e(z1l, e3i, d4d, z4d, u5u.j5k);
	}
}

function w4x(z1l, e3i, d4d, e3c)
{
	for (const z4d of e3c)
	{
		if (e3i.l4f(z4d))
		{
			d4y(z1l, e3i, d4d, z4d, u5u.j5k);
		}
		else if (e3i.a7b(z4d))
		{
			r1e(z1l, e3i, d4d, z4d, u5u.j5k);
		}
	}
}

function a4v(z1l, e3i, d4d, e3c)
{
	for (const z4d of e3c)
	{
		if (e3i.l4f(z4d))
		{
			d4y(z1l, e3i, d4d, z4d, u5u.j5k);
		}
		else if (e3i.c0t(z4d))
		{
			r1e(z1l, e3i, d4d, z4d, u5u.j5k);
		}
	}
}

function o0l(z1l, e3i, d4d)
{
	w4x(z1l, e3i, d4d, knightSquares[d4d]);
}

function y3x(z1l, e3i, d4d)
{
	a4v(z1l, e3i, d4d, knightSquares[d4d]);
}

function m2e(z1l, e3i, d4d)
{
	m5l(z1l, e3i, d4d, northEastSquares[d4d]);
	m5l(z1l, e3i, d4d, southEastSquares[d4d]);
	m5l(z1l, e3i, d4d, southWestSquares[d4d]);
	m5l(z1l, e3i, d4d, northWestSquares[d4d]);
}

function g3o(z1l, e3i, d4d)
{
	w3n(z1l, e3i, d4d, northEastSquares[d4d]);
	w3n(z1l, e3i, d4d, southEastSquares[d4d]);
	w3n(z1l, e3i, d4d, southWestSquares[d4d]);
	w3n(z1l, e3i, d4d, northWestSquares[d4d]);
}

function n8m(z1l, e3i, d4d)
{
	m5l(z1l, e3i, d4d, northSquares[d4d]);
	m5l(z1l, e3i, d4d, eastSquares[d4d]);
	m5l(z1l, e3i, d4d, southSquares[d4d]);
	m5l(z1l, e3i, d4d, westSquares[d4d]);
}

function q5y(z1l, e3i, d4d)
{
	w3n(z1l, e3i, d4d, northSquares[d4d]);
	w3n(z1l, e3i, d4d, eastSquares[d4d]);
	w3n(z1l, e3i, d4d, southSquares[d4d]);
	w3n(z1l, e3i, d4d, westSquares[d4d]);
}

function f0i(z1l, e3i, d4d)
{
	m5l(z1l, e3i, d4d, northSquares[d4d]);
	m5l(z1l, e3i, d4d, northEastSquares[d4d]);
	m5l(z1l, e3i, d4d, eastSquares[d4d]);
	m5l(z1l, e3i, d4d, southEastSquares[d4d]);
	m5l(z1l, e3i, d4d, southSquares[d4d]);
	m5l(z1l, e3i, d4d, southWestSquares[d4d]);
	m5l(z1l, e3i, d4d, westSquares[d4d]);
	m5l(z1l, e3i, d4d, northWestSquares[d4d]);
}

function w9n(z1l, e3i, d4d)
{
	w3n(z1l, e3i, d4d, northSquares[d4d]);
	w3n(z1l, e3i, d4d, northEastSquares[d4d]);
	w3n(z1l, e3i, d4d, eastSquares[d4d]);
	w3n(z1l, e3i, d4d, southEastSquares[d4d]);
	w3n(z1l, e3i, d4d, southSquares[d4d]);
	w3n(z1l, e3i, d4d, southWestSquares[d4d]);
	w3n(z1l, e3i, d4d, westSquares[d4d]);
	w3n(z1l, e3i, d4d, northWestSquares[d4d]);
}

function u5g(z1l, e3i, d4d)
{
	a6a(z1l, e3i, d4d, kingSquares[d4d]);
}

function u2v(z1l, e3i, d4d)
{
	t2c(z1l, e3i, d4d, kingSquares[d4d]);
}

function m5l(z1l, e3i, d4d, e3c)
{
	for (const z4d of e3c)
	{
		if (e3i.l4f(z4d))
		{
			d4y(z1l, e3i, d4d, z4d, u5u.j5k);
		}
		else if (e3i.c0t(z4d))
		{
			break;
		}
		else
		{
			r1e(z1l, e3i, d4d, z4d, u5u.j5k);
			break;
		}
	}
}

function w3n(z1l, e3i, d4d, e3c)
{
	for (const z4d of e3c)
	{
		if (e3i.l4f(z4d))
		{
			d4y(z1l, e3i, d4d, z4d, u5u.j5k);
		}
		else if (e3i.a7b(z4d))
		{
			break;
		}
		else
		{
			r1e(z1l, e3i, d4d, z4d, u5u.j5k);
			break;
		}
	}
}

function a6a(z1l, e3i, d4d, e3c)
{
	for (const z4d of e3c)
	{
		if (e3i.l4f(z4d))
		{
			d4y(z1l, e3i, d4d, z4d, u5u.j5k);
		}
		else if (e3i.a7b(z4d))
		{
			r1e(z1l, e3i, d4d, z4d, u5u.j5k);
		}
	}
}

function t2c(z1l, e3i, d4d, e3c)
{
	for (const z4d of e3c)
	{
		if (e3i.l4f(z4d))
		{
			d4y(z1l, e3i, d4d, z4d, u5u.j5k);
		}
		else if (e3i.c0t(z4d))
		{
			r1e(z1l, e3i, d4d, z4d, u5u.j5k);
		}
	}
}

function w9i(left, a9r)
{
	let s6n = [];
	if (left > a9r)
	{
    let i1u = left;
    left = a9r;
    a9r = i1u;
	}
	for (let i = left + 1; i < a9r; i++)
	{
		s6n.push(i);
	}
	return s6n;
}

function h2u(z1l, e3i)
{
	if (!e3i.p3k(e3i.c4b()))
	{
		return;
	}
	if (!e3i.w7f(e3i.x4q()))
	{
		return;
	}
	let h0p = w9i(e3i.x4q(), q3b);
  for (const k2d of h0p)
	{
		if (k2d != e3i.c4b())
		{
			if (!e3i.l4f(k2d))
			{
				return;
			}
		}
	}
	let g5b = w9i(e3i.c4b(), s2j);
  for (const k2d of g5b)
	{
		if (k2d != e3i.x4q())
		{
			if (!e3i.l4f(k2d))
			{
				return;
			}
		}
	}
  for (const k2d of g5b)
	{
		if (y8l(e3i, k2d))
		{
			return;
		}
	}
	if (y8l(e3i, e3i.c4b()))
	{
		return;
	}
	if (e3i.c4b() != s2j)
	{
		if (!e3i.l4f(s2j))
		{
			if (s2j != e3i.x4q())
			{
				return;
			}
		}
	}
	if (e3i.x4q() != q3b)
	{
		if (!e3i.l4f(q3b))
		{
			if (q3b != e3i.c4b())
			{
				return;
			}
		}
	}
	d4y(z1l, e3i, e3i.c4b(), s2j, u5u.g2x);
}

function u7j(z1l, e3i)
{
	if (!e3i.p3k(e3i.c4b()))
	{
		return;
	}
	if (!e3i.w7f(e3i.a0r()))
	{
		return;
	}
	let h0p = w9i(e3i.a0r(), b0h);
  for (const k2d of h0p)
	{
		if (k2d != e3i.c4b())
		{
			if (!e3i.l4f(k2d))
			{
				return;
			}
		}
	}
	let g5b = w9i(e3i.c4b(), s9p);
  for (const k2d of g5b)
	{
		if (k2d != e3i.a0r())
		{
			if (!e3i.l4f(k2d))
			{
				return;
			}
		}
	}
  for (const k2d of g5b)
	{
		if (y8l(e3i, k2d))
		{
			return;
		}
	}
	if (y8l(e3i, e3i.c4b()))
	{
		return;
	}
	if (e3i.c4b() != s9p)
	{
		if (!e3i.l4f(s9p))
		{
			if (s9p != e3i.a0r())
			{
				return;
			}
		}
	}
	if (e3i.a0r() != b0h)
	{
		if (!e3i.l4f(b0h))
		{
			if (b0h != e3i.c4b())
			{
				return;
			}
		}
	}
	d4y(z1l, e3i, e3i.c4b(), s9p, u5u.g2x);
}

function c7h(z1l, e3i)
{
	if (!e3i.e2s(e3i.a4l()))
	{
		return;
	}
	if (!e3i.x4w(e3i.l7r()))
	{
		return;
	}
	let h0p = w9i(e3i.l7r(), w2r);
  for (const k2d of h0p)
	{
		if (k2d != e3i.a4l())
		{
			if (!e3i.l4f(k2d))
			{
				return;
			}
		}
	}
	let g5b = w9i(e3i.a4l(), z4j);
  for (const k2d of g5b)
	{
		if (k2d != e3i.l7r())
		{
			if (!e3i.l4f(k2d))
			{
				return;
			}
		}
	}
  for (const k2d of g5b)
	{
		if (g1r(e3i, k2d))
		{
			return;
		}
	}
	if (g1r(e3i, e3i.a4l()))
	{
		return;
	}
	if (e3i.a4l() != z4j)
	{
		if (!e3i.l4f(z4j))
		{
			if (z4j != e3i.l7r())
			{
				return;
			}
		}
	}
	if (e3i.l7r() != w2r)
	{
		if (!e3i.l4f(w2r))
		{
			if (w2r != e3i.a4l())
			{
				return;
			}
		}
	}
	d4y(z1l, e3i, e3i.a4l(), z4j, u5u.g2x);
}

function m1a(z1l, e3i)
{
	if (!e3i.e2s(e3i.a4l()))
	{
		return;
	}
	if (!e3i.x4w(e3i.n7w()))
	{
		return;
	}
	let h0p = w9i(e3i.n7w(), i0u);
  for (const k2d of h0p)
	{
		if (k2d != e3i.a4l())
		{
			if (!e3i.l4f(k2d))
			{
				return;
			}
		}
	}
	let g5b = w9i(e3i.a4l(), h9y);
  for (const k2d of g5b)
	{
		if (k2d != e3i.n7w())
		{
			if (!e3i.l4f(k2d))
			{
				return;
			}
		}
	}
  for (const k2d of g5b)
	{
		if (g1r(e3i, k2d))
		{
			return;
		}
	}
	if (g1r(e3i, e3i.a4l()))
	{
		return;
	}
	if (e3i.a4l() != h9y)
	{
		if (!e3i.l4f(h9y))
		{
			if (h9y != e3i.n7w())
			{
				return;
			}
		}
	}
	if (e3i.n7w() != i0u)
	{
		if (!e3i.l4f(i0u))
		{
			if (i0u != e3i.a4l())
			{
				return;
			}
		}
	}
	d4y(z1l, e3i, e3i.a4l(), h9y, u5u.g2x);
}

function b2j(z1l, e3i)
{
	if (!e3i.p3k(e3i.c4b()))
	{
		return;
	}
	if (!e3i.w7f(e3i.x4q()))
	{
		return;
	}
	if (!e3i.l4f(a3m))
	{
		return;
	}
	if (!e3i.l4f(y7r))
	{
		return;
	}
	if (!e3i.l4f(k0i))
	{
		return;
	}
	if (y8l(e3i, e3i.c4b()))
	{
		return;
	}
	if (y8l(e3i, k0i))
	{
		return;
	}
	d4y(z1l, e3i, e3i.c4b(), s2j, u5u.g2x);
}

function g8p(z1l, e3i)
{
	if (!e3i.p3k(e3i.c4b()))
	{
		return;
	}
	if (!e3i.w7f(e3i.a0r()))
	{
		return;
	}
	if (!e3i.l4f(w9b))
	{
		return;
	}
	if (!e3i.l4f(g0r))
	{
		return;
	}
	if (y8l(e3i, e3i.c4b()))
	{
		return;
	}
	if (y8l(e3i, w9b))
	{
		return;
	}
	d4y(z1l, e3i, e3i.c4b(), s9p, u5u.g2x);
}

function q0l(z1l, e3i)
{
	if (!e3i.e2s(e3i.a4l()))
	{
		return;
	}
	if (!e3i.x4w(e3i.n7w()))
	{
		return;
	}
	if (!e3i.l4f(b7g))
	{
		return;
	}
	if (!e3i.l4f(i5x))
	{
		return;
	}
	if (!e3i.l4f(a6e))
	{
		return;
	}
	if (g1r(e3i, e3i.a4l()))
	{
		return;
	}
	if (g1r(e3i, a6e))
	{
		return;
	}
	d4y(z1l, e3i, e3i.a4l(), h9y, u5u.g2x);
}

function s0h(z1l, e3i)
{
	if (!e3i.e2s(e3i.a4l()))
	{
		return;
	}
	if (!e3i.x4w(e3i.l7r()))
	{
		return;
	}
	if (!e3i.l4f(j7j))
	{
		return;
	}
	if (!e3i.l4f(r1l))
	{
		return;
	}
	if (g1r(e3i, e3i.a4l()))
	{
		return;
	}
	if (g1r(e3i, j7j))
	{
		return;
	}
	d4y(z1l, e3i, e3i.a4l(), z4j, u5u.g2x);
}

function e6d(z1l, e3i)
{
	if (e3i.d0a())
	{
		h2u(z1l, e3i);
	}
	else
	{
		b2j(z1l, e3i);
	}
}

function n6b(z1l, e3i)
{
	if (e3i.d0a())
	{
		u7j(z1l, e3i);
	}
	else
	{
		g8p(z1l, e3i);
	}
}

function c8s(z1l, e3i)
{
	if (e3i.l1o())
	{
		e6d(z1l, e3i);
	}
	if (e3i.x5u())
	{
		n6b(z1l, e3i);
	}
}

function i8m(z1l, e3i)
{
	if (e3i.d0a())
	{
		m1a(z1l, e3i);
	}
	else
	{
		q0l(z1l, e3i);
	}
}

function x2j(z1l, e3i)
{
	if (e3i.d0a())
	{
		c7h(z1l, e3i);
	}
	else
	{
		s0h(z1l, e3i);
	}
}

function e6u(z1l, e3i)
{
	if (e3i.h8l())
	{
		i8m(z1l, e3i);
	}
	if (e3i.m0z())
	{
		x2j(z1l, e3i);
	}
}

function l8q(z1l, e3i)
{
	if (e3i.t7e() == f1k)
	{
		return;
	}
	if (a3p(e3i.t7e()) != t7m)
	{
		return;
	}
	if (!e3i.l4f(e3i.t7e()))
	{
		return;
	}
	let p2o = (e3i.t7e() + 8);
	if (!e3i.l4f(p2o))
	{
		return;
	}
	let l8e = (e3i.t7e() - 8);
	if (!e3i.j0l(l8e))
	{
		return;
	}
	let c3m = westSquare[l8e];
	if (c3m != f1k)
	{
		if (e3i.m8u(c3m))
		{
			g1c(z1l, e3i, c3m, r4u.z0j, e3i.t7e(),
				r4u.z0j, l8e, r4u.f1o, u5u.a8n);
		}
	}
	c3m = eastSquare[l8e];
	if (c3m != f1k)
	{
		if (e3i.m8u(c3m))
		{
			g1c(z1l, e3i, c3m, r4u.z0j, e3i.t7e(),
				r4u.z0j, l8e, r4u.f1o, u5u.a8n);
		}
	}
}

function y3v(z1l, e3i)
{
	if (e3i.t7e() == f1k)
	{
		return;
	}
	if (a3p(e3i.t7e()) != n1c)
	{
		return;
	}
	if (!e3i.l4f(e3i.t7e()))
	{
		return;
	}
	let p2o = (e3i.t7e() - 8);
	if (!e3i.l4f(p2o))
	{
		return;
	}
	let l8e = (e3i.t7e() + 8);
	if (!e3i.m8u(l8e))
	{
		return;
	}
	let c3m = westSquare[l8e];
	if (c3m != f1k)
	{
		if (e3i.j0l(c3m))
		{
			g1c(z1l, e3i, c3m, r4u.f1o, e3i.t7e(),
				r4u.f1o, l8e, r4u.z0j, u5u.a8n);
		}
	}
	c3m = eastSquare[l8e];
	if (c3m != f1k)
	{
		if (e3i.j0l(c3m))
		{
			g1c(z1l, e3i, c3m, r4u.f1o, e3i.t7e(),
				r4u.f1o, l8e, r4u.z0j, u5u.a8n);
		}
	}
}

function g1c(z1l, e3i, d4d, v5m, z4d, o9x, i9e, q1n, type)
{
  let c7j = new j7i();
	c7j.d4d = d4d;
	c7j.v5m = v5m;
	c7j.z4d = z4d;
	c7j.o9x = o9x;
	c7j.i9e = i9e;
	c7j.q1n = q1n;
	c7j.type = type;
	if (c0t(v5m))
	{
		if (y8w(e3i, c7j))
		{
			z1l.push(c7j);
		}
	}
	else
	{
		if (p6b(e3i, c7j))
		{
			z1l.push(c7j);
		}
	}
}

function d4y(z1l, e3i, d4d, z4d, type)
{
	let h1e = e3i.j0s(d4d);
	g1c(z1l, e3i, d4d, h1e, z4d, h1e, f1k, r4u.f7c, type);
}

function r1e(z1l, e3i, d4d, z4d, type)
{
	let h1e = e3i.j0s(d4d);
	let q1n = e3i.j0s(z4d);
	g1c(z1l, e3i, d4d, h1e, z4d, h1e, z4d, q1n, type);
}

function k7a(z1l, e3i, d4d, z4d)
{
	g1c(z1l, e3i, d4d, r4u.z0j, z4d, r4u.f3a, f1k, r4u.f7c, u5u.f5e);
	g1c(z1l, e3i, d4d, r4u.z0j, z4d, r4u.m1p, f1k, r4u.f7c, u5u.k8w);
	g1c(z1l, e3i, d4d, r4u.z0j, z4d, r4u.l5x, f1k, r4u.f7c, u5u.h0w);
	g1c(z1l, e3i, d4d, r4u.z0j, z4d, r4u.n3b, f1k, r4u.f7c, u5u.z5d);
}

function f6r(z1l, e3i, d4d, z4d)
{
	g1c(z1l, e3i, d4d, r4u.f1o, z4d, r4u.s7h, f1k, r4u.f7c, u5u.f5e);
	g1c(z1l, e3i, d4d, r4u.f1o, z4d, r4u.d5l, f1k, r4u.f7c, u5u.k8w);
	g1c(z1l, e3i, d4d, r4u.f1o, z4d, r4u.t2o, f1k, r4u.f7c, u5u.h0w);
	g1c(z1l, e3i, d4d, r4u.f1o, z4d, r4u.n8i, f1k, r4u.f7c, u5u.z5d);
}

function a6u(z1l, e3i, d4d, z4d)
{
	let q1n = e3i.j0s(z4d);
	g1c(z1l, e3i, d4d, r4u.z0j, z4d, r4u.f3a, z4d, q1n, u5u.f5e);
	g1c(z1l, e3i, d4d, r4u.z0j, z4d, r4u.m1p, z4d, q1n, u5u.k8w);
	g1c(z1l, e3i, d4d, r4u.z0j, z4d, r4u.l5x, z4d, q1n, u5u.h0w);
	g1c(z1l, e3i, d4d, r4u.z0j, z4d, r4u.n3b, z4d, q1n, u5u.z5d);
}

function e0q(z1l, e3i, d4d, z4d)
{
	let q1n = e3i.j0s(z4d);
	g1c(z1l, e3i, d4d, r4u.f1o, z4d, r4u.s7h, z4d, q1n, u5u.f5e);
	g1c(z1l, e3i, d4d, r4u.f1o, z4d, r4u.d5l, z4d, q1n, u5u.k8w);
	g1c(z1l, e3i, d4d, r4u.f1o, z4d, r4u.t2o, z4d, q1n, u5u.h0w);
	g1c(z1l, e3i, d4d, r4u.f1o, z4d, r4u.n8i, z4d, q1n, u5u.z5d);
}

function n3p(z1l, e3i, z4d)
{
	let d4d = (z4d - j5l);
	if (e3i.m8u(d4d))
	{
		if (a3p(d4d) == b9y)
		{
			k7a(z1l, e3i, d4d, z4d);
		}
		else
		{
			d4y(z1l, e3i, d4d, z4d, u5u.j5k);
		}
	}
	else
	{
		if (e3i.l4f(d4d))
		{
			if (a3p(z4d) == g2f)
			{
				d4d = (z4d - j5l - j5l);
				if (e3i.m8u(d4d))
				{
					d4y(z1l, e3i, d4d, z4d, u5u.j5k);
				}
			}
		}
	}

	if (e3i.a7b(z4d))
	{
		let d4d = southWestSquare[z4d];
		if (d4d != f1k)
		{
			if (e3i.m8u(d4d))
			{
				if (a3p(d4d) == b9y)
				{
					a6u(z1l, e3i, d4d, z4d);
				}
				else
				{
					r1e(z1l, e3i, d4d, z4d, u5u.j5k);
				}
			}
		}
		d4d = southEastSquare[z4d];
		if (d4d != f1k)
		{
			if (e3i.m8u(d4d))
			{
				if (a3p(d4d) == b9y)
				{
					a6u(z1l, e3i, d4d, z4d);
				}
				else
				{
					r1e(z1l, e3i, d4d, z4d, u5u.j5k);
				}
			}
		}
	}

	if (e3i.t7e() == z4d)
	{
		let p2o = (e3i.t7e() + 8);
		if (!e3i.l4f(p2o))
		{
			return;
		}
		let l8e = (e3i.t7e() - 8);
		if (!e3i.j0l(l8e))
		{
			return;
		}
		let c3m = westSquare[l8e];
		if (c3m != f1k)
		{
			if (e3i.m8u(c3m))
			{
				g1c(z1l, e3i, c3m, r4u.z0j, e3i.t7e(),
					r4u.z0j, l8e, r4u.f1o, u5u.a8n);
			}
		}
		c3m = eastSquare[l8e];
		if (c3m != f1k)
		{
			if (e3i.m8u(c3m))
			{
				g1c(z1l, e3i, c3m, r4u.z0j, e3i.t7e(),
					r4u.z0j, l8e, r4u.f1o, u5u.a8n);
			}
		}
	}
}

function y2e(z1l, e3i, z4d)
{
	let d4d = (z4d - z2i);
	if (e3i.j0l(d4d))
	{
		if (a3p(d4d) == f3f)
		{
			f6r(z1l, e3i, d4d, z4d);
		}
		else
		{
			d4y(z1l, e3i, d4d, z4d, u5u.j5k);
		}
	}
	else
	{
		if (e3i.l4f(d4d))
		{
			if (a3p(z4d) == n2d)
			{
				d4d = (z4d - z2i - z2i);
				if (e3i.j0l(d4d))
				{
					d4y(z1l, e3i, d4d, z4d, u5u.j5k);
				}
			}
		}
	}

	if (e3i.c0t(z4d))
	{
		let d4d = northWestSquare[z4d];
		if (d4d != f1k)
		{
			if (e3i.j0l(d4d))
			{
				if (a3p(d4d) == f3f)
				{
					e0q(z1l, e3i, d4d, z4d);
				}
				else
				{
					r1e(z1l, e3i, d4d, z4d, u5u.j5k);
				}
			}
		}
		d4d = northEastSquare[z4d];
		if (d4d != f1k)
		{
			if (e3i.j0l(d4d))
			{
				if (a3p(d4d) == f3f)
				{
					e0q(z1l, e3i, d4d, z4d);
				}
				else
				{
					r1e(z1l, e3i, d4d, z4d, u5u.j5k);
				}
			}
		}
	}

	if (e3i.t7e() == z4d)
	{
		let p2o = (e3i.t7e() - 8);
		if (!e3i.l4f(p2o))
		{
			return;
		}
		let l8e = (e3i.t7e() + 8);
		if (!e3i.m8u(l8e))
		{
			return;
		}
		let c3m = westSquare[l8e];
		if (c3m != f1k)
		{
			if (e3i.j0l(c3m))
			{
				g1c(z1l, e3i, c3m, r4u.f1o, e3i.t7e(),
					r4u.f1o, l8e, r4u.z0j, u5u.a8n);
			}
		}
		c3m = eastSquare[l8e];
		if (c3m != f1k)
		{
			if (e3i.j0l(c3m))
			{
				g1c(z1l, e3i, c3m, r4u.f1o, e3i.t7e(),
					r4u.f1o, l8e, r4u.z0j, u5u.a8n);
			}
		}
	}
}

function m6p(z1l, e3i, z4d, h1e)
{
	h3a(z1l, e3i, z4d, knightSquares[z4d], h1e);
}

function o1y(z1l, e3i, z4d, h1e)
{
	y9s(z1l, e3i, z4d, northEastSquares[z4d], h1e);
	y9s(z1l, e3i, z4d, southEastSquares[z4d], h1e);
	y9s(z1l, e3i, z4d, southWestSquares[z4d], h1e);
	y9s(z1l, e3i, z4d, northWestSquares[z4d], h1e);
}

function b0o(z1l, e3i, z4d, h1e)
{
	y9s(z1l, e3i, z4d, northSquares[z4d], h1e);
	y9s(z1l, e3i, z4d, eastSquares[z4d], h1e);
	y9s(z1l, e3i, z4d, southSquares[z4d], h1e);
	y9s(z1l, e3i, z4d, westSquares[z4d], h1e);
}

function m4l(z1l, e3i, z4d, h1e)
{
	y9s(z1l, e3i, z4d, northSquares[z4d], h1e);
	y9s(z1l, e3i, z4d, northEastSquares[z4d], h1e);
	y9s(z1l, e3i, z4d, eastSquares[z4d], h1e);
	y9s(z1l, e3i, z4d, southEastSquares[z4d], h1e);
	y9s(z1l, e3i, z4d, southSquares[z4d], h1e);
	y9s(z1l, e3i, z4d, southWestSquares[z4d], h1e);
	y9s(z1l, e3i, z4d, westSquares[z4d], h1e);
	y9s(z1l, e3i, z4d, northWestSquares[z4d], h1e);
}

function i8n(z1l, e3i, z4d, h1e)
{
	k9t(z1l, e3i, z4d, kingSquares[z4d], h1e);
}

function y9s(z1l, e3i, z4d, r7z, h1e)
{
  for (const d4d of r7z)
	{
		if (e3i.j0s(d4d) == h1e)
		{
			if (e3i.l4f(z4d))
			{
				d4y(z1l, e3i, d4d, z4d, u5u.j5k);
			}
			else
			{
				r1e(z1l, e3i, d4d, z4d, u5u.j5k);
			}
			break;
		}
		else
		{
			if (!e3i.l4f(d4d))
			{
				break;
			}
		}
	}
}

function k9t(z1l, e3i, z4d, r7z, h1e)
{
  for (const d4d of r7z)
	{
		if (e3i.j0s(d4d) == h1e)
		{
			if (e3i.l4f(z4d))
			{
				d4y(z1l, e3i, d4d, z4d, u5u.j5k);
				break;
			}
			else
			{
				r1e(z1l, e3i, d4d, z4d, u5u.j5k);
				break;
			}
		}
	}
}

function h3a(z1l, e3i, z4d, r7z, h1e)
{
  for (const d4d of r7z)
	{
		if (e3i.j0s(d4d) == h1e)
		{
			if (e3i.l4f(z4d))
			{
				d4y(z1l, e3i, d4d, z4d, u5u.j5k);
				
			}
			else
			{
				r1e(z1l, e3i, d4d, z4d, u5u.j5k);
				
			}
		}
	}
}

function v0t(f1l, e3c)
{
  for (const z4d of e3c)
	{
		if (f1l[z4d] != r4u.f7c)
		{
			if (a7b(f1l[z4d]))
			{
				return false;
			}
			else
			{
				if (f1l[z4d] == r4u.m1p || f1l[z4d] == r4u.n3b)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function m9a(f1l, e3c)
{
  for (const z4d of e3c)
	{
		if (f1l[z4d] != r4u.f7c)
		{
			if (a7b(f1l[z4d]))
			{
				return false;
			}
			else
			{
				if (f1l[z4d] == r4u.l5x || f1l[z4d] == r4u.n3b)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function j4r(f1l, e3c)
{
  for (const z4d of e3c)
	{
		if (f1l[z4d] != r4u.f7c)
		{
			if (a7b(f1l[z4d]))
			{
				return false;
			}
			else
			{
				if (f1l[z4d] == r4u.l5x || f1l[z4d] == r4u.n3b)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function x3j(f1l, z4d)
{
	if (z4d == f1k)
	{
		return false;
	}
	if (f1l[z4d] == r4u.z0j)
	{
		return true;
	}
	return false;
}

function z8p(f1l, e3c)
{
  for (const z4d of e3c)
	{
		if (f1l[z4d] == r4u.f3a)
		{
			return true;
		}
	}
	return false;
}

function m9z(f1l, e3c)
{
  for (const z4d of e3c)
	{
		if (f1l[z4d] == r4u.w6p)
		{
			return true;
		}
	}
	return false;
}

function j9d(f1l, e3c)
{
  for (const z4d of e3c)
	{
		if (f1l[z4d] != r4u.f7c)
		{
			if (c0t(f1l[z4d]))
			{
				return false;
			}
			else
			{
				if (f1l[z4d] == r4u.d5l || f1l[z4d] == r4u.n8i)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function g3n(f1l, e3c)
{
  for (const z4d of e3c)
	{
		if (f1l[z4d] != r4u.f7c)
		{
			if (c0t(f1l[z4d]))
			{
				return false;
			}
			else
			{
				if (f1l[z4d] == r4u.t2o || f1l[z4d] == r4u.n8i)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function j5q(f1l, e3c)
{
  for (const z4d of e3c)
	{
		if (f1l[z4d] != r4u.f7c)
		{
			if (c0t(f1l[z4d]))
			{
				return false;
			}
			else
			{
				if (f1l[z4d] == r4u.t2o || f1l[z4d] == r4u.n8i)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function g6i(f1l, z4d)
{
	if (z4d == f1k)
	{
		return false;
	}
	if (f1l[z4d] == r4u.f1o)
	{
		return true;
	}
	return false;
}

function h7x(f1l, e3c)
{
  for (const z4d of e3c)
	{
		if (f1l[z4d] == r4u.s7h)
		{
			return true;
		}
	}
	return false;
}

function f9u(f1l,  e3c)
{
  for (const z4d of e3c)
	{
		if (f1l[z4d] == r4u.n1f)
		{
			return true;
		}
	}
	return false;
}

function x4d(e3i, e3c, t1k)
{
  for (const z4d of e3c)
	{
		if (!e3i.l4f(z4d))
		{
			if (e3i.a7b(z4d))
			{
				return false;
			}
			else
			{
				if (e3i.v8k(z4d) || e3i.e2x(z4d))
				{
					t1k = z4d;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function h6d(e3i, e3c, t1k)
{
  for (const z4d of e3c)
	{
		if (!e3i.l4f(z4d))
		{
			if (e3i.c0t(z4d))
			{
				return false;
			}
			else
			{
				if (e3i.b6q(z4d) || e3i.c7z(z4d))
				{
					t1k = z4d;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function t8h(e3i, e3c, t1k)
{
  for (const z4d of e3c)
	{
		if (!e3i.l4f(z4d))
		{
			if (e3i.a7b(z4d))
			{
				return false;
			}
			else
			{
				if (e3i.w7f(z4d) || e3i.e2x(z4d))
				{
					t1k = z4d;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function y1b(e3i, e3c, t1k)
{
  for (const z4d of e3c)
	{
		if (!e3i.l4f(z4d))
		{
			if (e3i.c0t(z4d))
			{
				return false;
			}
			else
			{
				if (e3i.x4w(z4d) || e3i.c7z(z4d))
				{
					t1k = z4d;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function n6f(e3i, e3c, t1k)
{
  for (const z4d of e3c)
	{
		if (!e3i.l4f(z4d))
		{
			if (e3i.a7b(z4d))
			{
				return false;
			}
			else
			{
				if (e3i.w7f(z4d) || e3i.e2x(z4d))
				{
					t1k = z4d;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function m3g(e3i, e3c, t1k)
{
  for (const z4d of e3c)
	{
		if (!e3i.l4f(z4d))
		{
			if (e3i.c0t(z4d))
			{
				return false;
			}
			else
			{
				if (e3i.x4w(z4d) || e3i.c7z(z4d))
				{
					t1k = z4d;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function y3o(e3i, z4d)
{
	if (z4d == f1k)
	{
		return false;
	}
	if (e3i.m8u(z4d))
	{
		return true;
	}
	return false;
}

function r8y(e3i, z4d)
{
	if (z4d == f1k)
	{
		return false;
	}
	if (e3i.j0l(z4d))
	{
		return true;
	}
	return false;
}

function x2e(e3i, e3c, t1k)
{
  for (const z4d of e3c)
	{
		if (e3i.g2z(z4d))
		{
			t1k = z4d;
			return true;
		}
	}
	return false;
}



function h0z(e3i, e3c, t1k)
{
  for (const z4d of e3c)
	{
		if (e3i.x6d(z4d))
		{
			t1k = z4d;
			return true;
		}
	}
	return false;
}

function f3x(e3i, e3c, t1k)
{
  for (const z4d of e3c)
	{
		if (e3i.p3k(z4d))
		{
			t1k = z4d;
			return true;
		}
	}
	return false;
}

function s8b(e3i, e3c, t1k)
{
  for (const z4d of e3c)
	{
		if (e3i.e2s(z4d))
		{
			t1k = z4d;
			return true;
		}
	}
	return false;
}

function o1m(f1l, k2d)
{
	if (v0t(f1l, northEastSquares[k2d])) return true;
	if (v0t(f1l, southEastSquares[k2d])) return true;
	if (v0t(f1l, southWestSquares[k2d])) return true;
	if (v0t(f1l, northWestSquares[k2d])) return true;
	if (m9a(f1l, northSquares[k2d])) return true;
	if (j4r(f1l, eastSquares[k2d])) return true;
	if (m9a(f1l, southSquares[k2d])) return true;
	if (j4r(f1l, westSquares[k2d])) return true;
	if (x3j(f1l, southEastSquare[k2d])) return true;
	if (x3j(f1l, southWestSquare[k2d])) return true;
	if (z8p(f1l, knightSquares[k2d])) return true;
	if (m9z(f1l, kingSquares[k2d])) return true;
	return false;
}

function p6v(f1l, k2d)
{
	if (j9d(f1l, northEastSquares[k2d])) return true;
	if (j9d(f1l, southEastSquares[k2d])) return true;
	if (j9d(f1l, southWestSquares[k2d])) return true;
	if (j9d(f1l, northWestSquares[k2d])) return true;
	if (g3n(f1l, northSquares[k2d])) return true;
	if (j5q(f1l, eastSquares[k2d])) return true;
	if (g3n(f1l, southSquares[k2d])) return true;
	if (j5q(f1l, westSquares[k2d])) return true;
	if (g6i(f1l, northEastSquare[k2d])) return true;
	if (g6i(f1l, northWestSquare[k2d])) return true;
	if (h7x(f1l, knightSquares[k2d])) return true;
	if (f9u(f1l, kingSquares[k2d])) return true;
	return false;
}

function g1r(e3i, k2d)
{
	let t1k = f1k;
	if (x4d(e3i, northEastSquares[k2d], t1k)) return true;
	if (x4d(e3i, southEastSquares[k2d], t1k)) return true;
	if (x4d(e3i, southWestSquares[k2d], t1k)) return true;
	if (x4d(e3i, northWestSquares[k2d], t1k)) return true;
	if (t8h(e3i, northSquares[k2d], t1k)) return true;
	if (n6f(e3i, eastSquares[k2d], t1k)) return true;
	if (t8h(e3i, southSquares[k2d], t1k)) return true;
	if (n6f(e3i, westSquares[k2d], t1k)) return true;
	if (y3o(e3i, southEastSquare[k2d])) return true;
	if (y3o(e3i, southWestSquare[k2d])) return true;
	if (x2e(e3i, knightSquares[k2d], t1k)) return true;
	if (f3x(e3i, kingSquares[k2d], t1k)) return true;
	return false;
}

function y8l(e3i, k2d)
{
	let t1k = f1k;
	if (h6d(e3i, northEastSquares[k2d], t1k)) return true;
	if (h6d(e3i, southEastSquares[k2d], t1k)) return true;
	if (h6d(e3i, southWestSquares[k2d], t1k)) return true;
	if (h6d(e3i, northWestSquares[k2d], t1k)) return true;
	if (y1b(e3i, northSquares[k2d], t1k)) return true;
	if (m3g(e3i, eastSquares[k2d], t1k)) return true;
	if (y1b(e3i, southSquares[k2d], t1k)) return true;
	if (m3g(e3i, westSquares[k2d], t1k)) return true;
	if (r8y(e3i, northEastSquare[k2d])) return true;
	if (r8y(e3i, northWestSquare[k2d])) return true;
	if (h0z(e3i, knightSquares[k2d], t1k)) return true;
	if (s8b(e3i, kingSquares[k2d], t1k)) return true;
	return false;
}

function b3n()
{
	if (moveGeneratorInited) return;
	moveGeneratorInited = true;
 	for (const k2d of b7a)
	{
 		if (a3p(k2d) <= b9y && z7g(k2d) <= f7r)
		{
			let z4d = k2d + h7c;
			northEastSquare.push(z4d);
		}
		else
		{
			northEastSquare.push(f1k);
		}
		if (z7g(k2d) <= f7r)
		{
			let z4d = k2d + m2o;
			eastSquare.push(z4d);
		}
		else
		{
			eastSquare.push(f1k);
		}
		if (a3p(k2d) >= f3f && z7g(k2d) <= f7r)
		{
			let z4d = k2d + o7w;
			southEastSquare.push(z4d);
		}
		else
		{
			southEastSquare.push(f1k);
		}
		if (a3p(k2d) >= f3f && z7g(k2d) >= u8b)
		{
			let z4d = k2d + g4b;
			southWestSquare.push(z4d);
		}
		else
		{
			southWestSquare.push(f1k);
		}
		if (z7g(k2d) >= u8b)
		{
			let z4d = k2d + c0r;
			westSquare.push(z4d);
		}
		else
		{
			westSquare.push(f1k);
		}
		if (a3p(k2d) <= b9y && z7g(k2d) >= u8b)
		{
			let z4d = k2d + o4z;
			northWestSquare.push(z4d);
		}
		else
		{
			northWestSquare.push(f1k);
		}
	}

  for (const k2d of b7a)
	{
  	northSquares.push(t1n(k2d));
		northEastSquares.push(h2w(k2d));
		eastSquares.push(v5e(k2d));
		southEastSquares.push(h1c(k2d));
		southSquares.push(a7g(k2d));
		southWestSquares.push(i9a(k2d));
		westSquares.push(j0b(k2d));
		northWestSquares.push(d7y(k2d));
		kingSquares.push(s9b(k2d));
		knightSquares.push(f2j(k2d));
	}
}

function y1w(e3i)
{
	let z1l = [];

	if (e3i.q8y())
	{
		let g4z = e3i.g4z();
    for (const k2d of b7a)
		{
			if (!g4z) break;
			if (e3i.c0t(k2d))
			{
				switch (e3i.j0s(k2d))
				{
					case r4u.z0j:
						e4m(z1l, e3i, k2d);
						g4z--;
						break;
					case r4u.f3a:
						o0l(z1l, e3i, k2d);
						g4z--;
						break;
					case r4u.m1p:
						m2e(z1l, e3i, k2d);
						g4z--;
						break;
					case r4u.l5x:
						n8m(z1l, e3i, k2d);
						g4z--;
						break;
					case r4u.n3b:
						f0i(z1l, e3i, k2d);
						g4z--;
						break;
					case r4u.w6p:
						u5g(z1l, e3i, k2d);
						g4z--;
						break;
					default:
						break;
				}
			}
		}
		l8q(z1l, e3i);
		c8s(z1l, e3i);
	}
	else
	{
		let a1q = e3i.a1q();
    for (const k2d of b7a)
		{
			if (!a1q) break;
			if (e3i.a7b(k2d))
			{
				switch (e3i.j0s(k2d))
				{
					case r4u.f1o:
						x3o(z1l, e3i, k2d);
						a1q--;
						break;
					case r4u.s7h:
						y3x(z1l, e3i, k2d);
						a1q--;
						break;
					case r4u.d5l:
						g3o(z1l, e3i, k2d);
						a1q--;
						break;
					case r4u.t2o:
						q5y(z1l, e3i, k2d);
						a1q--;
						break;
					case r4u.n8i:
						w9n(z1l, e3i, k2d);
						a1q--;
						break;
					case r4u.n1f:
						u2v(z1l, e3i, k2d);
						a1q--;
						break;
					default:
						break;
				}
			}
		}
		y3v(z1l, e3i);
		e6u(z1l, e3i);
	}

	return z1l;
}

function q5e(e3i, a1i)
{
	let z1l = [];

	if (e3i.q8y())
	{
		if (!e3i.c0t(a1i))
		{
			n3p(z1l, e3i, a1i);
		}
	}
	else
	{
		if (!e3i.a7b(a1i))
		{
			y2e(z1l, e3i, a1i);
		}
	}

	return z1l;
}

function c5k(e3i, a1i)
{
	let z1l = [];

	if (e3i.q8y())
	{
		if (!e3i.c0t(a1i))
		{
			m6p(z1l, e3i, a1i, r4u.f3a);
		}
	}
	else
	{
		if (!e3i.a7b(a1i))
		{
			m6p(z1l, e3i, a1i, r4u.s7h);
		}
	}

	return z1l;
}

function g2y(e3i, a1i)
{
	let z1l = [];

	if (e3i.q8y())
	{
		if (!e3i.c0t(a1i))
		{
			o1y(z1l, e3i, a1i, r4u.m1p);
		}
	}
	else
	{
		if (!e3i.a7b(a1i))
		{
			o1y(z1l, e3i, a1i, r4u.d5l);
		}
	}

	return z1l;
}

function q8t(e3i, a1i)
{
	let z1l = [];

	if (e3i.q8y())
	{
		if (!e3i.c0t(a1i))
		{
			b0o(z1l, e3i, a1i, r4u.l5x);
		}
	}
	else
	{
		if (!e3i.a7b(a1i))
		{
			b0o(z1l, e3i, a1i, r4u.t2o);
		}
	}

	return z1l;
}

function e8l(e3i, a1i)
{
	let z1l = [];

	if (e3i.q8y())
	{
		if (!e3i.c0t(a1i))
		{
			m4l(z1l, e3i, a1i, r4u.n3b);
		}
	}
	else
	{
		if (!e3i.a7b(a1i))
		{
			m4l(z1l, e3i, a1i, r4u.n8i);
		}
	}

	return z1l;
}

function m5t(e3i, a1i)
{
	let z1l = [];

	let g0u = f1k;
	if (e3i.q8y())
	{
		g0u = e3i.w6p();
	}
	else
	{
		g0u = e3i.n1f();
	}

	if (g0u == f1k)
	{
		return z1l;
	}

	if (e3i.q8y())
	{
		u5g(z1l, e3i, g0u);
		c8s(z1l, e3i);
	}
	else
	{
		u2v(z1l, e3i, g0u);
		e6u(z1l, e3i);
	}

	return z1l;
}

function p2y(e3i, a1i)
{
	let z1l = [];

	let g0u = f1k;
	if (e3i.q8y())
	{
		g0u = e3i.w6p();
	}
	else
	{
		g0u = e3i.n1f();
	}

	if (g0u == f1k)
	{
		return z1l;
	}

	if (e3i.q8y())
	{
		if (!e3i.c0t(a1i))
		{
			i8n(z1l, e3i, a1i, r4u.w6p);
		}
	}
	else
	{
		if (!e3i.a7b(a1i))
		{
			i8n(z1l, e3i, a1i, r4u.n1f);
		}
	}

	return z1l;
}

function o4o(e3i)
{
	let z1l = [];

	if (e3i.q8y())
	{
		if (!e3i.p3k(e3i.c4b()))
		{
			return z1l;
		}
		if (!e3i.l1o())
		{
			return z1l;
		}
		e6d(z1l, e3i);
		return z1l;
	}
	else
	{
		if (!e3i.e2s(e3i.a4l()))
		{
			return z1l;
		}
		if (!e3i.h8l())
		{
			return z1l;
		}
		i8m(z1l, e3i);
		return z1l;
	}
}

function i1j(e3i)
{
	let z1l = [];

	if (e3i.q8y())
	{
		if (!e3i.p3k(e3i.c4b()))
		{
			return z1l;
		}
		if (!e3i.x5u())
		{
			return z1l;
		}
		n6b(z1l, e3i);
		return z1l;
	}
	else
	{
		if (!e3i.e2s(e3i.a4l()))
		{
			return z1l;
		}
		if (!e3i.m0z())
		{
			return z1l;
		}
		x2j(z1l, e3i);
		return z1l;
	}
}

function l3n(e3i)
{
	if (e3i.q8y())
	{
		if (e3i.w6p() != f1k)
		{
			return y8l(e3i, e3i.w6p());
		}
	}
	else
	{
		if (e3i.n1f() != f1k)
		{
			return g1r(e3i, e3i.n1f());
		}
	}
	return false;
}




function l9i(e3i, d4d)
{
	let f2c = y1w(e3i);
	let j4z = [];
  for (const x2v of f2c)
	{
		if (x2v.d4d == d4d)
		{
			j4z.push(x2v);
		}
	}
	return j4z;
}

function u5y(e3i, z4d)
{
	let f2c = y1w(e3i);
	let u1f = [];
  for (const x2v of f2c)
	{
		if (x2v.z4d == z4d)
		{
			u1f.push(x2v);
		}
	}
	return u1f;
}

function x9q(e3i, d4d, z4d)
{
	let f2c = y1w(e3i);
	let c1t = [];
  for (const x2v of f2c)
	{
		if (x2v.d4d == d4d && x2v.z4d == z4d)
		{
			c1t.push(x2v);
		}
	}
	return c1t;
}

function p4z(e3i, d4d, z4d, type)
{
	let c7j = new j7i();
	if (type == u5u.null)
	{
		return c7j;
	}

	c7j.d4d = d4d;
	c7j.z4d = z4d;
	c7j.type = type;
	if (type == u5u.j5k)
	{
		if (e3i.j0s(c7j.z4d) != r4u.f7c)
		{
			c7j.i9e = c7j.z4d;
			c7j.q1n = e3i.j0s(c7j.z4d);
		}
		c7j.v5m = e3i.j0s(c7j.d4d);
		c7j.o9x = c7j.v5m;
	}
	else if (type == u5u.g2x)
	{
		c7j.v5m = e3i.j0s(c7j.d4d);
		c7j.o9x = c7j.v5m;
	}
	else if (type == u5u.a8n)
	{
		c7j.v5m = e3i.j0s(c7j.d4d);
		c7j.o9x = c7j.v5m;
		if (c0t(c7j.v5m))
		{
			c7j.i9e = (c7j.z4d - 8);
			c7j.q1n = r4u.f1o;
		}
		else
		{
			c7j.i9e = (c7j.z4d + 8);
			c7j.q1n = r4u.z0j;
		}
	}
	else if (type == u5u.z5d)
	{
		if (e3i.j0s(c7j.z4d) != r4u.f7c)
		{
			c7j.i9e = c7j.z4d;
			c7j.q1n = e3i.j0s(c7j.z4d);
		}
		c7j.v5m = e3i.j0s(c7j.d4d);
		if (c0t(c7j.v5m))
		{
			c7j.o9x = r4u.n3b;
		}
		else
		{
			c7j.o9x = r4u.n8i;
		}
	}
	else if (type == u5u.h0w)
	{
		if (e3i.j0s(c7j.z4d) != r4u.f7c)
		{
			c7j.i9e = c7j.z4d;
			c7j.q1n = e3i.j0s(c7j.z4d);
		}
		c7j.v5m = e3i.j0s(c7j.d4d);
		if (c0t(c7j.v5m))
		{
			c7j.o9x = r4u.l5x;
		}
		else
		{
			c7j.o9x = r4u.t2o;
		}
	}
	else if (type == u5u.k8w)
	{
		if (e3i.j0s(c7j.z4d) != r4u.f7c)
		{
			c7j.i9e = c7j.z4d;
			c7j.q1n = e3i.j0s(c7j.z4d);
		}
		c7j.v5m = e3i.j0s(c7j.d4d);
		if (c0t(c7j.v5m))
		{
			c7j.o9x = r4u.m1p;
		}
		else
		{
			c7j.o9x = r4u.d5l;
		}
	}
	else if (type == u5u.f5e)
	{
		if (e3i.j0s(c7j.z4d) != r4u.f7c)
		{
			c7j.i9e = c7j.z4d;
			c7j.q1n = e3i.j0s(c7j.z4d);
		}
		c7j.v5m = e3i.j0s(c7j.d4d);
		if (c0t(c7j.v5m))
		{
			c7j.o9x = r4u.f3a;
		}
		else
		{
			c7j.o9x = r4u.s7h;
		}
	}
	return c7j;
}

function p4z(f1l, d4d, z4d, type)
{
	let c7j = new j7i();
	if (type == u5u.null)
	{
		return c7j;
	}

	c7j.d4d = d4d;
	c7j.z4d = z4d;
	c7j.type = type;
	if (type == u5u.j5k)
	{
		if (f1l[c7j.z4d] != r4u.f7c)
		{
			c7j.i9e = c7j.z4d;
			c7j.q1n = f1l[c7j.z4d];
		}
		c7j.v5m = f1l[c7j.d4d];
		c7j.o9x = c7j.v5m;
	}
	else if (type == u5u.g2x)
	{
		c7j.v5m = f1l[c7j.d4d];
		c7j.o9x = c7j.v5m;
	}
	else if (type == u5u.a8n)
	{
		c7j.v5m = f1l[c7j.d4d];
		c7j.o9x = c7j.v5m;
		if (c0t(c7j.v5m))
		{
			c7j.i9e = (c7j.z4d - 8);
			c7j.q1n = r4u.f1o;
		}
		else
		{
			c7j.i9e = (c7j.z4d + 8);
			c7j.q1n = r4u.z0j;
		}
	}
	else if (type == u5u.z5d)
	{
		if (f1l[c7j.z4d] != r4u.f7c)
		{
			c7j.i9e = c7j.z4d;
			c7j.q1n = f1l[c7j.z4d];
		}
		c7j.v5m = f1l[c7j.d4d];
		if (c0t(c7j.v5m))
		{
			c7j.o9x = r4u.n3b;
		}
		else
		{
			c7j.o9x = r4u.n8i;
		}
	}
	else if (type == u5u.h0w)
	{
		if (f1l[c7j.z4d] != r4u.f7c)
		{
			c7j.i9e = c7j.z4d;
			c7j.q1n = f1l[c7j.z4d];
		}
		c7j.v5m = f1l[c7j.d4d];
		if (c0t(c7j.v5m))
		{
			c7j.o9x = r4u.l5x;
		}
		else
		{
			c7j.o9x = r4u.t2o;
		}
	}
	else if (type == u5u.k8w)
	{
		if (f1l[c7j.z4d] != r4u.f7c)
		{
			c7j.i9e = c7j.z4d;
			c7j.q1n = f1l[c7j.z4d];
		}
		c7j.v5m = f1l[c7j.d4d];
		if (c0t(c7j.v5m))
		{
			c7j.o9x = r4u.m1p;
		}
		else
		{
			c7j.o9x = r4u.d5l;
		}
	}
	else if (type == u5u.f5e)
	{
		if (f1l[c7j.z4d] != r4u.f7c)
		{
			c7j.i9e = c7j.z4d;
			c7j.q1n = f1l[c7j.z4d];
		}
		c7j.v5m = f1l[c7j.d4d];
		if (c0t(c7j.v5m))
		{
			c7j.o9x = r4u.f3a;
		}
		else
		{
			c7j.o9x = r4u.s7h;
		}
	}
	return c7j;
}

const j5l 						=   8; 
const z2i 						=  -8; 
const m2o 	      			=   1; 
const c0r 	      			=  -1; 
const c2o 		=  17; 
const a5h 		=  10; 
const h7c 				=   9; 
const e7o 		=   6; 
const u1g 		=  15; 
const o4z 				=   7; 
const l1r 		= -17; 
const l2j 		= -10; 
const g4b 				=  -9; 
const u1e 		=  -6; 
const h6t 		= -15; 
const o7w 				=  -7; 

function t1n(k2d)
{
	let s6n = [];
	let a8g = j5l;
	let z4d = k2d;
	while (a3p(z4d) <= b9y)
	{
		z4d = z4d + a8g;
		s6n.push(z4d);
	}
	return s6n;
}

function h2w(k2d)
{
	let s6n = [];
	let a8g = h7c;
	let z4d = k2d;
	while (a3p(z4d) <= b9y && z7g(z4d) <= f7r)
	{
		z4d = z4d + a8g;
		s6n.push(z4d);
	}
	return s6n;
}

function v5e(k2d)
{
	let s6n = [];
	let a8g = m2o;
	let z4d = k2d;
	while (z7g(z4d) <= f7r)
	{
		z4d = z4d + a8g;
		s6n.push(z4d);
	}
	return s6n;
}

function h1c(k2d)
{
	let s6n = [];
	let a8g = o7w;
	let z4d = k2d;
	while (a3p(z4d) >= f3f && z7g(z4d) <= f7r)
	{
		z4d = z4d + a8g;
		s6n.push(z4d);
	}
	return s6n;
}

function a7g(k2d)
{
	let s6n = [];
	let a8g = z2i;
	let z4d = k2d;
	while (a3p(z4d) >= f3f)
	{
		z4d = z4d + a8g;
		s6n.push(z4d);
	}
	return s6n;
}

function i9a(k2d)
{
	let s6n = [];
	let a8g = g4b;
	let z4d = k2d;
	while (a3p(z4d) >= f3f && z7g(z4d) >= u8b)
	{
		z4d = z4d + a8g;
		s6n.push(z4d);
	}
	return s6n;
}

function j0b(k2d)
{
	let s6n = [];
	let a8g = c0r;
	let z4d = k2d;
	while (z7g(z4d) >= u8b)
	{
		z4d = z4d + a8g;
		s6n.push(z4d);
	}
	return s6n;
}

function d7y(k2d)
{
	let s6n = [];
	let a8g = o4z;
	let z4d = k2d;
	while (a3p(z4d) <= b9y && z7g(z4d) >= u8b)
	{
		z4d = z4d + a8g;
		s6n.push(z4d);
	}
	return s6n;
}

function f2j(k2d)
{
	let s6n = [];
	if (a3p(k2d) <= t7m && z7g(k2d) <= f7r)
	{
		let z4d = k2d + c2o;
		s6n.push(z4d);
	}
	if (a3p(k2d) <= b9y && z7g(k2d) <= r6l)
	{
		let z4d = k2d + a5h;
		s6n.push(z4d);
	}
	if (a3p(k2d) >= f3f && z7g(k2d) <= r6l)
	{
		let z4d = k2d + u1e;
		s6n.push(z4d);
	}
	if (a3p(k2d) >= n1c && z7g(k2d) <= f7r)
	{
		let z4d = k2d + h6t;
		s6n.push(z4d);
	}
	if (a3p(k2d) >= n1c && z7g(k2d) >= u8b)
	{
		let z4d = k2d + l1r;
		s6n.push(z4d);
	}
	if (a3p(k2d) >= f3f && z7g(k2d) >= g4i)
	{
		let z4d = k2d + l2j;
		s6n.push(z4d);
	}
	if (a3p(k2d) <= b9y && z7g(k2d) >= g4i)
	{
		z4d = k2d + e7o;
		s6n.push(z4d);
	}
	if (a3p(k2d) <= t7m && z7g(k2d) >= u8b)
	{
		let z4d = k2d + u1g;
		s6n.push(z4d);
	}
	return s6n;
}

function s9b(k2d)
{
	let s6n = [];
	if (a3p(k2d) <= b9y)
	{
		let z4d = k2d + j5l;
		s6n.push(z4d);
	}
	if (a3p(k2d) <= b9y && z7g(k2d) <= f7r)
	{
		let z4d = k2d + h7c;
		s6n.push(z4d);
	}
	if (z7g(k2d) <= f7r)
	{
		let z4d = k2d + m2o;
		s6n.push(z4d);
	}
	if (a3p(k2d) >= f3f && z7g(k2d) <= f7r)
	{
		let z4d = k2d + o7w;
		s6n.push(z4d);
	}
	if (a3p(k2d) >= f3f)
	{
		let z4d = k2d + z2i;
		s6n.push(z4d);
	}
	if (a3p(k2d) >= f3f && z7g(k2d) >= u8b)
	{
		let z4d = k2d + g4b;
		s6n.push(z4d);
	}
	if (z7g(k2d) >= u8b)
	{
		let z4d = k2d + c0r;
		s6n.push(z4d);
	}
	if (a3p(k2d) <= b9y && z7g(k2d) >= u8b)
	{
		let z4d = k2d + o4z;
		s6n.push(z4d);
	}
	return s6n;
}

const u5u =
{
  i6p : 0,  
	j5k : 1,
	g2x : 2,
	a8n : 3,
	f5e : 4,
	k8w : 5,
	h0w : 6,
	z5d : 7
};

function c9s(h1e)
{
	switch (h1e)
	{
		case r4u.z0j:
		case r4u.f1o:
			return j9n.f6v;
		case r4u.f3a:
		case r4u.s7h:
			return j9n.g1f;
		case r4u.m1p:
		case r4u.d5l:
			return j9n.j7q;
		case r4u.l5x:
		case r4u.t2o:
			return j9n.i4s;
		case r4u.n3b:
		case r4u.n8i:
			return j9n.t3j;
		case r4u.w6p:
		case r4u.n1f:
			return j9n.king;
		case r4u.f7c:
			return j9n.f6v;
	}
}

function a9d(e3i, c7j, t3u)
{
 	let c7b = '';
	if (c7j.f7c())
	{
		c7b += "--";
	}
	else if (w6s(c7j.v5m))
	{
    if (c7j.t7p())
    {
			let y0l = z7g(c7j.d4d);
			c7b = i6f(y0l) + "x" + u1k(c7j.z4d);
    }
    else
    {
 			c7b = u1k(c7j.z4d);
    }
		if (c7j.t4b())
		{
			c7b += "=";
			c7b += s3n(c9s(c7j.o9x));
		}
	}
	else if (c7j.v5m == r4u.w6p && c7j.t2p())
	{
		if (c7j.z4d == s2j)
		{
			c7b = "O-O-O";
		}
		else
		{
			c7b = "O-O";
		}
	}
	else if (c7j.v5m == r4u.n1f && c7j.t2p())
	{
		if (c7j.z4d == h9y)
		{
			c7b = "O-O-O";
		}
		else
		{
			c7b = "O-O";
		}
	}
	else
	{
		c7b = s3n(c9s(c7j.v5m));
    let f2c = [];
    if (c0t(c7j.v5m))
    {
      if (c7j.v5m == r4u.f3a)
      {
        f2c = c5k(e3i, c7j.z4d);
      }
      else if (c7j.v5m == r4u.m1p)
      {
        f2c = g2y(e3i, c7j.z4d);
      }
      else if (c7j.v5m == r4u.l5x)
      {
        f2c = q8t(e3i, c7j.z4d);
      }
      else if (c7j.v5m == r4u.n3b)
      {
        f2c = e8l(e3i, c7j.z4d);
      }
      else if (c7j.v5m == r4u.w6p)
      {
        f2c = p2y(e3i, c7j.z4d);
      }
    }
    else
    {
      if (c7j.v5m == r4u.s7h)
      {
        f2c = c5k(e3i, c7j.z4d);
      }
      else if (c7j.v5m == r4u.d5l)
      {
        f2c = g2y(e3i, c7j.z4d);
      }
      else if (c7j.v5m == r4u.t2o)
      {
        f2c = q8t(e3i, c7j.z4d);
      }
      else if (c7j.v5m == r4u.n8i)
      {
        f2c = e8l(e3i, c7j.z4d);
      }
      else if (c7j.v5m == r4u.n1f)
      {
        f2c = p2y(e3i, c7j.z4d);
      }
    }
    if (f2c.length > 1)
    {
      
      let z7m = 0;
      let y0l = z7g(c7j.d4d);
     	for (const x2v of f2c)
      {
        if (z7g(x2v.d4d) == y0l)
        {
          z7m++;
        }
      }
      if (z7m == 1)
      {
        
 				let y0l = z7g(c7j.d4d);
				c7b += i6f(y0l);
      }
      else
      {
        z7m = 0;
        let g3i = a3p(c7j.d4d);
       	for (const x2v of f2c)
        {
          if (a3p(x2v.d4d) == g3i)
          {
            z7m++;
          }
        }
        if (z7m == 1)
        {
          
          c7b += h7n(g3i);
        }
        else
        {
          
 					c7b += u1k(c7j.d4d);
        }
      }
    }
		if (c7j.t7p())
		{
       c7b += "x";
		}
		c7b += u1k(c7j.z4d);
	}
	if (!c7j.f7c())
	{
  	let z8b = e3i.z4e();
    z8b.i8p(c7j);
  	if (l3n(z8b))
	  {
  		let z1l = y1w(z8b);
	  	if (z1l.length == 0)
		  {
			  c7b += "#";
  		}
	  	else
		  {
			  c7b += "+";
  		}
	  }
	}
	return c7b;
}
class c9h
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.fontSize = 0;
}

}

function a2t(x4i,
  x9o,
  x4e,
  coordinate,
  coordinatesType,
  s4o,
  k1g,
  marginSize) 
{
 	let x8f = (coordinatesType == l7g.d1a ||
		coordinatesType == l7g.b4t ||
		coordinatesType == l7g.y7f);
	let y0a = (coordinatesType == l7g.d1a ||
		coordinatesType == l7g.b4t ||
		coordinatesType == l7g.k1o);
	let b3j =	(coordinatesType == l7g.d1a ||
		coordinatesType == l7g.y7f ||
		coordinatesType == l7g.n6s);
	let f8a = (coordinatesType == l7g.d1a ||
		coordinatesType == l7g.k1o ||
		coordinatesType == l7g.n6s);

	x4i.font = (coordinate.fontSize).toString() + "px serif";
	x4i.fillStyle = s4o;
  let h5r = coordinate.height;

	if (y0a)
	{
		let o2z = n3x;
		if (k1g)
		{
			o2z = 1;
		}
    for (let u5h = 0; u5h < n3x; u5h++)
		{
			let g2n = x4i.measureText(o2z).width;
			let top = x9o.k7q + 1 + u5h * x4e.s0f;
			top += (x4e.s0f - h5r) / 2 + h5r;
			let e2r = x9o.o5d - marginSize + (marginSize - g2n) / 2;
      x4i.fillText(o2z, e2r, top);
			if (k1g)
			{
				o2z++;
			}
			else
			{
				o2z--;
			}
		}
	}

	if (b3j)
	{
		let o2z = n3x;
		if (k1g)
		{
			o2z = 1;
		}
    for (let u5h = 0; u5h < n3x; u5h++)
		{
      let g2n = x4i.measureText(o2z).width;
			let top = x9o.k7q + 1 + u5h * x4e.s0f;
			top += (x4e.s0f - h5r) / 2 + h5r;
			let e2r = x9o.o5d + x9o.h5k() +
        (marginSize - g2n) / 2;
      x4i.fillText(o2z, e2r, top);
			if (k1g)
			{
				o2z++;
			}
			else
			{
				o2z--;
			}
		}
	}

	if (x8f)
	{
		let w4c = 'a';
		if (k1g)
		{
			w4c = 'h';
		}
    for (let a7c = 0; a7c < n3x; a7c++)
		{
			let y0j = w4c;
			let left = x9o.o5d + 1 + a7c * x4e.s0f;
      let g2n = x4i.measureText(y0j).width;
			let e2r = left + (x4e.s0f - g2n) / 2;
			let k9f = x9o.k7q - (marginSize - h5r) / 2 - 2;
      
      if (w4c == 'g')
      {
        k9f -= 2; 
      }
      x4i.fillText(y0j, e2r, k9f);
			if (k1g)
			{
        let v2z = w4c.charCodeAt(0);
        v2z--;
        w4c = String.fromCharCode(v2z);
			}
			else
			{
        let v2z = w4c.charCodeAt(0);
        v2z++;
        w4c = String.fromCharCode(v2z);
			}
		}
	}

	if (f8a)
	{
		let w4c = 'a';
		if (k1g)
		{
			w4c = 'h';
		}
    for (let a7c = 0; a7c < n3x; a7c++)
		{
			let y0j = w4c;
			let left = x9o.o5d + 1 + a7c * x4e.s0f;
      let g2n = x4i.measureText(y0j).width;
			let e2r = left + (x4e.s0f - g2n) / 2;
			let k9f = x9o.k7q + x9o.c9o() +
        (marginSize - h5r) / 2 + h5r - 2;
      
      if (w4c == 'g')
      {
        k9f -= 2; 
      }
      x4i.fillText(y0j, e2r, k9f);
			if (k1g)
			{
        let v2z = w4c.charCodeAt(0);
        v2z--;
        w4c = String.fromCharCode(v2z);
			}
			else
			{
        let v2z = w4c.charCodeAt(0);
        v2z++;
        w4c = String.fromCharCode(v2z);
			}
		}
	}
}

function w8i(x4i, fontSize)
{
	let m0f = new c9h();
	m0f.fontSize = fontSize;
	m0f.height = fontSize;
	m0f.width = fontSize;
	return m0f;
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

function g0m()
{
  whitePawnBitmap = u5s.r3h("images/pieces/Merida/wP");
 	whiteKnightBitmap = u5s.r3h("images/pieces/Merida/wN");
  whiteBishopBitmap = u5s.r3h("images/pieces/Merida/wB");
 	whiteRookBitmap = u5s.r3h("images/pieces/Merida/wR");
  whiteQueenBitmap = u5s.r3h("images/pieces/Merida/wQ");
 	whiteKingBitmap = u5s.r3h("images/pieces/Merida/wK");
  blackPawnBitmap = u5s.r3h("images/pieces/Merida/bP");
 	blackKnightBitmap = u5s.r3h("images/pieces/Merida/bN");
  blackBishopBitmap = u5s.r3h("images/pieces/Merida/bB");
 	blackRookBitmap = u5s.r3h("images/pieces/Merida/bR");
  blackQueenBitmap = u5s.r3h("images/pieces/Merida/bQ");
 	blackKingBitmap = u5s.r3h("images/pieces/Merida/bK");
}

function e9z()
{
  whitePawnBitmap = u5s.r3h("images/pieces/CBurnett/wP");
 	whiteKnightBitmap = u5s.r3h("images/pieces/CBurnett/wN");
  whiteBishopBitmap = u5s.r3h("images/pieces/CBurnett/wB");
 	whiteRookBitmap = u5s.r3h("images/pieces/CBurnett/wR");
  whiteQueenBitmap = u5s.r3h("images/pieces/CBurnett/wQ");
 	whiteKingBitmap = u5s.r3h("images/pieces/CBurnett/wK");
  blackPawnBitmap = u5s.r3h("images/pieces/CBurnett/bP");
 	blackKnightBitmap = u5s.r3h("images/pieces/CBurnett/bN");
  blackBishopBitmap = u5s.r3h("images/pieces/CBurnett/bB");
 	blackRookBitmap = u5s.r3h("images/pieces/CBurnett/bR");
  blackQueenBitmap = u5s.r3h("images/pieces/CBurnett/bQ");
 	blackKingBitmap = u5s.r3h("images/pieces/CBurnett/bK");
}

function h7k(z7l)
{
  if (z7l == 0)
  {
    e9z();
  }
  else
  {
    g0m();
  }
}

function f5g(h1e)
{
  switch (h1e)
	{
    case r4u.z0j:
      return whitePawnBitmap;
      break;
    case r4u.f3a:
      return whiteKnightBitmap;
      break;
    case r4u.m1p:
      return whiteBishopBitmap;
      break;
    case r4u.l5x:
      return whiteRookBitmap;
      break;
    case r4u.n3b:
      return whiteQueenBitmap;
      break;
    case r4u.w6p:
      return whiteKingBitmap;
      break;
    case r4u.f1o:
      return blackPawnBitmap;
      break;
    case r4u.s7h:
      return blackKnightBitmap;
      break;
    case r4u.d5l:
      return blackBishopBitmap;
      break;
    case r4u.t2o:
      return blackRookBitmap;
      break;
    case r4u.n8i:
      return blackQueenBitmap;
      break;
    case r4u.n1f:
      return blackKingBitmap;
      break;
    default:
      break
	}
  return null;
}

function c6p(x4i, rect, h1e)
{
  if (h1e == r4u.f7c) return;
	let r3h = f5g(h1e);
  x4i.drawImage(r3h, rect.o5d, rect.k7q, rect.h5k(), rect.c9o());
}
function i3k(q5l)
{
	let e3i = new b6u();
	let h1q = q5l.length;

 	let y2d = q5l.split(" ");
	if (y2d.length < 2)
	{
		return e3i;
	}

	let w7j = y2d[1];
	if (w7j.length)
	{
		if (w7j[0] == 'w')
		{
			e3i.b3t();
		}
		else if (w7j[0] == 'b')
		{
			e3i.l8s();
		}
	}

 	let m9l = y2d[0].split("/");
	if (m9l.length != 8)
	{
		return e3i;
	}
	let v3q = a8;
	for (const u5h of m9l)
	{
		let k2d = v3q;
		let h1q = u5h.length;
		for (let i = 0; i < h1q; i++)
		{
			if (k2d == v3q + 8)
			{
				return e3i; 
			}
			let v8f = true;
			switch (u5h[i])
			{
				case 'p':
					e3i.t8a(k2d, r4u.f1o);
					break;
				case 'n':
					e3i.t8a(k2d, r4u.s7h);
					break;
				case 'b':
					e3i.t8a(k2d, r4u.d5l);
					break;
				case 'r':
					e3i.t8a(k2d, r4u.t2o);
					break;
				case 'q':
					e3i.t8a(k2d, r4u.n8i);
					break;
				case 'k':
					e3i.t8a(k2d, r4u.n1f);
					break;
				case 'P':
					e3i.t8a(k2d, r4u.z0j);
					break;
				case 'N':
					e3i.t8a(k2d, r4u.f3a);
					break;
				case 'B':
					e3i.t8a(k2d, r4u.m1p);
					break;
				case 'R':
					e3i.t8a(k2d, r4u.l5x);
					break;
				case 'Q':
					e3i.t8a(k2d, r4u.n3b);
					break;
				case 'K':
					e3i.t8a(k2d, r4u.w6p);
					break;
				default:
					v8f = false;
					break;
			}
			if (v8f)
			{
				k2d = k2d + 1;
			}
			else
			{
				if (!isNaN(u5h[i]))
				{
					k2d = k2d + y0d(u5h[i], 0);
				}
			}
		}
		v3q = v3q - 8;
	}

 	if (y2d.length >= 3)
	{
		let n6y = new m8h(); 
		let p5c = y2d[2];
		if (p5c.length)
		{
			if (p5c[0] != '-')
			{
				let h1q = p5c.length;
				if (p5c[0] >= 'A' && p5c[0] <= 'H')
				{
 					n6y.u1y = true; 
          
					n6y.c4b = e3i.w6p();
					n6y.a4l = e3i.n1f();
					if (h1q == 4)
					{
						let c7b = p5c.charAt(0).toLowerCase();
						c7b += "1";
						n6y.a0r = z0q(c7b);
						if (e3i.w7f(n6y.a0r))
						{
							n6y.q1d = true;
						}
						c7b = p5c.charAt(1).toLowerCase();
						c7b += "1";
						n6y.x4q = z0q(c7b);
						if (e3i.w7f(n6y.x4q))
						{
							n6y.a8t = true;
						}
						c7b = p5c.charAt(2).toLowerCase();
						c7b += "8";
						n6y.l7r = z0q(c7b);
						if (e3i.x4w(n6y.l7r))
						{
							n6y.e1q = true;
						}
						c7b = p5c.charAt(3).toLowerCase();
						c7b += "8";
						n6y.n7w = z0q(c7b);
						if (e3i.x4w(n6y.n7w))
						{
							n6y.d9z = true;
						}
          }
				}
				else
				{
					for (let i = 0; i < h1q; i++)
					{
						switch (p5c[i])
						{
							case 'K':
								if (e3i.p3k(n6y.c4b) && e3i.w7f(n6y.a0r))
								{
									n6y.q1d = true;
								}
								break;
							case 'Q':
								if (e3i.p3k(n6y.c4b) && e3i.w7f(n6y.x4q))
								{
									n6y.a8t = true;
								}
								break;
							case 'k':
								if (e3i.e2s(n6y.a4l) && e3i.x4w(n6y.l7r))
								{
									n6y.e1q = true;
								}
								break;
							case 'q':
								if (e3i.e2s(n6y.a4l) && e3i.x4w(n6y.n7w))
								{
									n6y.d9z = true;
								}
								break;
						}
					}
				}
			}
		}
		if (y2d.length >= 4)
		{
			let z9j = y2d[3];
			if (z9j.length)
			{
				if (z9j[0] != '-')
				{
					n6y.t7e = z0q(z9j);
					if (a3p(n6y.t7e) == t7m)
					{
						let c4d = n6y.t7e + 8;
						let a1i = n6y.t7e - 8;
						if (!e3i.l4f(c4d) || !e3i.j0l(a1i))
						{
							n6y.t7e = f1k;
						}
					}
					else if (a3p(n6y.t7e) == n1c)
					{
						let c4d = n6y.t7e - 8;
						let a1i = n6y.t7e + 8;
						if (!e3i.l4f(c4d) || !e3i.m8u(a1i))
						{
							n6y.t7e = f1k;
						}
					}
					else
					{
						n6y.t7e = f1k;
					}
				}
			}
		}
		e3i.r9h(n6y);
	}
	return e3i;
}

function s4j(e3i)
{
	let q5l = '';
	let v3q = a8;
	for (let u5h = 7; u5h >= 0; u5h--)
	{
		let k2d = v3q;
		let e4k = 0;
		for (let a7c = 0; a7c < 8; a7c++)
		{
			if (e3i.l4f(k2d))
			{
				e4k++;
			}
			else
			{
				if (e4k)
				{
					q5l += e4k;
					e4k = 0;
				}
				switch (e3i.j0s(k2d))
				{
					case r4u.f7c:
						break;
					case r4u.z0j:
						q5l += 'P';
						break;
					case r4u.f3a:
						q5l += 'N';
						break;
					case r4u.m1p:
						q5l += 'B';
						break;
					case r4u.l5x:
						q5l += 'R';
						break;
					case r4u.n3b:
						q5l += 'Q';
						break;
					case r4u.w6p:
						q5l += 'K';
						break;
					case r4u.f1o:
						q5l += 'p';
						break;
					case r4u.s7h:
						q5l += 'n';
						break;
					case r4u.d5l:
						q5l += 'b';
						break;
					case r4u.t2o:
						q5l += 'r';
						break;
					case r4u.n8i:
						q5l += 'q';
						break;
					case r4u.n1f:
						q5l += 'k';
						break;
				}
			}
			k2d = k2d + 1;
		}
		if (e4k)
		{
			q5l += e4k;
		}
		v3q = (v3q - 8);
		if (u5h > 0)
		{
			q5l += "/";
		}
	}
	q5l += " ";
	if (e3i.q8y())
	{
		q5l += "w";
	}
	else
	{
		q5l += "b";
	}
	q5l += " ";
	let n6y = e3i.m7e();
	if (
		!n6y.q1d &&
		!n6y.a8t &&
		!n6y.e1q &&
		!n6y.d9z)
	{
		q5l += "-";
	}
	else
	{
		if (n6y.u1y)
		{
			if (n6y.q1d)
			{
				q5l += i6f(z7g(n6y.a0r)).toUpperCase();
			}
			if (n6y.a8t)
			{
				q5l += i6f(z7g(n6y.x4q)).toUpperCase();
			}
			if (n6y.e1q)
			{
				q5l += i6f(z7g(n6y.l7r)).toUpperCase();
			}
			if (n6y.d9z)
			{
				q5l += i6f(z7g(n6y.n7w)).toUpperCase();
			}
		}
		else
		{
			if (n6y.q1d)
			{
				q5l += "K";
			}
			if (n6y.a8t)
			{
				q5l += "Q";
			}
			if (n6y.e1q)
			{
				q5l += "k";
			}
			if (n6y.d9z)
			{
				q5l += "q";
			}
		}
	}
	q5l += " ";
	if (n6y.t7e == f1k)
	{
		q5l += "-";
	}
	else
	{
		q5l += u1k(n6y.t7e);
	}
	return q5l;
}

function r9w(e3i, h9x)
{
	
	

  let k1c = h9x.length;
	if (k1c < 2 || k1c > 7)
	{
		return false;
	}

	
	if (h9x[0] == 'Z' || (k1c == 2 && h9x == "--") || (k1c == 4 && h9x == "null"))
	{
		return new j7i();
	}

	
	let u1s = h9x[k1c-1];
	if (u1s == '+' || u1s == '#')
	{
		k1c--;
		if (k1c < 2)
		{
   		return false;
		}
	}

	
	if (h9x[0] == 'O' || h9x[0] == '0')
	{
		if (k1c == 3)
		{
			let f2c = i1j(e3i);
			if (f2c.length != 1)
			{
    		return false;
			}
			return f2c[0];
		}
		if (k1c == 5)
		{
			let f2c = o4o(e3i);
			if (f2c.length != 1)
			{
    		return false;
			}
			return f2c[0];
		}
 		return false;
	}

	
	let d6q = false;
	let z1c = r4u.f7c;
	if (h9x[k1c-2] == '=')
	{
		d6q = true;
		let s5s = h9x[k1c-1];
		if (s5s == 'N')
		{
			z1c = e3i.q8y() ? r4u.f3a : r4u.s7h;
		}
		else if (s5s == 'B')
		{
			z1c = e3i.q8y() ? r4u.m1p : r4u.d5l;
		}
		else if (s5s == 'R')
		{
			z1c = e3i.q8y() ? r4u.l5x : r4u.t2o;
		}
		else if (s5s == 'Q')
		{
			z1c = e3i.q8y() ? r4u.n3b : r4u.n8i;
		}
		else
		{
  		return false;
		}
		k1c -= 2;
		if (k1c < 2)
		{
  		return false;
		}
	}

 	
	let toString = '';
	toString += h9x[k1c-2];
	toString += h9x[k1c-1];
	let a1i = z0q(toString);
	if (a1i == f1k)
	{
		return false;
	}
	k1c -= 2;
	

 	if (d6q)
	{
		let f2c = q5e(e3i, a1i);
		if (f2c.length == 0)
		{
  		return false;
		}
		let o9u = [];
		for (const c7j of f2c)
		{
			if (c7j.o9x == z1c)
			{
				o9u.push(c7j);
			}
		}
		f2c = o9u;
		if (f2c.length == 1)
		{
			return f2c[0];
		}
		if (k1c == 0)
		{
			
			for (const x2v of f2c)
			{
				if (x2v.i9e == f1k)
				{
					return x2v;
				}
			}
  		return false;
		}
		if (k1c != 2)
		{
  		return false;
		}
		
		let u1s = h9x[0];
		if (u1s < 'a' || u1s > 'h')
		{
  		return false;
		}
		let y0l = l2u(u1s);
		for (const x2v of f2c)
		{
			if (z7g(x2v.d4d) == y0l)
			{
				return x2v;
			}
		}
		return false;
	}

	if (k1c == 0)
	{
  	
		let f2c = q5e(e3i, a1i);
		if (f2c.length != 1)
		{
  		return false;
		}
		return f2c[0];
	}

  
	let f6v = false;
	let f2c = [];
	let z7j = h9x[0];
	if (z7j == 'N')
	{
		f2c = c5k(e3i, a1i);
	}
	else if (z7j == 'B')
	{
		f2c = g2y(e3i, a1i);
	}
	else if (z7j == 'R')
	{
		f2c = q8t(e3i, a1i);
	}
	else if (z7j == 'Q')
	{
		f2c = e8l(e3i, a1i);
	}
	else if (z7j == 'K')
	{
		
		f2c = p2y(e3i, a1i);
	}
	else
	{
		f6v = true;
		f2c = q5e(e3i, a1i);
	}
	if (f2c.length == 0)
	{
		return false;
	}
	if (f2c.length == 1)
	{
		return f2c[0]; 
	}

	
	
	
	if (k1c < 2)
	{
		return false;
	}

 	if (f6v)
	{
		let u1s = h9x[0]; 
		if (u1s < 'a' || u1s > 'h')
		{
  	  return false;
		}
		let y0l = l2u(u1s);
		for (const x2v of f2c)
		{
			if (z7g(x2v.d4d) == y0l && x2v.i9e != f1k)
			{
				return x2v;
			}
		}
		return false;
	}

	

 	
	let l6i = false;
	if (h9x[k1c-1] == 'x')
	{
		l6i = true;
		k1c--;
	}
	else if (h9x[k1c-1] == '-') 
	{
		l6i = false;
		k1c--;
	}

	if (k1c < 2)
	{
		return false;
	}

 	if (k1c == 2)
	{
		
		let u1s = h9x[1]; 
		if (u1s >= 'a' && u1s <= 'h')
		{
			let y0l = l2u(u1s);
			let y4u  = 0;
      let t3i = null;
			for (const x2v of f2c)
			{
				if (z7g(x2v.d4d) == y0l)
				{
					t3i = x2v;
					y4u++;
				}
			}
      return y4u === 1 ? t3i : false;
		}
		if (u1s >= '1' && u1s <= '8')
		{
			let g3i = l0m(u1s);
			let y4u = 0;
      let t3i = null;
			for (const x2v of f2c)
			{
				if (a3p(x2v.d4d) == g3i)
				{
					t3i = x2v;
					y4u++;
				}
			}
      return y4u === 1 ? t3i : false;
		}
		return false;
	}

 	if (k1c == 3)
	{
		
		let e4d = '';
		e4d += h9x[1]; 
		e4d += h9x[2];
		let c4d = z0q(e4d);
		if (c4d == f1k)
		{
  		return false;
		}
		let y4u = 0;
    let t3i = null;
		for (const x2v of f2c)
		{
			if (x2v.d4d == c4d)
			{
				t3i = x2v;
				y4u++;
			}
		}
    return y4u === 1 ? t3i : false;
	}

	return false;
}

function w1h()
{
  let h8f = ["images/board/BoardBackground.png",
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
  return h8f;
}
function div(c2m, n8w)
{
  const h0g = c2m % n8w;
  const quot = Math.floor((c2m - h0g) / n8w);
  return { quot: quot, h0g: h0g };
}

function d6c(e3i, c7b)
{
	let c7j = new j7i();
	if (c7b.length < 4)
	{
		return c7j;
	}
	let e4d = c7b.slice(0, 2);
	let toString = c7b.slice(2, 4);
	c7j.d4d = z0q(e4d);
  c7j.v5m = e3i.j0s(c7j.d4d);
	c7j.z4d = z0q(toString);
	c7j.o9x = c7j.v5m;
	if (c7b.length == 5)
	{
		switch (c7b[4])
		{
			case 'q':
				c7j.o9x = e3i.q8y() ? r4u.n3b : r4u.n8i;
				break;
			case 'r':
				c7j.o9x = e3i.q8y() ? r4u.l5x : r4u.t2o;
				break;
			case 'b':
				c7j.o9x = e3i.q8y() ? r4u.m1p : r4u.d5l;
				break;
			case 'n':
				c7j.o9x = e3i.q8y() ? r4u.f3a : r4u.s7h;
				break;
		}
	}
	return c7j;
}

class f8r
{

constructor()
{
	let d3i = '';
	let value = '';
}

}

function z3q(c7b, d3i, o3r)
{
  let e6z = " " + d3i + " ";
  let y0y = c7b.indexOf(e6z, 0);
	if (y0y >= 0)
	{
		let a4x = y0y + e6z.length;
		let m8v = 0;
		
		if (d3i == "pv")
		{
			m8v = c7b.indexOf(" string ", a4x);
		}
		else
		{
			m8v = c7b.indexOf(" ", a4x);
		}
		if (m8v < 0)
		{
			m8v = c7b.length;
		}
    let value = c7b.slice(a4x, m8v).trim();
		o3r.set(d3i, value);
	}
}

const w4y =
{
	f3g        : 0,
	o5f      : 1,
};

class Engine
{

constructor()
{
	this.w8o = new o7u();
  this.x7w = null;
  this.t0o = new w2e();
  this.x4x = new s1n();
  this.v3f = false;
  this.c4y = false;
  this.y6e = false;
  this.o8n = false;
  this.z8c = false;
  this.k7x = new i0q();
	this.u4h = new d1f();
  this.m1x = null;
}

v5i(s3c)
{
  this.w8o = s3c.z4e();
  this.l7q();
  this.v3f = false;
 	for (const d2u of this.w8o.u9z.u9z)
	{
		if (d2u.d3i == "MultiPV")
		{
			this.v3f = (d2u.value != "1");
			break;
		}
	}

  this.d8i();
}

d8i()
{
  this.x7w = new Worker("engines/stockfish/stockfish-17.1-8e4d048.js");
  this.x7w.m1x = (event) => {
    this.o5f(event);
  };
}

g9t()
{
	this.t0o.p7a();
	this.x4x.p7a();
	this.f3g("uci");
}

r2r()
{
	if (!this.y6e)
	{
    return;
  }

  
	for (const d2u of this.w8o.u9z.u9z)
	{
		let d9e = "setoption";
		d9e += " name ";
		d9e += d2u.d3i;
		d9e += " value ";
		d9e += d2u.value;
		this.f3g(d9e);
	}
  
  
  
  

	this.f3g("isready");
	this.y6e = false;
}

f3g(h1f)
{
	this.w8f(h1f, w4y.f3g);
  this.x7w.postMessage(h1f);
}

o5f(event)
{
  
  
 	this.w8f(event.data, w4y.o5f);
	this.p9m(event.data);
}

p9m(d9e)
{
	let y2d = d9e.split(' ');
	if (y2d.length == 0) return;
	let h1f = y2d[0];

	if (h1f == "readyok")
	{
		this.c4y = true;
    if (this.m1x)
    {
      this.m1x({
        cmd: "ready",
        data: {}
        });
    }
		return;
	}
	if (h1f == "bestmove")
	{
		this.t0n(d9e);
	}
	else if (h1f == "id")
	{
		this.o3h(d9e);
	}
	else if (h1f == "info")
	{
		this.h6k(d9e);
	}
	else if (h1f == "option")
	{
		this.m5x(d9e);
	}
	else if (h1f == "uciok")
	{
		this.p6p(d9e);
	}
}

t0n(d9e)
{
	this.o8n = false;
  if (this.z8c)
  {
    this.z8c = false;
    this.o9i();
  }
}

o3h(d9e)
{
 	let c7b = d9e;
	let y2d = c7b.split(" ");
	if (y2d.length < 3) return;

  const word1 = y2d.shift();
  const word2 = y2d.shift();
  const value = y2d.join(' ');

	if (word2 == "name")
	{
		this.t0o.d3i = value;
	}
	else if (word2 == "author")
	{
		this.t0o.l5a = value;
	}
}

h6k(d9e)
{
	let c7b = d9e;
	let o3r = new Map();
	z3q(c7b, "depth", o3r);
 	z3q(c7b, "seldepth", o3r);
	z3q(c7b, "pv", o3r);
	z3q(c7b, "nps", o3r);
	z3q(c7b, "nodes", o3r);
	z3q(c7b, "score cp", o3r);
	z3q(c7b, "score mate", o3r);
	z3q(c7b, "time", o3r);
	z3q(c7b, "currmove", o3r);
	z3q(c7b, "currmovenumber", o3r);
 	z3q(c7b, "multipv", o3r);

  if (o3r.has("pv") && o3r.has("depth"))
  {
		this.i0v(o3r);
    if (this.m1x)
    {
      this.m1x({
        cmd: "pv",
        data: {}
        });
    }

		return;
  }

  if (o3r.has("currmove") && o3r.has("currmovenumber"))
	{
		this.n5q(o3r);
    if (this.m1x)
    {
      this.m1x({
        cmd: "cm",
        data: {}
        });
    }
		return;
	}
}

m5x(d9e)
{
	let d2u = new r5n();
	let c7b = d9e;

	let j5o = " name ";
  let p9n = c7b.indexOf(j5o, 0);
	if (p9n < 0) return;
	let e8p = p9n + j5o.length;

	let d8w = " type ";
	let u6r = c7b.indexOf(d8w, 0);
	if (u6r < 0) return;
	let e1b = u6r;

	let b5l = u6r + d8w.length;
	let n3y = c7b.indexOf(" ", b5l);
	if (n3y < 0) n3y = c7b.length + 1;

	d2u.d3i = c7b.slice(e8p, e1b);
	d2u.type = c7b.slice(b5l, n3y);

	if (d2u.type == "check")
	{
		d2u.type = "bool";
	}
	else if (d2u.type == "combo")
	{
		d2u.type = "enum";
	}

	let v7t = " default ";
	let f5n = c7b.indexOf(v7t, 0);
	if (f5n >= 0)
	{
		let t1b = f5n + v7t.length;
		let k0r = c7b.indexOf(" ", t1b);
		if (k0r < 0) k0r = c7b.length + 1;
		d2u.value = c7b.slice(t1b, k0r);
		if (d2u.value == "<empty>")
		{
			d2u.value = "";
		}
	}
	if (d2u.type == "spin")
	{
		let r8z = " min ";
		let h1v = c7b.indexOf(r8z, 0);
		if (h1v >= 0)
		{
			let c4g = h1v + r8z.length;
			let i4q = c7b.indexOf(" ", c4g);
			if (i4q < 0) i4q = c7b.length + 1;
			d2u.min = c7b.slice(c4g, i4q).trim();
		}
		let n3n = " max ";
		let p4s = c7b.indexOf(n3n, 0);
		if (p4s >= 0)
		{
			let d7f = p4s + n3n.length;
			let i6q = c7b.indexOf(" ", d7f);
			if (i6q < 0) i6q = c7b.length + 1;
			d2u.max = c7b.slice(d7f, i6q).trim();
		}
	}
	else if (d2u.type == "enum")
	{
		let d6y = 0;
		while (true)
		{
			let u6e = " var ";
			let x2r = c7b.indexOf(u6e, d6y);
			if (x2r < 0) break;
			let g1b = x2r + u6e.length;
			let l6v = c7b.indexOf(" var ", x2r + 5);
			if (l6v < 0) l6v = c7b.length + 1;
			if (d2u.values.length != 0)
			{
				d2u.values += " ";
			}
			d2u.values += c7b.slice(g1b, l6v).trim();
			d6y = l6v;
		}
	}
	this.x4x.u9z.push(d2u);
}

p6p(d9e)
{
	this.y6e = true;
  this.r2r();
}


w0b()
{
	if (this.x7w)
  {
    this.f3g("quit");
    this.x7w.terminate();
    this.x7w = null;
  }
}








l9s()
{
}

k5q(input)
{
	if (this.c4y)
	{
  	this.w8f('setInput', w4y.f3g);
		this.k7x = input.z4e();
    if (this.o8n)
    {
      this.z8c = true;
      this.f3g('stop');
    }
    else
    {
      this.o9i();
    }
	}
}

o9i()
{
  this.u4h = new d1f();
  this.u4h.e3i = this.k7x.e5o();
  this.u4h.f6q = this.k7x.f6q();
	this.u4h.b3a = this.v3f;
  this.o8n = true;
  if (this.m1x)
  {
    this.m1x({
      cmd: "go",
      data: {}
      });
  }

  let d9e = "position fen";
  d9e += " ";
	let q5l = s4j(this.k7x.e5o());
	d9e += q5l;
	this.f3g(d9e);
	if (this.k7x.e6e == z2x)
	{
		d9e = "go infinite";
		this.f3g(d9e);
	}
	else
	{
		d9e = "go movetime ";
		d9e += this.k7x.e6e;
		this.f3g(d9e);
	}
}

l7q()
{
}

w8f(c7b, q2o)
{
	if (!this.w8o.s3i) return;
 	if (q2o == w4y.o5f)
	{
    console.log("From engine:", c7b);
	}
	else
	{
    console.log("To engine:", c7b);
	}
}

i0v(o3r)
{
  let p9b = o3r.get("depth");
  let c3y = o3r.get("multipv");

	let j1a = new b4b();
	j1a.f5h = p9b;

	if (o3r.has("seldepth"))
	{
		j1a.t7d = o3r.get("seldepth");
	}

 	if (o3r.has("nps"))
	{
    let a1t = o3r.get("nps");
		let u3q = y0d(a1t, 0);
		let e0c = u3q / 1000;
		if (e0c)
		{
			j1a.h5c = e0c + " kN/s";
		}
	}

	let a0p = 0.0;
  if (o3r.has("score cp"))
	{
    let h5i = o3r.get("score cp");
		a0p = parseFloat(h5i);
		a0p = a0p / 100.0;
		if (a0p > 9.99)
		{
			a0p = 9.99;
		}
		if (a0p < -9.99)
		{
			a0p = -9.99;
		}
		if (this.u4h.e3i.a7q())
		{
			a0p = -a0p;
		}
		j1a.a0p = a0p;
	}
  if (o3r.has("score mate"))
	{
    let s5z = o3r.get("score mate");
		let v9b = y0d(s5z, 0);
		if (this.u4h.e3i.a7q())
		{
			v9b = -v9b;
		}
		j1a.v9b = v9b;
		if (v9b > 0)
		{
			a0p = 9.99;
		}
		if (v9b < 0)
		{
			a0p = -9.99;
		}
		j1a.a0p = a0p;
	}

  if (o3r.has("time"))
	{
    let d8o = o3r.get("time");
		let u0t = y0d(d8o, 0);
		let w0e = u0t / 1000;
		let m = div(w0e, 60);
		let p3g = m.h0g;
    p3g = Math.u6y(p3g);
		let h = div(m.quot, 60);
		let b6x = h.h0g;
		let t4z = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const w5r = `${pad(t4z)}:${pad(b6x)}:${pad(p3g)}`;
    j1a.w5r = w5r;
	}

  let o7k = o3r.get("pv");
	let y8o = o7k.split(" ");

	let z1l = new l1j();
	let f6q = this.u4h.f6q;
	z1l.l8r(this.u4h.e3i, f6q);
	let f3r = z1l.u4v();
	let n5d = this.u4h.e3i.z4e();
	for (const s of y8o)
	{
		if (s.length == 0)
		{
			continue;
		}
		let s4w = d6c(n5d, s);
		let f2c = y1w(n5d);
		let v8f = false;
		for (const x2v of f2c)
		{
			if (x2v.z4d == s4w.z4d &&
				x2v.d4d == s4w.d4d &&
				x2v.o9x == s4w.o9x)
			{
				n5d.i8p(x2v);
				let c7j = a7k(x2v);
				z1l.d4y(f3r, c7j);
				v8f = true;
				break;
			}
		}
    if (!v8f) break;
	}
	if (!z1l.i0g())
	{
    console.log("parse moves aantal: leeg!");
		return;
	}
  console.log("parse moves aantal: " + z1l.i0g());
	j1a.z1l = z1l;

 	if (this.v3f)
	{
		if (c3y == 1)
		{
			this.u4h.n8d = j1a;
		}
		if (c3y > this.u4h.lines.length)
		{
			this.u4h.lines.push(j1a);
		}
		else
		{
			this.u4h.lines[c3y-1] = j1a;
		}
	}
	else
	{
		this.u4h.lines.push(j1a);
		this.u4h.n8d = j1a;
	}
}

n5q(o3r)
{
  let f1e = o3r.get("currmove");
  let f9y = o3r.get("currmovenumber"); 
	this.u4h.a9a = y0d(f9y, 0);
	let f2c = y1w(this.u4h.e3i);
	this.u4h.f2z = f2c.length;
	let s4w = d6c(this.u4h.e3i, f1e);
	for (const x2v of f2c)
	{
		if (x2v.z4d == s4w.z4d &&
			x2v.d4d == s4w.d4d &&
			x2v.o9x == s4w.o9x)
		{
			this.u4h.s5x = x2v;
			break;
		}
	}
}

i4b()
{
	return this.u4h.z4e();
}

s3c()
{
	return this.w8o.z4e();
}

}

class w2e
{

constructor()
{
	this.d3i = '';
	this.l5a = '';
	this.r3i = '';
	this.h1a = '';
}

z4e()
{
  return Object.assign(new w2e(), this);
}

p7a()
{
	this.d3i = '';
	this.l5a = '';
	this.r3i = '';
	this.h1a = '';
}

}


const z2x = 10000000;

class i0q
{

constructor()
{
	this.z1l = new l1j();
	this.e6e = z2x;
  this.d0k = 0;
	this.l2p = 0;
}

z4e()
{
	let g8k = new i0q();
  g8k.z1l = this.z1l.z4e();
  g8k.e6e = this.e6e;
  g8k.d0k = this.d0k;
  g8k.l2p = this.l2p;
	return g8k;
}

f6q()
{
	return this.z1l.d3y(this.z1l.k5o());
}

e5o()
{
	return this.z1l.f4v();
}

}


class o7u
{

constructor()
{
	this.j7u = '';
	this.id = new w2e();
	this.u9z = new s1n();
	this.p8j = new s1n();
	this.s3i = true;
	this.i8j = true;
}

z4e()
{
	let b3f = new o7u();
	b3f.j7u = this.j7u;
	b3f.id = this.id.z4e();
	b3f.u9z = this.u9z.z4e();
	b3f.p8j = this.p8j.z4e();
	b3f.s3i = this.s3i;
	b3f.i8j = this.i8j;
	return b3f;
}


}


function j5g(a0p)
{
  if (Math.abs(a0p) < 0.005)
  {
    return "0.00";
  }
  else
  {
     const formatted = a0p.toFixed(2);
     return a0p > 0 ? `+${formatted}` : formatted;
  }
}

class b4b
{

constructor()
{
	this.a0p = 0.0;
	this.v9b = false;
	this.f5h = '';
	this.t7d = '';
	this.w5r = '';
	this.h5c = '';
	this.z1l = new l1j();
}

z4e()
{
	let m3l = new b4b();
  m3l.a0p = this.a0p;
  m3l.v9b = this.v9b;
  m3l.f5h = this.f5h;
  m3l.t7d = this.t7d;
  m3l.w5r = this.w5r;
  m3l.h5c = this.h5c;
  m3l.z1l = this.z1l.z4e();
	return m3l;
}

f4m()
{
	if (this.v9b)
	{
		return "#" + this.v9b;
	}
	else
	{
		return j5g(this.a0p);
	}
}

r7d()
{
	let y6o = scoreToMoveValue(this.a0p);
	let f0s = moveValueToEvalString(y6o);
	return f0s;
}

}

class d1f
{

constructor()
{
	this.e3i = new b6u();
	this.f6q = 1;
	this.z3g = false;
	this.f2i = false;
	this.b3a = false;
	this.lines = [];
	this.n8d = new b4b();
	this.s5x = new j7i();
	this.a9a = 0;
	this.f2z = 0;
}

z4e()
{
	let g8f = new d1f();
  g8f.e3i = this.e3i.z4e();
  g8f.f6q = this.f6q;
  g8f.z3g = this.z3g;
  g8f.f2i = this.f2i;
  g8f.b3a = this.b3a;
  g8f.lines = this.lines.slice();
  g8f.n8d = this.n8d.z4e();
  g8f.s5x = this.s5x.z4e();
  g8f.a9a = this.a9a;
  g8f.f2z = this.f2z;
	return g8f;
}

o6i()
{
	return this.n8d.z1l.i0g() > 0;
}

d6b()
{
	let b9l = this.n8d.z1l.u4v();
	this.n8d.z1l.i8p(b9l);
	return b9l.c7j.x2v();
}

}


class r5n
{
  constructor(type = '', d3i = '', value = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.d3i = d3i;
    this.value = value;
    this.min = min;
    this.max = max;
    this.values = values;
  }

  z4e()
  {
    return Object.assign(new r5n(), this);
  }
}

class s1n
{
  constructor()
  {
    this.u9z = [];
  }

  z4e()
  {
    let u5n = new s1n();
    u5n.u9z = this.u9z.map(p => p.z4e());
    return u5n;
  }

  p7a()
  {
    this.u9z.length = 0;
  }

  addBool(d3i, value)
  {
    this.u9z.push(new r5n("bool", d3i, value));
  }

  addInteger(d3i, value)
  {
    this.u9z.push(new r5n("int", d3i, value));
  }

  addSpin(d3i, value, min, max)
  {
    this.u9z.push(new r5n("spin", d3i, value, min, max));
  }

  addString(d3i, value)
  {
    this.u9z.push(new r5n("string", d3i, value));
  }

  addEnum(d3i, value, values)
  {
    this.u9z.push(new r5n("enum", d3i, value, '', '', values));
  }

  addButton(d3i)
  {
    this.u9z.push(new r5n("button", d3i, d3i));
  }

  s0b(d3i, value)
  {
    for (let d2u of this.u9z)
    {
      if (d2u.d3i === d3i)
      {
        d2u.value = value;
      }
    }
  }
}
class v6k
{

constructor()
{
	this.d3i = '';
}

z4e()
{
	let c8h = new v6k();
	c8h.d3i = this.d3i;
	return c8h;
}

f7c()
{
	return this.d3i.length == 0;
}

f6k()
{
	return this.d3i;
}

}


const y3a =
{
	i6p : 0,
	l8g : 1,
	j0r: 2,
	v7o: 3,
	x6e: 4,
	a8x: 5,
	e7c: 6,
	a7m: 7,
	e2j: 8,
	q5j: 9,
	m9u: 10,
	i4z: 11,
	s8a: 12,
	p8z: 13,
	g1i: 14,
	e9h: 15,
	l9z: 16,
	g3a: 17,
	h2p: 18,
	d2b: 19,
	t3m: 20,
	h0c: 21,
	l0d: 22,
	h0k: 23,
	u0i: 24,
	y0i: 25,
	c4q: 26,
	j2q: 27,
	g6a: 28,
	b1r: 29,
	s7r: 30,
	u4c: 31,
	d5w: 32,
	o6n: 33,
	e8m: 34,
	i8a: 35,
	s9g: 36,
	i7q: 37,
	z6u: 38,
	e8i: 39,
	g6b: 40,
	d0q: 41,
	r3s: 42,
	x7y: 43,
	g5l: 44,
	f7i: 45,
	r6g: 46,
	p4i: 47,
	u8z: 48,
	h3e: 49,
	d3f: 50,
	s2l: 51,
	m2s: 52,
	u6l: 53,
	y5s: 54,
	q2n: 55,
	f7t: 56,
	i9w: 57,
	g3w: 58,
	f7u: 59,
	l1n: 60,
	h1m: 61,
	u4x: 62,
	i1o: 63,
	d2i: 64,
	t3c: 65,
	f3c: 66,
	l2e: 67,
	p4y: 68,
	t8e: 69,
	d8b: 70,
	z3o: 71,
	i1w: 72,
	m1r: 73,
	x8c: 74,
	r3c: 75,
	g4v: 76,
	d9s: 77,
	z0b: 78,
	s9s: 79,
	e3b: 80,
	h8x: 81,
	l3p: 82,
	b3e: 83,
	c6q: 84,
	r4e: 85,
	n1p: 86,
	r9g: 87,
	e7m: 88,
	e4z: 89,
	m0q: 90,
	t9x: 91,
	t8f: 92,
	c3r: 93,
	n0h: 94,
	r7x: 95,
	i4r: 96,
	l3g: 97,
	n8j: 98,
	s5y: 99,
	d0y: 100,
	y8n: 101,
	x4z: 102,
	j1l: 103,
	g7k: 104,
	c8l: 105,
	l7i: 106,
	u7w: 107,
	g7z: 108,
	s8c: 109,
	o8s: 110,
	l4a: 111,
	i3u: 112,
	k7f: 113,
	y5n: 114,
	i6r: 115,
	f0t: 116,
	w0k: 117,
	p3w: 118,
	j5p: 119,
	s1h: 120,
	x6z: 121,
	m6a: 122,
	z2z: 123,
	u5a: 124,
	y2m: 125,
	r4j: 126,
	r6m: 127,
	g8y: 128,
	t4q: 129,
	f6b: 130,
	j8j: 131,
	y8h: 132,
	l6g: 133,
	w1a: 134,
	d0b: 135,
	c6w: 136,
	y0w: 137,
	u2g: 138,
	t5z: 139,
	q1u: 140,
	y1k: 141,
	k3c: 142,
	s6x: 143,
	w1v: 144,
	n0p: 145,
	d6d: 146,
	l8t: 147,
	k9n: 148,
	e0o: 149,
	d0o: 150,
	b2q: 151,
	t7q: 152,
	i8i: 153,
	u3t: 154,
	z8g: 155,
	e4c: 156,
	i5g: 157,
	j6s: 158,
	v6e: 159,
	u7i: 160,
	l7p: 161,
	l1s: 162,
	e8j: 163,
	p7q: 164,
	k1f: 165,
	s6j: 166,
	y4b: 167,
	x4j: 168,
	h8n: 169,
	s7m: 170,
	j1u: 171,
	a3h: 172,
	r5p: 173,
	a0e: 174,
	r1h: 175,
	m2f: 176,
	b7v: 177,
	z4a: 178,
	g2j: 179,
	q1h: 180,
	o9p: 181,
	q9p: 182,
	z6q: 183,
	t4s: 184,
	q5d: 185,
	e3a: 186,
	p6y: 187,
	k5c: 188,
	h1i: 189,
	v1e: 190,
	c7t: 191,
	v3m: 192,
	q6j: 193,
	n6m: 194,
	g8e: 195,
	m5k: 196,
	c0d: 197,
	l6e: 198,
	r7h: 199,
	f2v: 200,
	k3j: 201,
	f0z: 202,
	r2s: 203,
	v0o: 204,
	g9k: 205,
	a8o: 206,
	e7k: 207,
	l5d: 208,
	h8i: 209,
	j2u: 210,
	s5m: 211,
	d5t: 212,
	g0n: 213,
	c2j: 214,
	d7v: 215,
	b1z: 216,
	s1q: 217,
	h0h: 218,
	e3f: 219,
	m2c: 220,
	c7o: 221,
	i9j: 222,
	r7p: 223,
	s4d: 224,
	z5o: 225,
	c5u: 226,
	t1e: 227,
	d3w: 228,
	r9l: 229,
	d7d: 230,
	w8m: 231,
	c1o: 232,
	o3d: 233,
	p9l: 234,
	k4j: 235,
	x0h: 236,
	z1e: 237,
	h9s: 238,
	t1w: 239,
	v1u: 240,
	q3r: 241,
	i9c: 242,
	v9y: 243,
	d6s: 244,
	h5f: 245,
	f5k: 246,
	z4y: 247,
	e5s: 248,
	t2z: 249,
	l0b: 250,
	b4j: 251,
	v1b: 252,
	k8h: 253,
	v5j: 254,
	i9i: 255,
	r6d: 256,
	y4a: 257,
	m2r: 258,
	h7z: 259
};


const h7i = 0;
const k2j = 500;

function w8w(c7b)
{
	if (c7b.length != 3)
	{
		return 0;
	}
	let o3i = c7b[0];
	let d4m = c7b[1];
	let v3k = c7b[2];

	let v2t = 0;
	if (o3i == 'A' || o3i == 'a') v2t = 0;
	else if (o3i == 'B' || o3i == 'b') v2t = 1;
	else if (o3i == 'C' || o3i == 'c') v2t = 2;
	else if (o3i == 'D' || o3i == 'd') v2t = 3;
	else if (o3i == 'E' || o3i == 'e') v2t = 4;
	else return 0;
	if (isNaN(d4m) || isNaN(v3k))
	{
		return 0;
	}
	return v2t * 100 + y0d(c7b.substr(1, 2), 0) + 1;
}

function b2h(z1u)
{
	if (z1u)
	{
		let div = Math.trunc((z1u - 1) / 100);
		let h0g = (z1u - 1) % 100;
		let u7q = 'A';
		if (div == 0) u7q = 'A';
		else if (div == 1) u7q = 'B';
		else if (div == 2) u7q = 'C';
		else if (div == 3) u7q = 'D';
		else if (div == 4) u7q = 'E';
		return u7q + h0g.toString().padStart(2, '0');
	}
	else
	{
		return "";
	}
}
class m1n
{

constructor()
{
	this.q1p = 0;
	this.x1v = 0;
	this.p1p = 0;
}

z4e()
{
	let t7l = new m1n();
	t7l.h1h = this.q1p;
	t7l.k2z = this.x1v;
	t7l.s6z = this.p1p;
	return t7l;
}

f7c()
{
	return this.p1p == 0 && this.x1v == 0 && this.q1p == 0;
}

i4j()
{
	let s6z = this.p1p.toString().padStart(4, '0');
	let k2z = this.x1v.toString().padStart(2, '0');
	let h1h = this.q1p.toString().padStart(2, '0');
	return s6z + k2z + h1h;
}

u8y(z1y, c7b)
{
	let h1q = c7b.length;
	if (!h1q)
	{
		this.p1p = 0;
		this.x1v = 0;
		this.q1p = 0;
	}
	else if (z1y == "dd-mm-yyyy" || z1y == "dd.mm.yyyy")
	{
  	if (h1q == 4)
		{
      this.p1p = y0d(c7b.substr(1, 4), 0);
		}
		else if (h1q == 10)
		{
			this.q1p = y0d(c7b.substr(0, 2), 0);
			this.x1v = y0d(c7b.substr(3, 2), 0);
			this.p1p = y0d(c7b.substr(6, 4), 0);
		}
	}
	else if (z1y == "yyyy-mm-dd" || z1y == "yyyy.mm.dd")
	{
  	if (h1q == 4)
		{
      this.p1p = y0d(c7b.substr(1, 4), 0);
		}
		else if (h1q == 10)
		{
			this.q1p = y0d(c7b.substr(8, 2), 0);
			this.x1v = y0d(c7b.substr(5, 2), 0);
			this.p1p = y0d(c7b.substr(0, 4), 0);
		}
	}
	else if (z1y == "dd-mm-yy" || z1y == "dd.mm.yy")
	{
		if (h1q == 8)
		{
			this.q1p = y0d(c7b.substr(0, 2), 0);
			this.x1v = y0d(c7b.substr(3, 2), 0);
			this.p1p = y0d(c7b.substr(6, 2), 0) + 2000;
		}
	}
}

toString(z1y)
{
	let c7b = '';
	if (this.f7c())
	{
	}
	else if (z1y == "list")
	{
		let s6z = this.p1p.toString().padStart(4, '0');
		let k2z = this.x1v.toString().padStart(2, '0');
		let h1h = this.q1p.toString().padStart(2, '0');
		if (this.q1p)
		{
			c7b = h1h + "-" + k2z + "-" + s6z;
		}
		else if (this.x1v)
		{
			c7b = k2z + "-" + s6z;
		}
		else if (this.p1p)
		{
			c7b = s6z;
		}
	}
	else if (z1y == "dd-mm-yyyy")
	{
		let s6z = this.p1p.toString().padStart(4, '0');
		let k2z = this.x1v.toString().padStart(2, '0');
		let h1h = this.q1p.toString().padStart(2, '0');
		c7b = h1h + "-" + k2z + "-" + s6z;
	}
	else if (z1y == "dd.mm.yyyy")
	{
		let s6z = this.p1p.toString().padStart(4, '0');
		let k2z = this.x1v.toString().padStart(2, '0');
		let h1h = this.q1p.toString().padStart(2, '0');
		c7b = h1h + "." + k2z + "." + s6z;
	}
	else if (z1y == "yyyy-mm-dd")
	{
		let s6z = this.p1p.toString().padStart(4, '0');
		let k2z = this.x1v.toString().padStart(2, '0');
		let h1h = this.q1p.toString().padStart(2, '0');
		c7b = s6z + "-" + k2z + "-" + h1h;
	}
	else if (z1y == "yyyy.mm.dd")
	{
		let s6z = this.p1p.toString().padStart(4, '0');
		let k2z = this.x1v.toString().padStart(2, '0');
		let h1h = this.q1p.toString().padStart(2, '0');
		c7b = s6z + "." + k2z + "." + h1h;
	}
	else if (z1y == "yyyymmdd")
	{
		let s6z = this.p1p.toString().padStart(4, '0');
		let k2z = this.x1v.toString().padStart(2, '0');
		let h1h = this.q1p.toString().padStart(2, '0');
		c7b = s6z + k2z + h1h;
	}
	else if (z1y == "yyyy")
	{
		let s6z = this.p1p.toString().padStart(4, '0');
		c7b = s6z;
	}
	return c7b;
}

}

class q8k
{

constructor()
{
	this.m1i = new l6s();
	this.h4v = new y7u();
	this.g1u = 0;
	this.time = 0;
	this.d9y = "";
  this.h1a = y3a.i6p;
}

z4e()
{
	let b5y = new q8k();
	b5y.m1i = this.m1i.z4e();
	b5y.h4v = this.h4v.z4e();
	b5y.g1u = this.g1u;
	b5y.time = this.time;
	b5y.d9y = this.d9y;
  b5y.h1a = this.h1a;
	return b5y;
}

f7c()
{
	return this.m1i.f7c() &&
		this.h4v.f7c() &&
		this.g1u == 0 &&
		this.time == 0 &&
		this.d9y == "" &&
 		this.h1a == y3a.i6p;
}

}


class p6g
{

constructor()
{
	this.j1n = new q8k();
	this.f0n = new q8k();
	this.h4b = new r7i();
	this.e4h = new v6k();
	this.p7z = new u9c();
	this.d9y = new q7g();
	this.i4j = new m1n();
	this.t7t = q9v.i6p;
	this.z1u = 0;
	this.u6y = 0;
	this.z9l = 0;
	this.a5x = new d6o();
  this.id = new i6l();
}

z4e()
{
	let v2g = new p6g();
	v2g.j1n = this.j1n.z4e();
	v2g.f0n = this.f0n.z4e();
	v2g.h4b = this.h4b.z4e();
	v2g.e4h = this.e4h.z4e();
	v2g.p7z = this.p7z.z4e();
	v2g.d9y = this.d9y.z4e();
	v2g.i4j = this.i4j.z4e();
	v2g.t7t = this.t7t;
	v2g.z1u = this.z1u;
	v2g.u6y = this.u6y;
	v2g.z9l = this.z9l;
	v2g.a5x = this.a5x.z4e();
  v2g.id = this.id.z4e();
	return v2g;
}

f7c()
{
	return this.j1n.f7c() &&
		this.f0n.f7c() &&
		this.h4b.f7c() &&
		this.e4h.f7c() &&
		this.p7z.f7c() &&
		this.d9y.f7c() &&
		this.i4j.f7c() &&
		this.t7t == q9v.i6p &&
		this.z1u == 0 &&
		this.u6y == 0 &&
		this.z9l == 0 &&
		this.a5x.f7c();
}

c8o()
{
	let c7b = '';
	if (this.z9l)
	{
		c7b = this.u6y.toString() + "." + this.z9l.toString();
	}
	else if (this.u6y)
	{
		c7b = this.u6y.toString();
	}
	return c7b;
}

}


class i6l
{

constructor()
{
	this.l4b = '';
}

z4e()
{
	let v5n = new i6l();
	v5n.l4b = this.l4b;
	return v5n;
}

toString()
{
  return this.l4b;
}

}


class q7g
{

constructor()
{
	this.d9y = '';
}

z4e()
{
	let w5u = new q7g();
	w5u.d9y = this.d9y;
	return w5u;
}

f7c()
{
	return this.d9y.length == 0;
}

f6k()
{
	return this.d9y;
}

}


class l6s
{

constructor()
{
	this.p6o = '';
	this.g7b = '';
}

z4e()
{
	let c1q = new l6s();
	c1q.p6o = this.p6o;
	c1q.g7b = this.g7b;
	return c1q;
}

f7c()
{
	return this.g7b.length == 0 &&
		this.p6o.length == 0;
}

d3i()
{
	if (!this.g7b.length == 0 && !this.p6o.length == 0)
	{
		return this.g7b + "," + this.p6o;
	}
	else if (this.g7b.length == 0 && this.p6o.length == 0)
	{
		return "";
	}
	else if (this.p6o.length == 0)
	{
		return this.g7b;
	}
	else
	{
		return this.p6o;
	}
}

w0q()
{
	return this.d3i().replace(/,/g, " ");
}

n8r()
{
	return this.g1w(1).replace(/,/g, " ");
}

g1w(a2q)
{
	if (this.g7b.length == 0)
	{
		if (this.p6o.length == 0 || a2q < 1)
		{
			return "";
		}
		else
		{
			return this.p6o.substring(0, a2q);
		}
	}
	else
	{
		if (this.p6o.length == 0 || a2q < 1)
		{
			return this.g7b;
		}
		else
		{
			return this.g7b + "," + this.p6o.substring(0, a2q);
		}
	}
}

u6h(e8n)
{
	let c7b = e8n.trim();
	let b9l = c7b.lastIndexOf(",");
	if (b9l != -1)
	{
		this.g7b = c7b.substr(0, b9l).trim();
		this.p6o = c7b.substr(b9l+1, c7b.length).trim();
		if (this.p6o.length != 0)
		{
			if (this.p6o.charAt(0).toLowerCase() == this.p6o.charAt(0))
			{
				this.g7b += ",";
				this.g7b += this.p6o;
				this.p6o = "";
			}
		}
	}
	else
	{
		this.g7b = c7b;
		this.p6o = "";
	}
}

f6k()
{
	return this.d3i();
}

}

const q9v =
{
	i6p : 0,
	l8a : 1,
	m9x : 2,
	z6p : 3,
	f9a : 4,
	f4n : 5,
	o7d : 6,
	t5n : 7,
	n7g : 8,
	v0v : 9,
	y0p : 10,
	z6s : 11,
	n1o : 12,
	f6l : 13,
	l4k : 14,
	j6v : 15
};


function o3m(t7t)
{
	switch (t7t)
	{
		case q9v.l8a:
			return "2-0";
		case q9v.z6p:
			return "1-1";
		case q9v.m9x:
			return "0-2";
		default:
			return "";
	}
}
const l3x =
{
	n6u : 0,
	j7t : 1,
	h6m : 2
};

const w6a =
[
	[ l3x.n6u,   "High" ],
	[ l3x.j7t, "Middle" ],
	[ l3x.h6m,    "Low" ]
];

class u9c
{

constructor()
{
	this.d9y = '';
	this.n5y = '';
	this.l1m = new m1n();
	this.c5m = new m1n();
	this.a6r = 0;
	this.j2t = l3x.n6u;
}

z4e()
{
	let r6i = new u9c();
	r6i.d9y = this.d9y;
	r6i.n5y = this.n5y;
	r6i.l1m = this.l1m.z4e();
	r6i.c5m = this.c5m.z4e();
	r6i.a6r = this.a6r;
	r6i.j2t = this.j2t;
	return r6i;
}

f7c()
{
	return this.d9y.length == 0 &&
		this.n5y.length == 0 &&
		this.l1m.f7c() &&
		this.c5m.f7c() &&
		this.a6r == 0 &&
		this.j2t == l3x.n6u;
}

f6k()
{
	let c7b = this.d9y;
	if (this.n5y.length)
	{
		if (c7b.length)
		{
			c7b += " ";
		}
		c7b += this.n5y;
	}
	return c7b;
}

}


const z5r =
{
	o7v : 0,
	q1w : 1,
	a9c : 2,
	j8n : 3,
	m4w : 4,
	m2j : 5,
	t3g : 6,
	c5s : 7,
	l4e : 8,
	t4a : 9,
	l1t : 10,
	o6x : 11,
	z7c : 12,
	x8l : 13,
	k2s : 14,
	x5c : 15
};

class d6o
{

constructor()
{
	this.value = 0;
}

p1k(value)
{
	this.value = value;
}

z4e()
{
	let r5h = new d6o();
	r5h.value = this.value;
	return r5h;
}

f7c()
{
	return this.value == 0;
}

q0i()
{
	return this.value != 0;
}

i6p()
{
	return this.value == 0;
}

z7m()
{
	let s7n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.k7g(i))
		{
			s7n++;
		}
	}
	return s7n;
}

i9b()
{
	this.value = 0;
}

set(j8m, o0s)
{
	if (o0s)
	{
		this.value |= (1 << j8m);
	}
	else
	{
		this.value &= ~(1 << j8m);
	}
}

k7g(j8m)
{
	return (this.value & (1 << j8m)) != 0;
}

j1k()
{
	return this.value;
}

}

function d7q(s6z)
{
	return s6z.toString().padStart(4, '0');
}

class y7u
{

constructor()
{
	this.d3i = '';
	this.j8h = 0;
	this.s6z = 0;
	this.v6w = false;
	this.h1a = y3a.i6p;
}

z4e()
{
	let p5n = new y7u();
	p5n.d3i = this.d3i;
	p5n.j8h = this.j8h;
	p5n.s6z = this.s6z;
	p5n.v6w = this.v6w;
	p5n.h1a = this.h1a;
	return p5n;
}

f7c()
{
	return this.d3i.length == 0 &&
		this.j8h == 0 &&
		this.s6z == 0 &&
		this.v6w == false &&
		this.h1a == y3a.i6p;
}

i9d()
{
	let c7b = this.d3i;
	if (this.j8h)
	{
		if (c7b.length)
		{
			c7b += " ";
		}
		c7b += this.j8h;
	}
	return c7b;
}

f6k()
{
	let c7b = this.d3i;
	if (this.j8h)
	{
		if (c7b.length)
		{
			c7b += " ";
		}
		c7b += this.j8h;
	}
	if (c7b.length)
	{
		c7b += " ";
	}
	c7b += this.a4n();
	return c7b;
}


a9u()
{
	let c7b = this.d3i;
	if (this.j8h > 1)
	{
		c7b += " ";
		c7b += this.j8h;
	}
	return c7b;
}

a4n()
{
	let c7b = '';
	if (this.v6w)
	{
		let x9v = d7q(this.s6z);
		let j8y = d7q(this.s6z + 1);
		let k0q = x9v + "/" + j8y.substr(2, 2);
		c7b = k0q;
	}
	else
	{
		c7b = d7q(this.s6z);
	}
	return c7b;
}

}

class j3e
{

constructor()
{
	this.t4z = 0;
	this.b6x = 0;
	this.p3g = 0;

}

}

function o6y(c7b, t6v, time)
{
	time.t4z = 0;
	time.b6x = 0;
	time.p3g = 0;

	let h1q = c7b.length;
	if (!h1q || c7b == "?")
	{
		return;
	}
	let i = 0;
	for (; i < h1q; i++)
	{
		if (!isNaN(c7b[i]))
		{
			break;
		}
	}
	let t8c = '';
	for (; i < h1q; i++)
	{
		if (isNaN(c7b[i]))
		{
			break;
		}
		t8c += c7b[i].toString();
	}
	for (; i < h1q; i++)
	{
		if (!isNaN(c7b[i]))
		{
			break;
		}
	}
	let t6s = '';
	for (; i < h1q; i++)
	{
		if (isNaN(c7b[i]))
		{
			break;
		}
		t6s += c7b[i].toString();
	}
	for (; i < h1q; i++)
	{
		if (!isNaN(c7b[i]))
		{
			break;
		}
	}
	let u2w = '';
	for (; i < h1q; i++)
	{
		if (isNaN(c7b[i]))
		{
			break;
		}
		u2w += c7b[i].toString();
	}
	let s0j = y0d(t8c, 0);
	let n6t = y0d(t6s, 0);
	let a7p = y0d(u2w, 0);
	if (
		s0j < 0 || s0j > t6v ||
		n6t < 0 || n6t > 59 ||
		a7p < 0 || a7p > 59)
	{
		s0j = 0;
		n6t = 0;
		a7p = 0;
	}
	time.t4z = s0j;
	time.b6x = n6t;
	time.p3g = a7p;
}

function b5r(c7b)
{
	if (c7b.length == 0)
	{
		return 0;
	}
	else
	{
		let time = new j3e();
		o6y(c7b, 9, time);
		return time.t4z * 60 + time.b6x;
	}
}


const i5j =
{
	i6p : 0,
	s8f : 1,
	w0u : 2,
	h4b : 3,
	m9v : 4,
	t9e : 5,
	y5b : 6,
	h0d : 7
};

const p1j =
[
	[ i5j.i6p, 			 	""                   ],
	[ i5j.s8f,  		 	"SingleGame"         ],
	[ i5j.w0u,  		 	"Match"              ],
	[ i5j.h4b,  "RoundRobin"         ],
	[ i5j.m9v,   		"SwissSystem"        ],
	[ i5j.t9e,    "Knockout"           ],
	[ i5j.y5b,"Simul"              ],
	[ i5j.h0d,"ScheveningenSystem" ]
];

class r7i
{

constructor()
{
	this.d9y = '';
	this.i7v = '';
	this.t5p = new m1n();
	this.f8z = new m1n();
	this.u4j = a4f.j5k;
	this.n7m = 0;
	this.h1a = y3a.i6p;
	this.type = i5j.i6p;
	this.c9j = 0;
	this.c1y = false;
	this.g3q = false;
	this.n8a = false;
	this.u0m = false;
}

z4e()
{
	let b5q = new r7i();
	b5q.d9y = this.d9y;
	b5q.i7v = this.i7v;
	b5q.t5p = this.t5p.z4e();
	b5q.f8z = this.f8z.z4e();
	b5q.u4j = this.u4j;
	b5q.n7m = this.n7m;
	b5q.h1a = this.h1a;
	b5q.type = this.type;
	b5q.c9j = this.c9j;
	b5q.c1y = this.c1y;
	b5q.g3q = this.g3q;
	b5q.n8a = this.n8a;
	b5q.u0m = this.u0m;
	return b5q;
}

f7c()
{
	return this.d9y.length == 0 &&
		this.i7v.length == 0 &&
		this.t5p.f7c() &&
		this.f8z.f7c() &&
		this.u4j == a4f.j5k &&
		this.n7m == 0 &&
		this.h1a == y3a.i6p &&
		this.type == i5j.i6p &&
		!this.c9j &&
		!this.c1y &&
		!this.g3q &&
		!this.n8a &&
		!this.u0m;
}

f6k()
{
	let c7b = this.d9y;
	if (this.i7v.length)
	{
		if (c7b.length)
		{
			c7b += " ";
		}
		c7b += this.i7v;
	}
	if (c7b.length)
	{
		c7b += " ";
	}
	let s6z = this.t5p.s6z.toString().padStart(4, '0');
	c7b += s6z;
	return c7b;
}

}



const a4f =
{
	j5k : 0,
	u6c : 1,
	x6t : 2,
	y8f : 3
};

const m8w =
[
	[ a4f.j5k, "Normal" ],
	[ a4f.u6c,  "Rapid"  ],
	[ a4f.x6t,  "Blitz"  ],
	[ a4f.y8f,   "Corr"   ]
];

function m0y(u4j)
{
	return m8w[u4j][1];
}

function v6b()
{
	let h3d = [];
	for (const u4j of m8w)
	{
		h3d.push(u4j[1]);
	}
	return h3d;
}

class f6g
{

constructor()
{
	this.u4n = '';
	this.k2c = '';
	this.s4h = z1r.i6p;
	this.style = l9b.i6p;
	this.value = c3i.i6p;
	this.s8d = new f2p();
	this.c6n = new n3j();
	this.q7k = new k4l();
	this.k2p = f7p.i6p;
	this.a5n = false;
	this.s3t = false;
  this.x8r = false;
}

z4e()
{
	let v5l = new f6g();
	v5l.u4n = this.u4n;
	v5l.k2c = this.k2c;
	v5l.s4h = this.s4h;
	v5l.style = this.style;
	v5l.value = this.value;
	v5l.s8d = this.s8d.z4e();
	v5l.c6n = this.c6n.z4e();
	v5l.q7k = this.q7k.z4e();
	v5l.k2p = this.k2p;
	v5l.a5n = this.a5n;
	v5l.s3t = this.s3t;
 	v5l.x8r = this.x8r;
	return v5l;
}

f7c()
{
	return this.u4n.length == 0 &&
		this.k2c.length == 0 &&
		this.s4h == z1r.i6p &&
		this.style == l9b.i6p &&
		this.value == c3i.i6p &&
		this.s8d.f7c() &&
		this.c6n.f7c() &&
		this.q7k.f7c() &&
		this.k2p == f7p.i6p &&
		this.a5n == false &&
		this.s3t == false &&
 		this.x8r == false;
}

}

const f7p =
{
	i6p : 0,
	w8q : 1,
	j7t : 2,
	q5g : 3
};

const x8h =
{
	z9z : 0,
	s5n : 1,
	w1l : 2,
	z2j : 3,
	a6k : 4,
	r4i : 5,
	z3c : 6,
	j6v : 7,
	p8i : 8,
	m0i : 9,
	i4n : 10,
	f2d : 11,
	f2i : 12,
	y6z : 13,
	l6q : 14,
	d7z : 15
};

class f2p
{

constructor()
{
	this.value = 0;
}

p1k(value)
{
	this.value = value;
}

z4e()
{
	let y5j = new f2p();
	y5j.value = this.value;
	return y5j;
}

f7c()
{
	return this.value == 0;
}

q0i()
{
	return this.value != 0;
}

i6p()
{
	return this.value == 0;
}

z7m()
{
	let s7n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.k7g(i))
		{
			s7n++;
		}
	}
	return s7n;
}

i9b()
{
	this.value = 0;
}

set(j8m, o0s)
{
	if (o0s)
	{
		this.value |= (1 << j8m);
	}
	else
	{
		this.value &= ~(1 << j8m);
	}
}

k7g(j8m)
{
	return (this.value & (1 << j8m)) != 0;
}

j1k()
{
	return this.value;
}

}

const z1r =
{
	i6p : 0,
	c1a : 1,
	l5k : 2,
	k7j : 3,
	k2q : 4,
	t3e : 5,
	p7y : 6
};

const r5y =
[
	[ z1r.i6p,     		  ""   ],
	[ z1r.c1a,       		  "RR" ],
	[ z1r.l5k, 		  "&#8979;"  ],
	[ z1r.k7j, 		  "&#8804;"  ],
	[ z1r.k2q,  "="  ],
	[ z1r.t3e,   "&#9651;"  ],
	[ z1r.p7y,  "&#9661;"  ]
];

function y0f(s4h)
{
	return r5y[s4h][1];
}


const l9b =
{
	i6p : 0,
	b5t : 1,
	c7s : 2,
	d2n : 3,
	u7g : 4,
	b8p : 5,
	k3g : 6,
	z9p : 7,
	f7k : 8
};

const s3f =
[
	[ l9b.i6p,     		"" 	 ],
	[ l9b.b5t,       	"!"  ],
	[ l9b.c7s, 					"?"  ],
	[ l9b.d2n,	"!?" ],
	[ l9b.u7g,	 		"?!" ],
	[ l9b.b8p,  	"!!" ],
	[ l9b.k3g, 			"??" ],
	[ l9b.z9p, 		"&#8857;"  ],
	[ l9b.f7k, 		"&#9723;"  ]
];

function v4u(style)
{
	return s3f[style][1];
}


class r8e
{

constructor()
{
	this.c7j = new m1z();
	this.o4i = null;
	this.h7l = null;
	this.v6c = null;
	this.b4o = null;
  this.j8h = 0; 
}

u1n(c7j)
{
	this.c7j = c7j.z4e();
}

a5a(e3i, c4d, a1i, s8q)
{
	this.c7j.a5a(e3i, c4d, a1i, s8q);
}

}

class x5a
{

constructor()
{
	this.z0s = null;
	this.c7j = null;
}

q0w(o8d)
{
	return this.z0s == o8d.z0s;
}

t5w(o8d)
{
	return !this.q0w(o8d);
}

z4e()
{
	let e6g = new x5a();
  e6g.z0s = this.z0s;
  e6g.c7j = this.c7j;
	return e6g;
}

}


class l1j
{

constructor()
{
	this.j4k = new b6u();
 	this.y6l = null;
	this.s7u = 1;
	this.j4k.n9y();
  this.y2g = new f6g();
}

l9q(o8d)
{
	this.l8r(o8d.j4k, o8d.s7u);
	this.y2g = o8d.y2g.z4e();
	this.y6l = this.w6j(o8d.y6l);
}

z4e()
{
	let s5g = new l1j();
	s5g.l9q(this);
	return s5g;
}

l8r(x7g, k7e)
{
	this.j4k = x7g.z4e();
	this.s7u = k7e;
	this.y2g = new f6g();
	this.y6l = null;
}

k7e()
{
	return this.s7u;
}

x7g()
{
	return this.j4k.z4e();
}


k5o()
{
	let b9l = this.u4v();
	this.k8l(b9l);
	return b9l;
}


f4v()
{
	let k8l = this.k5o();
	return this.e3i(k8l);
}


d3y(b9l)
{
  let i4v = this.k0m(b9l) + 1;
	if (i4v)
	{
		return this.s7u +
			Math.floor((i4v - 1 + this.j4k.a7q()) / 2);
	}
	else
	{
		return this.s7u;
	}
}

k0m(b9l)
{
	let i4v = 0;
	if (!b9l.z0s)
	{
		return 0;
	}
	let l0e = b9l.z0s;
	while (1)
	{
		i4v++;
		if (!l0e.h7l)
		{
			let w6b = l0e;
			while (w6b.v6c)
			{
				w6b = w6b.v6c;
			}
			if (!w6b.h7l)
			{
				break;
			}
		}
		if (l0e.h7l)
		{
			l0e = l0e.h7l;
		}
		else
		{
			let w6b = l0e;
			while (w6b.v6c)
			{
				w6b = w6b.v6c;
			}
			l0e = w6b.h7l;
		}
	}
	return i4v;
}


i0g()
{
	let u0w = 0;
	let w0r = this.y6l;
	while (w0r)
	{
		u0w++;
		w0r = w0r.o4i;
	}
	return u0w;
}

w0m()
{
	return this.y6l != null;
}

k0o(b9l)
{
	return b9l.q0w(this.u4v());
}

y4k(b9l)
{
	if (b9l.z0s)
	{
		return b9l.z0s.o4i == null;
	}
	else if (this.y6l)
	{
		return false;
	}
	else
	{
		return true;
	}
}

o1f(b9l)
{
	if (!this.k0o(b9l))
	{
		if (b9l.z0s.h7l)
		{
			b9l.z0s = b9l.z0s.h7l;
			b9l.c7j = b9l.z0s.c7j;
		}
		else
		{
			let l0e = b9l.z0s;
			while (l0e.v6c)
			{
				l0e = l0e.v6c;
			}
			l0e = l0e.h7l;
			b9l.z0s = l0e;
      if (b9l.z0s)
      {
  			b9l.c7j = b9l.z0s.c7j;
      }
      else
      {
        b9l.c7j = null;
      }
		}
	}
}

i8p(b9l)
{
	if (!this.y4k(b9l))
	{
		b9l.z0s = this.z7u(b9l);
		b9l.c7j = b9l.z0s.c7j;
	}
}

k4x(b9l, e5x)
{
	let f9i = this.e7t(b9l);
	if (e5x < 0 || e5x >= f9i)
	{
		return;
	}
	let w6b = this.z7u(b9l);
	let i = 0;
	while (i != e5x)
	{
		i++;
		w6b = w6b.b4o;
	}
	b9l.z0s = w6b;
	b9l.c7j = b9l.z0s.c7j;
}

f6q(b9l)
{
	if (!b9l.z0s)
	{
		return this.s7u;
	}
	let i4v = this.k0m(b9l);
	if (i4v)
	{
		return this.s7u +
      Math.floor((i4v - 1 + this.j4k.a7q()) / 2);
	}
	else
	{
		return this.s7u;
	}
}

u4v()
{
	let b9l = new x5a();
	b9l.z0s = null;
	b9l.c7j = null;
	return b9l;
}

k8l(b9l)
{
	if (!this.y4k(b9l))
	{
		let l0e = this.z7u(b9l);
		while (true)
		{
			if (!l0e.o4i)
			{
				break;
			}
			l0e = l0e.o4i;
		}
		b9l.z0s = l0e;
		b9l.c7j = b9l.z0s.c7j;
	}
}

l6j(m0v)
{
	let b9l = this.u4v();
	if (m0v > 0)
	{
    this.m0v = 0;
		this.u5z(b9l, m0v);
		return b9l;
	}
	else
	{
		return b9l;
	}
}

u5z(b9l, m0v)
{
	while (true)
	{
		if (this.y4k(b9l))
		{
			return false;
		}
		let f9i = this.e7t(b9l);
		if (f9i > 1)
		{
			let k3z = b9l.z4e();
			for (let i = 1; i < f9i; i++)
			{
				this.k4x(b9l, i);
				this.m0v++;
				if (this.m0v == m0v)
				{
					return true;
				}
				if (this.u5z(b9l, m0v))
				{
					return true;
				}
        b9l.z0s = k3z.z0s;
        b9l.c7j = k3z.c7j;
			}
		}
		this.i8p(b9l);
		this.m0v++;
		if (this.m0v == m0v)
		{
			return true;
		}
	}
}

h4z(b9l)
{
	if (!b9l.z0s)
	{
		return 0;
	}
	else
	{
		return b9l.z0s.j8h;
	}
}

a0t(b9l)
{
	let z1l = [];
 	if (!b9l.z0s)
  {
		return z1l;
	}
	let l0e = b9l.z0s;
	while (1)
	{
		z1l.push(l0e);
		if (!l0e.h7l)
		{
			let w6b = l0e;
			while (w6b.v6c)
			{
				w6b = w6b.v6c;
			}
			if (!w6b.h7l)
			{
				break;
			}
		}
		if (l0e.h7l)
		{
			l0e = l0e.h7l;
		}
		else
		{
			let w6b = l0e;
			while (w6b.v6c)
			{
				w6b = w6b.v6c;
			}
			l0e = w6b.h7l;
		}
	}
	return z1l.reverse();
}

t1u(b9l)
{
	let z1l = this.a0t(b9l);
	let f9i = this.e7t(b9l);
	if (f9i == 0)
	{
		return z1l;
	}
	let g6t = this.c7k(b9l, 0);
	while (g6t)
	{
		z1l.push(g6t);
		g6t = g6t.o4i;
	}
	return z1l;
}

e7t(b9l)
{
	let g6t = this.z7u(b9l);
	if (!g6t)
	{
		return 0;
	}
	let f9i = 1;
	while (g6t.b4o)
	{
		f9i++;
		g6t = g6t.b4o;
	}
	return f9i;
}

n9d(b9l, e8v)
{
	if (this.k0o(b9l))
	{
		this.y6l = e8v;
		b9l.z0s = e8v;
		b9l.c7j = b9l.z0s.c7j;
	}
	else
	{
		b9l.z0s.o4i = e8v;
		e8v.h7l = b9l.z0s;
		b9l.z0s = e8v;
		b9l.c7j = b9l.z0s.c7j;
	}
}

r3f(b9l, e8v)
{
	let w6b = this.z7u(b9l);
	while (w6b.b4o)
	{
		w6b = w6b.b4o;
	}
	w6b.b4o = e8v;
	e8v.v6c = w6b;

	b9l.z0s = e8v;
	b9l.c7j = b9l.z0s.c7j;
}

d4y(b9l, c7j)
{
	let e8v = new r8e();
 	e8v.u1n(c7j);
	if (this.y4k(b9l))
	{
		this.n9d(b9l, e8v);
	}
	else
	{
		this.r3f(b9l, e8v);
	}
}


h2i(b9l, z1l)
{
	for (const c7j of z1l)
	{
		this.d4y(b9l, c7j);
	}
}


t0k(b9l)
{
	let w6b = this.c7k(b9l, 1);
	if (!w6b)
	{
		return false;
	}
	while (w6b)
	{
		let w0r = w6b.o4i;
		while (w0r)
		{
			if (w0r.b4o)
			{
				return false;
			}
			w0r = w0r.o4i;
		}
		w6b = w6b.b4o;
	}
	return true;
}

g1t()
{
	let w0r = this.y6l;
	while (w0r)
	{
		if (w0r.b4o)
		{
			return true;
		}
		w0r = w0r.o4i;
	}
	return false;
}

o8m()
{
	if (!this.y2g.f7c())
	{
		return true;
	}
	if (this.g1t())
	{
		return true;
	}
	let w0r = this.y6l;
	while (w0r)
	{
		if (w0r.c7j.o8m())
		{
			return true;
		}
		w0r = w0r.o4i;
	}
	return false;
}

z7u(b9l)
{
	if (b9l.z0s)
	{
		return b9l.z0s.o4i;
	}
	return this.y6l;
}

c7k(b9l, e5x)
{
	let i = 0;
	let w6b = this.z7u(b9l);
	while (w6b && i != e5x)
	{
		w6b = w6b.b4o;
		i++;
	}
	return w6b;
}

w6j(w6b)
{
	let l9k = w6b;
	let f4p = null;
	let e8v = null;
	let n2a = null;
	while (l9k)
	{
		e8v = new r8e();
		e8v.u1n(l9k.c7j);
		if (f4p)
		{
			f4p.o4i = e8v;
			e8v.h7l = f4p;
		}
		else
		{
			n2a = e8v;
		}
		f4p = e8v;
		if (l9k.b4o && !l9k.v6c)
		{
			let c0y = l9k.b4o;
			let n2x = f4p;
			while (c0y)
			{
				let l2v = this.w6j(c0y);
				n2x.b4o = l2v;
				l2v.v6c = n2x;
				n2x = l2v;
				c0y = c0y.b4o;
			}
		}
		l9k = l9k.o4i;
	}
	return n2a;
}

a9i()
{
	return this.y2g;
}

j8c()
{
	return this.y2g.u4n;
}

z3j(m3t)
{
	this.y2g.u4n = m3t;
}

c6a()
{
	return !this.y2g.c6n.f7c();
}

b0w(c6n)
{
	this.y2g.c6n = c6n.z4e();
}

w6x()
{
	return this.y2g.c6n;
}

y2v()
{
	return !this.y2g.q7k.f7c();
}

y1g(q7k)
{
	this.y2g.q7k = q7k.z4e();
}

n3z()
{
	return this.y2g.q7k;
}

d5x()
{
	return !this.y2g.s8d.f7c();
}

z4q(s8d)
{
	this.y2g.s8d = s8d.z4e();
}

k4r()
{
	return this.y2g.s8d;
}

y1f(m0v)
{
  if (m0v == 0)
  {
    return true;
  }
	let w0r = this.y6l;
	while (w0r)
	{
    if (w0r.j8h == m0v)
    {
      return true;
    }
		w0r = w0r.o4i;
	}
	return false;
}

h0q()
{
	let b9l = this.u4v();
	this.m0v = 0;
	this.z9m(b9l);
}

z9m(b9l)
{
	while (true)
	{
		if (this.y4k(b9l))
		{
			return;
		}
		let f9i = this.e7t(b9l);
		if (f9i > 1)
		{
			let k3z = b9l.z4e();
			for (let i = 1; i < f9i; i++)
			{
				this.k4x(b9l, i);
				this.m0v++;
        b9l.z0s.j8h = this.m0v;
				this.z9m(b9l);
        b9l.z0s = k3z.z0s;
        b9l.c7j = k3z.c7j;
			}
		}
		this.i8p(b9l);
  	this.m0v++;
    b9l.z0s.j8h = this.m0v;
	}
}

e3i(b9l)
{
	let e3i = this.j4k.z4e();
	if (!b9l.z0s)
	{
		return e3i;
	}
	let z1l = this.s1d(b9l);
  for (const c7j of z1l)
	{
		e3i.i8p(c7j.x2v());
	}
	return e3i;
}

s1d(b9l)
{
	let z1l = [];
 	if (!b9l.z0s)
  {
		return z1l;
	}
	let l0e = b9l.z0s;
	while (1)
	{
		z1l.push(l0e.c7j);
		if (!l0e.h7l)
		{
			let w6b = l0e;
			while (w6b.v6c)
			{
				w6b = w6b.v6c;
			}
			if (!w6b.h7l)
			{
				break;
			}
		}
		if (l0e.h7l)
		{
			l0e = l0e.h7l;
		}
		else
		{
			let w6b = l0e;
			while (w6b.v6c)
			{
				w6b = w6b.v6c;
			}
			l0e = w6b.h7l;
		}
	}
	return z1l.reverse();
}


w2u()
{
	this.y2g = new f6g();
	this.y6l = null; 
  
}


r5q()
{
	let z1l = [];
	let w0r = this.y6l;
	while (w0r)
	{
		z1l.push(w0r.c7j);
		w0r = w0r.o4i;
	}
	return z1l;
}


}

const c3i =
{
	i6p : 0,
	f9a : 1,
	f4n : 2,
	o7d : 3,
	t5n : 4,
	n7g : 5,
	v0v : 6,
	y0p : 7,
	z6s : 8,
	n1o : 9,
	f6l : 10,
	l4k : 11,
	j6v : 12,
	b3l : 13,
	i7t : 14,
	z2j : 15
};

const z6a =
[
	[ c3i.i6p,     						  ""    ],
	[ c3i.f9a,        "+&#8211;" ],
	[ c3i.f4n, 						"&#177;" ],
	[ c3i.o7d,		"&#10866;"  ],
	[ c3i.t5n, 							"="   ],
	[ c3i.n7g,  							"&#8734;" ],
	[ c3i.v0v,  	"&#10865;"],
	[ c3i.y0p, 						"&#8723;" ],
	[ c3i.z6s, 				"&#8211;+"],
	[ c3i.n1o,						"&#8773;" ],
	[ c3i.f6l, 						"&#8646;" ],
	[ c3i.l4k,  						"&#8593;" ],
	[ c3i.j6v, 								"&#8594;" ],
	[ c3i.b3l, 					"&#8853;" ],
	[ c3i.i7t,		"&#10227;"],
	[ c3i.z2j, 								"N"   ]
];

function n0f(value)
{
	return z6a[value][1];
}


const n8t =
{
	k2t : 0,
	d2y : 1,
	g9q : 2
};

const v1z =
{
	i6p : 0,
	v0b : 1,
	p6a : 2,
	p6i : 3,
	s1y : 4,
	s4h : 5,
	k2c : 6,
	u4n : 7,
	c4c : 8,
	s8d : 9,
	a5n : 10,
	s3t : 11
};

/*
TO DO
- Aanpassen voor tekst after van v4r daar kan dia inzitten (zie c++)
- Vette tekst en niet vette v0b testen bij wel/niet MultiPV
*/
class g2h
{

constructor()
{
	this.l1g = new k0d();
  this.n5m = true;
  this.z8t = false;
  this.e2f = true;
  this.y5d = true;
  this.s5h = n8t.k2t;
  this.b3a = false;
  this.m5a = true;
 	this.w0x = true;
 	this.x9d = -1;
  this.u0x = false;
  this.h9p = false;
	this.r9t = false;
	this.h1t = true;
  this.s5p = false;
  this.u6w = false;
  this.x2c = 0;
	this.b8e = true;
  this.z7k = null;
 	this.v4h = v1z.i6p;
}

o2i(z1l)
{
	this.z7k = z1l;
 	let u4v = this.z7k.u4v();
	let x7g = this.z7k.x7g();
	this.v4h = v1z.i6p;
	this.h1t = true;
	this.h9p = false;
	this.r9t = false;
	this.u0x = false;
	this.s5p = this.z7k.o8m();
	this.b8e = true;
	this.x2c = 0;

	if (this.b3a)
	{
		this.b4p(v1z.p6a);
		this.w6n();
	}
	else
	{
    
    if (this.s5h == n8t.d2y ||
      (this.s5h == n8t.g9q && !x7g.l5f()))
    {
      if (this.y5d)
      {
        this.a0w(u4v, x7g, x2c);
        this.h1t = true;
      }
    }

    this.b4p((this.s5p && !this.x8r) ? v1z.v0b : v1z.p6a);
    this.f2a(this.s5p);
    this.d4y(u4v, "");
    this.x3k(u4v, this.z7k.a9i().u4n);

    if (this.z7k.w0m())
    {
      this.z6h();
    }
   	this.b4p(v1z.i6p);
   	this.m0a();
  }
}

w6n()
{
	let b9l = this.z7k.u4v();
	let e7t = this.z7k.e7t(b9l);
	for (let i = 0; i < e7t; i++)
	{
    this.l1g.l0w('<div class="variation-row">');
		b9l = this.z7k.u4v();
  	let e3i = this.z7k.x7g();
	  let f6q = this.z7k.k7e();
		this.z7k.k4x(b9l, i);
		this.h1t = true;
		let a1d = true;
		let c7j = b9l.c7j;
		let k2c = c7j.k2c();
		if (k2c.length)
		{
			this.b5j(b9l, k2c);
		}
		this.b4p(v1z.p6a);
		do
		{
			if (a1d)
			{
				b9l.c7j.i5y();
			}
			this.i6g(b9l, e3i, f6q);
			if (a1d)
			{
				b9l.c7j.g9m(k2c);
				a1d = false;
			}
			if (this.z7k.y4k(b9l))
			{
				break;
			}
			e3i.i8p(b9l.c7j);
			if (e3i.q8y())
			{
				f6q++;
			}
			this.z7k.i8p(b9l);
		} while (true);
    this.l1g.l0w('<div');
	}
}

z6h()
{
  let p7i = 0;
 	let b9l = this.z7k.u4v();
	let e3i = this.z7k.x7g();
  let f6q = this.z7k.k7e();

	let k5n = 100000;
	if (this.x9d == 0)
	{
		return;
	}
	if (this.x9d != -1)
	{
		k5n = this.x9d;
	}
	let o0f = f6q + k5n - 1;
	this.h1t = true;
	while (true)
	{
		let e7t = this.z7k.e7t(b9l);
		while (f6q <= o0f && !this.z7k.y4k(b9l))
		{
      this.z7k.i8p(b9l);
    	this.b4p((this.s5p && !this.x8r) ? v1z.v0b : v1z.p6a);
			this.i6g(b9l, e3i, f6q);
			e3i.i8p(b9l.c7j.x2v());
 			if (e3i.q8y())
			{
				f6q++;
			}
			if (this.w0x && e7t > 1)
			{
				break;
			}
			e7t = this.z7k.e7t(b9l);
		}
		if (!e7t || f6q > o0f)
		{
			return;
		}
    e3i.o1f(b9l.c7j.x2v());
		if (e3i.a7q())
		{
			f6q--;
		}
    this.z7k.o1f(b9l);
		for (let i = 1; i < e7t; i++)
		{
      p7i++;
      let d0f = "<span class=\"tdline\" data-level=\"";
      d0f += p7i.toString();
      d0f += "\">";
      this.l1g.l0w(d0f);
			this.k3u(v1z.p6i);
			this.w4p("[", true);
			let s4h = '';
      this.e7v(b9l, e3i, f6q, i, s4h, p7i);
			this.b4p(v1z.p6i);
			this.w4p("]", true);
      this.l1g.l0w("</span>");
      p7i--;
     	this.b4p((this.s5p && !this.x8r) ? v1z.v0b : v1z.p6a);
		}
		this.k3u(this.v4h);
    this.z7k.i8p(b9l);
    e3i.i8p(b9l.c7j.x2v());
		if (e3i.q8y())
		{
			f6q++;
		}
		this.h1t = true;
	}
}

i6g(b9l, e3i, f6q)
{
	if (this.z7k.k0o(b9l))
	{
		return;
	}
 	let c7j = b9l.c7j;

	let c7b = '';
  let x7q = false;
  if (this.n5m)
	{
		if (c7j.a7b())
		{
			if (!this.z7k.k0o(b9l))
			{
        let h8k = b9l.z4e();
        this.z7k.o1f(h8k);
        if (h8k.c7j)
        {
  				if (h8k.c7j.f3o())
	  			{
		  			x7q = true;
			  	}
        }
			}
		}
  }
	if (this.h9p)
	{
		c7b = "(";
		this.h9p = false;
		if (this.n5m && c7j.j9u())
		{
			this.w4p("(", true);
			let y3w = this.v4h;
			this.b5j(b9l, c7j.k2c());
			this.b4p(y3w);
			c7b = "";
      x7q = true;
		}
	}
	else
	{
		if (this.n5m && c7j.j9u())
		{
  	  let y3w = this.v4h;
	  	this.b5j(b9l, c7j.k2c());
		  this.b4p(y3w);
      x7q = true;
    }
	}
	if (c7j.f6c())
	{
		c7b += y0f(c7j.s4h());
	}
	let x9j = c7j.c0t();
	if (x9j)
	{
    c7b += f6q;
		c7b += '.';
	}
	else
	{
		if (this.h1t || x7q)
		{
 			c7b += f6q;
			c7b += "...";
		}
	}
	c7b += a9d(e3i, c7j.x2v(), false);
	if (c7j.s2h())
	{
		c7b += v4u(c7j.style());
	}
	if (c7j.o8u())
	{
		c7b += n0f(c7j.value());
	}
	if (c7j.y5z())
	{
		c7b += " End Of Game";
  }
	if (this.r9t || this.u0x)
	{
		if (this.z7k.y4k(b9l) && (!this.n5m || !c7j.f3o()))
		{
			if (this.r9t)
			{
				c7b += ")";
				this.r9t = false;
			}
			else
			{
				c7b += ";";
				this.u0x = false;
			}
		}
	}
	this.d4y(b9l, c7b);
	this.h1t = false;

	if (c7j.q3h())
	{
		let u4n = c7j.u4n();
    let c0q = u4n.indexOf("[#]");
		let u2n = u4n.substring(0, c0q);
	  let e0z = u4n.substring(c0q + 3);
		if (u2n.length)
		{
			this.x3k(b9l, u2n);
		}
		this.x2c++;
		if (this.y5d)
		{
			this.k3u(v1z.i6p);
      this.a0w(b9l, e3i, this.x2c);
			this.h1t = true;
		}
		if (e0z.length)
		{
			this.x3k(b9l, e0z);
		}
	}
	else
	{
		this.x3k(b9l, c7j.u4n());
	}

  if (c7j.y5z())
	{
    this.l1g.j5j("<div>&nbsp;</div>"); 
   	this.m0a();
 	  this.f2a(false); 
 	  this.u6w = true;
	}
}

b4p(y3e)
{
	if (y3e != this.v4h)
	{
		this.f9v();
		this.v4h = y3e;
		this.x6j();
	}
}

x6j()
{
}

f9v()
{
	this.v4h = v1z.i6p;
}

k3u(y3e)
{
	this.f9v();
	this.v4h = v1z.i6p;
  
  
  
  
  this.l1g.j5j("<br>"); 
	if (y3e != v1z.i6p)
	{
		this.v4h = y3e;
		this.x6j();
	}
}

a0w(b9l, e3i, j8h)
{
  this.b8e = true;
	let d0f = "<span class=\"tddia\" movenr=\"";
  d0f += this.z7k.h4z(b9l).toString();
	d0f += "\">",
	this.l1g.l0w(d0f);
	this.l1g.l0w("<canvas></canvas>");
	this.l1g.l0w("</span>");
	this.h1t = true;
}

e4i(b9l, m3t)
{
  this.w7w(b9l);
	this.s7y(m3t);
  this.n1g();
}

e7v(m8t, d3d, f6q, e5x, s4h, p7i)
{
  let b9l = m8t.z4e();
  let e3i = d3d.z4e();

	if (s4h.length)
	{
		this.b4p(v1z.s4h);
		let m8k = s4h;
		m8k += ")";
    let d0f = "<span class=\"tdprefix\">";
    this.l1g.l0w(d0f);
  	this.w4p(m8k);
    this.l1g.l0w("</span>");
	}
	let e7t = 0;
	let v1i = 1;
  this.z7k.k4x(b9l, e5x);
	this.h1t = true;
	do
	{
		this.b4p(v1z.p6i);
		this.i6g(b9l, e3i, f6q);
		if (e7t > 1)
		{
      this.z7k.o1f(b9l);
      this.c9f(b9l, e3i, f6q);
      this.z7k.i8p(b9l);
			this.h1t = true;
		}
		e3i.i8p(b9l.c7j.x2v());
		if (e3i.q8y())
		{
			f6q++;
		}
		e7t = this.z7k.e7t(b9l);
		if (e7t == 0)
		{
			break;
		}
		if (e7t > 1)
		{
			if (!this.z7k.t0k(b9l))
			{
				break;
			}
		}
    this.z7k.i8p(b9l);
		v1i++;
	} while (true);

	if (this.z7k.y4k(b9l))
	{
		return;
	}

	let r8j = s4h.length;
	let m8k = '';
	let o6r = 1;
	for (let i = 0; i < e7t; i++)
	{
		if (r8j == 0)
		{
      m8k = String.fromCharCode('A'.charCodeAt() + o6r - 1);
		}
		else if (r8j == 1)
		{
      m8k = s4h;
      m8k += o6r;
		}
		else if (r8j == 2)
		{
      m8k = s4h;
      m8k += String.fromCharCode('a'.charCodeAt() + o6r - 1);
		}
		else
		{
      m8k = s4h;
      m8k += o6r;
		}

    let d0f = "<span class=\"tdline\" data-level=\"";
    d0f += p7i.toString();
    d0f += "\">";
    this.l1g.l0w(d0f);
  	this.k3u(this.v4h);
    this.e7v(b9l, e3i, f6q, i, m8k, p7i);
    this.l1g.l0w("</span>");
		o6r++;
	}
}

c9f(m8t, d3d, f6q)
{
  let b9l = m8t.z4e();
  let e3i = d3d.z4e();

	this.b4p(v1z.s1y);
	this.h9p = true;
	this.u0x = false;
	let e7t = this.z7k.e7t(b9l);
	for (let i = 1; i < e7t; i++)
	{
		if (i == e7t - 1)
		{
			this.r9t = true;
		}
		if (i < e7t - 1)
		{
			this.u0x = true;
		}
    this.v9a(b9l, e3i, f6q, i);
		if (this.u0x)
		{
			this.b4p(v1z.s1y);
			this.w4p(";", false);
			this.u0x = false;
		}
	}
	this.b4p(v1z.s1y);
	if (this.r9t)
	{
		this.w4p(")", false);
		this.r9t = false;
	}
}

v9a(m8t, d3d, f6q, e5x)
{
  let b9l = m8t.z4e();
  let e3i = d3d.z4e();

  this.z7k.k4x(b9l, e5x);
	let v1i = 0;
	this.h1t = true;
	do
	{
		v1i++;
		this.b4p(v1z.s1y);
		this.i6g(b9l, e3i, f6q);
		if (this.z7k.y4k(b9l))
		{
			break;
		}
		e3i.i8p(b9l.c7j.x2v());
		if (e3i.q8y())
		{
			f6q++;
		}
    this.z7k.i8p(b9l);
	} while (true);
}

d4y(b9l, c7b)
{
	if (c7b.length)
	{
 		this.b7b(b9l, c7b);
	}
	else
	{
		if (this.m5a)
    {
      this.b7b(b9l, "[...]");
    }
	}
	if (b9l.c7j)
	{
		if (b9l.c7j.h2g() || b9l.c7j.l8w())
		{
			this.u3j(b9l, v1z.c4c);
		}
		if (b9l.c7j.q3h())
		{
		}
		if (b9l.c7j.g5i())
		{
			this.u3j(b9l, v1z.a5n);
		}
		if (b9l.c7j.g1d())
		{
			this.u3j(b9l, v1z.s8d);
		}
	}
	else
	{
		if (this.z7k.c6a() || this.z7k.y2v())
		{
			this.u3j(b9l, v1z.c4c);
		}
		if (this.z7k.d5x())
		{
		 	this.u3j(b9l, v1z.s8d);
		}
	}
}

w4p(c7b, m7i)
{
	if (c7b.length == 0)
	{
		return;
	}
	if (!this.b8e && m7i)
	{
		this.l1g.j5j(" ");
	}
	this.l1g.j5j(c7b);
	this.b8e = false;
}

b5j(b9l, k2c)
{
	if (this.n5m && k2c.length)
	{
		this.b4p(v1z.k2c);
		this.e4i(b9l, k2c);
	}
}

x3k(b9l, u4n)
{
	if (this.n5m && u4n.length)
	{
		this.b4p(v1z.u4n);
		this.e4i(b9l, u4n);
	}
}

s7y(m3t)
{
  let e5a = m3t;
  let o3g = e5a.replaceAll("<br><br>", "<br>");
  let b4n = o3g.replaceAll("<br><br>", "<br>");
  let h0f = b4n.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = h0f;
  this.l1g.j5j(s);
}

b7b(b9l, c7b)
{
	if (c7b.length == 0)
	{
		return;
	}
	if (!this.b8e)
	{
		this.l1g.j5j(" ");
	}
  let a4b = '';
  if (b9l.c7j)
  {
  	if (b9l.c7j.t9n())
	  {
		  if (b9l.c7j.k2p() == f7p.w8q)
  		{
	  		a4b = "tdmove-crit-opening";
		  }
  		else if (b9l.c7j.k2p() == f7p.j7t)
	  	{
		  	a4b = "tdmove-crit-middle";
  		}
	  	else if (b9l.c7j.k2p() == f7p.q5g)
		  {
  			a4b = "tdmove-crit-end";
	  	}
  	}
  }
	let w4h = "<span class=\"";
	if (a4b.length == 0)
	{
		w4h += "tdmove\" movenr=\"";
	}
	else
	{
		w4h += "tdmove " + a4b + "\" movenr=\"";
	}
  w4h += this.z7k.h4z(b9l).toString();
  w4h += "\"";
	w4h += ">",
	w4h += c7b;
	w4h += "</span>";

	this.l1g.l0w(w4h);
	this.b8e = false;
}

u3j(b9l, y3e)
{
  if (y3e == v1z.c4c)
  {
    this.p1y(b9l);
  }
  else if (y3e == v1z.s8d)
  {
    this.j4i(b9l);
  }
}

p1y(b9l)
{
	let d0f = "<span class=\"tdcolors\" movenr=\"";
  d0f += this.z7k.h4z(b9l).toString();
	d0f += "\">",
	this.l1g.l0w(d0f);
	this.l1g.l0w("</span>");
}

j4i(b9l)
{
	let d0f = "<span class=\"tdmedal\" movenr=\"";
  d0f += this.z7k.h4z(b9l).toString();
	d0f += "\">",
	this.l1g.l0w(d0f);
	this.l1g.l0w("<canvas></canvas>");
	this.l1g.l0w("</span>");
}

f2a(i4m)
{
 	let d0f = "<span class=\"tdline\"";
	if (i4m)
	{
		d0f += " data-commented=\"1\"";
	}
	d0f += " data-level=\"0\">";
	this.l1g.j5j(d0f);
}

m0a()
{
  this.l1g.l0w("</span>");
}

w7w(b9l)
{
  let l9e = "tdcomment";
  if (this.z8t)
  {
    l9e += " is-bold";
  }
  let d0f = "<span class=\"" + l9e + "\" movenr=\"";
  d0f += this.z7k.h4z(b9l).toString();
  d0f += "\">";
  this.l1g.j5j(d0f);
}

n1g()
{
  this.l1g.l0w("</span>");
}

q3a(value)
{
  this.m5a = value;
}

g4o(value)
{
  this.z8t = value;
}

k0s(value)
{
  this.e2f = value;
}

s4s(value)
{
  this.b3a = value;
}

} 
const y3m =
{
	j6v : 1,
	m0i : 2,
	o2m : 3
};

class x1p
{

constructor()
{
	this.d4d = 0;
	this.z4d = 0;
	this.type = y3m.j6v;
}

z4e()
{
	let v9d = new x1p();
	v9d.d4d = this.d4d;
	v9d.z4d = this.z4d;
	v9d.type = this.type;
	return v9d;
}

}

function r5l(d4d, z4d, type)
{
	let s = new x1p();
	s.d4d = d4d;
	s.z4d = z4d;
	s.type = type;
	return s;
}
class n3j
{

constructor()
{
	this.y4w = [];
}

z4e()
{
	let k7d = new n3j();
	for (const l1c of this.y4w)
	{
		k7d.add(l1c.z4e());
	}
	return k7d;
}

p7a()
{
	this.y4w.length = 0;
}

f7c()
{
	return this.y4w.length == 0;
}

size()
{
	return this.y4w.length;
}

add(l1c)
{
	let z2r = l1c.z4e();
	this.y4w.push(z2r);
}

}

const f6d =
{
	a8z : 0,
	f7s : 1,
	r4p : 2
};

class i9p
{

constructor()
{
	this.k2d = 0;
	this.type = f6d.a8z;
}

z4e()
{
	let w8t = new i9p();
	w8t.k2d = this.k2d;
	w8t.type = this.type;
	return w8t;
}

}

function s3v(k2d, type)
{
	let f4j = new i9p();
	f4j.k2d = k2d;
	f4j.type = type;
	return f4j;
}

class k4l
{

constructor()
{
	this.u7k = [];
}

z4e()
{
	let o6p = new k4l();
	for (const n7v of this.u7k)
	{
		o6p.add(n7v.z4e());
	}
	return o6p;
}

p7a()
{
	this.u7k.length = 0;
}

f7c()
{
	return this.u7k.length == 0;
}

size()
{
	return this.u7k.length;
}

add(z5i)
{
	let a8e = z5i.z4e();
	this.u7k.push(a8e);
}

}

const j9n =
{
	f6v    : 0,
	g1f  : 1,
	j7q  : 2,
	i4s    : 3,
  t3j   : 4,
	d1z    : 5,
};


function s3n(h1e)
{
	let c7b = '';
	switch (h1e)
	{
		case j9n.f6v:
			c7b = "P";
			break;
		case j9n.g1f:
			c7b = "N";
			break;
		case j9n.j7q:
			c7b = "B";
			break;
		case j9n.i4s:
			c7b = "R";
			break;
		case j9n.t3j:
			c7b = "Q";
			break;
		case j9n.king:
			c7b = "K";
			break;
	}
	return c7b;
}

class b6z
{

constructor()
{
  this.p6s = 0;
	this.n5t = new p6g();
	this.z1l = new l1j();
}

z4e()
{
	let m9r = new b6z();
  m9r.p6s = this.p6s;
	m9r.n5t = this.n5t.z4e();
	m9r.z1l = this.z1l.z4e();
	return m9r;
}

}

const e4v = 	 		"#7B8295";
const i7d =			"#9F9F9F";
const q9x = 			    "#7B8295";
const r3v = 		  "#FFFFFF";
const r1p =       "#D0B194";

const l8j	   = "#E13129";
const j2v	 = "#389C13";
const z0r = "#E2B628";

const o8j	 = "#E13129";
const e7j	 = "#389C13";
const q0y	   = "#E2B628";

class e6y
{

constructor()
{
	this.e3h = null;
	this.f4t = false;
	this.a4k = null;
	this.x2l = null;
	this.m6k = null;
	this.g0k = 0;
	this.m1e = 0;
	this.h3l = 0;
	this.i4h = 0;
	this.b1y = 0;
	this.n0d = 0;
	this.x4e = new j4f();
	this.e3i = new b6u();
	this.c6n = new n3j();
	this.q7k = new k4l();
  this.w9j = new j7i();
  this.p0g = true;
	this.x1h = true;
	this.p1f = true;
	this.k1g = false;
	this.m3p = e4v;
	this.l7a = i7d;
	this.s4o = t9p;
	this.q5m = w2f;
	this.n2y = w2f;
	this.j4o = h5b;
	this.l0u = true;
	this.p0p = f1k;
	this.p7j = f1k;
	this.y9c = false;
	this.s5e = [];
	this.a8g = 0;
}

m4q(e3h)
{
	this.e3h = e3h;
}

m7c(x4e)
{
	this.x4e = x4e;
	this.h3l = x4e.h3l();
	this.i4h = x4e.h3l();

	this.g0k = (this.e3h.width - this.h3l) / 2;
	let top = (this.e3h.height - this.i4h) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.m1e = top;
	this.b1y = this.g0k + this.h3l - 1;
	this.n0d = this.m1e + this.i4h - 1;
	this.f4t = false;
	this.n1q();
}

l8r(e3i)
{
	this.e3i = e3i.z4e();
	this.c6n.p7a();
	this.q7k.p7a();
}

f4h(c6n)
{
	this.c6n = c6n.z4e();
}

j9q(q7k)
{
	this.q7k = q7k.z4e();
}

n8h(c7j)
{
  this.w9j = c7j.z4e();
}

x6l(k1g)
{
	this.k1g = k1g;
}

n5l()
{
	this.k1g = !this.k1g;
}

z6p()
{
	if (!this.e3h) return;
	if (this.h3l <= 0 || this.i4h <= 0)
	{
		return;
	}
	this.w7n();
}

k2n()
{
	let x1r = this.x4e.x1r;
	if (this.f4t)
	{
		return;
	}
	this.f4t = true;
	if (x1r == f2t.f0b)
	{
  	this.a4k = u5s.r3h("images/board/LightSquare");
  	this.x2l = u5s.r3h("images/board/DarkSquare");
		this.m6k = u5s.r3h("images/board/Margin");
	}
}

n1q()
{
	this.k2n();
	let x1r = this.x4e.x1r;
	if (x1r == f2t.f0b)
	{
		this.l0u = false;
		this.x1h = false;
		this.p1f = false;
		this.s4o = "#FFFF97";
		this.q5m = "#9B2E31";
		this.n2y = z4t;
	}
}

w7n()
{
	this.n1q();
	if (this.x4e.x1r == f2t.f0b)
	{
		let q5v = u5s.r3h("images/board/BoardBackground");
		this.p0c(new d2o(0, 0, this.e3h.width, this.e3h.height), q5v);
	}
	this.n2k();  
	this.r4n(); 
	this.n0c(); 
  if (chess)
  {
	  this.y6q();
  }
  else
  {
	  this.m3f();
  	this.c2p();
  }
  
  this.y9w();
 	this.h3g();
 	this.p0a();
 	this.y7a();
	this.a2t(); 
	this.g8w();      
}

n2k()
{
	let d7n = this.m1e;
	let x3p = this.g0k;
	let g4j = this.b1y;
	let k0y = this.n0d;
	let h0a = this.x4e.p9d;
	this.v5k(new d2o(x3p, d7n, g4j, d7n+h0a-1), this.q5m);
	this.v5k(new d2o(x3p, k0y-h0a+1, g4j, k0y), this.n2y);
	this.v5k(new d2o(x3p, d7n, x3p+h0a-1, k0y), this.q5m);
	this.v5k(new d2o(g4j-h0a+1, d7n, g4j, k0y), this.n2y);
}

r4n()
{
	let p9d = this.x4e.p9d;
	let p3z = this.x4e.p3z;
	if (!p3z)
	{
		return;
	}
	if (this.l0u || !this.m6k)
	{
		this.n4r(this.j4o);
	}
	else
	{
		let left = this.g0k + p9d;
		let top = this.m1e + p9d;
		let a9r = this.b1y - p9d;
		let k3a = this.m1e + p9d + p3z - 1;
		this.p0c(new d2o(left, top, a9r, k3a), this.m6k);

		left = this.g0k + p9d;
		top = this.m1e + p9d;
		a9r = this.g0k + p9d + p3z - 1;
		k3a = this.n0d - p9d;
		this.p0c(new d2o(left, top, a9r, k3a), this.m6k);

		left = this.g0k + p9d;
		top = this.n0d - p9d - p3z + 1;
		a9r = this.b1y - p9d;
		k3a = this.n0d - p9d;
		this.p0c(new d2o(left, top, a9r, k3a), this.m6k);

		left = this.b1y - p9d - p3z + 1;
		top = this.m1e + p9d;
		a9r = this.b1y - p9d;
		k3a = this.n0d - p9d;
		this.p0c(new d2o(left, top, a9r, k3a), this.m6k);
	}
}

n4r()
{
	let p9d = this.x4e.p9d;
	let p3z = this.x4e.p3z;
	if (!p3z)
	{
		return;
	}

	let left = this.g0k + p9d;
	let top = this.m1e + p9d;
	let a9r = this.b1y - p9d;
	let k3a = this.m1e + p9d + p3z - 1;
	this.v5k(new d2o(left, top, a9r, k3a), this.j4o);

	left = this.g0k + p9d;
	top = this.m1e + p9d;
	a9r = this.g0k + p9d + p3z - 1;
	k3a = this.n0d - p9d;
	this.v5k(new d2o(left, top, a9r, k3a), this.j4o);

	left = this.g0k + p9d;
	top = this.n0d - p9d - p3z + 1;
	a9r = this.b1y - p9d;
	k3a = this.n0d - p9d;
	this.v5k(new d2o(left, top, a9r, k3a), this.j4o);

	left = this.b1y - p9d - p3z + 1;
	top = this.m1e + p9d;
	a9r = this.b1y - p9d;
	k3a = this.n0d - p9d;
	this.v5k(new d2o(left, top, a9r, k3a), this.j4o);
}

g8w()
{
	if (this.x4e.a5l)
	{
  	if (!this.x4e.p3z)
  	{
	  	return;
  	}
		let color = "#000000";
		if (this.e3i.q8y())
		{
			color = "#EDD790";
		}
		else
		{
			color = "#000000";
		}
		let rect = this.x7c();
		let x4i = this.t9q();
		x4i.beginPath();
		x4i.fillStyle = color;
		let n1i = rect.h5k() * 0.40;
		x4i.arc(rect.o5d + rect.h5k()/2 - 1, rect.k7q + rect.c9o()/2 - 1,
			n1i, 0, 2 * Math.PI);
		x4i.fill();
	}
}

n0c()
{
	let q6o = z4t;
	let p9d = this.x4e.p9d;
	let p3z = this.x4e.p3z;
	let h0a = this.x4e.h0a;
	let d7n = this.m1e + p9d + p3z;
	let x3p = this.g0k + p9d + p3z;
	let g4j = this.b1y - p9d - p3z;
	let k0y = this.n0d - p9d - p3z;
	this.v5k(new d2o(x3p, d7n, g4j, d7n+h0a-1), q6o);
	this.v5k(new d2o(x3p, k0y-h0a+1, g4j, k0y), q6o);
	this.v5k(new d2o(x3p, d7n, x3p+h0a-1, k0y), q6o);
	this.v5k(new d2o(g4j-h0a+1, d7n, g4j, k0y), q6o);
}

t9q()
{
	return this.e3h.getContext('2d');
}

q2v(rect, color)
{
	let x4i = this.t9q();
	x4i.beginPath();
	x4i.lineWidth = "1";
	x4i.strokeStyle = color;
	x4i.rect(rect.o5d, rect.k7q, rect.h5k(), rect.c9o());
	x4i.stroke();
}

v5k(rect, color)
{
	let x4i = this.t9q();
	x4i.fillStyle = color;
	x4i.fillRect(rect.o5d, rect.k7q, rect.h5k(), rect.c9o());
}

p0c(rect, img)
{
	let x4i = this.t9q();
	let i3b = x4i.createPattern(img, 'repeat');
	x4i.fillStyle = i3b;
	x4i.fillRect(rect.o5d, rect.k7q, rect.h5k(), rect.c9o());
}

j6y(rect, img)
{
	let x4i = this.t9q();
	let i3b = x4i.createPattern(img, 'no-repeat');
	x4i.fillStyle = i3b;
	x4i.fillRect(rect.o5d, rect.k7q, rect.h5k(), rect.c9o());
}

e7l(k2d)
{
	let a7c = a7j;
	let u5h = o6s;
	if (this.k1g)
	{
		a7c = z7g(m6j(k2d));
		u5h = a3p(m6j(k2d));
	}
	else
	{
		a7c = z7g(k2d);
		u5h = a3p(k2d);
	}
	if (startsWithDarkSquare(u5h))
	{
		a7c++;
	}
	else
	{
		a7c--;
	}
	return this.a4y(u5h, a7c);
}

m3f()
{
	for (const k2d of b7a)
	{
		this.f0g(k2d);
	}
}

f0g(k2d)
{
	this.i8v(this.e7l(k2d), k2d);
}

i8v(rect, k2d)
{
	let r3h = this.a4k;
	if (this.p1f)
	{
		this.r1j(rect, this.l7a);
		return;
	}
	if (!r3h)
	{
		this.r1j(rect, this.l7a);
		return;
	}

	let x6b = r3h.width;
	let p8x = r3h.height;
	let h9d = this.x4e.s0f;
	if (x6b < h9d || p8x < h9d)
	{
		this.j6y(rect, r3h);
		return;
	}

	let o2d = Math.trunc(x6b / this.x4e.s0f);
	let w2a = Math.trunc(p8x / this.x4e.s0f);
	if (o2d == 0)
	{
		o2d = 1;
	}
	if (w2a == 0)
	{
		w2a = 1;
	}

	let s8j = Math.trunc((k2d) / o2d);
	let x5z = (k2d) % o2d;
	let y = Math.trunc(s8j / w2a);
	s8j = s8j % w2a;

  let y2l = new d2o();
	y2l.o5d = x5z * this.x4e.s0f;
	y2l.k7q = s8j * this.x4e.s0f;
	y2l.k0f = (x5z + 1) * this.x4e.s0f - 1;
	y2l.b3h = (s8j + 1) * this.x4e.s0f - 1;
	let x4i = this.t9q();
	i6n(x4i, rect, r3h, y2l);
}

o7b(k2d)
{
	let a7c = a7j;
	let u5h = o6s;
	if (this.k1g)
	{
		a7c = z7g(m6j(k2d));
		u5h = a3p(m6j(k2d));
	}
	else
	{
		a7c = z7g(k2d);
		u5h = a3p(k2d);
	}
	return this.a4y(u5h, a7c);
}

c2p()
{
	for (const k2d of b7a)
	{
		this.s2u(k2d);
	}
}

s2u(k2d)
{
	this.b4v(this.o7b(k2d), k2d);
}

b4v(rect, k2d)
{
	let r3h = this.x2l;
	if (this.x1h)
	{
		this.r1j(rect, this.m3p);
		return;
	}
	if (!r3h)
	{
		this.r1j(rect, this.m3p);
		return;
	}

	let x6b = r3h.width;
	let p8x = r3h.height;
	let h9d = this.x4e.s0f;
	if (x6b < h9d || p8x < h9d)
	{
		this.j6y(rect, r3h);
		return;
	}

	let o2d = Math.trunc(x6b / this.x4e.s0f);
	let w2a = Math.trunc(p8x / this.x4e.s0f);
	if (o2d == 0)
	{
		o2d = 1;
	}
	if (w2a == 0)
	{
		w2a = 1;
	}

	let s8j = Math.trunc((k2d) / o2d);
	let x5z = (k2d) % o2d;
	let y = Math.trunc(s8j / w2a);
	s8j = s8j % w2a;

  let y2l = new d2o();
	y2l.o5d = x5z * this.x4e.s0f;
	y2l.k7q = s8j * this.x4e.s0f;
	y2l.k0f = (x5z + 1) * this.x4e.s0f - 1;
	y2l.b3h = (s8j + 1) * this.x4e.s0f - 1;
	let x4i = this.t9q();
	i6n(x4i, rect, r3h, y2l);
}

a4y(u5h, a7c)
{
	let p9d = this.x4e.p9d;
	let p3z = this.x4e.p3z;
	let h0a = this.x4e.h0a;
	let s0f = this.x4e.s0f;
	let rect = new d2o();
	rect.o5d = this.g0k + p9d + p3z +	h0a + (a7c) * s0f;
	rect.k0f = rect.o5d + s0f - 1;
	rect.k7q = this.m1e + p9d + p3z +	h0a + (n3x - u5h - 1) * s0f;
	rect.b3h = rect.k7q + s0f - 1;
	return rect;
}

a6w(k2d)
{
	let a7c = a7j;
	let u5h = o6s;
	if (this.k1g)
	{
		a7c = z7g(m6j(k2d));
		u5h = a3p(m6j(k2d));
	}
	else
	{
		a7c = z7g(k2d);
		u5h = a3p(k2d);
	}
	return this.a4y(u5h, a7c);
}

y6q()
{
	for (const k2d of b7a)
	{
		this.l8m(k2d);
	}
}

l8m(k2d)
{
	this.y8j(this.a6w(k2d), k2d);
}

y8j(rect, k2d)
{
	let r0p = q3c(k2d);
	let r3h = this.a4k;
	if (r0p)
	{
		r3h = this.x2l;
	}
	if (r0p)
	{
		if (this.x1h)
		{
			this.r1j(rect, this.m3p);
			return;
		}
		if (!r3h)
		{
			this.r1j(rect, this.m3p);
			return;
		}
	}
	else
	{
		if (this.p1f)
		{
			this.r1j(rect, this.l7a);
			return;
		}
		if (!r3h)
		{
			this.r1j(rect, this.l7a);
			return;
		}
	}

 	let x6b = r3h.width;
	let p8x = r3h.height;
	let h9d = this.x4e.s0f;
	if (x6b < h9d || p8x < h9d)
	{
		this.j6y(rect, r3h);
		return;
	}
	let o2d = Math.trunc(x6b / this.x4e.s0f);
	let w2a = Math.trunc(p8x / this.x4e.s0f);
	if (o2d == 0)
	{
		o2d = 1;
	}
	if (w2a == 0)
	{
		w2a = 1;
	}

	let s8j = Math.trunc((k2d) / o2d);
	let x5z = (k2d) % o2d;
	let y = Math.trunc(s8j / w2a);
	s8j = s8j % w2a;

  let y2l = new d2o();
	y2l.o5d = x5z * this.x4e.s0f;
	y2l.k7q = s8j * this.x4e.s0f;
	y2l.k0f = (x5z + 1) * this.x4e.s0f - 1;
	y2l.b3h = (s8j + 1) * this.x4e.s0f - 1;
	let x4i = this.t9q();
	i6n(x4i, rect, r3h, y2l);
}

r1j(rect, color)
{
	this.v5k(rect, color);
}

p0a()
{
	for (const k2d of b7a)
	{
		this.p9f(k2d);
	}
}

h4s(d4d, z4d, l6i)
{
	this.p0p = d4d;
	this.p7j = z4d;
	this.y9c = l6i;

	this.s5e.length = 0;
 	let k6p = this.a6w(d4d);
  let m6l = this.a6w(z4d);
	let f8m = this.x4e.s0f;

	let f5s = 32;
	if (f8m < 32)
	{
		f5s = f8m;
	}

  
	if (false)
	{
    
    
		let k1w = new d0e(k6p.o5d + f8m / 2, k6p.k7q + f8m / 2);
		let i0f = new d0e(m6l.o5d + f8m / 2, m6l.k7q + f8m / 2);
		let t6a = Math.abs(k1w.X - i0f.X);
		let u0v = Math.abs(k1w.Y - i0f.Y);
		let p8t = Math.atan2(i0f.X - k1w.X, k1w.Y - i0f.Y);
		let b2w = Math.sqrt(t6a*t6a + u0v*u0v) / 2;
		i0f.X = k1w.X + b2w * 2;
		i0f.Y = k1w.Y;
		let f6u = new d0e(k1w.X + b2w, k1w.Y);
		let n2s = Math.PI / f5s;
		let i8b = f8m * 0.40;
		let r2p = Math.PI;
		let e7z = (m6l.o5d > k6p.o5d && m6l.k7q < k6p.k7q) ||
			(m6l.o5d < k6p.o5d && m6l.k7q > k6p.k7q);
		for (let i = 1; i < f5s; i++)
		{
			let q2v = new d2o();
			if (e7z)
			{
				r2p -= n2s;
			}
			else
			{
				r2p += n2s;
			}
			let v5p = Math.cos(r2p);
			let a8y = Math.sin(r2p);
			let l5n = new d0e(f6u.X + b2w * v5p,
				f6u.Y - i8b * a8y);
			this.s5e.push(u3p(l5n, k1w, p8t - Math.PI / 2));
		}
	}
	else
	{
		let k1w = new d0e(k6p.o5d + f8m / 2, k6p.k7q + f8m / 2);
		let i0f = new d0e(m6l.o5d + f8m / 2, m6l.k7q + f8m / 2);
		let a4z = (i0f.X - k1w.X) / f5s;
		let i3z = (i0f.Y - k1w.Y) / f5s;
		for (let i = 1; i < f5s; i++)
		{
			this.s5e.push(new d0e(k1w.X + i * a4z, k1w.Y + i * i3z));
		}
	}
	this.s5e.push(new d0e(m6l.o5d + f8m / 2, m6l.k7q + f8m / 2));
	this.a8g = 0;
}

o6c()
{
	this.p0p = f1k;
	this.p7j = f1k;
}

n5j()
{
	this.z6p(); 

	let g1l = this.s5e[this.a8g];
	let s0f = this.x4e.s0f;
	let q2v = new d2o();
	q2v.o5d = g1l.X - s0f / 2;
	q2v.k7q = g1l.Y - s0f / 2;
	q2v.v8d(s0f);
	q2v.j5z(s0f);
 	let x4i = this.t9q();
	c6p(x4i, q2v, this.e3i.j0s(this.p0p));

	this.a8g++;
	if (this.a8g >= this.s5e.length)
	{
		let h1e = this.e3i.j0s(this.p0p);
		this.e3i.t8a(this.p0p, r4u.f7c);
		this.e3i.t8a(this.p7j, h1e);
		this.o6c();
		return true;
	}
	else
	{
		return false;
	}
}

p9f(k2d)
{
	if (k2d == this.p0p)
	{
		return;
	}
	let f4i = this.a6w(k2d);
 	let x4i = this.t9q();
	c6p(x4i, f4i, this.e3i.j0s(k2d));
}

a2t()
{
	if (!this.x4e.r7j)
	{
    return;
  }

 	let h0a = this.x4e.h0a;
	let p9d = this.x4e.p9d;
	let p3z = this.x4e.p3z;
	let s0f = this.x4e.s0f;

	let x9o = new d2o();
	x9o.o5d = this.g0k + p9d + p3z;
	x9o.k7q = this.m1e + p9d + p3z;
	x9o.v8d(n3x * s0f + 2 * h0a);
	x9o.j5z(n3x * s0f + 2 * h0a);

 	let x4i = this.t9q();
  let m0f = w8i(x4i, p3z-6);

  a2t(x4i,
    x9o,
    this.x4e,
    m0f,
    l7g.k1o,
    this.s4o,
    this.k1g,
    p3z);
}

k9g(k2d, color)
{
	let rect = this.a6w(k2d);
	let x4i = this.t9q();
  x4i.save();
  x4i.globalAlpha = 0.25; 
	x4i.fillStyle = color;
	x4i.fillRect(rect.o5d, rect.k7q, rect.h5k(), rect.c9o());
  x4i.restore();
}

y9w()
{
	if (this.p0g)
	{
		if (!this.w9j.f7c())
		{
      let color = "#800080"; 
			this.k9g(this.w9j.d4d, color);
			this.k9g(this.w9j.z4d, color);
		}
  }
}

h3g()
{
	for (const n7v of this.q7k.u7k)
	{
		this.y6x(n7v);
	}
}

y6x(n7v)
{
	let rect = this.a6w(n7v.k2d);
	let p3u = '';
	switch (n7v.type)
	{
		case f6d.a8z:
			p3u = l8j;
			break;
		case f6d.f7s:
			p3u = j2v;
			break;
		case f6d.r4p:
			p3u = z0r;
			break;
	}
	let f8m = this.h3l / 10;
	let x4i = this.t9q();
  /* dit is met roundrect
  f2n(rect, 5);
	x4i.lineWidth = f8m / 15;
	x4i.strokeStyle = p3u;
	d7o(x4i, rect.o5d, rect.k7q, rect.h5k(), rect.c9o(), 10);
  */
  
  x4i.save();
  x4i.globalAlpha = 0.7; 
	x4i.fillStyle = p3u;
	x4i.fillRect(rect.o5d, rect.k7q, rect.h5k(), rect.c9o());
  x4i.restore();
}

y7a()
{
	for (const l1c of this.c6n.y4w)
	{
		this.l2n(l1c);
	}
}

l2n(l1c)
{
	let d4d = l1c.d4d;
	let z4d = l1c.z4d;
	let v1j = l1c.type;

	let k6p = this.a6w(d4d);
	let m6l = this.a6w(z4d);

	let u3s = k6p.o5d + k6p.h5k()/2;
	let n6v = k6p.k7q + k6p.c9o()/2;
	let h2x = new d0e(u3s, n6v);

	let f6w = m6l.o5d + m6l.h5k()/2;
	let h3b = m6l.k7q + m6l.c9o()/2;

	let i1u = (f6w-u3s)*(f6w-u3s) + (h3b-n6v)*(h3b-n6v);
	let g7j = Math.sqrt(i1u);

	let f9n = (this.e3i.l4f(d4d)) ? 0 : k6p.h5k() / 4;
	g7j -= f9n;
	let b8r = (this.e3i.l4f(z4d)) ? 0 : k6p.h5k() / 4;
	g7j -= b8r;

	let z3k = 5;
	let f9c = 5 * z3k;
	let n7j = 7 * z3k;

	let d6t = u3s + f9n;
	let c6x = n6v;

	let w1d = d6t + g7j - 1;
	let a1u = n6v;

	let y8k = w1d - n7j;
	let w9s = n6v;

	let p8t = Math.atan2((f6w - u3s), (n6v - h3b));

  
	let j8e = [];
  let r0v = 10; 
	j8e.push(new d0e(y8k, w9s));
	j8e.push(new d0e(y8k - r0v, w9s - f9c));
	j8e.push(new d0e(w1d, a1u));
	j8e.push(new d0e(y8k - r0v, w9s + f9c));
	j8e.push(new d0e(y8k, a1u));
	let r8u = [];
	for (let i = 0; i <= 4; i++)
	{
		r8u.push(u3p(j8e[i], h2x, p8t - Math.PI / 2));
	}

	let x4i = this.t9q();
  x4i.save();
  x4i.globalAlpha = 0.7;

 	let q4e = '';
	switch (v1j)
	{
		case y3m.j6v:
			q4e = o8j;
			break;
		case y3m.m0i:
			q4e = e7j;
			break;
		case y3m.o2m:
			q4e = q0y;
			break;
	}
 	x4i.fillStyle = q4e;
  x4i.strokeStyle = q4e;
	x4i.beginPath();
	x4i.moveTo(r8u[0].X, r8u[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		x4i.lineTo(r8u[i].X, r8u[i].Y);
	}
	x4i.closePath();
	x4i.fill();

  
	j8e.length = 0;
	j8e.push(new d0e(d6t, c6x - z3k));
	j8e.push(new d0e(d6t, c6x + z3k));
	j8e.push(new d0e(y8k, c6x + z3k));
	j8e.push(new d0e(y8k, c6x - z3k));
	r8u.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		r8u.push(u3p(j8e[i], h2x, p8t - Math.PI / 2));
	}
	if (u3s == f6w)
	{
		if (r8u[0].Y != r8u[1].Y)
		{
			r8u[0].Y = r8u[1].Y;
		}
		if (r8u[2].Y != r8u[3].Y)
		{
			r8u[2].Y = r8u[3].Y;
		}
	}
	if (n6v == h3b)
	{
		if (r8u[0].X != r8u[1].X)
		{
			r8u[0].X = r8u[1].X;
		}
		if (r8u[2].X != r8u[3].X)
		{
			r8u[2].X = r8u[3].X;
		}
	}
	x4i.beginPath();
	x4i.moveTo(r8u[0].X, r8u[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		x4i.lineTo(r8u[i].X, r8u[i].Y);
	}
	x4i.closePath();
	x4i.fill();
  x4i.restore();
}

x7c()
{
	let p9d = this.x4e.p9d;
	let p3z = this.x4e.p3z;
	let f8m = this.x4e.s0f;
	let rect = new d2o();
	rect.o5d = this.b1y - p9d - p3z + 1;
	rect.k7q = this.n0d - p9d - p3z;
	rect.b3h = this.n0d;
	rect.k0f = this.b1y - 1;
	return rect;
}

}

const u3m = 14;

const f2t =
{
	f0b : 0
};

const s5k =
{
	f0b : 0
};

const b7k =
{
	i6p : 0,
	r8b : 1,
};

const l7g =
{
	d1a: 0,
	b4t: 1,
	k1o: 2,
	y7f: 3,
	n6s: 4,
};

class j4f
{

constructor()
{
	this.x1r = f2t.f0b;
	this.z7l = 1; 
	this.p9d = 0;
	this.p3z = u3m;
	this.h0a = 2;
	this.s0f = 32;
	this.e5g = 20;
	this.r7j = true;
	this.x7k = b7k.r8b;
	this.a5l = true;
}

z4e()
{
	let t2t = new j4f();
	t2t.x1r = this.x1r;
	t2t.z7l = this.z7l;
	t2t.p9d = this.p9d;
	t2t.p3z = this.p3z;
	t2t.h0a = this.h0a;
	t2t.s0f = this.s0f;
	t2t.e5g = this.e5g;
	t2t.r7j = this.r7j;
	t2t.x7k = this.x7k;
	t2t.a5l = this.a5l;
	return t2t;
}

h3l()
{
	return this.s0f * n3x + 2 * (this.p9d + this.p3z + this.h0a);
}

q2p(rect)
{
	let w = rect.h5k();
	let h = rect.c9o();
	let e0d = 0;
	if (w < h)
	{
		e0d = w;
	}
	else
	{
		e0d = h;
	}
	if (this.p3z)
	{
		for (this.s0f = 2; this.s0f < 1000; this.s0f++)
		{
			this.p3z = (this.s0f / 100) * this.e5g;
			if (this.p3z < u3m)
			{
				this.p3z = u3m;
			}
			let size = 2 * (this.p9d + this.p3z + this.h0a) + n3x * this.s0f;
			if (size > e0d)
			{
				break;
			}
		}
		this.s0f--;
		this.p3z = (this.s0f / 100) * this.e5g;
		if (this.p3z < u3m)
		{
			this.p3z = u3m;
		}
	}
	else
	{
		for (this.s0f = 2; this.s0f < 1000; this.s0f++)
		{
			let size = 2 * (this.p9d + this.h0a) + n3x * this.s0f;
			if (size > e0d)
			{
				break;
			}
		}
		this.s0f--;
	}
	return this.h3l();
}

}


class l8u
{

constructor()
{
	this.x7g = new b6u();
	this.r9j = new b6u();
	this.c6n = new n3j();
	this.q7k = new k4l();
	this.o4i = new j7i();
 	this.h7l = new j7i();
	this.d3y = 0;
	this.b6l = false;
	this.u4q = false;
	this.v1i = 0;
	this.k0m = 0;
	this.i4n = '';
}

}

const y7c =
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

function f2n(rect, i9q)
{
	rect.o5d += i9q;
	rect.k0f -= i9q;
	if (rect.o5d > rect.k0f)
	{
		rect.o5d = rect.k0f;
	}
	rect.k7q += i9q;
	rect.b3h -= i9q;
	if (rect.k7q > rect.b3h)
	{
		rect.k7q = rect.b3h;
	}
}

function i6n(o1w, l1w, f2s, y2l)
{
	o1w.drawImage(f2s, y2l.o5d, y2l.k7q, y2l.h5k(), y2l.c9o(),
		l1w.o5d, l1w.k7q, l1w.h5k(), l1w.c9o());
}

function d7o(x4i, x, y, width, height, n1i)
{
	x4i.beginPath();
	x4i.moveTo(x, y + n1i);
	x4i.lineTo(x, y + height - n1i);
	x4i.arcTo(x, y + height, x + n1i, y + height, n1i);
	x4i.lineTo(x + width - n1i, y + height);
	x4i.arcTo(x + width, y + height, x + width, y + height-n1i, n1i);
	x4i.lineTo(x + width, y + n1i);
	x4i.arcTo(x + width, y, x + width - n1i, y, n1i);
	x4i.lineTo(x + n1i, y);
	x4i.arcTo(x, y, x, y + n1i, n1i);
	x4i.stroke();
}

function u3p(j9a, h2x, c0a)
{
	let p = new d0e();
	p.X = (Math.cos(c0a) * (j9a.X - h2x.X)) - (Math.sin(c0a) * (j9a.Y - h2x.Y)) + h2x.X;
	p.Y = (Math.sin(c0a) * (j9a.X - h2x.X)) + (Math.cos(c0a) * (j9a.Y - h2x.Y)) + h2x.Y;
	return p;
}

function o7l(x4i, rect, s8d)
{
	let left = rect.o5d;
	let top = rect.k7q;
	let a9r = rect.k0f;
	let k3a = rect.b3h;

	x4i.fillStyle = u0b;
	x4i.fillRect(rect.o5d, rect.k7q, rect.h5k(), rect.c9o());

	if (s8d.i6p())
	{
		return;
	}

	let z6e = s8d.z7m();
	let f8f = 0;
	if (z6e > 8)
	{
		f8f = (a9r - left) / 8;
	}
	else
	{
		f8f = (a9r - left) / z6e;
	}
	let t9a = left - f8f;
	let j7a = top;
	let u9n = t9a + f8f;
	let w2x = 0;
	if (z6e > 8)
	{
		w2x = (k3a - top + 1) / 2;
	}
	else
	{
		w2x = k3a - top + 1;
	}

	let a7i = top + w2x - 1;
	let g9x = 0;
	for (let i = 0; i < 16; i++)
	{
		if (s8d.k7g(i))
		{
			t9a += f8f;
			u9n += f8f;
			if (g9x == 7 || g9x == 15 ||
				(g9x < 8 && g9x == z6e - 1))
			{
				u9n = a9r;
			}
			if (g9x == 8)
			{
				t9a = left;
				u9n = t9a + f8f;
				j7a = top + w2x;
				a7i = k3a;
			}
			let m1y = new d2o(t9a, j7a, u9n, a7i);
			x4i.fillStyle = y7c[i];
			x4i.fillRect(m1y.o5d, m1y.k7q, m1y.h5k(), m1y.c9o());
			g9x++;
		}
	}
}




class p5g
{

constructor()
{
	this.d3i = '';
	this.r3h = null;
}

}

class a7o
{

constructor()
{
	this.j2b = [];
}

add(img)
{
	let m5s = new p5g();
	m5s.d3i = img.id;
	m5s.r3h = img;
	this.j2b.push(m5s);
}

r3h(d3i)
{
	for (const l7f of this.j2b)
	{
		if (l7f.d3i.toLowerCase() == d3i.toLowerCase())
		{
			return l7f.r3h;
		}
	}
	return null;
}

}
const i9z 				= "#00FFFF";
const z4t 			= "#000000";
const h5b 				= "#0000FF";
const p2i 			= "#FFFBF0";
const c2l 			= "#808080";
const o2c 		= "#FF00FF";
const u4w 				= "#808080";
const q2a 			= "#008000";
const h9j 				= "#00FF00";
const j6t 			= "#C0C0C0";
const k4s 			= "#800000";
const l1i 		= "#A0A0A4";
const p2s 	= "#C0DCC0";
const p2n 				= "#000080";
const p8q 			= "#808000";
const r6a 			= "#800080";
const u0b 				= "#FF0000";
const s8k 			= "#C0C0C0";
const k4t 		= "#A6CAF0";
const u4d 				= "#008000";
const w2f 			= "#FFFFFF";
const t9p 			= "#FFFF00";

class d0e
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

z4e()
{
	let r0i = new d0e();
	r0i.o5d = this.X;
	r0i.k7q = this.Y;
	return r0i;
}

}

class d2o
{

constructor(left, top, a9r, k3a)
{
	if (left === undefined)
	{
		this.o5d = 0;
		this.k7q = 0;
		this.k0f = 0;
		this.b3h = 0;
	}
	else
	{
		this.o5d = left;
		this.k7q = top;
		this.k0f = a9r;
		this.b3h = k3a;
	}
}

z4e()
{
	let o5x = new d2o();
	o5x.o5d = this.o5d;
	o5x.k7q = this.k7q;
	o5x.k0f = this.k0f;
	o5x.b3h = this.b3h;
	return o5x;
}

h5k()
{
	return this.k0f - this.o5d + 1;
}

l5t()
{
	return this.k0f - this.o5d + 1;
}

v8d(width)
{
	this.k0f = this.o5d + width - 1;
}

c9o()
{
	return this.b3h - this.k7q + 1;
}

w8y()
{
	return this.b3h - this.k7q + 1;
}

j5z(height)
{
	this.b3h = this.k7q + height - 1;
}

t2l()
{
	this.o5d++;
	this.k7q++;
	this.k0f--;
	this.b3h--;
}

v9j(g1l)
{
	return g1l.X >= this.o5d &&
		g1l.X <= this.k0f &&
		g1l.Y >= this.k7q &&
		g1l.Y <= this.b3h;
}


}

class u9h
{

constructor(y2u)
{
	this.y2u = y2u;
	this.r2t = new b6u();
	this.f1l = new e6y();
	this.p2k = null;
	this.x4e = new j4f();
	this.s2g = true;
}

c0m()
{
	let q2j = window.devicePixelRatio;

	this.f1l.e3h.width = this.p2k.clientWidth * q2j;
	this.f1l.e3h.height = this.p2k.clientHeight * q2j;

	let w4l = 32 * q2j;
	let a9t = 32 * q2j;
	let d7h = this.f1l.e3h.width - w4l;
	let v7c = this.f1l.e3h.height - a9t;
	let a3o = v7c < d7h ? v7c : d7h;
	if (a3o < 128)
	{
		a3o = 128;
	}
	let rect = new d2o();
	rect.o5d = 0;
	rect.k7q = 0;
	rect.v8d(a3o);
	rect.j5z(a3o);
	this.x4e.p3z = a3o * 0.02;
  if (this.x4e.p3z < u3m)
  {
    this.x4e.p3z = u3m;
  }
	a3o = this.x4e.q2p(rect);
 	this.f1l.m7c(this.x4e);
	this.f1l.z6p();
}

n5l()
{
	this.f1l.n5l();
	this.f1l.z6p();
}

c1w()
{
	this.x4e.r7j = !this.x4e.r7j;
	this.f1l.m7c(this.x4e);
	this.f1l.z6p();
}

f6s()
{
	this.f1l.m7c(this.x4e);
	this.f1l.z6p();
}

t5i(i5o)
{
	this.r2t = i5o.r9j.z4e();
	this.f1l.l8r(this.r2t);
	this.f1l.f4h(i5o.c6n);
	this.f1l.j9q(i5o.q7k);
  
 	this.f1l.n8h(i5o.h7l);
	this.f1l.z6p();

	if (this.s2g)
	{
		y7y('playBackward' + this.y2u, i5o.b6l);
		y7y('goToBegin'+ this.y2u, i5o.b6l);
		y7y('playForward' + this.y2u, i5o.u4q);
		y7y('goToEnd' + this.y2u, i5o.u4q);
		y7y('autoPlay' + this.y2u, i5o.u4q);
	}
	else
	{
		y7y('goToBegin' + this.y2u, i5o.b6l);
		y7y('goToEnd' + this.y2u, i5o.u4q);
	}
}

l8r(e3i)
{
	let i5o = new l8u();
	i5o.r9j = e3i.z4e();
	this.l8r(i5o);
}

m7c(x4e)
{
  this.x4e = x4e.z4e();
}

}

const v2j =
{
	h5j       : 0,
	v5g        : 1,
};

class g0t
{

constructor(y2u)
{
	this.y2u = y2u;
 	this.h3h = new l1j();
 	this.v7f = new r3l(y2u);
  this.v7f.m5a = false;
  this.v7f.k4b = true;
  this.v7f.z8t = true;
  this.v7f.e2f = false;
  this.j9t = null;
  this.w8o = new o7u();
  this.z3n = new i0q();
 	this.r6p = new d1f();
	this.h1w = new b6u();
	this.v3l = new b6u();
	this.q6a = 0;
	this.v7r = [];
	this.b3d = false;
 	this.u9f = false;
 	this.o5j = false;
 	this.y8u = false;
  this.d3h = v2j.h5j;
  this.j3l = document.getElementById("threat"+this.y2u);
 	this.j3l.onclick = this.c3w.bind(this);
  this.i2l();
  this.n8e = document.getElementById("engineSettings"+this.y2u);
}

s1i(s3c)
{
  this.j9t = new Engine();
  this.j9t.m1x = (event) => {
    this.a0l(event);
  };
  this.j9t.v5i(s3c);
  this.j9t.g9t();
}

j2a()
{
	this.w8o = this.j9t.s3c();
	this.r6p = new d1f();
  /*
	showName();
	MovePanel->Caption = "";
	ScorePanel->Caption = "";
	DepthPanel->Caption = "";
	NodesPanel->Caption = "";
  */
	this.h3h.l8r(this.r6p.e3i,
    this.r6p.f6q);
	this.r7k();
 	this.b2p();
  this.i2l();
}

l8r(x7g, k7e, z1l, w0m)
{
	this.v3l = x7g.z4e();
	this.q6a = k7e;
	this.v7r = z1l.slice(); 
	this.b3d = w0m;
	this.b2p();
}

b2p()
{
	if (!this.j9t) return;
	if (this.u9f) return;

	if (this.o5j)
	{
		let z1l = new l1j();
		z1l.l8r(this.v3l, this.q6a);
		let u4v = z1l.u4v();
		z1l.h2i(u4v, this.v7r);
		let y3u = z1l.f4v();
		let j5m = z1l.d3y(z1l.k5o());
		if (y3u.a7q())
		{
			j5m++;
		}
		let a8f = y3u;
		a8f.i0x();
		this.z3n = new i0q();
    this.z3n.z1l.l8r(a8f, j5m);
		this.h1w = a8f;
  }
  else
  {
 		this.z3n.z1l.l8r(this.v3l, this.q6a);
		let u4v = this.z3n.z1l.u4v();
		this.z3n.z1l.h2i(u4v, this.v7r);
		this.h1w = this.z3n.z1l.f4v();
  }
  if (t8d === 10) 
  {
    this.z3n.e6e = z2x;
  }
  else
  {
    this.z3n.e6e = v7m(t8d);
  }

  this.j9t.l9s();
	this.y8u = false;
  let z1l = y1w(this.h1w);
  if (z1l.length == 0)
  {
  	this.j9t.k5q(this.z3n);
		return;
  }
  else
  {
  	this.j9t.k5q(this.z3n);
		return;
  }
}

m0j()
{
	this.r6p = this.j9t.i4b();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.h3h.l8r(this.r6p.e3i,
    this.r6p.f6q);
	this.r7k();
}

m4e()
{
	this.r6p = this.j9t.i4b();
	
}


h1l()
{
	this.r6p = this.j9t.i4b();
  
	
	
	
  
	this.r7k();
}

r7k()
{
	let b6r = this.r6p.n8d.z1l.z4e();
  b6r.l8r(this.r6p.e3i, this.r6p.f6q);

  if (this.r6p.b3a)
  {
    for (let d9e of this.r6p.lines)
    {
      let z1l = d9e.z1l.r5q();
      let b9l = b6r.u4v();
      let f6q = 0;
      for (let c7j of z1l)
      {
        if (f6q == 0)
        {
					let j6f = d9e.f4m() +
						"/" + d9e.f5h;
					c7j.g9m(j6f);
        }
        b6r.d4y(b9l, c7j);
        f6q++;
      }
    }
  }
  else
  {
    if (this.r6p.lines.length !== 0)
    {
      let d9e = this.r6p.lines[this.r6p.lines.length - 1];
      let z1l = d9e.z1l.r5q();
      let b9l = b6r.u4v();
      let f6q = 0;
      for (let c7j of z1l)
      {
				if (f6q == 0)
				{
					let j6f = d9e.f4m() +
						"/" + d9e.f5h;
					c7j.g9m(j6f);
				}
        b6r.d4y(b9l, c7j);
        f6q++;
      }
    }
  }
  this.h3h = b6r.z4e();
  this.v7f.b3a = this.r6p.b3a;
  this.v7f.q3z(this.h3h, 0);
}

a0l(event)
{
  const {cmd, data} = event;
  if (cmd === 'ready')
  {
    this.j2a()
  }
  else if (cmd === 'go')
  {
    this.m0j()
  }
  else if (cmd === 'cm')
  {
    this.m4e();
  }
  else if (cmd === 'pv')
  {
    this.h1l();
  }
}

c4z()
{
	if (this.j9t)
	{
    this.j9t.m1x = null;
    this.j9t.w0b();
		this.j9t = null;
		this.r6p = new d1f();
  	this.h3h.l8r(this.r6p.e3i,
      this.r6p.f6q);
  	this.r7k();
    this.o5j = false;
    this.i2l();
  }
}

n1r()
{
	return (this.j9t != null);
}

a4o()
{
  return (this.engineMode === v2j.v5g);
}

c3w()
{
	if (this.j9t && !this.a4o())
	{
		this.o5j = !this.o5j;
		this.i2l();
		this.b2p();
	}
}

i2l()
{
	if (this.j9t)
	{
    this.j3l.disabled = false;
    this.j3l.classList.remove('threat-inactive');
		if (this.o5j)
		{
      this.j3l.classList.remove('threat-off');
      this.j3l.classList.add('threat-on');
		}
		else
		{
      this.j3l.classList.remove('threat-on');
      this.j3l.classList.add('threat-off');
		}
	}
	else
	{
    this.j3l.disabled = true;
    this.j3l.classList.add('threat-inactive');
    this.j3l.classList.remove('threat-on');
    this.j3l.classList.add('threat-off');
	}
}

}

class n5b
{

constructor(y2u)
{
	this.y2u = y2u;
  this.d2m = null;
	this.b7n = new p6g();
}

k3s(b7n)
{
	this.b7n = b7n.z4e();
	this.k6c();
}

k6c()
{
	let u1u = this.b7n.j1n.m1i.w0q();
	let c8x = this.b7n.f0n.m1i.w0q();

	let b0t = '';
	if (u1u.length && this.b7n.j1n.g1u)
	{
		b0t = this.b7n.j1n.g1u.toString();
	}
	let r9y = '';
	if (u1u.length && this.b7n.j1n.d9y.length)
	{
		r9y = this.b7n.j1n.d9y.toString();
	}

	let w2l = '';
	if (c8x.length && this.b7n.f0n.g1u)
	{
		w2l = this.b7n.f0n.g1u.toString();
	}
	let i1t = '';
	if (c8x.length && this.b7n.f0n.d9y.length)
	{
		i1t = this.b7n.f0n.d9y.toString();
	}

	let s6l = this.b7n.j1n.m1i.g1w(1);
	let u6s = this.b7n.f0n.m1i.g1w(1);

	let t0h = '';
	let a5u = '';
	if (!this.b7n.j1n.h4v.f7c() &&
		!this.b7n.f0n.h4v.f7c())
	{
		t0h = this.b7n.j1n.h4v.i9d();
		a5u = this.b7n.f0n.h4v.i9d();
	}

	let k6h = o3m(this.b7n.t7t);
	let h4b = this.b7n.h4b.d9y;
	if (!this.b7n.h4b.t5p.f7c())
	{
		h4b += " ";
		h4b += this.b7n.h4b.t5p.s6z.toString();
	}
	let v3e = '';
	if (!this.b7n.i4j.f7c())
	{
		v3e = this.b7n.i4j.toString("dd-mm-yyyy");
	}
	let e4h = '';
	if (!this.b7n.e4h.f7c())
	{
		e4h = '</br>' + '[' + this.b7n.e4h.d3i + ']';
	}

	let r1d = document.getElementById("nota-container"+this.y2u);
	let p8l = r1d.clientHeight;
	let g0p = 200;

  let index = this.y2u;
  let i7v = this.b7n.h4b.i7v;

	let h5x = true;
	if (this.d2m.clientWidth >= 374 && p8l >= g0p)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + u1u + "</span>";
    s += 					"<span class=\"rating\">" + b0t + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + t0h + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + k6h + "</span>";
		s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + c8x + "</span>";
		s +=          "<span class=\"rating\">" + w2l + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + a5u + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "<span>" + r9y + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + h4b + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + i7v + "</span>";
		s +=          "<span class=\"gameDate\">" + v3e + "</span>";
    s +=          "<span class=\"annotator\">" + e4h + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + i1t + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
		s +=      "</tr>";
		s +=    "</table>";
		this.d2m.innerHTML = s;

		
		
		let s0p = Math.trunc(this.d2m.clientWidth / 10);
		if (s0p < 24) s0p = 24;
    
		
		
		
		
		
		
	}
	else if (this.d2m.clientWidth >= 300 && p8l >= g0p)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + s6l + "</span>";
    s +=          "<span class=\"rating\">" + b0t + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + t0h + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + k6h + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + u6s + "</span>";
    s +=          "<span class=\"rating\">" + w2l + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + a5u + "</span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + r9y + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + h4b + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + i7v + "</span>";
    s +=          "<span class=\"gameDate\">" + v3e + "</span>";
		s +=          "<span class=\"annotator\">" + e4h + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + i1t + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.d2m.innerHTML = s;
	}
	else if (this.d2m.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + s6l + "</span>";
    s +=          "<span class=\"rating\">" + b0t + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + k6h + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + u6s + "</span>";
    s +=          "<span class=\"rating\">" + w2l + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.d2m.innerHTML = s;
	}
	else
	{
		
		h5x = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + s6l + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + k6h + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + u6s + "</span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.d2m.innerHTML = s;
	}

	if (h5x)
	{
		let k6e = 16;
		if (this.d2m.clientWidth < 400)
		{
			k6e = 16;
		}
		else if (this.d2m.clientWidth < 500)
		{
			k6e = 24;
		}
		else
		{
			k6e = 32;
		}
    if (this.b7n.j1n.h1a != y3a.i6p)
    {
  		let a3c = document.getElementById("whitePlayerNation"+this.y2u);
	  	a3c.src = "images/flags/" + k6e.toString() +"/" + r1m(this.b7n.j1n.h1a) + ".png";
		  a3c.height = k6e;
  		a3c.width = k6e;
    }
    if (this.b7n.f0n.h1a != y3a.i6p)
    {
  		let o3v = document.getElementById("blackPlayerNation"+this.y2u);
	  	o3v.src = "images/flags/" + k6e.toString() + "/" + r1m(this.b7n.f0n.h1a) + ".png";
		  o3v.height = k6e;
  		o3v.width = k6e;
    }
	}
}

}

class o4l
{

constructor(y2u)
{
	this.y2u = y2u;
	this.b7n = new p6g();
	this.l4g = new u9h(y2u);
	this.r9v = new h2y(y2u);
	this.r9v.v7f.m6s = this; 
	this.g1o = new k2h();
  this.k1r = new g0t(y2u);
}

n5l()
{
	this.l4g.n5l();
}

c1w()
{
	this.l4g.c1w();
}

f6s()
{
	this.l4g.f6s();
	this.r9v.v7f.f6s();
}

n7y(m7j, m4b, m0v, s8f)
{
	this.d0n(s8f, m0v);
}

d0n(s8f, m0v)
{
	this.b7n = s8f.n5t.z4e();
	this.k3s();
	this.r9v.v7f.q3z(s8f.z1l, m0v);
}

k3s()
{
	this.r9v.c5h.k3s(this.b7n);
}

x8x(i5o)
{
	this.l4g.t5i(i5o);
  this.k0u();
}

o2o()
{
	if (this.g1o.m7y())
	{
		this.g1o.p0l();
    this.o9i();
	}
	else
	{
		if (!this.r9v.v7f.y4k())
		{
      
			this.g1o.m6s = this; 
			this.g1o.l5s();
			this.r9v.v7f.y4s();
		}
	}
}

e3n(s3c)
{
	this.k1r.s1i(s3c);
}

q5q()
{
	this.k1r.c4z();
}

y5y()
{
	return this.k1r.n1r();
}

k0u()
{
  if (!this.g1o.m7y())
  {
    this.o9i();
  }
}

o9i()
{
	this.k1r.l8r(
		this.r9v.v7f.x7g(),
		this.r9v.v7f.k7e(),
		this.r9v.v7f.s1d(),
		this.r9v.v7f.w0m());
}

}

const z2s =
{
	v9h : 0,
	m5e : 1,
	z3x : 2,
	g3v : 3,
	f4c : 4,
 	b0v : 5,
	t7t : 6,
	z1l : 7,
	s6z : 8,
	event : 9,
	u6y : 10
};

const m9w =
{
	i6p : 0,
	t7i : 1,
	u7x : 2
};

let u0a = 0;
let c2w = 0;
let y9f = 0;
let a0m = 0;
let g9c = 0;
let u3r = 0;
let q4a = 0;
let x3a = 0;

let u7x = false;

function i3j(f, s)
{
	let q8x = f.n5t.j1n.m1i.d3i();
	let o2j = s.n5t.j1n.m1i.d3i();
	if (q8x < o2j)
	{
		return u7x ? -1 : 1;
	}
	if (q8x > o2j)
	{
		return u7x ? 1 : -1;
	}
	q8x = f.n5t.f0n.m1i.d3i();
	o2j = s.n5t.f0n.m1i.d3i();
	if (q8x < o2j)
	{
		return -1;
	}
	if (q8x > o2j)
	{
		return 1;
	}
	return 0;
}

function z0p(f, s)
{
	let q8x = f.n5t.f0n.m1i.d3i();
	let o2j = s.n5t.f0n.m1i.d3i();
	if (q8x < o2j)
	{
		return u7x ? -1 : 1;
	}
	if (q8x > o2j)
	{
		return u7x ? 1 : -1;
	}
	q8x = f.n5t.j1n.m1i.d3i();
	o2j = s.n5t.j1n.m1i.d3i();
	if (q8x < o2j)
	{
		return -1;
	}
	if (q8x > o2j)
	{
		return 1;
	}
	return 0;
}

function k6d(f, s)
{
	let n3c = f.n5t.j1n.g1u - s.n5t.j1n.g1u;
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	n3c = f.n5t.f0n.g1u - s.n5t.f0n.g1u;
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	return i3j(f, s);
}

function b1a(f, s)
{
	let n3c = f.n5t.f0n.g1u - s.n5t.f0n.g1u;
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	n3c = f.n5t.j1n.g1u - s.n5t.j1n.g1u;
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	return i3j(f, s);
}

function e7w(f, s)
{
	let n3c = f.n5t.j1n.h1a - s.n5t.j1n.h1a;
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	n3c = f.n5t.f0n.h1a - s.n5t.f0n.h1a;
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	return i3j(f, s);
}

function h2n(f, s)
{
	let n3c = f.n5t.f0n.h1a - s.n5t.f0n.h1a;
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	n3c = f.n5t.j1n.h1a - s.n5t.j1n.h1a;
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	return i3j(f, s);
}

function w6i(f, s)
{
	let n3c = f.n5t.t7t - s.n5t.t7t;
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	return i3j(f, s);
}

function i8c(f, s)
{
	let n3c = s.n5t.i4j.i4j() - f.n5t.i4j.i4j();
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	return i3j(f, s);
}

function m1l(f, s)
{
	let c6o = f.n5t.h4b.d9y;
	let n1m = s.n5t.h4b.d9y;
	if (c6o < n1m)
	{
		return u7x ? -1 : 1;
	}
	if (c6o > n1m)
	{
		return u7x ? 1 : -1;
	}
	let n3c = f.n5t.h4b.t5p.i4j() - s.n5t.h4b.t5p.i4j();
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	n3c = f.n5t.u6y - s.n5t.u6y;
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	n3c = f.n5t.z9l - s.n5t.z9l;
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	return i3j(f, s);
}

function l0j(f, s)
{
	let n3c = s.n5t.u6y - f.n5t.u6y;
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	n3c = s.n5t.z9l - f.n5t.z9l;
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	return i3j(f, s);
}

function c3p(f, s)
{
	let n3c = s.p6s - f.p6s;
	if (u7x)
	{
		n3c = -n3c;
	}
	if (n3c < 0) return -1;
	if (n3c > 0) return 1;
	return i3j(f, s);
}

class e1h
{

constructor(y2u)
{
	this.y2u = y2u;
	this.q9u = [];
	this.s1s = null;
	this.b4z = null;
	this.b0e = null;
	this.h2s = [];
	this.e3o = [];
	this.e9c = -1;
	this.j0x = m9w.i6p;
	this.m4v = 0;
  this.s1f = null;
}

r2r()
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
	this.b0e.innerHTML = s;
	this.h2s = this.b0e.getElementsByTagName("TH");
	let y2u = this.y2u;

 	this.h2s[z2s.v9h].onclick = this.q2u.bind(this);
	this.h2s[z2s.m5e].onclick = this.g9j.bind(this);
  this.h2s[z2s.z3x].onclick = this.w1p.bind(this);
	this.h2s[z2s.g3v].onclick = this.q2u.bind(this);
	this.h2s[z2s.f4c].onclick = this.d3l.bind(this);
  this.h2s[z2s.b0v].onclick = this.k0p.bind(this);
	this.h2s[z2s.t7t].onclick = this.n1x.bind(this);
	this.h2s[z2s.z1l].onclick = this.c9e.bind(this);
	this.h2s[z2s.s6z].onclick = this.a3g.bind(this);
	this.h2s[z2s.event].onclick = this.c2r.bind(this);
	this.h2s[z2s.u6y].onclick = this.u4o.bind(this);
}

u5d(q9u)
{
	this.q9u = q9u;
	this.c0m();
}

i5k()
{
	this.k7b("grid-player");
	this.k7b("grid-rating");
 	this.k7b("grid-flag");
	this.k7b("grid-result");
	this.k7b("grid-moves");
	this.k7b("grid-year");
	this.k7b("grid-event");
	this.k7b("grid-round");
}

u9b()
{
	this.x2d("grid-player", u0a);
	this.x2d("grid-rating", c2w);
 	this.x2d("grid-flag", x3a);
	this.x2d("grid-result", y9f);
	this.x2d("grid-moves", a0m);
	this.x2d("grid-year", g9c);
	this.x2d("grid-event", u3r);
	this.x2d("grid-round", q4a);

}

k7b(y3z)
{
	let k8k = this.s1s.getElementsByClassName(y3z);
	for (let i = 0; i < k8k.length; i++) {
		k8k[i].style.display = "none";
	}
}

v8y(y3z)
{
	let k8k = this.s1s.getElementsByClassName(y3z);
	for (let i = 0; i < k8k.length; i++) {
		k8k[i].style.display = "table-cell";
	}
}

x2d(y3z, width)
{
	let k8k = this.s1s.getElementsByClassName(y3z);
	for (let i = 0; i < k8k.length; i++) {
		k8k[i].style.width = (width) + "px";
	}
}

c0m()
{
	this.m4v = this.s1s.clientWidth;
	this.m4v -= 17;
	if (this.m4v < 100)
	{
		this.m4v = 100;
	}
	u0a = 200;
	c2w = 52;
	y9f = 34;
	a0m = 50;
	g9c = 52;
	u3r = 200;
	q4a = 50;
  x3a = 30;

 
	let w3h = document.getElementsByClassName("tdreplay")[0];
	if (w3h.clientWidth <= v0s)
	{
		let t7g = 0.7;
		u0a *= t7g;
		c2w *= t7g;
		y9f *= t7g;
		a0m *= t7g;
		g9c *= t7g;
		u3r *= t7g;
		q4a *= t7g;
	}
	this.n9c();
}

d9d()
{
	this.i5k();
	this.u9b();

  let o2e = 2.8;
  let k0a = 2.8;
  let q7a = 17;
	if (this.m4v <= 400)
	{
		this.v8y("grid-player");
		this.v8y("grid-result");
    this.v8y("grid-year");
		this.v8y("grid-event");
    let z2b = 5 * (o2e + k0a);
		let n2o = y9f + g9c;
		let o4d = Math.trunc((this.m4v - n2o - z2b - q7a) / 3);
		this.x2d("grid-player", o4d);
		this.x2d("grid-event", o4d);
	}
	else if (this.m4v <= 580)
	{
		this.v8y("grid-player");
		this.v8y("grid-rating");
		this.v8y("grid-result");
		this.v8y("grid-year");
		this.v8y("grid-event");
    let z2b = 7 * (o2e + k0a);
		let n2o = 2 * c2w + y9f + g9c;
		let o4d = Math.trunc((this.m4v - n2o - z2b - q7a) / 3);
		this.x2d("grid-player", o4d);
		this.x2d("grid-event", o4d);
	}
	else
	{
		this.v8y("grid-player");
		this.v8y("grid-rating");
    this.v8y("grid-flag");
		this.v8y("grid-result");
		this.v8y("grid-moves");
		this.v8y("grid-year");
		this.v8y("grid-event");
		this.v8y("grid-round");
    let z2b = 11 * (o2e + k0a);
		let n2o = 2 * c2w + 2 * x3a + y9f + a0m + g9c + q4a;
		let o4d = Math.trunc((this.m4v - n2o - z2b - q7a) / 3);
		this.x2d("grid-player", o4d);
		this.x2d("grid-event", o4d);
	}
}

n9c()
{
	let k6e = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.y2u + "\">"; 
	for (const s8f of this.q9u)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += s8f.n5t.j1n.m1i.n8r();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (s8f.n5t.j1n.g1u)
		{
			s += s8f.n5t.j1n.g1u;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (s8f.n5t.j1n.h1a != y3a.i6p)
		{
      let n1n = "images/flags/" + k6e.toString() + "/" + r1m(s8f.n5t.j1n.h1a) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += n1n;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += s8f.n5t.f0n.m1i.n8r();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (s8f.n5t.f0n.g1u)
		{
			s += s8f.n5t.f0n.g1u;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (s8f.n5t.f0n.h1a != y3a.i6p)
		{
      let n1n = "images/flags/" + k6e.toString() + "/" + r1m(s8f.n5t.f0n.h1a) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += n1n;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-result\">";
		s += o3m(s8f.n5t.t7t);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += s8f.p6s;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += s8f.n5t.i4j.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += s8f.n5t.h4b.d9y;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += s8f.n5t.c8o();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.b4z.innerHTML = s;

  let j9e = document.getElementById('gameList' + this.y2u);
  j9e.addEventListener('click', this.u9g.bind(this));

	this.d9d();
}

t3p(m8i)
{
	if (m8i != this.e9c)
	{
		this.e9c = m8i;
		this.j0x = m9w.t7i;
	}
	else
	{
		if (this.j0x == m9w.i6p)
		{
			this.j0x = m9w.t7i;
		}
		else if (this.j0x == m9w.t7i)
		{
			this.j0x = m9w.u7x;
		}
		else if (this.j0x == m9w.u7x)
		{
			this.j0x = m9w.t7i;
		}
	}
	u7x = (this.j0x == m9w.u7x);

	for (const j6q of this.h2s)
	{
		let s = j6q.l9e;
		let i2g = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let y9k = i2g.replace(" grid-header-sort grid-header-sort-asc", "");
		j6q.l9e = y9k;
	}
	let p9q = this.h2s[this.e9c];
	if (this.j0x == m9w.u7x)
	{
		p9q.l9e = p9q.l9e + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		p9q.l9e = p9q.l9e + " grid-header-sort grid-header-sort-asc";
	}
}

q2u(event)
{
	this.t3p(z2s.v9h);
	this.q9u.sort(i3j);
	this.n9c();
}

g9j(event)
{
	this.t3p(z2s.m5e);
	this.q9u.sort(k6d);
	this.n9c();
}

w1p(event)
{
	this.t3p(z2s.z3x);
	this.q9u.sort(e7w);
	this.n9c();
}

k1b(event)
{
	this.t3p(z2s.g3v);
	this.q9u.sort(z0p);
	this.n9c();
}

d3l(event)
{
	this.t3p(z2s.f4c);
	this.q9u.sort(b1a);
	this.n9c();
}

k0p(event)
{
	this.t3p(z2s.b0v);
	this.q9u.sort(h2n);
	this.n9c();
}

n1x(event)
{
	this.t3p(z2s.t7t);
	this.q9u.sort(w6i);
	this.n9c();
}

a3g(event)
{
	this.t3p(z2s.s6z);
	this.q9u.sort(i8c);
	this.n9c();
}

c2r(event)
{
	this.t3p(z2s.event);
	this.q9u.sort(m1l);
	this.n9c();
}

u4o(event)
{
	this.t3p(z2s.u6y);
	this.q9u.sort(l0j);
	this.n9c();
}

c9e(event)
{
	this.t3p(z2s.z1l);
	this.q9u.sort(c3p);
	this.n9c();
}

u9g(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.s1f)
  {
    this.s1f(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class t6p
{

constructor()
{
	this.e3i = new b6u();
	this.n5d = new b6u();
	this.l6i = false;
	this.v4s = 0;
	this.g8c = 0;
	this.s6n = [];
}

}

var tooltip = null;

class r3l
{

constructor(y2u)
{
	this.y2u = y2u;
	this.z7k = new l1j();
	this.m6s = null;
	this.v2f = new t6p();
	this.c8r = null;
	this.e1t = [];
	this.q9y = [];
  this.n7u = [];
  this.o3q = [];
	this.k2u = -1;
	this.x4e = new j4f();
  this.d6u = null;
	this.q0q = true;
	this.o2p = false;
	this.f1a = [];
	this.z0e = 0;
  this.m5a = true;
  this.k4b = false;
	this.z8t = false;
	this.e2f = true;
  this.b3a = false;
}

q3z(f7z, m0v)
{
	this.z7k = f7z.z4e();
  this.z7k.h0q();
	this.d6u = this.z7k.l6j(m0v);
	this.n7y();
}

w4q(i3h)
{
  this.y5i(this.n7u[i3h]);
}

n7y()
{
	this.q1a();
	this.y4s();
  this.a4h(this.z7k.h4z(this.d6u));
}

q1a()
{
	let l3k = new g2h();
  l3k.q3a(this.m5a);
	l3k.s4s(this.b3a);
  /*
	l3k.setOneLine(this.b3a);
  */
	l3k.g4o(this.z8t);
	l3k.k0s(this.e2f);
	l3k.o2i(this.z7k);

  this.c8r.innerHTML = l3k.l1g.m3t;
  this.e1t = this.c8r.getElementsByClassName("tdmove");
  this.q9y = this.c8r.getElementsByClassName("tdcomment");

	this.r7g("tdmove");
	this.r7g("tdcomment");
	this.r7g("tddia");
	this.r7g("tdmedal");
  this.r7g("tdcolors");

  this.g8j("tdmove");

	this.e5y();
	this.o7l();
}

r7g(m8b)
{
	let y2u = this.y2u;
	let a5x = this.c8r.getElementsByClassName(m8b);
	for (const j8m of a5x)
	{
    let m0v = j8m.getAttribute('movenr');
    j8m.onclick = this.o0d.bind(this, m0v);
	}
}

g8j(m8b)
{
	let y2u = this.y2u;
	let a5x = this.c8r.getElementsByClassName(m8b);
	for (const j8m of a5x)
	{
    let m0v = j8m.getAttribute('movenr');
    j8m.onmouseover = this.v1v.bind(this, m0v);
    j8m.onmouseleave = this.g3f.bind(this, m0v);
	}
}

f6s()
{
	this.e5y();
}

e5y()
{
	let d8g = this.c8r.getElementsByClassName("tddia");
	for (const l3d of d8g)
	{
		let f1l = new e6y();
		f1l.e3h = l3d.getElementsByTagName("canvas")[0];
		let a3o = this.x4e.h3l();
		f1l.e3h.width = a3o;
		f1l.e3h.height = a3o;
		f1l.m7c(this.x4e);
		let b9l = this.z7k.l6j(l3d.getAttribute('movenr'));
    f1l.l8r(this.z7k.e3i(b9l));
    if (b9l.c7j)
    {
  		f1l.f4h(b9l.c7j.c6n());
	  	f1l.j9q(b9l.c7j.q7k());
    }
    else
    {
   		f1l.f4h(this.z7k.w6x());
	  	f1l.j9q(this.z7k.n3z());
    }
		f1l.z6p();
	}
}

o7l()
{
	let u2f = this.c8r.getElementsByClassName("tdmedal");
	for (const s7l of u2f)
	{
		let e3h = s7l.getElementsByTagName("canvas")[0];
		e3h.width = 40;
		e3h.height = 16;
		let x4i = e3h.getContext('2d');
		let rect = new d2o();
		rect.v8d(40);
		rect.j5z(16);
		let b9l = this.z7k.l6j(s7l.getAttribute('movenr'));
    if (b9l.c7j)
    {
  		o7l(x4i, rect, b9l.c7j.s8d());
    }
    else
    {
  		o7l(x4i, rect, this.z7k.k4r());
    }
	}
}

y4s()
{
	let i5o = new l8u();
	i5o.x7g = this.z7k.x7g();
  i5o.r9j = this.z7k.e3i(this.d6u);
  if (this.k0o())
  {
    i5o.c6n = this.z7k.w6x();
	  i5o.q7k = this.z7k.n3z();
  }
  else
  {
  	i5o.c6n = this.d6u.c7j.c6n();
	  i5o.q7k = this.d6u.c7j.q7k();
  }
  
	if (this.y4k())
	{
		i5o.o4i = new j7i();
	}
	else
	{
    let b6j = this.d6u.z4e();
		this.z7k.i8p(b6j);
		i5o.o4i = b6j.c7j.x2v().z4e();
	}
  
 	if (!this.k0o())
	{
		i5o.h7l = this.d6u.c7j.x2v();
	}
	i5o.d3y = this.d3y();
	i5o.b6l = this.b6l();
	i5o.u4q = this.u4q();
	i5o.v1i = 0; 
  i5o.k0m = this.z7k.k0m(this.d6u);
	if (this.m6s)
	{
		this.m6s.x8x(i5o);
	}
}

o0a(o2z)
{
	this.d6u = this.z7k.l6j(o2z);
	this.y4s();
}

f6m(l1v)
{
	switch (l1v)
	{
		case d8j:
		case c8y:
		case r5e:
			this.n1u();
			break;
		case k9y:
		case t2i:
		case m6m:
			this.b8f();
			break;
		case f2q:
		case z4c:
		case f3q:
			this.v3p();
			break;
		case s4c:
		case i1i:
		case z5a:
			this.r1t();
			break;
		case d5r:
			break;
		case f4o:
			break;
	}
}

c7w()
{
  if (this.d6u.z0s)
  {
    this.a4h(this.d6u.z0s.j8h);
  }
  else
  {
    this.a4h(0);
  }
}

i1z()
{
	this.c7w();
	this.y4s();
}

b6l()
{
	return !this.k0o();
}

k0o()
{
	return this.z7k.k0o(this.d6u);
}

y4k()
{
	return this.z7k.y4k(this.d6u);
}

d3y()
{
	return this.z7k.d3y(this.d6u);
}

o4i(e5x)
{
	if (this.y4k())
	{
		return null;
	}
	else
	{
    let b6j = this.d6u.z4e();
		this.z7k.k4x(b6j, e5x);
		return b6j.c7j;
	}
}

b8f()
{
	if (this.b6l())
	{
		this.z7k.o1f(this.d6u);
		this.i1z();
	}
}

u4q()
{
	return !this.y4k();
}

n1u()
{
	if (this.u4q())
	{
		this.d7x(0);
	}
}

d7x(index)
{
	let f9i = this.z7k.e7t(this.d6u);
	if (index >= 0 && index < f9i)
	{
		this.z7k.k4x(this.d6u, index);
		this.i1z();
	}
}

r1t()
{
	if (this.u4q())
	{
		this.z7k.k8l(this.d6u);
		this.i1z();
	}
}

v3p()
{
	if (this.b6l())
	{
		this.d6u = this.z7k.u4v();
		this.i1z();
	}
}

v8v()
{
	if (this.q0q)
	{
		this.j0e();
	}
	else
	{
		this.x0y();
	}
}

c9y()
{
	if (this.o2p)
	{
		this.o2p = false;
		this.m6s.l4g.f1l.o6c();
		this.y4s();
	}
	else
	{
		this.y4s();
	}
}


x0y()
{
	if (this.y4k())
	{
		this.y4s();
		return;
	}
  if (chess)
  {
  	this.d7x(0);
    return;
  }

  
 	let c7j = this.o4i(0);
  if (!c7j.g8c())
 	{
  	this.d7x(0);
	  return;
 	}

  
	let c9p = false;
	if (!this.v2f.l6i)
	{
		c9p = true;
	}
	else
	{
		c9p = false;
		if (this.v2f.v4s < this.v2f.g8c)
		{
			if (this.v2f.n5d.t5w(this.v2f.e3i))
			{
				c9p = true;
			}
		}
	}
	if (c9p)
	{
		this.v2f.e3i = this.z7k.e3i(this.d6u);
		this.v2f.n5d = this.z7k.e3i(this.d6u);
		this.v2f.l6i = true;
		this.v2f.v4s = 0;
		this.v2f.s6n.length = 0;
		this.v2f.s6n.push(c7j.d4d()); 
		this.v2f.g8c = c7j.g8c();
		if (this.v2f.g8c > 1)
		{
			let i2q = generateBetweens(this.v2f.n5d, c7j.x2v());
			for (let i = 0; i < this.v2f.g8c - 1; i++)
			{
				this.v2f.s6n.push(i2q[i]);
			}
		}
		this.v2f.s6n.push(c7j.a1i());
	}
	if (this.v2f.v4s < this.v2f.g8c)
	{
		let v5m = c7j.v5m();
		let c4d = this.v2f.s6n[this.v2f.v4s];
		let a1i = this.v2f.s6n[this.v2f.v4s + 1];
		this.v2f.n5d.t8a(c4d, r4u.f7c);
		this.v2f.n5d.t8a(a1i, v5m);
		this.v2f.e3i = this.v2f.n5d.z4e();
		this.v2f.v4s++;
		let i5o = new l8u();
		i5o.r9j = this.v2f.n5d.z4e();
		i5o.b6l = this.b6l();
		i5o.u4q = this.u4q();
		if (this.m6s)
		{
			this.m6s.x8x(i5o);
		}
	}
	else
	{
		this.v2f.l6i = false;
		this.d7x(0);
	}
}



j0e()
{
	if (this.o2p)
	{
		let u6m = this.m6s.l4g.f1l.n5j();
		if (u6m)
		{
			if (this.z0e < this.f1a.length - 1)
			{
				this.m6s.l4g.f1l.h4s(this.f1a[this.z0e],
					this.f1a[this.z0e+1], true);
				this.z0e++;
			}
			else
			{
				this.o2p = false;
				this.d7x(0);
			}
		}
		return;
	}

	if (this.y4k())
	{
		this.y4s();
		return;
	}

	this.f1a.length = 0;
	let c7j = this.o4i(0);
	let g8c = c7j.g8c();
	if (g8c == 0)
	{
		this.f1a.push(c7j.d4d()); 
		this.f1a.push(c7j.z4d());
	}
	else
	{
		this.f1a.push(c7j.d4d());
		if (g8c > 1)
		{
      let e3i = this.z7k.e3i(this.d6u);
      let i2q = generateBetweens(e3i, c7j.x2v());
			for (let i = 0; i < g8c - 1; i++)
			{
				this.f1a.push(i2q[i]);
			}
		}
		this.f1a.push(c7j.z4d());
	}

	this.m6s.l4g.f1l.h4s(this.f1a[0],
		this.f1a[1], g8c > 0);
	this.z0e = 1;
	this.o2p = true;
}

w3r(x8o)
{
	for (const m of this.e1t)
	{
		if (m.getAttribute('movenr') == x8o)
		{
			return m;
		}
	}
	return null;
}

t2y(x8o)
{
	let v7p = [];
	for (const l3q of this.q9y)
	{
		if (l3q.getAttribute('movenr') == x8o)
		{
			v7p.push(l3q);
		}
	}
	return v7p;
}

y5i(y1c)
{
	let z9r = y1c.offsetTop;
	let f3j = y1c.scrollHeight;

	let h1k = this.c8r.offsetTop;
	let q0g = this.c8r.scrollTop;
	let p9v = this.c8r.clientHeight;
	let y4c = this.c8r.scrollHeight;
	let x1o = z9r - h1k;
	if (x1o >= q0g && x1o + f3j <= q0g + p9v - 1)
	{
		
	}
	else
	{
		
		let top = x1o - (p9v / 2);
		if (top < 0) top = 0;
		this.c8r.scrollTop = top;
	}
}

y5k(w6b, m3v)
{
	let w0r = w6b;
	while (w0r.v6c)
	{
		w0r = w0r.v6c;
	}
 	while (w0r)
	{
    if (this.z7k.y1f(w0r.j8h) == false)
    {
 	  	let y1c = this.w3r(w0r.j8h);
  	  if (y1c)
 		  {
  		  y1c.classList.add(m3v);
 	  	}
    }
    w0r = w0r.b4o;
  }
}

a4h(m0v)
{
  
 	for (const c7j of this.e1t)
	{
 		c7j.classList.remove('tdcurline');
    c7j.classList.remove('tdcurnode1');
	}
 	for (const l3q of this.q9y)
	{
 		l3q.classList.remove('tdcurline');
	}

  
	if (this.k2u >= 0)
	{
		let y1c = this.w3r(this.k2u);
		if (y1c)
		{
			y1c.classList.remove('tdcurmove');
		}
	}

  
  let n2a = true;
  let u3q = this.z7k.t1u(this.d6u);
 	for (const w6b of u3q)
	{
    if (w6b.v6c && n2a)
		{
		  this.y5k(w6b, 'tdcurnode1');
      n2a = false;
    }
    else
    {
      if (this.z7k.y1f(w6b.j8h) == false)
      {
   	  	let u7f = this.w3r(w6b.j8h);
	  	  if (u7f)
  		  {
	  		  u7f.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let y1c = this.w3r(m0v);
	if (y1c)
	{
    y1c.classList.remove('tdcurline');
		y1c.classList.add('tdcurmove');
		this.y5i(y1c);
	}
	this.k2u = m0v;
}

x6g()
{
	let c7j = this.w3r(this.k2u);
	if (!c7j) return;
	let v1c = c7j.offsetTop;
	let i4d = null;
	let q1l = -1;
	for (const m of this.e1t)
	{
		if (m.offsetTop < v1c)
		{
			if (m.offsetTop > q1l)
			{
				i4d = m;
				q1l = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (i4d)
	{
		this.u5k(i4d.getAttribute('movenr'));
	}
	else
	{
		if (this.e1t.length)
		{
			this.u5k(this.e1t[0].getAttribute('movenr'));
		}
	}
}

k3f()
{
	let c7j = this.w3r(this.k2u);
	if (!c7j)
	{
		this.n1u();
		return;
	}
	let v1c = c7j.offsetTop;
	for (const m of this.e1t)
	{
		if (m.offsetTop > v1c)
		{
			this.u5k(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.e1t.length)
	{
		this.u5k(this.e1t[this.e1t.length - 1].getAttribute('movenr'));
	}
}

u5k(o2z)
{
  
  
  
  
  if (this.d6u.z0s)
  {
    if (this.d6u.z0s.j8h == o2z)
    {
      return;
    }
  }
  else
  {
    if (o2z == 0)
    {
      return;
    }
  }
	
  this.o0a(o2z);
  this.a4h(o2z);
	
}

h4z()
{
	return this.z7k.h4z(this.d6u);
}

m7c(x4e)
{
  this.x4e = x4e.z4e();
	this.x4e.p9d = 0;
	this.x4e.p3z = 0;
	this.x4e.s0f = 32;
  this.x4e.h0a = 2;
 	this.x4e.r7j = false;
}

x7g()
{
	return this.z7k.x7g();
}

k7e()
{
	return this.z7k.k7e();
}

s1d()
{
	return this.z7k.s1d(this.d6u);
}

w0m()
{
	return this.z7k.w0m();
}

o0d(m0v, event)
{
  this.u5k(m0v);
}

v1v(m0v, event)
{
  if (!this.k4b) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const j8m = event.currentTarget; 
  const rect = j8m.getBoundingClientRect();
  console.log(`d2o.o5d: ${rect.left}`);
  console.log(`d2o.k7q: ${rect.top}`);
  let o5z = rect.left;
  let s8e = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let h0o = this.x4e.h3l();

  if (o5z + h0o > viewportWidth)
  {
    o5z = viewportWidth - h0o - 5;
  }
  if (o5z < 5)
  {
    o5z = 5;
  }
  if (s8e + h0o > viewportHeight)
  {
    s8e = viewportHeight - h0o - 5;
  }
  if (s8e < 5)
  {
    s8e = 5;
  }

  let b9l = this.z7k.l6j(m0v);
  let e3i = this.z7k.e3i(b9l);
  tooltip.innerHTML = this.m2l(e3i);

  tooltip.style.left = `${o5z}px`;
  tooltip.style.top = `${s8e}px`;
  tooltip.classList.add('visible');
}

g3f(m0v, event)
{
  if (!this.k4b) return;
  tooltip.classList.remove('visible');
}

m2l(e3i)
{
  let f1l = new e6y();
  const tempCanvas = document.createElement('canvas');
	f1l.e3h = tempCanvas;
	let a3o = this.x4e.h3l();
	f1l.e3h.width = a3o;
	f1l.e3h.height = a3o;
	f1l.m7c(this.x4e);
  f1l.l8r(e3i);
  f1l.z6p();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="${imageDataURL}" alt="Chess Position" width="${boardSize}" height="${boardSize}">`;
}

}

class d3t
{

constructor()
{
	this.fontSize = 15;
  this.k6k = true;
 	this.b5z = true;
}

z4e()
{
  return Object.assign(new d3t(), this);
}

}
class h2y
{

constructor(y2u)
{
  this.c5h = new n5b(y2u);
  this.v7f = new r3l(y2u);
}

}

class k2h
{

constructor()
{
	this.g9b = false;
	this.m6s = null;
	this.b2n = null;
	this.f7v = 6;
	this.u9y = null;
	this.p2e = null;
	this.s0x = null;
	this.e0l = null;
	this.i5z = null;
	this.k4m = false;
}

l5s()
{
	this.g9b = false;
	this.f1i();
	this.u9y.classList.replace('autoPlay', 'autoStop');
	this.e0l.style.display = 'none';
	this.i5z.style.display = 'none';
	this.p2e.style.display = 'inline-block';
	this.s0x.style.display = 'inline-block';
	this.j6h();
	this.m6s.l4g.s2g = false;
}

p0l()
{
	if (this.b2n)
	{
		clearInterval(this.b2n);
		this.b2n = null;
		this.u9y.classList.replace('autoStop', 'autoPlay');
		this.e0l.style.display = 'inline-block';
		this.i5z.style.display = 'inline-block';
		this.p2e.style.display = 'none';
		this.s0x.style.display = 'none';
		this.m6s.l4g.s2g = true; 
		this.m6s.r9v.v7f.c9y();
	}
}

f1i()
{
	let y2u = this.m6s.y2u;
	this.b2n = setInterval(function(){ p4t(y2u); },
		this.m6s.r9v.v7f.q0q ? this.f7v * 2 : this.f7v * 100);
}

m7y()
{
	return this.b2n != null;
}

b6l()
{
	return !this.m6s.r9v.v7f.k0o();
}

u4q()
{
	return !this.m6s.r9v.v7f.y4k();
}

b9x()
{
	if (this.k4m)
	{
		return;
	}
	else
	{
		this.k4m = true;
	}
	if (!this.u4q())
	{
		this.p0l();
	}
	else
	{
		this.m6s.r9v.v7f.v8v();
	}
	this.k4m = false;
}

x3b()
{
	if (this.b2n)
	{
		if (this.f7v < 50)
		{
			this.f7v++;
			clearInterval(this.b2n);
			this.f1i();
			this.j6h();
		}
	}
}

m5v()
{
	if (this.b2n)
	{
		if (this.f7v > 1)
		{
			this.f7v--;
			clearInterval(this.b2n);
			this.f1i();
			this.j6h();
		}
	}
}

j6h()
{
	r6r(this.p2e, this.f7v < 50);
	r6r(this.s0x, this.f7v > 1);
}

}

let n3k = null;
let i9q = 0;
let i6j = null;

class z9k
{

constructor()
{
	this.index = 0;
	this.w2o = '';
	this.w3h = null;
	this.u0c = false;
	this.m6s = null;
	this.f9l = null;
  this.q9u = [];
	this.r1w = 0;
  this.a0j = 0;

	this.m7o = null;
	this.v4r = null;
	this.left = null;
	this.k2w = null;
	this.x5m = null;
	this.d7r = null;
	this.u7u = null;
	this.p2k = null;
	this.a2b = null;
	this.q4i = null;
	this.u6f = null;
 	this.l9r = null;
 	this.o4w = null;
	this.k4v = null;
	this.e0l = null;
	this.p2e = null;
	this.u9y = null;
	this.i5z = null;
	this.s0x = null;
	this.f8w = null;
 	this.x2q = null;
  this.r1o = null;
	this.l6l = null;
  this.n8e = null;
	this.h4t = null;
	this.k3h = null;
	this.s1s = null;
	this.z9o = null;
	this.d1g = null;
	this.q8a = null;
  this.s0o = null;
  this.z8s = null;
	this.v0y = null;
	this.a9r = null;
	this.m4r = null;
	this.g0y = null;
	this.o2q = null;

	this.f4y = null;
	this.a2y = null;
	this.h1o = null;
	this.m0s = null;

  this.k7h = null;
	this.u0l = null;
	this.a5w = null;
  this.e0v = null;

  this.z5w = null;

  
  this.i3a = null;
  this.c2z = null;
  this.o1v = null;
  this.w1r = null;
  this.v0i = null;
  this.m7g = null;

  
}

u3d(index, w3h, w2o)
{
	this.index = index;
	this.w3h = w3h;
	this.w2o = w2o;
	w3h.innerHTML = '';
	w3h.id = "replay";

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

  w3h.innerHTML = s;

	this.m7o = document.getElementById("rootParent"+index);
	this.v4r = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.k2w = document.getElementById("leftContainer"+index);
	this.x5m = document.getElementById("leftNest"+index);
	this.d7r = document.getElementById("leftNorth"+index);
	this.u7u = document.getElementById("boardHolder"+index);
	this.p2k = document.getElementById("boardPanel"+index);
	this.a2b = document.getElementById("boardCanvas"+index);
	this.q4i = document.getElementById("belowBoard"+index);
	this.u6f = document.getElementById("replayPanel"+index);
 	this.l9r = document.getElementById("goToPrevious"+index);
 	this.o4w = document.getElementById("goToNext"+index);
	this.k4v = document.getElementById("goToBegin"+index);
	this.e0l = document.getElementById("playBackward"+index);
	this.p2e = document.getElementById("playSlower"+index);
	this.u9y = document.getElementById("autoPlay"+index);
	this.i5z = document.getElementById("playForward"+index);
	this.s0x = document.getElementById("playFaster"+index);
	this.f8w = document.getElementById("goToEnd"+index);
  this.x2q = document.getElementById("flipBoard"+index);
  this.r1o = document.getElementById("download"+index);
	this.l6l = document.getElementById("showGameList"+index);
  this.n8e = document.getElementById("settings"+index);
	this.h4t = document.getElementById("leftSouth"+index);
	this.k3h = document.getElementById("leftSouthNest"+index);
	this.s1s = document.getElementById("listParent"+index);
	this.z9o = document.getElementById("listHeader"+index);
	this.d1g = document.getElementById("listHeaderTable"+index);
	this.q8a = document.getElementById("listBody"+index);
  this.s0o = document.getElementById("list-button-container"+index);
  this.z8s = document.getElementById("hideGameList"+index);
	this.v0y = document.getElementById("gameList"+index);
	this.a9r = document.getElementById("right"+index);
	this.m4r = document.getElementById("rightNest"+index);
	this.g0y = document.getElementById("rightNorth"+index);
	this.o2q = document.getElementById("rightSouth"+index);

  
  if (!chess)
  {
    this.g0y.style.height = "100%";
   	this.o2q.style.display = 'none';
  }

	this.f4y = document.getElementById("nota-container"+index);
  this.f4y.style.fontSize = z6n.fontSize + 'px';
	this.a2y = document.getElementById("nota-header-container"+index);
	this.h1o = document.getElementById("headerPanel"+index);
	this.m0s = document.getElementById("movesPanel"+index);

	this.k7h = document.getElementById("enota-container"+index);
  this.k7h.style.fontSize = z6n.fontSize + 'px';
	this.u0l = document.getElementById("enota-header-container"+index);
	this.a5w = document.getElementById("eheaderPanel"+index);
	this.e0v = document.getElementById("emovesPanel"+index);

  this.z5w = document.getElementById("startEngine"+index);
}

r2r()
{
	this.w3h.style.display = 'block';
	this.p2e.style.display = 'none';
	this.s0x.style.display = 'none';
	this.s1s.style.display = 'none';

	this.u0c = false;
	if (this.w3h.clientWidth <= v0s)
	{
		this.a7t();
		this.u0c = true;
	}
	else
	{
		this.d1o();
		this.b2m();
	}
  this.j4t();
	let y2u = this.index;

	this.k4v.onclick = this.l1p.bind(this);
	this.e0l.onclick = this.b8f.bind(this);
	this.p2e.onclick = this.x3b.bind(this);
	this.u9y.onclick = this.d4t.bind(this);
	this.s0x.onclick = this.m5v.bind(this);
	this.i5z.onclick = this.n1u.bind(this);
	this.f8w.onclick = this.m9i.bind(this);
  this.l9r.onclick = this.d5f.bind(this);
  this.o4w.onclick = this.t4w.bind(this);
  this.x2q.onclick = this.n5l.bind(this);
 	this.r1o.onclick = this.m0g.bind(this);
	this.l6l.onclick = this.s4e.bind(this);
 	this.z8s.onclick = this.v9v.bind(this);

  this.n8e.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.z5w.onchange = this.u0n.bind(this);

	this.m6s = new o4l(this.index);
	this.m6s.l4g.f1l.m4q(this.a2b);
	this.m6s.l4g.p2k = this.p2k;
  this.m6s.l4g.m7c(s4y);
	this.m6s.r9v.c5h.d2m = this.h1o;
	this.m6s.r9v.v7f.c8r = this.m0s;
  this.m6s.r9v.v7f.m7c(s4y);
	this.m6s.g1o.u9y = this.u9y;
	this.m6s.g1o.p2e = this.p2e;
	this.m6s.g1o.s0x = this.s0x;
	this.m6s.g1o.e0l = this.e0l;
	this.m6s.g1o.i5z = this.i5z;
 	this.m6s.k1r.v7f.c8r = this.e0v;
  this.m6s.k1r.v7f.m7c(s4y);

  this.m6s.k1r.n8e.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.f9l = new e1h(this.index);
	this.f9l.s1s = this.s1s;
	this.f9l.b4z = this.v0y;
	this.f9l.b0e = this.d1g;
	this.f9l.r2r();
	this.f9l.u5d(this.q9u);
  this.f9l.s1f = (v0y, index) => {
    this.b5s(v0y, index);
  };
	if (this.f9l.q9u.length)
	{
		this.n7y(0, 0);
	}
	else
	{
		let s8f = new b6z();
		this.m6s.n7y(null, 1, 0, s8f);
	}
}

q3f(w2o)
{
	this.w2o = w2o;
 	let lines = this.w2o.split('\n');
	let g2d = 0;
	for (const d9e of lines)
	{
		if (d9e.startsWith("[Event \""))
		{
			let n0s = g2d;
      let m5w = lines.length;
   		let o8y = lines.slice(n0s, m5w);
  		let i2n = new w7r(o8y);
	  	this.f9l.q9u[this.r1w] = i2n.o3y();
      break;
    }
    g2d++;
	}
  this.n7y(0, 0);
}

j4t()
{
	let lines = this.w2o.split('\n');
	let u9a = [];
	let g2d = 0;
	for (const d9e of lines)
	{
		if (d9e.startsWith("[Event \""))
		{
			u9a.push(g2d);
		}
		g2d++;
	}
	let i = 0;
	this.q9u = [];
	for (const v4m of u9a)
	{
		let n0s = v4m;
		let m5w = 0;
		if (i < u9a.length - 1)
		{
			m5w = u9a[i + 1];
		}
		else
		{
			m5w = lines.length;
		}
		let o8y = lines.slice(n0s, m5w);
		let i2n = new w7r(o8y);
		let s8f = i2n.o3y();
		this.q9u.push(s8f);
		i++;
	}
}

g9a()
{
	if (this.u0c || this.v4r.clientHeight <= v0s)
	{
		this.w3h.style.x3p = "0px";
		this.w3h.style.g4j = "0px";
		this.w3h.style.width = "100%";
		this.w3h.style.height = "88vh";
	}
	else
	{
		this.w3h.style.x3p = "1px solid gray";
		this.w3h.style.g4j = "1px solid gray";
		this.w3h.style.height = "88vh";
	}
}

y4t()
{
	this.g9a();

	this.left.style.width = "100%";

	let h2k = this.d7r.getBoundingClientRect();
	this.h4t.style.top = (h2k.height) + "px";
	this.b2m();

	this.q7l();
	this.d1o();
	this.g4c();
	this.d3s();
  this.h6y()
}

l6a()
{
	this.g9a();

	let f1s = this.v4r.getBoundingClientRect();
	this.left.style.width = (f1s.width * 0.50) + "px";
	let b5i = this.left.getBoundingClientRect();

	let h2k = this.d7r.getBoundingClientRect();
	this.h4t.style.top = (h2k.height) + "px";
	this.b2m();

	this.a9r.style.left = (b5i.width) + "px";
	this.a9r.style.width = (f1s.width - b5i.width) + "px";

	this.q7l();
	this.d1o();
	this.g4c();
	this.d3s();
  this.h6y()
}

d1o()
{
}

f8v()
{
  this.d7r.style.height = '100%';
  this.g0y.appendChild(this.f4y);
  this.f4y.style.height = '100%';
  this.o2q.appendChild(this.k7h);
  if (!chess)
  {
    this.o2q.style.display = 'none';
  }
  else
  {
    this.o2q.style.display = 'block';
    this.k7h.style.height = '100%';
  }
  this.a9r.style.display = 'block';
}

a7t()
{
  this.d7r.style.height = '70%';
  this.k3h.appendChild(this.f4y);
  if (!chess)
  {
    this.f4y.style.height = '100%';
    this.k7h.style.display = 'none';
  }
  else
  {
    this.k3h.appendChild(this.k7h);
    this.f4y.style.height = '50%';
    this.k7h.style.height = '50%';
    this.k7h.style.display = 'block';
  }
  this.a9r.style.display = 'none';
}

s4e(event)
{
	this.s1s.style.display = 'block';
  let j5i = this.s1s.clientHeight - this.z9o.clientHeight - this.s0o.clientHeight;
  this.q8a.style.height = j5i + "px";
	this.g4c();
}

v9v(event)
{
 	this.s1s.style.display = 'none';
}

d3s()
{
	this.m6s.r9v.c5h.k6c();
}

h6y()
{
}

g4c()
{
  this.f9l.c0m();
}

q7l()
{
	let h2k = this.d7r.getBoundingClientRect();
	let z8n = this.q4i.getBoundingClientRect();
	this.u7u.style.height = (h2k.height - z8n.height - 1) + "px";
	this.m6s.l4g.c0m();
}

b2m()
{
	let w7b = this.x5m.getBoundingClientRect();
	let h2k = this.d7r.getBoundingClientRect();
	let l3r = w7b.height - h2k.height;
	if (l3r < 0) l3r = 0;
	this.h4t.style.height = l3r + "px";
}

x7o()
{
  y7y('goToPrevious'+this.index, this.r1w > 0);
  y7y('goToNext'+this.index, this.r1w < this.f9l.q9u.length - 1);
}

t3t(e)
{
	this.m6s.l4g.f1l.mouseDown(e);
}

i6e(e)
{
	this.m6s.l4g.f1l.mouseMove(e);
}

a7u(e)
{
	this.m6s.l4g.f1l.mouseUp(e);
}

d3o(e)
{
	this.m6s.l4g.f1l.touchStart(e);
}

g9h(e)
{
	this.m6s.l4g.f1l.touchMove(e);
}

f1r(e)
{
	this.m6s.l4g.f1l.touchEnd(e);
}

x3b(event)
{
	this.m6s.g1o.x3b();
}

m5v(event)
{
	this.m6s.g1o.m5v();
}

b8f(event)
{
	this.m6s.g1o.p0l();
	this.m6s.r9v.v7f.b8f();
}

n1u(event)
{
	this.m6s.g1o.p0l();
	this.m6s.r9v.v7f.n1u();
}

l1p(event)
{
	this.m6s.g1o.p0l();
	this.m6s.r9v.v7f.v3p();
}

m9i(event)
{
	this.m6s.g1o.p0l();
	this.m6s.r9v.v7f.r1t();
}

d4t(event)
{
	this.m6s.o2o();
}

s2p()
{
 	if (this.f9l.q9u.length)
  {
    this.n7y(0, 0);
  }
}

d5f(event)
{
 	if (this.r1w > 0)
  {
    this.n7y(this.r1w - 1, 0);
  }
}

t4w(event)
{
  if (this.r1w < this.f9l.q9u.length - 1)
  {
    this.n7y(this.r1w + 1, 0);
  }
}

e4o()
{
	if (this.f9l.q9u.length)
  {
    this.r1w = this.f9l.q9u.length - 1;
    this.n7y(this.f9l.q9u.length - 1, 0);
	}
}

n7y(r1w, m0v)
{
  if (r1w >= 0 && r1w <= this.f9l.q9u.length - 1)
  {
    this.r1w = r1w;
  	this.m6s.n7y(null, 1, m0v, this.f9l.q9u[this.r1w]);
  }
  this.x7o();
}

n5l(event)
{
	this.m6s.n5l();
}

c1w()
{
	this.m6s.c1w();
}

w5k()
{
	if (this.w3h.clientWidth <= v0s)
	{
		if (this.u0c)
		{
			this.y4t();
		}
		else
		{
			this.a7t();
			this.u0c = true;
			this.y4t();
		}
	}
	else
	{
		if (!this.u0c)
		{
			this.l6a();
		}
		else
		{
			this.f8v();
			this.u0c = false;
			this.l6a();
		}
	}
}

b5s(v0y, index)
{
	this.n7y(index, 0);
  this.v9v();
}

m0g(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.w2o.length - 1)
  {
    if (this.w2o[i] == '[')
    {
        break;
    }
    i++;
  }
  let w2o = this.w2o.substring(i);
  a.href = window.URL.createObjectURL(new Blob([w2o], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

u0n(event)
{
  if (chess)
  {
    if (this.m6s.y5y())
    {
      this.q5q();
    }
    else
    {
      this.e3n();
    }
  }
}

q5q()
{
  this.m6s.q5q();
}

e3n()
{
  let s3c = new o7u();
  s3c.id.d3i = "Stockfish";
  const u9z = s3c.u9z;
  u9z.addInteger("MultiPV", k6j);
  u9z.addInteger("Threads", r6u);
  u9z.addInteger("Hash",    o5s(u8w));
  this.m6s.e3n(s3c);
}

g0f()
{
  this.m6s.l4g.m7c(s4y);
  this.m6s.l4g.c0m();
  this.m6s.r9v.v7f.m7c(s4y);
  this.m6s.r9v.v7f.q1a();
  this.m6s.k1r.v7f.m7c(s4y);
  this.m6s.k1r.v7f.q1a();
  let f4y = document.getElementById("nota-container"+this.index);
  f4y.style.fontSize = z6n.fontSize + 'px';
  let o9e = document.getElementById("enota-container"+this.index);
  o9e.style.fontSize = z6n.fontSize + 'px';
}

g3h()
{
  if (this.m6s.y5y())
  {
    this.q5q();
    this.e3n();
  }
}

async onSettingsClick()
{
  const dialog = new c5p();
  const { t7t } = await dialog.show();

  if (t7t === dialog.f9e)
  {
    this.g0f();
  }
}

async onEngineSettingsClick()
{
  const dialog = new p3x();
  const { t7t } = await dialog.show();

  if (t7t === dialog.f9e)
  {
    this.g3h();
  }
}

}

class c5p
{

constructor()
{
  this.f9e = 1;
  this.d6f = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.t2k();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.c2z = this.dialog.querySelector(".piece-select");
  this.o1v = this.dialog.querySelector(".coordinates-checkbox");
  this.w1r = this.dialog.querySelector(".font-select");
  this.v0i = this.dialog.querySelector(".ok-button");
  this.m7g = this.dialog.querySelector(".cancel-button");

  this.v0i.onclick = this.k6w.bind(this);
 	this.m7g.onclick = this.v0k.bind(this);
}

t2k()
{
  const f1w = z8h();
  const s = `
    <dialog id="settingsDialog" class="settingsDialog">
      <h1g>Settings</h1g>

      <div class="settings-row">
        <span class="label-text">Pieces:</span>
        <select class="pieceSelect piece-select">
          ${f1w.map((h1e, i) => '<option value="' + i + '">' + h1e + '</option>').join('')}
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

k6w(event)
{
  s4y.z7l = this.c2z.value;
  localStorage.setItem(o7e, s4y.z7l);
  h7k(s4y.z7l);
  s4y.r7j = this.o1v.checked;
  localStorage.setItem(l9a, s4y.r7j.toString());
  z6n.fontSize = this.w1r.value;
  localStorage.setItem(s6k, z6n.fontSize);
  this.dialog.close('ok');
}

v0k(event)
{
  this.dialog.close('cancel');
}

async show()
{
  q4w = true;

  this.c2z.value = s4y.z7l;
  this.o1v.checked = s4y.r7j;
  this.w1r.value = z6n.fontSize;

  const t7t = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.f9e : this.d6f);
    };
    this.dialog.showModal();
  });

  q4w = false;
  return { t7t };
}

}

function v7m(h8j)
{
  const value = parseInt(h8j);
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

function o5s(h8j)
{
  const value = parseInt(h8j);
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

class p3x
{

constructor()
{
  this.f9e = 1;
  this.d6f = 0;

  this.dialog = document.getElementById("engineSettingsDialog");
  if (!this.dialog)
  {
    this.t2k();
  }
  this.dialog = document.getElementById("engineSettingsDialog");

  this.k4w = this.dialog.querySelector(".searchTime-slider");

  this.r4o = this.dialog.querySelector(".searchTime-value");
  this.z2a = this.dialog.querySelector(".multiPV-slider");
  this.i1e = this.dialog.querySelector(".multiPV-value");
  this.q5u = this.dialog.querySelector(".threads-slider");
  this.d3c = this.dialog.querySelector(".threads-value");
  this.x8m = this.dialog.querySelector(".memory-slider");
  this.y3d = this.dialog.querySelector(".memory-value");
  this.v0i = this.dialog.querySelector(".ok-button");
  this.m7g = this.dialog.querySelector(".cancel-button");

  this.v0i.onclick = this.k6w.bind(this);
 	this.m7g.onclick = this.v0k.bind(this);

  this.k4w.addEventListener('input', this.z3p.bind(this));
  this.z2a.addEventListener('input', this.s5a.bind(this));

  this.q5u.addEventListener('input', this.v2y.bind(this));

  this.x8m.addEventListener('input', this.g3r.bind(this));

}

t2k() {
  const s = `
    <dialog id="engineSettingsDialog" class="settingsDialog">
      <h1g>Engine Settings</h1g>

      <div class="settings-row">
        <span class="label-text">Search time</span>
        <input type="range" class="simple-slider searchTime-slider" min="1" max="10" a8g="1" value="1">
        <span class="value-display-simple searchTime-value">1s</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Multiple lines</span>
        <input type="range" class="simple-slider multiPV-slider" min="1" max="5" a8g="1" value="1">
        <span class="value-display-simple multiPV-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Threads</span>
        <input type="range" class="simple-slider threads-slider" min="1" max="32" a8g="1" value="1">
        <span class="value-display-simple threads-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Memory</span>
        <input type="range" class="simple-slider memory-slider" min="1" max="6" a8g="1" value="1">
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

k6w(event)

{
  t8d = parseInt(this.k4w.value);
  k6j = parseInt(this.z2a.value);
  r6u = parseInt(this.q5u.value);
  u8w = parseInt(this.x8m.value);
  localStorage.setItem(l1a, t8d);
  localStorage.setItem(j3p, k6j);
  localStorage.setItem(g9i, r6u);
  localStorage.setItem(g3c, u8w);
  this.dialog.close('ok');
}

v0k(event)
{
  this.dialog.close('cancel');
}

z3p()
{
  const value = parseInt(this.k4w.value);
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
  this.r4o.textContent = displayValue;
}

s5a()
{
  const value = this.z2a.value;
  this.i1e.textContent = `${value}`;
}


v2y()
{
  const value = this.q5u.value;
  this.d3c.textContent = `${value}`;
}


g3r()

{
  const value = parseInt(this.x8m.value);
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

  this.y3d.textContent = displayValue;
}

async show()
{
  q4w = true;

  this.k4w.value = t8d;
  this.z2a.value = k6j;
  this.q5u.value = r6u;
  this.x8m.value = u8w;

  this.z3p();
  this.s5a();
  this.v2y();
  this.g3r();

  const t7t = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.f9e : this.d6f);
    };
    this.dialog.showModal();
  });

  q4w = false;
  return { t7t };
}

}

const g8a = 38;
const f7m = 40;
const k9y = 37;
const t2i = 37;
const m6m = 52;
const d8j = 39;
const c8y = 39;
const r5e = 54;
const f2q = 36;
const z4c = 36;
const f3q = 55;
const s4c = 35;
const i1i = 35;
const z5a = 49;
const o9s = 187;
const q1f = 107;
const l2k = 61;
const b8n = 42;
const s3y = 170;
const f4o = 8;
const d5r = 13;
let k9q = false;
let q4w = false;

const v0s = 767;
let t7c = [];
let w4e = -1;
let u5s = new a7o();

let s4y = new j4f();
let z6n = new d3t();
let t8d = 1;
let k6j = 1;
let r6u = 1;
let u8w = 1;

window.onload = function()
{
  d4o();
  b3n();
  z9w();
};

document.onkeydown = a5i;

function a5i(e)
{
  if (e.l1v === "Escape")
  {
    return;
  }

  if (q4w)
  {
    
    e.preventDefault();
    return;
  }

	let r2y = e || window.event;
	let l1v = r2y.keyCode;

	if (k9q) return;
	k9q = true;

	if (w4e == -1) return;

	if (e.ctrlKey)
	{
		if (l1v == 66) 
		{
				t7c[w4e].n5l();
				e.preventDefault();
				
				
				
		}
		k9q = false;
		return;
	}
	if (l1v)
	{
		
		i2a(l1v);
		e.preventDefault(); 
		
	}
	k9q = false;
}

function p4t(y2u)
{
	t7c[y2u].m6s.g1o.b9x();
}

function i2a(l1v)
{
	if (w4e == -1) return;

	if (l1v == g8a)
	{
		t7c[w4e].m6s.r9v.v7f.x6g();
	}
	else if (l1v == f7m)
	{
		t7c[w4e].m6s.r9v.v7f.k3f();
	}
	else if (l1v == k9y || l1v == t2i || l1v == m6m ||
	l1v == d8j || l1v == c8y || l1v == r5e ||
	l1v == f2q || l1v == z4c ||
	l1v == s4c || l1v == i1i)
	{
		t7c[w4e].m6s.r9v.v7f.f6m(l1v);
	}
	else if (l1v == o9s || l1v == q1f || l1v == l2k)
	{
		t7c[w4e].doFlipBoard();
	}
}

function p6q(c6k, i0n)
{
	let m4p = c6k.length;
	let z7m = 0;

	function check(n)
	{
		if (n == m4p)
		{
			i0n();
		}
	}

	for (let i = 0; i < c6k.length; ++i)
	{
    let q1c = c6k[i];
		let img = document.createElement("img");
		img.id = c6k[i].replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
		u5s.add(img);
		img.addEventListener("load", function()
		{
			z7m++;
			check(z7m);
		});
		img.src = q1c;
	}
}

function d4o()
{
 	p6q(w1h(), r9u);
  
  
}

function w5k()
{
	for (const d5h of t7c)
	{
		d5h.w5k();
	}
}

function r9u()
{
	let a3s = document.getElementsByClassName("tdreplay");
	for (const w3h of a3s)
	{
		let d5h = new z9k();
		d5h.u3d(t7c.length, w3h, w3h.innerHTML);
		d5h.r2r();
		t7c.push(d5h);
	}
	if (t7c.length)
	{
		w4e = 0;
	}
	window.addEventListener("resize", w5k);
	w5k();
}

function y7y(d3i, n3t)
{
	let button = document.getElementById(d3i);
	if (n3t)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function r6r(button, n3t)
{
	if (n3t)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const l9a = 'Coordinates';
const o7e = 'Pieces';
const s6k = 'MovesFontSize';
const l1a = 'SearchTime';
const j3p = 'MultiPV';
const g9i = 'Threads';
const g3c = 'Memory';

function z9w()
{
  const coordinatesValue = localStorage.getItem(l9a);
  if (coordinatesValue === null)
  {
    s4y.r7j = true;
  }
  else
  {
    s4y.r7j = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(o7e);
  if (piecesValue === null)
  {
    s4y.z7l = 0;
  }
  else
  {
    s4y.z7l = piecesValue;
  }
  h7k(s4y.z7l);

  const movesFontSizeValue = localStorage.getItem(s6k);
  if (movesFontSizeValue === null)
  {
    z6n.fontSize = 15;
  }
  else
  {
    z6n.fontSize = movesFontSizeValue;
  }

  
  const searchTime = localStorage.getItem(l1a);
  if (searchTime === null)
  {
    t8d = 10; 
  }
  else
  {
    t8d = searchTime;
  }
  const b3a = localStorage.getItem(j3p);
  if (b3a === null)
  {
    k6j = 1;
  }
  else
  {
    k6j = b3a;
  }
  const threads = localStorage.getItem(g9i);
  if (threads === null)
  {
    const logicalThreads = navigator.hardwareConcurrency || 4;
    const defaultThreads = Math.max(1, logicalThreads - 1);
    r6u = defaultThreads;
  }
  else
  {
    r6u = threads;
  }
  const memory = localStorage.getItem(g3c);
  if (memory === null)
  {
    u8w = 4; 
  }
  else
  {
    u8w = memory;
  }
}
const w3w =
[
	[ i5j.i6p, 			  	""      ],
	[ i5j.s8f,  		 		"game"  ],
	[ i5j.w0u,    		 	"match" ],
	[ i5j.h4b,  	"tourn" ],
	[ i5j.m9v,   			"swiss" ],
	[ i5j.t9e,    	"k.o."  ],
	[ i5j.y5b,	"simul" ],
	[ i5j.h0d,	"schev" ]
];

const c6h =
[
	[ a4f.j5k, ""        ],
	[ a4f.u6c,  "(rapid)" ],
	[ a4f.x6t,  "(blitz)" ],
	[ a4f.y8f,   "(corr)"  ]
];

const a5f =
[
	[ z1r.i6p,     		 ""     ],
	[ z1r.c1a,       		 "$145" ],
	[ z1r.l5k, 		 "$142" ],
	[ z1r.k7j, 		 "$143" ],
	[ z1r.k2q, "$144" ],
	[ z1r.t3e,  "$140" ],
	[ z1r.p7y, "$141" ]
];

const l7c =
[
	[ l9b.i6p,     		""   ],
	[ l9b.b5t,       	"$1" ],
	[ l9b.c7s, 			  	"$2" ],
	[ l9b.d2n,	"$5" ],
	[ l9b.u7g, 		  "$6" ],
	[ l9b.b8p,  	"$3" ],
	[ l9b.k3g, 		  "$4" ],
	[ l9b.z9p, 		"$22" ],
	[ l9b.f7k, 		"$8" ]
];

const g1x =
[
	[ c3i.i6p,     						""     ],
	[ c3i.f9a,      "$18"  ],
	[ c3i.f4n, 					"$16"  ],
	[ c3i.o7d,	"$14"  ],
	[ c3i.t5n, 						"$11"  ],
	[ c3i.n7g,  						"$13"  ],
	[ c3i.v0v,  "$15"  ],
	[ c3i.y0p, 					"$17"  ],
	[ c3i.z6s, 			"$19"  ],
	[ c3i.n1o,					"$44"  ],
	[ c3i.f6l, 					"$132" ],
	[ c3i.l4k,  					"$36"  ],
	[ c3i.j6v, 							"$40"  ],
	[ c3i.b3l, 			  "$138" ],
	[ c3i.i7t,	"$32"  ],
	[ c3i.z2j, 							"$146" ]
];

const v9m =
[
	[ f7p.i6p,     		""     ],
	[ f7p.w8q,     "$51"  ],
	[ f7p.j7t, 			"$52"  ],
	[ f7p.q5g,	    		"$53"  ]
];

const v9u =
[
	[ l3x.n6u, 			 	""       ],
	[ l3x.j7t,   		"middle" ],
	[ l3x.h6m,   	   	 	"low"    ]
];


function e0u(u4j)
{
	return c6h[u4j][1];
}

function c3u(o9v)
{
	for (const u4j of c6h)
	{
		if (u4j[1] == o9v)
		{
			return u4j[0];
		}
	}
	return a4f.j5k;
}

function r6s(type)
{
	return w3w[type][1];
}

function q0a(o9v)
{
	for (const d9c of w3w)
	{
		if (d9c[1] == o9v)
		{
			return d9c[0];
		}
	}
	return i5j.i6p;
}

function l2f(s4h)
{
	return a5f[s4h][1];
}

function x9a(o9v)
{
	for (const s4h of a5f)
	{
		if (s4h[1] == o9v)
		{
			return s4h[0];
		}
	}
	return z1r.i6p;
}

function h2z(style)
{
	return l7c[style][1];
}

function h3u(o9v)
{
	for (const style of l7c)
	{
		if (style[1] == o9v)
		{
			return style[0];
		}
	}
	return l9b.i6p;
}

function i9h(value)
{
	return g1x[value][1];
}

function o5k(o9v)
{
	for (const value of g1x)
	{
		if (value[1] == o9v)
		{
			return value[0];
		}
	}
	return c3i.i6p;
}

function l7k(k2p)
{
	return v9m[k2p][1];
}

function t9y(o9v)
{
	for (const b1t of v9m)
	{
		if (b1t[1] == o9v)
		{
			return b1t[0];
		}
	}
	return f7p.i6p;
}

function o7c(o9v)
{
	return o9v.length == 0 ||
		o9v == "?" ||
		o9v == "-" ||
		o9v == "*" ||
		o9v == "????.??.??";
}

function i0d(o9v)
{
	if (o7c(o9v))
	{
		return "";
	}
	else
	{
		return o9v.trim();
	}
}

function x2i(o9v, o9d)
{
	if (o7c(o9v))
	{
		return o9d;
	}
	else
	{
		return y0d(o9v, o9d);
	}
}

function c9a(value)
{
	return value ? value.toString() : "";
}

function g0c(j2t)
{
	return v9u[j2t][1];
}

function i7j(o9v)
{
	for (const j2t of v9u)
	{
		if (j2t[1] == o9v)
		{
			return j2t[0];
		}
	}
	return l3x.n6u;
}

function w5y(b6x)
{
	if (!b6x)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(b6x / 60);
		let h0g = b6x % 60;
		return div.toString() + "." + h0g.toString().padStart(2, '0');
	}
}

function w7q(t7t)
{
	switch (t7t)
	{
		case q9v.l8a:
			return "1-0";
		case q9v.z6p:
			return "1/2-1/2";
		case q9v.m9x:
			return "0-1";
		default:
			return "*";
	}
}

function k1z(g1u)
{
	if (g1u > 0 && g1u <= 9999)
	{
		return g1u.toString().padStart(4, '0');
	}
	else
	{
		return "-";
	}
}

function a2f(i4j)
{
	if (i4j.f7c())
	{
		return "????.??.??";
	}
	let o9v = '';
	if (i4j.s6z)
	{
		o9v = i4j.s6z.toString().padStart(4, '0');
	}
	else
	{
		o9v = "????";
	}
	o9v += ".";
	if (i4j.k2z)
	{
		let s6u = i4j.k2z.toString().padStart(2, '0');
		o9v += s6u;
	}
	else
	{
		o9v += "??";
	}
	o9v += ".";
	if (i4j.h1h)
	{
		let k6a = i4j.h1h.toString().padStart(2, '0');;
		o9v += k6a;
	}
	else
	{
		o9v += "??";
	}
	return o9v;
}

function k2r(c7b)
{
	if (o7c(c7b))
	{
		return new m1n();
	}
	else
	{
		let i4j = new m1n();
		i4j.u8y("yyyy.mm.dd", c7b);
		return i4j;
	}
}

function u7n(c7b, h4b)
{
	h4b.c1y = (c7b.indexOf("team") != -1);
	h4b.type = i5j.i6p;
	for (const d9c of w3w)
	{
		if (c7b.indexOf(d9c[1]) != -1)
		{
			h4b.type = d9c[0];
			break;
		}
	}
	h4b.u4j = a4f.j5k;
	for (const u4j of c6h)
	{
		if (c7b.indexOf(u4j[1]) != -1)
		{
			h4b.u4j = u4j[0];
			break;
		}
	}
}

function a3i(c7b, b7n)
{
	b7n.u6y = 0;
	b7n.z9l = 0;
	let b9l = c7b.indexOf(".");
	if (b9l != -1)
	{
		let l9g = c7b.substr(0, b9l);
		b7n.u6y = y0d(l9g, 0);
		let n8n = c7b.substr(b9l + 1, c7b.length);
		b9l = n8n.indexOf(".");
		if (b9l != -1)
		{
			l9g = n8n.substr(0, b9l);
			b7n.z9l = y0d(l9g, 0);
		}
		else
		{
			b7n.z9l = y0d(n8n, 0);
		}
	}
	else
	{
		b7n.u6y = y0d(c7b, 0);
	}
}

function i0y(b7n)
{
	let c7b = '';
	if (b7n.z9l)
	{
		c7b = b7n.u6y.toString() + "." + b7n.z9l.toString();
	}
	else if (b7n.u6y)
	{
		c7b = b7n.u6y.toString();
	}
	return c7b;
}

function c6b(c7b)
{
	if (c7b == "2-0" || c7b == "20" || c7b == "1-0" || c7b == "10")
	{
		return q9v.l8a;
	}
	else if (c7b == "1-1" || c7b == "11" || c7b == "1/2-1/2" ||
		c7b == "1/21/2" || c7b == "0.5-0.5")
	{
		return q9v.z6p;
	}
	else if (c7b == "0-2" || c7b == "02" || c7b == "0-1" || c7b == "01")
	{
		return q9v.m9x;
	}
	else
	{
		return q9v.i6p;
	}
}

function e4u(c7b)
{
	return y0d(c7b, 0);
}

function n6n(c7b)
{
	return w8w(c7b);
}

function y7p(c7b)
{
	return b5r(c7b);
}

function m2k(value)
{
	return value ? "1" : "";
}

function m4s(c7b)
{
	return c7b == "1";
}

function g7s(z8x)
{
	let b7n = new p6g();

	
	b7n.j1n.m1i.u6h(i0d(z8x.v9h));
	if (!o7c(z8x.i3m))
	{
		b7n.j1n.h4v.d3i = i0d(z8x.i3m);
		b7n.j1n.h4v.j8h = x2i(z8x.t4f, 0);
		if (!o7c(z8x.l1k))
		{
			let i4j = k2r(z8x.l1k);
			b7n.j1n.h4v.s6z = i4j.s6z;
		}
		b7n.j1n.h4v.v6w = m4s(z8x.q9n);
		b7n.j1n.h4v.h1a = w3p(i0d(z8x.v9x));
	}
	b7n.j1n.g1u = e4u(i0d(z8x.m5e));
	b7n.j1n.time = y7p(i0d(z8x.z2m));
	b7n.j1n.d9y = i0d(z8x.o0c);
	b7n.j1n.h1a = d5c(i0d(z8x.d3u));

	
	b7n.f0n.m1i.u6h(i0d(z8x.g3v));
	if (!o7c(z8x.x4a))
	{
		b7n.f0n.h4v.d3i = i0d(z8x.x4a);
		b7n.f0n.h4v.j8h = x2i(z8x.y3y, 0);
		if (!o7c(z8x.y2w))
		{
			let i4j = k2r(z8x.y2w);
			b7n.f0n.h4v.s6z = i4j.s6z;
		}
		b7n.f0n.h4v.v6w = m4s(z8x.v9c);
		b7n.f0n.h4v.h1a = w3p(i0d(z8x.t6o));
	}
	b7n.f0n.g1u = e4u(i0d(z8x.f4c));
	b7n.f0n.time = y7p(i0d(z8x.k5r));
	b7n.f0n.d9y = i0d(z8x.m5g);
	b7n.f0n.h1a = d5c(i0d(z8x.y9q));

	
	b7n.h4b.d9y = i0d(z8x.v6l);
	b7n.h4b.i7v = i0d(z8x.f4q);
	b7n.h4b.t5p = k2r(z8x.h6z);
	b7n.h4b.f8z = k2r(z8x.x2n);

	u7n(i0d(z8x.d9c), b7n.h4b);
	
	
	
	let c4t = c3u(z8x.c4t);
	if (c4t != a4f.j5k)
	{
		b7n.h4b.u4j = c4t;
	}
	b7n.h4b.h1a = w3p(i0d(z8x.y8i));
	b7n.h4b.n7m = x2i(z8x.c9x, 0);
	let d9c = q0a(z8x.d9c);
	if (d9c != i5j.i6p)
	{
		b7n.h4b.type= d9c;
	}
	b7n.h4b.c9j = x2i(z8x.q6t, 0);
	b7n.h4b.c1y = m4s(z8x.s7j);
	b7n.h4b.g3q = m4s(z8x.q3p);
	b7n.h4b.n8a = m4s(z8x.l5o);
	b7n.h4b.u0m = m4s(z8x.o3z);

	
	b7n.e4h.d3i = i0d(z8x.e4h);

	
	b7n.p7z.d9y = i0d(z8x.w5m);
	b7n.p7z.n5y = i0d(z8x.n9f);
	b7n.p7z.l1m = k2r(z8x.v3g);
	b7n.p7z.a6r = x2i(z8x.e8r, 0);
	b7n.p7z.c5m = k2r(z8x.e5w);
	b7n.p7z.j2t = i7j(z8x.t7h);

	
	b7n.d9y.d9y = i0d(z8x.d9y);

	
	b7n.i4j = k2r(z8x.i4j);
	b7n.t7t = c6b(i0d(z8x.t7t));
	b7n.z1u = n6n(i0d(z8x.z1u));
	a3i(i0d(z8x.u6y), b7n);

	
	let a5x = x2i(z8x.a5x, 0);
	b7n.a5x.p1k(a5x);

  
  b7n.id.l4b = z8x.l4b;

	return b7n;
}

function g1n(b7n)
{
	let z8x = new q6v();

	
	z8x.v9h = b7n.j1n.m1i.d3i();
	if (b7n.j1n.h4v.d3i.length)
	{
		z8x.i3m = b7n.j1n.h4v.d3i;
		if (b7n.j1n.h4v.j8h)
		{
			z8x.t4f = b7n.j1n.h4v.j8h;
		}
		if (b7n.j1n.h4v.s6z)
		{
			let j0z = new m1n();
			j0z.s6z = b7n.j1n.h4v.s6z;
			z8x.l1k = a2f(j0z);
		}
		if (b7n.j1n.h4v.v6w)
		{
			z8x.q9n = m2k(b7n.j1n.h4v.v6w);
		}
		if (b7n.j1n.h4v.h1a != y3a.i6p)
		{
			z8x.v9x = w9r(b7n.j1n.h4v.h1a);
		}
	}
	z8x.m5e = k1z(b7n.j1n.g1u);
	z8x.z2m = w5y(b7n.j1n.time);
	z8x.o0c = b7n.j1n.d9y;

	
	z8x.g3v = b7n.f0n.m1i.d3i();
	if (b7n.f0n.h4v.d3i.length)
	{
		z8x.x4a = b7n.f0n.h4v.d3i;
		if (b7n.f0n.h4v.j8h)
		{
			z8x.y3y = b7n.f0n.h4v.j8h;
		}
		if (b7n.f0n.h4v.s6z)
		{
			let p2u = new m1n();
			p2u.s6z = b7n.f0n.h4v.s6z;
			z8x.y2w = a2f(p2u);
		}
		if (b7n.f0n.h4v.v6w)
		{
			z8x.v9c = m2k(b7n.f0n.h4v.v6w);
		}
		if (b7n.f0n.h4v.h1a != y3a.i6p)
		{
			z8x.t6o = w9r(b7n.f0n.h4v.h1a);
		}
	}
	z8x.f4c = k1z(b7n.f0n.g1u);
	z8x.k5r = w5y(b7n.f0n.time);
	z8x.m5g = b7n.f0n.d9y;

	
	z8x.v6l = b7n.h4b.d9y;
	z8x.f4q = b7n.h4b.i7v;
	z8x.h6z = a2f(b7n.h4b.t5p);
	z8x.x2n = a2f(b7n.h4b.f8z);
	z8x.c4t = e0u(b7n.h4b.u4j);
	z8x.c9x = c9a(b7n.h4b.n7m);
	z8x.y8i = w9r(b7n.h4b.h1a);
	z8x.d9c = r6s(b7n.h4b.type);
	z8x.q6t = c9a(b7n.h4b.c9j);
	z8x.s7j = m2k(b7n.h4b.c1y);
	z8x.q3p = m2k(b7n.h4b.g3q);
	z8x.l5o = m2k(b7n.h4b.n8a);
	z8x.o3z = m2k(b7n.h4b.u0m);

	
	z8x.e4h = b7n.e4h.d3i;

	
	z8x.w5m = b7n.p7z.d9y;
	z8x.n9f = b7n.p7z.n5y;
	z8x.v3g = a2f(b7n.p7z.l1m);
	z8x.e8r = c9a(b7n.p7z.a6r);
	z8x.e5w = a2f(b7n.p7z.c5m);
	z8x.t7h = g0c(b7n.p7z.j2t);

	
	z8x.d9y = b7n.d9y.d9y;

	
	z8x.i4j = a2f(b7n.i4j);
	z8x.t7t = w7q(b7n.t7t);
	z8x.z1u = b2h(b7n.z1u);
	z8x.u6y = i0y(b7n);

	
	z8x.a5x = c9a(b7n.a5x.j1k());

	return z8x;
}

const z7e  					= "White";
const w7c					= "WhiteTeam";
const q0o 				= "WhiteTeamNumber";
const f5c 					= "WhiteTeamYear";
const w5w 				= "WhiteTeamSeason";
const q9b 			= "WhiteTeamCountry";
const l3a 						= "WhiteRating";
const l4y 							= "WhiteTime";
const x6x 							= "WhiteElo";
const e1v  						= "WhiteTitle";
const d9b						= "WhiteCountry";

const p8n						= "Black";
const w6m					= "BlackTeam";
const h2d 				= "BlackTeamNumber";
const d1n 					= "BlackTeamYear";
const l2o 				= "BlackTeamSeason";
const d1p 			= "BlackTeamCountry";
const t4o 						= "BlackRating";
const m7q 							= "BlackTime";
const r4x 							= "BlackElo";
const w8e  						= "BlackTitle";
const j8b						= "BlackCountry";

const s7c 				= "Event";
const c7v				= "Site";
const i3w 			 	= "EventDate";
const j3o 		 	= "EventEndDate";
const l7z 			 	= "EventSpeed";
const y8s 	 	= "EventCategory";
const a9l 		 	= "EventCountry";
const v2o 			 	= "EventType";
const s1l 		 	= "EventRounds";
const g5k 			 	= "EventTeams";
const v2n		 	= "EventComplete";
const y8y 	= "EventThreePoints";
const b8z	= "EventBoardPoints";

const h2e 							= "Annotator";

const p4r 				 		= "SourceTitle";
const z7h 				 		= "Publication";
const e8x		 		= "SourcePublisher";
const i4y		 		= "PublicationDate";
const q1y 				 		= "SourceDate";
const p1a 		= "SourceVersionNumber";
const s6a 	 		= "SourceVersionDate";
const r0j 			 		= "SourceQuality";

const m7h 					 		    = "Title";

const o1a 							 		= "Date";
const w9w 								= "Result";
const x5q 										= "ECO";
const c3j 									= "Round";

const x4n			 							= "Tags";

const d1t 									= "Setup";
const p4h 										= "FEN";
const c2q 							= "PlyCount";

const u5b      							= "GUID";

const r4b = "(";
const u1v   = ")";
const j7l    = "{";

class n1z
{

constructor()
{
  this.b2t = new n3j();
  this.y2h = new k4l();
  this.s8d = new f2p();
  this.a6k = false;
  this.a5n = false;
  this.x8r = false;
  this.e1u = '';
}

}

class w7r
{

constructor(lines)
{
	this.m6u = new q6v();
	this.o3a = lines;
	this.a1s = 0;
	this.l3y = '';
	this.t9z = 0;
	this.n4n = 0;
	this.s6w = '';
	this.l2y = 0;
	this.l4u = false;
	this.c9i = '';
	this.e9j = '';
	this.z7k = null;
	this.j4k = new b6u();
	this.z0v = '';
	this.h5z = false;
 	this.m5q = false;
	this.g7p = false;
}

o3y()
{
  this.l2y = 0;
	let s8f = new b6z();
	this.z7k = s8f.z1l;
	try
	{
		this.f8y();
	}
	catch (err)
	{
	}
	s8f.n5t = g7s(this.m6u);
  s8f.p6s = this.l2y;
	return s8f;
}

f8y()
{
	this.l4u = false;
	this.b4x();
	if (this.l4u)
	{
		this.x7g = i3k(this.e9j);
		this.z7k.l8r(this.x7g, 1);
	}
 	this.m3m();
}

k8c()
{
	if (this.o3a.length == 0)
	{
		return false;
	}
	if (this.a1s >= this.o3a.length)
	{
		return false;
	}
	else
	{
		this.l3y = this.o3a[this.a1s];
		this.t9z = this.l3y.length;
		this.n4n = 0;
		this.a1s++;
		return true;
	}
}

b4x()
{
	this.g7p = false;
	this.m5q = false;
	while (true)
	{
		if (!this.k8c())
		{
			return;
		}
		this.w4w();
		if (!this.p7f())
		{
			return;
		}
		this.e7p();
	}
}


x7h(s9q)
{
	let c7b = this.s6w.substr(1, this.s6w.length - 1);
	return c7b.toUpperCase() === s9q.toUpperCase();
}

m3m()
{
 	if (this.s6w.length == 0) return;
	this.h5z = false;

	while (this.s6w[0] == '{')
	{
		let m3t = this.c2h();
    let f2g = new n1z();
		this.s5d(m3t, f2g);
    if (!f2g.b2t.f7c())
		{
			this.z7k.b0w(f2g.b2t);
		}
 		if (!f2g.y2h.f7c())
		{
			this.z7k.y1g(f2g.y2h);
		}
		if (!f2g.s8d.f7c())
		{
			this.z7k.z4q(f2g.s8d);
		}
 		m3t = f2g.e1u.trim();
    if (m3t.length)
    {
      
      
      if (m3t.startsWith("[%a") && m3t.length > 7)
      {
        m3t = m3t.substr(7, m3t.length).trim();
      }
      let j8c = this.z7k.j8c();
      if (j8c.length)
      {
        j8c += ' ';
      }
      j8c += m3t;
      this.z7k.z3j(j8c);
		}
		this.w4w();
		if (this.s6w.length == 0)
		{
			return;
		}
	}
	this.n1d(this.z7k.u4v(), this.z7k.x7g());
}

n1d(m8t, d3d)
{
  let b9l = m8t.z4e();
  let e3i = d3d.z4e();

	let c4v = null;
 	let m7e = new m8h();

	do
	{
		if (this.s6w == r4b)
		{
			if (!c4v)
			{
				throw "error";
			}
			if (!this.w4w())
			{
				throw "error";
			}

 			e3i.o1f(b9l.c7j.x2v());
			e3i.r9h(m7e);
			this.z7k.o1f(b9l); 
      this.n1d(b9l, e3i);
			this.z7k.i8p(b9l); 
			e3i.i8p(b9l.c7j.x2v());

			while (this.w4w())
			{
				if (this.s6w != r4b)
				{
					break;
				}
				if (!this.w4w())
				{
					throw "error";
				}
        e3i.o1f(b9l.c7j.x2v());
				e3i.r9h(m7e);
				this.z7k.o1f(b9l); 
				this.n1d(b9l, e3i);
				this.z7k.i8p(b9l);  
				e3i.i8p(b9l.c7j.x2v());
			}
		}

		if (this.s6w == u1v)
		{
			break;
		}

		if (
			this.s6w == "1-0" ||
			this.s6w == "2-0" ||
			this.s6w == "0-1" ||
			this.s6w == "0-2" ||
			this.s6w == "1/2-1/2" ||
			this.s6w == "1-1" ||
			this.s6w == "*" ||
			this.s6w == "**" ||
			this.s6w == "-*" ||
			this.s6w == "1-0*" ||
			this.s6w == "2-0*" ||
			this.s6w == "0-1*" ||
			this.s6w == "0-2*" ||
			this.s6w == "1/2-1/2*" ||
			this.s6w == "1-1*" ||
			this.s6w == "2-00*" ||
			this.s6w == "00-2*")
			break;

		if (this.s6w[0] == '$')
		{
			if (!c4v)
			{
				throw "error";
			}
			let s4h = x9a(this.s6w);
			if (s4h != z1r.i6p)
			{
				c4v.d0w(s4h);
				continue;
			}
			let style = h3u(this.s6w);
			if (style != l9b.i6p)
			{
				c4v.d7g(style);
				continue;
			}
			let value = o5k(this.s6w);
			if (value != c3i.i6p)
			{
				c4v.s0b(value);
				continue;
			}
			let k2p = t9y(this.s6w);
			if (k2p != f7p.i6p)
			{
				c4v.h9r(k2p);
				continue;
			}
			continue;
		}
		if (this.s6w[0] == '{')
		{
			let m3t = this.c2h();
      let f2g = new n1z();
  		this.s5d(m3t, f2g);
      if (!f2g.b2t.f7c())
      {
		  	if (c4v)
			  {
				  c4v.f4h(f2g.b2t);
				}
			}
   		if (!f2g.y2h.f7c())
      {
				if (c4v)
				{
					c4v.j9q(f2g.y2h);
				}
			}
   		if (!f2g.s8d.f7c())
      {
				if (c4v)
				{
					c4v.n3q(f2g.s8d);
				}
			}
      if (f2g.a5n)
      {
				if (c4v)
				{
					c4v.l9f();
				}
			}
      if (f2g.x8r)
      {
				if (c4v)
				{
					c4v.s6r();
				}
			}
   		m3t = f2g.e1u.trim();
      if (!m3t.length)
      {
        continue;
      }
			if (c4v)
			{
        let u4n = c4v.u4n();
        if (u4n.length)
        {
          u4n += ' ';
        }
        u4n += m3t;
				c4v.q0s(u4n);
			}
			else
			{
        if (this.z0v.length)
        {
   				this.z0v += ' ';
        }
				this.z0v += m3t;
				this.h5z = true;
			}
			continue;
		}
		if (!this.n0n())
		{
			continue;
		}
		let w9j = false;
		if (this.s6w[this.s6w.length] == '*')
		{
			this.s6w = this.s6w.substr(0, this.s6w.length - 1);
			w9j = true;
		}
 		let i8w = this.i3p(this.s6w);
    let x2v = r9w(e3i, this.s6w);
 		m7e = e3i.m7e();
		e3i.i8p(x2v);
		let c7j = a7k(x2v);
    c7j.d7g(i8w);
    this.z7k.d4y(b9l, c7j);
		c4v = b9l.c7j;
		if (this.h5z)
		{
			c4v.g9m(this.z0v);
			this.h5z = false;
      this.z0v = '';
		}
		if (w9j)
		{
			break;
		}
	} while (this.w4w());
}

i3p(c7b)
{
	if (c7b.endsWith("??"))
	{
		c7b = c7b.subString(0, c7b.length-2);
		return l9b.k3g;
	}
	else if (c7b.endsWith("!!"))
	{
		c7b = c7b.subString(0, c7b.length-2);
		return l9b.b8p;
	}
	else if (c7b.endsWith("?!"))
	{
		c7b = c7b.subString(0, c7b.length-2);
		return l9b.u7g;
	}
	else if (c7b.endsWith("!?"))
	{
		c7b = c7b.subString(0, c7b.length-2);
		return l9b.d2n;
	}
	else if (c7b.endsWith("?"))
	{
		c7b = c7b.subString(0, c7b.length-1);
		return l9b.c7s;
	}
	else if (c7b.endsWith("!"))
	{
		c7b = c7b.subString(0, c7b.length-1);
		return l9b.b5t;
	}
	else
	{
		return l9b.i6p;
	}
}

n0n()
{
	let h1q = this.s6w.length;
	let b9l = -1;
	for (let i = 0; i < h1q; i++)
	{
		if (this.s6w[i] == '.')
		{
			b9l = i;
		}
	}
	if (b9l != -1)
	{
		this.s6w = this.s6w.substr(b9l + 1 , h1q);
	}
	return this.s6w.length != 0;
}

w4w()
{
	this.s6w = "";
	let i1u = '';
	let index = 0;
	let h1q = 0;
	while (true)
	{
		let u1s = 0;
		if (this.n4n < this.t9z)
		{
			u1s = this.l3y[this.n4n];
		}
		else
		{
			u1s = 0;
		}
		if (!u1s)
		{
			if (h1q)
			{
				break;
			}
			if (!this.k8c())
			{
				return false;
			}
			continue;
		}
		if (u1s == ';')
		{
			if (!this.k8c())
			{
				return false;
			}
			continue;
		}
		if (u1s == '(')
		{
			if (h1q)
			{
				break;
			}
			else
			{
				this.n4n++;
				this.s6w = r4b;
				return true;
			}
		}
		if (u1s == ')')
		{
			if (h1q)
			{
				break;
			}
			else
			{
				this.n4n++;
				this.s6w = u1v;
				return true;
			}
		}
		if (u1s == '{')
		{
			if (h1q)
			{
				break;
			}
			else
			{
				this.n4n++;
				this.s6w = j7l;
				return true;
			}
		}
		if (u1s == ' ' || u1s == '\r' || u1s == '\n')
		{
			if (h1q)
			{
				this.n4n++;
				break;
			}
			else
			{
				this.n4n++;
				continue;
			}
		}
		i1u += u1s;
		index++;
		h1q++;
		this.n4n++;
	}
	if (index)
	{
		this.s6w += i1u;
	}
	return this.s6w.length != 0;
}

c2h()
{
	let c7b = '';
	let i1u = '';
	let index = 0;
	let n1y = 0;
	while (true)
	{
		let u1s = 0;
		if (this.n4n < this.t9z)
		{
			u1s = this.l3y[this.n4n];
		}
		else
		{
			u1s = 0;
		}
		if (!u1s)
		{
			if (!this.k8c())
			{
				break;
			}
			if (index > 0)
			{
				i1u += ' '; 
				index++;
			}
			continue;
		}
		if (u1s == '{')
		{
			n1y++;
		}
		if (u1s == '}')
		{
			if (n1y)
			{
				n1y--;
			}
			else
			{
				this.n4n++;
				break;
			}
		}
		i1u += u1s;
		index++;
		this.n4n++;
	}
	if (index)
	{
		c7b += i1u;
	}
	return c7b.trim();
}

w4v()
{
	this.c9i = "";

	let f5y = 0;
	let h1q = this.l3y.length;
	for (let i = h1q - 1; i >= 0; i--)
	{
		if (this.l3y[i] == ']')
		{
			f5y = i;
			break;
		}
	}
	let index = 0;
	let p3p = false;
	let i1u = '';
	while (true)
	{
		let u1s = 0;
		if (this.n4n < this.t9z)
		{
			u1s = this.l3y[this.n4n];
		}
		else
		{
			u1s = 0;
		}
		if (!u1s)
		{
			if (!this.k8c())
			{
				break;
			}
			continue;
		}
		if (u1s == '\"')
		{
			p3p = true;
			this.n4n++;
			continue;
		}
		if (u1s == ']')
		{
			if (this.n4n == f5y)
			{
				this.n4n++;
				break;
			}
		}
		if (p3p)
		{
			i1u += u1s;
			index++;
		}
		this.n4n++;
	}
	if (index)
	{
		this.c9i += i1u;
	}
}

p7f()
{
	if (this.s6w.length == 0)
	{
		return false;
	}
	if (this.s6w[0] != '[')
	{
		return false;
	}
	
	let index = this.n4n;
	let b9d = false;
	while (index < this.t9z)
	{
		let u1s = this.l3y[index++];
		if (u1s == '\"' && this.l3y[index] == ']')
		{
			index++;
			b9d = true;
			continue;
		}
		if (u1s == '\r' || u1s == '\n')
		{
			break;
		}
		if (b9d)
		{
			b9d = false;
			break;
		}
	}
	return b9d;
}

e7p()
{
	
	if (this.x7h(z7e))
	{
		this.w4v();
		this.m6u.v9h = this.c9i;
		return;
	}
	if (this.x7h(w7c))
	{
		this.w4v();
		this.m6u.i3m = this.c9i;
		return;
	}
	if (this.x7h(q0o))
	{
		this.w4v();
		this.m6u.t4f = this.c9i;
		return;
	}
	if (this.x7h(f5c))
	{
		this.w4v();
		this.m6u.l1k = this.c9i;
		return;
	}
	if (this.x7h(w5w))
	{
		this.w4v();
		this.m6u.q9n = this.c9i;
		return;
	}
	if (this.x7h(q9b))
	{
		this.w4v();
		this.m6u.v9x = this.c9i;
		return;
	}
	if (this.x7h(x6x) || this.x7h(l3a))
	{
		this.w4v();
		this.m6u.m5e = this.c9i;
		return;
	}
	if (this.x7h(l4y))
	{
		this.w4v();
		this.m6u.z2m = this.c9i;
		return;
	}
	if (this.x7h(e1v))
	{
		this.w4v();
		this.m6u.o0c = this.c9i;
		return;
	}
	if (this.x7h(d9b))
	{
		this.w4v();
		this.m6u.d3u = this.c9i;
		return;
	}

	
	if (this.x7h(p8n))
	{
		this.w4v();
		this.m6u.g3v = this.c9i;
		return;
	}
	if (this.x7h(w6m))
	{
		this.w4v();
		this.m6u.x4a = this.c9i;
		return;
	}
	if (this.x7h(h2d))
	{
		this.w4v();
		this.m6u.y3y = this.c9i;
		return;
	}
	if (this.x7h(d1n))
	{
		this.w4v();
		this.m6u.y2w = this.c9i;
		return;
	}
	if (this.x7h(l2o))
	{
		this.w4v();
		this.m6u.v9c = this.c9i;
		return;
	}
	if (this.x7h(d1p))
	{
		this.w4v();
		this.m6u.t6o = this.c9i;
		return;
	}
	if (this.x7h(r4x) || this.x7h(t4o))
	{
		this.w4v();
		this.m6u.f4c = this.c9i;
		return;
	}
	if (this.x7h(m7q))
	{
		this.w4v();
		this.m6u.k5r = this.c9i;
		return;
	}
	if (this.x7h(w8e))
	{
		this.w4v();
		this.m6u.m5g = this.c9i;
		return;
	}
	if (this.x7h(j8b))
	{
		this.w4v();
		this.m6u.y9q = this.c9i;
		return;
	}

	
	if (this.x7h(s7c))
	{
		this.w4v();
		this.m6u.v6l = this.c9i;
		return;
	}
	if (this.x7h(c7v))
	{
		this.w4v();
		this.m6u.f4q = this.c9i;
		return;
	}
	if (this.x7h(i3w))
	{
		this.w4v();
		this.m6u.h6z = this.c9i;
		return;
	}
	if (this.x7h(j3o))
	{
		this.w4v();
		this.m6u.x2n = this.c9i;
		return;
	}
	if (this.x7h(l7z))
	{
		this.w4v();
		this.m6u.c4t = this.c9i;
		return;
	}
	if (this.x7h(y8s))
	{
		this.w4v();
		this.m6u.c9x = this.c9i;
		return;
	}
	if (this.x7h(a9l))
	{
		this.w4v();
		this.m6u.y8i = this.c9i;
		return;
	}
	if (this.x7h(v2o))
	{
		this.w4v();
		this.m6u.d9c = this.c9i;
		return;
	}
	if (this.x7h(s1l))
	{
		this.w4v();
		this.m6u.q6t = this.c9i;
		return;
	}
	if (this.x7h(g5k))
	{
		this.w4v();
		this.m6u.s7j = this.c9i;
		return;
	}
	if (this.x7h(v2n))
	{
		this.w4v();
		this.m6u.q3p = this.c9i;
		return;
	}
	if (this.x7h(y8y))
	{
		this.w4v();
		this.m6u.l5o = this.c9i;
		return;
	}
	if (this.x7h(b8z))
	{
		this.w4v();
		this.m6u.o3z = this.c9i;
		return;
	}

	
	if (this.x7h(h2e))
	{
		this.w4v();
		this.m6u.e4h = this.c9i;
		return;
	}

	
	if (this.x7h(p4r))
	{
		this.w4v();
		this.m6u.w5m = this.c9i;
		return;
	}
	if (this.x7h(z7h))
	{
		this.w4v();
		this.m6u.w5m = this.c9i;
		return;
	}
	if (this.x7h(e8x))
	{
		this.w4v();
		this.m6u.n9f = this.c9i;
		return;
	}
	if (this.x7h(q1y))
	{
		this.w4v();
		this.m6u.v3g = this.c9i;
		return;
	}
	if (this.x7h(i4y))
	{
		this.w4v();
		this.m6u.v3g = this.c9i;
		return;
	}
	if (this.x7h(p1a))
	{
		this.w4v();
		this.m6u.e8r = this.c9i;
		return;
	}
	if (this.x7h(s6a))
	{
		this.w4v();
		this.m6u.e5w = this.c9i;
		return;
	}
	if (this.x7h(r0j))
	{
		this.w4v();
		this.m6u.t7h = this.c9i;
		return;
	}

	
	if (this.x7h(m7h))
	{
		this.w4v();
		this.m6u.d9y = this.c9i;
		return;
	}

	
	if (this.x7h(o1a))
	{
		this.w4v();
		this.m6u.i4j = this.c9i;
		return;
	}
	if (this.x7h(w9w))
	{
		this.w4v();
		this.m6u.t7t = this.c9i;
		return;
	}
	if (this.x7h(x5q))
	{
		this.w4v();
		this.m6u.z1u = this.c9i;
		return;
	}
	if (this.x7h(c3j))
	{
		this.w4v();
		this.m6u.u6y = this.c9i;
		return;
	}

	
	if (this.x7h(x4n))
	{
		this.w4v();
		this.m6u.a5x = this.c9i;
		return;
	}

	
	if (this.x7h(d1t))
	{
		this.w4v();
		return;
	}
	if (this.x7h(p4h))
	{
		this.w4v();
		if (this.c9i.length == 0 || this.c9i == "?")
		{
			return;
		}
		this.l4u = true;
		this.e9j = this.c9i;
		return;
	}
	if (this.x7h(c2q))
	{
		this.w4v();
		this.l2y = y0d(this.c9i, 0);
		return;
	}
  
 	if (this.x7h(u5b))
	{
		this.w4v();
		this.m6u.l4b = this.c9i;
		return;
	}

}

h8y(m3t)
{
	let c6n = new n3j();
	let c7b = m3t.substr(6, m3t.length - 6);
	let y8o = c7b.split(",");
	for (const s of y8o)
	{
		if (s.length < 5)
		{
			continue;
		}
		let d4d = z0q(s.substr(1, 2));
		let z4d = z0q(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let l1c = r5l(d4d, z4d, y3m.j6v);
			c6n.add(l1c);
		}
		else if (s[0] == 'G')
		{
			let l1c = r5l(d4d, z4d, y3m.m0i);
			c6n.add(l1c);
		}
		else if (s[0] == 'Y')
		{
			let l1c = r5l(d4d, z4d, y3m.o2m);
			c6n.add(l1c);
		}
	}
	return c6n;
}

a4t(m3t)
{
	let q7k = new k4l();
	let c7b = m3t.substr(6, m3t.length - 6);
	let y8o = c7b.split(",");
	for (const s of y8o)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let k2d = z0q(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let n7v = s3v(k2d, f6d.a8z);
			q7k.add(n7v);
		}
		else if (s[0] == 'G')
		{
      let n7v = s3v(k2d, f6d.f7s);
			q7k.add(n7v);
		}
		else if (s[0] == 'Y')
		{
      let n7v = s3v(k2d, f6d.r4p);
			q7k.add(n7v);
		}
	}
	return q7k;
}

o0j(m3t)
{
	let c7b = m3t.substr(6, m3t.length - 6);
	let b9l = c7b.indexOf("]");
	if (b9l != -1)
	{
		let s8d = new f2p();
		let value = y0d(c7b.substr(0, b9l), 0);
		s8d.p1k(value);
		return s8d;
	}
	else
	{
		return new f2p();
	}
}


s5d(m3t, f2g)
{
	if (
		m3t.startsWith("[%cal") ||
    m3t.startsWith("[%csb") ||
		m3t.startsWith("[%csl") ||
		m3t.startsWith("[%mdl") ||
		m3t.startsWith("[%evp") ||
		m3t.startsWith("[%eval") ||
		m3t.startsWith("[%emt") ||
		m3t.startsWith("[%tqu") ||
		m3t.startsWith("[%tqu") ||
		m3t.startsWith("[%pws") ||
		m3t.startsWith("[%pth") ||
		m3t.startsWith("[%eog"))
	{
		let t7s = 0;
		{
     	let d3q = m3t.indexOf("[%cal");
			if (d3q != -1)
			{
        let k8l = m3t.indexOf("]", d3q);
				if (k8l != -1)
				{
     			let g2w = m3t.substring(d3q, k8l + 1);
					f2g.b2t = this.h8y(g2w).z4e();
					if (k8l > t7s) t7s = k8l;
				}
			}
		}
		{
     	let d3q = m3t.indexOf("[%csb");
   		if (d3q != -1)
			{
        let k8l = m3t.indexOf("]", d3q);
				if (k8l != -1)
				{
          let s3d = m3t.substring(d3q, k8l + 1);
					f2g.y2h = this.a4t(s3d).z4e();
					if (k8l > t7s) t7s = k8l;
				}
			}
		}
		{
      let d3q = m3t.indexOf("[%csl");
			if (d3q != -1)
			{
        let k8l = m3t.indexOf("]", d3q);
				if (k8l != -1)
				{
          let s3d = m3t.substring(d3q, k8l + 1);
					f2g.y2h = this.a4t(s3d).z4e();
					if (k8l > t7s) t7s = k8l;
				}
			}
		}
		{
      let d3q = m3t.indexOf("[%mdl");
			if (d3q != -1)
			{
        let k8l = m3t.indexOf("]", d3q);
				if (k8l != -1)
				{
          let d9k = m3t.substring(d3q, k8l + 1);
					f2g.s8d = this.o0j(d9k).z4e();
					if (k8l > t7s) t7s = k8l;
				}
			}
		}
		{
      let d3q = m3t.indexOf("[%evp");
			if (d3q != -1)
			{
        let k8l = m3t.indexOf("]", d3q);
				if (k8l != -1)
				{
					if (k8l > t7s) t7s = k8l;
				}
			}
		}
		{
      let d3q = m3t.indexOf("[%eval");
			if (d3q != -1)
			{
        let k8l = m3t.indexOf("]", d3q);
				if (k8l != -1)
				{
					if (k8l > t7s) t7s = k8l;
				}
			}
		}
		{
      let d3q = m3t.indexOf("[%emt");
			if (d3q = -1)
			{
        let k8l = m3t.indexOf("]", d3q);
				if (k8l != -1)
				{
					if (k8l > t7s) t7s = k8l;
				}
			}
		}
		{
      let d3q = m3t.indexOf("[%tqu");
			if (d3q != -1)
			{
        let k8l = m3t.indexOf("]", d3q);
				if (k8l != -1)
				{
					if (k8l > t7s) t7s = k8l;
				}
			}
		}
		{
      let d3q = m3t.indexOf("[%pws");
			if (d3q != -1)
			{
        let k8l = m3t.indexOf("]", d3q);
				if (k8l != -1)
				{
          f2g.a6k = true;
					if (k8l > t7s) t7s = k8l;
				}
			}
		}
		{
      let d3q = m3t.indexOf("[%pth");
			if (d3q != -1)
			{
        let k8l = m3t.indexOf("]", d3q);
				if (k8l != -1)
				{
          f2g.a5n = true;
					if (k8l > t7s) t7s = k8l;
				}
			}
		}
		{
      let d3q = m3t.indexOf("[%eog");
			if (d3q != -1)
			{
        let k8l = m3t.indexOf("]", d3q);
				if (k8l != -1)
				{
					f2g.x8r = true; 
					if (k8l > t7s) t7s = k8l;
				}
			}
		}
    f2g.e1u = m3t.substring(t7s + 1);
	}
	else
	{
		f2g.e1u = m3t;
	}
}

}

class u1z
{

constructor()
{
  this.p6s = 0;
	this.n5t = new q6v();
	this.z1l = new l1j();
}

z4e()
{
	let x7j = new u1z();
  x7j.p6s = this.p6s;
	x7j.n5t = this.n5t.z4e();
	x7j.z1l = this.z1l.z4e();
	return x7j;
}

}

class q6v
{

constructor()
{
	this.v9h = '';
	this.i3m = '';
	this.t4f = '';
	this.l1k = '';
	this.q9n = '';
	this.v9x = '';
	this.m5e = '';
	this.z2m = '';
	this.o0c = '';
  this.d3u = '';
	this.g3v = '';
	this.x4a = '';
	this.y3y = '';
	this.y2w = '';
	this.v9c = '';
	this.t6o = '';
	this.f4c = '';
	this.k5r = '';
	this.m5g = '';
  this.y9q = '';
	this.v6l = '';
	this.f4q = '';
	this.h6z = '';
	this.x2n = '';
	this.c4t = '';
	this.c9x = '';
	this.y8i = '';
	this.d9c = '';
	this.q6t = '';
	this.s7j = '';
	this.q3p = '';
	this.l5o = '';
	this.o3z = '';
	this.e4h = '';
	this.w5m = '';
	this.n9f = '';
	this.v3g = '';
	this.e8r = '';
	this.e5w = '';
	this.t7h = '';
	this.d9y = '';
	this.i4j = '';
	this.t7t = '';
	this.z1u = '';
	this.u6y = '';
	this.a5x = '';
  this.l4b = '';
}

z4e()
{
	let z6o = new q6v();

	z6o.v9h = this.v9h;
	z6o.i3m = this.i3m;
	z6o.t4f = this.t4f;
	z6o.l1k = this.l1k;
	z6o.q9n = this.q9n;
	z6o.v9x = this.v9x;
	z6o.m5e = this.m5e;
	z6o.z2m = this.z2m;
	z6o.o0c = this.o0c;
	z6o.d3u = this.d3u;

	z6o.g3v = this.g3v;
	z6o.x4a = this.x4a;
	z6o.y3y = this.y3y;
	z6o.y2w = this.y2w;
	z6o.v9c = this.v9c;
	z6o.t6o = this.t6o;
	z6o.f4c = this.f4c;
	z6o.k5r = this.k5r;
	z6o.m5g = this.m5g;
	z6o.y9q = this.y9q;

	z6o.v6l = this.v6l;
	z6o.f4q = this.f4q;
	z6o.h6z = this.h6z;
	z6o.x2n = this.x2n;
	z6o.c4t = this.c4t;
	z6o.c9x = this.c9x;
	z6o.y8i = this.y8i;
	z6o.d9c = this.d9c;
	z6o.q6t = this.q6t;
	z6o.s7j = this.s7j;
	z6o.q3p = this.q3p;
	z6o.l5o = this.l5o;
	z6o.o3z = this.o3z;

	z6o.e4h = this.e4h;

	z6o.w5m = this.w5m;
	z6o.n9f = this.n9f;
	z6o.v3g = this.v3g;
	z6o.e8r = this.e8r;
	z6o.e5w = this.e5w;
	z6o.t7h = this.t7h;

	z6o.d9y = this.d9y;

	z6o.i4j = this.i4j;
	z6o.t7t = this.t7t;
	z6o.z1u = this.z1u;
	z6o.u6y = this.u6y;

	z6o.a5x = this.a5x;
 	z6o.l4b = this.l4b;

	return z6o;
}

}


const x8p =
[
		[ y3a.i6p, 				  									"",											            "", 																	"",   ""    ],
		[ y3a.l8g, 										  "Afghanistan",											"Afghanistan", 												"af", "AFG" ],
		[ y3a.j0r, 									 	"AlandIslands",										  "Aland", 															"ax", "ALA" ],
		[ y3a.v7o,  											 	"Albania",													"Albania", 														"al", "ALB" ],
		[ y3a.x6e,  											 	"Algeria",													"Algeria", 														"dz", "DZA" ],
		[ y3a.a8x,  								 	"AmericanSamoa",										"American Samoa", 										"as", "ASM" ],
		[ y3a.e7c,  											 	"Andorra",													"Andorra", 														"ad", "AND" ],
		[ y3a.a7m,                           "Angola",													  "Angola", 														"ao", "AGO" ],
		[ y3a.e2j,  											  "Anguilla",												  "Anguilla", 													"ai", "AIA" ],
		[ y3a.q5j,  										  "Antarctica",											  "Antarctica", 												"aq", "ATA" ],
		[ y3a.m9u,  								  "AntiguaBarbuda",									  "Antigua & Barbuda", 									"ag", "ATG" ],
		[ y3a.i4z,  										 	"Argentina",												"Argentina", 													"ar", "ARG" ],
		[ y3a.s8a,  											 	"Armenia",													"Armenia",														"am", "ARM" ],
		[ y3a.p8z,  												 	"Aruba",														"Aruba",															"aw", "ABW" ],
		[ y3a.g1i,  										 	"Australia",												"Australia",													"au", "AUS" ],
		[ y3a.e9h,  											 	"Austria",													"Austria",											 			"at", "AUT" ],
		[ y3a.l9z,  										  "Azerbaijan",											  "Azerbaijan",													"az", "AZE" ],
		[ y3a.g3a,  											 	"Bahamas",													"Bahamas",														"bs", "BHS" ],
		[ y3a.h2p,  											 	"Bahrain",													"Bahrain",														"bh", "BHR" ],
		[ y3a.d2b,  										  "Bangladesh",											  "Bangladesh",													"bd", "BGD" ],
		[ y3a.t3m,  											  "Barbados",												  "Barbados",														"bb", "BRB" ],
		[ y3a.h0c,  								 	"BasqueCountry",	 									"Basque Country",     								"x1", "XX1" ], 
		[ y3a.l0d,  											 	"Belarus",													"Belarus",														"by", "BLR" ],
		[ y3a.h0k,  											 	"Belgium",													"Belgium",														"be", "BEL" ],
		[ y3a.u0i,  												  "Belize",													  "Belize",															"bz", "BLZ" ],
		[ y3a.y0i,  												 	"Benin",														"Benin",															"bj", "BEN" ],
		[ y3a.c4q,  											 	"Bermuda",													"Bermuda",														"bm", "BMU" ],
		[ y3a.j2q,  												  "Bhutan",													  "Bhutan",															"bt", "BTN" ],
		[ y3a.g6a,  												"Bolivia",													"Bolivia",														"bo", "BOL" ],
		[ y3a.b1r,  						  "BosniaHerzegovina",       				  "Bosnia & Herzegovina", 							"ba", "BIH" ], 
		[ y3a.s7r,  											  "Botswana",                      	  "Botswana",														"bw", "BWA" ],
		[ y3a.u4c,  									  "BouvetIsland",                 		"Bouvet",															"bv", "BVT" ],
		[ y3a.d5w,  												  "Brazil",                        	  "Brazil",															"br", "BRA" ],
		[ y3a.o6n,  	 	"BritishIndianOceanTerritory",			"British Indian Ocean Territory", 		"io", "IOT" ],
		[ y3a.e8m, 							 	"BruneiDarussalam",								  "Brunei",															"bn", "BRN" ], 
		[ y3a.i8a,  											  "Bulgaria",												  "Bulgaria", 													"bg", "BGR" ],
		[ y3a.s9g, 										  "BurkinaFaso",											"Burkina Faso",												"bf", "BFA" ],
		[ y3a.i7q,  											 	"Burundi",													"Burundi",														"bi", "BDI" ],
		[ y3a.z6u,  											  "Cambodia",												  "Cambodja",														"kh", "KHM" ],
		[ y3a.e8i,  											  "Cameroon",												  "Cameroon",														"cm", "CMR" ],
		[ y3a.g6b,  												  "Canada",													  "Canada",															"ca", "CAN" ],
		[ y3a.d0q,  										  "CapeVerde",												"Cape Verde",													"cv", "CPV" ], 
		[ y3a.r3s,  										  "Catalonia",												"Catalonia",													"x2", "XX2" ], 
		[ y3a.x7y,  								  "CaymanIslands",										"Cayman Islands",											"ky", "CYM" ],
		[ y3a.g5l,  				  "CentralAfricanRepublic",					  "Central African Republic",						"cf", "CAF" ],
		[ y3a.f7i,  													  "Chad",														  "Chad",																"td", "TCD" ],
		[ y3a.r6g,  												 	"Chile",														"Chile",															"cl", "CHL" ],
		[ y3a.p4i,  												 	"China",														"China",															"cn", "CHN" ],
		[ y3a.u8z,  							 	"ChristmasIsland",									"Christmas",													"cx", "CXR" ],
		[ y3a.h3e,  					 	"CocosKeelingIslands",							"Cocos (Keeling)",										"cc", "CCK" ], 
		[ y3a.d3f,  											  "Colombia",												  "Colombia",														"co", "COL" ],
		[ y3a.s2l,  											 	"Comoros",													"Comoros",														"km", "COM" ],
		[ y3a.m2s,  												 	"Congo",														"Congo-Brazzaville", 						    	"cg", "COG" ],
		[ y3a.u6l,  			 	"CongoDemocraticRepublic",					"Congo-Kinshasa(Zaire)",						  "cd", "COD" ],
		[ y3a.y5s,  									 	"CookIslands",											"Cook Islands",											 	"ck", "COK" ],
		[ y3a.q2n,  											"CostaRica",												"Costa Rica",												 	"cr", "CRI" ],
		[ y3a.f7t,  												"Croatia",													"Croatia",														"hr", "HRV" ],
		[ y3a.i9w,  													  "Cuba",														  "Cuba",															 	"cu", "CUB" ],
		[ y3a.g3w,  												"Curacao",													"Curacao",											  		"cw", "CUW" ],
		[ y3a.f7u,  												  "Cyprus",													  "Cyprus",														 	"cy", "CYP" ],
		[ y3a.l1n,  									      "Czechia",										      "Czech Republic", 										"cz", "CZE" ],
		[ y3a.h1m,  										  "CoteIvoire",	   					 				  "Cote d'Ivoire",											"ci", "CIV" ],
		[ y3a.u4x,  												"Denmark",													"Denmark",													  "dk", "DNK" ],
		[ y3a.i1o,  											  "Djibouti",												  "Djibouti",													 	"dj", "DJI" ],
		[ y3a.d2i,  											  "Dominica",												  "Dominica",													 	"dm", "DMA" ],
		[ y3a.t3c,  							"DominicanRepublic",								"Dominican Republic",								 	"do", "DOM" ],
		[ y3a.f3c,  												"Ecuador",													"Ecuador",													 	"ec", "ECU" ],
		[ y3a.l2e,  													"Egypt",														"Egypt", 														 	"eg", "EGY" ],
		[ y3a.p4y,  										  "ElSalvador",											  "El Salvador",												"sv", "SLV" ],
		[ y3a.t8e,  												"England",													"England",														"x3", "GBR" ],
		[ y3a.d8b,  							  "EquatorialGuinea",								  "Equatorial Guinea",									"gq", "GNQ" ], 
		[ y3a.z3o,  												"Eritrea",													"Eritrea",														"er", "ERI" ],
		[ y3a.i1w,  												"Estonia",													"Estonia",														"ee", "EST" ],
		[ y3a.m1r,  											  "Ethiopia",												  "Ethiopia",													 	"et", "ETH" ],
		[ y3a.x8c,  								"FalklandIslands",									"England",														"fk", "FLK" ], 
		[ y3a.r3c,  									  "FaroeIslands",										  "Faroes",														 	"fo", "FRO" ],
		[ y3a.g4v,  													  "Fiji",														  "Fiji",															 	"fj", "FJI" ],
		[ y3a.d9s,  												"Finland",													"Finland",														"fi", "FIN" ],
		[ y3a.z0b,  												  "France",													  "France",														 	"fr", "FRA" ],
		[ y3a.s9s,  									  "FrenchGuiana",										  "Guyana", 														"gf", "GUF" ], 
		[ y3a.e3b,  								"FrenchPolynesia",									"Tahiti(French Polinesia)", 					"pf", "PYF" ], 
		[ y3a.h8x,  			"FrenchSouthernTerritories",				"French Southern and Antarctic Lands","tf", "ATF" ],
		[ y3a.l3p,  													"Gabon",														"Gabon",															"ga", "GAB" ], 
		[ y3a.b3e,  												  "Gambia",													  "Gambia",															"gm", "GMB" ],
		[ y3a.c6q,  												"Georgia",													"Georgia",														"ge", "GEO" ],
		[ y3a.r4e,  												"Germany",													"Germany",														"de", "DEU" ],
		[ y3a.n1p, 													  "Ghana",														"Ghana",															"gh", "GHA" ],
		[ y3a.r9g,  											"Gibraltar",												"Gibraltar",													"gi", "GIB" ],
		[ y3a.e7m,  												  "Greece",													  "Greece",															"gr", "GRC" ],
		[ y3a.e4z,  											"Greenland",												"Greenland",													"gl", "GRL" ],
		[ y3a.m0q,  												"Grenada",													"Grenada",														"gd", "GRD" ],
		[ y3a.t9x,  										  "Guadeloupe",											  "Guadeloupe",													"gp", "GLP" ],
		[ y3a.t8f,  													  "Guam",														  "Guam",																"gu", "GUM" ],
		[ y3a.c3r,  											"Guatemala",												"Guatemala",													"gt", "GTM" ],
		[ y3a.n0h,  											  "Guernsey",												  "Guernsey",														"gg", "GGY" ], 
		[ y3a.r7x,  												  "Guinea",													  "Guinea",															"gn", "GIN" ],
		[ y3a.i4r,  									  "GuineaBissau",										  "Guinea-Bissau",											"gw", "GNB" ],
		[ y3a.l3g,  												  "Guyana",													  "Guyana",															"gy", "GUY" ],
		[ y3a.n8j,  													"Haiti",														"Haiti",															"ht", "HTI" ],
		[ y3a.s5y, 			"HeardIslandMcDonaldIslands", 			"Australia",   									  		"hm", "HMD" ],
		[ y3a.d0y,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ y3a.y8n,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ y3a.x4z,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ y3a.j1l,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ y3a.g7k,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ y3a.c8l,  												 	"India",														"India",															"in", "IND" ],
		[ y3a.l7i,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ y3a.u7w,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ y3a.g7z,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ y3a.s8c,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ y3a.o8s,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ y3a.l4a,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ y3a.i3u,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ y3a.k7f,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ y3a.y5n,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], 
		[ y3a.i6r,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ y3a.f0t,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ y3a.w0k,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ y3a.p3w,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ y3a.j5p,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ y3a.s1h,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ y3a.x6z,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], 
		[ y3a.m6a,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], 
		[ y3a.z2z,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ y3a.u5a,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ y3a.y2m,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ y3a.r4j,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ y3a.r6m, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ y3a.g8y,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ y3a.t4q, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ y3a.f6b,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ y3a.j8j,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ y3a.y8h,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ y3a.l6g,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ y3a.w1a,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ y3a.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ y3a.c6w,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ y3a.y0w,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ y3a.u2g,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ y3a.t5z,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ y3a.q1u,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ y3a.y1k, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ y3a.k3c,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ y3a.s6x,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ y3a.w1v,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ y3a.n0p,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ y3a.d6d,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ y3a.l8t,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ y3a.k9n,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ y3a.e0o,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ y3a.d0o,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ y3a.b2q,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ y3a.t7q,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ y3a.i8i,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ y3a.u3t,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ y3a.z8g,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ y3a.e4c,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ y3a.i5g, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ y3a.j6s,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ y3a.v6e,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ y3a.u7i,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ y3a.l7p,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ y3a.l1s, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ y3a.e8j,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ y3a.p7q,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ y3a.k1f,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ y3a.s6j,  													"Niger",														"Niger",															"ne", "NER" ],
		[ y3a.y4b,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ y3a.x4j,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ y3a.h8n,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ y3a.s7m,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], 
		[ y3a.j1u,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ y3a.a3h,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ y3a.r5p,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ y3a.a0e,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ y3a.r1h,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ y3a.m2f,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ y3a.b7v,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ y3a.z4a,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ y3a.g2j,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ y3a.q1h,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ y3a.o9p,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ y3a.q9p,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ y3a.z6q,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ y3a.t4s,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ y3a.q5d,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ y3a.e3a,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ y3a.p6y,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ y3a.k5c,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ y3a.h1i,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ y3a.v1e,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ y3a.c7t,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ y3a.v3m,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], 
		[ y3a.q6j,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], 
		[ y3a.n6m, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], 
		[ y3a.g8e,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ y3a.m5k,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], 
		[ y3a.c0d,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], 
		[ y3a.l6e,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ y3a.r7h,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ y3a.f2v,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ y3a.k3j,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ y3a.f0z,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ y3a.r2s,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ y3a.v0o,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ y3a.g9k,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ y3a.a8o,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ y3a.e7k,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ y3a.l5d,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ y3a.h8i,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ y3a.j2u,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ y3a.s5m,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ y3a.d5t,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ y3a.g0n,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ y3a.c2j, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ y3a.d7v,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ y3a.b1z,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ y3a.s1q, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ y3a.h0h,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ y3a.e3f,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ y3a.m2c,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], 
		[ y3a.c7o,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], 
		[ y3a.i9j,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ y3a.r7p,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ y3a.s4d,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ y3a.z5o,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ y3a.c5u,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ y3a.t1e,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ y3a.d3w,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ y3a.r9l, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ y3a.d7d,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], 
		[ y3a.w8m, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ y3a.c1o,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], 
		[ y3a.o3d,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ y3a.p9l,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ y3a.k4j,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ y3a.x0h,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ y3a.z1e,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ y3a.h9s,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ y3a.t1w,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ y3a.v1u,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ y3a.q3r,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ y3a.i9c,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ y3a.v9y,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], 
		[ y3a.d6s,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ y3a.h5f, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ y3a.f5k,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ y3a.z4y,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ y3a.e5s,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ y3a.t2z,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ y3a.l0b,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ y3a.b4j,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ y3a.v1b,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ y3a.k8h,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ y3a.v5j,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ y3a.i9i,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ y3a.r6d,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ y3a.y4a,  											 		"Zaire",														"",																		"zr", "ZRN" ], 
		[ y3a.m2r,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ y3a.h7z,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function r1m(h1a)
{
	return x8p[h1a][2];
}

function w9r(h1a)
{
	return x8p[h1a][4];
}

function w3p(r2g)
{
	for (const h1a of x8p)
	{
		if (h1a[4] == r2g)
		{
			return h1a[0];
		}
	}
	return y3a.i6p;
}

function d5c(s3a)
{
	for (const h1a of x8p)
	{
		if (h1a[3] == s3a)
		{
			return h1a[0];
		}
	}
	return y3a.i6p;
}
class k0d
{

constructor()
{
	this.m3t = '';
}

j5j(c7b)
{
	this.m3t += c7b;
}

l0w(c7b)
{
	this.m3t += c7b + '\n';
}

u9w()
{
	this.m3t += '\n';
}

}




function y0d(r2u, l6o)
{
	let value = Number(r2u);
	if (isNaN(value))
	{
		return l6o;
	}
	else
	{
		return value;
	}
}
