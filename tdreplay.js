const x7q = "https://kb5963.github.io/replay/";
const	chess = false; 

const e5q =
{
	j2x   : 0,
	u2o   : 1,
	d8i   : 2,
	o0n   : 3,
	m9a       : 4,
};

const l6g =
{
	w4g        : 0,
	z8i        : 1,
};

const	sq_1 = 0;
const e8s = 1;
const b8l = 2;
const r5v = 3;
const q8i = 4;
const y7q = 5;
const y3m = 6;
const c1e = 7;
const u7k = 8;
const a4f = 9;
const x6d = 10;
const t4o = 11;
const c8o = 12;
const c3f = 13;
const v1h = 14;
const c7h = 15;
const k0h = 16;
const p8b = 17;
const f6h = 18;
const h0t = 19;
const v7w = 20;
const y6x = 21;
const m5q = 22;
const r7z = 23;
const d8g = 24;
const a1j = 25;
const c9x = 26;
const c5x = 27;
const w4y = 28;
const h0u = 29;
const f2f = 30;
const j0l = 31;
const f7n = 32;
const y0n = 33;
const k7c = 34;
const c0y = 35;
const r3t = 36;
const s4y = 37;
const e4p = 38;
const e9x = 39;
const y5w = 40;
const b2e = 41;
const z7d = 42;
const v9u = 43;
const c3o = 44;
const l3z = 45;
const z1f = 46;
const e5y = 47;
const s4l = 48;
const n4z = 49;
const b3g = 50;

const o7v = 0;
const r6q = 1;
const n5i = 2;
const a4i = 3;
const r8x = 4;
const i4k = 5;
const z8j = 6;
const r7x = 7;
const u7n = 8;
const q2o = 9;
const z7r = 10;

const	rank_1 = 0;
const d2p = 1;
const j8a = 2;
const a9s = 3;
const r0w = 4;
const t3z = 5;
const k8e = 6;
const c8e = 7;
const s6y = 8;
const m1g = 9;
const r8h = 10;

const c4f        = 10;
const k0x       = 50;
const t5z      = 20;

const h7l =
[
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
 	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.d8i,  
	e5q.m9a,      
	e5q.m9a, 	    
	e5q.m9a, 	    
	e5q.m9a, 	    
	e5q.m9a, 	    
	e5q.m9a, 	    
	e5q.m9a, 	    
	e5q.m9a, 	    
	e5q.m9a, 	    
	e5q.m9a, 	    
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
	e5q.j2x,  
];

const k8g =
[
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
 	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
	e5q.m9a,  
];

const g4q =
[
	sq_1,  e8s,  b8l,  r5v,  q8i,
	y7q,  y3m,  c1e,  u7k,  a4f,
	x6d, t4o, c8o, c3f, v1h,
	c7h, k0h, p8b, f6h, h0t,
	v7w, y6x, m5q, r7z, d8g,
	a1j, c9x, c5x, w4y, h0u,
	f2f, j0l, f7n, y0n, k7c,
	c0y, r3t, s4y, e4p, e9x,
	y5w, b2e, z7d, v9u, c3o,
	l3z, z1f, e5y, s4l, n4z,
];

const n6a =
[
	o7v,
  r6q,
  n5i,
  a4i,
  r8x,
  i4k,
  z8j,
  r7x,
  u7n,
  q2o,
];

const g8m =
[
	rank_1,
  d2p,
  j8a,
  a9s,
  r0w,
  t3z,
  k8e,
  c8e,
  s6y,
  m1g,
];

function o4f(v8b)
{
	return v8b == e5q.d8i ||
    v8b == e5q.o0n;
}

function v4k(v8b)
{
	return v8b == e5q.j2x ||
    v8b == e5q.u2o;
}

function e5t(v8b)
{
	return v8b == e5q.j2x || v8b == e5q.d8i;
}

function r7w(v8b)
{
	return v8b == e5q.u2o || v8b == e5q.o0n;
}

function p0i(e5k)
{
	if (e5k == b3g)
	{
		return b3g;
	}
	else
	{
		return k0x - e5k - 1;
	}
}

const k9z =
[
	r6q,	a4i,	i4k,	r7x,	q2o,
	o7v,	n5i,	r8x,	z8j,	u7n,
	r6q,	a4i,	i4k,	r7x,	q2o,
	o7v,	n5i,	r8x,	z8j,	u7n,
	r6q,	a4i,	i4k,	r7x,	q2o,
	o7v,	n5i,	r8x,	z8j,	u7n,
	r6q,	a4i,	i4k,	r7x,	q2o,
	o7v,	n5i,	r8x,	z8j,	u7n,
	r6q,	a4i,	i4k,	r7x,	q2o,
	o7v,	n5i,	r8x,	z8j,	u7n,
];

function g7c(e5k)
{
	return k9z[e5k];
}

const t5r =
[
	m1g, m1g,	m1g, m1g,	m1g,
	s6y,	 s6y,	s6y,	 s6y,	s6y,
	c8e,	 c8e,	c8e,	 c8e,	c8e,
	k8e,	 k8e,	k8e,	 k8e,	k8e,
	t3z,	 t3z,	t3z,	 t3z,	t3z,
	r0w,	 r0w,	r0w,	 r0w,	r0w,
	a9s,	 a9s,	a9s,	 a9s,	a9s,
	j8a,	 j8a,	j8a,	 j8a,	j8a,
	d2p,	 d2p,	d2p,	 d2p,	d2p,
	rank_1,	 rank_1,	rank_1,	 rank_1,	rank_1,
];

function h0f(e5k)
{
	return t5r[e5k];
}

function y5p(a, b)
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

function r3m(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function w0o(d7t, v8b)
{
	let h5b = 0;
	for (const value of d7t)
	{
		if (value == v8b)
		{
			h5b++;
		}
	}
	return h5b;
}

function v9t(s5h)
{
 	let value = r7g(s5h, 0);
	if (value <= 0)
	{
		return b3g;
	}
	else
	{
		value--; 
		if (value >= sq_1 && value <= n4z)
		{
			return value;
		}
		else
		{
			return b3g;
		}
	}
}

function z5w(e5k)
{
 	let s5h = '';
	s5h = (e5k + 1);
  return s5h;
}







function b0q(e5k)
{
	return e5k >= l3z;
}

function h9g(e5k)
{
	return e5k <= q8i;
}

function b5v(j6b)
{
	return !(j6b % 2);
}

class d5f
{

constructor()
{
}

v8u()
{
	let s4e = new d5f();
  return Object.assign(s4e, this);
}

}


class o8k
{

constructor()
{
  this.u3g = Array(k0x).fill(e5q.m9a);
 	this.f0e = l6g.w4g;
 	this.w8l = new d5f();
 	this.p7w();
}

v8u()
{
	let c5v = new o8k();
	r3m(c5v.u3g, this.u3g);
	c5v.f0e = this.f0e;
  c5v.w8l = this.w8l.v8u();
	return c5v;
}

v5p(x8g)
{
	return this.f0e == x8g.f0e &&
		y5p(this.u3g, x8g.u3g);
}

z4a(x8g)
{
	return !this.v5p(x8g);
}

n4s()
{
 	r3m(this.u3g, h7l);
 	this.f0e = l6g.w4g;
}

a5b()
{
	return this.f0e == l6g.w4g && this.z9l();
}

z9l()
{
	return y5p(this.u3g, h7l);
}

p7w()
{
	this.u3g.fill(e5q.m9a);
	this.f0e = l6g.w4g;
}

v7m()
{
	return this.f0e == l6g.w4g && this.f1m();
}

f1m()
{
	return this.u3g.every(e5q.m9a);
}

d7t()
{
  return this.u3g.slice();
}

s0u(e5k)
{
	return this.u3g[e5k];
}

n2o(e5k, v8b)
{
	this.u3g[e5k] = v8b;
}

d8b()
{
	this.f0e = l6g.w4g;
}

l6q()
{
	this.f0e = l6g.z8i;
}

h8h()
{
	if (this.f0e == l6g.w4g)
	{
		this.f0e = l6g.z8i;
	}
	else
	{
		this.f0e = l6g.w4g;
	}
}

b8p()
{
	return this.f0e == l6g.w4g;
}

h1h()
{
	return this.f0e == l6g.z8i;
}

s7i(e5k)
{
	return this.u3g[e5k] == e5q.m9a;
}

v4k(e5k)
{
	let v8b = this.u3g[e5k];
	return v8b == e5q.j2x ||
    v8b == e5q.u2o;
}

o4f(e5k)
{
	let v8b = this.u3g[e5k];
	return v8b == e5q.d8i ||
    v8b == e5q.o0n;
}

m6u(e5k)
{
  let v8b = this.u3g[e5k];
	return v8b == e5q.j2x;
}

z8x(e5k)
{
  let v8b = this.u3g[e5k];
	return v8b == e5q.u2o;
}

w2b(e5k)
{
  let v8b = this.u3g[e5k];
	return v8b == e5q.d8i;
}

v8q(e5k)
{
  let v8b = this.u3g[e5k];
	return v8b == e5q.o0n;
}

o4s()
{
  let h5b = 0;
	for (const e5k of g4q)
	{
    if (this.v4k(e5k))
		{
			h5b++;
		}
	}
	return h5b;
}

l7a()
{
  let h5b = 0;
	for (const e5k of g4q)
	{
    if (this.o4f(e5k))
		{
			h5b++;
		}
	}
	return h5b;
}

k5x(h4h)
{
  this.w8l = h4h.v8u();
}

h4h()
{
  return this.w8l.v8u();
}

u3j(d4v)
{
	if (d4v.e4g())
	{
    this.h8h();
		return;
	}
	this.n2o(d4v.g0w, e5q.m9a);
	this.n2o(d4v.f8g, d4v.o4t);
	for (const e5k of d4v.l7z)
	{
		this.n2o(e5k, e5q.m9a);
	}
	this.h8h();
}

p3n(d4v)
{
	if (d4v.e4g())
	{
    this.h8h();
		return;
	}
	this.n2o(d4v.f8g, e5q.m9a);
	this.n2o(d4v.g0w, d4v.n7n);
	let i = 0;
	for (const e5k of d4v.l7z)
	{
		this.n2o(e5k, d4v.d3j[i]);
    i++;
	}
	this.h8h();
}

}
const z8p  = 0;
const e0z   = 1;
const u7l  = z8p;

function e9k()
{
  let v9n = [];
	v9n.push("Ellipse");
	v9n.push("Circle");
	return v9n;
}

class n1y
{

constructor()
{
	this.z3y = new w3p();
	this.m1e = null;
}

v8u()
{
	let a7h = new n1y();
	a7h.z3y = this.z3y.v8u();
	a7h.m1e = null;
	if (this.m1e)
	{
		a7h.m1e = this.m1e.v8u();
	}
	return a7h;
}

v5p(x8g)
{
	if (this.z3y.z4a(x8g))
	{
		return false;
	}
	return true;
}

z4a(x8g)
{
	return !this.v5p(x8g);
}

m9a()
{
	return this.z3y.m9a();
}

g0w()
{
	return this.z3y.g0w;
}

f8g()
{
	return this.z3y.f8g;
}

n7n()
{
	return this.z3y.n7n;
}

o4t()
{
	return this.z3y.o4t;
}

l7z()
{
  return this.z3y.l7z.slice();
}

d3j()
{
  return this.z3y.d3j.slice();
}

d3y()
{
	return this.z3y.d3y();
}

v4k()
{
	return this.z3y.v4k();
}

o4f()
{
	return this.z3y.o4f();
}

o4r()
{
	return this.z3y.o4r();
}

e4g()
{
	return this.z3y.e4g();
}

d5c()
{
	return this.z3y.d5c();
}

a6t()
{
	if (this.m1e == null)
	{
		this.m1e = new v0r();
	}
}

e5s()
{
	if (this.m1e)
	{
		if (this.m1e.m9a())
		{
			this.b0y();
		}
	}
}

l3r()
{
	return this.m1e != null;
}

b0y()
{
	this.m1e = null;
}

w3s(v5q)
{
	this.a6t();
	this.m1e = v5q.v8u();
}

o9z()
{
	return this.m1e;
}

v7p(x8g)
{
	if (this.m1e && !x8g.m1e)
	{
		return false;
	}
	if (!this.m1e && x8g.m1e)
	{
		return false;
	}
	if (!this.m1e && !x8g.m1e)
	{
		return true;
	}
	return this.m1e.v5p(x8g.m1e);
}

e6q()
{
	if (this.m1e)
	{
		this.m1e.c1g = '';
		this.e5s();
	}
}

f5c()
{
	if (this.m1e)
	{
		return this.m1e.c1g.length != 0;
	}
	else
	{
		return false;
	}
}

c1g()
{
	if (this.m1e)
	{
		return this.m1e.c1g;
	}
	else
	{
		return '';
	}
}

x3c(p2p)
{
	this.a6t();
	this.m1e.c1g = p2p;
	this.e5s();
}

w0h()
{
	if (this.m1e)
	{
		this.m1e.q2p = '';
		this.e5s();
	}
}

z9p()
{
	if (this.m1e)
	{
		return this.m1e.q2p.length != 0;
	}
	else
	{
		return false;
	}
}

q2p()
{
	if (this.m1e)
	{
		return this.m1e.q2p;
	}
	else
	{
		return '';
	}
}

y5a(p2p)
{
	this.a6t();
	this.m1e.q2p = p2p;
	this.e5s();
}

t0a()
{
	if (this.m1e)
	{
		this.m1e.e1i = g5x.g7h;
		this.e5s();
	}
}

q5m()
{
	if (this.m1e)
	{
		return this.m1e.e1i != g5x.g7h;
	}
	else
	{
		return false;
	}
}

e1i()
{
	if (this.m1e)
	{
		return this.m1e.e1i;
	}
	else
	{
		return g5x.g7h;
	}
}

f6u(e1i)
{
	this.a6t();
	this.m1e.e1i = e1i;
	this.e5s();
}

g9z()
{
	if (this.m1e)
	{
		this.m1e.style = j6q.g7h;
		this.e5s();
	}
}

f6e()
{
	if (this.m1e)
	{
		return this.m1e.style != j6q.g7h;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.m1e)
	{
		return this.m1e.style;
	}
	else
	{
		return j6q.g7h;
	}
}

c5s(style)
{
	this.a6t();
	this.m1e.style = style;
	this.e5s();
}

e6x()
{
	if (this.m1e)
	{
		this.m1e.value = w9y.g7h;
		this.e5s();
	}
}

i5o()
{
	if (this.m1e)
	{
		return this.m1e.value != w9y.g7h;
	}
	else
	{
		return false;
	}
}

value()
{
	if (this.m1e)
	{
		return this.m1e.value;
	}
	else
	{
		return w9y.g7h;
	}
}

a2m(value)
{
	this.a6t();
	this.m1e.value = value;
	this.e5s();
}

l3x()
{
	if (this.m1e)
	{
		this.m1e.o2c = c2u.g7h;
		this.e5s();
	}
}

d3x()
{
	if (this.m1e)
	{
		return this.m1e.o2c != c2u.g7h;
	}
	else
	{
		return false;
	}
}

o2c()
{
	if (this.m1e)
	{
		return this.m1e.o2c;
	}
	else
	{
		return c2u.g7h;
	}
}

a1m(o2c)
{
	this.a6t();
	this.m1e.o2c = o2c;
	this.e5s();
}

e0w()
{
  
}

l3w()
{
	if (this.m1e)
	{
 		if (this.m1e.c1g.length != 0)
    {
      let z4w = this.m1e.c1g.indexOf("[#]");
      return z4w != -1;
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

r7l()
{
  
}

x3b()
{
	if (this.m1e)
	{
		this.m1e.v8t = false;
		this.e5s();
	}
}

z2g()
{
	if (this.m1e)
	{
		return this.m1e.v8t;
	}
	else
	{
		return false;
	}
}

j8l()
{
	this.a6t();
	this.m1e.v8t = true;
	this.e5s();
}

p0m()
{
	if (this.m1e)
	{
		this.m1e.e3t = false;
		this.e5s();
	}
}

e5b()
{
	if (this.m1e)
	{
		return this.m1e.e3t;
	}
	else
	{
		return false;
	}
}

k1u()
{
	this.a6t();
	this.m1e.e3t = true;
	this.e5s();
}

o1h()
{
	if (this.m1e)
	{
		this.m1e.p0d.h1p();
		this.m1e.c5z.h1p();
		this.e5s();
	}
}

k0u()
{
	if (this.m1e)
	{
		return this.h2o() || this.j8m();
	}
	else
	{
		return false;
	}
}

u0f()
{
	if (this.m1e)
	{
		this.m1e.p0d.h1p();
		this.e5s();
	}
}

h2o()
{
	if (this.m1e)
	{
		return !this.m1e.p0d.m9a();
	}
	else
	{
		return false;
	}
}

p0d()
{
	if (this.m1e)
	{
		return this.m1e.p0d.v8u();
	}
	else
	{
		return new s7c();
	}
}

v8e(p0d)
{
	this.a6t();
	this.m1e.p0d = p0d.v8u();
	this.e5s();
}

s1v()
{
	if (this.m1e)
	{
		this.m1e.c5z.h1p();
		this.e5s();
	}
}

j8m()
{
	if (this.m1e)
	{
		return !this.m1e.c5z.m9a();
	}
	else
	{
		return false;
	}
}

c5z()
{
	if (this.m1e)
	{
		return this.m1e.c5z.v8u();
	}
	else
	{
		return new x6l();
	}
}

x9g(c5z)
{
	this.a6t();
	this.m1e.c5z = c5z.v8u();
	this.e5s();
}

h2w()
{
	if (this.m1e)
	{
		this.m1e.b0s.h9n();
		this.e5s();
	}
}

u1n()
{
	if (this.m1e)
	{
		return this.m1e.b0s.y9c();
	}
	else
	{
		return false;
	}
}

b0s()
{
	if (this.m1e)
	{
		return this.m1e.b0s.v8u();
	}
	else
	{
		return new e9u();
	}
}

f2l(b0s)
{
	this.a6t();
	this.m1e.b0s = b0s.v8u();
	this.e5s();
}

j0e(b8f)
{
	this.z3y = b8f.v8u();
	this.m1e = null;
}

b8f()
{
	let f2g = new w3p();
  return Object.assign(f2g, this.z3y);
}

}

function x3t(b8f)
{
  let p3e = new n1y();
  p3e.j0e(b8f);
  return p3e;
}
class w3p
{

constructor()
{
	this.g0w = b3g;
	this.n7n = e5q.m9a;
	this.f8g = b3g;
	this.o4t = e5q.m9a;
	this.l7z = [];
	this.d3j = [];
	this.z1o = [];
}

v8u()
{
	let f2g = new w3p();
	f2g.g0w = this.g0w;
	f2g.n7n = this.n7n;
	f2g.f8g = this.f8g;
	f2g.o4t = this.o4t;
	f2g.l7z = this.l7z.slice();
	f2g.d3j = this.d3j.slice();
	f2g.z1o = this.z1o.slice();
	return f2g;
}

v5p(x8g)
{
	if (
		this.g0w != x8g.g0w ||
		this.n7n != x8g.n7n ||
		this.f8g != x8g.f8g ||
		this.o4t != x8g.o4t)
	{
		return false;
	}
	else
	{
		for (const e5k of this.l7z)
		{
			let p0b = x8g.l7z.find(function(f4i){ return f4i == e5k; });
			if (p0b === undefined)
			{
				return false;
			}
		}
		for (const v8b of this.d3j)
		{
			let p0b = x8g.d3j.find(function(f4i){ return f4i == v8b; });
			if (p0b === undefined)
			{
				return false;
			}
		}
		return true;
	}
}

z4a(x8g)
{
	return !this.v5p(x8g);
}

m9a()
{
	return this.g0w == b3g;
}

v4k()
{
 	return this.n7n == e5q.j2x ||
		this.n7n == e5q.u2o;
}

o4f()
{
 	return this.n7n == e5q.d8i ||
		this.n7n == e5q.o0n;
}

d5c()
{
  return this.l7z.length > 0;
}

o4r()
{
	return this.n7n != this.o4t;
}

e4g()
{
	return this.g0w == b3g;
}

o0q(e5k)
{
	let p0b = this.l7z.find(function(f4i){ return f4i == e5k; });
	return (p0b !== undefined);
}


j5a(x4w)
{
	for (const e5k of x4w)
	{
		let p0b = this.l7z.find(function(f4i){ return f4i == e5k; });
		if (p0b === undefined)
		{
			return false;
		}
	}
	return true;
}


h7d(e5k)
{
	let p0b = this.z1o.find(function(f4i){ return f4i == e5k; });
	return (p0b !== undefined);
}

g9l(x4w)
{
	for (const e5k of x4w)
	{
		let p0b = this.z1o.find(function(f4i){ return f4i == e5k; });
		if (p0b === undefined)
		{
			return false;
		}
	}
	return true;
}

d3y()
{
  return this.l7z.length;
}

}

const i8p =
[
	b3g, b3g,	b3g, b3g,	b3g, b3g, b3g, b3g,	b3g, b3g, b3g, b3g, b3g, b3g,
	b3g, b3g,	b3g, b3g, b3g, b3g,	b3g, b3g,	b3g, b3g,	b3g, b3g,	b3g, b3g,
	b3g, b3g,	b3g, sq_1,	b3g, e8s,	b3g, b8l,	b3g, r5v,	b3g, q8i,	b3g, b3g,
	b3g, b3g,	y7q,  b3g,	y3m,  b3g,	c1e,  b3g,	u7k,  b3g,	a4f, b3g,	b3g, b3g,
	b3g, b3g,	b3g, x6d,	b3g, t4o,	b3g, c8o,	b3g, c3f,	b3g, v1h,	b3g, b3g,
	b3g, b3g,	c7h, b3g,	k0h, b3g,	p8b, b3g,	f6h, b3g,	h0t, b3g,	b3g, b3g,
	b3g, b3g,	b3g, v7w,	b3g, y6x,	b3g, m5q,	b3g, r7z,	b3g, d8g,	b3g, b3g,
	b3g, b3g, a1j, b3g,	c9x, b3g,	c5x, b3g,	w4y, b3g,	h0u, b3g,	b3g, b3g,
	b3g, b3g,	b3g, f2f,	b3g, j0l,	b3g, f7n,	b3g, y0n,	b3g, k7c,	b3g, b3g,
	b3g, b3g,	c0y, b3g,	r3t, b3g,	s4y, b3g,	e4p, b3g,	e9x, b3g,	b3g, b3g,
	b3g, b3g,	b3g, y5w,	b3g, b2e,	b3g, z7d,	b3g, v9u,	b3g, c3o,	b3g, b3g,
	b3g, b3g,	l3z, b3g,	z1f, b3g,	e5y, b3g,	s4l, b3g,	n4z, b3g,	b3g, b3g,
	b3g, b3g,	b3g, b3g,	b3g, b3g,	b3g, b3g,	b3g, b3g,	b3g, b3g,	b3g, b3g,
	b3g, b3g,	b3g, b3g,	b3g, b3g,	b3g, b3g,	b3g, b3g,	b3g, b3g,	b3g, b3g,
];

const d1l =
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

class x5i
{

constructor()
{
	this.y2e = [];
  this.x2z = Array(k0x).fill(b3g);
  this.j0s = Array(k0x).fill(b3g);
  this.q1h = Array(k0x).fill(e5q.m9a);
  this.r3s = Array(k0x).fill(false);
  this.f9y = 0;
	this.a4t = new o8k();
	this.c2w = 0;
	this.l4n = b3g;
	this.x0u = e5q.m9a;
	this.e6o = 0;
	this.l6p = 0;
	this.n8n = 0;
	this.c1b = 0;
	this.p0j = false;
}

w5u(x1l)
{
	this.a4t = x1l.v8u();
	this.r3s.fill(false);
  this.f9y = 0;
	let d1j = 14;
	if (this.a4t.b8p())
	{
		this.e6o = -(d1j + 1);
		this.l6p = -(d1j - 1);
		this.n8n = (d1j - 1);
		this.c1b = (d1j + 1);
	}
	else
	{
		this.e6o = (d1j + 1);
		this.l6p = (d1j - 1);
		this.n8n = -(d1j - 1);
		this.c1b = -(d1j + 1);
	}
}

y6n(g0w)
{
 	this.l4n = g0w;
	this.x0u = this.a4t.s0u(this.l4n);
	this.c2w = 0;
	if (
		(this.a4t.b8p() && this.x0u == e5q.j2x) ||
		(this.a4t.h1h() && this.x0u == e5q.d8i))
	{
		this.t1e(this.l4n);
	}
	else if (
		(this.a4t.b8p() && this.x0u == e5q.u2o) ||
		(this.a4t.h1h() && this.x0u == e5q.o0n))
	{
		this.f5y(this.l4n);
	}
}

t1e(e5k)
{
 	this.g8f(e5k, this.e6o);
	this.g8f(e5k, this.l6p);
}

g8f(g0w, k4o)
{
	let f8g = i8p[d1l[g0w] + k4o];
	if (f8g != b3g)
  {
    if (this.a4t.s7i(f8g))
  	{
	  	this.f4v(f8g);
  	}
  }
}

f5y(g0w)
{
	this.b4q(g0w, this.e6o);
	this.b4q(g0w, this.l6p);
	this.b4q(g0w, this.c1b);
	this.b4q(g0w, this.n8n);
}

b4q(g0w, k4o)
{
	let a0s = k4o;
	do
	{
		let f8g = i8p[d1l[g0w] + a0s];
		if (f8g == b3g)
    {
      break;
    }
    if (!this.a4t.s7i(f8g))
		{
			break;
		}
		this.f4v(f8g);
		a0s += k4o;
	} while (true);
}

y7b(g0w)
{
	this.l4n = g0w;
	this.x0u = this.a4t.s0u(this.l4n);
	this.c2w = 0;
	let v8b = this.a4t.s0u(this.l4n);
	if ((this.a4t.b8p() && this.x0u == e5q.j2x) ||
		(this.a4t.h1h() && this.x0u == e5q.d8i))
	{
		this.a4t.n2o(this.l4n, e5q.m9a);
		this.x5d(this.l4n);
	}
	else if (
		(this.a4t.b8p() && this.x0u == e5q.u2o) ||
		(this.a4t.h1h() && this.x0u == e5q.o0n))
	{
		this.a4t.n2o(this.l4n, e5q.m9a);
		this.l4o(this.l4n);
	}
	this.a4t.n2o(this.l4n, v8b);
}

x5d(g0w)
{
	let i1g = true;
	if (this.s2p(g0w, this.e6o))
	{
		i1g = false;
	}
	if (this.s2p(g0w, this.l6p))
	{
		i1g = false;
	}
	if (this.s2p(g0w, this.c1b))
	{
		i1g = false;
	}
	if (this.s2p(g0w, this.n8n))
	{
		i1g = false;
	}
	if (i1g)
	{
		this.l8c(g0w);
	}
}

s2p(g0w, k4o)
{
	let f7k = i8p[d1l[g0w] + k4o];
	if (f7k == b3g)
	{
		return false;
	}
	let f8g = i8p[d1l[g0w] + 2 * k4o];
	if (f8g == b3g)
	{
		return false;
	}
	if (!this.a4t.s7i(f8g))
	{
		return false;
	}
	if (this.r3s[f7k])
	{
		return false;
	}
	if (this.x0u == e5q.j2x)
	{
		if (!this.a4t.o4f(f7k))
		{
			return false;
		}
	}
	else
	{
		if (!this.a4t.v4k(f7k))
		{
			return false;
		}
	}
	this.x2z[this.c2w] = f7k;
	this.q1h[this.c2w] = this.a4t.s0u(f7k);
	this.j0s[this.c2w] = f8g;
	this.c2w++;
	let v8b = this.a4t.s0u(f7k);
	this.r3s[f7k] = true;
	this.x5d(f8g);
	this.r3s[f7k] = false;
	this.a4t.n2o(f7k, v8b);
	this.c2w--;
	return true;
}

l4o(g0w)
{
	let i1g = true;
	if (this.g7n(g0w, this.e6o))
	{
		i1g = false;
	}
	if (this.g7n(g0w, this.l6p))
	{
		i1g = false;
	}
	if (this.g7n(g0w, this.c1b))
	{
		i1g = false;
	}
	if (this.g7n(g0w, this.n8n))
	{
		i1g = false;
	}
	if (i1g)
	{
		this.l8c(g0w);
	}
}

g7n(c0p, k4o)
{
	let f7k = b3g;
	let a0s = k4o;
	do
	{
		f7k = i8p[d1l[c0p] + a0s];
		if (f7k == b3g)
		{
			return false;
		}
		if (this.r3s[f7k])
		{
			return false;
		}
		if (this.x0u == e5q.u2o)
		{
			if (this.a4t.o4f(f7k))
			{
				break;
			}
		}
		else
		{
			if (this.a4t.v4k(f7k))
			{
				break;
			}
		}
		if (!this.a4t.s7i(f7k))
		{
			return false;
		}
		a0s += k4o;
	} while (true);
	let x9m = false;
	do
	{
		a0s += k4o;
		let f8g = i8p[d1l[c0p] + a0s];
		if (f8g == b3g)
    {
      return x9m;
    }
    if (!this.a4t.s7i(f8g))
		{
			return x9m;
		}
		this.x2z[this.c2w] = f7k;
		this.q1h[this.c2w] = this.a4t.s0u(f7k);
		this.j0s[this.c2w] = f8g;
		this.c2w++;
		let w7e = this.a4t.s0u(f7k);
		this.r3s[f7k] = true;
		this.l4o(f8g);
		this.r3s[f7k] = false;
		this.a4t.n2o(f7k, w7e);
		this.c2w--;
		x9m = true;
	} while (true);
}

l8c(f8g)
{
	if (!this.c2w)
	{
		return;
	}
	if (this.c2w >= this.f9y)
	{
		if (this.c2w > this.f9y)
		{
      this.y2e.length = 0;
		}
		this.f4v(f8g);
	}
}

f4v(f8g)
{
	let d4v = new w3p();
	d4v.g0w = this.l4n;
	d4v.f8g = f8g;
	d4v.n7n = this.x0u;
	d4v.o4t = d4v.n7n;
	if (d4v.n7n == e5q.j2x)
	{
		if (h9g(d4v.f8g))
		{
			d4v.o4t = e5q.u2o;
		}
	}
	else if (d4v.n7n == e5q.d8i)
	{
		if (b0q(d4v.f8g))
		{
			d4v.o4t = e5q.o0n;
		}
	}
	for (let i = 0; i < this.c2w; i++)
	{
		d4v.l7z.push(this.x2z[i]);
		d4v.d3j.push(this.q1h[i]);
	}
	for (let i = 0; i < this.c2w - 1; i++)
	{
		d4v.z1o.push(this.j0s[i]);
	}

	if (this.p0j)
	{
		if (this.c2w >= 2)
		{
			let p0b = this.y2e.find(function(f4i)
			{
				if (f4i.v5p(d4v))
				{
					return true;
				}
			});
			if (p0b != undefined)
			{
				return;
			}
		}
	}
	this.f9y = d4v.d3y();
	this.y2e.push(d4v);
}

g9i(x1l, v8n)
{
	this.w5u(x1l);
	this.p0j = v8n;
	this.y2e.length = 0;

	for (const e5k of g4q)
	{
		this.y7b(e5k);
	}

	if (this.y2e.length === 0)
	{
		for (const e5k of g4q)
		{
			this.y6n(e5k);
		}
	}
	return this.y2e;
}

f5s(x1l)
{
	this.w5u(x1l);
	this.p0j = true;
	this.y2e.length = 0;

	for (const e5k of g4q)
	{
		this.y7b(e5k);
	}
	return this.y2e.length > 0;
}

w4r(x1l, f7k)
{
	this.w5u(x1l);
	this.p0j = true;
	this.y2e.length = 0;

	for (const e5k of g4q)
	{
		this.y7b(e5k);
	}
	for (const b8f of this.y2e)
	{
		if (b8f.o0q(f7k))
		{
			return true;
		}
	}
	return false;
}

z1o(x1l, d4v)
{
	this.w5u(x1l);
	this.p0j = true;
	this.y2e.length = 0;

	this.y7b(d4v.g0w);
	let u6b = [];
  let l7z = d4v.l7z;
	for (const f7k of l7z)
	{
		u6b.push(f7k);
	}
	for (const b8f of this.y2e)
	{
		if (b8f.f8g != d4v.f8g)
		{
			continue;
		}
		if (!b8f.j5a(u6b))
		{
			continue;
		}
		return b8f.z1o.slice();
	}
	return [];
}

p5g(x1l, d4v)
{
	this.w5u(x1l);
	this.p0j = true;
	this.y2e.length = 0;

	this.y7b(d4v.g0w);
	let b5h = 0;
	for (const b8f of this.y2e)
	{
		if (b8f.f8g == d4v.f8g)
		{
			b5h++;
		}
	}
	return b5h > 1;
}

} 


function h5y(x1l)
{
	let r4z = new x5i();
	return r4z.g9i(x1l, true);
}

function a1y(x1l, g0w)
{
	let r4z = new x5i();
	let y5s = r4z.g9i(x1l, true);
	let s5o = [];
	for (const b8f of y5s)
	{
		if (b8f.g0w == g0w)
		{
			s5o.push(b8f);
		}
	}
	return s5o;
}

function j7z(x1l, f8g)
{
	let r4z = new x5i();
	let y5s = r4z.g9i(x1l, true);
	let k7y = [];
	for (const b8f of y5s)
	{
		if (b8f.f8g == f8g)
		{
			k7y.push(b8f);
		}
	}
	return k7y;
}

function t8y(x1l, g0w, f8g)
{
	let r4z = new x5i();
	let y5s = r4z.g9i(x1l, true);
	let z3w = [];
	for (const b8f of y5s)
	{
		if (b8f.g0w == g0w && b8f.f8g == f8g)
		{
			z3w.push(b8f);
		}
	}
	return z3w;
}

function b6a(x1l, g0w, f8g, l7z)
{
	let r4z = new x5i();
	let y5s = r4z.g9i(x1l, true);
	let g9i = [];
	for (const b8f of y5s)
	{
		if (b8f.g0w != g0w)
		{
			continue;
		}
		if (b8f.f8g != f8g)
		{
			continue;
		}
		if (!b8f.o0q(l7z))
		{
			continue;
		}
		g9i.push(b8f);
	}
	return g9i;
}

function f8d(x1l, g0w, f8g, z1o)
{
	let r4z = new x5i();
	let y5s = r4z.g9i(x1l, false);
	let g9i = [];
	for (const b8f of y5s)
	{
		if (b8f.g0w != g0w)
		{
			continue;
		}
		if (b8f.f8g != f8g)
		{
			continue;
		}
		if (!b8f.g9l(z1o))
		{
			continue;
		}
		
		let m3w = false;
		for (const m of g9i)
		{
			if (m.v5p(d4v))
			{
				m3w = true;
				break;
			}
		}
		if (!m3w)
		{
			g9i.push(b8f);
		}
	}
	return g9i;
}

function f0c(x1l, d4v)
{
	let r4z = new x5i();
	return r4z.z1o(x1l, d4v);
}

function f5s(x1l)
{
	let r4z = new x5i();
	return r4z.f5s(x1l);
}

function w4r(x1l, f7k)
{
	let r4z = new x5i();
	return r4z.w4r(x1l, f7k);
}

function p5g(x1l, d4v)
{
	let r4z = new x5i();
	return r4z.p5g(x1l, d4v);
}

function h0g(x1l)
{
	let r4z = new x5i();
	if (r4z.f5s(x1l))
	{
		return false;
	}
	let q7d = x1l.v8u();
	q7d.h8h();
	return !r4z.f5s(q7d);
}

function q0z()
{
}
/* voor dammen niet nodig */
const o9q =
{
  g7h : 0,  
	n6r : 1,
	t2f : 2,
};

function x1r(x1l, d4v)
{
 	let s5h = '';
	if (d4v.m9a())
	{
		s5h += "--";
	}
  else
  {
    s5h = z5w(d4v.g0w);
    if (d4v.l7z.length > 0)
    {
      s5h += 'x';
    }
    else
    {
      s5h += '-';
    }
    if (d4v.l7z.length > 2)
    {
      if (p5g(x1l, d4v))
      {
        let z1o = f0c(x1l, d4v);
        for (const e5k of z1o)
        {
          s5h += z5w(e5k);
          s5h += 'x';
        }
        s5h += z5w(d4v.f8g);
      }
      else
      {
        s5h += z5w(d4v.f8g);
      }
    }
    else
    {
      s5h += z5w(d4v.f8g);
    }
  }
	return s5h;
}


class p9o
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.fontSize = 0;
}

}

function x4a(u5j,
  x9n,
  z3v,
  coordinate,
  coordinatesType,
  x3x,
  s2i,
  marginSize) 
{
 	let o8m = (coordinatesType == l8m.a3y ||
		coordinatesType == l8m.r7i ||
		coordinatesType == l8m.h5g);
	let d1o = (coordinatesType == l8m.a3y ||
		coordinatesType == l8m.r7i ||
		coordinatesType == l8m.l5d);
	let y3f =	(coordinatesType == l8m.a3y ||
		coordinatesType == l8m.h5g ||
		coordinatesType == l8m.s7w);
	let i2w = (coordinatesType == l8m.a3y ||
		coordinatesType == l8m.l5d ||
		coordinatesType == l8m.s7w);

	u5j.font = (coordinate.fontSize).toString() + "px serif";
	u5j.fillStyle = x3x;
  let d9i = coordinate.height;

	if (d1o)
	{
  	let o6t = 0;
		if (s2i)
		{
			o6t = k0x - c4f / 2;
		}
		else
		{
			o6t = c4f / 2 + 1;
		}
    for (let j6b = 0; j6b < c4f; j6b++)
		{
 			if (j6b % 2)
			{
				continue;
			}
			let y0m = u5j.measureText(o6t).width;
			let top = x9n.i1m + 1 + (j6b + 1) * z3v.k1p;
			top += (z3v.k1p - d9i) / 2 + d9i;
			let k5l = x9n.q7j - marginSize + (marginSize - y0m) / 2;
      u5j.fillText(o6t, k5l, top);
			if (s2i)
			{
				o6t -= c4f;
			}
			else
			{
				o6t += c4f;
			}
		}
	}

	if (y3f)
	{
		let o6t = 0;
		if (s2i)
		{
			o6t = k0x - c4f / 2 + 1;
		}
		else
		{
			o6t = c4f / 2;
		}
    for (let j6b = 0; j6b < c4f; j6b++)
		{
 			if (j6b % 2)
			{
				continue;
			}
      let y0m = u5j.measureText(o6t).width;
			let top = x9n.i1m + 1 + j6b * z3v.k1p;
			top += (z3v.k1p - d9i) / 2 + d9i;
			let k5l = x9n.q7j + x9n.x7l() +
        (marginSize - y0m) / 2;
      u5j.fillText(o6t, k5l, top);
			if (s2i)
			{
				o6t -= c4f;
			}
			else
			{
				o6t += c4f;
			}
		}
	}

	if (o8m)
	{
		let o6t = 0;
		if (s2i)
		{
			o6t = k0x;
		}
		else
		{
			o6t = 1;
		}
    for (let n1u = 0; n1u < c4f; n1u++)
		{
 			if (n1u % 2)
			{
				continue;
			}
			let left = x9n.q7j + 1 + (n1u + 1) * z3v.k1p;
      let y0m = u5j.measureText(o6t).width;
			let k5l = left + (z3v.k1p - y0m) / 2;
			let t4r = x9n.i1m - (marginSize - d9i) / 2 - 2;
      
      u5j.fillText(o6t, k5l, t4r);
			if (s2i)
			{
				o6t--;
			}
			else
			{
				o6t++;
			}
		}
	}

	if (i2w)
	{
		let o6t = 0;
		if (s2i)
		{
			o6t = c4f / 2;
		}
		else
		{
			o6t = k0x - c4f / 2 + 1;
		}
    for (let n1u = 0; n1u < c4f; n1u++)
		{
			if (n1u % 2)
			{
				continue;
			}
			let left = x9n.q7j + 1 + n1u * z3v.k1p;
      let y0m = u5j.measureText(o6t).width;
			let k5l = left + (z3v.k1p - y0m) / 2;
			let t4r = x9n.i1m + x9n.c6g() +
        (marginSize - d9i) / 2 + d9i - 2;
      
      u5j.fillText(o6t, k5l, t4r);
			if (s2i)
			{
				o6t--;
			}
			else
			{
				o6t++;
			}
		}
	}
}

function r5n(u5j, fontSize)
{
	let k3c = new p9o();
	k3c.fontSize = fontSize;
	k3c.height = fontSize;
	k3c.width = fontSize;
	return k3c;
}
function u1e(u5j, rect, v8b)
{
 	u5j.lineWidth = "1";
  if (v8b == e5q.j2x || v8b == e5q.u2o)
  {
    u5j.fillStyle = "white";
    u5j.strokeStyle = "black";
  }
  else
  {
    u5j.fillStyle = "black";
    u5j.strokeStyle = "white";
  }
  let k5r = 80;
  let w5c = rect.x7l() + 1;
 	let q7b = ((0.19 * k5r) / 100) * w5c;
  let g9c = rect.q7j + w5c / 2;
  let f4x = (w5c / 4);
  let r6w = (w5c / 2.4);
	if (v8b == e5q.j2x || v8b == e5q.d8i)
	{
    let q7u = rect.i1m + w5c / 1.8;
    u5j.beginPath();
    u5j.ellipse(g9c, q7u, f4x, r6w, Math.PI / 2, 0, 2 * Math.PI);
    u5j.fill();
    u5j.stroke();
		q7u -= q7b;
    u5j.beginPath();
    u5j.ellipse(g9c, q7u, f4x, r6w, Math.PI / 2, 0, 2 * Math.PI);
    u5j.fill();
    u5j.stroke();
	}
	else if (v8b == e5q.u2o || v8b == e5q.o0n)
	{
    let q7u = rect.i1m + w5c / 1.55;
    u5j.beginPath();
    u5j.ellipse(g9c, q7u, f4x, r6w, Math.PI / 2, 0, 2 * Math.PI);
    u5j.fill();
    u5j.stroke();
		q7u -= q7b;
    u5j.beginPath();
    u5j.ellipse(g9c, q7u, f4x, r6w, Math.PI / 2, 0, 2 * Math.PI);
    u5j.fill();
    u5j.stroke();
		q7u -= q7b;
    u5j.beginPath();
    u5j.ellipse(g9c, q7u, f4x, r6w, Math.PI / 2, 0, 2 * Math.PI);
    u5j.fill();
    u5j.stroke();
	}
}

function t9b(u5j, rect, v8b)
{
 	u5j.lineWidth = "1";
  if (v8b == e5q.j2x || v8b == e5q.u2o)
  {
    u5j.fillStyle = "white";
    u5j.strokeStyle = "black";
  }
  else
  {
    u5j.fillStyle = "black";
    u5j.strokeStyle = "white";
  }

  let k5r = 80;
  let w5c = rect.x7l() + 1;
 	let q7b = ((0.19 * k5r) / 100) * w5c;
  let g9c = rect.q7j + w5c / 2;
  let f4x = (w5c / 4);
  let r6w = (w5c / 2.4);


  let q7u = rect.i1m + w5c / 2; 
  let s7l = w5c * 0.4;

  u5j.beginPath();
  u5j.arc(g9c, q7u, s7l, 0, Math.PI * 2);
  u5j.closePath();
  u5j.fill();
  u5j.stroke();

	if (r7w(v8b))
	{
		if (v8b == e5q.u2o)
		{
      u5j.fillStyle = "black";
      u5j.strokeStyle = "black";
		}
		else
		{
      u5j.fillStyle = "white";
      u5j.strokeStyle = "white";
		}
    s7l = w5c * 0.1;
    u5j.beginPath();
    u5j.arc(g9c, q7u, s7l, 0, Math.PI * 2);
    u5j.closePath();
    u5j.fill();
    u5j.stroke();
	}
}

function t4q(u5j, rect, v8b)
{
  if (v8b == e5q.m9a) return;
  if (v2k.t7o == 0)
  {
    u1e(u5j, rect, v8b);
  }
  else
  {
    t9b(u5j, rect, v8b);
  }
}


function e3o(t7o)
{
}
function t3d(f4i)
{
	let x1l = new o8k();
	let f3e = f4i.length;
	if (f3e < 6) 
	{
		return x1l;
	}
	if (f4i[0] != 'W' && f4i[0] != 'B')
	{
		return x1l;
	}
	if (f4i[0] == 'W')
	{
		x1l.d8b();
	}
	else if (f4i[0] == 'B')
	{
		x1l.l6q();
	}
	let j0v = f4i.indexOf(":W");
	let s4n = f4i.indexOf(":B");
	let w3v = f4i.indexOf(".");
  if (w3v == -1)
	{
		w3v = f4i.length;
	}
	if (j0v == -1 || s4n == -1 || w3v <= s4n)
	{
		return x1l;
	}
	let w = f4i.substr(j0v + 2, s4n - (j0v + 2));
	let b = f4i.substr(s4n + 2, w3v - (s4n + 2));
	let i9e = w.split(",");
	let y7s = b.split(",");

	for (const s of i9e)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let h0p = s.substr(1, 2);
					let e5k = r7g(h0p, 0);
					if (e5k)
					{
						x1l.n2o(e5k-1, e5q.u2o);
					}
				}
			}
			else
			{
				let e5k = r7g(s, 0);
				if (e5k)
				{
					x1l.n2o(e5k-1, e5q.j2x);
				}
			}
		}
	}
	for (const s of y7s)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let h0p = s.substr(1, 2);
					let e5k = r7g(h0p, 0);
					if (e5k)
					{
						x1l.n2o(e5k-1, e5q.o0n);
					}
				}
			}
			else
			{
				let e5k = r7g(s, 0);
				if (e5k)
				{
					x1l.n2o(e5k-1, e5q.d8i);
				}
			}
		}
	}
	return x1l;
}

function p4e(x1l, i6g)
{
  let c3m = i6g.length;

 	
	if (i6g[0] == 'Z' || (c3m == 2 && i6g == "--") || (c3m == 4 && i6g == "null"))
	{
		return new w3p();
	}

	let x4w = [];
	let i = 0;
	let f3e = i6g.length;
	while (i < f3e)
	{
		let h2p = i;
		let q0n = 0;
		let q4j = i6g[i];
		while (i < f3e && q4j != '-' && q4j != 'x' && q4j != ':')
		{
			i++;
			q0n++;
			if (i < f3e)
			{
				q4j = i6g[i];
			}
		}
		let l7d = i6g.substr(h2p, q0n);
    x4w.push(v9t(l7d));
		i++; 
	}
	let a0u = x4w.length;
	if (a0u < 2)
	{
		return false;
	}
	else if (a0u == 2)
	{
		let g0w = x4w[0];
		let f8g = x4w[1];
		let g9i = t8y(x1l, g0w, f8g);
		if (g9i.length == 1)
		{
			return g9i[0];
		}
		return false;
	}
	else
	{
		let g0w = x4w[0];
		let f8g = x4w[1];
		let l7z = [];
		for (let i = 2; i < a0u; i++)
		{
			l7z.push(x4w[i]);
		}
		let g9i = b6a(x1l, g0w, f8g, l7z);
		if (g9i.length == 1)
		{
			return g9i[0];
		}
		g0w = x4w[0];
		f8g = x4w[x4w.length - 1];
		let z1o = [];
		for (let i = 1; i < a0u - 1; i++)
		{
			z1o.push(x4w[i]);
		}
		g9i = f8d(x1l, g0w, f8g, z1o);
		if (g9i.length == 1)
		{
			return g9i[0];
		}
		return false;
	}
}

function e5i()
{
  let o4i = [
    "images/board/BoardBackground.png",
    "images/board/DarkSquare.png",
    "images/board/LightSquare.png",
    "images/board/Margin.png"
  ].map(path => x7q + path);
  
  return o4i;
}
class b5n
{

constructor()
{
	this.s5m = '';
}

v8u()
{
	let o4h = new b5n();
	o4h.s5m = this.s5m;
	return o4h;
}

m9a()
{
	return this.s5m.length == 0;
}

z4d()
{
	return this.s5m;
}

}


const y2m =
{
	g7h : 0,
	e7i : 1,
	u2k: 2,
	w9i: 3,
	x4s: 4,
	b5z: 5,
	t3s: 6,
	h7n: 7,
	b7y: 8,
	x2e: 9,
	e3c: 10,
	q7n: 11,
	x0d: 12,
	e6b: 13,
	f3z: 14,
	q3y: 15,
	j3b: 16,
	i3m: 17,
	k0b: 18,
	f1j: 19,
	t9a: 20,
	f9i: 21,
	l5o: 22,
	d9n: 23,
	a1r: 24,
	s3a: 25,
	g5u: 26,
	i6o: 27,
	c0k: 28,
	f0k: 29,
	x2h: 30,
	c8n: 31,
	w9z: 32,
	v5x: 33,
	h0i: 34,
	r1u: 35,
	x7v: 36,
	d5n: 37,
	s9q: 38,
	z5l: 39,
	q3r: 40,
	c9t: 41,
	s8i: 42,
	x3p: 43,
	w3b: 44,
	c0l: 45,
	y7u: 46,
	g6o: 47,
	y6a: 48,
	m7e: 49,
	k6f: 50,
	y9e: 51,
	q6z: 52,
	z0k: 53,
	o5b: 54,
	o2d: 55,
	j0m: 56,
	k7l: 57,
	e5f: 58,
	q8t: 59,
	q0t: 60,
	p5k: 61,
	z4y: 62,
	r1a: 63,
	q9s: 64,
	u9c: 65,
	a5m: 66,
	d1a: 67,
	b8s: 68,
	f2e: 69,
	q6i: 70,
	q7h: 71,
	n9q: 72,
	z6v: 73,
	e1f: 74,
	j2t: 75,
	d6n: 76,
	i6d: 77,
	a1e: 78,
	h3d: 79,
	a1v: 80,
	q4c: 81,
	d0n: 82,
	b9l: 83,
	v2d: 84,
	z9k: 85,
	l4h: 86,
	j2m: 87,
	f5e: 88,
	f3x: 89,
	c5f: 90,
	h6r: 91,
	s0k: 92,
	x1i: 93,
	w2r: 94,
	k1w: 95,
	p3r: 96,
	t3v: 97,
	z1d: 98,
	a0e: 99,
	z4p: 100,
	n7a: 101,
	a0b: 102,
	f5x: 103,
	x3e: 104,
	o4l: 105,
	x0j: 106,
	z1m: 107,
	p7l: 108,
	e1j: 109,
	k6j: 110,
	v8d: 111,
	e7m: 112,
	f1k: 113,
	l4f: 114,
	v0j: 115,
	o7o: 116,
	j5x: 117,
	o6h: 118,
	f8e: 119,
	n8s: 120,
	g0g: 121,
	k3x: 122,
	j0x: 123,
	j5b: 124,
	w5k: 125,
	y4a: 126,
	f7o: 127,
	x1c: 128,
	c5y: 129,
	e1l: 130,
	u5z: 131,
	q8g: 132,
	p7h: 133,
	n3a: 134,
	p0w: 135,
	u9e: 136,
	z6x: 137,
	q0r: 138,
	e2m: 139,
	m9k: 140,
	l1y: 141,
	r2e: 142,
	c4n: 143,
	m5x: 144,
	y7j: 145,
	e8p: 146,
	t9j: 147,
	z3s: 148,
	i7t: 149,
	u9t: 150,
	y1u: 151,
	i8b: 152,
	s6s: 153,
	o3j: 154,
	c9s: 155,
	x7m: 156,
	u6v: 157,
	d8l: 158,
	v4u: 159,
	l1i: 160,
	r4r: 161,
	p5a: 162,
	z7m: 163,
	h0q: 164,
	j8j: 165,
	d8q: 166,
	r3k: 167,
	r1l: 168,
	r9e: 169,
	m2b: 170,
	n3h: 171,
	a7a: 172,
	b0e: 173,
	t6x: 174,
	e1k: 175,
	j4k: 176,
	a3e: 177,
	r7j: 178,
	r7y: 179,
	c3a: 180,
	t5v: 181,
	l5e: 182,
	t9d: 183,
	g5y: 184,
	j4t: 185,
	d2w: 186,
	l1s: 187,
	o1q: 188,
	d7r: 189,
	r4y: 190,
	p6u: 191,
	p3f: 192,
	l5t: 193,
	h8d: 194,
	v5z: 195,
	r3v: 196,
	c2f: 197,
	z3p: 198,
	n4w: 199,
	j4q: 200,
	j3m: 201,
	u5b: 202,
	h6d: 203,
	j9h: 204,
	t5j: 205,
	m7p: 206,
	i4c: 207,
	y3x: 208,
	d7i: 209,
	o9l: 210,
	q6p: 211,
	n4a: 212,
	a8d: 213,
	x0a: 214,
	y9a: 215,
	k7a: 216,
	d7w: 217,
	j7v: 218,
	p4n: 219,
	p2k: 220,
	z3n: 221,
	p8l: 222,
	c2e: 223,
	m0f: 224,
	f1i: 225,
	h9k: 226,
	s7n: 227,
	u2e: 228,
	d7h: 229,
	d6s: 230,
	j6l: 231,
	s3y: 232,
	i9p: 233,
	q8y: 234,
	t8r: 235,
	z5u: 236,
	m5a: 237,
	o6a: 238,
	w7i: 239,
	f4p: 240,
	y3r: 241,
	q4y: 242,
	g1q: 243,
	x5g: 244,
	y7c: 245,
	e4x: 246,
	g8e: 247,
	b6f: 248,
	y0s: 249,
	b5c: 250,
	z4b: 251,
	e3i: 252,
	a5z: 253,
	w3q: 254,
	t1y: 255,
	d5o: 256,
	b9d: 257,
	j3i: 258,
	k5h: 259
};


const x0v = 0;
const m0s = 500;

function c8d(s5h)
{
	if (s5h.length != 3)
	{
		return 0;
	}
	let g2o = s5h[0];
	let k7z = s5h[1];
	let o8d = s5h[2];

	let p6h = 0;
	if (g2o == 'A' || g2o == 'a') p6h = 0;
	else if (g2o == 'B' || g2o == 'b') p6h = 1;
	else if (g2o == 'C' || g2o == 'c') p6h = 2;
	else if (g2o == 'D' || g2o == 'd') p6h = 3;
	else if (g2o == 'E' || g2o == 'e') p6h = 4;
	else return 0;
	if (isNaN(k7z) || isNaN(o8d))
	{
		return 0;
	}
	return p6h * 100 + r7g(s5h.substr(1, 2), 0) + 1;
}

function h7o(u1y)
{
	if (u1y)
	{
		let div = Math.trunc((u1y - 1) / 100);
		let s4r = (u1y - 1) % 100;
		let w5y = 'A';
		if (div == 0) w5y = 'A';
		else if (div == 1) w5y = 'B';
		else if (div == 2) w5y = 'C';
		else if (div == 3) w5y = 'D';
		else if (div == 4) w5y = 'E';
		return w5y + s4r.toString().padStart(2, '0');
	}
	else
	{
		return "";
	}
}
class j6w
{

constructor()
{
	this.j0p = 0;
	this.a6d = 0;
	this.c4v = 0;
}

v8u()
{
	let w8u = new j6w();
	w8u.t8l = this.j0p;
	w8u.e8v = this.a6d;
	w8u.u2w = this.c4v;
	return w8u;
}

m9a()
{
	return this.c4v == 0 && this.a6d == 0 && this.j0p == 0;
}

q8a()
{
	let u2w = this.c4v.toString().padStart(4, '0');
	let e8v = this.a6d.toString().padStart(2, '0');
	let t8l = this.j0p.toString().padStart(2, '0');
	return u2w + e8v + t8l;
}

p3p(o6w, s5h)
{
	let f3e = s5h.length;
	if (!f3e)
	{
		this.c4v = 0;
		this.a6d = 0;
		this.j0p = 0;
	}
	else if (o6w == "dd-mm-yyyy" || o6w == "dd.mm.yyyy")
	{
  	if (f3e == 4)
		{
      this.c4v = r7g(s5h.substr(1, 4), 0);
		}
		else if (f3e == 10)
		{
			this.j0p = r7g(s5h.substr(0, 2), 0);
			this.a6d = r7g(s5h.substr(3, 2), 0);
			this.c4v = r7g(s5h.substr(6, 4), 0);
		}
	}
	else if (o6w == "yyyy-mm-dd" || o6w == "yyyy.mm.dd")
	{
  	if (f3e == 4)
		{
      this.c4v = r7g(s5h.substr(1, 4), 0);
		}
		else if (f3e == 10)
		{
			this.j0p = r7g(s5h.substr(8, 2), 0);
			this.a6d = r7g(s5h.substr(5, 2), 0);
			this.c4v = r7g(s5h.substr(0, 4), 0);
		}
	}
	else if (o6w == "dd-mm-yy" || o6w == "dd.mm.yy")
	{
		if (f3e == 8)
		{
			this.j0p = r7g(s5h.substr(0, 2), 0);
			this.a6d = r7g(s5h.substr(3, 2), 0);
			this.c4v = r7g(s5h.substr(6, 2), 0) + 2000;
		}
	}
}

toString(o6w)
{
	let s5h = '';
	if (this.m9a())
	{
	}
	else if (o6w == "list")
	{
		let u2w = this.c4v.toString().padStart(4, '0');
		let e8v = this.a6d.toString().padStart(2, '0');
		let t8l = this.j0p.toString().padStart(2, '0');
		if (this.j0p)
		{
			s5h = t8l + "-" + e8v + "-" + u2w;
		}
		else if (this.a6d)
		{
			s5h = e8v + "-" + u2w;
		}
		else if (this.c4v)
		{
			s5h = u2w;
		}
	}
	else if (o6w == "dd-mm-yyyy")
	{
		let u2w = this.c4v.toString().padStart(4, '0');
		let e8v = this.a6d.toString().padStart(2, '0');
		let t8l = this.j0p.toString().padStart(2, '0');
		s5h = t8l + "-" + e8v + "-" + u2w;
	}
	else if (o6w == "dd.mm.yyyy")
	{
		let u2w = this.c4v.toString().padStart(4, '0');
		let e8v = this.a6d.toString().padStart(2, '0');
		let t8l = this.j0p.toString().padStart(2, '0');
		s5h = t8l + "." + e8v + "." + u2w;
	}
	else if (o6w == "yyyy-mm-dd")
	{
		let u2w = this.c4v.toString().padStart(4, '0');
		let e8v = this.a6d.toString().padStart(2, '0');
		let t8l = this.j0p.toString().padStart(2, '0');
		s5h = u2w + "-" + e8v + "-" + t8l;
	}
	else if (o6w == "yyyy.mm.dd")
	{
		let u2w = this.c4v.toString().padStart(4, '0');
		let e8v = this.a6d.toString().padStart(2, '0');
		let t8l = this.j0p.toString().padStart(2, '0');
		s5h = u2w + "." + e8v + "." + t8l;
	}
	else if (o6w == "yyyymmdd")
	{
		let u2w = this.c4v.toString().padStart(4, '0');
		let e8v = this.a6d.toString().padStart(2, '0');
		let t8l = this.j0p.toString().padStart(2, '0');
		s5h = u2w + e8v + t8l;
	}
	else if (o6w == "yyyy")
	{
		let u2w = this.c4v.toString().padStart(4, '0');
		s5h = u2w;
	}
	return s5h;
}

}

class i8o
{

constructor()
{
	this.a3h = new w6u();
	this.s6n = new j3a();
	this.v5t = 0;
	this.q0u = 0;
	this.v3d = "";
  this.i1k = y2m.g7h;
}

v8u()
{
	let y0x = new i8o();
	y0x.a3h = this.a3h.v8u();
	y0x.s6n = this.s6n.v8u();
	y0x.v5t = this.v5t;
	y0x.q0u = this.q0u;
	y0x.v3d = this.v3d;
  y0x.i1k = this.i1k;
	return y0x;
}

m9a()
{
	return this.a3h.m9a() &&
		this.s6n.m9a() &&
		this.v5t == 0 &&
		this.q0u == 0 &&
		this.v3d == "" &&
 		this.i1k == y2m.g7h;
}

}


class e5o
{

constructor()
{
	this.w4g = new i8o();
	this.z8i = new i8o();
	this.s3f = new l7y();
	this.g1t = new b5n();
	this.m9w = new e1x();
	this.v3d = new f0w();
	this.q8a = new j6w();
	this.p6q = o8u.g7h;
	this.u1y = 0;
	this.e5p = 0;
	this.d7c = 0;
	this.d1g = new u2s();
  this.id = new v1a();
}

v8u()
{
	let p5j = new e5o();
	p5j.w4g = this.w4g.v8u();
	p5j.z8i = this.z8i.v8u();
	p5j.s3f = this.s3f.v8u();
	p5j.g1t = this.g1t.v8u();
	p5j.m9w = this.m9w.v8u();
	p5j.v3d = this.v3d.v8u();
	p5j.q8a = this.q8a.v8u();
	p5j.p6q = this.p6q;
	p5j.u1y = this.u1y;
	p5j.e5p = this.e5p;
	p5j.d7c = this.d7c;
	p5j.d1g = this.d1g.v8u();
  p5j.id = this.id.v8u();
	return p5j;
}

m9a()
{
	return this.w4g.m9a() &&
		this.z8i.m9a() &&
		this.s3f.m9a() &&
		this.g1t.m9a() &&
		this.m9w.m9a() &&
		this.v3d.m9a() &&
		this.q8a.m9a() &&
		this.p6q == o8u.g7h &&
		this.u1y == 0 &&
		this.e5p == 0 &&
		this.d7c == 0 &&
		this.d1g.m9a();
}

e2e()
{
	let s5h = '';
	if (this.d7c)
	{
		s5h = this.e5p.toString() + "." + this.d7c.toString();
	}
	else if (this.e5p)
	{
		s5h = this.e5p.toString();
	}
	return s5h;
}

}


class v1a
{

constructor()
{
	this.g3j = '';
}

v8u()
{
	let v0d = new v1a();
	v0d.g3j = this.g3j;
	return v0d;
}

toString()
{
  return this.g3j;
}

}


class f0w
{

constructor()
{
	this.v3d = '';
}

v8u()
{
	let k6i = new f0w();
	k6i.v3d = this.v3d;
	return k6i;
}

m9a()
{
	return this.v3d.length == 0;
}

z4d()
{
	return this.v3d;
}

}


class w6u
{

constructor()
{
	this.h9j = '';
	this.k6q = '';
}

v8u()
{
	let d7o = new w6u();
	d7o.h9j = this.h9j;
	d7o.k6q = this.k6q;
	return d7o;
}

m9a()
{
	return this.k6q.length == 0 &&
		this.h9j.length == 0;
}

s5m()
{
	if (!this.k6q.length == 0 && !this.h9j.length == 0)
	{
		return this.k6q + "," + this.h9j;
	}
	else if (this.k6q.length == 0 && this.h9j.length == 0)
	{
		return "";
	}
	else if (this.h9j.length == 0)
	{
		return this.k6q;
	}
	else
	{
		return this.h9j;
	}
}

t7l()
{
	return this.s5m().replace(/,/g, " ");
}

b7w()
{
	return this.m9g(1).replace(/,/g, " ");
}

m9g(i6b)
{
	if (this.k6q.length == 0)
	{
		if (this.h9j.length == 0 || i6b < 1)
		{
			return "";
		}
		else
		{
			return this.h9j.substring(0, i6b);
		}
	}
	else
	{
		if (this.h9j.length == 0 || i6b < 1)
		{
			return this.k6q;
		}
		else
		{
			return this.k6q + "," + this.h9j.substring(0, i6b);
		}
	}
}

z3f(z9z)
{
	let s5h = z9z.trim();
	let z4w = s5h.lastIndexOf(",");
	if (z4w != -1)
	{
		this.k6q = s5h.substr(0, z4w).trim();
		this.h9j = s5h.substr(z4w+1, s5h.length).trim();
		if (this.h9j.length != 0)
		{
			if (this.h9j.charAt(0).toLowerCase() == this.h9j.charAt(0))
			{
				this.k6q += ",";
				this.k6q += this.h9j;
				this.h9j = "";
			}
		}
	}
	else
	{
		this.k6q = s5h;
		this.h9j = "";
	}
}

z4d()
{
	return this.s5m();
}

}

const o8u =
{
	g7h : 0,
	h1z : 1,
	u4n : 2,
	g2k : 3,
	q6q : 4,
	l4s : 5,
	d6z : 6,
	c6n : 7,
	d9d : 8,
	m4u : 9,
	l4d : 10,
	o6r : 11,
	i8y : 12,
	l1d : 13,
	b3t : 14,
	u2h : 15
};


function j9b(p6q)
{
	switch (p6q)
	{
		case o8u.h1z:
			return "2-0";
		case o8u.g2k:
			return "1-1";
		case o8u.u4n:
			return "0-2";
		default:
			return "";
	}
}
const u4d =
{
	q7i : 0,
	w2h : 1,
	b5u : 2
};

const c9o =
[
	[ u4d.q7i,   "High" ],
	[ u4d.w2h, "Middle" ],
	[ u4d.b5u,    "Low" ]
];

class e1x
{

constructor()
{
	this.v3d = '';
	this.y1y = '';
	this.t5h = new j6w();
	this.h2j = new j6w();
	this.s0p = 0;
	this.s6z = u4d.q7i;
}

v8u()
{
	let e9r = new e1x();
	e9r.v3d = this.v3d;
	e9r.y1y = this.y1y;
	e9r.t5h = this.t5h.v8u();
	e9r.h2j = this.h2j.v8u();
	e9r.s0p = this.s0p;
	e9r.s6z = this.s6z;
	return e9r;
}

m9a()
{
	return this.v3d.length == 0 &&
		this.y1y.length == 0 &&
		this.t5h.m9a() &&
		this.h2j.m9a() &&
		this.s0p == 0 &&
		this.s6z == u4d.q7i;
}

z4d()
{
	let s5h = this.v3d;
	if (this.y1y.length)
	{
		if (s5h.length)
		{
			s5h += " ";
		}
		s5h += this.y1y;
	}
	return s5h;
}

}


const t2b =
{
	l2r : 0,
	e6j : 1,
	w2k : 2,
	x5k : 3,
	f2o : 4,
	d2d : 5,
	d2t : 6,
	y1r : 7,
	l4r : 8,
	b7c : 9,
	j5y : 10,
	i8l : 11,
	o4z : 12,
	s7m : 13,
	q6r : 14,
	q8e : 15
};

class u2s
{

constructor()
{
	this.value = 0;
}

t2c(value)
{
	this.value = value;
}

v8u()
{
	let c2q = new u2s();
	c2q.value = this.value;
	return c2q;
}

m9a()
{
	return this.value == 0;
}

y9c()
{
	return this.value != 0;
}

g7h()
{
	return this.value == 0;
}

q0n()
{
	let h5b = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.a9w(i))
		{
			h5b++;
		}
	}
	return h5b;
}

h9n()
{
	this.value = 0;
}

set(m8o, k0p)
{
	if (k0p)
	{
		this.value |= (1 << m8o);
	}
	else
	{
		this.value &= ~(1 << m8o);
	}
}

a9w(m8o)
{
	return (this.value & (1 << m8o)) != 0;
}

c0u()
{
	return this.value;
}

}

function h5p(u2w)
{
	return u2w.toString().padStart(4, '0');
}

class j3a
{

constructor()
{
	this.s5m = '';
	this.f6y = 0;
	this.u2w = 0;
	this.l4l = false;
	this.i1k = y2m.g7h;
}

v8u()
{
	let p9c = new j3a();
	p9c.s5m = this.s5m;
	p9c.f6y = this.f6y;
	p9c.u2w = this.u2w;
	p9c.l4l = this.l4l;
	p9c.i1k = this.i1k;
	return p9c;
}

m9a()
{
	return this.s5m.length == 0 &&
		this.f6y == 0 &&
		this.u2w == 0 &&
		this.l4l == false &&
		this.i1k == y2m.g7h;
}

j9o()
{
	let s5h = this.s5m;
	if (this.f6y)
	{
		if (s5h.length)
		{
			s5h += " ";
		}
		s5h += this.f6y;
	}
	return s5h;
}

z4d()
{
	let s5h = this.s5m;
	if (this.f6y)
	{
		if (s5h.length)
		{
			s5h += " ";
		}
		s5h += this.f6y;
	}
	if (s5h.length)
	{
		s5h += " ";
	}
	s5h += this.o6c();
	return s5h;
}


e0v()
{
	let s5h = this.s5m;
	if (this.f6y > 1)
	{
		s5h += " ";
		s5h += this.f6y;
	}
	return s5h;
}

o6c()
{
	let s5h = '';
	if (this.l4l)
	{
		let m6h = h5p(this.u2w);
		let s9w = h5p(this.u2w + 1);
		let d0p = m6h + "/" + s9w.substr(2, 2);
		s5h = d0p;
	}
	else
	{
		s5h = h5p(this.u2w);
	}
	return s5h;
}

}

class s0y
{

constructor()
{
	this.e6a = 0;
	this.g6r = 0;
	this.b0a = 0;

}

}

function l6c(s5h, e9d, q0u)
{
	q0u.e6a = 0;
	q0u.g6r = 0;
	q0u.b0a = 0;

	let f3e = s5h.length;
	if (!f3e || s5h == "?")
	{
		return;
	}
	let i = 0;
	for (; i < f3e; i++)
	{
		if (!isNaN(s5h[i]))
		{
			break;
		}
	}
	let o9x = '';
	for (; i < f3e; i++)
	{
		if (isNaN(s5h[i]))
		{
			break;
		}
		o9x += s5h[i].toString();
	}
	for (; i < f3e; i++)
	{
		if (!isNaN(s5h[i]))
		{
			break;
		}
	}
	let m1p = '';
	for (; i < f3e; i++)
	{
		if (isNaN(s5h[i]))
		{
			break;
		}
		m1p += s5h[i].toString();
	}
	for (; i < f3e; i++)
	{
		if (!isNaN(s5h[i]))
		{
			break;
		}
	}
	let m7d = '';
	for (; i < f3e; i++)
	{
		if (isNaN(s5h[i]))
		{
			break;
		}
		m7d += s5h[i].toString();
	}
	let w8i = r7g(o9x, 0);
	let r9j = r7g(m1p, 0);
	let c0x = r7g(m7d, 0);
	if (
		w8i < 0 || w8i > e9d ||
		r9j < 0 || r9j > 59 ||
		c0x < 0 || c0x > 59)
	{
		w8i = 0;
		r9j = 0;
		c0x = 0;
	}
	q0u.e6a = w8i;
	q0u.g6r = r9j;
	q0u.b0a = c0x;
}

function a1f(s5h)
{
	if (s5h.length == 0)
	{
		return 0;
	}
	else
	{
		let q0u = new s0y();
		l6c(s5h, 9, q0u);
		return q0u.e6a * 60 + q0u.g6r;
	}
}


const o7f =
{
	g7h : 0,
	i4g : 1,
	l8d : 2,
	s3f : 3,
	m2w : 4,
	c6j : 5,
	o1a : 6,
	m6l : 7
};

const k2e =
[
	[ o7f.g7h, 			 	""                   ],
	[ o7f.i4g,  		 	"SingleGame"         ],
	[ o7f.l8d,  		 	"Match"              ],
	[ o7f.s3f,  "RoundRobin"         ],
	[ o7f.m2w,   		"SwissSystem"        ],
	[ o7f.c6j,    "Knockout"           ],
	[ o7f.o1a,"Simul"              ],
	[ o7f.m6l,"ScheveningenSystem" ]
];

class l7y
{

constructor()
{
	this.v3d = '';
	this.b9j = '';
	this.s0o = new j6w();
	this.h3i = new j6w();
	this.u6z = v8z.n6r;
	this.l7v = 0;
	this.i1k = y2m.g7h;
	this.type = o7f.g7h;
	this.g6w = 0;
	this.r0f = false;
	this.c9b = false;
	this.f6o = false;
	this.w7k = false;
}

v8u()
{
	let i1a = new l7y();
	i1a.v3d = this.v3d;
	i1a.b9j = this.b9j;
	i1a.s0o = this.s0o.v8u();
	i1a.h3i = this.h3i.v8u();
	i1a.u6z = this.u6z;
	i1a.l7v = this.l7v;
	i1a.i1k = this.i1k;
	i1a.type = this.type;
	i1a.g6w = this.g6w;
	i1a.r0f = this.r0f;
	i1a.c9b = this.c9b;
	i1a.f6o = this.f6o;
	i1a.w7k = this.w7k;
	return i1a;
}

m9a()
{
	return this.v3d.length == 0 &&
		this.b9j.length == 0 &&
		this.s0o.m9a() &&
		this.h3i.m9a() &&
		this.u6z == v8z.n6r &&
		this.l7v == 0 &&
		this.i1k == y2m.g7h &&
		this.type == o7f.g7h &&
		!this.g6w &&
		!this.r0f &&
		!this.c9b &&
		!this.f6o &&
		!this.w7k;
}

z4d()
{
	let s5h = this.v3d;
	if (this.b9j.length)
	{
		if (s5h.length)
		{
			s5h += " ";
		}
		s5h += this.b9j;
	}
	if (s5h.length)
	{
		s5h += " ";
	}
	let u2w = this.s0o.u2w.toString().padStart(4, '0');
	s5h += u2w;
	return s5h;
}

}



const v8z =
{
	n6r : 0,
	q9a : 1,
	m0v : 2,
	i2u : 3
};

const r9v =
[
	[ v8z.n6r, "Normal" ],
	[ v8z.q9a,  "Rapid"  ],
	[ v8z.m0v,  "Blitz"  ],
	[ v8z.i2u,   "Corr"   ]
];

function u0g(u6z)
{
	return r9v[u6z][1];
}

function s3v()
{
	let y5i = [];
	for (const u6z of r9v)
	{
		y5i.push(u6z[1]);
	}
	return y5i;
}

class v0r
{

constructor()
{
	this.c1g = '';
	this.q2p = '';
	this.e1i = g5x.g7h;
	this.style = j6q.g7h;
	this.value = w9y.g7h;
	this.b0s = new e9u();
	this.p0d = new s7c();
	this.c5z = new x6l();
	this.o2c = c2u.g7h;
	this.v8t = false;
	this.z1j = false;
  this.e3t = false;
}

v8u()
{
	let k9v = new v0r();
	k9v.c1g = this.c1g;
	k9v.q2p = this.q2p;
	k9v.e1i = this.e1i;
	k9v.style = this.style;
	k9v.value = this.value;
	k9v.b0s = this.b0s.v8u();
	k9v.p0d = this.p0d.v8u();
	k9v.c5z = this.c5z.v8u();
	k9v.o2c = this.o2c;
	k9v.v8t = this.v8t;
	k9v.z1j = this.z1j;
 	k9v.e3t = this.e3t;
	return k9v;
}

m9a()
{
	return this.c1g.length == 0 &&
		this.q2p.length == 0 &&
		this.e1i == g5x.g7h &&
		this.style == j6q.g7h &&
		this.value == w9y.g7h &&
		this.b0s.m9a() &&
		this.p0d.m9a() &&
		this.c5z.m9a() &&
		this.o2c == c2u.g7h &&
		this.v8t == false &&
		this.z1j == false &&
 		this.e3t == false;
}

}

const c2u =
{
	g7h : 0,
	g3i : 1,
	w2h : 2,
	w7r : 3
};

const v9v =
{
	g9u : 0,
	y2h : 1,
	z8c : 2,
	q0d : 3,
	m9n : 4,
	c1i : 5,
	c4e : 6,
	u2h : 7,
	r4l : 8,
	v0e : 9,
	c1n : 10,
	j4i : 11,
	a2a : 12,
	g4e : 13,
	m1m : 14,
	o8c : 15
};

class e9u
{

constructor()
{
	this.value = 0;
}

t2c(value)
{
	this.value = value;
}

v8u()
{
	let y1i = new e9u();
	y1i.value = this.value;
	return y1i;
}

m9a()
{
	return this.value == 0;
}

y9c()
{
	return this.value != 0;
}

g7h()
{
	return this.value == 0;
}

q0n()
{
	let h5b = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.a9w(i))
		{
			h5b++;
		}
	}
	return h5b;
}

h9n()
{
	this.value = 0;
}

set(m8o, k0p)
{
	if (k0p)
	{
		this.value |= (1 << m8o);
	}
	else
	{
		this.value &= ~(1 << m8o);
	}
}

a9w(m8o)
{
	return (this.value & (1 << m8o)) != 0;
}

c0u()
{
	return this.value;
}

}

const g5x =
{
	g7h : 0,
	r5k : 1,
	s1p : 2,
	z0h : 3,
	z4u : 4,
	g0r : 5,
	f5p : 6
};

const q5f =
[
	[ g5x.g7h,     		  ""   ],
	[ g5x.r5k,       		  "RR" ],
	[ g5x.s1p, 		  "&#8979;"  ],
	[ g5x.z0h, 		  "&#8804;"  ],
	[ g5x.z4u,  "="  ],
	[ g5x.g0r,   "&#9651;"  ],
	[ g5x.f5p,  "&#9661;"  ]
];

function u3t(e1i)
{
	return q5f[e1i][1];
}


const j6q =
{
	g7h : 0,
	p1d : 1,
	m3d : 2,
	v5g : 3,
	y0l : 4,
	u4s : 5,
	i9a : 6,
	k8u : 7,
	g8o : 8
};

const o6j =
[
	[ j6q.g7h,     		"" 	 ],
	[ j6q.p1d,       	"!"  ],
	[ j6q.m3d, 					"?"  ],
	[ j6q.v5g,	"!?" ],
	[ j6q.y0l,	 		"?!" ],
	[ j6q.u4s,  	"!!" ],
	[ j6q.i9a, 			"??" ],
	[ j6q.k8u, 		"&#8857;"  ],
	[ j6q.g8o, 		"&#9723;"  ]
];

function p2r(style)
{
	return o6j[style][1];
}


class r2o
{

constructor()
{
	this.d4v = new n1y();
	this.s3u = null;
	this.a9g = null;
	this.y1o = null;
	this.t3g = null;
  this.f6y = 0; 
}

j0g(d4v)
{
	this.d4v = d4v.v8u();
}

j0e(x1l, f6t, g5e, k8q)
{
	this.d4v.j0e(x1l, f6t, g5e, k8q);
}

}

class o2p
{

constructor()
{
	this.n1f = null;
	this.d4v = null;
}

v5p(x8g)
{
	return this.n1f == x8g.n1f;
}

z4a(x8g)
{
	return !this.v5p(x8g);
}

v8u()
{
	let e5e = new o2p();
  e5e.n1f = this.n1f;
  e5e.d4v = this.d4v;
	return e5e;
}

}


class l8k
{

constructor()
{
	this.n3k = new o8k();
 	this.d1y = null;
	this.l7o = 1;
	this.n3k.n4s();
  this.x1d = new v0r();
}

r3g(x8g)
{
	this.e0q(x8g.n3k, x8g.l7o);
	this.x1d = x8g.x1d.v8u();
	this.d1y = this.k5j(x8g.d1y);
}

v8u()
{
	let o5y = new l8k();
	o5y.r3g(this);
	return o5y;
}

e0q(y9l, e7s)
{
	this.n3k = y9l.v8u();
	this.l7o = e7s;
	this.x1d = new v0r();
	this.d1y = null;
}

e7s()
{
	return this.l7o;
}

y9l()
{
	return this.n3k.v8u();
}

j3r(z4w)
{
  let r5w = this.l3n(z4w) + 1;
	if (r5w)
	{
		return this.l7o +
			Math.floor((r5w - 1 + this.n3k.h1h()) / 2);
	}
	else
	{
		return this.l7o;
	}
}

l3n(z4w)
{
	let r5w = 0;
	if (!z4w.n1f)
	{
		return 0;
	}
	let u9r = z4w.n1f;
	while (1)
	{
		r5w++;
		if (!u9r.a9g)
		{
			let n7v = u9r;
			while (n7v.y1o)
			{
				n7v = n7v.y1o;
			}
			if (!n7v.a9g)
			{
				break;
			}
		}
		if (u9r.a9g)
		{
			u9r = u9r.a9g;
		}
		else
		{
			let n7v = u9r;
			while (n7v.y1o)
			{
				n7v = n7v.y1o;
			}
			u9r = n7v.a9g;
		}
	}
	return r5w;
}


j6o()
{
	let f3t = 0;
	let w5n = this.d1y;
	while (w5n)
	{
		f3t++;
		w5n = w5n.s3u;
	}
	return f3t;
}

p2a()
{
	return this.d1y != null;
}

i2x(z4w)
{
	return z4w.v5p(this.b2u());
}

t5q(z4w)
{
	if (z4w.n1f)
	{
		return z4w.n1f.s3u == null;
	}
	else if (this.d1y)
	{
		return false;
	}
	else
	{
		return true;
	}
}

p3n(z4w)
{
	if (!this.i2x(z4w))
	{
		if (z4w.n1f.a9g)
		{
			z4w.n1f = z4w.n1f.a9g;
			z4w.d4v = z4w.n1f.d4v;
		}
		else
		{
			let u9r = z4w.n1f;
			while (u9r.y1o)
			{
				u9r = u9r.y1o;
			}
			u9r = u9r.a9g;
			z4w.n1f = u9r;
      if (z4w.n1f)
      {
  			z4w.d4v = z4w.n1f.d4v;
      }
      else
      {
        z4w.d4v = null;
      }
		}
	}
}

u3j(z4w)
{
	if (!this.t5q(z4w))
	{
		z4w.n1f = this.b3a(z4w);
		z4w.d4v = z4w.n1f.d4v;
	}
}

p3c(z4w, c2h)
{
	let s2u = this.g3s(z4w);
	if (c2h < 0 || c2h >= s2u)
	{
		return;
	}
	let n7v = this.b3a(z4w);
	let i = 0;
	while (i != c2h)
	{
		i++;
		n7v = n7v.t3g;
	}
	z4w.n1f = n7v;
	z4w.d4v = z4w.n1f.d4v;
}

g5g(z4w)
{
	if (!z4w.n1f)
	{
		return this.l7o;
	}
	let r5w = this.l3n(z4w);
	if (r5w)
	{
		return this.l7o +
      Math.floor((r5w - 1 + this.n3k.h1h()) / 2);
	}
	else
	{
		return this.l7o;
	}
}

b2u()
{
	let z4w = new o2p();
	z4w.n1f = null;
	z4w.d4v = null;
	return z4w;
}

t4u(z4w)
{
	if (!this.t5q(z4w))
	{
		let u9r = this.b3a(z4w);
		while (true)
		{
			if (!u9r.s3u)
			{
				break;
			}
			u9r = u9r.s3u;
		}
		z4w.n1f = u9r;
		z4w.d4v = z4w.n1f.d4v;
	}
}

b8x(n9r)
{
	let z4w = this.b2u();
	if (n9r > 0)
	{
    this.n9r = 0;
		this.r3f(z4w, n9r);
		return z4w;
	}
	else
	{
		return z4w;
	}
}

r3f(z4w, n9r)
{
	while (true)
	{
		if (this.t5q(z4w))
		{
			return false;
		}
		let s2u = this.g3s(z4w);
		if (s2u > 1)
		{
			let e6v = z4w.v8u();
			for (let i = 1; i < s2u; i++)
			{
				this.p3c(z4w, i);
				this.n9r++;
				if (this.n9r == n9r)
				{
					return true;
				}
				if (this.r3f(z4w, n9r))
				{
					return true;
				}
        z4w.n1f = e6v.n1f;
        z4w.d4v = e6v.d4v;
			}
		}
		this.u3j(z4w);
		this.n9r++;
		if (this.n9r == n9r)
		{
			return true;
		}
	}
}

e3h(z4w)
{
	if (!z4w.n1f)
	{
		return 0;
	}
	else
	{
		return z4w.n1f.f6y;
	}
}

l8q(z4w)
{
	let g9i = [];
 	if (!z4w.n1f)
  {
		return g9i;
	}
	let u9r = z4w.n1f;
	while (1)
	{
		g9i.push(u9r);
		if (!u9r.a9g)
		{
			let n7v = u9r;
			while (n7v.y1o)
			{
				n7v = n7v.y1o;
			}
			if (!n7v.a9g)
			{
				break;
			}
		}
		if (u9r.a9g)
		{
			u9r = u9r.a9g;
		}
		else
		{
			let n7v = u9r;
			while (n7v.y1o)
			{
				n7v = n7v.y1o;
			}
			u9r = n7v.a9g;
		}
	}
	return g9i.reverse();
}

c8c(z4w)
{
	let g9i = this.l8q(z4w);
	let s2u = this.g3s(z4w);
	if (s2u == 0)
	{
		return g9i;
	}
	let h5r = this.q5v(z4w, 0);
	while (h5r)
	{
		g9i.push(h5r);
		h5r = h5r.s3u;
	}
	return g9i;
}

g3s(z4w)
{
	let h5r = this.b3a(z4w);
	if (!h5r)
	{
		return 0;
	}
	let s2u = 1;
	while (h5r.t3g)
	{
		s2u++;
		h5r = h5r.t3g;
	}
	return s2u;
}

a6c(z4w, u0j)
{
	if (this.i2x(z4w))
	{
		this.d1y = u0j;
		z4w.n1f = u0j;
		z4w.d4v = z4w.n1f.d4v;
	}
	else
	{
		z4w.n1f.s3u = u0j;
		u0j.a9g = z4w.n1f;
		z4w.n1f = u0j;
		z4w.d4v = z4w.n1f.d4v;
	}
}

a8u(z4w, u0j)
{
	let n7v = this.b3a(z4w);
	while (n7v.t3g)
	{
		n7v = n7v.t3g;
	}
	n7v.t3g = u0j;
	u0j.y1o = n7v;

	z4w.n1f = u0j;
	z4w.d4v = z4w.n1f.d4v;
}

f4v(z4w, d4v)
{
	let u0j = new r2o();
 	u0j.j0g(d4v);
	if (this.t5q(z4w))
	{
		this.a6c(z4w, u0j);
	}
	else
	{
		this.a8u(z4w, u0j);
	}
}

f7p(z4w)
{
	let n7v = this.q5v(z4w, 1);
	if (!n7v)
	{
		return false;
	}
	while (n7v)
	{
		let w5n = n7v.s3u;
		while (w5n)
		{
			if (w5n.t3g)
			{
				return false;
			}
			w5n = w5n.s3u;
		}
		n7v = n7v.t3g;
	}
	return true;
}

j3z()
{
	let w5n = this.d1y;
	while (w5n)
	{
		if (w5n.t3g)
		{
			return true;
		}
		w5n = w5n.s3u;
	}
	return false;
}

l3r()
{
	if (!this.x1d.m9a())
	{
		return true;
	}
	if (this.j3z())
	{
		return true;
	}
	let w5n = this.d1y;
	while (w5n)
	{
		if (w5n.d4v.l3r())
		{
			return true;
		}
		w5n = w5n.s3u;
	}
	return false;
}

b3a(z4w)
{
	if (z4w.n1f)
	{
		return z4w.n1f.s3u;
	}
	return this.d1y;
}

q5v(z4w, c2h)
{
	let i = 0;
	let n7v = this.b3a(z4w);
	while (n7v && i != c2h)
	{
		n7v = n7v.t3g;
		i++;
	}
	return n7v;
}

k5j(n7v)
{
	let k2h = n7v;
	let m7i = null;
	let u0j = null;
	let c7p = null;
	while (k2h)
	{
		u0j = new r2o();
		u0j.j0g(k2h.d4v);
		if (m7i)
		{
			m7i.s3u = u0j;
			u0j.a9g = m7i;
		}
		else
		{
			c7p = u0j;
		}
		m7i = u0j;
		if (k2h.t3g && !k2h.y1o)
		{
			let a7i = k2h.t3g;
			let z7g = m7i;
			while (a7i)
			{
				let g6q = this.k5j(a7i);
				z7g.t3g = g6q;
				g6q.y1o = z7g;
				z7g = g6q;
				a7i = a7i.t3g;
			}
		}
		k2h = k2h.s3u;
	}
	return c7p;
}

a9d()
{
	return this.x1d;
}

x0b()
{
	return this.x1d.c1g;
}

b6i(p2p)
{
	this.x1d.c1g = p2p;
}

r1o()
{
	return !this.x1d.p0d.m9a();
}

g7d(p0d)
{
	this.x1d.p0d = p0d.v8u();
}

s9u()
{
	return this.x1d.p0d;
}

q3e()
{
	return !this.x1d.c5z.m9a();
}

d5g(c5z)
{
	this.x1d.c5z = c5z.v8u();
}

n8y()
{
	return this.x1d.c5z;
}

l0g()
{
	return !this.x1d.b0s.m9a();
}

x4d(b0s)
{
	this.x1d.b0s = b0s.v8u();
}

j6s()
{
	return this.x1d.b0s;
}

h1t(n9r)
{
  if (n9r == 0)
  {
    return true;
  }
	let w5n = this.d1y;
	while (w5n)
	{
    if (w5n.f6y == n9r)
    {
      return true;
    }
		w5n = w5n.s3u;
	}
	return false;
}

y2n()
{
	let z4w = this.b2u();
	this.n9r = 0;
	this.s9v(z4w);
}

s9v(z4w)
{
	while (true)
	{
		if (this.t5q(z4w))
		{
			return;
		}
		let s2u = this.g3s(z4w);
		if (s2u > 1)
		{
			let e6v = z4w.v8u();
			for (let i = 1; i < s2u; i++)
			{
				this.p3c(z4w, i);
				this.n9r++;
        z4w.n1f.f6y = this.n9r;
				this.s9v(z4w);
        z4w.n1f = e6v.n1f;
        z4w.d4v = e6v.d4v;
			}
		}
		this.u3j(z4w);
  	this.n9r++;
    z4w.n1f.f6y = this.n9r;
	}
}

x1l(z4w)
{
	let x1l = this.n3k.v8u();
	if (!z4w.n1f)
	{
		return x1l;
	}
	let g9i = this.f1a(z4w);
  for (const d4v of g9i)
	{
		x1l.u3j(d4v.b8f());
	}
	return x1l;
}

f1a(z4w)
{
	let g9i = [];
 	if (!z4w.n1f)
  {
		return g9i;
	}
	let u9r = z4w.n1f;
	while (1)
	{
		g9i.push(u9r.d4v);
		if (!u9r.a9g)
		{
			let n7v = u9r;
			while (n7v.y1o)
			{
				n7v = n7v.y1o;
			}
			if (!n7v.a9g)
			{
				break;
			}
		}
		if (u9r.a9g)
		{
			u9r = u9r.a9g;
		}
		else
		{
			let n7v = u9r;
			while (n7v.y1o)
			{
				n7v = n7v.y1o;
			}
			u9r = n7v.a9g;
		}
	}
	return g9i.reverse();
}


p3a()
{
	this.x1d = new v0r();
	this.d1y = null; 
  
}


l8u()
{
	let g9i = [];
	let w5n = this.d1y;
	while (w5n)
	{
		g9i.push(w5n.d4v);
		w5n = w5n.s3u;
	}
	return g9i;
}

}

const w9y =
{
	g7h : 0,
	q6q : 1,
	l4s : 2,
	d6z : 3,
	c6n : 4,
	d9d : 5,
	m4u : 6,
	l4d : 7,
	o6r : 8,
	i8y : 9,
	l1d : 10,
	b3t : 11,
	u2h : 12,
	r6f : 13,
	u5v : 14,
	q0d : 15
};

const s3i =
[
	[ w9y.g7h,     						  ""    ],
	[ w9y.q6q,        "+&#8211;" ],
	[ w9y.l4s, 						"&#177;" ],
	[ w9y.d6z,		"&#10866;"  ],
	[ w9y.c6n, 							"="   ],
	[ w9y.d9d,  							"&#8734;" ],
	[ w9y.m4u,  	"&#10865;"],
	[ w9y.l4d, 						"&#8723;" ],
	[ w9y.o6r, 				"&#8211;+"],
	[ w9y.i8y,						"&#8773;" ],
	[ w9y.l1d, 						"&#8646;" ],
	[ w9y.b3t,  						"&#8593;" ],
	[ w9y.u2h, 								"&#8594;" ],
	[ w9y.r6f, 					"&#8853;" ],
	[ w9y.u5v,		"&#10227;"],
	[ w9y.q0d, 								"N"   ]
];

function e6g(value)
{
	return s3i[value][1];
}


const b4f =
{
	l4z : 0,
	u2j : 1,
	n8g : 2
};

const n8u =
{
	g7h : 0,
	u5o : 1,
	d6i : 2,
	h8a : 3,
	b1i : 4,
	e1i : 5,
	q2p : 6,
	c1g : 7,
	z7f : 8,
	b0s : 9,
	v8t : 10,
	z1j : 11
};

/*
TO DO
- Aanpassen voor tekst after van z1q daar kan dia inzitten (zie c++)
- Vette tekst en niet vette u5o testen bij wel/niet MultiPV
*/
class c8l
{

constructor()
{
	this.u5m = new o9d();
  this.h7i = true;
  this.y7m = false;
  this.x7c = true;
  this.l1o = true;
  this.g5p = b4f.l4z;
  this.f8a = false;
  this.u0k = true;
 	this.i4u = true;
 	this.v1u = -1;
  this.o7x = false;
  this.x3o = false;
	this.g4o = false;
	this.z4v = true;
  this.m1e = false;
  this.n8h = false;
  this.q0q = 0;
	this.x7e = true;
  this.w5z = null;
 	this.o1c = n8u.g7h;
}

w1d(g9i)
{
	this.w5z = g9i;
 	let b2u = this.w5z.b2u();
	let y9l = this.w5z.y9l();
	this.o1c = n8u.g7h;
	this.z4v = true;
	this.x3o = false;
	this.g4o = false;
	this.o7x = false;
	this.m1e = this.w5z.l3r();
	this.x7e = true;
	this.q0q = 0;

	if (this.f8a)
	{
		this.h7c(n8u.d6i);
		this.w5x();
	}
	else
	{
    
    if (this.g5p == b4f.u2j ||
      (this.g5p == b4f.n8g && !y9l.a5b()))
    {
      if (this.l1o)
      {
        this.n8v(b2u, y9l, q0q);
        this.z4v = true;
      }
    }

    this.h7c((this.m1e && !this.e3t) ? n8u.u5o : n8u.d6i);
    this.q2j(this.m1e);
    this.f4v(b2u, "");
    this.a7n(b2u, this.w5z.a9d().c1g);

    if (this.w5z.p2a())
    {
      this.v2o();
    }
   	this.h7c(n8u.g7h);
   	this.e6u();
  }
}

w5x()
{
	let z4w = this.w5z.b2u();
	let g3s = this.w5z.g3s(z4w);
	for (let i = 0; i < g3s; i++)
	{
    this.u5m.z1b('<div class="variation-row">');
		z4w = this.w5z.b2u();
  	let x1l = this.w5z.y9l();
	  let g5g = this.w5z.e7s();
		this.w5z.p3c(z4w, i);
		this.z4v = true;
		let r6z = true;
		let d4v = z4w.d4v;
		let q2p = d4v.q2p();
		if (q2p.length)
		{
			this.z0m(z4w, q2p);
		}
		this.h7c(n8u.d6i);
		do
		{
			if (r6z)
			{
				z4w.d4v.w0h();
			}
			this.p7b(z4w, x1l, g5g);
			if (r6z)
			{
				z4w.d4v.y5a(q2p);
				r6z = false;
			}
			if (this.w5z.t5q(z4w))
			{
				break;
			}
			x1l.u3j(z4w.d4v);
			if (x1l.b8p())
			{
				g5g++;
			}
			this.w5z.u3j(z4w);
		} while (true);
    this.u5m.z1b('<div');
	}
}

v2o()
{
  let a0m = 0;
 	let z4w = this.w5z.b2u();
	let x1l = this.w5z.y9l();
  let g5g = this.w5z.e7s();

	let l9i = 100000;
	if (this.v1u == 0)
	{
		return;
	}
	if (this.v1u != -1)
	{
		l9i = this.v1u;
	}
	let e8e = g5g + l9i - 1;
	this.z4v = true;
	while (true)
	{
		let g3s = this.w5z.g3s(z4w);
		while (g5g <= e8e && !this.w5z.t5q(z4w))
		{
      this.w5z.u3j(z4w);
    	this.h7c((this.m1e && !this.e3t) ? n8u.u5o : n8u.d6i);
			this.p7b(z4w, x1l, g5g);
			x1l.u3j(z4w.d4v.b8f());
 			if (x1l.b8p())
			{
				g5g++;
			}
			if (this.i4u && g3s > 1)
			{
				break;
			}
			g3s = this.w5z.g3s(z4w);
		}
		if (!g3s || g5g > e8e)
		{
			return;
		}
    x1l.p3n(z4w.d4v.b8f());
		if (x1l.h1h())
		{
			g5g--;
		}
    this.w5z.p3n(z4w);
		for (let i = 1; i < g3s; i++)
		{
      a0m++;
      let v4e = "<span class=\"tdline\" data-level=\"";
      v4e += a0m.toString();
      v4e += "\">";
      this.u5m.z1b(v4e);
			this.n5a(n8u.h8a);
			this.c3l("[", true);
			let e1i = '';
      this.z0r(z4w, x1l, g5g, i, e1i, a0m);
			this.h7c(n8u.h8a);
			this.c3l("]", true);
      this.u5m.z1b("</span>");
      a0m--;
     	this.h7c((this.m1e && !this.e3t) ? n8u.u5o : n8u.d6i);
		}
		this.n5a(this.o1c);
    this.w5z.u3j(z4w);
    x1l.u3j(z4w.d4v.b8f());
		if (x1l.b8p())
		{
			g5g++;
		}
		this.z4v = true;
	}
}

p7b(z4w, x1l, g5g)
{
	if (this.w5z.i2x(z4w))
	{
		return;
	}
 	let d4v = z4w.d4v;

	let s5h = '';
  let f0l = false;
  if (this.h7i)
	{
		if (d4v.o4f())
		{
			if (!this.w5z.i2x(z4w))
			{
        let e2y = z4w.v8u();
        this.w5z.p3n(e2y);
        if (e2y.d4v)
        {
  				if (e2y.d4v.f5c())
	  			{
		  			f0l = true;
			  	}
        }
			}
		}
  }
	if (this.x3o)
	{
		s5h = "(";
		this.x3o = false;
		if (this.h7i && d4v.z9p())
		{
			this.c3l("(", true);
			let q1s = this.o1c;
			this.z0m(z4w, d4v.q2p());
			this.h7c(q1s);
			s5h = "";
      f0l = true;
		}
	}
	else
	{
		if (this.h7i && d4v.z9p())
		{
  	  let q1s = this.o1c;
	  	this.z0m(z4w, d4v.q2p());
		  this.h7c(q1s);
      f0l = true;
    }
	}
	if (d4v.q5m())
	{
		s5h += u3t(d4v.e1i());
	}
	let u8s = d4v.v4k();
	if (u8s)
	{
    s5h += g5g;
		s5h += '.';
	}
	else
	{
		if (this.z4v || f0l)
		{
 			s5h += g5g;
			s5h += "...";
		}
	}
	s5h += x1r(x1l, d4v.b8f(), false);
	if (d4v.f6e())
	{
		s5h += p2r(d4v.style());
	}
	if (d4v.i5o())
	{
		s5h += e6g(d4v.value());
	}
	if (d4v.e5b())
	{
		s5h += " End Of Game";
  }
	if (this.g4o || this.o7x)
	{
		if (this.w5z.t5q(z4w) && (!this.h7i || !d4v.f5c()))
		{
			if (this.g4o)
			{
				s5h += ")";
				this.g4o = false;
			}
			else
			{
				s5h += ";";
				this.o7x = false;
			}
		}
	}
	this.f4v(z4w, s5h);
	this.z4v = false;

	if (d4v.l3w())
	{
		let c1g = d4v.c1g();
    let d5e = c1g.indexOf("[#]");
		let b3k = c1g.substring(0, d5e);
	  let p6n = c1g.substring(d5e + 3);
		if (b3k.length)
		{
			this.a7n(z4w, b3k);
		}
		this.q0q++;
		if (this.l1o)
		{
			this.n5a(n8u.g7h);
      this.n8v(z4w, x1l, this.q0q);
			this.z4v = true;
		}
		if (p6n.length)
		{
			this.a7n(z4w, p6n);
		}
	}
	else
	{
		this.a7n(z4w, d4v.c1g());
	}

  if (d4v.e5b())
	{
    this.u5m.e7n("<div>&nbsp;</div>"); 
   	this.e6u();
 	  this.q2j(false); 
 	  this.n8h = true;
	}
}

h7c(g9j)
{
	if (g9j != this.o1c)
	{
		this.a1p();
		this.o1c = g9j;
		this.i8a();
	}
}

i8a()
{
}

a1p()
{
	this.o1c = n8u.g7h;
}

n5a(g9j)
{
	this.a1p();
	this.o1c = n8u.g7h;
  
  
  
  
  this.u5m.e7n("<br>"); 
	if (g9j != n8u.g7h)
	{
		this.o1c = g9j;
		this.i8a();
	}
}

n8v(z4w, x1l, f6y)
{
  this.x7e = true;
	let v4e = "<span class=\"tddia\" movenr=\"";
  v4e += this.w5z.e3h(z4w).toString();
	v4e += "\">",
	this.u5m.z1b(v4e);
	this.u5m.z1b("<canvas></canvas>");
	this.u5m.z1b("</span>");
	this.z4v = true;
}

n9a(z4w, p2p)
{
  this.r8u(z4w);
	this.i5y(p2p);
  this.p0y();
}

z0r(l2s, p8a, g5g, c2h, e1i, a0m)
{
  let z4w = l2s.v8u();
  let x1l = p8a.v8u();

	if (e1i.length)
	{
		this.h7c(n8u.e1i);
		let k1e = e1i;
		k1e += ")";
    let v4e = "<span class=\"tdprefix\">";
    this.u5m.z1b(v4e);
  	this.c3l(k1e);
    this.u5m.z1b("</span>");
	}
	let g3s = 0;
	let b5h = 1;
  this.w5z.p3c(z4w, c2h);
	this.z4v = true;
	do
	{
		this.h7c(n8u.h8a);
		this.p7b(z4w, x1l, g5g);
		if (g3s > 1)
		{
      this.w5z.p3n(z4w);
      this.l5v(z4w, x1l, g5g);
      this.w5z.u3j(z4w);
			this.z4v = true;
		}
		x1l.u3j(z4w.d4v.b8f());
		if (x1l.b8p())
		{
			g5g++;
		}
		g3s = this.w5z.g3s(z4w);
		if (g3s == 0)
		{
			break;
		}
		if (g3s > 1)
		{
			if (!this.w5z.f7p(z4w))
			{
				break;
			}
		}
    this.w5z.u3j(z4w);
		b5h++;
	} while (true);

	if (this.w5z.t5q(z4w))
	{
		return;
	}

	let t6j = e1i.length;
	let k1e = '';
	let c6b = 1;
	for (let i = 0; i < g3s; i++)
	{
		if (t6j == 0)
		{
      k1e = String.fromCharCode('A'.charCodeAt() + c6b - 1);
		}
		else if (t6j == 1)
		{
      k1e = e1i;
      k1e += c6b;
		}
		else if (t6j == 2)
		{
      k1e = e1i;
      k1e += String.fromCharCode('a'.charCodeAt() + c6b - 1);
		}
		else
		{
      k1e = e1i;
      k1e += c6b;
		}

    let v4e = "<span class=\"tdline\" data-level=\"";
    v4e += a0m.toString();
    v4e += "\">";
    this.u5m.z1b(v4e);
  	this.n5a(this.o1c);
    this.z0r(z4w, x1l, g5g, i, k1e, a0m);
    this.u5m.z1b("</span>");
		c6b++;
	}
}

l5v(l2s, p8a, g5g)
{
  let z4w = l2s.v8u();
  let x1l = p8a.v8u();

	this.h7c(n8u.b1i);
	this.x3o = true;
	this.o7x = false;
	let g3s = this.w5z.g3s(z4w);
	for (let i = 1; i < g3s; i++)
	{
		if (i == g3s - 1)
		{
			this.g4o = true;
		}
		if (i < g3s - 1)
		{
			this.o7x = true;
		}
    this.d1x(z4w, x1l, g5g, i);
		if (this.o7x)
		{
			this.h7c(n8u.b1i);
			this.c3l(";", false);
			this.o7x = false;
		}
	}
	this.h7c(n8u.b1i);
	if (this.g4o)
	{
		this.c3l(")", false);
		this.g4o = false;
	}
}

d1x(l2s, p8a, g5g, c2h)
{
  let z4w = l2s.v8u();
  let x1l = p8a.v8u();

  this.w5z.p3c(z4w, c2h);
	let b5h = 0;
	this.z4v = true;
	do
	{
		b5h++;
		this.h7c(n8u.b1i);
		this.p7b(z4w, x1l, g5g);
		if (this.w5z.t5q(z4w))
		{
			break;
		}
		x1l.u3j(z4w.d4v.b8f());
		if (x1l.b8p())
		{
			g5g++;
		}
    this.w5z.u3j(z4w);
	} while (true);
}

f4v(z4w, s5h)
{
	if (s5h.length)
	{
 		this.f3w(z4w, s5h);
	}
	else
	{
		if (this.u0k)
    {
      this.f3w(z4w, "[...]");
    }
	}
	if (z4w.d4v)
	{
		if (z4w.d4v.h2o() || z4w.d4v.j8m())
		{
			this.v3a(z4w, n8u.z7f);
		}
		if (z4w.d4v.l3w())
		{
		}
		if (z4w.d4v.z2g())
		{
			this.v3a(z4w, n8u.v8t);
		}
		if (z4w.d4v.u1n())
		{
			this.v3a(z4w, n8u.b0s);
		}
	}
	else
	{
		if (this.w5z.r1o() || this.w5z.q3e())
		{
			this.v3a(z4w, n8u.z7f);
		}
		if (this.w5z.l0g())
		{
		 	this.v3a(z4w, n8u.b0s);
		}
	}
}

c3l(s5h, f2w)
{
	if (s5h.length == 0)
	{
		return;
	}
	if (!this.x7e && f2w)
	{
		this.u5m.e7n(" ");
	}
	this.u5m.e7n(s5h);
	this.x7e = false;
}

z0m(z4w, q2p)
{
	if (this.h7i && q2p.length)
	{
		this.h7c(n8u.q2p);
		this.n9a(z4w, q2p);
	}
}

a7n(z4w, c1g)
{
	if (this.h7i && c1g.length)
	{
		this.h7c(n8u.c1g);
		this.n9a(z4w, c1g);
	}
}

i5y(p2p)
{
  let j3j = p2p;
  let k9g = j3j.replaceAll("<br><br>", "<br>");
  let c9p = k9g.replaceAll("<br><br>", "<br>");
  let l2z = c9p.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = l2z;
  this.u5m.e7n(s);
}

f3w(z4w, s5h)
{
	if (s5h.length == 0)
	{
		return;
	}
	if (!this.x7e)
	{
		this.u5m.e7n(" ");
	}
  let b8h = '';
  if (z4w.d4v)
  {
  	if (z4w.d4v.d3x())
	  {
		  if (z4w.d4v.o2c() == c2u.g3i)
  		{
	  		b8h = "tdmove-crit-opening";
		  }
  		else if (z4w.d4v.o2c() == c2u.w2h)
	  	{
		  	b8h = "tdmove-crit-middle";
  		}
	  	else if (z4w.d4v.o2c() == c2u.w7r)
		  {
  			b8h = "tdmove-crit-end";
	  	}
  	}
  }
	let c6i = "<span class=\"";
	if (b8h.length == 0)
	{
		c6i += "tdmove\" movenr=\"";
	}
	else
	{
		c6i += "tdmove " + b8h + "\" movenr=\"";
	}
  c6i += this.w5z.e3h(z4w).toString();
  c6i += "\"";
	c6i += ">",
	c6i += s5h;
	c6i += "</span>";

	this.u5m.z1b(c6i);
	this.x7e = false;
}

v3a(z4w, g9j)
{
  if (g9j == n8u.z7f)
  {
    this.p5u(z4w);
  }
  else if (g9j == n8u.b0s)
  {
    this.o5l(z4w);
  }
}

p5u(z4w)
{
	let v4e = "<span class=\"tdcolors\" movenr=\"";
  v4e += this.w5z.e3h(z4w).toString();
	v4e += "\">",
	this.u5m.z1b(v4e);
	this.u5m.z1b("</span>");
}

o5l(z4w)
{
	let v4e = "<span class=\"tdmedal\" movenr=\"";
  v4e += this.w5z.e3h(z4w).toString();
	v4e += "\">",
	this.u5m.z1b(v4e);
	this.u5m.z1b("<canvas></canvas>");
	this.u5m.z1b("</span>");
}

q2j(m8v)
{
 	let v4e = "<span class=\"tdline\"";
	if (m8v)
	{
		v4e += " data-commented=\"1\"";
	}
	v4e += " data-level=\"0\">";
	this.u5m.e7n(v4e);
}

e6u()
{
  this.u5m.z1b("</span>");
}

r8u(z4w)
{
  let v3g = "tdcomment";
  if (this.y7m)
  {
    v3g += " is-bold";
  }
  let v4e = "<span class=\"" + v3g + "\" movenr=\"";
  v4e += this.w5z.e3h(z4w).toString();
  v4e += "\">";
  this.u5m.e7n(v4e);
}

p0y()
{
  this.u5m.z1b("</span>");
}

n1d(value)
{
  this.u0k = value;
}

p2g(value)
{
  this.y7m = value;
}

p2d(value)
{
  this.x7c = value;
}

k6w(value)
{
  this.f8a = value;
}

} 
const c3j =
{
	u2h : 1,
	v0e : 2,
	y8v : 3
};

class k7q
{

constructor()
{
	this.g0w = 0;
	this.f8g = 0;
	this.type = c3j.u2h;
}

v8u()
{
	let m6y = new k7q();
	m6y.g0w = this.g0w;
	m6y.f8g = this.f8g;
	m6y.type = this.type;
	return m6y;
}

}

function v9e(g0w, f8g, type)
{
	let s = new k7q();
	s.g0w = g0w;
	s.f8g = f8g;
	s.type = type;
	return s;
}
class s7c
{

constructor()
{
	this.l7l = [];
}

v8u()
{
	let w2m = new s7c();
	for (const c0j of this.l7l)
	{
		w2m.add(c0j.v8u());
	}
	return w2m;
}

h1p()
{
	this.l7l.length = 0;
}

m9a()
{
	return this.l7l.length == 0;
}

size()
{
	return this.l7l.length;
}

add(c0j)
{
	let f9a = c0j.v8u();
	this.l7l.push(f9a);
}

}

const c7m =
{
	g5c : 0,
	a4l : 1,
	q1l : 2
};

class r3c
{

constructor()
{
	this.e5k = 0;
	this.type = c7m.g5c;
}

v8u()
{
	let c9y = new r3c();
	c9y.e5k = this.e5k;
	c9y.type = this.type;
	return c9y;
}

}

function o0o(e5k, type)
{
	let l5k = new r3c();
	l5k.e5k = e5k;
	l5k.type = type;
	return l5k;
}

class x6l
{

constructor()
{
	this.x8e = [];
}

v8u()
{
	let r8e = new x6l();
	for (const g7q of this.x8e)
	{
		r8e.add(g7q.v8u());
	}
	return r8e;
}

h1p()
{
	this.x8e.length = 0;
}

m9a()
{
	return this.x8e.length == 0;
}

size()
{
	return this.x8e.length;
}

add(i8g)
{
	let z7q = i8g.v8u();
	this.x8e.push(z7q);
}

}

const q3c =
{
	e2n    : 0,
	g1b  : 1,
	y5m  : 2,
	w7y    : 3,
  e7x   : 4,
	a3q    : 5,
};


function l8b(v8b)
{
	let s5h = '';
	switch (v8b)
	{
		case q3c.e2n:
			s5h = "P";
			break;
		case q3c.g1b:
			s5h = "N";
			break;
		case q3c.y5m:
			s5h = "B";
			break;
		case q3c.w7y:
			s5h = "R";
			break;
		case q3c.e7x:
			s5h = "Q";
			break;
		case q3c.king:
			s5h = "K";
			break;
	}
	return s5h;
}

class j0c
{

constructor()
{
  this.x6w = 0;
	this.d5l = new e5o();
	this.g9i = new l8k();
}

v8u()
{
	let s7x = new j0c();
  s7x.x6w = this.x6w;
	s7x.d5l = this.d5l.v8u();
	s7x.g9i = this.g9i.v8u();
	return s7x;
}

}

const u7f = 	 		"#7B8295";
const w3l =			"#9F9F9F";
const c4m = 			    "#7B8295";
const w7n = 		  "#FFFFFF";
const t6r =       "#D0B194";

const r8o	   = "#E13129";
const h1g	 = "#389C13";
const h2u = "#E2B628";

const b0x	 = "#E13129";
const i8h	 = "#389C13";
const t5u	   = "#E2B628";

class s0a
{

constructor()
{
	this.b6d = null;
	this.j7l = false;
	this.s1s = null;
	this.x4c = null;
	this.i5u = null;
	this.o6e = 0;
	this.u3z = 0;
	this.j0h = 0;
	this.n0j = 0;
	this.w3w = 0;
	this.n4d = 0;
	this.z3v = new j6p();
	this.x1l = new o8k();
	this.p0d = new s7c();
	this.c5z = new x6l();
  this.r5q = new w3p();
  this.v5r = true;
	this.e6z = true;
	this.v1x = true;
	this.s2i = false;
	this.j4v = u7f;
	this.l9m = w3l;
	this.x3x = n7t;
	this.u0d = b3p;
	this.f3q = b3p;
	this.r2t = x9d;
	this.i8u = true;
	this.c7i = b3g;
	this.m6r = b3g;
	this.s9h = false;
	this.b5p = [];
	this.q0e = 0;
}

j3g(b6d)
{
	this.b6d = b6d;
}

i7j(z3v)
{
	this.z3v = z3v;
	this.j0h = z3v.j0h();
	this.n0j = z3v.j0h();

	this.o6e = (this.b6d.width - this.j0h) / 2;
	let top = (this.b6d.height - this.n0j) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.u3z = top;
	this.w3w = this.o6e + this.j0h - 1;
	this.n4d = this.u3z + this.n0j - 1;
	this.j7l = false;
	this.u2v();
}

e0q(x1l)
{
	this.x1l = x1l.v8u();
	this.p0d.h1p();
	this.c5z.h1p();
}

v8e(p0d)
{
	this.p0d = p0d.v8u();
}

x9g(c5z)
{
	this.c5z = c5z.v8u();
}

h3l(d4v)
{
  this.r5q = d4v.v8u();
}

i7y(s2i)
{
	this.s2i = s2i;
}

x8h()
{
	this.s2i = !this.s2i;
}

g2k()
{
	if (!this.b6d) return;
	if (this.j0h <= 0 || this.n0j <= 0)
	{
		return;
	}
	this.j1c();
}

l9v()
{
	let f8m = this.z3v.f8m;
	if (this.j7l)
	{
		return;
	}
	this.j7l = true;
	if (f8m == k5t.c0g)
	{
  	this.s1s = u3a.x1z("images/board/LightSquare");
  	this.x4c = u3a.x1z("images/board/DarkSquare");
		this.i5u = u3a.x1z("images/board/Margin");
	}
}

u2v()
{
	this.l9v();
	let f8m = this.z3v.f8m;
	if (f8m == k5t.c0g)
	{
		this.i8u = false;
		this.e6z = false;
		this.v1x = false;
		this.x3x = "#FFFF97";
		this.u0d = "#9B2E31";
		this.f3q = r6v;
	}
}

j1c()
{
	this.u2v();
	if (this.z3v.f8m == k5t.c0g)
	{
		let h1d = u3a.x1z("images/board/BoardBackground");
		this.x7p(new x2v(0, 0, this.b6d.width, this.b6d.height), h1d);
	}
	this.a1t();  
	this.g4w(); 
	this.s7r(); 
  if (chess)
  {
	  this.b2b();
  }
  else
  {
	  this.m9b();
  	this.l2i();
  }
  
  this.r6e();
 	this.t7s();
 	this.a7e();
 	this.t6e();
	this.x4a(); 
	this.n1m();      
}

a1t()
{
	let z8u = this.u3z;
	let b3r = this.o6e;
	let a5e = this.w3w;
	let l8r = this.n4d;
	let i5c = this.z3v.v8w;
	this.h0e(new x2v(b3r, z8u, a5e, z8u+i5c-1), this.u0d);
	this.h0e(new x2v(b3r, l8r-i5c+1, a5e, l8r), this.f3q);
	this.h0e(new x2v(b3r, z8u, b3r+i5c-1, l8r), this.u0d);
	this.h0e(new x2v(a5e-i5c+1, z8u, a5e, l8r), this.f3q);
}

g4w()
{
	let v8w = this.z3v.v8w;
	let b6j = this.z3v.b6j;
	if (!b6j)
	{
		return;
	}
	if (this.i8u || !this.i5u)
	{
		this.e7q(this.r2t);
	}
	else
	{
		let left = this.o6e + v8w;
		let top = this.u3z + v8w;
		let q4x = this.w3w - v8w;
		let x0c = this.u3z + v8w + b6j - 1;
		this.x7p(new x2v(left, top, q4x, x0c), this.i5u);

		left = this.o6e + v8w;
		top = this.u3z + v8w;
		q4x = this.o6e + v8w + b6j - 1;
		x0c = this.n4d - v8w;
		this.x7p(new x2v(left, top, q4x, x0c), this.i5u);

		left = this.o6e + v8w;
		top = this.n4d - v8w - b6j + 1;
		q4x = this.w3w - v8w;
		x0c = this.n4d - v8w;
		this.x7p(new x2v(left, top, q4x, x0c), this.i5u);

		left = this.w3w - v8w - b6j + 1;
		top = this.u3z + v8w;
		q4x = this.w3w - v8w;
		x0c = this.n4d - v8w;
		this.x7p(new x2v(left, top, q4x, x0c), this.i5u);
	}
}

e7q()
{
	let v8w = this.z3v.v8w;
	let b6j = this.z3v.b6j;
	if (!b6j)
	{
		return;
	}

	let left = this.o6e + v8w;
	let top = this.u3z + v8w;
	let q4x = this.w3w - v8w;
	let x0c = this.u3z + v8w + b6j - 1;
	this.h0e(new x2v(left, top, q4x, x0c), this.r2t);

	left = this.o6e + v8w;
	top = this.u3z + v8w;
	q4x = this.o6e + v8w + b6j - 1;
	x0c = this.n4d - v8w;
	this.h0e(new x2v(left, top, q4x, x0c), this.r2t);

	left = this.o6e + v8w;
	top = this.n4d - v8w - b6j + 1;
	q4x = this.w3w - v8w;
	x0c = this.n4d - v8w;
	this.h0e(new x2v(left, top, q4x, x0c), this.r2t);

	left = this.w3w - v8w - b6j + 1;
	top = this.u3z + v8w;
	q4x = this.w3w - v8w;
	x0c = this.n4d - v8w;
	this.h0e(new x2v(left, top, q4x, x0c), this.r2t);
}

n1m()
{
	if (this.z3v.p6f)
	{
  	if (!this.z3v.b6j)
  	{
	  	return;
  	}
		let color = "#000000";
		if (this.x1l.b8p())
		{
			color = "#EDD790";
		}
		else
		{
			color = "#000000";
		}
		let rect = this.w2o();
		let u5j = this.m6c();
		u5j.beginPath();
		u5j.fillStyle = color;
		let s7l = rect.x7l() * 0.40;
		u5j.arc(rect.q7j + rect.x7l()/2 - 1, rect.i1m + rect.c6g()/2 - 1,
			s7l, 0, 2 * Math.PI);
		u5j.fill();
	}
}

s7r()
{
	let m5i = r6v;
	let v8w = this.z3v.v8w;
	let b6j = this.z3v.b6j;
	let i5c = this.z3v.i5c;
	let z8u = this.u3z + v8w + b6j;
	let b3r = this.o6e + v8w + b6j;
	let a5e = this.w3w - v8w - b6j;
	let l8r = this.n4d - v8w - b6j;
	this.h0e(new x2v(b3r, z8u, a5e, z8u+i5c-1), m5i);
	this.h0e(new x2v(b3r, l8r-i5c+1, a5e, l8r), m5i);
	this.h0e(new x2v(b3r, z8u, b3r+i5c-1, l8r), m5i);
	this.h0e(new x2v(a5e-i5c+1, z8u, a5e, l8r), m5i);
}

m6c()
{
	return this.b6d.getContext('2d');
}

s0h(rect, color)
{
	let u5j = this.m6c();
	u5j.beginPath();
	u5j.lineWidth = "1";
	u5j.strokeStyle = color;
	u5j.rect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());
	u5j.stroke();
}

h0e(rect, color)
{
	let u5j = this.m6c();
	u5j.fillStyle = color;
	u5j.fillRect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());
}

x7p(rect, img)
{
	let u5j = this.m6c();
	let r7n = u5j.createPattern(img, 'repeat');
	u5j.fillStyle = r7n;
	u5j.fillRect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());
}

k2v(rect, img)
{
	let u5j = this.m6c();
	let r7n = u5j.createPattern(img, 'no-repeat');
	u5j.fillStyle = r7n;
	u5j.fillRect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());
}

z8a(e5k)
{
	let n1u = z7r;
	let j6b = r8h;
	if (this.s2i)
	{
		n1u = g7c(p0i(e5k));
		j6b = h0f(p0i(e5k));
	}
	else
	{
		n1u = g7c(e5k);
		j6b = h0f(e5k);
	}
	if (b5v(j6b))
	{
		n1u++;
	}
	else
	{
		n1u--;
	}
	return this.n8j(j6b, n1u);
}

m9b()
{
	for (const e5k of g4q)
	{
		this.w0v(e5k);
	}
}

w0v(e5k)
{
	this.q3z(this.z8a(e5k), e5k);
}

q3z(rect, e5k)
{
	let x1z = this.s1s;
	if (this.v1x)
	{
		this.d6h(rect, this.l9m);
		return;
	}
	if (!x1z)
	{
		this.d6h(rect, this.l9m);
		return;
	}

	let o1w = x1z.width;
	let v6m = x1z.height;
	let t3o = this.z3v.k1p;
	if (o1w < t3o || v6m < t3o)
	{
		this.k2v(rect, x1z);
		return;
	}

	let m1l = Math.trunc(o1w / this.z3v.k1p);
	let v2y = Math.trunc(v6m / this.z3v.k1p);
	if (m1l == 0)
	{
		m1l = 1;
	}
	if (v2y == 0)
	{
		v2y = 1;
	}

	let z0p = Math.trunc((e5k) / m1l);
	let e6m = (e5k) % m1l;
	let y = Math.trunc(z0p / v2y);
	z0p = z0p % v2y;

  let u4b = new x2v();
	u4b.q7j = e6m * this.z3v.k1p;
	u4b.i1m = z0p * this.z3v.k1p;
	u4b.h7x = (e6m + 1) * this.z3v.k1p - 1;
	u4b.d7v = (z0p + 1) * this.z3v.k1p - 1;
	let u5j = this.m6c();
	f1h(u5j, rect, x1z, u4b);
}

z7x(e5k)
{
	let n1u = z7r;
	let j6b = r8h;
	if (this.s2i)
	{
		n1u = g7c(p0i(e5k));
		j6b = h0f(p0i(e5k));
	}
	else
	{
		n1u = g7c(e5k);
		j6b = h0f(e5k);
	}
	return this.n8j(j6b, n1u);
}

l2i()
{
	for (const e5k of g4q)
	{
		this.i0p(e5k);
	}
}

i0p(e5k)
{
	this.a2l(this.z7x(e5k), e5k);
}

a2l(rect, e5k)
{
	let x1z = this.x4c;
	if (this.e6z)
	{
		this.d6h(rect, this.j4v);
		return;
	}
	if (!x1z)
	{
		this.d6h(rect, this.j4v);
		return;
	}

	let o1w = x1z.width;
	let v6m = x1z.height;
	let t3o = this.z3v.k1p;
	if (o1w < t3o || v6m < t3o)
	{
		this.k2v(rect, x1z);
		return;
	}

	let m1l = Math.trunc(o1w / this.z3v.k1p);
	let v2y = Math.trunc(v6m / this.z3v.k1p);
	if (m1l == 0)
	{
		m1l = 1;
	}
	if (v2y == 0)
	{
		v2y = 1;
	}

	let z0p = Math.trunc((e5k) / m1l);
	let e6m = (e5k) % m1l;
	let y = Math.trunc(z0p / v2y);
	z0p = z0p % v2y;

  let u4b = new x2v();
	u4b.q7j = e6m * this.z3v.k1p;
	u4b.i1m = z0p * this.z3v.k1p;
	u4b.h7x = (e6m + 1) * this.z3v.k1p - 1;
	u4b.d7v = (z0p + 1) * this.z3v.k1p - 1;
	let u5j = this.m6c();
	f1h(u5j, rect, x1z, u4b);
}

n8j(j6b, n1u)
{
	let v8w = this.z3v.v8w;
	let b6j = this.z3v.b6j;
	let i5c = this.z3v.i5c;
	let k1p = this.z3v.k1p;
	let rect = new x2v();
	rect.q7j = this.o6e + v8w + b6j +	i5c + (n1u) * k1p;
	rect.h7x = rect.q7j + k1p - 1;
	rect.i1m = this.u3z + v8w + b6j +	i5c + (c4f - j6b - 1) * k1p;
	rect.d7v = rect.i1m + k1p - 1;
	return rect;
}

y3t(e5k)
{
	let n1u = z7r;
	let j6b = r8h;
	if (this.s2i)
	{
		n1u = g7c(p0i(e5k));
		j6b = h0f(p0i(e5k));
	}
	else
	{
		n1u = g7c(e5k);
		j6b = h0f(e5k);
	}
	return this.n8j(j6b, n1u);
}

b2b()
{
	for (const e5k of g4q)
	{
		this.h5w(e5k);
	}
}

h5w(e5k)
{
	this.k0v(this.y3t(e5k), e5k);
}

k0v(rect, e5k)
{
	let y3p = isDarkSquare(e5k);
	let x1z = this.s1s;
	if (y3p)
	{
		x1z = this.x4c;
	}
	if (y3p)
	{
		if (this.e6z)
		{
			this.d6h(rect, this.j4v);
			return;
		}
		if (!x1z)
		{
			this.d6h(rect, this.j4v);
			return;
		}
	}
	else
	{
		if (this.v1x)
		{
			this.d6h(rect, this.l9m);
			return;
		}
		if (!x1z)
		{
			this.d6h(rect, this.l9m);
			return;
		}
	}

 	let o1w = x1z.width;
	let v6m = x1z.height;
	let t3o = this.z3v.k1p;
	if (o1w < t3o || v6m < t3o)
	{
		this.k2v(rect, x1z);
		return;
	}
	let m1l = Math.trunc(o1w / this.z3v.k1p);
	let v2y = Math.trunc(v6m / this.z3v.k1p);
	if (m1l == 0)
	{
		m1l = 1;
	}
	if (v2y == 0)
	{
		v2y = 1;
	}

	let z0p = Math.trunc((e5k) / m1l);
	let e6m = (e5k) % m1l;
	let y = Math.trunc(z0p / v2y);
	z0p = z0p % v2y;

  let u4b = new x2v();
	u4b.q7j = e6m * this.z3v.k1p;
	u4b.i1m = z0p * this.z3v.k1p;
	u4b.h7x = (e6m + 1) * this.z3v.k1p - 1;
	u4b.d7v = (z0p + 1) * this.z3v.k1p - 1;
	let u5j = this.m6c();
	f1h(u5j, rect, x1z, u4b);
}

d6h(rect, color)
{
	this.h0e(rect, color);
}

a7e()
{
	for (const e5k of g4q)
	{
		this.l8a(e5k);
	}
}

s3z(g0w, f8g, f7k)
{
	this.c7i = g0w;
	this.m6r = f8g;
	this.s9h = f7k;

	this.b5p.length = 0;
 	let y7x = this.y3t(g0w);
  let u4m = this.y3t(f8g);
	let w5c = this.z3v.k1p;

	let n5g = 32;
	if (w5c < 32)
	{
		n5g = w5c;
	}

  
	if (false)
	{
    
    
		let l2x = new b4c(y7x.q7j + w5c / 2, y7x.i1m + w5c / 2);
		let j4o = new b4c(u4m.q7j + w5c / 2, u4m.i1m + w5c / 2);
		let t1j = Math.abs(l2x.X - j4o.X);
		let b2c = Math.abs(l2x.Y - j4o.Y);
		let v4m = Math.atan2(j4o.X - l2x.X, l2x.Y - j4o.Y);
		let f4x = Math.sqrt(t1j*t1j + b2c*b2c) / 2;
		j4o.X = l2x.X + f4x * 2;
		j4o.Y = l2x.Y;
		let l0o = new b4c(l2x.X + f4x, l2x.Y);
		let w7u = Math.PI / n5g;
		let r6w = w5c * 0.40;
		let y8e = Math.PI;
		let f0i = (u4m.q7j > y7x.q7j && u4m.i1m < y7x.i1m) ||
			(u4m.q7j < y7x.q7j && u4m.i1m > y7x.i1m);
		for (let i = 1; i < n5g; i++)
		{
			let s0h = new x2v();
			if (f0i)
			{
				y8e -= w7u;
			}
			else
			{
				y8e += w7u;
			}
			let t9p = Math.cos(y8e);
			let p3l = Math.sin(y8e);
			let i6i = new b4c(l0o.X + f4x * t9p,
				l0o.Y - r6w * p3l);
			this.b5p.push(w6a(i6i, l2x, v4m - Math.PI / 2));
		}
	}
	else
	{
		let l2x = new b4c(y7x.q7j + w5c / 2, y7x.i1m + w5c / 2);
		let j4o = new b4c(u4m.q7j + w5c / 2, u4m.i1m + w5c / 2);
		let c7t = (j4o.X - l2x.X) / n5g;
		let k0q = (j4o.Y - l2x.Y) / n5g;
		for (let i = 1; i < n5g; i++)
		{
			this.b5p.push(new b4c(l2x.X + i * c7t, l2x.Y + i * k0q));
		}
	}
	this.b5p.push(new b4c(u4m.q7j + w5c / 2, u4m.i1m + w5c / 2));
	this.q0e = 0;
}

u6i()
{
	this.c7i = b3g;
	this.m6r = b3g;
}

v1n()
{
	this.g2k(); 

	let s2x = this.b5p[this.q0e];
	let k1p = this.z3v.k1p;
	let s0h = new x2v();
	s0h.q7j = s2x.X - k1p / 2;
	s0h.i1m = s2x.Y - k1p / 2;
	s0h.x9h(k1p);
	s0h.p6z(k1p);
 	let u5j = this.m6c();
	t4q(u5j, s0h, this.x1l.s0u(this.c7i));

	this.q0e++;
	if (this.q0e >= this.b5p.length)
	{
		let v8b = this.x1l.s0u(this.c7i);
		this.x1l.n2o(this.c7i, e5q.m9a);
		this.x1l.n2o(this.m6r, v8b);
		this.u6i();
		return true;
	}
	else
	{
		return false;
	}
}

l8a(e5k)
{
	if (e5k == this.c7i)
	{
		return;
	}
	let s1m = this.y3t(e5k);
 	let u5j = this.m6c();
	t4q(u5j, s1m, this.x1l.s0u(e5k));
}

x4a()
{
	if (!this.z3v.g6s)
	{
    return;
  }

 	let i5c = this.z3v.i5c;
	let v8w = this.z3v.v8w;
	let b6j = this.z3v.b6j;
	let k1p = this.z3v.k1p;

	let x9n = new x2v();
	x9n.q7j = this.o6e + v8w + b6j;
	x9n.i1m = this.u3z + v8w + b6j;
	x9n.x9h(c4f * k1p + 2 * i5c);
	x9n.p6z(c4f * k1p + 2 * i5c);

 	let u5j = this.m6c();
  let k3c = r5n(u5j, b6j-6);

  x4a(u5j,
    x9n,
    this.z3v,
    k3c,
    l8m.l5d,
    this.x3x,
    this.s2i,
    b6j);
}

c7a(e5k, color)
{
	let rect = this.y3t(e5k);
	let u5j = this.m6c();
  u5j.save();
  u5j.globalAlpha = 0.25; 
	u5j.fillStyle = color;
	u5j.fillRect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());
  u5j.restore();
}

r6e()
{
	if (this.v5r)
	{
		if (!this.r5q.m9a())
		{
      let color = "#800080"; 
			this.c7a(this.r5q.g0w, color);
			this.c7a(this.r5q.f8g, color);
		}
  }
}

t7s()
{
	for (const g7q of this.c5z.x8e)
	{
		this.y1l(g7q);
	}
}

y1l(g7q)
{
	let rect = this.y3t(g7q.e5k);
	let n4t = '';
	switch (g7q.type)
	{
		case c7m.g5c:
			n4t = r8o;
			break;
		case c7m.a4l:
			n4t = h1g;
			break;
		case c7m.q1l:
			n4t = h2u;
			break;
	}
	let w5c = this.j0h / 10;
	let u5j = this.m6c();
  /* dit is met roundrect
  d7b(rect, 5);
	u5j.lineWidth = w5c / 15;
	u5j.strokeStyle = n4t;
	n9f(u5j, rect.q7j, rect.i1m, rect.x7l(), rect.c6g(), 10);
  */
  
  u5j.save();
  u5j.globalAlpha = 0.7; 
	u5j.fillStyle = n4t;
	u5j.fillRect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());
  u5j.restore();
}

t6e()
{
	for (const c0j of this.p0d.l7l)
	{
		this.h7a(c0j);
	}
}

h7a(c0j)
{
	let g0w = c0j.g0w;
	let f8g = c0j.f8g;
	let i3h = c0j.type;

	let y7x = this.y3t(g0w);
	let u4m = this.y3t(f8g);

	let o9f = y7x.q7j + y7x.x7l()/2;
	let h5x = y7x.i1m + y7x.c6g()/2;
	let i4f = new b4c(o9f, h5x);

	let l2c = u4m.q7j + u4m.x7l()/2;
	let w1k = u4m.i1m + u4m.c6g()/2;

	let s7u = (l2c-o9f)*(l2c-o9f) + (w1k-h5x)*(w1k-h5x);
	let c0b = Math.sqrt(s7u);

	let q5b = (this.x1l.s7i(g0w)) ? 0 : y7x.x7l() / 4;
	c0b -= q5b;
	let o3n = (this.x1l.s7i(f8g)) ? 0 : y7x.x7l() / 4;
	c0b -= o3n;

	let m5p = 5;
	let h6y = 5 * m5p;
	let p7x = 7 * m5p;

	let c7c = o9f + q5b;
	let j4c = h5x;

	let x8l = c7c + c0b - 1;
	let r0s = h5x;

	let n3y = x8l - p7x;
	let v0a = h5x;

	let v4m = Math.atan2((l2c - o9f), (h5x - w1k));

  
	let n0o = [];
  let r6n = 10; 
	n0o.push(new b4c(n3y, v0a));
	n0o.push(new b4c(n3y - r6n, v0a - h6y));
	n0o.push(new b4c(x8l, r0s));
	n0o.push(new b4c(n3y - r6n, v0a + h6y));
	n0o.push(new b4c(n3y, r0s));
	let p9r = [];
	for (let i = 0; i <= 4; i++)
	{
		p9r.push(w6a(n0o[i], i4f, v4m - Math.PI / 2));
	}

	let u5j = this.m6c();
  u5j.save();
  u5j.globalAlpha = 0.7;

 	let o3z = '';
	switch (i3h)
	{
		case c3j.u2h:
			o3z = b0x;
			break;
		case c3j.v0e:
			o3z = i8h;
			break;
		case c3j.y8v:
			o3z = t5u;
			break;
	}
 	u5j.fillStyle = o3z;
  u5j.strokeStyle = o3z;
	u5j.beginPath();
	u5j.moveTo(p9r[0].X, p9r[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		u5j.lineTo(p9r[i].X, p9r[i].Y);
	}
	u5j.closePath();
	u5j.fill();

  
	n0o.length = 0;
	n0o.push(new b4c(c7c, j4c - m5p));
	n0o.push(new b4c(c7c, j4c + m5p));
	n0o.push(new b4c(n3y, j4c + m5p));
	n0o.push(new b4c(n3y, j4c - m5p));
	p9r.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		p9r.push(w6a(n0o[i], i4f, v4m - Math.PI / 2));
	}
	if (o9f == l2c)
	{
		if (p9r[0].Y != p9r[1].Y)
		{
			p9r[0].Y = p9r[1].Y;
		}
		if (p9r[2].Y != p9r[3].Y)
		{
			p9r[2].Y = p9r[3].Y;
		}
	}
	if (h5x == w1k)
	{
		if (p9r[0].X != p9r[1].X)
		{
			p9r[0].X = p9r[1].X;
		}
		if (p9r[2].X != p9r[3].X)
		{
			p9r[2].X = p9r[3].X;
		}
	}
	u5j.beginPath();
	u5j.moveTo(p9r[0].X, p9r[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		u5j.lineTo(p9r[i].X, p9r[i].Y);
	}
	u5j.closePath();
	u5j.fill();
  u5j.restore();
}

w2o()
{
	let v8w = this.z3v.v8w;
	let b6j = this.z3v.b6j;
	let w5c = this.z3v.k1p;
	let rect = new x2v();
	rect.q7j = this.w3w - v8w - b6j + 1;
	rect.i1m = this.n4d - v8w - b6j;
	rect.d7v = this.n4d;
	rect.h7x = this.w3w - 1;
	return rect;
}

}

const h4r = 14;

const k5t =
{
	c0g : 0
};

const l6y =
{
	c0g : 0
};

const p9u =
{
	g7h : 0,
	g2t : 1,
};

const l8m =
{
	a3y: 0,
	r7i: 1,
	l5d: 2,
	h5g: 3,
	s7w: 4,
};

class j6p
{

constructor()
{
	this.f8m = k5t.c0g;
	this.t7o = 1; 
	this.v8w = 0;
	this.b6j = h4r;
	this.i5c = 2;
	this.k1p = 32;
	this.w6d = 20;
	this.g6s = true;
	this.k3q = p9u.g2t;
	this.p6f = true;
}

v8u()
{
	let m6n = new j6p();
	m6n.f8m = this.f8m;
	m6n.t7o = this.t7o;
	m6n.v8w = this.v8w;
	m6n.b6j = this.b6j;
	m6n.i5c = this.i5c;
	m6n.k1p = this.k1p;
	m6n.w6d = this.w6d;
	m6n.g6s = this.g6s;
	m6n.k3q = this.k3q;
	m6n.p6f = this.p6f;
	return m6n;
}

j0h()
{
	return this.k1p * c4f + 2 * (this.v8w + this.b6j + this.i5c);
}

b2d(rect)
{
	let w = rect.x7l();
	let h = rect.c6g();
	let u4a = 0;
	if (w < h)
	{
		u4a = w;
	}
	else
	{
		u4a = h;
	}
	if (this.b6j)
	{
		for (this.k1p = 2; this.k1p < 1000; this.k1p++)
		{
			this.b6j = (this.k1p / 100) * this.w6d;
			if (this.b6j < h4r)
			{
				this.b6j = h4r;
			}
			let size = 2 * (this.v8w + this.b6j + this.i5c) + c4f * this.k1p;
			if (size > u4a)
			{
				break;
			}
		}
		this.k1p--;
		this.b6j = (this.k1p / 100) * this.w6d;
		if (this.b6j < h4r)
		{
			this.b6j = h4r;
		}
	}
	else
	{
		for (this.k1p = 2; this.k1p < 1000; this.k1p++)
		{
			let size = 2 * (this.v8w + this.i5c) + c4f * this.k1p;
			if (size > u4a)
			{
				break;
			}
		}
		this.k1p--;
	}
	return this.j0h();
}

}


class u9g
{

constructor()
{
	this.y9l = new o8k();
	this.o7c = new o8k();
	this.p0d = new s7c();
	this.c5z = new x6l();
	this.s3u = new w3p();
 	this.a9g = new w3p();
	this.j3r = 0;
	this.j4r = false;
	this.j9z = false;
	this.b5h = 0;
	this.l3n = 0;
	this.c1n = '';
}

}

const i2f =
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

function d7b(rect, a0s)
{
	rect.q7j += a0s;
	rect.h7x -= a0s;
	if (rect.q7j > rect.h7x)
	{
		rect.q7j = rect.h7x;
	}
	rect.i1m += a0s;
	rect.d7v -= a0s;
	if (rect.i1m > rect.d7v)
	{
		rect.i1m = rect.d7v;
	}
}

function f1h(z5g, v5c, m1r, u4b)
{
	z5g.drawImage(m1r, u4b.q7j, u4b.i1m, u4b.x7l(), u4b.c6g(),
		v5c.q7j, v5c.i1m, v5c.x7l(), v5c.c6g());
}

function n9f(u5j, x, y, width, height, s7l)
{
	u5j.beginPath();
	u5j.moveTo(x, y + s7l);
	u5j.lineTo(x, y + height - s7l);
	u5j.arcTo(x, y + height, x + s7l, y + height, s7l);
	u5j.lineTo(x + width - s7l, y + height);
	u5j.arcTo(x + width, y + height, x + width, y + height-s7l, s7l);
	u5j.lineTo(x + width, y + s7l);
	u5j.arcTo(x + width, y, x + width - s7l, y, s7l);
	u5j.lineTo(x + s7l, y);
	u5j.arcTo(x, y, x, y + s7l, s7l);
	u5j.stroke();
}

function w6a(g3w, i4f, h6c)
{
	let p = new b4c();
	p.X = (Math.cos(h6c) * (g3w.X - i4f.X)) - (Math.sin(h6c) * (g3w.Y - i4f.Y)) + i4f.X;
	p.Y = (Math.sin(h6c) * (g3w.X - i4f.X)) + (Math.cos(h6c) * (g3w.Y - i4f.Y)) + i4f.Y;
	return p;
}

function b7l(u5j, rect, b0s)
{
	let left = rect.q7j;
	let top = rect.i1m;
	let q4x = rect.h7x;
	let x0c = rect.d7v;

	u5j.fillStyle = q5a;
	u5j.fillRect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());

	if (b0s.g7h())
	{
		return;
	}

	let n5e = b0s.q0n();
	let r8s = 0;
	if (n5e > 8)
	{
		r8s = (q4x - left) / 8;
	}
	else
	{
		r8s = (q4x - left) / n5e;
	}
	let w9g = left - r8s;
	let q4r = top;
	let d6j = w9g + r8s;
	let x6h = 0;
	if (n5e > 8)
	{
		x6h = (x0c - top + 1) / 2;
	}
	else
	{
		x6h = x0c - top + 1;
	}

	let f1x = top + x6h - 1;
	let g5b = 0;
	for (let i = 0; i < 16; i++)
	{
		if (b0s.a9w(i))
		{
			w9g += r8s;
			d6j += r8s;
			if (g5b == 7 || g5b == 15 ||
				(g5b < 8 && g5b == n5e - 1))
			{
				d6j = q4x;
			}
			if (g5b == 8)
			{
				w9g = left;
				d6j = w9g + r8s;
				q4r = top + x6h;
				f1x = x0c;
			}
			let y4l = new x2v(w9g, q4r, d6j, f1x);
			u5j.fillStyle = i2f[i];
			u5j.fillRect(y4l.q7j, y4l.i1m, y4l.x7l(), y4l.c6g());
			g5b++;
		}
	}
}




class i7n
{

constructor()
{
	this.s5m = '';
	this.x1z = null;
}

}

class l3a
{

constructor()
{
	this.d4a = [];
}

add(img)
{
	let t7q = new i7n();
	t7q.s5m = img.id;
	t7q.x1z = img;
	this.d4a.push(t7q);
}

x1z(s5m)
{
	for (const s6h of this.d4a)
	{
		if (s6h.s5m.toLowerCase() == s5m.toLowerCase())
		{
			return s6h.x1z;
		}
	}
	return null;
}

}
const g5o 				= "#00FFFF";
const r6v 			= "#000000";
const x9d 				= "#0000FF";
const x5m 			= "#FFFBF0";
const e2q 			= "#808080";
const k3d 		= "#FF00FF";
const q2h 				= "#808080";
const c8h 			= "#008000";
const r4g 				= "#00FF00";
const o7g 			= "#C0C0C0";
const l4p 			= "#800000";
const k4u 		= "#A0A0A4";
const l0p 	= "#C0DCC0";
const c7g 				= "#000080";
const z5s 			= "#808000";
const p4u 			= "#800080";
const q5a 				= "#FF0000";
const e6r 			= "#C0C0C0";
const n4c 		= "#A6CAF0";
const y7p 				= "#008000";
const b3p 			= "#FFFFFF";
const n7t 			= "#FFFF00";

class b4c
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

v8u()
{
	let d1c = new b4c();
	d1c.q7j = this.X;
	d1c.i1m = this.Y;
	return d1c;
}

}

class x2v
{

constructor(left, top, q4x, x0c)
{
	if (left === undefined)
	{
		this.q7j = 0;
		this.i1m = 0;
		this.h7x = 0;
		this.d7v = 0;
	}
	else
	{
		this.q7j = left;
		this.i1m = top;
		this.h7x = q4x;
		this.d7v = x0c;
	}
}

v8u()
{
	let r0q = new x2v();
	r0q.q7j = this.q7j;
	r0q.i1m = this.i1m;
	r0q.h7x = this.h7x;
	r0q.d7v = this.d7v;
	return r0q;
}

x7l()
{
	return this.h7x - this.q7j + 1;
}

b2s()
{
	return this.h7x - this.q7j + 1;
}

x9h(width)
{
	this.h7x = this.q7j + width - 1;
}

c6g()
{
	return this.d7v - this.i1m + 1;
}

i0b()
{
	return this.d7v - this.i1m + 1;
}

p6z(height)
{
	this.d7v = this.i1m + height - 1;
}

i6u()
{
	this.q7j++;
	this.i1m++;
	this.h7x--;
	this.d7v--;
}

l4v(s2x)
{
	return s2x.X >= this.q7j &&
		s2x.X <= this.h7x &&
		s2x.Y >= this.i1m &&
		s2x.Y <= this.d7v;
}


}

class b2l
{

constructor(l7b)
{
	this.l7b = l7b;
	this.f7y = new o8k();
	this.d7t = new s0a();
	this.d4q = null;
	this.z3v = new j6p();
	this.a1l = true;
}

m5c()
{
	let a7k = window.devicePixelRatio;

	this.d7t.b6d.width = this.d4q.clientWidth * a7k;
	this.d7t.b6d.height = this.d4q.clientHeight * a7k;

	let e4r = 32 * a7k;
	let w1j = 32 * a7k;
	let p8x = this.d7t.b6d.width - e4r;
	let o1r = this.d7t.b6d.height - w1j;
	let q2f = o1r < p8x ? o1r : p8x;
	if (q2f < 128)
	{
		q2f = 128;
	}
	let rect = new x2v();
	rect.q7j = 0;
	rect.i1m = 0;
	rect.x9h(q2f);
	rect.p6z(q2f);
	this.z3v.b6j = q2f * 0.02;
  if (this.z3v.b6j < h4r)
  {
    this.z3v.b6j = h4r;
  }
	q2f = this.z3v.b2d(rect);
 	this.d7t.i7j(this.z3v);
	this.d7t.g2k();
}

x8h()
{
	this.d7t.x8h();
	this.d7t.g2k();
}

v6b()
{
	this.z3v.g6s = !this.z3v.g6s;
	this.d7t.i7j(this.z3v);
	this.d7t.g2k();
}

u4f()
{
	this.d7t.i7j(this.z3v);
	this.d7t.g2k();
}

y7k(s1t)
{
	this.f7y = s1t.o7c.v8u();
	this.d7t.e0q(this.f7y);
	this.d7t.v8e(s1t.p0d);
	this.d7t.x9g(s1t.c5z);
  
 	this.d7t.h3l(s1t.a9g);
	this.d7t.g2k();

	if (this.a1l)
	{
		m0x('playBackward' + this.l7b, s1t.j4r);
		m0x('goToBegin'+ this.l7b, s1t.j4r);
		m0x('playForward' + this.l7b, s1t.j9z);
		m0x('goToEnd' + this.l7b, s1t.j9z);
		m0x('autoPlay' + this.l7b, s1t.j9z);
	}
	else
	{
		m0x('goToBegin' + this.l7b, s1t.j4r);
		m0x('goToEnd' + this.l7b, s1t.j9z);
	}
}

e0q(x1l)
{
	let s1t = new u9g();
	s1t.o7c = x1l.v8u();
	this.e0q(s1t);
}

i7j(z3v)
{
  this.z3v = z3v.v8u();
}

}

class g0e
{

constructor(l7b)
{
	this.l7b = l7b;
  this.s0f = null;
	this.l5h = new e5o();
}

i0i(l5h)
{
	this.l5h = l5h.v8u();
	this.s3w();
}

s3w()
{
	let t8m = this.l5h.w4g.a3h.t7l();
	let r4n = this.l5h.z8i.a3h.t7l();

	let q9l = '';
	if (t8m.length && this.l5h.w4g.v5t)
	{
		q9l = this.l5h.w4g.v5t.toString();
	}
	let t3h = '';
	if (t8m.length && this.l5h.w4g.v3d.length)
	{
		t3h = this.l5h.w4g.v3d.toString();
	}

	let w7l = '';
	if (r4n.length && this.l5h.z8i.v5t)
	{
		w7l = this.l5h.z8i.v5t.toString();
	}
	let o0g = '';
	if (r4n.length && this.l5h.z8i.v3d.length)
	{
		o0g = this.l5h.z8i.v3d.toString();
	}

	let i0y = this.l5h.w4g.a3h.m9g(1);
	let e7e = this.l5h.z8i.a3h.m9g(1);

	let j5j = '';
	let v7x = '';
	if (!this.l5h.w4g.s6n.m9a() &&
		!this.l5h.z8i.s6n.m9a())
	{
		j5j = this.l5h.w4g.s6n.j9o();
		v7x = this.l5h.z8i.s6n.j9o();
	}

	let f9j = j9b(this.l5h.p6q);
	let s3f = this.l5h.s3f.v3d;
	if (!this.l5h.s3f.s0o.m9a())
	{
		s3f += " ";
		s3f += this.l5h.s3f.s0o.u2w.toString();
	}
	let l9f = '';
	if (!this.l5h.q8a.m9a())
	{
		l9f = this.l5h.q8a.toString("dd-mm-yyyy");
	}
	let g1t = '';
	if (!this.l5h.g1t.m9a())
	{
		g1t = '</br>' + '[' + this.l5h.g1t.s5m + ']';
	}

	let s6p = document.getElementById("nota-container"+this.l7b);
	let i3x = s6p.clientHeight;
	let m4a = 200;

  let index = this.l7b;
  let b9j = this.l5h.s3f.b9j;

	let c9n = true;
	if (this.s0f.clientWidth >= 374 && i3x >= m4a)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + t8m + "</span>";
    s += 					"<span class=\"rating\">" + q9l + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + j5j + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + f9j + "</span>";
		s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + r4n + "</span>";
		s +=          "<span class=\"rating\">" + w7l + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + v7x + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "<span>" + t3h + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + s3f + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + b9j + "</span>";
		s +=          "<span class=\"gameDate\">" + l9f + "</span>";
    s +=          "<span class=\"annotator\">" + g1t + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + o0g + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
		s +=      "</tr>";
		s +=    "</table>";
		this.s0f.innerHTML = s;

		
		
		let d9l = Math.trunc(this.s0f.clientWidth / 10);
		if (d9l < 24) d9l = 24;
    
		
		
		
		
		
		
	}
	else if (this.s0f.clientWidth >= 300 && i3x >= m4a)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + i0y + "</span>";
    s +=          "<span class=\"rating\">" + q9l + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + j5j + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + f9j + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + e7e + "</span>";
    s +=          "<span class=\"rating\">" + w7l + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + v7x + "</span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + t3h + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + s3f + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + b9j + "</span>";
    s +=          "<span class=\"gameDate\">" + l9f + "</span>";
		s +=          "<span class=\"annotator\">" + g1t + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + o0g + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.s0f.innerHTML = s;
	}
	else if (this.s0f.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + i0y + "</span>";
    s +=          "<span class=\"rating\">" + q9l + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + f9j + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + e7e + "</span>";
    s +=          "<span class=\"rating\">" + w7l + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.s0f.innerHTML = s;
	}
	else
	{
		
		c9n = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + i0y + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + f9j + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + e7e + "</span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.s0f.innerHTML = s;
	}

	if (c9n)
	{
		let z8f = 16;
		if (this.s0f.clientWidth < 400)
		{
			z8f = 16;
		}
		else if (this.s0f.clientWidth < 500)
		{
			z8f = 24;
		}
		else
		{
			z8f = 32;
		}
    if (this.l5h.w4g.i1k != y2m.g7h)
    {
  		let j8u = document.getElementById("whitePlayerNation"+this.l7b);
	  	j8u.src = x7q + "images/flags/" + z8f.toString() +"/" + e7g(this.l5h.w4g.i1k) + ".png";
		  j8u.height = z8f;
  		j8u.width = z8f;
    }
    if (this.l5h.z8i.i1k != y2m.g7h)
    {
  		let d9a = document.getElementById("blackPlayerNation"+this.l7b);
	  	d9a.src = x7q + "images/flags/" + z8f.toString() + "/" + e7g(this.l5h.z8i.i1k) + ".png";
		  d9a.height = z8f;
  		d9a.width = z8f;
    }
	}
}

}

class m1c
{

constructor(l7b)
{
	this.l7b = l7b;
	this.l5h = new e5o();
	this.m4z = new b2l(l7b);
	this.g2e = new v3w(l7b);
	this.g2e.p8t.z2m = this; 
	this.d4p = new e1q();
}

x8h()
{
	this.m4z.x8h();
}

v6b()
{
	this.m4z.v6b();
}

u4f()
{
	this.m4z.u4f();
	this.g2e.p8t.u4f();
}

q0s(c8k, g8i, n9r, i4g)
{
	this.b6n(i4g, n9r);
}

b6n(i4g, n9r)
{
	this.l5h = i4g.d5l.v8u();
	this.i0i();
	this.g2e.p8t.r9g(i4g.g9i, n9r);
}

i0i()
{
	this.g2e.i0h.i0i(this.l5h);
}

d8j(s1t)
{
	this.m4z.y7k(s1t);
  this.e6h();
}

i6l()
{
	if (this.d4p.y7d())
	{
		this.d4p.k2y();
	}
	else
	{
		if (!this.g2e.p8t.t5q())
		{
      
			this.d4p.z2m = this; 
			this.d4p.h2p();
			this.g2e.p8t.z2z();
		}
	}
}

e6h()
{
}

}

const o3l =
{
	i1t : 0,
	x9e : 1,
	t2h : 2,
	n4l : 3,
	q3k : 4,
 	x8m : 5,
	p6q : 6,
	g9i : 7,
	u2w : 8,
	event : 9,
	e5p : 10
};

const r3w =
{
	g7h : 0,
	g6i : 1,
	i9f : 2
};

let q9c = 0;
let x7d = 0;
let m8s = 0;
let l1h = 0;
let d6e = 0;
let m2k = 0;
let w4z = 0;
let h7b = 0;

let i9f = false;

function j8c(f, s)
{
	let c9e = f.d5l.w4g.a3h.s5m();
	let i2k = s.d5l.w4g.a3h.s5m();
	if (c9e < i2k)
	{
		return i9f ? -1 : 1;
	}
	if (c9e > i2k)
	{
		return i9f ? 1 : -1;
	}
	c9e = f.d5l.z8i.a3h.s5m();
	i2k = s.d5l.z8i.a3h.s5m();
	if (c9e < i2k)
	{
		return -1;
	}
	if (c9e > i2k)
	{
		return 1;
	}
	return 0;
}

function m0o(f, s)
{
	let c9e = f.d5l.z8i.a3h.s5m();
	let i2k = s.d5l.z8i.a3h.s5m();
	if (c9e < i2k)
	{
		return i9f ? -1 : 1;
	}
	if (c9e > i2k)
	{
		return i9f ? 1 : -1;
	}
	c9e = f.d5l.w4g.a3h.s5m();
	i2k = s.d5l.w4g.a3h.s5m();
	if (c9e < i2k)
	{
		return -1;
	}
	if (c9e > i2k)
	{
		return 1;
	}
	return 0;
}

function w2y(f, s)
{
	let g6k = f.d5l.w4g.v5t - s.d5l.w4g.v5t;
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	g6k = f.d5l.z8i.v5t - s.d5l.z8i.v5t;
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	return j8c(f, s);
}

function k4d(f, s)
{
	let g6k = f.d5l.z8i.v5t - s.d5l.z8i.v5t;
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	g6k = f.d5l.w4g.v5t - s.d5l.w4g.v5t;
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	return j8c(f, s);
}

function t8e(f, s)
{
	let g6k = f.d5l.w4g.i1k - s.d5l.w4g.i1k;
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	g6k = f.d5l.z8i.i1k - s.d5l.z8i.i1k;
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	return j8c(f, s);
}

function e0p(f, s)
{
	let g6k = f.d5l.z8i.i1k - s.d5l.z8i.i1k;
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	g6k = f.d5l.w4g.i1k - s.d5l.w4g.i1k;
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	return j8c(f, s);
}

function k8r(f, s)
{
	let g6k = f.d5l.p6q - s.d5l.p6q;
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	return j8c(f, s);
}

function s3s(f, s)
{
	let g6k = s.d5l.q8a.q8a() - f.d5l.q8a.q8a();
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	return j8c(f, s);
}

function a2u(f, s)
{
	let g3r = f.d5l.s3f.v3d;
	let o7a = s.d5l.s3f.v3d;
	if (g3r < o7a)
	{
		return i9f ? -1 : 1;
	}
	if (g3r > o7a)
	{
		return i9f ? 1 : -1;
	}
	let g6k = f.d5l.s3f.s0o.q8a() - s.d5l.s3f.s0o.q8a();
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	g6k = f.d5l.e5p - s.d5l.e5p;
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	g6k = f.d5l.d7c - s.d5l.d7c;
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	return j8c(f, s);
}

function g5q(f, s)
{
	let g6k = s.d5l.e5p - f.d5l.e5p;
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	g6k = s.d5l.d7c - f.d5l.d7c;
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	return j8c(f, s);
}

function u8e(f, s)
{
	let g6k = s.x6w - f.x6w;
	if (i9f)
	{
		g6k = -g6k;
	}
	if (g6k < 0) return -1;
	if (g6k > 0) return 1;
	return j8c(f, s);
}

class h2g
{

constructor(l7b)
{
	this.l7b = l7b;
	this.a0h = [];
	this.l2o = null;
	this.h3c = null;
	this.t0g = null;
	this.g8j = [];
	this.q1o = [];
	this.a4b = -1;
	this.d8s = r3w.g7h;
	this.t4w = 0;
  this.u5i = null;
}

y9m()
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
	this.t0g.innerHTML = s;
	this.g8j = this.t0g.getElementsByTagName("TH");
	let l7b = this.l7b;

 	this.g8j[o3l.i1t].onclick = this.e2l.bind(this);
	this.g8j[o3l.x9e].onclick = this.c2d.bind(this);
  this.g8j[o3l.t2h].onclick = this.m7j.bind(this);
	this.g8j[o3l.n4l].onclick = this.e2l.bind(this);
	this.g8j[o3l.q3k].onclick = this.w2j.bind(this);
  this.g8j[o3l.x8m].onclick = this.q4s.bind(this);
	this.g8j[o3l.p6q].onclick = this.p9b.bind(this);
	this.g8j[o3l.g9i].onclick = this.k6a.bind(this);
	this.g8j[o3l.u2w].onclick = this.t9y.bind(this);
	this.g8j[o3l.event].onclick = this.v4p.bind(this);
	this.g8j[o3l.e5p].onclick = this.w1p.bind(this);
}

l3c(a0h)
{
	this.a0h = a0h;
	this.m5c();
}

m0l()
{
	this.a0g("grid-player");
	this.a0g("grid-rating");
 	this.a0g("grid-flag");
	this.a0g("grid-result");
	this.a0g("grid-moves");
	this.a0g("grid-year");
	this.a0g("grid-event");
	this.a0g("grid-round");
}

m4t()
{
	this.r5b("grid-player", q9c);
	this.r5b("grid-rating", x7d);
 	this.r5b("grid-flag", h7b);
	this.r5b("grid-result", m8s);
	this.r5b("grid-moves", l1h);
	this.r5b("grid-year", d6e);
	this.r5b("grid-event", m2k);
	this.r5b("grid-round", w4z);

}

a0g(t1d)
{
	let l9h = this.l2o.getElementsByClassName(t1d);
	for (let i = 0; i < l9h.length; i++) {
		l9h[i].style.display = "none";
	}
}

c3d(t1d)
{
	let l9h = this.l2o.getElementsByClassName(t1d);
	for (let i = 0; i < l9h.length; i++) {
		l9h[i].style.display = "table-cell";
	}
}

r5b(t1d, width)
{
	let l9h = this.l2o.getElementsByClassName(t1d);
	for (let i = 0; i < l9h.length; i++) {
		l9h[i].style.width = (width) + "px";
	}
}

m5c()
{
	this.t4w = this.l2o.clientWidth;
	this.t4w -= 17;
	if (this.t4w < 100)
	{
		this.t4w = 100;
	}
	q9c = 200;
	x7d = 52;
	m8s = 34;
	l1h = 50;
	d6e = 52;
	m2k = 200;
	w4z = 50;
  h7b = 30;

 
	let i1y = document.getElementsByClassName("tdreplay")[0];
	if (i1y.clientWidth <= n2g)
	{
		let s4a = 0.7;
		q9c *= s4a;
		x7d *= s4a;
		m8s *= s4a;
		l1h *= s4a;
		d6e *= s4a;
		m2k *= s4a;
		w4z *= s4a;
	}
	this.q9k();
}

h7p()
{
	this.m0l();
	this.m4t();

  let p5i = 2.8;
  let w8t = 2.8;
  let v3t = 17;
	if (this.t4w <= 400)
	{
		this.c3d("grid-player");
		this.c3d("grid-result");
    this.c3d("grid-year");
		this.c3d("grid-event");
    let m5m = 5 * (p5i + w8t);
		let c8t = m8s + d6e;
		let m1u = Math.trunc((this.t4w - c8t - m5m - v3t) / 3);
		this.r5b("grid-player", m1u);
		this.r5b("grid-event", m1u);
	}
	else if (this.t4w <= 580)
	{
		this.c3d("grid-player");
		this.c3d("grid-rating");
		this.c3d("grid-result");
		this.c3d("grid-year");
		this.c3d("grid-event");
    let m5m = 7 * (p5i + w8t);
		let c8t = 2 * x7d + m8s + d6e;
		let m1u = Math.trunc((this.t4w - c8t - m5m - v3t) / 3);
		this.r5b("grid-player", m1u);
		this.r5b("grid-event", m1u);
	}
	else
	{
		this.c3d("grid-player");
		this.c3d("grid-rating");
    this.c3d("grid-flag");
		this.c3d("grid-result");
		this.c3d("grid-moves");
		this.c3d("grid-year");
		this.c3d("grid-event");
		this.c3d("grid-round");
    let m5m = 11 * (p5i + w8t);
		let c8t = 2 * x7d + 2 * h7b + m8s + l1h + d6e + w4z;
		let m1u = Math.trunc((this.t4w - c8t - m5m - v3t) / 3);
		this.r5b("grid-player", m1u);
		this.r5b("grid-event", m1u);
	}
}

q9k()
{
	let z8f = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.l7b + "\">"; 
	for (const i4g of this.a0h)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += i4g.d5l.w4g.a3h.b7w();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (i4g.d5l.w4g.v5t)
		{
			s += i4g.d5l.w4g.v5t;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (i4g.d5l.w4g.i1k != y2m.g7h)
		{
      let t2m = x7q + "images/flags/" + z8f.toString() + "/" + e7g(i4g.d5l.w4g.i1k) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += t2m;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += i4g.d5l.z8i.a3h.b7w();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (i4g.d5l.z8i.v5t)
		{
			s += i4g.d5l.z8i.v5t;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (i4g.d5l.z8i.i1k != y2m.g7h)
		{
      let t2m = x7q + "images/flags/" + z8f.toString() + "/" + e7g(i4g.d5l.z8i.i1k) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += t2m;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-result\">";
		s += j9b(i4g.d5l.p6q);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += i4g.x6w;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += i4g.d5l.q8a.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += i4g.d5l.s3f.v3d;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += i4g.d5l.e2e();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.h3c.innerHTML = s;

  let h1q = document.getElementById('gameList' + this.l7b);
  h1q.addEventListener('click', this.g1e.bind(this));

	this.h7p();
}

z1e(b6b)
{
	if (b6b != this.a4b)
	{
		this.a4b = b6b;
		this.d8s = r3w.g6i;
	}
	else
	{
		if (this.d8s == r3w.g7h)
		{
			this.d8s = r3w.g6i;
		}
		else if (this.d8s == r3w.g6i)
		{
			this.d8s = r3w.i9f;
		}
		else if (this.d8s == r3w.i9f)
		{
			this.d8s = r3w.g6i;
		}
	}
	i9f = (this.d8s == r3w.i9f);

	for (const u4j of this.g8j)
	{
		let s = u4j.v3g;
		let t7b = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let w3d = t7b.replace(" grid-header-sort grid-header-sort-asc", "");
		u4j.v3g = w3d;
	}
	let u8v = this.g8j[this.a4b];
	if (this.d8s == r3w.i9f)
	{
		u8v.v3g = u8v.v3g + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		u8v.v3g = u8v.v3g + " grid-header-sort grid-header-sort-asc";
	}
}

e2l(event)
{
	this.z1e(o3l.i1t);
	this.a0h.sort(j8c);
	this.q9k();
}

c2d(event)
{
	this.z1e(o3l.x9e);
	this.a0h.sort(w2y);
	this.q9k();
}

m7j(event)
{
	this.z1e(o3l.t2h);
	this.a0h.sort(t8e);
	this.q9k();
}

o0h(event)
{
	this.z1e(o3l.n4l);
	this.a0h.sort(m0o);
	this.q9k();
}

w2j(event)
{
	this.z1e(o3l.q3k);
	this.a0h.sort(k4d);
	this.q9k();
}

q4s(event)
{
	this.z1e(o3l.x8m);
	this.a0h.sort(e0p);
	this.q9k();
}

p9b(event)
{
	this.z1e(o3l.p6q);
	this.a0h.sort(k8r);
	this.q9k();
}

t9y(event)
{
	this.z1e(o3l.u2w);
	this.a0h.sort(s3s);
	this.q9k();
}

v4p(event)
{
	this.z1e(o3l.event);
	this.a0h.sort(a2u);
	this.q9k();
}

w1p(event)
{
	this.z1e(o3l.e5p);
	this.a0h.sort(g5q);
	this.q9k();
}

k6a(event)
{
	this.z1e(o3l.g9i);
	this.a0h.sort(u8e);
	this.q9k();
}

g1e(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.u5i)
  {
    this.u5i(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class b8t
{

constructor()
{
	this.x1l = new o8k();
	this.b6q = new o8k();
	this.f7k = false;
	this.t1i = 0;
	this.d3y = 0;
	this.x4w = [];
}

}

var tooltip = null;

class f1z
{

constructor(l7b)
{
	this.l7b = l7b;
	this.w5z = new l8k();
	this.z2m = null;
	this.x6s = new b8t();
	this.q1p = null;
	this.u5a = [];
	this.y3q = [];
  this.g4i = [];
  this.o0s = [];
	this.q7a = -1;
	this.z3v = new j6p();
  this.i4m = null;
	this.z8s = true;
	this.v7h = false;
	this.y1b = [];
	this.q8j = 0;
  this.u0k = true;
  this.v7r = false;
	this.y7m = false;
	this.x7c = true;
  this.f8a = false;
}

r9g(q8p, n9r)
{
	this.w5z = q8p.v8u();
  this.w5z.y2n();
	this.i4m = this.w5z.b8x(n9r);
	this.q0s();
}

i4z(n4j)
{
  this.a4g(this.g4i[n4j]);
}

q0s()
{
	this.b4j();
	this.z2z();
  this.d1t(this.w5z.e3h(this.i4m));
}

b4j()
{
	let g9p = new c8l();
  g9p.n1d(this.u0k);
	g9p.k6w(this.f8a);
  /*
	g9p.setOneLine(this.f8a);
  */
	g9p.p2g(this.y7m);
	g9p.p2d(this.x7c);
	g9p.w1d(this.w5z);

  this.q1p.innerHTML = g9p.u5m.p2p;
  this.u5a = this.q1p.getElementsByClassName("tdmove");
  this.y3q = this.q1p.getElementsByClassName("tdcomment");

	this.s9p("tdmove");
	this.s9p("tdcomment");
	this.s9p("tddia");
	this.s9p("tdmedal");
  this.s9p("tdcolors");

  this.a1b("tdmove");

	this.w1u();
	this.b7l();
}

s9p(v4r)
{
	let l7b = this.l7b;
	let d1g = this.q1p.getElementsByClassName(v4r);
	for (const m8o of d1g)
	{
    let n9r = m8o.getAttribute('movenr');
    m8o.onclick = this.x1e.bind(this, n9r);
	}
}

a1b(v4r)
{
	let l7b = this.l7b;
	let d1g = this.q1p.getElementsByClassName(v4r);
	for (const m8o of d1g)
	{
    let n9r = m8o.getAttribute('movenr');
    m8o.onmouseover = this.u9l.bind(this, n9r);
    m8o.onmouseleave = this.h7r.bind(this, n9r);
	}
}

u4f()
{
	this.w1u();
}

w1u()
{
	let w3r = this.q1p.getElementsByClassName("tddia");
	for (const h4t of w3r)
	{
		let d7t = new s0a();
		d7t.b6d = h4t.getElementsByTagName("canvas")[0];
		let q2f = this.z3v.j0h();
		d7t.b6d.width = q2f;
		d7t.b6d.height = q2f;
		d7t.i7j(this.z3v);
		let z4w = this.w5z.b8x(h4t.getAttribute('movenr'));
    d7t.e0q(this.w5z.x1l(z4w));
    if (z4w.d4v)
    {
  		d7t.v8e(z4w.d4v.p0d());
	  	d7t.x9g(z4w.d4v.c5z());
    }
    else
    {
   		d7t.v8e(this.w5z.s9u());
	  	d7t.x9g(this.w5z.n8y());
    }
		d7t.g2k();
	}
}

b7l()
{
	let d9x = this.q1p.getElementsByClassName("tdmedal");
	for (const m1q of d9x)
	{
		let b6d = m1q.getElementsByTagName("canvas")[0];
		b6d.width = 40;
		b6d.height = 16;
		let u5j = b6d.getContext('2d');
		let rect = new x2v();
		rect.x9h(40);
		rect.p6z(16);
		let z4w = this.w5z.b8x(m1q.getAttribute('movenr'));
    if (z4w.d4v)
    {
  		b7l(u5j, rect, z4w.d4v.b0s());
    }
    else
    {
  		b7l(u5j, rect, this.w5z.j6s());
    }
	}
}

z2z()
{
	let s1t = new u9g();
	s1t.y9l = this.w5z.y9l();
  s1t.o7c = this.w5z.x1l(this.i4m);
  if (this.i2x())
  {
    s1t.p0d = this.w5z.s9u();
	  s1t.c5z = this.w5z.n8y();
  }
  else
  {
  	s1t.p0d = this.i4m.d4v.p0d();
	  s1t.c5z = this.i4m.d4v.c5z();
  }
  
	if (this.t5q())
	{
		s1t.s3u = new w3p();
	}
	else
	{
    let l3h = this.i4m.v8u();
		this.w5z.u3j(l3h);
		s1t.s3u = l3h.d4v.b8f().v8u();
	}
  
 	if (!this.i2x())
	{
		s1t.a9g = this.i4m.d4v.b8f();
	}
	s1t.j3r = this.j3r();
	s1t.j4r = this.j4r();
	s1t.j9z = this.j9z();
	s1t.b5h = 0; 
  s1t.l3n = this.w5z.l3n(this.i4m);
	if (this.z2m)
	{
		this.z2m.d8j(s1t);
	}
}

p8d(o6t)
{
	this.i4m = this.w5z.b8x(o6t);
	this.z2z();
}

s6b(e4n)
{
	switch (e4n)
	{
		case g1r:
		case r3o:
		case w4t:
			this.f2x();
			break;
		case z4m:
		case o0y:
		case j0n:
			this.k1h();
			break;
		case g6j:
		case z7o:
		case e0y:
			this.j1l();
			break;
		case z7h:
		case o4v:
		case k6e:
			this.z2k();
			break;
		case j5w:
			break;
		case g8w:
			break;
	}
}

u9n()
{
  if (this.i4m.n1f)
  {
    this.d1t(this.i4m.n1f.f6y);
  }
  else
  {
    this.d1t(0);
  }
}

t0l()
{
	this.u9n();
	this.z2z();
}

j4r()
{
	return !this.i2x();
}

i2x()
{
	return this.w5z.i2x(this.i4m);
}

t5q()
{
	return this.w5z.t5q(this.i4m);
}

j3r()
{
	return this.w5z.j3r(this.i4m);
}

s3u(c2h)
{
	if (this.t5q())
	{
		return null;
	}
	else
	{
    let l3h = this.i4m.v8u();
		this.w5z.p3c(l3h, c2h);
		return l3h.d4v;
	}
}

k1h()
{
	if (this.j4r())
	{
		this.w5z.p3n(this.i4m);
		this.t0l();
	}
}

j9z()
{
	return !this.t5q();
}

f2x()
{
	if (this.j9z())
	{
		this.j0j(0);
	}
}

j0j(index)
{
	let s2u = this.w5z.g3s(this.i4m);
	if (index >= 0 && index < s2u)
	{
		this.w5z.p3c(this.i4m, index);
		this.t0l();
	}
}

z2k()
{
	if (this.j9z())
	{
		this.w5z.t4u(this.i4m);
		this.t0l();
	}
}

j1l()
{
	if (this.j4r())
	{
		this.i4m = this.w5z.b2u();
		this.t0l();
	}
}

y8y()
{
	if (this.z8s)
	{
		this.v0l();
	}
	else
	{
		this.m8c();
	}
}

b1f()
{
	if (this.v7h)
	{
		this.v7h = false;
		this.z2m.m4z.d7t.u6i();
		this.z2z();
	}
	else
	{
		this.z2z();
	}
}


m8c()
{
	if (this.t5q())
	{
		this.z2z();
		return;
	}
  if (chess)
  {
  	this.j0j(0);
    return;
  }

  
 	let d4v = this.s3u(0);
  if (!d4v.d3y())
 	{
  	this.j0j(0);
	  return;
 	}

  
	let l6s = false;
	if (!this.x6s.f7k)
	{
		l6s = true;
	}
	else
	{
		l6s = false;
		if (this.x6s.t1i < this.x6s.d3y)
		{
			if (this.x6s.b6q.z4a(this.x6s.x1l))
			{
				l6s = true;
			}
		}
	}
	if (l6s)
	{
		this.x6s.x1l = this.w5z.x1l(this.i4m);
		this.x6s.b6q = this.w5z.x1l(this.i4m);
		this.x6s.f7k = true;
		this.x6s.t1i = 0;
		this.x6s.x4w.length = 0;
		this.x6s.x4w.push(d4v.g0w()); 
		this.x6s.d3y = d4v.d3y();
		if (this.x6s.d3y > 1)
		{
			let q9x = f0c(this.x6s.b6q, d4v.b8f());
			for (let i = 0; i < this.x6s.d3y - 1; i++)
			{
				this.x6s.x4w.push(q9x[i]);
			}
		}
		this.x6s.x4w.push(d4v.g5e());
	}
	if (this.x6s.t1i < this.x6s.d3y)
	{
		let n7n = d4v.n7n();
		let f6t = this.x6s.x4w[this.x6s.t1i];
		let g5e = this.x6s.x4w[this.x6s.t1i + 1];
		this.x6s.b6q.n2o(f6t, e5q.m9a);
		this.x6s.b6q.n2o(g5e, n7n);
		this.x6s.x1l = this.x6s.b6q.v8u();
		this.x6s.t1i++;
		let s1t = new u9g();
		s1t.o7c = this.x6s.b6q.v8u();
		s1t.j4r = this.j4r();
		s1t.j9z = this.j9z();
		if (this.z2m)
		{
			this.z2m.d8j(s1t);
		}
	}
	else
	{
		this.x6s.f7k = false;
		this.j0j(0);
	}
}



v0l()
{
	if (this.v7h)
	{
		let p0r = this.z2m.m4z.d7t.v1n();
		if (p0r)
		{
			if (this.q8j < this.y1b.length - 1)
			{
				this.z2m.m4z.d7t.s3z(this.y1b[this.q8j],
					this.y1b[this.q8j+1], true);
				this.q8j++;
			}
			else
			{
				this.v7h = false;
				this.j0j(0);
			}
		}
		return;
	}

	if (this.t5q())
	{
		this.z2z();
		return;
	}

	this.y1b.length = 0;
	let d4v = this.s3u(0);
	let d3y = d4v.d3y();
	if (d3y == 0)
	{
		this.y1b.push(d4v.g0w()); 
		this.y1b.push(d4v.f8g());
	}
	else
	{
		this.y1b.push(d4v.g0w());
		if (d3y > 1)
		{
      let x1l = this.w5z.x1l(this.i4m);
      let q9x = f0c(x1l, d4v.b8f());
			for (let i = 0; i < d3y - 1; i++)
			{
				this.y1b.push(q9x[i]);
			}
		}
		this.y1b.push(d4v.f8g());
	}

	this.z2m.m4z.d7t.s3z(this.y1b[0],
		this.y1b[1], d3y > 0);
	this.q8j = 1;
	this.v7h = true;
}

b1y(y8a)
{
	for (const m of this.u5a)
	{
		if (m.getAttribute('movenr') == y8a)
		{
			return m;
		}
	}
	return null;
}

t1c(y8a)
{
	let q6v = [];
	for (const g4l of this.y3q)
	{
		if (g4l.getAttribute('movenr') == y8a)
		{
			q6v.push(g4l);
		}
	}
	return q6v;
}

a4g(d5m)
{
	let j7e = d5m.offsetTop;
	let o3y = d5m.scrollHeight;

	let x4h = this.q1p.offsetTop;
	let z2e = this.q1p.scrollTop;
	let a7c = this.q1p.clientHeight;
	let b7x = this.q1p.scrollHeight;
	let y8l = j7e - x4h;
	if (y8l >= z2e && y8l + o3y <= z2e + a7c - 1)
	{
		
	}
	else
	{
		
		let top = y8l - (a7c / 2);
		if (top < 0) top = 0;
		this.q1p.scrollTop = top;
	}
}

a6b(n7v, h1j)
{
	let w5n = n7v;
	while (w5n.y1o)
	{
		w5n = w5n.y1o;
	}
 	while (w5n)
	{
    if (this.w5z.h1t(w5n.f6y) == false)
    {
 	  	let d5m = this.b1y(w5n.f6y);
  	  if (d5m)
 		  {
  		  d5m.classList.add(h1j);
 	  	}
    }
    w5n = w5n.t3g;
  }
}

d1t(n9r)
{
  
 	for (const d4v of this.u5a)
	{
 		d4v.classList.remove('tdcurline');
    d4v.classList.remove('tdcurnode1');
	}
 	for (const g4l of this.y3q)
	{
 		g4l.classList.remove('tdcurline');
	}

  
	if (this.q7a >= 0)
	{
		let d5m = this.b1y(this.q7a);
		if (d5m)
		{
			d5m.classList.remove('tdcurmove');
		}
	}

  
  let c7p = true;
  let r9x = this.w5z.c8c(this.i4m);
 	for (const n7v of r9x)
	{
    if (n7v.y1o && c7p)
		{
		  this.a6b(n7v, 'tdcurnode1');
      c7p = false;
    }
    else
    {
      if (this.w5z.h1t(n7v.f6y) == false)
      {
   	  	let s2l = this.b1y(n7v.f6y);
	  	  if (s2l)
  		  {
	  		  s2l.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let d5m = this.b1y(n9r);
	if (d5m)
	{
    d5m.classList.remove('tdcurline');
		d5m.classList.add('tdcurmove');
		this.a4g(d5m);
	}
	this.q7a = n9r;
}

o2z()
{
	let d4v = this.b1y(this.q7a);
	if (!d4v) return;
	let z0e = d4v.offsetTop;
	let u9m = null;
	let a7j = -1;
	for (const m of this.u5a)
	{
		if (m.offsetTop < z0e)
		{
			if (m.offsetTop > a7j)
			{
				u9m = m;
				a7j = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (u9m)
	{
		this.m7r(u9m.getAttribute('movenr'));
	}
	else
	{
		if (this.u5a.length)
		{
			this.m7r(this.u5a[0].getAttribute('movenr'));
		}
	}
}

l1n()
{
	let d4v = this.b1y(this.q7a);
	if (!d4v)
	{
		this.f2x();
		return;
	}
	let z0e = d4v.offsetTop;
	for (const m of this.u5a)
	{
		if (m.offsetTop > z0e)
		{
			this.m7r(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.u5a.length)
	{
		this.m7r(this.u5a[this.u5a.length - 1].getAttribute('movenr'));
	}
}

m7r(o6t)
{
  
  
  
  
  if (this.i4m.n1f)
  {
    if (this.i4m.n1f.f6y == o6t)
    {
      return;
    }
  }
  else
  {
    if (o6t == 0)
    {
      return;
    }
  }
	
  this.p8d(o6t);
  this.d1t(o6t);
	
}

e3h()
{
	return this.w5z.e3h(this.i4m);
}

i7j(z3v)
{
  this.z3v = z3v.v8u();
	this.z3v.v8w = 0;
	this.z3v.b6j = 0;
	this.z3v.k1p = 32;
  this.z3v.i5c = 2;
 	this.z3v.g6s = false;
}

y9l()
{
	return this.w5z.y9l();
}

e7s()
{
	return this.w5z.e7s();
}

f1a()
{
	return this.w5z.f1a(this.i4m);
}

p2a()
{
	return this.w5z.p2a();
}

x1e(n9r, event)
{
  this.m7r(n9r);
}

u9l(n9r, event)
{
  if (!this.v7r) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const m8o = event.currentTarget; 
  const rect = m8o.getBoundingClientRect();
  console.log(`x2v.q7j: ${rect.left}`);
  console.log(`x2v.i1m: ${rect.top}`);
  let s2n = rect.left;
  let e5u = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let o3w = this.z3v.j0h();

  if (s2n + o3w > viewportWidth)
  {
    s2n = viewportWidth - o3w - 5;
  }
  if (s2n < 5)
  {
    s2n = 5;
  }
  if (e5u + o3w > viewportHeight)
  {
    e5u = viewportHeight - o3w - 5;
  }
  if (e5u < 5)
  {
    e5u = 5;
  }

  let z4w = this.w5z.b8x(n9r);
  let x1l = this.w5z.x1l(z4w);
  tooltip.innerHTML = this.s1a(x1l);

  tooltip.style.left = `${s2n}px`;
  tooltip.style.top = `${e5u}px`;
  tooltip.classList.add('visible');
}

h7r(n9r, event)
{
  if (!this.v7r) return;
  tooltip.classList.remove('visible');
}

s1a(x1l)
{
  let d7t = new s0a();
  const tempCanvas = document.createElement('canvas');
	d7t.b6d = tempCanvas;
	let q2f = this.z3v.j0h();
	d7t.b6d.width = q2f;
	d7t.b6d.height = q2f;
	d7t.i7j(this.z3v);
  d7t.e0q(x1l);
  d7t.g2k();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="${imageDataURL}" alt="Chess Position" width="${boardSize}" height="${boardSize}">`;
}

}

class p6t
{

constructor()
{
	this.fontSize = 15;
  this.x0l = true;
 	this.p1n = true;
}

v8u()
{
  return Object.assign(new p6t(), this);
}

}
class v3w
{

constructor(l7b)
{
  this.i0h = new g0e(l7b);
  this.p8t = new f1z(l7b);
}

}

class e1q
{

constructor()
{
	this.w0m = false;
	this.z2m = null;
	this.e4y = null;
	this.c4d = 6;
	this.p3t = null;
	this.d1e = null;
	this.u4i = null;
	this.o5o = null;
	this.f7i = null;
	this.i7v = false;
}

h2p()
{
	this.w0m = false;
	this.a4p();
	this.p3t.classList.replace('autoPlay', 'autoStop');
	this.o5o.style.display = 'none';
	this.f7i.style.display = 'none';
	this.d1e.style.display = 'inline-block';
	this.u4i.style.display = 'inline-block';
	this.a3c();
	this.z2m.m4z.a1l = false;
}

k2y()
{
	if (this.e4y)
	{
		clearInterval(this.e4y);
		this.e4y = null;
		this.p3t.classList.replace('autoStop', 'autoPlay');
		this.o5o.style.display = 'inline-block';
		this.f7i.style.display = 'inline-block';
		this.d1e.style.display = 'none';
		this.u4i.style.display = 'none';
		this.z2m.m4z.a1l = true; 
		this.z2m.g2e.p8t.b1f();
	}
}

a4p()
{
	let l7b = this.z2m.l7b;
	this.e4y = setInterval(function(){ g1d(l7b); },
		this.z2m.g2e.p8t.z8s ? this.c4d * 2 : this.c4d * 100);
}

y7d()
{
	return this.e4y != null;
}

j4r()
{
	return !this.z2m.g2e.p8t.i2x();
}

j9z()
{
	return !this.z2m.g2e.p8t.t5q();
}

i9k()
{
	if (this.i7v)
	{
		return;
	}
	else
	{
		this.i7v = true;
	}
	if (!this.j9z())
	{
		this.k2y();
	}
	else
	{
		this.z2m.g2e.p8t.y8y();
	}
	this.i7v = false;
}

u7c()
{
	if (this.e4y)
	{
		if (this.c4d < 50)
		{
			this.c4d++;
			clearInterval(this.e4y);
			this.a4p();
			this.a3c();
		}
	}
}

d0w()
{
	if (this.e4y)
	{
		if (this.c4d > 1)
		{
			this.c4d--;
			clearInterval(this.e4y);
			this.a4p();
			this.a3c();
		}
	}
}

a3c()
{
	h1s(this.d1e, this.c4d < 50);
	h1s(this.u4i, this.c4d > 1);
}

}

let z4x = null;
let a0s = 0;
let s4t = null;

class b9s
{

constructor()
{
	this.index = 0;
	this.u0y = '';
	this.i1y = null;
	this.n1z = false;
	this.z2m = null;
	this.v4n = null;
  this.a0h = [];
	this.i9b = 0;
  this.h0o = 0;

	this.i0z = null;
	this.z1q = null;
	this.left = null;
	this.y5u = null;
	this.p3w = null;
	this.f7g = null;
	this.e7o = null;
	this.d4q = null;
	this.u3o = null;
	this.q9g = null;
	this.p2h = null;
 	this.b7t = null;
 	this.b7j = null;
	this.z0a = null;
	this.o5o = null;
	this.d1e = null;
	this.p3t = null;
	this.f7i = null;
	this.u4i = null;
	this.m2p = null;
 	this.m0t = null;
  this.x4l = null;
	this.o5c = null;
  this.o4u = null;
	this.q6n = null;
	this.u2n = null;
	this.l2o = null;
	this.p2y = null;
	this.k2o = null;
	this.p6s = null;
  this.t4y = null;
  this.z6z = null;
	this.c6m = null;
	this.q4x = null;
	this.q0w = null;
	this.k6k = null;
	this.w7p = null;

	this.q6c = null;
	this.d0h = null;
	this.c4b = null;
	this.a6x = null;

  
  this.q8l = null;
  this.j9d = null;
  this.n7y = null;
  this.x5b = null;
  this.n4n = null;
  this.m6w = null;
}

j3k(index, i1y, u0y)
{
	this.index = index;
	this.i1y = i1y;
	this.u0y = u0y;
	i1y.innerHTML = '';
	i1y.id = "replay";

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

  i1y.innerHTML = s;

	this.i0z = document.getElementById("rootParent"+index);
	this.z1q = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.y5u = document.getElementById("leftContainer"+index);
	this.p3w = document.getElementById("leftNest"+index);
	this.f7g = document.getElementById("leftNorth"+index);
	this.e7o = document.getElementById("boardHolder"+index);
	this.d4q = document.getElementById("boardPanel"+index);
	this.u3o = document.getElementById("boardCanvas"+index);
	this.q9g = document.getElementById("belowBoard"+index);
	this.p2h = document.getElementById("replayPanel"+index);
 	this.b7t = document.getElementById("goToPrevious"+index);
 	this.b7j = document.getElementById("goToNext"+index);
	this.z0a = document.getElementById("goToBegin"+index);
	this.o5o = document.getElementById("playBackward"+index);
	this.d1e = document.getElementById("playSlower"+index);
	this.p3t = document.getElementById("autoPlay"+index);
	this.f7i = document.getElementById("playForward"+index);
	this.u4i = document.getElementById("playFaster"+index);
	this.m2p = document.getElementById("goToEnd"+index);
  this.m0t = document.getElementById("flipBoard"+index);
  this.x4l = document.getElementById("download"+index);
	this.o5c = document.getElementById("showGameList"+index);
  this.o4u = document.getElementById("settings"+index);
	this.q6n = document.getElementById("leftSouth"+index);
	this.u2n = document.getElementById("leftSouthNest"+index);
	this.l2o = document.getElementById("listParent"+index);
	this.p2y = document.getElementById("listHeader"+index);
	this.k2o = document.getElementById("listHeaderTable"+index);
	this.p6s = document.getElementById("listBody"+index);
  this.t4y = document.getElementById("list-button-container"+index);
  this.z6z = document.getElementById("hideGameList"+index);
	this.c6m = document.getElementById("gameList"+index);
	this.q4x = document.getElementById("right"+index);
	this.q0w = document.getElementById("rightNest"+index);
	this.k6k = document.getElementById("rightNorth"+index);
	this.w7p = document.getElementById("rightSouth"+index);
	this.q6c = document.getElementById("nota-container"+index);
  this.q6c.style.fontSize = v0o.fontSize + 'px';
	this.d0h = document.getElementById("nota-header-container"+index);
	this.c4b = document.getElementById("headerPanel"+index);
	this.a6x = document.getElementById("movesPanel"+index);
}

y9m()
{
	this.i1y.style.display = 'block';
	this.d1e.style.display = 'none';
	this.u4i.style.display = 'none';
	this.l2o.style.display = 'none';

	this.n1z = false;
	if (this.i1y.clientWidth <= n2g)
	{
		this.t2o();
		this.n1z = true;
	}
	else
	{
		this.l0j();
		this.g1s();
	}
  this.r9w();
	let l7b = this.index;

	this.z0a.onclick = this.r9f.bind(this);
	this.o5o.onclick = this.k1h.bind(this);
	this.d1e.onclick = this.u7c.bind(this);
	this.p3t.onclick = this.n4u.bind(this);
	this.u4i.onclick = this.d0w.bind(this);
	this.f7i.onclick = this.f2x.bind(this);
	this.m2p.onclick = this.c6v.bind(this);
  this.b7t.onclick = this.j6e.bind(this);
  this.b7j.onclick = this.g5t.bind(this);
  this.m0t.onclick = this.x8h.bind(this);
 	this.x4l.onclick = this.u4v.bind(this);
	this.o5c.onclick = this.y0y.bind(this);
 	this.z6z.onclick = this.m8n.bind(this);

  this.o4u.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

	this.z2m = new m1c(this.index);
	this.z2m.m4z.d7t.j3g(this.u3o);
	this.z2m.m4z.d4q = this.d4q;
  this.z2m.m4z.i7j(v2k);
	this.z2m.g2e.i0h.s0f = this.c4b;
	this.z2m.g2e.p8t.q1p = this.a6x;
  this.z2m.g2e.p8t.i7j(v2k);
	this.z2m.d4p.p3t = this.p3t;
	this.z2m.d4p.d1e = this.d1e;
	this.z2m.d4p.u4i = this.u4i;
	this.z2m.d4p.o5o = this.o5o;
	this.z2m.d4p.f7i = this.f7i;

	this.v4n = new h2g(this.index);
	this.v4n.l2o = this.l2o;
	this.v4n.h3c = this.c6m;
	this.v4n.t0g = this.k2o;
	this.v4n.y9m();
	this.v4n.l3c(this.a0h);
  this.v4n.u5i = (c6m, index) => {
    this.t7e(c6m, index);
  };
	if (this.v4n.a0h.length)
	{
		this.q0s(0, 0);
	}
	else
	{
		let i4g = new j0c();
		this.z2m.q0s(null, 1, 0, i4g);
	}
}

s4j(u0y)
{
	this.u0y = u0y;
 	let f0a = this.u0y.split('\n');
	let u4p = 0;
	for (const x7f of f0a)
	{
		if (x7f.startsWith("[Event \""))
		{
			let h9e = u4p;
      let d2r = f0a.length;
   		let v9y = f0a.slice(h9e, d2r);
  		let t1z = new s5c(v9y);
	  	this.v4n.a0h[this.i9b] = t1z.f1c();
      break;
    }
    u4p++;
	}
  this.q0s(0, 0);
}

r9w()
{
	let f0a = this.u0y.split('\n');
	let v9s = [];
	let u4p = 0;
	for (const x7f of f0a)
	{
		if (x7f.startsWith("[Event \""))
		{
			v9s.push(u4p);
		}
		u4p++;
	}
	let i = 0;
	this.a0h = [];
	for (const t1a of v9s)
	{
		let h9e = t1a;
		let d2r = 0;
		if (i < v9s.length - 1)
		{
			d2r = v9s[i + 1];
		}
		else
		{
			d2r = f0a.length;
		}
		let v9y = f0a.slice(h9e, d2r);
		let t1z = new s5c(v9y);
		let i4g = t1z.f1c();
		this.a0h.push(i4g);
		i++;
	}
}

g3u()
{
	if (this.n1z || this.z1q.clientHeight <= n2g)
	{
		this.i1y.style.b3r = "0px";
		this.i1y.style.a5e = "0px";
		this.i1y.style.width = "100%";
		this.i1y.style.height = "88vh";
	}
	else
	{
		this.i1y.style.b3r = "1px solid gray";
		this.i1y.style.a5e = "1px solid gray";
		this.i1y.style.height = "88vh";
	}
}

e2c()
{
	this.g3u();

	this.left.style.width = "100%";

	let o5k = this.f7g.getBoundingClientRect();
	this.q6n.style.top = (o5k.height) + "px";
	this.g1s();

	this.k6l();
	this.l0j();
	this.j3x();
	this.k2b();
  this.f2t()
}

c3c()
{
	this.g3u();

	let h4o = this.z1q.getBoundingClientRect();
	this.left.style.width = (h4o.width * 0.50) + "px";
	let v4x = this.left.getBoundingClientRect();

	let o5k = this.f7g.getBoundingClientRect();
	this.q6n.style.top = (o5k.height) + "px";
	this.g1s();

	this.q4x.style.left = (v4x.width) + "px";
	this.q4x.style.width = (h4o.width - v4x.width) + "px";

	this.k6l();
	this.l0j();
	this.j3x();
	this.k2b();
  this.f2t()
}

l0j()
{
}

h1v()
{
  this.f7g.style.height = '100%';
  this.k6k.appendChild(this.q6c);
  this.q6c.style.height = '100%';
  this.q4x.style.display = 'block';
}

t2o()
{
  this.f7g.style.height = '70%';
  this.u2n.appendChild(this.q6c);
  this.q6c.style.height = '100%';
  this.q4x.style.display = 'none';
}

y0y(event)
{
	this.l2o.style.display = 'block';
  let y6r = this.l2o.clientHeight - this.p2y.clientHeight - this.t4y.clientHeight;
  this.p6s.style.height = y6r + "px";
	this.j3x();
}

m8n(event)
{
 	this.l2o.style.display = 'none';
}

k2b()
{
	this.z2m.g2e.i0h.s3w();
}

f2t()
{
}

j3x()
{
  this.v4n.m5c();
}

k6l()
{
	let o5k = this.f7g.getBoundingClientRect();
	let c4c = this.q9g.getBoundingClientRect();
	this.e7o.style.height = (o5k.height - c4c.height - 1) + "px";
	this.z2m.m4z.m5c();
}

g1s()
{
	let g1j = this.p3w.getBoundingClientRect();
	let o5k = this.f7g.getBoundingClientRect();
	let u0c = g1j.height - o5k.height;
	if (u0c < 0) u0c = 0;
	this.q6n.style.height = u0c + "px";
}

v9m()
{
  m0x('goToPrevious'+this.index, this.i9b > 0);
  m0x('goToNext'+this.index, this.i9b < this.v4n.a0h.length - 1);
}

d4o(e)
{
	this.z2m.m4z.d7t.mouseDown(e);
}

n5l(e)
{
	this.z2m.m4z.d7t.mouseMove(e);
}

t6q(e)
{
	this.z2m.m4z.d7t.mouseUp(e);
}

q0o(e)
{
	this.z2m.m4z.d7t.touchStart(e);
}

m6m(e)
{
	this.z2m.m4z.d7t.touchMove(e);
}

m3f(e)
{
	this.z2m.m4z.d7t.touchEnd(e);
}

u7c(event)
{
	this.z2m.d4p.u7c();
}

d0w(event)
{
	this.z2m.d4p.d0w();
}

k1h(event)
{
	this.z2m.d4p.k2y();
	this.z2m.g2e.p8t.k1h();
}

f2x(event)
{
	this.z2m.d4p.k2y();
	this.z2m.g2e.p8t.f2x();
}

r9f(event)
{
	this.z2m.d4p.k2y();
	this.z2m.g2e.p8t.j1l();
}

c6v(event)
{
	this.z2m.d4p.k2y();
	this.z2m.g2e.p8t.z2k();
}

n4u(event)
{
	this.z2m.i6l();
}

e9c()
{
 	if (this.v4n.a0h.length)
  {
    this.q0s(0, 0);
  }
}

j6e(event)
{
 	if (this.i9b > 0)
  {
    this.q0s(this.i9b - 1, 0);
  }
}

g5t(event)
{
  if (this.i9b < this.v4n.a0h.length - 1)
  {
    this.q0s(this.i9b + 1, 0);
  }
}

g0f()
{
	if (this.v4n.a0h.length)
  {
    this.i9b = this.v4n.a0h.length - 1;
    this.q0s(this.v4n.a0h.length - 1, 0);
	}
}

q0s(i9b, n9r)
{
  if (i9b >= 0 && i9b <= this.v4n.a0h.length - 1)
  {
    this.i9b = i9b;
  	this.z2m.q0s(null, 1, n9r, this.v4n.a0h[this.i9b]);
  }
  this.v9m();
}

x8h(event)
{
	this.z2m.x8h();
}

v6b()
{
	this.z2m.v6b();
}

k7u()
{
	if (this.i1y.clientWidth <= n2g)
	{
		if (this.n1z)
		{
			this.e2c();
		}
		else
		{
			this.t2o();
			this.n1z = true;
			this.e2c();
		}
	}
	else
	{
		if (!this.n1z)
		{
			this.c3c();
		}
		else
		{
			this.h1v();
			this.n1z = false;
			this.c3c();
		}
	}
}

t7e(c6m, index)
{
	this.q0s(index, 0);
  this.m8n();
}

u4v(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.u0y.length - 1)
  {
    if (this.u0y[i] == '[')
    {
        break;
    }
    i++;
  }
  let u0y = this.u0y.substring(i);
  a.href = window.URL.createObjectURL(new Blob([u0y], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

l2q()
{
  this.z2m.m4z.i7j(v2k);
  this.z2m.m4z.m5c();
  this.z2m.g2e.p8t.i7j(v2k);
  this.z2m.g2e.p8t.b4j();
  let q6c = document.getElementById("nota-container"+this.index);
  q6c.style.fontSize = v0o.fontSize + 'px';
}

async onSettingsClick()
{
  const dialog = new o1s();
  const { p6q } = await dialog.show();

  if (p6q === dialog.k0m)
  {
    this.l2q();
  }
}

}

class o1s
{

constructor()
{
  this.k0m = 1;
  this.z6a = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.b0l();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.j9d = this.dialog.querySelector(".piece-select");
  this.n7y = this.dialog.querySelector(".coordinates-checkbox");
  this.x5b = this.dialog.querySelector(".font-select");
  this.n4n = this.dialog.querySelector(".ok-button");
  this.m6w = this.dialog.querySelector(".cancel-button");

  this.n4n.onclick = this.u2y.bind(this);
 	this.m6w.onclick = this.t2a.bind(this);
}

b0l()
{
  const v9n = e9k();
  const s = `
    <dialog id="settingsDialog" class="settingsDialog">
      <h2>Settings</h2>

      <div class="settings-row">
        <span class="label-text">Pieces:</span>
        <select class="pieceSelect piece-select">
          ${v9n.map((v8b, i) => '<option value="' + i + '">' + v8b + '</option>').join('')}
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

u2y(event)
{
  v2k.t7o = this.j9d.value;
  localStorage.setItem(b4h, v2k.t7o);
  e3o(v2k.t7o);
  v2k.g6s = this.n7y.checked;
  localStorage.setItem(p9p, v2k.g6s.toString());
  v0o.fontSize = this.x5b.value;
  localStorage.setItem(d0f, v0o.fontSize);
  this.dialog.close('ok');
}

t2a(event)
{
  this.dialog.close('cancel');
}

async show()
{
  c9m = true;

  this.j9d.value = v2k.t7o;
  this.n7y.checked = v2k.g6s;
  this.x5b.value = v0o.fontSize;

  const p6q = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.k0m : this.z6a);
    };
    this.dialog.showModal();
  });

  c9m = false;
  return { p6q };
}

}

const c1t = 38;
const q5w = 40;
const z4m = 37;
const o0y = 37;
const j0n = 52;
const g1r = 39;
const r3o = 39;
const w4t = 54;
const g6j = 36;
const z7o = 36;
const e0y = 55;
const z7h = 35;
const o4v = 35;
const k6e = 49;
const k4s = 187;
const h1o = 107;
const c9v = 61;
const t9u = 42;
const b2a = 170;
const g8w = 8;
const j5w = 13;
let f7a = false;
let c9m = false;

const n2g = 767;
let o8n = [];
let i2z = -1;
let u3a = new l3a();

let v2k = new j6p();
let v0o = new p6t();

window.onload = function()
{
  f0j();
  q0z();
  t2z();
};

document.onkeydown = h0b;

function h0b(e)
{
  if (e.e4n === "Escape")
  {
    return;
  }

  if (c9m)
  {
    
    e.preventDefault();
    return;
  }

	let p9h = e || window.event;
	let e4n = p9h.keyCode;

	if (f7a) return;
	f7a = true;

	if (i2z == -1) return;

	if (e.ctrlKey)
	{
		if (e4n == 66) 
		{
				o8n[i2z].x8h();
				e.preventDefault();
				
				
				
		}
		f7a = false;
		return;
	}
	if (e4n)
	{
		
		m3k(e4n);
		e.preventDefault(); 
		
	}
	f7a = false;
}

function g1d(l7b)
{
	o8n[l7b].z2m.d4p.i9k();
}

function m3k(e4n)
{
	if (i2z == -1) return;

	if (e4n == c1t)
	{
		o8n[i2z].z2m.g2e.p8t.o2z();
	}
	else if (e4n == q5w)
	{
		o8n[i2z].z2m.g2e.p8t.l1n();
	}
	else if (e4n == z4m || e4n == o0y || e4n == j0n ||
	e4n == g1r || e4n == r3o || e4n == w4t ||
	e4n == g6j || e4n == z7o ||
	e4n == z7h || e4n == o4v)
	{
		o8n[i2z].z2m.g2e.p8t.s6b(e4n);
	}
	else if (e4n == k4s || e4n == h1o || e4n == c9v)
	{
		o8n[i2z].doFlipBoard();
	}
}

function g2p(z1t, f8o)
{
	let y3a = z1t.length;
	let q0n = 0;

	function check(n)
	{
		if (n == y3a)
		{
			f8o();
		}
	}

  for (let i = 0; i < z1t.length; ++i)
  {
    let b3y = z1t[i];
    let img = document.createElement("img");
    let r0d = b3y.replace(x7q, "");
    img.id = r0d.replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
    u3a.add(img);
    img.addEventListener("load", function()
    {
        q0n++;
        check(q0n);
    });
    img.src = b3y;
  }
}

function f0j()
{
 	g2p(e5i(), e8c);
}

function k7u()
{
	for (const d9s of o8n)
	{
		d9s.k7u();
	}
}

function e8c()
{
	let s3l = document.getElementsByClassName("tdreplay");
	for (const i1y of s3l)
	{
		let d9s = new b9s();
		d9s.j3k(o8n.length, i1y, i1y.innerHTML);
		d9s.y9m();
		o8n.push(d9s);
	}
	if (o8n.length)
	{
		i2z = 0;
	}
	window.addEventListener("resize", k7u);
	k7u();
}

function m0x(s5m, y8o)
{
	let button = document.getElementById(s5m);
	if (y8o)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function h1s(button, y8o)
{
	if (y8o)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const p9p = 'Coordinates';
const b4h = 'Pieces';
const d0f = 'MovesFontSize';
const d0k = 'SearchTime';
const u3u = 'MultiPV';
const o0c = 'Threads';
const x2n = 'Memory';

function t2z()
{
  const coordinatesValue = localStorage.getItem(p9p);
  if (coordinatesValue === null)
  {
    v2k.g6s = true;
  }
  else
  {
    v2k.g6s = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(b4h);
  if (piecesValue === null)
  {
    v2k.t7o = 0;
  }
  else
  {
    v2k.t7o = piecesValue;
  }
  e3o(v2k.t7o);

  const movesFontSizeValue = localStorage.getItem(d0f);
  if (movesFontSizeValue === null)
  {
    v0o.fontSize = 15;
  }
  else
  {
    v0o.fontSize = movesFontSizeValue;
  }
}
const z3x =
[
	[ o7f.g7h, 			  	""      ],
	[ o7f.i4g,  		 		"game"  ],
	[ o7f.l8d,    		 	"match" ],
	[ o7f.s3f,  	"tourn" ],
	[ o7f.m2w,   			"swiss" ],
	[ o7f.c6j,    	"k.o."  ],
	[ o7f.o1a,	"simul" ],
	[ o7f.m6l,	"schev" ]
];

const d0x =
[
	[ v8z.n6r, ""        ],
	[ v8z.q9a,  "(rapid)" ],
	[ v8z.m0v,  "(blitz)" ],
	[ v8z.i2u,   "(corr)"  ]
];

const n2u =
[
	[ g5x.g7h,     		 ""     ],
	[ g5x.r5k,       		 "$145" ],
	[ g5x.s1p, 		 "$142" ],
	[ g5x.z0h, 		 "$143" ],
	[ g5x.z4u, "$144" ],
	[ g5x.g0r,  "$140" ],
	[ g5x.f5p, "$141" ]
];

const x8t =
[
	[ j6q.g7h,     		""   ],
	[ j6q.p1d,       	"$1" ],
	[ j6q.m3d, 			  	"$2" ],
	[ j6q.v5g,	"$5" ],
	[ j6q.y0l, 		  "$6" ],
	[ j6q.u4s,  	"$3" ],
	[ j6q.i9a, 		  "$4" ],
	[ j6q.k8u, 		"$22" ],
	[ j6q.g8o, 		"$8" ]
];

const k7h =
[
	[ w9y.g7h,     						""     ],
	[ w9y.q6q,      "$18"  ],
	[ w9y.l4s, 					"$16"  ],
	[ w9y.d6z,	"$14"  ],
	[ w9y.c6n, 						"$11"  ],
	[ w9y.d9d,  						"$13"  ],
	[ w9y.m4u,  "$15"  ],
	[ w9y.l4d, 					"$17"  ],
	[ w9y.o6r, 			"$19"  ],
	[ w9y.i8y,					"$44"  ],
	[ w9y.l1d, 					"$132" ],
	[ w9y.b3t,  					"$36"  ],
	[ w9y.u2h, 							"$40"  ],
	[ w9y.r6f, 			  "$138" ],
	[ w9y.u5v,	"$32"  ],
	[ w9y.q0d, 							"$146" ]
];

const a5l =
[
	[ c2u.g7h,     		""     ],
	[ c2u.g3i,     "$51"  ],
	[ c2u.w2h, 			"$52"  ],
	[ c2u.w7r,	    		"$53"  ]
];

const j7i =
[
	[ u4d.q7i, 			 	""       ],
	[ u4d.w2h,   		"middle" ],
	[ u4d.b5u,   	   	 	"low"    ]
];


function d6p(u6z)
{
	return d0x[u6z][1];
}

function k1s(r5r)
{
	for (const u6z of d0x)
	{
		if (u6z[1] == r5r)
		{
			return u6z[0];
		}
	}
	return v8z.n6r;
}

function r6y(type)
{
	return z3x[type][1];
}

function q7y(r5r)
{
	for (const t0h of z3x)
	{
		if (t0h[1] == r5r)
		{
			return t0h[0];
		}
	}
	return o7f.g7h;
}

function v7j(e1i)
{
	return n2u[e1i][1];
}

function g9x(r5r)
{
	for (const e1i of n2u)
	{
		if (e1i[1] == r5r)
		{
			return e1i[0];
		}
	}
	return g5x.g7h;
}

function y5o(style)
{
	return x8t[style][1];
}

function z9w(r5r)
{
	for (const style of x8t)
	{
		if (style[1] == r5r)
		{
			return style[0];
		}
	}
	return j6q.g7h;
}

function c8w(value)
{
	return k7h[value][1];
}

function y7g(r5r)
{
	for (const value of k7h)
	{
		if (value[1] == r5r)
		{
			return value[0];
		}
	}
	return w9y.g7h;
}

function f0d(o2c)
{
	return a5l[o2c][1];
}

function h3t(r5r)
{
	for (const i0g of a5l)
	{
		if (i0g[1] == r5r)
		{
			return i0g[0];
		}
	}
	return c2u.g7h;
}

function i9l(r5r)
{
	return r5r.length == 0 ||
		r5r == "?" ||
		r5r == "-" ||
		r5r == "*" ||
		r5r == "????.??.??";
}

function a8s(r5r)
{
	if (i9l(r5r))
	{
		return "";
	}
	else
	{
		return r5r.trim();
	}
}

function f7z(r5r, x5f)
{
	if (i9l(r5r))
	{
		return x5f;
	}
	else
	{
		return r7g(r5r, x5f);
	}
}

function g0c(value)
{
	return value ? value.toString() : "";
}

function n7e(s6z)
{
	return j7i[s6z][1];
}

function a3k(r5r)
{
	for (const s6z of j7i)
	{
		if (s6z[1] == r5r)
		{
			return s6z[0];
		}
	}
	return u4d.q7i;
}

function e3m(g6r)
{
	if (!g6r)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(g6r / 60);
		let s4r = g6r % 60;
		return div.toString() + "." + s4r.toString().padStart(2, '0');
	}
}

function k7k(p6q)
{
	switch (p6q)
	{
		case o8u.h1z:
			return "1-0";
		case o8u.g2k:
			return "1/2-1/2";
		case o8u.u4n:
			return "0-1";
		default:
			return "*";
	}
}

function p4t(v5t)
{
	if (v5t > 0 && v5t <= 9999)
	{
		return v5t.toString().padStart(4, '0');
	}
	else
	{
		return "-";
	}
}

function f7j(q8a)
{
	if (q8a.m9a())
	{
		return "????.??.??";
	}
	let r5r = '';
	if (q8a.u2w)
	{
		r5r = q8a.u2w.toString().padStart(4, '0');
	}
	else
	{
		r5r = "????";
	}
	r5r += ".";
	if (q8a.e8v)
	{
		let s5a = q8a.e8v.toString().padStart(2, '0');
		r5r += s5a;
	}
	else
	{
		r5r += "??";
	}
	r5r += ".";
	if (q8a.t8l)
	{
		let z7p = q8a.t8l.toString().padStart(2, '0');;
		r5r += z7p;
	}
	else
	{
		r5r += "??";
	}
	return r5r;
}

function x6r(s5h)
{
	if (i9l(s5h))
	{
		return new j6w();
	}
	else
	{
		let q8a = new j6w();
		q8a.p3p("yyyy.mm.dd", s5h);
		return q8a;
	}
}

function q2u(s5h, s3f)
{
	s3f.r0f = (s5h.indexOf("team") != -1);
	s3f.type = o7f.g7h;
	for (const t0h of z3x)
	{
		if (s5h.indexOf(t0h[1]) != -1)
		{
			s3f.type = t0h[0];
			break;
		}
	}
	s3f.u6z = v8z.n6r;
	for (const u6z of d0x)
	{
		if (s5h.indexOf(u6z[1]) != -1)
		{
			s3f.u6z = u6z[0];
			break;
		}
	}
}

function h8y(s5h, l5h)
{
	l5h.e5p = 0;
	l5h.d7c = 0;
	let z4w = s5h.indexOf(".");
	if (z4w != -1)
	{
		let d4j = s5h.substr(0, z4w);
		l5h.e5p = r7g(d4j, 0);
		let v5s = s5h.substr(z4w + 1, s5h.length);
		z4w = v5s.indexOf(".");
		if (z4w != -1)
		{
			d4j = v5s.substr(0, z4w);
			l5h.d7c = r7g(d4j, 0);
		}
		else
		{
			l5h.d7c = r7g(v5s, 0);
		}
	}
	else
	{
		l5h.e5p = r7g(s5h, 0);
	}
}

function q2s(l5h)
{
	let s5h = '';
	if (l5h.d7c)
	{
		s5h = l5h.e5p.toString() + "." + l5h.d7c.toString();
	}
	else if (l5h.e5p)
	{
		s5h = l5h.e5p.toString();
	}
	return s5h;
}

function d4m(s5h)
{
	if (s5h == "2-0" || s5h == "20" || s5h == "1-0" || s5h == "10")
	{
		return o8u.h1z;
	}
	else if (s5h == "1-1" || s5h == "11" || s5h == "1/2-1/2" ||
		s5h == "1/21/2" || s5h == "0.5-0.5")
	{
		return o8u.g2k;
	}
	else if (s5h == "0-2" || s5h == "02" || s5h == "0-1" || s5h == "01")
	{
		return o8u.u4n;
	}
	else
	{
		return o8u.g7h;
	}
}

function c2k(s5h)
{
	return r7g(s5h, 0);
}

function p7t(s5h)
{
	return c8d(s5h);
}

function h2n(s5h)
{
	return a1f(s5h);
}

function q2r(value)
{
	return value ? "1" : "";
}

function t9z(s5h)
{
	return s5h == "1";
}

function c1d(j7f)
{
	let l5h = new e5o();

	
	l5h.w4g.a3h.z3f(a8s(j7f.i1t));
	if (!i9l(j7f.l9z))
	{
		l5h.w4g.s6n.s5m = a8s(j7f.l9z);
		l5h.w4g.s6n.f6y = f7z(j7f.g3t, 0);
		if (!i9l(j7f.i0c))
		{
			let q8a = x6r(j7f.i0c);
			l5h.w4g.s6n.u2w = q8a.u2w;
		}
		l5h.w4g.s6n.l4l = t9z(j7f.b6s);
		l5h.w4g.s6n.i1k = h5j(a8s(j7f.c4p));
	}
	l5h.w4g.v5t = c2k(a8s(j7f.x9e));
	l5h.w4g.q0u = h2n(a8s(j7f.o9y));
	l5h.w4g.v3d = a8s(j7f.b6m);
	l5h.w4g.i1k = h2l(a8s(j7f.u0i));

	
	l5h.z8i.a3h.z3f(a8s(j7f.n4l));
	if (!i9l(j7f.r5f))
	{
		l5h.z8i.s6n.s5m = a8s(j7f.r5f);
		l5h.z8i.s6n.f6y = f7z(j7f.y6y, 0);
		if (!i9l(j7f.j2k))
		{
			let q8a = x6r(j7f.j2k);
			l5h.z8i.s6n.u2w = q8a.u2w;
		}
		l5h.z8i.s6n.l4l = t9z(j7f.v3c);
		l5h.z8i.s6n.i1k = h5j(a8s(j7f.j1s));
	}
	l5h.z8i.v5t = c2k(a8s(j7f.q3k));
	l5h.z8i.q0u = h2n(a8s(j7f.t2l));
	l5h.z8i.v3d = a8s(j7f.u6y);
	l5h.z8i.i1k = h2l(a8s(j7f.o3k));

	
	l5h.s3f.v3d = a8s(j7f.x3i);
	l5h.s3f.b9j = a8s(j7f.h6j);
	l5h.s3f.s0o = x6r(j7f.k8c);
	l5h.s3f.h3i = x6r(j7f.t3i);

	q2u(a8s(j7f.t0h), l5h.s3f);
	
	
	
	let t4a = k1s(j7f.t4a);
	if (t4a != v8z.n6r)
	{
		l5h.s3f.u6z = t4a;
	}
	l5h.s3f.i1k = h5j(a8s(j7f.k9w));
	l5h.s3f.l7v = f7z(j7f.u4e, 0);
	let t0h = q7y(j7f.t0h);
	if (t0h != o7f.g7h)
	{
		l5h.s3f.type= t0h;
	}
	l5h.s3f.g6w = f7z(j7f.j0q, 0);
	l5h.s3f.r0f = t9z(j7f.j3q);
	l5h.s3f.c9b = t9z(j7f.q9u);
	l5h.s3f.f6o = t9z(j7f.c3b);
	l5h.s3f.w7k = t9z(j7f.a8o);

	
	l5h.g1t.s5m = a8s(j7f.g1t);

	
	l5h.m9w.v3d = a8s(j7f.n7s);
	l5h.m9w.y1y = a8s(j7f.d6x);
	l5h.m9w.t5h = x6r(j7f.n4b);
	l5h.m9w.s0p = f7z(j7f.e9m, 0);
	l5h.m9w.h2j = x6r(j7f.u4x);
	l5h.m9w.s6z = a3k(j7f.y1n);

	
	l5h.v3d.v3d = a8s(j7f.v3d);

	
	l5h.q8a = x6r(j7f.q8a);
	l5h.p6q = d4m(a8s(j7f.p6q));
	l5h.u1y = p7t(a8s(j7f.u1y));
	h8y(a8s(j7f.e5p), l5h);

	
	let d1g = f7z(j7f.d1g, 0);
	l5h.d1g.t2c(d1g);

  
  l5h.id.g3j = j7f.g3j;

	return l5h;
}

function t3w(l5h)
{
	let j7f = new l5s();

	
	j7f.i1t = l5h.w4g.a3h.s5m();
	if (l5h.w4g.s6n.s5m.length)
	{
		j7f.l9z = l5h.w4g.s6n.s5m;
		if (l5h.w4g.s6n.f6y)
		{
			j7f.g3t = l5h.w4g.s6n.f6y;
		}
		if (l5h.w4g.s6n.u2w)
		{
			let l6w = new j6w();
			l6w.u2w = l5h.w4g.s6n.u2w;
			j7f.i0c = f7j(l6w);
		}
		if (l5h.w4g.s6n.l4l)
		{
			j7f.b6s = q2r(l5h.w4g.s6n.l4l);
		}
		if (l5h.w4g.s6n.i1k != y2m.g7h)
		{
			j7f.c4p = o7l(l5h.w4g.s6n.i1k);
		}
	}
	j7f.x9e = p4t(l5h.w4g.v5t);
	j7f.o9y = e3m(l5h.w4g.q0u);
	j7f.b6m = l5h.w4g.v3d;

	
	j7f.n4l = l5h.z8i.a3h.s5m();
	if (l5h.z8i.s6n.s5m.length)
	{
		j7f.r5f = l5h.z8i.s6n.s5m;
		if (l5h.z8i.s6n.f6y)
		{
			j7f.y6y = l5h.z8i.s6n.f6y;
		}
		if (l5h.z8i.s6n.u2w)
		{
			let c0f = new j6w();
			c0f.u2w = l5h.z8i.s6n.u2w;
			j7f.j2k = f7j(c0f);
		}
		if (l5h.z8i.s6n.l4l)
		{
			j7f.v3c = q2r(l5h.z8i.s6n.l4l);
		}
		if (l5h.z8i.s6n.i1k != y2m.g7h)
		{
			j7f.j1s = o7l(l5h.z8i.s6n.i1k);
		}
	}
	j7f.q3k = p4t(l5h.z8i.v5t);
	j7f.t2l = e3m(l5h.z8i.q0u);
	j7f.u6y = l5h.z8i.v3d;

	
	j7f.x3i = l5h.s3f.v3d;
	j7f.h6j = l5h.s3f.b9j;
	j7f.k8c = f7j(l5h.s3f.s0o);
	j7f.t3i = f7j(l5h.s3f.h3i);
	j7f.t4a = d6p(l5h.s3f.u6z);
	j7f.u4e = g0c(l5h.s3f.l7v);
	j7f.k9w = o7l(l5h.s3f.i1k);
	j7f.t0h = r6y(l5h.s3f.type);
	j7f.j0q = g0c(l5h.s3f.g6w);
	j7f.j3q = q2r(l5h.s3f.r0f);
	j7f.q9u = q2r(l5h.s3f.c9b);
	j7f.c3b = q2r(l5h.s3f.f6o);
	j7f.a8o = q2r(l5h.s3f.w7k);

	
	j7f.g1t = l5h.g1t.s5m;

	
	j7f.n7s = l5h.m9w.v3d;
	j7f.d6x = l5h.m9w.y1y;
	j7f.n4b = f7j(l5h.m9w.t5h);
	j7f.e9m = g0c(l5h.m9w.s0p);
	j7f.u4x = f7j(l5h.m9w.h2j);
	j7f.y1n = n7e(l5h.m9w.s6z);

	
	j7f.v3d = l5h.v3d.v3d;

	
	j7f.q8a = f7j(l5h.q8a);
	j7f.p6q = k7k(l5h.p6q);
	j7f.u1y = h7o(l5h.u1y);
	j7f.e5p = q2s(l5h);

	
	j7f.d1g = g0c(l5h.d1g.c0u());

	return j7f;
}

const x3y  					= "White";
const g3z					= "WhiteTeam";
const x2d 				= "WhiteTeamNumber";
const r1g 					= "WhiteTeamYear";
const a7d 				= "WhiteTeamSeason";
const u9j 			= "WhiteTeamCountry";
const z0x 						= "WhiteRating";
const y2p 							= "WhiteTime";
const y1k 							= "WhiteElo";
const j3o  						= "WhiteTitle";
const w2v						= "WhiteCountry";

const m6o						= "Black";
const t1o					= "BlackTeam";
const a2y 				= "BlackTeamNumber";
const d4k 					= "BlackTeamYear";
const j8h 				= "BlackTeamSeason";
const q7w 			= "BlackTeamCountry";
const e2r 						= "BlackRating";
const z0t 							= "BlackTime";
const a0x 							= "BlackElo";
const u1r  						= "BlackTitle";
const i4x						= "BlackCountry";

const m5g 				= "Event";
const h8n				= "Site";
const p2m 			 	= "EventDate";
const m3j 		 	= "EventEndDate";
const j7x 			 	= "EventSpeed";
const w3m 	 	= "EventCategory";
const e0l 		 	= "EventCountry";
const k7f 			 	= "EventType";
const w5o 		 	= "EventRounds";
const w3g 			 	= "EventTeams";
const k9b		 	= "EventComplete";
const i1q 	= "EventThreePoints";
const b6o	= "EventBoardPoints";

const v5h 							= "Annotator";

const t0s 				 		= "SourceTitle";
const l3m 				 		= "Publication";
const i3l		 		= "SourcePublisher";
const n6p		 		= "PublicationDate";
const l3y 				 		= "SourceDate";
const m7s 		= "SourceVersionNumber";
const f3u 	 		= "SourceVersionDate";
const h7w 			 		= "SourceQuality";

const y2s 					 		    = "Title";

const q2l 							 		= "Date";
const h2v 								= "Result";
const m9t 										= "ECO";
const v3n 									= "Round";

const q4k			 							= "Tags";

const g7g 									= "Setup";
const j0t 										= "FEN";
const k4i 							= "PlyCount";

const b1e      							= "GUID";

const r5y = "(";
const t8a   = ")";
const y1t    = "{";

class e9p
{

constructor()
{
  this.v0m = new s7c();
  this.u2b = new x6l();
  this.b0s = new e9u();
  this.m9n = false;
  this.v8t = false;
  this.e3t = false;
  this.q8r = '';
}

}

class s5c
{

constructor(f0a)
{
	this.i2y = new l5s();
	this.b3q = f0a;
	this.a9n = 0;
	this.j4a = '';
	this.w1q = 0;
	this.s5b = 0;
	this.b9h = '';
	this.y6k = 0;
	this.j6t = false;
	this.j5l = '';
	this.t0j = '';
	this.w5z = null;
	this.n3k = new o8k();
	this.s3e = '';
	this.l3k = false;
 	this.u2m = false;
	this.z5p = false;
}

f1c()
{
  this.y6k = 0;
	let i4g = new j0c();
	this.w5z = i4g.g9i;
	try
	{
		this.p0n();
	}
	catch (err)
	{
	}
	i4g.d5l = c1d(this.i2y);
  i4g.x6w = this.y6k;
	return i4g;
}

p0n()
{
	this.j6t = false;
	this.c2b();
	if (this.j6t)
	{
		this.y9l = t3d(this.t0j);
		this.w5z.e0q(this.y9l, 1);
	}
 	this.x9b();
}

t8c()
{
	if (this.b3q.length == 0)
	{
		return false;
	}
	if (this.a9n >= this.b3q.length)
	{
		return false;
	}
	else
	{
		this.j4a = this.b3q[this.a9n];
		this.w1q = this.j4a.length;
		this.s5b = 0;
		this.a9n++;
		return true;
	}
}

c2b()
{
	this.z5p = false;
	this.u2m = false;
	while (true)
	{
		if (!this.t8c())
		{
			return;
		}
		this.y4e();
		if (!this.k6r())
		{
			return;
		}
		this.v1d();
	}
}


y6m(l3j)
{
	let s5h = this.b9h.substr(1, this.b9h.length - 1);
	return s5h.toUpperCase() === l3j.toUpperCase();
}

x9b()
{
 	if (this.b9h.length == 0) return;
	this.l3k = false;

	while (this.b9h[0] == '{')
	{
		let p2p = this.z5m();
    let c5t = new e9p();
		this.v0g(p2p, c5t);
    if (!c5t.v0m.m9a())
		{
			this.w5z.g7d(c5t.v0m);
		}
 		if (!c5t.u2b.m9a())
		{
			this.w5z.d5g(c5t.u2b);
		}
		if (!c5t.b0s.m9a())
		{
			this.w5z.x4d(c5t.b0s);
		}
 		p2p = c5t.q8r.trim();
    if (p2p.length)
    {
      
      
      if (p2p.startsWith("[%a") && p2p.length > 7)
      {
        p2p = p2p.substr(7, p2p.length).trim();
      }
      let x0b = this.w5z.x0b();
      if (x0b.length)
      {
        x0b += ' ';
      }
      x0b += p2p;
      this.w5z.b6i(x0b);
		}
		this.y4e();
		if (this.b9h.length == 0)
		{
			return;
		}
	}
	this.g3o(this.w5z.b2u(), this.w5z.y9l());
}

g3o(l2s, p8a)
{
  let z4w = l2s.v8u();
  let x1l = p8a.v8u();

	let y0q = null;
 	let h4h = new d5f();

	do
	{
		if (this.b9h == r5y)
		{
			if (!y0q)
			{
				throw "error";
			}
			if (!this.y4e())
			{
				throw "error";
			}

 			x1l.p3n(z4w.d4v.b8f());
			x1l.k5x(h4h);
			this.w5z.p3n(z4w); 
      this.g3o(z4w, x1l);
			this.w5z.u3j(z4w); 
			x1l.u3j(z4w.d4v.b8f());

			while (this.y4e())
			{
				if (this.b9h != r5y)
				{
					break;
				}
				if (!this.y4e())
				{
					throw "error";
				}
        x1l.p3n(z4w.d4v.b8f());
				x1l.k5x(h4h);
				this.w5z.p3n(z4w); 
				this.g3o(z4w, x1l);
				this.w5z.u3j(z4w);  
				x1l.u3j(z4w.d4v.b8f());
			}
		}

		if (this.b9h == t8a)
		{
			break;
		}

		if (
			this.b9h == "1-0" ||
			this.b9h == "2-0" ||
			this.b9h == "0-1" ||
			this.b9h == "0-2" ||
			this.b9h == "1/2-1/2" ||
			this.b9h == "1-1" ||
			this.b9h == "*" ||
			this.b9h == "**" ||
			this.b9h == "-*" ||
			this.b9h == "1-0*" ||
			this.b9h == "2-0*" ||
			this.b9h == "0-1*" ||
			this.b9h == "0-2*" ||
			this.b9h == "1/2-1/2*" ||
			this.b9h == "1-1*" ||
			this.b9h == "2-00*" ||
			this.b9h == "00-2*")
			break;

		if (this.b9h[0] == '$')
		{
			if (!y0q)
			{
				throw "error";
			}
			let e1i = g9x(this.b9h);
			if (e1i != g5x.g7h)
			{
				y0q.f6u(e1i);
				continue;
			}
			let style = z9w(this.b9h);
			if (style != j6q.g7h)
			{
				y0q.c5s(style);
				continue;
			}
			let value = y7g(this.b9h);
			if (value != w9y.g7h)
			{
				y0q.a2m(value);
				continue;
			}
			let o2c = h3t(this.b9h);
			if (o2c != c2u.g7h)
			{
				y0q.a1m(o2c);
				continue;
			}
			continue;
		}
		if (this.b9h[0] == '{')
		{
			let p2p = this.z5m();
      let c5t = new e9p();
  		this.v0g(p2p, c5t);
      if (!c5t.v0m.m9a())
      {
		  	if (y0q)
			  {
				  y0q.v8e(c5t.v0m);
				}
			}
   		if (!c5t.u2b.m9a())
      {
				if (y0q)
				{
					y0q.x9g(c5t.u2b);
				}
			}
   		if (!c5t.b0s.m9a())
      {
				if (y0q)
				{
					y0q.f2l(c5t.b0s);
				}
			}
      if (c5t.v8t)
      {
				if (y0q)
				{
					y0q.j8l();
				}
			}
      if (c5t.e3t)
      {
				if (y0q)
				{
					y0q.k1u();
				}
			}
   		p2p = c5t.q8r.trim();
      if (!p2p.length)
      {
        continue;
      }
			if (y0q)
			{
        let c1g = y0q.c1g();
        if (c1g.length)
        {
          c1g += ' ';
        }
        c1g += p2p;
				y0q.x3c(c1g);
			}
			else
			{
        if (this.s3e.length)
        {
   				this.s3e += ' ';
        }
				this.s3e += p2p;
				this.l3k = true;
			}
			continue;
		}
		if (!this.g7b())
		{
			continue;
		}
		let r5q = false;
		if (this.b9h[this.b9h.length] == '*')
		{
			this.b9h = this.b9h.substr(0, this.b9h.length - 1);
			r5q = true;
		}
 		let w5e = this.i6z(this.b9h);
    let b8f = p4e(x1l, this.b9h);
 		h4h = x1l.h4h();
		x1l.u3j(b8f);
		let d4v = x3t(b8f);
    d4v.c5s(w5e);
    this.w5z.f4v(z4w, d4v);
		y0q = z4w.d4v;
		if (this.l3k)
		{
			y0q.y5a(this.s3e);
			this.l3k = false;
      this.s3e = '';
		}
		if (r5q)
		{
			break;
		}
	} while (this.y4e());
}

i6z(s5h)
{
	if (s5h.endsWith("??"))
	{
		s5h = s5h.subString(0, s5h.length-2);
		return j6q.i9a;
	}
	else if (s5h.endsWith("!!"))
	{
		s5h = s5h.subString(0, s5h.length-2);
		return j6q.u4s;
	}
	else if (s5h.endsWith("?!"))
	{
		s5h = s5h.subString(0, s5h.length-2);
		return j6q.y0l;
	}
	else if (s5h.endsWith("!?"))
	{
		s5h = s5h.subString(0, s5h.length-2);
		return j6q.v5g;
	}
	else if (s5h.endsWith("?"))
	{
		s5h = s5h.subString(0, s5h.length-1);
		return j6q.m3d;
	}
	else if (s5h.endsWith("!"))
	{
		s5h = s5h.subString(0, s5h.length-1);
		return j6q.p1d;
	}
	else
	{
		return j6q.g7h;
	}
}

g7b()
{
	let f3e = this.b9h.length;
	let z4w = -1;
	for (let i = 0; i < f3e; i++)
	{
		if (this.b9h[i] == '.')
		{
			z4w = i;
		}
	}
	if (z4w != -1)
	{
		this.b9h = this.b9h.substr(z4w + 1 , f3e);
	}
	return this.b9h.length != 0;
}

y4e()
{
	this.b9h = "";
	let s7u = '';
	let index = 0;
	let f3e = 0;
	while (true)
	{
		let q4j = 0;
		if (this.s5b < this.w1q)
		{
			q4j = this.j4a[this.s5b];
		}
		else
		{
			q4j = 0;
		}
		if (!q4j)
		{
			if (f3e)
			{
				break;
			}
			if (!this.t8c())
			{
				return false;
			}
			continue;
		}
		if (q4j == ';')
		{
			if (!this.t8c())
			{
				return false;
			}
			continue;
		}
		if (q4j == '(')
		{
			if (f3e)
			{
				break;
			}
			else
			{
				this.s5b++;
				this.b9h = r5y;
				return true;
			}
		}
		if (q4j == ')')
		{
			if (f3e)
			{
				break;
			}
			else
			{
				this.s5b++;
				this.b9h = t8a;
				return true;
			}
		}
		if (q4j == '{')
		{
			if (f3e)
			{
				break;
			}
			else
			{
				this.s5b++;
				this.b9h = y1t;
				return true;
			}
		}
		if (q4j == ' ' || q4j == '\r' || q4j == '\n')
		{
			if (f3e)
			{
				this.s5b++;
				break;
			}
			else
			{
				this.s5b++;
				continue;
			}
		}
		s7u += q4j;
		index++;
		f3e++;
		this.s5b++;
	}
	if (index)
	{
		this.b9h += s7u;
	}
	return this.b9h.length != 0;
}

z5m()
{
	let s5h = '';
	let s7u = '';
	let index = 0;
	let m9d = 0;
	while (true)
	{
		let q4j = 0;
		if (this.s5b < this.w1q)
		{
			q4j = this.j4a[this.s5b];
		}
		else
		{
			q4j = 0;
		}
		if (!q4j)
		{
			if (!this.t8c())
			{
				break;
			}
			if (index > 0)
			{
				s7u += ' '; 
				index++;
			}
			continue;
		}
		if (q4j == '{')
		{
			m9d++;
		}
		if (q4j == '}')
		{
			if (m9d)
			{
				m9d--;
			}
			else
			{
				this.s5b++;
				break;
			}
		}
		s7u += q4j;
		index++;
		this.s5b++;
	}
	if (index)
	{
		s5h += s7u;
	}
	return s5h.trim();
}

f6n()
{
	this.j5l = "";

	let k1k = 0;
	let f3e = this.j4a.length;
	for (let i = f3e - 1; i >= 0; i--)
	{
		if (this.j4a[i] == ']')
		{
			k1k = i;
			break;
		}
	}
	let index = 0;
	let p0b = false;
	let s7u = '';
	while (true)
	{
		let q4j = 0;
		if (this.s5b < this.w1q)
		{
			q4j = this.j4a[this.s5b];
		}
		else
		{
			q4j = 0;
		}
		if (!q4j)
		{
			if (!this.t8c())
			{
				break;
			}
			continue;
		}
		if (q4j == '\"')
		{
			p0b = true;
			this.s5b++;
			continue;
		}
		if (q4j == ']')
		{
			if (this.s5b == k1k)
			{
				this.s5b++;
				break;
			}
		}
		if (p0b)
		{
			s7u += q4j;
			index++;
		}
		this.s5b++;
	}
	if (index)
	{
		this.j5l += s7u;
	}
}

k6r()
{
	if (this.b9h.length == 0)
	{
		return false;
	}
	if (this.b9h[0] != '[')
	{
		return false;
	}
	
	let index = this.s5b;
	let b9b = false;
	while (index < this.w1q)
	{
		let q4j = this.j4a[index++];
		if (q4j == '\"' && this.j4a[index] == ']')
		{
			index++;
			b9b = true;
			continue;
		}
		if (q4j == '\r' || q4j == '\n')
		{
			break;
		}
		if (b9b)
		{
			b9b = false;
			break;
		}
	}
	return b9b;
}

v1d()
{
	
	if (this.y6m(x3y))
	{
		this.f6n();
		this.i2y.i1t = this.j5l;
		return;
	}
	if (this.y6m(g3z))
	{
		this.f6n();
		this.i2y.l9z = this.j5l;
		return;
	}
	if (this.y6m(x2d))
	{
		this.f6n();
		this.i2y.g3t = this.j5l;
		return;
	}
	if (this.y6m(r1g))
	{
		this.f6n();
		this.i2y.i0c = this.j5l;
		return;
	}
	if (this.y6m(a7d))
	{
		this.f6n();
		this.i2y.b6s = this.j5l;
		return;
	}
	if (this.y6m(u9j))
	{
		this.f6n();
		this.i2y.c4p = this.j5l;
		return;
	}
	if (this.y6m(y1k) || this.y6m(z0x))
	{
		this.f6n();
		this.i2y.x9e = this.j5l;
		return;
	}
	if (this.y6m(y2p))
	{
		this.f6n();
		this.i2y.o9y = this.j5l;
		return;
	}
	if (this.y6m(j3o))
	{
		this.f6n();
		this.i2y.b6m = this.j5l;
		return;
	}
	if (this.y6m(w2v))
	{
		this.f6n();
		this.i2y.u0i = this.j5l;
		return;
	}

	
	if (this.y6m(m6o))
	{
		this.f6n();
		this.i2y.n4l = this.j5l;
		return;
	}
	if (this.y6m(t1o))
	{
		this.f6n();
		this.i2y.r5f = this.j5l;
		return;
	}
	if (this.y6m(a2y))
	{
		this.f6n();
		this.i2y.y6y = this.j5l;
		return;
	}
	if (this.y6m(d4k))
	{
		this.f6n();
		this.i2y.j2k = this.j5l;
		return;
	}
	if (this.y6m(j8h))
	{
		this.f6n();
		this.i2y.v3c = this.j5l;
		return;
	}
	if (this.y6m(q7w))
	{
		this.f6n();
		this.i2y.j1s = this.j5l;
		return;
	}
	if (this.y6m(a0x) || this.y6m(e2r))
	{
		this.f6n();
		this.i2y.q3k = this.j5l;
		return;
	}
	if (this.y6m(z0t))
	{
		this.f6n();
		this.i2y.t2l = this.j5l;
		return;
	}
	if (this.y6m(u1r))
	{
		this.f6n();
		this.i2y.u6y = this.j5l;
		return;
	}
	if (this.y6m(i4x))
	{
		this.f6n();
		this.i2y.o3k = this.j5l;
		return;
	}

	
	if (this.y6m(m5g))
	{
		this.f6n();
		this.i2y.x3i = this.j5l;
		return;
	}
	if (this.y6m(h8n))
	{
		this.f6n();
		this.i2y.h6j = this.j5l;
		return;
	}
	if (this.y6m(p2m))
	{
		this.f6n();
		this.i2y.k8c = this.j5l;
		return;
	}
	if (this.y6m(m3j))
	{
		this.f6n();
		this.i2y.t3i = this.j5l;
		return;
	}
	if (this.y6m(j7x))
	{
		this.f6n();
		this.i2y.t4a = this.j5l;
		return;
	}
	if (this.y6m(w3m))
	{
		this.f6n();
		this.i2y.u4e = this.j5l;
		return;
	}
	if (this.y6m(e0l))
	{
		this.f6n();
		this.i2y.k9w = this.j5l;
		return;
	}
	if (this.y6m(k7f))
	{
		this.f6n();
		this.i2y.t0h = this.j5l;
		return;
	}
	if (this.y6m(w5o))
	{
		this.f6n();
		this.i2y.j0q = this.j5l;
		return;
	}
	if (this.y6m(w3g))
	{
		this.f6n();
		this.i2y.j3q = this.j5l;
		return;
	}
	if (this.y6m(k9b))
	{
		this.f6n();
		this.i2y.q9u = this.j5l;
		return;
	}
	if (this.y6m(i1q))
	{
		this.f6n();
		this.i2y.c3b = this.j5l;
		return;
	}
	if (this.y6m(b6o))
	{
		this.f6n();
		this.i2y.a8o = this.j5l;
		return;
	}

	
	if (this.y6m(v5h))
	{
		this.f6n();
		this.i2y.g1t = this.j5l;
		return;
	}

	
	if (this.y6m(t0s))
	{
		this.f6n();
		this.i2y.n7s = this.j5l;
		return;
	}
	if (this.y6m(l3m))
	{
		this.f6n();
		this.i2y.n7s = this.j5l;
		return;
	}
	if (this.y6m(i3l))
	{
		this.f6n();
		this.i2y.d6x = this.j5l;
		return;
	}
	if (this.y6m(l3y))
	{
		this.f6n();
		this.i2y.n4b = this.j5l;
		return;
	}
	if (this.y6m(n6p))
	{
		this.f6n();
		this.i2y.n4b = this.j5l;
		return;
	}
	if (this.y6m(m7s))
	{
		this.f6n();
		this.i2y.e9m = this.j5l;
		return;
	}
	if (this.y6m(f3u))
	{
		this.f6n();
		this.i2y.u4x = this.j5l;
		return;
	}
	if (this.y6m(h7w))
	{
		this.f6n();
		this.i2y.y1n = this.j5l;
		return;
	}

	
	if (this.y6m(y2s))
	{
		this.f6n();
		this.i2y.v3d = this.j5l;
		return;
	}

	
	if (this.y6m(q2l))
	{
		this.f6n();
		this.i2y.q8a = this.j5l;
		return;
	}
	if (this.y6m(h2v))
	{
		this.f6n();
		this.i2y.p6q = this.j5l;
		return;
	}
	if (this.y6m(m9t))
	{
		this.f6n();
		this.i2y.u1y = this.j5l;
		return;
	}
	if (this.y6m(v3n))
	{
		this.f6n();
		this.i2y.e5p = this.j5l;
		return;
	}

	
	if (this.y6m(q4k))
	{
		this.f6n();
		this.i2y.d1g = this.j5l;
		return;
	}

	
	if (this.y6m(g7g))
	{
		this.f6n();
		return;
	}
	if (this.y6m(j0t))
	{
		this.f6n();
		if (this.j5l.length == 0 || this.j5l == "?")
		{
			return;
		}
		this.j6t = true;
		this.t0j = this.j5l;
		return;
	}
	if (this.y6m(k4i))
	{
		this.f6n();
		this.y6k = r7g(this.j5l, 0);
		return;
	}
  
 	if (this.y6m(b1e))
	{
		this.f6n();
		this.i2y.g3j = this.j5l;
		return;
	}

}

u5r(p2p)
{
	let p0d = new s7c();
	let s5h = p2p.substr(6, p2p.length - 6);
	let c6a = s5h.split(",");
	for (const s of c6a)
	{
		if (s.length < 5)
		{
			continue;
		}
		let g0w = v9t(s.substr(1, 2));
		let f8g = v9t(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let c0j = v9e(g0w, f8g, c3j.u2h);
			p0d.add(c0j);
		}
		else if (s[0] == 'G')
		{
			let c0j = v9e(g0w, f8g, c3j.v0e);
			p0d.add(c0j);
		}
		else if (s[0] == 'Y')
		{
			let c0j = v9e(g0w, f8g, c3j.y8v);
			p0d.add(c0j);
		}
	}
	return p0d;
}

o5h(p2p)
{
	let c5z = new x6l();
	let s5h = p2p.substr(6, p2p.length - 6);
	let c6a = s5h.split(",");
	for (const s of c6a)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let e5k = v9t(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let g7q = o0o(e5k, c7m.g5c);
			c5z.add(g7q);
		}
		else if (s[0] == 'G')
		{
      let g7q = o0o(e5k, c7m.a4l);
			c5z.add(g7q);
		}
		else if (s[0] == 'Y')
		{
      let g7q = o0o(e5k, c7m.q1l);
			c5z.add(g7q);
		}
	}
	return c5z;
}

o2k(p2p)
{
	let s5h = p2p.substr(6, p2p.length - 6);
	let z4w = s5h.indexOf("]");
	if (z4w != -1)
	{
		let b0s = new e9u();
		let value = r7g(s5h.substr(0, z4w), 0);
		b0s.t2c(value);
		return b0s;
	}
	else
	{
		return new e9u();
	}
}


v0g(p2p, c5t)
{
	if (
		p2p.startsWith("[%cal") ||
    p2p.startsWith("[%csb") ||
		p2p.startsWith("[%csl") ||
		p2p.startsWith("[%mdl") ||
		p2p.startsWith("[%evp") ||
		p2p.startsWith("[%eval") ||
		p2p.startsWith("[%emt") ||
		p2p.startsWith("[%tqu") ||
		p2p.startsWith("[%tqu") ||
		p2p.startsWith("[%pws") ||
		p2p.startsWith("[%pth") ||
		p2p.startsWith("[%eog"))
	{
		let q8v = 0;
		{
     	let k1n = p2p.indexOf("[%cal");
			if (k1n != -1)
			{
        let t4u = p2p.indexOf("]", k1n);
				if (t4u != -1)
				{
     			let r4h = p2p.substring(k1n, t4u + 1);
					c5t.v0m = this.u5r(r4h).v8u();
					if (t4u > q8v) q8v = t4u;
				}
			}
		}
		{
     	let k1n = p2p.indexOf("[%csb");
   		if (k1n != -1)
			{
        let t4u = p2p.indexOf("]", k1n);
				if (t4u != -1)
				{
          let v6u = p2p.substring(k1n, t4u + 1);
					c5t.u2b = this.o5h(v6u).v8u();
					if (t4u > q8v) q8v = t4u;
				}
			}
		}
		{
      let k1n = p2p.indexOf("[%csl");
			if (k1n != -1)
			{
        let t4u = p2p.indexOf("]", k1n);
				if (t4u != -1)
				{
          let v6u = p2p.substring(k1n, t4u + 1);
					c5t.u2b = this.o5h(v6u).v8u();
					if (t4u > q8v) q8v = t4u;
				}
			}
		}
		{
      let k1n = p2p.indexOf("[%mdl");
			if (k1n != -1)
			{
        let t4u = p2p.indexOf("]", k1n);
				if (t4u != -1)
				{
          let a3z = p2p.substring(k1n, t4u + 1);
					c5t.b0s = this.o2k(a3z).v8u();
					if (t4u > q8v) q8v = t4u;
				}
			}
		}
		{
      let k1n = p2p.indexOf("[%evp");
			if (k1n != -1)
			{
        let t4u = p2p.indexOf("]", k1n);
				if (t4u != -1)
				{
					if (t4u > q8v) q8v = t4u;
				}
			}
		}
		{
      let k1n = p2p.indexOf("[%eval");
			if (k1n != -1)
			{
        let t4u = p2p.indexOf("]", k1n);
				if (t4u != -1)
				{
					if (t4u > q8v) q8v = t4u;
				}
			}
		}
		{
      let k1n = p2p.indexOf("[%emt");
			if (k1n = -1)
			{
        let t4u = p2p.indexOf("]", k1n);
				if (t4u != -1)
				{
					if (t4u > q8v) q8v = t4u;
				}
			}
		}
		{
      let k1n = p2p.indexOf("[%tqu");
			if (k1n != -1)
			{
        let t4u = p2p.indexOf("]", k1n);
				if (t4u != -1)
				{
					if (t4u > q8v) q8v = t4u;
				}
			}
		}
		{
      let k1n = p2p.indexOf("[%pws");
			if (k1n != -1)
			{
        let t4u = p2p.indexOf("]", k1n);
				if (t4u != -1)
				{
          c5t.m9n = true;
					if (t4u > q8v) q8v = t4u;
				}
			}
		}
		{
      let k1n = p2p.indexOf("[%pth");
			if (k1n != -1)
			{
        let t4u = p2p.indexOf("]", k1n);
				if (t4u != -1)
				{
          c5t.v8t = true;
					if (t4u > q8v) q8v = t4u;
				}
			}
		}
		{
      let k1n = p2p.indexOf("[%eog");
			if (k1n != -1)
			{
        let t4u = p2p.indexOf("]", k1n);
				if (t4u != -1)
				{
					c5t.e3t = true; 
					if (t4u > q8v) q8v = t4u;
				}
			}
		}
    c5t.q8r = p2p.substring(q8v + 1);
	}
	else
	{
		c5t.q8r = p2p;
	}
}

}

class u9p
{

constructor()
{
  this.x6w = 0;
	this.d5l = new l5s();
	this.g9i = new l8k();
}

v8u()
{
	let h8r = new u9p();
  h8r.x6w = this.x6w;
	h8r.d5l = this.d5l.v8u();
	h8r.g9i = this.g9i.v8u();
	return h8r;
}

}

class l5s
{

constructor()
{
	this.i1t = '';
	this.l9z = '';
	this.g3t = '';
	this.i0c = '';
	this.b6s = '';
	this.c4p = '';
	this.x9e = '';
	this.o9y = '';
	this.b6m = '';
  this.u0i = '';
	this.n4l = '';
	this.r5f = '';
	this.y6y = '';
	this.j2k = '';
	this.v3c = '';
	this.j1s = '';
	this.q3k = '';
	this.t2l = '';
	this.u6y = '';
  this.o3k = '';
	this.x3i = '';
	this.h6j = '';
	this.k8c = '';
	this.t3i = '';
	this.t4a = '';
	this.u4e = '';
	this.k9w = '';
	this.t0h = '';
	this.j0q = '';
	this.j3q = '';
	this.q9u = '';
	this.c3b = '';
	this.a8o = '';
	this.g1t = '';
	this.n7s = '';
	this.d6x = '';
	this.n4b = '';
	this.e9m = '';
	this.u4x = '';
	this.y1n = '';
	this.v3d = '';
	this.q8a = '';
	this.p6q = '';
	this.u1y = '';
	this.e5p = '';
	this.d1g = '';
  this.g3j = '';
}

v8u()
{
	let i5k = new l5s();

	i5k.i1t = this.i1t;
	i5k.l9z = this.l9z;
	i5k.g3t = this.g3t;
	i5k.i0c = this.i0c;
	i5k.b6s = this.b6s;
	i5k.c4p = this.c4p;
	i5k.x9e = this.x9e;
	i5k.o9y = this.o9y;
	i5k.b6m = this.b6m;
	i5k.u0i = this.u0i;

	i5k.n4l = this.n4l;
	i5k.r5f = this.r5f;
	i5k.y6y = this.y6y;
	i5k.j2k = this.j2k;
	i5k.v3c = this.v3c;
	i5k.j1s = this.j1s;
	i5k.q3k = this.q3k;
	i5k.t2l = this.t2l;
	i5k.u6y = this.u6y;
	i5k.o3k = this.o3k;

	i5k.x3i = this.x3i;
	i5k.h6j = this.h6j;
	i5k.k8c = this.k8c;
	i5k.t3i = this.t3i;
	i5k.t4a = this.t4a;
	i5k.u4e = this.u4e;
	i5k.k9w = this.k9w;
	i5k.t0h = this.t0h;
	i5k.j0q = this.j0q;
	i5k.j3q = this.j3q;
	i5k.q9u = this.q9u;
	i5k.c3b = this.c3b;
	i5k.a8o = this.a8o;

	i5k.g1t = this.g1t;

	i5k.n7s = this.n7s;
	i5k.d6x = this.d6x;
	i5k.n4b = this.n4b;
	i5k.e9m = this.e9m;
	i5k.u4x = this.u4x;
	i5k.y1n = this.y1n;

	i5k.v3d = this.v3d;

	i5k.q8a = this.q8a;
	i5k.p6q = this.p6q;
	i5k.u1y = this.u1y;
	i5k.e5p = this.e5p;

	i5k.d1g = this.d1g;
 	i5k.g3j = this.g3j;

	return i5k;
}

}


const b4a =
[
		[ y2m.g7h, 				  									"",											            "", 																	"",   ""    ],
		[ y2m.e7i, 										  "Afghanistan",											"Afghanistan", 												"af", "AFG" ],
		[ y2m.u2k, 									 	"AlandIslands",										  "Aland", 															"ax", "ALA" ],
		[ y2m.w9i,  											 	"Albania",													"Albania", 														"al", "ALB" ],
		[ y2m.x4s,  											 	"Algeria",													"Algeria", 														"dz", "DZA" ],
		[ y2m.b5z,  								 	"AmericanSamoa",										"American Samoa", 										"as", "ASM" ],
		[ y2m.t3s,  											 	"Andorra",													"Andorra", 														"ad", "AND" ],
		[ y2m.h7n,                           "Angola",													  "Angola", 														"ao", "AGO" ],
		[ y2m.b7y,  											  "Anguilla",												  "Anguilla", 													"ai", "AIA" ],
		[ y2m.x2e,  										  "Antarctica",											  "Antarctica", 												"aq", "ATA" ],
		[ y2m.e3c,  								  "AntiguaBarbuda",									  "Antigua & Barbuda", 									"ag", "ATG" ],
		[ y2m.q7n,  										 	"Argentina",												"Argentina", 													"ar", "ARG" ],
		[ y2m.x0d,  											 	"Armenia",													"Armenia",														"am", "ARM" ],
		[ y2m.e6b,  												 	"Aruba",														"Aruba",															"aw", "ABW" ],
		[ y2m.f3z,  										 	"Australia",												"Australia",													"au", "AUS" ],
		[ y2m.q3y,  											 	"Austria",													"Austria",											 			"at", "AUT" ],
		[ y2m.j3b,  										  "Azerbaijan",											  "Azerbaijan",													"az", "AZE" ],
		[ y2m.i3m,  											 	"Bahamas",													"Bahamas",														"bs", "BHS" ],
		[ y2m.k0b,  											 	"Bahrain",													"Bahrain",														"bh", "BHR" ],
		[ y2m.f1j,  										  "Bangladesh",											  "Bangladesh",													"bd", "BGD" ],
		[ y2m.t9a,  											  "Barbados",												  "Barbados",														"bb", "BRB" ],
		[ y2m.f9i,  								 	"BasqueCountry",	 									"Basque Country",     								"x1", "XX1" ], 
		[ y2m.l5o,  											 	"Belarus",													"Belarus",														"by", "BLR" ],
		[ y2m.d9n,  											 	"Belgium",													"Belgium",														"be", "BEL" ],
		[ y2m.a1r,  												  "Belize",													  "Belize",															"bz", "BLZ" ],
		[ y2m.s3a,  												 	"Benin",														"Benin",															"bj", "BEN" ],
		[ y2m.g5u,  											 	"Bermuda",													"Bermuda",														"bm", "BMU" ],
		[ y2m.i6o,  												  "Bhutan",													  "Bhutan",															"bt", "BTN" ],
		[ y2m.c0k,  												"Bolivia",													"Bolivia",														"bo", "BOL" ],
		[ y2m.f0k,  						  "BosniaHerzegovina",       				  "Bosnia & Herzegovina", 							"ba", "BIH" ], 
		[ y2m.x2h,  											  "Botswana",                      	  "Botswana",														"bw", "BWA" ],
		[ y2m.c8n,  									  "BouvetIsland",                 		"Bouvet",															"bv", "BVT" ],
		[ y2m.w9z,  												  "Brazil",                        	  "Brazil",															"br", "BRA" ],
		[ y2m.v5x,  	 	"BritishIndianOceanTerritory",			"British Indian Ocean Territory", 		"io", "IOT" ],
		[ y2m.h0i, 							 	"BruneiDarussalam",								  "Brunei",															"bn", "BRN" ], 
		[ y2m.r1u,  											  "Bulgaria",												  "Bulgaria", 													"bg", "BGR" ],
		[ y2m.x7v, 										  "BurkinaFaso",											"Burkina Faso",												"bf", "BFA" ],
		[ y2m.d5n,  											 	"Burundi",													"Burundi",														"bi", "BDI" ],
		[ y2m.s9q,  											  "Cambodia",												  "Cambodja",														"kh", "KHM" ],
		[ y2m.z5l,  											  "Cameroon",												  "Cameroon",														"cm", "CMR" ],
		[ y2m.q3r,  												  "Canada",													  "Canada",															"ca", "CAN" ],
		[ y2m.c9t,  										  "CapeVerde",												"Cape Verde",													"cv", "CPV" ], 
		[ y2m.s8i,  										  "Catalonia",												"Catalonia",													"x2", "XX2" ], 
		[ y2m.x3p,  								  "CaymanIslands",										"Cayman Islands",											"ky", "CYM" ],
		[ y2m.w3b,  				  "CentralAfricanRepublic",					  "Central African Republic",						"cf", "CAF" ],
		[ y2m.c0l,  													  "Chad",														  "Chad",																"td", "TCD" ],
		[ y2m.y7u,  												 	"Chile",														"Chile",															"cl", "CHL" ],
		[ y2m.g6o,  												 	"China",														"China",															"cn", "CHN" ],
		[ y2m.y6a,  							 	"ChristmasIsland",									"Christmas",													"cx", "CXR" ],
		[ y2m.m7e,  					 	"CocosKeelingIslands",							"Cocos (Keeling)",										"cc", "CCK" ], 
		[ y2m.k6f,  											  "Colombia",												  "Colombia",														"co", "COL" ],
		[ y2m.y9e,  											 	"Comoros",													"Comoros",														"km", "COM" ],
		[ y2m.q6z,  												 	"Congo",														"Congo-Brazzaville", 						    	"cg", "COG" ],
		[ y2m.z0k,  			 	"CongoDemocraticRepublic",					"Congo-Kinshasa(Zaire)",						  "cd", "COD" ],
		[ y2m.o5b,  									 	"CookIslands",											"Cook Islands",											 	"ck", "COK" ],
		[ y2m.o2d,  											"CostaRica",												"Costa Rica",												 	"cr", "CRI" ],
		[ y2m.j0m,  												"Croatia",													"Croatia",														"hr", "HRV" ],
		[ y2m.k7l,  													  "Cuba",														  "Cuba",															 	"cu", "CUB" ],
		[ y2m.e5f,  												"Curacao",													"Curacao",											  		"cw", "CUW" ],
		[ y2m.q8t,  												  "Cyprus",													  "Cyprus",														 	"cy", "CYP" ],
		[ y2m.q0t,  									      "Czechia",										      "Czech Republic", 										"cz", "CZE" ],
		[ y2m.p5k,  										  "CoteIvoire",	   					 				  "Cote d'Ivoire",											"ci", "CIV" ],
		[ y2m.z4y,  												"Denmark",													"Denmark",													  "dk", "DNK" ],
		[ y2m.r1a,  											  "Djibouti",												  "Djibouti",													 	"dj", "DJI" ],
		[ y2m.q9s,  											  "Dominica",												  "Dominica",													 	"dm", "DMA" ],
		[ y2m.u9c,  							"DominicanRepublic",								"Dominican Republic",								 	"do", "DOM" ],
		[ y2m.a5m,  												"Ecuador",													"Ecuador",													 	"ec", "ECU" ],
		[ y2m.d1a,  													"Egypt",														"Egypt", 														 	"eg", "EGY" ],
		[ y2m.b8s,  										  "ElSalvador",											  "El Salvador",												"sv", "SLV" ],
		[ y2m.f2e,  												"England",													"England",														"x3", "GBR" ],
		[ y2m.q6i,  							  "EquatorialGuinea",								  "Equatorial Guinea",									"gq", "GNQ" ], 
		[ y2m.q7h,  												"Eritrea",													"Eritrea",														"er", "ERI" ],
		[ y2m.n9q,  												"Estonia",													"Estonia",														"ee", "EST" ],
		[ y2m.z6v,  											  "Ethiopia",												  "Ethiopia",													 	"et", "ETH" ],
		[ y2m.e1f,  								"FalklandIslands",									"England",														"fk", "FLK" ], 
		[ y2m.j2t,  									  "FaroeIslands",										  "Faroes",														 	"fo", "FRO" ],
		[ y2m.d6n,  													  "Fiji",														  "Fiji",															 	"fj", "FJI" ],
		[ y2m.i6d,  												"Finland",													"Finland",														"fi", "FIN" ],
		[ y2m.a1e,  												  "France",													  "France",														 	"fr", "FRA" ],
		[ y2m.h3d,  									  "FrenchGuiana",										  "Guyana", 														"gf", "GUF" ], 
		[ y2m.a1v,  								"FrenchPolynesia",									"Tahiti(French Polinesia)", 					"pf", "PYF" ], 
		[ y2m.q4c,  			"FrenchSouthernTerritories",				"French Southern and Antarctic Lands","tf", "ATF" ],
		[ y2m.d0n,  													"Gabon",														"Gabon",															"ga", "GAB" ], 
		[ y2m.b9l,  												  "Gambia",													  "Gambia",															"gm", "GMB" ],
		[ y2m.v2d,  												"Georgia",													"Georgia",														"ge", "GEO" ],
		[ y2m.z9k,  												"Germany",													"Germany",														"de", "DEU" ],
		[ y2m.l4h, 													  "Ghana",														"Ghana",															"gh", "GHA" ],
		[ y2m.j2m,  											"Gibraltar",												"Gibraltar",													"gi", "GIB" ],
		[ y2m.f5e,  												  "Greece",													  "Greece",															"gr", "GRC" ],
		[ y2m.f3x,  											"Greenland",												"Greenland",													"gl", "GRL" ],
		[ y2m.c5f,  												"Grenada",													"Grenada",														"gd", "GRD" ],
		[ y2m.h6r,  										  "Guadeloupe",											  "Guadeloupe",													"gp", "GLP" ],
		[ y2m.s0k,  													  "Guam",														  "Guam",																"gu", "GUM" ],
		[ y2m.x1i,  											"Guatemala",												"Guatemala",													"gt", "GTM" ],
		[ y2m.w2r,  											  "Guernsey",												  "Guernsey",														"gg", "GGY" ], 
		[ y2m.k1w,  												  "Guinea",													  "Guinea",															"gn", "GIN" ],
		[ y2m.p3r,  									  "GuineaBissau",										  "Guinea-Bissau",											"gw", "GNB" ],
		[ y2m.t3v,  												  "Guyana",													  "Guyana",															"gy", "GUY" ],
		[ y2m.z1d,  													"Haiti",														"Haiti",															"ht", "HTI" ],
		[ y2m.a0e, 			"HeardIslandMcDonaldIslands", 			"Australia",   									  		"hm", "HMD" ],
		[ y2m.z4p,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ y2m.n7a,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ y2m.a0b,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ y2m.f5x,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ y2m.x3e,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ y2m.o4l,  												 	"India",														"India",															"in", "IND" ],
		[ y2m.x0j,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ y2m.z1m,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ y2m.p7l,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ y2m.e1j,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ y2m.k6j,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ y2m.v8d,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ y2m.e7m,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ y2m.f1k,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ y2m.l4f,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], 
		[ y2m.v0j,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ y2m.o7o,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ y2m.j5x,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ y2m.o6h,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ y2m.f8e,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ y2m.n8s,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ y2m.g0g,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], 
		[ y2m.k3x,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], 
		[ y2m.j0x,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ y2m.j5b,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ y2m.w5k,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ y2m.y4a,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ y2m.f7o, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ y2m.x1c,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ y2m.c5y, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ y2m.e1l,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ y2m.u5z,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ y2m.q8g,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ y2m.p7h,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ y2m.n3a,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ y2m.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ y2m.u9e,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ y2m.z6x,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ y2m.q0r,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ y2m.e2m,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ y2m.m9k,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ y2m.l1y, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ y2m.r2e,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ y2m.c4n,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ y2m.m5x,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ y2m.y7j,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ y2m.e8p,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ y2m.t9j,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ y2m.z3s,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ y2m.i7t,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ y2m.u9t,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ y2m.y1u,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ y2m.i8b,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ y2m.s6s,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ y2m.o3j,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ y2m.c9s,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ y2m.x7m,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ y2m.u6v, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ y2m.d8l,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ y2m.v4u,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ y2m.l1i,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ y2m.r4r,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ y2m.p5a, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ y2m.z7m,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ y2m.h0q,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ y2m.j8j,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ y2m.d8q,  													"Niger",														"Niger",															"ne", "NER" ],
		[ y2m.r3k,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ y2m.r1l,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ y2m.r9e,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ y2m.m2b,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], 
		[ y2m.n3h,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ y2m.a7a,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ y2m.b0e,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ y2m.t6x,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ y2m.e1k,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ y2m.j4k,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ y2m.a3e,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ y2m.r7j,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ y2m.r7y,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ y2m.c3a,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ y2m.t5v,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ y2m.l5e,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ y2m.t9d,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ y2m.g5y,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ y2m.j4t,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ y2m.d2w,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ y2m.l1s,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ y2m.o1q,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ y2m.d7r,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ y2m.r4y,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ y2m.p6u,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ y2m.p3f,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], 
		[ y2m.l5t,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], 
		[ y2m.h8d, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], 
		[ y2m.v5z,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ y2m.r3v,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], 
		[ y2m.c2f,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], 
		[ y2m.z3p,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ y2m.n4w,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ y2m.j4q,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ y2m.j3m,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ y2m.u5b,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ y2m.h6d,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ y2m.j9h,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ y2m.t5j,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ y2m.m7p,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ y2m.i4c,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ y2m.y3x,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ y2m.d7i,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ y2m.o9l,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ y2m.q6p,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ y2m.n4a,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ y2m.a8d,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ y2m.x0a, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ y2m.y9a,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ y2m.k7a,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ y2m.d7w, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ y2m.j7v,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ y2m.p4n,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ y2m.p2k,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], 
		[ y2m.z3n,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], 
		[ y2m.p8l,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ y2m.c2e,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ y2m.m0f,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ y2m.f1i,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ y2m.h9k,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ y2m.s7n,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ y2m.u2e,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ y2m.d7h, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ y2m.d6s,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], 
		[ y2m.j6l, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ y2m.s3y,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], 
		[ y2m.i9p,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ y2m.q8y,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ y2m.t8r,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ y2m.z5u,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ y2m.m5a,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ y2m.o6a,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ y2m.w7i,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ y2m.f4p,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ y2m.y3r,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ y2m.q4y,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ y2m.g1q,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], 
		[ y2m.x5g,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ y2m.y7c, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ y2m.e4x,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ y2m.g8e,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ y2m.b6f,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ y2m.y0s,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ y2m.b5c,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ y2m.z4b,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ y2m.e3i,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ y2m.a5z,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ y2m.w3q,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ y2m.t1y,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ y2m.d5o,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ y2m.b9d,  											 		"Zaire",														"",																		"zr", "ZRN" ], 
		[ y2m.j3i,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ y2m.k5h,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function e7g(i1k)
{
	return b4a[i1k][2];
}

function o7l(i1k)
{
	return b4a[i1k][4];
}

function h5j(z4c)
{
	for (const i1k of b4a)
	{
		if (i1k[4] == z4c)
		{
			return i1k[0];
		}
	}
	return y2m.g7h;
}

function h2l(x8q)
{
	for (const i1k of b4a)
	{
		if (i1k[3] == x8q)
		{
			return i1k[0];
		}
	}
	return y2m.g7h;
}
class o9d
{

constructor()
{
	this.p2p = '';
}

e7n(s5h)
{
	this.p2p += s5h;
}

z1b(s5h)
{
	this.p2p += s5h + '\n';
}

j3e()
{
	this.p2p += '\n';
}

}




function r7g(t6k, x2b)
{
	let value = Number(t6k);
	if (isNaN(value))
	{
		return x2b;
	}
	else
	{
		return value;
	}
}
