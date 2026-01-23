const	chess = true; 

const e0d =
{
	e5g    : 0,
	h8d  : 1,
	a6r  : 2,
	w7r    : 3,
  r9e   : 4,
	a3m    : 5,
	x4q    : 6,
	z0l  : 7,
	l5t  : 8,
	b9w    : 9,
	k2m   : 10,
	q8l    : 11,
	f3l        : 12,
};

const b1f =
{
	n6x        : 0,
	q5o        : 1,
};

const	a1 = 0;
const d2h = 1;
const w5x = 2;
const r9h = 3;
const n5p = 4;
const v1o = 5;
const p5u = 6;
const d3j = 7;
const	a2 = 8;
const h8b = 9;
const a3j = 10;
const v7k = 11;
const q9y = 12;
const g3p = 13;
const r2v = 14;
const i8x = 15;
const	a3 = 16;
const h0m = 17;
const d7n = 18;
const y0w = 19;
const m9n = 20;
const m7m = 21;
const k5s = 22;
const e5e = 23;
const	a4 = 24;
const z7n = 25;
const e6r = 26;
const h6y = 27;
const c1n = 28;
const g9d = 29;
const t5o = 30;
const r5b = 31;
const	a5 = 32;
const b7v = 33;
const p0z = 34;
const n3r = 35;
const u2t = 36;
const f9f = 37;
const n4c = 38;
const i7i = 39;
const	a6 = 40;
const u9j = 41;
const s8p = 42;
const l9d = 43;
const y0p = 44;
const k8o = 45;
const u3w = 46;
const o5d = 47;
const	a7 = 48;
const s9c = 49;
const u6v = 50;
const y0j = 51;
const b8f = 52;
const l7u = 53;
const e1p = 54;
const r7h = 55;
const	a8 = 56;
const t0q = 57;
const f0m = 58;
const b6d = 59;
const n0l = 60;
const p2y = 61;
const z5v = 62;
const s0z = 63;
const o0a = 64;

const k2e = 0;
const c9n = 1;
const e7c = 2;
const x7d = 3;
const p5a = 4;
const h6z = 5;
const x5v = 6;
const g9k = 7;
const p8y = 8;

const	rank_1 = 0;
const i2a = 1;
const v2p = 2;
const d1q = 3;
const f6d = 4;
const k6r = 5;
const p2n = 6;
const n2d = 7;
const x1h = 8;

const w0l        = 8;
const a5p       = 64;
const r1w      = 16;

const v4i =
[
	e0d.w7r,    
  e0d.h8d,  
  e0d.a6r,  
  e0d.r9e,   
  e0d.a3m,    
  e0d.a6r,  
  e0d.h8d,  
  e0d.w7r,    
	e0d.e5g,    
  e0d.e5g,    
  e0d.e5g,    
  e0d.e5g,    
  e0d.e5g,    
  e0d.e5g,    
  e0d.e5g,    
  e0d.e5g,    
	e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
	e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
	e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
	e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
	e0d.x4q,    
  e0d.x4q,    
  e0d.x4q,    
  e0d.x4q,    
  e0d.x4q,    
  e0d.x4q,    
  e0d.x4q,    
  e0d.x4q,    
	e0d.b9w,    
  e0d.z0l,  
  e0d.l5t,  
  e0d.k2m,   
  e0d.q8l,    
  e0d.l5t,  
  e0d.z0l,  
  e0d.b9w,    
];

const x9h =
[
	e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
	e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
	e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
	e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
	e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
	e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
	e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
	e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
  e0d.f3l,        
];

const f7t =
[
	a1, d2h, w5x, r9h, n5p, v1o, p5u, d3j,
	a2, h8b, a3j, v7k, q9y, g3p, r2v, i8x,
	a3, h0m, d7n, y0w, m9n, m7m, k5s, e5e,
	a4, z7n, e6r, h6y, c1n, g9d, t5o, r5b,
	a5, b7v, p0z, n3r, u2t, f9f, n4c, i7i,
	a6, u9j, s8p, l9d, y0p, k8o, u3w, o5d,
	a7, s9c, u6v, y0j, b8f, l7u, e1p, r7h,
	a8, t0q, f0m, b6d, n0l, p2y, z5v, s0z,
];

const x8v =
[
	k2e,
  c9n,
  e7c,
  x7d,
  p5a,
  h6z,
  x5v,
  g9k,
];

const h4e =
[
	rank_1,
  i2a,
  v2p,
  d1q,
  f6d,
  k6r,
  p2n,
  n2d,
];

function d9m(j3b)
{
	return j3b == e0d.x4q ||
		j3b == e0d.z0l ||
    j3b == e0d.l5t ||
    j3b == e0d.b9w ||
    j3b == e0d.k2m ||
    j3b == e0d.q8l;
}

function y2v(j3b)
{
	return j3b == e0d.e5g ||
		j3b == e0d.h8d ||
    j3b == e0d.a6r ||
    j3b == e0d.w7r ||
    j3b == e0d.r9e ||
    j3b == e0d.a3m;
}

function k4j(j3b)
{
	return j3b == e0d.e5g || j3b == e0d.x4q;
}

function p0t(j3b)
{
	return j3b == e0d.h8d || j3b == e0d.z0l;
}

function l1s(j3b)
{
	return j3b == e0d.a6r || j3b == e0d.l5t;
}

function l7k(j3b)
{
	return j3b == e0d.w7r || j3b == e0d.b9w;
}

function u7a(j3b)
{
	return j3b == e0d.r9e || j3b == e0d.k2m;
}

function v9d(j3b)
{
	return j3b == e0d.a3m || j3b == e0d.q8l;
}

function d8r(b1b)
{
	if (b1b == o0a)
	{
		return o0a;
	}
	else
	{
		return a5p - b1b - 1;
	}
}

const w3s =
[
	k2e, c9n, e7c, x7d, p5a, h6z, x5v, g9k,
	k2e, c9n, e7c, x7d, p5a, h6z, x5v, g9k,
	k2e, c9n, e7c, x7d, p5a, h6z, x5v, g9k,
	k2e, c9n, e7c, x7d, p5a, h6z, x5v, g9k,
	k2e, c9n, e7c, x7d, p5a, h6z, x5v, g9k,
	k2e, c9n, e7c, x7d, p5a, h6z, x5v, g9k,
	k2e, c9n, e7c, x7d, p5a, h6z, x5v, g9k,
	k2e, c9n, e7c, x7d, p5a, h6z, x5v, g9k,
];

function t5a(b1b)
{
	return w3s[b1b];
}

const g7v =
[
	rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1,
	i2a, i2a, i2a, i2a, i2a, i2a, i2a, i2a,
	v2p, v2p, v2p, v2p, v2p, v2p, v2p, v2p,
	d1q, d1q, d1q, d1q, d1q, d1q, d1q, d1q,
	f6d, f6d, f6d, f6d, f6d, f6d, f6d, f6d,
	k6r, k6r, k6r, k6r, k6r, k6r, k6r, k6r,
	p2n, p2n, p2n, p2n, p2n, p2n, p2n, p2n,
	n2d, n2d, n2d, n2d, n2d, n2d, n2d, n2d,
];

function p7m(b1b)
{
	return g7v[b1b];
}

function x1t(a, b)
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

function e6x(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function t3q(m0v, j3b)
{
	let b8e = 0;
	for (const value of m0v)
	{
		if (value == j3b)
		{
			b8e++;
		}
	}
	return b8e;
}

var stringToSquareMapInited = false;
const q2y = new Map();
function e2e()
{
  q2y.set("a1", a1);
  q2y.set("a2", a2);
  q2y.set("a3", a3);
  q2y.set("a4", a4);
  q2y.set("a5", a5);
  q2y.set("a6", a6);
  q2y.set("a7", a7);
  q2y.set("a8", a8);
  q2y.set("b1", d2h);
  q2y.set("b2", h8b);
  q2y.set("b3", h0m);
  q2y.set("b4", z7n);
  q2y.set("b5", b7v);
  q2y.set("b6", u9j);
  q2y.set("b7", s9c);
  q2y.set("b8", t0q);
  q2y.set("c1", w5x);
  q2y.set("c2", a3j);
  q2y.set("c3", d7n);
  q2y.set("c4", e6r);
  q2y.set("c5", p0z);
  q2y.set("c6", s8p);
  q2y.set("c7", u6v);
  q2y.set("c8", f0m);
  q2y.set("d1", r9h);
  q2y.set("d2", v7k);
  q2y.set("d3", y0w);
  q2y.set("d4", h6y);
  q2y.set("d5", n3r);
  q2y.set("d6", l9d);
  q2y.set("d7", y0j);
  q2y.set("d8", b6d);
  q2y.set("e1", n5p);
  q2y.set("e2", q9y);
  q2y.set("e3", m9n);
  q2y.set("e4", c1n);
  q2y.set("e5", u2t);
  q2y.set("e6", y0p);
  q2y.set("e7", b8f);
  q2y.set("e8", n0l);
  q2y.set("f1", v1o);
  q2y.set("f2", g3p);
  q2y.set("f3", m7m);
  q2y.set("f4", g9d);
  q2y.set("f5", f9f);
  q2y.set("f6", k8o);
  q2y.set("f7", l7u);
  q2y.set("f8", p2y);
  q2y.set("g1", p5u);
  q2y.set("g2", r2v);
  q2y.set("g3", k5s);
  q2y.set("g4", t5o);
  q2y.set("g5", n4c);
  q2y.set("g6", u3w);
  q2y.set("g7", e1p);
  q2y.set("g8", z5v);
  q2y.set("h1", d3j);
  q2y.set("h2", i8x);
  q2y.set("h3", e5e);
  q2y.set("h4", r5b);
  q2y.set("h5", i7i);
  q2y.set("h6", o5d);
  q2y.set("h7", r7h);
  q2y.set("h8", s0z);
}

function f9c(w9b)
{
  if (!stringToSquareMapInited)
  {
    e2e();
    stringToSquareMapInited = true;
  }
  if (q2y.has(w9b))
  {
    return q2y.get(w9b);
  }
  else
  {
		return o0a;
  }
}

function g8y(b1b)
{
  return i7z[b1b];
}

const u1x  = p5u;
const s6j  = v1o;
const e9y = w5x;
const s6r = r9h;
const t4a  = z5v;
const p2c  = p2y;
const v2d = f0m;
const n1h = b6d;

const i7z =
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

const p9i =
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

const r8c =
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




const j0a =
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

function b0w(b1b)
{
	return j0a[b1b];
}



















function v4b(v1x)
{
  if (v1x == '1')
  {
    return rank_1;
  }
  else if (v1x == '2')
  {
    return i2a;
  }
  else if (v1x == '3')
  {
    return v2p;
  }
  else if (v1x == '4')
  {
    return d1q;
  }
  else if (v1x == '5')
  {
    return f6d;
  }
  else if (v1x == '6')
  {
    return k6r;
  }
  else if (v1x == '7')
  {
    return p2n;
  }
  else if (v1x == '8')
  {
    return n2d;
  }
	else
	{
		return x1h;
	}
}

function c0k(v1x)
{
  if (v1x == 'a')
  {
    return k2e;
  }
  else if (v1x == 'b')
  {
    return c9n;
  }
  else if (v1x == 'c')
  {
    return e7c;
  }
  else if (v1x == 'd')
  {
    return x7d;
  }
  else if (v1x == 'e')
  {
    return p5a;
  }
  else if (v1x == 'f')
  {
    return h6z;
  }
  else if (v1x == 'g')
  {
    return x5v;
  }
  else if (v1x == 'h')
  {
    return g9k;
  }
  else
	{
		return p8y;
	}
}

function t8n(r0w)
{
  return r8c[r0w];
}

function i8j(f5d)
{
  return p9i[f5d];
}


class u3g
{

constructor()
{
	this.b0a = false;
	this.l9i = n5p;
	this.d1c = n0l;
	this.k7i = d3j;
	this.g9m = a1;
	this.t4k = s0z;
	this.v4w = a8;
	this.i0x = false;
	this.e8g = false;
	this.f2w = false;
	this.m2a = false;
	this.v9x = o0a;
}

v0z()
{
	let q1p = new u3g();
  return Object.assign(q1p, this);
}

}


class r7e
{

constructor()
{
  this.b4q = Array(a5p).fill(e0d.f3l);
 	this.t7j = b1f.n6x;
 	this.z2y = new u3g();
 	this.o6q();
}

v0z()
{
	let k6m = new r7e();
	e6x(k6m.b4q, this.b4q);
	k6m.t7j = this.t7j;
  k6m.z2y = this.z2y.v0z();
  k6m.whiteKing_ = this.whiteKing_;
	k6m.blackKing_ = this.blackKing_;
	return k6m;
}

e3t(z7g)
{
	return this.t7j == z7g.t7j &&
		x1t(this.b4q, z7g.b4q);
}

d8x(z7g)
{
	return !this.e3t(z7g);
}

u6z()
{
 	e6x(this.b4q, v4i);
 	this.t7j = b1f.n6x;
  this.z2y.b0a = false;
	this.z2y.l9i = n5p;
	this.z2y.d1c = n0l;
	this.z2y.k7i = d3j;
	this.z2y.g9m = a1;
	this.z2y.t4k = s0z;
	this.z2y.v4w = a8;
	this.z2y.v9x = o0a;
	this.z2y.i0x = true;
	this.z2y.e8g = true;
	this.z2y.f2w = true;
	this.z2y.m2a = true;
 	this.whiteKing_ = n5p;
	this.blackKing_ = n0l;
}

i2z()
{
	return this.t7j == b1f.n6x && this.q0c();
}

q0c()
{
	return x1t(this.b4q, v4i);
}

o6q()
{
	this.b4q.fill(e0d.f3l);
	this.t7j = b1f.n6x;
	this.z2y.b0a = false;
	this.z2y.l9i = n5p;
	this.z2y.d1c = n0l;
	this.z2y.k7i = d3j;
	this.z2y.g9m = a1;
	this.z2y.t4k = s0z;
	this.z2y.v4w = a8;
	this.z2y.v9x = o0a;
	this.z2y.i0x = false;
	this.z2y.e8g = false;
	this.z2y.f2w = false;
	this.z2y.m2a = false;
  this.whiteKing_ = o0a;
  this.blackKing_ = o0a;
}

f6r()
{
	return this.t7j == b1f.n6x && this.e3v();
}

e3v()
{
	return this.b4q.every(e0d.f3l);
}

m0v()
{
  return this.b4q.slice();
}

z9f(b1b)
{
	return this.b4q[b1b];
}

c8y(b1b, j3b)
{
	if (this.b4q[b1b] == e0d.a3m)
	{
		this.whiteKing_ = o0a;
	}
	else if (this.b4q[b1b] == e0d.q8l)
	{
		this.blackKing_ = o0a;
	}
	if (j3b == e0d.a3m)
	{
		this.whiteKing_ = b1b;
	}
	else if (j3b == e0d.q8l)
	{
		this.blackKing_ = b1b;
	}
	this.b4q[b1b] = j3b;
}

d4y()
{
	this.t7j = b1f.n6x;
}

z8m()
{
	this.t7j = b1f.q5o;
}

h6i()
{
	if (this.t7j == b1f.n6x)
	{
		this.t7j = b1f.q5o;
	}
	else
	{
		this.t7j = b1f.n6x;
	}
}

q8z()
{
	return this.t7j == b1f.n6x;
}

x4b()
{
	return this.t7j == b1f.q5o;
}

f2j(b1b)
{
	return this.b4q[b1b] == e0d.f3l;
}

y2v(b1b)
{
	let j3b = this.b4q[b1b];
	return j3b == e0d.e5g ||
		j3b == e0d.h8d ||
    j3b == e0d.a6r ||
    j3b == e0d.w7r ||
    j3b == e0d.r9e ||
    j3b == e0d.a3m;
}

d9m(b1b)
{
	let j3b = this.b4q[b1b];
	return j3b == e0d.x4q ||
		j3b == e0d.z0l ||
    j3b == e0d.l5t ||
    j3b == e0d.b9w ||
    j3b == e0d.k2m ||
    j3b == e0d.q8l;
}

d4v(b1b)
{
  let j3b = this.b4q[b1b];
	return j3b == e0d.e5g;
}

v0f(b1b)
{
  let j3b = this.b4q[b1b];
	return j3b == e0d.h8d;
}

t2a(b1b)
{
  let j3b = this.b4q[b1b];
	return j3b == e0d.a6r;
}

m4s(b1b)
{
  let j3b = this.b4q[b1b];
	return j3b == e0d.w7r;
}

h4t(b1b)
{
  let j3b = this.b4q[b1b];
	return j3b == e0d.r9e;
}

f7k(b1b)
{
  let j3b = this.b4q[b1b];
	return j3b == e0d.a3m;
}

v8f(b1b)
{
  let j3b = this.b4q[b1b];
	return j3b == e0d.x4q;
}

n8v(b1b)
{
  let j3b = this.b4q[b1b];
	return j3b == e0d.z0l;
}

u8s(b1b)
{
  let j3b = this.b4q[b1b];
	return j3b == e0d.l5t;
}

b4l(b1b)
{
  let j3b = this.b4q[b1b];
	return j3b == e0d.b9w;
}

v2r(b1b)
{
  let j3b = this.b4q[b1b];
	return j3b == e0d.k2m;
}

k9v(b1b)
{
  let j3b = this.b4q[b1b];
	return j3b == e0d.q8l;
}

d0u()
{
  let b8e = 0;
	for (const b1b of f7t)
	{
    if (this.y2v(b1b))
		{
			b8e++;
		}
	}
	return b8e;
}

y1z()
{
  let b8e = 0;
	for (const b1b of f7t)
	{
    if (this.d9m(b1b))
		{
			b8e++;
		}
	}
	return b8e;
}

o4n(a0b)
{
  this.z2y = a0b.v0z();
}

a0b()
{
  return this.z2y.v0z();
}

v1s(u7k)
{
 	this.z2y.v9x = o0a; 
	if (u7k.u7z())
	{
		this.h6i();
		return;
	}
	if (u7k.y2v())
	{
		if (u7k.o9a())
		{
			this.b4q[u7k.l5b] = e0d.f3l;
			if (u7k.e9k == e0d.b9w)
			{
				if (u7k.l5b == this.z2y.v4w)
				{
					this.z2y.m2a = false;
				}
				else if (u7k.l5b == this.z2y.t4k)
				{
					this.z2y.f2w = false;
				}
			}
		}
		this.b4q[u7k.o3y] = e0d.f3l;
		this.b4q[u7k.y9w] = u7k.d9u;
		if (u7k.e8d == e0d.e5g)
		{
			if ((u7k.y9w - u7k.o3y) == 16)
			{
				this.z2y.v9x = (u7k.o3y + 8);
			}
		}
		else if (u7k.e8d == e0d.w7r)
		{
			if (u7k.o3y == this.z2y.g9m)
			{
				this.z2y.e8g = false;
			}
			else if (u7k.o3y == this.z2y.k7i)
			{
				this.z2y.i0x = false;
			}
		}
		else if (u7k.e8d == e0d.a3m)
		{
			if (u7k.l1z())
			{
				if (u7k.y9w == e9y)
				{
					
					if (this.z2y.g9m != u7k.y9w)
					{
						this.b4q[this.z2y.g9m] = e0d.f3l;
					}
					this.b4q[s6r] = e0d.w7r;
				}
				else if (u7k.y9w == u1x)
				{
					
					if (this.z2y.k7i != u7k.y9w)
					{
						this.b4q[this.z2y.k7i] = e0d.f3l;
					}
					this.b4q[s6j] = e0d.w7r;
				}
			}
			this.z2y.e8g = false;
			this.z2y.i0x = false;
			this.whiteKing_ = u7k.y9w;
		}
	}
	else
	{
		if (u7k.o9a())
		{
			this.b4q[u7k.l5b] = e0d.f3l;
			if (u7k.e9k == e0d.w7r)
			{
				if (u7k.l5b == this.z2y.g9m)
				{
					this.z2y.e8g = false;
				}
				else if (u7k.l5b == this.z2y.k7i)
				{
					this.z2y.i0x = false;
				}
			}
		}
		this.b4q[u7k.o3y] = e0d.f3l;
		this.b4q[u7k.y9w] = u7k.d9u;
		if (u7k.e8d == e0d.x4q)
		{
			if ((u7k.y9w - u7k.o3y) == -16)
			{
				this.z2y.v9x = (u7k.o3y - 8);
			}
		}
		else if (u7k.e8d == e0d.b9w)
		{
			if (u7k.o3y == this.z2y.v4w)
			{
				this.z2y.m2a = false;
			}
			else if (u7k.o3y == this.z2y.t4k)
			{
				this.z2y.f2w = false;
			}
		}
		else if (u7k.e8d == e0d.q8l)
		{
			if (u7k.l1z())
			{
				if (u7k.y9w == v2d)
				{
					
					if (this.z2y.v4w != u7k.y9w)
					{
						this.b4q[this.z2y.v4w] = e0d.f3l;
					}
					this.b4q[n1h] = e0d.b9w;
				}
				else if (u7k.y9w == t4a)
				{
					
					if (this.z2y.t4k != u7k.y9w)
					{
						this.b4q[this.z2y.t4k] = e0d.f3l;
					}
					this.b4q[p2c] = e0d.b9w;
				}
			}
			this.z2y.m2a = false;
			this.z2y.f2w = false;
			this.blackKing_ = u7k.y9w;
		}
	}
	this.h6i();
}

v3v(u7k)
{
 	if (u7k.u7z())
	{
		this.h6i();
		return;
	}
	if (u7k.y2v())
	{
		this.b4q[u7k.y9w] = e0d.f3l;
		this.b4q[u7k.o3y] = u7k.e8d;
		if (u7k.e8d == e0d.a3m)
		{
			if (u7k.l1z())
			{
				if (u7k.y9w == e9y)
				{
					
					if (s6r != u7k.o3y)
					{
						this.b4q[s6r] = e0d.f3l;
					}
					this.b4q[this.z2y.g9m] = e0d.w7r;
				}
				else if (u7k.y9w == u1x)
				{
					
					if (s6j != u7k.o3y)
					{
						this.b4q[s6j] = e0d.f3l;
					}
					this.b4q[this.z2y.k7i] = e0d.w7r;
				}
			}
			this.whiteKing_ = u7k.o3y;
		}
		if (u7k.o9a())
		{
			this.b4q[u7k.l5b] = u7k.e9k;
		}
	}
	else
	{
		this.b4q[u7k.y9w] = e0d.f3l;
		this.b4q[u7k.o3y] = u7k.e8d;
		if (u7k.e8d == e0d.q8l)
		{
			if (u7k.l1z())
			{
				if (u7k.y9w == v2d)
				{
					
					if (n1h != u7k.o3y)
					{
						this.b4q[n1h] = e0d.f3l;
					}
					this.b4q[this.z2y.v4w] = e0d.b9w;
				}
				else if (u7k.y9w == t4a)
				{
					
					if (p2c != u7k.o3y)
					{
						this.b4q[p2c] = e0d.f3l;
					}
					this.b4q[this.z2y.t4k] = e0d.b9w;
				}
			}
			this.blackKing_ = u7k.o3y;
		}
		if (u7k.o9a())
		{
			this.b4q[u7k.l5b] = u7k.e9k;
		}
	}
	this.h6i();
}

a3m()
{
  return this.whiteKing_;
}

q8l()
{
  return this.blackKing_;
}

w7q()
{
	return this.z2y.i0x;
}

h4s()
{
	return this.z2y.e8g;
}

g3r()
{
	return this.z2y.f2w;
}

o9s()
{
	return this.z2y.m2a;
}

l9i()
{
  return this.z2y.l9i;
}

d1c()
{
  return this.z2y.d1c;
}

k7i()
{
  return this.z2y.k7i;
}

g9m()
{
  return this.z2y.g9m;
}

t4k()
{
  return this.z2y.t4k;
}

v4w()
{
  return this.z2y.v4w;
}

v9x()
{
  return this.z2y.v9x;
}

d0w()
{
	return this.z2y.b0a;
}

}
const r0n = 0;
const e0l   = 1;
const h3v  = r0n;

function o5q()
{
  let d0d = [];
	d0d.push("CBurnettt (Lichess)");
	d0d.push("Merida (Lichess)");
	return d0d;
}

class q5r
{

constructor()
{
	this.w9c = new w9g();
	this.e1n = null;
}

v0z()
{
	let x1p = new q5r();
	x1p.w9c = this.w9c.v0z();
	x1p.e1n = null;
	if (this.e1n)
	{
		x1p.e1n = this.e1n.v0z();
	}
	return x1p;
}

e3t(z7g)
{
	if (this.w9c.d8x(z7g))
	{
		return false;
	}
	return true;
}

d8x(z7g)
{
	return !this.e3t(z7g);
}

f3l()
{
	return this.w9c.f3l();
}

o3y()
{
	return this.w9c.o3y;
}

y9w()
{
	return this.w9c.y9w;
}

e8d()
{
	return this.w9c.e8d;
}

d9u()
{
	return this.w9c.d9u;
}

l5b()
{
	return this.w9c.l5b;
}

e9k()
{
	return this.w9c.e9k;
}

j6i()
{
	return this.w9c.j6i();
}

y2v()
{
	return this.w9c.y2v();
}

d9m()
{
	return this.w9c.d9m();
}

c8c()
{
	return this.w9c.c8c();
}

u7z()
{
	return this.w9c.u7z();
}

o9a()
{
	return this.w9c.o9a();
}

u7y()
{
	if (this.e1n == null)
	{
		this.e1n = new p3u();
	}
}

l2i()
{
	if (this.e1n)
	{
		if (this.e1n.f3l())
		{
			this.x3k();
		}
	}
}

n3s()
{
	return this.e1n != null;
}

x3k()
{
	this.e1n = null;
}

u0z(w8l)
{
	this.u7y();
	this.e1n = w8l.v0z();
}

q7i()
{
	return this.e1n;
}

b3h(z7g)
{
	if (this.e1n && !z7g.e1n)
	{
		return false;
	}
	if (!this.e1n && z7g.e1n)
	{
		return false;
	}
	if (!this.e1n && !z7g.e1n)
	{
		return true;
	}
	return this.e1n.e3t(z7g.e1n);
}

a9q()
{
	if (this.e1n)
	{
		this.e1n.p3y = '';
		this.l2i();
	}
}

n2k()
{
	if (this.e1n)
	{
		return this.e1n.p3y.length != 0;
	}
	else
	{
		return false;
	}
}

p3y()
{
	if (this.e1n)
	{
		return this.e1n.p3y;
	}
	else
	{
		return '';
	}
}

f2z(h5k)
{
	this.u7y();
	this.e1n.p3y = h5k;
	this.l2i();
}

w6i()
{
	if (this.e1n)
	{
		this.e1n.z6s = '';
		this.l2i();
	}
}

m7p()
{
	if (this.e1n)
	{
		return this.e1n.z6s.length != 0;
	}
	else
	{
		return false;
	}
}

z6s()
{
	if (this.e1n)
	{
		return this.e1n.z6s;
	}
	else
	{
		return '';
	}
}

p0y(h5k)
{
	this.u7y();
	this.e1n.z6s = h5k;
	this.l2i();
}

t6j()
{
	if (this.e1n)
	{
		this.e1n.i1q = s2m.h4o;
		this.l2i();
	}
}

b6n()
{
	if (this.e1n)
	{
		return this.e1n.i1q != s2m.h4o;
	}
	else
	{
		return false;
	}
}

i1q()
{
	if (this.e1n)
	{
		return this.e1n.i1q;
	}
	else
	{
		return s2m.h4o;
	}
}

x9n(i1q)
{
	this.u7y();
	this.e1n.i1q = i1q;
	this.l2i();
}

b7i()
{
	if (this.e1n)
	{
		this.e1n.style = o3q.h4o;
		this.l2i();
	}
}

i9e()
{
	if (this.e1n)
	{
		return this.e1n.style != o3q.h4o;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.e1n)
	{
		return this.e1n.style;
	}
	else
	{
		return o3q.h4o;
	}
}

u2q(style)
{
	this.u7y();
	this.e1n.style = style;
	this.l2i();
}

x4f()
{
	if (this.e1n)
	{
		this.e1n.value = h1r.h4o;
		this.l2i();
	}
}

o7w()
{
	if (this.e1n)
	{
		return this.e1n.value != h1r.h4o;
	}
	else
	{
		return false;
	}
}

value()
{
	if (this.e1n)
	{
		return this.e1n.value;
	}
	else
	{
		return h1r.h4o;
	}
}

x6r(value)
{
	this.u7y();
	this.e1n.value = value;
	this.l2i();
}

v6i()
{
	if (this.e1n)
	{
		this.e1n.n3f = u9e.h4o;
		this.l2i();
	}
}

o0p()
{
	if (this.e1n)
	{
		return this.e1n.n3f != u9e.h4o;
	}
	else
	{
		return false;
	}
}

n3f()
{
	if (this.e1n)
	{
		return this.e1n.n3f;
	}
	else
	{
		return u9e.h4o;
	}
}

k3f(n3f)
{
	this.u7y();
	this.e1n.n3f = n3f;
	this.l2i();
}

t5x()
{
  
}

j2p()
{
	if (this.e1n)
	{
 		if (this.e1n.p3y.length != 0)
    {
      let l3h = this.e1n.p3y.indexOf("[#]");
      return l3h != -1;
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

n1y()
{
  
}

r9y()
{
	if (this.e1n)
	{
		this.e1n.m6m = false;
		this.l2i();
	}
}

a8c()
{
	if (this.e1n)
	{
		return this.e1n.m6m;
	}
	else
	{
		return false;
	}
}

l0m()
{
	this.u7y();
	this.e1n.m6m = true;
	this.l2i();
}

l0w()
{
	if (this.e1n)
	{
		this.e1n.x4p = false;
		this.l2i();
	}
}

y3u()
{
	if (this.e1n)
	{
		return this.e1n.x4p;
	}
	else
	{
		return false;
	}
}

q2q()
{
	this.u7y();
	this.e1n.x4p = true;
	this.l2i();
}

j9p()
{
	if (this.e1n)
	{
		this.e1n.r1m.a1t();
		this.e1n.n6e.a1t();
		this.l2i();
	}
}

w9i()
{
	if (this.e1n)
	{
		return this.i3g() || this.v7j();
	}
	else
	{
		return false;
	}
}

u0b()
{
	if (this.e1n)
	{
		this.e1n.r1m.a1t();
		this.l2i();
	}
}

i3g()
{
	if (this.e1n)
	{
		return !this.e1n.r1m.f3l();
	}
	else
	{
		return false;
	}
}

r1m()
{
	if (this.e1n)
	{
		return this.e1n.r1m.v0z();
	}
	else
	{
		return new b2p();
	}
}

j6x(r1m)
{
	this.u7y();
	this.e1n.r1m = r1m.v0z();
	this.l2i();
}

z1p()
{
	if (this.e1n)
	{
		this.e1n.n6e.a1t();
		this.l2i();
	}
}

v7j()
{
	if (this.e1n)
	{
		return !this.e1n.n6e.f3l();
	}
	else
	{
		return false;
	}
}

n6e()
{
	if (this.e1n)
	{
		return this.e1n.n6e.v0z();
	}
	else
	{
		return new g8o();
	}
}

x5l(n6e)
{
	this.u7y();
	this.e1n.n6e = n6e.v0z();
	this.l2i();
}

a7r()
{
	if (this.e1n)
	{
		this.e1n.c6x.h7n();
		this.l2i();
	}
}

z2s()
{
	if (this.e1n)
	{
		return this.e1n.c6x.i4l();
	}
	else
	{
		return false;
	}
}

c6x()
{
	if (this.e1n)
	{
		return this.e1n.c6x.v0z();
	}
	else
	{
		return new k2b();
	}
}

p5o(c6x)
{
	this.u7y();
	this.e1n.c6x = c6x.v0z();
	this.l2i();
}

q9u(l3n)
{
	this.w9c = l3n.v0z();
	this.e1n = null;
}

l3n()
{
	let m0b = new w9g();
  return Object.assign(m0b, this.w9c);
}

}

function k8a(l3n)
{
  let d8w = new q5r();
  d8w.q9u(l3n);
  return d8w;
}
class w9g
{

constructor()
{
	this.o3y = o0a;
	this.e8d = e0d.f3l;
	this.y9w = o0a;
	this.d9u = e0d.f3l;
	this.l5b = o0a;
	this.s1r = e0d.f3l;
	this.type = u4t.h4o;
}

v0z()
{
	let m0b = new w9g();
	m0b.o3y = this.o3y;
	m0b.e8d = this.e8d;
	m0b.y9w = this.y9w;
	m0b.d9u = this.d9u;
	m0b.l5b = this.l5b;
	m0b.e9k = this.e9k;
	m0b.type = this.type;
	return m0b;
}

e3t(z7g)
{
	if (
		this.o3y != z7g.o3y ||
		this.e8d != z7g.e8d ||
		this.y9w != z7g.y9w ||
		this.d9u != z7g.d9u ||
		this.l5b != z7g.l5b ||
		this.e9k != z7g.e9k ||
    this.type != z7g.type)
	{
		return false;
	}
	else
	{
		return true;
	}
}

d8x(z7g)
{
	return !this.e3t(z7g);
}

f3l()
{
	return this.type == u4t.h4o;
}

y2v()
{
	return this.e8d == e0d.e5g ||
		this.e8d == e0d.h8d ||
    this.e8d == e0d.a6r ||
    this.e8d == e0d.w7r ||
    this.e8d == e0d.r9e ||
    this.e8d == e0d.a3m;
}

d9m()
{
	return this.e8d == e0d.x4q ||
		this.e8d == e0d.z0l ||
    this.e8d == e0d.l5t ||
    this.e8d == e0d.b9w ||
    this.e8d == e0d.k2m ||
    this.e8d == e0d.q8l;
}

o9a()
{
	return this.l5b != o0a;
}

c8c()
{
	return this.e8d != this.d9u;
}

v8m()
{
  return this.type == u4t.k0z;
}

u7z()
{
	return this.type == u4t.h4o;
}

l1z()
{
	return this.type == u4t.x3h;
}

j6i()
{
	if (this.o9a())
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

function a5x(m0v, l3n)
{
	if (l3n.type == u4t.m8q)
	{
		m0v[l3n.y9w] = m0v[l3n.o3y];
		m0v[l3n.o3y] = e0d.f3l;
	}
	else if (l3n.type == u4t.k0z)
	{
		let l5b = (l3n.y9w - 8);
		m0v[l5b] = e0d.f3l;
		m0v[l3n.y9w] = e0d.e5g;
		m0v[l3n.o3y] = e0d.f3l;
	}
	else if (l3n.type == u4t.p8i)
	{
		m0v[l3n.y9w] = e0d.r9e;
		m0v[l3n.o3y] = e0d.f3l;
	}
	else if (l3n.type == u4t.d2j)
	{
		m0v[l3n.y9w] = e0d.w7r;
		m0v[l3n.o3y] = e0d.f3l;
	}
	else if (l3n.type == u4t.m4h)
	{
		m0v[l3n.y9w] = e0d.a6r;
		m0v[l3n.o3y] = e0d.f3l;
	}
	else if (l3n.type == u4t.g9x)
	{
		m0v[l3n.y9w] = e0d.h8d;
		m0v[l3n.o3y] = e0d.f3l;
	}
}

function h8j(m0v, l3n)
{
	if (l3n.type == u4t.m8q)
	{
		m0v[l3n.y9w] = m0v[l3n.o3y];
		m0v[l3n.o3y] = e0d.f3l;
	}
	else if (l3n.type == u4t.k0z)
	{
		let l5b = (l3n.y9w + 8);
		m0v[l5b] = e0d.f3l;
		m0v[l3n.y9w] = e0d.x4q;
		m0v[l3n.o3y] = e0d.f3l;
	}
	else if (l3n.type == u4t.p8i)
	{
		m0v[l3n.y9w] = e0d.k2m;
		m0v[l3n.o3y] = e0d.f3l;
	}
	else if (l3n.type == u4t.d2j)
	{
		m0v[l3n.y9w] = e0d.b9w;
		m0v[l3n.o3y] = e0d.f3l;
	}
	else if (l3n.type == u4t.m4h)
	{
		m0v[l3n.y9w] = e0d.l5t;
		m0v[l3n.o3y] = e0d.f3l;
	}
	else if (l3n.type == u4t.g9x)
	{
		m0v[l3n.y9w] = e0d.z0l;
		m0v[l3n.o3y] = e0d.f3l;
	}
}

function f5b(m0v, l3n)
{
	if (l3n.y9w == e9y)
	{
		m0v[l3n.y9w] = e0d.a3m;
		m0v[l3n.o3y] = e0d.f3l;
		m0v[a1] = e0d.f3l; 
		m0v[s6r] = e0d.w7r;
	}
	else
	{
		m0v[l3n.y9w] = e0d.a3m;
		m0v[l3n.o3y] = e0d.f3l;
		m0v[d3j] = e0d.f3l; 
		m0v[s6j] = e0d.w7r;
	}
}

function h6s(m0v, l3n)
{
	if (l3n.y9w == v2d)
	{
		m0v[l3n.y9w] = e0d.q8l;
		m0v[l3n.o3y] = e0d.f3l;
		m0v[a8] = e0d.f3l; 
		m0v[n1h] = e0d.b9w;
	}
	else
	{
		m0v[l3n.y9w] = e0d.q8l;
		m0v[l3n.o3y] = e0d.f3l;
		m0v[s0z] = e0d.f3l; 
		m0v[p2c] = e0d.b9w;
	}
}

function v2j(m0v, l3n, a0b)
{
	if (l3n.y9w == e9y)
	{
		m0v[l3n.y9w] = e0d.a3m;
		m0v[l3n.o3y] = e0d.f3l;
		if (a0b.g9m != l3n.y9w)
		{
			m0v[a0b.g9m] = e0d.f3l;
		}
		m0v[s6r] = e0d.w7r;
	}
	else if (l3n.y9w == u1x)
	{
		m0v[l3n.y9w] = e0d.a3m;
		m0v[l3n.o3y] = e0d.f3l;
		if (a0b.k7i != l3n.y9w)
		{
			m0v[a0b.k7i] = e0d.f3l;
		}
		m0v[s6j] = e0d.w7r;
	}
}

function m6k(m0v, l3n, a0b)
{
	if (l3n.y9w == v2d)
	{
		m0v[l3n.y9w] = e0d.q8l;
		m0v[l3n.o3y] = e0d.f3l;
		if (a0b.v4w != l3n.y9w)
		{
			m0v[a0b.v4w] = e0d.f3l;
		}
		m0v[n1h] = e0d.b9w;
	}
	else if (l3n.y9w == t4a)
	{
		m0v[l3n.y9w] = e0d.q8l;
		m0v[l3n.o3y] = e0d.f3l;
		if (a0b.t4k != l3n.y9w)
		{
			m0v[a0b.t4k] = e0d.f3l;
		}
		m0v[p2c] = e0d.b9w;
	}
}

function i1a(g0t, l3n)
{
	let z8v = g0t.a3m();
	if (z8v == o0a) return true;
	if (l3n.e8d == e0d.a3m)
	{
		z8v = l3n.y9w;
	}
	let m0v = g0t.m0v();
	if (l3n.type == u4t.x3h)
	{
		if (g0t.d0w())
		{
			v2j(m0v, l3n, g0t.a0b());
		}
		else
		{
			f5b(m0v, l3n);
		}
	}
	else
	{
		a5x(m0v, l3n);
	}
	return !s7q(m0v, z8v);
}

function h5f(g0t, l3n)
{
	let z8v = g0t.q8l();
	if (z8v == o0a) return true;
	if (l3n.e8d == e0d.q8l)
	{
		z8v = l3n.y9w;
	}
	let m0v = g0t.m0v();
	if (l3n.type == u4t.x3h)
	{
		if (g0t.d0w())
		{
			m6k(m0v, l3n, g0t.a0b());
		}
		else
		{
			h6s(m0v, l3n);
		}
	}
	else
	{
		h8j(m0v, l3n);
	}
	return !d7p(m0v, z8v);
}

function i4o(x5y, g0t, o3y)
{
	if (p7m(o3y) == n2d)
	{
		return;
	}
	m1n(x5y, g0t, o3y);
	let y9w = northWestSquare[o3y];
	if (y9w != o0a)
	{
		s2x(x5y, g0t, o3y, y9w);
	}
	y9w = northEastSquare[o3y];
	if (y9w != o0a)
	{
		s2x(x5y, g0t, o3y, y9w);
	}
}

function o6o(x5y, g0t, o3y)
{
	if (p7m(o3y) == rank_1)
	{
		return;
	}
	n0f(x5y, g0t, o3y);
	let y9w = southEastSquare[o3y];
	if (y9w != o0a)
	{
		g6v(x5y, g0t, o3y, y9w);
	}
	y9w = southWestSquare[o3y];
	if (y9w != o0a)
	{
		g6v(x5y, g0t, o3y, y9w);
	}
}

function m1n(x5y, g0t, o3y)
{
	let y9w = (o3y + v4z);
	if (g0t.f2j(y9w))
	{
		if (p7m(o3y) == p2n)
		{
			f0g(x5y, g0t, o3y, y9w);
		}
		else
		{
			h8t(x5y, g0t, o3y, y9w, u4t.m8q);
			if (p7m(o3y) == i2a)
			{
				let y9w = (o3y + v4z + v4z);
				if (g0t.f2j(y9w))
				{
					h8t(x5y, g0t, o3y, y9w, u4t.m8q);
				}
			}
		}
	}
}

function n0f(x5y, g0t, o3y)
{
	let y9w = (o3y + h6t);
	if (g0t.f2j(y9w))
	{
		if (p7m(o3y) == i2a)
		{
			f8z(x5y, g0t, o3y, y9w);
		}
		else
		{
			h8t(x5y, g0t, o3y, y9w, u4t.m8q);
			if (p7m(o3y) == p2n)
			{
				let y9w = (o3y + h6t + h6t);
				if (g0t.f2j(y9w))
				{
					h8t(x5y, g0t, o3y, y9w, u4t.m8q);
				}
			}
		}
	}
}

function s2x(x5y, g0t, o3y, y9w)
{
	if (!g0t.d9m(y9w))
	{
		return;
	}
	if (p7m(o3y) == p2n)
	{
		l0d(x5y, g0t, o3y, y9w);
	}
	else
	{
		n1l(x5y, g0t, o3y, y9w, u4t.m8q);
	}
}

function g6v(x5y, g0t, o3y, y9w)
{
	if (!g0t.y2v(y9w))
	{
		return;
	}
	if (p7m(o3y) == i2a)
	{
		p5v(x5y, g0t, o3y, y9w);
	}
	else
	{
		n1l(x5y, g0t, o3y, y9w, u4t.m8q);
	}
}

function s4x(x5y, g0t, o3y, p8s)
{
	for (const y9w of p8s)
	{
		if (g0t.f2j(y9w))
		{
			h8t(x5y, g0t, o3y, y9w, u4t.m8q);
		}
		else if (g0t.d9m(y9w))
		{
			n1l(x5y, g0t, o3y, y9w, u4t.m8q);
		}
	}
}

function p7e(x5y, g0t, o3y, p8s)
{
	for (const y9w of p8s)
	{
		if (g0t.f2j(y9w))
		{
			h8t(x5y, g0t, o3y, y9w, u4t.m8q);
		}
		else if (g0t.y2v(y9w))
		{
			n1l(x5y, g0t, o3y, y9w, u4t.m8q);
		}
	}
}

function s8z(x5y, g0t, o3y)
{
	s4x(x5y, g0t, o3y, knightSquares[o3y]);
}

function l6q(x5y, g0t, o3y)
{
	p7e(x5y, g0t, o3y, knightSquares[o3y]);
}

function h1z(x5y, g0t, o3y)
{
	s1p(x5y, g0t, o3y, northEastSquares[o3y]);
	s1p(x5y, g0t, o3y, southEastSquares[o3y]);
	s1p(x5y, g0t, o3y, southWestSquares[o3y]);
	s1p(x5y, g0t, o3y, northWestSquares[o3y]);
}

function s0j(x5y, g0t, o3y)
{
	l5x(x5y, g0t, o3y, northEastSquares[o3y]);
	l5x(x5y, g0t, o3y, southEastSquares[o3y]);
	l5x(x5y, g0t, o3y, southWestSquares[o3y]);
	l5x(x5y, g0t, o3y, northWestSquares[o3y]);
}

function d2m(x5y, g0t, o3y)
{
	s1p(x5y, g0t, o3y, northSquares[o3y]);
	s1p(x5y, g0t, o3y, eastSquares[o3y]);
	s1p(x5y, g0t, o3y, southSquares[o3y]);
	s1p(x5y, g0t, o3y, westSquares[o3y]);
}

function r8x(x5y, g0t, o3y)
{
	l5x(x5y, g0t, o3y, northSquares[o3y]);
	l5x(x5y, g0t, o3y, eastSquares[o3y]);
	l5x(x5y, g0t, o3y, southSquares[o3y]);
	l5x(x5y, g0t, o3y, westSquares[o3y]);
}

function v5z(x5y, g0t, o3y)
{
	s1p(x5y, g0t, o3y, northSquares[o3y]);
	s1p(x5y, g0t, o3y, northEastSquares[o3y]);
	s1p(x5y, g0t, o3y, eastSquares[o3y]);
	s1p(x5y, g0t, o3y, southEastSquares[o3y]);
	s1p(x5y, g0t, o3y, southSquares[o3y]);
	s1p(x5y, g0t, o3y, southWestSquares[o3y]);
	s1p(x5y, g0t, o3y, westSquares[o3y]);
	s1p(x5y, g0t, o3y, northWestSquares[o3y]);
}

function r3w(x5y, g0t, o3y)
{
	l5x(x5y, g0t, o3y, northSquares[o3y]);
	l5x(x5y, g0t, o3y, northEastSquares[o3y]);
	l5x(x5y, g0t, o3y, eastSquares[o3y]);
	l5x(x5y, g0t, o3y, southEastSquares[o3y]);
	l5x(x5y, g0t, o3y, southSquares[o3y]);
	l5x(x5y, g0t, o3y, southWestSquares[o3y]);
	l5x(x5y, g0t, o3y, westSquares[o3y]);
	l5x(x5y, g0t, o3y, northWestSquares[o3y]);
}

function s4f(x5y, g0t, o3y)
{
	l6k(x5y, g0t, o3y, kingSquares[o3y]);
}

function t7w(x5y, g0t, o3y)
{
	c0j(x5y, g0t, o3y, kingSquares[o3y]);
}

function s1p(x5y, g0t, o3y, p8s)
{
	for (const y9w of p8s)
	{
		if (g0t.f2j(y9w))
		{
			h8t(x5y, g0t, o3y, y9w, u4t.m8q);
		}
		else if (g0t.y2v(y9w))
		{
			break;
		}
		else
		{
			n1l(x5y, g0t, o3y, y9w, u4t.m8q);
			break;
		}
	}
}

function l5x(x5y, g0t, o3y, p8s)
{
	for (const y9w of p8s)
	{
		if (g0t.f2j(y9w))
		{
			h8t(x5y, g0t, o3y, y9w, u4t.m8q);
		}
		else if (g0t.d9m(y9w))
		{
			break;
		}
		else
		{
			n1l(x5y, g0t, o3y, y9w, u4t.m8q);
			break;
		}
	}
}

function l6k(x5y, g0t, o3y, p8s)
{
	for (const y9w of p8s)
	{
		if (g0t.f2j(y9w))
		{
			h8t(x5y, g0t, o3y, y9w, u4t.m8q);
		}
		else if (g0t.d9m(y9w))
		{
			n1l(x5y, g0t, o3y, y9w, u4t.m8q);
		}
	}
}

function c0j(x5y, g0t, o3y, p8s)
{
	for (const y9w of p8s)
	{
		if (g0t.f2j(y9w))
		{
			h8t(x5y, g0t, o3y, y9w, u4t.m8q);
		}
		else if (g0t.y2v(y9w))
		{
			n1l(x5y, g0t, o3y, y9w, u4t.m8q);
		}
	}
}

function d2o(left, f3g)
{
	let y4a = [];
	if (left > f3g)
	{
    let x5n = left;
    left = f3g;
    f3g = x5n;
	}
	for (let i = left + 1; i < f3g; i++)
	{
		y4a.push(i);
	}
	return y4a;
}

function u1b(x5y, g0t)
{
	if (!g0t.f7k(g0t.l9i()))
	{
		return;
	}
	if (!g0t.m4s(g0t.g9m()))
	{
		return;
	}
	let f1v = d2o(g0t.g9m(), s6r);
  for (const b1b of f1v)
	{
		if (b1b != g0t.l9i())
		{
			if (!g0t.f2j(b1b))
			{
				return;
			}
		}
	}
	let u1z = d2o(g0t.l9i(), e9y);
  for (const b1b of u1z)
	{
		if (b1b != g0t.g9m())
		{
			if (!g0t.f2j(b1b))
			{
				return;
			}
		}
	}
  for (const b1b of u1z)
	{
		if (c2n(g0t, b1b))
		{
			return;
		}
	}
	if (c2n(g0t, g0t.l9i()))
	{
		return;
	}
	if (g0t.l9i() != e9y)
	{
		if (!g0t.f2j(e9y))
		{
			if (e9y != g0t.g9m())
			{
				return;
			}
		}
	}
	if (g0t.g9m() != s6r)
	{
		if (!g0t.f2j(s6r))
		{
			if (s6r != g0t.l9i())
			{
				return;
			}
		}
	}
	h8t(x5y, g0t, g0t.l9i(), e9y, u4t.x3h);
}

function t0j(x5y, g0t)
{
	if (!g0t.f7k(g0t.l9i()))
	{
		return;
	}
	if (!g0t.m4s(g0t.k7i()))
	{
		return;
	}
	let f1v = d2o(g0t.k7i(), s6j);
  for (const b1b of f1v)
	{
		if (b1b != g0t.l9i())
		{
			if (!g0t.f2j(b1b))
			{
				return;
			}
		}
	}
	let u1z = d2o(g0t.l9i(), u1x);
  for (const b1b of u1z)
	{
		if (b1b != g0t.k7i())
		{
			if (!g0t.f2j(b1b))
			{
				return;
			}
		}
	}
  for (const b1b of u1z)
	{
		if (c2n(g0t, b1b))
		{
			return;
		}
	}
	if (c2n(g0t, g0t.l9i()))
	{
		return;
	}
	if (g0t.l9i() != u1x)
	{
		if (!g0t.f2j(u1x))
		{
			if (u1x != g0t.k7i())
			{
				return;
			}
		}
	}
	if (g0t.k7i() != s6j)
	{
		if (!g0t.f2j(s6j))
		{
			if (s6j != g0t.l9i())
			{
				return;
			}
		}
	}
	h8t(x5y, g0t, g0t.l9i(), u1x, u4t.x3h);
}

function k0i(x5y, g0t)
{
	if (!g0t.k9v(g0t.d1c()))
	{
		return;
	}
	if (!g0t.b4l(g0t.t4k()))
	{
		return;
	}
	let f1v = d2o(g0t.t4k(), p2c);
  for (const b1b of f1v)
	{
		if (b1b != g0t.d1c())
		{
			if (!g0t.f2j(b1b))
			{
				return;
			}
		}
	}
	let u1z = d2o(g0t.d1c(), t4a);
  for (const b1b of u1z)
	{
		if (b1b != g0t.t4k())
		{
			if (!g0t.f2j(b1b))
			{
				return;
			}
		}
	}
  for (const b1b of u1z)
	{
		if (k4b(g0t, b1b))
		{
			return;
		}
	}
	if (k4b(g0t, g0t.d1c()))
	{
		return;
	}
	if (g0t.d1c() != t4a)
	{
		if (!g0t.f2j(t4a))
		{
			if (t4a != g0t.t4k())
			{
				return;
			}
		}
	}
	if (g0t.t4k() != p2c)
	{
		if (!g0t.f2j(p2c))
		{
			if (p2c != g0t.d1c())
			{
				return;
			}
		}
	}
	h8t(x5y, g0t, g0t.d1c(), t4a, u4t.x3h);
}

function b8c(x5y, g0t)
{
	if (!g0t.k9v(g0t.d1c()))
	{
		return;
	}
	if (!g0t.b4l(g0t.v4w()))
	{
		return;
	}
	let f1v = d2o(g0t.v4w(), n1h);
  for (const b1b of f1v)
	{
		if (b1b != g0t.d1c())
		{
			if (!g0t.f2j(b1b))
			{
				return;
			}
		}
	}
	let u1z = d2o(g0t.d1c(), v2d);
  for (const b1b of u1z)
	{
		if (b1b != g0t.v4w())
		{
			if (!g0t.f2j(b1b))
			{
				return;
			}
		}
	}
  for (const b1b of u1z)
	{
		if (k4b(g0t, b1b))
		{
			return;
		}
	}
	if (k4b(g0t, g0t.d1c()))
	{
		return;
	}
	if (g0t.d1c() != v2d)
	{
		if (!g0t.f2j(v2d))
		{
			if (v2d != g0t.v4w())
			{
				return;
			}
		}
	}
	if (g0t.v4w() != n1h)
	{
		if (!g0t.f2j(n1h))
		{
			if (n1h != g0t.d1c())
			{
				return;
			}
		}
	}
	h8t(x5y, g0t, g0t.d1c(), v2d, u4t.x3h);
}

function y9j(x5y, g0t)
{
	if (!g0t.f7k(g0t.l9i()))
	{
		return;
	}
	if (!g0t.m4s(g0t.g9m()))
	{
		return;
	}
	if (!g0t.f2j(d2h))
	{
		return;
	}
	if (!g0t.f2j(w5x))
	{
		return;
	}
	if (!g0t.f2j(r9h))
	{
		return;
	}
	if (c2n(g0t, g0t.l9i()))
	{
		return;
	}
	if (c2n(g0t, r9h))
	{
		return;
	}
	h8t(x5y, g0t, g0t.l9i(), e9y, u4t.x3h);
}

function n3l(x5y, g0t)
{
	if (!g0t.f7k(g0t.l9i()))
	{
		return;
	}
	if (!g0t.m4s(g0t.k7i()))
	{
		return;
	}
	if (!g0t.f2j(v1o))
	{
		return;
	}
	if (!g0t.f2j(p5u))
	{
		return;
	}
	if (c2n(g0t, g0t.l9i()))
	{
		return;
	}
	if (c2n(g0t, v1o))
	{
		return;
	}
	h8t(x5y, g0t, g0t.l9i(), u1x, u4t.x3h);
}

function m2d(x5y, g0t)
{
	if (!g0t.k9v(g0t.d1c()))
	{
		return;
	}
	if (!g0t.b4l(g0t.v4w()))
	{
		return;
	}
	if (!g0t.f2j(t0q))
	{
		return;
	}
	if (!g0t.f2j(f0m))
	{
		return;
	}
	if (!g0t.f2j(b6d))
	{
		return;
	}
	if (k4b(g0t, g0t.d1c()))
	{
		return;
	}
	if (k4b(g0t, b6d))
	{
		return;
	}
	h8t(x5y, g0t, g0t.d1c(), v2d, u4t.x3h);
}

function d1o(x5y, g0t)
{
	if (!g0t.k9v(g0t.d1c()))
	{
		return;
	}
	if (!g0t.b4l(g0t.t4k()))
	{
		return;
	}
	if (!g0t.f2j(p2y))
	{
		return;
	}
	if (!g0t.f2j(z5v))
	{
		return;
	}
	if (k4b(g0t, g0t.d1c()))
	{
		return;
	}
	if (k4b(g0t, p2y))
	{
		return;
	}
	h8t(x5y, g0t, g0t.d1c(), t4a, u4t.x3h);
}

function y2j(x5y, g0t)
{
	if (g0t.d0w())
	{
		u1b(x5y, g0t);
	}
	else
	{
		y9j(x5y, g0t);
	}
}

function c2w(x5y, g0t)
{
	if (g0t.d0w())
	{
		t0j(x5y, g0t);
	}
	else
	{
		n3l(x5y, g0t);
	}
}

function q1n(x5y, g0t)
{
	if (g0t.h4s())
	{
		y2j(x5y, g0t);
	}
	if (g0t.w7q())
	{
		c2w(x5y, g0t);
	}
}

function d6j(x5y, g0t)
{
	if (g0t.d0w())
	{
		b8c(x5y, g0t);
	}
	else
	{
		m2d(x5y, g0t);
	}
}

function o2z(x5y, g0t)
{
	if (g0t.d0w())
	{
		k0i(x5y, g0t);
	}
	else
	{
		d1o(x5y, g0t);
	}
}

function f0i(x5y, g0t)
{
	if (g0t.o9s())
	{
		d6j(x5y, g0t);
	}
	if (g0t.g3r())
	{
		o2z(x5y, g0t);
	}
}

function w8q(x5y, g0t)
{
	if (g0t.v9x() == o0a)
	{
		return;
	}
	if (p7m(g0t.v9x()) != k6r)
	{
		return;
	}
	if (!g0t.f2j(g0t.v9x()))
	{
		return;
	}
	let j9v = (g0t.v9x() + 8);
	if (!g0t.f2j(j9v))
	{
		return;
	}
	let l2x = (g0t.v9x() - 8);
	if (!g0t.v8f(l2x))
	{
		return;
	}
	let v3y = westSquare[l2x];
	if (v3y != o0a)
	{
		if (g0t.d4v(v3y))
		{
			r1j(x5y, g0t, v3y, e0d.e5g, g0t.v9x(),
				e0d.e5g, l2x, e0d.x4q, u4t.k0z);
		}
	}
	v3y = eastSquare[l2x];
	if (v3y != o0a)
	{
		if (g0t.d4v(v3y))
		{
			r1j(x5y, g0t, v3y, e0d.e5g, g0t.v9x(),
				e0d.e5g, l2x, e0d.x4q, u4t.k0z);
		}
	}
}

function w2i(x5y, g0t)
{
	if (g0t.v9x() == o0a)
	{
		return;
	}
	if (p7m(g0t.v9x()) != v2p)
	{
		return;
	}
	if (!g0t.f2j(g0t.v9x()))
	{
		return;
	}
	let j9v = (g0t.v9x() - 8);
	if (!g0t.f2j(j9v))
	{
		return;
	}
	let l2x = (g0t.v9x() + 8);
	if (!g0t.d4v(l2x))
	{
		return;
	}
	let v3y = westSquare[l2x];
	if (v3y != o0a)
	{
		if (g0t.v8f(v3y))
		{
			r1j(x5y, g0t, v3y, e0d.x4q, g0t.v9x(),
				e0d.x4q, l2x, e0d.e5g, u4t.k0z);
		}
	}
	v3y = eastSquare[l2x];
	if (v3y != o0a)
	{
		if (g0t.v8f(v3y))
		{
			r1j(x5y, g0t, v3y, e0d.x4q, g0t.v9x(),
				e0d.x4q, l2x, e0d.e5g, u4t.k0z);
		}
	}
}

function r1j(x5y, g0t, o3y, e8d, y9w, d9u, l5b, e9k, type)
{
  let u7k = new w9g();
	u7k.o3y = o3y;
	u7k.e8d = e8d;
	u7k.y9w = y9w;
	u7k.d9u = d9u;
	u7k.l5b = l5b;
	u7k.e9k = e9k;
	u7k.type = type;
	if (y2v(e8d))
	{
		if (i1a(g0t, u7k))
		{
			x5y.push(u7k);
		}
	}
	else
	{
		if (h5f(g0t, u7k))
		{
			x5y.push(u7k);
		}
	}
}

function h8t(x5y, g0t, o3y, y9w, type)
{
	let j3b = g0t.z9f(o3y);
	r1j(x5y, g0t, o3y, j3b, y9w, j3b, o0a, e0d.f3l, type);
}

function n1l(x5y, g0t, o3y, y9w, type)
{
	let j3b = g0t.z9f(o3y);
	let e9k = g0t.z9f(y9w);
	r1j(x5y, g0t, o3y, j3b, y9w, j3b, y9w, e9k, type);
}

function f0g(x5y, g0t, o3y, y9w)
{
	r1j(x5y, g0t, o3y, e0d.e5g, y9w, e0d.h8d, o0a, e0d.f3l, u4t.g9x);
	r1j(x5y, g0t, o3y, e0d.e5g, y9w, e0d.a6r, o0a, e0d.f3l, u4t.m4h);
	r1j(x5y, g0t, o3y, e0d.e5g, y9w, e0d.w7r, o0a, e0d.f3l, u4t.d2j);
	r1j(x5y, g0t, o3y, e0d.e5g, y9w, e0d.r9e, o0a, e0d.f3l, u4t.p8i);
}

function f8z(x5y, g0t, o3y, y9w)
{
	r1j(x5y, g0t, o3y, e0d.x4q, y9w, e0d.z0l, o0a, e0d.f3l, u4t.g9x);
	r1j(x5y, g0t, o3y, e0d.x4q, y9w, e0d.l5t, o0a, e0d.f3l, u4t.m4h);
	r1j(x5y, g0t, o3y, e0d.x4q, y9w, e0d.b9w, o0a, e0d.f3l, u4t.d2j);
	r1j(x5y, g0t, o3y, e0d.x4q, y9w, e0d.k2m, o0a, e0d.f3l, u4t.p8i);
}

function l0d(x5y, g0t, o3y, y9w)
{
	let e9k = g0t.z9f(y9w);
	r1j(x5y, g0t, o3y, e0d.e5g, y9w, e0d.h8d, y9w, e9k, u4t.g9x);
	r1j(x5y, g0t, o3y, e0d.e5g, y9w, e0d.a6r, y9w, e9k, u4t.m4h);
	r1j(x5y, g0t, o3y, e0d.e5g, y9w, e0d.w7r, y9w, e9k, u4t.d2j);
	r1j(x5y, g0t, o3y, e0d.e5g, y9w, e0d.r9e, y9w, e9k, u4t.p8i);
}

function p5v(x5y, g0t, o3y, y9w)
{
	let e9k = g0t.z9f(y9w);
	r1j(x5y, g0t, o3y, e0d.x4q, y9w, e0d.z0l, y9w, e9k, u4t.g9x);
	r1j(x5y, g0t, o3y, e0d.x4q, y9w, e0d.l5t, y9w, e9k, u4t.m4h);
	r1j(x5y, g0t, o3y, e0d.x4q, y9w, e0d.b9w, y9w, e9k, u4t.d2j);
	r1j(x5y, g0t, o3y, e0d.x4q, y9w, e0d.k2m, y9w, e9k, u4t.p8i);
}

function e4w(x5y, g0t, y9w)
{
	let o3y = (y9w - v4z);
	if (g0t.d4v(o3y))
	{
		if (p7m(o3y) == p2n)
		{
			f0g(x5y, g0t, o3y, y9w);
		}
		else
		{
			h8t(x5y, g0t, o3y, y9w, u4t.m8q);
		}
	}
	else
	{
		if (g0t.f2j(o3y))
		{
			if (p7m(y9w) == d1q)
			{
				o3y = (y9w - v4z - v4z);
				if (g0t.d4v(o3y))
				{
					h8t(x5y, g0t, o3y, y9w, u4t.m8q);
				}
			}
		}
	}

	if (g0t.d9m(y9w))
	{
		let o3y = southWestSquare[y9w];
		if (o3y != o0a)
		{
			if (g0t.d4v(o3y))
			{
				if (p7m(o3y) == p2n)
				{
					l0d(x5y, g0t, o3y, y9w);
				}
				else
				{
					n1l(x5y, g0t, o3y, y9w, u4t.m8q);
				}
			}
		}
		o3y = southEastSquare[y9w];
		if (o3y != o0a)
		{
			if (g0t.d4v(o3y))
			{
				if (p7m(o3y) == p2n)
				{
					l0d(x5y, g0t, o3y, y9w);
				}
				else
				{
					n1l(x5y, g0t, o3y, y9w, u4t.m8q);
				}
			}
		}
	}

	if (g0t.v9x() == y9w)
	{
		let j9v = (g0t.v9x() + 8);
		if (!g0t.f2j(j9v))
		{
			return;
		}
		let l2x = (g0t.v9x() - 8);
		if (!g0t.v8f(l2x))
		{
			return;
		}
		let v3y = westSquare[l2x];
		if (v3y != o0a)
		{
			if (g0t.d4v(v3y))
			{
				r1j(x5y, g0t, v3y, e0d.e5g, g0t.v9x(),
					e0d.e5g, l2x, e0d.x4q, u4t.k0z);
			}
		}
		v3y = eastSquare[l2x];
		if (v3y != o0a)
		{
			if (g0t.d4v(v3y))
			{
				r1j(x5y, g0t, v3y, e0d.e5g, g0t.v9x(),
					e0d.e5g, l2x, e0d.x4q, u4t.k0z);
			}
		}
	}
}

function l0v(x5y, g0t, y9w)
{
	let o3y = (y9w - h6t);
	if (g0t.v8f(o3y))
	{
		if (p7m(o3y) == i2a)
		{
			f8z(x5y, g0t, o3y, y9w);
		}
		else
		{
			h8t(x5y, g0t, o3y, y9w, u4t.m8q);
		}
	}
	else
	{
		if (g0t.f2j(o3y))
		{
			if (p7m(y9w) == f6d)
			{
				o3y = (y9w - h6t - h6t);
				if (g0t.v8f(o3y))
				{
					h8t(x5y, g0t, o3y, y9w, u4t.m8q);
				}
			}
		}
	}

	if (g0t.y2v(y9w))
	{
		let o3y = northWestSquare[y9w];
		if (o3y != o0a)
		{
			if (g0t.v8f(o3y))
			{
				if (p7m(o3y) == i2a)
				{
					p5v(x5y, g0t, o3y, y9w);
				}
				else
				{
					n1l(x5y, g0t, o3y, y9w, u4t.m8q);
				}
			}
		}
		o3y = northEastSquare[y9w];
		if (o3y != o0a)
		{
			if (g0t.v8f(o3y))
			{
				if (p7m(o3y) == i2a)
				{
					p5v(x5y, g0t, o3y, y9w);
				}
				else
				{
					n1l(x5y, g0t, o3y, y9w, u4t.m8q);
				}
			}
		}
	}

	if (g0t.v9x() == y9w)
	{
		let j9v = (g0t.v9x() - 8);
		if (!g0t.f2j(j9v))
		{
			return;
		}
		let l2x = (g0t.v9x() + 8);
		if (!g0t.d4v(l2x))
		{
			return;
		}
		let v3y = westSquare[l2x];
		if (v3y != o0a)
		{
			if (g0t.v8f(v3y))
			{
				r1j(x5y, g0t, v3y, e0d.x4q, g0t.v9x(),
					e0d.x4q, l2x, e0d.e5g, u4t.k0z);
			}
		}
		v3y = eastSquare[l2x];
		if (v3y != o0a)
		{
			if (g0t.v8f(v3y))
			{
				r1j(x5y, g0t, v3y, e0d.x4q, g0t.v9x(),
					e0d.x4q, l2x, e0d.e5g, u4t.k0z);
			}
		}
	}
}

function p1i(x5y, g0t, y9w, j3b)
{
	v6l(x5y, g0t, y9w, knightSquares[y9w], j3b);
}

function s0b(x5y, g0t, y9w, j3b)
{
	y0b(x5y, g0t, y9w, northEastSquares[y9w], j3b);
	y0b(x5y, g0t, y9w, southEastSquares[y9w], j3b);
	y0b(x5y, g0t, y9w, southWestSquares[y9w], j3b);
	y0b(x5y, g0t, y9w, northWestSquares[y9w], j3b);
}

function g7s(x5y, g0t, y9w, j3b)
{
	y0b(x5y, g0t, y9w, northSquares[y9w], j3b);
	y0b(x5y, g0t, y9w, eastSquares[y9w], j3b);
	y0b(x5y, g0t, y9w, southSquares[y9w], j3b);
	y0b(x5y, g0t, y9w, westSquares[y9w], j3b);
}

function a9z(x5y, g0t, y9w, j3b)
{
	y0b(x5y, g0t, y9w, northSquares[y9w], j3b);
	y0b(x5y, g0t, y9w, northEastSquares[y9w], j3b);
	y0b(x5y, g0t, y9w, eastSquares[y9w], j3b);
	y0b(x5y, g0t, y9w, southEastSquares[y9w], j3b);
	y0b(x5y, g0t, y9w, southSquares[y9w], j3b);
	y0b(x5y, g0t, y9w, southWestSquares[y9w], j3b);
	y0b(x5y, g0t, y9w, westSquares[y9w], j3b);
	y0b(x5y, g0t, y9w, northWestSquares[y9w], j3b);
}

function x8d(x5y, g0t, y9w, j3b)
{
	m4i(x5y, g0t, y9w, kingSquares[y9w], j3b);
}

function y0b(x5y, g0t, y9w, m2e, j3b)
{
  for (const o3y of m2e)
	{
		if (g0t.z9f(o3y) == j3b)
		{
			if (g0t.f2j(y9w))
			{
				h8t(x5y, g0t, o3y, y9w, u4t.m8q);
			}
			else
			{
				n1l(x5y, g0t, o3y, y9w, u4t.m8q);
			}
			break;
		}
		else
		{
			if (!g0t.f2j(o3y))
			{
				break;
			}
		}
	}
}

function m4i(x5y, g0t, y9w, m2e, j3b)
{
  for (const o3y of m2e)
	{
		if (g0t.z9f(o3y) == j3b)
		{
			if (g0t.f2j(y9w))
			{
				h8t(x5y, g0t, o3y, y9w, u4t.m8q);
				break;
			}
			else
			{
				n1l(x5y, g0t, o3y, y9w, u4t.m8q);
				break;
			}
		}
	}
}

function v6l(x5y, g0t, y9w, m2e, j3b)
{
  for (const o3y of m2e)
	{
		if (g0t.z9f(o3y) == j3b)
		{
			if (g0t.f2j(y9w))
			{
				h8t(x5y, g0t, o3y, y9w, u4t.m8q);
				
			}
			else
			{
				n1l(x5y, g0t, o3y, y9w, u4t.m8q);
				
			}
		}
	}
}

function w4s(m0v, p8s)
{
  for (const y9w of p8s)
	{
		if (m0v[y9w] != e0d.f3l)
		{
			if (d9m(m0v[y9w]))
			{
				return false;
			}
			else
			{
				if (m0v[y9w] == e0d.a6r || m0v[y9w] == e0d.r9e)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function p1e(m0v, p8s)
{
  for (const y9w of p8s)
	{
		if (m0v[y9w] != e0d.f3l)
		{
			if (d9m(m0v[y9w]))
			{
				return false;
			}
			else
			{
				if (m0v[y9w] == e0d.w7r || m0v[y9w] == e0d.r9e)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function o6s(m0v, p8s)
{
  for (const y9w of p8s)
	{
		if (m0v[y9w] != e0d.f3l)
		{
			if (d9m(m0v[y9w]))
			{
				return false;
			}
			else
			{
				if (m0v[y9w] == e0d.w7r || m0v[y9w] == e0d.r9e)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function j2i(m0v, y9w)
{
	if (y9w == o0a)
	{
		return false;
	}
	if (m0v[y9w] == e0d.e5g)
	{
		return true;
	}
	return false;
}

function s2j(m0v, p8s)
{
  for (const y9w of p8s)
	{
		if (m0v[y9w] == e0d.h8d)
		{
			return true;
		}
	}
	return false;
}

function i3l(m0v, p8s)
{
  for (const y9w of p8s)
	{
		if (m0v[y9w] == e0d.a3m)
		{
			return true;
		}
	}
	return false;
}

function q4t(m0v, p8s)
{
  for (const y9w of p8s)
	{
		if (m0v[y9w] != e0d.f3l)
		{
			if (y2v(m0v[y9w]))
			{
				return false;
			}
			else
			{
				if (m0v[y9w] == e0d.l5t || m0v[y9w] == e0d.k2m)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function m2k(m0v, p8s)
{
  for (const y9w of p8s)
	{
		if (m0v[y9w] != e0d.f3l)
		{
			if (y2v(m0v[y9w]))
			{
				return false;
			}
			else
			{
				if (m0v[y9w] == e0d.b9w || m0v[y9w] == e0d.k2m)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function y8l(m0v, p8s)
{
  for (const y9w of p8s)
	{
		if (m0v[y9w] != e0d.f3l)
		{
			if (y2v(m0v[y9w]))
			{
				return false;
			}
			else
			{
				if (m0v[y9w] == e0d.b9w || m0v[y9w] == e0d.k2m)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function t9w(m0v, y9w)
{
	if (y9w == o0a)
	{
		return false;
	}
	if (m0v[y9w] == e0d.x4q)
	{
		return true;
	}
	return false;
}

function a0i(m0v, p8s)
{
  for (const y9w of p8s)
	{
		if (m0v[y9w] == e0d.z0l)
		{
			return true;
		}
	}
	return false;
}

function p6e(m0v,  p8s)
{
  for (const y9w of p8s)
	{
		if (m0v[y9w] == e0d.q8l)
		{
			return true;
		}
	}
	return false;
}

function a7f(g0t, p8s, v8w)
{
  for (const y9w of p8s)
	{
		if (!g0t.f2j(y9w))
		{
			if (g0t.d9m(y9w))
			{
				return false;
			}
			else
			{
				if (g0t.t2a(y9w) || g0t.h4t(y9w))
				{
					v8w = y9w;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function z3o(g0t, p8s, v8w)
{
  for (const y9w of p8s)
	{
		if (!g0t.f2j(y9w))
		{
			if (g0t.y2v(y9w))
			{
				return false;
			}
			else
			{
				if (g0t.u8s(y9w) || g0t.v2r(y9w))
				{
					v8w = y9w;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function w5w(g0t, p8s, v8w)
{
  for (const y9w of p8s)
	{
		if (!g0t.f2j(y9w))
		{
			if (g0t.d9m(y9w))
			{
				return false;
			}
			else
			{
				if (g0t.m4s(y9w) || g0t.h4t(y9w))
				{
					v8w = y9w;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function p0p(g0t, p8s, v8w)
{
  for (const y9w of p8s)
	{
		if (!g0t.f2j(y9w))
		{
			if (g0t.y2v(y9w))
			{
				return false;
			}
			else
			{
				if (g0t.b4l(y9w) || g0t.v2r(y9w))
				{
					v8w = y9w;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function r1x(g0t, p8s, v8w)
{
  for (const y9w of p8s)
	{
		if (!g0t.f2j(y9w))
		{
			if (g0t.d9m(y9w))
			{
				return false;
			}
			else
			{
				if (g0t.m4s(y9w) || g0t.h4t(y9w))
				{
					v8w = y9w;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function k7l(g0t, p8s, v8w)
{
  for (const y9w of p8s)
	{
		if (!g0t.f2j(y9w))
		{
			if (g0t.y2v(y9w))
			{
				return false;
			}
			else
			{
				if (g0t.b4l(y9w) || g0t.v2r(y9w))
				{
					v8w = y9w;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function o2k(g0t, y9w)
{
	if (y9w == o0a)
	{
		return false;
	}
	if (g0t.d4v(y9w))
	{
		return true;
	}
	return false;
}

function e4s(g0t, y9w)
{
	if (y9w == o0a)
	{
		return false;
	}
	if (g0t.v8f(y9w))
	{
		return true;
	}
	return false;
}

function a6x(g0t, p8s, v8w)
{
  for (const y9w of p8s)
	{
		if (g0t.v0f(y9w))
		{
			v8w = y9w;
			return true;
		}
	}
	return false;
}



function x0y(g0t, p8s, v8w)
{
  for (const y9w of p8s)
	{
		if (g0t.n8v(y9w))
		{
			v8w = y9w;
			return true;
		}
	}
	return false;
}

function c6g(g0t, p8s, v8w)
{
  for (const y9w of p8s)
	{
		if (g0t.f7k(y9w))
		{
			v8w = y9w;
			return true;
		}
	}
	return false;
}

function a0e(g0t, p8s, v8w)
{
  for (const y9w of p8s)
	{
		if (g0t.k9v(y9w))
		{
			v8w = y9w;
			return true;
		}
	}
	return false;
}

function d7p(m0v, b1b)
{
	if (w4s(m0v, northEastSquares[b1b])) return true;
	if (w4s(m0v, southEastSquares[b1b])) return true;
	if (w4s(m0v, southWestSquares[b1b])) return true;
	if (w4s(m0v, northWestSquares[b1b])) return true;
	if (p1e(m0v, northSquares[b1b])) return true;
	if (o6s(m0v, eastSquares[b1b])) return true;
	if (p1e(m0v, southSquares[b1b])) return true;
	if (o6s(m0v, westSquares[b1b])) return true;
	if (j2i(m0v, southEastSquare[b1b])) return true;
	if (j2i(m0v, southWestSquare[b1b])) return true;
	if (s2j(m0v, knightSquares[b1b])) return true;
	if (i3l(m0v, kingSquares[b1b])) return true;
	return false;
}

function s7q(m0v, b1b)
{
	if (q4t(m0v, northEastSquares[b1b])) return true;
	if (q4t(m0v, southEastSquares[b1b])) return true;
	if (q4t(m0v, southWestSquares[b1b])) return true;
	if (q4t(m0v, northWestSquares[b1b])) return true;
	if (m2k(m0v, northSquares[b1b])) return true;
	if (y8l(m0v, eastSquares[b1b])) return true;
	if (m2k(m0v, southSquares[b1b])) return true;
	if (y8l(m0v, westSquares[b1b])) return true;
	if (t9w(m0v, northEastSquare[b1b])) return true;
	if (t9w(m0v, northWestSquare[b1b])) return true;
	if (a0i(m0v, knightSquares[b1b])) return true;
	if (p6e(m0v, kingSquares[b1b])) return true;
	return false;
}

function k4b(g0t, b1b)
{
	let v8w = o0a;
	if (a7f(g0t, northEastSquares[b1b], v8w)) return true;
	if (a7f(g0t, southEastSquares[b1b], v8w)) return true;
	if (a7f(g0t, southWestSquares[b1b], v8w)) return true;
	if (a7f(g0t, northWestSquares[b1b], v8w)) return true;
	if (w5w(g0t, northSquares[b1b], v8w)) return true;
	if (r1x(g0t, eastSquares[b1b], v8w)) return true;
	if (w5w(g0t, southSquares[b1b], v8w)) return true;
	if (r1x(g0t, westSquares[b1b], v8w)) return true;
	if (o2k(g0t, southEastSquare[b1b])) return true;
	if (o2k(g0t, southWestSquare[b1b])) return true;
	if (a6x(g0t, knightSquares[b1b], v8w)) return true;
	if (c6g(g0t, kingSquares[b1b], v8w)) return true;
	return false;
}

function c2n(g0t, b1b)
{
	let v8w = o0a;
	if (z3o(g0t, northEastSquares[b1b], v8w)) return true;
	if (z3o(g0t, southEastSquares[b1b], v8w)) return true;
	if (z3o(g0t, southWestSquares[b1b], v8w)) return true;
	if (z3o(g0t, northWestSquares[b1b], v8w)) return true;
	if (p0p(g0t, northSquares[b1b], v8w)) return true;
	if (k7l(g0t, eastSquares[b1b], v8w)) return true;
	if (p0p(g0t, southSquares[b1b], v8w)) return true;
	if (k7l(g0t, westSquares[b1b], v8w)) return true;
	if (e4s(g0t, northEastSquare[b1b])) return true;
	if (e4s(g0t, northWestSquare[b1b])) return true;
	if (x0y(g0t, knightSquares[b1b], v8w)) return true;
	if (a0e(g0t, kingSquares[b1b], v8w)) return true;
	return false;
}

function c7v()
{
	if (moveGeneratorInited) return;
	moveGeneratorInited = true;
 	for (const b1b of f7t)
	{
 		if (p7m(b1b) <= p2n && t5a(b1b) <= x5v)
		{
			let y9w = b1b + p1d;
			northEastSquare.push(y9w);
		}
		else
		{
			northEastSquare.push(o0a);
		}
		if (t5a(b1b) <= x5v)
		{
			let y9w = b1b + f3j;
			eastSquare.push(y9w);
		}
		else
		{
			eastSquare.push(o0a);
		}
		if (p7m(b1b) >= i2a && t5a(b1b) <= x5v)
		{
			let y9w = b1b + k7y;
			southEastSquare.push(y9w);
		}
		else
		{
			southEastSquare.push(o0a);
		}
		if (p7m(b1b) >= i2a && t5a(b1b) >= c9n)
		{
			let y9w = b1b + f4b;
			southWestSquare.push(y9w);
		}
		else
		{
			southWestSquare.push(o0a);
		}
		if (t5a(b1b) >= c9n)
		{
			let y9w = b1b + h3d;
			westSquare.push(y9w);
		}
		else
		{
			westSquare.push(o0a);
		}
		if (p7m(b1b) <= p2n && t5a(b1b) >= c9n)
		{
			let y9w = b1b + h4c;
			northWestSquare.push(y9w);
		}
		else
		{
			northWestSquare.push(o0a);
		}
	}

  for (const b1b of f7t)
	{
  	northSquares.push(n0i(b1b));
		northEastSquares.push(q9p(b1b));
		eastSquares.push(o3m(b1b));
		southEastSquares.push(a2d(b1b));
		southSquares.push(k2d(b1b));
		southWestSquares.push(k3a(b1b));
		westSquares.push(x0l(b1b));
		northWestSquares.push(c1h(b1b));
		kingSquares.push(b3p(b1b));
		knightSquares.push(h3j(b1b));
	}
}

function m1f(g0t)
{
	let x5y = [];

	if (g0t.q8z())
	{
		let d0u = g0t.d0u();
    for (const b1b of f7t)
		{
			if (!d0u) break;
			if (g0t.y2v(b1b))
			{
				switch (g0t.z9f(b1b))
				{
					case e0d.e5g:
						i4o(x5y, g0t, b1b);
						d0u--;
						break;
					case e0d.h8d:
						s8z(x5y, g0t, b1b);
						d0u--;
						break;
					case e0d.a6r:
						h1z(x5y, g0t, b1b);
						d0u--;
						break;
					case e0d.w7r:
						d2m(x5y, g0t, b1b);
						d0u--;
						break;
					case e0d.r9e:
						v5z(x5y, g0t, b1b);
						d0u--;
						break;
					case e0d.a3m:
						s4f(x5y, g0t, b1b);
						d0u--;
						break;
					default:
						break;
				}
			}
		}
		w8q(x5y, g0t);
		q1n(x5y, g0t);
	}
	else
	{
		let y1z = g0t.y1z();
    for (const b1b of f7t)
		{
			if (!y1z) break;
			if (g0t.d9m(b1b))
			{
				switch (g0t.z9f(b1b))
				{
					case e0d.x4q:
						o6o(x5y, g0t, b1b);
						y1z--;
						break;
					case e0d.z0l:
						l6q(x5y, g0t, b1b);
						y1z--;
						break;
					case e0d.l5t:
						s0j(x5y, g0t, b1b);
						y1z--;
						break;
					case e0d.b9w:
						r8x(x5y, g0t, b1b);
						y1z--;
						break;
					case e0d.k2m:
						r3w(x5y, g0t, b1b);
						y1z--;
						break;
					case e0d.q8l:
						t7w(x5y, g0t, b1b);
						y1z--;
						break;
					default:
						break;
				}
			}
		}
		w2i(x5y, g0t);
		f0i(x5y, g0t);
	}

	return x5y;
}

function k3w(g0t, y8x)
{
	let x5y = [];

	if (g0t.q8z())
	{
		if (!g0t.y2v(y8x))
		{
			e4w(x5y, g0t, y8x);
		}
	}
	else
	{
		if (!g0t.d9m(y8x))
		{
			l0v(x5y, g0t, y8x);
		}
	}

	return x5y;
}

function j2w(g0t, y8x)
{
	let x5y = [];

	if (g0t.q8z())
	{
		if (!g0t.y2v(y8x))
		{
			p1i(x5y, g0t, y8x, e0d.h8d);
		}
	}
	else
	{
		if (!g0t.d9m(y8x))
		{
			p1i(x5y, g0t, y8x, e0d.z0l);
		}
	}

	return x5y;
}

function e1a(g0t, y8x)
{
	let x5y = [];

	if (g0t.q8z())
	{
		if (!g0t.y2v(y8x))
		{
			s0b(x5y, g0t, y8x, e0d.a6r);
		}
	}
	else
	{
		if (!g0t.d9m(y8x))
		{
			s0b(x5y, g0t, y8x, e0d.l5t);
		}
	}

	return x5y;
}

function j4o(g0t, y8x)
{
	let x5y = [];

	if (g0t.q8z())
	{
		if (!g0t.y2v(y8x))
		{
			g7s(x5y, g0t, y8x, e0d.w7r);
		}
	}
	else
	{
		if (!g0t.d9m(y8x))
		{
			g7s(x5y, g0t, y8x, e0d.b9w);
		}
	}

	return x5y;
}

function j9r(g0t, y8x)
{
	let x5y = [];

	if (g0t.q8z())
	{
		if (!g0t.y2v(y8x))
		{
			a9z(x5y, g0t, y8x, e0d.r9e);
		}
	}
	else
	{
		if (!g0t.d9m(y8x))
		{
			a9z(x5y, g0t, y8x, e0d.k2m);
		}
	}

	return x5y;
}

function s2l(g0t, y8x)
{
	let x5y = [];

	let z8v = o0a;
	if (g0t.q8z())
	{
		z8v = g0t.a3m();
	}
	else
	{
		z8v = g0t.q8l();
	}

	if (z8v == o0a)
	{
		return x5y;
	}

	if (g0t.q8z())
	{
		s4f(x5y, g0t, z8v);
		q1n(x5y, g0t);
	}
	else
	{
		t7w(x5y, g0t, z8v);
		f0i(x5y, g0t);
	}

	return x5y;
}

function i7g(g0t, y8x)
{
	let x5y = [];

	let z8v = o0a;
	if (g0t.q8z())
	{
		z8v = g0t.a3m();
	}
	else
	{
		z8v = g0t.q8l();
	}

	if (z8v == o0a)
	{
		return x5y;
	}

	if (g0t.q8z())
	{
		if (!g0t.y2v(y8x))
		{
			x8d(x5y, g0t, y8x, e0d.a3m);
		}
	}
	else
	{
		if (!g0t.d9m(y8x))
		{
			x8d(x5y, g0t, y8x, e0d.q8l);
		}
	}

	return x5y;
}

function k3k(g0t)
{
	let x5y = [];

	if (g0t.q8z())
	{
		if (!g0t.f7k(g0t.l9i()))
		{
			return x5y;
		}
		if (!g0t.h4s())
		{
			return x5y;
		}
		y2j(x5y, g0t);
		return x5y;
	}
	else
	{
		if (!g0t.k9v(g0t.d1c()))
		{
			return x5y;
		}
		if (!g0t.o9s())
		{
			return x5y;
		}
		d6j(x5y, g0t);
		return x5y;
	}
}

function l8s(g0t)
{
	let x5y = [];

	if (g0t.q8z())
	{
		if (!g0t.f7k(g0t.l9i()))
		{
			return x5y;
		}
		if (!g0t.w7q())
		{
			return x5y;
		}
		c2w(x5y, g0t);
		return x5y;
	}
	else
	{
		if (!g0t.k9v(g0t.d1c()))
		{
			return x5y;
		}
		if (!g0t.g3r())
		{
			return x5y;
		}
		o2z(x5y, g0t);
		return x5y;
	}
}

function w0c(g0t)
{
	if (g0t.q8z())
	{
		if (g0t.a3m() != o0a)
		{
			return c2n(g0t, g0t.a3m());
		}
	}
	else
	{
		if (g0t.q8l() != o0a)
		{
			return k4b(g0t, g0t.q8l());
		}
	}
	return false;
}




function q9n(g0t, o3y)
{
	let n3m = m1f(g0t);
	let r0s = [];
  for (const l3n of n3m)
	{
		if (l3n.o3y == o3y)
		{
			r0s.push(l3n);
		}
	}
	return r0s;
}

function z6t(g0t, y9w)
{
	let n3m = m1f(g0t);
	let e2u = [];
  for (const l3n of n3m)
	{
		if (l3n.y9w == y9w)
		{
			e2u.push(l3n);
		}
	}
	return e2u;
}

function w9p(g0t, o3y, y9w)
{
	let n3m = m1f(g0t);
	let q2v = [];
  for (const l3n of n3m)
	{
		if (l3n.o3y == o3y && l3n.y9w == y9w)
		{
			q2v.push(l3n);
		}
	}
	return q2v;
}

function y5q(g0t, o3y, y9w, type)
{
	let u7k = new w9g();
	if (type == u4t.null)
	{
		return u7k;
	}

	u7k.o3y = o3y;
	u7k.y9w = y9w;
	u7k.type = type;
	if (type == u4t.m8q)
	{
		if (g0t.z9f(u7k.y9w) != e0d.f3l)
		{
			u7k.l5b = u7k.y9w;
			u7k.e9k = g0t.z9f(u7k.y9w);
		}
		u7k.e8d = g0t.z9f(u7k.o3y);
		u7k.d9u = u7k.e8d;
	}
	else if (type == u4t.x3h)
	{
		u7k.e8d = g0t.z9f(u7k.o3y);
		u7k.d9u = u7k.e8d;
	}
	else if (type == u4t.k0z)
	{
		u7k.e8d = g0t.z9f(u7k.o3y);
		u7k.d9u = u7k.e8d;
		if (y2v(u7k.e8d))
		{
			u7k.l5b = (u7k.y9w - 8);
			u7k.e9k = e0d.x4q;
		}
		else
		{
			u7k.l5b = (u7k.y9w + 8);
			u7k.e9k = e0d.e5g;
		}
	}
	else if (type == u4t.p8i)
	{
		if (g0t.z9f(u7k.y9w) != e0d.f3l)
		{
			u7k.l5b = u7k.y9w;
			u7k.e9k = g0t.z9f(u7k.y9w);
		}
		u7k.e8d = g0t.z9f(u7k.o3y);
		if (y2v(u7k.e8d))
		{
			u7k.d9u = e0d.r9e;
		}
		else
		{
			u7k.d9u = e0d.k2m;
		}
	}
	else if (type == u4t.d2j)
	{
		if (g0t.z9f(u7k.y9w) != e0d.f3l)
		{
			u7k.l5b = u7k.y9w;
			u7k.e9k = g0t.z9f(u7k.y9w);
		}
		u7k.e8d = g0t.z9f(u7k.o3y);
		if (y2v(u7k.e8d))
		{
			u7k.d9u = e0d.w7r;
		}
		else
		{
			u7k.d9u = e0d.b9w;
		}
	}
	else if (type == u4t.m4h)
	{
		if (g0t.z9f(u7k.y9w) != e0d.f3l)
		{
			u7k.l5b = u7k.y9w;
			u7k.e9k = g0t.z9f(u7k.y9w);
		}
		u7k.e8d = g0t.z9f(u7k.o3y);
		if (y2v(u7k.e8d))
		{
			u7k.d9u = e0d.a6r;
		}
		else
		{
			u7k.d9u = e0d.l5t;
		}
	}
	else if (type == u4t.g9x)
	{
		if (g0t.z9f(u7k.y9w) != e0d.f3l)
		{
			u7k.l5b = u7k.y9w;
			u7k.e9k = g0t.z9f(u7k.y9w);
		}
		u7k.e8d = g0t.z9f(u7k.o3y);
		if (y2v(u7k.e8d))
		{
			u7k.d9u = e0d.h8d;
		}
		else
		{
			u7k.d9u = e0d.z0l;
		}
	}
	return u7k;
}

function y5q(m0v, o3y, y9w, type)
{
	let u7k = new w9g();
	if (type == u4t.null)
	{
		return u7k;
	}

	u7k.o3y = o3y;
	u7k.y9w = y9w;
	u7k.type = type;
	if (type == u4t.m8q)
	{
		if (m0v[u7k.y9w] != e0d.f3l)
		{
			u7k.l5b = u7k.y9w;
			u7k.e9k = m0v[u7k.y9w];
		}
		u7k.e8d = m0v[u7k.o3y];
		u7k.d9u = u7k.e8d;
	}
	else if (type == u4t.x3h)
	{
		u7k.e8d = m0v[u7k.o3y];
		u7k.d9u = u7k.e8d;
	}
	else if (type == u4t.k0z)
	{
		u7k.e8d = m0v[u7k.o3y];
		u7k.d9u = u7k.e8d;
		if (y2v(u7k.e8d))
		{
			u7k.l5b = (u7k.y9w - 8);
			u7k.e9k = e0d.x4q;
		}
		else
		{
			u7k.l5b = (u7k.y9w + 8);
			u7k.e9k = e0d.e5g;
		}
	}
	else if (type == u4t.p8i)
	{
		if (m0v[u7k.y9w] != e0d.f3l)
		{
			u7k.l5b = u7k.y9w;
			u7k.e9k = m0v[u7k.y9w];
		}
		u7k.e8d = m0v[u7k.o3y];
		if (y2v(u7k.e8d))
		{
			u7k.d9u = e0d.r9e;
		}
		else
		{
			u7k.d9u = e0d.k2m;
		}
	}
	else if (type == u4t.d2j)
	{
		if (m0v[u7k.y9w] != e0d.f3l)
		{
			u7k.l5b = u7k.y9w;
			u7k.e9k = m0v[u7k.y9w];
		}
		u7k.e8d = m0v[u7k.o3y];
		if (y2v(u7k.e8d))
		{
			u7k.d9u = e0d.w7r;
		}
		else
		{
			u7k.d9u = e0d.b9w;
		}
	}
	else if (type == u4t.m4h)
	{
		if (m0v[u7k.y9w] != e0d.f3l)
		{
			u7k.l5b = u7k.y9w;
			u7k.e9k = m0v[u7k.y9w];
		}
		u7k.e8d = m0v[u7k.o3y];
		if (y2v(u7k.e8d))
		{
			u7k.d9u = e0d.a6r;
		}
		else
		{
			u7k.d9u = e0d.l5t;
		}
	}
	else if (type == u4t.g9x)
	{
		if (m0v[u7k.y9w] != e0d.f3l)
		{
			u7k.l5b = u7k.y9w;
			u7k.e9k = m0v[u7k.y9w];
		}
		u7k.e8d = m0v[u7k.o3y];
		if (y2v(u7k.e8d))
		{
			u7k.d9u = e0d.h8d;
		}
		else
		{
			u7k.d9u = e0d.z0l;
		}
	}
	return u7k;
}

const v4z 						=   8; 
const h6t 						=  -8; 
const f3j 	      			=   1; 
const h3d 	      			=  -1; 
const n5n 		=  17; 
const l3f 		=  10; 
const p1d 				=   9; 
const b6w 		=   6; 
const i1f 		=  15; 
const h4c 				=   7; 
const j1o 		= -17; 
const i7r 		= -10; 
const f4b 				=  -9; 
const n8i 		=  -6; 
const l1a 		= -15; 
const k7y 				=  -7; 

function n0i(b1b)
{
	let y4a = [];
	let k2w = v4z;
	let y9w = b1b;
	while (p7m(y9w) <= p2n)
	{
		y9w = y9w + k2w;
		y4a.push(y9w);
	}
	return y4a;
}

function q9p(b1b)
{
	let y4a = [];
	let k2w = p1d;
	let y9w = b1b;
	while (p7m(y9w) <= p2n && t5a(y9w) <= x5v)
	{
		y9w = y9w + k2w;
		y4a.push(y9w);
	}
	return y4a;
}

function o3m(b1b)
{
	let y4a = [];
	let k2w = f3j;
	let y9w = b1b;
	while (t5a(y9w) <= x5v)
	{
		y9w = y9w + k2w;
		y4a.push(y9w);
	}
	return y4a;
}

function a2d(b1b)
{
	let y4a = [];
	let k2w = k7y;
	let y9w = b1b;
	while (p7m(y9w) >= i2a && t5a(y9w) <= x5v)
	{
		y9w = y9w + k2w;
		y4a.push(y9w);
	}
	return y4a;
}

function k2d(b1b)
{
	let y4a = [];
	let k2w = h6t;
	let y9w = b1b;
	while (p7m(y9w) >= i2a)
	{
		y9w = y9w + k2w;
		y4a.push(y9w);
	}
	return y4a;
}

function k3a(b1b)
{
	let y4a = [];
	let k2w = f4b;
	let y9w = b1b;
	while (p7m(y9w) >= i2a && t5a(y9w) >= c9n)
	{
		y9w = y9w + k2w;
		y4a.push(y9w);
	}
	return y4a;
}

function x0l(b1b)
{
	let y4a = [];
	let k2w = h3d;
	let y9w = b1b;
	while (t5a(y9w) >= c9n)
	{
		y9w = y9w + k2w;
		y4a.push(y9w);
	}
	return y4a;
}

function c1h(b1b)
{
	let y4a = [];
	let k2w = h4c;
	let y9w = b1b;
	while (p7m(y9w) <= p2n && t5a(y9w) >= c9n)
	{
		y9w = y9w + k2w;
		y4a.push(y9w);
	}
	return y4a;
}

function h3j(b1b)
{
	let y4a = [];
	if (p7m(b1b) <= k6r && t5a(b1b) <= x5v)
	{
		let y9w = b1b + n5n;
		y4a.push(y9w);
	}
	if (p7m(b1b) <= p2n && t5a(b1b) <= h6z)
	{
		let y9w = b1b + l3f;
		y4a.push(y9w);
	}
	if (p7m(b1b) >= i2a && t5a(b1b) <= h6z)
	{
		let y9w = b1b + n8i;
		y4a.push(y9w);
	}
	if (p7m(b1b) >= v2p && t5a(b1b) <= x5v)
	{
		let y9w = b1b + l1a;
		y4a.push(y9w);
	}
	if (p7m(b1b) >= v2p && t5a(b1b) >= c9n)
	{
		let y9w = b1b + j1o;
		y4a.push(y9w);
	}
	if (p7m(b1b) >= i2a && t5a(b1b) >= e7c)
	{
		let y9w = b1b + i7r;
		y4a.push(y9w);
	}
	if (p7m(b1b) <= p2n && t5a(b1b) >= e7c)
	{
		y9w = b1b + b6w;
		y4a.push(y9w);
	}
	if (p7m(b1b) <= k6r && t5a(b1b) >= c9n)
	{
		let y9w = b1b + i1f;
		y4a.push(y9w);
	}
	return y4a;
}

function b3p(b1b)
{
	let y4a = [];
	if (p7m(b1b) <= p2n)
	{
		let y9w = b1b + v4z;
		y4a.push(y9w);
	}
	if (p7m(b1b) <= p2n && t5a(b1b) <= x5v)
	{
		let y9w = b1b + p1d;
		y4a.push(y9w);
	}
	if (t5a(b1b) <= x5v)
	{
		let y9w = b1b + f3j;
		y4a.push(y9w);
	}
	if (p7m(b1b) >= i2a && t5a(b1b) <= x5v)
	{
		let y9w = b1b + k7y;
		y4a.push(y9w);
	}
	if (p7m(b1b) >= i2a)
	{
		let y9w = b1b + h6t;
		y4a.push(y9w);
	}
	if (p7m(b1b) >= i2a && t5a(b1b) >= c9n)
	{
		let y9w = b1b + f4b;
		y4a.push(y9w);
	}
	if (t5a(b1b) >= c9n)
	{
		let y9w = b1b + h3d;
		y4a.push(y9w);
	}
	if (p7m(b1b) <= p2n && t5a(b1b) >= c9n)
	{
		let y9w = b1b + h4c;
		y4a.push(y9w);
	}
	return y4a;
}

const u4t =
{
  h4o : 0,  
	m8q : 1,
	x3h : 2,
	k0z : 3,
	g9x : 4,
	m4h : 5,
	d2j : 6,
	p8i : 7
};

function h6d(j3b)
{
	switch (j3b)
	{
		case e0d.e5g:
		case e0d.x4q:
			return n7q.d4i;
		case e0d.h8d:
		case e0d.z0l:
			return n7q.g3a;
		case e0d.a6r:
		case e0d.l5t:
			return n7q.o4t;
		case e0d.w7r:
		case e0d.b9w:
			return n7q.n9w;
		case e0d.r9e:
		case e0d.k2m:
			return n7q.k8s;
		case e0d.a3m:
		case e0d.q8l:
			return n7q.king;
		case e0d.f3l:
			return n7q.d4i;
	}
}

function a3z(g0t, u7k, e3i)
{
 	let w9b = '';
	if (u7k.f3l())
	{
		w9b += "--";
	}
	else if (k4j(u7k.e8d))
	{
    if (u7k.o9a())
    {
			let a4d = t5a(u7k.o3y);
			w9b = t8n(a4d) + "x" + g8y(u7k.y9w);
    }
    else
    {
 			w9b = g8y(u7k.y9w);
    }
		if (u7k.c8c())
		{
			w9b += "=";
			w9b += x7f(h6d(u7k.d9u));
		}
	}
	else if (u7k.e8d == e0d.a3m && u7k.l1z())
	{
		if (u7k.y9w == e9y)
		{
			w9b = "O-O-O";
		}
		else
		{
			w9b = "O-O";
		}
	}
	else if (u7k.e8d == e0d.q8l && u7k.l1z())
	{
		if (u7k.y9w == v2d)
		{
			w9b = "O-O-O";
		}
		else
		{
			w9b = "O-O";
		}
	}
	else
	{
		w9b = x7f(h6d(u7k.e8d));
    let n3m = [];
    if (y2v(u7k.e8d))
    {
      if (u7k.e8d == e0d.h8d)
      {
        n3m = j2w(g0t, u7k.y9w);
      }
      else if (u7k.e8d == e0d.a6r)
      {
        n3m = e1a(g0t, u7k.y9w);
      }
      else if (u7k.e8d == e0d.w7r)
      {
        n3m = j4o(g0t, u7k.y9w);
      }
      else if (u7k.e8d == e0d.r9e)
      {
        n3m = j9r(g0t, u7k.y9w);
      }
      else if (u7k.e8d == e0d.a3m)
      {
        n3m = i7g(g0t, u7k.y9w);
      }
    }
    else
    {
      if (u7k.e8d == e0d.z0l)
      {
        n3m = j2w(g0t, u7k.y9w);
      }
      else if (u7k.e8d == e0d.l5t)
      {
        n3m = e1a(g0t, u7k.y9w);
      }
      else if (u7k.e8d == e0d.b9w)
      {
        n3m = j4o(g0t, u7k.y9w);
      }
      else if (u7k.e8d == e0d.k2m)
      {
        n3m = j9r(g0t, u7k.y9w);
      }
      else if (u7k.e8d == e0d.q8l)
      {
        n3m = i7g(g0t, u7k.y9w);
      }
    }
    if (n3m.length > 1)
    {
      
      let v3s = 0;
      let a4d = t5a(u7k.o3y);
     	for (const l3n of n3m)
      {
        if (t5a(l3n.o3y) == a4d)
        {
          v3s++;
        }
      }
      if (v3s == 1)
      {
        
 				let a4d = t5a(u7k.o3y);
				w9b += t8n(a4d);
      }
      else
      {
        v3s = 0;
        let d8a = p7m(u7k.o3y);
       	for (const l3n of n3m)
        {
          if (p7m(l3n.o3y) == d8a)
          {
            v3s++;
          }
        }
        if (v3s == 1)
        {
          
          w9b += i8j(d8a);
        }
        else
        {
          
 					w9b += g8y(u7k.o3y);
        }
      }
    }
		if (u7k.o9a())
		{
       w9b += "x";
		}
		w9b += g8y(u7k.y9w);
	}
	if (!u7k.f3l())
	{
  	let v0t = g0t.v0z();
    v0t.v1s(u7k);
  	if (w0c(v0t))
	  {
  		let x5y = m1f(v0t);
	  	if (x5y.length == 0)
		  {
			  w9b += "#";
  		}
	  	else
		  {
			  w9b += "+";
  		}
	  }
	}
	return w9b;
}
class b1s
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.fontSize = 0;
}

}

function t5l(w7v,
  t4r,
  k0l,
  coordinate,
  coordinatesType,
  f8p,
  x0n,
  marginSize) 
{
 	let n4k = (coordinatesType == n4y.p1v ||
		coordinatesType == n4y.g4l ||
		coordinatesType == n4y.b3g);
	let e2q = (coordinatesType == n4y.p1v ||
		coordinatesType == n4y.g4l ||
		coordinatesType == n4y.g3f);
	let z3k =	(coordinatesType == n4y.p1v ||
		coordinatesType == n4y.b3g ||
		coordinatesType == n4y.s9o);
	let v7t = (coordinatesType == n4y.p1v ||
		coordinatesType == n4y.g3f ||
		coordinatesType == n4y.s9o);

	w7v.font = (coordinate.fontSize).toString() + "px serif";
	w7v.fillStyle = f8p;
  let f9h = coordinate.height;

	if (e2q)
	{
		let g8l = w0l;
		if (x0n)
		{
			g8l = 1;
		}
    for (let f5d = 0; f5d < w0l; f5d++)
		{
			let g2x = w7v.measureText(g8l).width;
			let top = t4r.i1g + 1 + f5d * k0l.u4a;
			top += (k0l.u4a - f9h) / 2 + f9h;
			let n4t = t4r.y9z - marginSize + (marginSize - g2x) / 2;
      w7v.fillText(g8l, n4t, top);
			if (x0n)
			{
				g8l++;
			}
			else
			{
				g8l--;
			}
		}
	}

	if (z3k)
	{
		let g8l = w0l;
		if (x0n)
		{
			g8l = 1;
		}
    for (let f5d = 0; f5d < w0l; f5d++)
		{
      let g2x = w7v.measureText(g8l).width;
			let top = t4r.i1g + 1 + f5d * k0l.u4a;
			top += (k0l.u4a - f9h) / 2 + f9h;
			let n4t = t4r.y9z + t4r.s6g() +
        (marginSize - g2x) / 2;
      w7v.fillText(g8l, n4t, top);
			if (x0n)
			{
				g8l++;
			}
			else
			{
				g8l--;
			}
		}
	}

	if (n4k)
	{
		let r6o = 'a';
		if (x0n)
		{
			r6o = 'h';
		}
    for (let r0w = 0; r0w < w0l; r0w++)
		{
			let h7c = r6o;
			let left = t4r.y9z + 1 + r0w * k0l.u4a;
      let g2x = w7v.measureText(h7c).width;
			let n4t = left + (k0l.u4a - g2x) / 2;
			let l9w = t4r.i1g - (marginSize - f9h) / 2 - 2;
      
      if (r6o == 'g')
      {
        l9w -= 2; 
      }
      w7v.fillText(h7c, n4t, l9w);
			if (x0n)
			{
        let b6a = r6o.charCodeAt(0);
        b6a--;
        r6o = String.fromCharCode(b6a);
			}
			else
			{
        let b6a = r6o.charCodeAt(0);
        b6a++;
        r6o = String.fromCharCode(b6a);
			}
		}
	}

	if (v7t)
	{
		let r6o = 'a';
		if (x0n)
		{
			r6o = 'h';
		}
    for (let r0w = 0; r0w < w0l; r0w++)
		{
			let h7c = r6o;
			let left = t4r.y9z + 1 + r0w * k0l.u4a;
      let g2x = w7v.measureText(h7c).width;
			let n4t = left + (k0l.u4a - g2x) / 2;
			let l9w = t4r.i1g + t4r.f5i() +
        (marginSize - f9h) / 2 + f9h - 2;
      
      if (r6o == 'g')
      {
        l9w -= 2; 
      }
      w7v.fillText(h7c, n4t, l9w);
			if (x0n)
			{
        let b6a = r6o.charCodeAt(0);
        b6a--;
        r6o = String.fromCharCode(b6a);
			}
			else
			{
        let b6a = r6o.charCodeAt(0);
        b6a++;
        r6o = String.fromCharCode(b6a);
			}
		}
	}
}

function w8a(w7v, fontSize)
{
	let t7f = new b1s();
	t7f.fontSize = fontSize;
	t7f.height = fontSize;
	t7f.width = fontSize;
	return t7f;
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

function a1y()
{
  whitePawnBitmap = a2a.s1o("images/pieces/Merida/wP");
 	whiteKnightBitmap = a2a.s1o("images/pieces/Merida/wN");
  whiteBishopBitmap = a2a.s1o("images/pieces/Merida/wB");
 	whiteRookBitmap = a2a.s1o("images/pieces/Merida/wR");
  whiteQueenBitmap = a2a.s1o("images/pieces/Merida/wQ");
 	whiteKingBitmap = a2a.s1o("images/pieces/Merida/wK");
  blackPawnBitmap = a2a.s1o("images/pieces/Merida/bP");
 	blackKnightBitmap = a2a.s1o("images/pieces/Merida/bN");
  blackBishopBitmap = a2a.s1o("images/pieces/Merida/bB");
 	blackRookBitmap = a2a.s1o("images/pieces/Merida/bR");
  blackQueenBitmap = a2a.s1o("images/pieces/Merida/bQ");
 	blackKingBitmap = a2a.s1o("images/pieces/Merida/bK");
}

function b5q()
{
  whitePawnBitmap = a2a.s1o("images/pieces/CBurnett/wP");
 	whiteKnightBitmap = a2a.s1o("images/pieces/CBurnett/wN");
  whiteBishopBitmap = a2a.s1o("images/pieces/CBurnett/wB");
 	whiteRookBitmap = a2a.s1o("images/pieces/CBurnett/wR");
  whiteQueenBitmap = a2a.s1o("images/pieces/CBurnett/wQ");
 	whiteKingBitmap = a2a.s1o("images/pieces/CBurnett/wK");
  blackPawnBitmap = a2a.s1o("images/pieces/CBurnett/bP");
 	blackKnightBitmap = a2a.s1o("images/pieces/CBurnett/bN");
  blackBishopBitmap = a2a.s1o("images/pieces/CBurnett/bB");
 	blackRookBitmap = a2a.s1o("images/pieces/CBurnett/bR");
  blackQueenBitmap = a2a.s1o("images/pieces/CBurnett/bQ");
 	blackKingBitmap = a2a.s1o("images/pieces/CBurnett/bK");
}

function b8d(v6h)
{
  if (v6h == 0)
  {
    b5q();
  }
  else
  {
    a1y();
  }
}

function w6l(j3b)
{
  switch (j3b)
	{
    case e0d.e5g:
      return whitePawnBitmap;
      break;
    case e0d.h8d:
      return whiteKnightBitmap;
      break;
    case e0d.a6r:
      return whiteBishopBitmap;
      break;
    case e0d.w7r:
      return whiteRookBitmap;
      break;
    case e0d.r9e:
      return whiteQueenBitmap;
      break;
    case e0d.a3m:
      return whiteKingBitmap;
      break;
    case e0d.x4q:
      return blackPawnBitmap;
      break;
    case e0d.z0l:
      return blackKnightBitmap;
      break;
    case e0d.l5t:
      return blackBishopBitmap;
      break;
    case e0d.b9w:
      return blackRookBitmap;
      break;
    case e0d.k2m:
      return blackQueenBitmap;
      break;
    case e0d.q8l:
      return blackKingBitmap;
      break;
    default:
      break
	}
  return null;
}

function t1k(w7v, rect, j3b)
{
  if (j3b == e0d.f3l) return;
	let s1o = w6l(j3b);
  w7v.drawImage(s1o, rect.y9z, rect.i1g, rect.s6g(), rect.f5i());
}
function b3s(n9m)
{
	let g0t = new r7e();
	let a0w = n9m.length;

 	let m0d = n9m.split(" ");
	if (m0d.length < 2)
	{
		return g0t;
	}

	let d3k = m0d[1];
	if (d3k.length)
	{
		if (d3k[0] == 'w')
		{
			g0t.d4y();
		}
		else if (d3k[0] == 'b')
		{
			g0t.z8m();
		}
	}

 	let e8s = m0d[0].split("/");
	if (e8s.length != 8)
	{
		return g0t;
	}
	let e6w = a8;
	for (const f5d of e8s)
	{
		let b1b = e6w;
		let a0w = f5d.length;
		for (let i = 0; i < a0w; i++)
		{
			if (b1b == e6w + 8)
			{
				return g0t; 
			}
			let j4g = true;
			switch (f5d[i])
			{
				case 'p':
					g0t.c8y(b1b, e0d.x4q);
					break;
				case 'n':
					g0t.c8y(b1b, e0d.z0l);
					break;
				case 'b':
					g0t.c8y(b1b, e0d.l5t);
					break;
				case 'r':
					g0t.c8y(b1b, e0d.b9w);
					break;
				case 'q':
					g0t.c8y(b1b, e0d.k2m);
					break;
				case 'k':
					g0t.c8y(b1b, e0d.q8l);
					break;
				case 'P':
					g0t.c8y(b1b, e0d.e5g);
					break;
				case 'N':
					g0t.c8y(b1b, e0d.h8d);
					break;
				case 'B':
					g0t.c8y(b1b, e0d.a6r);
					break;
				case 'R':
					g0t.c8y(b1b, e0d.w7r);
					break;
				case 'Q':
					g0t.c8y(b1b, e0d.r9e);
					break;
				case 'K':
					g0t.c8y(b1b, e0d.a3m);
					break;
				default:
					j4g = false;
					break;
			}
			if (j4g)
			{
				b1b = b1b + 1;
			}
			else
			{
				if (!isNaN(f5d[i]))
				{
					b1b = b1b + x2a(f5d[i], 0);
				}
			}
		}
		e6w = e6w - 8;
	}

 	if (m0d.length >= 3)
	{
		let h0w = new u3g(); 
		let p1h = m0d[2];
		if (p1h.length)
		{
			if (p1h[0] != '-')
			{
				let a0w = p1h.length;
				if (p1h[0] >= 'A' && p1h[0] <= 'H')
				{
 					h0w.b0a = true; 
          
					h0w.l9i = g0t.a3m();
					h0w.d1c = g0t.q8l();
					if (a0w == 4)
					{
						let w9b = p1h.charAt(0).toLowerCase();
						w9b += "1";
						h0w.k7i = f9c(w9b);
						if (g0t.m4s(h0w.k7i))
						{
							h0w.i0x = true;
						}
						w9b = p1h.charAt(1).toLowerCase();
						w9b += "1";
						h0w.g9m = f9c(w9b);
						if (g0t.m4s(h0w.g9m))
						{
							h0w.e8g = true;
						}
						w9b = p1h.charAt(2).toLowerCase();
						w9b += "8";
						h0w.t4k = f9c(w9b);
						if (g0t.b4l(h0w.t4k))
						{
							h0w.f2w = true;
						}
						w9b = p1h.charAt(3).toLowerCase();
						w9b += "8";
						h0w.v4w = f9c(w9b);
						if (g0t.b4l(h0w.v4w))
						{
							h0w.m2a = true;
						}
          }
				}
				else
				{
					for (let i = 0; i < a0w; i++)
					{
						switch (p1h[i])
						{
							case 'K':
								if (g0t.f7k(h0w.l9i) && g0t.m4s(h0w.k7i))
								{
									h0w.i0x = true;
								}
								break;
							case 'Q':
								if (g0t.f7k(h0w.l9i) && g0t.m4s(h0w.g9m))
								{
									h0w.e8g = true;
								}
								break;
							case 'k':
								if (g0t.k9v(h0w.d1c) && g0t.b4l(h0w.t4k))
								{
									h0w.f2w = true;
								}
								break;
							case 'q':
								if (g0t.k9v(h0w.d1c) && g0t.b4l(h0w.v4w))
								{
									h0w.m2a = true;
								}
								break;
						}
					}
				}
			}
		}
		if (m0d.length >= 4)
		{
			let s0f = m0d[3];
			if (s0f.length)
			{
				if (s0f[0] != '-')
				{
					h0w.v9x = f9c(s0f);
					if (p7m(h0w.v9x) == k6r)
					{
						let x5c = h0w.v9x + 8;
						let y8x = h0w.v9x - 8;
						if (!g0t.f2j(x5c) || !g0t.v8f(y8x))
						{
							h0w.v9x = o0a;
						}
					}
					else if (p7m(h0w.v9x) == v2p)
					{
						let x5c = h0w.v9x - 8;
						let y8x = h0w.v9x + 8;
						if (!g0t.f2j(x5c) || !g0t.d4v(y8x))
						{
							h0w.v9x = o0a;
						}
					}
					else
					{
						h0w.v9x = o0a;
					}
				}
			}
		}
		g0t.o4n(h0w);
	}
	return g0t;
}

function q8c(g0t)
{
	let n9m = '';
	let e6w = a8;
	for (let f5d = 7; f5d >= 0; f5d--)
	{
		let b1b = e6w;
		let v6w = 0;
		for (let r0w = 0; r0w < 8; r0w++)
		{
			if (g0t.f2j(b1b))
			{
				v6w++;
			}
			else
			{
				if (v6w)
				{
					n9m += v6w;
					v6w = 0;
				}
				switch (g0t.z9f(b1b))
				{
					case e0d.f3l:
						break;
					case e0d.e5g:
						n9m += 'P';
						break;
					case e0d.h8d:
						n9m += 'N';
						break;
					case e0d.a6r:
						n9m += 'B';
						break;
					case e0d.w7r:
						n9m += 'R';
						break;
					case e0d.r9e:
						n9m += 'Q';
						break;
					case e0d.a3m:
						n9m += 'K';
						break;
					case e0d.x4q:
						n9m += 'p';
						break;
					case e0d.z0l:
						n9m += 'n';
						break;
					case e0d.l5t:
						n9m += 'b';
						break;
					case e0d.b9w:
						n9m += 'r';
						break;
					case e0d.k2m:
						n9m += 'q';
						break;
					case e0d.q8l:
						n9m += 'k';
						break;
				}
			}
			b1b = b1b + 1;
		}
		if (v6w)
		{
			n9m += v6w;
		}
		e6w = (e6w - 8);
		if (f5d > 0)
		{
			n9m += "/";
		}
	}
	n9m += " ";
	if (g0t.q8z())
	{
		n9m += "w";
	}
	else
	{
		n9m += "b";
	}
	n9m += " ";
	let h0w = g0t.a0b();
	if (
		!h0w.i0x &&
		!h0w.e8g &&
		!h0w.f2w &&
		!h0w.m2a)
	{
		n9m += "-";
	}
	else
	{
		if (h0w.b0a)
		{
			if (h0w.i0x)
			{
				n9m += t8n(t5a(h0w.k7i)).toUpperCase();
			}
			if (h0w.e8g)
			{
				n9m += t8n(t5a(h0w.g9m)).toUpperCase();
			}
			if (h0w.f2w)
			{
				n9m += t8n(t5a(h0w.t4k)).toUpperCase();
			}
			if (h0w.m2a)
			{
				n9m += t8n(t5a(h0w.v4w)).toUpperCase();
			}
		}
		else
		{
			if (h0w.i0x)
			{
				n9m += "K";
			}
			if (h0w.e8g)
			{
				n9m += "Q";
			}
			if (h0w.f2w)
			{
				n9m += "k";
			}
			if (h0w.m2a)
			{
				n9m += "q";
			}
		}
	}
	n9m += " ";
	if (h0w.v9x == o0a)
	{
		n9m += "-";
	}
	else
	{
		n9m += g8y(h0w.v9x);
	}
	return n9m;
}

function p8w(g0t, v9r)
{
	
	

  let z9y = v9r.length;
	if (z9y < 2 || z9y > 7)
	{
		return false;
	}

	
	if (v9r[0] == 'Z' || (z9y == 2 && v9r == "--") || (z9y == 4 && v9r == "null"))
	{
		return new w9g();
	}

	
	let v1x = v9r[z9y-1];
	if (v1x == '+' || v1x == '#')
	{
		z9y--;
		if (z9y < 2)
		{
   		return false;
		}
	}

	
	if (v9r[0] == 'O' || v9r[0] == '0')
	{
		if (z9y == 3)
		{
			let n3m = l8s(g0t);
			if (n3m.length != 1)
			{
    		return false;
			}
			return n3m[0];
		}
		if (z9y == 5)
		{
			let n3m = k3k(g0t);
			if (n3m.length != 1)
			{
    		return false;
			}
			return n3m[0];
		}
 		return false;
	}

	
	let s8v = false;
	let o2y = e0d.f3l;
	if (v9r[z9y-2] == '=')
	{
		s8v = true;
		let y8i = v9r[z9y-1];
		if (y8i == 'N')
		{
			o2y = g0t.q8z() ? e0d.h8d : e0d.z0l;
		}
		else if (y8i == 'B')
		{
			o2y = g0t.q8z() ? e0d.a6r : e0d.l5t;
		}
		else if (y8i == 'R')
		{
			o2y = g0t.q8z() ? e0d.w7r : e0d.b9w;
		}
		else if (y8i == 'Q')
		{
			o2y = g0t.q8z() ? e0d.r9e : e0d.k2m;
		}
		else
		{
  		return false;
		}
		z9y -= 2;
		if (z9y < 2)
		{
  		return false;
		}
	}

 	
	let toString = '';
	toString += v9r[z9y-2];
	toString += v9r[z9y-1];
	let y8x = f9c(toString);
	if (y8x == o0a)
	{
		return false;
	}
	z9y -= 2;
	

 	if (s8v)
	{
		let n3m = k3w(g0t, y8x);
		if (n3m.length == 0)
		{
  		return false;
		}
		let m5i = [];
		for (const u7k of n3m)
		{
			if (u7k.d9u == o2y)
			{
				m5i.push(u7k);
			}
		}
		n3m = m5i;
		if (n3m.length == 1)
		{
			return n3m[0];
		}
		if (z9y == 0)
		{
			
			for (const l3n of n3m)
			{
				if (l3n.l5b == o0a)
				{
					return l3n;
				}
			}
  		return false;
		}
		if (z9y != 2)
		{
  		return false;
		}
		
		let v1x = v9r[0];
		if (v1x < 'a' || v1x > 'h')
		{
  		return false;
		}
		let a4d = c0k(v1x);
		for (const l3n of n3m)
		{
			if (t5a(l3n.o3y) == a4d)
			{
				return l3n;
			}
		}
		return false;
	}

	if (z9y == 0)
	{
  	
		let n3m = k3w(g0t, y8x);
		if (n3m.length != 1)
		{
  		return false;
		}
		return n3m[0];
	}

  
	let d4i = false;
	let n3m = [];
	let c4b = v9r[0];
	if (c4b == 'N')
	{
		n3m = j2w(g0t, y8x);
	}
	else if (c4b == 'B')
	{
		n3m = e1a(g0t, y8x);
	}
	else if (c4b == 'R')
	{
		n3m = j4o(g0t, y8x);
	}
	else if (c4b == 'Q')
	{
		n3m = j9r(g0t, y8x);
	}
	else if (c4b == 'K')
	{
		
		n3m = i7g(g0t, y8x);
	}
	else
	{
		d4i = true;
		n3m = k3w(g0t, y8x);
	}
	if (n3m.length == 0)
	{
		return false;
	}
	if (n3m.length == 1)
	{
		return n3m[0]; 
	}

	
	
	
	if (z9y < 2)
	{
		return false;
	}

 	if (d4i)
	{
		let v1x = v9r[0]; 
		if (v1x < 'a' || v1x > 'h')
		{
  	  return false;
		}
		let a4d = c0k(v1x);
		for (const l3n of n3m)
		{
			if (t5a(l3n.o3y) == a4d && l3n.l5b != o0a)
			{
				return l3n;
			}
		}
		return false;
	}

	

 	
	let y5a = false;
	if (v9r[z9y-1] == 'x')
	{
		y5a = true;
		z9y--;
	}
	else if (v9r[z9y-1] == '-') 
	{
		y5a = false;
		z9y--;
	}

	if (z9y < 2)
	{
		return false;
	}

 	if (z9y == 2)
	{
		
		let v1x = v9r[1]; 
		if (v1x >= 'a' && v1x <= 'h')
		{
			let a4d = c0k(v1x);
			let k1y  = 0;
      let j3n = null;
			for (const l3n of n3m)
			{
				if (t5a(l3n.o3y) == a4d)
				{
					j3n = l3n;
					k1y++;
				}
			}
      return k1y === 1 ? j3n : false;
		}
		if (v1x >= '1' && v1x <= '8')
		{
			let d8a = v4b(v1x);
			let k1y = 0;
      let j3n = null;
			for (const l3n of n3m)
			{
				if (p7m(l3n.o3y) == d8a)
				{
					j3n = l3n;
					k1y++;
				}
			}
      return k1y === 1 ? j3n : false;
		}
		return false;
	}

 	if (z9y == 3)
	{
		
		let u9o = '';
		u9o += v9r[1]; 
		u9o += v9r[2];
		let x5c = f9c(u9o);
		if (x5c == o0a)
		{
  		return false;
		}
		let k1y = 0;
    let j3n = null;
		for (const l3n of n3m)
		{
			if (l3n.o3y == x5c)
			{
				j3n = l3n;
				k1y++;
			}
		}
    return k1y === 1 ? j3n : false;
	}

	return false;
}

function y6y()
{
  let u9l = ["images/board/BoardBackground.png",
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
  return u9l;
}
function div(a3v, p6n)
{
  const g2j = a3v % p6n;
  const quot = Math.floor((a3v - g2j) / p6n);
  return { quot: quot, g2j: g2j };
}

function y8n(g0t, w9b)
{
	let u7k = new w9g();
	if (w9b.length < 4)
	{
		return u7k;
	}
	let u9o = w9b.slice(0, 2);
	let toString = w9b.slice(2, 4);
	u7k.o3y = f9c(u9o);
  u7k.e8d = g0t.z9f(u7k.o3y);
	u7k.y9w = f9c(toString);
	u7k.d9u = u7k.e8d;
	if (w9b.length == 5)
	{
		switch (w9b[4])
		{
			case 'q':
				u7k.d9u = g0t.q8z() ? e0d.r9e : e0d.k2m;
				break;
			case 'r':
				u7k.d9u = g0t.q8z() ? e0d.w7r : e0d.b9w;
				break;
			case 'b':
				u7k.d9u = g0t.q8z() ? e0d.a6r : e0d.l5t;
				break;
			case 'n':
				u7k.d9u = g0t.q8z() ? e0d.h8d : e0d.z0l;
				break;
		}
	}
	return u7k;
}

class e1o
{

constructor()
{
	let m2v = '';
	let value = '';
}

}

function z5g(w9b, m2v, q9m)
{
  let u3m = " " + m2v + " ";
  let b0x = w9b.indexOf(u3m, 0);
	if (b0x >= 0)
	{
		let i0i = b0x + u3m.length;
		let t8x = 0;
		
		if (m2v == "pv")
		{
			t8x = w9b.indexOf(" string ", i0i);
		}
		else
		{
			t8x = w9b.indexOf(" ", i0i);
		}
		if (t8x < 0)
		{
			t8x = w9b.length;
		}
    let value = w9b.slice(i0i, t8x).trim();
		q9m.set(m2v, value);
	}
}

const u4n =
{
	z2w        : 0,
	n1p      : 1,
};

class Engine
{

constructor()
{
	this.p9d = new o8i();
  this.o2u = null;
  this.w8m = new j8l();
  this.a8f = new a2r();
  this.h9t = false;
  this.w6x = false;
  this.a0p = false;
  this.y4z = false;
  this.b1r = false;
  this.p8q = new d9z();
	this.e5d = new g6u();
  this.p2b = null;
}

z3c(v7w)
{
  this.p9d = v7w.v0z();
  this.x9z();
  this.h9t = false;
 	for (const d9e of this.p9d.y3e.y3e)
	{
		if (d9e.m2v == "MultiPV")
		{
			this.h9t = (d9e.value != "1");
			break;
		}
	}

  this.f9x();
}

/*
f9x()
{
  this.o2u = new Worker("engines/stockfish/stockfish-17.1-8e4d048.js");
  this.o2u.p2b = (event) => {
    this.n1p(event);
  };
}
*/


async f9x() {
    var self = this;
    this.engineStarted = false; 
    this.w6x = false;        

    var jsUrl = "https://kb5963.github.io/my-web-files/engines/stockfish/stockfish.js";
    var wasmFolder = "https://kb5963.github.io/my-web-files/engines/stockfish/";

    try {
        const response = await fetch(jsUrl);
        const scriptText = await response.h5k();

        var pathFix = `var Module = { locateFile: function(path) { if (path.endsWith('.wasm')) { return "${wasmFolder}" + path; } return path; } };`;

        var blob = new Blob([pathFix + scriptText], { type: 'application/javascript' });
        var blobUrl = URL.createObjectURL(blob);

        this.o2u = new Worker(blobUrl);

        this.o2u.p2b = (event) => {
            const h5z = event.data;
            if (typeof h5z === 'string' && h5z.includes("Stockfish") && !this.engineStarted) {
                console.log("System: Engine is ONLINE - Sending UCI");
                this.engineStarted = true;
                this.l6x(); 
            }
            this.n1p(event);
        };
    } catch (e) {
        console.error("System: Engine failed to load.", e);
    }
}

l6x()
{
	this.w8m.a1t();
	this.a8f.a1t();
	this.z2w("uci");
}

b9r() {
    if (!this.a0p) return;

    
    for (const d9e of this.p9d.y3e.y3e) {
        this.z2w("setoption name " + d9e.m2v + " value " + d9e.value);
    }

    
    this.z2w("setoption name UCI_Variant value chess");

    
    this.z2w("isready");
    this.a0p = false;
}

/*
b9r()
{
	if (!this.a0p)
	{
    return;
  }

  
	for (const d9e of this.p9d.y3e.y3e)
	{
		let h5z = "setoption";
		h5z += " name ";
		h5z += d9e.m2v;
		h5z += " value ";
		h5z += d9e.value;
		this.z2w(h5z);
	}
  
  
  
  

	this.z2w("isready");
	this.a0p = false;
  this.w6x = true; 
}
*/


z2w(c9b) {
    this.q9j(c9b, u4n.z2w);
    
    if (this.o2u) {
        this.o2u.postMessage(c9b);
    } else {
        console.log("Engine still loading... command queued: " + c9b);
    }
}

/*
z2w(c9b)
{
	this.q9j(c9b, u4n.z2w);
  this.o2u.postMessage(c9b);
}
*/

n1p(event)
{
  
  
 	this.q9j(event.data, u4n.n1p);
	this.r3o(event.data);
}

/*
r3o(h5z)
{
	let m0d = h5z.split(' ');
	if (m0d.length == 0) return;
	let c9b = m0d[0];

	if (c9b == "readyok")
	{
		this.w6x = true;
    if (this.p2b)
    {
      this.p2b({
        cmd: "ready",
        data: {}
        });
    }
		return;
	}
	if (c9b == "bestmove")
	{
		this.n4i(h5z);
	}
	else if (c9b == "id")
	{
		this.j2q(h5z);
	}
	else if (c9b == "info")
	{
		this.u5o(h5z);
	}
	else if (c9b == "option")
	{
		this.k6s(h5z);
	}
	else if (c9b == "uciok")
	{
		this.o4z(h5z);
	}
}
*/

r3o(h5z) {
    let m0d = h5z.split(' ');
    if (m0d.length == 0 || m0d[0] === "") return;
    let c9b = m0d[0];

    
    if (c9b == "readyok") {
        console.log("System: Engine is READY");
        this.w6x = true;
        if (this.p2b) {
            this.p2b({ cmd: "ready", data: {} });
        }
        return;
    }

    if (c9b == "uciok") {
        this.o4z(h5z); 
    }
    else if (c9b == "bestmove") {
        this.n4i(h5z);
    }
    
  	else if (c9b == "id")
	  {
  		this.j2q(h5z);
	  }
  	else if (c9b == "info")
	  {
  		this.u5o(h5z);
	  }
  	else if (c9b == "option")
	  {
  		this.k6s(h5z);
	  }
}

n4i(h5z)
{
	this.y4z = false;
  if (this.b1r)
  {
    this.b1r = false;
    this.q0b();
  }
}

j2q(h5z)
{
 	let w9b = h5z;
	let m0d = w9b.split(" ");
	if (m0d.length < 3) return;

  const word1 = m0d.shift();
  const word2 = m0d.shift();
  const value = m0d.join(' ');

  
  if (word2 == "name")
  {
    this.w8m.m2v = value.trim();
  }
  else if (word2 == "author")
  {
    this.w8m.p9v = value.trim();
  }
}

u5o(h5z)
{
	let w9b = h5z;
	let q9m = new Map();
	z5g(w9b, "depth", q9m);
 	z5g(w9b, "seldepth", q9m);
	z5g(w9b, "pv", q9m);
	z5g(w9b, "nps", q9m);
	z5g(w9b, "nodes", q9m);
	z5g(w9b, "score cp", q9m);
	z5g(w9b, "score mate", q9m);
	z5g(w9b, "time", q9m);
	z5g(w9b, "currmove", q9m);
	z5g(w9b, "currmovenumber", q9m);
 	z5g(w9b, "multipv", q9m);

  if (q9m.has("pv") && q9m.has("depth"))
  {
		this.u8n(q9m);
    if (this.p2b)
    {
      this.p2b({
        cmd: "pv",
        data: {}
        });
    }

		return;
  }

  if (q9m.has("currmove") && q9m.has("currmovenumber"))
	{
		this.d6h(q9m);
    if (this.p2b)
    {
      this.p2b({
        cmd: "cm",
        data: {}
        });
    }
		return;
	}
}

k6s(h5z)
{
	let d9e = new r7y();
	let w9b = h5z;

	let g7l = " name ";
  let u1c = w9b.indexOf(g7l, 0);
	if (u1c < 0) return;
	let x9p = u1c + g7l.length;

	let e0n = " type ";
	let d6w = w9b.indexOf(e0n, 0);
	if (d6w < 0) return;
	let p6w = d6w;

	let n3p = d6w + e0n.length;
	let c8f = w9b.indexOf(" ", n3p);
	if (c8f < 0) c8f = w9b.length + 1;

	d9e.m2v = w9b.slice(x9p, p6w);
	d9e.type = w9b.slice(n3p, c8f);

	if (d9e.type == "check")
	{
		d9e.type = "bool";
	}
	else if (d9e.type == "combo")
	{
		d9e.type = "enum";
	}

	let p9m = " default ";
	let e8h = w9b.indexOf(p9m, 0);
	if (e8h >= 0)
	{
		let d4s = e8h + p9m.length;
		let k6t = w9b.indexOf(" ", d4s);
		if (k6t < 0) k6t = w9b.length + 1;
		d9e.value = w9b.slice(d4s, k6t);
		if (d9e.value == "<empty>")
		{
			d9e.value = "";
		}
	}
	if (d9e.type == "spin")
	{
		let f9t = " min ";
		let t9m = w9b.indexOf(f9t, 0);
		if (t9m >= 0)
		{
			let x2j = t9m + f9t.length;
			let a1n = w9b.indexOf(" ", x2j);
			if (a1n < 0) a1n = w9b.length + 1;
			d9e.min = w9b.slice(x2j, a1n).trim();
		}
		let r7s = " max ";
		let e5b = w9b.indexOf(r7s, 0);
		if (e5b >= 0)
		{
			let h6x = e5b + r7s.length;
			let w5j = w9b.indexOf(" ", h6x);
			if (w5j < 0) w5j = w9b.length + 1;
			d9e.max = w9b.slice(h6x, w5j).trim();
		}
	}
	else if (d9e.type == "enum")
	{
		let m4t = 0;
		while (true)
		{
			let o5f = " var ";
			let i5d = w9b.indexOf(o5f, m4t);
			if (i5d < 0) break;
			let v0k = i5d + o5f.length;
			let s7b = w9b.indexOf(" var ", i5d + 5);
			if (s7b < 0) s7b = w9b.length + 1;
			if (d9e.values.length != 0)
			{
				d9e.values += " ";
			}
			d9e.values += w9b.slice(v0k, s7b).trim();
			m4t = s7b;
		}
	}
	this.a8f.y3e.push(d9e);
}

o4z(h5z)
{
	this.a0p = true;
  this.b9r();
}


w2b()
{
	if (this.o2u)
  {
    this.z2w("quit");
    this.o2u.terminate();
    this.o2u = null;
  }
}








q0u()
{
}

o6v(input)
{
	if (this.w6x)
	{
  	this.q9j('setInput', u4n.z2w);
		this.p8q = input.v0z();
    if (this.y4z)
    {
      this.b1r = true;
      this.z2w('stop');
    }
    else
    {
      this.q0b();
    }
	}
}

q0b()
{
  this.e5d = new g6u();
  this.e5d.g0t = this.p8q.f7w();
  this.e5d.u0w = this.p8q.u0w();
	this.e5d.k7q = this.h9t;
  this.y4z = true;
  if (this.p2b)
  {
    this.p2b({
      cmd: "go",
      data: {}
      });
  }

  let h5z = "position fen";
  h5z += " ";
	let n9m = q8c(this.p8q.f7w());
	h5z += n9m;
	this.z2w(h5z);
	if (this.p8q.y8q == n7n)
	{
		h5z = "go infinite";
		this.z2w(h5z);
	}
	else
	{
		h5z = "go movetime ";
		h5z += this.p8q.y8q;
		this.z2w(h5z);
	}
}

x9z()
{
}

q9j(w9b, z7d)
{
	if (!this.p9d.x9e) return;
 	if (z7d == u4n.n1p)
	{
    console.log("From engine:", w9b);
	}
	else
	{
    console.log("To engine:", w9b);
	}
}

u8n(q9m)
{
  let z7u = q9m.get("depth");
  let e6q = q9m.get("multipv");

	let b5z = new p2r();
	b5z.n3v = z7u;

	if (q9m.has("seldepth"))
	{
		b5z.t2e = q9m.get("seldepth");
	}

 	if (q9m.has("nps"))
	{
    let z9s = q9m.get("nps");
		let i0z = x2a(z9s, 0);
		let q8t = i0z / 1000;
		if (q8t)
		{
			b5z.z3w = q8t + " kN/s";
		}
	}

	let l5g = 0.0;
  if (q9m.has("score cp"))
	{
    let p2m = q9m.get("score cp");
		l5g = parseFloat(p2m);
		l5g = l5g / 100.0;
		if (l5g > 9.99)
		{
			l5g = 9.99;
		}
		if (l5g < -9.99)
		{
			l5g = -9.99;
		}
		if (this.e5d.g0t.x4b())
		{
			l5g = -l5g;
		}
		b5z.l5g = l5g;
	}
  if (q9m.has("score mate"))
	{
    let s6y = q9m.get("score mate");
		let c9o = x2a(s6y, 0);
		if (this.e5d.g0t.x4b())
		{
			c9o = -c9o;
		}
		b5z.c9o = c9o;
		if (c9o > 0)
		{
			l5g = 9.99;
		}
		if (c9o < 0)
		{
			l5g = -9.99;
		}
		b5z.l5g = l5g;
	}

  if (q9m.has("time"))
	{
    let j7x = q9m.get("time");
		let d2p = x2a(j7x, 0);
		let r6i = d2p / 1000;
		let m = div(r6i, 60);
		let i2x = m.g2j;
    i2x = Math.i4e(i2x);
		let h = div(m.quot, 60);
		let r6p = h.g2j;
		let v5m = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const w2d = `${pad(v5m)}:${pad(r6p)}:${pad(i2x)}`;
    b5z.w2d = w2d;
	}

  let l1l = q9m.get("pv");
	let j6g = l1l.split(" ");

	let x5y = new w4t();
	let u0w = this.e5d.u0w;
	x5y.d9r(this.e5d.g0t, u0w);
	let t9a = x5y.i7v();
	let t5w = this.e5d.g0t.v0z();
	for (const s of j6g)
	{
		if (s.length == 0)
		{
			continue;
		}
		let x1a = y8n(t5w, s);
		let n3m = m1f(t5w);
		let j4g = false;
		for (const l3n of n3m)
		{
			if (l3n.y9w == x1a.y9w &&
				l3n.o3y == x1a.o3y &&
				l3n.d9u == x1a.d9u)
			{
				t5w.v1s(l3n);
				let u7k = k8a(l3n);
				x5y.h8t(t9a, u7k);
				j4g = true;
				break;
			}
		}
    if (!j4g) break;
	}
	if (!x5y.f4v())
	{
    console.log("parse moves aantal: leeg!");
		return;
	}
  console.log("parse moves aantal: " + x5y.f4v());
	b5z.x5y = x5y;

 	if (this.h9t)
	{
		if (e6q == 1)
		{
			this.e5d.j6y = b5z;
		}
		if (e6q > this.e5d.lines.length)
		{
			this.e5d.lines.push(b5z);
		}
		else
		{
			this.e5d.lines[e6q-1] = b5z;
		}
	}
	else
	{
		this.e5d.lines.push(b5z);
		this.e5d.j6y = b5z;
	}
}

d6h(q9m)
{
  let e4t = q9m.get("currmove");
  let x3u = q9m.get("currmovenumber"); 
	this.e5d.m1a = x2a(x3u, 0);
	let n3m = m1f(this.e5d.g0t);
	this.e5d.j0h = n3m.length;
	let x1a = y8n(this.e5d.g0t, e4t);
	for (const l3n of n3m)
	{
		if (l3n.y9w == x1a.y9w &&
			l3n.o3y == x1a.o3y &&
			l3n.d9u == x1a.d9u)
		{
			this.e5d.i6t = l3n;
			break;
		}
	}
}

n0r()
{
	return this.e5d.v0z();
}

v7w()
{
	return this.p9d.v0z();
}

}

class j8l
{

constructor()
{
	this.m2v = '';
	this.p9v = '';
	this.q0s = '';
	this.j8y = '';
}

v0z()
{
  return Object.assign(new j8l(), this);
}

a1t()
{
	this.m2v = '';
	this.p9v = '';
	this.q0s = '';
	this.j8y = '';
}

}


const n7n = 10000000;

class d9z
{

constructor()
{
	this.x5y = new w4t();
	this.y8q = n7n;
  this.q2f = 0;
	this.y6q = 0;
}

v0z()
{
	let t1w = new d9z();
  t1w.x5y = this.x5y.v0z();
  t1w.y8q = this.y8q;
  t1w.q2f = this.q2f;
  t1w.y6q = this.y6q;
	return t1w;
}

u0w()
{
	return this.x5y.j1a(this.x5y.x3i());
}

f7w()
{
	return this.x5y.w4g();
}

}


class o8i
{

constructor()
{
	this.t2i = '';
	this.id = new j8l();
	this.y3e = new a2r();
	this.g8q = new a2r();
	this.x9e = true;
	this.l2p = true;
}

v0z()
{
	let m8p = new o8i();
	m8p.t2i = this.t2i;
	m8p.id = this.id.v0z();
	m8p.y3e = this.y3e.v0z();
	m8p.g8q = this.g8q.v0z();
	m8p.x9e = this.x9e;
	m8p.l2p = this.l2p;
	return m8p;
}


}


function l6d(l5g)
{
  if (Math.abs(l5g) < 0.005)
  {
    return "0.00";
  }
  else
  {
     const formatted = l5g.toFixed(2);
     return l5g > 0 ? `+${formatted}` : formatted;
  }
}

class p2r
{

constructor()
{
	this.l5g = 0.0;
	this.c9o = false;
	this.n3v = '';
	this.t2e = '';
	this.w2d = '';
	this.z3w = '';
	this.x5y = new w4t();
}

v0z()
{
	let w1c = new p2r();
  w1c.l5g = this.l5g;
  w1c.c9o = this.c9o;
  w1c.n3v = this.n3v;
  w1c.t2e = this.t2e;
  w1c.w2d = this.w2d;
  w1c.z3w = this.z3w;
  w1c.x5y = this.x5y.v0z();
	return w1c;
}

g0a()
{
	if (this.c9o)
	{
		return "#" + this.c9o;
	}
	else
	{
		return l6d(this.l5g);
	}
}

h7l()
{
	let u2n = scoreToMoveValue(this.l5g);
	let y6r = moveValueToEvalString(u2n);
	return y6r;
}

}

class g6u
{

constructor()
{
	this.g0t = new r7e();
	this.u0w = 1;
	this.c2h = false;
	this.p6g = false;
	this.k7q = false;
	this.lines = [];
	this.j6y = new p2r();
	this.i6t = new w9g();
	this.m1a = 0;
	this.j0h = 0;
}

v0z()
{
	let p6x = new g6u();
  p6x.g0t = this.g0t.v0z();
  p6x.u0w = this.u0w;
  p6x.c2h = this.c2h;
  p6x.p6g = this.p6g;
  p6x.k7q = this.k7q;
  p6x.lines = this.lines.slice();
  p6x.j6y = this.j6y.v0z();
  p6x.i6t = this.i6t.v0z();
  p6x.m1a = this.m1a;
  p6x.j0h = this.j0h;
	return p6x;
}

l3z()
{
	return this.j6y.x5y.f4v() > 0;
}

w4d()
{
	let l3h = this.j6y.x5y.i7v();
	this.j6y.x5y.v1s(l3h);
	return l3h.u7k.l3n();
}

}


class r7y
{
  constructor(type = '', m2v = '', value = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.m2v = m2v;
    this.value = value;
    this.min = min;
    this.max = max;
    this.values = values;
  }

  v0z()
  {
    return Object.assign(new r7y(), this);
  }
}

class a2r
{
  constructor()
  {
    this.y3e = [];
  }

  v0z()
  {
    let o1y = new a2r();
    o1y.y3e = this.y3e.map(p => p.v0z());
    return o1y;
  }

  a1t()
  {
    this.y3e.length = 0;
  }

  addBool(m2v, value)
  {
    this.y3e.push(new r7y("bool", m2v, value));
  }

  addInteger(m2v, value)
  {
    this.y3e.push(new r7y("int", m2v, value));
  }

  addSpin(m2v, value, min, max)
  {
    this.y3e.push(new r7y("spin", m2v, value, min, max));
  }

  addString(m2v, value)
  {
    this.y3e.push(new r7y("string", m2v, value));
  }

  addEnum(m2v, value, values)
  {
    this.y3e.push(new r7y("enum", m2v, value, '', '', values));
  }

  addButton(m2v)
  {
    this.y3e.push(new r7y("button", m2v, m2v));
  }

  x6r(m2v, value)
  {
    for (let d9e of this.y3e)
    {
      if (d9e.m2v === m2v)
      {
        d9e.value = value;
      }
    }
  }
}
class w2z
{

constructor()
{
	this.m2v = '';
}

v0z()
{
	let t6y = new w2z();
	t6y.m2v = this.m2v;
	return t6y;
}

f3l()
{
	return this.m2v.length == 0;
}

u9w()
{
	return this.m2v;
}

}


const u4d =
{
	h4o : 0,
	h5j : 1,
	k3p: 2,
	k7f: 3,
	u0g: 4,
	y3r: 5,
	c3y: 6,
	u9y: 7,
	o0l: 8,
	h2i: 9,
	j4x: 10,
	v2g: 11,
	a4m: 12,
	t1o: 13,
	p0u: 14,
	m5m: 15,
	e2t: 16,
	s9t: 17,
	s2p: 18,
	v7l: 19,
	i9y: 20,
	p2o: 21,
	u3a: 22,
	i5c: 23,
	x6q: 24,
	d1z: 25,
	o6l: 26,
	q8u: 27,
	p5f: 28,
	c6e: 29,
	o4w: 30,
	m6x: 31,
	s3x: 32,
	m0i: 33,
	c7c: 34,
	c9c: 35,
	s5t: 36,
	o1t: 37,
	u5n: 38,
	q0t: 39,
	f7b: 40,
	m7o: 41,
	c7a: 42,
	w4r: 43,
	f1k: 44,
	f0d: 45,
	y9v: 46,
	w4f: 47,
	m2o: 48,
	v0e: 49,
	m1h: 50,
	b7x: 51,
	y4r: 52,
	t1f: 53,
	z3l: 54,
	v4r: 55,
	r7z: 56,
	e1b: 57,
	s9a: 58,
	e3u: 59,
	c8a: 60,
	y4u: 61,
	q6t: 62,
	d1l: 63,
	a7w: 64,
	r5l: 65,
	h6r: 66,
	s6c: 67,
	h0u: 68,
	c7i: 69,
	c4y: 70,
	y0k: 71,
	x6w: 72,
	q9e: 73,
	t0w: 74,
	m6d: 75,
	q8i: 76,
	m0e: 77,
	c4t: 78,
	z8x: 79,
	z4q: 80,
	k0o: 81,
	q3d: 82,
	z6e: 83,
	r8a: 84,
	w4c: 85,
	b5d: 86,
	z6i: 87,
	i3w: 88,
	p4l: 89,
	n0p: 90,
	m3q: 91,
	i2r: 92,
	p8e: 93,
	f8q: 94,
	v9z: 95,
	z4y: 96,
	z8i: 97,
	q3u: 98,
	o1n: 99,
	a8z: 100,
	e5v: 101,
	p6f: 102,
	i0w: 103,
	r1d: 104,
	l2e: 105,
	c4n: 106,
	e0r: 107,
	d7h: 108,
	w2q: 109,
	d2i: 110,
	h4n: 111,
	a9l: 112,
	n2v: 113,
	v0v: 114,
	g9p: 115,
	e2i: 116,
	r2z: 117,
	y1o: 118,
	n5u: 119,
	o2f: 120,
	z3f: 121,
	u7r: 122,
	y1c: 123,
	i1n: 124,
	s5b: 125,
	t3r: 126,
	s9x: 127,
	i4z: 128,
	s9w: 129,
	w9k: 130,
	z6z: 131,
	o5b: 132,
	v4y: 133,
	i8v: 134,
	a3u: 135,
	h5v: 136,
	n8h: 137,
	j9o: 138,
	k5l: 139,
	u5x: 140,
	m0h: 141,
	a9k: 142,
	q2z: 143,
	x3j: 144,
	x2u: 145,
	r4a: 146,
	j9e: 147,
	y7j: 148,
	n6m: 149,
	x3g: 150,
	v4l: 151,
	a4s: 152,
	j8h: 153,
	j2s: 154,
	j8f: 155,
	u2f: 156,
	m0f: 157,
	k1p: 158,
	m4z: 159,
	m8m: 160,
	f7q: 161,
	y6p: 162,
	u9u: 163,
	p1z: 164,
	g3t: 165,
	r2m: 166,
	r1y: 167,
	r5e: 168,
	p2v: 169,
	e0j: 170,
	u1k: 171,
	e4e: 172,
	h5q: 173,
	s2t: 174,
	w1q: 175,
	x9g: 176,
	z6b: 177,
	x1n: 178,
	u0e: 179,
	h9n: 180,
	g0c: 181,
	i5r: 182,
	w8o: 183,
	r6j: 184,
	t4i: 185,
	v2y: 186,
	p3n: 187,
	d7k: 188,
	e5a: 189,
	q9g: 190,
	r2u: 191,
	e2x: 192,
	z8t: 193,
	i5s: 194,
	n1q: 195,
	y8r: 196,
	h9x: 197,
	m0p: 198,
	q2u: 199,
	h0e: 200,
	k8g: 201,
	q4h: 202,
	f4i: 203,
	m6b: 204,
	u4g: 205,
	z1w: 206,
	w6v: 207,
	x2w: 208,
	v6b: 209,
	b8x: 210,
	h0p: 211,
	p4x: 212,
	g6c: 213,
	q8o: 214,
	j3r: 215,
	f0p: 216,
	x3x: 217,
	i8q: 218,
	a6p: 219,
	r0j: 220,
	x7l: 221,
	c5p: 222,
	w8f: 223,
	a1u: 224,
	o3l: 225,
	u2e: 226,
	m2p: 227,
	w6c: 228,
	m3d: 229,
	e7f: 230,
	a4u: 231,
	d4h: 232,
	a5b: 233,
	e4l: 234,
	b1h: 235,
	q0j: 236,
	y1w: 237,
	f2v: 238,
	u5s: 239,
	g5w: 240,
	u3e: 241,
	t4l: 242,
	c3n: 243,
	e5h: 244,
	d1w: 245,
	j9b: 246,
	g5t: 247,
	s0o: 248,
	f4g: 249,
	o3n: 250,
	u0n: 251,
	p1q: 252,
	n2b: 253,
	f5y: 254,
	m8h: 255,
	n8s: 256,
	y5z: 257,
	r5t: 258,
	k8w: 259
};


const f8l = 0;
const y0i = 500;

function w7y(w9b)
{
	if (w9b.length != 3)
	{
		return 0;
	}
	let d6m = w9b[0];
	let m0a = w9b[1];
	let o7q = w9b[2];

	let r6k = 0;
	if (d6m == 'A' || d6m == 'a') r6k = 0;
	else if (d6m == 'B' || d6m == 'b') r6k = 1;
	else if (d6m == 'C' || d6m == 'c') r6k = 2;
	else if (d6m == 'D' || d6m == 'd') r6k = 3;
	else if (d6m == 'E' || d6m == 'e') r6k = 4;
	else return 0;
	if (isNaN(m0a) || isNaN(o7q))
	{
		return 0;
	}
	return r6k * 100 + x2a(w9b.substr(1, 2), 0) + 1;
}

function k0h(b8q)
{
	if (b8q)
	{
		let div = Math.trunc((b8q - 1) / 100);
		let g2j = (b8q - 1) % 100;
		let k9b = 'A';
		if (div == 0) k9b = 'A';
		else if (div == 1) k9b = 'B';
		else if (div == 2) k9b = 'C';
		else if (div == 3) k9b = 'D';
		else if (div == 4) k9b = 'E';
		return k9b + g2j.toString().padStart(2, '0');
	}
	else
	{
		return "";
	}
}
class i2j
{

constructor()
{
	this.c8k = 0;
	this.a5f = 0;
	this.e8e = 0;
}

v0z()
{
	let g7m = new i2j();
	g7m.v9f = this.c8k;
	g7m.r2l = this.a5f;
	g7m.s2q = this.e8e;
	return g7m;
}

f3l()
{
	return this.e8e == 0 && this.a5f == 0 && this.c8k == 0;
}

l9v()
{
	let s2q = this.e8e.toString().padStart(4, '0');
	let r2l = this.a5f.toString().padStart(2, '0');
	let v9f = this.c8k.toString().padStart(2, '0');
	return s2q + r2l + v9f;
}

e4h(q4v, w9b)
{
	let a0w = w9b.length;
	if (!a0w)
	{
		this.e8e = 0;
		this.a5f = 0;
		this.c8k = 0;
	}
	else if (q4v == "dd-mm-yyyy" || q4v == "dd.mm.yyyy")
	{
  	if (a0w == 4)
		{
      this.e8e = x2a(w9b.substr(1, 4), 0);
		}
		else if (a0w == 10)
		{
			this.c8k = x2a(w9b.substr(0, 2), 0);
			this.a5f = x2a(w9b.substr(3, 2), 0);
			this.e8e = x2a(w9b.substr(6, 4), 0);
		}
	}
	else if (q4v == "yyyy-mm-dd" || q4v == "yyyy.mm.dd")
	{
  	if (a0w == 4)
		{
      this.e8e = x2a(w9b.substr(1, 4), 0);
		}
		else if (a0w == 10)
		{
			this.c8k = x2a(w9b.substr(8, 2), 0);
			this.a5f = x2a(w9b.substr(5, 2), 0);
			this.e8e = x2a(w9b.substr(0, 4), 0);
		}
	}
	else if (q4v == "dd-mm-yy" || q4v == "dd.mm.yy")
	{
		if (a0w == 8)
		{
			this.c8k = x2a(w9b.substr(0, 2), 0);
			this.a5f = x2a(w9b.substr(3, 2), 0);
			this.e8e = x2a(w9b.substr(6, 2), 0) + 2000;
		}
	}
}

toString(q4v)
{
	let w9b = '';
	if (this.f3l())
	{
	}
	else if (q4v == "list")
	{
		let s2q = this.e8e.toString().padStart(4, '0');
		let r2l = this.a5f.toString().padStart(2, '0');
		let v9f = this.c8k.toString().padStart(2, '0');
		if (this.c8k)
		{
			w9b = v9f + "-" + r2l + "-" + s2q;
		}
		else if (this.a5f)
		{
			w9b = r2l + "-" + s2q;
		}
		else if (this.e8e)
		{
			w9b = s2q;
		}
	}
	else if (q4v == "dd-mm-yyyy")
	{
		let s2q = this.e8e.toString().padStart(4, '0');
		let r2l = this.a5f.toString().padStart(2, '0');
		let v9f = this.c8k.toString().padStart(2, '0');
		w9b = v9f + "-" + r2l + "-" + s2q;
	}
	else if (q4v == "dd.mm.yyyy")
	{
		let s2q = this.e8e.toString().padStart(4, '0');
		let r2l = this.a5f.toString().padStart(2, '0');
		let v9f = this.c8k.toString().padStart(2, '0');
		w9b = v9f + "." + r2l + "." + s2q;
	}
	else if (q4v == "yyyy-mm-dd")
	{
		let s2q = this.e8e.toString().padStart(4, '0');
		let r2l = this.a5f.toString().padStart(2, '0');
		let v9f = this.c8k.toString().padStart(2, '0');
		w9b = s2q + "-" + r2l + "-" + v9f;
	}
	else if (q4v == "yyyy.mm.dd")
	{
		let s2q = this.e8e.toString().padStart(4, '0');
		let r2l = this.a5f.toString().padStart(2, '0');
		let v9f = this.c8k.toString().padStart(2, '0');
		w9b = s2q + "." + r2l + "." + v9f;
	}
	else if (q4v == "yyyymmdd")
	{
		let s2q = this.e8e.toString().padStart(4, '0');
		let r2l = this.a5f.toString().padStart(2, '0');
		let v9f = this.c8k.toString().padStart(2, '0');
		w9b = s2q + r2l + v9f;
	}
	else if (q4v == "yyyy")
	{
		let s2q = this.e8e.toString().padStart(4, '0');
		w9b = s2q;
	}
	return w9b;
}

}

class a4i
{

constructor()
{
	this.d7r = new g3d();
	this.z0a = new s4d();
	this.c6f = 0;
	this.time = 0;
	this.a1x = "";
  this.j8y = u4d.h4o;
}

v0z()
{
	let l2f = new a4i();
	l2f.d7r = this.d7r.v0z();
	l2f.z0a = this.z0a.v0z();
	l2f.c6f = this.c6f;
	l2f.time = this.time;
	l2f.a1x = this.a1x;
  l2f.j8y = this.j8y;
	return l2f;
}

f3l()
{
	return this.d7r.f3l() &&
		this.z0a.f3l() &&
		this.c6f == 0 &&
		this.time == 0 &&
		this.a1x == "" &&
 		this.j8y == u4d.h4o;
}

}


class v1k
{

constructor()
{
	this.n6x = new a4i();
	this.q5o = new a4i();
	this.e0b = new l7c();
	this.r7v = new w2z();
	this.s5n = new u5a();
	this.a1x = new r0t();
	this.l9v = new i2j();
	this.z2f = x8s.h4o;
	this.b8q = 0;
	this.i4e = 0;
	this.f7a = 0;
	this.j8r = new n1e();
  this.id = new w0z();
}

v0z()
{
	let v0j = new v1k();
	v0j.n6x = this.n6x.v0z();
	v0j.q5o = this.q5o.v0z();
	v0j.e0b = this.e0b.v0z();
	v0j.r7v = this.r7v.v0z();
	v0j.s5n = this.s5n.v0z();
	v0j.a1x = this.a1x.v0z();
	v0j.l9v = this.l9v.v0z();
	v0j.z2f = this.z2f;
	v0j.b8q = this.b8q;
	v0j.i4e = this.i4e;
	v0j.f7a = this.f7a;
	v0j.j8r = this.j8r.v0z();
  v0j.id = this.id.v0z();
	return v0j;
}

f3l()
{
	return this.n6x.f3l() &&
		this.q5o.f3l() &&
		this.e0b.f3l() &&
		this.r7v.f3l() &&
		this.s5n.f3l() &&
		this.a1x.f3l() &&
		this.l9v.f3l() &&
		this.z2f == x8s.h4o &&
		this.b8q == 0 &&
		this.i4e == 0 &&
		this.f7a == 0 &&
		this.j8r.f3l();
}

r6f()
{
	let w9b = '';
	if (this.f7a)
	{
		w9b = this.i4e.toString() + "." + this.f7a.toString();
	}
	else if (this.i4e)
	{
		w9b = this.i4e.toString();
	}
	return w9b;
}

}


class w0z
{

constructor()
{
	this.t4x = '';
}

v0z()
{
	let k4w = new w0z();
	k4w.t4x = this.t4x;
	return k4w;
}

toString()
{
  return this.t4x;
}

}


class r0t
{

constructor()
{
	this.a1x = '';
}

v0z()
{
	let f8x = new r0t();
	f8x.a1x = this.a1x;
	return f8x;
}

f3l()
{
	return this.a1x.length == 0;
}

u9w()
{
	return this.a1x;
}

}


class g3d
{

constructor()
{
	this.c3h = '';
	this.v4j = '';
}

v0z()
{
	let w5k = new g3d();
	w5k.c3h = this.c3h;
	w5k.v4j = this.v4j;
	return w5k;
}

f3l()
{
	return this.v4j.length == 0 &&
		this.c3h.length == 0;
}

m2v()
{
	if (!this.v4j.length == 0 && !this.c3h.length == 0)
	{
		return this.v4j + "," + this.c3h;
	}
	else if (this.v4j.length == 0 && this.c3h.length == 0)
	{
		return "";
	}
	else if (this.c3h.length == 0)
	{
		return this.v4j;
	}
	else
	{
		return this.c3h;
	}
}

h6e()
{
	return this.m2v().replace(/,/g, " ");
}

a1w()
{
	return this.j3c(1).replace(/,/g, " ");
}

j3c(p2a)
{
	if (this.v4j.length == 0)
	{
		if (this.c3h.length == 0 || p2a < 1)
		{
			return "";
		}
		else
		{
			return this.c3h.substring(0, p2a);
		}
	}
	else
	{
		if (this.c3h.length == 0 || p2a < 1)
		{
			return this.v4j;
		}
		else
		{
			return this.v4j + "," + this.c3h.substring(0, p2a);
		}
	}
}

x7h(a8w)
{
	let w9b = a8w.trim();
	let l3h = w9b.lastIndexOf(",");
	if (l3h != -1)
	{
		this.v4j = w9b.substr(0, l3h).trim();
		this.c3h = w9b.substr(l3h+1, w9b.length).trim();
		if (this.c3h.length != 0)
		{
			if (this.c3h.charAt(0).toLowerCase() == this.c3h.charAt(0))
			{
				this.v4j += ",";
				this.v4j += this.c3h;
				this.c3h = "";
			}
		}
	}
	else
	{
		this.v4j = w9b;
		this.c3h = "";
	}
}

u9w()
{
	return this.m2v();
}

}

const x8s =
{
	h4o : 0,
	w4h : 1,
	y8o : 2,
	y9y : 3,
	a9t : 4,
	k2r : 5,
	g6i : 6,
	m0o : 7,
	q1e : 8,
	n9c : 9,
	g0e : 10,
	u6n : 11,
	c5x : 12,
	m5j : 13,
	c9v : 14,
	o5y : 15
};


function c5q(z2f)
{
	switch (z2f)
	{
		case x8s.w4h:
			return "2-0";
		case x8s.y9y:
			return "1-1";
		case x8s.y8o:
			return "0-2";
		default:
			return "";
	}
}
const z3b =
{
	u9v : 0,
	w5p : 1,
	c4j : 2
};

const f7u =
[
	[ z3b.u9v,   "High" ],
	[ z3b.w5p, "Middle" ],
	[ z3b.c4j,    "Low" ]
];

class u5a
{

constructor()
{
	this.a1x = '';
	this.w0r = '';
	this.v1j = new i2j();
	this.w9v = new i2j();
	this.s8x = 0;
	this.o0y = z3b.u9v;
}

v0z()
{
	let b8p = new u5a();
	b8p.a1x = this.a1x;
	b8p.w0r = this.w0r;
	b8p.v1j = this.v1j.v0z();
	b8p.w9v = this.w9v.v0z();
	b8p.s8x = this.s8x;
	b8p.o0y = this.o0y;
	return b8p;
}

f3l()
{
	return this.a1x.length == 0 &&
		this.w0r.length == 0 &&
		this.v1j.f3l() &&
		this.w9v.f3l() &&
		this.s8x == 0 &&
		this.o0y == z3b.u9v;
}

u9w()
{
	let w9b = this.a1x;
	if (this.w0r.length)
	{
		if (w9b.length)
		{
			w9b += " ";
		}
		w9b += this.w0r;
	}
	return w9b;
}

}


const o7v =
{
	n9k : 0,
	g0y : 1,
	i3u : 2,
	k2a : 3,
	s0p : 4,
	r8o : 5,
	j0e : 6,
	n7d : 7,
	y3j : 8,
	b6m : 9,
	l6b : 10,
	f5w : 11,
	u2u : 12,
	q3s : 13,
	a7u : 14,
	c4l : 15
};

class n1e
{

constructor()
{
	this.value = 0;
}

o2q(value)
{
	this.value = value;
}

v0z()
{
	let d3u = new n1e();
	d3u.value = this.value;
	return d3u;
}

f3l()
{
	return this.value == 0;
}

i4l()
{
	return this.value != 0;
}

h4o()
{
	return this.value == 0;
}

v3s()
{
	let b8e = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.k4o(i))
		{
			b8e++;
		}
	}
	return b8e;
}

h7n()
{
	this.value = 0;
}

set(o6e, v9w)
{
	if (v9w)
	{
		this.value |= (1 << o6e);
	}
	else
	{
		this.value &= ~(1 << o6e);
	}
}

k4o(o6e)
{
	return (this.value & (1 << o6e)) != 0;
}

v3u()
{
	return this.value;
}

}

function j1c(s2q)
{
	return s2q.toString().padStart(4, '0');
}

class s4d
{

constructor()
{
	this.m2v = '';
	this.l3c = 0;
	this.s2q = 0;
	this.x4u = false;
	this.j8y = u4d.h4o;
}

v0z()
{
	let n5b = new s4d();
	n5b.m2v = this.m2v;
	n5b.l3c = this.l3c;
	n5b.s2q = this.s2q;
	n5b.x4u = this.x4u;
	n5b.j8y = this.j8y;
	return n5b;
}

f3l()
{
	return this.m2v.length == 0 &&
		this.l3c == 0 &&
		this.s2q == 0 &&
		this.x4u == false &&
		this.j8y == u4d.h4o;
}

v5f()
{
	let w9b = this.m2v;
	if (this.l3c)
	{
		if (w9b.length)
		{
			w9b += " ";
		}
		w9b += this.l3c;
	}
	return w9b;
}

u9w()
{
	let w9b = this.m2v;
	if (this.l3c)
	{
		if (w9b.length)
		{
			w9b += " ";
		}
		w9b += this.l3c;
	}
	if (w9b.length)
	{
		w9b += " ";
	}
	w9b += this.o0g();
	return w9b;
}


p9z()
{
	let w9b = this.m2v;
	if (this.l3c > 1)
	{
		w9b += " ";
		w9b += this.l3c;
	}
	return w9b;
}

o0g()
{
	let w9b = '';
	if (this.x4u)
	{
		let u4i = j1c(this.s2q);
		let n8u = j1c(this.s2q + 1);
		let a4v = u4i + "/" + n8u.substr(2, 2);
		w9b = a4v;
	}
	else
	{
		w9b = j1c(this.s2q);
	}
	return w9b;
}

}

class d4b
{

constructor()
{
	this.v5m = 0;
	this.r6p = 0;
	this.i2x = 0;

}

}

function p6c(w9b, r9x, time)
{
	time.v5m = 0;
	time.r6p = 0;
	time.i2x = 0;

	let a0w = w9b.length;
	if (!a0w || w9b == "?")
	{
		return;
	}
	let i = 0;
	for (; i < a0w; i++)
	{
		if (!isNaN(w9b[i]))
		{
			break;
		}
	}
	let p6l = '';
	for (; i < a0w; i++)
	{
		if (isNaN(w9b[i]))
		{
			break;
		}
		p6l += w9b[i].toString();
	}
	for (; i < a0w; i++)
	{
		if (!isNaN(w9b[i]))
		{
			break;
		}
	}
	let s2a = '';
	for (; i < a0w; i++)
	{
		if (isNaN(w9b[i]))
		{
			break;
		}
		s2a += w9b[i].toString();
	}
	for (; i < a0w; i++)
	{
		if (!isNaN(w9b[i]))
		{
			break;
		}
	}
	let s8j = '';
	for (; i < a0w; i++)
	{
		if (isNaN(w9b[i]))
		{
			break;
		}
		s8j += w9b[i].toString();
	}
	let x5a = x2a(p6l, 0);
	let s7u = x2a(s2a, 0);
	let u0j = x2a(s8j, 0);
	if (
		x5a < 0 || x5a > r9x ||
		s7u < 0 || s7u > 59 ||
		u0j < 0 || u0j > 59)
	{
		x5a = 0;
		s7u = 0;
		u0j = 0;
	}
	time.v5m = x5a;
	time.r6p = s7u;
	time.i2x = u0j;
}

function g4d(w9b)
{
	if (w9b.length == 0)
	{
		return 0;
	}
	else
	{
		let time = new d4b();
		p6c(w9b, 9, time);
		return time.v5m * 60 + time.r6p;
	}
}


const g3k =
{
	h4o : 0,
	u9r : 1,
	d7d : 2,
	e0b : 3,
	g0z : 4,
	z9x : 5,
	f5f : 6,
	e4z : 7
};

const u3c =
[
	[ g3k.h4o, 			 	""                   ],
	[ g3k.u9r,  		 	"SingleGame"         ],
	[ g3k.d7d,  		 	"Match"              ],
	[ g3k.e0b,  "RoundRobin"         ],
	[ g3k.g0z,   		"SwissSystem"        ],
	[ g3k.z9x,    "Knockout"           ],
	[ g3k.f5f,"Simul"              ],
	[ g3k.e4z,"ScheveningenSystem" ]
];

class l7c
{

constructor()
{
	this.a1x = '';
	this.v5k = '';
	this.i4b = new i2j();
	this.w8d = new i2j();
	this.m0k = c7k.m8q;
	this.k5h = 0;
	this.j8y = u4d.h4o;
	this.type = g3k.h4o;
	this.u1o = 0;
	this.f3q = false;
	this.z4t = false;
	this.g6b = false;
	this.w7m = false;
}

v0z()
{
	let o3j = new l7c();
	o3j.a1x = this.a1x;
	o3j.v5k = this.v5k;
	o3j.i4b = this.i4b.v0z();
	o3j.w8d = this.w8d.v0z();
	o3j.m0k = this.m0k;
	o3j.k5h = this.k5h;
	o3j.j8y = this.j8y;
	o3j.type = this.type;
	o3j.u1o = this.u1o;
	o3j.f3q = this.f3q;
	o3j.z4t = this.z4t;
	o3j.g6b = this.g6b;
	o3j.w7m = this.w7m;
	return o3j;
}

f3l()
{
	return this.a1x.length == 0 &&
		this.v5k.length == 0 &&
		this.i4b.f3l() &&
		this.w8d.f3l() &&
		this.m0k == c7k.m8q &&
		this.k5h == 0 &&
		this.j8y == u4d.h4o &&
		this.type == g3k.h4o &&
		!this.u1o &&
		!this.f3q &&
		!this.z4t &&
		!this.g6b &&
		!this.w7m;
}

u9w()
{
	let w9b = this.a1x;
	if (this.v5k.length)
	{
		if (w9b.length)
		{
			w9b += " ";
		}
		w9b += this.v5k;
	}
	if (w9b.length)
	{
		w9b += " ";
	}
	let s2q = this.i4b.s2q.toString().padStart(4, '0');
	w9b += s2q;
	return w9b;
}

}



const c7k =
{
	m8q : 0,
	f9i : 1,
	p2k : 2,
	j7q : 3
};

const e4j =
[
	[ c7k.m8q, "Normal" ],
	[ c7k.f9i,  "Rapid"  ],
	[ c7k.p2k,  "Blitz"  ],
	[ c7k.j7q,   "Corr"   ]
];

function q4j(m0k)
{
	return e4j[m0k][1];
}

function g4p()
{
	let l9c = [];
	for (const m0k of e4j)
	{
		l9c.push(m0k[1]);
	}
	return l9c;
}

class p3u
{

constructor()
{
	this.p3y = '';
	this.z6s = '';
	this.i1q = s2m.h4o;
	this.style = o3q.h4o;
	this.value = h1r.h4o;
	this.c6x = new k2b();
	this.r1m = new b2p();
	this.n6e = new g8o();
	this.n3f = u9e.h4o;
	this.m6m = false;
	this.a0v = false;
  this.x4p = false;
}

v0z()
{
	let f9l = new p3u();
	f9l.p3y = this.p3y;
	f9l.z6s = this.z6s;
	f9l.i1q = this.i1q;
	f9l.style = this.style;
	f9l.value = this.value;
	f9l.c6x = this.c6x.v0z();
	f9l.r1m = this.r1m.v0z();
	f9l.n6e = this.n6e.v0z();
	f9l.n3f = this.n3f;
	f9l.m6m = this.m6m;
	f9l.a0v = this.a0v;
 	f9l.x4p = this.x4p;
	return f9l;
}

f3l()
{
	return this.p3y.length == 0 &&
		this.z6s.length == 0 &&
		this.i1q == s2m.h4o &&
		this.style == o3q.h4o &&
		this.value == h1r.h4o &&
		this.c6x.f3l() &&
		this.r1m.f3l() &&
		this.n6e.f3l() &&
		this.n3f == u9e.h4o &&
		this.m6m == false &&
		this.a0v == false &&
 		this.x4p == false;
}

}

const u9e =
{
	h4o : 0,
	u7m : 1,
	w5p : 2,
	e0u : 3
};

const w2p =
{
	b0i : 0,
	a1f : 1,
	j7c : 2,
	q8v : 3,
	d0x : 4,
	g6o : 5,
	p0i : 6,
	o5y : 7,
	l9n : 8,
	w3t : 9,
	a6n : 10,
	o9o : 11,
	p6g : 12,
	i7w : 13,
	t7v : 14,
	j0n : 15
};

class k2b
{

constructor()
{
	this.value = 0;
}

o2q(value)
{
	this.value = value;
}

v0z()
{
	let p5d = new k2b();
	p5d.value = this.value;
	return p5d;
}

f3l()
{
	return this.value == 0;
}

i4l()
{
	return this.value != 0;
}

h4o()
{
	return this.value == 0;
}

v3s()
{
	let b8e = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.k4o(i))
		{
			b8e++;
		}
	}
	return b8e;
}

h7n()
{
	this.value = 0;
}

set(o6e, v9w)
{
	if (v9w)
	{
		this.value |= (1 << o6e);
	}
	else
	{
		this.value &= ~(1 << o6e);
	}
}

k4o(o6e)
{
	return (this.value & (1 << o6e)) != 0;
}

v3u()
{
	return this.value;
}

}

const s2m =
{
	h4o : 0,
	y3d : 1,
	t1b : 2,
	z7i : 3,
	u7v : 4,
	i5b : 5,
	h7d : 6
};

const t3n =
[
	[ s2m.h4o,     		  ""   ],
	[ s2m.y3d,       		  "RR" ],
	[ s2m.t1b, 		  "&#8979;"  ],
	[ s2m.z7i, 		  "&#8804;"  ],
	[ s2m.u7v,  "="  ],
	[ s2m.i5b,   "&#9651;"  ],
	[ s2m.h7d,  "&#9661;"  ]
];

function e8l(i1q)
{
	return t3n[i1q][1];
}


const o3q =
{
	h4o : 0,
	w5z : 1,
	v3z : 2,
	r1f : 3,
	i9s : 4,
	n5w : 5,
	t8t : 6,
	a6z : 7,
	x2z : 8
};

const v8q =
[
	[ o3q.h4o,     		"" 	 ],
	[ o3q.w5z,       	"!"  ],
	[ o3q.v3z, 					"?"  ],
	[ o3q.r1f,	"!?" ],
	[ o3q.i9s,	 		"?!" ],
	[ o3q.n5w,  	"!!" ],
	[ o3q.t8t, 			"??" ],
	[ o3q.a6z, 		"&#8857;"  ],
	[ o3q.x2z, 		"&#9723;"  ]
];

function k6g(style)
{
	return v8q[style][1];
}


class z8z
{

constructor()
{
	this.u7k = new q5r();
	this.o6j = null;
	this.s8l = null;
	this.p1f = null;
	this.n0g = null;
  this.l3c = 0; 
}

r0a(u7k)
{
	this.u7k = u7k.v0z();
}

q9u(g0t, x5c, y8x, z6g)
{
	this.u7k.q9u(g0t, x5c, y8x, z6g);
}

}

class v2n
{

constructor()
{
	this.o6c = null;
	this.u7k = null;
}

e3t(z7g)
{
	return this.o6c == z7g.o6c;
}

d8x(z7g)
{
	return !this.e3t(z7g);
}

v0z()
{
	let v2u = new v2n();
  v2u.o6c = this.o6c;
  v2u.u7k = this.u7k;
	return v2u;
}

}


class w4t
{

constructor()
{
	this.o0n = new r7e();
 	this.m8a = null;
	this.g5s = 1;
	this.o0n.u6z();
  this.j4l = new p3u();
}

q1z(z7g)
{
	this.d9r(z7g.o0n, z7g.g5s);
	this.j4l = z7g.j4l.v0z();
	this.m8a = this.z3u(z7g.m8a);
}

v0z()
{
	let t0l = new w4t();
	t0l.q1z(this);
	return t0l;
}

d9r(h5x, j5j)
{
	this.o0n = h5x.v0z();
	this.g5s = j5j;
	this.j4l = new p3u();
	this.m8a = null;
}

j5j()
{
	return this.g5s;
}

h5x()
{
	return this.o0n.v0z();
}


x3i()
{
	let l3h = this.i7v();
	this.g1s(l3h);
	return l3h;
}


w4g()
{
	let g1s = this.x3i();
	return this.g0t(g1s);
}


j1a(l3h)
{
  let h9o = this.k6x(l3h) + 1;
	if (h9o)
	{
		return this.g5s +
			Math.floor((h9o - 1 + this.o0n.x4b()) / 2);
	}
	else
	{
		return this.g5s;
	}
}

k6x(l3h)
{
	let h9o = 0;
	if (!l3h.o6c)
	{
		return 0;
	}
	let q0k = l3h.o6c;
	while (1)
	{
		h9o++;
		if (!q0k.s8l)
		{
			let l8j = q0k;
			while (l8j.p1f)
			{
				l8j = l8j.p1f;
			}
			if (!l8j.s8l)
			{
				break;
			}
		}
		if (q0k.s8l)
		{
			q0k = q0k.s8l;
		}
		else
		{
			let l8j = q0k;
			while (l8j.p1f)
			{
				l8j = l8j.p1f;
			}
			q0k = l8j.s8l;
		}
	}
	return h9o;
}


f4v()
{
	let c1p = 0;
	let w5r = this.m8a;
	while (w5r)
	{
		c1p++;
		w5r = w5r.o6j;
	}
	return c1p;
}

m3l()
{
	return this.m8a != null;
}

i9z(l3h)
{
	return l3h.e3t(this.i7v());
}

z5h(l3h)
{
	if (l3h.o6c)
	{
		return l3h.o6c.o6j == null;
	}
	else if (this.m8a)
	{
		return false;
	}
	else
	{
		return true;
	}
}

v3v(l3h)
{
	if (!this.i9z(l3h))
	{
		if (l3h.o6c.s8l)
		{
			l3h.o6c = l3h.o6c.s8l;
			l3h.u7k = l3h.o6c.u7k;
		}
		else
		{
			let q0k = l3h.o6c;
			while (q0k.p1f)
			{
				q0k = q0k.p1f;
			}
			q0k = q0k.s8l;
			l3h.o6c = q0k;
      if (l3h.o6c)
      {
  			l3h.u7k = l3h.o6c.u7k;
      }
      else
      {
        l3h.u7k = null;
      }
		}
	}
}

v1s(l3h)
{
	if (!this.z5h(l3h))
	{
		l3h.o6c = this.e8q(l3h);
		l3h.u7k = l3h.o6c.u7k;
	}
}

c9j(l3h, v6a)
{
	let x6i = this.a9i(l3h);
	if (v6a < 0 || v6a >= x6i)
	{
		return;
	}
	let l8j = this.e8q(l3h);
	let i = 0;
	while (i != v6a)
	{
		i++;
		l8j = l8j.n0g;
	}
	l3h.o6c = l8j;
	l3h.u7k = l3h.o6c.u7k;
}

u0w(l3h)
{
	if (!l3h.o6c)
	{
		return this.g5s;
	}
	let h9o = this.k6x(l3h);
	if (h9o)
	{
		return this.g5s +
      Math.floor((h9o - 1 + this.o0n.x4b()) / 2);
	}
	else
	{
		return this.g5s;
	}
}

i7v()
{
	let l3h = new v2n();
	l3h.o6c = null;
	l3h.u7k = null;
	return l3h;
}

g1s(l3h)
{
	if (!this.z5h(l3h))
	{
		let q0k = this.e8q(l3h);
		while (true)
		{
			if (!q0k.o6j)
			{
				break;
			}
			q0k = q0k.o6j;
		}
		l3h.o6c = q0k;
		l3h.u7k = l3h.o6c.u7k;
	}
}

h7r(x8p)
{
	let l3h = this.i7v();
	if (x8p > 0)
	{
    this.x8p = 0;
		this.n1m(l3h, x8p);
		return l3h;
	}
	else
	{
		return l3h;
	}
}

n1m(l3h, x8p)
{
	while (true)
	{
		if (this.z5h(l3h))
		{
			return false;
		}
		let x6i = this.a9i(l3h);
		if (x6i > 1)
		{
			let r0k = l3h.v0z();
			for (let i = 1; i < x6i; i++)
			{
				this.c9j(l3h, i);
				this.x8p++;
				if (this.x8p == x8p)
				{
					return true;
				}
				if (this.n1m(l3h, x8p))
				{
					return true;
				}
        l3h.o6c = r0k.o6c;
        l3h.u7k = r0k.u7k;
			}
		}
		this.v1s(l3h);
		this.x8p++;
		if (this.x8p == x8p)
		{
			return true;
		}
	}
}

t0h(l3h)
{
	if (!l3h.o6c)
	{
		return 0;
	}
	else
	{
		return l3h.o6c.l3c;
	}
}

n7m(l3h)
{
	let x5y = [];
 	if (!l3h.o6c)
  {
		return x5y;
	}
	let q0k = l3h.o6c;
	while (1)
	{
		x5y.push(q0k);
		if (!q0k.s8l)
		{
			let l8j = q0k;
			while (l8j.p1f)
			{
				l8j = l8j.p1f;
			}
			if (!l8j.s8l)
			{
				break;
			}
		}
		if (q0k.s8l)
		{
			q0k = q0k.s8l;
		}
		else
		{
			let l8j = q0k;
			while (l8j.p1f)
			{
				l8j = l8j.p1f;
			}
			q0k = l8j.s8l;
		}
	}
	return x5y.reverse();
}

y6t(l3h)
{
	let x5y = this.n7m(l3h);
	let x6i = this.a9i(l3h);
	if (x6i == 0)
	{
		return x5y;
	}
	let f5h = this.d7x(l3h, 0);
	while (f5h)
	{
		x5y.push(f5h);
		f5h = f5h.o6j;
	}
	return x5y;
}

a9i(l3h)
{
	let f5h = this.e8q(l3h);
	if (!f5h)
	{
		return 0;
	}
	let x6i = 1;
	while (f5h.n0g)
	{
		x6i++;
		f5h = f5h.n0g;
	}
	return x6i;
}

p4p(l3h, q5c)
{
	if (this.i9z(l3h))
	{
		this.m8a = q5c;
		l3h.o6c = q5c;
		l3h.u7k = l3h.o6c.u7k;
	}
	else
	{
		l3h.o6c.o6j = q5c;
		q5c.s8l = l3h.o6c;
		l3h.o6c = q5c;
		l3h.u7k = l3h.o6c.u7k;
	}
}

x1k(l3h, q5c)
{
	let l8j = this.e8q(l3h);
	while (l8j.n0g)
	{
		l8j = l8j.n0g;
	}
	l8j.n0g = q5c;
	q5c.p1f = l8j;

	l3h.o6c = q5c;
	l3h.u7k = l3h.o6c.u7k;
}

h8t(l3h, u7k)
{
	let q5c = new z8z();
 	q5c.r0a(u7k);
	if (this.z5h(l3h))
	{
		this.p4p(l3h, q5c);
	}
	else
	{
		this.x1k(l3h, q5c);
	}
}


u6l(l3h, x5y)
{
	for (const u7k of x5y)
	{
		this.h8t(l3h, u7k);
	}
}


u5q(l3h)
{
	let l8j = this.d7x(l3h, 1);
	if (!l8j)
	{
		return false;
	}
	while (l8j)
	{
		let w5r = l8j.o6j;
		while (w5r)
		{
			if (w5r.n0g)
			{
				return false;
			}
			w5r = w5r.o6j;
		}
		l8j = l8j.n0g;
	}
	return true;
}

v6n()
{
	let w5r = this.m8a;
	while (w5r)
	{
		if (w5r.n0g)
		{
			return true;
		}
		w5r = w5r.o6j;
	}
	return false;
}

n3s()
{
	if (!this.j4l.f3l())
	{
		return true;
	}
	if (this.v6n())
	{
		return true;
	}
	let w5r = this.m8a;
	while (w5r)
	{
		if (w5r.u7k.n3s())
		{
			return true;
		}
		w5r = w5r.o6j;
	}
	return false;
}

e8q(l3h)
{
	if (l3h.o6c)
	{
		return l3h.o6c.o6j;
	}
	return this.m8a;
}

d7x(l3h, v6a)
{
	let i = 0;
	let l8j = this.e8q(l3h);
	while (l8j && i != v6a)
	{
		l8j = l8j.n0g;
		i++;
	}
	return l8j;
}

z3u(l8j)
{
	let h9m = l8j;
	let x4m = null;
	let q5c = null;
	let g6n = null;
	while (h9m)
	{
		q5c = new z8z();
		q5c.r0a(h9m.u7k);
		if (x4m)
		{
			x4m.o6j = q5c;
			q5c.s8l = x4m;
		}
		else
		{
			g6n = q5c;
		}
		x4m = q5c;
		if (h9m.n0g && !h9m.p1f)
		{
			let s6t = h9m.n0g;
			let k9g = x4m;
			while (s6t)
			{
				let d6i = this.z3u(s6t);
				k9g.n0g = d6i;
				d6i.p1f = k9g;
				k9g = d6i;
				s6t = s6t.n0g;
			}
		}
		h9m = h9m.o6j;
	}
	return g6n;
}

o8a()
{
	return this.j4l;
}

v7i()
{
	return this.j4l.p3y;
}

m0g(h5k)
{
	this.j4l.p3y = h5k;
}

o8f()
{
	return !this.j4l.r1m.f3l();
}

r4z(r1m)
{
	this.j4l.r1m = r1m.v0z();
}

q2g()
{
	return this.j4l.r1m;
}

h1v()
{
	return !this.j4l.n6e.f3l();
}

k7j(n6e)
{
	this.j4l.n6e = n6e.v0z();
}

a7m()
{
	return this.j4l.n6e;
}

t4b()
{
	return !this.j4l.c6x.f3l();
}

l4e(c6x)
{
	this.j4l.c6x = c6x.v0z();
}

l9t()
{
	return this.j4l.c6x;
}

z7k(x8p)
{
  if (x8p == 0)
  {
    return true;
  }
	let w5r = this.m8a;
	while (w5r)
	{
    if (w5r.l3c == x8p)
    {
      return true;
    }
		w5r = w5r.o6j;
	}
	return false;
}

w6f()
{
	let l3h = this.i7v();
	this.x8p = 0;
	this.q4n(l3h);
}

q4n(l3h)
{
	while (true)
	{
		if (this.z5h(l3h))
		{
			return;
		}
		let x6i = this.a9i(l3h);
		if (x6i > 1)
		{
			let r0k = l3h.v0z();
			for (let i = 1; i < x6i; i++)
			{
				this.c9j(l3h, i);
				this.x8p++;
        l3h.o6c.l3c = this.x8p;
				this.q4n(l3h);
        l3h.o6c = r0k.o6c;
        l3h.u7k = r0k.u7k;
			}
		}
		this.v1s(l3h);
  	this.x8p++;
    l3h.o6c.l3c = this.x8p;
	}
}

g0t(l3h)
{
	let g0t = this.o0n.v0z();
	if (!l3h.o6c)
	{
		return g0t;
	}
	let x5y = this.s0g(l3h);
  for (const u7k of x5y)
	{
		g0t.v1s(u7k.l3n());
	}
	return g0t;
}

s0g(l3h)
{
	let x5y = [];
 	if (!l3h.o6c)
  {
		return x5y;
	}
	let q0k = l3h.o6c;
	while (1)
	{
		x5y.push(q0k.u7k);
		if (!q0k.s8l)
		{
			let l8j = q0k;
			while (l8j.p1f)
			{
				l8j = l8j.p1f;
			}
			if (!l8j.s8l)
			{
				break;
			}
		}
		if (q0k.s8l)
		{
			q0k = q0k.s8l;
		}
		else
		{
			let l8j = q0k;
			while (l8j.p1f)
			{
				l8j = l8j.p1f;
			}
			q0k = l8j.s8l;
		}
	}
	return x5y.reverse();
}


q3w()
{
	this.j4l = new p3u();
	this.m8a = null; 
  
}


t4n()
{
	let x5y = [];
	let w5r = this.m8a;
	while (w5r)
	{
		x5y.push(w5r.u7k);
		w5r = w5r.o6j;
	}
	return x5y;
}


}

const h1r =
{
	h4o : 0,
	a9t : 1,
	k2r : 2,
	g6i : 3,
	m0o : 4,
	q1e : 5,
	n9c : 6,
	g0e : 7,
	u6n : 8,
	c5x : 9,
	m5j : 10,
	c9v : 11,
	o5y : 12,
	g2q : 13,
	v9l : 14,
	q8v : 15
};

const y3i =
[
	[ h1r.h4o,     						  ""    ],
	[ h1r.a9t,        "+&#8211;" ],
	[ h1r.k2r, 						"&#177;" ],
	[ h1r.g6i,		"&#10866;"  ],
	[ h1r.m0o, 							"="   ],
	[ h1r.q1e,  							"&#8734;" ],
	[ h1r.n9c,  	"&#10865;"],
	[ h1r.g0e, 						"&#8723;" ],
	[ h1r.u6n, 				"&#8211;+"],
	[ h1r.c5x,						"&#8773;" ],
	[ h1r.m5j, 						"&#8646;" ],
	[ h1r.c9v,  						"&#8593;" ],
	[ h1r.o5y, 								"&#8594;" ],
	[ h1r.g2q, 					"&#8853;" ],
	[ h1r.v9l,		"&#10227;"],
	[ h1r.q8v, 								"N"   ]
];

function y0s(value)
{
	return y3i[value][1];
}


const y3g =
{
	v4v : 0,
	k9u : 1,
	o3k : 2
};

const i1x =
{
	h4o : 0,
	b7f : 1,
	n9v : 2,
	m9g : 3,
	x8j : 4,
	i1q : 5,
	z6s : 6,
	p3y : 7,
	t9p : 8,
	c6x : 9,
	m6m : 10,
	a0v : 11
};

/*
TO DO
- Aanpassen voor tekst after van a0o daar kan dia inzitten (zie c++)
- Vette tekst en niet vette b7f testen bij wel/niet MultiPV
*/
class h7u
{

constructor()
{
	this.p6t = new x6p();
  this.h6p = true;
  this.b3i = false;
  this.h3p = true;
  this.i0y = true;
  this.q6p = y3g.v4v;
  this.k7q = false;
  this.j1g = true;
 	this.m1g = true;
 	this.p4w = -1;
  this.w5h = false;
  this.u8q = false;
	this.v4g = false;
	this.n3h = true;
  this.e1n = false;
  this.s5r = false;
  this.s1j = 0;
	this.f6p = true;
  this.m0z = null;
 	this.h4j = i1x.h4o;
}

a9m(x5y)
{
	this.m0z = x5y;
 	let i7v = this.m0z.i7v();
	let h5x = this.m0z.h5x();
	this.h4j = i1x.h4o;
	this.n3h = true;
	this.u8q = false;
	this.v4g = false;
	this.w5h = false;
	this.e1n = this.m0z.n3s();
	this.f6p = true;
	this.s1j = 0;

	if (this.k7q)
	{
		this.g7x(i1x.n9v);
		this.d3g();
	}
	else
	{
    
    if (this.q6p == y3g.k9u ||
      (this.q6p == y3g.o3k && !h5x.i2z()))
    {
      if (this.i0y)
      {
        this.t7k(i7v, h5x, s1j);
        this.n3h = true;
      }
    }

    this.g7x((this.e1n && !this.x4p) ? i1x.b7f : i1x.n9v);
    this.d6x(this.e1n);
    this.h8t(i7v, "");
    this.i5a(i7v, this.m0z.o8a().p3y);

    if (this.m0z.m3l())
    {
      this.c8o();
    }
   	this.g7x(i1x.h4o);
   	this.o4e();
  }
}

d3g()
{
	let l3h = this.m0z.i7v();
	let a9i = this.m0z.a9i(l3h);
	for (let i = 0; i < a9i; i++)
	{
    this.p6t.a7x('<div class="variation-row">');
		l3h = this.m0z.i7v();
  	let g0t = this.m0z.h5x();
	  let u0w = this.m0z.j5j();
		this.m0z.c9j(l3h, i);
		this.n3h = true;
		let a4k = true;
		let u7k = l3h.u7k;
		let z6s = u7k.z6s();
		if (z6s.length)
		{
			this.a1h(l3h, z6s);
		}
		this.g7x(i1x.n9v);
		do
		{
			if (a4k)
			{
				l3h.u7k.w6i();
			}
			this.z8b(l3h, g0t, u0w);
			if (a4k)
			{
				l3h.u7k.p0y(z6s);
				a4k = false;
			}
			if (this.m0z.z5h(l3h))
			{
				break;
			}
			g0t.v1s(l3h.u7k);
			if (g0t.q8z())
			{
				u0w++;
			}
			this.m0z.v1s(l3h);
		} while (true);
    this.p6t.a7x('<div');
	}
}

c8o()
{
  let g8s = 0;
 	let l3h = this.m0z.i7v();
	let g0t = this.m0z.h5x();
  let u0w = this.m0z.j5j();

	let u6u = 100000;
	if (this.p4w == 0)
	{
		return;
	}
	if (this.p4w != -1)
	{
		u6u = this.p4w;
	}
	let n1s = u0w + u6u - 1;
	this.n3h = true;
	while (true)
	{
		let a9i = this.m0z.a9i(l3h);
		while (u0w <= n1s && !this.m0z.z5h(l3h))
		{
      this.m0z.v1s(l3h);
    	this.g7x((this.e1n && !this.x4p) ? i1x.b7f : i1x.n9v);
			this.z8b(l3h, g0t, u0w);
			g0t.v1s(l3h.u7k.l3n());
 			if (g0t.q8z())
			{
				u0w++;
			}
			if (this.m1g && a9i > 1)
			{
				break;
			}
			a9i = this.m0z.a9i(l3h);
		}
		if (!a9i || u0w > n1s)
		{
			return;
		}
    g0t.v3v(l3h.u7k.l3n());
		if (g0t.x4b())
		{
			u0w--;
		}
    this.m0z.v3v(l3h);
		for (let i = 1; i < a9i; i++)
		{
      g8s++;
      let t5f = "<span class=\"tdline\" data-level=\"";
      t5f += g8s.toString();
      t5f += "\">";
      this.p6t.a7x(t5f);
			this.t7e(i1x.m9g);
			this.c4f("[", true);
			let i1q = '';
      this.i4x(l3h, g0t, u0w, i, i1q, g8s);
			this.g7x(i1x.m9g);
			this.c4f("]", true);
      this.p6t.a7x("</span>");
      g8s--;
     	this.g7x((this.e1n && !this.x4p) ? i1x.b7f : i1x.n9v);
		}
		this.t7e(this.h4j);
    this.m0z.v1s(l3h);
    g0t.v1s(l3h.u7k.l3n());
		if (g0t.q8z())
		{
			u0w++;
		}
		this.n3h = true;
	}
}

z8b(l3h, g0t, u0w)
{
	if (this.m0z.i9z(l3h))
	{
		return;
	}
 	let u7k = l3h.u7k;

	let w9b = '';
  let k7h = false;
  if (this.h6p)
	{
		if (u7k.d9m())
		{
			if (!this.m0z.i9z(l3h))
			{
        let j4m = l3h.v0z();
        this.m0z.v3v(j4m);
        if (j4m.u7k)
        {
  				if (j4m.u7k.n2k())
	  			{
		  			k7h = true;
			  	}
        }
			}
		}
  }
	if (this.u8q)
	{
		w9b = "(";
		this.u8q = false;
		if (this.h6p && u7k.m7p())
		{
			this.c4f("(", true);
			let f5z = this.h4j;
			this.a1h(l3h, u7k.z6s());
			this.g7x(f5z);
			w9b = "";
      k7h = true;
		}
	}
	else
	{
		if (this.h6p && u7k.m7p())
		{
  	  let f5z = this.h4j;
	  	this.a1h(l3h, u7k.z6s());
		  this.g7x(f5z);
      k7h = true;
    }
	}
	if (u7k.b6n())
	{
		w9b += e8l(u7k.i1q());
	}
	let t8m = u7k.y2v();
	if (t8m)
	{
    w9b += u0w;
		w9b += '.';
	}
	else
	{
		if (this.n3h || k7h)
		{
 			w9b += u0w;
			w9b += "...";
		}
	}
	w9b += a3z(g0t, u7k.l3n(), false);
	if (u7k.i9e())
	{
		w9b += k6g(u7k.style());
	}
	if (u7k.o7w())
	{
		w9b += y0s(u7k.value());
	}
	if (u7k.y3u())
	{
		w9b += " End Of Game";
  }
	if (this.v4g || this.w5h)
	{
		if (this.m0z.z5h(l3h) && (!this.h6p || !u7k.n2k()))
		{
			if (this.v4g)
			{
				w9b += ")";
				this.v4g = false;
			}
			else
			{
				w9b += ";";
				this.w5h = false;
			}
		}
	}
	this.h8t(l3h, w9b);
	this.n3h = false;

	if (u7k.j2p())
	{
		let p3y = u7k.p3y();
    let z7v = p3y.indexOf("[#]");
		let n1c = p3y.substring(0, z7v);
	  let r9t = p3y.substring(z7v + 3);
		if (n1c.length)
		{
			this.i5a(l3h, n1c);
		}
		this.s1j++;
		if (this.i0y)
		{
			this.t7e(i1x.h4o);
      this.t7k(l3h, g0t, this.s1j);
			this.n3h = true;
		}
		if (r9t.length)
		{
			this.i5a(l3h, r9t);
		}
	}
	else
	{
		this.i5a(l3h, u7k.p3y());
	}

  if (u7k.y3u())
	{
    this.p6t.h5e("<div>&nbsp;</div>"); 
   	this.o4e();
 	  this.d6x(false); 
 	  this.s5r = true;
	}
}

g7x(b3l)
{
	if (b3l != this.h4j)
	{
		this.a0x();
		this.h4j = b3l;
		this.g4y();
	}
}

g4y()
{
}

a0x()
{
	this.h4j = i1x.h4o;
}

t7e(b3l)
{
	this.a0x();
	this.h4j = i1x.h4o;
  
  
  
  
  this.p6t.h5e("<br>"); 
	if (b3l != i1x.h4o)
	{
		this.h4j = b3l;
		this.g4y();
	}
}

t7k(l3h, g0t, l3c)
{
  this.f6p = true;
	let t5f = "<span class=\"tddia\" movenr=\"";
  t5f += this.m0z.t0h(l3h).toString();
	t5f += "\">",
	this.p6t.a7x(t5f);
	this.p6t.a7x("<canvas></canvas>");
	this.p6t.a7x("</span>");
	this.n3h = true;
}

j1b(l3h, h5k)
{
  this.x7o(l3h);
	this.h1b(h5k);
  this.w1a();
}

i4x(e4v, u8i, u0w, v6a, i1q, g8s)
{
  let l3h = e4v.v0z();
  let g0t = u8i.v0z();

	if (i1q.length)
	{
		this.g7x(i1x.i1q);
		let l4q = i1q;
		l4q += ")";
    let t5f = "<span class=\"tdprefix\">";
    this.p6t.a7x(t5f);
  	this.c4f(l4q);
    this.p6t.a7x("</span>");
	}
	let a9i = 0;
	let z2p = 1;
  this.m0z.c9j(l3h, v6a);
	this.n3h = true;
	do
	{
		this.g7x(i1x.m9g);
		this.z8b(l3h, g0t, u0w);
		if (a9i > 1)
		{
      this.m0z.v3v(l3h);
      this.i5j(l3h, g0t, u0w);
      this.m0z.v1s(l3h);
			this.n3h = true;
		}
		g0t.v1s(l3h.u7k.l3n());
		if (g0t.q8z())
		{
			u0w++;
		}
		a9i = this.m0z.a9i(l3h);
		if (a9i == 0)
		{
			break;
		}
		if (a9i > 1)
		{
			if (!this.m0z.u5q(l3h))
			{
				break;
			}
		}
    this.m0z.v1s(l3h);
		z2p++;
	} while (true);

	if (this.m0z.z5h(l3h))
	{
		return;
	}

	let h4g = i1q.length;
	let l4q = '';
	let z5r = 1;
	for (let i = 0; i < a9i; i++)
	{
		if (h4g == 0)
		{
      l4q = String.fromCharCode('A'.charCodeAt() + z5r - 1);
		}
		else if (h4g == 1)
		{
      l4q = i1q;
      l4q += z5r;
		}
		else if (h4g == 2)
		{
      l4q = i1q;
      l4q += String.fromCharCode('a'.charCodeAt() + z5r - 1);
		}
		else
		{
      l4q = i1q;
      l4q += z5r;
		}

    let t5f = "<span class=\"tdline\" data-level=\"";
    t5f += g8s.toString();
    t5f += "\">";
    this.p6t.a7x(t5f);
  	this.t7e(this.h4j);
    this.i4x(l3h, g0t, u0w, i, l4q, g8s);
    this.p6t.a7x("</span>");
		z5r++;
	}
}

i5j(e4v, u8i, u0w)
{
  let l3h = e4v.v0z();
  let g0t = u8i.v0z();

	this.g7x(i1x.x8j);
	this.u8q = true;
	this.w5h = false;
	let a9i = this.m0z.a9i(l3h);
	for (let i = 1; i < a9i; i++)
	{
		if (i == a9i - 1)
		{
			this.v4g = true;
		}
		if (i < a9i - 1)
		{
			this.w5h = true;
		}
    this.r5v(l3h, g0t, u0w, i);
		if (this.w5h)
		{
			this.g7x(i1x.x8j);
			this.c4f(";", false);
			this.w5h = false;
		}
	}
	this.g7x(i1x.x8j);
	if (this.v4g)
	{
		this.c4f(")", false);
		this.v4g = false;
	}
}

r5v(e4v, u8i, u0w, v6a)
{
  let l3h = e4v.v0z();
  let g0t = u8i.v0z();

  this.m0z.c9j(l3h, v6a);
	let z2p = 0;
	this.n3h = true;
	do
	{
		z2p++;
		this.g7x(i1x.x8j);
		this.z8b(l3h, g0t, u0w);
		if (this.m0z.z5h(l3h))
		{
			break;
		}
		g0t.v1s(l3h.u7k.l3n());
		if (g0t.q8z())
		{
			u0w++;
		}
    this.m0z.v1s(l3h);
	} while (true);
}

h8t(l3h, w9b)
{
	if (w9b.length)
	{
 		this.j0s(l3h, w9b);
	}
	else
	{
		if (this.j1g)
    {
      this.j0s(l3h, "[...]");
    }
	}
	if (l3h.u7k)
	{
		if (l3h.u7k.i3g() || l3h.u7k.v7j())
		{
			this.e3f(l3h, i1x.t9p);
		}
		if (l3h.u7k.j2p())
		{
		}
		if (l3h.u7k.a8c())
		{
			this.e3f(l3h, i1x.m6m);
		}
		if (l3h.u7k.z2s())
		{
			this.e3f(l3h, i1x.c6x);
		}
	}
	else
	{
		if (this.m0z.o8f() || this.m0z.h1v())
		{
			this.e3f(l3h, i1x.t9p);
		}
		if (this.m0z.t4b())
		{
		 	this.e3f(l3h, i1x.c6x);
		}
	}
}

c4f(w9b, i6q)
{
	if (w9b.length == 0)
	{
		return;
	}
	if (!this.f6p && i6q)
	{
		this.p6t.h5e(" ");
	}
	this.p6t.h5e(w9b);
	this.f6p = false;
}

a1h(l3h, z6s)
{
	if (this.h6p && z6s.length)
	{
		this.g7x(i1x.z6s);
		this.j1b(l3h, z6s);
	}
}

i5a(l3h, p3y)
{
	if (this.h6p && p3y.length)
	{
		this.g7x(i1x.p3y);
		this.j1b(l3h, p3y);
	}
}

h1b(h5k)
{
  let i3j = h5k;
  let c9k = i3j.replaceAll("<br><br>", "<br>");
  let u2v = c9k.replaceAll("<br><br>", "<br>");
  let c6h = u2v.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = c6h;
  this.p6t.h5e(s);
}

j0s(l3h, w9b)
{
	if (w9b.length == 0)
	{
		return;
	}
	if (!this.f6p)
	{
		this.p6t.h5e(" ");
	}
  let j8x = '';
  if (l3h.u7k)
  {
  	if (l3h.u7k.o0p())
	  {
		  if (l3h.u7k.n3f() == u9e.u7m)
  		{
	  		j8x = "tdmove-crit-opening";
		  }
  		else if (l3h.u7k.n3f() == u9e.w5p)
	  	{
		  	j8x = "tdmove-crit-middle";
  		}
	  	else if (l3h.u7k.n3f() == u9e.e0u)
		  {
  			j8x = "tdmove-crit-end";
	  	}
  	}
  }
	let a5h = "<span class=\"";
	if (j8x.length == 0)
	{
		a5h += "tdmove\" movenr=\"";
	}
	else
	{
		a5h += "tdmove " + j8x + "\" movenr=\"";
	}
  a5h += this.m0z.t0h(l3h).toString();
  a5h += "\"";
	a5h += ">",
	a5h += w9b;
	a5h += "</span>";

	this.p6t.a7x(a5h);
	this.f6p = false;
}

e3f(l3h, b3l)
{
  if (b3l == i1x.t9p)
  {
    this.b9z(l3h);
  }
  else if (b3l == i1x.c6x)
  {
    this.r0p(l3h);
  }
}

b9z(l3h)
{
	let t5f = "<span class=\"tdcolors\" movenr=\"";
  t5f += this.m0z.t0h(l3h).toString();
	t5f += "\">",
	this.p6t.a7x(t5f);
	this.p6t.a7x("</span>");
}

r0p(l3h)
{
	let t5f = "<span class=\"tdmedal\" movenr=\"";
  t5f += this.m0z.t0h(l3h).toString();
	t5f += "\">",
	this.p6t.a7x(t5f);
	this.p6t.a7x("<canvas></canvas>");
	this.p6t.a7x("</span>");
}

d6x(a6t)
{
 	let t5f = "<span class=\"tdline\"";
	if (a6t)
	{
		t5f += " data-commented=\"1\"";
	}
	t5f += " data-level=\"0\">";
	this.p6t.h5e(t5f);
}

o4e()
{
  this.p6t.a7x("</span>");
}

x7o(l3h)
{
  let c0t = "tdcomment";
  if (this.b3i)
  {
    c0t += " is-bold";
  }
  let t5f = "<span class=\"" + c0t + "\" movenr=\"";
  t5f += this.m0z.t0h(l3h).toString();
  t5f += "\">";
  this.p6t.h5e(t5f);
}

w1a()
{
  this.p6t.a7x("</span>");
}

h0j(value)
{
  this.j1g = value;
}

y9x(value)
{
  this.b3i = value;
}

b7b(value)
{
  this.h3p = value;
}

z8h(value)
{
  this.k7q = value;
}

} 
const k8b =
{
	o5y : 1,
	w3t : 2,
	f1d : 3
};

class s6v
{

constructor()
{
	this.o3y = 0;
	this.y9w = 0;
	this.type = k8b.o5y;
}

v0z()
{
	let h0c = new s6v();
	h0c.o3y = this.o3y;
	h0c.y9w = this.y9w;
	h0c.type = this.type;
	return h0c;
}

}

function s6m(o3y, y9w, type)
{
	let s = new s6v();
	s.o3y = o3y;
	s.y9w = y9w;
	s.type = type;
	return s;
}
class b2p
{

constructor()
{
	this.h2m = [];
}

v0z()
{
	let n4g = new b2p();
	for (const t0m of this.h2m)
	{
		n4g.add(t0m.v0z());
	}
	return n4g;
}

a1t()
{
	this.h2m.length = 0;
}

f3l()
{
	return this.h2m.length == 0;
}

size()
{
	return this.h2m.length;
}

add(t0m)
{
	let a0t = t0m.v0z();
	this.h2m.push(a0t);
}

}

const t8s =
{
	y6v : 0,
	v0n : 1,
	p4b : 2
};

class o5h
{

constructor()
{
	this.b1b = 0;
	this.type = t8s.y6v;
}

v0z()
{
	let s3l = new o5h();
	s3l.b1b = this.b1b;
	s3l.type = this.type;
	return s3l;
}

}

function u0d(b1b, type)
{
	let a2w = new o5h();
	a2w.b1b = b1b;
	a2w.type = type;
	return a2w;
}

class g8o
{

constructor()
{
	this.t4f = [];
}

v0z()
{
	let p0a = new g8o();
	for (const r6x of this.t4f)
	{
		p0a.add(r6x.v0z());
	}
	return p0a;
}

a1t()
{
	this.t4f.length = 0;
}

f3l()
{
	return this.t4f.length == 0;
}

size()
{
	return this.t4f.length;
}

add(k2k)
{
	let b2y = k2k.v0z();
	this.t4f.push(b2y);
}

}

const n7q =
{
	d4i    : 0,
	g3a  : 1,
	o4t  : 2,
	n9w    : 3,
  k8s   : 4,
	v1f    : 5,
};


function x7f(j3b)
{
	let w9b = '';
	switch (j3b)
	{
		case n7q.d4i:
			w9b = "P";
			break;
		case n7q.g3a:
			w9b = "N";
			break;
		case n7q.o4t:
			w9b = "B";
			break;
		case n7q.n9w:
			w9b = "R";
			break;
		case n7q.k8s:
			w9b = "Q";
			break;
		case n7q.king:
			w9b = "K";
			break;
	}
	return w9b;
}

class n4q
{

constructor()
{
  this.a3i = 0;
	this.c7d = new v1k();
	this.x5y = new w4t();
}

v0z()
{
	let k4s = new n4q();
  k4s.a3i = this.a3i;
	k4s.c7d = this.c7d.v0z();
	k4s.x5y = this.x5y.v0z();
	return k4s;
}

}

const y6d = 	 		"#7B8295";
const u1y =			"#9F9F9F";
const n3o = 			    "#7B8295";
const z6y = 		  "#FFFFFF";
const d2r =       "#D0B194";

const b7y	   = "#E13129";
const d4l	 = "#389C13";
const n5v = "#E2B628";

const o9y	 = "#E13129";
const s2y	 = "#389C13";
const h9u	   = "#E2B628";

class h4h
{

constructor()
{
	this.l5i = null;
	this.j9s = false;
	this.s6a = null;
	this.z8r = null;
	this.v8r = null;
	this.b6q = 0;
	this.x4v = 0;
	this.j8m = 0;
	this.d4e = 0;
	this.v0x = 0;
	this.w4w = 0;
	this.k0l = new k2g();
	this.g0t = new r7e();
	this.r1m = new b2p();
	this.n6e = new g8o();
  this.u3s = new w9g();
  this.b4v = true;
	this.w1s = true;
	this.t5v = true;
	this.x0n = false;
	this.o6w = y6d;
	this.n7t = u1y;
	this.f8p = p3i;
	this.m7c = a0z;
	this.z7y = a0z;
	this.v3a = s1h;
	this.e3y = true;
	this.v1p = o0a;
	this.b3z = o0a;
	this.q2s = false;
	this.m9y = [];
	this.k2w = 0;
}

j6p(l5i)
{
	this.l5i = l5i;
}

l0r(k0l)
{
	this.k0l = k0l;
	this.j8m = k0l.j8m();
	this.d4e = k0l.j8m();

	this.b6q = (this.l5i.width - this.j8m) / 2;
	let top = (this.l5i.height - this.d4e) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.x4v = top;
	this.v0x = this.b6q + this.j8m - 1;
	this.w4w = this.x4v + this.d4e - 1;
	this.j9s = false;
	this.k9l();
}

d9r(g0t)
{
	this.g0t = g0t.v0z();
	this.r1m.a1t();
	this.n6e.a1t();
}

j6x(r1m)
{
	this.r1m = r1m.v0z();
}

x5l(n6e)
{
	this.n6e = n6e.v0z();
}

n5q(u7k)
{
  this.u3s = u7k.v0z();
}

z5y(x0n)
{
	this.x0n = x0n;
}

r3j()
{
	this.x0n = !this.x0n;
}

y9y()
{
	if (!this.l5i) return;
	if (this.j8m <= 0 || this.d4e <= 0)
	{
		return;
	}
	this.g1c();
}

n7w()
{
	let s3c = this.k0l.s3c;
	if (this.j9s)
	{
		return;
	}
	this.j9s = true;
	if (s3c == k5b.l1n)
	{
  	this.s6a = a2a.s1o("images/board/LightSquare");
  	this.z8r = a2a.s1o("images/board/DarkSquare");
		this.v8r = a2a.s1o("images/board/Margin");
	}
}

k9l()
{
	this.n7w();
	let s3c = this.k0l.s3c;
	if (s3c == k5b.l1n)
	{
		this.e3y = false;
		this.w1s = false;
		this.t5v = false;
		this.f8p = "#FFFF97";
		this.m7c = "#9B2E31";
		this.z7y = m9z;
	}
}

g1c()
{
	this.k9l();
	if (this.k0l.s3c == k5b.l1n)
	{
		let i7j = a2a.s1o("images/board/BoardBackground");
		this.z9n(new h6j(0, 0, this.l5i.width, this.l5i.height), i7j);
	}
	this.j5i();  
	this.t5b(); 
	this.c9y(); 
  if (chess)
  {
	  this.s1a();
  }
  else
  {
	  this.r7j();
  	this.a3k();
  }
  
  this.j4e();
 	this.i8o();
 	this.y1v();
 	this.p4d();
	this.t5l(); 
	this.x4x();      
}

j5i()
{
	let u3r = this.x4v;
	let e7h = this.b6q;
	let u3y = this.v0x;
	let q0r = this.w4w;
	let p8r = this.k0l.x4a;
	this.y9h(new h6j(e7h, u3r, u3y, u3r+p8r-1), this.m7c);
	this.y9h(new h6j(e7h, q0r-p8r+1, u3y, q0r), this.z7y);
	this.y9h(new h6j(e7h, u3r, e7h+p8r-1, q0r), this.m7c);
	this.y9h(new h6j(u3y-p8r+1, u3r, u3y, q0r), this.z7y);
}

t5b()
{
	let x4a = this.k0l.x4a;
	let q2d = this.k0l.q2d;
	if (!q2d)
	{
		return;
	}
	if (this.e3y || !this.v8r)
	{
		this.c7w(this.v3a);
	}
	else
	{
		let left = this.b6q + x4a;
		let top = this.x4v + x4a;
		let f3g = this.v0x - x4a;
		let j6w = this.x4v + x4a + q2d - 1;
		this.z9n(new h6j(left, top, f3g, j6w), this.v8r);

		left = this.b6q + x4a;
		top = this.x4v + x4a;
		f3g = this.b6q + x4a + q2d - 1;
		j6w = this.w4w - x4a;
		this.z9n(new h6j(left, top, f3g, j6w), this.v8r);

		left = this.b6q + x4a;
		top = this.w4w - x4a - q2d + 1;
		f3g = this.v0x - x4a;
		j6w = this.w4w - x4a;
		this.z9n(new h6j(left, top, f3g, j6w), this.v8r);

		left = this.v0x - x4a - q2d + 1;
		top = this.x4v + x4a;
		f3g = this.v0x - x4a;
		j6w = this.w4w - x4a;
		this.z9n(new h6j(left, top, f3g, j6w), this.v8r);
	}
}

c7w()
{
	let x4a = this.k0l.x4a;
	let q2d = this.k0l.q2d;
	if (!q2d)
	{
		return;
	}

	let left = this.b6q + x4a;
	let top = this.x4v + x4a;
	let f3g = this.v0x - x4a;
	let j6w = this.x4v + x4a + q2d - 1;
	this.y9h(new h6j(left, top, f3g, j6w), this.v3a);

	left = this.b6q + x4a;
	top = this.x4v + x4a;
	f3g = this.b6q + x4a + q2d - 1;
	j6w = this.w4w - x4a;
	this.y9h(new h6j(left, top, f3g, j6w), this.v3a);

	left = this.b6q + x4a;
	top = this.w4w - x4a - q2d + 1;
	f3g = this.v0x - x4a;
	j6w = this.w4w - x4a;
	this.y9h(new h6j(left, top, f3g, j6w), this.v3a);

	left = this.v0x - x4a - q2d + 1;
	top = this.x4v + x4a;
	f3g = this.v0x - x4a;
	j6w = this.w4w - x4a;
	this.y9h(new h6j(left, top, f3g, j6w), this.v3a);
}

x4x()
{
	if (this.k0l.e3a)
	{
  	if (!this.k0l.q2d)
  	{
	  	return;
  	}
		let color = "#000000";
		if (this.g0t.q8z())
		{
			color = "#EDD790";
		}
		else
		{
			color = "#000000";
		}
		let rect = this.d0b();
		let w7v = this.e4u();
		w7v.beginPath();
		w7v.fillStyle = color;
		let p9j = rect.s6g() * 0.40;
		w7v.arc(rect.y9z + rect.s6g()/2 - 1, rect.i1g + rect.f5i()/2 - 1,
			p9j, 0, 2 * Math.PI);
		w7v.fill();
	}
}

c9y()
{
	let b8b = m9z;
	let x4a = this.k0l.x4a;
	let q2d = this.k0l.q2d;
	let p8r = this.k0l.p8r;
	let u3r = this.x4v + x4a + q2d;
	let e7h = this.b6q + x4a + q2d;
	let u3y = this.v0x - x4a - q2d;
	let q0r = this.w4w - x4a - q2d;
	this.y9h(new h6j(e7h, u3r, u3y, u3r+p8r-1), b8b);
	this.y9h(new h6j(e7h, q0r-p8r+1, u3y, q0r), b8b);
	this.y9h(new h6j(e7h, u3r, e7h+p8r-1, q0r), b8b);
	this.y9h(new h6j(u3y-p8r+1, u3r, u3y, q0r), b8b);
}

e4u()
{
	return this.l5i.getContext('2d');
}

v8h(rect, color)
{
	let w7v = this.e4u();
	w7v.beginPath();
	w7v.lineWidth = "1";
	w7v.strokeStyle = color;
	w7v.rect(rect.y9z, rect.i1g, rect.s6g(), rect.f5i());
	w7v.stroke();
}

y9h(rect, color)
{
	let w7v = this.e4u();
	w7v.fillStyle = color;
	w7v.fillRect(rect.y9z, rect.i1g, rect.s6g(), rect.f5i());
}

z9n(rect, img)
{
	let w7v = this.e4u();
	let e5n = w7v.createPattern(img, 'repeat');
	w7v.fillStyle = e5n;
	w7v.fillRect(rect.y9z, rect.i1g, rect.s6g(), rect.f5i());
}

e8y(rect, img)
{
	let w7v = this.e4u();
	let e5n = w7v.createPattern(img, 'no-repeat');
	w7v.fillStyle = e5n;
	w7v.fillRect(rect.y9z, rect.i1g, rect.s6g(), rect.f5i());
}

t6l(b1b)
{
	let r0w = p8y;
	let f5d = x1h;
	if (this.x0n)
	{
		r0w = t5a(d8r(b1b));
		f5d = p7m(d8r(b1b));
	}
	else
	{
		r0w = t5a(b1b);
		f5d = p7m(b1b);
	}
	if (startsWithDarkSquare(f5d))
	{
		r0w++;
	}
	else
	{
		r0w--;
	}
	return this.o0i(f5d, r0w);
}

r7j()
{
	for (const b1b of f7t)
	{
		this.a0s(b1b);
	}
}

a0s(b1b)
{
	this.z4m(this.t6l(b1b), b1b);
}

z4m(rect, b1b)
{
	let s1o = this.s6a;
	if (this.t5v)
	{
		this.p4n(rect, this.n7t);
		return;
	}
	if (!s1o)
	{
		this.p4n(rect, this.n7t);
		return;
	}

	let u5m = s1o.width;
	let s1w = s1o.height;
	let z0u = this.k0l.u4a;
	if (u5m < z0u || s1w < z0u)
	{
		this.e8y(rect, s1o);
		return;
	}

	let s4o = Math.trunc(u5m / this.k0l.u4a);
	let b8j = Math.trunc(s1w / this.k0l.u4a);
	if (s4o == 0)
	{
		s4o = 1;
	}
	if (b8j == 0)
	{
		b8j = 1;
	}

	let n6f = Math.trunc((b1b) / s4o);
	let n8o = (b1b) % s4o;
	let y = Math.trunc(n6f / b8j);
	n6f = n6f % b8j;

  let m1i = new h6j();
	m1i.y9z = n8o * this.k0l.u4a;
	m1i.i1g = n6f * this.k0l.u4a;
	m1i.o2p = (n8o + 1) * this.k0l.u4a - 1;
	m1i.w7k = (n6f + 1) * this.k0l.u4a - 1;
	let w7v = this.e4u();
	c8l(w7v, rect, s1o, m1i);
}

h2r(b1b)
{
	let r0w = p8y;
	let f5d = x1h;
	if (this.x0n)
	{
		r0w = t5a(d8r(b1b));
		f5d = p7m(d8r(b1b));
	}
	else
	{
		r0w = t5a(b1b);
		f5d = p7m(b1b);
	}
	return this.o0i(f5d, r0w);
}

a3k()
{
	for (const b1b of f7t)
	{
		this.w4p(b1b);
	}
}

w4p(b1b)
{
	this.u7b(this.h2r(b1b), b1b);
}

u7b(rect, b1b)
{
	let s1o = this.z8r;
	if (this.w1s)
	{
		this.p4n(rect, this.o6w);
		return;
	}
	if (!s1o)
	{
		this.p4n(rect, this.o6w);
		return;
	}

	let u5m = s1o.width;
	let s1w = s1o.height;
	let z0u = this.k0l.u4a;
	if (u5m < z0u || s1w < z0u)
	{
		this.e8y(rect, s1o);
		return;
	}

	let s4o = Math.trunc(u5m / this.k0l.u4a);
	let b8j = Math.trunc(s1w / this.k0l.u4a);
	if (s4o == 0)
	{
		s4o = 1;
	}
	if (b8j == 0)
	{
		b8j = 1;
	}

	let n6f = Math.trunc((b1b) / s4o);
	let n8o = (b1b) % s4o;
	let y = Math.trunc(n6f / b8j);
	n6f = n6f % b8j;

  let m1i = new h6j();
	m1i.y9z = n8o * this.k0l.u4a;
	m1i.i1g = n6f * this.k0l.u4a;
	m1i.o2p = (n8o + 1) * this.k0l.u4a - 1;
	m1i.w7k = (n6f + 1) * this.k0l.u4a - 1;
	let w7v = this.e4u();
	c8l(w7v, rect, s1o, m1i);
}

o0i(f5d, r0w)
{
	let x4a = this.k0l.x4a;
	let q2d = this.k0l.q2d;
	let p8r = this.k0l.p8r;
	let u4a = this.k0l.u4a;
	let rect = new h6j();
	rect.y9z = this.b6q + x4a + q2d +	p8r + (r0w) * u4a;
	rect.o2p = rect.y9z + u4a - 1;
	rect.i1g = this.x4v + x4a + q2d +	p8r + (w0l - f5d - 1) * u4a;
	rect.w7k = rect.i1g + u4a - 1;
	return rect;
}

l5y(b1b)
{
	let r0w = p8y;
	let f5d = x1h;
	if (this.x0n)
	{
		r0w = t5a(d8r(b1b));
		f5d = p7m(d8r(b1b));
	}
	else
	{
		r0w = t5a(b1b);
		f5d = p7m(b1b);
	}
	return this.o0i(f5d, r0w);
}

s1a()
{
	for (const b1b of f7t)
	{
		this.o7r(b1b);
	}
}

o7r(b1b)
{
	this.w6d(this.l5y(b1b), b1b);
}

w6d(rect, b1b)
{
	let y6z = b0w(b1b);
	let s1o = this.s6a;
	if (y6z)
	{
		s1o = this.z8r;
	}
	if (y6z)
	{
		if (this.w1s)
		{
			this.p4n(rect, this.o6w);
			return;
		}
		if (!s1o)
		{
			this.p4n(rect, this.o6w);
			return;
		}
	}
	else
	{
		if (this.t5v)
		{
			this.p4n(rect, this.n7t);
			return;
		}
		if (!s1o)
		{
			this.p4n(rect, this.n7t);
			return;
		}
	}

 	let u5m = s1o.width;
	let s1w = s1o.height;
	let z0u = this.k0l.u4a;
	if (u5m < z0u || s1w < z0u)
	{
		this.e8y(rect, s1o);
		return;
	}
	let s4o = Math.trunc(u5m / this.k0l.u4a);
	let b8j = Math.trunc(s1w / this.k0l.u4a);
	if (s4o == 0)
	{
		s4o = 1;
	}
	if (b8j == 0)
	{
		b8j = 1;
	}

	let n6f = Math.trunc((b1b) / s4o);
	let n8o = (b1b) % s4o;
	let y = Math.trunc(n6f / b8j);
	n6f = n6f % b8j;

  let m1i = new h6j();
	m1i.y9z = n8o * this.k0l.u4a;
	m1i.i1g = n6f * this.k0l.u4a;
	m1i.o2p = (n8o + 1) * this.k0l.u4a - 1;
	m1i.w7k = (n6f + 1) * this.k0l.u4a - 1;
	let w7v = this.e4u();
	c8l(w7v, rect, s1o, m1i);
}

p4n(rect, color)
{
	this.y9h(rect, color);
}

y1v()
{
	for (const b1b of f7t)
	{
		this.c5i(b1b);
	}
}

q9w(o3y, y9w, y5a)
{
	this.v1p = o3y;
	this.b3z = y9w;
	this.q2s = y5a;

	this.m9y.length = 0;
 	let l9h = this.l5y(o3y);
  let p6u = this.l5y(y9w);
	let w6h = this.k0l.u4a;

	let h4r = 32;
	if (w6h < 32)
	{
		h4r = w6h;
	}

  
	if (false)
	{
    
    
		let z6p = new v0d(l9h.y9z + w6h / 2, l9h.i1g + w6h / 2);
		let l5f = new v0d(p6u.y9z + w6h / 2, p6u.i1g + w6h / 2);
		let e0v = Math.abs(z6p.X - l5f.X);
		let f3c = Math.abs(z6p.Y - l5f.Y);
		let f3u = Math.atan2(l5f.X - z6p.X, z6p.Y - l5f.Y);
		let k9z = Math.sqrt(e0v*e0v + f3c*f3c) / 2;
		l5f.X = z6p.X + k9z * 2;
		l5f.Y = z6p.Y;
		let p8d = new v0d(z6p.X + k9z, z6p.Y);
		let x2f = Math.PI / h4r;
		let h3c = w6h * 0.40;
		let h7z = Math.PI;
		let o0w = (p6u.y9z > l9h.y9z && p6u.i1g < l9h.i1g) ||
			(p6u.y9z < l9h.y9z && p6u.i1g > l9h.i1g);
		for (let i = 1; i < h4r; i++)
		{
			let v8h = new h6j();
			if (o0w)
			{
				h7z -= x2f;
			}
			else
			{
				h7z += x2f;
			}
			let b4o = Math.cos(h7z);
			let s3f = Math.sin(h7z);
			let u6p = new v0d(p8d.X + k9z * b4o,
				p8d.Y - h3c * s3f);
			this.m9y.push(n2z(u6p, z6p, f3u - Math.PI / 2));
		}
	}
	else
	{
		let z6p = new v0d(l9h.y9z + w6h / 2, l9h.i1g + w6h / 2);
		let l5f = new v0d(p6u.y9z + w6h / 2, p6u.i1g + w6h / 2);
		let s5x = (l5f.X - z6p.X) / h4r;
		let m7z = (l5f.Y - z6p.Y) / h4r;
		for (let i = 1; i < h4r; i++)
		{
			this.m9y.push(new v0d(z6p.X + i * s5x, z6p.Y + i * m7z));
		}
	}
	this.m9y.push(new v0d(p6u.y9z + w6h / 2, p6u.i1g + w6h / 2));
	this.k2w = 0;
}

e1y()
{
	this.v1p = o0a;
	this.b3z = o0a;
}

b8i()
{
	this.y9y(); 

	let d7g = this.m9y[this.k2w];
	let u4a = this.k0l.u4a;
	let v8h = new h6j();
	v8h.y9z = d7g.X - u4a / 2;
	v8h.i1g = d7g.Y - u4a / 2;
	v8h.q1w(u4a);
	v8h.c5h(u4a);
 	let w7v = this.e4u();
	t1k(w7v, v8h, this.g0t.z9f(this.v1p));

	this.k2w++;
	if (this.k2w >= this.m9y.length)
	{
		let j3b = this.g0t.z9f(this.v1p);
		this.g0t.c8y(this.v1p, e0d.f3l);
		this.g0t.c8y(this.b3z, j3b);
		this.e1y();
		return true;
	}
	else
	{
		return false;
	}
}

c5i(b1b)
{
	if (b1b == this.v1p)
	{
		return;
	}
	let l5q = this.l5y(b1b);
 	let w7v = this.e4u();
	t1k(w7v, l5q, this.g0t.z9f(b1b));
}

t5l()
{
	if (!this.k0l.q6q)
	{
    return;
  }

 	let p8r = this.k0l.p8r;
	let x4a = this.k0l.x4a;
	let q2d = this.k0l.q2d;
	let u4a = this.k0l.u4a;

	let t4r = new h6j();
	t4r.y9z = this.b6q + x4a + q2d;
	t4r.i1g = this.x4v + x4a + q2d;
	t4r.q1w(w0l * u4a + 2 * p8r);
	t4r.c5h(w0l * u4a + 2 * p8r);

 	let w7v = this.e4u();
  let t7f = w8a(w7v, q2d-6);

  t5l(w7v,
    t4r,
    this.k0l,
    t7f,
    n4y.g3f,
    this.f8p,
    this.x0n,
    q2d);
}

k5p(b1b, color)
{
	let rect = this.l5y(b1b);
	let w7v = this.e4u();
  w7v.save();
  w7v.globalAlpha = 0.25; 
	w7v.fillStyle = color;
	w7v.fillRect(rect.y9z, rect.i1g, rect.s6g(), rect.f5i());
  w7v.restore();
}

j4e()
{
	if (this.b4v)
	{
		if (!this.u3s.f3l())
		{
      let color = "#800080"; 
			this.k5p(this.u3s.o3y, color);
			this.k5p(this.u3s.y9w, color);
		}
  }
}

i8o()
{
	for (const r6x of this.n6e.t4f)
	{
		this.o5x(r6x);
	}
}

o5x(r6x)
{
	let rect = this.l5y(r6x.b1b);
	let l4v = '';
	switch (r6x.type)
	{
		case t8s.y6v:
			l4v = b7y;
			break;
		case t8s.v0n:
			l4v = d4l;
			break;
		case t8s.p4b:
			l4v = n5v;
			break;
	}
	let w6h = this.j8m / 10;
	let w7v = this.e4u();
  /* dit is met roundrect
  u0m(rect, 5);
	w7v.lineWidth = w6h / 15;
	w7v.strokeStyle = l4v;
	h3o(w7v, rect.y9z, rect.i1g, rect.s6g(), rect.f5i(), 10);
  */
  
  w7v.save();
  w7v.globalAlpha = 0.7; 
	w7v.fillStyle = l4v;
	w7v.fillRect(rect.y9z, rect.i1g, rect.s6g(), rect.f5i());
  w7v.restore();
}

p4d()
{
	for (const t0m of this.r1m.h2m)
	{
		this.d1h(t0m);
	}
}

d1h(t0m)
{
	let o3y = t0m.o3y;
	let y9w = t0m.y9w;
	let o2x = t0m.type;

	let l9h = this.l5y(o3y);
	let p6u = this.l5y(y9w);

	let q2m = l9h.y9z + l9h.s6g()/2;
	let q7q = l9h.i1g + l9h.f5i()/2;
	let u2m = new v0d(q2m, q7q);

	let o7p = p6u.y9z + p6u.s6g()/2;
	let y8d = p6u.i1g + p6u.f5i()/2;

	let x5n = (o7p-q2m)*(o7p-q2m) + (y8d-q7q)*(y8d-q7q);
	let m9e = Math.sqrt(x5n);

	let r1h = (this.g0t.f2j(o3y)) ? 0 : l9h.s6g() / 4;
	m9e -= r1h;
	let u3v = (this.g0t.f2j(y9w)) ? 0 : l9h.s6g() / 4;
	m9e -= u3v;

	let g7k = 5;
	let l2u = 5 * g7k;
	let j0g = 7 * g7k;

	let s8d = q2m + r1h;
	let d5h = q7q;

	let h6w = s8d + m9e - 1;
	let s4h = q7q;

	let z3z = h6w - j0g;
	let t3p = q7q;

	let f3u = Math.atan2((o7p - q2m), (q7q - y8d));

  
	let b1k = [];
  let v4t = 10; 
	b1k.push(new v0d(z3z, t3p));
	b1k.push(new v0d(z3z - v4t, t3p - l2u));
	b1k.push(new v0d(h6w, s4h));
	b1k.push(new v0d(z3z - v4t, t3p + l2u));
	b1k.push(new v0d(z3z, s4h));
	let g2t = [];
	for (let i = 0; i <= 4; i++)
	{
		g2t.push(n2z(b1k[i], u2m, f3u - Math.PI / 2));
	}

	let w7v = this.e4u();
  w7v.save();
  w7v.globalAlpha = 0.7;

 	let m2l = '';
	switch (o2x)
	{
		case k8b.o5y:
			m2l = o9y;
			break;
		case k8b.w3t:
			m2l = s2y;
			break;
		case k8b.f1d:
			m2l = h9u;
			break;
	}
 	w7v.fillStyle = m2l;
  w7v.strokeStyle = m2l;
	w7v.beginPath();
	w7v.moveTo(g2t[0].X, g2t[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		w7v.lineTo(g2t[i].X, g2t[i].Y);
	}
	w7v.closePath();
	w7v.fill();

  
	b1k.length = 0;
	b1k.push(new v0d(s8d, d5h - g7k));
	b1k.push(new v0d(s8d, d5h + g7k));
	b1k.push(new v0d(z3z, d5h + g7k));
	b1k.push(new v0d(z3z, d5h - g7k));
	g2t.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		g2t.push(n2z(b1k[i], u2m, f3u - Math.PI / 2));
	}
	if (q2m == o7p)
	{
		if (g2t[0].Y != g2t[1].Y)
		{
			g2t[0].Y = g2t[1].Y;
		}
		if (g2t[2].Y != g2t[3].Y)
		{
			g2t[2].Y = g2t[3].Y;
		}
	}
	if (q7q == y8d)
	{
		if (g2t[0].X != g2t[1].X)
		{
			g2t[0].X = g2t[1].X;
		}
		if (g2t[2].X != g2t[3].X)
		{
			g2t[2].X = g2t[3].X;
		}
	}
	w7v.beginPath();
	w7v.moveTo(g2t[0].X, g2t[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		w7v.lineTo(g2t[i].X, g2t[i].Y);
	}
	w7v.closePath();
	w7v.fill();
  w7v.restore();
}

d0b()
{
	let x4a = this.k0l.x4a;
	let q2d = this.k0l.q2d;
	let w6h = this.k0l.u4a;
	let rect = new h6j();
	rect.y9z = this.v0x - x4a - q2d + 1;
	rect.i1g = this.w4w - x4a - q2d;
	rect.w7k = this.w4w;
	rect.o2p = this.v0x - 1;
	return rect;
}

}

const s9e = 14;

const k5b =
{
	l1n : 0
};

const l5a =
{
	l1n : 0
};

const t9z =
{
	h4o : 0,
	o7x : 1,
};

const n4y =
{
	p1v: 0,
	g4l: 1,
	g3f: 2,
	b3g: 3,
	s9o: 4,
};

class k2g
{

constructor()
{
	this.s3c = k5b.l1n;
	this.v6h = 1; 
	this.x4a = 0;
	this.q2d = s9e;
	this.p8r = 2;
	this.u4a = 32;
	this.h6f = 20;
	this.q6q = true;
	this.y4k = t9z.o7x;
	this.e3a = true;
}

v0z()
{
	let f7g = new k2g();
	f7g.s3c = this.s3c;
	f7g.v6h = this.v6h;
	f7g.x4a = this.x4a;
	f7g.q2d = this.q2d;
	f7g.p8r = this.p8r;
	f7g.u4a = this.u4a;
	f7g.h6f = this.h6f;
	f7g.q6q = this.q6q;
	f7g.y4k = this.y4k;
	f7g.e3a = this.e3a;
	return f7g;
}

j8m()
{
	return this.u4a * w0l + 2 * (this.x4a + this.q2d + this.p8r);
}

q2j(rect)
{
	let w = rect.s6g();
	let h = rect.f5i();
	let b1o = 0;
	if (w < h)
	{
		b1o = w;
	}
	else
	{
		b1o = h;
	}
	if (this.q2d)
	{
		for (this.u4a = 2; this.u4a < 1000; this.u4a++)
		{
			this.q2d = (this.u4a / 100) * this.h6f;
			if (this.q2d < s9e)
			{
				this.q2d = s9e;
			}
			let size = 2 * (this.x4a + this.q2d + this.p8r) + w0l * this.u4a;
			if (size > b1o)
			{
				break;
			}
		}
		this.u4a--;
		this.q2d = (this.u4a / 100) * this.h6f;
		if (this.q2d < s9e)
		{
			this.q2d = s9e;
		}
	}
	else
	{
		for (this.u4a = 2; this.u4a < 1000; this.u4a++)
		{
			let size = 2 * (this.x4a + this.p8r) + w0l * this.u4a;
			if (size > b1o)
			{
				break;
			}
		}
		this.u4a--;
	}
	return this.j8m();
}

}


class w4j
{

constructor()
{
	this.h5x = new r7e();
	this.z9p = new r7e();
	this.r1m = new b2p();
	this.n6e = new g8o();
	this.o6j = new w9g();
 	this.s8l = new w9g();
	this.j1a = 0;
	this.e6n = false;
	this.j8e = false;
	this.z2p = 0;
	this.k6x = 0;
	this.a6n = '';
}

}

const d1d =
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

function u0m(rect, b4a)
{
	rect.y9z += b4a;
	rect.o2p -= b4a;
	if (rect.y9z > rect.o2p)
	{
		rect.y9z = rect.o2p;
	}
	rect.i1g += b4a;
	rect.w7k -= b4a;
	if (rect.i1g > rect.w7k)
	{
		rect.i1g = rect.w7k;
	}
}

function c8l(y7m, v7v, f0c, m1i)
{
	y7m.drawImage(f0c, m1i.y9z, m1i.i1g, m1i.s6g(), m1i.f5i(),
		v7v.y9z, v7v.i1g, v7v.s6g(), v7v.f5i());
}

function h3o(w7v, x, y, width, height, p9j)
{
	w7v.beginPath();
	w7v.moveTo(x, y + p9j);
	w7v.lineTo(x, y + height - p9j);
	w7v.arcTo(x, y + height, x + p9j, y + height, p9j);
	w7v.lineTo(x + width - p9j, y + height);
	w7v.arcTo(x + width, y + height, x + width, y + height-p9j, p9j);
	w7v.lineTo(x + width, y + p9j);
	w7v.arcTo(x + width, y, x + width - p9j, y, p9j);
	w7v.lineTo(x + p9j, y);
	w7v.arcTo(x, y, x, y + p9j, p9j);
	w7v.stroke();
}

function n2z(q3q, u2m, b1w)
{
	let p = new v0d();
	p.X = (Math.cos(b1w) * (q3q.X - u2m.X)) - (Math.sin(b1w) * (q3q.Y - u2m.Y)) + u2m.X;
	p.Y = (Math.sin(b1w) * (q3q.X - u2m.X)) + (Math.cos(b1w) * (q3q.Y - u2m.Y)) + u2m.Y;
	return p;
}

function f9q(w7v, rect, c6x)
{
	let left = rect.y9z;
	let top = rect.i1g;
	let f3g = rect.o2p;
	let j6w = rect.w7k;

	w7v.fillStyle = s5f;
	w7v.fillRect(rect.y9z, rect.i1g, rect.s6g(), rect.f5i());

	if (c6x.h4o())
	{
		return;
	}

	let b5h = c6x.v3s();
	let m6c = 0;
	if (b5h > 8)
	{
		m6c = (f3g - left) / 8;
	}
	else
	{
		m6c = (f3g - left) / b5h;
	}
	let i9d = left - m6c;
	let q9r = top;
	let c4e = i9d + m6c;
	let u8a = 0;
	if (b5h > 8)
	{
		u8a = (j6w - top + 1) / 2;
	}
	else
	{
		u8a = j6w - top + 1;
	}

	let q2b = top + u8a - 1;
	let p2h = 0;
	for (let i = 0; i < 16; i++)
	{
		if (c6x.k4o(i))
		{
			i9d += m6c;
			c4e += m6c;
			if (p2h == 7 || p2h == 15 ||
				(p2h < 8 && p2h == b5h - 1))
			{
				c4e = f3g;
			}
			if (p2h == 8)
			{
				i9d = left;
				c4e = i9d + m6c;
				q9r = top + u8a;
				q2b = j6w;
			}
			let z1i = new h6j(i9d, q9r, c4e, q2b);
			w7v.fillStyle = d1d[i];
			w7v.fillRect(z1i.y9z, z1i.i1g, z1i.s6g(), z1i.f5i());
			p2h++;
		}
	}
}




class o9l
{

constructor()
{
	this.m2v = '';
	this.s1o = null;
}

}

class c1m
{

constructor()
{
	this.l7i = [];
}

add(img)
{
	let s3j = new o9l();
	s3j.m2v = img.id;
	s3j.s1o = img;
	this.l7i.push(s3j);
}

s1o(m2v)
{
	for (const g2n of this.l7i)
	{
		if (g2n.m2v.toLowerCase() == m2v.toLowerCase())
		{
			return g2n.s1o;
		}
	}
	return null;
}

}
const a6u 				= "#00FFFF";
const m9z 			= "#000000";
const s1h 				= "#0000FF";
const u2x 			= "#FFFBF0";
const g9f 			= "#808080";
const d1p 		= "#FF00FF";
const q6g 				= "#808080";
const p5g 			= "#008000";
const z5w 				= "#00FF00";
const y9t 			= "#C0C0C0";
const z0k 			= "#800000";
const o6u 		= "#A0A0A4";
const e5x 	= "#C0DCC0";
const s3b 				= "#000080";
const a2i 			= "#808000";
const t5e 			= "#800080";
const s5f 				= "#FF0000";
const u4z 			= "#C0C0C0";
const x8x 		= "#A6CAF0";
const c2u 				= "#008000";
const a0z 			= "#FFFFFF";
const p3i 			= "#FFFF00";

class v0d
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

v0z()
{
	let s6d = new v0d();
	s6d.y9z = this.X;
	s6d.i1g = this.Y;
	return s6d;
}

}

class h6j
{

constructor(left, top, f3g, j6w)
{
	if (left === undefined)
	{
		this.y9z = 0;
		this.i1g = 0;
		this.o2p = 0;
		this.w7k = 0;
	}
	else
	{
		this.y9z = left;
		this.i1g = top;
		this.o2p = f3g;
		this.w7k = j6w;
	}
}

v0z()
{
	let n5i = new h6j();
	n5i.y9z = this.y9z;
	n5i.i1g = this.i1g;
	n5i.o2p = this.o2p;
	n5i.w7k = this.w7k;
	return n5i;
}

s6g()
{
	return this.o2p - this.y9z + 1;
}

z6x()
{
	return this.o2p - this.y9z + 1;
}

q1w(width)
{
	this.o2p = this.y9z + width - 1;
}

f5i()
{
	return this.w7k - this.i1g + 1;
}

z3e()
{
	return this.w7k - this.i1g + 1;
}

c5h(height)
{
	this.w7k = this.i1g + height - 1;
}

s7r()
{
	this.y9z++;
	this.i1g++;
	this.o2p--;
	this.w7k--;
}

m5v(d7g)
{
	return d7g.X >= this.y9z &&
		d7g.X <= this.o2p &&
		d7g.Y >= this.i1g &&
		d7g.Y <= this.w7k;
}


}

class g4w
{

constructor(v5b)
{
	this.v5b = v5b;
	this.f7r = new r7e();
	this.m0v = new h4h();
	this.i5k = null;
	this.k0l = new k2g();
	this.d0r = true;
}

n3n()
{
	let d9y = window.devicePixelRatio;

	this.m0v.l5i.width = this.i5k.clientWidth * d9y;
	this.m0v.l5i.height = this.i5k.clientHeight * d9y;

	let t2r = 32 * d9y;
	let f8k = 32 * d9y;
	let i4k = this.m0v.l5i.width - t2r;
	let r9s = this.m0v.l5i.height - f8k;
	let b7m = r9s < i4k ? r9s : i4k;
	if (b7m < 128)
	{
		b7m = 128;
	}
	let rect = new h6j();
	rect.y9z = 0;
	rect.i1g = 0;
	rect.q1w(b7m);
	rect.c5h(b7m);
	this.k0l.q2d = b7m * 0.02;
  if (this.k0l.q2d < s9e)
  {
    this.k0l.q2d = s9e;
  }
	b7m = this.k0l.q2j(rect);
 	this.m0v.l0r(this.k0l);
	this.m0v.y9y();
}

r3j()
{
	this.m0v.r3j();
	this.m0v.y9y();
}

c8q()
{
	this.k0l.q6q = !this.k0l.q6q;
	this.m0v.l0r(this.k0l);
	this.m0v.y9y();
}

s8n()
{
	this.m0v.l0r(this.k0l);
	this.m0v.y9y();
}

x8u(w4a)
{
	this.f7r = w4a.z9p.v0z();
	this.m0v.d9r(this.f7r);
	this.m0v.j6x(w4a.r1m);
	this.m0v.x5l(w4a.n6e);
  
 	this.m0v.n5q(w4a.s8l);
	this.m0v.y9y();

	if (this.d0r)
	{
		q5q('playBackward' + this.v5b, w4a.e6n);
		q5q('goToBegin'+ this.v5b, w4a.e6n);
		q5q('playForward' + this.v5b, w4a.j8e);
		q5q('goToEnd' + this.v5b, w4a.j8e);
		q5q('autoPlay' + this.v5b, w4a.j8e);
	}
	else
	{
		q5q('goToBegin' + this.v5b, w4a.e6n);
		q5q('goToEnd' + this.v5b, w4a.j8e);
	}
}

d9r(g0t)
{
	let w4a = new w4j();
	w4a.z9p = g0t.v0z();
	this.d9r(w4a);
}

l0r(k0l)
{
  this.k0l = k0l.v0z();
}

}

const c5e =
{
	h4d       : 0,
	d1e        : 1,
};

class p4t
{

constructor(v5b)
{
	this.v5b = v5b;
 	this.s1v = new w4t();
 	this.g1k = new e7u(v5b);
  this.g1k.j1g = false;
  this.g1k.c9d = true;
  this.g1k.b3i = true;
  this.g1k.h3p = false;
  this.f7n = null;
  this.p9d = new o8i();
  this.x9d = new d9z();
 	this.e7a = new g6u();
	this.z2o = new r7e();
	this.v5l = new r7e();
	this.n2c = 0;
	this.b9q = [];
	this.h8a = false;
 	this.w8h = false;
 	this.p7q = false;
 	this.k2y = false;
  this.b7o = c5e.h4d;
  this.c4v = document.getElementById("threat"+this.v5b);
 	this.c4v.onclick = this.z2r.bind(this);
  this.x1x();
  this.d1n = document.getElementById("engineSettings"+this.v5b);
}

w3n(v7w)
{
  this.f7n = new Engine();
  this.f7n.p2b = (event) => {
    this.c9e(event);
  };
  this.f7n.z3c(v7w);
  this.f7n.l6x();
}

k9k()
{
	this.p9d = this.f7n.v7w();
	this.e7a = new g6u();
  /*
	showName();
	MovePanel->Caption = "";
	ScorePanel->Caption = "";
	DepthPanel->Caption = "";
	NodesPanel->Caption = "";
  */
	this.s1v.d9r(this.e7a.g0t,
    this.e7a.u0w);
	this.n9o();
 	this.b0n();
  this.x1x();
}

d9r(h5x, j5j, x5y, m3l)
{
	this.v5l = h5x.v0z();
	this.n2c = j5j;
	this.b9q = x5y.slice(); 
	this.h8a = m3l;
	this.b0n();
}

b0n()
{
	if (!this.f7n) return;
	if (this.w8h) return;

	if (this.p7q)
	{
		let x5y = new w4t();
		x5y.d9r(this.v5l, this.n2c);
		let i7v = x5y.i7v();
		x5y.u6l(i7v, this.b9q);
		let w6o = x5y.w4g();
		let t4w = x5y.j1a(x5y.x3i());
		if (w6o.x4b())
		{
			t4w++;
		}
		let s4y = w6o;
		s4y.h6i();
		this.x9d = new d9z();
    this.x9d.x5y.d9r(s4y, t4w);
		this.z2o = s4y;
  }
  else
  {
 		this.x9d.x5y.d9r(this.v5l, this.n2c);
		let i7v = this.x9d.x5y.i7v();
		this.x9d.x5y.u6l(i7v, this.b9q);
		this.z2o = this.x9d.x5y.w4g();
  }
  if (o6m === 10) 
  {
    this.x9d.y8q = n7n;
  }
  else
  {
    this.x9d.y8q = e7j(o6m);
  }

  this.f7n.q0u();
	this.k2y = false;
  let x5y = m1f(this.z2o);
  if (x5y.length == 0)
  {
  	this.f7n.o6v(this.x9d);
		return;
  }
  else
  {
  	this.f7n.o6v(this.x9d);
		return;
  }
}

j4d()
{
	this.e7a = this.f7n.n0r();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.s1v.d9r(this.e7a.g0t,
    this.e7a.u0w);
	this.n9o();
}

u6d()
{
	this.e7a = this.f7n.n0r();
	
}


v0a()
{
	this.e7a = this.f7n.n0r();
  
	
	
	
  
	this.n9o();
}

n9o()
{
	let i1e = this.e7a.j6y.x5y.v0z();
  i1e.d9r(this.e7a.g0t, this.e7a.u0w);

  if (this.e7a.k7q)
  {
    for (let h5z of this.e7a.lines)
    {
      let x5y = h5z.x5y.t4n();
      let l3h = i1e.i7v();
      let u0w = 0;
      for (let u7k of x5y)
      {
        if (u0w == 0)
        {
					let f1q = h5z.g0a() +
						"/" + h5z.n3v;
					u7k.p0y(f1q);
        }
        i1e.h8t(l3h, u7k);
        u0w++;
      }
    }
  }
  else
  {
    if (this.e7a.lines.length !== 0)
    {
      let h5z = this.e7a.lines[this.e7a.lines.length - 1];
      let x5y = h5z.x5y.t4n();
      let l3h = i1e.i7v();
      let u0w = 0;
      for (let u7k of x5y)
      {
				if (u0w == 0)
				{
					let f1q = h5z.g0a() +
						"/" + h5z.n3v;
					u7k.p0y(f1q);
				}
        i1e.h8t(l3h, u7k);
        u0w++;
      }
    }
  }
  this.s1v = i1e.v0z();
  this.g1k.k7q = this.e7a.k7q;
  this.g1k.v2x(this.s1v, 0);
}

c9e(event)
{
  const {cmd, data} = event;
  if (cmd === 'ready')
  {
    this.k9k()
  }
  else if (cmd === 'go')
  {
    this.j4d()
  }
  else if (cmd === 'cm')
  {
    this.u6d();
  }
  else if (cmd === 'pv')
  {
    this.v0a();
  }
}

l8w()
{
	if (this.f7n)
	{
    this.f7n.p2b = null;
    this.f7n.w2b();
		this.f7n = null;
		this.e7a = new g6u();
  	this.s1v.d9r(this.e7a.g0t,
      this.e7a.u0w);
  	this.n9o();
    this.p7q = false;
    this.x1x();
  }
}

q1q()
{
	return (this.f7n != null);
}

d0p()
{
  return (this.engineMode === c5e.d1e);
}

z2r()
{
	if (this.f7n && !this.d0p())
	{
		this.p7q = !this.p7q;
		this.x1x();
		this.b0n();
	}
}

x1x()
{
	if (this.f7n)
	{
    this.c4v.disabled = false;
    this.c4v.classList.remove('threat-inactive');
		if (this.p7q)
		{
      this.c4v.classList.remove('threat-off');
      this.c4v.classList.add('threat-on');
		}
		else
		{
      this.c4v.classList.remove('threat-on');
      this.c4v.classList.add('threat-off');
		}
	}
	else
	{
    this.c4v.disabled = true;
    this.c4v.classList.add('threat-inactive');
    this.c4v.classList.remove('threat-on');
    this.c4v.classList.add('threat-off');
	}
}

}

class h5c
{

constructor(v5b)
{
	this.v5b = v5b;
  this.g6t = null;
	this.f1w = new v1k();
}

m5f(f1w)
{
	this.f1w = f1w.v0z();
	this.b5u();
}

b5u()
{
	let m0s = this.f1w.n6x.d7r.h6e();
	let s1l = this.f1w.q5o.d7r.h6e();

	let c4i = '';
	if (m0s.length && this.f1w.n6x.c6f)
	{
		c4i = this.f1w.n6x.c6f.toString();
	}
	let i6s = '';
	if (m0s.length && this.f1w.n6x.a1x.length)
	{
		i6s = this.f1w.n6x.a1x.toString();
	}

	let y0l = '';
	if (s1l.length && this.f1w.q5o.c6f)
	{
		y0l = this.f1w.q5o.c6f.toString();
	}
	let n6b = '';
	if (s1l.length && this.f1w.q5o.a1x.length)
	{
		n6b = this.f1w.q5o.a1x.toString();
	}

	let m4d = this.f1w.n6x.d7r.j3c(1);
	let h6h = this.f1w.q5o.d7r.j3c(1);

	let d5l = '';
	let f6j = '';
	if (!this.f1w.n6x.z0a.f3l() &&
		!this.f1w.q5o.z0a.f3l())
	{
		d5l = this.f1w.n6x.z0a.v5f();
		f6j = this.f1w.q5o.z0a.v5f();
	}

	let b5m = c5q(this.f1w.z2f);
	let e0b = this.f1w.e0b.a1x;
	if (!this.f1w.e0b.i4b.f3l())
	{
		e0b += " ";
		e0b += this.f1w.e0b.i4b.s2q.toString();
	}
	let b4d = '';
	if (!this.f1w.l9v.f3l())
	{
		b4d = this.f1w.l9v.toString("dd-mm-yyyy");
	}
	let r7v = '';
	if (!this.f1w.r7v.f3l())
	{
		r7v = '</br>' + '[' + this.f1w.r7v.m2v + ']';
	}

	let p0k = document.getElementById("nota-container"+this.v5b);
	let c3t = p0k.clientHeight;
	let g6e = 200;

  let index = this.v5b;
  let v5k = this.f1w.e0b.v5k;

	let v2t = true;
	if (this.g6t.clientWidth >= 374 && c3t >= g6e)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + m0s + "</span>";
    s += 					"<span class=\"rating\">" + c4i + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + d5l + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + b5m + "</span>";
		s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + s1l + "</span>";
		s +=          "<span class=\"rating\">" + y0l + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + f6j + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "<span>" + i6s + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + e0b + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + v5k + "</span>";
		s +=          "<span class=\"gameDate\">" + b4d + "</span>";
    s +=          "<span class=\"annotator\">" + r7v + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + n6b + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
		s +=      "</tr>";
		s +=    "</table>";
		this.g6t.innerHTML = s;

		
		
		let k6k = Math.trunc(this.g6t.clientWidth / 10);
		if (k6k < 24) k6k = 24;
    
		
		
		
		
		
		
	}
	else if (this.g6t.clientWidth >= 300 && c3t >= g6e)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + m4d + "</span>";
    s +=          "<span class=\"rating\">" + c4i + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + d5l + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + b5m + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + h6h + "</span>";
    s +=          "<span class=\"rating\">" + y0l + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + f6j + "</span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + i6s + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + e0b + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + v5k + "</span>";
    s +=          "<span class=\"gameDate\">" + b4d + "</span>";
		s +=          "<span class=\"annotator\">" + r7v + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + n6b + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.g6t.innerHTML = s;
	}
	else if (this.g6t.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + m4d + "</span>";
    s +=          "<span class=\"rating\">" + c4i + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + b5m + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + h6h + "</span>";
    s +=          "<span class=\"rating\">" + y0l + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.g6t.innerHTML = s;
	}
	else
	{
		
		v2t = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + m4d + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + b5m + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + h6h + "</span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.g6t.innerHTML = s;
	}

	if (v2t)
	{
		let x4s = 16;
		if (this.g6t.clientWidth < 400)
		{
			x4s = 16;
		}
		else if (this.g6t.clientWidth < 500)
		{
			x4s = 24;
		}
		else
		{
			x4s = 32;
		}
    if (this.f1w.n6x.j8y != u4d.h4o)
    {
  		let a4t = document.getElementById("whitePlayerNation"+this.v5b);
	  	a4t.src = "images/flags/" + x4s.toString() +"/" + j0r(this.f1w.n6x.j8y) + ".png";
		  a4t.height = x4s;
  		a4t.width = x4s;
    }
    if (this.f1w.q5o.j8y != u4d.h4o)
    {
  		let y9c = document.getElementById("blackPlayerNation"+this.v5b);
	  	y9c.src = "images/flags/" + x4s.toString() + "/" + j0r(this.f1w.q5o.j8y) + ".png";
		  y9c.height = x4s;
  		y9c.width = x4s;
    }
	}
}

}

class v5x
{

constructor(v5b)
{
	this.v5b = v5b;
	this.f1w = new v1k();
	this.i6c = new g4w(v5b);
	this.y9q = new i9f(v5b);
	this.y9q.g1k.p3b = this; 
	this.f7p = new u3q();
  this.l9m = new p4t(v5b);
}

r3j()
{
	this.i6c.r3j();
}

c8q()
{
	this.i6c.c8q();
}

s8n()
{
	this.i6c.s8n();
	this.y9q.g1k.s8n();
}

a0l(n0v, u4c, x8p, u9r)
{
	this.x8b(u9r, x8p);
}

x8b(u9r, x8p)
{
	this.f1w = u9r.c7d.v0z();
	this.m5f();
	this.y9q.g1k.v2x(u9r.x5y, x8p);
}

m5f()
{
	this.y9q.z5f.m5f(this.f1w);
}

x3v(w4a)
{
	this.i6c.x8u(w4a);
  this.b4t();
}

o7b()
{
	if (this.f7p.a4b())
	{
		this.f7p.j2l();
    this.q0b();
	}
	else
	{
		if (!this.y9q.g1k.z5h())
		{
      
			this.f7p.p3b = this; 
			this.f7p.m3k();
			this.y9q.g1k.i4h();
		}
	}
}

p9s(v7w)
{
	this.l9m.w3n(v7w);
}

x4k()
{
	this.l9m.l8w();
}

y5r()
{
	return this.l9m.q1q();
}

b4t()
{
  if (!this.f7p.a4b())
  {
    this.q0b();
  }
}

q0b()
{
	this.l9m.d9r(
		this.y9q.g1k.h5x(),
		this.y9q.g1k.j5j(),
		this.y9q.g1k.s0g(),
		this.y9q.g1k.m3l());
}

}

const k0p =
{
	j1s : 0,
	c3v : 1,
	l2w : 2,
	a2y : 3,
	w0o : 4,
 	k2p : 5,
	z2f : 6,
	x5y : 7,
	s2q : 8,
	event : 9,
	i4e : 10
};

const u6g =
{
	h4o : 0,
	c3d : 1,
	c3g : 2
};

let k4f = 0;
let h5y = 0;
let j2d = 0;
let w9r = 0;
let t2v = 0;
let b8a = 0;
let h2f = 0;
let t7g = 0;

let c3g = false;

function f3e(f, s)
{
	let r4i = f.c7d.n6x.d7r.m2v();
	let f4o = s.c7d.n6x.d7r.m2v();
	if (r4i < f4o)
	{
		return c3g ? -1 : 1;
	}
	if (r4i > f4o)
	{
		return c3g ? 1 : -1;
	}
	r4i = f.c7d.q5o.d7r.m2v();
	f4o = s.c7d.q5o.d7r.m2v();
	if (r4i < f4o)
	{
		return -1;
	}
	if (r4i > f4o)
	{
		return 1;
	}
	return 0;
}

function s1s(f, s)
{
	let r4i = f.c7d.q5o.d7r.m2v();
	let f4o = s.c7d.q5o.d7r.m2v();
	if (r4i < f4o)
	{
		return c3g ? -1 : 1;
	}
	if (r4i > f4o)
	{
		return c3g ? 1 : -1;
	}
	r4i = f.c7d.n6x.d7r.m2v();
	f4o = s.c7d.n6x.d7r.m2v();
	if (r4i < f4o)
	{
		return -1;
	}
	if (r4i > f4o)
	{
		return 1;
	}
	return 0;
}

function m1r(f, s)
{
	let t8k = f.c7d.n6x.c6f - s.c7d.n6x.c6f;
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	t8k = f.c7d.q5o.c6f - s.c7d.q5o.c6f;
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	return f3e(f, s);
}

function r4k(f, s)
{
	let t8k = f.c7d.q5o.c6f - s.c7d.q5o.c6f;
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	t8k = f.c7d.n6x.c6f - s.c7d.n6x.c6f;
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	return f3e(f, s);
}

function j4z(f, s)
{
	let t8k = f.c7d.n6x.j8y - s.c7d.n6x.j8y;
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	t8k = f.c7d.q5o.j8y - s.c7d.q5o.j8y;
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	return f3e(f, s);
}

function s4i(f, s)
{
	let t8k = f.c7d.q5o.j8y - s.c7d.q5o.j8y;
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	t8k = f.c7d.n6x.j8y - s.c7d.n6x.j8y;
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	return f3e(f, s);
}

function l5l(f, s)
{
	let t8k = f.c7d.z2f - s.c7d.z2f;
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	return f3e(f, s);
}

function t8p(f, s)
{
	let t8k = s.c7d.l9v.l9v() - f.c7d.l9v.l9v();
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	return f3e(f, s);
}

function t0o(f, s)
{
	let k1c = f.c7d.e0b.a1x;
	let j6k = s.c7d.e0b.a1x;
	if (k1c < j6k)
	{
		return c3g ? -1 : 1;
	}
	if (k1c > j6k)
	{
		return c3g ? 1 : -1;
	}
	let t8k = f.c7d.e0b.i4b.l9v() - s.c7d.e0b.i4b.l9v();
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	t8k = f.c7d.i4e - s.c7d.i4e;
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	t8k = f.c7d.f7a - s.c7d.f7a;
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	return f3e(f, s);
}

function z9i(f, s)
{
	let t8k = s.c7d.i4e - f.c7d.i4e;
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	t8k = s.c7d.f7a - f.c7d.f7a;
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	return f3e(f, s);
}

function g4b(f, s)
{
	let t8k = s.a3i - f.a3i;
	if (c3g)
	{
		t8k = -t8k;
	}
	if (t8k < 0) return -1;
	if (t8k > 0) return 1;
	return f3e(f, s);
}

class o8b
{

constructor(v5b)
{
	this.v5b = v5b;
	this.u4r = [];
	this.j4s = null;
	this.n1b = null;
	this.g2h = null;
	this.v1b = [];
	this.y3s = [];
	this.g9q = -1;
	this.k7m = u6g.h4o;
	this.g5d = 0;
  this.v5r = null;
}

b9r()
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
	this.g2h.innerHTML = s;
	this.v1b = this.g2h.getElementsByTagName("TH");
	let v5b = this.v5b;

 	this.v1b[k0p.j1s].onclick = this.p6m.bind(this);
	this.v1b[k0p.c3v].onclick = this.x3c.bind(this);
  this.v1b[k0p.l2w].onclick = this.z7m.bind(this);
	this.v1b[k0p.a2y].onclick = this.p6m.bind(this);
	this.v1b[k0p.w0o].onclick = this.e4i.bind(this);
  this.v1b[k0p.k2p].onclick = this.e1h.bind(this);
	this.v1b[k0p.z2f].onclick = this.t1n.bind(this);
	this.v1b[k0p.x5y].onclick = this.t5z.bind(this);
	this.v1b[k0p.s2q].onclick = this.n8f.bind(this);
	this.v1b[k0p.event].onclick = this.x4z.bind(this);
	this.v1b[k0p.i4e].onclick = this.p4m.bind(this);
}

p3r(u4r)
{
	this.u4r = u4r;
	this.n3n();
}

q2e()
{
	this.a7e("grid-player");
	this.a7e("grid-rating");
 	this.a7e("grid-flag");
	this.a7e("grid-result");
	this.a7e("grid-moves");
	this.a7e("grid-year");
	this.a7e("grid-event");
	this.a7e("grid-round");
}

p9t()
{
	this.g0b("grid-player", k4f);
	this.g0b("grid-rating", h5y);
 	this.g0b("grid-flag", t7g);
	this.g0b("grid-result", j2d);
	this.g0b("grid-moves", w9r);
	this.g0b("grid-year", t2v);
	this.g0b("grid-event", b8a);
	this.g0b("grid-round", h2f);

}

a7e(r8p)
{
	let y3y = this.j4s.getElementsByClassName(r8p);
	for (let i = 0; i < y3y.length; i++) {
		y3y[i].style.display = "none";
	}
}

i0m(r8p)
{
	let y3y = this.j4s.getElementsByClassName(r8p);
	for (let i = 0; i < y3y.length; i++) {
		y3y[i].style.display = "table-cell";
	}
}

g0b(r8p, width)
{
	let y3y = this.j4s.getElementsByClassName(r8p);
	for (let i = 0; i < y3y.length; i++) {
		y3y[i].style.width = (width) + "px";
	}
}

n3n()
{
	this.g5d = this.j4s.clientWidth;
	this.g5d -= 17;
	if (this.g5d < 100)
	{
		this.g5d = 100;
	}
	k4f = 200;
	h5y = 52;
	j2d = 34;
	w9r = 50;
	t2v = 52;
	b8a = 200;
	h2f = 50;
  t7g = 30;

 
	let m5d = document.getElementsByClassName("tdreplay")[0];
	if (m5d.clientWidth <= w2o)
	{
		let y0z = 0.7;
		k4f *= y0z;
		h5y *= y0z;
		j2d *= y0z;
		w9r *= y0z;
		t2v *= y0z;
		b8a *= y0z;
		h2f *= y0z;
	}
	this.c7y();
}

w5m()
{
	this.q2e();
	this.p9t();

  let i5h = 2.8;
  let t5q = 2.8;
  let n7u = 17;
	if (this.g5d <= 400)
	{
		this.i0m("grid-player");
		this.i0m("grid-result");
    this.i0m("grid-year");
		this.i0m("grid-event");
    let m8i = 5 * (i5h + t5q);
		let o4d = j2d + t2v;
		let r5u = Math.trunc((this.g5d - o4d - m8i - n7u) / 3);
		this.g0b("grid-player", r5u);
		this.g0b("grid-event", r5u);
	}
	else if (this.g5d <= 580)
	{
		this.i0m("grid-player");
		this.i0m("grid-rating");
		this.i0m("grid-result");
		this.i0m("grid-year");
		this.i0m("grid-event");
    let m8i = 7 * (i5h + t5q);
		let o4d = 2 * h5y + j2d + t2v;
		let r5u = Math.trunc((this.g5d - o4d - m8i - n7u) / 3);
		this.g0b("grid-player", r5u);
		this.g0b("grid-event", r5u);
	}
	else
	{
		this.i0m("grid-player");
		this.i0m("grid-rating");
    this.i0m("grid-flag");
		this.i0m("grid-result");
		this.i0m("grid-moves");
		this.i0m("grid-year");
		this.i0m("grid-event");
		this.i0m("grid-round");
    let m8i = 11 * (i5h + t5q);
		let o4d = 2 * h5y + 2 * t7g + j2d + w9r + t2v + h2f;
		let r5u = Math.trunc((this.g5d - o4d - m8i - n7u) / 3);
		this.g0b("grid-player", r5u);
		this.g0b("grid-event", r5u);
	}
}

c7y()
{
	let x4s = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.v5b + "\">"; 
	for (const u9r of this.u4r)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += u9r.c7d.n6x.d7r.a1w();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (u9r.c7d.n6x.c6f)
		{
			s += u9r.c7d.n6x.c6f;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (u9r.c7d.n6x.j8y != u4d.h4o)
		{
      let m1m = "images/flags/" + x4s.toString() + "/" + j0r(u9r.c7d.n6x.j8y) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += m1m;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += u9r.c7d.q5o.d7r.a1w();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (u9r.c7d.q5o.c6f)
		{
			s += u9r.c7d.q5o.c6f;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (u9r.c7d.q5o.j8y != u4d.h4o)
		{
      let m1m = "images/flags/" + x4s.toString() + "/" + j0r(u9r.c7d.q5o.j8y) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += m1m;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-result\">";
		s += c5q(u9r.c7d.z2f);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += u9r.a3i;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += u9r.c7d.l9v.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += u9r.c7d.e0b.a1x;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += u9r.c7d.r6f();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.n1b.innerHTML = s;

  let u7p = document.getElementById('gameList' + this.v5b);
  u7p.addEventListener('click', this.c6s.bind(this));

	this.w5m();
}

e3j(v3r)
{
	if (v3r != this.g9q)
	{
		this.g9q = v3r;
		this.k7m = u6g.c3d;
	}
	else
	{
		if (this.k7m == u6g.h4o)
		{
			this.k7m = u6g.c3d;
		}
		else if (this.k7m == u6g.c3d)
		{
			this.k7m = u6g.c3g;
		}
		else if (this.k7m == u6g.c3g)
		{
			this.k7m = u6g.c3d;
		}
	}
	c3g = (this.k7m == u6g.c3g);

	for (const h3k of this.v1b)
	{
		let s = h3k.c0t;
		let i6o = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let t5t = i6o.replace(" grid-header-sort grid-header-sort-asc", "");
		h3k.c0t = t5t;
	}
	let a6o = this.v1b[this.g9q];
	if (this.k7m == u6g.c3g)
	{
		a6o.c0t = a6o.c0t + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		a6o.c0t = a6o.c0t + " grid-header-sort grid-header-sort-asc";
	}
}

p6m(event)
{
	this.e3j(k0p.j1s);
	this.u4r.sort(f3e);
	this.c7y();
}

x3c(event)
{
	this.e3j(k0p.c3v);
	this.u4r.sort(m1r);
	this.c7y();
}

z7m(event)
{
	this.e3j(k0p.l2w);
	this.u4r.sort(j4z);
	this.c7y();
}

f1b(event)
{
	this.e3j(k0p.a2y);
	this.u4r.sort(s1s);
	this.c7y();
}

e4i(event)
{
	this.e3j(k0p.w0o);
	this.u4r.sort(r4k);
	this.c7y();
}

e1h(event)
{
	this.e3j(k0p.k2p);
	this.u4r.sort(s4i);
	this.c7y();
}

t1n(event)
{
	this.e3j(k0p.z2f);
	this.u4r.sort(l5l);
	this.c7y();
}

n8f(event)
{
	this.e3j(k0p.s2q);
	this.u4r.sort(t8p);
	this.c7y();
}

x4z(event)
{
	this.e3j(k0p.event);
	this.u4r.sort(t0o);
	this.c7y();
}

p4m(event)
{
	this.e3j(k0p.i4e);
	this.u4r.sort(z9i);
	this.c7y();
}

t5z(event)
{
	this.e3j(k0p.x5y);
	this.u4r.sort(g4b);
	this.c7y();
}

c6s(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.v5r)
  {
    this.v5r(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class w6u
{

constructor()
{
	this.g0t = new r7e();
	this.t5w = new r7e();
	this.y5a = false;
	this.a5w = 0;
	this.j6i = 0;
	this.y4a = [];
}

}

var tooltip = null;

class e7u
{

constructor(v5b)
{
	this.v5b = v5b;
	this.m0z = new w4t();
	this.p3b = null;
	this.k6y = new w6u();
	this.m9m = null;
	this.e5w = [];
	this.b6p = [];
  this.r3s = [];
  this.r9k = [];
	this.t6v = -1;
	this.k0l = new k2g();
  this.j5k = null;
	this.r1r = true;
	this.o5m = false;
	this.z8f = [];
	this.f2h = 0;
  this.j1g = true;
  this.c9d = false;
	this.b3i = false;
	this.h3p = true;
  this.k7q = false;
}

v2x(t8l, x8p)
{
	this.m0z = t8l.v0z();
  this.m0z.w6f();
	this.j5k = this.m0z.h7r(x8p);
	this.a0l();
}

i0l(g6x)
{
  this.i2b(this.r3s[g6x]);
}

a0l()
{
	this.k3q();
	this.i4h();
  this.a6h(this.m0z.t0h(this.j5k));
}

k3q()
{
	let b9a = new h7u();
  b9a.h0j(this.j1g);
	b9a.z8h(this.k7q);
  /*
	b9a.setOneLine(this.k7q);
  */
	b9a.y9x(this.b3i);
	b9a.b7b(this.h3p);
	b9a.a9m(this.m0z);

  this.m9m.innerHTML = b9a.p6t.h5k;
  this.e5w = this.m9m.getElementsByClassName("tdmove");
  this.b6p = this.m9m.getElementsByClassName("tdcomment");

	this.i3b("tdmove");
	this.i3b("tdcomment");
	this.i3b("tddia");
	this.i3b("tdmedal");
  this.i3b("tdcolors");

  this.g5b("tdmove");

	this.k6q();
	this.f9q();
}

i3b(y2r)
{
	let v5b = this.v5b;
	let j8r = this.m9m.getElementsByClassName(y2r);
	for (const o6e of j8r)
	{
    let x8p = o6e.getAttribute('movenr');
    o6e.onclick = this.f3y.bind(this, x8p);
	}
}

g5b(y2r)
{
	let v5b = this.v5b;
	let j8r = this.m9m.getElementsByClassName(y2r);
	for (const o6e of j8r)
	{
    let x8p = o6e.getAttribute('movenr');
    o6e.onmouseover = this.a1v.bind(this, x8p);
    o6e.onmouseleave = this.n4j.bind(this, x8p);
	}
}

s8n()
{
	this.k6q();
}

k6q()
{
	let l8l = this.m9m.getElementsByClassName("tddia");
	for (const h8c of l8l)
	{
		let m0v = new h4h();
		m0v.l5i = h8c.getElementsByTagName("canvas")[0];
		let b7m = this.k0l.j8m();
		m0v.l5i.width = b7m;
		m0v.l5i.height = b7m;
		m0v.l0r(this.k0l);
		let l3h = this.m0z.h7r(h8c.getAttribute('movenr'));
    m0v.d9r(this.m0z.g0t(l3h));
    if (l3h.u7k)
    {
  		m0v.j6x(l3h.u7k.r1m());
	  	m0v.x5l(l3h.u7k.n6e());
    }
    else
    {
   		m0v.j6x(this.m0z.q2g());
	  	m0v.x5l(this.m0z.a7m());
    }
		m0v.y9y();
	}
}

f9q()
{
	let w3v = this.m9m.getElementsByClassName("tdmedal");
	for (const f1t of w3v)
	{
		let l5i = f1t.getElementsByTagName("canvas")[0];
		l5i.width = 40;
		l5i.height = 16;
		let w7v = l5i.getContext('2d');
		let rect = new h6j();
		rect.q1w(40);
		rect.c5h(16);
		let l3h = this.m0z.h7r(f1t.getAttribute('movenr'));
    if (l3h.u7k)
    {
  		f9q(w7v, rect, l3h.u7k.c6x());
    }
    else
    {
  		f9q(w7v, rect, this.m0z.l9t());
    }
	}
}

i4h()
{
	let w4a = new w4j();
	w4a.h5x = this.m0z.h5x();
  w4a.z9p = this.m0z.g0t(this.j5k);
  if (this.i9z())
  {
    w4a.r1m = this.m0z.q2g();
	  w4a.n6e = this.m0z.a7m();
  }
  else
  {
  	w4a.r1m = this.j5k.u7k.r1m();
	  w4a.n6e = this.j5k.u7k.n6e();
  }
  
	if (this.z5h())
	{
		w4a.o6j = new w9g();
	}
	else
	{
    let e6f = this.j5k.v0z();
		this.m0z.v1s(e6f);
		w4a.o6j = e6f.u7k.l3n().v0z();
	}
  
 	if (!this.i9z())
	{
		w4a.s8l = this.j5k.u7k.l3n();
	}
	w4a.j1a = this.j1a();
	w4a.e6n = this.e6n();
	w4a.j8e = this.j8e();
	w4a.z2p = 0; 
  w4a.k6x = this.m0z.k6x(this.j5k);
	if (this.p3b)
	{
		this.p3b.x3v(w4a);
	}
}

c9a(g8l)
{
	this.j5k = this.m0z.h7r(g8l);
	this.i4h();
}

d8m(t8u)
{
	switch (t8u)
	{
		case n8g:
		case b7p:
		case i1y:
			this.q0f();
			break;
		case l7z:
		case g7f:
		case u6r:
			this.i0h();
			break;
		case c3l:
		case b2h:
		case w1e:
			this.f4t();
			break;
		case i6f:
		case i2s:
		case d7f:
			this.s1k();
			break;
		case n6p:
			break;
		case n2r:
			break;
	}
}

x4i()
{
  if (this.j5k.o6c)
  {
    this.a6h(this.j5k.o6c.l3c);
  }
  else
  {
    this.a6h(0);
  }
}

w9w()
{
	this.x4i();
	this.i4h();
}

e6n()
{
	return !this.i9z();
}

i9z()
{
	return this.m0z.i9z(this.j5k);
}

z5h()
{
	return this.m0z.z5h(this.j5k);
}

j1a()
{
	return this.m0z.j1a(this.j5k);
}

o6j(v6a)
{
	if (this.z5h())
	{
		return null;
	}
	else
	{
    let e6f = this.j5k.v0z();
		this.m0z.c9j(e6f, v6a);
		return e6f.u7k;
	}
}

i0h()
{
	if (this.e6n())
	{
		this.m0z.v3v(this.j5k);
		this.w9w();
	}
}

j8e()
{
	return !this.z5h();
}

q0f()
{
	if (this.j8e())
	{
		this.q4l(0);
	}
}

q4l(index)
{
	let x6i = this.m0z.a9i(this.j5k);
	if (index >= 0 && index < x6i)
	{
		this.m0z.c9j(this.j5k, index);
		this.w9w();
	}
}

s1k()
{
	if (this.j8e())
	{
		this.m0z.g1s(this.j5k);
		this.w9w();
	}
}

f4t()
{
	if (this.e6n())
	{
		this.j5k = this.m0z.i7v();
		this.w9w();
	}
}

h7m()
{
	if (this.r1r)
	{
		this.r5k();
	}
	else
	{
		this.a0m();
	}
}

r3a()
{
	if (this.o5m)
	{
		this.o5m = false;
		this.p3b.i6c.m0v.e1y();
		this.i4h();
	}
	else
	{
		this.i4h();
	}
}


a0m()
{
	if (this.z5h())
	{
		this.i4h();
		return;
	}
  if (chess)
  {
  	this.q4l(0);
    return;
  }

  
 	let u7k = this.o6j(0);
  if (!u7k.j6i())
 	{
  	this.q4l(0);
	  return;
 	}

  
	let b1x = false;
	if (!this.k6y.y5a)
	{
		b1x = true;
	}
	else
	{
		b1x = false;
		if (this.k6y.a5w < this.k6y.j6i)
		{
			if (this.k6y.t5w.d8x(this.k6y.g0t))
			{
				b1x = true;
			}
		}
	}
	if (b1x)
	{
		this.k6y.g0t = this.m0z.g0t(this.j5k);
		this.k6y.t5w = this.m0z.g0t(this.j5k);
		this.k6y.y5a = true;
		this.k6y.a5w = 0;
		this.k6y.y4a.length = 0;
		this.k6y.y4a.push(u7k.o3y()); 
		this.k6y.j6i = u7k.j6i();
		if (this.k6y.j6i > 1)
		{
			let n5t = generateBetweens(this.k6y.t5w, u7k.l3n());
			for (let i = 0; i < this.k6y.j6i - 1; i++)
			{
				this.k6y.y4a.push(n5t[i]);
			}
		}
		this.k6y.y4a.push(u7k.y8x());
	}
	if (this.k6y.a5w < this.k6y.j6i)
	{
		let e8d = u7k.e8d();
		let x5c = this.k6y.y4a[this.k6y.a5w];
		let y8x = this.k6y.y4a[this.k6y.a5w + 1];
		this.k6y.t5w.c8y(x5c, e0d.f3l);
		this.k6y.t5w.c8y(y8x, e8d);
		this.k6y.g0t = this.k6y.t5w.v0z();
		this.k6y.a5w++;
		let w4a = new w4j();
		w4a.z9p = this.k6y.t5w.v0z();
		w4a.e6n = this.e6n();
		w4a.j8e = this.j8e();
		if (this.p3b)
		{
			this.p3b.x3v(w4a);
		}
	}
	else
	{
		this.k6y.y5a = false;
		this.q4l(0);
	}
}



r5k()
{
	if (this.o5m)
	{
		let s0h = this.p3b.i6c.m0v.b8i();
		if (s0h)
		{
			if (this.f2h < this.z8f.length - 1)
			{
				this.p3b.i6c.m0v.q9w(this.z8f[this.f2h],
					this.z8f[this.f2h+1], true);
				this.f2h++;
			}
			else
			{
				this.o5m = false;
				this.q4l(0);
			}
		}
		return;
	}

	if (this.z5h())
	{
		this.i4h();
		return;
	}

	this.z8f.length = 0;
	let u7k = this.o6j(0);
	let j6i = u7k.j6i();
	if (j6i == 0)
	{
		this.z8f.push(u7k.o3y()); 
		this.z8f.push(u7k.y9w());
	}
	else
	{
		this.z8f.push(u7k.o3y());
		if (j6i > 1)
		{
      let g0t = this.m0z.g0t(this.j5k);
      let n5t = generateBetweens(g0t, u7k.l3n());
			for (let i = 0; i < j6i - 1; i++)
			{
				this.z8f.push(n5t[i]);
			}
		}
		this.z8f.push(u7k.y9w());
	}

	this.p3b.i6c.m0v.q9w(this.z8f[0],
		this.z8f[1], j6i > 0);
	this.f2h = 1;
	this.o5m = true;
}

t8h(k1q)
{
	for (const m of this.e5w)
	{
		if (m.getAttribute('movenr') == k1q)
		{
			return m;
		}
	}
	return null;
}

o4b(k1q)
{
	let s5d = [];
	for (const e2v of this.b6p)
	{
		if (e2v.getAttribute('movenr') == k1q)
		{
			s5d.push(e2v);
		}
	}
	return s5d;
}

i2b(k9x)
{
	let c0g = k9x.offsetTop;
	let j0k = k9x.scrollHeight;

	let w6k = this.m9m.offsetTop;
	let n7s = this.m9m.scrollTop;
	let u9s = this.m9m.clientHeight;
	let c6d = this.m9m.scrollHeight;
	let f5r = c0g - w6k;
	if (f5r >= n7s && f5r + j0k <= n7s + u9s - 1)
	{
		
	}
	else
	{
		
		let top = f5r - (u9s / 2);
		if (top < 0) top = 0;
		this.m9m.scrollTop = top;
	}
}

a1p(l8j, b1n)
{
	let w5r = l8j;
	while (w5r.p1f)
	{
		w5r = w5r.p1f;
	}
 	while (w5r)
	{
    if (this.m0z.z7k(w5r.l3c) == false)
    {
 	  	let k9x = this.t8h(w5r.l3c);
  	  if (k9x)
 		  {
  		  k9x.classList.add(b1n);
 	  	}
    }
    w5r = w5r.n0g;
  }
}

a6h(x8p)
{
  
 	for (const u7k of this.e5w)
	{
 		u7k.classList.remove('tdcurline');
    u7k.classList.remove('tdcurnode1');
	}
 	for (const e2v of this.b6p)
	{
 		e2v.classList.remove('tdcurline');
	}

  
	if (this.t6v >= 0)
	{
		let k9x = this.t8h(this.t6v);
		if (k9x)
		{
			k9x.classList.remove('tdcurmove');
		}
	}

  
  let g6n = true;
  let i0z = this.m0z.y6t(this.j5k);
 	for (const l8j of i0z)
	{
    if (l8j.p1f && g6n)
		{
		  this.a1p(l8j, 'tdcurnode1');
      g6n = false;
    }
    else
    {
      if (this.m0z.z7k(l8j.l3c) == false)
      {
   	  	let k1i = this.t8h(l8j.l3c);
	  	  if (k1i)
  		  {
	  		  k1i.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let k9x = this.t8h(x8p);
	if (k9x)
	{
    k9x.classList.remove('tdcurline');
		k9x.classList.add('tdcurmove');
		this.i2b(k9x);
	}
	this.t6v = x8p;
}

t2f()
{
	let u7k = this.t8h(this.t6v);
	if (!u7k) return;
	let b5w = u7k.offsetTop;
	let z2v = null;
	let f6k = -1;
	for (const m of this.e5w)
	{
		if (m.offsetTop < b5w)
		{
			if (m.offsetTop > f6k)
			{
				z2v = m;
				f6k = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (z2v)
	{
		this.b8v(z2v.getAttribute('movenr'));
	}
	else
	{
		if (this.e5w.length)
		{
			this.b8v(this.e5w[0].getAttribute('movenr'));
		}
	}
}

d4k()
{
	let u7k = this.t8h(this.t6v);
	if (!u7k)
	{
		this.q0f();
		return;
	}
	let b5w = u7k.offsetTop;
	for (const m of this.e5w)
	{
		if (m.offsetTop > b5w)
		{
			this.b8v(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.e5w.length)
	{
		this.b8v(this.e5w[this.e5w.length - 1].getAttribute('movenr'));
	}
}

b8v(g8l)
{
  
  
  
  
  if (this.j5k.o6c)
  {
    if (this.j5k.o6c.l3c == g8l)
    {
      return;
    }
  }
  else
  {
    if (g8l == 0)
    {
      return;
    }
  }
	
  this.c9a(g8l);
  this.a6h(g8l);
	
}

t0h()
{
	return this.m0z.t0h(this.j5k);
}

l0r(k0l)
{
  this.k0l = k0l.v0z();
	this.k0l.x4a = 0;
	this.k0l.q2d = 0;
	this.k0l.u4a = 32;
  this.k0l.p8r = 2;
 	this.k0l.q6q = false;
}

h5x()
{
	return this.m0z.h5x();
}

j5j()
{
	return this.m0z.j5j();
}

s0g()
{
	return this.m0z.s0g(this.j5k);
}

m3l()
{
	return this.m0z.m3l();
}

f3y(x8p, event)
{
  this.b8v(x8p);
}

a1v(x8p, event)
{
  if (!this.c9d) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const o6e = event.currentTarget; 
  const rect = o6e.getBoundingClientRect();
  console.log(`h6j.y9z: ${rect.left}`);
  console.log(`h6j.i1g: ${rect.top}`);
  let n9s = rect.left;
  let m7u = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let c7m = this.k0l.j8m();

  if (n9s + c7m > viewportWidth)
  {
    n9s = viewportWidth - c7m - 5;
  }
  if (n9s < 5)
  {
    n9s = 5;
  }
  if (m7u + c7m > viewportHeight)
  {
    m7u = viewportHeight - c7m - 5;
  }
  if (m7u < 5)
  {
    m7u = 5;
  }

  let l3h = this.m0z.h7r(x8p);
  let g0t = this.m0z.g0t(l3h);
  tooltip.innerHTML = this.j9q(g0t);

  tooltip.style.left = `${n9s}px`;
  tooltip.style.top = `${m7u}px`;
  tooltip.classList.add('visible');
}

n4j(x8p, event)
{
  if (!this.c9d) return;
  tooltip.classList.remove('visible');
}

j9q(g0t)
{
  let m0v = new h4h();
  const tempCanvas = document.createElement('canvas');
	m0v.l5i = tempCanvas;
	let b7m = this.k0l.j8m();
	m0v.l5i.width = b7m;
	m0v.l5i.height = b7m;
	m0v.l0r(this.k0l);
  m0v.d9r(g0t);
  m0v.y9y();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="${imageDataURL}" alt="Chess Position" width="${boardSize}" height="${boardSize}">`;
}

}

class k6j
{

constructor()
{
	this.fontSize = 15;
  this.p4f = true;
 	this.q3f = true;
}

v0z()
{
  return Object.assign(new k6j(), this);
}

}
class i9f
{

constructor(v5b)
{
  this.z5f = new h5c(v5b);
  this.g1k = new e7u(v5b);
}

}

class u3q
{

constructor()
{
	this.n4h = false;
	this.p3b = null;
	this.k3m = null;
	this.j8w = 6;
	this.h0f = null;
	this.z1u = null;
	this.x8t = null;
	this.s1c = null;
	this.r5x = null;
	this.s0k = false;
}

m3k()
{
	this.n4h = false;
	this.w0j();
	this.h0f.classList.replace('autoPlay', 'autoStop');
	this.s1c.style.display = 'none';
	this.r5x.style.display = 'none';
	this.z1u.style.display = 'inline-block';
	this.x8t.style.display = 'inline-block';
	this.u3k();
	this.p3b.i6c.d0r = false;
}

j2l()
{
	if (this.k3m)
	{
		clearInterval(this.k3m);
		this.k3m = null;
		this.h0f.classList.replace('autoStop', 'autoPlay');
		this.s1c.style.display = 'inline-block';
		this.r5x.style.display = 'inline-block';
		this.z1u.style.display = 'none';
		this.x8t.style.display = 'none';
		this.p3b.i6c.d0r = true; 
		this.p3b.y9q.g1k.r3a();
	}
}

w0j()
{
	let v5b = this.p3b.v5b;
	this.k3m = setInterval(function(){ d6a(v5b); },
		this.p3b.y9q.g1k.r1r ? this.j8w * 2 : this.j8w * 100);
}

a4b()
{
	return this.k3m != null;
}

e6n()
{
	return !this.p3b.y9q.g1k.i9z();
}

j8e()
{
	return !this.p3b.y9q.g1k.z5h();
}

c2c()
{
	if (this.s0k)
	{
		return;
	}
	else
	{
		this.s0k = true;
	}
	if (!this.j8e())
	{
		this.j2l();
	}
	else
	{
		this.p3b.y9q.g1k.h7m();
	}
	this.s0k = false;
}

d3v()
{
	if (this.k3m)
	{
		if (this.j8w < 50)
		{
			this.j8w++;
			clearInterval(this.k3m);
			this.w0j();
			this.u3k();
		}
	}
}

a1k()
{
	if (this.k3m)
	{
		if (this.j8w > 1)
		{
			this.j8w--;
			clearInterval(this.k3m);
			this.w0j();
			this.u3k();
		}
	}
}

u3k()
{
	c1v(this.z1u, this.j8w < 50);
	c1v(this.x8t, this.j8w > 1);
}

}

let t9k = null;
let b4a = 0;
let e9a = null;

class l7b
{

constructor()
{
	this.index = 0;
	this.h9y = '';
	this.m5d = null;
	this.t7m = false;
	this.p3b = null;
	this.k7c = null;
  this.u4r = [];
	this.f9u = 0;
  this.n6v = 0;

	this.s2b = null;
	this.a0o = null;
	this.left = null;
	this.p8x = null;
	this.m4u = null;
	this.t5c = null;
	this.m9r = null;
	this.i5k = null;
	this.u0l = null;
	this.f4r = null;
	this.u3h = null;
 	this.r7g = null;
 	this.m7l = null;
	this.p2s = null;
	this.s1c = null;
	this.z1u = null;
	this.h0f = null;
	this.r5x = null;
	this.x8t = null;
	this.z4c = null;
 	this.h3a = null;
  this.q3c = null;
	this.n4f = null;
  this.d1n = null;
	this.v0u = null;
	this.p3g = null;
	this.j4s = null;
	this.j5u = null;
	this.v0g = null;
	this.c3m = null;
  this.h8l = null;
  this.x4w = null;
	this.v0p = null;
	this.f3g = null;
	this.t1z = null;
	this.m8n = null;
	this.r3v = null;

	this.j5c = null;
	this.y1a = null;
	this.n7b = null;
	this.l5o = null;

  this.a4p = null;
	this.z9t = null;
	this.q3i = null;
  this.g5h = null;

  this.f1x = null;

  
  this.w4o = null;
  this.p7w = null;
  this.w3o = null;
  this.u8e = null;
  this.w7x = null;
  this.c2z = null;

  
}

e2b(index, m5d, h9y)
{
	this.index = index;
	this.m5d = m5d;
	this.h9y = h9y;
	m5d.innerHTML = '';
	m5d.id = "replay";

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

  m5d.innerHTML = s;

	this.s2b = document.getElementById("rootParent"+index);
	this.a0o = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.p8x = document.getElementById("leftContainer"+index);
	this.m4u = document.getElementById("leftNest"+index);
	this.t5c = document.getElementById("leftNorth"+index);
	this.m9r = document.getElementById("boardHolder"+index);
	this.i5k = document.getElementById("boardPanel"+index);
	this.u0l = document.getElementById("boardCanvas"+index);
	this.f4r = document.getElementById("belowBoard"+index);
	this.u3h = document.getElementById("replayPanel"+index);
 	this.r7g = document.getElementById("goToPrevious"+index);
 	this.m7l = document.getElementById("goToNext"+index);
	this.p2s = document.getElementById("goToBegin"+index);
	this.s1c = document.getElementById("playBackward"+index);
	this.z1u = document.getElementById("playSlower"+index);
	this.h0f = document.getElementById("autoPlay"+index);
	this.r5x = document.getElementById("playForward"+index);
	this.x8t = document.getElementById("playFaster"+index);
	this.z4c = document.getElementById("goToEnd"+index);
  this.h3a = document.getElementById("flipBoard"+index);
  this.q3c = document.getElementById("download"+index);
	this.n4f = document.getElementById("showGameList"+index);
  this.d1n = document.getElementById("settings"+index);
	this.v0u = document.getElementById("leftSouth"+index);
	this.p3g = document.getElementById("leftSouthNest"+index);
	this.j4s = document.getElementById("listParent"+index);
	this.j5u = document.getElementById("listHeader"+index);
	this.v0g = document.getElementById("listHeaderTable"+index);
	this.c3m = document.getElementById("listBody"+index);
  this.h8l = document.getElementById("list-button-container"+index);
  this.x4w = document.getElementById("hideGameList"+index);
	this.v0p = document.getElementById("gameList"+index);
	this.f3g = document.getElementById("right"+index);
	this.t1z = document.getElementById("rightNest"+index);
	this.m8n = document.getElementById("rightNorth"+index);
	this.r3v = document.getElementById("rightSouth"+index);

  
  if (!chess)
  {
    this.m8n.style.height = "100%";
   	this.r3v.style.display = 'none';
  }

	this.j5c = document.getElementById("nota-container"+index);
  this.j5c.style.fontSize = e0m.fontSize + 'px';
	this.y1a = document.getElementById("nota-header-container"+index);
	this.n7b = document.getElementById("headerPanel"+index);
	this.l5o = document.getElementById("movesPanel"+index);

	this.a4p = document.getElementById("enota-container"+index);
  this.a4p.style.fontSize = e0m.fontSize + 'px';
	this.z9t = document.getElementById("enota-header-container"+index);
	this.q3i = document.getElementById("eheaderPanel"+index);
	this.g5h = document.getElementById("emovesPanel"+index);

  this.f1x = document.getElementById("startEngine"+index);
}

b9r()
{
	this.m5d.style.display = 'block';
	this.z1u.style.display = 'none';
	this.x8t.style.display = 'none';
	this.j4s.style.display = 'none';

	this.t7m = false;
	if (this.m5d.clientWidth <= w2o)
	{
		this.m3t();
		this.t7m = true;
	}
	else
	{
		this.q8b();
		this.x5b();
	}
  this.q9b();
	let v5b = this.index;

	this.p2s.onclick = this.h7k.bind(this);
	this.s1c.onclick = this.i0h.bind(this);
	this.z1u.onclick = this.d3v.bind(this);
	this.h0f.onclick = this.b4g.bind(this);
	this.x8t.onclick = this.a1k.bind(this);
	this.r5x.onclick = this.q0f.bind(this);
	this.z4c.onclick = this.a3x.bind(this);
  this.r7g.onclick = this.q6d.bind(this);
  this.m7l.onclick = this.o3i.bind(this);
  this.h3a.onclick = this.r3j.bind(this);
 	this.q3c.onclick = this.a5n.bind(this);
	this.n4f.onclick = this.z7a.bind(this);
 	this.x4w.onclick = this.d3b.bind(this);

  this.d1n.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.f1x.onchange = this.s9z.bind(this);

	this.p3b = new v5x(this.index);
	this.p3b.i6c.m0v.j6p(this.u0l);
	this.p3b.i6c.i5k = this.i5k;
  this.p3b.i6c.l0r(g6k);
	this.p3b.y9q.z5f.g6t = this.n7b;
	this.p3b.y9q.g1k.m9m = this.l5o;
  this.p3b.y9q.g1k.l0r(g6k);
	this.p3b.f7p.h0f = this.h0f;
	this.p3b.f7p.z1u = this.z1u;
	this.p3b.f7p.x8t = this.x8t;
	this.p3b.f7p.s1c = this.s1c;
	this.p3b.f7p.r5x = this.r5x;
 	this.p3b.l9m.g1k.m9m = this.g5h;
  this.p3b.l9m.g1k.l0r(g6k);

  this.p3b.l9m.d1n.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.k7c = new o8b(this.index);
	this.k7c.j4s = this.j4s;
	this.k7c.n1b = this.v0p;
	this.k7c.g2h = this.v0g;
	this.k7c.b9r();
	this.k7c.p3r(this.u4r);
  this.k7c.v5r = (v0p, index) => {
    this.m2c(v0p, index);
  };
	if (this.k7c.u4r.length)
	{
		this.a0l(0, 0);
	}
	else
	{
		let u9r = new n4q();
		this.p3b.a0l(null, 1, 0, u9r);
	}
}

a7v(h9y)
{
	this.h9y = h9y;
 	let lines = this.h9y.split('\n');
	let u7i = 0;
	for (const h5z of lines)
	{
		if (h5z.startsWith("[Event \""))
		{
			let s0v = u7i;
      let e0p = lines.length;
   		let l7g = lines.slice(s0v, e0p);
  		let t9t = new e8u(l7g);
	  	this.k7c.u4r[this.f9u] = t9t.f8g();
      break;
    }
    u7i++;
	}
  this.a0l(0, 0);
}

q9b()
{
	let lines = this.h9y.split('\n');
	let n0d = [];
	let u7i = 0;
	for (const h5z of lines)
	{
		if (h5z.startsWith("[Event \""))
		{
			n0d.push(u7i);
		}
		u7i++;
	}
	let i = 0;
	this.u4r = [];
	for (const m1w of n0d)
	{
		let s0v = m1w;
		let e0p = 0;
		if (i < n0d.length - 1)
		{
			e0p = n0d[i + 1];
		}
		else
		{
			e0p = lines.length;
		}
		let l7g = lines.slice(s0v, e0p);
		let t9t = new e8u(l7g);
		let u9r = t9t.f8g();
		this.u4r.push(u9r);
		i++;
	}
}

q0y()
{
	if (this.t7m || this.a0o.clientHeight <= w2o)
	{
		this.m5d.style.e7h = "0px";
		this.m5d.style.u3y = "0px";
		this.m5d.style.width = "100%";
		this.m5d.style.height = "88vh";
	}
	else
	{
		this.m5d.style.e7h = "1px solid gray";
		this.m5d.style.u3y = "1px solid gray";
		this.m5d.style.height = "88vh";
	}
}

d5j()
{
	this.q0y();

	this.left.style.width = "100%";

	let x7p = this.t5c.getBoundingClientRect();
	this.v0u.style.top = (x7p.height) + "px";
	this.x5b();

	this.w5f();
	this.q8b();
	this.h5w();
	this.d0z();
  this.x5i()
}

x3d()
{
	this.q0y();

	let n3y = this.a0o.getBoundingClientRect();
	this.left.style.width = (n3y.width * 0.50) + "px";
	let t1i = this.left.getBoundingClientRect();

	let x7p = this.t5c.getBoundingClientRect();
	this.v0u.style.top = (x7p.height) + "px";
	this.x5b();

	this.f3g.style.left = (t1i.width) + "px";
	this.f3g.style.width = (n3y.width - t1i.width) + "px";

	this.w5f();
	this.q8b();
	this.h5w();
	this.d0z();
  this.x5i()
}

q8b()
{
}

k5z()
{
  this.t5c.style.height = '100%';
  this.m8n.appendChild(this.j5c);
  this.j5c.style.height = '100%';
  this.r3v.appendChild(this.a4p);
  if (!chess)
  {
    this.r3v.style.display = 'none';
  }
  else
  {
    this.r3v.style.display = 'block';
    this.a4p.style.height = '100%';
  }
  this.f3g.style.display = 'block';
}

m3t()
{
  this.t5c.style.height = '70%';
  this.p3g.appendChild(this.j5c);
  if (!chess)
  {
    this.j5c.style.height = '100%';
    this.a4p.style.display = 'none';
  }
  else
  {
    this.p3g.appendChild(this.a4p);
    this.j5c.style.height = '50%';
    this.a4p.style.height = '50%';
    this.a4p.style.display = 'block';
  }
  this.f3g.style.display = 'none';
}

z7a(event)
{
	this.j4s.style.display = 'block';
  let a4h = this.j4s.clientHeight - this.j5u.clientHeight - this.h8l.clientHeight;
  this.c3m.style.height = a4h + "px";
	this.h5w();
}

d3b(event)
{
 	this.j4s.style.display = 'none';
}

d0z()
{
	this.p3b.y9q.z5f.b5u();
}

x5i()
{
}

h5w()
{
  this.k7c.n3n();
}

w5f()
{
	let x7p = this.t5c.getBoundingClientRect();
	let x8k = this.f4r.getBoundingClientRect();
	this.m9r.style.height = (x7p.height - x8k.height - 1) + "px";
	this.p3b.i6c.n3n();
}

x5b()
{
	let y8e = this.m4u.getBoundingClientRect();
	let x7p = this.t5c.getBoundingClientRect();
	let z8s = y8e.height - x7p.height;
	if (z8s < 0) z8s = 0;
	this.v0u.style.height = z8s + "px";
}

u5j()
{
  q5q('goToPrevious'+this.index, this.f9u > 0);
  q5q('goToNext'+this.index, this.f9u < this.k7c.u4r.length - 1);
}

f1p(e)
{
	this.p3b.i6c.m0v.mouseDown(e);
}

g8j(e)
{
	this.p3b.i6c.m0v.mouseMove(e);
}

b7h(e)
{
	this.p3b.i6c.m0v.mouseUp(e);
}

v3c(e)
{
	this.p3b.i6c.m0v.touchStart(e);
}

a6m(e)
{
	this.p3b.i6c.m0v.touchMove(e);
}

j6f(e)
{
	this.p3b.i6c.m0v.touchEnd(e);
}

d3v(event)
{
	this.p3b.f7p.d3v();
}

a1k(event)
{
	this.p3b.f7p.a1k();
}

i0h(event)
{
	this.p3b.f7p.j2l();
	this.p3b.y9q.g1k.i0h();
}

q0f(event)
{
	this.p3b.f7p.j2l();
	this.p3b.y9q.g1k.q0f();
}

h7k(event)
{
	this.p3b.f7p.j2l();
	this.p3b.y9q.g1k.f4t();
}

a3x(event)
{
	this.p3b.f7p.j2l();
	this.p3b.y9q.g1k.s1k();
}

b4g(event)
{
	this.p3b.o7b();
}

s9m()
{
 	if (this.k7c.u4r.length)
  {
    this.a0l(0, 0);
  }
}

q6d(event)
{
 	if (this.f9u > 0)
  {
    this.a0l(this.f9u - 1, 0);
  }
}

o3i(event)
{
  if (this.f9u < this.k7c.u4r.length - 1)
  {
    this.a0l(this.f9u + 1, 0);
  }
}

w3c()
{
	if (this.k7c.u4r.length)
  {
    this.f9u = this.k7c.u4r.length - 1;
    this.a0l(this.k7c.u4r.length - 1, 0);
	}
}

a0l(f9u, x8p)
{
  if (f9u >= 0 && f9u <= this.k7c.u4r.length - 1)
  {
    this.f9u = f9u;
  	this.p3b.a0l(null, 1, x8p, this.k7c.u4r[this.f9u]);
  }
  this.u5j();
}

r3j(event)
{
	this.p3b.r3j();
}

c8q()
{
	this.p3b.c8q();
}

k5t()
{
	if (this.m5d.clientWidth <= w2o)
	{
		if (this.t7m)
		{
			this.d5j();
		}
		else
		{
			this.m3t();
			this.t7m = true;
			this.d5j();
		}
	}
	else
	{
		if (!this.t7m)
		{
			this.x3d();
		}
		else
		{
			this.k5z();
			this.t7m = false;
			this.x3d();
		}
	}
}

m2c(v0p, index)
{
	this.a0l(index, 0);
  this.d3b();
}

a5n(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.h9y.length - 1)
  {
    if (this.h9y[i] == '[')
    {
        break;
    }
    i++;
  }
  let h9y = this.h9y.substring(i);
  a.href = window.URL.createObjectURL(new Blob([h9y], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

s9z(event)
{
  if (chess)
  {
    if (this.p3b.y5r())
    {
      this.x4k();
    }
    else
    {
      this.p9s();
    }
  }
}

x4k()
{
  this.p3b.x4k();
}

p9s()
{
  let v7w = new o8i();
  v7w.id.m2v = "Stockfish";
  const y3e = v7w.y3e;
  y3e.addInteger("MultiPV", v2k);
  y3e.addInteger("Threads", u1a);
  y3e.addInteger("Hash",    a5d(x5g));
  this.p3b.p9s(v7w);
}

g8i()
{
  this.p3b.i6c.l0r(g6k);
  this.p3b.i6c.n3n();
  this.p3b.y9q.g1k.l0r(g6k);
  this.p3b.y9q.g1k.k3q();
  this.p3b.l9m.g1k.l0r(g6k);
  this.p3b.l9m.g1k.k3q();
  let j5c = document.getElementById("nota-container"+this.index);
  j5c.style.fontSize = e0m.fontSize + 'px';
  let u6s = document.getElementById("enota-container"+this.index);
  u6s.style.fontSize = e0m.fontSize + 'px';
}

r4x()
{
  if (this.p3b.y5r())
  {
    this.x4k();
    this.p9s();
  }
}

async onSettingsClick()
{
  const dialog = new k1e();
  const { z2f } = await dialog.show();

  if (z2f === dialog.c7t)
  {
    this.g8i();
  }
}

async onEngineSettingsClick()
{
  const dialog = new j4i();
  const { z2f } = await dialog.show();

  if (z2f === dialog.c7t)
  {
    this.r4x();
  }
}

}

class k1e
{

constructor()
{
  this.c7t = 1;
  this.s2u = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.g6a();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.p7w = this.dialog.querySelector(".piece-select");
  this.w3o = this.dialog.querySelector(".coordinates-checkbox");
  this.u8e = this.dialog.querySelector(".font-select");
  this.w7x = this.dialog.querySelector(".ok-button");
  this.c2z = this.dialog.querySelector(".cancel-button");

  this.w7x.onclick = this.i2p.bind(this);
 	this.c2z.onclick = this.r8m.bind(this);
}

g6a()
{
  const d0d = o5q();
  const s = `
    <dialog id="settingsDialog" class="settingsDialog">
      <i8x>Settings</i8x>

      <div class="settings-row">
        <span class="label-text">Pieces:</span>
        <select class="pieceSelect piece-select">
          ${d0d.map((j3b, i) => '<option value="' + i + '">' + j3b + '</option>').join('')}
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

i2p(event)
{
  g6k.v6h = this.p7w.value;
  localStorage.setItem(t8i, g6k.v6h);
  b8d(g6k.v6h);
  g6k.q6q = this.w3o.checked;
  localStorage.setItem(f6l, g6k.q6q.toString());
  e0m.fontSize = this.u8e.value;
  localStorage.setItem(q7f, e0m.fontSize);
  this.dialog.close('ok');
}

r8m(event)
{
  this.dialog.close('cancel');
}

async show()
{
  h8i = true;

  this.p7w.value = g6k.v6h;
  this.w3o.checked = g6k.q6q;
  this.u8e.value = e0m.fontSize;

  const z2f = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.c7t : this.s2u);
    };
    this.dialog.showModal();
  });

  h8i = false;
  return { z2f };
}

}

function e7j(s3i)
{
  const value = parseInt(s3i);
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

function a5d(s3i)
{
  const value = parseInt(s3i);
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

class j4i
{

constructor()
{
  this.c7t = 1;
  this.s2u = 0;

  this.dialog = document.getElementById("engineSettingsDialog");
  if (!this.dialog)
  {
    this.g6a();
  }
  this.dialog = document.getElementById("engineSettingsDialog");

  this.k1u = this.dialog.querySelector(".searchTime-slider");

  this.w0u = this.dialog.querySelector(".searchTime-value");
  this.j9a = this.dialog.querySelector(".multiPV-slider");
  this.w7n = this.dialog.querySelector(".multiPV-value");
  this.z9a = this.dialog.querySelector(".threads-slider");
  this.z0b = this.dialog.querySelector(".threads-value");
  this.f4f = this.dialog.querySelector(".memory-slider");
  this.o5g = this.dialog.querySelector(".memory-value");
  this.w7x = this.dialog.querySelector(".ok-button");
  this.c2z = this.dialog.querySelector(".cancel-button");

  this.w7x.onclick = this.i2p.bind(this);
 	this.c2z.onclick = this.r8m.bind(this);

  this.k1u.addEventListener('input', this.f4m.bind(this));
  this.j9a.addEventListener('input', this.h7i.bind(this));

  this.z9a.addEventListener('input', this.w8g.bind(this));

  this.f4f.addEventListener('input', this.x7s.bind(this));

}

g6a() {
  const s = `
    <dialog id="engineSettingsDialog" class="settingsDialog">
      <i8x>Engine Settings</i8x>

      <div class="settings-row">
        <span class="label-text">Search time</span>
        <input type="range" class="simple-slider searchTime-slider" min="1" max="10" k2w="1" value="1">
        <span class="value-display-simple searchTime-value">1s</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Multiple lines</span>
        <input type="range" class="simple-slider multiPV-slider" min="1" max="5" k2w="1" value="1">
        <span class="value-display-simple multiPV-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Threads</span>
        <input type="range" class="simple-slider threads-slider" min="1" max="32" k2w="1" value="1">
        <span class="value-display-simple threads-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Memory</span>
        <input type="range" class="simple-slider memory-slider" min="1" max="6" k2w="1" value="1">
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

i2p(event)

{
  o6m = parseInt(this.k1u.value);
  v2k = parseInt(this.j9a.value);
  u1a = parseInt(this.z9a.value);
  x5g = parseInt(this.f4f.value);
  localStorage.setItem(o9e, o6m);
  localStorage.setItem(z9j, v2k);
  localStorage.setItem(x7y, u1a);
  localStorage.setItem(p1s, x5g);
  this.dialog.close('ok');
}

r8m(event)
{
  this.dialog.close('cancel');
}

f4m()
{
  const value = parseInt(this.k1u.value);
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
  this.w0u.textContent = displayValue;
}

h7i()
{
  const value = this.j9a.value;
  this.w7n.textContent = `${value}`;
}


w8g()
{
  const value = this.z9a.value;
  this.z0b.textContent = `${value}`;
}


x7s()

{
  const value = parseInt(this.f4f.value);
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

  this.o5g.textContent = displayValue;
}

async show()
{
  h8i = true;

  this.k1u.value = o6m;
  this.j9a.value = v2k;
  this.z9a.value = u1a;
  this.f4f.value = x5g;

  this.f4m();
  this.h7i();
  this.w8g();
  this.x7s();

  const z2f = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.c7t : this.s2u);
    };
    this.dialog.showModal();
  });

  h8i = false;
  return { z2f };
}

}

const g4e = 38;
const f0q = 40;
const l7z = 37;
const g7f = 37;
const u6r = 52;
const n8g = 39;
const b7p = 39;
const i1y = 54;
const c3l = 36;
const b2h = 36;
const w1e = 55;
const i6f = 35;
const i2s = 35;
const d7f = 49;
const l4r = 187;
const s6k = 107;
const l4y = 61;
const a7c = 42;
const y2g = 170;
const n2r = 8;
const n6p = 13;
let z3a = false;
let h8i = false;

const w2o = 767;
let m3w = [];
let h4i = -1;
let a2a = new c1m();

let g6k = new k2g();
let e0m = new k6j();
let o6m = 1;
let v2k = 1;
let u1a = 1;
let x5g = 1;

window.onload = function()
{
  o9w();
  c7v();
  e2a();
};

document.onkeydown = k3b;

function k3b(e)
{
  if (e.t8u === "Escape")
  {
    return;
  }

  if (h8i)
  {
    
    e.preventDefault();
    return;
  }

	let o8t = e || window.event;
	let t8u = o8t.keyCode;

	if (z3a) return;
	z3a = true;

	if (h4i == -1) return;

	if (e.ctrlKey)
	{
		if (t8u == 66) 
		{
				m3w[h4i].r3j();
				e.preventDefault();
				
				
				
		}
		z3a = false;
		return;
	}
	if (t8u)
	{
		
		i5m(t8u);
		e.preventDefault(); 
		
	}
	z3a = false;
}

function d6a(v5b)
{
	m3w[v5b].p3b.f7p.c2c();
}

function i5m(t8u)
{
	if (h4i == -1) return;

	if (t8u == g4e)
	{
		m3w[h4i].p3b.y9q.g1k.t2f();
	}
	else if (t8u == f0q)
	{
		m3w[h4i].p3b.y9q.g1k.d4k();
	}
	else if (t8u == l7z || t8u == g7f || t8u == u6r ||
	t8u == n8g || t8u == b7p || t8u == i1y ||
	t8u == c3l || t8u == b2h ||
	t8u == i6f || t8u == i2s)
	{
		m3w[h4i].p3b.y9q.g1k.d8m(t8u);
	}
	else if (t8u == l4r || t8u == s6k || t8u == l4y)
	{
		m3w[h4i].doFlipBoard();
	}
}

function b7j(m2w, n7i)
{
	let v4q = m2w.length;
	let v3s = 0;

	function check(n)
	{
		if (n == v4q)
		{
			n7i();
		}
	}

	for (let i = 0; i < m2w.length; ++i)
	{
    let v2l = m2w[i];
		let img = document.createElement("img");
		img.id = m2w[i].replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
		a2a.add(img);
		img.addEventListener("load", function()
		{
			v3s++;
			check(v3s);
		});
		img.src = v2l;
	}
}

function o9w()
{
 	b7j(y6y(), b2z);
  
  
}

function k5t()
{
	for (const h7w of m3w)
	{
		h7w.k5t();
	}
}

function b2z()
{
	let e8f = document.getElementsByClassName("tdreplay");
	for (const m5d of e8f)
	{
		let h7w = new l7b();
		h7w.e2b(m3w.length, m5d, m5d.innerHTML);
		h7w.b9r();
		m3w.push(h7w);
	}
	if (m3w.length)
	{
		h4i = 0;
	}
	window.addEventListener("resize", k5t);
	k5t();
}

function q5q(m2v, f9z)
{
	let button = document.getElementById(m2v);
	if (f9z)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function c1v(button, f9z)
{
	if (f9z)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const f6l = 'Coordinates';
const t8i = 'Pieces';
const q7f = 'MovesFontSize';
const o9e = 'SearchTime';
const z9j = 'MultiPV';
const x7y = 'Threads';
const p1s = 'Memory';

function e2a()
{
  const coordinatesValue = localStorage.getItem(f6l);
  if (coordinatesValue === null)
  {
    g6k.q6q = true;
  }
  else
  {
    g6k.q6q = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(t8i);
  if (piecesValue === null)
  {
    g6k.v6h = 0;
  }
  else
  {
    g6k.v6h = piecesValue;
  }
  b8d(g6k.v6h);

  const movesFontSizeValue = localStorage.getItem(q7f);
  if (movesFontSizeValue === null)
  {
    e0m.fontSize = 15;
  }
  else
  {
    e0m.fontSize = movesFontSizeValue;
  }

  
  const searchTime = localStorage.getItem(o9e);
  if (searchTime === null)
  {
    o6m = 10; 
  }
  else
  {
    o6m = searchTime;
  }
  const k7q = localStorage.getItem(z9j);
  if (k7q === null)
  {
    v2k = 1;
  }
  else
  {
    v2k = k7q;
  }
  const threads = localStorage.getItem(x7y);
  if (threads === null)
  {
    const logicalThreads = navigator.hardwareConcurrency || 4;
    const defaultThreads = Math.max(1, logicalThreads - 1);
    u1a = defaultThreads;
  }
  else
  {
    u1a = threads;
  }
  const memory = localStorage.getItem(p1s);
  if (memory === null)
  {
    x5g = 4; 
  }
  else
  {
    x5g = memory;
  }
}
const t2h =
[
	[ g3k.h4o, 			  	""      ],
	[ g3k.u9r,  		 		"game"  ],
	[ g3k.d7d,    		 	"match" ],
	[ g3k.e0b,  	"tourn" ],
	[ g3k.g0z,   			"swiss" ],
	[ g3k.z9x,    	"k.o."  ],
	[ g3k.f5f,	"simul" ],
	[ g3k.e4z,	"schev" ]
];

const z6c =
[
	[ c7k.m8q, ""        ],
	[ c7k.f9i,  "(rapid)" ],
	[ c7k.p2k,  "(blitz)" ],
	[ c7k.j7q,   "(corr)"  ]
];

const i4r =
[
	[ s2m.h4o,     		 ""     ],
	[ s2m.y3d,       		 "$145" ],
	[ s2m.t1b, 		 "$142" ],
	[ s2m.z7i, 		 "$143" ],
	[ s2m.u7v, "$144" ],
	[ s2m.i5b,  "$140" ],
	[ s2m.h7d, "$141" ]
];

const g8a =
[
	[ o3q.h4o,     		""   ],
	[ o3q.w5z,       	"$1" ],
	[ o3q.v3z, 			  	"$2" ],
	[ o3q.r1f,	"$5" ],
	[ o3q.i9s, 		  "$6" ],
	[ o3q.n5w,  	"$3" ],
	[ o3q.t8t, 		  "$4" ],
	[ o3q.a6z, 		"$22" ],
	[ o3q.x2z, 		"$8" ]
];

const e0s =
[
	[ h1r.h4o,     						""     ],
	[ h1r.a9t,      "$18"  ],
	[ h1r.k2r, 					"$16"  ],
	[ h1r.g6i,	"$14"  ],
	[ h1r.m0o, 						"$11"  ],
	[ h1r.q1e,  						"$13"  ],
	[ h1r.n9c,  "$15"  ],
	[ h1r.g0e, 					"$17"  ],
	[ h1r.u6n, 			"$19"  ],
	[ h1r.c5x,					"$44"  ],
	[ h1r.m5j, 					"$132" ],
	[ h1r.c9v,  					"$36"  ],
	[ h1r.o5y, 							"$40"  ],
	[ h1r.g2q, 			  "$138" ],
	[ h1r.v9l,	"$32"  ],
	[ h1r.q8v, 							"$146" ]
];

const o4y =
[
	[ u9e.h4o,     		""     ],
	[ u9e.u7m,     "$51"  ],
	[ u9e.w5p, 			"$52"  ],
	[ u9e.e0u,	    		"$53"  ]
];

const p8l =
[
	[ z3b.u9v, 			 	""       ],
	[ z3b.w5p,   		"middle" ],
	[ z3b.c4j,   	   	 	"low"    ]
];


function u2l(m0k)
{
	return z6c[m0k][1];
}

function v6d(f9a)
{
	for (const m0k of z6c)
	{
		if (m0k[1] == f9a)
		{
			return m0k[0];
		}
	}
	return c7k.m8q;
}

function p4q(type)
{
	return t2h[type][1];
}

function j3j(f9a)
{
	for (const a3t of t2h)
	{
		if (a3t[1] == f9a)
		{
			return a3t[0];
		}
	}
	return g3k.h4o;
}

function t0v(i1q)
{
	return i4r[i1q][1];
}

function d6y(f9a)
{
	for (const i1q of i4r)
	{
		if (i1q[1] == f9a)
		{
			return i1q[0];
		}
	}
	return s2m.h4o;
}

function m3f(style)
{
	return g8a[style][1];
}

function i7x(f9a)
{
	for (const style of g8a)
	{
		if (style[1] == f9a)
		{
			return style[0];
		}
	}
	return o3q.h4o;
}

function f9n(value)
{
	return e0s[value][1];
}

function e6s(f9a)
{
	for (const value of e0s)
	{
		if (value[1] == f9a)
		{
			return value[0];
		}
	}
	return h1r.h4o;
}

function n7e(n3f)
{
	return o4y[n3f][1];
}

function a9e(f9a)
{
	for (const h5l of o4y)
	{
		if (h5l[1] == f9a)
		{
			return h5l[0];
		}
	}
	return u9e.h4o;
}

function f2x(f9a)
{
	return f9a.length == 0 ||
		f9a == "?" ||
		f9a == "-" ||
		f9a == "*" ||
		f9a == "????.??.??";
}

function q6j(f9a)
{
	if (f2x(f9a))
	{
		return "";
	}
	else
	{
		return f9a.trim();
	}
}

function t7d(f9a, q8k)
{
	if (f2x(f9a))
	{
		return q8k;
	}
	else
	{
		return x2a(f9a, q8k);
	}
}

function r0c(value)
{
	return value ? value.toString() : "";
}

function s7h(o0y)
{
	return p8l[o0y][1];
}

function u0r(f9a)
{
	for (const o0y of p8l)
	{
		if (o0y[1] == f9a)
		{
			return o0y[0];
		}
	}
	return z3b.u9v;
}

function k3x(r6p)
{
	if (!r6p)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(r6p / 60);
		let g2j = r6p % 60;
		return div.toString() + "." + g2j.toString().padStart(2, '0');
	}
}

function l8y(z2f)
{
	switch (z2f)
	{
		case x8s.w4h:
			return "1-0";
		case x8s.y9y:
			return "1/2-1/2";
		case x8s.y8o:
			return "0-1";
		default:
			return "*";
	}
}

function v9k(c6f)
{
	if (c6f > 0 && c6f <= 9999)
	{
		return c6f.toString().padStart(4, '0');
	}
	else
	{
		return "-";
	}
}

function k3d(l9v)
{
	if (l9v.f3l())
	{
		return "????.??.??";
	}
	let f9a = '';
	if (l9v.s2q)
	{
		f9a = l9v.s2q.toString().padStart(4, '0');
	}
	else
	{
		f9a = "????";
	}
	f9a += ".";
	if (l9v.r2l)
	{
		let b0v = l9v.r2l.toString().padStart(2, '0');
		f9a += b0v;
	}
	else
	{
		f9a += "??";
	}
	f9a += ".";
	if (l9v.v9f)
	{
		let h5o = l9v.v9f.toString().padStart(2, '0');;
		f9a += h5o;
	}
	else
	{
		f9a += "??";
	}
	return f9a;
}

function j7l(w9b)
{
	if (f2x(w9b))
	{
		return new i2j();
	}
	else
	{
		let l9v = new i2j();
		l9v.e4h("yyyy.mm.dd", w9b);
		return l9v;
	}
}

function f5p(w9b, e0b)
{
	e0b.f3q = (w9b.indexOf("team") != -1);
	e0b.type = g3k.h4o;
	for (const a3t of t2h)
	{
		if (w9b.indexOf(a3t[1]) != -1)
		{
			e0b.type = a3t[0];
			break;
		}
	}
	e0b.m0k = c7k.m8q;
	for (const m0k of z6c)
	{
		if (w9b.indexOf(m0k[1]) != -1)
		{
			e0b.m0k = m0k[0];
			break;
		}
	}
}

function b9s(w9b, f1w)
{
	f1w.i4e = 0;
	f1w.f7a = 0;
	let l3h = w9b.indexOf(".");
	if (l3h != -1)
	{
		let u5y = w9b.substr(0, l3h);
		f1w.i4e = x2a(u5y, 0);
		let v5v = w9b.substr(l3h + 1, w9b.length);
		l3h = v5v.indexOf(".");
		if (l3h != -1)
		{
			u5y = v5v.substr(0, l3h);
			f1w.f7a = x2a(u5y, 0);
		}
		else
		{
			f1w.f7a = x2a(v5v, 0);
		}
	}
	else
	{
		f1w.i4e = x2a(w9b, 0);
	}
}

function r2h(f1w)
{
	let w9b = '';
	if (f1w.f7a)
	{
		w9b = f1w.i4e.toString() + "." + f1w.f7a.toString();
	}
	else if (f1w.i4e)
	{
		w9b = f1w.i4e.toString();
	}
	return w9b;
}

function q1g(w9b)
{
	if (w9b == "2-0" || w9b == "20" || w9b == "1-0" || w9b == "10")
	{
		return x8s.w4h;
	}
	else if (w9b == "1-1" || w9b == "11" || w9b == "1/2-1/2" ||
		w9b == "1/21/2" || w9b == "0.5-0.5")
	{
		return x8s.y9y;
	}
	else if (w9b == "0-2" || w9b == "02" || w9b == "0-1" || w9b == "01")
	{
		return x8s.y8o;
	}
	else
	{
		return x8s.h4o;
	}
}

function w7a(w9b)
{
	return x2a(w9b, 0);
}

function q4o(w9b)
{
	return w7y(w9b);
}

function l4a(w9b)
{
	return g4d(w9b);
}

function v9n(value)
{
	return value ? "1" : "";
}

function b9n(w9b)
{
	return w9b == "1";
}

function q7g(s4j)
{
	let f1w = new v1k();

	
	f1w.n6x.d7r.x7h(q6j(s4j.j1s));
	if (!f2x(s4j.s8r))
	{
		f1w.n6x.z0a.m2v = q6j(s4j.s8r);
		f1w.n6x.z0a.l3c = t7d(s4j.f3a, 0);
		if (!f2x(s4j.q3b))
		{
			let l9v = j7l(s4j.q3b);
			f1w.n6x.z0a.s2q = l9v.s2q;
		}
		f1w.n6x.z0a.x4u = b9n(s4j.l1h);
		f1w.n6x.z0a.j8y = b3q(q6j(s4j.s6h));
	}
	f1w.n6x.c6f = w7a(q6j(s4j.c3v));
	f1w.n6x.time = l4a(q6j(s4j.w3e));
	f1w.n6x.a1x = q6j(s4j.d6t);
	f1w.n6x.j8y = u5u(q6j(s4j.m9i));

	
	f1w.q5o.d7r.x7h(q6j(s4j.a2y));
	if (!f2x(s4j.l0s))
	{
		f1w.q5o.z0a.m2v = q6j(s4j.l0s);
		f1w.q5o.z0a.l3c = t7d(s4j.z6a, 0);
		if (!f2x(s4j.c9z))
		{
			let l9v = j7l(s4j.c9z);
			f1w.q5o.z0a.s2q = l9v.s2q;
		}
		f1w.q5o.z0a.x4u = b9n(s4j.e1q);
		f1w.q5o.z0a.j8y = b3q(q6j(s4j.b5o));
	}
	f1w.q5o.c6f = w7a(q6j(s4j.w0o));
	f1w.q5o.time = l4a(q6j(s4j.j3f));
	f1w.q5o.a1x = q6j(s4j.x0j);
	f1w.q5o.j8y = u5u(q6j(s4j.m9u));

	
	f1w.e0b.a1x = q6j(s4j.l9u);
	f1w.e0b.v5k = q6j(s4j.k3r);
	f1w.e0b.i4b = j7l(s4j.l2d);
	f1w.e0b.w8d = j7l(s4j.e9e);

	f5p(q6j(s4j.a3t), f1w.e0b);
	
	
	
	let x8z = v6d(s4j.x8z);
	if (x8z != c7k.m8q)
	{
		f1w.e0b.m0k = x8z;
	}
	f1w.e0b.j8y = b3q(q6j(s4j.c9f));
	f1w.e0b.k5h = t7d(s4j.v3l, 0);
	let a3t = j3j(s4j.a3t);
	if (a3t != g3k.h4o)
	{
		f1w.e0b.type= a3t;
	}
	f1w.e0b.u1o = t7d(s4j.z5s, 0);
	f1w.e0b.f3q = b9n(s4j.d4t);
	f1w.e0b.z4t = b9n(s4j.v9g);
	f1w.e0b.g6b = b9n(s4j.n9z);
	f1w.e0b.w7m = b9n(s4j.p8b);

	
	f1w.r7v.m2v = q6j(s4j.r7v);

	
	f1w.s5n.a1x = q6j(s4j.o8j);
	f1w.s5n.w0r = q6j(s4j.k9s);
	f1w.s5n.v1j = j7l(s4j.f1y);
	f1w.s5n.s8x = t7d(s4j.j4c, 0);
	f1w.s5n.w9v = j7l(s4j.z7e);
	f1w.s5n.o0y = u0r(s4j.k8y);

	
	f1w.a1x.a1x = q6j(s4j.a1x);

	
	f1w.l9v = j7l(s4j.l9v);
	f1w.z2f = q1g(q6j(s4j.z2f));
	f1w.b8q = q4o(q6j(s4j.b8q));
	b9s(q6j(s4j.i4e), f1w);

	
	let j8r = t7d(s4j.j8r, 0);
	f1w.j8r.o2q(j8r);

  
  f1w.id.t4x = s4j.t4x;

	return f1w;
}

function m8k(f1w)
{
	let s4j = new s5j();

	
	s4j.j1s = f1w.n6x.d7r.m2v();
	if (f1w.n6x.z0a.m2v.length)
	{
		s4j.s8r = f1w.n6x.z0a.m2v;
		if (f1w.n6x.z0a.l3c)
		{
			s4j.f3a = f1w.n6x.z0a.l3c;
		}
		if (f1w.n6x.z0a.s2q)
		{
			let s8q = new i2j();
			s8q.s2q = f1w.n6x.z0a.s2q;
			s4j.q3b = k3d(s8q);
		}
		if (f1w.n6x.z0a.x4u)
		{
			s4j.l1h = v9n(f1w.n6x.z0a.x4u);
		}
		if (f1w.n6x.z0a.j8y != u4d.h4o)
		{
			s4j.s6h = j8j(f1w.n6x.z0a.j8y);
		}
	}
	s4j.c3v = v9k(f1w.n6x.c6f);
	s4j.w3e = k3x(f1w.n6x.time);
	s4j.d6t = f1w.n6x.a1x;

	
	s4j.a2y = f1w.q5o.d7r.m2v();
	if (f1w.q5o.z0a.m2v.length)
	{
		s4j.l0s = f1w.q5o.z0a.m2v;
		if (f1w.q5o.z0a.l3c)
		{
			s4j.z6a = f1w.q5o.z0a.l3c;
		}
		if (f1w.q5o.z0a.s2q)
		{
			let f8i = new i2j();
			f8i.s2q = f1w.q5o.z0a.s2q;
			s4j.c9z = k3d(f8i);
		}
		if (f1w.q5o.z0a.x4u)
		{
			s4j.e1q = v9n(f1w.q5o.z0a.x4u);
		}
		if (f1w.q5o.z0a.j8y != u4d.h4o)
		{
			s4j.b5o = j8j(f1w.q5o.z0a.j8y);
		}
	}
	s4j.w0o = v9k(f1w.q5o.c6f);
	s4j.j3f = k3x(f1w.q5o.time);
	s4j.x0j = f1w.q5o.a1x;

	
	s4j.l9u = f1w.e0b.a1x;
	s4j.k3r = f1w.e0b.v5k;
	s4j.l2d = k3d(f1w.e0b.i4b);
	s4j.e9e = k3d(f1w.e0b.w8d);
	s4j.x8z = u2l(f1w.e0b.m0k);
	s4j.v3l = r0c(f1w.e0b.k5h);
	s4j.c9f = j8j(f1w.e0b.j8y);
	s4j.a3t = p4q(f1w.e0b.type);
	s4j.z5s = r0c(f1w.e0b.u1o);
	s4j.d4t = v9n(f1w.e0b.f3q);
	s4j.v9g = v9n(f1w.e0b.z4t);
	s4j.n9z = v9n(f1w.e0b.g6b);
	s4j.p8b = v9n(f1w.e0b.w7m);

	
	s4j.r7v = f1w.r7v.m2v;

	
	s4j.o8j = f1w.s5n.a1x;
	s4j.k9s = f1w.s5n.w0r;
	s4j.f1y = k3d(f1w.s5n.v1j);
	s4j.j4c = r0c(f1w.s5n.s8x);
	s4j.z7e = k3d(f1w.s5n.w9v);
	s4j.k8y = s7h(f1w.s5n.o0y);

	
	s4j.a1x = f1w.a1x.a1x;

	
	s4j.l9v = k3d(f1w.l9v);
	s4j.z2f = l8y(f1w.z2f);
	s4j.b8q = k0h(f1w.b8q);
	s4j.i4e = r2h(f1w);

	
	s4j.j8r = r0c(f1w.j8r.v3u());

	return s4j;
}

const o3t  					= "White";
const l2k					= "WhiteTeam";
const b9p 				= "WhiteTeamNumber";
const w3l 					= "WhiteTeamYear";
const w2g 				= "WhiteTeamSeason";
const n2l 			= "WhiteTeamCountry";
const h1t 						= "WhiteRating";
const x3m 							= "WhiteTime";
const q4r 							= "WhiteElo";
const n5e  						= "WhiteTitle";
const l8d						= "WhiteCountry";

const s9l						= "Black";
const z3h					= "BlackTeam";
const g2w 				= "BlackTeamNumber";
const v3j 					= "BlackTeamYear";
const x8y 				= "BlackTeamSeason";
const k7b 			= "BlackTeamCountry";
const l9l 						= "BlackRating";
const f7c 							= "BlackTime";
const l2v 							= "BlackElo";
const w5i  						= "BlackTitle";
const y0a						= "BlackCountry";

const v5p 				= "Event";
const s9f				= "Site";
const q5g 			 	= "EventDate";
const g9o 		 	= "EventEndDate";
const w6p 			 	= "EventSpeed";
const s5k 	 	= "EventCategory";
const f0j 		 	= "EventCountry";
const e6i 			 	= "EventType";
const y6a 		 	= "EventRounds";
const w8z 			 	= "EventTeams";
const h9g		 	= "EventComplete";
const t2u 	= "EventThreePoints";
const q3k	= "EventBoardPoints";

const g5k 							= "Annotator";

const s9g 				 		= "SourceTitle";
const j2c 				 		= "Publication";
const r9f		 		= "SourcePublisher";
const o0f		 		= "PublicationDate";
const d4d 				 		= "SourceDate";
const x3e 		= "SourceVersionNumber";
const l2q 	 		= "SourceVersionDate";
const h0l 			 		= "SourceQuality";

const g3i 					 		    = "Title";

const x6u 							 		= "Date";
const m2y 								= "Result";
const w3r 										= "ECO";
const s3k 									= "Round";

const m7r			 							= "Tags";

const b2l 									= "Setup";
const o8n 										= "FEN";
const b8s 							= "PlyCount";

const z6q      							= "GUID";

const p4z = "(";
const x0c   = ")";
const s5g    = "{";

class i8y
{

constructor()
{
  this.v9e = new b2p();
  this.x3w = new g8o();
  this.c6x = new k2b();
  this.d0x = false;
  this.m6m = false;
  this.x4p = false;
  this.w3j = '';
}

}

class e8u
{

constructor(lines)
{
	this.k0x = new s5j();
	this.p0m = lines;
	this.y2w = 0;
	this.i4c = '';
	this.t1q = 0;
	this.u4l = 0;
	this.s6u = '';
	this.h1y = 0;
	this.j2m = false;
	this.k2q = '';
	this.p3d = '';
	this.m0z = null;
	this.o0n = new r7e();
	this.d0h = '';
	this.t0z = false;
 	this.s4z = false;
	this.o6b = false;
}

f8g()
{
  this.h1y = 0;
	let u9r = new n4q();
	this.m0z = u9r.x5y;
	try
	{
		this.x3z();
	}
	catch (err)
	{
	}
	u9r.c7d = q7g(this.k0x);
  u9r.a3i = this.h1y;
	return u9r;
}

x3z()
{
	this.j2m = false;
	this.v6x();
	if (this.j2m)
	{
		this.h5x = b3s(this.p3d);
		this.m0z.d9r(this.h5x, 1);
	}
 	this.v9m();
}

i8i()
{
	if (this.p0m.length == 0)
	{
		return false;
	}
	if (this.y2w >= this.p0m.length)
	{
		return false;
	}
	else
	{
		this.i4c = this.p0m[this.y2w];
		this.t1q = this.i4c.length;
		this.u4l = 0;
		this.y2w++;
		return true;
	}
}

v6x()
{
	this.o6b = false;
	this.s4z = false;
	while (true)
	{
		if (!this.i8i())
		{
			return;
		}
		this.v9y();
		if (!this.o1f())
		{
			return;
		}
		this.q5z();
	}
}


x2t(b6y)
{
	let w9b = this.s6u.substr(1, this.s6u.length - 1);
	return w9b.toUpperCase() === b6y.toUpperCase();
}

v9m()
{
 	if (this.s6u.length == 0) return;
	this.t0z = false;

	while (this.s6u[0] == '{')
	{
		let h5k = this.t5d();
    let d7u = new i8y();
		this.w1t(h5k, d7u);
    if (!d7u.v9e.f3l())
		{
			this.m0z.r4z(d7u.v9e);
		}
 		if (!d7u.x3w.f3l())
		{
			this.m0z.k7j(d7u.x3w);
		}
		if (!d7u.c6x.f3l())
		{
			this.m0z.l4e(d7u.c6x);
		}
 		h5k = d7u.w3j.trim();
    if (h5k.length)
    {
      
      
      if (h5k.startsWith("[%a") && h5k.length > 7)
      {
        h5k = h5k.substr(7, h5k.length).trim();
      }
      let v7i = this.m0z.v7i();
      if (v7i.length)
      {
        v7i += ' ';
      }
      v7i += h5k;
      this.m0z.m0g(v7i);
		}
		this.v9y();
		if (this.s6u.length == 0)
		{
			return;
		}
	}
	this.x8a(this.m0z.i7v(), this.m0z.h5x());
}

x8a(e4v, u8i)
{
  let l3h = e4v.v0z();
  let g0t = u8i.v0z();

	let j3l = null;
 	let a0b = new u3g();

	do
	{
		if (this.s6u == p4z)
		{
			if (!j3l)
			{
				throw "error";
			}
			if (!this.v9y())
			{
				throw "error";
			}

 			g0t.v3v(l3h.u7k.l3n());
			g0t.o4n(a0b);
			this.m0z.v3v(l3h); 
      this.x8a(l3h, g0t);
			this.m0z.v1s(l3h); 
			g0t.v1s(l3h.u7k.l3n());

			while (this.v9y())
			{
				if (this.s6u != p4z)
				{
					break;
				}
				if (!this.v9y())
				{
					throw "error";
				}
        g0t.v3v(l3h.u7k.l3n());
				g0t.o4n(a0b);
				this.m0z.v3v(l3h); 
				this.x8a(l3h, g0t);
				this.m0z.v1s(l3h);  
				g0t.v1s(l3h.u7k.l3n());
			}
		}

		if (this.s6u == x0c)
		{
			break;
		}

		if (
			this.s6u == "1-0" ||
			this.s6u == "2-0" ||
			this.s6u == "0-1" ||
			this.s6u == "0-2" ||
			this.s6u == "1/2-1/2" ||
			this.s6u == "1-1" ||
			this.s6u == "*" ||
			this.s6u == "**" ||
			this.s6u == "-*" ||
			this.s6u == "1-0*" ||
			this.s6u == "2-0*" ||
			this.s6u == "0-1*" ||
			this.s6u == "0-2*" ||
			this.s6u == "1/2-1/2*" ||
			this.s6u == "1-1*" ||
			this.s6u == "2-00*" ||
			this.s6u == "00-2*")
			break;

		if (this.s6u[0] == '$')
		{
			if (!j3l)
			{
				throw "error";
			}
			let i1q = d6y(this.s6u);
			if (i1q != s2m.h4o)
			{
				j3l.x9n(i1q);
				continue;
			}
			let style = i7x(this.s6u);
			if (style != o3q.h4o)
			{
				j3l.u2q(style);
				continue;
			}
			let value = e6s(this.s6u);
			if (value != h1r.h4o)
			{
				j3l.x6r(value);
				continue;
			}
			let n3f = a9e(this.s6u);
			if (n3f != u9e.h4o)
			{
				j3l.k3f(n3f);
				continue;
			}
			continue;
		}
		if (this.s6u[0] == '{')
		{
			let h5k = this.t5d();
      let d7u = new i8y();
  		this.w1t(h5k, d7u);
      if (!d7u.v9e.f3l())
      {
		  	if (j3l)
			  {
				  j3l.j6x(d7u.v9e);
				}
			}
   		if (!d7u.x3w.f3l())
      {
				if (j3l)
				{
					j3l.x5l(d7u.x3w);
				}
			}
   		if (!d7u.c6x.f3l())
      {
				if (j3l)
				{
					j3l.p5o(d7u.c6x);
				}
			}
      if (d7u.m6m)
      {
				if (j3l)
				{
					j3l.l0m();
				}
			}
      if (d7u.x4p)
      {
				if (j3l)
				{
					j3l.q2q();
				}
			}
   		h5k = d7u.w3j.trim();
      if (!h5k.length)
      {
        continue;
      }
			if (j3l)
			{
        let p3y = j3l.p3y();
        if (p3y.length)
        {
          p3y += ' ';
        }
        p3y += h5k;
				j3l.f2z(p3y);
			}
			else
			{
        if (this.d0h.length)
        {
   				this.d0h += ' ';
        }
				this.d0h += h5k;
				this.t0z = true;
			}
			continue;
		}
		if (!this.s9u())
		{
			continue;
		}
		let u3s = false;
		if (this.s6u[this.s6u.length] == '*')
		{
			this.s6u = this.s6u.substr(0, this.s6u.length - 1);
			u3s = true;
		}
 		let k9n = this.l9g(this.s6u);
    let l3n = p8w(g0t, this.s6u);
 		a0b = g0t.a0b();
		g0t.v1s(l3n);
		let u7k = k8a(l3n);
    u7k.u2q(k9n);
    this.m0z.h8t(l3h, u7k);
		j3l = l3h.u7k;
		if (this.t0z)
		{
			j3l.p0y(this.d0h);
			this.t0z = false;
      this.d0h = '';
		}
		if (u3s)
		{
			break;
		}
	} while (this.v9y());
}

l9g(w9b)
{
	if (w9b.endsWith("??"))
	{
		w9b = w9b.subString(0, w9b.length-2);
		return o3q.t8t;
	}
	else if (w9b.endsWith("!!"))
	{
		w9b = w9b.subString(0, w9b.length-2);
		return o3q.n5w;
	}
	else if (w9b.endsWith("?!"))
	{
		w9b = w9b.subString(0, w9b.length-2);
		return o3q.i9s;
	}
	else if (w9b.endsWith("!?"))
	{
		w9b = w9b.subString(0, w9b.length-2);
		return o3q.r1f;
	}
	else if (w9b.endsWith("?"))
	{
		w9b = w9b.subString(0, w9b.length-1);
		return o3q.v3z;
	}
	else if (w9b.endsWith("!"))
	{
		w9b = w9b.subString(0, w9b.length-1);
		return o3q.w5z;
	}
	else
	{
		return o3q.h4o;
	}
}

s9u()
{
	let a0w = this.s6u.length;
	let l3h = -1;
	for (let i = 0; i < a0w; i++)
	{
		if (this.s6u[i] == '.')
		{
			l3h = i;
		}
	}
	if (l3h != -1)
	{
		this.s6u = this.s6u.substr(l3h + 1 , a0w);
	}
	return this.s6u.length != 0;
}

v9y()
{
	this.s6u = "";
	let x5n = '';
	let index = 0;
	let a0w = 0;
	while (true)
	{
		let v1x = 0;
		if (this.u4l < this.t1q)
		{
			v1x = this.i4c[this.u4l];
		}
		else
		{
			v1x = 0;
		}
		if (!v1x)
		{
			if (a0w)
			{
				break;
			}
			if (!this.i8i())
			{
				return false;
			}
			continue;
		}
		if (v1x == ';')
		{
			if (!this.i8i())
			{
				return false;
			}
			continue;
		}
		if (v1x == '(')
		{
			if (a0w)
			{
				break;
			}
			else
			{
				this.u4l++;
				this.s6u = p4z;
				return true;
			}
		}
		if (v1x == ')')
		{
			if (a0w)
			{
				break;
			}
			else
			{
				this.u4l++;
				this.s6u = x0c;
				return true;
			}
		}
		if (v1x == '{')
		{
			if (a0w)
			{
				break;
			}
			else
			{
				this.u4l++;
				this.s6u = s5g;
				return true;
			}
		}
		if (v1x == ' ' || v1x == '\r' || v1x == '\n')
		{
			if (a0w)
			{
				this.u4l++;
				break;
			}
			else
			{
				this.u4l++;
				continue;
			}
		}
		x5n += v1x;
		index++;
		a0w++;
		this.u4l++;
	}
	if (index)
	{
		this.s6u += x5n;
	}
	return this.s6u.length != 0;
}

t5d()
{
	let w9b = '';
	let x5n = '';
	let index = 0;
	let e2w = 0;
	while (true)
	{
		let v1x = 0;
		if (this.u4l < this.t1q)
		{
			v1x = this.i4c[this.u4l];
		}
		else
		{
			v1x = 0;
		}
		if (!v1x)
		{
			if (!this.i8i())
			{
				break;
			}
			if (index > 0)
			{
				x5n += ' '; 
				index++;
			}
			continue;
		}
		if (v1x == '{')
		{
			e2w++;
		}
		if (v1x == '}')
		{
			if (e2w)
			{
				e2w--;
			}
			else
			{
				this.u4l++;
				break;
			}
		}
		x5n += v1x;
		index++;
		this.u4l++;
	}
	if (index)
	{
		w9b += x5n;
	}
	return w9b.trim();
}

f0w()
{
	this.k2q = "";

	let i4t = 0;
	let a0w = this.i4c.length;
	for (let i = a0w - 1; i >= 0; i--)
	{
		if (this.i4c[i] == ']')
		{
			i4t = i;
			break;
		}
	}
	let index = 0;
	let l9p = false;
	let x5n = '';
	while (true)
	{
		let v1x = 0;
		if (this.u4l < this.t1q)
		{
			v1x = this.i4c[this.u4l];
		}
		else
		{
			v1x = 0;
		}
		if (!v1x)
		{
			if (!this.i8i())
			{
				break;
			}
			continue;
		}
		if (v1x == '\"')
		{
			l9p = true;
			this.u4l++;
			continue;
		}
		if (v1x == ']')
		{
			if (this.u4l == i4t)
			{
				this.u4l++;
				break;
			}
		}
		if (l9p)
		{
			x5n += v1x;
			index++;
		}
		this.u4l++;
	}
	if (index)
	{
		this.k2q += x5n;
	}
}

o1f()
{
	if (this.s6u.length == 0)
	{
		return false;
	}
	if (this.s6u[0] != '[')
	{
		return false;
	}
	
	let index = this.u4l;
	let v1z = false;
	while (index < this.t1q)
	{
		let v1x = this.i4c[index++];
		if (v1x == '\"' && this.i4c[index] == ']')
		{
			index++;
			v1z = true;
			continue;
		}
		if (v1x == '\r' || v1x == '\n')
		{
			break;
		}
		if (v1z)
		{
			v1z = false;
			break;
		}
	}
	return v1z;
}

q5z()
{
	
	if (this.x2t(o3t))
	{
		this.f0w();
		this.k0x.j1s = this.k2q;
		return;
	}
	if (this.x2t(l2k))
	{
		this.f0w();
		this.k0x.s8r = this.k2q;
		return;
	}
	if (this.x2t(b9p))
	{
		this.f0w();
		this.k0x.f3a = this.k2q;
		return;
	}
	if (this.x2t(w3l))
	{
		this.f0w();
		this.k0x.q3b = this.k2q;
		return;
	}
	if (this.x2t(w2g))
	{
		this.f0w();
		this.k0x.l1h = this.k2q;
		return;
	}
	if (this.x2t(n2l))
	{
		this.f0w();
		this.k0x.s6h = this.k2q;
		return;
	}
	if (this.x2t(q4r) || this.x2t(h1t))
	{
		this.f0w();
		this.k0x.c3v = this.k2q;
		return;
	}
	if (this.x2t(x3m))
	{
		this.f0w();
		this.k0x.w3e = this.k2q;
		return;
	}
	if (this.x2t(n5e))
	{
		this.f0w();
		this.k0x.d6t = this.k2q;
		return;
	}
	if (this.x2t(l8d))
	{
		this.f0w();
		this.k0x.m9i = this.k2q;
		return;
	}

	
	if (this.x2t(s9l))
	{
		this.f0w();
		this.k0x.a2y = this.k2q;
		return;
	}
	if (this.x2t(z3h))
	{
		this.f0w();
		this.k0x.l0s = this.k2q;
		return;
	}
	if (this.x2t(g2w))
	{
		this.f0w();
		this.k0x.z6a = this.k2q;
		return;
	}
	if (this.x2t(v3j))
	{
		this.f0w();
		this.k0x.c9z = this.k2q;
		return;
	}
	if (this.x2t(x8y))
	{
		this.f0w();
		this.k0x.e1q = this.k2q;
		return;
	}
	if (this.x2t(k7b))
	{
		this.f0w();
		this.k0x.b5o = this.k2q;
		return;
	}
	if (this.x2t(l2v) || this.x2t(l9l))
	{
		this.f0w();
		this.k0x.w0o = this.k2q;
		return;
	}
	if (this.x2t(f7c))
	{
		this.f0w();
		this.k0x.j3f = this.k2q;
		return;
	}
	if (this.x2t(w5i))
	{
		this.f0w();
		this.k0x.x0j = this.k2q;
		return;
	}
	if (this.x2t(y0a))
	{
		this.f0w();
		this.k0x.m9u = this.k2q;
		return;
	}

	
	if (this.x2t(v5p))
	{
		this.f0w();
		this.k0x.l9u = this.k2q;
		return;
	}
	if (this.x2t(s9f))
	{
		this.f0w();
		this.k0x.k3r = this.k2q;
		return;
	}
	if (this.x2t(q5g))
	{
		this.f0w();
		this.k0x.l2d = this.k2q;
		return;
	}
	if (this.x2t(g9o))
	{
		this.f0w();
		this.k0x.e9e = this.k2q;
		return;
	}
	if (this.x2t(w6p))
	{
		this.f0w();
		this.k0x.x8z = this.k2q;
		return;
	}
	if (this.x2t(s5k))
	{
		this.f0w();
		this.k0x.v3l = this.k2q;
		return;
	}
	if (this.x2t(f0j))
	{
		this.f0w();
		this.k0x.c9f = this.k2q;
		return;
	}
	if (this.x2t(e6i))
	{
		this.f0w();
		this.k0x.a3t = this.k2q;
		return;
	}
	if (this.x2t(y6a))
	{
		this.f0w();
		this.k0x.z5s = this.k2q;
		return;
	}
	if (this.x2t(w8z))
	{
		this.f0w();
		this.k0x.d4t = this.k2q;
		return;
	}
	if (this.x2t(h9g))
	{
		this.f0w();
		this.k0x.v9g = this.k2q;
		return;
	}
	if (this.x2t(t2u))
	{
		this.f0w();
		this.k0x.n9z = this.k2q;
		return;
	}
	if (this.x2t(q3k))
	{
		this.f0w();
		this.k0x.p8b = this.k2q;
		return;
	}

	
	if (this.x2t(g5k))
	{
		this.f0w();
		this.k0x.r7v = this.k2q;
		return;
	}

	
	if (this.x2t(s9g))
	{
		this.f0w();
		this.k0x.o8j = this.k2q;
		return;
	}
	if (this.x2t(j2c))
	{
		this.f0w();
		this.k0x.o8j = this.k2q;
		return;
	}
	if (this.x2t(r9f))
	{
		this.f0w();
		this.k0x.k9s = this.k2q;
		return;
	}
	if (this.x2t(d4d))
	{
		this.f0w();
		this.k0x.f1y = this.k2q;
		return;
	}
	if (this.x2t(o0f))
	{
		this.f0w();
		this.k0x.f1y = this.k2q;
		return;
	}
	if (this.x2t(x3e))
	{
		this.f0w();
		this.k0x.j4c = this.k2q;
		return;
	}
	if (this.x2t(l2q))
	{
		this.f0w();
		this.k0x.z7e = this.k2q;
		return;
	}
	if (this.x2t(h0l))
	{
		this.f0w();
		this.k0x.k8y = this.k2q;
		return;
	}

	
	if (this.x2t(g3i))
	{
		this.f0w();
		this.k0x.a1x = this.k2q;
		return;
	}

	
	if (this.x2t(x6u))
	{
		this.f0w();
		this.k0x.l9v = this.k2q;
		return;
	}
	if (this.x2t(m2y))
	{
		this.f0w();
		this.k0x.z2f = this.k2q;
		return;
	}
	if (this.x2t(w3r))
	{
		this.f0w();
		this.k0x.b8q = this.k2q;
		return;
	}
	if (this.x2t(s3k))
	{
		this.f0w();
		this.k0x.i4e = this.k2q;
		return;
	}

	
	if (this.x2t(m7r))
	{
		this.f0w();
		this.k0x.j8r = this.k2q;
		return;
	}

	
	if (this.x2t(b2l))
	{
		this.f0w();
		return;
	}
	if (this.x2t(o8n))
	{
		this.f0w();
		if (this.k2q.length == 0 || this.k2q == "?")
		{
			return;
		}
		this.j2m = true;
		this.p3d = this.k2q;
		return;
	}
	if (this.x2t(b8s))
	{
		this.f0w();
		this.h1y = x2a(this.k2q, 0);
		return;
	}
  
 	if (this.x2t(z6q))
	{
		this.f0w();
		this.k0x.t4x = this.k2q;
		return;
	}

}

l8p(h5k)
{
	let r1m = new b2p();
	let w9b = h5k.substr(6, h5k.length - 6);
	let j6g = w9b.split(",");
	for (const s of j6g)
	{
		if (s.length < 5)
		{
			continue;
		}
		let o3y = f9c(s.substr(1, 2));
		let y9w = f9c(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let t0m = s6m(o3y, y9w, k8b.o5y);
			r1m.add(t0m);
		}
		else if (s[0] == 'G')
		{
			let t0m = s6m(o3y, y9w, k8b.w3t);
			r1m.add(t0m);
		}
		else if (s[0] == 'Y')
		{
			let t0m = s6m(o3y, y9w, k8b.f1d);
			r1m.add(t0m);
		}
	}
	return r1m;
}

k4e(h5k)
{
	let n6e = new g8o();
	let w9b = h5k.substr(6, h5k.length - 6);
	let j6g = w9b.split(",");
	for (const s of j6g)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let b1b = f9c(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let r6x = u0d(b1b, t8s.y6v);
			n6e.add(r6x);
		}
		else if (s[0] == 'G')
		{
      let r6x = u0d(b1b, t8s.v0n);
			n6e.add(r6x);
		}
		else if (s[0] == 'Y')
		{
      let r6x = u0d(b1b, t8s.p4b);
			n6e.add(r6x);
		}
	}
	return n6e;
}

j0u(h5k)
{
	let w9b = h5k.substr(6, h5k.length - 6);
	let l3h = w9b.indexOf("]");
	if (l3h != -1)
	{
		let c6x = new k2b();
		let value = x2a(w9b.substr(0, l3h), 0);
		c6x.o2q(value);
		return c6x;
	}
	else
	{
		return new k2b();
	}
}


w1t(h5k, d7u)
{
	if (
		h5k.startsWith("[%cal") ||
    h5k.startsWith("[%csb") ||
		h5k.startsWith("[%csl") ||
		h5k.startsWith("[%mdl") ||
		h5k.startsWith("[%evp") ||
		h5k.startsWith("[%eval") ||
		h5k.startsWith("[%emt") ||
		h5k.startsWith("[%tqu") ||
		h5k.startsWith("[%tqu") ||
		h5k.startsWith("[%pws") ||
		h5k.startsWith("[%pth") ||
		h5k.startsWith("[%eog"))
	{
		let e3g = 0;
		{
     	let l7e = h5k.indexOf("[%cal");
			if (l7e != -1)
			{
        let g1s = h5k.indexOf("]", l7e);
				if (g1s != -1)
				{
     			let i3k = h5k.substring(l7e, g1s + 1);
					d7u.v9e = this.l8p(i3k).v0z();
					if (g1s > e3g) e3g = g1s;
				}
			}
		}
		{
     	let l7e = h5k.indexOf("[%csb");
   		if (l7e != -1)
			{
        let g1s = h5k.indexOf("]", l7e);
				if (g1s != -1)
				{
          let g7z = h5k.substring(l7e, g1s + 1);
					d7u.x3w = this.k4e(g7z).v0z();
					if (g1s > e3g) e3g = g1s;
				}
			}
		}
		{
      let l7e = h5k.indexOf("[%csl");
			if (l7e != -1)
			{
        let g1s = h5k.indexOf("]", l7e);
				if (g1s != -1)
				{
          let g7z = h5k.substring(l7e, g1s + 1);
					d7u.x3w = this.k4e(g7z).v0z();
					if (g1s > e3g) e3g = g1s;
				}
			}
		}
		{
      let l7e = h5k.indexOf("[%mdl");
			if (l7e != -1)
			{
        let g1s = h5k.indexOf("]", l7e);
				if (g1s != -1)
				{
          let t3a = h5k.substring(l7e, g1s + 1);
					d7u.c6x = this.j0u(t3a).v0z();
					if (g1s > e3g) e3g = g1s;
				}
			}
		}
		{
      let l7e = h5k.indexOf("[%evp");
			if (l7e != -1)
			{
        let g1s = h5k.indexOf("]", l7e);
				if (g1s != -1)
				{
					if (g1s > e3g) e3g = g1s;
				}
			}
		}
		{
      let l7e = h5k.indexOf("[%eval");
			if (l7e != -1)
			{
        let g1s = h5k.indexOf("]", l7e);
				if (g1s != -1)
				{
					if (g1s > e3g) e3g = g1s;
				}
			}
		}
		{
      let l7e = h5k.indexOf("[%emt");
			if (l7e = -1)
			{
        let g1s = h5k.indexOf("]", l7e);
				if (g1s != -1)
				{
					if (g1s > e3g) e3g = g1s;
				}
			}
		}
		{
      let l7e = h5k.indexOf("[%tqu");
			if (l7e != -1)
			{
        let g1s = h5k.indexOf("]", l7e);
				if (g1s != -1)
				{
					if (g1s > e3g) e3g = g1s;
				}
			}
		}
		{
      let l7e = h5k.indexOf("[%pws");
			if (l7e != -1)
			{
        let g1s = h5k.indexOf("]", l7e);
				if (g1s != -1)
				{
          d7u.d0x = true;
					if (g1s > e3g) e3g = g1s;
				}
			}
		}
		{
      let l7e = h5k.indexOf("[%pth");
			if (l7e != -1)
			{
        let g1s = h5k.indexOf("]", l7e);
				if (g1s != -1)
				{
          d7u.m6m = true;
					if (g1s > e3g) e3g = g1s;
				}
			}
		}
		{
      let l7e = h5k.indexOf("[%eog");
			if (l7e != -1)
			{
        let g1s = h5k.indexOf("]", l7e);
				if (g1s != -1)
				{
					d7u.x4p = true; 
					if (g1s > e3g) e3g = g1s;
				}
			}
		}
    d7u.w3j = h5k.substring(e3g + 1);
	}
	else
	{
		d7u.w3j = h5k;
	}
}

}

class y0u
{

constructor()
{
  this.a3i = 0;
	this.c7d = new s5j();
	this.x5y = new w4t();
}

v0z()
{
	let g2a = new y0u();
  g2a.a3i = this.a3i;
	g2a.c7d = this.c7d.v0z();
	g2a.x5y = this.x5y.v0z();
	return g2a;
}

}

class s5j
{

constructor()
{
	this.j1s = '';
	this.s8r = '';
	this.f3a = '';
	this.q3b = '';
	this.l1h = '';
	this.s6h = '';
	this.c3v = '';
	this.w3e = '';
	this.d6t = '';
  this.m9i = '';
	this.a2y = '';
	this.l0s = '';
	this.z6a = '';
	this.c9z = '';
	this.e1q = '';
	this.b5o = '';
	this.w0o = '';
	this.j3f = '';
	this.x0j = '';
  this.m9u = '';
	this.l9u = '';
	this.k3r = '';
	this.l2d = '';
	this.e9e = '';
	this.x8z = '';
	this.v3l = '';
	this.c9f = '';
	this.a3t = '';
	this.z5s = '';
	this.d4t = '';
	this.v9g = '';
	this.n9z = '';
	this.p8b = '';
	this.r7v = '';
	this.o8j = '';
	this.k9s = '';
	this.f1y = '';
	this.j4c = '';
	this.z7e = '';
	this.k8y = '';
	this.a1x = '';
	this.l9v = '';
	this.z2f = '';
	this.b8q = '';
	this.i4e = '';
	this.j8r = '';
  this.t4x = '';
}

v0z()
{
	let k2l = new s5j();

	k2l.j1s = this.j1s;
	k2l.s8r = this.s8r;
	k2l.f3a = this.f3a;
	k2l.q3b = this.q3b;
	k2l.l1h = this.l1h;
	k2l.s6h = this.s6h;
	k2l.c3v = this.c3v;
	k2l.w3e = this.w3e;
	k2l.d6t = this.d6t;
	k2l.m9i = this.m9i;

	k2l.a2y = this.a2y;
	k2l.l0s = this.l0s;
	k2l.z6a = this.z6a;
	k2l.c9z = this.c9z;
	k2l.e1q = this.e1q;
	k2l.b5o = this.b5o;
	k2l.w0o = this.w0o;
	k2l.j3f = this.j3f;
	k2l.x0j = this.x0j;
	k2l.m9u = this.m9u;

	k2l.l9u = this.l9u;
	k2l.k3r = this.k3r;
	k2l.l2d = this.l2d;
	k2l.e9e = this.e9e;
	k2l.x8z = this.x8z;
	k2l.v3l = this.v3l;
	k2l.c9f = this.c9f;
	k2l.a3t = this.a3t;
	k2l.z5s = this.z5s;
	k2l.d4t = this.d4t;
	k2l.v9g = this.v9g;
	k2l.n9z = this.n9z;
	k2l.p8b = this.p8b;

	k2l.r7v = this.r7v;

	k2l.o8j = this.o8j;
	k2l.k9s = this.k9s;
	k2l.f1y = this.f1y;
	k2l.j4c = this.j4c;
	k2l.z7e = this.z7e;
	k2l.k8y = this.k8y;

	k2l.a1x = this.a1x;

	k2l.l9v = this.l9v;
	k2l.z2f = this.z2f;
	k2l.b8q = this.b8q;
	k2l.i4e = this.i4e;

	k2l.j8r = this.j8r;
 	k2l.t4x = this.t4x;

	return k2l;
}

}


const m9w =
[
		[ u4d.h4o, 				  									"",											            "", 																	"",   ""    ],
		[ u4d.h5j, 										  "Afghanistan",											"Afghanistan", 												"af", "AFG" ],
		[ u4d.k3p, 									 	"AlandIslands",										  "Aland", 															"ax", "ALA" ],
		[ u4d.k7f,  											 	"Albania",													"Albania", 														"al", "ALB" ],
		[ u4d.u0g,  											 	"Algeria",													"Algeria", 														"dz", "DZA" ],
		[ u4d.y3r,  								 	"AmericanSamoa",										"American Samoa", 										"as", "ASM" ],
		[ u4d.c3y,  											 	"Andorra",													"Andorra", 														"ad", "AND" ],
		[ u4d.u9y,                           "Angola",													  "Angola", 														"ao", "AGO" ],
		[ u4d.o0l,  											  "Anguilla",												  "Anguilla", 													"ai", "AIA" ],
		[ u4d.h2i,  										  "Antarctica",											  "Antarctica", 												"aq", "ATA" ],
		[ u4d.j4x,  								  "AntiguaBarbuda",									  "Antigua & Barbuda", 									"ag", "ATG" ],
		[ u4d.v2g,  										 	"Argentina",												"Argentina", 													"ar", "ARG" ],
		[ u4d.a4m,  											 	"Armenia",													"Armenia",														"am", "ARM" ],
		[ u4d.t1o,  												 	"Aruba",														"Aruba",															"aw", "ABW" ],
		[ u4d.p0u,  										 	"Australia",												"Australia",													"au", "AUS" ],
		[ u4d.m5m,  											 	"Austria",													"Austria",											 			"at", "AUT" ],
		[ u4d.e2t,  										  "Azerbaijan",											  "Azerbaijan",													"az", "AZE" ],
		[ u4d.s9t,  											 	"Bahamas",													"Bahamas",														"bs", "BHS" ],
		[ u4d.s2p,  											 	"Bahrain",													"Bahrain",														"bh", "BHR" ],
		[ u4d.v7l,  										  "Bangladesh",											  "Bangladesh",													"bd", "BGD" ],
		[ u4d.i9y,  											  "Barbados",												  "Barbados",														"bb", "BRB" ],
		[ u4d.p2o,  								 	"BasqueCountry",	 									"Basque Country",     								"x1", "XX1" ], 
		[ u4d.u3a,  											 	"Belarus",													"Belarus",														"by", "BLR" ],
		[ u4d.i5c,  											 	"Belgium",													"Belgium",														"be", "BEL" ],
		[ u4d.x6q,  												  "Belize",													  "Belize",															"bz", "BLZ" ],
		[ u4d.d1z,  												 	"Benin",														"Benin",															"bj", "BEN" ],
		[ u4d.o6l,  											 	"Bermuda",													"Bermuda",														"bm", "BMU" ],
		[ u4d.q8u,  												  "Bhutan",													  "Bhutan",															"bt", "BTN" ],
		[ u4d.p5f,  												"Bolivia",													"Bolivia",														"bo", "BOL" ],
		[ u4d.c6e,  						  "BosniaHerzegovina",       				  "Bosnia & Herzegovina", 							"ba", "BIH" ], 
		[ u4d.o4w,  											  "Botswana",                      	  "Botswana",														"bw", "BWA" ],
		[ u4d.m6x,  									  "BouvetIsland",                 		"Bouvet",															"bv", "BVT" ],
		[ u4d.s3x,  												  "Brazil",                        	  "Brazil",															"br", "BRA" ],
		[ u4d.m0i,  	 	"BritishIndianOceanTerritory",			"British Indian Ocean Territory", 		"io", "IOT" ],
		[ u4d.c7c, 							 	"BruneiDarussalam",								  "Brunei",															"bn", "BRN" ], 
		[ u4d.c9c,  											  "Bulgaria",												  "Bulgaria", 													"bg", "BGR" ],
		[ u4d.s5t, 										  "BurkinaFaso",											"Burkina Faso",												"bf", "BFA" ],
		[ u4d.o1t,  											 	"Burundi",													"Burundi",														"bi", "BDI" ],
		[ u4d.u5n,  											  "Cambodia",												  "Cambodja",														"kh", "KHM" ],
		[ u4d.q0t,  											  "Cameroon",												  "Cameroon",														"cm", "CMR" ],
		[ u4d.f7b,  												  "Canada",													  "Canada",															"ca", "CAN" ],
		[ u4d.m7o,  										  "CapeVerde",												"Cape Verde",													"cv", "CPV" ], 
		[ u4d.c7a,  										  "Catalonia",												"Catalonia",													"x2", "XX2" ], 
		[ u4d.w4r,  								  "CaymanIslands",										"Cayman Islands",											"ky", "CYM" ],
		[ u4d.f1k,  				  "CentralAfricanRepublic",					  "Central African Republic",						"cf", "CAF" ],
		[ u4d.f0d,  													  "Chad",														  "Chad",																"td", "TCD" ],
		[ u4d.y9v,  												 	"Chile",														"Chile",															"cl", "CHL" ],
		[ u4d.w4f,  												 	"China",														"China",															"cn", "CHN" ],
		[ u4d.m2o,  							 	"ChristmasIsland",									"Christmas",													"cx", "CXR" ],
		[ u4d.v0e,  					 	"CocosKeelingIslands",							"Cocos (Keeling)",										"cc", "CCK" ], 
		[ u4d.m1h,  											  "Colombia",												  "Colombia",														"co", "COL" ],
		[ u4d.b7x,  											 	"Comoros",													"Comoros",														"km", "COM" ],
		[ u4d.y4r,  												 	"Congo",														"Congo-Brazzaville", 						    	"cg", "COG" ],
		[ u4d.t1f,  			 	"CongoDemocraticRepublic",					"Congo-Kinshasa(Zaire)",						  "cd", "COD" ],
		[ u4d.z3l,  									 	"CookIslands",											"Cook Islands",											 	"ck", "COK" ],
		[ u4d.v4r,  											"CostaRica",												"Costa Rica",												 	"cr", "CRI" ],
		[ u4d.r7z,  												"Croatia",													"Croatia",														"hr", "HRV" ],
		[ u4d.e1b,  													  "Cuba",														  "Cuba",															 	"cu", "CUB" ],
		[ u4d.s9a,  												"Curacao",													"Curacao",											  		"cw", "CUW" ],
		[ u4d.e3u,  												  "Cyprus",													  "Cyprus",														 	"cy", "CYP" ],
		[ u4d.c8a,  									      "Czechia",										      "Czech Republic", 										"cz", "CZE" ],
		[ u4d.y4u,  										  "CoteIvoire",	   					 				  "Cote d'Ivoire",											"ci", "CIV" ],
		[ u4d.q6t,  												"Denmark",													"Denmark",													  "dk", "DNK" ],
		[ u4d.d1l,  											  "Djibouti",												  "Djibouti",													 	"dj", "DJI" ],
		[ u4d.a7w,  											  "Dominica",												  "Dominica",													 	"dm", "DMA" ],
		[ u4d.r5l,  							"DominicanRepublic",								"Dominican Republic",								 	"do", "DOM" ],
		[ u4d.h6r,  												"Ecuador",													"Ecuador",													 	"ec", "ECU" ],
		[ u4d.s6c,  													"Egypt",														"Egypt", 														 	"eg", "EGY" ],
		[ u4d.h0u,  										  "ElSalvador",											  "El Salvador",												"sv", "SLV" ],
		[ u4d.c7i,  												"England",													"England",														"x3", "GBR" ],
		[ u4d.c4y,  							  "EquatorialGuinea",								  "Equatorial Guinea",									"gq", "GNQ" ], 
		[ u4d.y0k,  												"Eritrea",													"Eritrea",														"er", "ERI" ],
		[ u4d.x6w,  												"Estonia",													"Estonia",														"ee", "EST" ],
		[ u4d.q9e,  											  "Ethiopia",												  "Ethiopia",													 	"et", "ETH" ],
		[ u4d.t0w,  								"FalklandIslands",									"England",														"fk", "FLK" ], 
		[ u4d.m6d,  									  "FaroeIslands",										  "Faroes",														 	"fo", "FRO" ],
		[ u4d.q8i,  													  "Fiji",														  "Fiji",															 	"fj", "FJI" ],
		[ u4d.m0e,  												"Finland",													"Finland",														"fi", "FIN" ],
		[ u4d.c4t,  												  "France",													  "France",														 	"fr", "FRA" ],
		[ u4d.z8x,  									  "FrenchGuiana",										  "Guyana", 														"gf", "GUF" ], 
		[ u4d.z4q,  								"FrenchPolynesia",									"Tahiti(French Polinesia)", 					"pf", "PYF" ], 
		[ u4d.k0o,  			"FrenchSouthernTerritories",				"French Southern and Antarctic Lands","tf", "ATF" ],
		[ u4d.q3d,  													"Gabon",														"Gabon",															"ga", "GAB" ], 
		[ u4d.z6e,  												  "Gambia",													  "Gambia",															"gm", "GMB" ],
		[ u4d.r8a,  												"Georgia",													"Georgia",														"ge", "GEO" ],
		[ u4d.w4c,  												"Germany",													"Germany",														"de", "DEU" ],
		[ u4d.b5d, 													  "Ghana",														"Ghana",															"gh", "GHA" ],
		[ u4d.z6i,  											"Gibraltar",												"Gibraltar",													"gi", "GIB" ],
		[ u4d.i3w,  												  "Greece",													  "Greece",															"gr", "GRC" ],
		[ u4d.p4l,  											"Greenland",												"Greenland",													"gl", "GRL" ],
		[ u4d.n0p,  												"Grenada",													"Grenada",														"gd", "GRD" ],
		[ u4d.m3q,  										  "Guadeloupe",											  "Guadeloupe",													"gp", "GLP" ],
		[ u4d.i2r,  													  "Guam",														  "Guam",																"gu", "GUM" ],
		[ u4d.p8e,  											"Guatemala",												"Guatemala",													"gt", "GTM" ],
		[ u4d.f8q,  											  "Guernsey",												  "Guernsey",														"gg", "GGY" ], 
		[ u4d.v9z,  												  "Guinea",													  "Guinea",															"gn", "GIN" ],
		[ u4d.z4y,  									  "GuineaBissau",										  "Guinea-Bissau",											"gw", "GNB" ],
		[ u4d.z8i,  												  "Guyana",													  "Guyana",															"gy", "GUY" ],
		[ u4d.q3u,  													"Haiti",														"Haiti",															"ht", "HTI" ],
		[ u4d.o1n, 			"HeardIslandMcDonaldIslands", 			"Australia",   									  		"hm", "HMD" ],
		[ u4d.a8z,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ u4d.e5v,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ u4d.p6f,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ u4d.i0w,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ u4d.r1d,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ u4d.l2e,  												 	"India",														"India",															"in", "IND" ],
		[ u4d.c4n,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ u4d.e0r,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ u4d.d7h,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ u4d.w2q,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ u4d.d2i,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ u4d.h4n,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ u4d.a9l,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ u4d.n2v,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ u4d.v0v,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], 
		[ u4d.g9p,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ u4d.e2i,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ u4d.r2z,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ u4d.y1o,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ u4d.n5u,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ u4d.o2f,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ u4d.z3f,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], 
		[ u4d.u7r,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], 
		[ u4d.y1c,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ u4d.i1n,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ u4d.s5b,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ u4d.t3r,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ u4d.s9x, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ u4d.i4z,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ u4d.s9w, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ u4d.w9k,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ u4d.z6z,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ u4d.o5b,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ u4d.v4y,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ u4d.i8v,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ u4d.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ u4d.h5v,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ u4d.n8h,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ u4d.j9o,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ u4d.k5l,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ u4d.u5x,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ u4d.m0h, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ u4d.a9k,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ u4d.q2z,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ u4d.x3j,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ u4d.x2u,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ u4d.r4a,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ u4d.j9e,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ u4d.y7j,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ u4d.n6m,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ u4d.x3g,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ u4d.v4l,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ u4d.a4s,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ u4d.j8h,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ u4d.j2s,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ u4d.j8f,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ u4d.u2f,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ u4d.m0f, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ u4d.k1p,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ u4d.m4z,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ u4d.m8m,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ u4d.f7q,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ u4d.y6p, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ u4d.u9u,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ u4d.p1z,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ u4d.g3t,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ u4d.r2m,  													"Niger",														"Niger",															"ne", "NER" ],
		[ u4d.r1y,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ u4d.r5e,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ u4d.p2v,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ u4d.e0j,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], 
		[ u4d.u1k,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ u4d.e4e,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ u4d.h5q,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ u4d.s2t,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ u4d.w1q,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ u4d.x9g,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ u4d.z6b,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ u4d.x1n,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ u4d.u0e,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ u4d.h9n,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ u4d.g0c,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ u4d.i5r,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ u4d.w8o,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ u4d.r6j,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ u4d.t4i,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ u4d.v2y,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ u4d.p3n,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ u4d.d7k,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ u4d.e5a,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ u4d.q9g,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ u4d.r2u,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ u4d.e2x,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], 
		[ u4d.z8t,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], 
		[ u4d.i5s, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], 
		[ u4d.n1q,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ u4d.y8r,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], 
		[ u4d.h9x,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], 
		[ u4d.m0p,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ u4d.q2u,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ u4d.h0e,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ u4d.k8g,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ u4d.q4h,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ u4d.f4i,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ u4d.m6b,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ u4d.u4g,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ u4d.z1w,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ u4d.w6v,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ u4d.x2w,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ u4d.v6b,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ u4d.b8x,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ u4d.h0p,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ u4d.p4x,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ u4d.g6c,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ u4d.q8o, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ u4d.j3r,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ u4d.f0p,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ u4d.x3x, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ u4d.i8q,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ u4d.a6p,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ u4d.r0j,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], 
		[ u4d.x7l,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], 
		[ u4d.c5p,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ u4d.w8f,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ u4d.a1u,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ u4d.o3l,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ u4d.u2e,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ u4d.m2p,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ u4d.w6c,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ u4d.m3d, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ u4d.e7f,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], 
		[ u4d.a4u, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ u4d.d4h,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], 
		[ u4d.a5b,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ u4d.e4l,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ u4d.b1h,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ u4d.q0j,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ u4d.y1w,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ u4d.f2v,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ u4d.u5s,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ u4d.g5w,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ u4d.u3e,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ u4d.t4l,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ u4d.c3n,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], 
		[ u4d.e5h,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ u4d.d1w, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ u4d.j9b,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ u4d.g5t,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ u4d.s0o,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ u4d.f4g,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ u4d.o3n,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ u4d.u0n,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ u4d.p1q,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ u4d.n2b,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ u4d.f5y,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ u4d.m8h,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ u4d.n8s,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ u4d.y5z,  											 		"Zaire",														"",																		"zr", "ZRN" ], 
		[ u4d.r5t,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ u4d.k8w,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function j0r(j8y)
{
	return m9w[j8y][2];
}

function j8j(j8y)
{
	return m9w[j8y][4];
}

function b3q(l7x)
{
	for (const j8y of m9w)
	{
		if (j8y[4] == l7x)
		{
			return j8y[0];
		}
	}
	return u4d.h4o;
}

function u5u(w3h)
{
	for (const j8y of m9w)
	{
		if (j8y[3] == w3h)
		{
			return j8y[0];
		}
	}
	return u4d.h4o;
}
class x6p
{

constructor()
{
	this.h5k = '';
}

h5e(w9b)
{
	this.h5k += w9b;
}

a7x(w9b)
{
	this.h5k += w9b + '\n';
}

d4g()
{
	this.h5k += '\n';
}

}




function x2a(y0v, z1n)
{
	let value = Number(y0v);
	if (isNaN(value))
	{
		return z1n;
	}
	else
	{
		return value;
	}
}
