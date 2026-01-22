const	chess = false; 

const u8l =
{
	o9e   : 0,
	s8e   : 1,
	b3w   : 2,
	o4f   : 3,
	b6d       : 4,
};

const b3l =
{
	a9t        : 0,
	k3t        : 1,
};

const	sq_1 = 0;
const g0a = 1;
const s0u = 2;
const p0u = 3;
const r6f = 4;
const v9j = 5;
const g7g = 6;
const z5p = 7;
const b7z = 8;
const t7y = 9;
const f1w = 10;
const a6u = 11;
const u6s = 12;
const d4d = 13;
const y8j = 14;
const d5h = 15;
const e1l = 16;
const s4z = 17;
const q7v = 18;
const g8l = 19;
const s6b = 20;
const j0a = 21;
const a0d = 22;
const w0t = 23;
const j7k = 24;
const e3l = 25;
const x2s = 26;
const q0v = 27;
const x2h = 28;
const h0p = 29;
const u4q = 30;
const m4b = 31;
const d1g = 32;
const f2x = 33;
const e6a = 34;
const d2w = 35;
const t0h = 36;
const l3g = 37;
const s4c = 38;
const z8o = 39;
const r8c = 40;
const u5l = 41;
const o6b = 42;
const p6r = 43;
const z4b = 44;
const l6w = 45;
const k4u = 46;
const d4h = 47;
const s5z = 48;
const p1v = 49;
const n6y = 50;

const r3h = 0;
const m6n = 1;
const l5m = 2;
const n5p = 3;
const c6g = 4;
const z2k = 5;
const q8s = 6;
const h4t = 7;
const f0a = 8;
const r0e = 9;
const w0m = 10;

const	rank_1 = 0;
const p6t = 1;
const m1e = 2;
const g1x = 3;
const o1b = 4;
const a9k = 5;
const g8c = 6;
const r6i = 7;
const q7r = 8;
const s5l = 9;
const l3l = 10;

const j3r        = 10;
const m7p       = 50;
const o5x      = 20;

const j2h =
[
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
 	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b3w,  
	u8l.b6d,      
	u8l.b6d, 	    
	u8l.b6d, 	    
	u8l.b6d, 	    
	u8l.b6d, 	    
	u8l.b6d, 	    
	u8l.b6d, 	    
	u8l.b6d, 	    
	u8l.b6d, 	    
	u8l.b6d, 	    
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
	u8l.o9e,  
];

const h8q =
[
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
 	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
	u8l.b6d,  
];

const h4w =
[
	sq_1,  g0a,  s0u,  p0u,  r6f,
	v9j,  g7g,  z5p,  b7z,  t7y,
	f1w, a6u, u6s, d4d, y8j,
	d5h, e1l, s4z, q7v, g8l,
	s6b, j0a, a0d, w0t, j7k,
	e3l, x2s, q0v, x2h, h0p,
	u4q, m4b, d1g, f2x, e6a,
	d2w, t0h, l3g, s4c, z8o,
	r8c, u5l, o6b, p6r, z4b,
	l6w, k4u, d4h, s5z, p1v,
];

const n1a =
[
	r3h,
  m6n,
  l5m,
  n5p,
  c6g,
  z2k,
  q8s,
  h4t,
  f0a,
  r0e,
];

const x7l =
[
	rank_1,
  p6t,
  m1e,
  g1x,
  o1b,
  a9k,
  g8c,
  r6i,
  q7r,
  s5l,
];

function z7i(e8u)
{
	return e8u == u8l.b3w ||
    e8u == u8l.o4f;
}

function a9g(e8u)
{
	return e8u == u8l.o9e ||
    e8u == u8l.s8e;
}

function v4i(e8u)
{
	return e8u == u8l.o9e || e8u == u8l.b3w;
}

function r4c(e8u)
{
	return e8u == u8l.s8e || e8u == u8l.o4f;
}

function t6g(e9g)
{
	if (e9g == n6y)
	{
		return n6y;
	}
	else
	{
		return m7p - e9g - 1;
	}
}

const m6a =
[
	m6n,	n5p,	z2k,	h4t,	r0e,
	r3h,	l5m,	c6g,	q8s,	f0a,
	m6n,	n5p,	z2k,	h4t,	r0e,
	r3h,	l5m,	c6g,	q8s,	f0a,
	m6n,	n5p,	z2k,	h4t,	r0e,
	r3h,	l5m,	c6g,	q8s,	f0a,
	m6n,	n5p,	z2k,	h4t,	r0e,
	r3h,	l5m,	c6g,	q8s,	f0a,
	m6n,	n5p,	z2k,	h4t,	r0e,
	r3h,	l5m,	c6g,	q8s,	f0a,
];

function m0z(e9g)
{
	return m6a[e9g];
}

const y2g =
[
	s5l, s5l,	s5l, s5l,	s5l,
	q7r,	 q7r,	q7r,	 q7r,	q7r,
	r6i,	 r6i,	r6i,	 r6i,	r6i,
	g8c,	 g8c,	g8c,	 g8c,	g8c,
	a9k,	 a9k,	a9k,	 a9k,	a9k,
	o1b,	 o1b,	o1b,	 o1b,	o1b,
	g1x,	 g1x,	g1x,	 g1x,	g1x,
	m1e,	 m1e,	m1e,	 m1e,	m1e,
	p6t,	 p6t,	p6t,	 p6t,	p6t,
	rank_1,	 rank_1,	rank_1,	 rank_1,	rank_1,
];

function n2t(e9g)
{
	return y2g[e9g];
}

function i6j(a, b)
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

function h0o(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function s2h(a1s, e8u)
{
	let g9v = 0;
	for (const value of a1s)
	{
		if (value == e8u)
		{
			g9v++;
		}
	}
	return g9v;
}

function j4y(l4b)
{
 	let value = q6d(l4b, 0);
	if (value <= 0)
	{
		return n6y;
	}
	else
	{
		value--; 
		if (value >= sq_1 && value <= p1v)
		{
			return value;
		}
		else
		{
			return n6y;
		}
	}
}

function v1l(e9g)
{
 	let l4b = '';
	l4b = (e9g + 1);
  return l4b;
}







function k6h(e9g)
{
	return e9g >= l6w;
}

function z7h(e9g)
{
	return e9g <= r6f;
}

function i4a(k6n)
{
	return !(k6n % 2);
}

class l2d
{

constructor()
{
}

h1x()
{
	let g7q = new l2d();
  return Object.assign(g7q, this);
}

}


class b7h
{

constructor()
{
  this.v5s = Array(m7p).fill(u8l.b6d);
 	this.g1f = b3l.a9t;
 	this.m2k = new l2d();
 	this.s4i();
}

h1x()
{
	let k3i = new b7h();
	h0o(k3i.v5s, this.v5s);
	k3i.g1f = this.g1f;
  k3i.m2k = this.m2k.h1x();
	return k3i;
}

v3r(t3j)
{
	return this.g1f == t3j.g1f &&
		i6j(this.v5s, t3j.v5s);
}

q6i(t3j)
{
	return !this.v3r(t3j);
}

b2m()
{
 	h0o(this.v5s, j2h);
 	this.g1f = b3l.a9t;
}

s7m()
{
	return this.g1f == b3l.a9t && this.x9q();
}

x9q()
{
	return i6j(this.v5s, j2h);
}

s4i()
{
	this.v5s.fill(u8l.b6d);
	this.g1f = b3l.a9t;
}

t4d()
{
	return this.g1f == b3l.a9t && this.u2o();
}

u2o()
{
	return this.v5s.every(u8l.b6d);
}

a1s()
{
  return this.v5s.slice();
}

e1a(e9g)
{
	return this.v5s[e9g];
}

g7y(e9g, e8u)
{
	this.v5s[e9g] = e8u;
}

v7d()
{
	this.g1f = b3l.a9t;
}

y6b()
{
	this.g1f = b3l.k3t;
}

b3r()
{
	if (this.g1f == b3l.a9t)
	{
		this.g1f = b3l.k3t;
	}
	else
	{
		this.g1f = b3l.a9t;
	}
}

z5y()
{
	return this.g1f == b3l.a9t;
}

c6z()
{
	return this.g1f == b3l.k3t;
}

u3p(e9g)
{
	return this.v5s[e9g] == u8l.b6d;
}

a9g(e9g)
{
	let e8u = this.v5s[e9g];
	return e8u == u8l.o9e ||
    e8u == u8l.s8e;
}

z7i(e9g)
{
	let e8u = this.v5s[e9g];
	return e8u == u8l.b3w ||
    e8u == u8l.o4f;
}

q5s(e9g)
{
  let e8u = this.v5s[e9g];
	return e8u == u8l.o9e;
}

x2t(e9g)
{
  let e8u = this.v5s[e9g];
	return e8u == u8l.s8e;
}

k8c(e9g)
{
  let e8u = this.v5s[e9g];
	return e8u == u8l.b3w;
}

p4z(e9g)
{
  let e8u = this.v5s[e9g];
	return e8u == u8l.o4f;
}

o3l()
{
  let g9v = 0;
	for (const e9g of h4w)
	{
    if (this.a9g(e9g))
		{
			g9v++;
		}
	}
	return g9v;
}

h3q()
{
  let g9v = 0;
	for (const e9g of h4w)
	{
    if (this.z7i(e9g))
		{
			g9v++;
		}
	}
	return g9v;
}

j3x(t7m)
{
  this.m2k = t7m.h1x();
}

t7m()
{
  return this.m2k.h1x();
}

c7z(s4l)
{
	if (s4l.n7n())
	{
    this.b3r();
		return;
	}
	this.g7y(s4l.d5w, u8l.b6d);
	this.g7y(s4l.g8k, s4l.e1q);
	for (const e9g of s4l.h1u)
	{
		this.g7y(e9g, u8l.b6d);
	}
	this.b3r();
}

z2n(s4l)
{
	if (s4l.n7n())
	{
    this.b3r();
		return;
	}
	this.g7y(s4l.g8k, u8l.b6d);
	this.g7y(s4l.d5w, s4l.c2y);
	let i = 0;
	for (const e9g of s4l.h1u)
	{
		this.g7y(e9g, s4l.k4m[i]);
    i++;
	}
	this.b3r();
}

}
const t1w  = 0;
const v0a   = 1;
const l0j  = t1w;

function h0m()
{
  let n9r = [];
	n9r.push("Ellipse");
	n9r.push("Circle");
	return n9r;
}

class d8g
{

constructor()
{
	this.y4h = new u4t();
	this.q6t = null;
}

h1x()
{
	let g2i = new d8g();
	g2i.y4h = this.y4h.h1x();
	g2i.q6t = null;
	if (this.q6t)
	{
		g2i.q6t = this.q6t.h1x();
	}
	return g2i;
}

v3r(t3j)
{
	if (this.y4h.q6i(t3j))
	{
		return false;
	}
	return true;
}

q6i(t3j)
{
	return !this.v3r(t3j);
}

b6d()
{
	return this.y4h.b6d();
}

d5w()
{
	return this.y4h.d5w;
}

g8k()
{
	return this.y4h.g8k;
}

c2y()
{
	return this.y4h.c2y;
}

e1q()
{
	return this.y4h.e1q;
}

h1u()
{
  return this.y4h.h1u.slice();
}

k4m()
{
  return this.y4h.k4m.slice();
}

t6x()
{
	return this.y4h.t6x();
}

a9g()
{
	return this.y4h.a9g();
}

z7i()
{
	return this.y4h.z7i();
}

e2x()
{
	return this.y4h.e2x();
}

n7n()
{
	return this.y4h.n7n();
}

c0f()
{
	return this.y4h.c0f();
}

x5n()
{
	if (this.q6t == null)
	{
		this.q6t = new r0u();
	}
}

o2b()
{
	if (this.q6t)
	{
		if (this.q6t.b6d())
		{
			this.h9j();
		}
	}
}

n2e()
{
	return this.q6t != null;
}

h9j()
{
	this.q6t = null;
}

m9d(b4d)
{
	this.x5n();
	this.q6t = b4d.h1x();
}

m0h()
{
	return this.q6t;
}

t3k(t3j)
{
	if (this.q6t && !t3j.q6t)
	{
		return false;
	}
	if (!this.q6t && t3j.q6t)
	{
		return false;
	}
	if (!this.q6t && !t3j.q6t)
	{
		return true;
	}
	return this.q6t.v3r(t3j.q6t);
}

n5b()
{
	if (this.q6t)
	{
		this.q6t.j7d = '';
		this.o2b();
	}
}

d1q()
{
	if (this.q6t)
	{
		return this.q6t.j7d.length != 0;
	}
	else
	{
		return false;
	}
}

j7d()
{
	if (this.q6t)
	{
		return this.q6t.j7d;
	}
	else
	{
		return '';
	}
}

e6e(w8t)
{
	this.x5n();
	this.q6t.j7d = w8t;
	this.o2b();
}

q7o()
{
	if (this.q6t)
	{
		this.q6t.t4h = '';
		this.o2b();
	}
}

b1r()
{
	if (this.q6t)
	{
		return this.q6t.t4h.length != 0;
	}
	else
	{
		return false;
	}
}

t4h()
{
	if (this.q6t)
	{
		return this.q6t.t4h;
	}
	else
	{
		return '';
	}
}

y5m(w8t)
{
	this.x5n();
	this.q6t.t4h = w8t;
	this.o2b();
}

v9f()
{
	if (this.q6t)
	{
		this.q6t.k5l = s1v.l2e;
		this.o2b();
	}
}

y0a()
{
	if (this.q6t)
	{
		return this.q6t.k5l != s1v.l2e;
	}
	else
	{
		return false;
	}
}

k5l()
{
	if (this.q6t)
	{
		return this.q6t.k5l;
	}
	else
	{
		return s1v.l2e;
	}
}

h4p(k5l)
{
	this.x5n();
	this.q6t.k5l = k5l;
	this.o2b();
}

r1b()
{
	if (this.q6t)
	{
		this.q6t.style = m6y.l2e;
		this.o2b();
	}
}

z3c()
{
	if (this.q6t)
	{
		return this.q6t.style != m6y.l2e;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.q6t)
	{
		return this.q6t.style;
	}
	else
	{
		return m6y.l2e;
	}
}

e7e(style)
{
	this.x5n();
	this.q6t.style = style;
	this.o2b();
}

u1n()
{
	if (this.q6t)
	{
		this.q6t.value = g7e.l2e;
		this.o2b();
	}
}

h3n()
{
	if (this.q6t)
	{
		return this.q6t.value != g7e.l2e;
	}
	else
	{
		return false;
	}
}

value()
{
	if (this.q6t)
	{
		return this.q6t.value;
	}
	else
	{
		return g7e.l2e;
	}
}

n9k(value)
{
	this.x5n();
	this.q6t.value = value;
	this.o2b();
}

d0d()
{
	if (this.q6t)
	{
		this.q6t.h6f = m0e.l2e;
		this.o2b();
	}
}

h5n()
{
	if (this.q6t)
	{
		return this.q6t.h6f != m0e.l2e;
	}
	else
	{
		return false;
	}
}

h6f()
{
	if (this.q6t)
	{
		return this.q6t.h6f;
	}
	else
	{
		return m0e.l2e;
	}
}

g6h(h6f)
{
	this.x5n();
	this.q6t.h6f = h6f;
	this.o2b();
}

s1q()
{
  
}

u3y()
{
	if (this.q6t)
	{
 		if (this.q6t.j7d.length != 0)
    {
      let v2a = this.q6t.j7d.indexOf("[#]");
      return v2a != -1;
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

n8c()
{
  
}

q0p()
{
	if (this.q6t)
	{
		this.q6t.s7k = false;
		this.o2b();
	}
}

w1q()
{
	if (this.q6t)
	{
		return this.q6t.s7k;
	}
	else
	{
		return false;
	}
}

r9p()
{
	this.x5n();
	this.q6t.s7k = true;
	this.o2b();
}

p2p()
{
	if (this.q6t)
	{
		this.q6t.r0n = false;
		this.o2b();
	}
}

r3e()
{
	if (this.q6t)
	{
		return this.q6t.r0n;
	}
	else
	{
		return false;
	}
}

j1u()
{
	this.x5n();
	this.q6t.r0n = true;
	this.o2b();
}

h3w()
{
	if (this.q6t)
	{
		this.q6t.s0l.g9e();
		this.q6t.l2t.g9e();
		this.o2b();
	}
}

o1w()
{
	if (this.q6t)
	{
		return this.r1i() || this.j3h();
	}
	else
	{
		return false;
	}
}

d2q()
{
	if (this.q6t)
	{
		this.q6t.s0l.g9e();
		this.o2b();
	}
}

r1i()
{
	if (this.q6t)
	{
		return !this.q6t.s0l.b6d();
	}
	else
	{
		return false;
	}
}

s0l()
{
	if (this.q6t)
	{
		return this.q6t.s0l.h1x();
	}
	else
	{
		return new u6i();
	}
}

j0o(s0l)
{
	this.x5n();
	this.q6t.s0l = s0l.h1x();
	this.o2b();
}

y8w()
{
	if (this.q6t)
	{
		this.q6t.l2t.g9e();
		this.o2b();
	}
}

j3h()
{
	if (this.q6t)
	{
		return !this.q6t.l2t.b6d();
	}
	else
	{
		return false;
	}
}

l2t()
{
	if (this.q6t)
	{
		return this.q6t.l2t.h1x();
	}
	else
	{
		return new s2q();
	}
}

r4l(l2t)
{
	this.x5n();
	this.q6t.l2t = l2t.h1x();
	this.o2b();
}

n9a()
{
	if (this.q6t)
	{
		this.q6t.o7u.u4i();
		this.o2b();
	}
}

n3i()
{
	if (this.q6t)
	{
		return this.q6t.o7u.f6f();
	}
	else
	{
		return false;
	}
}

o7u()
{
	if (this.q6t)
	{
		return this.q6t.o7u.h1x();
	}
	else
	{
		return new e4e();
	}
}

j1d(o7u)
{
	this.x5n();
	this.q6t.o7u = o7u.h1x();
	this.o2b();
}

q4m(r6e)
{
	this.y4h = r6e.h1x();
	this.q6t = null;
}

r6e()
{
	let a0r = new u4t();
  return Object.assign(a0r, this.y4h);
}

}

function n8w(r6e)
{
  let t1p = new d8g();
  t1p.q4m(r6e);
  return t1p;
}
class u4t
{

constructor()
{
	this.d5w = n6y;
	this.c2y = u8l.b6d;
	this.g8k = n6y;
	this.e1q = u8l.b6d;
	this.h1u = [];
	this.k4m = [];
	this.j1i = [];
}

h1x()
{
	let a0r = new u4t();
	a0r.d5w = this.d5w;
	a0r.c2y = this.c2y;
	a0r.g8k = this.g8k;
	a0r.e1q = this.e1q;
	a0r.h1u = this.h1u.slice();
	a0r.k4m = this.k4m.slice();
	a0r.j1i = this.j1i.slice();
	return a0r;
}

v3r(t3j)
{
	if (
		this.d5w != t3j.d5w ||
		this.c2y != t3j.c2y ||
		this.g8k != t3j.g8k ||
		this.e1q != t3j.e1q)
	{
		return false;
	}
	else
	{
		for (const e9g of this.h1u)
		{
			let r1k = t3j.h1u.find(function(o5w){ return o5w == e9g; });
			if (r1k === undefined)
			{
				return false;
			}
		}
		for (const e8u of this.k4m)
		{
			let r1k = t3j.k4m.find(function(o5w){ return o5w == e8u; });
			if (r1k === undefined)
			{
				return false;
			}
		}
		return true;
	}
}

q6i(t3j)
{
	return !this.v3r(t3j);
}

b6d()
{
	return this.d5w == n6y;
}

a9g()
{
 	return this.c2y == u8l.o9e ||
		this.c2y == u8l.s8e;
}

z7i()
{
 	return this.c2y == u8l.b3w ||
		this.c2y == u8l.o4f;
}

c0f()
{
  return this.h1u.length > 0;
}

e2x()
{
	return this.c2y != this.e1q;
}

n7n()
{
	return this.d5w == n6y;
}

b0z(e9g)
{
	let r1k = this.h1u.find(function(o5w){ return o5w == e9g; });
	return (r1k !== undefined);
}


u3l(f7u)
{
	for (const e9g of f7u)
	{
		let r1k = this.h1u.find(function(o5w){ return o5w == e9g; });
		if (r1k === undefined)
		{
			return false;
		}
	}
	return true;
}


c2p(e9g)
{
	let r1k = this.j1i.find(function(o5w){ return o5w == e9g; });
	return (r1k !== undefined);
}

v5d(f7u)
{
	for (const e9g of f7u)
	{
		let r1k = this.j1i.find(function(o5w){ return o5w == e9g; });
		if (r1k === undefined)
		{
			return false;
		}
	}
	return true;
}

t6x()
{
  return this.h1u.length;
}

}

const p6x =
[
	n6y, n6y,	n6y, n6y,	n6y, n6y, n6y, n6y,	n6y, n6y, n6y, n6y, n6y, n6y,
	n6y, n6y,	n6y, n6y, n6y, n6y,	n6y, n6y,	n6y, n6y,	n6y, n6y,	n6y, n6y,
	n6y, n6y,	n6y, sq_1,	n6y, g0a,	n6y, s0u,	n6y, p0u,	n6y, r6f,	n6y, n6y,
	n6y, n6y,	v9j,  n6y,	g7g,  n6y,	z5p,  n6y,	b7z,  n6y,	t7y, n6y,	n6y, n6y,
	n6y, n6y,	n6y, f1w,	n6y, a6u,	n6y, u6s,	n6y, d4d,	n6y, y8j,	n6y, n6y,
	n6y, n6y,	d5h, n6y,	e1l, n6y,	s4z, n6y,	q7v, n6y,	g8l, n6y,	n6y, n6y,
	n6y, n6y,	n6y, s6b,	n6y, j0a,	n6y, a0d,	n6y, w0t,	n6y, j7k,	n6y, n6y,
	n6y, n6y, e3l, n6y,	x2s, n6y,	q0v, n6y,	x2h, n6y,	h0p, n6y,	n6y, n6y,
	n6y, n6y,	n6y, u4q,	n6y, m4b,	n6y, d1g,	n6y, f2x,	n6y, e6a,	n6y, n6y,
	n6y, n6y,	d2w, n6y,	t0h, n6y,	l3g, n6y,	s4c, n6y,	z8o, n6y,	n6y, n6y,
	n6y, n6y,	n6y, r8c,	n6y, u5l,	n6y, o6b,	n6y, p6r,	n6y, z4b,	n6y, n6y,
	n6y, n6y,	l6w, n6y,	k4u, n6y,	d4h, n6y,	s5z, n6y,	p1v, n6y,	n6y, n6y,
	n6y, n6y,	n6y, n6y,	n6y, n6y,	n6y, n6y,	n6y, n6y,	n6y, n6y,	n6y, n6y,
	n6y, n6y,	n6y, n6y,	n6y, n6y,	n6y, n6y,	n6y, n6y,	n6y, n6y,	n6y, n6y,
];

const l7i =
[
	31,  33,  35,	 37,  39,
	44,	 46,	48,	 50,	52,
	59,	 61,	63,	 65,	67,
	72,	 74,	76,	 78,	80,
	87,	 89,	91,	 93,	95,
	100, 102,	104, 106,	108,
	115, 117, 119, 121, 123,
	128, 130, 132, 134, 136,
	143, 145,	147, 149,	151,
	156, 158, 160, 162, 164,
];

class x7t
{

constructor()
{
	this.l3s = [];
  this.c9n = Array(m7p).fill(n6y);
  this.v4d = Array(m7p).fill(n6y);
  this.b1b = Array(m7p).fill(u8l.b6d);
  this.p8z = Array(m7p).fill(false);
  this.g6l = 0;
	this.w4a = new b7h();
	this.a0k = 0;
	this.b0s = n6y;
	this.g9q = u8l.b6d;
	this.d3j = 0;
	this.g3t = 0;
	this.y9r = 0;
	this.y4f = 0;
	this.w1z = false;
}

u8g(i8a)
{
	this.w4a = i8a.h1x();
	this.p8z.fill(false);
  this.g6l = 0;
	let i5x = 14;
	if (this.w4a.z5y())
	{
		this.d3j = -(i5x + 1);
		this.g3t = -(i5x - 1);
		this.y9r = (i5x - 1);
		this.y4f = (i5x + 1);
	}
	else
	{
		this.d3j = (i5x + 1);
		this.g3t = (i5x - 1);
		this.y9r = -(i5x - 1);
		this.y4f = -(i5x + 1);
	}
}

m7u(d5w)
{
 	this.b0s = d5w;
	this.g9q = this.w4a.e1a(this.b0s);
	this.a0k = 0;
	if (
		(this.w4a.z5y() && this.g9q == u8l.o9e) ||
		(this.w4a.c6z() && this.g9q == u8l.b3w))
	{
		this.l6i(this.b0s);
	}
	else if (
		(this.w4a.z5y() && this.g9q == u8l.s8e) ||
		(this.w4a.c6z() && this.g9q == u8l.o4f))
	{
		this.x6w(this.b0s);
	}
}

l6i(e9g)
{
 	this.x8x(e9g, this.d3j);
	this.x8x(e9g, this.g3t);
}

x8x(d5w, w9w)
{
	let g8k = p6x[l7i[d5w] + w9w];
	if (g8k != n6y)
  {
    if (this.w4a.u3p(g8k))
  	{
	  	this.f9g(g8k);
  	}
  }
}

x6w(d5w)
{
	this.y6e(d5w, this.d3j);
	this.y6e(d5w, this.g3t);
	this.y6e(d5w, this.y4f);
	this.y6e(d5w, this.y9r);
}

y6e(d5w, w9w)
{
	let t9a = w9w;
	do
	{
		let g8k = p6x[l7i[d5w] + t9a];
		if (g8k == n6y)
    {
      break;
    }
    if (!this.w4a.u3p(g8k))
		{
			break;
		}
		this.f9g(g8k);
		t9a += w9w;
	} while (true);
}

x6f(d5w)
{
	this.b0s = d5w;
	this.g9q = this.w4a.e1a(this.b0s);
	this.a0k = 0;
	let e8u = this.w4a.e1a(this.b0s);
	if ((this.w4a.z5y() && this.g9q == u8l.o9e) ||
		(this.w4a.c6z() && this.g9q == u8l.b3w))
	{
		this.w4a.g7y(this.b0s, u8l.b6d);
		this.x5r(this.b0s);
	}
	else if (
		(this.w4a.z5y() && this.g9q == u8l.s8e) ||
		(this.w4a.c6z() && this.g9q == u8l.o4f))
	{
		this.w4a.g7y(this.b0s, u8l.b6d);
		this.c0w(this.b0s);
	}
	this.w4a.g7y(this.b0s, e8u);
}

x5r(d5w)
{
	let r1v = true;
	if (this.w2p(d5w, this.d3j))
	{
		r1v = false;
	}
	if (this.w2p(d5w, this.g3t))
	{
		r1v = false;
	}
	if (this.w2p(d5w, this.y4f))
	{
		r1v = false;
	}
	if (this.w2p(d5w, this.y9r))
	{
		r1v = false;
	}
	if (r1v)
	{
		this.e6n(d5w);
	}
}

w2p(d5w, w9w)
{
	let o4u = p6x[l7i[d5w] + w9w];
	if (o4u == n6y)
	{
		return false;
	}
	let g8k = p6x[l7i[d5w] + 2 * w9w];
	if (g8k == n6y)
	{
		return false;
	}
	if (!this.w4a.u3p(g8k))
	{
		return false;
	}
	if (this.p8z[o4u])
	{
		return false;
	}
	if (this.g9q == u8l.o9e)
	{
		if (!this.w4a.z7i(o4u))
		{
			return false;
		}
	}
	else
	{
		if (!this.w4a.a9g(o4u))
		{
			return false;
		}
	}
	this.c9n[this.a0k] = o4u;
	this.b1b[this.a0k] = this.w4a.e1a(o4u);
	this.v4d[this.a0k] = g8k;
	this.a0k++;
	let e8u = this.w4a.e1a(o4u);
	this.p8z[o4u] = true;
	this.x5r(g8k);
	this.p8z[o4u] = false;
	this.w4a.g7y(o4u, e8u);
	this.a0k--;
	return true;
}

c0w(d5w)
{
	let r1v = true;
	if (this.z8t(d5w, this.d3j))
	{
		r1v = false;
	}
	if (this.z8t(d5w, this.g3t))
	{
		r1v = false;
	}
	if (this.z8t(d5w, this.y4f))
	{
		r1v = false;
	}
	if (this.z8t(d5w, this.y9r))
	{
		r1v = false;
	}
	if (r1v)
	{
		this.e6n(d5w);
	}
}

z8t(b3q, w9w)
{
	let o4u = n6y;
	let t9a = w9w;
	do
	{
		o4u = p6x[l7i[b3q] + t9a];
		if (o4u == n6y)
		{
			return false;
		}
		if (this.p8z[o4u])
		{
			return false;
		}
		if (this.g9q == u8l.s8e)
		{
			if (this.w4a.z7i(o4u))
			{
				break;
			}
		}
		else
		{
			if (this.w4a.a9g(o4u))
			{
				break;
			}
		}
		if (!this.w4a.u3p(o4u))
		{
			return false;
		}
		t9a += w9w;
	} while (true);
	let h7k = false;
	do
	{
		t9a += w9w;
		let g8k = p6x[l7i[b3q] + t9a];
		if (g8k == n6y)
    {
      return h7k;
    }
    if (!this.w4a.u3p(g8k))
		{
			return h7k;
		}
		this.c9n[this.a0k] = o4u;
		this.b1b[this.a0k] = this.w4a.e1a(o4u);
		this.v4d[this.a0k] = g8k;
		this.a0k++;
		let b6b = this.w4a.e1a(o4u);
		this.p8z[o4u] = true;
		this.c0w(g8k);
		this.p8z[o4u] = false;
		this.w4a.g7y(o4u, b6b);
		this.a0k--;
		h7k = true;
	} while (true);
}

e6n(g8k)
{
	if (!this.a0k)
	{
		return;
	}
	if (this.a0k >= this.g6l)
	{
		if (this.a0k > this.g6l)
		{
      this.l3s.length = 0;
		}
		this.f9g(g8k);
	}
}

f9g(g8k)
{
	let s4l = new u4t();
	s4l.d5w = this.b0s;
	s4l.g8k = g8k;
	s4l.c2y = this.g9q;
	s4l.e1q = s4l.c2y;
	if (s4l.c2y == u8l.o9e)
	{
		if (z7h(s4l.g8k))
		{
			s4l.e1q = u8l.s8e;
		}
	}
	else if (s4l.c2y == u8l.b3w)
	{
		if (k6h(s4l.g8k))
		{
			s4l.e1q = u8l.o4f;
		}
	}
	for (let i = 0; i < this.a0k; i++)
	{
		s4l.h1u.push(this.c9n[i]);
		s4l.k4m.push(this.b1b[i]);
	}
	for (let i = 0; i < this.a0k - 1; i++)
	{
		s4l.j1i.push(this.v4d[i]);
	}

	if (this.w1z)
	{
		if (this.a0k >= 2)
		{
			let r1k = this.l3s.find(function(o5w)
			{
				if (o5w.v3r(s4l))
				{
					return true;
				}
			});
			if (r1k != undefined)
			{
				return;
			}
		}
	}
	this.g6l = s4l.t6x();
	this.l3s.push(s4l);
}

h0a(i8a, u8j)
{
	this.u8g(i8a);
	this.w1z = u8j;
	this.l3s.length = 0;

	for (const e9g of h4w)
	{
		this.x6f(e9g);
	}

	if (this.l3s.length === 0)
	{
		for (const e9g of h4w)
		{
			this.m7u(e9g);
		}
	}
	return this.l3s;
}

s3l(i8a)
{
	this.u8g(i8a);
	this.w1z = true;
	this.l3s.length = 0;

	for (const e9g of h4w)
	{
		this.x6f(e9g);
	}
	return this.l3s.length > 0;
}

g4r(i8a, o4u)
{
	this.u8g(i8a);
	this.w1z = true;
	this.l3s.length = 0;

	for (const e9g of h4w)
	{
		this.x6f(e9g);
	}
	for (const r6e of this.l3s)
	{
		if (r6e.b0z(o4u))
		{
			return true;
		}
	}
	return false;
}

j1i(i8a, s4l)
{
	this.u8g(i8a);
	this.w1z = true;
	this.l3s.length = 0;

	this.x6f(s4l.d5w);
	let n6f = [];
  let h1u = s4l.h1u;
	for (const o4u of h1u)
	{
		n6f.push(o4u);
	}
	for (const r6e of this.l3s)
	{
		if (r6e.g8k != s4l.g8k)
		{
			continue;
		}
		if (!r6e.u3l(n6f))
		{
			continue;
		}
		return r6e.j1i.slice();
	}
	return [];
}

p3v(i8a, s4l)
{
	this.u8g(i8a);
	this.w1z = true;
	this.l3s.length = 0;

	this.x6f(s4l.d5w);
	let w0j = 0;
	for (const r6e of this.l3s)
	{
		if (r6e.g8k == s4l.g8k)
		{
			w0j++;
		}
	}
	return w0j > 1;
}

} 


function x8a(i8a)
{
	let s4a = new x7t();
	return s4a.h0a(i8a, true);
}

function m8z(i8a, d5w)
{
	let s4a = new x7t();
	let c7m = s4a.h0a(i8a, true);
	let b0w = [];
	for (const r6e of c7m)
	{
		if (r6e.d5w == d5w)
		{
			b0w.push(r6e);
		}
	}
	return b0w;
}

function w6p(i8a, g8k)
{
	let s4a = new x7t();
	let c7m = s4a.h0a(i8a, true);
	let k2j = [];
	for (const r6e of c7m)
	{
		if (r6e.g8k == g8k)
		{
			k2j.push(r6e);
		}
	}
	return k2j;
}

function f6i(i8a, d5w, g8k)
{
	let s4a = new x7t();
	let c7m = s4a.h0a(i8a, true);
	let g8n = [];
	for (const r6e of c7m)
	{
		if (r6e.d5w == d5w && r6e.g8k == g8k)
		{
			g8n.push(r6e);
		}
	}
	return g8n;
}

function i1j(i8a, d5w, g8k, h1u)
{
	let s4a = new x7t();
	let c7m = s4a.h0a(i8a, true);
	let h0a = [];
	for (const r6e of c7m)
	{
		if (r6e.d5w != d5w)
		{
			continue;
		}
		if (r6e.g8k != g8k)
		{
			continue;
		}
		if (!r6e.b0z(h1u))
		{
			continue;
		}
		h0a.push(r6e);
	}
	return h0a;
}

function p3f(i8a, d5w, g8k, j1i)
{
	let s4a = new x7t();
	let c7m = s4a.h0a(i8a, false);
	let h0a = [];
	for (const r6e of c7m)
	{
		if (r6e.d5w != d5w)
		{
			continue;
		}
		if (r6e.g8k != g8k)
		{
			continue;
		}
		if (!r6e.v5d(j1i))
		{
			continue;
		}
		
		let j3d = false;
		for (const m of h0a)
		{
			if (m.v3r(s4l))
			{
				j3d = true;
				break;
			}
		}
		if (!j3d)
		{
			h0a.push(r6e);
		}
	}
	return h0a;
}

function h8n(i8a, s4l)
{
	let s4a = new x7t();
	return s4a.j1i(i8a, s4l);
}

function s3l(i8a)
{
	let s4a = new x7t();
	return s4a.s3l(i8a);
}

function g4r(i8a, o4u)
{
	let s4a = new x7t();
	return s4a.g4r(i8a, o4u);
}

function p3v(i8a, s4l)
{
	let s4a = new x7t();
	return s4a.p3v(i8a, s4l);
}

function s3z(i8a)
{
	let s4a = new x7t();
	if (s4a.s3l(i8a))
	{
		return false;
	}
	let o1d = i8a.h1x();
	o1d.b3r();
	return !s4a.s3l(o1d);
}

function t5d()
{
}
/* voor dammen niet nodig */
const c4l =
{
  l2e : 0,  
	k6e : 1,
	u6f : 2,
};

function j5w(i8a, s4l)
{
 	let l4b = '';
	if (s4l.b6d())
	{
		l4b += "--";
	}
  else
  {
    l4b = v1l(s4l.d5w);
    if (s4l.h1u.length > 0)
    {
      l4b += 'x';
    }
    else
    {
      l4b += '-';
    }
    if (s4l.h1u.length > 2)
    {
      if (p3v(i8a, s4l))
      {
        let j1i = h8n(i8a, s4l);
        for (const e9g of j1i)
        {
          l4b += v1l(e9g);
          l4b += 'x';
        }
        l4b += v1l(s4l.g8k);
      }
      else
      {
        l4b += v1l(s4l.g8k);
      }
    }
    else
    {
      l4b += v1l(s4l.g8k);
    }
  }
	return l4b;
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

function g3q(h6d,
  d2f,
  x6a,
  coordinate,
  coordinatesType,
  i7s,
  b2n,
  marginSize) 
{
 	let q3x = (coordinatesType == c7x.m0s ||
		coordinatesType == c7x.a8c ||
		coordinatesType == c7x.b9y);
	let w6f = (coordinatesType == c7x.m0s ||
		coordinatesType == c7x.a8c ||
		coordinatesType == c7x.f2c);
	let t8e =	(coordinatesType == c7x.m0s ||
		coordinatesType == c7x.b9y ||
		coordinatesType == c7x.v3g);
	let h6w = (coordinatesType == c7x.m0s ||
		coordinatesType == c7x.f2c ||
		coordinatesType == c7x.v3g);

	h6d.font = (coordinate.fontSize).toString() + "px serif";
	h6d.fillStyle = i7s;
  let k7g = coordinate.height;

	if (w6f)
	{
  	let b2x = 0;
		if (b2n)
		{
			b2x = m7p - j3r / 2;
		}
		else
		{
			b2x = j3r / 2 + 1;
		}
    for (let k6n = 0; k6n < j3r; k6n++)
		{
 			if (k6n % 2)
			{
				continue;
			}
			let c9e = h6d.measureText(b2x).width;
			let top = d2f.i0p + 1 + (k6n + 1) * x6a.i7a;
			top += (x6a.i7a - k7g) / 2 + k7g;
			let v9w = d2f.k2m - marginSize + (marginSize - c9e) / 2;
      h6d.fillText(b2x, v9w, top);
			if (b2n)
			{
				b2x -= j3r;
			}
			else
			{
				b2x += j3r;
			}
		}
	}

	if (t8e)
	{
		let b2x = 0;
		if (b2n)
		{
			b2x = m7p - j3r / 2 + 1;
		}
		else
		{
			b2x = j3r / 2;
		}
    for (let k6n = 0; k6n < j3r; k6n++)
		{
 			if (k6n % 2)
			{
				continue;
			}
      let c9e = h6d.measureText(b2x).width;
			let top = d2f.i0p + 1 + k6n * x6a.i7a;
			top += (x6a.i7a - k7g) / 2 + k7g;
			let v9w = d2f.k2m + d2f.l0g() +
        (marginSize - c9e) / 2;
      h6d.fillText(b2x, v9w, top);
			if (b2n)
			{
				b2x -= j3r;
			}
			else
			{
				b2x += j3r;
			}
		}
	}

	if (q3x)
	{
		let b2x = 0;
		if (b2n)
		{
			b2x = m7p;
		}
		else
		{
			b2x = 1;
		}
    for (let e2y = 0; e2y < j3r; e2y++)
		{
 			if (e2y % 2)
			{
				continue;
			}
			let left = d2f.k2m + 1 + (e2y + 1) * x6a.i7a;
      let c9e = h6d.measureText(b2x).width;
			let v9w = left + (x6a.i7a - c9e) / 2;
			let e4a = d2f.i0p - (marginSize - k7g) / 2 - 2;
      
      h6d.fillText(b2x, v9w, e4a);
			if (b2n)
			{
				b2x--;
			}
			else
			{
				b2x++;
			}
		}
	}

	if (h6w)
	{
		let b2x = 0;
		if (b2n)
		{
			b2x = j3r / 2;
		}
		else
		{
			b2x = m7p - j3r / 2 + 1;
		}
    for (let e2y = 0; e2y < j3r; e2y++)
		{
			if (e2y % 2)
			{
				continue;
			}
			let left = d2f.k2m + 1 + e2y * x6a.i7a;
      let c9e = h6d.measureText(b2x).width;
			let v9w = left + (x6a.i7a - c9e) / 2;
			let e4a = d2f.i0p + d2f.o3v() +
        (marginSize - k7g) / 2 + k7g - 2;
      
      h6d.fillText(b2x, v9w, e4a);
			if (b2n)
			{
				b2x--;
			}
			else
			{
				b2x++;
			}
		}
	}
}

function f0k(h6d, fontSize)
{
	let t4c = new c1u();
	t4c.fontSize = fontSize;
	t4c.height = fontSize;
	t4c.width = fontSize;
	return t4c;
}
function b2d(h6d, rect, e8u)
{
 	h6d.lineWidth = "1";
  if (e8u == u8l.o9e || e8u == u8l.s8e)
  {
    h6d.fillStyle = "white";
    h6d.strokeStyle = "black";
  }
  else
  {
    h6d.fillStyle = "black";
    h6d.strokeStyle = "white";
  }
  let o8k = 80;
  let q9f = rect.l0g() + 1;
 	let f0x = ((0.19 * o8k) / 100) * q9f;
  let c3b = rect.k2m + q9f / 2;
  let p6q = (q9f / 4);
  let a3w = (q9f / 2.4);
	if (e8u == u8l.o9e || e8u == u8l.b3w)
	{
    let r7n = rect.i0p + q9f / 1.8;
    h6d.beginPath();
    h6d.ellipse(c3b, r7n, p6q, a3w, Math.PI / 2, 0, 2 * Math.PI);
    h6d.fill();
    h6d.stroke();
		r7n -= f0x;
    h6d.beginPath();
    h6d.ellipse(c3b, r7n, p6q, a3w, Math.PI / 2, 0, 2 * Math.PI);
    h6d.fill();
    h6d.stroke();
	}
	else if (e8u == u8l.s8e || e8u == u8l.o4f)
	{
    let r7n = rect.i0p + q9f / 1.55;
    h6d.beginPath();
    h6d.ellipse(c3b, r7n, p6q, a3w, Math.PI / 2, 0, 2 * Math.PI);
    h6d.fill();
    h6d.stroke();
		r7n -= f0x;
    h6d.beginPath();
    h6d.ellipse(c3b, r7n, p6q, a3w, Math.PI / 2, 0, 2 * Math.PI);
    h6d.fill();
    h6d.stroke();
		r7n -= f0x;
    h6d.beginPath();
    h6d.ellipse(c3b, r7n, p6q, a3w, Math.PI / 2, 0, 2 * Math.PI);
    h6d.fill();
    h6d.stroke();
	}
}

function f9b(h6d, rect, e8u)
{
 	h6d.lineWidth = "1";
  if (e8u == u8l.o9e || e8u == u8l.s8e)
  {
    h6d.fillStyle = "white";
    h6d.strokeStyle = "black";
  }
  else
  {
    h6d.fillStyle = "black";
    h6d.strokeStyle = "white";
  }

  let o8k = 80;
  let q9f = rect.l0g() + 1;
 	let f0x = ((0.19 * o8k) / 100) * q9f;
  let c3b = rect.k2m + q9f / 2;
  let p6q = (q9f / 4);
  let a3w = (q9f / 2.4);


  let r7n = rect.i0p + q9f / 2; 
  let c9u = q9f * 0.4;

  h6d.beginPath();
  h6d.arc(c3b, r7n, c9u, 0, Math.PI * 2);
  h6d.closePath();
  h6d.fill();
  h6d.stroke();

	if (r4c(e8u))
	{
		if (e8u == u8l.s8e)
		{
      h6d.fillStyle = "black";
      h6d.strokeStyle = "black";
		}
		else
		{
      h6d.fillStyle = "white";
      h6d.strokeStyle = "white";
		}
    c9u = q9f * 0.1;
    h6d.beginPath();
    h6d.arc(c3b, r7n, c9u, 0, Math.PI * 2);
    h6d.closePath();
    h6d.fill();
    h6d.stroke();
	}
}

function j6d(h6d, rect, e8u)
{
  if (e8u == u8l.b6d) return;
  if (j3m.s6m == 0)
  {
    b2d(h6d, rect, e8u);
  }
  else
  {
    f9b(h6d, rect, e8u);
  }
}


function m6f(s6m)
{
}
function y6o(o5w)
{
	let i8a = new b7h();
	let t3i = o5w.length;
	if (t3i < 6) 
	{
		return i8a;
	}
	if (o5w[0] != 'W' && o5w[0] != 'B')
	{
		return i8a;
	}
	if (o5w[0] == 'W')
	{
		i8a.v7d();
	}
	else if (o5w[0] == 'B')
	{
		i8a.y6b();
	}
	let f0j = o5w.indexOf(":W");
	let m5l = o5w.indexOf(":B");
	let s5q = o5w.indexOf(".");
  if (s5q == -1)
	{
		s5q = o5w.length;
	}
	if (f0j == -1 || m5l == -1 || s5q <= m5l)
	{
		return i8a;
	}
	let w = o5w.substr(f0j + 2, m5l - (f0j + 2));
	let b = o5w.substr(m5l + 2, s5q - (m5l + 2));
	let k1x = w.split(",");
	let y7j = b.split(",");

	for (const s of k1x)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let z6t = s.substr(1, 2);
					let e9g = q6d(z6t, 0);
					if (e9g)
					{
						i8a.g7y(e9g-1, u8l.s8e);
					}
				}
			}
			else
			{
				let e9g = q6d(s, 0);
				if (e9g)
				{
					i8a.g7y(e9g-1, u8l.o9e);
				}
			}
		}
	}
	for (const s of y7j)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let z6t = s.substr(1, 2);
					let e9g = q6d(z6t, 0);
					if (e9g)
					{
						i8a.g7y(e9g-1, u8l.o4f);
					}
				}
			}
			else
			{
				let e9g = q6d(s, 0);
				if (e9g)
				{
					i8a.g7y(e9g-1, u8l.b3w);
				}
			}
		}
	}
	return i8a;
}

function j4w(i8a, r0s)
{
  let l6c = r0s.length;

 	
	if (r0s[0] == 'Z' || (l6c == 2 && r0s == "--") || (l6c == 4 && r0s == "null"))
	{
		return new u4t();
	}

	let f7u = [];
	let i = 0;
	let t3i = r0s.length;
	while (i < t3i)
	{
		let p3n = i;
		let p3d = 0;
		let y1n = r0s[i];
		while (i < t3i && y1n != '-' && y1n != 'x' && y1n != ':')
		{
			i++;
			p3d++;
			if (i < t3i)
			{
				y1n = r0s[i];
			}
		}
		let c3y = r0s.substr(p3n, p3d);
    f7u.push(j4y(c3y));
		i++; 
	}
	let l7x = f7u.length;
	if (l7x < 2)
	{
		return false;
	}
	else if (l7x == 2)
	{
		let d5w = f7u[0];
		let g8k = f7u[1];
		let h0a = f6i(i8a, d5w, g8k);
		if (h0a.length == 1)
		{
			return h0a[0];
		}
		return false;
	}
	else
	{
		let d5w = f7u[0];
		let g8k = f7u[1];
		let h1u = [];
		for (let i = 2; i < l7x; i++)
		{
			h1u.push(f7u[i]);
		}
		let h0a = i1j(i8a, d5w, g8k, h1u);
		if (h0a.length == 1)
		{
			return h0a[0];
		}
		d5w = f7u[0];
		g8k = f7u[f7u.length - 1];
		let j1i = [];
		for (let i = 1; i < l7x - 1; i++)
		{
			j1i.push(f7u[i]);
		}
		h0a = p3f(i8a, d5w, g8k, j1i);
		if (h0a.length == 1)
		{
			return h0a[0];
		}
		return false;
	}
}

function v6w()
{
  let n8u = ["images/board/BoardBackground.png",
    "images/board/DarkSquare.png",
    "images/board/LightSquare.png",
    "images/board/Margin.png"];
  return n8u;
}
function div(v5p, o7k)
{
  const q1x = v5p % o7k;
  const quot = Math.floor((v5p - q1x) / o7k);
  return { quot: quot, q1x: q1x };
}

function r1z(i8a, l4b)
{
	let s4l = new u4t();
	if (l4b.length < 4)
	{
		return s4l;
	}
	let w2w = l4b.slice(0, 2);
	let toString = l4b.slice(2, 4);
	s4l.d5w = j4y(w2w);
  s4l.c2y = i8a.e1a(s4l.d5w);
	s4l.g8k = j4y(toString);
	s4l.e1q = s4l.c2y;
	if (l4b.length == 5)
	{
		switch (l4b[4])
		{
			case 'q':
				s4l.e1q = i8a.z5y() ? u8l.whiteQueen : u8l.blackQueen;
				break;
			case 'r':
				s4l.e1q = i8a.z5y() ? u8l.whiteRook : u8l.blackRook;
				break;
			case 'b':
				s4l.e1q = i8a.z5y() ? u8l.whiteBishop : u8l.blackBishop;
				break;
			case 'n':
				s4l.e1q = i8a.z5y() ? u8l.whiteKnight : u8l.blackKnight;
				break;
		}
	}
	return s4l;
}

class z8y
{

constructor()
{
	let x6l = '';
	let value = '';
}

}

function e1h(l4b, x6l, g7w)
{
  let e8f = " " + x6l + " ";
  let l6e = l4b.indexOf(e8f, 0);
	if (l6e >= 0)
	{
		let u1r = l6e + e8f.length;
		let o3k = 0;
		
		if (x6l == "pv")
		{
			o3k = l4b.indexOf(" string ", u1r);
		}
		else
		{
			o3k = l4b.indexOf(" ", u1r);
		}
		if (o3k < 0)
		{
			o3k = l4b.length;
		}
    let value = l4b.slice(u1r, o3k).trim();
		g7w.set(x6l, value);
	}
}

const w5o =
{
	s7c        : 0,
	k0a      : 1,
};

class k3k
{

constructor()
{
	this.j8d = new b0i();
  this.i0s = null;
  this.l6s = new u4h();
  this.s9f = new g6v();
  this.z4x = false;
  this.q2q = false;
  this.x8e = false;
  this.d2m = false;
  this.k9z = false;
  this.f8y = new c0c();
	this.m2c = new y5p();
  this.y8a = null;
}

x5w(u6z)
{
  this.j8d = u6z.h1x();
  this.z6o();
  this.z4x = false;
 	for (const h4v of this.j8d.b2k.b2k)
	{
		if (h4v.x6l == "MultiPV")
		{
			this.z4x = (h4v.value != "1");
			break;
		}
	}

  this.y2b();
}

y2b()
{
  this.i0s = new Worker("/sharedgames/js/stockfish-17.1-8e4d048.js");
  this.i0s.y8a = (event) => {
    this.k0a(event);
  };
}

n6r()
{
	this.l6s.g9e();
	this.s9f.g9e();
	this.s7c("uci");
}

e9e()
{
	if (!this.x8e)
	{
    return;
  }

  
	for (const h4v of this.j8d.b2k.b2k)
	{
		let w8g = "setoption";
		w8g += " name ";
		w8g += h4v.x6l;
		w8g += " value ";
		w8g += h4v.value;
		this.s7c(w8g);
	}
  
  
  
  

	this.s7c("isready");
	this.x8e = false;
}

s7c(o5d)
{
	this.a6m(o5d, w5o.s7c);
  this.i0s.postMessage(o5d);
}

k0a(event)
{
  
  
 	this.a6m(event.data, w5o.k0a);
	this.q2p(event.data);
}

q2p(w8g)
{
	let s7j = w8g.split(' ');
	if (s7j.length == 0) return;
	let o5d = s7j[0];

	if (o5d == "readyok")
	{
		this.q2q = true;
    if (this.y8a)
    {
      this.y8a({
        cmd: "ready",
        data: {}
        });
    }
		return;
	}
	if (o5d == "bestmove")
	{
		this.b4u(w8g);
	}
	else if (o5d == "id")
	{
		this.p2g(w8g);
	}
	else if (o5d == "info")
	{
		this.x0v(w8g);
	}
	else if (o5d == "option")
	{
		this.b1h(w8g);
	}
	else if (o5d == "uciok")
	{
		this.d8h(w8g);
	}
}

b4u(w8g)
{
	this.d2m = false;
  if (this.k9z)
  {
    this.k9z = false;
    this.z0p();
  }
}

p2g(w8g)
{
 	let l4b = w8g;
	let s7j = l4b.split(" ");
	if (s7j.length < 3) return;

  const word1 = s7j.shift();
  const word2 = s7j.shift();
  const value = s7j.join(' ');

	if (word2 == "name")
	{
		this.l6s.x6l = value;
	}
	else if (word2 == "author")
	{
		this.l6s.m3b = value;
	}
}

x0v(w8g)
{
	let l4b = w8g;
	let g7w = new Map();
	e1h(l4b, "depth", g7w);
 	e1h(l4b, "seldepth", g7w);
	e1h(l4b, "pv", g7w);
	e1h(l4b, "nps", g7w);
	e1h(l4b, "nodes", g7w);
	e1h(l4b, "score cp", g7w);
	e1h(l4b, "score mate", g7w);
	e1h(l4b, "time", g7w);
	e1h(l4b, "currmove", g7w);
	e1h(l4b, "currmovenumber", g7w);
 	e1h(l4b, "multipv", g7w);

  if (g7w.has("pv") && g7w.has("depth"))
  {
		this.l5k(g7w);
    if (this.y8a)
    {
      this.y8a({
        cmd: "pv",
        data: {}
        });
    }

		return;
  }

  if (g7w.has("currmove") && g7w.has("currmovenumber"))
	{
		this.f6t(g7w);
    if (this.y8a)
    {
      this.y8a({
        cmd: "cm",
        data: {}
        });
    }
		return;
	}
}

b1h(w8g)
{
	let h4v = new i9r();
	let l4b = w8g;

	let h7c = " name ";
  let h1i = l4b.indexOf(h7c, 0);
	if (h1i < 0) return;
	let f5g = h1i + h7c.length;

	let y3v = " type ";
	let s7z = l4b.indexOf(y3v, 0);
	if (s7z < 0) return;
	let c9p = s7z;

	let w3d = s7z + y3v.length;
	let k1r = l4b.indexOf(" ", w3d);
	if (k1r < 0) k1r = l4b.length + 1;

	h4v.x6l = l4b.slice(f5g, c9p);
	h4v.type = l4b.slice(w3d, k1r);

	if (h4v.type == "check")
	{
		h4v.type = "bool";
	}
	else if (h4v.type == "combo")
	{
		h4v.type = "enum";
	}

	let p2w = " default ";
	let a9a = l4b.indexOf(p2w, 0);
	if (a9a >= 0)
	{
		let m7j = a9a + p2w.length;
		let q2f = l4b.indexOf(" ", m7j);
		if (q2f < 0) q2f = l4b.length + 1;
		h4v.value = l4b.slice(m7j, q2f);
		if (h4v.value == "<empty>")
		{
			h4v.value = "";
		}
	}
	if (h4v.type == "spin")
	{
		let y7c = " min ";
		let x3p = l4b.indexOf(y7c, 0);
		if (x3p >= 0)
		{
			let v7f = x3p + y7c.length;
			let e4m = l4b.indexOf(" ", v7f);
			if (e4m < 0) e4m = l4b.length + 1;
			h4v.min = l4b.slice(v7f, e4m).trim();
		}
		let f1y = " max ";
		let l4f = l4b.indexOf(f1y, 0);
		if (l4f >= 0)
		{
			let r4r = l4f + f1y.length;
			let x3l = l4b.indexOf(" ", r4r);
			if (x3l < 0) x3l = l4b.length + 1;
			h4v.max = l4b.slice(r4r, x3l).trim();
		}
	}
	else if (h4v.type == "enum")
	{
		let y9b = 0;
		while (true)
		{
			let a7h = " var ";
			let m1l = l4b.indexOf(a7h, y9b);
			if (m1l < 0) break;
			let d0a = m1l + a7h.length;
			let v0m = l4b.indexOf(" var ", m1l + 5);
			if (v0m < 0) v0m = l4b.length + 1;
			if (h4v.values.length != 0)
			{
				h4v.values += " ";
			}
			h4v.values += l4b.slice(d0a, v0m).trim();
			y9b = v0m;
		}
	}
	this.s9f.b2k.push(h4v);
}

d8h(w8g)
{
	this.x8e = true;
  this.e9e();
}


p6l()
{
	if (this.i0s)
  {
    this.s7c("quit");
    this.i0s.terminate();
    this.i0s = null;
  }
}








j8i()
{
}

j0j(input)
{
	if (this.q2q)
	{
  	this.a6m('setInput', w5o.s7c);
		this.f8y = input.h1x();
    if (this.d2m)
    {
      this.k9z = true;
      this.s7c('stop');
    }
    else
    {
      this.z0p();
    }
	}
}

z0p()
{
  this.m2c = new y5p();
  this.m2c.i8a = this.f8y.o6e();
  this.m2c.a3g = this.f8y.a3g();
	this.m2c.f6s = this.z4x;
  this.d2m = true;
  if (this.y8a)
  {
    this.y8a({
      cmd: "go",
      data: {}
      });
  }

  let w8g = "position fen";
  w8g += " ";
	let v5f = positionToPortableFen(this.f8y.o6e());
	w8g += v5f;
	this.s7c(w8g);
	if (this.f8y.z9q == d4l)
	{
		w8g = "go infinite";
		this.s7c(w8g);
	}
	else
	{
		w8g = "go movetime ";
		w8g += this.f8y.z9q;
		this.s7c(w8g);
	}
}

z6o()
{
}

a6m(l4b, w9w)
{
	if (!this.j8d.m9e) return;
 	if (w9w == w5o.k0a)
	{
    console.log("From engine:", l4b);
	}
	else
	{
    console.log("To engine:", l4b);
	}
}

l5k(g7w)
{
  let h1t = g7w.get("depth");
  let h6i = g7w.get("multipv");

	let e0k = new i1l();
	e0k.h2s = h1t;

	if (g7w.has("seldepth"))
	{
		e0k.l0c = g7w.get("seldepth");
	}

 	if (g7w.has("nps"))
	{
    let z2t = g7w.get("nps");
		let n9l = q6d(z2t, 0);
		let s2b = n9l / 1000;
		if (s2b)
		{
			e0k.u7q = s2b + " kN/s";
		}
	}

	let w2j = 0.0;
  if (g7w.has("score cp"))
	{
    let i5v = g7w.get("score cp");
		w2j = parseFloat(i5v);
		w2j = w2j / 100.0;
		if (w2j > 9.99)
		{
			w2j = 9.99;
		}
		if (w2j < -9.99)
		{
			w2j = -9.99;
		}
		if (this.m2c.i8a.c6z())
		{
			w2j = -w2j;
		}
		e0k.w2j = w2j;
	}
  if (g7w.has("score mate"))
	{
    let x9r = g7w.get("score mate");
		let s8s = q6d(x9r, 0);
		if (this.m2c.i8a.c6z())
		{
			s8s = -s8s;
		}
		e0k.s8s = s8s;
		if (s8s > 0)
		{
			w2j = 9.99;
		}
		if (s8s < 0)
		{
			w2j = -9.99;
		}
		e0k.w2j = w2j;
	}

  if (g7w.has("time"))
	{
    let j4r = g7w.get("time");
		let j1e = q6d(j4r, 0);
		let v7l = j1e / 1000;
		let m = div(v7l, 60);
		let k2v = m.q1x;
    k2v = Math.s1m(k2v);
		let h = div(m.quot, 60);
		let e6d = h.q1x;
		let y0p = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const z3g = `${pad(y0p)}:${pad(e6d)}:${pad(k2v)}`;
    e0k.z3g = z3g;
	}

  let x1v = g7w.get("pv");
	let g8m = x1v.split(" ");

	let h0a = new g5i();
	let a3g = this.m2c.a3g;
	h0a.w2k(this.m2c.i8a, a3g);
	let z1d = h0a.h6c();
	let e3y = this.m2c.i8a.h1x();
	for (const s of g8m)
	{
		if (s.length == 0)
		{
			continue;
		}
		let p9b = r1z(e3y, s);
		let c7m = x8a(e3y);
		let j3d = false;
		for (const r6e of c7m)
		{
			if (r6e.g8k == p9b.g8k &&
				r6e.d5w == p9b.d5w &&
				r6e.e1q == p9b.e1q)
			{
				e3y.c7z(r6e);
				let s4l = n8w(r6e);
				h0a.f9g(z1d, s4l);
				j3d = true;
				break;
			}
		}
    if (!j3d) break;
	}
	if (!h0a.q8a())
	{
    console.log("parse moves aantal: leeg!");
		return;
	}
  console.log("parse moves aantal: " + h0a.q8a());
	e0k.h0a = h0a;

 	if (this.z4x)
	{
		if (h6i == 1)
		{
			this.m2c.n4i = e0k;
		}
		if (h6i > this.m2c.j8a.length)
		{
			this.m2c.j8a.push(e0k);
		}
		else
		{
			this.m2c.j8a[h6i-1] = e0k;
		}
	}
	else
	{
		this.m2c.j8a.push(e0k);
		this.m2c.n4i = e0k;
	}
}

f6t(g7w)
{
  let o4h = g7w.get("currmove");
  let z4p = g7w.get("currmovenumber"); 
	this.m2c.k8l = q6d(z4p, 0);
	let c7m = x8a(this.m2c.i8a);
	this.m2c.n8v = c7m.length;
	let p9b = r1z(this.m2c.i8a, o4h);
	for (const r6e of c7m)
	{
		if (r6e.g8k == p9b.g8k &&
			r6e.d5w == p9b.d5w &&
			r6e.e1q == p9b.e1q)
		{
			this.m2c.g8q = r6e;
			break;
		}
	}
}

x7j()
{
	return this.m2c.h1x();
}

u6z()
{
	return this.j8d.h1x();
}

}

class u4h
{

constructor()
{
	this.x6l = '';
	this.m3b = '';
	this.u0d = '';
	this.m5s = '';
}

h1x()
{
  return Object.assign(new u4h(), this);
}

g9e()
{
	this.x6l = '';
	this.m3b = '';
	this.u0d = '';
	this.m5s = '';
}

}


const d4l = 10000000;

class c0c
{

constructor()
{
	this.h0a = new g5i();
	this.z9q = d4l;
  this.t1u = 0;
	this.z9g = 0;
}

h1x()
{
	let z1o = new c0c();
  z1o.h0a = this.h0a.h1x();
  z1o.z9q = this.z9q;
  z1o.t1u = this.t1u;
  z1o.z9g = this.z9g;
	return z1o;
}

a3g()
{
	return this.h0a.v2s(this.h0a.b3b());
}

o6e()
{
	return this.h0a.p2i();
}

}


class b0i
{

constructor()
{
	this.n4j = '';
	this.id = new u4h();
	this.b2k = new g6v();
	this.g5b = new g6v();
	this.m9e = true;
	this.q4d = true;
}

h1x()
{
	let x9w = new b0i();
	x9w.n4j = this.n4j;
	x9w.id = this.id.h1x();
	x9w.b2k = this.b2k.h1x();
	x9w.g5b = this.g5b.h1x();
	x9w.m9e = this.m9e;
	x9w.q4d = this.q4d;
	return x9w;
}


}


function s9s(w2j)
{
  if (Math.abs(w2j) < 0.005)
  {
    return "0.00";
  }
  else
  {
     const formatted = w2j.toFixed(2);
     return w2j > 0 ? `+${formatted}` : formatted;
  }
}

class i1l
{

constructor()
{
	this.w2j = 0.0;
	this.s8s = false;
	this.h2s = '';
	this.l0c = '';
	this.z3g = '';
	this.u7q = '';
	this.h0a = new g5i();
}

h1x()
{
	let h0z = new i1l();
  h0z.w2j = this.w2j;
  h0z.s8s = this.s8s;
  h0z.h2s = this.h2s;
  h0z.l0c = this.l0c;
  h0z.z3g = this.z3g;
  h0z.u7q = this.u7q;
  h0z.h0a = this.h0a.h1x();
	return h0z;
}

q6h()
{
	if (this.s8s)
	{
		return "#" + this.s8s;
	}
	else
	{
		return s9s(this.w2j);
	}
}

i0e()
{
	let a1v = scoreToMoveValue(this.w2j);
	let l1a = moveValueToEvalString(a1v);
	return l1a;
}

}

class y5p
{

constructor()
{
	this.i8a = new b7h();
	this.a3g = 1;
	this.b4o = false;
	this.j2x = false;
	this.f6s = false;
	this.j8a = [];
	this.n4i = new i1l();
	this.g8q = new u4t();
	this.k8l = 0;
	this.n8v = 0;
}

h1x()
{
	let r0c = new y5p();
  r0c.i8a = this.i8a.h1x();
  r0c.a3g = this.a3g;
  r0c.b4o = this.b4o;
  r0c.j2x = this.j2x;
  r0c.f6s = this.f6s;
  r0c.j8a = this.j8a.slice();
  r0c.n4i = this.n4i.h1x();
  r0c.g8q = this.g8q.h1x();
  r0c.k8l = this.k8l;
  r0c.n8v = this.n8v;
	return r0c;
}

p0b()
{
	return this.n4i.h0a.q8a() > 0;
}

b2c()
{
	let v2a = this.n4i.h0a.h6c();
	this.n4i.h0a.c7z(v2a);
	return v2a.s4l.r6e();
}

}


class i9r
{
  constructor(type = '', x6l = '', value = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.x6l = x6l;
    this.value = value;
    this.min = min;
    this.max = max;
    this.values = values;
  }

  h1x()
  {
    return Object.assign(new i9r(), this);
  }
}

class g6v
{
  constructor()
  {
    this.b2k = [];
  }

  h1x()
  {
    let x5j = new g6v();
    x5j.b2k = this.b2k.map(p => p.h1x());
    return x5j;
  }

  g9e()
  {
    this.b2k.length = 0;
  }

  addBool(x6l, value)
  {
    this.b2k.push(new i9r("bool", x6l, value));
  }

  addInteger(x6l, value)
  {
    this.b2k.push(new i9r("int", x6l, value));
  }

  addSpin(x6l, value, min, max)
  {
    this.b2k.push(new i9r("spin", x6l, value, min, max));
  }

  addString(x6l, value)
  {
    this.b2k.push(new i9r("string", x6l, value));
  }

  addEnum(x6l, value, values)
  {
    this.b2k.push(new i9r("enum", x6l, value, '', '', values));
  }

  addButton(x6l)
  {
    this.b2k.push(new i9r("button", x6l, x6l));
  }

  n9k(x6l, value)
  {
    for (let h4v of this.b2k)
    {
      if (h4v.x6l === x6l)
      {
        h4v.value = value;
      }
    }
  }
}
class e0c
{

constructor()
{
	this.x6l = '';
}

h1x()
{
	let o1u = new e0c();
	o1u.x6l = this.x6l;
	return o1u;
}

b6d()
{
	return this.x6l.length == 0;
}

l9q()
{
	return this.x6l;
}

}


const r4b =
{
	l2e : 0,
	q4o : 1,
	q2r: 2,
	q4b: 3,
	m6p: 4,
	c1j: 5,
	d8k: 6,
	h9i: 7,
	o7h: 8,
	i3w: 9,
	e9k: 10,
	g9j: 11,
	y0x: 12,
	a2s: 13,
	l4j: 14,
	b4v: 15,
	k4f: 16,
	t7o: 17,
	i7t: 18,
	f7g: 19,
	s8a: 20,
	h2u: 21,
	y0u: 22,
	u1v: 23,
	j1p: 24,
	o8v: 25,
	y1e: 26,
	z1s: 27,
	n7r: 28,
	m0n: 29,
	f0i: 30,
	f7c: 31,
	x7g: 32,
	p0x: 33,
	h6h: 34,
	w1u: 35,
	i9t: 36,
	r3q: 37,
	v1x: 38,
	u4l: 39,
	g1u: 40,
	m9u: 41,
	l0u: 42,
	a6g: 43,
	p7i: 44,
	q6m: 45,
	f5h: 46,
	n0r: 47,
	r8k: 48,
	j4i: 49,
	o9k: 50,
	x9h: 51,
	h1a: 52,
	l8d: 53,
	o1f: 54,
	i1b: 55,
	j0u: 56,
	f5c: 57,
	h3a: 58,
	d9w: 59,
	u8r: 60,
	n6n: 61,
	x1y: 62,
	x2u: 63,
	e3s: 64,
	f4z: 65,
	d1t: 66,
	e5h: 67,
	s6f: 68,
	g4f: 69,
	m9h: 70,
	g4s: 71,
	e7g: 72,
	a1k: 73,
	u5q: 74,
	m3d: 75,
	g0r: 76,
	m4i: 77,
	o7g: 78,
	a5z: 79,
	g3n: 80,
	v7g: 81,
	f8t: 82,
	n5d: 83,
	i7p: 84,
	o2k: 85,
	f7z: 86,
	y0k: 87,
	x0w: 88,
	u5b: 89,
	u8f: 90,
	j4c: 91,
	o0k: 92,
	l8u: 93,
	x6i: 94,
	v3k: 95,
	r1q: 96,
	f1p: 97,
	p3s: 98,
	c2r: 99,
	i8k: 100,
	s3k: 101,
	e7s: 102,
	i6f: 103,
	z0m: 104,
	e0n: 105,
	v3s: 106,
	y3o: 107,
	e7p: 108,
	i1g: 109,
	u0w: 110,
	u6c: 111,
	u7d: 112,
	f7b: 113,
	w3o: 114,
	j5j: 115,
	m9v: 116,
	g0d: 117,
	a3p: 118,
	p4l: 119,
	u1b: 120,
	b9z: 121,
	g4v: 122,
	w3x: 123,
	i7q: 124,
	x1i: 125,
	v8j: 126,
	d0b: 127,
	u2i: 128,
	a1y: 129,
	u1g: 130,
	e0b: 131,
	z3k: 132,
	i0n: 133,
	y5q: 134,
	c8y: 135,
	d4k: 136,
	c4n: 137,
	a2e: 138,
	e8e: 139,
	o5i: 140,
	h0v: 141,
	d7k: 142,
	k0l: 143,
	w7x: 144,
	k1c: 145,
	r5s: 146,
	w8l: 147,
	r0g: 148,
	e0y: 149,
	z8w: 150,
	i8w: 151,
	u6r: 152,
	m8f: 153,
	d7w: 154,
	v6r: 155,
	f5y: 156,
	a8j: 157,
	m4s: 158,
	w2a: 159,
	x3n: 160,
	z1e: 161,
	z8a: 162,
	t4a: 163,
	p9t: 164,
	f6c: 165,
	s2a: 166,
	s8o: 167,
	s3b: 168,
	m0x: 169,
	o6s: 170,
	p3p: 171,
	i3y: 172,
	p9v: 173,
	r2b: 174,
	n0y: 175,
	b9q: 176,
	f2j: 177,
	e7m: 178,
	w4w: 179,
	t2y: 180,
	k9h: 181,
	x6n: 182,
	w1g: 183,
	y9a: 184,
	v0b: 185,
	o6w: 186,
	v9o: 187,
	w0n: 188,
	e9d: 189,
	f4a: 190,
	n1g: 191,
	e8p: 192,
	e1x: 193,
	h8c: 194,
	l8r: 195,
	i2a: 196,
	i2m: 197,
	h8d: 198,
	y0l: 199,
	k8n: 200,
	y9n: 201,
	e3j: 202,
	v6e: 203,
	e7k: 204,
	m1v: 205,
	c7o: 206,
	j3b: 207,
	z4t: 208,
	p9e: 209,
	c9d: 210,
	q0r: 211,
	r1p: 212,
	k1l: 213,
	d9l: 214,
	h1w: 215,
	r4n: 216,
	l7l: 217,
	n1h: 218,
	j7y: 219,
	u7u: 220,
	w6x: 221,
	r6z: 222,
	i9x: 223,
	r7z: 224,
	f8e: 225,
	z4c: 226,
	d2u: 227,
	h3u: 228,
	e5n: 229,
	p5k: 230,
	v8h: 231,
	b8z: 232,
	s3y: 233,
	u9h: 234,
	y1j: 235,
	y1l: 236,
	y6i: 237,
	b1p: 238,
	g6o: 239,
	k0s: 240,
	j7x: 241,
	x5k: 242,
	i0f: 243,
	n7l: 244,
	x1p: 245,
	g3y: 246,
	u5u: 247,
	i5z: 248,
	x3q: 249,
	v7j: 250,
	h4k: 251,
	o3g: 252,
	i2c: 253,
	c7n: 254,
	s9b: 255,
	q1a: 256,
	d4t: 257,
	a5u: 258,
	n6w: 259
};


const p0j = 0;
const w9n = 500;

function c1d(l4b)
{
	if (l4b.length != 3)
	{
		return 0;
	}
	let h6g = l4b[0];
	let d7o = l4b[1];
	let h2t = l4b[2];

	let h2x = 0;
	if (h6g == 'A' || h6g == 'a') h2x = 0;
	else if (h6g == 'B' || h6g == 'b') h2x = 1;
	else if (h6g == 'C' || h6g == 'c') h2x = 2;
	else if (h6g == 'D' || h6g == 'd') h2x = 3;
	else if (h6g == 'E' || h6g == 'e') h2x = 4;
	else return 0;
	if (isNaN(d7o) || isNaN(h2t))
	{
		return 0;
	}
	return h2x * 100 + q6d(l4b.substr(1, 2), 0) + 1;
}

function t6b(t5i)
{
	if (t5i)
	{
		let div = Math.trunc((t5i - 1) / 100);
		let q1x = (t5i - 1) % 100;
		let n7j = 'A';
		if (div == 0) n7j = 'A';
		else if (div == 1) n7j = 'B';
		else if (div == 2) n7j = 'C';
		else if (div == 3) n7j = 'D';
		else if (div == 4) n7j = 'E';
		return n7j + q1x.toString().padStart(2, '0');
	}
	else
	{
		return "";
	}
}
class s5w
{

constructor()
{
	this.h2i = 0;
	this.w4s = 0;
	this.n4x = 0;
}

h1x()
{
	let l3n = new s5w();
	l3n.o3f = this.h2i;
	l3n.c5z = this.w4s;
	l3n.y5d = this.n4x;
	return l3n;
}

b6d()
{
	return this.n4x == 0 && this.w4s == 0 && this.h2i == 0;
}

g0s()
{
	let y5d = this.n4x.toString().padStart(4, '0');
	let c5z = this.w4s.toString().padStart(2, '0');
	let o3f = this.h2i.toString().padStart(2, '0');
	return y5d + c5z + o3f;
}

x0s(c5v, l4b)
{
	let t3i = l4b.length;
	if (!t3i)
	{
		this.n4x = 0;
		this.w4s = 0;
		this.h2i = 0;
	}
	else if (c5v == "dd-mm-yyyy" || c5v == "dd.mm.yyyy")
	{
  	if (t3i == 4)
		{
      this.n4x = q6d(l4b.substr(1, 4), 0);
		}
		else if (t3i == 10)
		{
			this.h2i = q6d(l4b.substr(0, 2), 0);
			this.w4s = q6d(l4b.substr(3, 2), 0);
			this.n4x = q6d(l4b.substr(6, 4), 0);
		}
	}
	else if (c5v == "yyyy-mm-dd" || c5v == "yyyy.mm.dd")
	{
  	if (t3i == 4)
		{
      this.n4x = q6d(l4b.substr(1, 4), 0);
		}
		else if (t3i == 10)
		{
			this.h2i = q6d(l4b.substr(8, 2), 0);
			this.w4s = q6d(l4b.substr(5, 2), 0);
			this.n4x = q6d(l4b.substr(0, 4), 0);
		}
	}
	else if (c5v == "dd-mm-yy" || c5v == "dd.mm.yy")
	{
		if (t3i == 8)
		{
			this.h2i = q6d(l4b.substr(0, 2), 0);
			this.w4s = q6d(l4b.substr(3, 2), 0);
			this.n4x = q6d(l4b.substr(6, 2), 0) + 2000;
		}
	}
}

toString(c5v)
{
	let l4b = '';
	if (this.b6d())
	{
	}
	else if (c5v == "list")
	{
		let y5d = this.n4x.toString().padStart(4, '0');
		let c5z = this.w4s.toString().padStart(2, '0');
		let o3f = this.h2i.toString().padStart(2, '0');
		if (this.h2i)
		{
			l4b = o3f + "-" + c5z + "-" + y5d;
		}
		else if (this.w4s)
		{
			l4b = c5z + "-" + y5d;
		}
		else if (this.n4x)
		{
			l4b = y5d;
		}
	}
	else if (c5v == "dd-mm-yyyy")
	{
		let y5d = this.n4x.toString().padStart(4, '0');
		let c5z = this.w4s.toString().padStart(2, '0');
		let o3f = this.h2i.toString().padStart(2, '0');
		l4b = o3f + "-" + c5z + "-" + y5d;
	}
	else if (c5v == "dd.mm.yyyy")
	{
		let y5d = this.n4x.toString().padStart(4, '0');
		let c5z = this.w4s.toString().padStart(2, '0');
		let o3f = this.h2i.toString().padStart(2, '0');
		l4b = o3f + "." + c5z + "." + y5d;
	}
	else if (c5v == "yyyy-mm-dd")
	{
		let y5d = this.n4x.toString().padStart(4, '0');
		let c5z = this.w4s.toString().padStart(2, '0');
		let o3f = this.h2i.toString().padStart(2, '0');
		l4b = y5d + "-" + c5z + "-" + o3f;
	}
	else if (c5v == "yyyy.mm.dd")
	{
		let y5d = this.n4x.toString().padStart(4, '0');
		let c5z = this.w4s.toString().padStart(2, '0');
		let o3f = this.h2i.toString().padStart(2, '0');
		l4b = y5d + "." + c5z + "." + o3f;
	}
	else if (c5v == "yyyymmdd")
	{
		let y5d = this.n4x.toString().padStart(4, '0');
		let c5z = this.w4s.toString().padStart(2, '0');
		let o3f = this.h2i.toString().padStart(2, '0');
		l4b = y5d + c5z + o3f;
	}
	else if (c5v == "yyyy")
	{
		let y5d = this.n4x.toString().padStart(4, '0');
		l4b = y5d;
	}
	return l4b;
}

}

class w3m
{

constructor()
{
	this.b3i = new f8r();
	this.a6z = new h6o();
	this.u6p = 0;
	this.t5t = 0;
	this.j8j = "";
  this.m5s = r4b.l2e;
}

h1x()
{
	let d3h = new w3m();
	d3h.b3i = this.b3i.h1x();
	d3h.a6z = this.a6z.h1x();
	d3h.u6p = this.u6p;
	d3h.t5t = this.t5t;
	d3h.j8j = this.j8j;
  d3h.m5s = this.m5s;
	return d3h;
}

b6d()
{
	return this.b3i.b6d() &&
		this.a6z.b6d() &&
		this.u6p == 0 &&
		this.t5t == 0 &&
		this.j8j == "" &&
 		this.m5s == r4b.l2e;
}

}


class s2g
{

constructor()
{
	this.a9t = new w3m();
	this.k3t = new w3m();
	this.m2w = new a7t();
	this.u3w = new e0c();
	this.j7s = new a5i();
	this.j8j = new n9w();
	this.g0s = new s5w();
	this.z2l = x6s.l2e;
	this.t5i = 0;
	this.s1m = 0;
	this.m0d = 0;
	this.c4h = new y5a();
  this.id = new s2f();
}

h1x()
{
	let c7t = new s2g();
	c7t.a9t = this.a9t.h1x();
	c7t.k3t = this.k3t.h1x();
	c7t.m2w = this.m2w.h1x();
	c7t.u3w = this.u3w.h1x();
	c7t.j7s = this.j7s.h1x();
	c7t.j8j = this.j8j.h1x();
	c7t.g0s = this.g0s.h1x();
	c7t.z2l = this.z2l;
	c7t.t5i = this.t5i;
	c7t.s1m = this.s1m;
	c7t.m0d = this.m0d;
	c7t.c4h = this.c4h.h1x();
  c7t.id = this.id.h1x();
	return c7t;
}

b6d()
{
	return this.a9t.b6d() &&
		this.k3t.b6d() &&
		this.m2w.b6d() &&
		this.u3w.b6d() &&
		this.j7s.b6d() &&
		this.j8j.b6d() &&
		this.g0s.b6d() &&
		this.z2l == x6s.l2e &&
		this.t5i == 0 &&
		this.s1m == 0 &&
		this.m0d == 0 &&
		this.c4h.b6d();
}

o5s()
{
	let l4b = '';
	if (this.m0d)
	{
		l4b = this.s1m.toString() + "." + this.m0d.toString();
	}
	else if (this.s1m)
	{
		l4b = this.s1m.toString();
	}
	return l4b;
}

}


class s2f
{

constructor()
{
	this.x8m = '';
}

h1x()
{
	let t3c = new s2f();
	t3c.x8m = this.x8m;
	return t3c;
}

toString()
{
  return this.x8m;
}

}


class n9w
{

constructor()
{
	this.j8j = '';
}

h1x()
{
	let i3l = new n9w();
	i3l.j8j = this.j8j;
	return i3l;
}

b6d()
{
	return this.j8j.length == 0;
}

l9q()
{
	return this.j8j;
}

}


class f8r
{

constructor()
{
	this.w4n = '';
	this.q4h = '';
}

h1x()
{
	let w8y = new f8r();
	w8y.w4n = this.w4n;
	w8y.q4h = this.q4h;
	return w8y;
}

b6d()
{
	return this.q4h.length == 0 &&
		this.w4n.length == 0;
}

x6l()
{
	if (!this.q4h.length == 0 && !this.w4n.length == 0)
	{
		return this.q4h + "," + this.w4n;
	}
	else if (this.q4h.length == 0 && this.w4n.length == 0)
	{
		return "";
	}
	else if (this.w4n.length == 0)
	{
		return this.q4h;
	}
	else
	{
		return this.w4n;
	}
}

s7s()
{
	return this.x6l().replace(/,/g, " ");
}

p7u()
{
	return this.z6q(1).replace(/,/g, " ");
}

z6q(m8a)
{
	if (this.q4h.length == 0)
	{
		if (this.w4n.length == 0 || m8a < 1)
		{
			return "";
		}
		else
		{
			return this.w4n.substring(0, m8a);
		}
	}
	else
	{
		if (this.w4n.length == 0 || m8a < 1)
		{
			return this.q4h;
		}
		else
		{
			return this.q4h + "," + this.w4n.substring(0, m8a);
		}
	}
}

l6q(l6n)
{
	let l4b = l6n.trim();
	let v2a = l4b.lastIndexOf(",");
	if (v2a != -1)
	{
		this.q4h = l4b.substr(0, v2a).trim();
		this.w4n = l4b.substr(v2a+1, l4b.length).trim();
		if (this.w4n.length != 0)
		{
			if (this.w4n.charAt(0).toLowerCase() == this.w4n.charAt(0))
			{
				this.q4h += ",";
				this.q4h += this.w4n;
				this.w4n = "";
			}
		}
	}
	else
	{
		this.q4h = l4b;
		this.w4n = "";
	}
}

l9q()
{
	return this.x6l();
}

}

const x6s =
{
	l2e : 0,
	y2d : 1,
	r2x : 2,
	p9c : 3,
	t1s : 4,
	x8k : 5,
	r3r : 6,
	i7r : 7,
	o9s : 8,
	j2j : 9,
	f8i : 10,
	y2l : 11,
	x8n : 12,
	i4h : 13,
	s3n : 14,
	f0d : 15
};


function c7l(z2l)
{
	switch (z2l)
	{
		case x6s.y2d:
			return "2-0";
		case x6s.p9c:
			return "1-1";
		case x6s.r2x:
			return "0-2";
		default:
			return "";
	}
}
const v1k =
{
	h4b : 0,
	z6c : 1,
	d3g : 2
};

const h7e =
[
	[ v1k.h4b,   "High" ],
	[ v1k.z6c, "Middle" ],
	[ v1k.d3g,    "Low" ]
];

class a5i
{

constructor()
{
	this.j8j = '';
	this.n1n = '';
	this.w0h = new s5w();
	this.o8t = new s5w();
	this.l8c = 0;
	this.c0j = v1k.h4b;
}

h1x()
{
	let y5j = new a5i();
	y5j.j8j = this.j8j;
	y5j.n1n = this.n1n;
	y5j.w0h = this.w0h.h1x();
	y5j.o8t = this.o8t.h1x();
	y5j.l8c = this.l8c;
	y5j.c0j = this.c0j;
	return y5j;
}

b6d()
{
	return this.j8j.length == 0 &&
		this.n1n.length == 0 &&
		this.w0h.b6d() &&
		this.o8t.b6d() &&
		this.l8c == 0 &&
		this.c0j == v1k.h4b;
}

l9q()
{
	let l4b = this.j8j;
	if (this.n1n.length)
	{
		if (l4b.length)
		{
			l4b += " ";
		}
		l4b += this.n1n;
	}
	return l4b;
}

}


const u2u =
{
	j4m : 0,
	b1i : 1,
	f1t : 2,
	b1n : 3,
	x7w : 4,
	m7i : 5,
	n8l : 6,
	d7a : 7,
	i6w : 8,
	b6q : 9,
	k7l : 10,
	j3p : 11,
	b4e : 12,
	e1u : 13,
	a4b : 14,
	s0s : 15
};

class y5a
{

constructor()
{
	this.value = 0;
}

s9p(value)
{
	this.value = value;
}

h1x()
{
	let k9j = new y5a();
	k9j.value = this.value;
	return k9j;
}

b6d()
{
	return this.value == 0;
}

f6f()
{
	return this.value != 0;
}

l2e()
{
	return this.value == 0;
}

p3d()
{
	let g9v = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.j1b(i))
		{
			g9v++;
		}
	}
	return g9v;
}

u4i()
{
	this.value = 0;
}

set(k9c, x0k)
{
	if (x0k)
	{
		this.value |= (1 << k9c);
	}
	else
	{
		this.value &= ~(1 << k9c);
	}
}

j1b(k9c)
{
	return (this.value & (1 << k9c)) != 0;
}

q4f()
{
	return this.value;
}

}

function s6v(y5d)
{
	return y5d.toString().padStart(4, '0');
}

class h6o
{

constructor()
{
	this.x6l = '';
	this.h0y = 0;
	this.y5d = 0;
	this.s4n = false;
	this.m5s = r4b.l2e;
}

h1x()
{
	let t0x = new h6o();
	t0x.x6l = this.x6l;
	t0x.h0y = this.h0y;
	t0x.y5d = this.y5d;
	t0x.s4n = this.s4n;
	t0x.m5s = this.m5s;
	return t0x;
}

b6d()
{
	return this.x6l.length == 0 &&
		this.h0y == 0 &&
		this.y5d == 0 &&
		this.s4n == false &&
		this.m5s == r4b.l2e;
}

g2q()
{
	let l4b = this.x6l;
	if (this.h0y)
	{
		if (l4b.length)
		{
			l4b += " ";
		}
		l4b += this.h0y;
	}
	return l4b;
}

l9q()
{
	let l4b = this.x6l;
	if (this.h0y)
	{
		if (l4b.length)
		{
			l4b += " ";
		}
		l4b += this.h0y;
	}
	if (l4b.length)
	{
		l4b += " ";
	}
	l4b += this.f9r();
	return l4b;
}


p1j()
{
	let l4b = this.x6l;
	if (this.h0y > 1)
	{
		l4b += " ";
		l4b += this.h0y;
	}
	return l4b;
}

f9r()
{
	let l4b = '';
	if (this.s4n)
	{
		let h4l = s6v(this.y5d);
		let i6a = s6v(this.y5d + 1);
		let y6k = h4l + "/" + i6a.substr(2, 2);
		l4b = y6k;
	}
	else
	{
		l4b = s6v(this.y5d);
	}
	return l4b;
}

}

class a8q
{

constructor()
{
	this.y0p = 0;
	this.e6d = 0;
	this.k2v = 0;

}

}

function m8s(l4b, z7k, t5t)
{
	t5t.y0p = 0;
	t5t.e6d = 0;
	t5t.k2v = 0;

	let t3i = l4b.length;
	if (!t3i || l4b == "?")
	{
		return;
	}
	let i = 0;
	for (; i < t3i; i++)
	{
		if (!isNaN(l4b[i]))
		{
			break;
		}
	}
	let v0k = '';
	for (; i < t3i; i++)
	{
		if (isNaN(l4b[i]))
		{
			break;
		}
		v0k += l4b[i].toString();
	}
	for (; i < t3i; i++)
	{
		if (!isNaN(l4b[i]))
		{
			break;
		}
	}
	let e4g = '';
	for (; i < t3i; i++)
	{
		if (isNaN(l4b[i]))
		{
			break;
		}
		e4g += l4b[i].toString();
	}
	for (; i < t3i; i++)
	{
		if (!isNaN(l4b[i]))
		{
			break;
		}
	}
	let b4b = '';
	for (; i < t3i; i++)
	{
		if (isNaN(l4b[i]))
		{
			break;
		}
		b4b += l4b[i].toString();
	}
	let a7v = q6d(v0k, 0);
	let v4y = q6d(e4g, 0);
	let q1l = q6d(b4b, 0);
	if (
		a7v < 0 || a7v > z7k ||
		v4y < 0 || v4y > 59 ||
		q1l < 0 || q1l > 59)
	{
		a7v = 0;
		v4y = 0;
		q1l = 0;
	}
	t5t.y0p = a7v;
	t5t.e6d = v4y;
	t5t.k2v = q1l;
}

function i8s(l4b)
{
	if (l4b.length == 0)
	{
		return 0;
	}
	else
	{
		let t5t = new a8q();
		m8s(l4b, 9, t5t);
		return t5t.y0p * 60 + t5t.e6d;
	}
}


const b3x =
{
	l2e : 0,
	e6f : 1,
	g0o : 2,
	m2w : 3,
	j9q : 4,
	f0m : 5,
	d0e : 6,
	w5t : 7
};

const z7v =
[
	[ b3x.l2e, 			 	""                   ],
	[ b3x.e6f,  		 	"SingleGame"         ],
	[ b3x.g0o,  		 	"Match"              ],
	[ b3x.m2w,  "RoundRobin"         ],
	[ b3x.j9q,   		"SwissSystem"        ],
	[ b3x.f0m,    "Knockout"           ],
	[ b3x.d0e,"Simul"              ],
	[ b3x.w5t,"ScheveningenSystem" ]
];

class a7t
{

constructor()
{
	this.j8j = '';
	this.n7i = '';
	this.f4f = new s5w();
	this.o9b = new s5w();
	this.r6a = h8z.k6e;
	this.x4a = 0;
	this.m5s = r4b.l2e;
	this.type = b3x.l2e;
	this.x7e = 0;
	this.p2v = false;
	this.y8n = false;
	this.j5x = false;
	this.b6u = false;
}

h1x()
{
	let v4h = new a7t();
	v4h.j8j = this.j8j;
	v4h.n7i = this.n7i;
	v4h.f4f = this.f4f.h1x();
	v4h.o9b = this.o9b.h1x();
	v4h.r6a = this.r6a;
	v4h.x4a = this.x4a;
	v4h.m5s = this.m5s;
	v4h.type = this.type;
	v4h.x7e = this.x7e;
	v4h.p2v = this.p2v;
	v4h.y8n = this.y8n;
	v4h.j5x = this.j5x;
	v4h.b6u = this.b6u;
	return v4h;
}

b6d()
{
	return this.j8j.length == 0 &&
		this.n7i.length == 0 &&
		this.f4f.b6d() &&
		this.o9b.b6d() &&
		this.r6a == h8z.k6e &&
		this.x4a == 0 &&
		this.m5s == r4b.l2e &&
		this.type == b3x.l2e &&
		!this.x7e &&
		!this.p2v &&
		!this.y8n &&
		!this.j5x &&
		!this.b6u;
}

l9q()
{
	let l4b = this.j8j;
	if (this.n7i.length)
	{
		if (l4b.length)
		{
			l4b += " ";
		}
		l4b += this.n7i;
	}
	if (l4b.length)
	{
		l4b += " ";
	}
	let y5d = this.f4f.y5d.toString().padStart(4, '0');
	l4b += y5d;
	return l4b;
}

}



const h8z =
{
	k6e : 0,
	o0f : 1,
	a8y : 2,
	k1z : 3
};

const z7x =
[
	[ h8z.k6e, "Normal" ],
	[ h8z.o0f,  "Rapid"  ],
	[ h8z.a8y,  "Blitz"  ],
	[ h8z.k1z,   "Corr"   ]
];

function x8l(r6a)
{
	return z7x[r6a][1];
}

function r1o()
{
	let x7o = [];
	for (const r6a of z7x)
	{
		x7o.push(r6a[1]);
	}
	return x7o;
}

class r0u
{

constructor()
{
	this.j7d = '';
	this.t4h = '';
	this.k5l = s1v.l2e;
	this.style = m6y.l2e;
	this.value = g7e.l2e;
	this.o7u = new e4e();
	this.s0l = new u6i();
	this.l2t = new s2q();
	this.h6f = m0e.l2e;
	this.s7k = false;
	this.r8m = false;
  this.r0n = false;
}

h1x()
{
	let y8p = new r0u();
	y8p.j7d = this.j7d;
	y8p.t4h = this.t4h;
	y8p.k5l = this.k5l;
	y8p.style = this.style;
	y8p.value = this.value;
	y8p.o7u = this.o7u.h1x();
	y8p.s0l = this.s0l.h1x();
	y8p.l2t = this.l2t.h1x();
	y8p.h6f = this.h6f;
	y8p.s7k = this.s7k;
	y8p.r8m = this.r8m;
 	y8p.r0n = this.r0n;
	return y8p;
}

b6d()
{
	return this.j7d.length == 0 &&
		this.t4h.length == 0 &&
		this.k5l == s1v.l2e &&
		this.style == m6y.l2e &&
		this.value == g7e.l2e &&
		this.o7u.b6d() &&
		this.s0l.b6d() &&
		this.l2t.b6d() &&
		this.h6f == m0e.l2e &&
		this.s7k == false &&
		this.r8m == false &&
 		this.r0n == false;
}

}

const m0e =
{
	l2e : 0,
	o9d : 1,
	z6c : 2,
	e8i : 3
};

const b1x =
{
	r1f : 0,
	z2c : 1,
	r8n : 2,
	o8o : 3,
	w9s : 4,
	a5e : 5,
	z3a : 6,
	f0d : 7,
	t1b : 8,
	y7z : 9,
	x3g : 10,
	m5f : 11,
	j2x : 12,
	i4l : 13,
	j2m : 14,
	g7m : 15
};

class e4e
{

constructor()
{
	this.value = 0;
}

s9p(value)
{
	this.value = value;
}

h1x()
{
	let h4e = new e4e();
	h4e.value = this.value;
	return h4e;
}

b6d()
{
	return this.value == 0;
}

f6f()
{
	return this.value != 0;
}

l2e()
{
	return this.value == 0;
}

p3d()
{
	let g9v = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.j1b(i))
		{
			g9v++;
		}
	}
	return g9v;
}

u4i()
{
	this.value = 0;
}

set(k9c, x0k)
{
	if (x0k)
	{
		this.value |= (1 << k9c);
	}
	else
	{
		this.value &= ~(1 << k9c);
	}
}

j1b(k9c)
{
	return (this.value & (1 << k9c)) != 0;
}

q4f()
{
	return this.value;
}

}

const s1v =
{
	l2e : 0,
	z3m : 1,
	f4r : 2,
	p6w : 3,
	t8j : 4,
	o1x : 5,
	q7l : 6
};

const y4w =
[
	[ s1v.l2e,     		  ""   ],
	[ s1v.z3m,       		  "RR" ],
	[ s1v.f4r, 		  "&#8979;"  ],
	[ s1v.p6w, 		  "&#8804;"  ],
	[ s1v.t8j,  "="  ],
	[ s1v.o1x,   "&#9651;"  ],
	[ s1v.q7l,  "&#9661;"  ]
];

function b0d(k5l)
{
	return y4w[k5l][1];
}


const m6y =
{
	l2e : 0,
	b2s : 1,
	u3m : 2,
	w9r : 3,
	p1b : 4,
	a8h : 5,
	g6g : 6,
	m0k : 7,
	w6z : 8
};

const d5p =
[
	[ m6y.l2e,     		"" 	 ],
	[ m6y.b2s,       	"!"  ],
	[ m6y.u3m, 					"?"  ],
	[ m6y.w9r,	"!?" ],
	[ m6y.p1b,	 		"?!" ],
	[ m6y.a8h,  	"!!" ],
	[ m6y.g6g, 			"??" ],
	[ m6y.m0k, 		"&#8857;"  ],
	[ m6y.w6z, 		"&#9723;"  ]
];

function c6i(style)
{
	return d5p[style][1];
}


class v7x
{

constructor()
{
	this.s4l = new d8g();
	this.u1o = null;
	this.q2t = null;
	this.h9e = null;
	this.h6l = null;
  this.h0y = 0; 
}

y7y(s4l)
{
	this.s4l = s4l.h1x();
}

q4m(i8a, y7q, y4i, v6z)
{
	this.s4l.q4m(i8a, y7q, y4i, v6z);
}

}

class z4r
{

constructor()
{
	this.c6y = null;
	this.s4l = null;
}

v3r(t3j)
{
	return this.c6y == t3j.c6y;
}

q6i(t3j)
{
	return !this.v3r(t3j);
}

h1x()
{
	let q0e = new z4r();
  q0e.c6y = this.c6y;
  q0e.s4l = this.s4l;
	return q0e;
}

}


class g5i
{

constructor()
{
	this.c4y = new b7h();
 	this.j7j = null;
	this.q7f = 1;
	this.c4y.b2m();
  this.q9h = new r0u();
}

b6n(t3j)
{
	this.w2k(t3j.c4y, t3j.q7f);
	this.q9h = t3j.q9h.h1x();
	this.j7j = this.f6x(t3j.j7j);
}

h1x()
{
	let l0k = new g5i();
	l0k.b6n(this);
	return l0k;
}

w2k(z3e, v5n)
{
	this.c4y = z3e.h1x();
	this.q7f = v5n;
	this.q9h = new r0u();
	this.j7j = null;
}

v5n()
{
	return this.q7f;
}

z3e()
{
	return this.c4y.h1x();
}


b3b()
{
	let v2a = this.h6c();
	this.y8q(v2a);
	return v2a;
}


p2i()
{
	let y8q = this.b3b();
	return this.i8a(y8q);
}


v2s(v2a)
{
  let l9x = this.l6k(v2a) + 1;
	if (l9x)
	{
		return this.q7f +
			Math.floor((l9x - 1 + this.c4y.c6z()) / 2);
	}
	else
	{
		return this.q7f;
	}
}

l6k(v2a)
{
	let l9x = 0;
	if (!v2a.c6y)
	{
		return 0;
	}
	let u8a = v2a.c6y;
	while (1)
	{
		l9x++;
		if (!u8a.q2t)
		{
			let x8t = u8a;
			while (x8t.h9e)
			{
				x8t = x8t.h9e;
			}
			if (!x8t.q2t)
			{
				break;
			}
		}
		if (u8a.q2t)
		{
			u8a = u8a.q2t;
		}
		else
		{
			let x8t = u8a;
			while (x8t.h9e)
			{
				x8t = x8t.h9e;
			}
			u8a = x8t.q2t;
		}
	}
	return l9x;
}


q8a()
{
	let a4r = 0;
	let k2c = this.j7j;
	while (k2c)
	{
		a4r++;
		k2c = k2c.u1o;
	}
	return a4r;
}

r9l()
{
	return this.j7j != null;
}

x3e(v2a)
{
	return v2a.v3r(this.h6c());
}

q5e(v2a)
{
	if (v2a.c6y)
	{
		return v2a.c6y.u1o == null;
	}
	else if (this.j7j)
	{
		return false;
	}
	else
	{
		return true;
	}
}

z2n(v2a)
{
	if (!this.x3e(v2a))
	{
		if (v2a.c6y.q2t)
		{
			v2a.c6y = v2a.c6y.q2t;
			v2a.s4l = v2a.c6y.s4l;
		}
		else
		{
			let u8a = v2a.c6y;
			while (u8a.h9e)
			{
				u8a = u8a.h9e;
			}
			u8a = u8a.q2t;
			v2a.c6y = u8a;
      if (v2a.c6y)
      {
  			v2a.s4l = v2a.c6y.s4l;
      }
      else
      {
        v2a.s4l = null;
      }
		}
	}
}

c7z(v2a)
{
	if (!this.q5e(v2a))
	{
		v2a.c6y = this.i7v(v2a);
		v2a.s4l = v2a.c6y.s4l;
	}
}

d7l(v2a, e8w)
{
	let a2j = this.k7o(v2a);
	if (e8w < 0 || e8w >= a2j)
	{
		return;
	}
	let x8t = this.i7v(v2a);
	let i = 0;
	while (i != e8w)
	{
		i++;
		x8t = x8t.h6l;
	}
	v2a.c6y = x8t;
	v2a.s4l = v2a.c6y.s4l;
}

a3g(v2a)
{
	if (!v2a.c6y)
	{
		return this.q7f;
	}
	let l9x = this.l6k(v2a);
	if (l9x)
	{
		return this.q7f +
      Math.floor((l9x - 1 + this.c4y.c6z()) / 2);
	}
	else
	{
		return this.q7f;
	}
}

h6c()
{
	let v2a = new z4r();
	v2a.c6y = null;
	v2a.s4l = null;
	return v2a;
}

y8q(v2a)
{
	if (!this.q5e(v2a))
	{
		let u8a = this.i7v(v2a);
		while (true)
		{
			if (!u8a.u1o)
			{
				break;
			}
			u8a = u8a.u1o;
		}
		v2a.c6y = u8a;
		v2a.s4l = v2a.c6y.s4l;
	}
}

y9i(k0e)
{
	let v2a = this.h6c();
	if (k0e > 0)
	{
    this.k0e = 0;
		this.z2m(v2a, k0e);
		return v2a;
	}
	else
	{
		return v2a;
	}
}

z2m(v2a, k0e)
{
	while (true)
	{
		if (this.q5e(v2a))
		{
			return false;
		}
		let a2j = this.k7o(v2a);
		if (a2j > 1)
		{
			let g7r = v2a.h1x();
			for (let i = 1; i < a2j; i++)
			{
				this.d7l(v2a, i);
				this.k0e++;
				if (this.k0e == k0e)
				{
					return true;
				}
				if (this.z2m(v2a, k0e))
				{
					return true;
				}
        v2a.c6y = g7r.c6y;
        v2a.s4l = g7r.s4l;
			}
		}
		this.c7z(v2a);
		this.k0e++;
		if (this.k0e == k0e)
		{
			return true;
		}
	}
}

y6v(v2a)
{
	if (!v2a.c6y)
	{
		return 0;
	}
	else
	{
		return v2a.c6y.h0y;
	}
}

s5p(v2a)
{
	let h0a = [];
 	if (!v2a.c6y)
  {
		return h0a;
	}
	let u8a = v2a.c6y;
	while (1)
	{
		h0a.push(u8a);
		if (!u8a.q2t)
		{
			let x8t = u8a;
			while (x8t.h9e)
			{
				x8t = x8t.h9e;
			}
			if (!x8t.q2t)
			{
				break;
			}
		}
		if (u8a.q2t)
		{
			u8a = u8a.q2t;
		}
		else
		{
			let x8t = u8a;
			while (x8t.h9e)
			{
				x8t = x8t.h9e;
			}
			u8a = x8t.q2t;
		}
	}
	return h0a.reverse();
}

b5z(v2a)
{
	let h0a = this.s5p(v2a);
	let a2j = this.k7o(v2a);
	if (a2j == 0)
	{
		return h0a;
	}
	let z9e = this.z9c(v2a, 0);
	while (z9e)
	{
		h0a.push(z9e);
		z9e = z9e.u1o;
	}
	return h0a;
}

k7o(v2a)
{
	let z9e = this.i7v(v2a);
	if (!z9e)
	{
		return 0;
	}
	let a2j = 1;
	while (z9e.h6l)
	{
		a2j++;
		z9e = z9e.h6l;
	}
	return a2j;
}

x4h(v2a, w6v)
{
	if (this.x3e(v2a))
	{
		this.j7j = w6v;
		v2a.c6y = w6v;
		v2a.s4l = v2a.c6y.s4l;
	}
	else
	{
		v2a.c6y.u1o = w6v;
		w6v.q2t = v2a.c6y;
		v2a.c6y = w6v;
		v2a.s4l = v2a.c6y.s4l;
	}
}

r1w(v2a, w6v)
{
	let x8t = this.i7v(v2a);
	while (x8t.h6l)
	{
		x8t = x8t.h6l;
	}
	x8t.h6l = w6v;
	w6v.h9e = x8t;

	v2a.c6y = w6v;
	v2a.s4l = v2a.c6y.s4l;
}

f9g(v2a, s4l)
{
	let w6v = new v7x();
 	w6v.y7y(s4l);
	if (this.q5e(v2a))
	{
		this.x4h(v2a, w6v);
	}
	else
	{
		this.r1w(v2a, w6v);
	}
}


m1f(v2a, h0a)
{
	for (const s4l of h0a)
	{
		this.f9g(v2a, s4l);
	}
}


x7a(v2a)
{
	let x8t = this.z9c(v2a, 1);
	if (!x8t)
	{
		return false;
	}
	while (x8t)
	{
		let k2c = x8t.u1o;
		while (k2c)
		{
			if (k2c.h6l)
			{
				return false;
			}
			k2c = k2c.u1o;
		}
		x8t = x8t.h6l;
	}
	return true;
}

o0w()
{
	let k2c = this.j7j;
	while (k2c)
	{
		if (k2c.h6l)
		{
			return true;
		}
		k2c = k2c.u1o;
	}
	return false;
}

n2e()
{
	if (!this.q9h.b6d())
	{
		return true;
	}
	if (this.o0w())
	{
		return true;
	}
	let k2c = this.j7j;
	while (k2c)
	{
		if (k2c.s4l.n2e())
		{
			return true;
		}
		k2c = k2c.u1o;
	}
	return false;
}

i7v(v2a)
{
	if (v2a.c6y)
	{
		return v2a.c6y.u1o;
	}
	return this.j7j;
}

z9c(v2a, e8w)
{
	let i = 0;
	let x8t = this.i7v(v2a);
	while (x8t && i != e8w)
	{
		x8t = x8t.h6l;
		i++;
	}
	return x8t;
}

f6x(x8t)
{
	let d8w = x8t;
	let j8v = null;
	let w6v = null;
	let d5n = null;
	while (d8w)
	{
		w6v = new v7x();
		w6v.y7y(d8w.s4l);
		if (j8v)
		{
			j8v.u1o = w6v;
			w6v.q2t = j8v;
		}
		else
		{
			d5n = w6v;
		}
		j8v = w6v;
		if (d8w.h6l && !d8w.h9e)
		{
			let n9z = d8w.h6l;
			let p0l = j8v;
			while (n9z)
			{
				let r7t = this.f6x(n9z);
				p0l.h6l = r7t;
				r7t.h9e = p0l;
				p0l = r7t;
				n9z = n9z.h6l;
			}
		}
		d8w = d8w.u1o;
	}
	return d5n;
}

j8l()
{
	return this.q9h;
}

h9s()
{
	return this.q9h.j7d;
}

n5n(w8t)
{
	this.q9h.j7d = w8t;
}

w7v()
{
	return !this.q9h.s0l.b6d();
}

h5l(s0l)
{
	this.q9h.s0l = s0l.h1x();
}

d3w()
{
	return this.q9h.s0l;
}

b9w()
{
	return !this.q9h.l2t.b6d();
}

b6k(l2t)
{
	this.q9h.l2t = l2t.h1x();
}

e6r()
{
	return this.q9h.l2t;
}

n5f()
{
	return !this.q9h.o7u.b6d();
}

g2o(o7u)
{
	this.q9h.o7u = o7u.h1x();
}

h7s()
{
	return this.q9h.o7u;
}

v6v(k0e)
{
  if (k0e == 0)
  {
    return true;
  }
	let k2c = this.j7j;
	while (k2c)
	{
    if (k2c.h0y == k0e)
    {
      return true;
    }
		k2c = k2c.u1o;
	}
	return false;
}

s3h()
{
	let v2a = this.h6c();
	this.k0e = 0;
	this.y6g(v2a);
}

y6g(v2a)
{
	while (true)
	{
		if (this.q5e(v2a))
		{
			return;
		}
		let a2j = this.k7o(v2a);
		if (a2j > 1)
		{
			let g7r = v2a.h1x();
			for (let i = 1; i < a2j; i++)
			{
				this.d7l(v2a, i);
				this.k0e++;
        v2a.c6y.h0y = this.k0e;
				this.y6g(v2a);
        v2a.c6y = g7r.c6y;
        v2a.s4l = g7r.s4l;
			}
		}
		this.c7z(v2a);
  	this.k0e++;
    v2a.c6y.h0y = this.k0e;
	}
}

i8a(v2a)
{
	let i8a = this.c4y.h1x();
	if (!v2a.c6y)
	{
		return i8a;
	}
	let h0a = this.c4m(v2a);
  for (const s4l of h0a)
	{
		i8a.c7z(s4l.r6e());
	}
	return i8a;
}

c4m(v2a)
{
	let h0a = [];
 	if (!v2a.c6y)
  {
		return h0a;
	}
	let u8a = v2a.c6y;
	while (1)
	{
		h0a.push(u8a.s4l);
		if (!u8a.q2t)
		{
			let x8t = u8a;
			while (x8t.h9e)
			{
				x8t = x8t.h9e;
			}
			if (!x8t.q2t)
			{
				break;
			}
		}
		if (u8a.q2t)
		{
			u8a = u8a.q2t;
		}
		else
		{
			let x8t = u8a;
			while (x8t.h9e)
			{
				x8t = x8t.h9e;
			}
			u8a = x8t.q2t;
		}
	}
	return h0a.reverse();
}


i5l()
{
	this.q9h = new r0u();
	this.j7j = null; 
  
}


j8y()
{
	let h0a = [];
	let k2c = this.j7j;
	while (k2c)
	{
		h0a.push(k2c.s4l);
		k2c = k2c.u1o;
	}
	return h0a;
}


}

const g7e =
{
	l2e : 0,
	t1s : 1,
	x8k : 2,
	r3r : 3,
	i7r : 4,
	o9s : 5,
	j2j : 6,
	f8i : 7,
	y2l : 8,
	x8n : 9,
	i4h : 10,
	s3n : 11,
	f0d : 12,
	f4e : 13,
	f3d : 14,
	o8o : 15
};

const v3x =
[
	[ g7e.l2e,     						  ""    ],
	[ g7e.t1s,        "+&#8211;" ],
	[ g7e.x8k, 						"&#177;" ],
	[ g7e.r3r,		"&#10866;"  ],
	[ g7e.i7r, 							"="   ],
	[ g7e.o9s,  							"&#8734;" ],
	[ g7e.j2j,  	"&#10865;"],
	[ g7e.f8i, 						"&#8723;" ],
	[ g7e.y2l, 				"&#8211;+"],
	[ g7e.x8n,						"&#8773;" ],
	[ g7e.i4h, 						"&#8646;" ],
	[ g7e.s3n,  						"&#8593;" ],
	[ g7e.f0d, 								"&#8594;" ],
	[ g7e.f4e, 					"&#8853;" ],
	[ g7e.f3d,		"&#10227;"],
	[ g7e.o8o, 								"N"   ]
];

function s2t(value)
{
	return v3x[value][1];
}


const j5s =
{
	d0l : 0,
	q4i : 1,
	l1e : 2
};

const a9e =
{
	l2e : 0,
	t7x : 1,
	q1g : 2,
	q1f : 3,
	h6b : 4,
	k5l : 5,
	t4h : 6,
	j7d : 7,
	m3u : 8,
	o7u : 9,
	s7k : 10,
	r8m : 11
};

/*
TO DO
- Aanpassen voor tekst after van q8k daar kan dia inzitten (zie c++)
- Vette tekst en niet vette t7x testen bij wel/niet MultiPV
*/
class o1y
{

constructor()
{
	this.l3q = new y2y();
  this.k3d = true;
  this.a6q = false;
  this.l4o = true;
  this.m2h = true;
  this.t3d = j5s.d0l;
  this.f6s = false;
  this.c4p = true;
 	this.f9u = true;
 	this.t9e = -1;
  this.v9h = false;
  this.e1n = false;
	this.z2r = false;
	this.b1g = true;
  this.q6t = false;
  this.d3z = false;
  this.s1d = 0;
	this.z5a = true;
  this.x1k = null;
 	this.e8t = a9e.l2e;
}

n1u(h0a)
{
	this.x1k = h0a;
 	let h6c = this.x1k.h6c();
	let z3e = this.x1k.z3e();
	this.e8t = a9e.l2e;
	this.b1g = true;
	this.e1n = false;
	this.z2r = false;
	this.v9h = false;
	this.q6t = this.x1k.n2e();
	this.z5a = true;
	this.s1d = 0;

	if (this.f6s)
	{
		this.l2a(a9e.q1g);
		this.n1t();
	}
	else
	{
    
    if (this.t3d == j5s.q4i ||
      (this.t3d == j5s.l1e && !z3e.s7m()))
    {
      if (this.m2h)
      {
        this.y2f(h6c, z3e, s1d);
        this.b1g = true;
      }
    }

    this.l2a((this.q6t && !this.r0n) ? a9e.t7x : a9e.q1g);
    this.u8o(this.q6t);
    this.f9g(h6c, "");
    this.m8o(h6c, this.x1k.j8l().j7d);

    if (this.x1k.r9l())
    {
      this.p5g();
    }
   	this.l2a(a9e.l2e);
   	this.u0u();
  }
}

n1t()
{
	let v2a = this.x1k.h6c();
	let k7o = this.x1k.k7o(v2a);
	for (let i = 0; i < k7o; i++)
	{
    this.l3q.y4r('<div class="variation-row">');
		v2a = this.x1k.h6c();
  	let i8a = this.x1k.z3e();
	  let a3g = this.x1k.v5n();
		this.x1k.d7l(v2a, i);
		this.b1g = true;
		let h0w = true;
		let s4l = v2a.s4l;
		let t4h = s4l.t4h();
		if (t4h.length)
		{
			this.t0t(v2a, t4h);
		}
		this.l2a(a9e.q1g);
		do
		{
			if (h0w)
			{
				v2a.s4l.q7o();
			}
			this.x4b(v2a, i8a, a3g);
			if (h0w)
			{
				v2a.s4l.y5m(t4h);
				h0w = false;
			}
			if (this.x1k.q5e(v2a))
			{
				break;
			}
			i8a.c7z(v2a.s4l);
			if (i8a.z5y())
			{
				a3g++;
			}
			this.x1k.c7z(v2a);
		} while (true);
    this.l3q.y4r('<div');
	}
}

p5g()
{
  let s2z = 0;
 	let v2a = this.x1k.h6c();
	let i8a = this.x1k.z3e();
  let a3g = this.x1k.v5n();

	let k7e = 100000;
	if (this.t9e == 0)
	{
		return;
	}
	if (this.t9e != -1)
	{
		k7e = this.t9e;
	}
	let c8p = a3g + k7e - 1;
	this.b1g = true;
	while (true)
	{
		let k7o = this.x1k.k7o(v2a);
		while (a3g <= c8p && !this.x1k.q5e(v2a))
		{
      this.x1k.c7z(v2a);
    	this.l2a((this.q6t && !this.r0n) ? a9e.t7x : a9e.q1g);
			this.x4b(v2a, i8a, a3g);
			i8a.c7z(v2a.s4l.r6e());
 			if (i8a.z5y())
			{
				a3g++;
			}
			if (this.f9u && k7o > 1)
			{
				break;
			}
			k7o = this.x1k.k7o(v2a);
		}
		if (!k7o || a3g > c8p)
		{
			return;
		}
    i8a.z2n(v2a.s4l.r6e());
		if (i8a.c6z())
		{
			a3g--;
		}
    this.x1k.z2n(v2a);
		for (let i = 1; i < k7o; i++)
		{
      s2z++;
      let v8q = "<span class=\"tdline\" data-level=\"";
      v8q += s2z.toString();
      v8q += "\">";
      this.l3q.y4r(v8q);
			this.f1o(a9e.q1f);
			this.k6x("[", true);
			let k5l = '';
      this.g9c(v2a, i8a, a3g, i, k5l, s2z);
			this.l2a(a9e.q1f);
			this.k6x("]", true);
      this.l3q.y4r("</span>");
      s2z--;
     	this.l2a((this.q6t && !this.r0n) ? a9e.t7x : a9e.q1g);
		}
		this.f1o(this.e8t);
    this.x1k.c7z(v2a);
    i8a.c7z(v2a.s4l.r6e());
		if (i8a.z5y())
		{
			a3g++;
		}
		this.b1g = true;
	}
}

x4b(v2a, i8a, a3g)
{
	if (this.x1k.x3e(v2a))
	{
		return;
	}
 	let s4l = v2a.s4l;

	let l4b = '';
  let d7n = false;
  if (this.k3d)
	{
		if (s4l.z7i())
		{
			if (!this.x1k.x3e(v2a))
			{
        let n4d = v2a.h1x();
        this.x1k.z2n(n4d);
        if (n4d.s4l)
        {
  				if (n4d.s4l.d1q())
	  			{
		  			d7n = true;
			  	}
        }
			}
		}
  }
	if (this.e1n)
	{
		l4b = "(";
		this.e1n = false;
		if (this.k3d && s4l.b1r())
		{
			this.k6x("(", true);
			let j9y = this.e8t;
			this.t0t(v2a, s4l.t4h());
			this.l2a(j9y);
			l4b = "";
      d7n = true;
		}
	}
	else
	{
		if (this.k3d && s4l.b1r())
		{
  	  let j9y = this.e8t;
	  	this.t0t(v2a, s4l.t4h());
		  this.l2a(j9y);
      d7n = true;
    }
	}
	if (s4l.y0a())
	{
		l4b += b0d(s4l.k5l());
	}
	let y8d = s4l.a9g();
	if (y8d)
	{
    l4b += a3g;
		l4b += '.';
	}
	else
	{
		if (this.b1g || d7n)
		{
 			l4b += a3g;
			l4b += "...";
		}
	}
	l4b += j5w(i8a, s4l.r6e(), false);
	if (s4l.z3c())
	{
		l4b += c6i(s4l.style());
	}
	if (s4l.h3n())
	{
		l4b += s2t(s4l.value());
	}
	if (s4l.r3e())
	{
		l4b += " End Of Game";
  }
	if (this.z2r || this.v9h)
	{
		if (this.x1k.q5e(v2a) && (!this.k3d || !s4l.d1q()))
		{
			if (this.z2r)
			{
				l4b += ")";
				this.z2r = false;
			}
			else
			{
				l4b += ";";
				this.v9h = false;
			}
		}
	}
	this.f9g(v2a, l4b);
	this.b1g = false;

	if (s4l.u3y())
	{
		let j7d = s4l.j7d();
    let c2n = j7d.indexOf("[#]");
		let g2e = j7d.substring(0, c2n);
	  let v9q = j7d.substring(c2n + 3);
		if (g2e.length)
		{
			this.m8o(v2a, g2e);
		}
		this.s1d++;
		if (this.m2h)
		{
			this.f1o(a9e.l2e);
      this.y2f(v2a, i8a, this.s1d);
			this.b1g = true;
		}
		if (v9q.length)
		{
			this.m8o(v2a, v9q);
		}
	}
	else
	{
		this.m8o(v2a, s4l.j7d());
	}

  if (s4l.r3e())
	{
    this.l3q.i1n("<div>&nbsp;</div>"); 
   	this.u0u();
 	  this.u8o(false); 
 	  this.d3z = true;
	}
}

l2a(p9z)
{
	if (p9z != this.e8t)
	{
		this.y6t();
		this.e8t = p9z;
		this.g3i();
	}
}

g3i()
{
}

y6t()
{
	this.e8t = a9e.l2e;
}

f1o(p9z)
{
	this.y6t();
	this.e8t = a9e.l2e;
  
  
  
  
  this.l3q.i1n("<br>"); 
	if (p9z != a9e.l2e)
	{
		this.e8t = p9z;
		this.g3i();
	}
}

y2f(v2a, i8a, h0y)
{
  this.z5a = true;
	let v8q = "<span class=\"tddia\" movenr=\"";
  v8q += this.x1k.y6v(v2a).toString();
	v8q += "\">",
	this.l3q.y4r(v8q);
	this.l3q.y4r("<canvas></canvas>");
	this.l3q.y4r("</span>");
	this.b1g = true;
}

p8u(v2a, w8t)
{
  this.l0d(v2a);
	this.t2h(w8t);
  this.i0u();
}

g9c(i8h, g3o, a3g, e8w, k5l, s2z)
{
  let v2a = i8h.h1x();
  let i8a = g3o.h1x();

	if (k5l.length)
	{
		this.l2a(a9e.k5l);
		let j4x = k5l;
		j4x += ")";
    let v8q = "<span class=\"tdprefix\">";
    this.l3q.y4r(v8q);
  	this.k6x(j4x);
    this.l3q.y4r("</span>");
	}
	let k7o = 0;
	let w0j = 1;
  this.x1k.d7l(v2a, e8w);
	this.b1g = true;
	do
	{
		this.l2a(a9e.q1f);
		this.x4b(v2a, i8a, a3g);
		if (k7o > 1)
		{
      this.x1k.z2n(v2a);
      this.q6k(v2a, i8a, a3g);
      this.x1k.c7z(v2a);
			this.b1g = true;
		}
		i8a.c7z(v2a.s4l.r6e());
		if (i8a.z5y())
		{
			a3g++;
		}
		k7o = this.x1k.k7o(v2a);
		if (k7o == 0)
		{
			break;
		}
		if (k7o > 1)
		{
			if (!this.x1k.x7a(v2a))
			{
				break;
			}
		}
    this.x1k.c7z(v2a);
		w0j++;
	} while (true);

	if (this.x1k.q5e(v2a))
	{
		return;
	}

	let c7s = k5l.length;
	let j4x = '';
	let o2m = 1;
	for (let i = 0; i < k7o; i++)
	{
		if (c7s == 0)
		{
      j4x = String.fromCharCode('A'.charCodeAt() + o2m - 1);
		}
		else if (c7s == 1)
		{
      j4x = k5l;
      j4x += o2m;
		}
		else if (c7s == 2)
		{
      j4x = k5l;
      j4x += String.fromCharCode('a'.charCodeAt() + o2m - 1);
		}
		else
		{
      j4x = k5l;
      j4x += o2m;
		}

    let v8q = "<span class=\"tdline\" data-level=\"";
    v8q += s2z.toString();
    v8q += "\">";
    this.l3q.y4r(v8q);
  	this.f1o(this.e8t);
    this.g9c(v2a, i8a, a3g, i, j4x, s2z);
    this.l3q.y4r("</span>");
		o2m++;
	}
}

q6k(i8h, g3o, a3g)
{
  let v2a = i8h.h1x();
  let i8a = g3o.h1x();

	this.l2a(a9e.h6b);
	this.e1n = true;
	this.v9h = false;
	let k7o = this.x1k.k7o(v2a);
	for (let i = 1; i < k7o; i++)
	{
		if (i == k7o - 1)
		{
			this.z2r = true;
		}
		if (i < k7o - 1)
		{
			this.v9h = true;
		}
    this.c8s(v2a, i8a, a3g, i);
		if (this.v9h)
		{
			this.l2a(a9e.h6b);
			this.k6x(";", false);
			this.v9h = false;
		}
	}
	this.l2a(a9e.h6b);
	if (this.z2r)
	{
		this.k6x(")", false);
		this.z2r = false;
	}
}

c8s(i8h, g3o, a3g, e8w)
{
  let v2a = i8h.h1x();
  let i8a = g3o.h1x();

  this.x1k.d7l(v2a, e8w);
	let w0j = 0;
	this.b1g = true;
	do
	{
		w0j++;
		this.l2a(a9e.h6b);
		this.x4b(v2a, i8a, a3g);
		if (this.x1k.q5e(v2a))
		{
			break;
		}
		i8a.c7z(v2a.s4l.r6e());
		if (i8a.z5y())
		{
			a3g++;
		}
    this.x1k.c7z(v2a);
	} while (true);
}

f9g(v2a, l4b)
{
	if (l4b.length)
	{
 		this.h3z(v2a, l4b);
	}
	else
	{
		if (this.c4p)
    {
      this.h3z(v2a, "[...]");
    }
	}
	if (v2a.s4l)
	{
		if (v2a.s4l.r1i() || v2a.s4l.j3h())
		{
			this.m6h(v2a, a9e.m3u);
		}
		if (v2a.s4l.u3y())
		{
		}
		if (v2a.s4l.w1q())
		{
			this.m6h(v2a, a9e.s7k);
		}
		if (v2a.s4l.n3i())
		{
			this.m6h(v2a, a9e.o7u);
		}
	}
	else
	{
		if (this.x1k.w7v() || this.x1k.b9w())
		{
			this.m6h(v2a, a9e.m3u);
		}
		if (this.x1k.n5f())
		{
		 	this.m6h(v2a, a9e.o7u);
		}
	}
}

k6x(l4b, q1z)
{
	if (l4b.length == 0)
	{
		return;
	}
	if (!this.z5a && q1z)
	{
		this.l3q.i1n(" ");
	}
	this.l3q.i1n(l4b);
	this.z5a = false;
}

t0t(v2a, t4h)
{
	if (this.k3d && t4h.length)
	{
		this.l2a(a9e.t4h);
		this.p8u(v2a, t4h);
	}
}

m8o(v2a, j7d)
{
	if (this.k3d && j7d.length)
	{
		this.l2a(a9e.j7d);
		this.p8u(v2a, j7d);
	}
}

t2h(w8t)
{
  let z0z = w8t;
  let q1y = z0z.replaceAll("<br><br>", "<br>");
  let p9h = q1y.replaceAll("<br><br>", "<br>");
  let v5l = p9h.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = v5l;
  this.l3q.i1n(s);
}

h3z(v2a, l4b)
{
	if (l4b.length == 0)
	{
		return;
	}
	if (!this.z5a)
	{
		this.l3q.i1n(" ");
	}
  let m8h = '';
  if (v2a.s4l)
  {
  	if (v2a.s4l.h5n())
	  {
		  if (v2a.s4l.h6f() == m0e.o9d)
  		{
	  		m8h = "tdmove-crit-opening";
		  }
  		else if (v2a.s4l.h6f() == m0e.z6c)
	  	{
		  	m8h = "tdmove-crit-middle";
  		}
	  	else if (v2a.s4l.h6f() == m0e.e8i)
		  {
  			m8h = "tdmove-crit-end";
	  	}
  	}
  }
	let h2b = "<span class=\"";
	if (m8h.length == 0)
	{
		h2b += "tdmove\" movenr=\"";
	}
	else
	{
		h2b += "tdmove " + m8h + "\" movenr=\"";
	}
  h2b += this.x1k.y6v(v2a).toString();
  h2b += "\"";
	h2b += ">",
	h2b += l4b;
	h2b += "</span>";

	this.l3q.y4r(h2b);
	this.z5a = false;
}

m6h(v2a, p9z)
{
  if (p9z == a9e.m3u)
  {
    this.q2o(v2a);
  }
  else if (p9z == a9e.o7u)
  {
    this.c9v(v2a);
  }
}

q2o(v2a)
{
	let v8q = "<span class=\"tdcolors\" movenr=\"";
  v8q += this.x1k.y6v(v2a).toString();
	v8q += "\">",
	this.l3q.y4r(v8q);
	this.l3q.y4r("</span>");
}

c9v(v2a)
{
	let v8q = "<span class=\"tdmedal\" movenr=\"";
  v8q += this.x1k.y6v(v2a).toString();
	v8q += "\">",
	this.l3q.y4r(v8q);
	this.l3q.y4r("<canvas></canvas>");
	this.l3q.y4r("</span>");
}

u8o(j8t)
{
 	let v8q = "<span class=\"tdline\"";
	if (j8t)
	{
		v8q += " data-commented=\"1\"";
	}
	v8q += " data-level=\"0\">";
	this.l3q.i1n(v8q);
}

u0u()
{
  this.l3q.y4r("</span>");
}

l0d(v2a)
{
  let n2f = "tdcomment";
  if (this.a6q)
  {
    n2f += " is-bold";
  }
  let v8q = "<span class=\"" + n2f + "\" movenr=\"";
  v8q += this.x1k.y6v(v2a).toString();
  v8q += "\">";
  this.l3q.i1n(v8q);
}

i0u()
{
  this.l3q.y4r("</span>");
}

p8t(value)
{
  this.c4p = value;
}

o2w(value)
{
  this.a6q = value;
}

i9b(value)
{
  this.l4o = value;
}

y1v(value)
{
  this.f6s = value;
}

} 
const n6q =
{
	f0d : 1,
	y7z : 2,
	y9t : 3
};

class n6j
{

constructor()
{
	this.d5w = 0;
	this.g8k = 0;
	this.type = n6q.f0d;
}

h1x()
{
	let c5g = new n6j();
	c5g.d5w = this.d5w;
	c5g.g8k = this.g8k;
	c5g.type = this.type;
	return c5g;
}

}

function l5u(d5w, g8k, type)
{
	let s = new n6j();
	s.d5w = d5w;
	s.g8k = g8k;
	s.type = type;
	return s;
}
class u6i
{

constructor()
{
	this.h6a = [];
}

h1x()
{
	let b4a = new u6i();
	for (const e2g of this.h6a)
	{
		b4a.add(e2g.h1x());
	}
	return b4a;
}

g9e()
{
	this.h6a.length = 0;
}

b6d()
{
	return this.h6a.length == 0;
}

size()
{
	return this.h6a.length;
}

add(e2g)
{
	let e8o = e2g.h1x();
	this.h6a.push(e8o);
}

}

const o3t =
{
	l1h : 0,
	x9x : 1,
	n3a : 2
};

class d7y
{

constructor()
{
	this.e9g = 0;
	this.type = o3t.l1h;
}

h1x()
{
	let c1b = new d7y();
	c1b.e9g = this.e9g;
	c1b.type = this.type;
	return c1b;
}

}

function u6x(e9g, type)
{
	let u1c = new d7y();
	u1c.e9g = e9g;
	u1c.type = type;
	return u1c;
}

class s2q
{

constructor()
{
	this.j7f = [];
}

h1x()
{
	let f7r = new s2q();
	for (const o1h of this.j7f)
	{
		f7r.add(o1h.h1x());
	}
	return f7r;
}

g9e()
{
	this.j7f.length = 0;
}

b6d()
{
	return this.j7f.length == 0;
}

size()
{
	return this.j7f.length;
}

add(v0p)
{
	let o7t = v0p.h1x();
	this.j7f.push(o7t);
}

}

const u2d =
{
	i4e    : 0,
	p9x  : 1,
	l2n  : 2,
	o2t    : 3,
  g0q   : 4,
	h7w    : 5,
};


function g2g(e8u)
{
	let l4b = '';
	switch (e8u)
	{
		case u2d.i4e:
			l4b = "P";
			break;
		case u2d.p9x:
			l4b = "N";
			break;
		case u2d.l2n:
			l4b = "B";
			break;
		case u2d.o2t:
			l4b = "R";
			break;
		case u2d.g0q:
			l4b = "Q";
			break;
		case u2d.king:
			l4b = "K";
			break;
	}
	return l4b;
}

class j4b
{

constructor()
{
  this.d9u = 0;
	this.g3r = new s2g();
	this.h0a = new g5i();
}

h1x()
{
	let z0k = new j4b();
  z0k.d9u = this.d9u;
	z0k.g3r = this.g3r.h1x();
	z0k.h0a = this.h0a.h1x();
	return z0k;
}

}

const c3z = 	 		"#7B8295";
const g1s =			"#9F9F9F";
const h6u = 			    "#7B8295";
const y2c = 		  "#FFFFFF";
const q0c =       "#D0B194";

const o7j	   = "#E13129";
const d4v	 = "#389C13";
const l9h = "#E2B628";

const e8d	 = "#E13129";
const y4b	 = "#389C13";
const j1r	   = "#E2B628";

class p8q
{

constructor()
{
	this.e5v = null;
	this.b5s = false;
	this.c6a = null;
	this.x7u = null;
	this.u9y = null;
	this.c3e = 0;
	this.r4h = 0;
	this.c0b = 0;
	this.s6w = 0;
	this.o8g = 0;
	this.f6n = 0;
	this.x6a = new i2p();
	this.i8a = new b7h();
	this.s0l = new u6i();
	this.l2t = new s2q();
  this.p2c = new u4t();
  this.j6s = true;
	this.j0i = true;
	this.w0d = true;
	this.b2n = false;
	this.i6p = c3z;
	this.o2v = g1s;
	this.i7s = i1e;
	this.c4u = x4t;
	this.o9w = x4t;
	this.x4w = e0a;
	this.p2e = true;
	this.c9q = n6y;
	this.f6u = n6y;
	this.x9p = false;
	this.b9l = [];
	this.h3v = 0;
}

l4m(e5v)
{
	this.e5v = e5v;
}

s9o(x6a)
{
	this.x6a = x6a;
	this.c0b = x6a.c0b();
	this.s6w = x6a.c0b();

	this.c3e = (this.e5v.width - this.c0b) / 2;
	let top = (this.e5v.height - this.s6w) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.r4h = top;
	this.o8g = this.c3e + this.c0b - 1;
	this.f6n = this.r4h + this.s6w - 1;
	this.b5s = false;
	this.a8v();
}

w2k(i8a)
{
	this.i8a = i8a.h1x();
	this.s0l.g9e();
	this.l2t.g9e();
}

j0o(s0l)
{
	this.s0l = s0l.h1x();
}

r4l(l2t)
{
	this.l2t = l2t.h1x();
}

c0m(s4l)
{
  this.p2c = s4l.h1x();
}

w8k(b2n)
{
	this.b2n = b2n;
}

i1o()
{
	this.b2n = !this.b2n;
}

p9c()
{
	if (!this.e5v) return;
	if (this.c0b <= 0 || this.s6w <= 0)
	{
		return;
	}
	this.y7n();
}

o3e()
{
	let b9e = this.x6a.b9e;
	if (this.b5s)
	{
		return;
	}
	this.b5s = true;
	if (b9e == d1d.e5o)
	{
  	this.c6a = x6h.w9o("images/board/LightSquare");
  	this.x7u = x6h.w9o("images/board/DarkSquare");
		this.u9y = x6h.w9o("images/board/Margin");
	}
}

a8v()
{
	this.o3e();
	let b9e = this.x6a.b9e;
	if (b9e == d1d.e5o)
	{
		this.p2e = false;
		this.j0i = false;
		this.w0d = false;
		this.i7s = "#FFFF97";
		this.c4u = "#9B2E31";
		this.o9w = j0b;
	}
}

y7n()
{
	this.a8v();
	if (this.x6a.b9e == d1d.e5o)
	{
		let q7q = x6h.w9o("images/board/BoardBackground");
		this.p9y(new a9w(0, 0, this.e5v.width, this.e5v.height), q7q);
	}
	this.h6t();  
	this.q4a(); 
	this.h3c(); 
  if (chess)
  {
	  this.e7b();
  }
  else
  {
	  this.i2n();
  	this.e6q();
  }
  
  this.e8s();
 	this.p8e();
 	this.s5b();
 	this.h3x();
	this.g3q(); 
	this.v3z();      
}

h6t()
{
	let b6g = this.r4h;
	let k4b = this.c3e;
	let h0d = this.o8g;
	let w1y = this.f6n;
	let o3j = this.x6a.c7b;
	this.t5u(new a9w(k4b, b6g, h0d, b6g+o3j-1), this.c4u);
	this.t5u(new a9w(k4b, w1y-o3j+1, h0d, w1y), this.o9w);
	this.t5u(new a9w(k4b, b6g, k4b+o3j-1, w1y), this.c4u);
	this.t5u(new a9w(h0d-o3j+1, b6g, h0d, w1y), this.o9w);
}

q4a()
{
	let c7b = this.x6a.c7b;
	let c7p = this.x6a.c7p;
	if (!c7p)
	{
		return;
	}
	if (this.p2e || !this.u9y)
	{
		this.y1c(this.x4w);
	}
	else
	{
		let left = this.c3e + c7b;
		let top = this.r4h + c7b;
		let w4r = this.o8g - c7b;
		let k9d = this.r4h + c7b + c7p - 1;
		this.p9y(new a9w(left, top, w4r, k9d), this.u9y);

		left = this.c3e + c7b;
		top = this.r4h + c7b;
		w4r = this.c3e + c7b + c7p - 1;
		k9d = this.f6n - c7b;
		this.p9y(new a9w(left, top, w4r, k9d), this.u9y);

		left = this.c3e + c7b;
		top = this.f6n - c7b - c7p + 1;
		w4r = this.o8g - c7b;
		k9d = this.f6n - c7b;
		this.p9y(new a9w(left, top, w4r, k9d), this.u9y);

		left = this.o8g - c7b - c7p + 1;
		top = this.r4h + c7b;
		w4r = this.o8g - c7b;
		k9d = this.f6n - c7b;
		this.p9y(new a9w(left, top, w4r, k9d), this.u9y);
	}
}

y1c()
{
	let c7b = this.x6a.c7b;
	let c7p = this.x6a.c7p;
	if (!c7p)
	{
		return;
	}

	let left = this.c3e + c7b;
	let top = this.r4h + c7b;
	let w4r = this.o8g - c7b;
	let k9d = this.r4h + c7b + c7p - 1;
	this.t5u(new a9w(left, top, w4r, k9d), this.x4w);

	left = this.c3e + c7b;
	top = this.r4h + c7b;
	w4r = this.c3e + c7b + c7p - 1;
	k9d = this.f6n - c7b;
	this.t5u(new a9w(left, top, w4r, k9d), this.x4w);

	left = this.c3e + c7b;
	top = this.f6n - c7b - c7p + 1;
	w4r = this.o8g - c7b;
	k9d = this.f6n - c7b;
	this.t5u(new a9w(left, top, w4r, k9d), this.x4w);

	left = this.o8g - c7b - c7p + 1;
	top = this.r4h + c7b;
	w4r = this.o8g - c7b;
	k9d = this.f6n - c7b;
	this.t5u(new a9w(left, top, w4r, k9d), this.x4w);
}

v3z()
{
	if (this.x6a.a0e)
	{
  	if (!this.x6a.c7p)
  	{
	  	return;
  	}
		let color = "#000000";
		if (this.i8a.z5y())
		{
			color = "#EDD790";
		}
		else
		{
			color = "#000000";
		}
		let rect = this.j9a();
		let h6d = this.x9k();
		h6d.beginPath();
		h6d.fillStyle = color;
		let c9u = rect.l0g() * 0.40;
		h6d.arc(rect.k2m + rect.l0g()/2 - 1, rect.i0p + rect.o3v()/2 - 1,
			c9u, 0, 2 * Math.PI);
		h6d.fill();
	}
}

h3c()
{
	let r2e = j0b;
	let c7b = this.x6a.c7b;
	let c7p = this.x6a.c7p;
	let o3j = this.x6a.o3j;
	let b6g = this.r4h + c7b + c7p;
	let k4b = this.c3e + c7b + c7p;
	let h0d = this.o8g - c7b - c7p;
	let w1y = this.f6n - c7b - c7p;
	this.t5u(new a9w(k4b, b6g, h0d, b6g+o3j-1), r2e);
	this.t5u(new a9w(k4b, w1y-o3j+1, h0d, w1y), r2e);
	this.t5u(new a9w(k4b, b6g, k4b+o3j-1, w1y), r2e);
	this.t5u(new a9w(h0d-o3j+1, b6g, h0d, w1y), r2e);
}

x9k()
{
	return this.e5v.getContext('2d');
}

l2f(rect, color)
{
	let h6d = this.x9k();
	h6d.beginPath();
	h6d.lineWidth = "1";
	h6d.strokeStyle = color;
	h6d.rect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());
	h6d.stroke();
}

t5u(rect, color)
{
	let h6d = this.x9k();
	h6d.fillStyle = color;
	h6d.fillRect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());
}

p9y(rect, img)
{
	let h6d = this.x9k();
	let o2x = h6d.createPattern(img, 'repeat');
	h6d.fillStyle = o2x;
	h6d.fillRect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());
}

b8o(rect, img)
{
	let h6d = this.x9k();
	let o2x = h6d.createPattern(img, 'no-repeat');
	h6d.fillStyle = o2x;
	h6d.fillRect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());
}

t6l(e9g)
{
	let e2y = w0m;
	let k6n = l3l;
	if (this.b2n)
	{
		e2y = m0z(t6g(e9g));
		k6n = n2t(t6g(e9g));
	}
	else
	{
		e2y = m0z(e9g);
		k6n = n2t(e9g);
	}
	if (i4a(k6n))
	{
		e2y++;
	}
	else
	{
		e2y--;
	}
	return this.e9p(k6n, e2y);
}

i2n()
{
	for (const e9g of h4w)
	{
		this.w6g(e9g);
	}
}

w6g(e9g)
{
	this.k9l(this.t6l(e9g), e9g);
}

k9l(rect, e9g)
{
	let w9o = this.c6a;
	if (this.w0d)
	{
		this.v1j(rect, this.o2v);
		return;
	}
	if (!w9o)
	{
		this.v1j(rect, this.o2v);
		return;
	}

	let a0y = w9o.width;
	let g6s = w9o.height;
	let a0g = this.x6a.i7a;
	if (a0y < a0g || g6s < a0g)
	{
		this.b8o(rect, w9o);
		return;
	}

	let f5r = Math.trunc(a0y / this.x6a.i7a);
	let m9m = Math.trunc(g6s / this.x6a.i7a);
	if (f5r == 0)
	{
		f5r = 1;
	}
	if (m9m == 0)
	{
		m9m = 1;
	}

	let i5d = Math.trunc((e9g) / f5r);
	let y8b = (e9g) % f5r;
	let y = Math.trunc(i5d / m9m);
	i5d = i5d % m9m;

  let n7g = new a9w();
	n7g.k2m = y8b * this.x6a.i7a;
	n7g.i0p = i5d * this.x6a.i7a;
	n7g.m7w = (y8b + 1) * this.x6a.i7a - 1;
	n7g.w3s = (i5d + 1) * this.x6a.i7a - 1;
	let h6d = this.x9k();
	w9q(h6d, rect, w9o, n7g);
}

f4m(e9g)
{
	let e2y = w0m;
	let k6n = l3l;
	if (this.b2n)
	{
		e2y = m0z(t6g(e9g));
		k6n = n2t(t6g(e9g));
	}
	else
	{
		e2y = m0z(e9g);
		k6n = n2t(e9g);
	}
	return this.e9p(k6n, e2y);
}

e6q()
{
	for (const e9g of h4w)
	{
		this.y4n(e9g);
	}
}

y4n(e9g)
{
	this.p3a(this.f4m(e9g), e9g);
}

p3a(rect, e9g)
{
	let w9o = this.x7u;
	if (this.j0i)
	{
		this.v1j(rect, this.i6p);
		return;
	}
	if (!w9o)
	{
		this.v1j(rect, this.i6p);
		return;
	}

	let a0y = w9o.width;
	let g6s = w9o.height;
	let a0g = this.x6a.i7a;
	if (a0y < a0g || g6s < a0g)
	{
		this.b8o(rect, w9o);
		return;
	}

	let f5r = Math.trunc(a0y / this.x6a.i7a);
	let m9m = Math.trunc(g6s / this.x6a.i7a);
	if (f5r == 0)
	{
		f5r = 1;
	}
	if (m9m == 0)
	{
		m9m = 1;
	}

	let i5d = Math.trunc((e9g) / f5r);
	let y8b = (e9g) % f5r;
	let y = Math.trunc(i5d / m9m);
	i5d = i5d % m9m;

  let n7g = new a9w();
	n7g.k2m = y8b * this.x6a.i7a;
	n7g.i0p = i5d * this.x6a.i7a;
	n7g.m7w = (y8b + 1) * this.x6a.i7a - 1;
	n7g.w3s = (i5d + 1) * this.x6a.i7a - 1;
	let h6d = this.x9k();
	w9q(h6d, rect, w9o, n7g);
}

e9p(k6n, e2y)
{
	let c7b = this.x6a.c7b;
	let c7p = this.x6a.c7p;
	let o3j = this.x6a.o3j;
	let i7a = this.x6a.i7a;
	let rect = new a9w();
	rect.k2m = this.c3e + c7b + c7p +	o3j + (e2y) * i7a;
	rect.m7w = rect.k2m + i7a - 1;
	rect.i0p = this.r4h + c7b + c7p +	o3j + (j3r - k6n - 1) * i7a;
	rect.w3s = rect.i0p + i7a - 1;
	return rect;
}

t4s(e9g)
{
	let e2y = w0m;
	let k6n = l3l;
	if (this.b2n)
	{
		e2y = m0z(t6g(e9g));
		k6n = n2t(t6g(e9g));
	}
	else
	{
		e2y = m0z(e9g);
		k6n = n2t(e9g);
	}
	return this.e9p(k6n, e2y);
}

e7b()
{
	for (const e9g of h4w)
	{
		this.u8h(e9g);
	}
}

u8h(e9g)
{
	this.w2h(this.t4s(e9g), e9g);
}

w2h(rect, e9g)
{
	let i7k = isDarkSquare(e9g);
	let w9o = this.c6a;
	if (i7k)
	{
		w9o = this.x7u;
	}
	if (i7k)
	{
		if (this.j0i)
		{
			this.v1j(rect, this.i6p);
			return;
		}
		if (!w9o)
		{
			this.v1j(rect, this.i6p);
			return;
		}
	}
	else
	{
		if (this.w0d)
		{
			this.v1j(rect, this.o2v);
			return;
		}
		if (!w9o)
		{
			this.v1j(rect, this.o2v);
			return;
		}
	}

 	let a0y = w9o.width;
	let g6s = w9o.height;
	let a0g = this.x6a.i7a;
	if (a0y < a0g || g6s < a0g)
	{
		this.b8o(rect, w9o);
		return;
	}
	let f5r = Math.trunc(a0y / this.x6a.i7a);
	let m9m = Math.trunc(g6s / this.x6a.i7a);
	if (f5r == 0)
	{
		f5r = 1;
	}
	if (m9m == 0)
	{
		m9m = 1;
	}

	let i5d = Math.trunc((e9g) / f5r);
	let y8b = (e9g) % f5r;
	let y = Math.trunc(i5d / m9m);
	i5d = i5d % m9m;

  let n7g = new a9w();
	n7g.k2m = y8b * this.x6a.i7a;
	n7g.i0p = i5d * this.x6a.i7a;
	n7g.m7w = (y8b + 1) * this.x6a.i7a - 1;
	n7g.w3s = (i5d + 1) * this.x6a.i7a - 1;
	let h6d = this.x9k();
	w9q(h6d, rect, w9o, n7g);
}

v1j(rect, color)
{
	this.t5u(rect, color);
}

s5b()
{
	for (const e9g of h4w)
	{
		this.j3q(e9g);
	}
}

o7i(d5w, g8k, o4u)
{
	this.c9q = d5w;
	this.f6u = g8k;
	this.x9p = o4u;

	this.b9l.length = 0;
 	let x8q = this.t4s(d5w);
  let t0p = this.t4s(g8k);
	let q9f = this.x6a.i7a;

	let g5y = 32;
	if (q9f < 32)
	{
		g5y = q9f;
	}

  
	if (false)
	{
    
    
		let a9z = new c5i(x8q.k2m + q9f / 2, x8q.i0p + q9f / 2);
		let d8f = new c5i(t0p.k2m + q9f / 2, t0p.i0p + q9f / 2);
		let n9m = Math.abs(a9z.X - d8f.X);
		let w9a = Math.abs(a9z.Y - d8f.Y);
		let w4t = Math.atan2(d8f.X - a9z.X, a9z.Y - d8f.Y);
		let p6q = Math.sqrt(n9m*n9m + w9a*w9a) / 2;
		d8f.X = a9z.X + p6q * 2;
		d8f.Y = a9z.Y;
		let z6f = new c5i(a9z.X + p6q, a9z.Y);
		let q7d = Math.PI / g5y;
		let a3w = q9f * 0.40;
		let x1q = Math.PI;
		let r2d = (t0p.k2m > x8q.k2m && t0p.i0p < x8q.i0p) ||
			(t0p.k2m < x8q.k2m && t0p.i0p > x8q.i0p);
		for (let i = 1; i < g5y; i++)
		{
			let l2f = new a9w();
			if (r2d)
			{
				x1q -= q7d;
			}
			else
			{
				x1q += q7d;
			}
			let g5r = Math.cos(x1q);
			let u4x = Math.sin(x1q);
			let n2c = new c5i(z6f.X + p6q * g5r,
				z6f.Y - a3w * u4x);
			this.b9l.push(e1c(n2c, a9z, w4t - Math.PI / 2));
		}
	}
	else
	{
		let a9z = new c5i(x8q.k2m + q9f / 2, x8q.i0p + q9f / 2);
		let d8f = new c5i(t0p.k2m + q9f / 2, t0p.i0p + q9f / 2);
		let z5b = (d8f.X - a9z.X) / g5y;
		let f8c = (d8f.Y - a9z.Y) / g5y;
		for (let i = 1; i < g5y; i++)
		{
			this.b9l.push(new c5i(a9z.X + i * z5b, a9z.Y + i * f8c));
		}
	}
	this.b9l.push(new c5i(t0p.k2m + q9f / 2, t0p.i0p + q9f / 2));
	this.h3v = 0;
}

o7n()
{
	this.c9q = n6y;
	this.f6u = n6y;
}

z0a()
{
	this.p9c(); 

	let s7p = this.b9l[this.h3v];
	let i7a = this.x6a.i7a;
	let l2f = new a9w();
	l2f.k2m = s7p.X - i7a / 2;
	l2f.i0p = s7p.Y - i7a / 2;
	l2f.a2y(i7a);
	l2f.j1s(i7a);
 	let h6d = this.x9k();
	j6d(h6d, l2f, this.i8a.e1a(this.c9q));

	this.h3v++;
	if (this.h3v >= this.b9l.length)
	{
		let e8u = this.i8a.e1a(this.c9q);
		this.i8a.g7y(this.c9q, u8l.b6d);
		this.i8a.g7y(this.f6u, e8u);
		this.o7n();
		return true;
	}
	else
	{
		return false;
	}
}

j3q(e9g)
{
	if (e9g == this.c9q)
	{
		return;
	}
	let i1u = this.t4s(e9g);
 	let h6d = this.x9k();
	j6d(h6d, i1u, this.i8a.e1a(e9g));
}

g3q()
{
	if (!this.x6a.l9g)
	{
    return;
  }

 	let o3j = this.x6a.o3j;
	let c7b = this.x6a.c7b;
	let c7p = this.x6a.c7p;
	let i7a = this.x6a.i7a;

	let d2f = new a9w();
	d2f.k2m = this.c3e + c7b + c7p;
	d2f.i0p = this.r4h + c7b + c7p;
	d2f.a2y(j3r * i7a + 2 * o3j);
	d2f.j1s(j3r * i7a + 2 * o3j);

 	let h6d = this.x9k();
  let t4c = f0k(h6d, c7p-6);

  g3q(h6d,
    d2f,
    this.x6a,
    t4c,
    c7x.f2c,
    this.i7s,
    this.b2n,
    c7p);
}

m6b(e9g, color)
{
	let rect = this.t4s(e9g);
	let h6d = this.x9k();
  h6d.save();
  h6d.globalAlpha = 0.25; 
	h6d.fillStyle = color;
	h6d.fillRect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());
  h6d.restore();
}

e8s()
{
	if (this.j6s)
	{
		if (!this.p2c.b6d())
		{
      let color = "#800080"; 
			this.m6b(this.p2c.d5w, color);
			this.m6b(this.p2c.g8k, color);
		}
  }
}

p8e()
{
	for (const o1h of this.l2t.j7f)
	{
		this.l1t(o1h);
	}
}

l1t(o1h)
{
	let rect = this.t4s(o1h.e9g);
	let d2c = '';
	switch (o1h.type)
	{
		case o3t.l1h:
			d2c = o7j;
			break;
		case o3t.x9x:
			d2c = d4v;
			break;
		case o3t.n3a:
			d2c = l9h;
			break;
	}
	let q9f = this.c0b / 10;
	let h6d = this.x9k();
  /* dit is met roundrect
  b7c(rect, 5);
	h6d.lineWidth = q9f / 15;
	h6d.strokeStyle = d2c;
	h4j(h6d, rect.k2m, rect.i0p, rect.l0g(), rect.o3v(), 10);
  */
  
  h6d.save();
  h6d.globalAlpha = 0.7; 
	h6d.fillStyle = d2c;
	h6d.fillRect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());
  h6d.restore();
}

h3x()
{
	for (const e2g of this.s0l.h6a)
	{
		this.u7j(e2g);
	}
}

u7j(e2g)
{
	let d5w = e2g.d5w;
	let g8k = e2g.g8k;
	let z5i = e2g.type;

	let x8q = this.t4s(d5w);
	let t0p = this.t4s(g8k);

	let i1q = x8q.k2m + x8q.l0g()/2;
	let m8g = x8q.i0p + x8q.o3v()/2;
	let e4o = new c5i(i1q, m8g);

	let j7l = t0p.k2m + t0p.l0g()/2;
	let o8w = t0p.i0p + t0p.o3v()/2;

	let w2f = (j7l-i1q)*(j7l-i1q) + (o8w-m8g)*(o8w-m8g);
	let j1a = Math.sqrt(w2f);

	let m0t = (this.i8a.u3p(d5w)) ? 0 : x8q.l0g() / 4;
	j1a -= m0t;
	let b8r = (this.i8a.u3p(g8k)) ? 0 : x8q.l0g() / 4;
	j1a -= b8r;

	let n6s = 5;
	let l4a = 5 * n6s;
	let x5q = 7 * n6s;

	let p6d = i1q + m0t;
	let l2q = m8g;

	let z1r = p6d + j1a - 1;
	let p1i = m8g;

	let p9d = z1r - x5q;
	let z5f = m8g;

	let w4t = Math.atan2((j7l - i1q), (m8g - o8w));

  
	let d0q = [];
  let t8w = 10; 
	d0q.push(new c5i(p9d, z5f));
	d0q.push(new c5i(p9d - t8w, z5f - l4a));
	d0q.push(new c5i(z1r, p1i));
	d0q.push(new c5i(p9d - t8w, z5f + l4a));
	d0q.push(new c5i(p9d, p1i));
	let u0n = [];
	for (let i = 0; i <= 4; i++)
	{
		u0n.push(e1c(d0q[i], e4o, w4t - Math.PI / 2));
	}

	let h6d = this.x9k();
  h6d.save();
  h6d.globalAlpha = 0.7;

 	let w9i = '';
	switch (z5i)
	{
		case n6q.f0d:
			w9i = e8d;
			break;
		case n6q.y7z:
			w9i = y4b;
			break;
		case n6q.y9t:
			w9i = j1r;
			break;
	}
 	h6d.fillStyle = w9i;
  h6d.strokeStyle = w9i;
	h6d.beginPath();
	h6d.moveTo(u0n[0].X, u0n[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		h6d.lineTo(u0n[i].X, u0n[i].Y);
	}
	h6d.closePath();
	h6d.fill();

  
	d0q.length = 0;
	d0q.push(new c5i(p6d, l2q - n6s));
	d0q.push(new c5i(p6d, l2q + n6s));
	d0q.push(new c5i(p9d, l2q + n6s));
	d0q.push(new c5i(p9d, l2q - n6s));
	u0n.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		u0n.push(e1c(d0q[i], e4o, w4t - Math.PI / 2));
	}
	if (i1q == j7l)
	{
		if (u0n[0].Y != u0n[1].Y)
		{
			u0n[0].Y = u0n[1].Y;
		}
		if (u0n[2].Y != u0n[3].Y)
		{
			u0n[2].Y = u0n[3].Y;
		}
	}
	if (m8g == o8w)
	{
		if (u0n[0].X != u0n[1].X)
		{
			u0n[0].X = u0n[1].X;
		}
		if (u0n[2].X != u0n[3].X)
		{
			u0n[2].X = u0n[3].X;
		}
	}
	h6d.beginPath();
	h6d.moveTo(u0n[0].X, u0n[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		h6d.lineTo(u0n[i].X, u0n[i].Y);
	}
	h6d.closePath();
	h6d.fill();
  h6d.restore();
}

j9a()
{
	let c7b = this.x6a.c7b;
	let c7p = this.x6a.c7p;
	let q9f = this.x6a.i7a;
	let rect = new a9w();
	rect.k2m = this.o8g - c7b - c7p + 1;
	rect.i0p = this.f6n - c7b - c7p;
	rect.w3s = this.f6n;
	rect.m7w = this.o8g - 1;
	return rect;
}

}

const q5b = 14;

const d1d =
{
	e5o : 0
};

const f3a =
{
	e5o : 0
};

const m7b =
{
	l2e : 0,
	u1k : 1,
};

const c7x =
{
	m0s: 0,
	a8c: 1,
	f2c: 2,
	b9y: 3,
	v3g: 4,
};

class i2p
{

constructor()
{
	this.b9e = d1d.e5o;
	this.s6m = 1; 
	this.c7b = 0;
	this.c7p = q5b;
	this.o3j = 2;
	this.i7a = 32;
	this.z6w = 20;
	this.l9g = true;
	this.h6m = m7b.u1k;
	this.a0e = true;
}

h1x()
{
	let z9p = new i2p();
	z9p.b9e = this.b9e;
	z9p.s6m = this.s6m;
	z9p.c7b = this.c7b;
	z9p.c7p = this.c7p;
	z9p.o3j = this.o3j;
	z9p.i7a = this.i7a;
	z9p.z6w = this.z6w;
	z9p.l9g = this.l9g;
	z9p.h6m = this.h6m;
	z9p.a0e = this.a0e;
	return z9p;
}

c0b()
{
	return this.i7a * j3r + 2 * (this.c7b + this.c7p + this.o3j);
}

r3p(rect)
{
	let w = rect.l0g();
	let h = rect.o3v();
	let y1y = 0;
	if (w < h)
	{
		y1y = w;
	}
	else
	{
		y1y = h;
	}
	if (this.c7p)
	{
		for (this.i7a = 2; this.i7a < 1000; this.i7a++)
		{
			this.c7p = (this.i7a / 100) * this.z6w;
			if (this.c7p < q5b)
			{
				this.c7p = q5b;
			}
			let size = 2 * (this.c7b + this.c7p + this.o3j) + j3r * this.i7a;
			if (size > y1y)
			{
				break;
			}
		}
		this.i7a--;
		this.c7p = (this.i7a / 100) * this.z6w;
		if (this.c7p < q5b)
		{
			this.c7p = q5b;
		}
	}
	else
	{
		for (this.i7a = 2; this.i7a < 1000; this.i7a++)
		{
			let size = 2 * (this.c7b + this.o3j) + j3r * this.i7a;
			if (size > y1y)
			{
				break;
			}
		}
		this.i7a--;
	}
	return this.c0b();
}

}


class h5y
{

constructor()
{
	this.z3e = new b7h();
	this.t9o = new b7h();
	this.s0l = new u6i();
	this.l2t = new s2q();
	this.u1o = new u4t();
 	this.q2t = new u4t();
	this.v2s = 0;
	this.i1i = false;
	this.c6e = false;
	this.w0j = 0;
	this.l6k = 0;
	this.x3g = '';
}

}

const t3z =
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

function b7c(rect, t9a)
{
	rect.k2m += t9a;
	rect.m7w -= t9a;
	if (rect.k2m > rect.m7w)
	{
		rect.k2m = rect.m7w;
	}
	rect.i0p += t9a;
	rect.w3s -= t9a;
	if (rect.i0p > rect.w3s)
	{
		rect.i0p = rect.w3s;
	}
}

function w9q(t0z, g9m, k2z, n7g)
{
	t0z.drawImage(k2z, n7g.k2m, n7g.i0p, n7g.l0g(), n7g.o3v(),
		g9m.k2m, g9m.i0p, g9m.l0g(), g9m.o3v());
}

function h4j(h6d, x, y, width, height, c9u)
{
	h6d.beginPath();
	h6d.moveTo(x, y + c9u);
	h6d.lineTo(x, y + height - c9u);
	h6d.arcTo(x, y + height, x + c9u, y + height, c9u);
	h6d.lineTo(x + width - c9u, y + height);
	h6d.arcTo(x + width, y + height, x + width, y + height-c9u, c9u);
	h6d.lineTo(x + width, y + c9u);
	h6d.arcTo(x + width, y, x + width - c9u, y, c9u);
	h6d.lineTo(x + c9u, y);
	h6d.arcTo(x, y, x, y + c9u, c9u);
	h6d.stroke();
}

function e1c(b4s, e4o, m7q)
{
	let p = new c5i();
	p.X = (Math.cos(m7q) * (b4s.X - e4o.X)) - (Math.sin(m7q) * (b4s.Y - e4o.Y)) + e4o.X;
	p.Y = (Math.sin(m7q) * (b4s.X - e4o.X)) + (Math.cos(m7q) * (b4s.Y - e4o.Y)) + e4o.Y;
	return p;
}

function x4e(h6d, rect, o7u)
{
	let left = rect.k2m;
	let top = rect.i0p;
	let w4r = rect.m7w;
	let k9d = rect.w3s;

	h6d.fillStyle = l7k;
	h6d.fillRect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());

	if (o7u.l2e())
	{
		return;
	}

	let e2a = o7u.p3d();
	let x8z = 0;
	if (e2a > 8)
	{
		x8z = (w4r - left) / 8;
	}
	else
	{
		x8z = (w4r - left) / e2a;
	}
	let z0j = left - x8z;
	let m1k = top;
	let j2c = z0j + x8z;
	let r0i = 0;
	if (e2a > 8)
	{
		r0i = (k9d - top + 1) / 2;
	}
	else
	{
		r0i = k9d - top + 1;
	}

	let g6a = top + r0i - 1;
	let p8l = 0;
	for (let i = 0; i < 16; i++)
	{
		if (o7u.j1b(i))
		{
			z0j += x8z;
			j2c += x8z;
			if (p8l == 7 || p8l == 15 ||
				(p8l < 8 && p8l == e2a - 1))
			{
				j2c = w4r;
			}
			if (p8l == 8)
			{
				z0j = left;
				j2c = z0j + x8z;
				m1k = top + r0i;
				g6a = k9d;
			}
			let y9j = new a9w(z0j, m1k, j2c, g6a);
			h6d.fillStyle = t3z[i];
			h6d.fillRect(y9j.k2m, y9j.i0p, y9j.l0g(), y9j.o3v());
			p8l++;
		}
	}
}




class z0c
{

constructor()
{
	this.x6l = '';
	this.w9o = null;
}

}

class v2p
{

constructor()
{
	this.o7e = [];
}

add(img)
{
	let j6i = new z0c();
	j6i.x6l = img.id;
	j6i.w9o = img;
	this.o7e.push(j6i);
}

w9o(x6l)
{
	for (const h7x of this.o7e)
	{
		if (h7x.x6l.toLowerCase() == x6l.toLowerCase())
		{
			return h7x.w9o;
		}
	}
	return null;
}

}
const i5w 				= "#00FFFF";
const j0b 			= "#000000";
const e0a 				= "#0000FF";
const v6o 			= "#FFFBF0";
const x5z 			= "#808080";
const i0w 		= "#FF00FF";
const t6z 				= "#808080";
const k4h 			= "#008000";
const f3q 				= "#00FF00";
const c0l 			= "#C0C0C0";
const l3y 			= "#800000";
const v3i 		= "#A0A0A4";
const l2i 	= "#C0DCC0";
const d0n 				= "#000080";
const c7e 			= "#808000";
const x0t 			= "#800080";
const l7k 				= "#FF0000";
const p7f 			= "#C0C0C0";
const s3m 		= "#A6CAF0";
const i0a 				= "#008000";
const x4t 			= "#FFFFFF";
const i1e 			= "#FFFF00";

class c5i
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

h1x()
{
	let b4n = new c5i();
	b4n.k2m = this.X;
	b4n.i0p = this.Y;
	return b4n;
}

}

class a9w
{

constructor(left, top, w4r, k9d)
{
	if (left === undefined)
	{
		this.k2m = 0;
		this.i0p = 0;
		this.m7w = 0;
		this.w3s = 0;
	}
	else
	{
		this.k2m = left;
		this.i0p = top;
		this.m7w = w4r;
		this.w3s = k9d;
	}
}

h1x()
{
	let s3o = new a9w();
	s3o.k2m = this.k2m;
	s3o.i0p = this.i0p;
	s3o.m7w = this.m7w;
	s3o.w3s = this.w3s;
	return s3o;
}

l0g()
{
	return this.m7w - this.k2m + 1;
}

k7t()
{
	return this.m7w - this.k2m + 1;
}

a2y(width)
{
	this.m7w = this.k2m + width - 1;
}

o3v()
{
	return this.w3s - this.i0p + 1;
}

a6s()
{
	return this.w3s - this.i0p + 1;
}

j1s(height)
{
	this.w3s = this.i0p + height - 1;
}

n7y()
{
	this.k2m++;
	this.i0p++;
	this.m7w--;
	this.w3s--;
}

w2y(s7p)
{
	return s7p.X >= this.k2m &&
		s7p.X <= this.m7w &&
		s7p.Y >= this.i0p &&
		s7p.Y <= this.w3s;
}


}

class o3u
{

constructor(u5a)
{
	this.u5a = u5a;
	this.f3y = new b7h();
	this.a1s = new p8q();
	this.k8w = null;
	this.x6a = new i2p();
	this.u4k = true;
}

l5c()
{
	let y8x = window.devicePixelRatio;

	this.a1s.e5v.width = this.k8w.clientWidth * y8x;
	this.a1s.e5v.height = this.k8w.clientHeight * y8x;

	let s5j = 32 * y8x;
	let d5i = 32 * y8x;
	let h6v = this.a1s.e5v.width - s5j;
	let g3m = this.a1s.e5v.height - d5i;
	let b6c = g3m < h6v ? g3m : h6v;
	if (b6c < 128)
	{
		b6c = 128;
	}
	let rect = new a9w();
	rect.k2m = 0;
	rect.i0p = 0;
	rect.a2y(b6c);
	rect.j1s(b6c);
	this.x6a.c7p = b6c * 0.02;
  if (this.x6a.c7p < q5b)
  {
    this.x6a.c7p = q5b;
  }
	b6c = this.x6a.r3p(rect);
 	this.a1s.s9o(this.x6a);
	this.a1s.p9c();
}

i1o()
{
	this.a1s.i1o();
	this.a1s.p9c();
}

n9e()
{
	this.x6a.l9g = !this.x6a.l9g;
	this.a1s.s9o(this.x6a);
	this.a1s.p9c();
}

x0m()
{
	this.a1s.s9o(this.x6a);
	this.a1s.p9c();
}

t8z(s6d)
{
	this.f3y = s6d.t9o.h1x();
	this.a1s.w2k(this.f3y);
	this.a1s.j0o(s6d.s0l);
	this.a1s.r4l(s6d.l2t);
  
 	this.a1s.c0m(s6d.q2t);
	this.a1s.p9c();

	if (this.u4k)
	{
		u9s('playBackward' + this.u5a, s6d.i1i);
		u9s('goToBegin'+ this.u5a, s6d.i1i);
		u9s('playForward' + this.u5a, s6d.c6e);
		u9s('goToEnd' + this.u5a, s6d.c6e);
		u9s('autoPlay' + this.u5a, s6d.c6e);
	}
	else
	{
		u9s('goToBegin' + this.u5a, s6d.i1i);
		u9s('goToEnd' + this.u5a, s6d.c6e);
	}
}

w2k(i8a)
{
	let s6d = new h5y();
	s6d.t9o = i8a.h1x();
	this.w2k(s6d);
}

s9o(x6a)
{
  this.x6a = x6a.h1x();
}

}

const t7g =
{
	l1z       : 0,
	b0b        : 1,
};

class b1y
{

constructor(u5a)
{
	this.u5a = u5a;
 	this.r5v = new g5i();
 	this.p5u = new u0g(u5a);
  this.p5u.c4p = false;
  this.p5u.u5w = true;
  this.p5u.a6q = true;
  this.p5u.l4o = false;
  this.c2m = null;
  this.j8d = new b0i();
  this.w0r = new c0c();
 	this.p7z = new y5p();
	this.y4z = new b7h();
	this.q2k = new b7h();
	this.c6q = 0;
	this.w0b = [];
	this.g0x = false;
 	this.h2n = false;
 	this.s8m = false;
 	this.r8q = false;
  this.n3g = t7g.l1z;
  this.a0n = document.getElementById("threat"+this.u5a);
 	this.a0n.onclick = this.c2w.bind(this);
  this.q0j();
  this.g0i = document.getElementById("engineSettings"+this.u5a);
}

u3r(u6z)
{
  this.c2m = new k3k();
  this.c2m.y8a = (event) => {
    this.a4q(event);
  };
  this.c2m.x5w(u6z);
  this.c2m.n6r();
}

r1d()
{
	this.j8d = this.c2m.u6z();
	this.p7z = new y5p();
  /*
	showName();
	MovePanel->Caption = "";
	ScorePanel->Caption = "";
	DepthPanel->Caption = "";
	NodesPanel->Caption = "";
  */
	this.r5v.w2k(this.p7z.i8a,
    this.p7z.a3g);
	this.t9q();
 	this.t9l();
  this.q0j();
}

w2k(z3e, v5n, h0a, r9l)
{
	this.q2k = z3e.h1x();
	this.c6q = v5n;
	this.w0b = h0a.slice(); 
	this.g0x = r9l;
	this.t9l();
}

t9l()
{
	if (!this.c2m) return;
	if (this.h2n) return;

	if (this.s8m)
	{
		let h0a = new g5i();
		h0a.w2k(this.q2k, this.c6q);
		let h6c = h0a.h6c();
		h0a.m1f(h6c, this.w0b);
		let a2u = h0a.p2i();
		let u3o = h0a.v2s(h0a.b3b());
		if (a2u.c6z())
		{
			u3o++;
		}
		let i1x = a2u;
		i1x.b3r();
		this.w0r = new c0c();
    this.w0r.h0a.w2k(i1x, u3o);
		this.y4z = i1x;
  }
  else
  {
 		this.w0r.h0a.w2k(this.q2k, this.c6q);
		let h6c = this.w0r.h0a.h6c();
		this.w0r.h0a.m1f(h6c, this.w0b);
		this.y4z = this.w0r.h0a.p2i();
  }
  if (b7m === 10) 
  {
    this.w0r.z9q = d4l;
  }
  else
  {
    this.w0r.z9q = b1o(b7m);
  }

  this.c2m.j8i();
	this.r8q = false;
  let h0a = x8a(this.y4z);
  if (h0a.length == 0)
  {
  	this.c2m.j0j(this.w0r);
		return;
  }
  else
  {
  	this.c2m.j0j(this.w0r);
		return;
  }
}

o3s()
{
	this.p7z = this.c2m.x7j();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.r5v.w2k(this.p7z.i8a,
    this.p7z.a3g);
	this.t9q();
}

c5f()
{
	this.p7z = this.c2m.x7j();
	
}


j2p()
{
	this.p7z = this.c2m.x7j();
  
	
	
	
  
	this.t9q();
}

t9q()
{
	let s8q = this.p7z.n4i.h0a.h1x();
  s8q.w2k(this.p7z.i8a, this.p7z.a3g);

  if (this.p7z.f6s)
  {
    for (let w8g of this.p7z.j8a)
    {
      let h0a = w8g.h0a.j8y();
      let v2a = s8q.h6c();
      let a3g = 0;
      for (let s4l of h0a)
      {
        if (a3g == 0)
        {
					let g6d = w8g.q6h() +
						"/" + w8g.h2s;
					s4l.y5m(g6d);
        }
        s8q.f9g(v2a, s4l);
        a3g++;
      }
    }
  }
  else
  {
    if (this.p7z.j8a.length !== 0)
    {
      let w8g = this.p7z.j8a[this.p7z.j8a.length - 1];
      let h0a = w8g.h0a.j8y();
      let v2a = s8q.h6c();
      let a3g = 0;
      for (let s4l of h0a)
      {
				if (a3g == 0)
				{
					let g6d = w8g.q6h() +
						"/" + w8g.h2s;
					s4l.y5m(g6d);
				}
        s8q.f9g(v2a, s4l);
        a3g++;
      }
    }
  }
  this.r5v = s8q.h1x();
  this.p5u.f6s = this.p7z.f6s;
  this.p5u.r8y(this.r5v, 0);
}

a4q(event)
{
  const {cmd, data} = event;
  if (cmd === 'ready')
  {
    this.r1d()
  }
  else if (cmd === 'go')
  {
    this.o3s()
  }
  else if (cmd === 'cm')
  {
    this.c5f();
  }
  else if (cmd === 'pv')
  {
    this.j2p();
  }
}

e2j()
{
	if (this.c2m)
	{
    this.c2m.y8a = null;
    this.c2m.p6l();
		this.c2m = null;
		this.p7z = new y5p();
  	this.r5v.w2k(this.p7z.i8a,
      this.p7z.a3g);
  	this.t9q();
    this.s8m = false;
    this.q0j();
  }
}

w5b()
{
	return (this.c2m != null);
}

j7q()
{
  return (this.engineMode === t7g.b0b);
}

c2w()
{
	if (this.c2m && !this.j7q())
	{
		this.s8m = !this.s8m;
		this.q0j();
		this.t9l();
	}
}

q0j()
{
	if (this.c2m)
	{
    this.a0n.disabled = false;
    this.a0n.classList.remove('threat-inactive');
		if (this.s8m)
		{
      this.a0n.classList.remove('threat-off');
      this.a0n.classList.add('threat-on');
		}
		else
		{
      this.a0n.classList.remove('threat-on');
      this.a0n.classList.add('threat-off');
		}
	}
	else
	{
    this.a0n.disabled = true;
    this.a0n.classList.add('threat-inactive');
    this.a0n.classList.remove('threat-on');
    this.a0n.classList.add('threat-off');
	}
}

}

class u9z
{

constructor(u5a)
{
	this.u5a = u5a;
  this.a0j = null;
	this.l5w = new s2g();
}

e6z(l5w)
{
	this.l5w = l5w.h1x();
	this.x5a();
}

x5a()
{
	let a0c = this.l5w.a9t.b3i.s7s();
	let x4g = this.l5w.k3t.b3i.s7s();

	let d6w = '';
	if (a0c.length && this.l5w.a9t.u6p)
	{
		d6w = this.l5w.a9t.u6p.toString();
	}
	let j1g = '';
	if (a0c.length && this.l5w.a9t.j8j.length)
	{
		j1g = this.l5w.a9t.j8j.toString();
	}

	let h7h = '';
	if (x4g.length && this.l5w.k3t.u6p)
	{
		h7h = this.l5w.k3t.u6p.toString();
	}
	let t6m = '';
	if (x4g.length && this.l5w.k3t.j8j.length)
	{
		t6m = this.l5w.k3t.j8j.toString();
	}

	let h5a = this.l5w.a9t.b3i.z6q(1);
	let i4b = this.l5w.k3t.b3i.z6q(1);

	let m2j = '';
	let m5t = '';
	if (!this.l5w.a9t.a6z.b6d() &&
		!this.l5w.k3t.a6z.b6d())
	{
		m2j = this.l5w.a9t.a6z.g2q();
		m5t = this.l5w.k3t.a6z.g2q();
	}

	let l4v = c7l(this.l5w.z2l);
	let m2w = this.l5w.m2w.j8j;
	if (!this.l5w.m2w.f4f.b6d())
	{
		m2w += " ";
		m2w += this.l5w.m2w.f4f.y5d.toString();
	}
	let z2z = '';
	if (!this.l5w.g0s.b6d())
	{
		z2z = this.l5w.g0s.toString("dd-mm-yyyy");
	}
	let u3w = '';
	if (!this.l5w.u3w.b6d())
	{
		u3w = '</br>' + '[' + this.l5w.u3w.x6l + ']';
	}

	let h5c = document.getElementById("nota-container"+this.u5a);
	let f9m = h5c.clientHeight;
	let r2c = 200;

  let index = this.u5a;
  let n7i = this.l5w.m2w.n7i;

	let x6m = true;
	if (this.a0j.clientWidth >= 374 && f9m >= r2c)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + a0c + "</span>";
    s += 					"<span class=\"rating\">" + d6w + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + m2j + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + l4v + "</span>";
		s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + x4g + "</span>";
		s +=          "<span class=\"rating\">" + h7h + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + m5t + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "<span>" + j1g + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + m2w + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + n7i + "</span>";
		s +=          "<span class=\"gameDate\">" + z2z + "</span>";
    s +=          "<span class=\"annotator\">" + u3w + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + t6m + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
		s +=      "</tr>";
		s +=    "</table>";
		this.a0j.innerHTML = s;

		
		
		let n1o = Math.trunc(this.a0j.clientWidth / 10);
		if (n1o < 24) n1o = 24;
    
		
		
		
		
		
		
	}
	else if (this.a0j.clientWidth >= 300 && f9m >= r2c)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + h5a + "</span>";
    s +=          "<span class=\"rating\">" + d6w + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + m2j + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + l4v + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + i4b + "</span>";
    s +=          "<span class=\"rating\">" + h7h + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + m5t + "</span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + j1g + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + m2w + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + n7i + "</span>";
    s +=          "<span class=\"gameDate\">" + z2z + "</span>";
		s +=          "<span class=\"annotator\">" + u3w + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + t6m + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.a0j.innerHTML = s;
	}
	else if (this.a0j.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + h5a + "</span>";
    s +=          "<span class=\"rating\">" + d6w + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + l4v + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + i4b + "</span>";
    s +=          "<span class=\"rating\">" + h7h + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.a0j.innerHTML = s;
	}
	else
	{
		
		x6m = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + h5a + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + l4v + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + i4b + "</span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.a0j.innerHTML = s;
	}

	if (x6m)
	{
		let q5a = 16;
		if (this.a0j.clientWidth < 400)
		{
			q5a = 16;
		}
		else if (this.a0j.clientWidth < 500)
		{
			q5a = 24;
		}
		else
		{
			q5a = 32;
		}
    if (this.l5w.a9t.m5s != r4b.l2e)
    {
  		let l3b = document.getElementById("whitePlayerNation"+this.u5a);
	  	l3b.src = "images/flags/" + q5a.toString() +"/" + t9f(this.l5w.a9t.m5s) + ".png";
		  l3b.height = q5a;
  		l3b.width = q5a;
    }
    if (this.l5w.k3t.m5s != r4b.l2e)
    {
  		let h0f = document.getElementById("blackPlayerNation"+this.u5a);
	  	h0f.src = "images/flags/" + q5a.toString() + "/" + t9f(this.l5w.k3t.m5s) + ".png";
		  h0f.height = q5a;
  		h0f.width = q5a;
    }
	}
}

}

class h2h
{

constructor(u5a)
{
	this.u5a = u5a;
	this.l5w = new s2g();
	this.n1r = new o3u(u5a);
	this.j1y = new n9q(u5a);
	this.j1y.p5u.e5s = this; 
	this.e4p = new q6l();
  this.b7s = new b1y(u5a);
}

i1o()
{
	this.n1r.i1o();
}

n9e()
{
	this.n1r.n9e();
}

x0m()
{
	this.n1r.x0m();
	this.j1y.p5u.x0m();
}

f2f(k2n, o4p, k0e, e6f)
{
	this.m8m(e6f, k0e);
}

m8m(e6f, k0e)
{
	this.l5w = e6f.g3r.h1x();
	this.e6z();
	this.j1y.p5u.r8y(e6f.h0a, k0e);
}

e6z()
{
	this.j1y.l0q.e6z(this.l5w);
}

g9p(s6d)
{
	this.n1r.t8z(s6d);
  this.l2l();
}

n7o()
{
	if (this.e4p.g0b())
	{
		this.e4p.a4e();
    this.z0p();
	}
	else
	{
		if (!this.j1y.p5u.q5e())
		{
      
			this.e4p.e5s = this; 
			this.e4p.p3n();
			this.j1y.p5u.m5x();
		}
	}
}

w5j(u6z)
{
	this.b7s.u3r(u6z);
}

o6n()
{
	this.b7s.e2j();
}

z9o()
{
	return this.b7s.w5b();
}

l2l()
{
  if (!this.e4p.g0b())
  {
    this.z0p();
  }
}

z0p()
{
	this.b7s.w2k(
		this.j1y.p5u.z3e(),
		this.j1y.p5u.v5n(),
		this.j1y.p5u.c4m(),
		this.j1y.p5u.r9l());
}

}

const k8s =
{
	p4k : 0,
	i6u : 1,
	f3z : 2,
	u4v : 3,
	k5x : 4,
 	j0x : 5,
	z2l : 6,
	h0a : 7,
	y5d : 8,
	event : 9,
	s1m : 10
};

const u1t =
{
	l2e : 0,
	f1i : 1,
	b5e : 2
};

let v9v = 0;
let d3o = 0;
let y8h = 0;
let b5a = 0;
let m8r = 0;
let n0u = 0;
let n5t = 0;
let u5d = 0;

let b5e = false;

function r2z(f, s)
{
	let b4p = f.g3r.a9t.b3i.x6l();
	let u3c = s.g3r.a9t.b3i.x6l();
	if (b4p < u3c)
	{
		return b5e ? -1 : 1;
	}
	if (b4p > u3c)
	{
		return b5e ? 1 : -1;
	}
	b4p = f.g3r.k3t.b3i.x6l();
	u3c = s.g3r.k3t.b3i.x6l();
	if (b4p < u3c)
	{
		return -1;
	}
	if (b4p > u3c)
	{
		return 1;
	}
	return 0;
}

function n6c(f, s)
{
	let b4p = f.g3r.k3t.b3i.x6l();
	let u3c = s.g3r.k3t.b3i.x6l();
	if (b4p < u3c)
	{
		return b5e ? -1 : 1;
	}
	if (b4p > u3c)
	{
		return b5e ? 1 : -1;
	}
	b4p = f.g3r.a9t.b3i.x6l();
	u3c = s.g3r.a9t.b3i.x6l();
	if (b4p < u3c)
	{
		return -1;
	}
	if (b4p > u3c)
	{
		return 1;
	}
	return 0;
}

function n7z(f, s)
{
	let c9f = f.g3r.a9t.u6p - s.g3r.a9t.u6p;
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	c9f = f.g3r.k3t.u6p - s.g3r.k3t.u6p;
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	return r2z(f, s);
}

function s5e(f, s)
{
	let c9f = f.g3r.k3t.u6p - s.g3r.k3t.u6p;
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	c9f = f.g3r.a9t.u6p - s.g3r.a9t.u6p;
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	return r2z(f, s);
}

function e3w(f, s)
{
	let c9f = f.g3r.a9t.m5s - s.g3r.a9t.m5s;
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	c9f = f.g3r.k3t.m5s - s.g3r.k3t.m5s;
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	return r2z(f, s);
}

function f9z(f, s)
{
	let c9f = f.g3r.k3t.m5s - s.g3r.k3t.m5s;
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	c9f = f.g3r.a9t.m5s - s.g3r.a9t.m5s;
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	return r2z(f, s);
}

function f8k(f, s)
{
	let c9f = f.g3r.z2l - s.g3r.z2l;
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	return r2z(f, s);
}

function u3q(f, s)
{
	let c9f = s.g3r.g0s.g0s() - f.g3r.g0s.g0s();
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	return r2z(f, s);
}

function d1c(f, s)
{
	let n5k = f.g3r.m2w.j8j;
	let f5f = s.g3r.m2w.j8j;
	if (n5k < f5f)
	{
		return b5e ? -1 : 1;
	}
	if (n5k > f5f)
	{
		return b5e ? 1 : -1;
	}
	let c9f = f.g3r.m2w.f4f.g0s() - s.g3r.m2w.f4f.g0s();
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	c9f = f.g3r.s1m - s.g3r.s1m;
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	c9f = f.g3r.m0d - s.g3r.m0d;
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	return r2z(f, s);
}

function a2m(f, s)
{
	let c9f = s.g3r.s1m - f.g3r.s1m;
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	c9f = s.g3r.m0d - f.g3r.m0d;
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	return r2z(f, s);
}

function m5g(f, s)
{
	let c9f = s.d9u - f.d9u;
	if (b5e)
	{
		c9f = -c9f;
	}
	if (c9f < 0) return -1;
	if (c9f > 0) return 1;
	return r2z(f, s);
}

class m4g
{

constructor(u5a)
{
	this.u5a = u5a;
	this.v8u = [];
	this.p0w = null;
	this.m7n = null;
	this.c8b = null;
	this.k5p = [];
	this.j8r = [];
	this.g3v = -1;
	this.q3z = u1t.l2e;
	this.h0r = 0;
  this.d4b = null;
}

e9e()
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
	this.c8b.innerHTML = s;
	this.k5p = this.c8b.getElementsByTagName("TH");
	let u5a = this.u5a;

 	this.k5p[k8s.p4k].onclick = this.y1m.bind(this);
	this.k5p[k8s.i6u].onclick = this.s1b.bind(this);
  this.k5p[k8s.f3z].onclick = this.g3c.bind(this);
	this.k5p[k8s.u4v].onclick = this.y1m.bind(this);
	this.k5p[k8s.k5x].onclick = this.r2n.bind(this);
  this.k5p[k8s.j0x].onclick = this.y3g.bind(this);
	this.k5p[k8s.z2l].onclick = this.x3j.bind(this);
	this.k5p[k8s.h0a].onclick = this.k5g.bind(this);
	this.k5p[k8s.y5d].onclick = this.n7f.bind(this);
	this.k5p[k8s.event].onclick = this.l4l.bind(this);
	this.k5p[k8s.s1m].onclick = this.z2f.bind(this);
}

r2u(v8u)
{
	this.v8u = v8u;
	this.l5c();
}

l1o()
{
	this.x3r("grid-player");
	this.x3r("grid-rating");
 	this.x3r("grid-flag");
	this.x3r("grid-result");
	this.x3r("grid-moves");
	this.x3r("grid-year");
	this.x3r("grid-event");
	this.x3r("grid-round");
}

w6a()
{
	this.x4z("grid-player", v9v);
	this.x4z("grid-rating", d3o);
 	this.x4z("grid-flag", u5d);
	this.x4z("grid-result", y8h);
	this.x4z("grid-moves", b5a);
	this.x4z("grid-year", m8r);
	this.x4z("grid-event", n0u);
	this.x4z("grid-round", n5t);

}

x3r(s4k)
{
	let h5f = this.p0w.getElementsByClassName(s4k);
	for (let i = 0; i < h5f.length; i++) {
		h5f[i].style.display = "none";
	}
}

m7y(s4k)
{
	let h5f = this.p0w.getElementsByClassName(s4k);
	for (let i = 0; i < h5f.length; i++) {
		h5f[i].style.display = "table-cell";
	}
}

x4z(s4k, width)
{
	let h5f = this.p0w.getElementsByClassName(s4k);
	for (let i = 0; i < h5f.length; i++) {
		h5f[i].style.width = (width) + "px";
	}
}

l5c()
{
	this.h0r = this.p0w.clientWidth;
	this.h0r -= 17;
	if (this.h0r < 100)
	{
		this.h0r = 100;
	}
	v9v = 200;
	d3o = 52;
	y8h = 34;
	b5a = 50;
	m8r = 52;
	n0u = 200;
	n5t = 50;
  u5d = 30;

 
	let z0d = document.getElementsByClassName("tdreplay")[0];
	if (z0d.clientWidth <= y1x)
	{
		let o7x = 0.7;
		v9v *= o7x;
		d3o *= o7x;
		y8h *= o7x;
		b5a *= o7x;
		m8r *= o7x;
		n0u *= o7x;
		n5t *= o7x;
	}
	this.m7m();
}

y0b()
{
	this.l1o();
	this.w6a();

  let a9q = 2.8;
  let w5y = 2.8;
  let g4t = 17;
	if (this.h0r <= 400)
	{
		this.m7y("grid-player");
		this.m7y("grid-result");
    this.m7y("grid-year");
		this.m7y("grid-event");
    let p5j = 5 * (a9q + w5y);
		let u8w = y8h + m8r;
		let b2q = Math.trunc((this.h0r - u8w - p5j - g4t) / 3);
		this.x4z("grid-player", b2q);
		this.x4z("grid-event", b2q);
	}
	else if (this.h0r <= 580)
	{
		this.m7y("grid-player");
		this.m7y("grid-rating");
		this.m7y("grid-result");
		this.m7y("grid-year");
		this.m7y("grid-event");
    let p5j = 7 * (a9q + w5y);
		let u8w = 2 * d3o + y8h + m8r;
		let b2q = Math.trunc((this.h0r - u8w - p5j - g4t) / 3);
		this.x4z("grid-player", b2q);
		this.x4z("grid-event", b2q);
	}
	else
	{
		this.m7y("grid-player");
		this.m7y("grid-rating");
    this.m7y("grid-flag");
		this.m7y("grid-result");
		this.m7y("grid-moves");
		this.m7y("grid-year");
		this.m7y("grid-event");
		this.m7y("grid-round");
    let p5j = 11 * (a9q + w5y);
		let u8w = 2 * d3o + 2 * u5d + y8h + b5a + m8r + n5t;
		let b2q = Math.trunc((this.h0r - u8w - p5j - g4t) / 3);
		this.x4z("grid-player", b2q);
		this.x4z("grid-event", b2q);
	}
}

m7m()
{
	let q5a = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.u5a + "\">"; 
	for (const e6f of this.v8u)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += e6f.g3r.a9t.b3i.p7u();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (e6f.g3r.a9t.u6p)
		{
			s += e6f.g3r.a9t.u6p;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (e6f.g3r.a9t.m5s != r4b.l2e)
		{
      let u9u = "images/flags/" + q5a.toString() + "/" + t9f(e6f.g3r.a9t.m5s) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += u9u;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += e6f.g3r.k3t.b3i.p7u();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (e6f.g3r.k3t.u6p)
		{
			s += e6f.g3r.k3t.u6p;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (e6f.g3r.k3t.m5s != r4b.l2e)
		{
      let u9u = "images/flags/" + q5a.toString() + "/" + t9f(e6f.g3r.k3t.m5s) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += u9u;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-result\">";
		s += c7l(e6f.g3r.z2l);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += e6f.d9u;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += e6f.g3r.g0s.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += e6f.g3r.m2w.j8j;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += e6f.g3r.o5s();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.m7n.innerHTML = s;

  let c0u = document.getElementById('gameList' + this.u5a);
  c0u.addEventListener('click', this.a0o.bind(this));

	this.y0b();
}

p8c(l7y)
{
	if (l7y != this.g3v)
	{
		this.g3v = l7y;
		this.q3z = u1t.f1i;
	}
	else
	{
		if (this.q3z == u1t.l2e)
		{
			this.q3z = u1t.f1i;
		}
		else if (this.q3z == u1t.f1i)
		{
			this.q3z = u1t.b5e;
		}
		else if (this.q3z == u1t.b5e)
		{
			this.q3z = u1t.f1i;
		}
	}
	b5e = (this.q3z == u1t.b5e);

	for (const m9z of this.k5p)
	{
		let s = m9z.n2f;
		let f5n = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let z7t = f5n.replace(" grid-header-sort grid-header-sort-asc", "");
		m9z.n2f = z7t;
	}
	let i0x = this.k5p[this.g3v];
	if (this.q3z == u1t.b5e)
	{
		i0x.n2f = i0x.n2f + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		i0x.n2f = i0x.n2f + " grid-header-sort grid-header-sort-asc";
	}
}

y1m(event)
{
	this.p8c(k8s.p4k);
	this.v8u.sort(r2z);
	this.m7m();
}

s1b(event)
{
	this.p8c(k8s.i6u);
	this.v8u.sort(n7z);
	this.m7m();
}

g3c(event)
{
	this.p8c(k8s.f3z);
	this.v8u.sort(e3w);
	this.m7m();
}

l7c(event)
{
	this.p8c(k8s.u4v);
	this.v8u.sort(n6c);
	this.m7m();
}

r2n(event)
{
	this.p8c(k8s.k5x);
	this.v8u.sort(s5e);
	this.m7m();
}

y3g(event)
{
	this.p8c(k8s.j0x);
	this.v8u.sort(f9z);
	this.m7m();
}

x3j(event)
{
	this.p8c(k8s.z2l);
	this.v8u.sort(f8k);
	this.m7m();
}

n7f(event)
{
	this.p8c(k8s.y5d);
	this.v8u.sort(u3q);
	this.m7m();
}

l4l(event)
{
	this.p8c(k8s.event);
	this.v8u.sort(d1c);
	this.m7m();
}

z2f(event)
{
	this.p8c(k8s.s1m);
	this.v8u.sort(a2m);
	this.m7m();
}

k5g(event)
{
	this.p8c(k8s.h0a);
	this.v8u.sort(m5g);
	this.m7m();
}

a0o(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.d4b)
  {
    this.d4b(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class z5k
{

constructor()
{
	this.i8a = new b7h();
	this.e3y = new b7h();
	this.o4u = false;
	this.s8j = 0;
	this.t6x = 0;
	this.f7u = [];
}

}

var tooltip = null;

class u0g
{

constructor(u5a)
{
	this.u5a = u5a;
	this.x1k = new g5i();
	this.e5s = null;
	this.g7x = new z5k();
	this.m3m = null;
	this.b8i = [];
	this.e4h = [];
  this.h1d = [];
  this.j8h = [];
	this.r4d = -1;
	this.x6a = new i2p();
  this.r7v = null;
	this.t8q = true;
	this.s5i = false;
	this.n5z = [];
	this.v2j = 0;
  this.c4p = true;
  this.u5w = false;
	this.a6q = false;
	this.l4o = true;
  this.f6s = false;
}

r8y(j9o, k0e)
{
	this.x1k = j9o.h1x();
  this.x1k.s3h();
	this.r7v = this.x1k.y9i(k0e);
	this.f2f();
}

z5z(z0x)
{
  this.f0v(this.h1d[z0x]);
}

f2f()
{
	this.e7t();
	this.m5x();
  this.e5b(this.x1k.y6v(this.r7v));
}

e7t()
{
	let x7d = new o1y();
  x7d.p8t(this.c4p);
	x7d.y1v(this.f6s);
  /*
	x7d.setOneLine(this.f6s);
  */
	x7d.o2w(this.a6q);
	x7d.i9b(this.l4o);
	x7d.n1u(this.x1k);

  this.m3m.innerHTML = x7d.l3q.w8t;
  this.b8i = this.m3m.getElementsByClassName("tdmove");
  this.e4h = this.m3m.getElementsByClassName("tdcomment");

	this.i2i("tdmove");
	this.i2i("tdcomment");
	this.i2i("tddia");
	this.i2i("tdmedal");
  this.i2i("tdcolors");

  this.i6c("tdmove");

	this.i3c();
	this.x4e();
}

i2i(e3u)
{
	let u5a = this.u5a;
	let c4h = this.m3m.getElementsByClassName(e3u);
	for (const k9c of c4h)
	{
    let k0e = k9c.getAttribute('movenr');
    k9c.onclick = this.d0k.bind(this, k0e);
	}
}

i6c(e3u)
{
	let u5a = this.u5a;
	let c4h = this.m3m.getElementsByClassName(e3u);
	for (const k9c of c4h)
	{
    let k0e = k9c.getAttribute('movenr');
    k9c.onmouseover = this.z0y.bind(this, k0e);
    k9c.onmouseleave = this.v6s.bind(this, k0e);
	}
}

x0m()
{
	this.i3c();
}

i3c()
{
	let n3q = this.m3m.getElementsByClassName("tddia");
	for (const p5m of n3q)
	{
		let a1s = new p8q();
		a1s.e5v = p5m.getElementsByTagName("canvas")[0];
		let b6c = this.x6a.c0b();
		a1s.e5v.width = b6c;
		a1s.e5v.height = b6c;
		a1s.s9o(this.x6a);
		let v2a = this.x1k.y9i(p5m.getAttribute('movenr'));
    a1s.w2k(this.x1k.i8a(v2a));
    if (v2a.s4l)
    {
  		a1s.j0o(v2a.s4l.s0l());
	  	a1s.r4l(v2a.s4l.l2t());
    }
    else
    {
   		a1s.j0o(this.x1k.d3w());
	  	a1s.r4l(this.x1k.e6r());
    }
		a1s.p9c();
	}
}

x4e()
{
	let y3q = this.m3m.getElementsByClassName("tdmedal");
	for (const n4o of y3q)
	{
		let e5v = n4o.getElementsByTagName("canvas")[0];
		e5v.width = 40;
		e5v.height = 16;
		let h6d = e5v.getContext('2d');
		let rect = new a9w();
		rect.a2y(40);
		rect.j1s(16);
		let v2a = this.x1k.y9i(n4o.getAttribute('movenr'));
    if (v2a.s4l)
    {
  		x4e(h6d, rect, v2a.s4l.o7u());
    }
    else
    {
  		x4e(h6d, rect, this.x1k.h7s());
    }
	}
}

m5x()
{
	let s6d = new h5y();
	s6d.z3e = this.x1k.z3e();
  s6d.t9o = this.x1k.i8a(this.r7v);
  if (this.x3e())
  {
    s6d.s0l = this.x1k.d3w();
	  s6d.l2t = this.x1k.e6r();
  }
  else
  {
  	s6d.s0l = this.r7v.s4l.s0l();
	  s6d.l2t = this.r7v.s4l.l2t();
  }
  
	if (this.q5e())
	{
		s6d.u1o = new u4t();
	}
	else
	{
    let o5q = this.r7v.h1x();
		this.x1k.c7z(o5q);
		s6d.u1o = o5q.s4l.r6e().h1x();
	}
  
 	if (!this.x3e())
	{
		s6d.q2t = this.r7v.s4l.r6e();
	}
	s6d.v2s = this.v2s();
	s6d.i1i = this.i1i();
	s6d.c6e = this.c6e();
	s6d.w0j = 0; 
  s6d.l6k = this.x1k.l6k(this.r7v);
	if (this.e5s)
	{
		this.e5s.g9p(s6d);
	}
}

z2x(b2x)
{
	this.r7v = this.x1k.y9i(b2x);
	this.m5x();
}

o7l(i0q)
{
	switch (i0q)
	{
		case k9n:
		case o7w:
		case h8p:
			this.r5f();
			break;
		case z0o:
		case p1f:
		case t7c:
			this.m6w();
			break;
		case i5q:
		case t4p:
		case l4i:
			this.n3h();
			break;
		case o0c:
		case z7r:
		case i4f:
			this.h8j();
			break;
		case z8i:
			break;
		case b0r:
			break;
	}
}

j7c()
{
  if (this.r7v.c6y)
  {
    this.e5b(this.r7v.c6y.h0y);
  }
  else
  {
    this.e5b(0);
  }
}

v0f()
{
	this.j7c();
	this.m5x();
}

i1i()
{
	return !this.x3e();
}

x3e()
{
	return this.x1k.x3e(this.r7v);
}

q5e()
{
	return this.x1k.q5e(this.r7v);
}

v2s()
{
	return this.x1k.v2s(this.r7v);
}

u1o(e8w)
{
	if (this.q5e())
	{
		return null;
	}
	else
	{
    let o5q = this.r7v.h1x();
		this.x1k.d7l(o5q, e8w);
		return o5q.s4l;
	}
}

m6w()
{
	if (this.i1i())
	{
		this.x1k.z2n(this.r7v);
		this.v0f();
	}
}

c6e()
{
	return !this.q5e();
}

r5f()
{
	if (this.c6e())
	{
		this.s1t(0);
	}
}

s1t(index)
{
	let a2j = this.x1k.k7o(this.r7v);
	if (index >= 0 && index < a2j)
	{
		this.x1k.d7l(this.r7v, index);
		this.v0f();
	}
}

h8j()
{
	if (this.c6e())
	{
		this.x1k.y8q(this.r7v);
		this.v0f();
	}
}

n3h()
{
	if (this.i1i())
	{
		this.r7v = this.x1k.h6c();
		this.v0f();
	}
}

d9j()
{
	if (this.t8q)
	{
		this.u9p();
	}
	else
	{
		this.b1t();
	}
}

w1l()
{
	if (this.s5i)
	{
		this.s5i = false;
		this.e5s.n1r.a1s.o7n();
		this.m5x();
	}
	else
	{
		this.m5x();
	}
}


b1t()
{
	if (this.q5e())
	{
		this.m5x();
		return;
	}
  if (chess)
  {
  	this.s1t(0);
    return;
  }

  
 	let s4l = this.u1o(0);
  if (!s4l.t6x())
 	{
  	this.s1t(0);
	  return;
 	}

  
	let h0i = false;
	if (!this.g7x.o4u)
	{
		h0i = true;
	}
	else
	{
		h0i = false;
		if (this.g7x.s8j < this.g7x.t6x)
		{
			if (this.g7x.e3y.q6i(this.g7x.i8a))
			{
				h0i = true;
			}
		}
	}
	if (h0i)
	{
		this.g7x.i8a = this.x1k.i8a(this.r7v);
		this.g7x.e3y = this.x1k.i8a(this.r7v);
		this.g7x.o4u = true;
		this.g7x.s8j = 0;
		this.g7x.f7u.length = 0;
		this.g7x.f7u.push(s4l.d5w()); 
		this.g7x.t6x = s4l.t6x();
		if (this.g7x.t6x > 1)
		{
			let a4d = h8n(this.g7x.e3y, s4l.r6e());
			for (let i = 0; i < this.g7x.t6x - 1; i++)
			{
				this.g7x.f7u.push(a4d[i]);
			}
		}
		this.g7x.f7u.push(s4l.y4i());
	}
	if (this.g7x.s8j < this.g7x.t6x)
	{
		let c2y = s4l.c2y();
		let y7q = this.g7x.f7u[this.g7x.s8j];
		let y4i = this.g7x.f7u[this.g7x.s8j + 1];
		this.g7x.e3y.g7y(y7q, u8l.b6d);
		this.g7x.e3y.g7y(y4i, c2y);
		this.g7x.i8a = this.g7x.e3y.h1x();
		this.g7x.s8j++;
		let s6d = new h5y();
		s6d.t9o = this.g7x.e3y.h1x();
		s6d.i1i = this.i1i();
		s6d.c6e = this.c6e();
		if (this.e5s)
		{
			this.e5s.g9p(s6d);
		}
	}
	else
	{
		this.g7x.o4u = false;
		this.s1t(0);
	}
}



u9p()
{
	if (this.s5i)
	{
		let o4b = this.e5s.n1r.a1s.z0a();
		if (o4b)
		{
			if (this.v2j < this.n5z.length - 1)
			{
				this.e5s.n1r.a1s.o7i(this.n5z[this.v2j],
					this.n5z[this.v2j+1], true);
				this.v2j++;
			}
			else
			{
				this.s5i = false;
				this.s1t(0);
			}
		}
		return;
	}

	if (this.q5e())
	{
		this.m5x();
		return;
	}

	this.n5z.length = 0;
	let s4l = this.u1o(0);
	let t6x = s4l.t6x();
	if (t6x == 0)
	{
		this.n5z.push(s4l.d5w()); 
		this.n5z.push(s4l.g8k());
	}
	else
	{
		this.n5z.push(s4l.d5w());
		if (t6x > 1)
		{
      let i8a = this.x1k.i8a(this.r7v);
      let a4d = h8n(i8a, s4l.r6e());
			for (let i = 0; i < t6x - 1; i++)
			{
				this.n5z.push(a4d[i]);
			}
		}
		this.n5z.push(s4l.g8k());
	}

	this.e5s.n1r.a1s.o7i(this.n5z[0],
		this.n5z[1], t6x > 0);
	this.v2j = 1;
	this.s5i = true;
}

c0a(c5k)
{
	for (const m of this.b8i)
	{
		if (m.getAttribute('movenr') == c5k)
		{
			return m;
		}
	}
	return null;
}

v3o(c5k)
{
	let r7x = [];
	for (const y7h of this.e4h)
	{
		if (y7h.getAttribute('movenr') == c5k)
		{
			r7x.push(y7h);
		}
	}
	return r7x;
}

f0v(g3d)
{
	let g9h = g3d.offsetTop;
	let l8q = g3d.scrollHeight;

	let r3s = this.m3m.offsetTop;
	let j8f = this.m3m.scrollTop;
	let k6k = this.m3m.clientHeight;
	let v6m = this.m3m.scrollHeight;
	let b8v = g9h - r3s;
	if (b8v >= j8f && b8v + l8q <= j8f + k6k - 1)
	{
		
	}
	else
	{
		
		let top = b8v - (k6k / 2);
		if (top < 0) top = 0;
		this.m3m.scrollTop = top;
	}
}

f5x(x8t, p5w)
{
	let k2c = x8t;
	while (k2c.h9e)
	{
		k2c = k2c.h9e;
	}
 	while (k2c)
	{
    if (this.x1k.v6v(k2c.h0y) == false)
    {
 	  	let g3d = this.c0a(k2c.h0y);
  	  if (g3d)
 		  {
  		  g3d.classList.add(p5w);
 	  	}
    }
    k2c = k2c.h6l;
  }
}

e5b(k0e)
{
  
 	for (const s4l of this.b8i)
	{
 		s4l.classList.remove('tdcurline');
    s4l.classList.remove('tdcurnode1');
	}
 	for (const y7h of this.e4h)
	{
 		y7h.classList.remove('tdcurline');
	}

  
	if (this.r4d >= 0)
	{
		let g3d = this.c0a(this.r4d);
		if (g3d)
		{
			g3d.classList.remove('tdcurmove');
		}
	}

  
  let d5n = true;
  let n9l = this.x1k.b5z(this.r7v);
 	for (const x8t of n9l)
	{
    if (x8t.h9e && d5n)
		{
		  this.f5x(x8t, 'tdcurnode1');
      d5n = false;
    }
    else
    {
      if (this.x1k.v6v(x8t.h0y) == false)
      {
   	  	let m9g = this.c0a(x8t.h0y);
	  	  if (m9g)
  		  {
	  		  m9g.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let g3d = this.c0a(k0e);
	if (g3d)
	{
    g3d.classList.remove('tdcurline');
		g3d.classList.add('tdcurmove');
		this.f0v(g3d);
	}
	this.r4d = k0e;
}

r1h()
{
	let s4l = this.c0a(this.r4d);
	if (!s4l) return;
	let c4i = s4l.offsetTop;
	let x2m = null;
	let j0w = -1;
	for (const m of this.b8i)
	{
		if (m.offsetTop < c4i)
		{
			if (m.offsetTop > j0w)
			{
				x2m = m;
				j0w = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (x2m)
	{
		this.x4i(x2m.getAttribute('movenr'));
	}
	else
	{
		if (this.b8i.length)
		{
			this.x4i(this.b8i[0].getAttribute('movenr'));
		}
	}
}

w2l()
{
	let s4l = this.c0a(this.r4d);
	if (!s4l)
	{
		this.r5f();
		return;
	}
	let c4i = s4l.offsetTop;
	for (const m of this.b8i)
	{
		if (m.offsetTop > c4i)
		{
			this.x4i(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.b8i.length)
	{
		this.x4i(this.b8i[this.b8i.length - 1].getAttribute('movenr'));
	}
}

x4i(b2x)
{
  
  
  
  
  if (this.r7v.c6y)
  {
    if (this.r7v.c6y.h0y == b2x)
    {
      return;
    }
  }
  else
  {
    if (b2x == 0)
    {
      return;
    }
  }
	
  this.z2x(b2x);
  this.e5b(b2x);
	
}

y6v()
{
	return this.x1k.y6v(this.r7v);
}

s9o(x6a)
{
  this.x6a = x6a.h1x();
	this.x6a.c7b = 0;
	this.x6a.c7p = 0;
	this.x6a.i7a = 32;
  this.x6a.o3j = 2;
 	this.x6a.l9g = false;
}

z3e()
{
	return this.x1k.z3e();
}

v5n()
{
	return this.x1k.v5n();
}

c4m()
{
	return this.x1k.c4m(this.r7v);
}

r9l()
{
	return this.x1k.r9l();
}

d0k(k0e, event)
{
  this.x4i(k0e);
}

z0y(k0e, event)
{
  if (!this.u5w) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const k9c = event.currentTarget; 
  const rect = k9c.getBoundingClientRect();
  console.log(`a9w.k2m: ${rect.left}`);
  console.log(`a9w.i0p: ${rect.top}`);
  let n4k = rect.left;
  let b7q = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let x0c = this.x6a.c0b();

  if (n4k + x0c > viewportWidth)
  {
    n4k = viewportWidth - x0c - 5;
  }
  if (n4k < 5)
  {
    n4k = 5;
  }
  if (b7q + x0c > viewportHeight)
  {
    b7q = viewportHeight - x0c - 5;
  }
  if (b7q < 5)
  {
    b7q = 5;
  }

  let v2a = this.x1k.y9i(k0e);
  let i8a = this.x1k.i8a(v2a);
  tooltip.innerHTML = this.b9u(i8a);

  tooltip.style.left = `${n4k}px`;
  tooltip.style.top = `${b7q}px`;
  tooltip.classList.add('visible');
}

v6s(k0e, event)
{
  if (!this.u5w) return;
  tooltip.classList.remove('visible');
}

b9u(i8a)
{
  let a1s = new p8q();
  const tempCanvas = document.createElement('canvas');
	a1s.e5v = tempCanvas;
	let b6c = this.x6a.c0b();
	a1s.e5v.width = b6c;
	a1s.e5v.height = b6c;
	a1s.s9o(this.x6a);
  a1s.w2k(i8a);
  a1s.p9c();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="${imageDataURL}" alt="Chess Position" width="${boardSize}" height="${boardSize}">`;
}

}

class l3f
{

constructor()
{
	this.fontSize = 15;
  this.h2r = true;
 	this.p1x = true;
}

h1x()
{
  return Object.assign(new l3f(), this);
}

}
class n9q
{

constructor(u5a)
{
  this.l0q = new u9z(u5a);
  this.p5u = new u0g(u5a);
}

}

class q6l
{

constructor()
{
	this.g5q = false;
	this.e5s = null;
	this.r6n = null;
	this.j8p = 6;
	this.a1t = null;
	this.q6u = null;
	this.g9u = null;
	this.u4p = null;
	this.z1h = null;
	this.s2j = false;
}

p3n()
{
	this.g5q = false;
	this.k7n();
	this.a1t.classList.replace('autoPlay', 'autoStop');
	this.u4p.style.display = 'none';
	this.z1h.style.display = 'none';
	this.q6u.style.display = 'inline-block';
	this.g9u.style.display = 'inline-block';
	this.m7g();
	this.e5s.n1r.u4k = false;
}

a4e()
{
	if (this.r6n)
	{
		clearInterval(this.r6n);
		this.r6n = null;
		this.a1t.classList.replace('autoStop', 'autoPlay');
		this.u4p.style.display = 'inline-block';
		this.z1h.style.display = 'inline-block';
		this.q6u.style.display = 'none';
		this.g9u.style.display = 'none';
		this.e5s.n1r.u4k = true; 
		this.e5s.j1y.p5u.w1l();
	}
}

k7n()
{
	let u5a = this.e5s.u5a;
	this.r6n = setInterval(function(){ g7n(u5a); },
		this.e5s.j1y.p5u.t8q ? this.j8p * 2 : this.j8p * 100);
}

g0b()
{
	return this.r6n != null;
}

i1i()
{
	return !this.e5s.j1y.p5u.x3e();
}

c6e()
{
	return !this.e5s.j1y.p5u.q5e();
}

z9l()
{
	if (this.s2j)
	{
		return;
	}
	else
	{
		this.s2j = true;
	}
	if (!this.c6e())
	{
		this.a4e();
	}
	else
	{
		this.e5s.j1y.p5u.d9j();
	}
	this.s2j = false;
}

u0r()
{
	if (this.r6n)
	{
		if (this.j8p < 50)
		{
			this.j8p++;
			clearInterval(this.r6n);
			this.k7n();
			this.m7g();
		}
	}
}

n7q()
{
	if (this.r6n)
	{
		if (this.j8p > 1)
		{
			this.j8p--;
			clearInterval(this.r6n);
			this.k7n();
			this.m7g();
		}
	}
}

m7g()
{
	i9l(this.q6u, this.j8p < 50);
	i9l(this.g9u, this.j8p > 1);
}

}

let j6g = null;
let t9a = 0;
let u1h = null;

class t1a
{

constructor()
{
	this.index = 0;
	this.j5q = '';
	this.z0d = null;
	this.j5g = false;
	this.e5s = null;
	this.a1f = null;
  this.v8u = [];
	this.l4x = 0;
  this.x0p = 0;

	this.t8b = null;
	this.q8k = null;
	this.left = null;
	this.u0c = null;
	this.s4f = null;
	this.u3z = null;
	this.o8y = null;
	this.k8w = null;
	this.i2y = null;
	this.p5e = null;
	this.d7s = null;
 	this.b1z = null;
 	this.d7f = null;
	this.h1b = null;
	this.u4p = null;
	this.q6u = null;
	this.a1t = null;
	this.z1h = null;
	this.g9u = null;
	this.s3p = null;
 	this.g9b = null;
  this.q6a = null;
	this.v7t = null;
  this.g0i = null;
	this.d4e = null;
	this.m7o = null;
	this.p0w = null;
	this.c0x = null;
	this.y4l = null;
	this.m4q = null;
  this.a3k = null;
  this.y9o = null;
	this.n5x = null;
	this.w4r = null;
	this.b5l = null;
	this.w6w = null;
	this.a7q = null;

	this.d9i = null;
	this.h4r = null;
	this.u3t = null;
	this.z0b = null;

  this.f3s = null;
	this.a1i = null;
	this.m8q = null;
  this.d3e = null;

  this.k3w = null;

  
  this.i7g = null;
  this.x9l = null;
  this.g6x = null;
  this.r7s = null;
  this.c7u = null;
  this.j3l = null;

  
}

b1v(index, z0d, j5q)
{
	this.index = index;
	this.z0d = z0d;
	this.j5q = j5q;
	z0d.innerHTML = '';
	z0d.id = "replay";

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

  z0d.innerHTML = s;

	this.t8b = document.getElementById("rootParent"+index);
	this.q8k = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.u0c = document.getElementById("leftContainer"+index);
	this.s4f = document.getElementById("leftNest"+index);
	this.u3z = document.getElementById("leftNorth"+index);
	this.o8y = document.getElementById("boardHolder"+index);
	this.k8w = document.getElementById("boardPanel"+index);
	this.i2y = document.getElementById("boardCanvas"+index);
	this.p5e = document.getElementById("belowBoard"+index);
	this.d7s = document.getElementById("replayPanel"+index);
 	this.b1z = document.getElementById("goToPrevious"+index);
 	this.d7f = document.getElementById("goToNext"+index);
	this.h1b = document.getElementById("goToBegin"+index);
	this.u4p = document.getElementById("playBackward"+index);
	this.q6u = document.getElementById("playSlower"+index);
	this.a1t = document.getElementById("autoPlay"+index);
	this.z1h = document.getElementById("playForward"+index);
	this.g9u = document.getElementById("playFaster"+index);
	this.s3p = document.getElementById("goToEnd"+index);
  this.g9b = document.getElementById("flipBoard"+index);
  this.q6a = document.getElementById("download"+index);
	this.v7t = document.getElementById("showGameList"+index);
  this.g0i = document.getElementById("settings"+index);
	this.d4e = document.getElementById("leftSouth"+index);
	this.m7o = document.getElementById("leftSouthNest"+index);
	this.p0w = document.getElementById("listParent"+index);
	this.c0x = document.getElementById("listHeader"+index);
	this.y4l = document.getElementById("listHeaderTable"+index);
	this.m4q = document.getElementById("listBody"+index);
  this.a3k = document.getElementById("list-button-container"+index);
  this.y9o = document.getElementById("hideGameList"+index);
	this.n5x = document.getElementById("gameList"+index);
	this.w4r = document.getElementById("right"+index);
	this.b5l = document.getElementById("rightNest"+index);
	this.w6w = document.getElementById("rightNorth"+index);
	this.a7q = document.getElementById("rightSouth"+index);

  
  if (!chess)
  {
    this.w6w.style.height = "100%";
   	this.a7q.style.display = 'none';
  }

	this.d9i = document.getElementById("nota-container"+index);
  this.d9i.style.fontSize = t5a.fontSize + 'px';
	this.h4r = document.getElementById("nota-header-container"+index);
	this.u3t = document.getElementById("headerPanel"+index);
	this.z0b = document.getElementById("movesPanel"+index);

	this.f3s = document.getElementById("enota-container"+index);
  this.f3s.style.fontSize = t5a.fontSize + 'px';
	this.a1i = document.getElementById("enota-header-container"+index);
	this.m8q = document.getElementById("eheaderPanel"+index);
	this.d3e = document.getElementById("emovesPanel"+index);

  this.k3w = document.getElementById("startEngine"+index);
}

e9e()
{
	this.z0d.style.display = 'block';
	this.q6u.style.display = 'none';
	this.g9u.style.display = 'none';
	this.p0w.style.display = 'none';

	this.j5g = false;
	if (this.z0d.clientWidth <= y1x)
	{
		this.a5w();
		this.j5g = true;
	}
	else
	{
		this.z4v();
		this.p1n();
	}
  this.q7u();
	let u5a = this.index;

	this.h1b.onclick = this.a6b.bind(this);
	this.u4p.onclick = this.m6w.bind(this);
	this.q6u.onclick = this.u0r.bind(this);
	this.a1t.onclick = this.d5z.bind(this);
	this.g9u.onclick = this.n7q.bind(this);
	this.z1h.onclick = this.r5f.bind(this);
	this.s3p.onclick = this.m6v.bind(this);
  this.b1z.onclick = this.a6k.bind(this);
  this.d7f.onclick = this.h5t.bind(this);
  this.g9b.onclick = this.i1o.bind(this);
 	this.q6a.onclick = this.d0m.bind(this);
	this.v7t.onclick = this.w6n.bind(this);
 	this.y9o.onclick = this.y7s.bind(this);

  this.g0i.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.k3w.onchange = this.v4p.bind(this);

	this.e5s = new h2h(this.index);
	this.e5s.n1r.a1s.l4m(this.i2y);
	this.e5s.n1r.k8w = this.k8w;
  this.e5s.n1r.s9o(j3m);
	this.e5s.j1y.l0q.a0j = this.u3t;
	this.e5s.j1y.p5u.m3m = this.z0b;
  this.e5s.j1y.p5u.s9o(j3m);
	this.e5s.e4p.a1t = this.a1t;
	this.e5s.e4p.q6u = this.q6u;
	this.e5s.e4p.g9u = this.g9u;
	this.e5s.e4p.u4p = this.u4p;
	this.e5s.e4p.z1h = this.z1h;
 	this.e5s.b7s.p5u.m3m = this.d3e;
  this.e5s.b7s.p5u.s9o(j3m);

  this.e5s.b7s.g0i.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.a1f = new m4g(this.index);
	this.a1f.p0w = this.p0w;
	this.a1f.m7n = this.n5x;
	this.a1f.c8b = this.y4l;
	this.a1f.e9e();
	this.a1f.r2u(this.v8u);
  this.a1f.d4b = (n5x, index) => {
    this.j5o(n5x, index);
  };
	if (this.a1f.v8u.length)
	{
		this.f2f(0, 0);
	}
	else
	{
		let e6f = new j4b();
		this.e5s.f2f(null, 1, 0, e6f);
	}
}

c0n(j5q)
{
	this.j5q = j5q;
 	let j8a = this.j5q.split('\n');
	let g2h = 0;
	for (const w8g of j8a)
	{
		if (w8g.startsWith("[Event \""))
		{
			let a1u = g2h;
      let h7z = j8a.length;
   		let f4y = j8a.slice(a1u, h7z);
  		let j5p = new s1f(f4y);
	  	this.a1f.v8u[this.l4x] = j5p.f7a();
      break;
    }
    g2h++;
	}
  this.f2f(0, 0);
}

q7u()
{
	let j8a = this.j5q.split('\n');
	let h4u = [];
	let g2h = 0;
	for (const w8g of j8a)
	{
		if (w8g.startsWith("[Event \""))
		{
			h4u.push(g2h);
		}
		g2h++;
	}
	let i = 0;
	this.v8u = [];
	for (const n8x of h4u)
	{
		let a1u = n8x;
		let h7z = 0;
		if (i < h4u.length - 1)
		{
			h7z = h4u[i + 1];
		}
		else
		{
			h7z = j8a.length;
		}
		let f4y = j8a.slice(a1u, h7z);
		let j5p = new s1f(f4y);
		let e6f = j5p.f7a();
		this.v8u.push(e6f);
		i++;
	}
}

l3z()
{
	if (this.j5g || this.q8k.clientHeight <= y1x)
	{
		this.z0d.style.k4b = "0px";
		this.z0d.style.h0d = "0px";
		this.z0d.style.width = "100%";
		this.z0d.style.height = "88vh";
	}
	else
	{
		this.z0d.style.k4b = "1px solid gray";
		this.z0d.style.h0d = "1px solid gray";
		this.z0d.style.height = "88vh";
	}
}

f3j()
{
	this.l3z();

	this.left.style.width = "100%";

	let n1x = this.u3z.getBoundingClientRect();
	this.d4e.style.top = (n1x.height) + "px";
	this.p1n();

	this.y7t();
	this.z4v();
	this.v8x();
	this.d9m();
  this.y9u()
}

z4d()
{
	this.l3z();

	let n6i = this.q8k.getBoundingClientRect();
	this.left.style.width = (n6i.width * 0.50) + "px";
	let q3s = this.left.getBoundingClientRect();

	let n1x = this.u3z.getBoundingClientRect();
	this.d4e.style.top = (n1x.height) + "px";
	this.p1n();

	this.w4r.style.left = (q3s.width) + "px";
	this.w4r.style.width = (n6i.width - q3s.width) + "px";

	this.y7t();
	this.z4v();
	this.v8x();
	this.d9m();
  this.y9u()
}

z4v()
{
}

i3d()
{
  this.u3z.style.height = '100%';
  this.w6w.appendChild(this.d9i);
  this.d9i.style.height = '100%';
  this.a7q.appendChild(this.f3s);
  if (!chess)
  {
    this.a7q.style.display = 'none';
  }
  else
  {
    this.a7q.style.display = 'block';
    this.f3s.style.height = '100%';
  }
  this.w4r.style.display = 'block';
}

a5w()
{
  this.u3z.style.height = '70%';
  this.m7o.appendChild(this.d9i);
  if (!chess)
  {
    this.d9i.style.height = '100%';
    this.f3s.style.display = 'none';
  }
  else
  {
    this.m7o.appendChild(this.f3s);
    this.d9i.style.height = '50%';
    this.f3s.style.height = '50%';
    this.f3s.style.display = 'block';
  }
  this.w4r.style.display = 'none';
}

w6n(event)
{
	this.p0w.style.display = 'block';
  let q0n = this.p0w.clientHeight - this.c0x.clientHeight - this.a3k.clientHeight;
  this.m4q.style.height = q0n + "px";
	this.v8x();
}

y7s(event)
{
 	this.p0w.style.display = 'none';
}

d9m()
{
	this.e5s.j1y.l0q.x5a();
}

y9u()
{
}

v8x()
{
  this.a1f.l5c();
}

y7t()
{
	let n1x = this.u3z.getBoundingClientRect();
	let c0q = this.p5e.getBoundingClientRect();
	this.o8y.style.height = (n1x.height - c0q.height - 1) + "px";
	this.e5s.n1r.l5c();
}

p1n()
{
	let y5b = this.s4f.getBoundingClientRect();
	let n1x = this.u3z.getBoundingClientRect();
	let r9m = y5b.height - n1x.height;
	if (r9m < 0) r9m = 0;
	this.d4e.style.height = r9m + "px";
}

c9k()
{
  u9s('goToPrevious'+this.index, this.l4x > 0);
  u9s('goToNext'+this.index, this.l4x < this.a1f.v8u.length - 1);
}

d4z(e)
{
	this.e5s.n1r.a1s.mouseDown(e);
}

g1n(e)
{
	this.e5s.n1r.a1s.mouseMove(e);
}

p9s(e)
{
	this.e5s.n1r.a1s.mouseUp(e);
}

i8v(e)
{
	this.e5s.n1r.a1s.touchStart(e);
}

z6u(e)
{
	this.e5s.n1r.a1s.touchMove(e);
}

r0z(e)
{
	this.e5s.n1r.a1s.touchEnd(e);
}

u0r(event)
{
	this.e5s.e4p.u0r();
}

n7q(event)
{
	this.e5s.e4p.n7q();
}

m6w(event)
{
	this.e5s.e4p.a4e();
	this.e5s.j1y.p5u.m6w();
}

r5f(event)
{
	this.e5s.e4p.a4e();
	this.e5s.j1y.p5u.r5f();
}

a6b(event)
{
	this.e5s.e4p.a4e();
	this.e5s.j1y.p5u.n3h();
}

m6v(event)
{
	this.e5s.e4p.a4e();
	this.e5s.j1y.p5u.h8j();
}

d5z(event)
{
	this.e5s.n7o();
}

x9b()
{
 	if (this.a1f.v8u.length)
  {
    this.f2f(0, 0);
  }
}

a6k(event)
{
 	if (this.l4x > 0)
  {
    this.f2f(this.l4x - 1, 0);
  }
}

h5t(event)
{
  if (this.l4x < this.a1f.v8u.length - 1)
  {
    this.f2f(this.l4x + 1, 0);
  }
}

x5f()
{
	if (this.a1f.v8u.length)
  {
    this.l4x = this.a1f.v8u.length - 1;
    this.f2f(this.a1f.v8u.length - 1, 0);
	}
}

f2f(l4x, k0e)
{
  if (l4x >= 0 && l4x <= this.a1f.v8u.length - 1)
  {
    this.l4x = l4x;
  	this.e5s.f2f(null, 1, k0e, this.a1f.v8u[this.l4x]);
  }
  this.c9k();
}

i1o(event)
{
	this.e5s.i1o();
}

n9e()
{
	this.e5s.n9e();
}

u3x()
{
	if (this.z0d.clientWidth <= y1x)
	{
		if (this.j5g)
		{
			this.f3j();
		}
		else
		{
			this.a5w();
			this.j5g = true;
			this.f3j();
		}
	}
	else
	{
		if (!this.j5g)
		{
			this.z4d();
		}
		else
		{
			this.i3d();
			this.j5g = false;
			this.z4d();
		}
	}
}

j5o(n5x, index)
{
	this.f2f(index, 0);
  this.y7s();
}

d0m(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.j5q.length - 1)
  {
    if (this.j5q[i] == '[')
    {
        break;
    }
    i++;
  }
  let j5q = this.j5q.substring(i);
  a.href = window.URL.createObjectURL(new Blob([j5q], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

v4p(event)
{
  if (chess)
  {
    if (this.e5s.z9o())
    {
      this.o6n();
    }
    else
    {
      this.w5j();
    }
  }
}

o6n()
{
  this.e5s.o6n();
}

w5j()
{
  let u6z = new b0i();
  u6z.id.x6l = "Stockfish";
  const b2k = u6z.b2k;
  b2k.addInteger("MultiPV", c6r);
  b2k.addInteger("Threads", k9f);
  b2k.addInteger("Hash",    f0t(j4f));
  this.e5s.w5j(u6z);
}

j4h()
{
  this.e5s.n1r.s9o(j3m);
  this.e5s.n1r.l5c();
  this.e5s.j1y.p5u.s9o(j3m);
  this.e5s.j1y.p5u.e7t();
  this.e5s.b7s.p5u.s9o(j3m);
  this.e5s.b7s.p5u.e7t();
  let d9i = document.getElementById("nota-container"+this.index);
  d9i.style.fontSize = t5a.fontSize + 'px';
  let m5y = document.getElementById("enota-container"+this.index);
  m5y.style.fontSize = t5a.fontSize + 'px';
}

j6q()
{
  if (this.e5s.z9o())
  {
    this.o6n();
    this.w5j();
  }
}

async onSettingsClick()
{
  const dialog = new h8g();
  const { z2l } = await dialog.show();

  if (z2l === dialog.l0p)
  {
    this.j4h();
  }
}

async onEngineSettingsClick()
{
  const dialog = new w5x();
  const { z2l } = await dialog.show();

  if (z2l === dialog.l0p)
  {
    this.j6q();
  }
}

}

class h8g
{

constructor()
{
  this.l0p = 1;
  this.x7r = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.w2m();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.x9l = this.dialog.querySelector(".piece-select");
  this.g6x = this.dialog.querySelector(".coordinates-checkbox");
  this.r7s = this.dialog.querySelector(".font-select");
  this.c7u = this.dialog.querySelector(".ok-button");
  this.j3l = this.dialog.querySelector(".cancel-button");

  this.c7u.onclick = this.j8g.bind(this);
 	this.j3l.onclick = this.w5k.bind(this);
}

w2m()
{
  const n9r = h0m();
  const s = `
    <dialog id="settingsDialog" class="settingsDialog">
      <h2>Settings</h2>

      <div class="settings-row">
        <span class="label-text">Pieces:</span>
        <select class="pieceSelect piece-select">
          ${n9r.map((e8u, i) => '<option value="' + i + '">' + e8u + '</option>').join('')}
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

j8g(event)
{
  j3m.s6m = this.x9l.value;
  localStorage.setItem(f8z, j3m.s6m);
  m6f(j3m.s6m);
  j3m.l9g = this.g6x.checked;
  localStorage.setItem(t5q, j3m.l9g.toString());
  t5a.fontSize = this.r7s.value;
  localStorage.setItem(v6h, t5a.fontSize);
  this.dialog.close('ok');
}

w5k(event)
{
  this.dialog.close('cancel');
}

async show()
{
  q8y = true;

  this.x9l.value = j3m.s6m;
  this.g6x.checked = j3m.l9g;
  this.r7s.value = t5a.fontSize;

  const z2l = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.l0p : this.x7r);
    };
    this.dialog.showModal();
  });

  q8y = false;
  return { z2l };
}

}

function b1o(i1d)
{
  const value = parseInt(i1d);
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

function f0t(i1d)
{
  const value = parseInt(i1d);
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

class w5x
{

constructor()
{
  this.l0p = 1;
  this.x7r = 0;

  this.dialog = document.getElementById("engineSettingsDialog");
  if (!this.dialog)
  {
    this.w2m();
  }
  this.dialog = document.getElementById("engineSettingsDialog");

  this.u6d = this.dialog.querySelector(".searchTime-slider");

  this.i9n = this.dialog.querySelector(".searchTime-value");
  this.u0z = this.dialog.querySelector(".multiPV-slider");
  this.u3k = this.dialog.querySelector(".multiPV-value");
  this.x9z = this.dialog.querySelector(".threads-slider");
  this.u1l = this.dialog.querySelector(".threads-value");
  this.e3z = this.dialog.querySelector(".memory-slider");
  this.a7x = this.dialog.querySelector(".memory-value");
  this.c7u = this.dialog.querySelector(".ok-button");
  this.j3l = this.dialog.querySelector(".cancel-button");

  this.c7u.onclick = this.j8g.bind(this);
 	this.j3l.onclick = this.w5k.bind(this);

  this.u6d.addEventListener('input', this.w5i.bind(this));
  this.u0z.addEventListener('input', this.i6i.bind(this));

  this.x9z.addEventListener('input', this.x3z.bind(this));

  this.e3z.addEventListener('input', this.i2l.bind(this));

}

w2m() {
  const s = `
    <dialog id="engineSettingsDialog" class="settingsDialog">
      <h2>k3k Settings</h2>

      <div class="settings-row">
        <span class="label-text">Search t5t</span>
        <input type="range" class="simple-slider searchTime-slider" min="1" max="10" h3v="1" value="1">
        <span class="value-display-simple searchTime-value">1s</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Multiple j8a</span>
        <input type="range" class="simple-slider multiPV-slider" min="1" max="5" h3v="1" value="1">
        <span class="value-display-simple multiPV-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Threads</span>
        <input type="range" class="simple-slider threads-slider" min="1" max="32" h3v="1" value="1">
        <span class="value-display-simple threads-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Memory</span>
        <input type="range" class="simple-slider memory-slider" min="1" max="6" h3v="1" value="1">
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

j8g(event)

{
  b7m = parseInt(this.u6d.value);
  c6r = parseInt(this.u0z.value);
  k9f = parseInt(this.x9z.value);
  j4f = parseInt(this.e3z.value);
  localStorage.setItem(o7d, b7m);
  localStorage.setItem(a8g, c6r);
  localStorage.setItem(u6m, k9f);
  localStorage.setItem(e1t, j4f);
  this.dialog.close('ok');
}

w5k(event)
{
  this.dialog.close('cancel');
}

w5i()
{
  const value = parseInt(this.u6d.value);
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
  this.i9n.textContent = displayValue;
}

i6i()
{
  const value = this.u0z.value;
  this.u3k.textContent = `${value}`;
}


x3z()
{
  const value = this.x9z.value;
  this.u1l.textContent = `${value}`;
}


i2l()

{
  const value = parseInt(this.e3z.value);
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

  this.a7x.textContent = displayValue;
}

async show()
{
  q8y = true;

  this.u6d.value = b7m;
  this.u0z.value = c6r;
  this.x9z.value = k9f;
  this.e3z.value = j4f;

  this.w5i();
  this.i6i();
  this.x3z();
  this.i2l();

  const z2l = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.l0p : this.x7r);
    };
    this.dialog.showModal();
  });

  q8y = false;
  return { z2l };
}

}

const r2j = 38;
const y1w = 40;
const z0o = 37;
const p1f = 37;
const t7c = 52;
const k9n = 39;
const o7w = 39;
const h8p = 54;
const i5q = 36;
const t4p = 36;
const l4i = 55;
const o0c = 35;
const z7r = 35;
const i4f = 49;
const b3a = 187;
const e4i = 107;
const o6y = 61;
const c2a = 42;
const n5y = 170;
const b0r = 8;
const z8i = 13;
let d2n = false;
let q8y = false;

const y1x = 767;
let q7t = [];
let x8i = -1;
let x6h = new v2p();

let j3m = new i2p();
let t5a = new l3f();
let b7m = 1;
let c6r = 1;
let k9f = 1;
let j4f = 1;

window.onload = function()
{
  f2r();
  t5d();
  s7v();
};

document.onkeydown = c2s;

function c2s(e)
{
  if (e.i0q === "Escape")
  {
    return;
  }

  if (q8y)
  {
    
    e.preventDefault();
    return;
  }

	let j2o = e || window.event;
	let i0q = j2o.keyCode;

	if (d2n) return;
	d2n = true;

	if (x8i == -1) return;

	if (e.ctrlKey)
	{
		if (i0q == 66) 
		{
				q7t[x8i].i1o();
				e.preventDefault();
				
				
				
		}
		d2n = false;
		return;
	}
	if (i0q)
	{
		
		y0s(i0q);
		e.preventDefault(); 
		
	}
	d2n = false;
}

function g7n(u5a)
{
	q7t[u5a].e5s.e4p.z9l();
}

function y0s(i0q)
{
	if (x8i == -1) return;

	if (i0q == r2j)
	{
		q7t[x8i].e5s.j1y.p5u.r1h();
	}
	else if (i0q == y1w)
	{
		q7t[x8i].e5s.j1y.p5u.w2l();
	}
	else if (i0q == z0o || i0q == p1f || i0q == t7c ||
	i0q == k9n || i0q == o7w || i0q == h8p ||
	i0q == i5q || i0q == t4p ||
	i0q == o0c || i0q == z7r)
	{
		q7t[x8i].e5s.j1y.p5u.o7l(i0q);
	}
	else if (i0q == b3a || i0q == e4i || i0q == o6y)
	{
		q7t[x8i].doFlipBoard();
	}
}

function a5r(z7z, n5o)
{
	let b4w = z7z.length;
	let p3d = 0;

	function check(n)
	{
		if (n == b4w)
		{
			n5o();
		}
	}

	for (let i = 0; i < z7z.length; ++i)
	{
    let u3n = z7z[i];
		let img = document.createElement("img");
		img.id = z7z[i].replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
		x6h.add(img);
		img.addEventListener("load", function()
		{
			p3d++;
			check(p3d);
		});
		img.src = u3n;
	}
}

function f2r()
{
 	a5r(v6w(), i9k);
  
  
}

function u3x()
{
	for (const d9p of q7t)
	{
		d9p.u3x();
	}
}

function i9k()
{
	let t6c = document.getElementsByClassName("tdreplay");
	for (const z0d of t6c)
	{
		let d9p = new t1a();
		d9p.b1v(q7t.length, z0d, z0d.innerHTML);
		d9p.e9e();
		q7t.push(d9p);
	}
	if (q7t.length)
	{
		x8i = 0;
	}
	window.addEventListener("resize", u3x);
	u3x();
}

function u9s(x6l, d2h)
{
	let button = document.getElementById(x6l);
	if (d2h)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function i9l(button, d2h)
{
	if (d2h)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const t5q = 'Coordinates';
const f8z = 'Pieces';
const v6h = 'MovesFontSize';
const o7d = 'SearchTime';
const a8g = 'MultiPV';
const u6m = 'Threads';
const e1t = 'Memory';

function s7v()
{
  const coordinatesValue = localStorage.getItem(t5q);
  if (coordinatesValue === null)
  {
    j3m.l9g = true;
  }
  else
  {
    j3m.l9g = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(f8z);
  if (piecesValue === null)
  {
    j3m.s6m = 0;
  }
  else
  {
    j3m.s6m = piecesValue;
  }
  m6f(j3m.s6m);

  const movesFontSizeValue = localStorage.getItem(v6h);
  if (movesFontSizeValue === null)
  {
    t5a.fontSize = 15;
  }
  else
  {
    t5a.fontSize = movesFontSizeValue;
  }

  
  const searchTime = localStorage.getItem(o7d);
  if (searchTime === null)
  {
    b7m = 10; 
  }
  else
  {
    b7m = searchTime;
  }
  const f6s = localStorage.getItem(a8g);
  if (f6s === null)
  {
    c6r = 1;
  }
  else
  {
    c6r = f6s;
  }
  const threads = localStorage.getItem(u6m);
  if (threads === null)
  {
    const logicalThreads = navigator.hardwareConcurrency || 4;
    const defaultThreads = Math.max(1, logicalThreads - 1);
    k9f = defaultThreads;
  }
  else
  {
    k9f = threads;
  }
  const memory = localStorage.getItem(e1t);
  if (memory === null)
  {
    j4f = 4; 
  }
  else
  {
    j4f = memory;
  }
}
const p7s =
[
	[ b3x.l2e, 			  	""      ],
	[ b3x.e6f,  		 		"game"  ],
	[ b3x.g0o,    		 	"match" ],
	[ b3x.m2w,  	"tourn" ],
	[ b3x.j9q,   			"swiss" ],
	[ b3x.f0m,    	"k.o."  ],
	[ b3x.d0e,	"simul" ],
	[ b3x.w5t,	"schev" ]
];

const l3v =
[
	[ h8z.k6e, ""        ],
	[ h8z.o0f,  "(rapid)" ],
	[ h8z.a8y,  "(blitz)" ],
	[ h8z.k1z,   "(corr)"  ]
];

const b1m =
[
	[ s1v.l2e,     		 ""     ],
	[ s1v.z3m,       		 "$145" ],
	[ s1v.f4r, 		 "$142" ],
	[ s1v.p6w, 		 "$143" ],
	[ s1v.t8j, "$144" ],
	[ s1v.o1x,  "$140" ],
	[ s1v.q7l, "$141" ]
];

const j7z =
[
	[ m6y.l2e,     		""   ],
	[ m6y.b2s,       	"$1" ],
	[ m6y.u3m, 			  	"$2" ],
	[ m6y.w9r,	"$5" ],
	[ m6y.p1b, 		  "$6" ],
	[ m6y.a8h,  	"$3" ],
	[ m6y.g6g, 		  "$4" ],
	[ m6y.m0k, 		"$22" ],
	[ m6y.w6z, 		"$8" ]
];

const g6f =
[
	[ g7e.l2e,     						""     ],
	[ g7e.t1s,      "$18"  ],
	[ g7e.x8k, 					"$16"  ],
	[ g7e.r3r,	"$14"  ],
	[ g7e.i7r, 						"$11"  ],
	[ g7e.o9s,  						"$13"  ],
	[ g7e.j2j,  "$15"  ],
	[ g7e.f8i, 					"$17"  ],
	[ g7e.y2l, 			"$19"  ],
	[ g7e.x8n,					"$44"  ],
	[ g7e.i4h, 					"$132" ],
	[ g7e.s3n,  					"$36"  ],
	[ g7e.f0d, 							"$40"  ],
	[ g7e.f4e, 			  "$138" ],
	[ g7e.f3d,	"$32"  ],
	[ g7e.o8o, 							"$146" ]
];

const d0c =
[
	[ m0e.l2e,     		""     ],
	[ m0e.o9d,     "$51"  ],
	[ m0e.z6c, 			"$52"  ],
	[ m0e.e8i,	    		"$53"  ]
];

const d0r =
[
	[ v1k.h4b, 			 	""       ],
	[ v1k.z6c,   		"middle" ],
	[ v1k.d3g,   	   	 	"low"    ]
];


function y0n(r6a)
{
	return l3v[r6a][1];
}

function f3e(o8h)
{
	for (const r6a of l3v)
	{
		if (r6a[1] == o8h)
		{
			return r6a[0];
		}
	}
	return h8z.k6e;
}

function m5n(type)
{
	return p7s[type][1];
}

function u5e(o8h)
{
	for (const b8j of p7s)
	{
		if (b8j[1] == o8h)
		{
			return b8j[0];
		}
	}
	return b3x.l2e;
}

function v0j(k5l)
{
	return b1m[k5l][1];
}

function h8y(o8h)
{
	for (const k5l of b1m)
	{
		if (k5l[1] == o8h)
		{
			return k5l[0];
		}
	}
	return s1v.l2e;
}

function c3g(style)
{
	return j7z[style][1];
}

function s6o(o8h)
{
	for (const style of j7z)
	{
		if (style[1] == o8h)
		{
			return style[0];
		}
	}
	return m6y.l2e;
}

function o0r(value)
{
	return g6f[value][1];
}

function x5s(o8h)
{
	for (const value of g6f)
	{
		if (value[1] == o8h)
		{
			return value[0];
		}
	}
	return g7e.l2e;
}

function n5a(h6f)
{
	return d0c[h6f][1];
}

function x9m(o8h)
{
	for (const j2v of d0c)
	{
		if (j2v[1] == o8h)
		{
			return j2v[0];
		}
	}
	return m0e.l2e;
}

function e5e(o8h)
{
	return o8h.length == 0 ||
		o8h == "?" ||
		o8h == "-" ||
		o8h == "*" ||
		o8h == "????.??.??";
}

function e2k(o8h)
{
	if (e5e(o8h))
	{
		return "";
	}
	else
	{
		return o8h.trim();
	}
}

function t7n(o8h, y1k)
{
	if (e5e(o8h))
	{
		return y1k;
	}
	else
	{
		return q6d(o8h, y1k);
	}
}

function y9l(value)
{
	return value ? value.toString() : "";
}

function n0m(c0j)
{
	return d0r[c0j][1];
}

function a5l(o8h)
{
	for (const c0j of d0r)
	{
		if (c0j[1] == o8h)
		{
			return c0j[0];
		}
	}
	return v1k.h4b;
}

function v3m(e6d)
{
	if (!e6d)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(e6d / 60);
		let q1x = e6d % 60;
		return div.toString() + "." + q1x.toString().padStart(2, '0');
	}
}

function g9l(z2l)
{
	switch (z2l)
	{
		case x6s.y2d:
			return "1-0";
		case x6s.p9c:
			return "1/2-1/2";
		case x6s.r2x:
			return "0-1";
		default:
			return "*";
	}
}

function d8m(u6p)
{
	if (u6p > 0 && u6p <= 9999)
	{
		return u6p.toString().padStart(4, '0');
	}
	else
	{
		return "-";
	}
}

function t4y(g0s)
{
	if (g0s.b6d())
	{
		return "????.??.??";
	}
	let o8h = '';
	if (g0s.y5d)
	{
		o8h = g0s.y5d.toString().padStart(4, '0');
	}
	else
	{
		o8h = "????";
	}
	o8h += ".";
	if (g0s.c5z)
	{
		let b5i = g0s.c5z.toString().padStart(2, '0');
		o8h += b5i;
	}
	else
	{
		o8h += "??";
	}
	o8h += ".";
	if (g0s.o3f)
	{
		let y1g = g0s.o3f.toString().padStart(2, '0');;
		o8h += y1g;
	}
	else
	{
		o8h += "??";
	}
	return o8h;
}

function m3c(l4b)
{
	if (e5e(l4b))
	{
		return new s5w();
	}
	else
	{
		let g0s = new s5w();
		g0s.x0s("yyyy.mm.dd", l4b);
		return g0s;
	}
}

function q1b(l4b, m2w)
{
	m2w.p2v = (l4b.indexOf("team") != -1);
	m2w.type = b3x.l2e;
	for (const b8j of p7s)
	{
		if (l4b.indexOf(b8j[1]) != -1)
		{
			m2w.type = b8j[0];
			break;
		}
	}
	m2w.r6a = h8z.k6e;
	for (const r6a of l3v)
	{
		if (l4b.indexOf(r6a[1]) != -1)
		{
			m2w.r6a = r6a[0];
			break;
		}
	}
}

function n0s(l4b, l5w)
{
	l5w.s1m = 0;
	l5w.m0d = 0;
	let v2a = l4b.indexOf(".");
	if (v2a != -1)
	{
		let y0i = l4b.substr(0, v2a);
		l5w.s1m = q6d(y0i, 0);
		let i5a = l4b.substr(v2a + 1, l4b.length);
		v2a = i5a.indexOf(".");
		if (v2a != -1)
		{
			y0i = i5a.substr(0, v2a);
			l5w.m0d = q6d(y0i, 0);
		}
		else
		{
			l5w.m0d = q6d(i5a, 0);
		}
	}
	else
	{
		l5w.s1m = q6d(l4b, 0);
	}
}

function h7f(l5w)
{
	let l4b = '';
	if (l5w.m0d)
	{
		l4b = l5w.s1m.toString() + "." + l5w.m0d.toString();
	}
	else if (l5w.s1m)
	{
		l4b = l5w.s1m.toString();
	}
	return l4b;
}

function t1m(l4b)
{
	if (l4b == "2-0" || l4b == "20" || l4b == "1-0" || l4b == "10")
	{
		return x6s.y2d;
	}
	else if (l4b == "1-1" || l4b == "11" || l4b == "1/2-1/2" ||
		l4b == "1/21/2" || l4b == "0.5-0.5")
	{
		return x6s.p9c;
	}
	else if (l4b == "0-2" || l4b == "02" || l4b == "0-1" || l4b == "01")
	{
		return x6s.r2x;
	}
	else
	{
		return x6s.l2e;
	}
}

function k4c(l4b)
{
	return q6d(l4b, 0);
}

function r5r(l4b)
{
	return c1d(l4b);
}

function k6y(l4b)
{
	return i8s(l4b);
}

function l5d(value)
{
	return value ? "1" : "";
}

function i5y(l4b)
{
	return l4b == "1";
}

function w2q(o9c)
{
	let l5w = new s2g();

	
	l5w.a9t.b3i.l6q(e2k(o9c.p4k));
	if (!e5e(o9c.d3t))
	{
		l5w.a9t.a6z.x6l = e2k(o9c.d3t);
		l5w.a9t.a6z.h0y = t7n(o9c.q2i, 0);
		if (!e5e(o9c.o4t))
		{
			let g0s = m3c(o9c.o4t);
			l5w.a9t.a6z.y5d = g0s.y5d;
		}
		l5w.a9t.a6z.s4n = i5y(o9c.o5j);
		l5w.a9t.a6z.m5s = d7d(e2k(o9c.h9r));
	}
	l5w.a9t.u6p = k4c(e2k(o9c.i6u));
	l5w.a9t.t5t = k6y(e2k(o9c.b0a));
	l5w.a9t.j8j = e2k(o9c.z8k);
	l5w.a9t.m5s = w4z(e2k(o9c.b6v));

	
	l5w.k3t.b3i.l6q(e2k(o9c.u4v));
	if (!e5e(o9c.e4c))
	{
		l5w.k3t.a6z.x6l = e2k(o9c.e4c);
		l5w.k3t.a6z.h0y = t7n(o9c.c6v, 0);
		if (!e5e(o9c.t0k))
		{
			let g0s = m3c(o9c.t0k);
			l5w.k3t.a6z.y5d = g0s.y5d;
		}
		l5w.k3t.a6z.s4n = i5y(o9c.q9b);
		l5w.k3t.a6z.m5s = d7d(e2k(o9c.j9k));
	}
	l5w.k3t.u6p = k4c(e2k(o9c.k5x));
	l5w.k3t.t5t = k6y(e2k(o9c.i8y));
	l5w.k3t.j8j = e2k(o9c.r0f);
	l5w.k3t.m5s = w4z(e2k(o9c.c3u));

	
	l5w.m2w.j8j = e2k(o9c.q4g);
	l5w.m2w.n7i = e2k(o9c.d1l);
	l5w.m2w.f4f = m3c(o9c.g5s);
	l5w.m2w.o9b = m3c(o9c.l7g);

	q1b(e2k(o9c.b8j), l5w.m2w);
	
	
	
	let u9x = f3e(o9c.u9x);
	if (u9x != h8z.k6e)
	{
		l5w.m2w.r6a = u9x;
	}
	l5w.m2w.m5s = d7d(e2k(o9c.w6j));
	l5w.m2w.x4a = t7n(o9c.k2a, 0);
	let b8j = u5e(o9c.b8j);
	if (b8j != b3x.l2e)
	{
		l5w.m2w.type= b8j;
	}
	l5w.m2w.x7e = t7n(o9c.d6z, 0);
	l5w.m2w.p2v = i5y(o9c.o7o);
	l5w.m2w.y8n = i5y(o9c.o9y);
	l5w.m2w.j5x = i5y(o9c.t6n);
	l5w.m2w.b6u = i5y(o9c.u4n);

	
	l5w.u3w.x6l = e2k(o9c.u3w);

	
	l5w.j7s.j8j = e2k(o9c.t1o);
	l5w.j7s.n1n = e2k(o9c.i8z);
	l5w.j7s.w0h = m3c(o9c.f9i);
	l5w.j7s.l8c = t7n(o9c.y8t, 0);
	l5w.j7s.o8t = m3c(o9c.r2h);
	l5w.j7s.c0j = a5l(o9c.w4x);

	
	l5w.j8j.j8j = e2k(o9c.j8j);

	
	l5w.g0s = m3c(o9c.g0s);
	l5w.z2l = t1m(e2k(o9c.z2l));
	l5w.t5i = r5r(e2k(o9c.t5i));
	n0s(e2k(o9c.s1m), l5w);

	
	let c4h = t7n(o9c.c4h, 0);
	l5w.c4h.s9p(c4h);

  
  l5w.id.x8m = o9c.x8m;

	return l5w;
}

function p6e(l5w)
{
	let o9c = new q7e();

	
	o9c.p4k = l5w.a9t.b3i.x6l();
	if (l5w.a9t.a6z.x6l.length)
	{
		o9c.d3t = l5w.a9t.a6z.x6l;
		if (l5w.a9t.a6z.h0y)
		{
			o9c.q2i = l5w.a9t.a6z.h0y;
		}
		if (l5w.a9t.a6z.y5d)
		{
			let t9k = new s5w();
			t9k.y5d = l5w.a9t.a6z.y5d;
			o9c.o4t = t4y(t9k);
		}
		if (l5w.a9t.a6z.s4n)
		{
			o9c.o5j = l5d(l5w.a9t.a6z.s4n);
		}
		if (l5w.a9t.a6z.m5s != r4b.l2e)
		{
			o9c.h9r = t9z(l5w.a9t.a6z.m5s);
		}
	}
	o9c.i6u = d8m(l5w.a9t.u6p);
	o9c.b0a = v3m(l5w.a9t.t5t);
	o9c.z8k = l5w.a9t.j8j;

	
	o9c.u4v = l5w.k3t.b3i.x6l();
	if (l5w.k3t.a6z.x6l.length)
	{
		o9c.e4c = l5w.k3t.a6z.x6l;
		if (l5w.k3t.a6z.h0y)
		{
			o9c.c6v = l5w.k3t.a6z.h0y;
		}
		if (l5w.k3t.a6z.y5d)
		{
			let r0j = new s5w();
			r0j.y5d = l5w.k3t.a6z.y5d;
			o9c.t0k = t4y(r0j);
		}
		if (l5w.k3t.a6z.s4n)
		{
			o9c.q9b = l5d(l5w.k3t.a6z.s4n);
		}
		if (l5w.k3t.a6z.m5s != r4b.l2e)
		{
			o9c.j9k = t9z(l5w.k3t.a6z.m5s);
		}
	}
	o9c.k5x = d8m(l5w.k3t.u6p);
	o9c.i8y = v3m(l5w.k3t.t5t);
	o9c.r0f = l5w.k3t.j8j;

	
	o9c.q4g = l5w.m2w.j8j;
	o9c.d1l = l5w.m2w.n7i;
	o9c.g5s = t4y(l5w.m2w.f4f);
	o9c.l7g = t4y(l5w.m2w.o9b);
	o9c.u9x = y0n(l5w.m2w.r6a);
	o9c.k2a = y9l(l5w.m2w.x4a);
	o9c.w6j = t9z(l5w.m2w.m5s);
	o9c.b8j = m5n(l5w.m2w.type);
	o9c.d6z = y9l(l5w.m2w.x7e);
	o9c.o7o = l5d(l5w.m2w.p2v);
	o9c.o9y = l5d(l5w.m2w.y8n);
	o9c.t6n = l5d(l5w.m2w.j5x);
	o9c.u4n = l5d(l5w.m2w.b6u);

	
	o9c.u3w = l5w.u3w.x6l;

	
	o9c.t1o = l5w.j7s.j8j;
	o9c.i8z = l5w.j7s.n1n;
	o9c.f9i = t4y(l5w.j7s.w0h);
	o9c.y8t = y9l(l5w.j7s.l8c);
	o9c.r2h = t4y(l5w.j7s.o8t);
	o9c.w4x = n0m(l5w.j7s.c0j);

	
	o9c.j8j = l5w.j8j.j8j;

	
	o9c.g0s = t4y(l5w.g0s);
	o9c.z2l = g9l(l5w.z2l);
	o9c.t5i = t6b(l5w.t5i);
	o9c.s1m = h7f(l5w);

	
	o9c.c4h = y9l(l5w.c4h.q4f());

	return o9c;
}

const r7e  					= "White";
const j0c					= "WhiteTeam";
const r3i 				= "WhiteTeamNumber";
const y0f 					= "WhiteTeamYear";
const l1b 				= "WhiteTeamSeason";
const g7a 			= "WhiteTeamCountry";
const n5m 						= "WhiteRating";
const k6a 							= "WhiteTime";
const i1k 							= "WhiteElo";
const t1i  						= "WhiteTitle";
const o0d						= "WhiteCountry";

const j9m						= "Black";
const b6o					= "BlackTeam";
const k7a 				= "BlackTeamNumber";
const i2h 					= "BlackTeamYear";
const g9o 				= "BlackTeamSeason";
const m9t 			= "BlackTeamCountry";
const l8j 						= "BlackRating";
const o4v 							= "BlackTime";
const g2b 							= "BlackElo";
const r6w  						= "BlackTitle";
const l0i						= "BlackCountry";

const i4c 				= "Event";
const m3p				= "Site";
const b8y 			 	= "EventDate";
const i5s 		 	= "EventEndDate";
const h3o 			 	= "EventSpeed";
const y6q 	 	= "EventCategory";
const j1j 		 	= "EventCountry";
const d5g 			 	= "EventType";
const v2i 		 	= "EventRounds";
const v5g 			 	= "EventTeams";
const u1m		 	= "EventComplete";
const y6u 	= "EventThreePoints";
const y4u	= "EventBoardPoints";

const n4v 							= "Annotator";

const i6y 				 		= "SourceTitle";
const i8u 				 		= "Publication";
const t2o		 		= "SourcePublisher";
const v3q		 		= "PublicationDate";
const q5d 				 		= "SourceDate";
const s6j 		= "SourceVersionNumber";
const j6v 	 		= "SourceVersionDate";
const f7t 			 		= "SourceQuality";

const o2e 					 		    = "Title";

const b4t 							 		= "Date";
const t1k 								= "Result";
const n2k 										= "ECO";
const s1u 									= "Round";

const q8r			 							= "Tags";

const e0p 									= "Setup";
const h3r 										= "FEN";
const r1u 							= "PlyCount";

const d9v      							= "GUID";

const i8p = "(";
const f1r   = ")";
const r9x    = "{";

class p3z
{

constructor()
{
  this.k0o = new u6i();
  this.r2g = new s2q();
  this.o7u = new e4e();
  this.w9s = false;
  this.s7k = false;
  this.r0n = false;
  this.y9s = '';
}

}

class s1f
{

constructor(j8a)
{
	this.v0x = new q7e();
	this.x3m = j8a;
	this.k2b = 0;
	this.i4r = '';
	this.u9m = 0;
	this.c4c = 0;
	this.q1t = '';
	this.d8n = 0;
	this.d8r = false;
	this.d7j = '';
	this.n6k = '';
	this.x1k = null;
	this.c4y = new b7h();
	this.s0m = '';
	this.b3n = false;
 	this.o1a = false;
	this.q0d = false;
}

f7a()
{
  this.d8n = 0;
	let e6f = new j4b();
	this.x1k = e6f.h0a;
	try
	{
		this.j0l();
	}
	catch (err)
	{
	}
	e6f.g3r = w2q(this.v0x);
  e6f.d9u = this.d8n;
	return e6f;
}

j0l()
{
	this.d8r = false;
	this.l7t();
	if (this.d8r)
	{
		this.z3e = y6o(this.n6k);
		this.x1k.w2k(this.z3e, 1);
	}
 	this.s5x();
}

q7b()
{
	if (this.x3m.length == 0)
	{
		return false;
	}
	if (this.k2b >= this.x3m.length)
	{
		return false;
	}
	else
	{
		this.i4r = this.x3m[this.k2b];
		this.u9m = this.i4r.length;
		this.c4c = 0;
		this.k2b++;
		return true;
	}
}

l7t()
{
	this.q0d = false;
	this.o1a = false;
	while (true)
	{
		if (!this.q7b())
		{
			return;
		}
		this.v2r();
		if (!this.n8b())
		{
			return;
		}
		this.v4g();
	}
}


b8k(q6f)
{
	let l4b = this.q1t.substr(1, this.q1t.length - 1);
	return l4b.toUpperCase() === q6f.toUpperCase();
}

s5x()
{
 	if (this.q1t.length == 0) return;
	this.b3n = false;

	while (this.q1t[0] == '{')
	{
		let w8t = this.y4j();
    let y2o = new p3z();
		this.x2c(w8t, y2o);
    if (!y2o.k0o.b6d())
		{
			this.x1k.h5l(y2o.k0o);
		}
 		if (!y2o.r2g.b6d())
		{
			this.x1k.b6k(y2o.r2g);
		}
		if (!y2o.o7u.b6d())
		{
			this.x1k.g2o(y2o.o7u);
		}
 		w8t = y2o.y9s.trim();
    if (w8t.length)
    {
      
      
      if (w8t.startsWith("[%a") && w8t.length > 7)
      {
        w8t = w8t.substr(7, w8t.length).trim();
      }
      let h9s = this.x1k.h9s();
      if (h9s.length)
      {
        h9s += ' ';
      }
      h9s += w8t;
      this.x1k.n5n(h9s);
		}
		this.v2r();
		if (this.q1t.length == 0)
		{
			return;
		}
	}
	this.u4e(this.x1k.h6c(), this.x1k.z3e());
}

u4e(i8h, g3o)
{
  let v2a = i8h.h1x();
  let i8a = g3o.h1x();

	let x4m = null;
 	let t7m = new l2d();

	do
	{
		if (this.q1t == i8p)
		{
			if (!x4m)
			{
				throw "error";
			}
			if (!this.v2r())
			{
				throw "error";
			}

 			i8a.z2n(v2a.s4l.r6e());
			i8a.j3x(t7m);
			this.x1k.z2n(v2a); 
      this.u4e(v2a, i8a);
			this.x1k.c7z(v2a); 
			i8a.c7z(v2a.s4l.r6e());

			while (this.v2r())
			{
				if (this.q1t != i8p)
				{
					break;
				}
				if (!this.v2r())
				{
					throw "error";
				}
        i8a.z2n(v2a.s4l.r6e());
				i8a.j3x(t7m);
				this.x1k.z2n(v2a); 
				this.u4e(v2a, i8a);
				this.x1k.c7z(v2a);  
				i8a.c7z(v2a.s4l.r6e());
			}
		}

		if (this.q1t == f1r)
		{
			break;
		}

		if (
			this.q1t == "1-0" ||
			this.q1t == "2-0" ||
			this.q1t == "0-1" ||
			this.q1t == "0-2" ||
			this.q1t == "1/2-1/2" ||
			this.q1t == "1-1" ||
			this.q1t == "*" ||
			this.q1t == "**" ||
			this.q1t == "-*" ||
			this.q1t == "1-0*" ||
			this.q1t == "2-0*" ||
			this.q1t == "0-1*" ||
			this.q1t == "0-2*" ||
			this.q1t == "1/2-1/2*" ||
			this.q1t == "1-1*" ||
			this.q1t == "2-00*" ||
			this.q1t == "00-2*")
			break;

		if (this.q1t[0] == '$')
		{
			if (!x4m)
			{
				throw "error";
			}
			let k5l = h8y(this.q1t);
			if (k5l != s1v.l2e)
			{
				x4m.h4p(k5l);
				continue;
			}
			let style = s6o(this.q1t);
			if (style != m6y.l2e)
			{
				x4m.e7e(style);
				continue;
			}
			let value = x5s(this.q1t);
			if (value != g7e.l2e)
			{
				x4m.n9k(value);
				continue;
			}
			let h6f = x9m(this.q1t);
			if (h6f != m0e.l2e)
			{
				x4m.g6h(h6f);
				continue;
			}
			continue;
		}
		if (this.q1t[0] == '{')
		{
			let w8t = this.y4j();
      let y2o = new p3z();
  		this.x2c(w8t, y2o);
      if (!y2o.k0o.b6d())
      {
		  	if (x4m)
			  {
				  x4m.j0o(y2o.k0o);
				}
			}
   		if (!y2o.r2g.b6d())
      {
				if (x4m)
				{
					x4m.r4l(y2o.r2g);
				}
			}
   		if (!y2o.o7u.b6d())
      {
				if (x4m)
				{
					x4m.j1d(y2o.o7u);
				}
			}
      if (y2o.s7k)
      {
				if (x4m)
				{
					x4m.r9p();
				}
			}
      if (y2o.r0n)
      {
				if (x4m)
				{
					x4m.j1u();
				}
			}
   		w8t = y2o.y9s.trim();
      if (!w8t.length)
      {
        continue;
      }
			if (x4m)
			{
        let j7d = x4m.j7d();
        if (j7d.length)
        {
          j7d += ' ';
        }
        j7d += w8t;
				x4m.e6e(j7d);
			}
			else
			{
        if (this.s0m.length)
        {
   				this.s0m += ' ';
        }
				this.s0m += w8t;
				this.b3n = true;
			}
			continue;
		}
		if (!this.z8m())
		{
			continue;
		}
		let p2c = false;
		if (this.q1t[this.q1t.length] == '*')
		{
			this.q1t = this.q1t.substr(0, this.q1t.length - 1);
			p2c = true;
		}
 		let x3a = this.h6e(this.q1t);
    let r6e = j4w(i8a, this.q1t);
 		t7m = i8a.t7m();
		i8a.c7z(r6e);
		let s4l = n8w(r6e);
    s4l.e7e(x3a);
    this.x1k.f9g(v2a, s4l);
		x4m = v2a.s4l;
		if (this.b3n)
		{
			x4m.y5m(this.s0m);
			this.b3n = false;
      this.s0m = '';
		}
		if (p2c)
		{
			break;
		}
	} while (this.v2r());
}

h6e(l4b)
{
	if (l4b.endsWith("??"))
	{
		l4b = l4b.subString(0, l4b.length-2);
		return m6y.g6g;
	}
	else if (l4b.endsWith("!!"))
	{
		l4b = l4b.subString(0, l4b.length-2);
		return m6y.a8h;
	}
	else if (l4b.endsWith("?!"))
	{
		l4b = l4b.subString(0, l4b.length-2);
		return m6y.p1b;
	}
	else if (l4b.endsWith("!?"))
	{
		l4b = l4b.subString(0, l4b.length-2);
		return m6y.w9r;
	}
	else if (l4b.endsWith("?"))
	{
		l4b = l4b.subString(0, l4b.length-1);
		return m6y.u3m;
	}
	else if (l4b.endsWith("!"))
	{
		l4b = l4b.subString(0, l4b.length-1);
		return m6y.b2s;
	}
	else
	{
		return m6y.l2e;
	}
}

z8m()
{
	let t3i = this.q1t.length;
	let v2a = -1;
	for (let i = 0; i < t3i; i++)
	{
		if (this.q1t[i] == '.')
		{
			v2a = i;
		}
	}
	if (v2a != -1)
	{
		this.q1t = this.q1t.substr(v2a + 1 , t3i);
	}
	return this.q1t.length != 0;
}

v2r()
{
	this.q1t = "";
	let w2f = '';
	let index = 0;
	let t3i = 0;
	while (true)
	{
		let y1n = 0;
		if (this.c4c < this.u9m)
		{
			y1n = this.i4r[this.c4c];
		}
		else
		{
			y1n = 0;
		}
		if (!y1n)
		{
			if (t3i)
			{
				break;
			}
			if (!this.q7b())
			{
				return false;
			}
			continue;
		}
		if (y1n == ';')
		{
			if (!this.q7b())
			{
				return false;
			}
			continue;
		}
		if (y1n == '(')
		{
			if (t3i)
			{
				break;
			}
			else
			{
				this.c4c++;
				this.q1t = i8p;
				return true;
			}
		}
		if (y1n == ')')
		{
			if (t3i)
			{
				break;
			}
			else
			{
				this.c4c++;
				this.q1t = f1r;
				return true;
			}
		}
		if (y1n == '{')
		{
			if (t3i)
			{
				break;
			}
			else
			{
				this.c4c++;
				this.q1t = r9x;
				return true;
			}
		}
		if (y1n == ' ' || y1n == '\r' || y1n == '\n')
		{
			if (t3i)
			{
				this.c4c++;
				break;
			}
			else
			{
				this.c4c++;
				continue;
			}
		}
		w2f += y1n;
		index++;
		t3i++;
		this.c4c++;
	}
	if (index)
	{
		this.q1t += w2f;
	}
	return this.q1t.length != 0;
}

y4j()
{
	let l4b = '';
	let w2f = '';
	let index = 0;
	let s4b = 0;
	while (true)
	{
		let y1n = 0;
		if (this.c4c < this.u9m)
		{
			y1n = this.i4r[this.c4c];
		}
		else
		{
			y1n = 0;
		}
		if (!y1n)
		{
			if (!this.q7b())
			{
				break;
			}
			if (index > 0)
			{
				w2f += ' '; 
				index++;
			}
			continue;
		}
		if (y1n == '{')
		{
			s4b++;
		}
		if (y1n == '}')
		{
			if (s4b)
			{
				s4b--;
			}
			else
			{
				this.c4c++;
				break;
			}
		}
		w2f += y1n;
		index++;
		this.c4c++;
	}
	if (index)
	{
		l4b += w2f;
	}
	return l4b.trim();
}

p3o()
{
	this.d7j = "";

	let q2h = 0;
	let t3i = this.i4r.length;
	for (let i = t3i - 1; i >= 0; i--)
	{
		if (this.i4r[i] == ']')
		{
			q2h = i;
			break;
		}
	}
	let index = 0;
	let r1k = false;
	let w2f = '';
	while (true)
	{
		let y1n = 0;
		if (this.c4c < this.u9m)
		{
			y1n = this.i4r[this.c4c];
		}
		else
		{
			y1n = 0;
		}
		if (!y1n)
		{
			if (!this.q7b())
			{
				break;
			}
			continue;
		}
		if (y1n == '\"')
		{
			r1k = true;
			this.c4c++;
			continue;
		}
		if (y1n == ']')
		{
			if (this.c4c == q2h)
			{
				this.c4c++;
				break;
			}
		}
		if (r1k)
		{
			w2f += y1n;
			index++;
		}
		this.c4c++;
	}
	if (index)
	{
		this.d7j += w2f;
	}
}

n8b()
{
	if (this.q1t.length == 0)
	{
		return false;
	}
	if (this.q1t[0] != '[')
	{
		return false;
	}
	
	let index = this.c4c;
	let o3d = false;
	while (index < this.u9m)
	{
		let y1n = this.i4r[index++];
		if (y1n == '\"' && this.i4r[index] == ']')
		{
			index++;
			o3d = true;
			continue;
		}
		if (y1n == '\r' || y1n == '\n')
		{
			break;
		}
		if (o3d)
		{
			o3d = false;
			break;
		}
	}
	return o3d;
}

v4g()
{
	
	if (this.b8k(r7e))
	{
		this.p3o();
		this.v0x.p4k = this.d7j;
		return;
	}
	if (this.b8k(j0c))
	{
		this.p3o();
		this.v0x.d3t = this.d7j;
		return;
	}
	if (this.b8k(r3i))
	{
		this.p3o();
		this.v0x.q2i = this.d7j;
		return;
	}
	if (this.b8k(y0f))
	{
		this.p3o();
		this.v0x.o4t = this.d7j;
		return;
	}
	if (this.b8k(l1b))
	{
		this.p3o();
		this.v0x.o5j = this.d7j;
		return;
	}
	if (this.b8k(g7a))
	{
		this.p3o();
		this.v0x.h9r = this.d7j;
		return;
	}
	if (this.b8k(i1k) || this.b8k(n5m))
	{
		this.p3o();
		this.v0x.i6u = this.d7j;
		return;
	}
	if (this.b8k(k6a))
	{
		this.p3o();
		this.v0x.b0a = this.d7j;
		return;
	}
	if (this.b8k(t1i))
	{
		this.p3o();
		this.v0x.z8k = this.d7j;
		return;
	}
	if (this.b8k(o0d))
	{
		this.p3o();
		this.v0x.b6v = this.d7j;
		return;
	}

	
	if (this.b8k(j9m))
	{
		this.p3o();
		this.v0x.u4v = this.d7j;
		return;
	}
	if (this.b8k(b6o))
	{
		this.p3o();
		this.v0x.e4c = this.d7j;
		return;
	}
	if (this.b8k(k7a))
	{
		this.p3o();
		this.v0x.c6v = this.d7j;
		return;
	}
	if (this.b8k(i2h))
	{
		this.p3o();
		this.v0x.t0k = this.d7j;
		return;
	}
	if (this.b8k(g9o))
	{
		this.p3o();
		this.v0x.q9b = this.d7j;
		return;
	}
	if (this.b8k(m9t))
	{
		this.p3o();
		this.v0x.j9k = this.d7j;
		return;
	}
	if (this.b8k(g2b) || this.b8k(l8j))
	{
		this.p3o();
		this.v0x.k5x = this.d7j;
		return;
	}
	if (this.b8k(o4v))
	{
		this.p3o();
		this.v0x.i8y = this.d7j;
		return;
	}
	if (this.b8k(r6w))
	{
		this.p3o();
		this.v0x.r0f = this.d7j;
		return;
	}
	if (this.b8k(l0i))
	{
		this.p3o();
		this.v0x.c3u = this.d7j;
		return;
	}

	
	if (this.b8k(i4c))
	{
		this.p3o();
		this.v0x.q4g = this.d7j;
		return;
	}
	if (this.b8k(m3p))
	{
		this.p3o();
		this.v0x.d1l = this.d7j;
		return;
	}
	if (this.b8k(b8y))
	{
		this.p3o();
		this.v0x.g5s = this.d7j;
		return;
	}
	if (this.b8k(i5s))
	{
		this.p3o();
		this.v0x.l7g = this.d7j;
		return;
	}
	if (this.b8k(h3o))
	{
		this.p3o();
		this.v0x.u9x = this.d7j;
		return;
	}
	if (this.b8k(y6q))
	{
		this.p3o();
		this.v0x.k2a = this.d7j;
		return;
	}
	if (this.b8k(j1j))
	{
		this.p3o();
		this.v0x.w6j = this.d7j;
		return;
	}
	if (this.b8k(d5g))
	{
		this.p3o();
		this.v0x.b8j = this.d7j;
		return;
	}
	if (this.b8k(v2i))
	{
		this.p3o();
		this.v0x.d6z = this.d7j;
		return;
	}
	if (this.b8k(v5g))
	{
		this.p3o();
		this.v0x.o7o = this.d7j;
		return;
	}
	if (this.b8k(u1m))
	{
		this.p3o();
		this.v0x.o9y = this.d7j;
		return;
	}
	if (this.b8k(y6u))
	{
		this.p3o();
		this.v0x.t6n = this.d7j;
		return;
	}
	if (this.b8k(y4u))
	{
		this.p3o();
		this.v0x.u4n = this.d7j;
		return;
	}

	
	if (this.b8k(n4v))
	{
		this.p3o();
		this.v0x.u3w = this.d7j;
		return;
	}

	
	if (this.b8k(i6y))
	{
		this.p3o();
		this.v0x.t1o = this.d7j;
		return;
	}
	if (this.b8k(i8u))
	{
		this.p3o();
		this.v0x.t1o = this.d7j;
		return;
	}
	if (this.b8k(t2o))
	{
		this.p3o();
		this.v0x.i8z = this.d7j;
		return;
	}
	if (this.b8k(q5d))
	{
		this.p3o();
		this.v0x.f9i = this.d7j;
		return;
	}
	if (this.b8k(v3q))
	{
		this.p3o();
		this.v0x.f9i = this.d7j;
		return;
	}
	if (this.b8k(s6j))
	{
		this.p3o();
		this.v0x.y8t = this.d7j;
		return;
	}
	if (this.b8k(j6v))
	{
		this.p3o();
		this.v0x.r2h = this.d7j;
		return;
	}
	if (this.b8k(f7t))
	{
		this.p3o();
		this.v0x.w4x = this.d7j;
		return;
	}

	
	if (this.b8k(o2e))
	{
		this.p3o();
		this.v0x.j8j = this.d7j;
		return;
	}

	
	if (this.b8k(b4t))
	{
		this.p3o();
		this.v0x.g0s = this.d7j;
		return;
	}
	if (this.b8k(t1k))
	{
		this.p3o();
		this.v0x.z2l = this.d7j;
		return;
	}
	if (this.b8k(n2k))
	{
		this.p3o();
		this.v0x.t5i = this.d7j;
		return;
	}
	if (this.b8k(s1u))
	{
		this.p3o();
		this.v0x.s1m = this.d7j;
		return;
	}

	
	if (this.b8k(q8r))
	{
		this.p3o();
		this.v0x.c4h = this.d7j;
		return;
	}

	
	if (this.b8k(e0p))
	{
		this.p3o();
		return;
	}
	if (this.b8k(h3r))
	{
		this.p3o();
		if (this.d7j.length == 0 || this.d7j == "?")
		{
			return;
		}
		this.d8r = true;
		this.n6k = this.d7j;
		return;
	}
	if (this.b8k(r1u))
	{
		this.p3o();
		this.d8n = q6d(this.d7j, 0);
		return;
	}
  
 	if (this.b8k(d9v))
	{
		this.p3o();
		this.v0x.x8m = this.d7j;
		return;
	}

}

v4x(w8t)
{
	let s0l = new u6i();
	let l4b = w8t.substr(6, w8t.length - 6);
	let g8m = l4b.split(",");
	for (const s of g8m)
	{
		if (s.length < 5)
		{
			continue;
		}
		let d5w = j4y(s.substr(1, 2));
		let g8k = j4y(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let e2g = l5u(d5w, g8k, n6q.f0d);
			s0l.add(e2g);
		}
		else if (s[0] == 'G')
		{
			let e2g = l5u(d5w, g8k, n6q.y7z);
			s0l.add(e2g);
		}
		else if (s[0] == 'Y')
		{
			let e2g = l5u(d5w, g8k, n6q.y9t);
			s0l.add(e2g);
		}
	}
	return s0l;
}

a5d(w8t)
{
	let l2t = new s2q();
	let l4b = w8t.substr(6, w8t.length - 6);
	let g8m = l4b.split(",");
	for (const s of g8m)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let e9g = j4y(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let o1h = u6x(e9g, o3t.l1h);
			l2t.add(o1h);
		}
		else if (s[0] == 'G')
		{
      let o1h = u6x(e9g, o3t.x9x);
			l2t.add(o1h);
		}
		else if (s[0] == 'Y')
		{
      let o1h = u6x(e9g, o3t.n3a);
			l2t.add(o1h);
		}
	}
	return l2t;
}

y2t(w8t)
{
	let l4b = w8t.substr(6, w8t.length - 6);
	let v2a = l4b.indexOf("]");
	if (v2a != -1)
	{
		let o7u = new e4e();
		let value = q6d(l4b.substr(0, v2a), 0);
		o7u.s9p(value);
		return o7u;
	}
	else
	{
		return new e4e();
	}
}


x2c(w8t, y2o)
{
	if (
		w8t.startsWith("[%cal") ||
    w8t.startsWith("[%csb") ||
		w8t.startsWith("[%csl") ||
		w8t.startsWith("[%mdl") ||
		w8t.startsWith("[%evp") ||
		w8t.startsWith("[%eval") ||
		w8t.startsWith("[%emt") ||
		w8t.startsWith("[%tqu") ||
		w8t.startsWith("[%tqu") ||
		w8t.startsWith("[%pws") ||
		w8t.startsWith("[%pth") ||
		w8t.startsWith("[%eog"))
	{
		let z8n = 0;
		{
     	let m9q = w8t.indexOf("[%cal");
			if (m9q != -1)
			{
        let y8q = w8t.indexOf("]", m9q);
				if (y8q != -1)
				{
     			let d8o = w8t.substring(m9q, y8q + 1);
					y2o.k0o = this.v4x(d8o).h1x();
					if (y8q > z8n) z8n = y8q;
				}
			}
		}
		{
     	let m9q = w8t.indexOf("[%csb");
   		if (m9q != -1)
			{
        let y8q = w8t.indexOf("]", m9q);
				if (y8q != -1)
				{
          let y3t = w8t.substring(m9q, y8q + 1);
					y2o.r2g = this.a5d(y3t).h1x();
					if (y8q > z8n) z8n = y8q;
				}
			}
		}
		{
      let m9q = w8t.indexOf("[%csl");
			if (m9q != -1)
			{
        let y8q = w8t.indexOf("]", m9q);
				if (y8q != -1)
				{
          let y3t = w8t.substring(m9q, y8q + 1);
					y2o.r2g = this.a5d(y3t).h1x();
					if (y8q > z8n) z8n = y8q;
				}
			}
		}
		{
      let m9q = w8t.indexOf("[%mdl");
			if (m9q != -1)
			{
        let y8q = w8t.indexOf("]", m9q);
				if (y8q != -1)
				{
          let n7v = w8t.substring(m9q, y8q + 1);
					y2o.o7u = this.y2t(n7v).h1x();
					if (y8q > z8n) z8n = y8q;
				}
			}
		}
		{
      let m9q = w8t.indexOf("[%evp");
			if (m9q != -1)
			{
        let y8q = w8t.indexOf("]", m9q);
				if (y8q != -1)
				{
					if (y8q > z8n) z8n = y8q;
				}
			}
		}
		{
      let m9q = w8t.indexOf("[%eval");
			if (m9q != -1)
			{
        let y8q = w8t.indexOf("]", m9q);
				if (y8q != -1)
				{
					if (y8q > z8n) z8n = y8q;
				}
			}
		}
		{
      let m9q = w8t.indexOf("[%emt");
			if (m9q = -1)
			{
        let y8q = w8t.indexOf("]", m9q);
				if (y8q != -1)
				{
					if (y8q > z8n) z8n = y8q;
				}
			}
		}
		{
      let m9q = w8t.indexOf("[%tqu");
			if (m9q != -1)
			{
        let y8q = w8t.indexOf("]", m9q);
				if (y8q != -1)
				{
					if (y8q > z8n) z8n = y8q;
				}
			}
		}
		{
      let m9q = w8t.indexOf("[%pws");
			if (m9q != -1)
			{
        let y8q = w8t.indexOf("]", m9q);
				if (y8q != -1)
				{
          y2o.w9s = true;
					if (y8q > z8n) z8n = y8q;
				}
			}
		}
		{
      let m9q = w8t.indexOf("[%pth");
			if (m9q != -1)
			{
        let y8q = w8t.indexOf("]", m9q);
				if (y8q != -1)
				{
          y2o.s7k = true;
					if (y8q > z8n) z8n = y8q;
				}
			}
		}
		{
      let m9q = w8t.indexOf("[%eog");
			if (m9q != -1)
			{
        let y8q = w8t.indexOf("]", m9q);
				if (y8q != -1)
				{
					y2o.r0n = true; 
					if (y8q > z8n) z8n = y8q;
				}
			}
		}
    y2o.y9s = w8t.substring(z8n + 1);
	}
	else
	{
		y2o.y9s = w8t;
	}
}

}

class r1s
{

constructor()
{
  this.d9u = 0;
	this.g3r = new q7e();
	this.h0a = new g5i();
}

h1x()
{
	let u0b = new r1s();
  u0b.d9u = this.d9u;
	u0b.g3r = this.g3r.h1x();
	u0b.h0a = this.h0a.h1x();
	return u0b;
}

}

class q7e
{

constructor()
{
	this.p4k = '';
	this.d3t = '';
	this.q2i = '';
	this.o4t = '';
	this.o5j = '';
	this.h9r = '';
	this.i6u = '';
	this.b0a = '';
	this.z8k = '';
  this.b6v = '';
	this.u4v = '';
	this.e4c = '';
	this.c6v = '';
	this.t0k = '';
	this.q9b = '';
	this.j9k = '';
	this.k5x = '';
	this.i8y = '';
	this.r0f = '';
  this.c3u = '';
	this.q4g = '';
	this.d1l = '';
	this.g5s = '';
	this.l7g = '';
	this.u9x = '';
	this.k2a = '';
	this.w6j = '';
	this.b8j = '';
	this.d6z = '';
	this.o7o = '';
	this.o9y = '';
	this.t6n = '';
	this.u4n = '';
	this.u3w = '';
	this.t1o = '';
	this.i8z = '';
	this.f9i = '';
	this.y8t = '';
	this.r2h = '';
	this.w4x = '';
	this.j8j = '';
	this.g0s = '';
	this.z2l = '';
	this.t5i = '';
	this.s1m = '';
	this.c4h = '';
  this.x8m = '';
}

h1x()
{
	let g8g = new q7e();

	g8g.p4k = this.p4k;
	g8g.d3t = this.d3t;
	g8g.q2i = this.q2i;
	g8g.o4t = this.o4t;
	g8g.o5j = this.o5j;
	g8g.h9r = this.h9r;
	g8g.i6u = this.i6u;
	g8g.b0a = this.b0a;
	g8g.z8k = this.z8k;
	g8g.b6v = this.b6v;

	g8g.u4v = this.u4v;
	g8g.e4c = this.e4c;
	g8g.c6v = this.c6v;
	g8g.t0k = this.t0k;
	g8g.q9b = this.q9b;
	g8g.j9k = this.j9k;
	g8g.k5x = this.k5x;
	g8g.i8y = this.i8y;
	g8g.r0f = this.r0f;
	g8g.c3u = this.c3u;

	g8g.q4g = this.q4g;
	g8g.d1l = this.d1l;
	g8g.g5s = this.g5s;
	g8g.l7g = this.l7g;
	g8g.u9x = this.u9x;
	g8g.k2a = this.k2a;
	g8g.w6j = this.w6j;
	g8g.b8j = this.b8j;
	g8g.d6z = this.d6z;
	g8g.o7o = this.o7o;
	g8g.o9y = this.o9y;
	g8g.t6n = this.t6n;
	g8g.u4n = this.u4n;

	g8g.u3w = this.u3w;

	g8g.t1o = this.t1o;
	g8g.i8z = this.i8z;
	g8g.f9i = this.f9i;
	g8g.y8t = this.y8t;
	g8g.r2h = this.r2h;
	g8g.w4x = this.w4x;

	g8g.j8j = this.j8j;

	g8g.g0s = this.g0s;
	g8g.z2l = this.z2l;
	g8g.t5i = this.t5i;
	g8g.s1m = this.s1m;

	g8g.c4h = this.c4h;
 	g8g.x8m = this.x8m;

	return g8g;
}

}


const w8a =
[
		[ r4b.l2e, 				  									"",											            "", 																	"",   ""    ],
		[ r4b.q4o, 										  "Afghanistan",											"Afghanistan", 												"af", "AFG" ],
		[ r4b.q2r, 									 	"AlandIslands",										  "Aland", 															"ax", "ALA" ],
		[ r4b.q4b,  											 	"Albania",													"Albania", 														"al", "ALB" ],
		[ r4b.m6p,  											 	"Algeria",													"Algeria", 														"dz", "DZA" ],
		[ r4b.c1j,  								 	"AmericanSamoa",										"American Samoa", 										"as", "ASM" ],
		[ r4b.d8k,  											 	"Andorra",													"Andorra", 														"ad", "AND" ],
		[ r4b.h9i,                           "Angola",													  "Angola", 														"ao", "AGO" ],
		[ r4b.o7h,  											  "Anguilla",												  "Anguilla", 													"ai", "AIA" ],
		[ r4b.i3w,  										  "Antarctica",											  "Antarctica", 												"aq", "ATA" ],
		[ r4b.e9k,  								  "AntiguaBarbuda",									  "Antigua & Barbuda", 									"ag", "ATG" ],
		[ r4b.g9j,  										 	"Argentina",												"Argentina", 													"ar", "ARG" ],
		[ r4b.y0x,  											 	"Armenia",													"Armenia",														"am", "ARM" ],
		[ r4b.a2s,  												 	"Aruba",														"Aruba",															"aw", "ABW" ],
		[ r4b.l4j,  										 	"Australia",												"Australia",													"au", "AUS" ],
		[ r4b.b4v,  											 	"Austria",													"Austria",											 			"at", "AUT" ],
		[ r4b.k4f,  										  "Azerbaijan",											  "Azerbaijan",													"az", "AZE" ],
		[ r4b.t7o,  											 	"Bahamas",													"Bahamas",														"bs", "BHS" ],
		[ r4b.i7t,  											 	"Bahrain",													"Bahrain",														"bh", "BHR" ],
		[ r4b.f7g,  										  "Bangladesh",											  "Bangladesh",													"bd", "BGD" ],
		[ r4b.s8a,  											  "Barbados",												  "Barbados",														"bb", "BRB" ],
		[ r4b.h2u,  								 	"BasqueCountry",	 									"Basque Country",     								"x1", "XX1" ], 
		[ r4b.y0u,  											 	"Belarus",													"Belarus",														"by", "BLR" ],
		[ r4b.u1v,  											 	"Belgium",													"Belgium",														"be", "BEL" ],
		[ r4b.j1p,  												  "Belize",													  "Belize",															"bz", "BLZ" ],
		[ r4b.o8v,  												 	"Benin",														"Benin",															"bj", "BEN" ],
		[ r4b.y1e,  											 	"Bermuda",													"Bermuda",														"bm", "BMU" ],
		[ r4b.z1s,  												  "Bhutan",													  "Bhutan",															"bt", "BTN" ],
		[ r4b.n7r,  												"Bolivia",													"Bolivia",														"bo", "BOL" ],
		[ r4b.m0n,  						  "BosniaHerzegovina",       				  "Bosnia & Herzegovina", 							"ba", "BIH" ], 
		[ r4b.f0i,  											  "Botswana",                      	  "Botswana",														"bw", "BWA" ],
		[ r4b.f7c,  									  "BouvetIsland",                 		"Bouvet",															"bv", "BVT" ],
		[ r4b.x7g,  												  "Brazil",                        	  "Brazil",															"br", "BRA" ],
		[ r4b.p0x,  	 	"BritishIndianOceanTerritory",			"British Indian Ocean Territory", 		"io", "IOT" ],
		[ r4b.h6h, 							 	"BruneiDarussalam",								  "Brunei",															"bn", "BRN" ], 
		[ r4b.w1u,  											  "Bulgaria",												  "Bulgaria", 													"bg", "BGR" ],
		[ r4b.i9t, 										  "BurkinaFaso",											"Burkina Faso",												"bf", "BFA" ],
		[ r4b.r3q,  											 	"Burundi",													"Burundi",														"bi", "BDI" ],
		[ r4b.v1x,  											  "Cambodia",												  "Cambodja",														"kh", "KHM" ],
		[ r4b.u4l,  											  "Cameroon",												  "Cameroon",														"cm", "CMR" ],
		[ r4b.g1u,  												  "Canada",													  "Canada",															"ca", "CAN" ],
		[ r4b.m9u,  										  "CapeVerde",												"Cape Verde",													"cv", "CPV" ], 
		[ r4b.l0u,  										  "Catalonia",												"Catalonia",													"x2", "XX2" ], 
		[ r4b.a6g,  								  "CaymanIslands",										"Cayman Islands",											"ky", "CYM" ],
		[ r4b.p7i,  				  "CentralAfricanRepublic",					  "Central African Republic",						"cf", "CAF" ],
		[ r4b.q6m,  													  "Chad",														  "Chad",																"td", "TCD" ],
		[ r4b.f5h,  												 	"Chile",														"Chile",															"cl", "CHL" ],
		[ r4b.n0r,  												 	"China",														"China",															"cn", "CHN" ],
		[ r4b.r8k,  							 	"ChristmasIsland",									"Christmas",													"cx", "CXR" ],
		[ r4b.j4i,  					 	"CocosKeelingIslands",							"Cocos (Keeling)",										"cc", "CCK" ], 
		[ r4b.o9k,  											  "Colombia",												  "Colombia",														"co", "COL" ],
		[ r4b.x9h,  											 	"Comoros",													"Comoros",														"km", "COM" ],
		[ r4b.h1a,  												 	"Congo",														"Congo-Brazzaville", 						    	"cg", "COG" ],
		[ r4b.l8d,  			 	"CongoDemocraticRepublic",					"Congo-Kinshasa(Zaire)",						  "cd", "COD" ],
		[ r4b.o1f,  									 	"CookIslands",											"Cook Islands",											 	"ck", "COK" ],
		[ r4b.i1b,  											"CostaRica",												"Costa Rica",												 	"cr", "CRI" ],
		[ r4b.j0u,  												"Croatia",													"Croatia",														"hr", "HRV" ],
		[ r4b.f5c,  													  "Cuba",														  "Cuba",															 	"cu", "CUB" ],
		[ r4b.h3a,  												"Curacao",													"Curacao",											  		"cw", "CUW" ],
		[ r4b.d9w,  												  "Cyprus",													  "Cyprus",														 	"cy", "CYP" ],
		[ r4b.u8r,  									      "Czechia",										      "Czech Republic", 										"cz", "CZE" ],
		[ r4b.n6n,  										  "CoteIvoire",	   					 				  "Cote d'Ivoire",											"ci", "CIV" ],
		[ r4b.x1y,  												"Denmark",													"Denmark",													  "dk", "DNK" ],
		[ r4b.x2u,  											  "Djibouti",												  "Djibouti",													 	"dj", "DJI" ],
		[ r4b.e3s,  											  "Dominica",												  "Dominica",													 	"dm", "DMA" ],
		[ r4b.f4z,  							"DominicanRepublic",								"Dominican Republic",								 	"do", "DOM" ],
		[ r4b.d1t,  												"Ecuador",													"Ecuador",													 	"ec", "ECU" ],
		[ r4b.e5h,  													"Egypt",														"Egypt", 														 	"eg", "EGY" ],
		[ r4b.s6f,  										  "ElSalvador",											  "El Salvador",												"sv", "SLV" ],
		[ r4b.g4f,  												"England",													"England",														"x3", "GBR" ],
		[ r4b.m9h,  							  "EquatorialGuinea",								  "Equatorial Guinea",									"gq", "GNQ" ], 
		[ r4b.g4s,  												"Eritrea",													"Eritrea",														"er", "ERI" ],
		[ r4b.e7g,  												"Estonia",													"Estonia",														"ee", "EST" ],
		[ r4b.a1k,  											  "Ethiopia",												  "Ethiopia",													 	"et", "ETH" ],
		[ r4b.u5q,  								"FalklandIslands",									"England",														"fk", "FLK" ], 
		[ r4b.m3d,  									  "FaroeIslands",										  "Faroes",														 	"fo", "FRO" ],
		[ r4b.g0r,  													  "Fiji",														  "Fiji",															 	"fj", "FJI" ],
		[ r4b.m4i,  												"Finland",													"Finland",														"fi", "FIN" ],
		[ r4b.o7g,  												  "France",													  "France",														 	"fr", "FRA" ],
		[ r4b.a5z,  									  "FrenchGuiana",										  "Guyana", 														"gf", "GUF" ], 
		[ r4b.g3n,  								"FrenchPolynesia",									"Tahiti(French Polinesia)", 					"pf", "PYF" ], 
		[ r4b.v7g,  			"FrenchSouthernTerritories",				"French Southern and Antarctic Lands","tf", "ATF" ],
		[ r4b.f8t,  													"Gabon",														"Gabon",															"ga", "GAB" ], 
		[ r4b.n5d,  												  "Gambia",													  "Gambia",															"gm", "GMB" ],
		[ r4b.i7p,  												"Georgia",													"Georgia",														"ge", "GEO" ],
		[ r4b.o2k,  												"Germany",													"Germany",														"de", "DEU" ],
		[ r4b.f7z, 													  "Ghana",														"Ghana",															"gh", "GHA" ],
		[ r4b.y0k,  											"Gibraltar",												"Gibraltar",													"gi", "GIB" ],
		[ r4b.x0w,  												  "Greece",													  "Greece",															"gr", "GRC" ],
		[ r4b.u5b,  											"Greenland",												"Greenland",													"gl", "GRL" ],
		[ r4b.u8f,  												"Grenada",													"Grenada",														"gd", "GRD" ],
		[ r4b.j4c,  										  "Guadeloupe",											  "Guadeloupe",													"gp", "GLP" ],
		[ r4b.o0k,  													  "Guam",														  "Guam",																"gu", "GUM" ],
		[ r4b.l8u,  											"Guatemala",												"Guatemala",													"gt", "GTM" ],
		[ r4b.x6i,  											  "Guernsey",												  "Guernsey",														"gg", "GGY" ], 
		[ r4b.v3k,  												  "Guinea",													  "Guinea",															"gn", "GIN" ],
		[ r4b.r1q,  									  "GuineaBissau",										  "Guinea-Bissau",											"gw", "GNB" ],
		[ r4b.f1p,  												  "Guyana",													  "Guyana",															"gy", "GUY" ],
		[ r4b.p3s,  													"Haiti",														"Haiti",															"ht", "HTI" ],
		[ r4b.c2r, 			"HeardIslandMcDonaldIslands", 			"Australia",   									  		"hm", "HMD" ],
		[ r4b.i8k,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ r4b.s3k,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ r4b.e7s,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ r4b.i6f,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ r4b.z0m,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ r4b.e0n,  												 	"India",														"India",															"in", "IND" ],
		[ r4b.v3s,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ r4b.y3o,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ r4b.e7p,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ r4b.i1g,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ r4b.u0w,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ r4b.u6c,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ r4b.u7d,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ r4b.f7b,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ r4b.w3o,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], 
		[ r4b.j5j,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ r4b.m9v,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ r4b.g0d,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ r4b.a3p,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ r4b.p4l,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ r4b.u1b,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ r4b.b9z,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], 
		[ r4b.g4v,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], 
		[ r4b.w3x,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ r4b.i7q,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ r4b.x1i,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ r4b.v8j,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ r4b.d0b, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ r4b.u2i,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ r4b.a1y, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ r4b.u1g,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ r4b.e0b,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ r4b.z3k,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ r4b.i0n,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ r4b.y5q,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ r4b.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ r4b.d4k,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ r4b.c4n,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ r4b.a2e,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ r4b.e8e,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ r4b.o5i,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ r4b.h0v, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ r4b.d7k,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ r4b.k0l,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ r4b.w7x,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ r4b.k1c,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ r4b.r5s,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ r4b.w8l,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ r4b.r0g,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ r4b.e0y,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ r4b.z8w,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ r4b.i8w,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ r4b.u6r,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ r4b.m8f,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ r4b.d7w,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ r4b.v6r,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ r4b.f5y,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ r4b.a8j, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ r4b.m4s,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ r4b.w2a,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ r4b.x3n,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ r4b.z1e,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ r4b.z8a, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ r4b.t4a,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ r4b.p9t,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ r4b.f6c,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ r4b.s2a,  													"Niger",														"Niger",															"ne", "NER" ],
		[ r4b.s8o,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ r4b.s3b,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ r4b.m0x,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ r4b.o6s,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], 
		[ r4b.p3p,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ r4b.i3y,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ r4b.p9v,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ r4b.r2b,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ r4b.n0y,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ r4b.b9q,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ r4b.f2j,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ r4b.e7m,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ r4b.w4w,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ r4b.t2y,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ r4b.k9h,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ r4b.x6n,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ r4b.w1g,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ r4b.y9a,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ r4b.v0b,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ r4b.o6w,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ r4b.v9o,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ r4b.w0n,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ r4b.e9d,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ r4b.f4a,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ r4b.n1g,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ r4b.e8p,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], 
		[ r4b.e1x,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], 
		[ r4b.h8c, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], 
		[ r4b.l8r,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ r4b.i2a,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], 
		[ r4b.i2m,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], 
		[ r4b.h8d,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ r4b.y0l,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ r4b.k8n,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ r4b.y9n,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ r4b.e3j,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ r4b.v6e,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ r4b.e7k,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ r4b.m1v,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ r4b.c7o,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ r4b.j3b,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ r4b.z4t,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ r4b.p9e,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ r4b.c9d,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ r4b.q0r,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ r4b.r1p,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ r4b.k1l,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ r4b.d9l, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ r4b.h1w,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ r4b.r4n,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ r4b.l7l, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ r4b.n1h,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ r4b.j7y,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ r4b.u7u,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], 
		[ r4b.w6x,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], 
		[ r4b.r6z,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ r4b.i9x,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ r4b.r7z,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ r4b.f8e,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ r4b.z4c,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ r4b.d2u,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ r4b.h3u,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ r4b.e5n, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ r4b.p5k,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], 
		[ r4b.v8h, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ r4b.b8z,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], 
		[ r4b.s3y,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ r4b.u9h,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ r4b.y1j,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ r4b.y1l,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ r4b.y6i,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ r4b.b1p,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ r4b.g6o,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ r4b.k0s,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ r4b.j7x,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ r4b.x5k,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ r4b.i0f,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], 
		[ r4b.n7l,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ r4b.x1p, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ r4b.g3y,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ r4b.u5u,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ r4b.i5z,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ r4b.x3q,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ r4b.v7j,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ r4b.h4k,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ r4b.o3g,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ r4b.i2c,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ r4b.c7n,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ r4b.s9b,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ r4b.q1a,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ r4b.d4t,  											 		"Zaire",														"",																		"zr", "ZRN" ], 
		[ r4b.a5u,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ r4b.n6w,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function t9f(m5s)
{
	return w8a[m5s][2];
}

function t9z(m5s)
{
	return w8a[m5s][4];
}

function d7d(j6r)
{
	for (const m5s of w8a)
	{
		if (m5s[4] == j6r)
		{
			return m5s[0];
		}
	}
	return r4b.l2e;
}

function w4z(v3l)
{
	for (const m5s of w8a)
	{
		if (m5s[3] == v3l)
		{
			return m5s[0];
		}
	}
	return r4b.l2e;
}
class y2y
{

constructor()
{
	this.w8t = '';
}

i1n(l4b)
{
	this.w8t += l4b;
}

y4r(l4b)
{
	this.w8t += l4b + '\n';
}

i6x()
{
	this.w8t += '\n';
}

}




function q6d(p7o, l9k)
{
	let value = Number(p7o);
	if (isNaN(value))
	{
		return l9k;
	}
	else
	{
		return value;
	}
}
