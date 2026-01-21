const	chess = false; 

const u8l =
{
	h5a   : 0,
	l3b   : 1,
	b3w   : 2,
	o4f   : 3,
	m7g       : 4,
};

const b3l =
{
	a0c        : 0,
	k3t        : 1,
};

const	sq_1 = 0;
const j7k = 1;
const e6a = 2;
const z4b = 3;
const n6y = 4;
const q9f = 5;
const v1l = 6;
const i7a = 7;
const f7u = 8;
const d5h = 9;
const e1l = 10;
const s4z = 11;
const q7v = 12;
const g0a = 13;
const g8l = 14;
const s6b = 15;
const j0a = 16;
const a0d = 17;
const w0t = 18;
const e3l = 19;
const x2s = 20;
const q0v = 21;
const x2h = 22;
const s0u = 23;
const h0p = 24;
const u4q = 25;
const m4b = 26;
const d1g = 27;
const f2x = 28;
const d2w = 29;
const t0h = 30;
const l3g = 31;
const s4c = 32;
const p0u = 33;
const z8o = 34;
const r8c = 35;
const u5l = 36;
const o6b = 37;
const p6r = 38;
const l6w = 39;
const k4u = 40;
const d4h = 41;
const s5z = 42;
const r6f = 43;
const p1v = 44;
const v9j = 45;
const g7g = 46;
const z5p = 47;
const b7z = 48;
const e9g = 49;
const n1h = 50;

const m6n = 0;
const n5p = 1;
const c6g = 2;
const z2k = 3;
const q8s = 4;
const h4t = 5;
const f0a = 6;
const w0m = 7;
const t5u = 8;
const l5m = 9;
const b8o = 10;

const	rank_1 = 0;
const g8c = 1;
const r6i = 2;
const q7r = 3;
const l3l = 4;
const o0f = 5;
const u6p = 6;
const d8m = 7;
const d3o = 8;
const a9k = 9;
const l7t = 10;

const j3r        = 10;
const m7p       = 50;
const o5x      = 20;

const i4a =
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
	u8l.m7g,      
	u8l.m7g, 	    
	u8l.m7g, 	    
	u8l.m7g, 	    
	u8l.m7g, 	    
	u8l.m7g, 	    
	u8l.m7g, 	    
	u8l.m7g, 	    
	u8l.m7g, 	    
	u8l.m7g, 	    
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
	u8l.h5a,  
];

const c9k =
[
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
 	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
	u8l.m7g,  
];

const h4w =
[
	sq_1,  j7k,  e6a,  z4b,  n6y,
	q9f,  v1l,  i7a,  f7u,  d5h,
	e1l, s4z, q7v, g0a, g8l,
	s6b, j0a, a0d, w0t, e3l,
	x2s, q0v, x2h, s0u, h0p,
	u4q, m4b, d1g, f2x, d2w,
	t0h, l3g, s4c, p0u, z8o,
	r8c, u5l, o6b, p6r, l6w,
	k4u, d4h, s5z, r6f, p1v,
	v9j, g7g, z5p, b7z, e9g,
];

const n1a =
[
	m6n,
  n5p,
  c6g,
  z2k,
  q8s,
  h4t,
  f0a,
  w0m,
  t5u,
  l5m,
];

const x7l =
[
	rank_1,
  g8c,
  r6i,
  q7r,
  l3l,
  o0f,
  u6p,
  d8m,
  d3o,
  a9k,
];

function i6j(x9l)
{
	return x9l == u8l.b3w ||
    x9l == u8l.o4f;
}

function u0w(x9l)
{
	return x9l == u8l.h5a ||
    x9l == u8l.l3b;
}

function g0b(x9l)
{
	return x9l == u8l.h5a || x9l == u8l.b3w;
}

function j7q(x9l)
{
	return x9l == u8l.l3b || x9l == u8l.o4f;
}

function m8f(e5o)
{
	if (e5o == n1h)
	{
		return n1h;
	}
	else
	{
		return m7p - e5o - 1;
	}
}

const r0e =
[
	n5p,	z2k,	h4t,	w0m,	l5m,
	m6n,	c6g,	q8s,	f0a,	t5u,
	n5p,	z2k,	h4t,	w0m,	l5m,
	m6n,	c6g,	q8s,	f0a,	t5u,
	n5p,	z2k,	h4t,	w0m,	l5m,
	m6n,	c6g,	q8s,	f0a,	t5u,
	n5p,	z2k,	h4t,	w0m,	l5m,
	m6n,	c6g,	q8s,	f0a,	t5u,
	n5p,	z2k,	h4t,	w0m,	l5m,
	m6n,	c6g,	q8s,	f0a,	t5u,
];

function r3h(e5o)
{
	return r0e[e5o];
}

const o1b =
[
	a9k, a9k,	a9k, a9k,	a9k,
	d3o,	 d3o,	d3o,	 d3o,	d3o,
	d8m,	 d8m,	d8m,	 d8m,	d8m,
	u6p,	 u6p,	u6p,	 u6p,	u6p,
	o0f,	 o0f,	o0f,	 o0f,	o0f,
	l3l,	 l3l,	l3l,	 l3l,	l3l,
	q7r,	 q7r,	q7r,	 q7r,	q7r,
	r6i,	 r6i,	r6i,	 r6i,	r6i,
	g8c,	 g8c,	g8c,	 g8c,	g8c,
	rank_1,	 rank_1,	rank_1,	 rank_1,	rank_1,
];

function g1x(e5o)
{
	return o1b[e5o];
}

function u3p(a, b)
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

function c5g(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function f0x(a1s, x9l)
{
	let i4h = 0;
	for (const e8w of a1s)
	{
		if (e8w == x9l)
		{
			i4h++;
		}
	}
	return i4h;
}

function j4y(i8s)
{
 	let e8w = q6d(i8s, 0);
	if (e8w <= 0)
	{
		return n1h;
	}
	else
	{
		e8w--; 
		if (e8w >= sq_1 && e8w <= e9g)
		{
			return e8w;
		}
		else
		{
			return n1h;
		}
	}
}

function o7i(e5o)
{
 	let i8s = '';
	i8s = (e5o + 1);
  return i8s;
}







function i7k(e5o)
{
	return e5o >= v9j;
}

function u6c(e5o)
{
	return e5o <= n6y;
}

function o7n(m1e)
{
	return !(m1e % 2);
}

class l2d
{

constructor()
{
}

z0k()
{
	let y8p = new l2d();
  return Object.assign(y8p, this);
}

}


class b7h
{

constructor()
{
  this.v5s = Array(m7p).fill(u8l.m7g);
 	this.o9s = b3l.a0c;
 	this.p7o = new l2d();
 	this.q4m();
}

z0k()
{
	let s3o = new b7h();
	c5g(s3o.v5s, this.v5s);
	s3o.o9s = this.o9s;
  s3o.p7o = this.p7o.z0k();
	return s3o;
}

n7n(z0d)
{
	return this.o9s == z0d.o9s &&
		u3p(this.v5s, z0d.v5s);
}

j5g(z0d)
{
	return !this.n7n(z0d);
}

n9k()
{
 	c5g(this.v5s, i4a);
 	this.o9s = b3l.a0c;
}

z7h()
{
	return this.o9s == b3l.a0c && this.q5s();
}

q5s()
{
	return u3p(this.v5s, i4a);
}

q4m()
{
	this.v5s.fill(u8l.m7g);
	this.o9s = b3l.a0c;
}

v6v()
{
	return this.o9s == b3l.a0c && this.r4c();
}

r4c()
{
	return this.v5s.every(u8l.m7g);
}

a1s()
{
  return this.v5s.slice();
}

e1a(e5o)
{
	return this.v5s[e5o];
}

u9s(e5o, x9l)
{
	this.v5s[e5o] = x9l;
}

m1v()
{
	this.o9s = b3l.a0c;
}

l4m()
{
	this.o9s = b3l.k3t;
}

o7l()
{
	if (this.o9s == b3l.a0c)
	{
		this.o9s = b3l.k3t;
	}
	else
	{
		this.o9s = b3l.a0c;
	}
}

z1d()
{
	return this.o9s == b3l.a0c;
}

q8y()
{
	return this.o9s == b3l.k3t;
}

n8b(e5o)
{
	return this.v5s[e5o] == u8l.m7g;
}

u0w(e5o)
{
	let x9l = this.v5s[e5o];
	return x9l == u8l.h5a ||
    x9l == u8l.l3b;
}

i6j(e5o)
{
	let x9l = this.v5s[e5o];
	return x9l == u8l.b3w ||
    x9l == u8l.o4f;
}

j6r(e5o)
{
  let x9l = this.v5s[e5o];
	return x9l == u8l.h5a;
}

v3l(e5o)
{
  let x9l = this.v5s[e5o];
	return x9l == u8l.l3b;
}

b8k(e5o)
{
  let x9l = this.v5s[e5o];
	return x9l == u8l.b3w;
}

c0f(e5o)
{
  let x9l = this.v5s[e5o];
	return x9l == u8l.o4f;
}

p9v()
{
  let i4h = 0;
	for (const e5o of h4w)
	{
    if (this.u0w(e5o))
		{
			i4h++;
		}
	}
	return i4h;
}

s2h()
{
  let i4h = 0;
	for (const e5o of h4w)
	{
    if (this.i6j(e5o))
		{
			i4h++;
		}
	}
	return i4h;
}

y0b(w1l)
{
  this.p7o = w1l.z0k();
}

w1l()
{
  return this.p7o.z0k();
}

c7b(b8i)
{
	if (b8i.e2x())
	{
    this.o7l();
		return;
	}
	this.u9s(b8i.g9q, u8l.m7g);
	this.u9s(b8i.y4i, b8i.s3y);
	for (const e5o of b8i.h1u)
	{
		this.u9s(e5o, u8l.m7g);
	}
	this.o7l();
}

z2n(b8i)
{
	if (b8i.e2x())
	{
    this.o7l();
		return;
	}
	this.u9s(b8i.y4i, u8l.m7g);
	this.u9s(b8i.g9q, b8i.w2w);
	let i = 0;
	for (const e5o of b8i.h1u)
	{
		this.u9s(e5o, b8i.k4m[i]);
    i++;
	}
	this.o7l();
}

}
const t1w  = 0;
const v0a   = 1;
const l0j  = t1w;

function m0h()
{
  let n9r = [];
	n9r.push("\x45\x6c\x6c\x69\x70\x73\x65");
	n9r.push("\x43\x69\x72\x63\x6c\x65");
	return n9r;
}

class d8g
{

constructor()
{
	this.m3m = new u4t();
	this.x9h = null;
}

z0k()
{
	let h4e = new d8g();
	h4e.m3m = this.m3m.z0k();
	h4e.x9h = null;
	if (this.x9h)
	{
		h4e.x9h = this.x9h.z0k();
	}
	return h4e;
}

n7n(z0d)
{
	if (this.m3m.j5g(z0d))
	{
		return false;
	}
	return true;
}

j5g(z0d)
{
	return !this.n7n(z0d);
}

m7g()
{
	return this.m3m.m7g();
}

g9q()
{
	return this.m3m.g9q;
}

y4i()
{
	return this.m3m.y4i;
}

w2w()
{
	return this.m3m.w2w;
}

s3y()
{
	return this.m3m.s3y;
}

h1u()
{
  return this.m3m.h1u.slice();
}

k4m()
{
  return this.m3m.k4m.slice();
}

l7x()
{
	return this.m3m.l7x();
}

u0w()
{
	return this.m3m.u0w();
}

i6j()
{
	return this.m3m.i6j();
}

r1v()
{
	return this.m3m.r1v();
}

e2x()
{
	return this.m3m.e2x();
}

u2o()
{
	return this.m3m.u2o();
}

u3r()
{
	if (this.x9h == null)
	{
		this.x9h = new r0u();
	}
}

o2b()
{
	if (this.x9h)
	{
		if (this.x9h.m7g())
		{
			this.h9j();
		}
	}
}

r3e()
{
	return this.x9h != null;
}

h9j()
{
	this.x9h = null;
}

p3o(p9t)
{
	this.u3r();
	this.x9h = p9t.z0k();
}

t9f()
{
	return this.x9h;
}

t8j(z0d)
{
	if (this.x9h && !z0d.x9h)
	{
		return false;
	}
	if (!this.x9h && z0d.x9h)
	{
		return false;
	}
	if (!this.x9h && !z0d.x9h)
	{
		return true;
	}
	return this.x9h.n7n(z0d.x9h);
}

n5b()
{
	if (this.x9h)
	{
		this.x9h.j7d = '';
		this.o2b();
	}
}

b3n()
{
	if (this.x9h)
	{
		return this.x9h.j7d.length != 0;
	}
	else
	{
		return false;
	}
}

j7d()
{
	if (this.x9h)
	{
		return this.x9h.j7d;
	}
	else
	{
		return '';
	}
}

i9b(c9e)
{
	this.u3r();
	this.x9h.j7d = c9e;
	this.o2b();
}

q7o()
{
	if (this.x9h)
	{
		this.x9h.t4h = '';
		this.o2b();
	}
}

c2p()
{
	if (this.x9h)
	{
		return this.x9h.t4h.length != 0;
	}
	else
	{
		return false;
	}
}

t4h()
{
	if (this.x9h)
	{
		return this.x9h.t4h;
	}
	else
	{
		return '';
	}
}

i9l(c9e)
{
	this.u3r();
	this.x9h.t4h = c9e;
	this.o2b();
}

v9f()
{
	if (this.x9h)
	{
		this.x9h.h9e = s1v.d3j;
		this.o2b();
	}
}

n5f()
{
	if (this.x9h)
	{
		return this.x9h.h9e != s1v.d3j;
	}
	else
	{
		return false;
	}
}

h9e()
{
	if (this.x9h)
	{
		return this.x9h.h9e;
	}
	else
	{
		return s1v.d3j;
	}
}

g2o(h9e)
{
	this.u3r();
	this.x9h.h9e = h9e;
	this.o2b();
}

r1b()
{
	if (this.x9h)
	{
		this.x9h.style = m6y.d3j;
		this.o2b();
	}
}

q6f()
{
	if (this.x9h)
	{
		return this.x9h.style != m6y.d3j;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.x9h)
	{
		return this.x9h.style;
	}
	else
	{
		return m6y.d3j;
	}
}

v7d(style)
{
	this.u3r();
	this.x9h.style = style;
	this.o2b();
}

u1n()
{
	if (this.x9h)
	{
		this.x9h.e8w = g7e.d3j;
		this.o2b();
	}
}

x5q()
{
	if (this.x9h)
	{
		return this.x9h.e8w != g7e.d3j;
	}
	else
	{
		return false;
	}
}

e8w()
{
	if (this.x9h)
	{
		return this.x9h.e8w;
	}
	else
	{
		return g7e.d3j;
	}
}

i7g(e8w)
{
	this.u3r();
	this.x9h.e8w = e8w;
	this.o2b();
}

d0d()
{
	if (this.x9h)
	{
		this.x9h.j0u = m0e.d3j;
		this.o2b();
	}
}

w5b()
{
	if (this.x9h)
	{
		return this.x9h.j0u != m0e.d3j;
	}
	else
	{
		return false;
	}
}

j0u()
{
	if (this.x9h)
	{
		return this.x9h.j0u;
	}
	else
	{
		return m0e.d3j;
	}
}

s4i(j0u)
{
	this.u3r();
	this.x9h.j0u = j0u;
	this.o2b();
}

s1q()
{
  
}

x6m()
{
	if (this.x9h)
	{
 		if (this.x9h.j7d.length != 0)
    {
      let l2l = this.x9h.j7d.indexOf("\x5b\x23\x5d");
      return l2l != -1;
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

m8m()
{
  
}

q0p()
{
	if (this.x9h)
	{
		this.x9h.x6n = false;
		this.o2b();
	}
}

b9w()
{
	if (this.x9h)
	{
		return this.x9h.x6n;
	}
	else
	{
		return false;
	}
}

k7n()
{
	this.u3r();
	this.x9h.x6n = true;
	this.o2b();
}

p2p()
{
	if (this.x9h)
	{
		this.x9h.o3k = false;
		this.o2b();
	}
}

o1w()
{
	if (this.x9h)
	{
		return this.x9h.o3k;
	}
	else
	{
		return false;
	}
}

j0j()
{
	this.u3r();
	this.x9h.o3k = true;
	this.o2b();
}

h3w()
{
	if (this.x9h)
	{
		this.x9h.s0l.g9e();
		this.x9h.s8s.g9e();
		this.o2b();
	}
}

n3i()
{
	if (this.x9h)
	{
		return this.p0b() || this.w1q();
	}
	else
	{
		return false;
	}
}

d2q()
{
	if (this.x9h)
	{
		this.x9h.s0l.g9e();
		this.o2b();
	}
}

p0b()
{
	if (this.x9h)
	{
		return !this.x9h.s0l.m7g();
	}
	else
	{
		return false;
	}
}

s0l()
{
	if (this.x9h)
	{
		return this.x9h.s0l.z0k();
	}
	else
	{
		return new u6i();
	}
}

o2w(s0l)
{
	this.u3r();
	this.x9h.s0l = s0l.z0k();
	this.o2b();
}

y8w()
{
	if (this.x9h)
	{
		this.x9h.s8s.g9e();
		this.o2b();
	}
}

w1q()
{
	if (this.x9h)
	{
		return !this.x9h.s8s.m7g();
	}
	else
	{
		return false;
	}
}

s8s()
{
	if (this.x9h)
	{
		return this.x9h.s8s.z0k();
	}
	else
	{
		return new s2q();
	}
}

r8y(s8s)
{
	this.u3r();
	this.x9h.s8s = s8s.z0k();
	this.o2b();
}

n9a()
{
	if (this.x9h)
	{
		this.x9h.z6c.p1n();
		this.o2b();
	}
}

y0a()
{
	if (this.x9h)
	{
		return this.x9h.z6c.f6f();
	}
	else
	{
		return false;
	}
}

z6c()
{
	if (this.x9h)
	{
		return this.x9h.z6c.z0k();
	}
	else
	{
		return new e4e();
	}
}

p8c(z6c)
{
	this.u3r();
	this.x9h.z6c = z6c.z0k();
	this.o2b();
}

y7y(k2j)
{
	this.m3m = k2j.z0k();
	this.x9h = null;
}

k2j()
{
	let g2i = new u4t();
  return Object.assign(g2i, this.m3m);
}

}

function n8w(k2j)
{
  let h4r = new d8g();
  h4r.y7y(k2j);
  return h4r;
}
class u4t
{

constructor()
{
	this.g9q = n1h;
	this.w2w = u8l.m7g;
	this.y4i = n1h;
	this.s3y = u8l.m7g;
	this.h1u = [];
	this.k4m = [];
	this.j1i = [];
}

z0k()
{
	let g2i = new u4t();
	g2i.g9q = this.g9q;
	g2i.w2w = this.w2w;
	g2i.y4i = this.y4i;
	g2i.s3y = this.s3y;
	g2i.h1u = this.h1u.slice();
	g2i.k4m = this.k4m.slice();
	g2i.j1i = this.j1i.slice();
	return g2i;
}

n7n(z0d)
{
	if (
		this.g9q != z0d.g9q ||
		this.w2w != z0d.w2w ||
		this.y4i != z0d.y4i ||
		this.s3y != z0d.s3y)
	{
		return false;
	}
	else
	{
		for (const e5o of this.h1u)
		{
			let a5z = z0d.h1u.find(function(r7x){ return r7x == e5o; });
			if (a5z === undefined)
			{
				return false;
			}
		}
		for (const x9l of this.k4m)
		{
			let a5z = z0d.k4m.find(function(r7x){ return r7x == x9l; });
			if (a5z === undefined)
			{
				return false;
			}
		}
		return true;
	}
}

j5g(z0d)
{
	return !this.n7n(z0d);
}

m7g()
{
	return this.g9q == n1h;
}

u0w()
{
 	return this.w2w == u8l.h5a ||
		this.w2w == u8l.l3b;
}

i6j()
{
 	return this.w2w == u8l.b3w ||
		this.w2w == u8l.o4f;
}

u2o()
{
  return this.h1u.length > 0;
}

r1v()
{
	return this.w2w != this.s3y;
}

e2x()
{
	return this.g9q == n1h;
}

h5n(e5o)
{
	let a5z = this.h1u.find(function(r7x){ return r7x == e5o; });
	return (a5z !== undefined);
}


u3y(f4f)
{
	for (const e5o of f4f)
	{
		let a5z = this.h1u.find(function(r7x){ return r7x == e5o; });
		if (a5z === undefined)
		{
			return false;
		}
	}
	return true;
}


u3l(e5o)
{
	let a5z = this.j1i.find(function(r7x){ return r7x == e5o; });
	return (a5z !== undefined);
}

n2e(f4f)
{
	for (const e5o of f4f)
	{
		let a5z = this.j1i.find(function(r7x){ return r7x == e5o; });
		if (a5z === undefined)
		{
			return false;
		}
	}
	return true;
}

l7x()
{
  return this.h1u.length;
}

}

const l7i =
[
	n1h, n1h,	n1h, n1h,	n1h, n1h, n1h, n1h,	n1h, n1h, n1h, n1h, n1h, n1h,
	n1h, n1h,	n1h, n1h, n1h, n1h,	n1h, n1h,	n1h, n1h,	n1h, n1h,	n1h, n1h,
	n1h, n1h,	n1h, sq_1,	n1h, j7k,	n1h, e6a,	n1h, z4b,	n1h, n6y,	n1h, n1h,
	n1h, n1h,	q9f,  n1h,	v1l,  n1h,	i7a,  n1h,	f7u,  n1h,	d5h, n1h,	n1h, n1h,
	n1h, n1h,	n1h, e1l,	n1h, s4z,	n1h, q7v,	n1h, g0a,	n1h, g8l,	n1h, n1h,
	n1h, n1h,	s6b, n1h,	j0a, n1h,	a0d, n1h,	w0t, n1h,	e3l, n1h,	n1h, n1h,
	n1h, n1h,	n1h, x2s,	n1h, q0v,	n1h, x2h,	n1h, s0u,	n1h, h0p,	n1h, n1h,
	n1h, n1h, u4q, n1h,	m4b, n1h,	d1g, n1h,	f2x, n1h,	d2w, n1h,	n1h, n1h,
	n1h, n1h,	n1h, t0h,	n1h, l3g,	n1h, s4c,	n1h, p0u,	n1h, z8o,	n1h, n1h,
	n1h, n1h,	r8c, n1h,	u5l, n1h,	o6b, n1h,	p6r, n1h,	l6w, n1h,	n1h, n1h,
	n1h, n1h,	n1h, k4u,	n1h, d4h,	n1h, s5z,	n1h, r6f,	n1h, p1v,	n1h, n1h,
	n1h, n1h,	v9j, n1h,	g7g, n1h,	z5p, n1h,	b7z, n1h,	e9g, n1h,	n1h, n1h,
	n1h, n1h,	n1h, n1h,	n1h, n1h,	n1h, n1h,	n1h, n1h,	n1h, n1h,	n1h, n1h,
	n1h, n1h,	n1h, n1h,	n1h, n1h,	n1h, n1h,	n1h, n1h,	n1h, n1h,	n1h, n1h,
];

const l3s =
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
	this.h8n = [];
  this.c9n = Array(m7p).fill(n1h);
  this.v4d = Array(m7p).fill(n1h);
  this.b1b = Array(m7p).fill(u8l.m7g);
  this.p8z = Array(m7p).fill(false);
  this.z7k = 0;
	this.n4d = new b7h();
	this.k7o = 0;
	this.n5d = n1h;
	this.b0s = u8l.m7g;
	this.f9m = 0;
	this.i3y = 0;
	this.r6a = 0;
	this.l7l = 0;
	this.t9e = false;
}

s3n(k5l)
{
	this.n4d = k5l.z0k();
	this.p8z.fill(false);
  this.z7k = 0;
	let n9m = 14;
	if (this.n4d.z1d())
	{
		this.f9m = -(n9m + 1);
		this.i3y = -(n9m - 1);
		this.r6a = (n9m - 1);
		this.l7l = (n9m + 1);
	}
	else
	{
		this.f9m = (n9m + 1);
		this.i3y = (n9m - 1);
		this.r6a = -(n9m - 1);
		this.l7l = -(n9m + 1);
	}
}

o2k(g9q)
{
 	this.n5d = g9q;
	this.b0s = this.n4d.e1a(this.n5d);
	this.k7o = 0;
	if (
		(this.n4d.z1d() && this.b0s == u8l.h5a) ||
		(this.n4d.q8y() && this.b0s == u8l.b3w))
	{
		this.w6p(this.n5d);
	}
	else if (
		(this.n4d.z1d() && this.b0s == u8l.l3b) ||
		(this.n4d.q8y() && this.b0s == u8l.o4f))
	{
		this.x8x(this.n5d);
	}
}

w6p(e5o)
{
 	this.m7u(e5o, this.f9m);
	this.m7u(e5o, this.i3y);
}

m7u(g9q, w9a)
{
	let y4i = l7i[l3s[g9q] + w9a];
	if (y4i != n1h)
  {
    if (this.n4d.n8b(y4i))
  	{
	  	this.f9g(y4i);
  	}
  }
}

x8x(g9q)
{
	this.x5r(g9q, this.f9m);
	this.x5r(g9q, this.i3y);
	this.x5r(g9q, this.l7l);
	this.x5r(g9q, this.r6a);
}

x5r(g9q, w9a)
{
	let z5b = w9a;
	do
	{
		let y4i = l7i[l3s[g9q] + z5b];
		if (y4i == n1h)
    {
      break;
    }
    if (!this.n4d.n8b(y4i))
		{
			break;
		}
		this.f9g(y4i);
		z5b += w9a;
	} while (true);
}

i1j(g9q)
{
	this.n5d = g9q;
	this.b0s = this.n4d.e1a(this.n5d);
	this.k7o = 0;
	let x9l = this.n4d.e1a(this.n5d);
	if ((this.n4d.z1d() && this.b0s == u8l.h5a) ||
		(this.n4d.q8y() && this.b0s == u8l.b3w))
	{
		this.n4d.u9s(this.n5d, u8l.m7g);
		this.x8a(this.n5d);
	}
	else if (
		(this.n4d.z1d() && this.b0s == u8l.l3b) ||
		(this.n4d.q8y() && this.b0s == u8l.o4f))
	{
		this.n4d.u9s(this.n5d, u8l.m7g);
		this.w2p(this.n5d);
	}
	this.n4d.u9s(this.n5d, x9l);
}

x8a(g9q)
{
	let z5y = true;
	if (this.l6i(g9q, this.f9m))
	{
		z5y = false;
	}
	if (this.l6i(g9q, this.i3y))
	{
		z5y = false;
	}
	if (this.l6i(g9q, this.l7l))
	{
		z5y = false;
	}
	if (this.l6i(g9q, this.r6a))
	{
		z5y = false;
	}
	if (z5y)
	{
		this.e6n(g9q);
	}
}

l6i(g9q, w9a)
{
	let o4u = l7i[l3s[g9q] + w9a];
	if (o4u == n1h)
	{
		return false;
	}
	let y4i = l7i[l3s[g9q] + 2 * w9a];
	if (y4i == n1h)
	{
		return false;
	}
	if (!this.n4d.n8b(y4i))
	{
		return false;
	}
	if (this.p8z[o4u])
	{
		return false;
	}
	if (this.b0s == u8l.h5a)
	{
		if (!this.n4d.i6j(o4u))
		{
			return false;
		}
	}
	else
	{
		if (!this.n4d.u0w(o4u))
		{
			return false;
		}
	}
	this.c9n[this.k7o] = o4u;
	this.b1b[this.k7o] = this.n4d.e1a(o4u);
	this.v4d[this.k7o] = y4i;
	this.k7o++;
	let x9l = this.n4d.e1a(o4u);
	this.p8z[o4u] = true;
	this.x8a(y4i);
	this.p8z[o4u] = false;
	this.n4d.u9s(o4u, x9l);
	this.k7o--;
	return true;
}

w2p(g9q)
{
	let z5y = true;
	if (this.x6w(g9q, this.f9m))
	{
		z5y = false;
	}
	if (this.x6w(g9q, this.i3y))
	{
		z5y = false;
	}
	if (this.x6w(g9q, this.l7l))
	{
		z5y = false;
	}
	if (this.x6w(g9q, this.r6a))
	{
		z5y = false;
	}
	if (z5y)
	{
		this.e6n(g9q);
	}
}

x6w(b3q, w9a)
{
	let o4u = n1h;
	let z5b = w9a;
	do
	{
		o4u = l7i[l3s[b3q] + z5b];
		if (o4u == n1h)
		{
			return false;
		}
		if (this.p8z[o4u])
		{
			return false;
		}
		if (this.b0s == u8l.l3b)
		{
			if (this.n4d.i6j(o4u))
			{
				break;
			}
		}
		else
		{
			if (this.n4d.u0w(o4u))
			{
				break;
			}
		}
		if (!this.n4d.n8b(o4u))
		{
			return false;
		}
		z5b += w9a;
	} while (true);
	let b5l = false;
	do
	{
		z5b += w9a;
		let y4i = l7i[l3s[b3q] + z5b];
		if (y4i == n1h)
    {
      return b5l;
    }
    if (!this.n4d.n8b(y4i))
		{
			return b5l;
		}
		this.c9n[this.k7o] = o4u;
		this.b1b[this.k7o] = this.n4d.e1a(o4u);
		this.v4d[this.k7o] = y4i;
		this.k7o++;
		let k7g = this.n4d.e1a(o4u);
		this.p8z[o4u] = true;
		this.w2p(y4i);
		this.p8z[o4u] = false;
		this.n4d.u9s(o4u, k7g);
		this.k7o--;
		b5l = true;
	} while (true);
}

e6n(y4i)
{
	if (!this.k7o)
	{
		return;
	}
	if (this.k7o >= this.z7k)
	{
		if (this.k7o > this.z7k)
		{
      this.h8n.length = 0;
		}
		this.f9g(y4i);
	}
}

f9g(y4i)
{
	let b8i = new u4t();
	b8i.g9q = this.n5d;
	b8i.y4i = y4i;
	b8i.w2w = this.b0s;
	b8i.s3y = b8i.w2w;
	if (b8i.w2w == u8l.h5a)
	{
		if (u6c(b8i.y4i))
		{
			b8i.s3y = u8l.l3b;
		}
	}
	else if (b8i.w2w == u8l.b3w)
	{
		if (i7k(b8i.y4i))
		{
			b8i.s3y = u8l.o4f;
		}
	}
	for (let i = 0; i < this.k7o; i++)
	{
		b8i.h1u.push(this.c9n[i]);
		b8i.k4m.push(this.b1b[i]);
	}
	for (let i = 0; i < this.k7o - 1; i++)
	{
		b8i.j1i.push(this.v4d[i]);
	}

	if (this.t9e)
	{
		if (this.k7o >= 2)
		{
			let a5z = this.h8n.find(function(r7x)
			{
				if (r7x.n7n(b8i))
				{
					return true;
				}
			});
			if (a5z != undefined)
			{
				return;
			}
		}
	}
	this.z7k = b8i.l7x();
	this.h8n.push(b8i);
}

r7v(k5l, k7e)
{
	this.s3n(k5l);
	this.t9e = k7e;
	this.h8n.length = 0;

	for (const e5o of h4w)
	{
		this.i1j(e5o);
	}

	if (this.h8n.length === 0)
	{
		for (const e5o of h4w)
		{
			this.o2k(e5o);
		}
	}
	return this.h8n;
}

s3l(k5l)
{
	this.s3n(k5l);
	this.t9e = true;
	this.h8n.length = 0;

	for (const e5o of h4w)
	{
		this.i1j(e5o);
	}
	return this.h8n.length > 0;
}

g4r(k5l, o4u)
{
	this.s3n(k5l);
	this.t9e = true;
	this.h8n.length = 0;

	for (const e5o of h4w)
	{
		this.i1j(e5o);
	}
	for (const k2j of this.h8n)
	{
		if (k2j.h5n(o4u))
		{
			return true;
		}
	}
	return false;
}

j1i(k5l, b8i)
{
	this.s3n(k5l);
	this.t9e = true;
	this.h8n.length = 0;

	this.i1j(b8i.g9q);
	let e4a = [];
  let h1u = b8i.h1u;
	for (const o4u of h1u)
	{
		e4a.push(o4u);
	}
	for (const k2j of this.h8n)
	{
		if (k2j.y4i != b8i.y4i)
		{
			continue;
		}
		if (!k2j.u3y(e4a))
		{
			continue;
		}
		return k2j.j1i.slice();
	}
	return [];
}

k6h(k5l, b8i)
{
	this.s3n(k5l);
	this.t9e = true;
	this.h8n.length = 0;

	this.i1j(b8i.g9q);
	let a4r = 0;
	for (const k2j of this.h8n)
	{
		if (k2j.y4i == b8i.y4i)
		{
			a4r++;
		}
	}
	return a4r > 1;
}

} 


function i7p(k5l)
{
	let g8n = new x7t();
	return g8n.r7v(k5l, true);
}

function f6i(k5l, g9q)
{
	let g8n = new x7t();
	let b1v = g8n.r7v(k5l, true);
	let r6e = [];
	for (const k2j of b1v)
	{
		if (k2j.g9q == g9q)
		{
			r6e.push(k2j);
		}
	}
	return r6e;
}

function h0m(k5l, y4i)
{
	let g8n = new x7t();
	let b1v = g8n.r7v(k5l, true);
	let x6f = [];
	for (const k2j of b1v)
	{
		if (k2j.y4i == y4i)
		{
			x6f.push(k2j);
		}
	}
	return x6f;
}

function y6e(k5l, g9q, y4i)
{
	let g8n = new x7t();
	let b1v = g8n.r7v(k5l, true);
	let c7m = [];
	for (const k2j of b1v)
	{
		if (k2j.g9q == g9q && k2j.y4i == y4i)
		{
			c7m.push(k2j);
		}
	}
	return c7m;
}

function c0w(k5l, g9q, y4i, h1u)
{
	let g8n = new x7t();
	let b1v = g8n.r7v(k5l, true);
	let r7v = [];
	for (const k2j of b1v)
	{
		if (k2j.g9q != g9q)
		{
			continue;
		}
		if (k2j.y4i != y4i)
		{
			continue;
		}
		if (!k2j.h5n(h1u))
		{
			continue;
		}
		r7v.push(k2j);
	}
	return r7v;
}

function z8t(k5l, g9q, y4i, j1i)
{
	let g8n = new x7t();
	let b1v = g8n.r7v(k5l, false);
	let r7v = [];
	for (const k2j of b1v)
	{
		if (k2j.g9q != g9q)
		{
			continue;
		}
		if (k2j.y4i != y4i)
		{
			continue;
		}
		if (!k2j.n2e(j1i))
		{
			continue;
		}
		
		let a8q = false;
		for (const m of r7v)
		{
			if (m.n7n(b8i))
			{
				a8q = true;
				break;
			}
		}
		if (!a8q)
		{
			r7v.push(k2j);
		}
	}
	return r7v;
}

function p3f(k5l, b8i)
{
	let g8n = new x7t();
	return g8n.j1i(k5l, b8i);
}

function s3l(k5l)
{
	let g8n = new x7t();
	return g8n.s3l(k5l);
}

function g4r(k5l, o4u)
{
	let g8n = new x7t();
	return g8n.g4r(k5l, o4u);
}

function k6h(k5l, b8i)
{
	let g8n = new x7t();
	return g8n.k6h(k5l, b8i);
}

function x2t(k5l)
{
	let g8n = new x7t();
	if (g8n.s3l(k5l))
	{
		return false;
	}
	let b2n = k5l.z0k();
	b2n.o7l();
	return !g8n.s3l(b2n);
}

function s7v()
{
}
/* voor dammen niet nodig */
const c4l =
{
  d3j : 0,  
	p3p : 1,
	x1v : 2,
};

function y4h(k5l, b8i)
{
 	let i8s = '';
	if (b8i.m7g())
	{
		i8s += "\x2d\x2d";
	}
  else
  {
    i8s = o7i(b8i.g9q);
    if (b8i.h1u.length > 0)
    {
      i8s += 'x';
    }
    else
    {
      i8s += '-';
    }
    if (b8i.h1u.length > 2)
    {
      if (k6h(k5l, b8i))
      {
        let j1i = p3f(k5l, b8i);
        for (const e5o of j1i)
        {
          i8s += o7i(e5o);
          i8s += 'x';
        }
        i8s += o7i(b8i.y4i);
      }
      else
      {
        i8s += o7i(b8i.y4i);
      }
    }
    else
    {
      i8s += o7i(b8i.y4i);
    }
  }
	return i8s;
}


class c1u
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.c5v = 0;
}

}

function p3a(f5c,
  d2f,
  x6a,
  coordinate,
  coordinatesType,
  o1u,
  l5c,
  marginSize) 
{
 	let m2w = (coordinatesType == c7x.m0s ||
		coordinatesType == c7x.u4n ||
		coordinatesType == c7x.k2a);
	let n1x = (coordinatesType == c7x.m0s ||
		coordinatesType == c7x.u4n ||
		coordinatesType == c7x.f2c);
	let a7q =	(coordinatesType == c7x.m0s ||
		coordinatesType == c7x.k2a ||
		coordinatesType == c7x.v3g);
	let h6w = (coordinatesType == c7x.m0s ||
		coordinatesType == c7x.f2c ||
		coordinatesType == c7x.v3g);

	f5c.font = (coordinate.c5v).toString() + "\x70\x78\x20\x73\x65\x72\x69\x66";
	f5c.fillStyle = o1u;
  let o6e = coordinate.height;

	if (n1x)
	{
  	let t6x = 0;
		if (l5c)
		{
			t6x = m7p - j3r / 2;
		}
		else
		{
			t6x = j3r / 2 + 1;
		}
    for (let m1e = 0; m1e < j3r; m1e++)
		{
 			if (m1e % 2)
			{
				continue;
			}
			let x9z = f5c.measureText(t6x).width;
			let top = d2f.i0p + 1 + (m1e + 1) * x6a.j2h;
			top += (x6a.j2h - o6e) / 2 + o6e;
			let d2m = d2f.k2m - marginSize + (marginSize - x9z) / 2;
      f5c.fillText(t6x, d2m, top);
			if (l5c)
			{
				t6x -= j3r;
			}
			else
			{
				t6x += j3r;
			}
		}
	}

	if (a7q)
	{
		let t6x = 0;
		if (l5c)
		{
			t6x = m7p - j3r / 2 + 1;
		}
		else
		{
			t6x = j3r / 2;
		}
    for (let m1e = 0; m1e < j3r; m1e++)
		{
 			if (m1e % 2)
			{
				continue;
			}
      let x9z = f5c.measureText(t6x).width;
			let top = d2f.i0p + 1 + m1e * x6a.j2h;
			top += (x6a.j2h - o6e) / 2 + o6e;
			let d2m = d2f.k2m + d2f.l0g() +
        (marginSize - x9z) / 2;
      f5c.fillText(t6x, d2m, top);
			if (l5c)
			{
				t6x -= j3r;
			}
			else
			{
				t6x += j3r;
			}
		}
	}

	if (m2w)
	{
		let t6x = 0;
		if (l5c)
		{
			t6x = m7p;
		}
		else
		{
			t6x = 1;
		}
    for (let m0z = 0; m0z < j3r; m0z++)
		{
 			if (m0z % 2)
			{
				continue;
			}
			let left = d2f.k2m + 1 + (m0z + 1) * x6a.j2h;
      let x9z = f5c.measureText(t6x).width;
			let d2m = left + (x6a.j2h - x9z) / 2;
			let u1h = d2f.i0p - (marginSize - o6e) / 2 - 2;
      
      f5c.fillText(t6x, d2m, u1h);
			if (l5c)
			{
				t6x--;
			}
			else
			{
				t6x++;
			}
		}
	}

	if (h6w)
	{
		let t6x = 0;
		if (l5c)
		{
			t6x = j3r / 2;
		}
		else
		{
			t6x = m7p - j3r / 2 + 1;
		}
    for (let m0z = 0; m0z < j3r; m0z++)
		{
			if (m0z % 2)
			{
				continue;
			}
			let left = d2f.k2m + 1 + m0z * x6a.j2h;
      let x9z = f5c.measureText(t6x).width;
			let d2m = left + (x6a.j2h - x9z) / 2;
			let u1h = d2f.i0p + d2f.o3v() +
        (marginSize - o6e) / 2 + o6e - 2;
      
      f5c.fillText(t6x, d2m, u1h);
			if (l5c)
			{
				t6x--;
			}
			else
			{
				t6x++;
			}
		}
	}
}

function f0k(f5c, c5v)
{
	let l9g = new c1u();
	l9g.c5v = c5v;
	l9g.height = c5v;
	l9g.width = c5v;
	return l9g;
}
function e8s(f5c, rect, x9l)
{
 	f5c.lineWidth = "\x31";
  if (x9l == u8l.h5a || x9l == u8l.l3b)
  {
    f5c.fillStyle = "\x77\x68\x69\x74\x65";
    f5c.strokeStyle = "\x62\x6c\x61\x63\x6b";
  }
  else
  {
    f5c.fillStyle = "\x62\x6c\x61\x63\x6b";
    f5c.strokeStyle = "\x77\x68\x69\x74\x65";
  }
  let n7i = 80;
  let p3n = rect.l0g() + 1;
 	let d4b = ((0.19 * n7i) / 100) * p3n;
  let x3p = rect.k2m + p3n / 2;
  let s5l = (p3n / 4);
  let p6t = (p3n / 2.4);
	if (x9l == u8l.h5a || x9l == u8l.b3w)
	{
    let y7c = rect.i0p + p3n / 1.8;
    f5c.beginPath();
    f5c.ellipse(x3p, y7c, s5l, p6t, Math.PI / 2, 0, 2 * Math.PI);
    f5c.fill();
    f5c.stroke();
		y7c -= d4b;
    f5c.beginPath();
    f5c.ellipse(x3p, y7c, s5l, p6t, Math.PI / 2, 0, 2 * Math.PI);
    f5c.fill();
    f5c.stroke();
	}
	else if (x9l == u8l.l3b || x9l == u8l.o4f)
	{
    let y7c = rect.i0p + p3n / 1.55;
    f5c.beginPath();
    f5c.ellipse(x3p, y7c, s5l, p6t, Math.PI / 2, 0, 2 * Math.PI);
    f5c.fill();
    f5c.stroke();
		y7c -= d4b;
    f5c.beginPath();
    f5c.ellipse(x3p, y7c, s5l, p6t, Math.PI / 2, 0, 2 * Math.PI);
    f5c.fill();
    f5c.stroke();
		y7c -= d4b;
    f5c.beginPath();
    f5c.ellipse(x3p, y7c, s5l, p6t, Math.PI / 2, 0, 2 * Math.PI);
    f5c.fill();
    f5c.stroke();
	}
}

function y4n(f5c, rect, x9l)
{
 	f5c.lineWidth = "\x31";
  if (x9l == u8l.h5a || x9l == u8l.l3b)
  {
    f5c.fillStyle = "\x77\x68\x69\x74\x65";
    f5c.strokeStyle = "\x62\x6c\x61\x63\x6b";
  }
  else
  {
    f5c.fillStyle = "\x62\x6c\x61\x63\x6b";
    f5c.strokeStyle = "\x77\x68\x69\x74\x65";
  }

  let n7i = 80;
  let p3n = rect.l0g() + 1;
 	let d4b = ((0.19 * n7i) / 100) * p3n;
  let x3p = rect.k2m + p3n / 2;
  let s5l = (p3n / 4);
  let p6t = (p3n / 2.4);


  let y7c = rect.i0p + p3n / 2; 
  let y2g = p3n * 0.4;

  f5c.beginPath();
  f5c.arc(x3p, y7c, y2g, 0, Math.PI * 2);
  f5c.closePath();
  f5c.fill();
  f5c.stroke();

	if (j7q(x9l))
	{
		if (x9l == u8l.l3b)
		{
      f5c.fillStyle = "\x62\x6c\x61\x63\x6b";
      f5c.strokeStyle = "\x62\x6c\x61\x63\x6b";
		}
		else
		{
      f5c.fillStyle = "\x77\x68\x69\x74\x65";
      f5c.strokeStyle = "\x77\x68\x69\x74\x65";
		}
    y2g = p3n * 0.1;
    f5c.beginPath();
    f5c.arc(x3p, y7c, y2g, 0, Math.PI * 2);
    f5c.closePath();
    f5c.fill();
    f5c.stroke();
	}
}

function l2f(f5c, rect, x9l)
{
  if (x9l == u8l.m7g) return;
  if (b7m.m6w == 0)
  {
    e8s(f5c, rect, x9l);
  }
  else
  {
    y4n(f5c, rect, x9l);
  }
}


function b4s(m6w)
{
}
function j7z(r7x)
{
	let k5l = new b7h();
	let u1g = r7x.length;
	if (u1g < 6) 
	{
		return k5l;
	}
	if (r7x[0] != 'W' && r7x[0] != 'B')
	{
		return k5l;
	}
	if (r7x[0] == 'W')
	{
		k5l.m1v();
	}
	else if (r7x[0] == 'B')
	{
		k5l.l4m();
	}
	let h9r = r7x.indexOf("\x3a\x57");
	let m5l = r7x.indexOf("\x3a\x42");
	let s5q = r7x.indexOf("\x2e");
  if (s5q == -1)
	{
		s5q = r7x.length;
	}
	if (h9r == -1 || m5l == -1 || s5q <= m5l)
	{
		return k5l;
	}
	let w = r7x.substr(h9r + 2, m5l - (h9r + 2));
	let b = r7x.substr(m5l + 2, s5q - (m5l + 2));
	let o4t = w.split("\x2c");
	let y7j = b.split("\x2c");

	for (const s of o4t)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let b5i = s.substr(1, 2);
					let e5o = q6d(b5i, 0);
					if (e5o)
					{
						k5l.u9s(e5o-1, u8l.l3b);
					}
				}
			}
			else
			{
				let e5o = q6d(s, 0);
				if (e5o)
				{
					k5l.u9s(e5o-1, u8l.h5a);
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
					let b5i = s.substr(1, 2);
					let e5o = q6d(b5i, 0);
					if (e5o)
					{
						k5l.u9s(e5o-1, u8l.o4f);
					}
				}
			}
			else
			{
				let e5o = q6d(s, 0);
				if (e5o)
				{
					k5l.u9s(e5o-1, u8l.b3w);
				}
			}
		}
	}
	return k5l;
}

function a5l(k5l, r0s)
{
  let d2c = r0s.length;

 	
	if (r0s[0] == 'Z' || (d2c == 2 && r0s == "\x2d\x2d") || (d2c == 4 && r0s == "\x6e\x75\x6c\x6c"))
	{
		return new u4t();
	}

	let f4f = [];
	let i = 0;
	let u1g = r0s.length;
	while (i < u1g)
	{
		let m9q = i;
		let g9v = 0;
		let y1n = r0s[i];
		while (i < u1g && y1n != '-' && y1n != 'x' && y1n != ':')
		{
			i++;
			g9v++;
			if (i < u1g)
			{
				y1n = r0s[i];
			}
		}
		let x9x = r0s.substr(m9q, g9v);
    f4f.push(j4y(x9x));
		i++; 
	}
	let c7u = f4f.length;
	if (c7u < 2)
	{
		return false;
	}
	else if (c7u == 2)
	{
		let g9q = f4f[0];
		let y4i = f4f[1];
		let r7v = y6e(k5l, g9q, y4i);
		if (r7v.length == 1)
		{
			return r7v[0];
		}
		return false;
	}
	else
	{
		let g9q = f4f[0];
		let y4i = f4f[1];
		let h1u = [];
		for (let i = 2; i < c7u; i++)
		{
			h1u.push(f4f[i]);
		}
		let r7v = c0w(k5l, g9q, y4i, h1u);
		if (r7v.length == 1)
		{
			return r7v[0];
		}
		g9q = f4f[0];
		y4i = f4f[f4f.length - 1];
		let j1i = [];
		for (let i = 1; i < c7u - 1; i++)
		{
			j1i.push(f4f[i]);
		}
		r7v = z8t(k5l, g9q, y4i, j1i);
		if (r7v.length == 1)
		{
			return r7v[0];
		}
		return false;
	}
}

function c0a()
{
  let l1z = ["\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x42\x6f\x61\x72\x64\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2e\x70\x6e\x67",
    "\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x44\x61\x72\x6b\x53\x71\x75\x61\x72\x65\x2e\x70\x6e\x67",
    "\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x4c\x69\x67\x68\x74\x53\x71\x75\x61\x72\x65\x2e\x70\x6e\x67",
    "\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x4d\x61\x72\x67\x69\x6e\x2e\x70\x6e\x67"];
  return l1z;
}
function div(x2u, q2p)
{
  const d9j = x2u % q2p;
  const quot = Math.floor((x2u - d9j) / q2p);
  return { quot: quot, d9j: d9j };
}

function n3a(k5l, i8s)
{
	let b8i = new u4t();
	if (i8s.length < 4)
	{
		return b8i;
	}
	let f8t = i8s.slice(0, 2);
	let toString = i8s.slice(2, 4);
	b8i.g9q = j4y(f8t);
  b8i.w2w = k5l.e1a(b8i.g9q);
	b8i.y4i = j4y(toString);
	b8i.s3y = b8i.w2w;
	if (i8s.length == 5)
	{
		switch (i8s[4])
		{
			case 'q':
				b8i.s3y = k5l.z1d() ? u8l.whiteQueen : u8l.blackQueen;
				break;
			case 'r':
				b8i.s3y = k5l.z1d() ? u8l.whiteRook : u8l.blackRook;
				break;
			case 'b':
				b8i.s3y = k5l.z1d() ? u8l.whiteBishop : u8l.blackBishop;
				break;
			case 'n':
				b8i.s3y = k5l.z1d() ? u8l.whiteKnight : u8l.blackKnight;
				break;
		}
	}
	return b8i;
}

class z8y
{

constructor()
{
	let w2a = '';
	let e8w = '';
}

}

function e1h(i8s, w2a, e7m)
{
  let l5k = "\x20" + w2a + "\x20";
  let f6t = i8s.indexOf(l5k, 0);
	if (f6t >= 0)
	{
		let u1r = f6t + l5k.length;
		let y8q = 0;
		
		if (w2a == "\x70\x76")
		{
			y8q = i8s.indexOf("\x20\x73\x74\x72\x69\x6e\x67\x20", u1r);
		}
		else
		{
			y8q = i8s.indexOf("\x20", u1r);
		}
		if (y8q < 0)
		{
			y8q = i8s.length;
		}
    let e8w = i8s.slice(u1r, y8q).trim();
		e7m.set(w2a, e8w);
	}
}

const w5o =
{
	q4f        : 0,
	y7q      : 1,
};

class k3k
{

constructor()
{
	this.s8q = new b0i();
  this.c2m = null;
  this.u6z = new u4h();
  this.a9a = new g6v();
  this.s7s = false;
  this.q1x = false;
  this.x8k = false;
  this.u3o = false;
  this.y5m = false;
  this.i1g = new c0c();
	this.b9q = new y5p();
  this.x7j = null;
}

l5u(n3g)
{
  this.s8q = n3g.z0k();
  this.b6n();
  this.s7s = false;
 	for (const v4g of this.s8q.a5d.a5d)
	{
		if (v4g.w2a == "\x4d\x75\x6c\x74\x69\x50\x56")
		{
			this.s7s = (v4g.e8w != "\x31");
			break;
		}
	}

  this.y2b();
}

y2b()
{
  this.c2m = new Worker("\x2f\x73\x68\x61\x72\x65\x64\x67\x61\x6d\x65\x73\x2f\x6a\x73\x2f\x73\x74\x6f\x63\x6b\x66\x69\x73\x68\x2d\x31\x37\x2e\x31\x2d\x38\x65\x34\x64\x30\x34\x38\x2e\x6a\x73");
  this.c2m.x7j = (event) => {
    this.y7q(event);
  };
}

z8j()
{
	this.u6z.g9e();
	this.a9a.g9e();
	this.q4f("\x75\x63\x69");
}

m6f()
{
	if (!this.x8k)
	{
    return;
  }

  
	for (const v4g of this.s8q.a5d.a5d)
	{
		let i4r = "\x73\x65\x74\x6f\x70\x74\x69\x6f\x6e";
		i4r += "\x20\x6e\x61\x6d\x65\x20";
		i4r += v4g.w2a;
		i4r += "\x20\x76\x61\x6c\x75\x65\x20";
		i4r += v4g.e8w;
		this.q4f(i4r);
	}
  
  
  
  

	this.q4f("\x69\x73\x72\x65\x61\x64\x79");
	this.x8k = false;
}

q4f(y7h)
{
	this.u8o(y7h, w5o.q4f);
  this.c2m.postMessage(y7h);
}

y7q(event)
{
  
  
 	this.u8o(event.data, w5o.y7q);
	this.u3x(event.data);
}

u3x(i4r)
{
	let x4b = i4r.split(' ');
	if (x4b.length == 0) return;
	let y7h = x4b[0];

	if (y7h == "\x72\x65\x61\x64\x79\x6f\x6b")
	{
		this.q1x = true;
    if (this.x7j)
    {
      this.x7j({
        cmd: "\x72\x65\x61\x64\x79",
        data: {}
        });
    }
		return;
	}
	if (y7h == "\x62\x65\x73\x74\x6d\x6f\x76\x65")
	{
		this.x0v(i4r);
	}
	else if (y7h == "\x69\x64")
	{
		this.a0o(i4r);
	}
	else if (y7h == "\x69\x6e\x66\x6f")
	{
		this.d8h(i4r);
	}
	else if (y7h == "\x6f\x70\x74\x69\x6f\x6e")
	{
		this.d1q(i4r);
	}
	else if (y7h == "\x75\x63\x69\x6f\x6b")
	{
		this.b1r(i4r);
	}
}

x0v(i4r)
{
	this.u3o = false;
  if (this.y5m)
  {
    this.y5m = false;
    this.y6b();
  }
}

a0o(i4r)
{
 	let i8s = i4r;
	let x4b = i8s.split("\x20");
	if (x4b.length < 3) return;

  const word1 = x4b.shift();
  const word2 = x4b.shift();
  const e8w = x4b.join(' ');

	if (word2 == "\x6e\x61\x6d\x65")
	{
		this.u6z.w2a = e8w;
	}
	else if (word2 == "\x61\x75\x74\x68\x6f\x72")
	{
		this.u6z.m3b = e8w;
	}
}

d8h(i4r)
{
	let i8s = i4r;
	let e7m = new Map();
	e1h(i8s, "\x64\x65\x70\x74\x68", e7m);
 	e1h(i8s, "\x73\x65\x6c\x64\x65\x70\x74\x68", e7m);
	e1h(i8s, "\x70\x76", e7m);
	e1h(i8s, "\x6e\x70\x73", e7m);
	e1h(i8s, "\x6e\x6f\x64\x65\x73", e7m);
	e1h(i8s, "\x73\x63\x6f\x72\x65\x20\x63\x70", e7m);
	e1h(i8s, "\x73\x63\x6f\x72\x65\x20\x6d\x61\x74\x65", e7m);
	e1h(i8s, "\x74\x69\x6d\x65", e7m);
	e1h(i8s, "\x63\x75\x72\x72\x6d\x6f\x76\x65", e7m);
	e1h(i8s, "\x63\x75\x72\x72\x6d\x6f\x76\x65\x6e\x75\x6d\x62\x65\x72", e7m);
 	e1h(i8s, "\x6d\x75\x6c\x74\x69\x70\x76", e7m);

  if (e7m.has("\x70\x76") && e7m.has("\x64\x65\x70\x74\x68"))
  {
		this.x2c(e7m);
    if (this.x7j)
    {
      this.x7j({
        cmd: "\x70\x76",
        data: {}
        });
    }

		return;
  }

  if (e7m.has("\x63\x75\x72\x72\x6d\x6f\x76\x65") && e7m.has("\x63\x75\x72\x72\x6d\x6f\x76\x65\x6e\x75\x6d\x62\x65\x72"))
	{
		this.q7u(e7m);
    if (this.x7j)
    {
      this.x7j({
        cmd: "\x63\x6d",
        data: {}
        });
    }
		return;
	}
}

d1q(i4r)
{
	let v4g = new i9r();
	let i8s = i4r;

	let x3n = "\x20\x6e\x61\x6d\x65\x20";
  let f5r = i8s.indexOf(x3n, 0);
	if (f5r < 0) return;
	let f5g = f5r + x3n.length;

	let x5k = "\x20\x74\x79\x70\x65\x20";
	let w1z = i8s.indexOf(x5k, 0);
	if (w1z < 0) return;
	let d3z = w1z;

	let w3d = w1z + x5k.length;
	let j7l = i8s.indexOf("\x20", w3d);
	if (j7l < 0) j7l = i8s.length + 1;

	v4g.w2a = i8s.slice(f5g, d3z);
	v4g.type = i8s.slice(w3d, j7l);

	if (v4g.type == "\x63\x68\x65\x63\x6b")
	{
		v4g.type = "\x62\x6f\x6f\x6c";
	}
	else if (v4g.type == "\x63\x6f\x6d\x62\x6f")
	{
		v4g.type = "\x65\x6e\x75\x6d";
	}

	let l9k = "\x20\x64\x65\x66\x61\x75\x6c\x74\x20";
	let p2w = i8s.indexOf(l9k, 0);
	if (p2w >= 0)
	{
		let m7j = p2w + l9k.length;
		let e4m = i8s.indexOf("\x20", m7j);
		if (e4m < 0) e4m = i8s.length + 1;
		v4g.e8w = i8s.slice(m7j, e4m);
		if (v4g.e8w == "\x3c\x65\x6d\x70\x74\x79\x3e")
		{
			v4g.e8w = "";
		}
	}
	if (v4g.type == "\x73\x70\x69\x6e")
	{
		let i8w = "\x20\x6d\x69\x6e\x20";
		let z8w = i8s.indexOf(i8w, 0);
		if (z8w >= 0)
		{
			let v7f = z8w + i8w.length;
			let r0n = i8s.indexOf("\x20", v7f);
			if (r0n < 0) r0n = i8s.length + 1;
			v4g.min = i8s.slice(v7f, r0n).trim();
		}
		let t3z = "\x20\x6d\x61\x78\x20";
		let g6a = i8s.indexOf(t3z, 0);
		if (g6a >= 0)
		{
			let r4r = g6a + t3z.length;
			let c9p = i8s.indexOf("\x20", r4r);
			if (c9p < 0) c9p = i8s.length + 1;
			v4g.max = i8s.slice(r4r, c9p).trim();
		}
	}
	else if (v4g.type == "\x65\x6e\x75\x6d")
	{
		let e3y = 0;
		while (true)
		{
			let o8t = "\x20\x76\x61\x72\x20";
			let u0d = i8s.indexOf(o8t, e3y);
			if (u0d < 0) break;
			let d0a = u0d + o8t.length;
			let o8w = i8s.indexOf("\x20\x76\x61\x72\x20", u0d + 5);
			if (o8w < 0) o8w = i8s.length + 1;
			if (v4g.values.length != 0)
			{
				v4g.values += "\x20";
			}
			v4g.values += i8s.slice(d0a, o8w).trim();
			e3y = o8w;
		}
	}
	this.a9a.a5d.push(v4g);
}

b1r(i4r)
{
	this.x8k = true;
  this.m6f();
}


j9q()
{
	if (this.c2m)
  {
    this.q4f("\x71\x75\x69\x74");
    this.c2m.terminate();
    this.c2m = null;
  }
}








o9w()
{
}

y1v(y4z)
{
	if (this.q1x)
	{
  	this.u8o('setInput', w5o.q4f);
		this.i1g = y4z.z0k();
    if (this.u3o)
    {
      this.y5m = true;
      this.q4f('stop');
    }
    else
    {
      this.y6b();
    }
	}
}

y6b()
{
  this.b9q = new y5p();
  this.b9q.k5l = this.i1g.a0n();
  this.b9q.c6i = this.i1g.c6i();
	this.b9q.x6l = this.s7s;
  this.u3o = true;
  if (this.x7j)
  {
    this.x7j({
      cmd: "\x67\x6f",
      data: {}
      });
  }

  let i4r = "\x70\x6f\x73\x69\x74\x69\x6f\x6e\x20\x66\x65\x6e";
  i4r += "\x20";
	let g0r = positionToPortableFen(this.i1g.a0n());
	i4r += g0r;
	this.q4f(i4r);
	if (this.i1g.p5k == e9e)
	{
		i4r = "\x67\x6f\x20\x69\x6e\x66\x69\x6e\x69\x74\x65";
		this.q4f(i4r);
	}
	else
	{
		i4r = "\x67\x6f\x20\x6d\x6f\x76\x65\x74\x69\x6d\x65\x20";
		i4r += this.i1g.p5k;
		this.q4f(i4r);
	}
}

b6n()
{
}

u8o(i8s, w9a)
{
	if (!this.s8q.c4n) return;
 	if (w9a == w5o.y7q)
	{
    console.log("\x46\x72\x6f\x6d\x20\x65\x6e\x67\x69\x6e\x65\x3a", i8s);
	}
	else
	{
    console.log("\x54\x6f\x20\x65\x6e\x67\x69\x6e\x65\x3a", i8s);
	}
}

x2c(e7m)
{
  let b5e = e7m.get("\x64\x65\x70\x74\x68");
  let c3g = e7m.get("\x6d\x75\x6c\x74\x69\x70\x76");

	let u1o = new i1l();
	u1o.h1t = b5e;

	if (e7m.has("\x73\x65\x6c\x64\x65\x70\x74\x68"))
	{
		u1o.e6e = e7m.get("\x73\x65\x6c\x64\x65\x70\x74\x68");
	}

 	if (e7m.has("\x6e\x70\x73"))
	{
    let d4k = e7m.get("\x6e\x70\x73");
		let k6e = q6d(d4k, 0);
		let g4v = k6e / 1000;
		if (g4v)
		{
			u1o.g3t = g4v + "\x20\x6b\x4e\x2f\x73";
		}
	}

	let g4t = 0.0;
  if (e7m.has("\x73\x63\x6f\x72\x65\x20\x63\x70"))
	{
    let u6d = e7m.get("\x73\x63\x6f\x72\x65\x20\x63\x70");
		g4t = parseFloat(u6d);
		g4t = g4t / 100.0;
		if (g4t > 9.99)
		{
			g4t = 9.99;
		}
		if (g4t < -9.99)
		{
			g4t = -9.99;
		}
		if (this.b9q.k5l.q8y())
		{
			g4t = -g4t;
		}
		u1o.g4t = g4t;
	}
  if (e7m.has("\x73\x63\x6f\x72\x65\x20\x6d\x61\x74\x65"))
	{
    let w9n = e7m.get("\x73\x63\x6f\x72\x65\x20\x6d\x61\x74\x65");
		let g6l = q6d(w9n, 0);
		if (this.b9q.k5l.q8y())
		{
			g6l = -g6l;
		}
		u1o.g6l = g6l;
		if (g6l > 0)
		{
			g4t = 9.99;
		}
		if (g6l < 0)
		{
			g4t = -9.99;
		}
		u1o.g4t = g4t;
	}

  if (e7m.has("\x74\x69\x6d\x65"))
	{
    let q1l = e7m.get("\x74\x69\x6d\x65");
		let e6d = q6d(q1l, 0);
		let z9l = e6d / 1000;
		let m = div(z9l, 60);
		let k9z = m.d9j;
    k9z = Math.x7e(k9z);
		let h = div(m.quot, 60);
		let u6r = h.d9j;
		let i6f = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const a7v = `${pad(i6f)}:${pad(u6r)}:${pad(k9z)}`;
    u1o.a7v = a7v;
	}

  let x1q = e7m.get("\x70\x76");
	let m0d = x1q.split("\x20");

	let r7v = new g5i();
	let c6i = this.b9q.c6i;
	r7v.h5l(this.b9q.k5l, c6i);
	let m9v = r7v.h6c();
	let i0x = this.b9q.k5l.z0k();
	for (const s of m0d)
	{
		if (s.length == 0)
		{
			continue;
		}
		let n4v = n3a(i0x, s);
		let b1v = i7p(i0x);
		let a8q = false;
		for (const k2j of b1v)
		{
			if (k2j.y4i == n4v.y4i &&
				k2j.g9q == n4v.g9q &&
				k2j.s3y == n4v.s3y)
			{
				i0x.c7b(k2j);
				let b8i = n8w(k2j);
				r7v.f9g(m9v, b8i);
				a8q = true;
				break;
			}
		}
    if (!a8q) break;
	}
	if (!r7v.o5i())
	{
    console.log("\x70\x61\x72\x73\x65\x20\x6d\x6f\x76\x65\x73\x20\x61\x61\x6e\x74\x61\x6c\x3a\x20\x6c\x65\x65\x67\x21");
		return;
	}
  console.log("\x70\x61\x72\x73\x65\x20\x6d\x6f\x76\x65\x73\x20\x61\x61\x6e\x74\x61\x6c\x3a\x20" + r7v.o5i());
	u1o.r7v = r7v;

 	if (this.s7s)
	{
		if (c3g == 1)
		{
			this.b9q.n4i = u1o;
		}
		if (c3g > this.b9q.j8h.length)
		{
			this.b9q.j8h.push(u1o);
		}
		else
		{
			this.b9q.j8h[c3g-1] = u1o;
		}
	}
	else
	{
		this.b9q.j8h.push(u1o);
		this.b9q.n4i = u1o;
	}
}

q7u(e7m)
{
  let t5d = e7m.get("\x63\x75\x72\x72\x6d\x6f\x76\x65");
  let z6o = e7m.get("\x63\x75\x72\x72\x6d\x6f\x76\x65\x6e\x75\x6d\x62\x65\x72"); 
	this.b9q.t9o = q6d(z6o, 0);
	let b1v = i7p(this.b9q.k5l);
	this.b9q.k8l = b1v.length;
	let n4v = n3a(this.b9q.k5l, t5d);
	for (const k2j of b1v)
	{
		if (k2j.y4i == n4v.y4i &&
			k2j.g9q == n4v.g9q &&
			k2j.s3y == n4v.s3y)
		{
			this.b9q.n8v = k2j;
			break;
		}
	}
}

n0y()
{
	return this.b9q.z0k();
}

n3g()
{
	return this.s8q.z0k();
}

}

class u4h
{

constructor()
{
	this.w2a = '';
	this.m3b = '';
	this.o3g = '';
	this.u0n = '';
}

z0k()
{
  return Object.assign(new u4h(), this);
}

g9e()
{
	this.w2a = '';
	this.m3b = '';
	this.o3g = '';
	this.u0n = '';
}

}


const e9e = 10000000;

class c0c
{

constructor()
{
	this.r7v = new g5i();
	this.p5k = e9e;
  this.t1u = 0;
	this.b5a = 0;
}

z0k()
{
	let x9w = new c0c();
  x9w.r7v = this.r7v.z0k();
  x9w.p5k = this.p5k;
  x9w.t1u = this.t1u;
  x9w.b5a = this.b5a;
	return x9w;
}

c6i()
{
	return this.r7v.s2a(this.r7v.p2i());
}

a0n()
{
	return this.r7v.b8r();
}

}


class b0i
{

constructor()
{
	this.m6a = '';
	this.z7z = new u4h();
	this.a5d = new g6v();
	this.s9f = new g6v();
	this.c4n = true;
	this.q4d = true;
}

z0k()
{
	let h0z = new b0i();
	h0z.m6a = this.m6a;
	h0z.z7z = this.z7z.z0k();
	h0z.a5d = this.a5d.z0k();
	h0z.s9f = this.s9f.z0k();
	h0z.c4n = this.c4n;
	h0z.q4d = this.q4d;
	return h0z;
}


}


function d7l(g4t)
{
  if (Math.abs(g4t) < 0.005)
  {
    return "\x30\x2e\x30\x30";
  }
  else
  {
     const formatted = g4t.toFixed(2);
     return g4t > 0 ? `+${formatted}` : formatted;
  }
}

class i1l
{

constructor()
{
	this.g4t = 0.0;
	this.g6l = false;
	this.h1t = '';
	this.e6e = '';
	this.a7v = '';
	this.g3t = '';
	this.r7v = new g5i();
}

z0k()
{
	let r0c = new i1l();
  r0c.g4t = this.g4t;
  r0c.g6l = this.g6l;
  r0c.h1t = this.h1t;
  r0c.e6e = this.e6e;
  r0c.a7v = this.a7v;
  r0c.g3t = this.g3t;
  r0c.r7v = this.r7v.z0k();
	return r0c;
}

y1g()
{
	if (this.g6l)
	{
		return "\x23" + this.g6l;
	}
	else
	{
		return d7l(this.g4t);
	}
}

d8w()
{
	let s9b = scoreToMoveValue(this.g4t);
	let f9u = moveValueToEvalString(s9b);
	return f9u;
}

}

class y5p
{

constructor()
{
	this.k5l = new b7h();
	this.c6i = 1;
	this.t5t = false;
	this.o3s = false;
	this.x6l = false;
	this.j8h = [];
	this.n4i = new i1l();
	this.n8v = new u4t();
	this.t9o = 0;
	this.k8l = 0;
}

z0k()
{
	let x5j = new y5p();
  x5j.k5l = this.k5l.z0k();
  x5j.c6i = this.c6i;
  x5j.t5t = this.t5t;
  x5j.o3s = this.o3s;
  x5j.x6l = this.x6l;
  x5j.j8h = this.j8h.slice();
  x5j.n4i = this.n4i.z0k();
  x5j.n8v = this.n8v.z0k();
  x5j.t9o = this.t9o;
  x5j.k8l = this.k8l;
	return x5j;
}

b0z()
{
	return this.n4i.r7v.o5i() > 0;
}

b2c()
{
	let l2l = this.n4i.r7v.h6c();
	this.n4i.r7v.c7b(l2l);
	return l2l.b8i.k2j();
}

}


class i9r
{
  constructor(type = '', w2a = '', e8w = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.w2a = w2a;
    this.e8w = e8w;
    this.min = min;
    this.max = max;
    this.values = values;
  }

  z0k()
  {
    return Object.assign(new i9r(), this);
  }
}

class g6v
{
  constructor()
  {
    this.a5d = [];
  }

  z0k()
  {
    let h1x = new g6v();
    h1x.a5d = this.a5d.map(p => p.z0k());
    return h1x;
  }

  g9e()
  {
    this.a5d.length = 0;
  }

  addBool(w2a, e8w)
  {
    this.a5d.push(new i9r("\x62\x6f\x6f\x6c", w2a, e8w));
  }

  addInteger(w2a, e8w)
  {
    this.a5d.push(new i9r("\x69\x6e\x74", w2a, e8w));
  }

  addSpin(w2a, e8w, min, max)
  {
    this.a5d.push(new i9r("\x73\x70\x69\x6e", w2a, e8w, min, max));
  }

  addString(w2a, e8w)
  {
    this.a5d.push(new i9r("\x73\x74\x72\x69\x6e\x67", w2a, e8w));
  }

  addEnum(w2a, e8w, values)
  {
    this.a5d.push(new i9r("\x65\x6e\x75\x6d", w2a, e8w, '', '', values));
  }

  addButton(w2a)
  {
    this.a5d.push(new i9r("\x62\x75\x74\x74\x6f\x6e", w2a, w2a));
  }

  i7g(w2a, e8w)
  {
    for (let v4g of this.a5d)
    {
      if (v4g.w2a === w2a)
      {
        v4g.e8w = e8w;
      }
    }
  }
}
class e0c
{

constructor()
{
	this.w2a = '';
}

z0k()
{
	let h0o = new e0c();
	h0o.w2a = this.w2a;
	return h0o;
}

m7g()
{
	return this.w2a.length == 0;
}

t0z()
{
	return this.w2a;
}

}


const r4b =
{
	d3j : 0,
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
	f9z: 51,
	l8d: 52,
	s5x: 53,
	t4c: 54,
	n6n: 55,
	h6d: 56,
	x4m: 57,
	x8i: 58,
	u8r: 59,
	x7u: 60,
	p3d: 61,
	h2s: 62,
	i9k: 63,
	d7n: 64,
	q6a: 65,
	s6f: 66,
	g3d: 67,
	l8q: 68,
	t3k: 69,
	g4s: 70,
	a1k: 71,
	n8x: 72,
	h4u: 73,
	v5f: 74,
	d8r: 75,
	n4j: 76,
	h0w: 77,
	v7g: 78,
	d5w: 79,
	k0a: 80,
	c2y: 81,
	k2n: 82,
	j5o: 83,
	x9k: 84,
	v3o: 85,
	j4f: 86,
	c6r: 87,
	j4c: 88,
	o0k: 89,
	l8u: 90,
	x6i: 91,
	x8m: 92,
	v3k: 93,
	r1q: 94,
	d1e: 95,
	p3s: 96,
	b4u: 97,
	p2g: 98,
	y9o: 99,
	v7j: 100,
	s5j: 101,
	y0p: 102,
	l9o: 103,
	u3n: 104,
	g6d: 105,
	z4p: 106,
	z7i: 107,
	p4z: 108,
	k8c: 109,
	u7d: 110,
	j5j: 111,
	g0d: 112,
	a3p: 113,
	p4l: 114,
	i0q: 115,
	c2s: 116,
	s2b: 117,
	u1b: 118,
	p9x: 119,
	w3x: 120,
	v8j: 121,
	q2h: 122,
	r4d: 123,
	h7z: 124,
	p2c: 125,
	c8p: 126,
	c4u: 127,
	s4f: 128,
	e0b: 129,
	w8g: 130,
	c4c: 131,
	u9m: 132,
	c0n: 133,
	j8y: 134,
	z5z: 135,
	h5c: 136,
	f0v: 137,
	u9y: 138,
	x4w: 139,
	z6w: 140,
	c7p: 141,
	o1h: 142,
	x3g: 143,
	k1c: 144,
	f1y: 145,
	n1o: 146,
	z0j: 147,
	r7n: 148,
	j1e: 149,
	w4s: 150,
	d7w: 151,
	v6r: 152,
	v6s: 153,
	m8h: 154,
	z2x: 155,
	u3k: 156,
	m4s: 157,
	z8a: 158,
	d0l: 159,
	o7t: 160,
	t4a: 161,
	b4d: 162,
	r7t: 163,
	h6l: 164,
	p5w: 165,
	k0e: 166,
	i7v: 167,
	z9c: 168,
	o6s: 169,
	k6k: 170,
	d9m: 171,
	v6m: 172,
	e1n: 173,
	w4w: 174,
	h4v: 175,
	l6e: 176,
	e8f: 177,
	b2k: 178,
	v4x: 179,
	m5f: 180,
	o8k: 181,
	u4p: 182,
	v0x: 183,
	g3o: 184,
	g0q: 185,
	q7d: 186,
	w6w: 187,
	q9h: 188,
	u3c: 189,
	f5f: 190,
	i2a: 191,
	i2m: 192,
	h8d: 193,
	y0l: 194,
	k8n: 195,
	y9n: 196,
	y8x: 197,
	b9e: 198,
	w5t: 199,
	w2j: 200,
	i0e: 201,
	i9n: 202,
	j0o: 203,
	s9o: 204,
	j7c: 205,
	z4t: 206,
	i1d: 207,
	c9d: 208,
	w0d: 209,
	p2e: 210,
	g3v: 211,
	k5g: 212,
	q1z: 213,
	v8q: 214,
	y2o: 215,
	t7y: 216,
	a6u: 217,
	v4p: 218,
	r6z: 219,
	i9x: 220,
	f8e: 221,
	p9h: 222,
	v5l: 223,
	i4l: 224,
	z3a: 225,
	p2v: 226,
	w2f: 227,
	i6a: 228,
	u1l: 229,
	s7c: 230,
	q3x: 231,
	a8c: 232,
	b9y: 233,
	g6o: 234,
	s7z: 235,
	y3v: 236,
	k0s: 237,
	j7x: 238,
	u8j: 239,
	i0f: 240,
	n7l: 241,
	u4k: 242,
	i2l: 243,
	i6i: 244,
	w5i: 245,
	m1l: 246,
	o2m: 247,
	i8k: 248,
	h4k: 249,
	c7n: 250,
	l1h: 251,
	p6w: 252,
	b6v: 253,
	f3z: 254,
	t1s: 255,
	a5m: 256,
	d1u: 257,
	e6k: 258,
	h9f: 259
};


const t6g = 0;
const w8l = 500;

function q1f(i8s)
{
	if (i8s.length != 3)
	{
		return 0;
	}
	let h6g = i8s[0];
	let d7o = i8s[1];
	let h2t = i8s[2];

	let z0m = 0;
	if (h6g == 'A' || h6g == 'a') z0m = 0;
	else if (h6g == 'B' || h6g == 'b') z0m = 1;
	else if (h6g == 'C' || h6g == 'c') z0m = 2;
	else if (h6g == 'D' || h6g == 'd') z0m = 3;
	else if (h6g == 'E' || h6g == 'e') z0m = 4;
	else return 0;
	if (isNaN(d7o) || isNaN(h2t))
	{
		return 0;
	}
	return z0m * 100 + q6d(i8s.substr(1, 2), 0) + 1;
}

function e5h(d1t)
{
	if (d1t)
	{
		let div = Math.trunc((d1t - 1) / 100);
		let d9j = (d1t - 1) % 100;
		let o2v = 'A';
		if (div == 0) o2v = 'A';
		else if (div == 1) o2v = 'B';
		else if (div == 2) o2v = 'C';
		else if (div == 3) o2v = 'D';
		else if (div == 4) o2v = 'E';
		return o2v + d9j.toString().padStart(2, '0');
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
	this.x0p = 0;
	this.s4l = 0;
	this.k8v = 0;
}

z0k()
{
	let z1o = new s5w();
	z1o.h2i = this.x0p;
	z1o.z0y = this.s4l;
	z1o.m0k = this.k8v;
	return z1o;
}

m7g()
{
	return this.k8v == 0 && this.s4l == 0 && this.x0p == 0;
}

t4y()
{
	let m0k = this.k8v.toString().padStart(4, '0');
	let z0y = this.s4l.toString().padStart(2, '0');
	let h2i = this.x0p.toString().padStart(2, '0');
	return m0k + z0y + h2i;
}

w8k(s6v, i8s)
{
	let u1g = i8s.length;
	if (!u1g)
	{
		this.k8v = 0;
		this.s4l = 0;
		this.x0p = 0;
	}
	else if (s6v == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79" || s6v == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79\x79\x79")
	{
  	if (u1g == 4)
		{
      this.k8v = q6d(i8s.substr(1, 4), 0);
		}
		else if (u1g == 10)
		{
			this.x0p = q6d(i8s.substr(0, 2), 0);
			this.s4l = q6d(i8s.substr(3, 2), 0);
			this.k8v = q6d(i8s.substr(6, 4), 0);
		}
	}
	else if (s6v == "\x79\x79\x79\x79\x2d\x6d\x6d\x2d\x64\x64" || s6v == "\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64")
	{
  	if (u1g == 4)
		{
      this.k8v = q6d(i8s.substr(1, 4), 0);
		}
		else if (u1g == 10)
		{
			this.x0p = q6d(i8s.substr(8, 2), 0);
			this.s4l = q6d(i8s.substr(5, 2), 0);
			this.k8v = q6d(i8s.substr(0, 4), 0);
		}
	}
	else if (s6v == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79" || s6v == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79")
	{
		if (u1g == 8)
		{
			this.x0p = q6d(i8s.substr(0, 2), 0);
			this.s4l = q6d(i8s.substr(3, 2), 0);
			this.k8v = q6d(i8s.substr(6, 2), 0) + 2000;
		}
	}
}

toString(s6v)
{
	let i8s = '';
	if (this.m7g())
	{
	}
	else if (s6v == "\x6c\x69\x73\x74")
	{
		let m0k = this.k8v.toString().padStart(4, '0');
		let z0y = this.s4l.toString().padStart(2, '0');
		let h2i = this.x0p.toString().padStart(2, '0');
		if (this.x0p)
		{
			i8s = h2i + "\x2d" + z0y + "\x2d" + m0k;
		}
		else if (this.s4l)
		{
			i8s = z0y + "\x2d" + m0k;
		}
		else if (this.k8v)
		{
			i8s = m0k;
		}
	}
	else if (s6v == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79")
	{
		let m0k = this.k8v.toString().padStart(4, '0');
		let z0y = this.s4l.toString().padStart(2, '0');
		let h2i = this.x0p.toString().padStart(2, '0');
		i8s = h2i + "\x2d" + z0y + "\x2d" + m0k;
	}
	else if (s6v == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79\x79\x79")
	{
		let m0k = this.k8v.toString().padStart(4, '0');
		let z0y = this.s4l.toString().padStart(2, '0');
		let h2i = this.x0p.toString().padStart(2, '0');
		i8s = h2i + "\x2e" + z0y + "\x2e" + m0k;
	}
	else if (s6v == "\x79\x79\x79\x79\x2d\x6d\x6d\x2d\x64\x64")
	{
		let m0k = this.k8v.toString().padStart(4, '0');
		let z0y = this.s4l.toString().padStart(2, '0');
		let h2i = this.x0p.toString().padStart(2, '0');
		i8s = m0k + "\x2d" + z0y + "\x2d" + h2i;
	}
	else if (s6v == "\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64")
	{
		let m0k = this.k8v.toString().padStart(4, '0');
		let z0y = this.s4l.toString().padStart(2, '0');
		let h2i = this.x0p.toString().padStart(2, '0');
		i8s = m0k + "\x2e" + z0y + "\x2e" + h2i;
	}
	else if (s6v == "\x79\x79\x79\x79\x6d\x6d\x64\x64")
	{
		let m0k = this.k8v.toString().padStart(4, '0');
		let z0y = this.s4l.toString().padStart(2, '0');
		let h2i = this.x0p.toString().padStart(2, '0');
		i8s = m0k + z0y + h2i;
	}
	else if (s6v == "\x79\x79\x79\x79")
	{
		let m0k = this.k8v.toString().padStart(4, '0');
		i8s = m0k;
	}
	return i8s;
}

}

class w3m
{

constructor()
{
	this.d8n = new f8r();
	this.y6k = new h6o();
	this.q2q = 0;
	this.j4r = 0;
	this.i3d = "";
  this.u0n = r4b.d3j;
}

z0k()
{
	let b4n = new w3m();
	b4n.d8n = this.d8n.z0k();
	b4n.y6k = this.y6k.z0k();
	b4n.q2q = this.q2q;
	b4n.j4r = this.j4r;
	b4n.i3d = this.i3d;
  b4n.u0n = this.u0n;
	return b4n;
}

m7g()
{
	return this.d8n.m7g() &&
		this.y6k.m7g() &&
		this.q2q == 0 &&
		this.j4r == 0 &&
		this.i3d == "" &&
 		this.u0n == r4b.d3j;
}

}


class s2g
{

constructor()
{
	this.a0c = new w3m();
	this.k3t = new w3m();
	this.d1l = new a7t();
	this.u3w = new e0c();
	this.t1o = new a5i();
	this.i3d = new n9w();
	this.t4y = new s5w();
	this.j8i = x6s.d3j;
	this.d1t = 0;
	this.x7e = 0;
	this.c2w = 0;
	this.a6z = new y5a();
  this.z7z = new s2f();
}

z0k()
{
	let t3c = new s2g();
	t3c.a0c = this.a0c.z0k();
	t3c.k3t = this.k3t.z0k();
	t3c.d1l = this.d1l.z0k();
	t3c.u3w = this.u3w.z0k();
	t3c.t1o = this.t1o.z0k();
	t3c.i3d = this.i3d.z0k();
	t3c.t4y = this.t4y.z0k();
	t3c.j8i = this.j8i;
	t3c.d1t = this.d1t;
	t3c.x7e = this.x7e;
	t3c.c2w = this.c2w;
	t3c.a6z = this.a6z.z0k();
  t3c.z7z = this.z7z.z0k();
	return t3c;
}

m7g()
{
	return this.a0c.m7g() &&
		this.k3t.m7g() &&
		this.d1l.m7g() &&
		this.u3w.m7g() &&
		this.t1o.m7g() &&
		this.i3d.m7g() &&
		this.t4y.m7g() &&
		this.j8i == x6s.d3j &&
		this.d1t == 0 &&
		this.x7e == 0 &&
		this.c2w == 0 &&
		this.a6z.m7g();
}

i5d()
{
	let i8s = '';
	if (this.c2w)
	{
		i8s = this.x7e.toString() + "\x2e" + this.c2w.toString();
	}
	else if (this.x7e)
	{
		i8s = this.x7e.toString();
	}
	return i8s;
}

}


class s2f
{

constructor()
{
	this.f1p = '';
}

z0k()
{
	let i3l = new s2f();
	i3l.f1p = this.f1p;
	return i3l;
}

toString()
{
  return this.f1p;
}

}


class n9w
{

constructor()
{
	this.i3d = '';
}

z0k()
{
	let a0r = new n9w();
	a0r.i3d = this.i3d;
	return a0r;
}

m7g()
{
	return this.i3d.length == 0;
}

t0z()
{
	return this.i3d;
}

}


class f8r
{

constructor()
{
	this.d5n = '';
	this.u0c = '';
}

z0k()
{
	let d3h = new f8r();
	d3h.d5n = this.d5n;
	d3h.u0c = this.u0c;
	return d3h;
}

m7g()
{
	return this.u0c.length == 0 &&
		this.d5n.length == 0;
}

w2a()
{
	if (!this.u0c.length == 0 && !this.d5n.length == 0)
	{
		return this.u0c + "\x2c" + this.d5n;
	}
	else if (this.u0c.length == 0 && this.d5n.length == 0)
	{
		return "";
	}
	else if (this.d5n.length == 0)
	{
		return this.u0c;
	}
	else
	{
		return this.d5n;
	}
}

z1e()
{
	return this.w2a().replace(/,/g, "\x20");
}

v7t()
{
	return this.w6n(1).replace(/,/g, "\x20");
}

w6n(q5a)
{
	if (this.u0c.length == 0)
	{
		if (this.d5n.length == 0 || q5a < 1)
		{
			return "";
		}
		else
		{
			return this.d5n.substring(0, q5a);
		}
	}
	else
	{
		if (this.d5n.length == 0 || q5a < 1)
		{
			return this.u0c;
		}
		else
		{
			return this.u0c + "\x2c" + this.d5n.substring(0, q5a);
		}
	}
}

w2k(e6f)
{
	let i8s = e6f.trim();
	let l2l = i8s.lastIndexOf("\x2c");
	if (l2l != -1)
	{
		this.u0c = i8s.substr(0, l2l).trim();
		this.d5n = i8s.substr(l2l+1, i8s.length).trim();
		if (this.d5n.length != 0)
		{
			if (this.d5n.charAt(0).toLowerCase() == this.d5n.charAt(0))
			{
				this.u0c += "\x2c";
				this.u0c += this.d5n;
				this.d5n = "";
			}
		}
	}
	else
	{
		this.u0c = i8s;
		this.d5n = "";
	}
}

t0z()
{
	return this.w2a();
}

}

const x6s =
{
	d3j : 0,
	i0u : 1,
	r2x : 2,
	h3x : 3,
	i6u : 4,
	o9e : 5,
	o5j : 6,
	i7r : 7,
	x1p : 8,
	j2j : 9,
	f8i : 10,
	y2l : 11,
	y8n : 12,
	w8a : 13,
	w0b : 14,
	f0d : 15
};


function w4r(j8i)
{
	switch (j8i)
	{
		case x6s.i0u:
			return "\x32\x2d\x30";
		case x6s.h3x:
			return "\x31\x2d\x31";
		case x6s.r2x:
			return "\x30\x2d\x32";
		default:
			return "";
	}
}
const v1k =
{
	j3d : 0,
	p0j : 1,
	t7x : 2
};

const h7e =
[
	[ v1k.j3d,   "\x48\x69\x67\x68" ],
	[ v1k.p0j, "\x4d\x69\x64\x64\x6c\x65" ],
	[ v1k.t7x,    "\x4c\x6f\x77" ]
];

class a5i
{

constructor()
{
	this.i3d = '';
	this.n0m = '';
	this.c0j = new s5w();
	this.a1v = new s5w();
	this.t4i = 0;
	this.c9u = v1k.j3d;
}

z0k()
{
	let k9j = new a5i();
	k9j.i3d = this.i3d;
	k9j.n0m = this.n0m;
	k9j.c0j = this.c0j.z0k();
	k9j.a1v = this.a1v.z0k();
	k9j.t4i = this.t4i;
	k9j.c9u = this.c9u;
	return k9j;
}

m7g()
{
	return this.i3d.length == 0 &&
		this.n0m.length == 0 &&
		this.c0j.m7g() &&
		this.a1v.m7g() &&
		this.t4i == 0 &&
		this.c9u == v1k.j3d;
}

t0z()
{
	let i8s = this.i3d;
	if (this.n0m.length)
	{
		if (i8s.length)
		{
			i8s += "\x20";
		}
		i8s += this.n0m;
	}
	return i8s;
}

}


const u2u =
{
	n8l : 0,
	d7a : 1,
	i6w : 2,
	b6q : 3,
	k7l : 4,
	j3p : 5,
	b4e : 6,
	e1u : 7,
	a4b : 8,
	s0s : 9,
	e3u : 10,
	c4h : 11,
	n6s : 12,
	z4c : 13,
	d2u : 14,
	w4t : 15
};

class y5a
{

constructor()
{
	this.e8w = 0;
}

g0i(e8w)
{
	this.e8w = e8w;
}

z0k()
{
	let t0x = new y5a();
	t0x.e8w = this.e8w;
	return t0x;
}

m7g()
{
	return this.e8w == 0;
}

f6f()
{
	return this.e8w != 0;
}

d3j()
{
	return this.e8w == 0;
}

g9v()
{
	let i4h = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.v9w(i))
		{
			i4h++;
		}
	}
	return i4h;
}

p1n()
{
	this.e8w = 0;
}

set(m7i, o9d)
{
	if (o9d)
	{
		this.e8w |= (1 << m7i);
	}
	else
	{
		this.e8w &= ~(1 << m7i);
	}
}

v9w(m7i)
{
	return (this.e8w & (1 << m7i)) != 0;
}

b7q()
{
	return this.e8w;
}

}

function r1k(m0k)
{
	return m0k.toString().padStart(4, '0');
}

class h6o
{

constructor()
{
	this.w2a = '';
	this.w0j = 0;
	this.m0k = 0;
	this.l0c = false;
	this.u0n = r4b.d3j;
}

z0k()
{
	let v4h = new h6o();
	v4h.w2a = this.w2a;
	v4h.w0j = this.w0j;
	v4h.m0k = this.m0k;
	v4h.l0c = this.l0c;
	v4h.u0n = this.u0n;
	return v4h;
}

m7g()
{
	return this.w2a.length == 0 &&
		this.w0j == 0 &&
		this.m0k == 0 &&
		this.l0c == false &&
		this.u0n == r4b.d3j;
}

c7z()
{
	let i8s = this.w2a;
	if (this.w0j)
	{
		if (i8s.length)
		{
			i8s += "\x20";
		}
		i8s += this.w0j;
	}
	return i8s;
}

t0z()
{
	let i8s = this.w2a;
	if (this.w0j)
	{
		if (i8s.length)
		{
			i8s += "\x20";
		}
		i8s += this.w0j;
	}
	if (i8s.length)
	{
		i8s += "\x20";
	}
	i8s += this.v6e();
	return i8s;
}


b6b()
{
	let i8s = this.w2a;
	if (this.w0j > 1)
	{
		i8s += "\x20";
		i8s += this.w0j;
	}
	return i8s;
}

v6e()
{
	let i8s = '';
	if (this.l0c)
	{
		let w8t = r1k(this.m0k);
		let v9q = r1k(this.m0k + 1);
		let g2e = w8t + "\x2f" + v9q.substr(2, 2);
		i8s = g2e;
	}
	else
	{
		i8s = r1k(this.m0k);
	}
	return i8s;
}

}

class h6v
{

constructor()
{
	this.i6f = 0;
	this.u6r = 0;
	this.k9z = 0;

}

}

function j5q(i8s, r0i, j4r)
{
	j4r.i6f = 0;
	j4r.u6r = 0;
	j4r.k9z = 0;

	let u1g = i8s.length;
	if (!u1g || i8s == "\x3f")
	{
		return;
	}
	let i = 0;
	for (; i < u1g; i++)
	{
		if (!isNaN(i8s[i]))
		{
			break;
		}
	}
	let g8m = '';
	for (; i < u1g; i++)
	{
		if (isNaN(i8s[i]))
		{
			break;
		}
		g8m += i8s[i].toString();
	}
	for (; i < u1g; i++)
	{
		if (!isNaN(i8s[i]))
		{
			break;
		}
	}
	let z8m = '';
	for (; i < u1g; i++)
	{
		if (isNaN(i8s[i]))
		{
			break;
		}
		z8m += i8s[i].toString();
	}
	for (; i < u1g; i++)
	{
		if (!isNaN(i8s[i]))
		{
			break;
		}
	}
	let h6e = '';
	for (; i < u1g; i++)
	{
		if (isNaN(i8s[i]))
		{
			break;
		}
		h6e += i8s[i].toString();
	}
	let j9a = q6d(g8m, 0);
	let e1q = q6d(z8m, 0);
	let a5w = q6d(h6e, 0);
	if (
		j9a < 0 || j9a > r0i ||
		e1q < 0 || e1q > 59 ||
		a5w < 0 || a5w > 59)
	{
		j9a = 0;
		e1q = 0;
		a5w = 0;
	}
	j4r.i6f = j9a;
	j4r.u6r = e1q;
	j4r.k9z = a5w;
}

function j4x(i8s)
{
	if (i8s.length == 0)
	{
		return 0;
	}
	else
	{
		let j4r = new h6v();
		j5q(i8s, 9, j4r);
		return j4r.i6f * 60 + j4r.u6r;
	}
}


const b3x =
{
	d3j : 0,
	z2z : 1,
	r5s : 2,
	d1l : 3,
	c0u : 4,
	x1i : 5,
	z6t : 6,
	e3j : 7
};

const z7v =
[
	[ b3x.d3j, 			 	""                   ],
	[ b3x.z2z,  		 	"\x53\x69\x6e\x67\x6c\x65\x47\x61\x6d\x65"         ],
	[ b3x.r5s,  		 	"\x4d\x61\x74\x63\x68"              ],
	[ b3x.d1l,  "\x52\x6f\x75\x6e\x64\x52\x6f\x62\x69\x6e"         ],
	[ b3x.c0u,   		"\x53\x77\x69\x73\x73\x53\x79\x73\x74\x65\x6d"        ],
	[ b3x.x1i,    "\x4b\x6e\x6f\x63\x6b\x6f\x75\x74"           ],
	[ b3x.z6t,"\x53\x69\x6d\x75\x6c"              ],
	[ b3x.e3j,"\x53\x63\x68\x65\x76\x65\x6e\x69\x6e\x67\x65\x6e\x53\x79\x73\x74\x65\x6d" ]
];

class a7t
{

constructor()
{
	this.i3d = '';
	this.n7q = '';
	this.t7m = new s5w();
	this.x3l = new s5w();
	this.y8j = h8z.p3p;
	this.x4a = 0;
	this.u0n = r4b.d3j;
	this.type = b3x.d3j;
	this.c8h = 0;
	this.j1b = false;
	this.h1a = false;
	this.v3m = false;
	this.b6u = false;
}

z0k()
{
	let k1z = new a7t();
	k1z.i3d = this.i3d;
	k1z.n7q = this.n7q;
	k1z.t7m = this.t7m.z0k();
	k1z.x3l = this.x3l.z0k();
	k1z.y8j = this.y8j;
	k1z.x4a = this.x4a;
	k1z.u0n = this.u0n;
	k1z.type = this.type;
	k1z.c8h = this.c8h;
	k1z.j1b = this.j1b;
	k1z.h1a = this.h1a;
	k1z.v3m = this.v3m;
	k1z.b6u = this.b6u;
	return k1z;
}

m7g()
{
	return this.i3d.length == 0 &&
		this.n7q.length == 0 &&
		this.t7m.m7g() &&
		this.x3l.m7g() &&
		this.y8j == h8z.p3p &&
		this.x4a == 0 &&
		this.u0n == r4b.d3j &&
		this.type == b3x.d3j &&
		!this.c8h &&
		!this.j1b &&
		!this.h1a &&
		!this.v3m &&
		!this.b6u;
}

t0z()
{
	let i8s = this.i3d;
	if (this.n7q.length)
	{
		if (i8s.length)
		{
			i8s += "\x20";
		}
		i8s += this.n7q;
	}
	if (i8s.length)
	{
		i8s += "\x20";
	}
	let m0k = this.t7m.m0k.toString().padStart(4, '0');
	i8s += m0k;
	return i8s;
}

}



const h8z =
{
	p3p : 0,
	q7b : 1,
	a8y : 2,
	g5r : 3
};

const v8u =
[
	[ h8z.p3p, "\x4e\x6f\x72\x6d\x61\x6c" ],
	[ h8z.q7b,  "\x52\x61\x70\x69\x64"  ],
	[ h8z.a8y,  "\x42\x6c\x69\x74\x7a"  ],
	[ h8z.g5r,   "\x43\x6f\x72\x72"   ]
];

function y5q(y8j)
{
	return v8u[y8j][1];
}

function p0v()
{
	let y4l = [];
	for (const y8j of v8u)
	{
		y4l.push(y8j[1]);
	}
	return y4l;
}

class r0u
{

constructor()
{
	this.j7d = '';
	this.t4h = '';
	this.h9e = s1v.d3j;
	this.style = m6y.d3j;
	this.e8w = g7e.d3j;
	this.z6c = new e4e();
	this.s0l = new u6i();
	this.s8s = new s2q();
	this.j0u = m0e.d3j;
	this.x6n = false;
	this.t3d = false;
  this.o3k = false;
}

z0k()
{
	let l3n = new r0u();
	l3n.j7d = this.j7d;
	l3n.t4h = this.t4h;
	l3n.h9e = this.h9e;
	l3n.style = this.style;
	l3n.e8w = this.e8w;
	l3n.z6c = this.z6c.z0k();
	l3n.s0l = this.s0l.z0k();
	l3n.s8s = this.s8s.z0k();
	l3n.j0u = this.j0u;
	l3n.x6n = this.x6n;
	l3n.t3d = this.t3d;
 	l3n.o3k = this.o3k;
	return l3n;
}

m7g()
{
	return this.j7d.length == 0 &&
		this.t4h.length == 0 &&
		this.h9e == s1v.d3j &&
		this.style == m6y.d3j &&
		this.e8w == g7e.d3j &&
		this.z6c.m7g() &&
		this.s0l.m7g() &&
		this.s8s.m7g() &&
		this.j0u == m0e.d3j &&
		this.x6n == false &&
		this.t3d == false &&
 		this.o3k == false;
}

}

const m0e =
{
	d3j : 0,
	s3i : 1,
	p0j : 2,
	q2f : 3
};

const b1x =
{
	r1f : 0,
	u4e : 1,
	c5z : 2,
	h3q : 3,
	j9m : 4,
	c3y : 5,
	x7w : 6,
	f0d : 7,
	l8r : 8,
	j8p : 9,
	l4f : 10,
	e4o : 11,
	o3s : 12,
	b1n : 13,
	b4b : 14,
	a7h : 15
};

class e4e
{

constructor()
{
	this.e8w = 0;
}

g0i(e8w)
{
	this.e8w = e8w;
}

z0k()
{
	let l0k = new e4e();
	l0k.e8w = this.e8w;
	return l0k;
}

m7g()
{
	return this.e8w == 0;
}

f6f()
{
	return this.e8w != 0;
}

d3j()
{
	return this.e8w == 0;
}

g9v()
{
	let i4h = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.v9w(i))
		{
			i4h++;
		}
	}
	return i4h;
}

p1n()
{
	this.e8w = 0;
}

set(m7i, o9d)
{
	if (o9d)
	{
		this.e8w |= (1 << m7i);
	}
	else
	{
		this.e8w &= ~(1 << m7i);
	}
}

v9w(m7i)
{
	return (this.e8w & (1 << m7i)) != 0;
}

b7q()
{
	return this.e8w;
}

}

const s1v =
{
	d3j : 0,
	z7t : 1,
	f4r : 2,
	y8d : 3,
	e7g : 4,
	u0u : 5,
	q7l : 6
};

const y4w =
[
	[ s1v.d3j,     		  ""   ],
	[ s1v.z7t,       		  "\x52\x52" ],
	[ s1v.f4r, 		  "\x26\x23\x38\x39\x37\x39\x3b"  ],
	[ s1v.y8d, 		  "\x26\x23\x38\x38\x30\x34\x3b"  ],
	[ s1v.e7g,  "\x3d"  ],
	[ s1v.u0u,   "\x26\x23\x39\x36\x35\x31\x3b"  ],
	[ s1v.q7l,  "\x26\x23\x39\x36\x36\x31\x3b"  ]
];

function c4i(h9e)
{
	return y4w[h9e][1];
}


const m6y =
{
	d3j : 0,
	u8f : 1,
	u3m : 2,
	x3e : 3,
	m5y : 4,
	b4p : 5,
	g6g : 6,
	l8o : 7,
	u8w : 8
};

const d5p =
[
	[ m6y.d3j,     		"" 	 ],
	[ m6y.u8f,       	"\x21"  ],
	[ m6y.u3m, 					"\x3f"  ],
	[ m6y.x3e,	"\x21\x3f" ],
	[ m6y.m5y,	 		"\x3f\x21" ],
	[ m6y.b4p,  	"\x21\x21" ],
	[ m6y.g6g, 			"\x3f\x3f" ],
	[ m6y.l8o, 		"\x26\x23\x38\x38\x35\x37\x3b"  ],
	[ m6y.u8w, 		"\x26\x23\x39\x37\x32\x33\x3b"  ]
];

function s2t(style)
{
	return d5p[style][1];
}


class v7x
{

constructor()
{
	this.b8i = new d8g();
	this.f6c = null;
	this.c4m = null;
	this.c9v = null;
	this.x8t = null;
  this.w0j = 0; 
}

g7y(b8i)
{
	this.b8i = b8i.z0k();
}

y7y(k5l, l6n, n4k, v6z)
{
	this.b8i.y7y(k5l, l6n, n4k, v6z);
}

}

class z4r
{

constructor()
{
	this.m0x = null;
	this.b8i = null;
}

n7n(z0d)
{
	return this.m0x == z0d.m0x;
}

j5g(z0d)
{
	return !this.n7n(z0d);
}

z0k()
{
	let w8y = new z4r();
  w8y.m0x = this.m0x;
  w8y.b8i = this.b8i;
	return w8y;
}

}


class g5i
{

constructor()
{
	this.c4y = new b7h();
 	this.s1m = null;
	this.q7f = 1;
	this.c4y.n9k();
  this.n6i = new r0u();
}

c6q(z0d)
{
	this.h5l(z0d.c4y, z0d.q7f);
	this.n6i = z0d.n6i.z0k();
	this.s1m = this.q0e(z0d.s1m);
}

z0k()
{
	let f6x = new g5i();
	f6x.c6q(this);
	return f6x;
}

h5l(z3e, v5n)
{
	this.c4y = z3e.z0k();
	this.q7f = v5n;
	this.n6i = new r0u();
	this.s1m = null;
}

v5n()
{
	return this.q7f;
}

z3e()
{
	return this.c4y.z0k();
}


p2i()
{
	let l2l = this.h6c();
	this.a2u(l2l);
	return l2l;
}


b8r()
{
	let a2u = this.p2i();
	return this.k5l(a2u);
}


s2a(l2l)
{
  let f5y = this.w1g(l2l) + 1;
	if (f5y)
	{
		return this.q7f +
			Math.floor((f5y - 1 + this.c4y.q8y()) / 2);
	}
	else
	{
		return this.q7f;
	}
}

w1g(l2l)
{
	let f5y = 0;
	if (!l2l.m0x)
	{
		return 0;
	}
	let s5p = l2l.m0x;
	while (1)
	{
		f5y++;
		if (!s5p.c4m)
		{
			let c6y = s5p;
			while (c6y.c9v)
			{
				c6y = c6y.c9v;
			}
			if (!c6y.c4m)
			{
				break;
			}
		}
		if (s5p.c4m)
		{
			s5p = s5p.c4m;
		}
		else
		{
			let c6y = s5p;
			while (c6y.c9v)
			{
				c6y = c6y.c9v;
			}
			s5p = c6y.c4m;
		}
	}
	return f5y;
}


o5i()
{
	let x0k = 0;
	let y9b = this.s1m;
	while (y9b)
	{
		x0k++;
		y9b = y9b.f6c;
	}
	return x0k;
}

w7v()
{
	return this.s1m != null;
}

c6z(l2l)
{
	return l2l.n7n(this.h6c());
}

q6i(l2l)
{
	if (l2l.m0x)
	{
		return l2l.m0x.f6c == null;
	}
	else if (this.s1m)
	{
		return false;
	}
	else
	{
		return true;
	}
}

z2n(l2l)
{
	if (!this.c6z(l2l))
	{
		if (l2l.m0x.c4m)
		{
			l2l.m0x = l2l.m0x.c4m;
			l2l.b8i = l2l.m0x.b8i;
		}
		else
		{
			let s5p = l2l.m0x;
			while (s5p.c9v)
			{
				s5p = s5p.c9v;
			}
			s5p = s5p.c4m;
			l2l.m0x = s5p;
      if (l2l.m0x)
      {
  			l2l.b8i = l2l.m0x.b8i;
      }
      else
      {
        l2l.b8i = null;
      }
		}
	}
}

c7b(l2l)
{
	if (!this.q6i(l2l))
	{
		l2l.m0x = this.z2t(l2l);
		l2l.b8i = l2l.m0x.b8i;
	}
}

o7g(l2l, g3m)
{
	let e2a = this.j8g(l2l);
	if (g3m < 0 || g3m >= e2a)
	{
		return;
	}
	let c6y = this.z2t(l2l);
	let i = 0;
	while (i != g3m)
	{
		i++;
		c6y = c6y.x8t;
	}
	l2l.m0x = c6y;
	l2l.b8i = l2l.m0x.b8i;
}

c6i(l2l)
{
	if (!l2l.m0x)
	{
		return this.q7f;
	}
	let f5y = this.w1g(l2l);
	if (f5y)
	{
		return this.q7f +
      Math.floor((f5y - 1 + this.c4y.q8y()) / 2);
	}
	else
	{
		return this.q7f;
	}
}

h6c()
{
	let l2l = new z4r();
	l2l.m0x = null;
	l2l.b8i = null;
	return l2l;
}

a2u(l2l)
{
	if (!this.q6i(l2l))
	{
		let s5p = this.z2t(l2l);
		while (true)
		{
			if (!s5p.f6c)
			{
				break;
			}
			s5p = s5p.f6c;
		}
		l2l.m0x = s5p;
		l2l.b8i = l2l.m0x.b8i;
	}
}

r1h(u7q)
{
	let l2l = this.h6c();
	if (u7q > 0)
	{
    this.u7q = 0;
		this.b2s(l2l, u7q);
		return l2l;
	}
	else
	{
		return l2l;
	}
}

b2s(l2l, u7q)
{
	while (true)
	{
		if (this.q6i(l2l))
		{
			return false;
		}
		let e2a = this.j8g(l2l);
		if (e2a > 1)
		{
			let g7r = l2l.z0k();
			for (let i = 1; i < e2a; i++)
			{
				this.o7g(l2l, i);
				this.u7q++;
				if (this.u7q == u7q)
				{
					return true;
				}
				if (this.b2s(l2l, u7q))
				{
					return true;
				}
        l2l.m0x = g7r.m0x;
        l2l.b8i = g7r.b8i;
			}
		}
		this.c7b(l2l);
		this.u7q++;
		if (this.u7q == u7q)
		{
			return true;
		}
	}
}

f7z(l2l)
{
	if (!l2l.m0x)
	{
		return 0;
	}
	else
	{
		return l2l.m0x.w0j;
	}
}

w0h(l2l)
{
	let r7v = [];
 	if (!l2l.m0x)
  {
		return r7v;
	}
	let s5p = l2l.m0x;
	while (1)
	{
		r7v.push(s5p);
		if (!s5p.c4m)
		{
			let c6y = s5p;
			while (c6y.c9v)
			{
				c6y = c6y.c9v;
			}
			if (!c6y.c4m)
			{
				break;
			}
		}
		if (s5p.c4m)
		{
			s5p = s5p.c4m;
		}
		else
		{
			let c6y = s5p;
			while (c6y.c9v)
			{
				c6y = c6y.c9v;
			}
			s5p = c6y.c4m;
		}
	}
	return r7v.reverse();
}

u6f(l2l)
{
	let r7v = this.w0h(l2l);
	let e2a = this.j8g(l2l);
	if (e2a == 0)
	{
		return r7v;
	}
	let s8o = this.l2e(l2l, 0);
	while (s8o)
	{
		r7v.push(s8o);
		s8o = s8o.f6c;
	}
	return r7v;
}

j8g(l2l)
{
	let s8o = this.z2t(l2l);
	if (!s8o)
	{
		return 0;
	}
	let e2a = 1;
	while (s8o.x8t)
	{
		e2a++;
		s8o = s8o.x8t;
	}
	return e2a;
}

x4h(l2l, z9e)
{
	if (this.c6z(l2l))
	{
		this.s1m = z9e;
		l2l.m0x = z9e;
		l2l.b8i = l2l.m0x.b8i;
	}
	else
	{
		l2l.m0x.f6c = z9e;
		z9e.c4m = l2l.m0x;
		l2l.m0x = z9e;
		l2l.b8i = l2l.m0x.b8i;
	}
}

r1w(l2l, z9e)
{
	let c6y = this.z2t(l2l);
	while (c6y.x8t)
	{
		c6y = c6y.x8t;
	}
	c6y.x8t = z9e;
	z9e.c9v = c6y;

	l2l.m0x = z9e;
	l2l.b8i = l2l.m0x.b8i;
}

f9g(l2l, b8i)
{
	let z9e = new v7x();
 	z9e.g7y(b8i);
	if (this.q6i(l2l))
	{
		this.x4h(l2l, z9e);
	}
	else
	{
		this.r1w(l2l, z9e);
	}
}


m1f(l2l, r7v)
{
	for (const b8i of r7v)
	{
		this.f9g(l2l, b8i);
	}
}


o0w(l2l)
{
	let c6y = this.l2e(l2l, 1);
	if (!c6y)
	{
		return false;
	}
	while (c6y)
	{
		let y9b = c6y.f6c;
		while (y9b)
		{
			if (y9b.x8t)
			{
				return false;
			}
			y9b = y9b.f6c;
		}
		c6y = c6y.x8t;
	}
	return true;
}

l4a()
{
	let y9b = this.s1m;
	while (y9b)
	{
		if (y9b.x8t)
		{
			return true;
		}
		y9b = y9b.f6c;
	}
	return false;
}

r3e()
{
	if (!this.n6i.m7g())
	{
		return true;
	}
	if (this.l4a())
	{
		return true;
	}
	let y9b = this.s1m;
	while (y9b)
	{
		if (y9b.b8i.r3e())
		{
			return true;
		}
		y9b = y9b.f6c;
	}
	return false;
}

z2t(l2l)
{
	if (l2l.m0x)
	{
		return l2l.m0x.f6c;
	}
	return this.s1m;
}

l2e(l2l, g3m)
{
	let i = 0;
	let c6y = this.z2t(l2l);
	while (c6y && i != g3m)
	{
		c6y = c6y.x8t;
		i++;
	}
	return c6y;
}

q0e(c6y)
{
	let f9r = c6y;
	let p0l = null;
	let z9e = null;
	let u9u = null;
	while (f9r)
	{
		z9e = new v7x();
		z9e.g7y(f9r.b8i);
		if (p0l)
		{
			p0l.f6c = z9e;
			z9e.c4m = p0l;
		}
		else
		{
			u9u = z9e;
		}
		p0l = z9e;
		if (f9r.x8t && !f9r.c9v)
		{
			let x3q = f9r.x8t;
			let z2c = p0l;
			while (x3q)
			{
				let o5q = this.q0e(x3q);
				z2c.x8t = o5q;
				o5q.c9v = z2c;
				z2c = o5q;
				x3q = x3q.x8t;
			}
		}
		f9r = f9r.f6c;
	}
	return u9u;
}

t8b()
{
	return this.n6i;
}

n5t()
{
	return this.n6i.j7d;
}

e7e(c9e)
{
	this.n6i.j7d = c9e;
}

x7a()
{
	return !this.n6i.s0l.m7g();
}

p8t(s0l)
{
	this.n6i.s0l = s0l.z0k();
}

j7j()
{
	return this.n6i.s0l;
}

z3c()
{
	return !this.n6i.s8s.m7g();
}

b2m(s8s)
{
	this.n6i.s8s = s8s.z0k();
}

h9s()
{
	return this.n6i.s8s;
}

h3n()
{
	return !this.n6i.z6c.m7g();
}

j3x(z6c)
{
	this.n6i.z6c = z6c.z0k();
}

e1c()
{
	return this.n6i.z6c;
}

e5e(u7q)
{
  if (u7q == 0)
  {
    return true;
  }
	let y9b = this.s1m;
	while (y9b)
	{
    if (y9b.w0j == u7q)
    {
      return true;
    }
		y9b = y9b.f6c;
	}
	return false;
}

s3h()
{
	let l2l = this.h6c();
	this.u7q = 0;
	this.y6g(l2l);
}

y6g(l2l)
{
	while (true)
	{
		if (this.q6i(l2l))
		{
			return;
		}
		let e2a = this.j8g(l2l);
		if (e2a > 1)
		{
			let g7r = l2l.z0k();
			for (let i = 1; i < e2a; i++)
			{
				this.o7g(l2l, i);
				this.u7q++;
        l2l.m0x.w0j = this.u7q;
				this.y6g(l2l);
        l2l.m0x = g7r.m0x;
        l2l.b8i = g7r.b8i;
			}
		}
		this.c7b(l2l);
  	this.u7q++;
    l2l.m0x.w0j = this.u7q;
	}
}

k5l(l2l)
{
	let k5l = this.c4y.z0k();
	if (!l2l.m0x)
	{
		return k5l;
	}
	let r7v = this.o2x(l2l);
  for (const b8i of r7v)
	{
		k5l.c7b(b8i.k2j());
	}
	return k5l;
}

o2x(l2l)
{
	let r7v = [];
 	if (!l2l.m0x)
  {
		return r7v;
	}
	let s5p = l2l.m0x;
	while (1)
	{
		r7v.push(s5p.b8i);
		if (!s5p.c4m)
		{
			let c6y = s5p;
			while (c6y.c9v)
			{
				c6y = c6y.c9v;
			}
			if (!c6y.c4m)
			{
				break;
			}
		}
		if (s5p.c4m)
		{
			s5p = s5p.c4m;
		}
		else
		{
			let c6y = s5p;
			while (c6y.c9v)
			{
				c6y = c6y.c9v;
			}
			s5p = c6y.c4m;
		}
	}
	return r7v.reverse();
}


t9a()
{
	this.n6i = new r0u();
	this.s1m = null; 
  
}


e8e()
{
	let r7v = [];
	let y9b = this.s1m;
	while (y9b)
	{
		r7v.push(y9b.b8i);
		y9b = y9b.f6c;
	}
	return r7v;
}


}

const g7e =
{
	d3j : 0,
	i6u : 1,
	o9e : 2,
	o5j : 3,
	i7r : 4,
	x1p : 5,
	j2j : 6,
	f8i : 7,
	y2l : 8,
	y8n : 9,
	w8a : 10,
	w0b : 11,
	f0d : 12,
	j8j : 13,
	c2n : 14,
	h3q : 15
};

const v3x =
[
	[ g7e.d3j,     						  ""    ],
	[ g7e.i6u,        "\x2b\x26\x23\x38\x32\x31\x31\x3b" ],
	[ g7e.o9e, 						"\x26\x23\x31\x37\x37\x3b" ],
	[ g7e.o5j,		"\x26\x23\x31\x30\x38\x36\x36\x3b"  ],
	[ g7e.i7r, 							"\x3d"   ],
	[ g7e.x1p,  							"\x26\x23\x38\x37\x33\x34\x3b" ],
	[ g7e.j2j,  	"\x26\x23\x31\x30\x38\x36\x35\x3b"],
	[ g7e.f8i, 						"\x26\x23\x38\x37\x32\x33\x3b" ],
	[ g7e.y2l, 				"\x26\x23\x38\x32\x31\x31\x3b\x2b"],
	[ g7e.y8n,						"\x26\x23\x38\x37\x37\x33\x3b" ],
	[ g7e.w8a, 						"\x26\x23\x38\x36\x34\x36\x3b" ],
	[ g7e.w0b,  						"\x26\x23\x38\x35\x39\x33\x3b" ],
	[ g7e.f0d, 								"\x26\x23\x38\x35\x39\x34\x3b" ],
	[ g7e.j8j, 					"\x26\x23\x38\x38\x35\x33\x3b" ],
	[ g7e.c2n,		"\x26\x23\x31\x30\x32\x32\x37\x3b"],
	[ g7e.h3q, 								"\x4e"   ]
];

function z9g(e8w)
{
	return v3x[e8w][1];
}


const j5s =
{
	e0k : 0,
	q4i : 1,
	m7y : 2
};

const a9e =
{
	d3j : 0,
	a2e : 1,
	p9e : 2,
	r8q : 3,
	f2f : 4,
	h9e : 5,
	t4h : 6,
	j7d : 7,
	s4k : 8,
	z6c : 9,
	x6n : 10,
	t3d : 11
};

/*
TO DO
- Aanpassen voor tekst after van h7s daar kan dia inzitten (zie c++)
- Vette tekst en niet vette a2e testen bij wel/niet MultiPV
*/
class o1y
{

constructor()
{
	this.c1d = new y2y();
  this.k3d = true;
  this.a6q = false;
  this.l4o = true;
  this.c9f = true;
  this.s1d = j5s.e0k;
  this.x6l = false;
  this.e2j = true;
 	this.d5i = true;
 	this.g3y = -1;
  this.v9h = false;
  this.m2c = false;
	this.z2r = false;
	this.b1g = true;
  this.x9h = false;
  this.d8f = false;
  this.m2h = 0;
	this.z5a = true;
  this.u0z = null;
 	this.b2x = a9e.d3j;
}

p5g(r7v)
{
	this.u0z = r7v;
 	let h6c = this.u0z.h6c();
	let z3e = this.u0z.z3e();
	this.b2x = a9e.d3j;
	this.b1g = true;
	this.m2c = false;
	this.z2r = false;
	this.v9h = false;
	this.x9h = this.u0z.r3e();
	this.z5a = true;
	this.m2h = 0;

	if (this.x6l)
	{
		this.j1u(a9e.p9e);
		this.m6g();
	}
	else
	{
    
    if (this.s1d == j5s.q4i ||
      (this.s1d == j5s.m7y && !z3e.z7h()))
    {
      if (this.c9f)
      {
        this.y2f(h6c, z3e, m2h);
        this.b1g = true;
      }
    }

    this.j1u((this.x9h && !this.o3k) ? a9e.a2e : a9e.p9e);
    this.l7f(this.x9h);
    this.f9g(h6c, "");
    this.n1t(h6c, this.u0z.t8b().j7d);

    if (this.u0z.w7v())
    {
      this.p8u();
    }
   	this.j1u(a9e.d3j);
   	this.l0d();
  }
}

m6g()
{
	let l2l = this.u0z.h6c();
	let j8g = this.u0z.j8g(l2l);
	for (let i = 0; i < j8g; i++)
	{
    this.c1d.y4r('<div class="variation-row">');
		l2l = this.u0z.h6c();
  	let k5l = this.u0z.z3e();
	  let c6i = this.u0z.v5n();
		this.u0z.o7g(l2l, i);
		this.b1g = true;
		let m8a = true;
		let b8i = l2l.b8i;
		let t4h = b8i.t4h();
		if (t4h.length)
		{
			this.c8s(l2l, t4h);
		}
		this.j1u(a9e.p9e);
		do
		{
			if (m8a)
			{
				l2l.b8i.q7o();
			}
			this.g9c(l2l, k5l, c6i);
			if (m8a)
			{
				l2l.b8i.i9l(t4h);
				m8a = false;
			}
			if (this.u0z.q6i(l2l))
			{
				break;
			}
			k5l.c7b(l2l.b8i);
			if (k5l.z1d())
			{
				c6i++;
			}
			this.u0z.c7b(l2l);
		} while (true);
    this.c1d.y4r('<div');
	}
}

p8u()
{
  let g0s = 0;
 	let l2l = this.u0z.h6c();
	let k5l = this.u0z.z3e();
  let c6i = this.u0z.v5n();

	let x3z = 100000;
	if (this.g3y == 0)
	{
		return;
	}
	if (this.g3y != -1)
	{
		x3z = this.g3y;
	}
	let s4b = c6i + x3z - 1;
	this.b1g = true;
	while (true)
	{
		let j8g = this.u0z.j8g(l2l);
		while (c6i <= s4b && !this.u0z.q6i(l2l))
		{
      this.u0z.c7b(l2l);
    	this.j1u((this.x9h && !this.o3k) ? a9e.a2e : a9e.p9e);
			this.g9c(l2l, k5l, c6i);
			k5l.c7b(l2l.b8i.k2j());
 			if (k5l.z1d())
			{
				c6i++;
			}
			if (this.d5i && j8g > 1)
			{
				break;
			}
			j8g = this.u0z.j8g(l2l);
		}
		if (!j8g || c6i > s4b)
		{
			return;
		}
    k5l.z2n(l2l.b8i.k2j());
		if (k5l.q8y())
		{
			c6i--;
		}
    this.u0z.z2n(l2l);
		for (let i = 1; i < j8g; i++)
		{
      g0s++;
      let u6s = "<span class=\"tdline\" data-level=\"";
      u6s += g0s.toString();
      u6s += "\">";
      this.c1d.y4r(u6s);
			this.f1o(a9e.r8q);
			this.k6x("\x5b", true);
			let h9e = '';
      this.l2q(l2l, k5l, c6i, i, h9e, g0s);
			this.j1u(a9e.r8q);
			this.k6x("\x5d", true);
      this.c1d.y4r("\x3c\x2f\x73\x70\x61\x6e\x3e");
      g0s--;
     	this.j1u((this.x9h && !this.o3k) ? a9e.a2e : a9e.p9e);
		}
		this.f1o(this.b2x);
    this.u0z.c7b(l2l);
    k5l.c7b(l2l.b8i.k2j());
		if (k5l.z1d())
		{
			c6i++;
		}
		this.b1g = true;
	}
}

g9c(l2l, k5l, c6i)
{
	if (this.u0z.c6z(l2l))
	{
		return;
	}
 	let b8i = l2l.b8i;

	let i8s = '';
  let d0m = false;
  if (this.k3d)
	{
		if (b8i.i6j())
		{
			if (!this.u0z.c6z(l2l))
			{
        let q2o = l2l.z0k();
        this.u0z.z2n(q2o);
        if (q2o.b8i)
        {
  				if (q2o.b8i.b3n())
	  			{
		  			d0m = true;
			  	}
        }
			}
		}
  }
	if (this.m2c)
	{
		i8s = "\x28";
		this.m2c = false;
		if (this.k3d && b8i.c2p())
		{
			this.k6x("\x28", true);
			let j9y = this.b2x;
			this.c8s(l2l, b8i.t4h());
			this.j1u(j9y);
			i8s = "";
      d0m = true;
		}
	}
	else
	{
		if (this.k3d && b8i.c2p())
		{
  	  let j9y = this.b2x;
	  	this.c8s(l2l, b8i.t4h());
		  this.j1u(j9y);
      d0m = true;
    }
	}
	if (b8i.n5f())
	{
		i8s += c4i(b8i.h9e());
	}
	let f0j = b8i.u0w();
	if (f0j)
	{
    i8s += c6i;
		i8s += '.';
	}
	else
	{
		if (this.b1g || d0m)
		{
 			i8s += c6i;
			i8s += "\x2e\x2e\x2e";
		}
	}
	i8s += y4h(k5l, b8i.k2j(), false);
	if (b8i.q6f())
	{
		i8s += s2t(b8i.style());
	}
	if (b8i.x5q())
	{
		i8s += z9g(b8i.e8w());
	}
	if (b8i.o1w())
	{
		i8s += "\x20\x45\x6e\x64\x20\x4f\x66\x20\x47\x61\x6d\x65";
  }
	if (this.z2r || this.v9h)
	{
		if (this.u0z.q6i(l2l) && (!this.k3d || !b8i.b3n()))
		{
			if (this.z2r)
			{
				i8s += "\x29";
				this.z2r = false;
			}
			else
			{
				i8s += "\x3b";
				this.v9h = false;
			}
		}
	}
	this.f9g(l2l, i8s);
	this.b1g = false;

	if (b8i.x6m())
	{
		let j7d = b8i.j7d();
    let p5m = j7d.indexOf("\x5b\x23\x5d");
		let f3y = j7d.substring(0, p5m);
	  let e5n = j7d.substring(p5m + 3);
		if (f3y.length)
		{
			this.n1t(l2l, f3y);
		}
		this.m2h++;
		if (this.c9f)
		{
			this.f1o(a9e.d3j);
      this.y2f(l2l, k5l, this.m2h);
			this.b1g = true;
		}
		if (e5n.length)
		{
			this.n1t(l2l, e5n);
		}
	}
	else
	{
		this.n1t(l2l, b8i.j7d());
	}

  if (b8i.o1w())
	{
    this.c1d.i1n("\x3c\x64\x69\x76\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e"); 
   	this.l0d();
 	  this.l7f(false); 
 	  this.d8f = true;
	}
}

j1u(o8o)
{
	if (o8o != this.b2x)
	{
		this.y6t();
		this.b2x = o8o;
		this.g3i();
	}
}

g3i()
{
}

y6t()
{
	this.b2x = a9e.d3j;
}

f1o(o8o)
{
	this.y6t();
	this.b2x = a9e.d3j;
  
  
  
  
  this.c1d.i1n("\x3c\x62\x72\x3e"); 
	if (o8o != a9e.d3j)
	{
		this.b2x = o8o;
		this.g3i();
	}
}

y2f(l2l, k5l, w0j)
{
  this.z5a = true;
	let u6s = "<span class=\"tddia\" movenr=\"";
  u6s += this.u0z.f7z(l2l).toString();
	u6s += "\">",
	this.c1d.y4r(u6s);
	this.c1d.y4r("\x3c\x63\x61\x6e\x76\x61\x73\x3e\x3c\x2f\x63\x61\x6e\x76\x61\x73\x3e");
	this.c1d.y4r("\x3c\x2f\x73\x70\x61\x6e\x3e");
	this.b1g = true;
}

p1i(l2l, c9e)
{
  this.p9d(l2l);
	this.t2h(c9e);
  this.q6k();
}

l2q(s6d, c7s, c6i, g3m, h9e, g0s)
{
  let l2l = s6d.z0k();
  let k5l = c7s.z0k();

	if (h9e.length)
	{
		this.j1u(a9e.h9e);
		let w6x = h9e;
		w6x += "\x29";
    let u6s = "<span class=\"tdprefix\">";
    this.c1d.y4r(u6s);
  	this.k6x(w6x);
    this.c1d.y4r("\x3c\x2f\x73\x70\x61\x6e\x3e");
	}
	let j8g = 0;
	let a4r = 1;
  this.u0z.o7g(l2l, g3m);
	this.b1g = true;
	do
	{
		this.j1u(a9e.r8q);
		this.g9c(l2l, k5l, c6i);
		if (j8g > 1)
		{
      this.u0z.z2n(l2l);
      this.z1r(l2l, k5l, c6i);
      this.u0z.c7b(l2l);
			this.b1g = true;
		}
		k5l.c7b(l2l.b8i.k2j());
		if (k5l.z1d())
		{
			c6i++;
		}
		j8g = this.u0z.j8g(l2l);
		if (j8g == 0)
		{
			break;
		}
		if (j8g > 1)
		{
			if (!this.u0z.o0w(l2l))
			{
				break;
			}
		}
    this.u0z.c7b(l2l);
		a4r++;
	} while (true);

	if (this.u0z.q6i(l2l))
	{
		return;
	}

	let b5z = h9e.length;
	let w6x = '';
	let l8c = 1;
	for (let i = 0; i < j8g; i++)
	{
		if (b5z == 0)
		{
      w6x = String.fromCharCode('A'.charCodeAt() + l8c - 1);
		}
		else if (b5z == 1)
		{
      w6x = h9e;
      w6x += l8c;
		}
		else if (b5z == 2)
		{
      w6x = h9e;
      w6x += String.fromCharCode('a'.charCodeAt() + l8c - 1);
		}
		else
		{
      w6x = h9e;
      w6x += l8c;
		}

    let u6s = "<span class=\"tdline\" data-level=\"";
    u6s += g0s.toString();
    u6s += "\">";
    this.c1d.y4r(u6s);
  	this.f1o(this.b2x);
    this.l2q(l2l, k5l, c6i, i, w6x, g0s);
    this.c1d.y4r("\x3c\x2f\x73\x70\x61\x6e\x3e");
		l8c++;
	}
}

z1r(s6d, c7s, c6i)
{
  let l2l = s6d.z0k();
  let k5l = c7s.z0k();

	this.j1u(a9e.f2f);
	this.m2c = true;
	this.v9h = false;
	let j8g = this.u0z.j8g(l2l);
	for (let i = 1; i < j8g; i++)
	{
		if (i == j8g - 1)
		{
			this.z2r = true;
		}
		if (i < j8g - 1)
		{
			this.v9h = true;
		}
    this.p6d(l2l, k5l, c6i, i);
		if (this.v9h)
		{
			this.j1u(a9e.f2f);
			this.k6x("\x3b", false);
			this.v9h = false;
		}
	}
	this.j1u(a9e.f2f);
	if (this.z2r)
	{
		this.k6x("\x29", false);
		this.z2r = false;
	}
}

p6d(s6d, c7s, c6i, g3m)
{
  let l2l = s6d.z0k();
  let k5l = c7s.z0k();

  this.u0z.o7g(l2l, g3m);
	let a4r = 0;
	this.b1g = true;
	do
	{
		a4r++;
		this.j1u(a9e.f2f);
		this.g9c(l2l, k5l, c6i);
		if (this.u0z.q6i(l2l))
		{
			break;
		}
		k5l.c7b(l2l.b8i.k2j());
		if (k5l.z1d())
		{
			c6i++;
		}
    this.u0z.c7b(l2l);
	} while (true);
}

f9g(l2l, i8s)
{
	if (i8s.length)
	{
 		this.h3z(l2l, i8s);
	}
	else
	{
		if (this.e2j)
    {
      this.h3z(l2l, "\x5b\x2e\x2e\x2e\x5d");
    }
	}
	if (l2l.b8i)
	{
		if (l2l.b8i.p0b() || l2l.b8i.w1q())
		{
			this.m6h(l2l, a9e.s4k);
		}
		if (l2l.b8i.x6m())
		{
		}
		if (l2l.b8i.b9w())
		{
			this.m6h(l2l, a9e.x6n);
		}
		if (l2l.b8i.y0a())
		{
			this.m6h(l2l, a9e.z6c);
		}
	}
	else
	{
		if (this.u0z.x7a() || this.u0z.z3c())
		{
			this.m6h(l2l, a9e.s4k);
		}
		if (this.u0z.h3n())
		{
		 	this.m6h(l2l, a9e.z6c);
		}
	}
}

k6x(i8s, f1w)
{
	if (i8s.length == 0)
	{
		return;
	}
	if (!this.z5a && f1w)
	{
		this.c1d.i1n("\x20");
	}
	this.c1d.i1n(i8s);
	this.z5a = false;
}

c8s(l2l, t4h)
{
	if (this.k3d && t4h.length)
	{
		this.j1u(a9e.t4h);
		this.p1i(l2l, t4h);
	}
}

n1t(l2l, j7d)
{
	if (this.k3d && j7d.length)
	{
		this.j1u(a9e.j7d);
		this.p1i(l2l, j7d);
	}
}

t2h(c9e)
{
  let l7g = c9e;
  let k9c = l7g.replaceAll("\x3c\x62\x72\x3e\x3c\x62\x72\x3e", "\x3c\x62\x72\x3e");
  let j4m = k9c.replaceAll("\x3c\x62\x72\x3e\x3c\x62\x72\x3e", "\x3c\x62\x72\x3e");
  let b1i = j4m.replaceAll("\x3c\x62\x72\x3e", "\x3c\x64\x69\x76\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e");
  let s = b1i;
  this.c1d.i1n(s);
}

h3z(l2l, i8s)
{
	if (i8s.length == 0)
	{
		return;
	}
	if (!this.z5a)
	{
		this.c1d.i1n("\x20");
	}
  let g7x = '';
  if (l2l.b8i)
  {
  	if (l2l.b8i.w5b())
	  {
		  if (l2l.b8i.j0u() == m0e.s3i)
  		{
	  		g7x = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x6f\x70\x65\x6e\x69\x6e\x67";
		  }
  		else if (l2l.b8i.j0u() == m0e.p0j)
	  	{
		  	g7x = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x6d\x69\x64\x64\x6c\x65";
  		}
	  	else if (l2l.b8i.j0u() == m0e.q2f)
		  {
  			g7x = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x65\x6e\x64";
	  	}
  	}
  }
	let z2m = "<span class=\"";
	if (g7x.length == 0)
	{
		z2m += "tdmove\" movenr=\"";
	}
	else
	{
		z2m += "\x74\x64\x6d\x6f\x76\x65\x20" + g7x + "\" movenr=\"";
	}
  z2m += this.u0z.f7z(l2l).toString();
  z2m += "\"";
	z2m += "\x3e",
	z2m += i8s;
	z2m += "\x3c\x2f\x73\x70\x61\x6e\x3e";

	this.c1d.y4r(z2m);
	this.z5a = false;
}

m6h(l2l, o8o)
{
  if (o8o == a9e.s4k)
  {
    this.n1n(l2l);
  }
  else if (o8o == a9e.z6c)
  {
    this.v0b(l2l);
  }
}

n1n(l2l)
{
	let u6s = "<span class=\"tdcolors\" movenr=\"";
  u6s += this.u0z.f7z(l2l).toString();
	u6s += "\">",
	this.c1d.y4r(u6s);
	this.c1d.y4r("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

v0b(l2l)
{
	let u6s = "<span class=\"tdmedal\" movenr=\"";
  u6s += this.u0z.f7z(l2l).toString();
	u6s += "\">",
	this.c1d.y4r(u6s);
	this.c1d.y4r("\x3c\x63\x61\x6e\x76\x61\x73\x3e\x3c\x2f\x63\x61\x6e\x76\x61\x73\x3e");
	this.c1d.y4r("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

l7f(q6t)
{
 	let u6s = "<span class=\"tdline\"";
	if (q6t)
	{
		u6s += " data-commented=\"1\"";
	}
	u6s += " data-level=\"0\">";
	this.c1d.i1n(u6s);
}

l0d()
{
  this.c1d.y4r("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

p9d(l2l)
{
  let n2f = "\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74";
  if (this.a6q)
  {
    n2f += "\x20\x69\x73\x2d\x62\x6f\x6c\x64";
  }
  let u6s = "<span class=\"" + n2f + "\" movenr=\"";
  u6s += this.u0z.f7z(l2l).toString();
  u6s += "\">";
  this.c1d.i1n(u6s);
}

q6k()
{
  this.c1d.y4r("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

s9p(e8w)
{
  this.e2j = e8w;
}

g6h(e8w)
{
  this.a6q = e8w;
}

m9d(e8w)
{
  this.l4o = e8w;
}

r9p(e8w)
{
  this.x6l = e8w;
}

} 
const n6q =
{
	f0d : 1,
	j8p : 2,
	g9u : 3
};

class n6j
{

constructor()
{
	this.g9q = 0;
	this.y4i = 0;
	this.type = n6q.f0d;
}

z0k()
{
	let b4a = new n6j();
	b4a.g9q = this.g9q;
	b4a.y4i = this.y4i;
	b4a.type = this.type;
	return b4a;
}

}

function u6x(g9q, y4i, type)
{
	let s = new n6j();
	s.g9q = g9q;
	s.y4i = y4i;
	s.type = type;
	return s;
}
class u6i
{

constructor()
{
	this.h6a = [];
}

z0k()
{
	let c1b = new u6i();
	for (const e2g of this.h6a)
	{
		c1b.add(e2g.z0k());
	}
	return c1b;
}

g9e()
{
	this.h6a.length = 0;
}

m7g()
{
	return this.h6a.length == 0;
}

o7x()
{
	return this.h6a.length;
}

add(e2g)
{
	let u1c = e2g.z0k();
	this.h6a.push(u1c);
}

}

const o3t =
{
	s8e : 0,
	p6l : 1,
	l0i : 2
};

class d7y
{

constructor()
{
	this.e5o = 0;
	this.type = o3t.s8e;
}

z0k()
{
	let f7r = new d7y();
	f7r.e5o = this.e5o;
	f7r.type = this.type;
	return f7r;
}

}

function x5n(e5o, type)
{
	let v2s = new d7y();
	v2s.e5o = e5o;
	v2s.type = type;
	return v2s;
}

class s2q
{

constructor()
{
	this.x9r = [];
}

z0k()
{
	let z9p = new s2q();
	for (const k0l of this.x9r)
	{
		z9p.add(k0l.z0k());
	}
	return z9p;
}

g9e()
{
	this.x9r.length = 0;
}

m7g()
{
	return this.x9r.length == 0;
}

o7x()
{
	return this.x9r.length;
}

add(v0p)
{
	let w6v = v0p.z0k();
	this.x9r.push(w6v);
}

}

const u2d =
{
	g2b    : 0,
	i7q  : 1,
	l2n  : 2,
	e6r    : 3,
  a3w   : 4,
	m4q    : 5,
};


function s6m(x9l)
{
	let i8s = '';
	switch (x9l)
	{
		case u2d.g2b:
			i8s = "\x50";
			break;
		case u2d.i7q:
			i8s = "\x4e";
			break;
		case u2d.l2n:
			i8s = "\x42";
			break;
		case u2d.e6r:
			i8s = "\x52";
			break;
		case u2d.a3w:
			i8s = "\x51";
			break;
		case u2d.king:
			i8s = "\x4b";
			break;
	}
	return i8s;
}

class j4b
{

constructor()
{
  this.j5p = 0;
	this.c8b = new s2g();
	this.r7v = new g5i();
}

z0k()
{
	let c7t = new j4b();
  c7t.j5p = this.j5p;
	c7t.c8b = this.c8b.z0k();
	c7t.r7v = this.r7v.z0k();
	return c7t;
}

}

const c3z = 	 		"\x23\x37\x42\x38\x32\x39\x35";
const g1s =			"\x23\x39\x46\x39\x46\x39\x46";
const h6u = 			    "\x23\x37\x42\x38\x32\x39\x35";
const y2c = 		  "\x23\x46\x46\x46\x46\x46\x46";
const q0c =       "\x23\x44\x30\x42\x31\x39\x34";

const o7j	   = "\x23\x45\x31\x33\x31\x32\x39";
const d4v	 = "\x23\x33\x38\x39\x43\x31\x33";
const l9h = "\x23\x45\x32\x42\x36\x32\x38";

const e8d	 = "\x23\x45\x31\x33\x31\x32\x39";
const y4b	 = "\x23\x33\x38\x39\x43\x31\x33";
const j1r	   = "\x23\x45\x32\x42\x36\x32\x38";

class p8q
{

constructor()
{
	this.e5v = null;
	this.b5s = false;
	this.g2h = null;
	this.i6p = null;
	this.r2g = null;
	this.c3e = 0;
	this.r4h = 0;
	this.c0b = 0;
	this.s6w = 0;
	this.o8g = 0;
	this.f6n = 0;
	this.x6a = new i2p();
	this.k5l = new b7h();
	this.s0l = new u6i();
	this.s8s = new s2q();
  this.u2i = new u4t();
  this.m5x = true;
	this.l7c = true;
	this.r2n = true;
	this.l5c = false;
	this.s2z = c3z;
	this.k2b = g1s;
	this.o1u = i1e;
	this.a9q = x4t;
	this.w0n = x4t;
	this.y3t = e0a;
	this.l4l = true;
	this.c9q = n1h;
	this.f6u = n1h;
	this.x9p = false;
	this.b9l = [];
	this.j2m = 0;
}

x0s(e5v)
{
	this.e5v = e5v;
}

x4z(x6a)
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
	this.q0j();
}

h5l(k5l)
{
	this.k5l = k5l.z0k();
	this.s0l.g9e();
	this.s8s.g9e();
}

o2w(s0l)
{
	this.s0l = s0l.z0k();
}

r8y(s8s)
{
	this.s8s = s8s.z0k();
}

l6q(b8i)
{
  this.u2i = b8i.z0k();
}

c0m(l5c)
{
	this.l5c = l5c;
}

x0m()
{
	this.l5c = !this.l5c;
}

h3x()
{
	if (!this.e5v) return;
	if (this.c0b <= 0 || this.s6w <= 0)
	{
		return;
	}
	this.s5b();
}

u8g()
{
	let i5v = this.x6a.i5v;
	if (this.b5s)
	{
		return;
	}
	this.b5s = true;
	if (i5v == d1d.k3w)
	{
  	this.g2h = x6h.w9o("\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x4c\x69\x67\x68\x74\x53\x71\x75\x61\x72\x65");
  	this.i6p = x6h.w9o("\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x44\x61\x72\x6b\x53\x71\x75\x61\x72\x65");
		this.r2g = x6h.w9o("\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x4d\x61\x72\x67\x69\x6e");
	}
}

q0j()
{
	this.u8g();
	let i5v = this.x6a.i5v;
	if (i5v == d1d.k3w)
	{
		this.l4l = false;
		this.l7c = false;
		this.r2n = false;
		this.o1u = "\x23\x46\x46\x46\x46\x39\x37";
		this.a9q = "\x23\x39\x42\x32\x45\x33\x31";
		this.w0n = j0b;
	}
}

s5b()
{
	this.q0j();
	if (this.x6a.i5v == d1d.k3w)
	{
		let q7q = x6h.w9o("\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x42\x6f\x61\x72\x64\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64");
		this.m4i(new a9w(0, 0, this.e5v.width, this.e5v.height), q7q);
	}
	this.w6g();  
	this.p8e(); 
	this.g3q(); 
  if (chess)
  {
	  this.i1u();
  }
  else
  {
	  this.l1t();
  	this.h6t();
  }
  
  this.k9l();
 	this.y7n();
 	this.m6b();
 	this.i3c();
	this.p3a(); 
	this.p1b();      
}

w6g()
{
	let b6g = this.r4h;
	let k4b = this.c3e;
	let h0d = this.o8g;
	let w1y = this.f6n;
	let o3j = this.x6a.g3n;
	this.p9y(new a9w(k4b, b6g, h0d, b6g+o3j-1), this.a9q);
	this.p9y(new a9w(k4b, w1y-o3j+1, h0d, w1y), this.w0n);
	this.p9y(new a9w(k4b, b6g, k4b+o3j-1, w1y), this.a9q);
	this.p9y(new a9w(h0d-o3j+1, b6g, h0d, w1y), this.w0n);
}

p8e()
{
	let g3n = this.x6a.g3n;
	let j7f = this.x6a.j7f;
	if (!j7f)
	{
		return;
	}
	if (this.l4l || !this.r2g)
	{
		this.u8h(this.y3t);
	}
	else
	{
		let left = this.c3e + g3n;
		let top = this.r4h + g3n;
		let w5y = this.o8g - g3n;
		let k9d = this.r4h + g3n + j7f - 1;
		this.m4i(new a9w(left, top, w5y, k9d), this.r2g);

		left = this.c3e + g3n;
		top = this.r4h + g3n;
		w5y = this.c3e + g3n + j7f - 1;
		k9d = this.f6n - g3n;
		this.m4i(new a9w(left, top, w5y, k9d), this.r2g);

		left = this.c3e + g3n;
		top = this.f6n - g3n - j7f + 1;
		w5y = this.o8g - g3n;
		k9d = this.f6n - g3n;
		this.m4i(new a9w(left, top, w5y, k9d), this.r2g);

		left = this.o8g - g3n - j7f + 1;
		top = this.r4h + g3n;
		w5y = this.o8g - g3n;
		k9d = this.f6n - g3n;
		this.m4i(new a9w(left, top, w5y, k9d), this.r2g);
	}
}

u8h()
{
	let g3n = this.x6a.g3n;
	let j7f = this.x6a.j7f;
	if (!j7f)
	{
		return;
	}

	let left = this.c3e + g3n;
	let top = this.r4h + g3n;
	let w5y = this.o8g - g3n;
	let k9d = this.r4h + g3n + j7f - 1;
	this.p9y(new a9w(left, top, w5y, k9d), this.y3t);

	left = this.c3e + g3n;
	top = this.r4h + g3n;
	w5y = this.c3e + g3n + j7f - 1;
	k9d = this.f6n - g3n;
	this.p9y(new a9w(left, top, w5y, k9d), this.y3t);

	left = this.c3e + g3n;
	top = this.f6n - g3n - j7f + 1;
	w5y = this.o8g - g3n;
	k9d = this.f6n - g3n;
	this.p9y(new a9w(left, top, w5y, k9d), this.y3t);

	left = this.o8g - g3n - j7f + 1;
	top = this.r4h + g3n;
	w5y = this.o8g - g3n;
	k9d = this.f6n - g3n;
	this.p9y(new a9w(left, top, w5y, k9d), this.y3t);
}

p1b()
{
	if (this.x6a.d0e)
	{
  	if (!this.x6a.j7f)
  	{
	  	return;
  	}
		let m3u = "\x23\x30\x30\x30\x30\x30\x30";
		if (this.k5l.z1d())
		{
			m3u = "\x23\x45\x44\x44\x37\x39\x30";
		}
		else
		{
			m3u = "\x23\x30\x30\x30\x30\x30\x30";
		}
		let rect = this.b8z();
		let f5c = this.w4z();
		f5c.beginPath();
		f5c.fillStyle = m3u;
		let y2g = rect.l0g() * 0.40;
		f5c.arc(rect.k2m + rect.l0g()/2 - 1, rect.i0p + rect.o3v()/2 - 1,
			y2g, 0, 2 * Math.PI);
		f5c.fill();
	}
}

g3q()
{
	let r2e = j0b;
	let g3n = this.x6a.g3n;
	let j7f = this.x6a.j7f;
	let o3j = this.x6a.o3j;
	let b6g = this.r4h + g3n + j7f;
	let k4b = this.c3e + g3n + j7f;
	let h0d = this.o8g - g3n - j7f;
	let w1y = this.f6n - g3n - j7f;
	this.p9y(new a9w(k4b, b6g, h0d, b6g+o3j-1), r2e);
	this.p9y(new a9w(k4b, w1y-o3j+1, h0d, w1y), r2e);
	this.p9y(new a9w(k4b, b6g, k4b+o3j-1, w1y), r2e);
	this.p9y(new a9w(h0d-o3j+1, b6g, h0d, w1y), r2e);
}

w4z()
{
	return this.e5v.getContext('2d');
}

y1c(rect, m3u)
{
	let f5c = this.w4z();
	f5c.beginPath();
	f5c.lineWidth = "\x31";
	f5c.strokeStyle = m3u;
	f5c.rect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());
	f5c.stroke();
}

p9y(rect, m3u)
{
	let f5c = this.w4z();
	f5c.fillStyle = m3u;
	f5c.fillRect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());
}

m4i(rect, img)
{
	let f5c = this.w4z();
	let o6w = f5c.createPattern(img, 'repeat');
	f5c.fillStyle = o6w;
	f5c.fillRect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());
}

o4b(rect, img)
{
	let f5c = this.w4z();
	let o6w = f5c.createPattern(img, 'no-repeat');
	f5c.fillStyle = o6w;
	f5c.fillRect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());
}

t6l(e5o)
{
	let m0z = b8o;
	let m1e = l7t;
	if (this.l5c)
	{
		m0z = r3h(m8f(e5o));
		m1e = g1x(m8f(e5o));
	}
	else
	{
		m0z = r3h(e5o);
		m1e = g1x(e5o);
	}
	if (o7n(m1e))
	{
		m0z++;
	}
	else
	{
		m0z--;
	}
	return this.e9p(m1e, m0z);
}

l1t()
{
	for (const e5o of h4w)
	{
		this.i2n(e5o);
	}
}

i2n(e5o)
{
	this.q4a(this.t6l(e5o), e5o);
}

q4a(rect, e5o)
{
	let w9o = this.g2h;
	if (this.r2n)
	{
		this.w2h(rect, this.k2b);
		return;
	}
	if (!w9o)
	{
		this.w2h(rect, this.k2b);
		return;
	}

	let a0y = w9o.width;
	let g6s = w9o.height;
	let b9u = this.x6a.j2h;
	if (a0y < b9u || g6s < b9u)
	{
		this.o4b(rect, w9o);
		return;
	}

	let e8o = Math.trunc(a0y / this.x6a.j2h);
	let a0k = Math.trunc(g6s / this.x6a.j2h);
	if (e8o == 0)
	{
		e8o = 1;
	}
	if (a0k == 0)
	{
		a0k = 1;
	}

	let f5n = Math.trunc((e5o) / e8o);
	let y8b = (e5o) % e8o;
	let y = Math.trunc(f5n / a0k);
	f5n = f5n % a0k;

  let d9l = new a9w();
	d9l.k2m = y8b * this.x6a.j2h;
	d9l.i0p = f5n * this.x6a.j2h;
	d9l.m7w = (y8b + 1) * this.x6a.j2h - 1;
	d9l.w3s = (f5n + 1) * this.x6a.j2h - 1;
	let f5c = this.w4z();
	y5j(f5c, rect, w9o, d9l);
}

f4m(e5o)
{
	let m0z = b8o;
	let m1e = l7t;
	if (this.l5c)
	{
		m0z = r3h(m8f(e5o));
		m1e = g1x(m8f(e5o));
	}
	else
	{
		m0z = r3h(e5o);
		m1e = g1x(e5o);
	}
	return this.e9p(m1e, m0z);
}

h6t()
{
	for (const e5o of h4w)
	{
		this.e6q(e5o);
	}
}

e6q(e5o)
{
	this.b2d(this.f4m(e5o), e5o);
}

b2d(rect, e5o)
{
	let w9o = this.i6p;
	if (this.l7c)
	{
		this.w2h(rect, this.s2z);
		return;
	}
	if (!w9o)
	{
		this.w2h(rect, this.s2z);
		return;
	}

	let a0y = w9o.width;
	let g6s = w9o.height;
	let b9u = this.x6a.j2h;
	if (a0y < b9u || g6s < b9u)
	{
		this.o4b(rect, w9o);
		return;
	}

	let e8o = Math.trunc(a0y / this.x6a.j2h);
	let a0k = Math.trunc(g6s / this.x6a.j2h);
	if (e8o == 0)
	{
		e8o = 1;
	}
	if (a0k == 0)
	{
		a0k = 1;
	}

	let f5n = Math.trunc((e5o) / e8o);
	let y8b = (e5o) % e8o;
	let y = Math.trunc(f5n / a0k);
	f5n = f5n % a0k;

  let d9l = new a9w();
	d9l.k2m = y8b * this.x6a.j2h;
	d9l.i0p = f5n * this.x6a.j2h;
	d9l.m7w = (y8b + 1) * this.x6a.j2h - 1;
	d9l.w3s = (f5n + 1) * this.x6a.j2h - 1;
	let f5c = this.w4z();
	y5j(f5c, rect, w9o, d9l);
}

e9p(m1e, m0z)
{
	let g3n = this.x6a.g3n;
	let j7f = this.x6a.j7f;
	let o3j = this.x6a.o3j;
	let j2h = this.x6a.j2h;
	let rect = new a9w();
	rect.k2m = this.c3e + g3n + j7f +	o3j + (m0z) * j2h;
	rect.m7w = rect.k2m + j2h - 1;
	rect.i0p = this.r4h + g3n + j7f +	o3j + (j3r - m1e - 1) * j2h;
	rect.w3s = rect.i0p + j2h - 1;
	return rect;
}

t4s(e5o)
{
	let m0z = b8o;
	let m1e = l7t;
	if (this.l5c)
	{
		m0z = r3h(m8f(e5o));
		m1e = g1x(m8f(e5o));
	}
	else
	{
		m0z = r3h(e5o);
		m1e = g1x(e5o);
	}
	return this.e9p(m1e, m0z);
}

i1u()
{
	for (const e5o of h4w)
	{
		this.e7b(e5o);
	}
}

e7b(e5o)
{
	this.v3z(this.t4s(e5o), e5o);
}

v3z(rect, e5o)
{
	let q5e = isDarkSquare(e5o);
	let w9o = this.g2h;
	if (q5e)
	{
		w9o = this.i6p;
	}
	if (q5e)
	{
		if (this.l7c)
		{
			this.w2h(rect, this.s2z);
			return;
		}
		if (!w9o)
		{
			this.w2h(rect, this.s2z);
			return;
		}
	}
	else
	{
		if (this.r2n)
		{
			this.w2h(rect, this.k2b);
			return;
		}
		if (!w9o)
		{
			this.w2h(rect, this.k2b);
			return;
		}
	}

 	let a0y = w9o.width;
	let g6s = w9o.height;
	let b9u = this.x6a.j2h;
	if (a0y < b9u || g6s < b9u)
	{
		this.o4b(rect, w9o);
		return;
	}
	let e8o = Math.trunc(a0y / this.x6a.j2h);
	let a0k = Math.trunc(g6s / this.x6a.j2h);
	if (e8o == 0)
	{
		e8o = 1;
	}
	if (a0k == 0)
	{
		a0k = 1;
	}

	let f5n = Math.trunc((e5o) / e8o);
	let y8b = (e5o) % e8o;
	let y = Math.trunc(f5n / a0k);
	f5n = f5n % a0k;

  let d9l = new a9w();
	d9l.k2m = y8b * this.x6a.j2h;
	d9l.i0p = f5n * this.x6a.j2h;
	d9l.m7w = (y8b + 1) * this.x6a.j2h - 1;
	d9l.w3s = (f5n + 1) * this.x6a.j2h - 1;
	let f5c = this.w4z();
	y5j(f5c, rect, w9o, d9l);
}

w2h(rect, m3u)
{
	this.p9y(rect, m3u);
}

m6b()
{
	for (const e5o of h4w)
	{
		this.h3c(e5o);
	}
}

t9l(g9q, y4i, o4u)
{
	this.c9q = g9q;
	this.f6u = y4i;
	this.x9p = o4u;

	this.b9l.length = 0;
 	let x8q = this.t4s(g9q);
  let k1r = this.t4s(y4i);
	let p3n = this.x6a.j2h;

	let a5e = 32;
	if (p3n < 32)
	{
		a5e = p3n;
	}

  
	if (false)
	{
    
    
		let a9z = new c5i(x8q.k2m + p3n / 2, x8q.i0p + p3n / 2);
		let b3b = new c5i(k1r.k2m + p3n / 2, k1r.i0p + p3n / 2);
		let v5p = Math.abs(a9z.X - b3b.X);
		let o7k = Math.abs(a9z.Y - b3b.Y);
		let h4l = Math.atan2(b3b.X - a9z.X, a9z.Y - b3b.Y);
		let s5l = Math.sqrt(v5p*v5p + o7k*o7k) / 2;
		b3b.X = a9z.X + s5l * 2;
		b3b.Y = a9z.Y;
		let r2c = new c5i(a9z.X + s5l, a9z.Y);
		let n2t = Math.PI / a5e;
		let p6t = p3n * 0.40;
		let k6n = Math.PI;
		let r2d = (k1r.k2m > x8q.k2m && k1r.i0p < x8q.i0p) ||
			(k1r.k2m < x8q.k2m && k1r.i0p > x8q.i0p);
		for (let i = 1; i < a5e; i++)
		{
			let y1c = new a9w();
			if (r2d)
			{
				k6n -= n2t;
			}
			else
			{
				k6n += n2t;
			}
			let i1b = Math.cos(k6n);
			let l6c = Math.sin(k6n);
			let g7w = new c5i(r2c.X + s5l * i1b,
				r2c.Y - p6t * l6c);
			this.b9l.push(h4j(g7w, a9z, h4l - Math.PI / 2));
		}
	}
	else
	{
		let a9z = new c5i(x8q.k2m + p3n / 2, x8q.i0p + p3n / 2);
		let b3b = new c5i(k1r.k2m + p3n / 2, k1r.i0p + p3n / 2);
		let f8c = (b3b.X - a9z.X) / a5e;
		let x1y = (b3b.Y - a9z.Y) / a5e;
		for (let i = 1; i < a5e; i++)
		{
			this.b9l.push(new c5i(a9z.X + i * f8c, a9z.Y + i * x1y));
		}
	}
	this.b9l.push(new c5i(k1r.k2m + p3n / 2, k1r.i0p + p3n / 2));
	this.j2m = 0;
}

l4b()
{
	this.c9q = n1h;
	this.f6u = n1h;
}

z0a()
{
	this.h3x(); 

	let y6o = this.b9l[this.j2m];
	let j2h = this.x6a.j2h;
	let y1c = new a9w();
	y1c.k2m = y6o.X - j2h / 2;
	y1c.i0p = y6o.Y - j2h / 2;
	y1c.a2y(j2h);
	y1c.j1s(j2h);
 	let f5c = this.w4z();
	l2f(f5c, y1c, this.k5l.e1a(this.c9q));

	this.j2m++;
	if (this.j2m >= this.b9l.length)
	{
		let x9l = this.k5l.e1a(this.c9q);
		this.k5l.u9s(this.c9q, u8l.m7g);
		this.k5l.u9s(this.f6u, x9l);
		this.l4b();
		return true;
	}
	else
	{
		return false;
	}
}

h3c(e5o)
{
	if (e5o == this.c9q)
	{
		return;
	}
	let s2n = this.t4s(e5o);
 	let f5c = this.w4z();
	l2f(f5c, s2n, this.k5l.e1a(e5o));
}

p3a()
{
	if (!this.x6a.g6x)
	{
    return;
  }

 	let o3j = this.x6a.o3j;
	let g3n = this.x6a.g3n;
	let j7f = this.x6a.j7f;
	let j2h = this.x6a.j2h;

	let d2f = new a9w();
	d2f.k2m = this.c3e + g3n + j7f;
	d2f.i0p = this.r4h + g3n + j7f;
	d2f.a2y(j3r * j2h + 2 * o3j);
	d2f.j1s(j3r * j2h + 2 * o3j);

 	let f5c = this.w4z();
  let l9g = f0k(f5c, j7f-8);

  p3a(f5c,
    d2f,
    this.x6a,
    l9g,
    c7x.f2c,
    this.o1u,
    this.l5c,
    j7f);
}

v1j(e5o, m3u)
{
	let rect = this.t4s(e5o);
	let f5c = this.w4z();
  f5c.save();
  f5c.globalAlpha = 0.25; 
	f5c.fillStyle = m3u;
	f5c.fillRect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());
  f5c.restore();
}

k9l()
{
	if (this.m5x)
	{
		if (!this.u2i.m7g())
		{
      let m3u = "\x23\x38\x30\x30\x30\x38\x30"; 
			this.v1j(this.u2i.g9q, m3u);
			this.v1j(this.u2i.y4i, m3u);
		}
  }
}

y7n()
{
	for (const k0l of this.s8s.x9r)
	{
		this.x4e(k0l);
	}
}

x4e(k0l)
{
	let rect = this.t4s(k0l.e5o);
	let y3g = '';
	switch (k0l.type)
	{
		case o3t.s8e:
			y3g = o7j;
			break;
		case o3t.p6l:
			y3g = d4v;
			break;
		case o3t.l0i:
			y3g = l9h;
			break;
	}
	let p3n = this.c0b / 10;
	let f5c = this.w4z();
  /* dit is met roundrect
  j3b(rect, 5);
	f5c.lineWidth = p3n / 15;
	f5c.strokeStyle = y3g;
	f4a(f5c, rect.k2m, rect.i0p, rect.l0g(), rect.o3v(), 10);
  */
  
  f5c.save();
  f5c.globalAlpha = 0.7; 
	f5c.fillStyle = y3g;
	f5c.fillRect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());
  f5c.restore();
}

i3c()
{
	for (const e2g of this.s0l.h6a)
	{
		this.j3q(e2g);
	}
}

j3q(e2g)
{
	let g9q = e2g.g9q;
	let y4i = e2g.y4i;
	let z5i = e2g.type;

	let x8q = this.t4s(g9q);
	let k1r = this.t4s(y4i);

	let i1q = x8q.k2m + x8q.l0g()/2;
	let m8g = x8q.i0p + x8q.o3v()/2;
	let h8j = new c5i(i1q, m8g);

	let j2x = k1r.k2m + k1r.l0g()/2;
	let c5f = k1r.i0p + k1r.o3v()/2;

	let n6f = (j2x-i1q)*(j2x-i1q) + (c5f-m8g)*(c5f-m8g);
	let j1a = Math.sqrt(n6f);

	let m0t = (this.k5l.n8b(g9q)) ? 0 : x8q.l0g() / 4;
	j1a -= m0t;
	let v0m = (this.k5l.n8b(y4i)) ? 0 : x8q.l0g() / 4;
	j1a -= v0m;

	let p1j = 5;
	let x5a = 5 * p1j;
	let a0j = 7 * p1j;

	let y5d = i1q + m0t;
	let d4t = m8g;

	let m8r = y5d + j1a - 1;
	let a5u = m8g;

	let n4x = m8r - a0j;
	let n6w = m8g;

	let h4l = Math.atan2((j2x - i1q), (m8g - c5f));

  
	let o9c = [];
  let t8w = 10; 
	o9c.push(new c5i(n4x, n6w));
	o9c.push(new c5i(n4x - t8w, n6w - x5a));
	o9c.push(new c5i(m8r, a5u));
	o9c.push(new c5i(n4x - t8w, n6w + x5a));
	o9c.push(new c5i(n4x, a5u));
	let x5w = [];
	for (let i = 0; i <= 4; i++)
	{
		x5w.push(h4j(o9c[i], h8j, h4l - Math.PI / 2));
	}

	let f5c = this.w4z();
  f5c.save();
  f5c.globalAlpha = 0.7;

 	let w9i = '';
	switch (z5i)
	{
		case n6q.f0d:
			w9i = e8d;
			break;
		case n6q.j8p:
			w9i = y4b;
			break;
		case n6q.g9u:
			w9i = j1r;
			break;
	}
 	f5c.fillStyle = w9i;
  f5c.strokeStyle = w9i;
	f5c.beginPath();
	f5c.moveTo(x5w[0].X, x5w[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		f5c.lineTo(x5w[i].X, x5w[i].Y);
	}
	f5c.closePath();
	f5c.fill();

  
	o9c.length = 0;
	o9c.push(new c5i(y5d, d4t - p1j));
	o9c.push(new c5i(y5d, d4t + p1j));
	o9c.push(new c5i(n4x, d4t + p1j));
	o9c.push(new c5i(n4x, d4t - p1j));
	x5w.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		x5w.push(h4j(o9c[i], h8j, h4l - Math.PI / 2));
	}
	if (i1q == j2x)
	{
		if (x5w[0].Y != x5w[1].Y)
		{
			x5w[0].Y = x5w[1].Y;
		}
		if (x5w[2].Y != x5w[3].Y)
		{
			x5w[2].Y = x5w[3].Y;
		}
	}
	if (m8g == c5f)
	{
		if (x5w[0].X != x5w[1].X)
		{
			x5w[0].X = x5w[1].X;
		}
		if (x5w[2].X != x5w[3].X)
		{
			x5w[2].X = x5w[3].X;
		}
	}
	f5c.beginPath();
	f5c.moveTo(x5w[0].X, x5w[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		f5c.lineTo(x5w[i].X, x5w[i].Y);
	}
	f5c.closePath();
	f5c.fill();
  f5c.restore();
}

b8z()
{
	let g3n = this.x6a.g3n;
	let j7f = this.x6a.j7f;
	let p3n = this.x6a.j2h;
	let rect = new a9w();
	rect.k2m = this.o8g - g3n - j7f + 1;
	rect.i0p = this.f6n - g3n - j7f;
	rect.w3s = this.f6n;
	rect.m7w = this.o8g - 1;
	return rect;
}

}

const q5b = 14;

const d1d =
{
	k3w : 0
};

const f3a =
{
	k3w : 0
};

const m7b =
{
	d3j : 0,
	u1k : 1,
};

const c7x =
{
	m0s: 0,
	u4n: 1,
	f2c: 2,
	k2a: 3,
	v3g: 4,
};

class i2p
{

constructor()
{
	this.i5v = d1d.k3w;
	this.m6w = 1; 
	this.g3n = 0;
	this.j7f = q5b;
	this.o3j = 2;
	this.j2h = 32;
	this.l2t = 20;
	this.g6x = true;
	this.r6n = m7b.u1k;
	this.d0e = true;
}

z0k()
{
	let g7q = new i2p();
	g7q.i5v = this.i5v;
	g7q.m6w = this.m6w;
	g7q.g3n = this.g3n;
	g7q.j7f = this.j7f;
	g7q.o3j = this.o3j;
	g7q.j2h = this.j2h;
	g7q.l2t = this.l2t;
	g7q.g6x = this.g6x;
	g7q.r6n = this.r6n;
	g7q.d0e = this.d0e;
	return g7q;
}

c0b()
{
	return this.j2h * j3r + 2 * (this.g3n + this.j7f + this.o3j);
}

r3p(rect)
{
	let w = rect.l0g();
	let h = rect.o3v();
	let y9s = 0;
	if (w < h)
	{
		y9s = w;
	}
	else
	{
		y9s = h;
	}
	if (this.j7f)
	{
		for (this.j2h = 2; this.j2h < 1000; this.j2h++)
		{
			this.j7f = (this.j2h / 100) * this.l2t;
			if (this.j7f < q5b)
			{
				this.j7f = q5b;
			}
			let o7x = 2 * (this.g3n + this.j7f + this.o3j) + j3r * this.j2h;
			if (o7x > y9s)
			{
				break;
			}
		}
		this.j2h--;
		this.j7f = (this.j2h / 100) * this.l2t;
		if (this.j7f < q5b)
		{
			this.j7f = q5b;
		}
	}
	else
	{
		for (this.j2h = 2; this.j2h < 1000; this.j2h++)
		{
			let o7x = 2 * (this.g3n + this.o3j) + j3r * this.j2h;
			if (o7x > y9s)
			{
				break;
			}
		}
		this.j2h--;
	}
	return this.c0b();
}

}


class h5y
{

constructor()
{
	this.z3e = new b7h();
	this.d9w = new b7h();
	this.s0l = new u6i();
	this.s8s = new s2q();
	this.f6c = new u4t();
 	this.c4m = new u4t();
	this.s2a = 0;
	this.i1i = false;
	this.c6e = false;
	this.a4r = 0;
	this.w1g = 0;
	this.l4f = '';
}

}

const j2c =
[
	"\x23\x46\x37\x43\x34\x32\x42",  
	"\x23\x46\x33\x32\x37\x46\x33",  
	"\x23\x32\x36\x42\x43\x42\x43",  
	"\x23\x32\x37\x32\x37\x46\x33",  
	"\x23\x32\x39\x38\x46\x38\x46",  
	"\x23\x39\x34\x36\x31\x32\x41",  
	"\x23\x38\x44\x32\x37\x32\x37",  
	"\x23\x46\x34\x46\x34\x32\x38",  
	"\x23\x46\x32\x32\x36\x32\x36",  
	"\x23\x46\x33\x46\x33\x46\x33",  
	"\x23\x38\x46\x32\x39\x38\x46",  
	"\x23\x32\x38\x46\x34\x32\x38",  
	"\x23\x32\x38\x38\x45\x32\x38",  
	"\x23\x32\x37\x32\x37\x32\x37",  
	"\x23\x39\x31\x39\x31\x39\x31",  
	"\x23\x32\x38\x46\x34\x46\x34"   
];

function j3b(rect, z5b)
{
	rect.k2m += z5b;
	rect.m7w -= z5b;
	if (rect.k2m > rect.m7w)
	{
		rect.k2m = rect.m7w;
	}
	rect.i0p += z5b;
	rect.w3s -= z5b;
	if (rect.i0p > rect.w3s)
	{
		rect.i0p = rect.w3s;
	}
}

function y5j(g9m, f3d, r2h, d9l)
{
	g9m.drawImage(r2h, d9l.k2m, d9l.i0p, d9l.l0g(), d9l.o3v(),
		f3d.k2m, f3d.i0p, f3d.l0g(), f3d.o3v());
}

function f4a(f5c, x, y, width, height, y2g)
{
	f5c.beginPath();
	f5c.moveTo(x, y + y2g);
	f5c.lineTo(x, y + height - y2g);
	f5c.arcTo(x, y + height, x + y2g, y + height, y2g);
	f5c.lineTo(x + width - y2g, y + height);
	f5c.arcTo(x + width, y + height, x + width, y + height-y2g, y2g);
	f5c.lineTo(x + width, y + y2g);
	f5c.arcTo(x + width, y, x + width - y2g, y, y2g);
	f5c.lineTo(x + y2g, y);
	f5c.arcTo(x, y, x, y + y2g, y2g);
	f5c.stroke();
}

function h4j(g0x, h8j, m7q)
{
	let p = new c5i();
	p.X = (Math.cos(m7q) * (g0x.X - h8j.X)) - (Math.sin(m7q) * (g0x.Y - h8j.Y)) + h8j.X;
	p.Y = (Math.sin(m7q) * (g0x.X - h8j.X)) + (Math.cos(m7q) * (g0x.Y - h8j.Y)) + h8j.Y;
	return p;
}

function j6d(f5c, rect, z6c)
{
	let left = rect.k2m;
	let top = rect.i0p;
	let w5y = rect.m7w;
	let k9d = rect.w3s;

	f5c.fillStyle = l7k;
	f5c.fillRect(rect.k2m, rect.i0p, rect.l0g(), rect.o3v());

	if (z6c.d3j())
	{
		return;
	}

	let o3l = z6c.g9v();
	let e0y = 0;
	if (o3l > 8)
	{
		e0y = (w5y - left) / 8;
	}
	else
	{
		e0y = (w5y - left) / o3l;
	}
	let n7v = left - e0y;
	let r0g = top;
	let x8z = n7v + e0y;
	let y3q = 0;
	if (o3l > 8)
	{
		y3q = (k9d - top + 1) / 2;
	}
	else
	{
		y3q = k9d - top + 1;
	}

	let y9j = top + y3q - 1;
	let n4o = 0;
	for (let i = 0; i < 16; i++)
	{
		if (z6c.v9w(i))
		{
			n7v += e0y;
			x8z += e0y;
			if (n4o == 7 || n4o == 15 ||
				(n4o < 8 && n4o == o3l - 1))
			{
				x8z = w5y;
			}
			if (n4o == 8)
			{
				n7v = left;
				x8z = n7v + e0y;
				r0g = top + y3q;
				y9j = k9d;
			}
			let m1k = new a9w(n7v, r0g, x8z, y9j);
			f5c.fillStyle = j2c[i];
			f5c.fillRect(m1k.k2m, m1k.i0p, m1k.l0g(), m1k.o3v());
			n4o++;
		}
	}
}




class z0c
{

constructor()
{
	this.w2a = '';
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
	j6i.w2a = img.z7z;
	j6i.w9o = img;
	this.o7e.push(j6i);
}

w9o(w2a)
{
	for (const h7x of this.o7e)
	{
		if (h7x.w2a.toLowerCase() == w2a.toLowerCase())
		{
			return h7x.w9o;
		}
	}
	return null;
}

}
const i5w 				= "\x23\x30\x30\x46\x46\x46\x46";
const j0b 			= "\x23\x30\x30\x30\x30\x30\x30";
const e0a 				= "\x23\x30\x30\x30\x30\x46\x46";
const v6o 			= "\x23\x46\x46\x46\x42\x46\x30";
const x5z 			= "\x23\x38\x30\x38\x30\x38\x30";
const i0w 		= "\x23\x46\x46\x30\x30\x46\x46";
const t6z 				= "\x23\x38\x30\x38\x30\x38\x30";
const k4h 			= "\x23\x30\x30\x38\x30\x30\x30";
const f3q 				= "\x23\x30\x30\x46\x46\x30\x30";
const c0l 			= "\x23\x43\x30\x43\x30\x43\x30";
const l3y 			= "\x23\x38\x30\x30\x30\x30\x30";
const v3i 		= "\x23\x41\x30\x41\x30\x41\x34";
const l2i 	= "\x23\x43\x30\x44\x43\x43\x30";
const d0n 				= "\x23\x30\x30\x30\x30\x38\x30";
const c7e 			= "\x23\x38\x30\x38\x30\x30\x30";
const x0t 			= "\x23\x38\x30\x30\x30\x38\x30";
const l7k 				= "\x23\x46\x46\x30\x30\x30\x30";
const p7f 			= "\x23\x43\x30\x43\x30\x43\x30";
const s3m 		= "\x23\x41\x36\x43\x41\x46\x30";
const i0a 				= "\x23\x30\x30\x38\x30\x30\x30";
const x4t 			= "\x23\x46\x46\x46\x46\x46\x46";
const i1e 			= "\x23\x46\x46\x46\x46\x30\x30";

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

z0k()
{
	let u0b = new c5i();
	u0b.k2m = this.X;
	u0b.i0p = this.Y;
	return u0b;
}

}

class a9w
{

constructor(left, top, w5y, k9d)
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
		this.m7w = w5y;
		this.w3s = k9d;
	}
}

z0k()
{
	let w9q = new a9w();
	w9q.k2m = this.k2m;
	w9q.i0p = this.i0p;
	w9q.m7w = this.m7w;
	w9q.w3s = this.w3s;
	return w9q;
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

w2y(y6o)
{
	return y6o.X >= this.k2m &&
		y6o.X <= this.m7w &&
		y6o.Y >= this.i0p &&
		y6o.Y <= this.w3s;
}


}

class o3u
{

constructor(u5a)
{
	this.u5a = u5a;
	this.b4o = new b7h();
	this.a1s = new p8q();
	this.k8w = null;
	this.x6a = new i2p();
	this.g7m = true;
}

s9s()
{
	let q6h = window.devicePixelRatio;

	this.a1s.e5v.width = this.k8w.clientWidth * q6h;
	this.a1s.e5v.height = this.k8w.clientHeight * q6h;

	let h2x = 32 * q6h;
	let i2c = 32 * q6h;
	let n6r = this.a1s.e5v.width - h2x;
	let x8e = this.a1s.e5v.height - i2c;
	let b6c = x8e < n6r ? x8e : n6r;
	if (b6c < 128)
	{
		b6c = 128;
	}
	let rect = new a9w();
	rect.k2m = 0;
	rect.i0p = 0;
	rect.a2y(b6c);
	rect.j1s(b6c);
	this.x6a.j7f = b6c * 0.02;
  if (this.x6a.j7f < q5b)
  {
    this.x6a.j7f = q5b;
  }
	b6c = this.x6a.r3p(rect);
 	this.a1s.x4z(this.x6a);
	this.a1s.h3x();
}

x0m()
{
	this.a1s.x0m();
	this.a1s.h3x();
}

b3r()
{
	this.x6a.g6x = !this.x6a.g6x;
	this.a1s.x4z(this.x6a);
	this.a1s.h3x();
}

o1d()
{
	this.a1s.x4z(this.x6a);
	this.a1s.h3x();
}

b6k(u8a)
{
	this.b4o = u8a.d9w.z0k();
	this.a1s.h5l(this.b4o);
	this.a1s.o2w(u8a.s0l);
	this.a1s.r8y(u8a.s8s);
  
 	this.a1s.l6q(u8a.c4m);
	this.a1s.h3x();

	if (this.g7m)
	{
		n5n('playBackward' + this.u5a, u8a.i1i);
		n5n('goToBegin'+ this.u5a, u8a.i1i);
		n5n('playForward' + this.u5a, u8a.c6e);
		n5n('goToEnd' + this.u5a, u8a.c6e);
		n5n('autoPlay' + this.u5a, u8a.c6e);
	}
	else
	{
		n5n('goToBegin' + this.u5a, u8a.i1i);
		n5n('goToEnd' + this.u5a, u8a.c6e);
	}
}

h5l(k5l)
{
	let u8a = new h5y();
	u8a.d9w = k5l.z0k();
	this.h5l(u8a);
}

x4z(x6a)
{
  this.x6a = x6a.z0k();
}

}

const t7g =
{
	o4h       : 0,
	d0q        : 1,
};

class b1y
{

constructor(u5a)
{
	this.u5a = u5a;
 	this.a1i = new g5i();
 	this.l0p = new u0g(u5a);
  this.l0p.e2j = false;
  this.l0p.u4x = true;
  this.l0p.a6q = true;
  this.l0p.l4o = false;
  this.y9u = null;
  this.s8q = new b0i();
  this.j8d = new c0c();
 	this.r1d = new y5p();
	this.e7p = new b7h();
	this.y9l = new b7h();
	this.f8y = 0;
	this.y3o = [];
	this.w9r = false;
 	this.c8y = false;
 	this.z3g = false;
 	this.r7z = false;
  this.d3e = t7g.o4h;
  this.v7l = document.getElementById("\x74\x68\x72\x65\x61\x74"+this.u5a);
 	this.v7l.onclick = this.q1y.bind(this);
  this.v2r();
  this.z6q = document.getElementById("\x65\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73"+this.u5a);
}

j2v(n3g)
{
  this.y9u = new k3k();
  this.y9u.x7j = (event) => {
    this.b1h(event);
  };
  this.y9u.l5u(n3g);
  this.y9u.z8j();
}

b7s()
{
	this.s8q = this.y9u.n3g();
	this.r1d = new y5p();
  /*
	showName();
	MovePanel->Caption = "";
	ScorePanel->Caption = "";
	DepthPanel->Caption = "";
	NodesPanel->Caption = "";
  */
	this.a1i.h5l(this.r1d.k5l,
    this.r1d.c6i);
	this.c4p();
 	this.a4e();
  this.v2r();
}

h5l(z3e, v5n, r7v, w7v)
{
	this.y9l = z3e.z0k();
	this.f8y = v5n;
	this.y3o = r7v.slice(); 
	this.w9r = w7v;
	this.a4e();
}

a4e()
{
	if (!this.y9u) return;
	if (this.c8y) return;

	if (this.z3g)
	{
		let r7v = new g5i();
		r7v.h5l(this.y9l, this.f8y);
		let h6c = r7v.h6c();
		r7v.m1f(h6c, this.y3o);
		let t0p = r7v.b8r();
		let z9q = r7v.s2a(r7v.p2i());
		if (t0p.q8y())
		{
			z9q++;
		}
		let f4e = t0p;
		f4e.o7l();
		this.j8d = new c0c();
    this.j8d.r7v.h5l(f4e, z9q);
		this.e7p = f4e;
  }
  else
  {
 		this.j8d.r7v.h5l(this.y9l, this.f8y);
		let h6c = this.j8d.r7v.h6c();
		this.j8d.r7v.m1f(h6c, this.y3o);
		this.e7p = this.j8d.r7v.b8r();
  }
  if (w2l === 10) 
  {
    this.j8d.p5k = e9e;
  }
  else
  {
    this.j8d.p5k = y0k(w2l);
  }

  this.y9u.o9w();
	this.r7z = false;
  let r7v = i7p(this.e7p);
  if (r7v.length == 0)
  {
  	this.y9u.y1v(this.j8d);
		return;
  }
  else
  {
  	this.y9u.y1v(this.j8d);
		return;
  }
}

l6s()
{
	this.r1d = this.y9u.n0y();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.a1i.h5l(this.r1d.k5l,
    this.r1d.c6i);
	this.c4p();
}

m8q()
{
	this.r1d = this.y9u.n0y();
	
}


i0s()
{
	this.r1d = this.y9u.n0y();
  
	
	
	
  
	this.c4p();
}

c4p()
{
	let r5v = this.r1d.n4i.r7v.z0k();
  r5v.h5l(this.r1d.k5l, this.r1d.c6i);

  if (this.r1d.x6l)
  {
    for (let i4r of this.r1d.j8h)
    {
      let r7v = i4r.r7v.e8e();
      let l2l = r5v.h6c();
      let c6i = 0;
      for (let b8i of r7v)
      {
        if (c6i == 0)
        {
					let o3e = i4r.y1g() +
						"\x2f" + i4r.h1t;
					b8i.i9l(o3e);
        }
        r5v.f9g(l2l, b8i);
        c6i++;
      }
    }
  }
  else
  {
    if (this.r1d.j8h.length !== 0)
    {
      let i4r = this.r1d.j8h[this.r1d.j8h.length - 1];
      let r7v = i4r.r7v.e8e();
      let l2l = r5v.h6c();
      let c6i = 0;
      for (let b8i of r7v)
      {
				if (c6i == 0)
				{
					let o3e = i4r.y1g() +
						"\x2f" + i4r.h1t;
					b8i.i9l(o3e);
				}
        r5v.f9g(l2l, b8i);
        c6i++;
      }
    }
  }
  this.a1i = r5v.z0k();
  this.l0p.x6l = this.r1d.x6l;
  this.l0p.t8z(this.a1i, 0);
}

b1h(event)
{
  const {cmd, data} = event;
  if (cmd === 'ready')
  {
    this.b7s()
  }
  else if (cmd === 'go')
  {
    this.l6s()
  }
  else if (cmd === 'cm')
  {
    this.m8q();
  }
  else if (cmd === 'pv')
  {
    this.i0s();
  }
}

q1g()
{
	if (this.y9u)
	{
    this.y9u.x7j = null;
    this.y9u.j9q();
		this.y9u = null;
		this.r1d = new y5p();
  	this.a1i.h5l(this.r1d.k5l,
      this.r1d.c6i);
  	this.c4p();
    this.z3g = false;
    this.v2r();
  }
}

z9o()
{
	return (this.y9u != null);
}

s3z()
{
  return (this.engineMode === t7g.d0q);
}

q1y()
{
	if (this.y9u && !this.s3z())
	{
		this.z3g = !this.z3g;
		this.v2r();
		this.a4e();
	}
}

v2r()
{
	if (this.y9u)
	{
    this.v7l.disabled = false;
    this.v7l.classList.remove('threat-inactive');
		if (this.z3g)
		{
      this.v7l.classList.remove('threat-off');
      this.v7l.classList.add('threat-on');
		}
		else
		{
      this.v7l.classList.remove('threat-on');
      this.v7l.classList.add('threat-off');
		}
	}
	else
	{
    this.v7l.disabled = true;
    this.v7l.classList.add('threat-inactive');
    this.v7l.classList.remove('threat-on');
    this.v7l.classList.add('threat-off');
	}
}

}

class u9z
{

constructor(u5a)
{
	this.u5a = u5a;
  this.m9z = null;
	this.l4x = new s2g();
}

e7t(l4x)
{
	this.l4x = l4x.z0k();
	this.k5p();
}

k5p()
{
	let d6w = this.l4x.a0c.d8n.z1e();
	let x4g = this.l4x.k3t.d8n.z1e();

	let d3t = '';
	if (d6w.length && this.l4x.a0c.q2q)
	{
		d3t = this.l4x.a0c.q2q.toString();
	}
	let t0t = '';
	if (d6w.length && this.l4x.a0c.i3d.length)
	{
		t0t = this.l4x.a0c.i3d.toString();
	}

	let h7h = '';
	if (x4g.length && this.l4x.k3t.q2q)
	{
		h7h = this.l4x.k3t.q2q.toString();
	}
	let t6m = '';
	if (x4g.length && this.l4x.k3t.i3d.length)
	{
		t6m = this.l4x.k3t.i3d.toString();
	}

	let q2i = this.l4x.a0c.d8n.w6n(1);
	let i4b = this.l4x.k3t.d8n.w6n(1);

	let q0d = '';
	let m5t = '';
	if (!this.l4x.a0c.y6k.m7g() &&
		!this.l4x.k3t.y6k.m7g())
	{
		q0d = this.l4x.a0c.y6k.c7z();
		m5t = this.l4x.k3t.y6k.c7z();
	}

	let h7k = w4r(this.l4x.j8i);
	let d1l = this.l4x.d1l.i3d;
	if (!this.l4x.d1l.t7m.m7g())
	{
		d1l += "\x20";
		d1l += this.l4x.d1l.t7m.m0k.toString();
	}
	let l0q = '';
	if (!this.l4x.t4y.m7g())
	{
		l0q = this.l4x.t4y.toString("\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79");
	}
	let u3w = '';
	if (!this.l4x.u3w.m7g())
	{
		u3w = '</br>' + '[' + this.l4x.u3w.w2a + ']';
	}

	let j8f = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.u5a);
	let r3s = j8f.clientHeight;
	let r8n = 200;

  let index = this.u5a;
  let n7q = this.l4x.d1l.n7q;

	let j3h = true;
	if (this.m9z.clientWidth >= 374 && r3s >= r8n)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + d6w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s += 					"<span class=\"rating\">" + d3t + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
		s += 				  "<span class=\"team\">" + q0d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + h7k + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + x4g + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=          "<span class=\"rating\">" + h7h + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
    s +=          "<span class=\"team\">" + m5t + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=      "\x3c\x74\x72\x3e";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "\x3c\x73\x70\x61\x6e\x3e" + t0t + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + d1l + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
    s +=          "<span class=\"tournamentPlace\">" + n7q + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=          "<span class=\"gameDate\">" + l0q + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"annotator\">" + u3w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + t6m + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "\x3c\x2f\x74\x64\x3e";
		s +=      "\x3c\x2f\x74\x72\x3e";
		s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.m9z.innerHTML = s;

		
		
		let p8l = Math.trunc(this.m9z.clientWidth / 10);
		if (p8l < 24) p8l = 24;
    
		
		
		
		
		
		
	}
	else if (this.m9z.clientWidth >= 300 && r3s >= r8n)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + q2i + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + d3t + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
		s += 				  "<span class=\"team\">" + q0d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + h7k + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + i4b + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + h7h + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
    s +=          "<span class=\"team\">" + m5t + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + t0t + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + d1l + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"tournamentPlace\">" + "\x3c\x2f\x62\x72\x3e" + n7q + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"gameDate\">" + l0q + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=          "<span class=\"annotator\">" + u3w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + t6m + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.m9z.innerHTML = s;
	}
	else if (this.m9z.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + q2i + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + d3t + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + h7k + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + i4b + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + h7h + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.m9z.innerHTML = s;
	}
	else
	{
		
		j3h = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + q2i + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + h7k + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + i4b + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.m9z.innerHTML = s;
	}

	if (j3h)
	{
		let u5d = 16;
		if (this.m9z.clientWidth < 400)
		{
			u5d = 16;
		}
		else if (this.m9z.clientWidth < 500)
		{
			u5d = 24;
		}
		else
		{
			u5d = 32;
		}
    if (this.l4x.a0c.u0n != r4b.d3j)
    {
  		let m2j = document.getElementById("\x77\x68\x69\x74\x65\x50\x6c\x61\x79\x65\x72\x4e\x61\x74\x69\x6f\x6e"+this.u5a);
	  	m2j.src = "\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + u5d.toString() +"\x2f" + t9z(this.l4x.a0c.u0n) + "\x2e\x70\x6e\x67";
		  m2j.height = u5d;
  		m2j.width = u5d;
    }
    if (this.l4x.k3t.u0n != r4b.d3j)
    {
  		let h0f = document.getElementById("\x62\x6c\x61\x63\x6b\x50\x6c\x61\x79\x65\x72\x4e\x61\x74\x69\x6f\x6e"+this.u5a);
	  	h0f.src = "\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + u5d.toString() + "\x2f" + t9z(this.l4x.k3t.u0n) + "\x2e\x70\x6e\x67";
		  h0f.height = u5d;
  		h0f.width = u5d;
    }
	}
}

}

class h2h
{

constructor(u5a)
{
	this.u5a = u5a;
	this.l4x = new s2g();
	this.n1r = new o3u(u5a);
	this.m9m = new n9q(u5a);
	this.m9m.l0p.p6x = this; 
	this.w6a = new q6l();
  this.g4f = new b1y(u5a);
}

x0m()
{
	this.n1r.x0m();
}

b3r()
{
	this.n1r.b3r();
}

o1d()
{
	this.n1r.o1d();
	this.m9m.l0p.o1d();
}

j6s(l5w, e5s, u7q, z2z)
{
	this.r4l(z2z, u7q);
}

r4l(z2z, u7q)
{
	this.l4x = z2z.c8b.z0k();
	this.e7t();
	this.m9m.l0p.t8z(z2z.r7v, u7q);
}

e7t()
{
	this.m9m.n5x.e7t(this.l4x);
}

a2j(u8a)
{
	this.n1r.b6k(u8a);
  this.q2t();
}

g7n()
{
	if (this.w6a.a9g())
	{
		this.w6a.l3q();
    this.y6b();
	}
	else
	{
		if (!this.m9m.l0p.q6i())
		{
      
			this.w6a.p6x = this; 
			this.w6a.m9q();
			this.m9m.l0p.b7c();
		}
	}
}

w5j(n3g)
{
	this.g4f.j2v(n3g);
}

i5l()
{
	this.g4f.q1g();
}

r9l()
{
	return this.g4f.z9o();
}

q2t()
{
  if (!this.w6a.a9g())
  {
    this.y6b();
  }
}

y6b()
{
	this.g4f.h5l(
		this.m9m.l0p.z3e(),
		this.m9m.l0p.v5n(),
		this.m9m.l0p.o2x(),
		this.m9m.l0p.w7v());
}

}

const k8s =
{
	r3r : 0,
	t9k : 1,
	d9x : 2,
	u4v : 3,
	k5x : 4,
 	j0x : 5,
	j8i : 6,
	r7v : 7,
	m0k : 8,
	event : 9,
	x7e : 10
};

const u1t =
{
	d3j : 0,
	f1i : 1,
	l9q : 2
};

let s7p = 0;
let a0g = 0;
let t8e = 0;
let f6s = 0;
let n3c = 0;
let a8h = 0;
let e9d = 0;
let g9b = 0;

let l9q = false;

function n7z(f, s)
{
	let u5q = f.c8b.a0c.d8n.w2a();
	let e1x = s.c8b.a0c.d8n.w2a();
	if (u5q < e1x)
	{
		return l9q ? -1 : 1;
	}
	if (u5q > e1x)
	{
		return l9q ? 1 : -1;
	}
	u5q = f.c8b.k3t.d8n.w2a();
	e1x = s.c8b.k3t.d8n.w2a();
	if (u5q < e1x)
	{
		return -1;
	}
	if (u5q > e1x)
	{
		return 1;
	}
	return 0;
}

function s5e(f, s)
{
	let u5q = f.c8b.k3t.d8n.w2a();
	let e1x = s.c8b.k3t.d8n.w2a();
	if (u5q < e1x)
	{
		return l9q ? -1 : 1;
	}
	if (u5q > e1x)
	{
		return l9q ? 1 : -1;
	}
	u5q = f.c8b.a0c.d8n.w2a();
	e1x = s.c8b.a0c.d8n.w2a();
	if (u5q < e1x)
	{
		return -1;
	}
	if (u5q > e1x)
	{
		return 1;
	}
	return 0;
}

function u3q(f, s)
{
	let w9w = f.c8b.a0c.q2q - s.c8b.a0c.q2q;
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	w9w = f.c8b.k3t.q2q - s.c8b.k3t.q2q;
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	return n7z(f, s);
}

function d1c(f, s)
{
	let w9w = f.c8b.k3t.q2q - s.c8b.k3t.q2q;
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	w9w = f.c8b.a0c.q2q - s.c8b.a0c.q2q;
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	return n7z(f, s);
}

function r2z(f, s)
{
	let w9w = f.c8b.a0c.u0n - s.c8b.a0c.u0n;
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	w9w = f.c8b.k3t.u0n - s.c8b.k3t.u0n;
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	return n7z(f, s);
}

function n6c(f, s)
{
	let w9w = f.c8b.k3t.u0n - s.c8b.k3t.u0n;
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	w9w = f.c8b.a0c.u0n - s.c8b.a0c.u0n;
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	return n7z(f, s);
}

function a2m(f, s)
{
	let w9w = f.c8b.j8i - s.c8b.j8i;
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	return n7z(f, s);
}

function x8n(f, s)
{
	let w9w = s.c8b.t4y.t4y() - f.c8b.t4y.t4y();
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	return n7z(f, s);
}

function m5g(f, s)
{
	let m3d = f.c8b.d1l.i3d;
	let h8c = s.c8b.d1l.i3d;
	if (m3d < h8c)
	{
		return l9q ? -1 : 1;
	}
	if (m3d > h8c)
	{
		return l9q ? 1 : -1;
	}
	let w9w = f.c8b.d1l.t7m.t4y() - s.c8b.d1l.t7m.t4y();
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	w9w = f.c8b.x7e - s.c8b.x7e;
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	w9w = f.c8b.c2w - s.c8b.c2w;
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	return n7z(f, s);
}

function e3w(f, s)
{
	let w9w = s.c8b.x7e - f.c8b.x7e;
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	w9w = s.c8b.c2w - f.c8b.c2w;
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	return n7z(f, s);
}

function f8k(f, s)
{
	let w9w = s.j5p - f.j5p;
	if (l9q)
	{
		w9w = -w9w;
	}
	if (w9w < 0) return -1;
	if (w9w > 0) return 1;
	return n7z(f, s);
}

class m4g
{

constructor(u5a)
{
	this.u5a = u5a;
	this.b0w = [];
	this.a5r = null;
	this.x5f = null;
	this.c2r = null;
	this.y7s = [];
	this.e7k = [];
	this.y1m = -1;
	this.n7f = u1t.d3j;
	this.h5t = 0;
  this.n2c = null;
}

m6f()
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
	s += "\x3c\x2f\x74\x72\x3e";
	this.c2r.innerHTML = s;
	this.y7s = this.c2r.getElementsByTagName("\x54\x48");
	let u5a = this.u5a;

 	this.y7s[k8s.r3r].onclick = this.i8z.bind(this);
	this.y7s[k8s.t9k].onclick = this.w4x.bind(this);
  this.y7s[k8s.d9x].onclick = this.f9i.bind(this);
	this.y7s[k8s.u4v].onclick = this.i8z.bind(this);
	this.y7s[k8s.k5x].onclick = this.z2f.bind(this);
  this.y7s[k8s.j0x].onclick = this.q3z.bind(this);
	this.y7s[k8s.j8i].onclick = this.j7s.bind(this);
	this.y7s[k8s.r7v].onclick = this.s1b.bind(this);
	this.y7s[k8s.m0k].onclick = this.n7g.bind(this);
	this.y7s[k8s.event].onclick = this.g3c.bind(this);
	this.y7s[k8s.x7e].onclick = this.k2z.bind(this);
}

j1d(b0w)
{
	this.b0w = b0w;
	this.s9s();
}

f3j()
{
	this.h4b("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
	this.h4b("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
 	this.h4b("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67");
	this.h4b("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
	this.h4b("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73");
	this.h4b("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
	this.h4b("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
	this.h4b("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64");
}

b2q()
{
	this.n8c("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", s7p);
	this.n8c("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67", a0g);
 	this.n8c("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67", g9b);
	this.n8c("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74", t8e);
	this.n8c("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73", f6s);
	this.n8c("\x67\x72\x69\x64\x2d\x79\x65\x61\x72", n3c);
	this.n8c("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", a8h);
	this.n8c("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64", e9d);

}

h4b(o5d)
{
	let h5f = this.a5r.getElementsByClassName(o5d);
	for (let i = 0; i < h5f.length; i++) {
		h5f[i].style.display = "\x6e\x6f\x6e\x65";
	}
}

m7m(o5d)
{
	let h5f = this.a5r.getElementsByClassName(o5d);
	for (let i = 0; i < h5f.length; i++) {
		h5f[i].style.display = "\x74\x61\x62\x6c\x65\x2d\x63\x65\x6c\x6c";
	}
}

n8c(o5d, width)
{
	let h5f = this.a5r.getElementsByClassName(o5d);
	for (let i = 0; i < h5f.length; i++) {
		h5f[i].style.width = (width) + "\x70\x78";
	}
}

s9s()
{
	this.h5t = this.a5r.clientWidth;
	this.h5t -= 17;
	if (this.h5t < 100)
	{
		this.h5t = 100;
	}
	s7p = 200;
	a0g = 52;
	t8e = 34;
	f6s = 50;
	n3c = 52;
	a8h = 200;
	e9d = 50;
  g9b = 30;

 
	let n7o = document.getElementsByClassName("\x74\x64\x72\x65\x70\x6c\x61\x79")[0];
	if (n7o.clientWidth <= i8a)
	{
		let q0r = 0.7;
		s7p *= q0r;
		a0g *= q0r;
		t8e *= q0r;
		f6s *= q0r;
		n3c *= q0r;
		a8h *= q0r;
		e9d *= q0r;
	}
	this.v0f();
}

l1e()
{
	this.f3j();
	this.b2q();

  let t3i = 2.8;
  let d3w = 2.8;
  let s4n = 17;
	if (this.h5t <= 400)
	{
		this.m7m("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.m7m("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
    this.m7m("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.m7m("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
    let w6j = 5 * (t3i + d3w);
		let r2b = t8e + n3c;
		let y8h = Math.trunc((this.h5t - r2b - w6j - s4n) / 3);
		this.n8c("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", y8h);
		this.n8c("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", y8h);
	}
	else if (this.h5t <= 580)
	{
		this.m7m("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.m7m("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
		this.m7m("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
		this.m7m("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.m7m("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
    let w6j = 7 * (t3i + d3w);
		let r2b = 2 * a0g + t8e + n3c;
		let y8h = Math.trunc((this.h5t - r2b - w6j - s4n) / 3);
		this.n8c("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", y8h);
		this.n8c("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", y8h);
	}
	else
	{
		this.m7m("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.m7m("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
    this.m7m("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67");
		this.m7m("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
		this.m7m("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73");
		this.m7m("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.m7m("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
		this.m7m("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64");
    let w6j = 11 * (t3i + d3w);
		let r2b = 2 * a0g + 2 * g9b + t8e + f6s + n3c + e9d;
		let y8h = Math.trunc((this.h5t - r2b - w6j - s4n) / 3);
		this.n8c("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", y8h);
		this.n8c("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", y8h);
	}
}

v0f()
{
	let u5d = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.u5a + "\">"; 
	for (const z2z of this.b0w)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += z2z.c8b.a0c.d8n.v7t();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-rating\">";
		if (z2z.c8b.a0c.q2q)
		{
			s += z2z.c8b.a0c.q2q;
		}
		s += "\x3c\x2f\x74\x64\x3e";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (z2z.c8b.a0c.u0n != r4b.d3j)
		{
      let i1o = "\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + u5d.toString() + "\x2f" + t9z(z2z.c8b.a0c.u0n) + "\x2e\x70\x6e\x67";
  		s += "\x3c\x73\x70\x61\x6e\x3e";
      s += "<img src=\"";
      s += i1o;
      s += "\" height=\"16\"";
      s += "\x3e";
   		s += "\x3c\x2f\x73\x70\x61\x6e\x3e";
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-player\">";
		s += z2z.c8b.k3t.d8n.v7t();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-rating\">";
		if (z2z.c8b.k3t.q2q)
		{
			s += z2z.c8b.k3t.q2q;
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-flag\">";
		if (z2z.c8b.k3t.u0n != r4b.d3j)
		{
      let i1o = "\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + u5d.toString() + "\x2f" + t9z(z2z.c8b.k3t.u0n) + "\x2e\x70\x6e\x67";
  		s += "\x3c\x73\x70\x61\x6e\x3e";
      s += "<img src=\"";
      s += i1o;
      s += "\" height=\"16\"";
      s += "\x3e";
   		s += "\x3c\x2f\x73\x70\x61\x6e\x3e";
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-result\">";
		s += w4r(z2z.c8b.j8i);
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-moves\">";
		s += z2z.j5p;
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-year\">";
		s += z2z.c8b.t4y.toString("\x79\x79\x79\x79");
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-event\">";
		s += z2z.c8b.d1l.i3d;
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-round\">";
		s += z2z.c8b.i5d();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "\x3c\x2f\x74\x72\x3e";
	}
  s += "\x3c\x2f\x74\x62\x6f\x64\x79\x3e";
	this.x5f.innerHTML = s;

  let f1t = document.getElementById('gameList' + this.u5a);
  f1t.addEventListener('click', this.r1i.bind(this));

	this.l1e();
}

h4p(z0p)
{
	if (z0p != this.y1m)
	{
		this.y1m = z0p;
		this.n7f = u1t.f1i;
	}
	else
	{
		if (this.n7f == u1t.d3j)
		{
			this.n7f = u1t.f1i;
		}
		else if (this.n7f == u1t.f1i)
		{
			this.n7f = u1t.l9q;
		}
		else if (this.n7f == u1t.l9q)
		{
			this.n7f = u1t.f1i;
		}
	}
	l9q = (this.n7f == u1t.l9q);

	for (const x3r of this.y7s)
	{
		let s = x3r.n2f;
		let n1g = s.replace("\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x64\x65\x73\x63", "");
		let e8p = n1g.replace("\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x61\x73\x63", "");
		x3r.n2f = e8p;
	}
	let h3a = this.y7s[this.y1m];
	if (this.n7f == u1t.l9q)
	{
		h3a.n2f = h3a.n2f + "\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x64\x65\x73\x63";
	}
	else
	{
		h3a.n2f = h3a.n2f + "\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x61\x73\x63";
	}
}

i8z(event)
{
	this.h4p(k8s.r3r);
	this.b0w.sort(n7z);
	this.v0f();
}

w4x(event)
{
	this.h4p(k8s.t9k);
	this.b0w.sort(u3q);
	this.v0f();
}

f9i(event)
{
	this.h4p(k8s.d9x);
	this.b0w.sort(r2z);
	this.v0f();
}

x3j(event)
{
	this.h4p(k8s.u4v);
	this.b0w.sort(s5e);
	this.v0f();
}

z2f(event)
{
	this.h4p(k8s.k5x);
	this.b0w.sort(d1c);
	this.v0f();
}

q3z(event)
{
	this.h4p(k8s.j0x);
	this.b0w.sort(n6c);
	this.v0f();
}

j7s(event)
{
	this.h4p(k8s.j8i);
	this.b0w.sort(a2m);
	this.v0f();
}

n7g(event)
{
	this.h4p(k8s.m0k);
	this.b0w.sort(x8n);
	this.v0f();
}

g3c(event)
{
	this.h4p(k8s.event);
	this.b0w.sort(m5g);
	this.v0f();
}

k2z(event)
{
	this.h4p(k8s.x7e);
	this.b0w.sort(e3w);
	this.v0f();
}

s1b(event)
{
	this.h4p(k8s.r7v);
	this.b0w.sort(f8k);
	this.v0f();
}

r1i(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.n2c)
  {
    this.n2c(this, index);
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
	this.k5l = new b7h();
	this.i0x = new b7h();
	this.o4u = false;
	this.s8j = 0;
	this.l7x = 0;
	this.f4f = [];
}

}

var tooltip = null;

class u0g
{

constructor(u5a)
{
	this.u5a = u5a;
	this.u0z = new g5i();
	this.p6x = null;
	this.x3a = new z5k();
	this.x1k = null;
	this.b0d = [];
	this.j8t = [];
  this.q0n = [];
  this.c0x = [];
	this.z8n = -1;
	this.x6a = new i2p();
  this.x7r = null;
	this.t8q = true;
	this.s5i = false;
	this.n5z = [];
	this.v2j = 0;
  this.e2j = true;
  this.u4x = false;
	this.a6q = false;
	this.l4o = true;
  this.x6l = false;
}

t8z(h0a, u7q)
{
	this.u0z = h0a.z0k();
  this.u0z.s3h();
	this.x7r = this.u0z.r1h(u7q);
	this.j6s();
}

h0v(a3k)
{
  this.d7k(this.q0n[a3k]);
}

j6s()
{
	this.u5w();
	this.b7c();
  this.x2m(this.u0z.f7z(this.x7r));
}

u5w()
{
	let h0y = new o1y();
  h0y.s9p(this.e2j);
	h0y.r9p(this.x6l);
  /*
	h0y.setOneLine(this.x6l);
  */
	h0y.g6h(this.a6q);
	h0y.m9d(this.l4o);
	h0y.p5g(this.u0z);

  this.x1k.innerHTML = h0y.c1d.c9e;
  this.b0d = this.x1k.getElementsByClassName("\x74\x64\x6d\x6f\x76\x65");
  this.j8t = this.x1k.getElementsByClassName("\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74");

	this.i2i("\x74\x64\x6d\x6f\x76\x65");
	this.i2i("\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74");
	this.i2i("\x74\x64\x64\x69\x61");
	this.i2i("\x74\x64\x6d\x65\x64\x61\x6c");
  this.i2i("\x74\x64\x63\x6f\x6c\x6f\x72\x73");

  this.i6c("\x74\x64\x6d\x6f\x76\x65");

	this.f9b();
	this.j6d();
}

i2i(h3u)
{
	let u5a = this.u5a;
	let a6z = this.x1k.getElementsByClassName(h3u);
	for (const m7i of a6z)
	{
    let u7q = m7i.getAttribute('movenr');
    m7i.onclick = this.y9i.bind(this, u7q);
	}
}

i6c(h3u)
{
	let u5a = this.u5a;
	let a6z = this.x1k.getElementsByClassName(h3u);
	for (const m7i of a6z)
	{
    let u7q = m7i.getAttribute('movenr');
    m7i.onmouseover = this.m9g.bind(this, u7q);
    m7i.onmouseleave = this.n5a.bind(this, u7q);
	}
}

o1d()
{
	this.f9b();
}

f9b()
{
	let r8m = this.x1k.getElementsByClassName("\x74\x64\x64\x69\x61");
	for (const n3q of r8m)
	{
		let a1s = new p8q();
		a1s.e5v = n3q.getElementsByTagName("\x63\x61\x6e\x76\x61\x73")[0];
		let b6c = this.x6a.c0b();
		a1s.e5v.width = b6c;
		a1s.e5v.height = b6c;
		a1s.x4z(this.x6a);
		let l2l = this.u0z.r1h(n3q.getAttribute('movenr'));
    a1s.h5l(this.u0z.k5l(l2l));
    if (l2l.b8i)
    {
  		a1s.o2w(l2l.b8i.s0l());
	  	a1s.r8y(l2l.b8i.s8s());
    }
    else
    {
   		a1s.o2w(this.u0z.j7j());
	  	a1s.r8y(this.u0z.h9s());
    }
		a1s.h3x();
	}
}

j6d()
{
	let e3z = this.x1k.getElementsByClassName("\x74\x64\x6d\x65\x64\x61\x6c");
	for (const o7u of e3z)
	{
		let e5v = o7u.getElementsByTagName("\x63\x61\x6e\x76\x61\x73")[0];
		e5v.width = 40;
		e5v.height = 16;
		let f5c = e5v.getContext('2d');
		let rect = new a9w();
		rect.a2y(40);
		rect.j1s(16);
		let l2l = this.u0z.r1h(o7u.getAttribute('movenr'));
    if (l2l.b8i)
    {
  		j6d(f5c, rect, l2l.b8i.z6c());
    }
    else
    {
  		j6d(f5c, rect, this.u0z.e1c());
    }
	}
}

b7c()
{
	let u8a = new h5y();
	u8a.z3e = this.u0z.z3e();
  u8a.d9w = this.u0z.k5l(this.x7r);
  if (this.c6z())
  {
    u8a.s0l = this.u0z.j7j();
	  u8a.s8s = this.u0z.h9s();
  }
  else
  {
  	u8a.s0l = this.x7r.b8i.s0l();
	  u8a.s8s = this.x7r.b8i.s8s();
  }
  
	if (this.q6i())
	{
		u8a.f6c = new u4t();
	}
	else
	{
    let s3b = this.x7r.z0k();
		this.u0z.c7b(s3b);
		u8a.f6c = s3b.b8i.k2j().z0k();
	}
  
 	if (!this.c6z())
	{
		u8a.c4m = this.x7r.b8i.k2j();
	}
	u8a.s2a = this.s2a();
	u8a.i1i = this.i1i();
	u8a.c6e = this.c6e();
	u8a.a4r = 0; 
  u8a.w1g = this.u0z.w1g(this.x7r);
	if (this.p6x)
	{
		this.p6x.a2j(u8a);
	}
}

h6i(t6x)
{
	this.x7r = this.u0z.r1h(t6x);
	this.b7c();
}

g2q(f0m)
{
	switch (f0m)
	{
		case k9n:
		case o7w:
		case h8p:
			this.q6u();
			break;
		case z0o:
		case p1f:
		case t7c:
			this.r5f();
			break;
		case i5q:
		case t4p:
		case l4i:
			this.b0b();
			break;
		case o0c:
		case z7r:
		case i4f:
			this.s1t();
			break;
		case z8i:
			break;
		case b0r:
			break;
	}
}

e6z()
{
  if (this.x7r.m0x)
  {
    this.x2m(this.x7r.m0x.w0j);
  }
  else
  {
    this.x2m(0);
  }
}

a0e()
{
	this.e6z();
	this.b7c();
}

i1i()
{
	return !this.c6z();
}

c6z()
{
	return this.u0z.c6z(this.x7r);
}

q6i()
{
	return this.u0z.q6i(this.x7r);
}

s2a()
{
	return this.u0z.s2a(this.x7r);
}

f6c(g3m)
{
	if (this.q6i())
	{
		return null;
	}
	else
	{
    let s3b = this.x7r.z0k();
		this.u0z.o7g(s3b, g3m);
		return s3b.b8i;
	}
}

r5f()
{
	if (this.i1i())
	{
		this.u0z.z2n(this.x7r);
		this.a0e();
	}
}

c6e()
{
	return !this.q6i();
}

q6u()
{
	if (this.c6e())
	{
		this.v9v(0);
	}
}

v9v(index)
{
	let e2a = this.u0z.j8g(this.x7r);
	if (index >= 0 && index < e2a)
	{
		this.u0z.o7g(this.x7r, index);
		this.a0e();
	}
}

s1t()
{
	if (this.c6e())
	{
		this.u0z.a2u(this.x7r);
		this.a0e();
	}
}

b0b()
{
	if (this.i1i())
	{
		this.x7r = this.u0z.h6c();
		this.a0e();
	}
}

d7s()
{
	if (this.t8q)
	{
		this.z4v();
	}
	else
	{
		this.g5q();
	}
}

v0k()
{
	if (this.s5i)
	{
		this.s5i = false;
		this.p6x.n1r.a1s.l4b();
		this.b7c();
	}
	else
	{
		this.b7c();
	}
}


g5q()
{
	if (this.q6i())
	{
		this.b7c();
		return;
	}
  if (chess)
  {
  	this.v9v(0);
    return;
  }

  
 	let b8i = this.f6c(0);
  if (!b8i.l7x())
 	{
  	this.v9v(0);
	  return;
 	}

  
	let l3z = false;
	if (!this.x3a.o4u)
	{
		l3z = true;
	}
	else
	{
		l3z = false;
		if (this.x3a.s8j < this.x3a.l7x)
		{
			if (this.x3a.i0x.j5g(this.x3a.k5l))
			{
				l3z = true;
			}
		}
	}
	if (l3z)
	{
		this.x3a.k5l = this.u0z.k5l(this.x7r);
		this.x3a.i0x = this.u0z.k5l(this.x7r);
		this.x3a.o4u = true;
		this.x3a.s8j = 0;
		this.x3a.f4f.length = 0;
		this.x3a.f4f.push(b8i.g9q()); 
		this.x3a.l7x = b8i.l7x();
		if (this.x3a.l7x > 1)
		{
			let a4d = p3f(this.x3a.i0x, b8i.k2j());
			for (let i = 0; i < this.x3a.l7x - 1; i++)
			{
				this.x3a.f4f.push(a4d[i]);
			}
		}
		this.x3a.f4f.push(b8i.n4k());
	}
	if (this.x3a.s8j < this.x3a.l7x)
	{
		let w2w = b8i.w2w();
		let l6n = this.x3a.f4f[this.x3a.s8j];
		let n4k = this.x3a.f4f[this.x3a.s8j + 1];
		this.x3a.i0x.u9s(l6n, u8l.m7g);
		this.x3a.i0x.u9s(n4k, w2w);
		this.x3a.k5l = this.x3a.i0x.z0k();
		this.x3a.s8j++;
		let u8a = new h5y();
		u8a.d9w = this.x3a.i0x.z0k();
		u8a.i1i = this.i1i();
		u8a.c6e = this.c6e();
		if (this.p6x)
		{
			this.p6x.a2j(u8a);
		}
	}
	else
	{
		this.x3a.o4u = false;
		this.v9v(0);
	}
}



z4v()
{
	if (this.s5i)
	{
		let a1u = this.p6x.n1r.a1s.z0a();
		if (a1u)
		{
			if (this.v2j < this.n5z.length - 1)
			{
				this.p6x.n1r.a1s.t9l(this.n5z[this.v2j],
					this.n5z[this.v2j+1], true);
				this.v2j++;
			}
			else
			{
				this.s5i = false;
				this.v9v(0);
			}
		}
		return;
	}

	if (this.q6i())
	{
		this.b7c();
		return;
	}

	this.n5z.length = 0;
	let b8i = this.f6c(0);
	let l7x = b8i.l7x();
	if (l7x == 0)
	{
		this.n5z.push(b8i.g9q()); 
		this.n5z.push(b8i.y4i());
	}
	else
	{
		this.n5z.push(b8i.g9q());
		if (l7x > 1)
		{
      let k5l = this.u0z.k5l(this.x7r);
      let a4d = p3f(k5l, b8i.k2j());
			for (let i = 0; i < l7x - 1; i++)
			{
				this.n5z.push(a4d[i]);
			}
		}
		this.n5z.push(b8i.y4i());
	}

	this.p6x.n1r.a1s.t9l(this.n5z[0],
		this.n5z[1], l7x > 0);
	this.v2j = 1;
	this.s5i = true;
}

y4j(l9x)
{
	for (const m of this.b0d)
	{
		if (m.getAttribute('movenr') == l9x)
		{
			return m;
		}
	}
	return null;
}

d7d(l9x)
{
	let h8q = [];
	for (const e4h of this.j8t)
	{
		if (e4h.getAttribute('movenr') == l9x)
		{
			h8q.push(e4h);
		}
	}
	return h8q;
}

d7k(g9h)
{
	let d7j = g9h.offsetTop;
	let o5w = g9h.scrollHeight;

	let x7d = this.x1k.offsetTop;
	let g9p = this.x1k.scrollTop;
	let p9z = this.x1k.clientHeight;
	let j1y = this.x1k.scrollHeight;
	let h6m = d7j - x7d;
	if (h6m >= g9p && h6m + o5w <= g9p + p9z - 1)
	{
		
	}
	else
	{
		
		let top = h6m - (p9z / 2);
		if (top < 0) top = 0;
		this.x1k.scrollTop = top;
	}
}

j0w(c6y, n9l)
{
	let y9b = c6y;
	while (y9b.c9v)
	{
		y9b = y9b.c9v;
	}
 	while (y9b)
	{
    if (this.u0z.e5e(y9b.w0j) == false)
    {
 	  	let g9h = this.y4j(y9b.w0j);
  	  if (g9h)
 		  {
  		  g9h.classList.add(n9l);
 	  	}
    }
    y9b = y9b.x8t;
  }
}

x2m(u7q)
{
  
 	for (const b8i of this.b0d)
	{
 		b8i.classList.remove('tdcurline');
    b8i.classList.remove('tdcurnode1');
	}
 	for (const e4h of this.j8t)
	{
 		e4h.classList.remove('tdcurline');
	}

  
	if (this.z8n >= 0)
	{
		let g9h = this.y4j(this.z8n);
		if (g9h)
		{
			g9h.classList.remove('tdcurmove');
		}
	}

  
  let u9u = true;
  let k6e = this.u0z.u6f(this.x7r);
 	for (const c6y of k6e)
	{
    if (c6y.c9v && u9u)
		{
		  this.j0w(c6y, 'tdcurnode1');
      u9u = false;
    }
    else
    {
      if (this.u0z.e5e(c6y.w0j) == false)
      {
   	  	let v0j = this.y4j(c6y.w0j);
	  	  if (v0j)
  		  {
	  		  v0j.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let g9h = this.y4j(u7q);
	if (g9h)
	{
    g9h.classList.remove('tdcurline');
		g9h.classList.add('tdcurmove');
		this.d7k(g9h);
	}
	this.z8n = u7q;
}

u5b()
{
	let b8i = this.y4j(this.z8n);
	if (!b8i) return;
	let c5k = b8i.offsetTop;
	let s3k = null;
	let e7s = -1;
	for (const m of this.b0d)
	{
		if (m.offsetTop < c5k)
		{
			if (m.offsetTop > e7s)
			{
				s3k = m;
				e7s = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (s3k)
	{
		this.d7f(s3k.getAttribute('movenr'));
	}
	else
	{
		if (this.b0d.length)
		{
			this.d7f(this.b0d[0].getAttribute('movenr'));
		}
	}
}

m6v()
{
	let b8i = this.y4j(this.z8n);
	if (!b8i)
	{
		this.q6u();
		return;
	}
	let c5k = b8i.offsetTop;
	for (const m of this.b0d)
	{
		if (m.offsetTop > c5k)
		{
			this.d7f(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.b0d.length)
	{
		this.d7f(this.b0d[this.b0d.length - 1].getAttribute('movenr'));
	}
}

d7f(t6x)
{
  
  
  
  
  if (this.x7r.m0x)
  {
    if (this.x7r.m0x.w0j == t6x)
    {
      return;
    }
  }
  else
  {
    if (t6x == 0)
    {
      return;
    }
  }
	
  this.h6i(t6x);
  this.x2m(t6x);
	
}

f7z()
{
	return this.u0z.f7z(this.x7r);
}

x4z(x6a)
{
  this.x6a = x6a.z0k();
	this.x6a.g3n = 0;
	this.x6a.j7f = 0;
	this.x6a.j2h = 32;
  this.x6a.o3j = 2;
 	this.x6a.g6x = false;
}

z3e()
{
	return this.u0z.z3e();
}

v5n()
{
	return this.u0z.v5n();
}

o2x()
{
	return this.u0z.o2x(this.x7r);
}

w7v()
{
	return this.u0z.w7v();
}

y9i(u7q, event)
{
  this.d7f(u7q);
}

m9g(u7q, event)
{
  if (!this.u4x) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const m7i = event.currentTarget; 
  const rect = m7i.getBoundingClientRect();
  console.log(`a9w.k2m: ${rect.left}`);
  console.log(`a9w.i0p: ${rect.top}`);
  let p5j = rect.left;
  let z0z = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let b4w = this.x6a.c0b();

  if (p5j + b4w > viewportWidth)
  {
    p5j = viewportWidth - b4w - 5;
  }
  if (p5j < 5)
  {
    p5j = 5;
  }
  if (z0z + b4w > viewportHeight)
  {
    z0z = viewportHeight - b4w - 5;
  }
  if (z0z < 5)
  {
    z0z = 5;
  }

  let l2l = this.u0z.r1h(u7q);
  let k5l = this.u0z.k5l(l2l);
  tooltip.innerHTML = this.b1t(k5l);

  tooltip.style.left = `${p5j}px`;
  tooltip.style.top = `${z0z}px`;
  tooltip.classList.add('visible');
}

n5a(u7q, event)
{
  if (!this.u4x) return;
  tooltip.classList.remove('visible');
}

b1t(k5l)
{
  let a1s = new p8q();
  const tempCanvas = document.createElement('canvas');
	a1s.e5v = tempCanvas;
	let b6c = this.x6a.c0b();
	a1s.e5v.width = b6c;
	a1s.e5v.height = b6c;
	a1s.x4z(this.x6a);
  a1s.h5l(k5l);
  a1s.h3x();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="\x24\x7b\x69\x6d\x61\x67\x65\x44\x61\x74\x61\x55\x52\x4c\x7d" alt="\x43\x68\x65\x73\x73\x20\x50\x6f\x73\x69\x74\x69\x6f\x6e" width="\x24\x7b\x62\x6f\x61\x72\x64\x53\x69\x7a\x65\x7d" height="\x24\x7b\x62\x6f\x61\x72\x64\x53\x69\x7a\x65\x7d">`;
}

}

class l3f
{

constructor()
{
	this.c5v = 15;
  this.p1x = true;
 	this.c7o = true;
}

z0k()
{
  return Object.assign(new l3f(), this);
}

}
class n9q
{

constructor(u5a)
{
  this.n5x = new u9z(u5a);
  this.l0p = new u0g(u5a);
}

}

class q6l
{

constructor()
{
	this.l1o = false;
	this.p6x = null;
	this.e4p = null;
	this.o6n = 6;
	this.a1t = null;
	this.d9u = null;
	this.u0r = null;
	this.z1h = null;
	this.b3i = null;
	this.d4l = false;
}

m9q()
{
	this.l1o = false;
	this.a8v();
	this.a1t.classList.replace('autoPlay', 'autoStop');
	this.z1h.style.display = 'none';
	this.b3i.style.display = 'none';
	this.d9u.style.display = 'inline-block';
	this.u0r.style.display = 'inline-block';
	this.d2h();
	this.p6x.n1r.g7m = false;
}

l3q()
{
	if (this.e4p)
	{
		clearInterval(this.e4p);
		this.e4p = null;
		this.a1t.classList.replace('autoStop', 'autoPlay');
		this.z1h.style.display = 'inline-block';
		this.b3i.style.display = 'inline-block';
		this.d9u.style.display = 'none';
		this.u0r.style.display = 'none';
		this.p6x.n1r.g7m = true; 
		this.p6x.m9m.l0p.v0k();
	}
}

a8v()
{
	let u5a = this.p6x.u5a;
	this.e4p = setInterval(function(){ h0i(u5a); },
		this.p6x.m9m.l0p.t8q ? this.o6n * 2 : this.o6n * 100);
}

a9g()
{
	return this.e4p != null;
}

i1i()
{
	return !this.p6x.m9m.l0p.c6z();
}

c6e()
{
	return !this.p6x.m9m.l0p.q6i();
}

g8k()
{
	if (this.d4l)
	{
		return;
	}
	else
	{
		this.d4l = true;
	}
	if (!this.c6e())
	{
		this.l3q();
	}
	else
	{
		this.p6x.m9m.l0p.d7s();
	}
	this.d4l = false;
}

l6k()
{
	if (this.e4p)
	{
		if (this.o6n < 50)
		{
			this.o6n++;
			clearInterval(this.e4p);
			this.a8v();
			this.d2h();
		}
	}
}

n3h()
{
	if (this.e4p)
	{
		if (this.o6n > 1)
		{
			this.o6n--;
			clearInterval(this.e4p);
			this.a8v();
			this.d2h();
		}
	}
}

d2h()
{
	l2a(this.d9u, this.o6n < 50);
	l2a(this.u0r, this.o6n > 1);
}

}

let u7j = null;
let z5b = 0;
let i1x = null;

class t1a
{

constructor()
{
	this.index = 0;
	this.l8j = '';
	this.n7o = null;
	this.s7m = false;
	this.p6x = null;
	this.d9i = null;
  this.b0w = [];
	this.v8x = 0;
  this.j8v = 0;

	this.o5s = null;
	this.h7s = null;
	this.left = null;
	this.u3z = null;
	this.q3s = null;
	this.r9m = null;
	this.o8y = null;
	this.k8w = null;
	this.i2y = null;
	this.p5e = null;
	this.t6c = null;
 	this.x0w = null;
 	this.b1z = null;
	this.x4i = null;
	this.z1h = null;
	this.d9u = null;
	this.a1t = null;
	this.b3i = null;
	this.u0r = null;
	this.h2b = null;
 	this.n9e = null;
  this.j6g = null;
	this.h2r = null;
  this.z6q = null;
	this.t5h = null;
	this.n7j = null;
	this.a5r = null;
	this.i0n = null;
	this.x9b = null;
	this.p0w = null;
  this.h0r = null;
  this.f5x = null;
	this.t1p = null;
	this.w5y = null;
	this.o2t = null;
	this.q8k = null;
	this.j8l = null;

	this.z7x = null;
	this.p6e = null;
	this.f4y = null;
	this.o4p = null;

  this.p7z = null;
	this.j2p = null;
	this.w0r = null;
  this.f3s = null;

  this.h3v = null;

  
  this.p7u = null;
  this.y9t = null;
  this.i7s = null;
  this.p5u = null;
  this.w6z = null;
  this.j3l = null;

  
}

m8z(index, n7o, l8j)
{
	this.index = index;
	this.n7o = n7o;
	this.l8j = l8j;
	n7o.innerHTML = '';
	n7o.z7z = "\x72\x65\x70\x6c\x61\x79";

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
	s +=               "\x3c\x2f\x64\x69\x76\x3e";
	s +=             "\x3c\x2f\x64\x69\x76\x3e";
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
	s +=               "\x3c\x2f\x64\x69\x76\x3e";
	s +=             "\x3c\x2f\x64\x69\x76\x3e";
	s +=           "\x3c\x2f\x64\x69\x76\x3e";
	s +=           "<div id=\"leftSouth" + index + "\" class=\"leftSouth\">";
	s +=             "<div id=\"leftSouthNest" + index + "\" class=\"leftSouthNest\">";
	s +=             "\x3c\x2f\x64\x69\x76\x3e";
	s +=           "\x3c\x2f\x64\x69\x76\x3e";
	s +=         "\x3c\x2f\x64\x69\x76\x3e";
	s +=       "\x3c\x2f\x64\x69\x76\x3e";
	s +=     "\x3c\x2f\x64\x69\x76\x3e";

	s +=     "<div id=\"right" + index + "\" class=\"right\">";
	s +=       "<div id=\"rightNest" + index + "\" class=\"rightNest\">";
	s +=         "<div id=\"rightNorth" + index + "\" class=\"rightNorth\">";
	s +=           "<div id=\"nota-container" + index + "\" class=\"nota-container\">";
	s +=             "<div id=\"nota-header-container" + index + "\" class=\"nota-header-container\">";
	s +=               "<div id=\"headerPanel" + index + "\" class=\"headerPanel\"></div>";
	s +=             "\x3c\x2f\x64\x69\x76\x3e";
	s +=             "<div class=\"nota-moves-container\">";
	s +=               "<div id=\"nota-imoves-container" + index + "\" class=\"nota-imoves-container\">";
	s +=                 "<div id=\"movesPanel" + index + "\" class=\"movesPanel\"></div>";
	s +=               "\x3c\x2f\x64\x69\x76\x3e";
	s +=             "\x3c\x2f\x64\x69\x76\x3e";
	s +=           "\x3c\x2f\x64\x69\x76\x3e";
	s +=         "\x3c\x2f\x64\x69\x76\x3e";
	s +=         "<div id=\"rightSouth" + index + "\" class=\"rightSouth\">";
	s +=           "<div id=\"enota-container" + index + "\" class=\"enota-container\">";

  
	s +=  "<div id=\"belowBoard" + index + "\" class=\"belowBoard\">";
 	s +=  "<div id=\"engineButtonPanel" + index + "\" class=\"replayPanel\">";

  
  s += "<div class=\"toggle-container\">";
  s += "<input type=\"checkbox\" id=\"startEngine" + index + "\" hidden>";
  s += "<label for=\"startEngine" + index + "\" class=\"switch\" title=\"Evaluation on/off\">";
  s += "<span class=\"slider\"></span>";
  s += "\x3c\x2f\x6c\x61\x62\x65\x6c\x3e";
  s += "\x3c\x2f\x64\x69\x76\x3e";
  
	s += "<button id=\"threat" + index + "\" class=\"replayButton threat-off\" title=\"Threat\"></button>";
  
	s += "<button id=\"engineSettings" + index + "\" class=\"replayButton engineSettings\" title=\"Settings\"></button>";
  s +=  "\x3c\x2f\x64\x69\x76\x3e";
  s +=  "\x3c\x2f\x64\x69\x76\x3e";

	s +=             "<div class=\"enota-moves-container\">";
	s +=               "<div id=\"enota-imoves-container" + index + "\" class=\"enota-imoves-container\">";
	s +=                 "<div id=\"emovesPanel" + index + "\" class=\"emovesPanel\"></div>";
	s +=               "\x3c\x2f\x64\x69\x76\x3e";
	s +=             "\x3c\x2f\x64\x69\x76\x3e";
	s +=           "\x3c\x2f\x64\x69\x76\x3e";
	s +=         "\x3c\x2f\x64\x69\x76\x3e";
  s +=       "\x3c\x2f\x64\x69\x76\x3e";
	s +=     "\x3c\x2f\x64\x69\x76\x3e";

 	s +=     "<div id=\"listParent" + index + "\" class=\"listParent grid\">";
	s +=       "<div id=\"listHeader" + index + "\" class=\"grid-header grid-header-scrollbar\">";
	s +=         "<table id=\"listHeaderTable" + index + "\" class=\"grid-table\">";
	s +=         "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
	s +=       "\x3c\x2f\x64\x69\x76\x3e";
	s +=       "<div id=\"listBody" + index + "\" class=\"listBody grid-body\">";
	s +=         "<table id=\"gameList" + index + "\" class=\"grid-table gamelist-table\"></table>";
	s +=       "\x3c\x2f\x64\x69\x76\x3e";
  s +=       "<div id=\"list-button-container" + index + "\" class=\"navButtonContainer\">";
	s +=  	     "<button id=\"hideGameList" + index + "\" class=\"navButton\" title=\"Hide Game List\">&lt; Back</button>";
  s +=       "\x3c\x2f\x64\x69\x76\x3e";
  s +=     "\x3c\x2f\x64\x69\x76\x3e";
	s +=   "\x3c\x2f\x64\x69\x76\x3e";
	s += "\x3c\x2f\x64\x69\x76\x3e";

  n7o.innerHTML = s;

	this.o5s = document.getElementById("\x72\x6f\x6f\x74\x50\x61\x72\x65\x6e\x74"+index);
	this.h7s = document.getElementById("\x72\x6f\x6f\x74"+index);
	this.left = document.getElementById("\x6c\x65\x66\x74"+index);
	this.u3z = document.getElementById("\x6c\x65\x66\x74\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.q3s = document.getElementById("\x6c\x65\x66\x74\x4e\x65\x73\x74"+index);
	this.r9m = document.getElementById("\x6c\x65\x66\x74\x4e\x6f\x72\x74\x68"+index);
	this.o8y = document.getElementById("\x62\x6f\x61\x72\x64\x48\x6f\x6c\x64\x65\x72"+index);
	this.k8w = document.getElementById("\x62\x6f\x61\x72\x64\x50\x61\x6e\x65\x6c"+index);
	this.i2y = document.getElementById("\x62\x6f\x61\x72\x64\x43\x61\x6e\x76\x61\x73"+index);
	this.p5e = document.getElementById("\x62\x65\x6c\x6f\x77\x42\x6f\x61\x72\x64"+index);
	this.t6c = document.getElementById("\x72\x65\x70\x6c\x61\x79\x50\x61\x6e\x65\x6c"+index);
 	this.x0w = document.getElementById("\x67\x6f\x54\x6f\x50\x72\x65\x76\x69\x6f\x75\x73"+index);
 	this.b1z = document.getElementById("\x67\x6f\x54\x6f\x4e\x65\x78\x74"+index);
	this.x4i = document.getElementById("\x67\x6f\x54\x6f\x42\x65\x67\x69\x6e"+index);
	this.z1h = document.getElementById("\x70\x6c\x61\x79\x42\x61\x63\x6b\x77\x61\x72\x64"+index);
	this.d9u = document.getElementById("\x70\x6c\x61\x79\x53\x6c\x6f\x77\x65\x72"+index);
	this.a1t = document.getElementById("\x61\x75\x74\x6f\x50\x6c\x61\x79"+index);
	this.b3i = document.getElementById("\x70\x6c\x61\x79\x46\x6f\x72\x77\x61\x72\x64"+index);
	this.u0r = document.getElementById("\x70\x6c\x61\x79\x46\x61\x73\x74\x65\x72"+index);
	this.h2b = document.getElementById("\x67\x6f\x54\x6f\x45\x6e\x64"+index);
  this.n9e = document.getElementById("\x66\x6c\x69\x70\x42\x6f\x61\x72\x64"+index);
  this.j6g = document.getElementById("\x64\x6f\x77\x6e\x6c\x6f\x61\x64"+index);
	this.h2r = document.getElementById("\x73\x68\x6f\x77\x47\x61\x6d\x65\x4c\x69\x73\x74"+index);
  this.z6q = document.getElementById("\x73\x65\x74\x74\x69\x6e\x67\x73"+index);
	this.t5h = document.getElementById("\x6c\x65\x66\x74\x53\x6f\x75\x74\x68"+index);
	this.n7j = document.getElementById("\x6c\x65\x66\x74\x53\x6f\x75\x74\x68\x4e\x65\x73\x74"+index);
	this.a5r = document.getElementById("\x6c\x69\x73\x74\x50\x61\x72\x65\x6e\x74"+index);
	this.i0n = document.getElementById("\x6c\x69\x73\x74\x48\x65\x61\x64\x65\x72"+index);
	this.x9b = document.getElementById("\x6c\x69\x73\x74\x48\x65\x61\x64\x65\x72\x54\x61\x62\x6c\x65"+index);
	this.p0w = document.getElementById("\x6c\x69\x73\x74\x42\x6f\x64\x79"+index);
  this.h0r = document.getElementById("\x6c\x69\x73\x74\x2d\x62\x75\x74\x74\x6f\x6e\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
  this.f5x = document.getElementById("\x68\x69\x64\x65\x47\x61\x6d\x65\x4c\x69\x73\x74"+index);
	this.t1p = document.getElementById("\x67\x61\x6d\x65\x4c\x69\x73\x74"+index);
	this.w5y = document.getElementById("\x72\x69\x67\x68\x74"+index);
	this.o2t = document.getElementById("\x72\x69\x67\x68\x74\x4e\x65\x73\x74"+index);
	this.q8k = document.getElementById("\x72\x69\x67\x68\x74\x4e\x6f\x72\x74\x68"+index);
	this.j8l = document.getElementById("\x72\x69\x67\x68\x74\x53\x6f\x75\x74\x68"+index);

  
  if (!chess)
  {
    this.q8k.style.height = "\x31\x30\x30\x25";
   	this.j8l.style.display = 'none';
  }

	this.z7x = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
  this.z7x.style.c5v = h1b.c5v + 'px';
	this.p6e = document.getElementById("\x6e\x6f\x74\x61\x2d\x68\x65\x61\x64\x65\x72\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.f4y = document.getElementById("\x68\x65\x61\x64\x65\x72\x50\x61\x6e\x65\x6c"+index);
	this.o4p = document.getElementById("\x6d\x6f\x76\x65\x73\x50\x61\x6e\x65\x6c"+index);

	this.p7z = document.getElementById("\x65\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
  this.p7z.style.c5v = h1b.c5v + 'px';
	this.j2p = document.getElementById("\x65\x6e\x6f\x74\x61\x2d\x68\x65\x61\x64\x65\x72\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.w0r = document.getElementById("\x65\x68\x65\x61\x64\x65\x72\x50\x61\x6e\x65\x6c"+index);
	this.f3s = document.getElementById("\x65\x6d\x6f\x76\x65\x73\x50\x61\x6e\x65\x6c"+index);

  this.h3v = document.getElementById("\x73\x74\x61\x72\x74\x45\x6e\x67\x69\x6e\x65"+index);
}

m6f()
{
	this.n7o.style.display = 'block';
	this.d9u.style.display = 'none';
	this.u0r.style.display = 'none';
	this.a5r.style.display = 'none';

	this.s7m = false;
	if (this.n7o.clientWidth <= i8a)
	{
		this.x0c();
		this.s7m = true;
	}
	else
	{
		this.u4i();
		this.l4v();
	}
  this.i4e();
	let u5a = this.index;

	this.x4i.onclick = this.s3p.bind(this);
	this.z1h.onclick = this.r5f.bind(this);
	this.d9u.onclick = this.l6k.bind(this);
	this.a1t.onclick = this.d5z.bind(this);
	this.u0r.onclick = this.n3h.bind(this);
	this.b3i.onclick = this.q6u.bind(this);
	this.h2b.onclick = this.d0k.bind(this);
  this.x0w.onclick = this.d3g.bind(this);
  this.b1z.onclick = this.h2n.bind(this);
  this.n9e.onclick = this.x0m.bind(this);
 	this.j6g.onclick = this.p9c.bind(this);
	this.h2r.onclick = this.t9q.bind(this);
 	this.f5x.onclick = this.e5b.bind(this);

  this.z6q.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.h3v.onchange = this.m2k.bind(this);

	this.p6x = new h2h(this.index);
	this.p6x.n1r.a1s.x0s(this.i2y);
	this.p6x.n1r.k8w = this.k8w;
  this.p6x.n1r.x4z(b7m);
	this.p6x.m9m.n5x.m9z = this.f4y;
	this.p6x.m9m.l0p.x1k = this.o4p;
  this.p6x.m9m.l0p.x4z(b7m);
	this.p6x.w6a.a1t = this.a1t;
	this.p6x.w6a.d9u = this.d9u;
	this.p6x.w6a.u0r = this.u0r;
	this.p6x.w6a.z1h = this.z1h;
	this.p6x.w6a.b3i = this.b3i;
 	this.p6x.g4f.l0p.x1k = this.f3s;
  this.p6x.g4f.l0p.x4z(b7m);

  this.p6x.g4f.z6q.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.d9i = new m4g(this.index);
	this.d9i.a5r = this.a5r;
	this.d9i.x5f = this.t1p;
	this.d9i.c2r = this.x9b;
	this.d9i.m6f();
	this.d9i.j1d(this.b0w);
  this.d9i.n2c = (t1p, index) => {
    this.u3t(t1p, index);
  };
	if (this.d9i.b0w.length)
	{
		this.j6s(0, 0);
	}
	else
	{
		let z2z = new j4b();
		this.p6x.j6s(null, 1, 0, z2z);
	}
}

m9e(l8j)
{
	this.l8j = l8j;
 	let j8h = this.l8j.split('\n');
	let h7w = 0;
	for (const i4r of j8h)
	{
		if (i4r.startsWith("[Event \""))
		{
			let w4n = h7w;
      let d0b = j8h.length;
   		let a1f = j8h.slice(w4n, d0b);
  		let d0c = new s1f(a1f);
	  	this.d9i.b0w[this.v8x] = d0c.f0t();
      break;
    }
    h7w++;
	}
  this.j6s(0, 0);
}

i4e()
{
	let j8h = this.l8j.split('\n');
	let j2o = [];
	let h7w = 0;
	for (const i4r of j8h)
	{
		if (i4r.startsWith("[Event \""))
		{
			j2o.push(h7w);
		}
		h7w++;
	}
	let i = 0;
	this.b0w = [];
	for (const n0u of j2o)
	{
		let w4n = n0u;
		let d0b = 0;
		if (i < j2o.length - 1)
		{
			d0b = j2o[i + 1];
		}
		else
		{
			d0b = j8h.length;
		}
		let a1f = j8h.slice(w4n, d0b);
		let d0c = new s1f(a1f);
		let z2z = d0c.f0t();
		this.b0w.push(z2z);
		i++;
	}
}

c7l()
{
	if (this.s7m || this.h7s.clientHeight <= i8a)
	{
		this.n7o.style.k4b = "\x30\x70\x78";
		this.n7o.style.h0d = "\x30\x70\x78";
		this.n7o.style.width = "\x31\x30\x30\x25";
		this.n7o.style.height = "\x38\x38\x76\x68";
	}
	else
	{
		this.n7o.style.k4b = "\x31\x70\x78\x20\x73\x6f\x6c\x69\x64\x20\x67\x72\x61\x79";
		this.n7o.style.h0d = "\x31\x70\x78\x20\x73\x6f\x6c\x69\x64\x20\x67\x72\x61\x79";
		this.n7o.style.height = "\x38\x38\x76\x68";
	}
}

g9l()
{
	this.c7l();

	this.left.style.width = "\x31\x30\x30\x25";

	let m7o = this.r9m.getBoundingClientRect();
	this.t5h.style.top = (m7o.height) + "\x70\x78";
	this.l4v();

	this.y7t();
	this.u4i();
	this.z0b();
	this.e8t();
  this.m9h()
}

z2l()
{
	this.c7l();

	let h7f = this.h7s.getBoundingClientRect();
	this.left.style.width = (h7f.width * 0.50) + "\x70\x78";
	let a1y = this.left.getBoundingClientRect();

	let m7o = this.r9m.getBoundingClientRect();
	this.t5h.style.top = (m7o.height) + "\x70\x78";
	this.l4v();

	this.w5y.style.left = (a1y.width) + "\x70\x78";
	this.w5y.style.width = (h7f.width - a1y.width) + "\x70\x78";

	this.y7t();
	this.u4i();
	this.z0b();
	this.e8t();
  this.m9h()
}

u4i()
{
}

v8h()
{
  this.r9m.style.height = '100%';
	this.q8k.appendChild(this.z7x);
 	this.j8l.appendChild(this.p7z);
  this.z7x.style.height = '100%';
  this.p7z.style.height = '100%';
	this.w5y.style.display = 'block';
}

x0c()
{
  this.r9m.style.height = '70%';
	this.n7j.appendChild(this.z7x);
  this.n7j.appendChild(this.p7z);
  this.z7x.style.height = '50%';
  this.p7z.style.height = '50%';
	this.w5y.style.display = 'none';
}

t9q(event)
{
	this.a5r.style.display = 'block';
  let m7n = this.a5r.clientHeight - this.i0n.clientHeight - this.h0r.clientHeight;
  this.p0w.style.height = m7n + "\x70\x78";
	this.z0b();
}

e5b(event)
{
 	this.a5r.style.display = 'none';
}

e8t()
{
	this.p6x.m9m.n5x.k5p();
}

m9h()
{
}

z0b()
{
  this.d9i.s9s();
}

y7t()
{
	let m7o = this.r9m.getBoundingClientRect();
	let c0q = this.p5e.getBoundingClientRect();
	this.o8y.style.height = (m7o.height - c0q.height - 1) + "\x70\x78";
	this.p6x.n1r.s9s();
}

l4v()
{
	let d4e = this.q3s.getBoundingClientRect();
	let m7o = this.r9m.getBoundingClientRect();
	let x1t = d4e.height - m7o.height;
	if (x1t < 0) x1t = 0;
	this.t5h.style.height = x1t + "\x70\x78";
}

e8i()
{
  n5n('goToPrevious'+this.index, this.v8x > 0);
  n5n('goToNext'+this.index, this.v8x < this.d9i.b0w.length - 1);
}

d4z(e)
{
	this.p6x.n1r.a1s.mouseDown(e);
}

g1n(e)
{
	this.p6x.n1r.a1s.mouseMove(e);
}

p9s(e)
{
	this.p6x.n1r.a1s.mouseUp(e);
}

i8v(e)
{
	this.p6x.n1r.a1s.touchStart(e);
}

z6u(e)
{
	this.p6x.n1r.a1s.touchMove(e);
}

r0z(e)
{
	this.p6x.n1r.a1s.touchEnd(e);
}

l6k(event)
{
	this.p6x.w6a.l6k();
}

n3h(event)
{
	this.p6x.w6a.n3h();
}

r5f(event)
{
	this.p6x.w6a.l3q();
	this.p6x.m9m.l0p.r5f();
}

q6u(event)
{
	this.p6x.w6a.l3q();
	this.p6x.m9m.l0p.q6u();
}

s3p(event)
{
	this.p6x.w6a.l3q();
	this.p6x.m9m.l0p.b0b();
}

d0k(event)
{
	this.p6x.w6a.l3q();
	this.p6x.m9m.l0p.s1t();
}

d5z(event)
{
	this.p6x.g7n();
}

a6k()
{
 	if (this.d9i.b0w.length)
  {
    this.j6s(0, 0);
  }
}

d3g(event)
{
 	if (this.v8x > 0)
  {
    this.j6s(this.v8x - 1, 0);
  }
}

h2n(event)
{
  if (this.v8x < this.d9i.b0w.length - 1)
  {
    this.j6s(this.v8x + 1, 0);
  }
}

r1o()
{
	if (this.d9i.b0w.length)
  {
    this.v8x = this.d9i.b0w.length - 1;
    this.j6s(this.d9i.b0w.length - 1, 0);
	}
}

j6s(v8x, u7q)
{
  if (v8x >= 0 && v8x <= this.d9i.b0w.length - 1)
  {
    this.v8x = v8x;
  	this.p6x.j6s(null, 1, u7q, this.d9i.b0w[this.v8x]);
  }
  this.e8i();
}

x0m(event)
{
	this.p6x.x0m();
}

b3r()
{
	this.p6x.b3r();
}

f4z()
{
	if (this.n7o.clientWidth <= i8a)
	{
		if (this.s7m)
		{
			this.g9l();
		}
		else
		{
			this.x0c();
			this.s7m = true;
			this.g9l();
		}
	}
	else
	{
		if (!this.s7m)
		{
			this.z2l();
		}
		else
		{
			this.v8h();
			this.s7m = false;
			this.z2l();
		}
	}
}

u3t(t1p, index)
{
	this.j6s(index, 0);
  this.e5b();
}

p9c(event)
{
  const a = document.createElement("\x61");
  a.style.display = "\x6e\x6f\x6e\x65";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.l8j.length - 1)
  {
    if (this.l8j[i] == '[')
    {
        break;
    }
    i++;
  }
  let l8j = this.l8j.substring(i);
  a.href = window.URL.createObjectURL(new Blob([l8j], { type: "\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e" }));
  a.setAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64", "\x67\x61\x6d\x65\x73\x2e\x70\x67\x6e");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

m2k(event)
{
  if (chess)
  {
    if (this.p6x.r9l())
    {
      this.i5l();
    }
    else
    {
      this.w5j();
    }
  }
}

i5l()
{
  this.p6x.i5l();
}

w5j()
{
  let n3g = new b0i();
  n3g.z7z.w2a = "\x53\x74\x6f\x63\x6b\x66\x69\x73\x68";
  const a5d = n3g.a5d;
  a5d.addInteger("\x4d\x75\x6c\x74\x69\x50\x56", t5a);
  a5d.addInteger("\x54\x68\x72\x65\x61\x64\x73", a6b);
  a5d.addInteger("\x48\x61\x73\x68",    b1o(k9f));
  this.p6x.w5j(n3g);
}

j4h()
{
  this.p6x.n1r.x4z(b7m);
  this.p6x.n1r.s9s();
  this.p6x.m9m.l0p.x4z(b7m);
  this.p6x.m9m.l0p.u5w();
  this.p6x.g4f.l0p.x4z(b7m);
  this.p6x.g4f.l0p.u5w();
  let z7x = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.index);
  z7x.style.c5v = h1b.c5v + 'px';
  let t6b = document.getElementById("\x65\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.index);
  t6b.style.c5v = h1b.c5v + 'px';
}

j6q()
{
  if (this.p6x.r9l())
  {
    this.i5l();
    this.w5j();
  }
}

async onSettingsClick()
{
  const i5x = new h8g();
  const { j8i } = await i5x.show();

  if (j8i === i5x.a8j)
  {
    this.j4h();
  }
}

async onEngineSettingsClick()
{
  const i5x = new w5x();
  const { j8i } = await i5x.show();

  if (j8i === i5x.a8j)
  {
    this.j6q();
  }
}

}

class h8g
{

constructor()
{
  this.a8j = 1;
  this.z4x = 0;

  this.i5x = document.getElementById("\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67");
  if (!this.i5x)
  {
    this.w2m();
  }
  this.i5x = document.getElementById("\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67");

  this.y9t = this.i5x.querySelector("\x2e\x70\x69\x65\x63\x65\x2d\x73\x65\x6c\x65\x63\x74");
  this.i7s = this.i5x.querySelector("\x2e\x63\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x2d\x63\x68\x65\x63\x6b\x62\x6f\x78");
  this.p5u = this.i5x.querySelector("\x2e\x66\x6f\x6e\x74\x2d\x73\x65\x6c\x65\x63\x74");
  this.w6z = this.i5x.querySelector("\x2e\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e");
  this.j3l = this.i5x.querySelector("\x2e\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e");

  this.w6z.onclick = this.y8a.bind(this);
 	this.j3l.onclick = this.w5k.bind(this);
}

w2m()
{
  const n9r = m0h();
  const s = `
    <i5x z7z="\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67">
      <h2>Settings</h2>

    <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
      <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Pieces:</span>
      <select class="\x70\x69\x65\x63\x65\x53\x65\x6c\x65\x63\x74\x20\x70\x69\x65\x63\x65\x2d\x73\x65\x6c\x65\x63\x74">
        ${n9r.map((x9l, i) => `
        <option e8w="\x24\x7b\x69\x7d">${x9l}</option>
        `).join('')}
      </select>
      </div>

    <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
      <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Coordinates:</span>
      <y4z type="\x63\x68\x65\x63\x6b\x62\x6f\x78" class="\x63\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x2d\x63\x68\x65\x63\x6b\x62\x6f\x78">
    </div>

    <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
      <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Notation font o7x:</span>
      <select class="\x6d\x6f\x76\x65\x73\x46\x6f\x6e\x74\x53\x69\x7a\x65\x53\x65\x6c\x65\x63\x74\x20\x66\x6f\x6e\x74\x2d\x73\x65\x6c\x65\x63\x74">
        <option e8w="\x31\x32">Small</option>
        <option e8w="\x31\x35">Default</option>
        <option e8w="\x31\x38">Medium</option>
        <option e8w="\x32\x32">Large</option>
      </select>
      </div>

      <form method="\x64\x69\x61\x6c\x6f\x67">
        <button e8w="\x6f\x6b" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e">OK</button>
        <button e8w="\x63\x61\x6e\x63\x65\x6c" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e">Cancel</button>
      </form>
    </i5x>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

y8a(event)
{
  b7m.m6w = this.y9t.e8w;
  localStorage.setItem(f8z, b7m.m6w);
  b4s(b7m.m6w);
  b7m.g6x = this.i7s.checked;
  localStorage.setItem(t5q, b7m.g6x.toString());
  h1b.c5v = this.p5u.e8w;
  localStorage.setItem(v6h, h1b.c5v);
  this.i5x.close('ok');
}

w5k(event)
{
  this.i5x.close('cancel');
}

async show()
{
  v3r = true;

  this.y9t.e8w = b7m.m6w;
  this.i7s.checked = b7m.g6x;
  this.p5u.e8w = h1b.c5v;

  const j8i = await new Promise((resolve) => {
    this.i5x.onclose = () => {
       resolve(this.i5x.returnValue === 'ok' ? this.a8j : this.z4x);
    };
    this.i5x.showModal();
  });

  v3r = false;
  return { j8i };
}

}

function y0k(j0i)
{
  const e8w = parseInt(j0i);
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
  return timeMap[e8w] || 2000; 
}

function b1o(j0i)
{
  const e8w = parseInt(j0i);
  const memoryMap = {
    1: 16,
    2: 32,
    3: 64,
    4: 128,
    5: 256,
    6: 512
  };
  return memoryMap[e8w] || 16;
}

class w5x
{

constructor()
{
  this.a8j = 1;
  this.z4x = 0;

  this.i5x = document.getElementById("\x65\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67");
  if (!this.i5x)
  {
    this.w2m();
  }
  this.i5x = document.getElementById("\x65\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67");

  this.l7y = this.i5x.querySelector("\x2e\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x73\x6c\x69\x64\x65\x72");

  this.j8r = this.i5x.querySelector("\x2e\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x76\x61\x6c\x75\x65");
  this.h1i = this.i5x.querySelector("\x2e\x6d\x75\x6c\x74\x69\x50\x56\x2d\x73\x6c\x69\x64\x65\x72");
  this.h7c = this.i5x.querySelector("\x2e\x6d\x75\x6c\x74\x69\x50\x56\x2d\x76\x61\x6c\x75\x65");
  this.s8m = this.i5x.querySelector("\x2e\x74\x68\x72\x65\x61\x64\x73\x2d\x73\x6c\x69\x64\x65\x72");
  this.j5x = this.i5x.querySelector("\x2e\x74\x68\x72\x65\x61\x64\x73\x2d\x76\x61\x6c\x75\x65");
  this.z6f = this.i5x.querySelector("\x2e\x6d\x65\x6d\x6f\x72\x79\x2d\x73\x6c\x69\x64\x65\x72");
  this.c3b = this.i5x.querySelector("\x2e\x6d\x65\x6d\x6f\x72\x79\x2d\x76\x61\x6c\x75\x65");
  this.w6z = this.i5x.querySelector("\x2e\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e");
  this.j3l = this.i5x.querySelector("\x2e\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e");

  this.w6z.onclick = this.y8a.bind(this);
 	this.j3l.onclick = this.w5k.bind(this);

  this.l7y.addEventListener('input', this.i5z.bind(this));
  this.h1i.addEventListener('input', this.l1a.bind(this));

  this.s8m.addEventListener('input', this.n9z.bind(this));

  this.z6f.addEventListener('input', this.u5u.bind(this));

}

w2m() {
  const s = `
    <i5x z7z="\x65\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67">
      <h2>k3k Settings</h2>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Search j4r</span>
        <y4z type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x31\x30" j2m="\x31" e8w="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x76\x61\x6c\x75\x65">1s</span>
      </div>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Multiple j8h</span>
        <y4z type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x6d\x75\x6c\x74\x69\x50\x56\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x35" j2m="\x31" e8w="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x6d\x75\x6c\x74\x69\x50\x56\x2d\x76\x61\x6c\x75\x65">1</span>
      </div>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Threads</span>
        <y4z type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x74\x68\x72\x65\x61\x64\x73\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x33\x32" j2m="\x31" e8w="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x74\x68\x72\x65\x61\x64\x73\x2d\x76\x61\x6c\x75\x65">1</span>
      </div>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Memory</span>
        <y4z type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x6d\x65\x6d\x6f\x72\x79\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x36" j2m="\x31" e8w="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x6d\x65\x6d\x6f\x72\x79\x2d\x76\x61\x6c\x75\x65">16MB</span>
      </div>

      <form method="\x64\x69\x61\x6c\x6f\x67">
        <button e8w="\x6f\x6b" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e">OK</button>
        <button e8w="\x63\x61\x6e\x63\x65\x6c" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e">Cancel</button>
      </form>

    </i5x>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

y8a(event)

{
  w2l = parseInt(this.l7y.e8w);
  t5a = parseInt(this.h1i.e8w);
  a6b = parseInt(this.s8m.e8w);
  k9f = parseInt(this.z6f.e8w);
  localStorage.setItem(o7d, w2l);
  localStorage.setItem(a8g, t5a);
  localStorage.setItem(u6m, a6b);
  localStorage.setItem(e1t, k9f);
  this.i5x.close('ok');
}

w5k(event)
{
  this.i5x.close('cancel');
}

i5z()
{
  const e8w = parseInt(this.l7y.e8w);
  let displayValue;

  switch (e8w)
  {
    case 1: displayValue = "\x32\x73"; break;
    case 2: displayValue = "\x34\x73"; break;
    case 3: displayValue = "\x36\x73"; break;
    case 4: displayValue = "\x38\x73"; break;
    case 5: displayValue = "\x31\x30\x73"; break;
    case 6: displayValue = "\x31\x32\x73"; break;
    case 7: displayValue = "\x31\x35\x73"; break;
    case 8: displayValue = "\x32\x30\x73"; break;
    case 9: displayValue = "\x33\x30\x73"; break;
    case 10: displayValue = "\x5c\x75\x32\x32\x31\x45"; break;
    default: displayValue = "";
  }
  this.j8r.textContent = displayValue;
}

l1a()
{
  const e8w = this.h1i.e8w;
  this.h7c.textContent = `${e8w}`;
}


n9z()
{
  const e8w = this.s8m.e8w;
  this.j5x.textContent = `${e8w}`;
}


u5u()

{
  const e8w = parseInt(this.z6f.e8w);
  let displayValue;

  switch (e8w)
  {
    case 1: displayValue = "\x31\x36\x4d\x42"; break;
    case 2: displayValue = "\x33\x32\x4d\x42"; break;
    case 3: displayValue = "\x36\x34\x4d\x42"; break;
    case 4: displayValue = "\x31\x32\x38\x4d\x42"; break;
    case 5: displayValue = "\x32\x35\x36\x4d\x42"; break;
    case 6: displayValue = "\x35\x31\x32\x4d\x42"; break;
    default: displayValue = "";
  }

  this.c3b.textContent = displayValue;
}

async show()
{
  v3r = true;

  this.l7y.e8w = w2l;
  this.h1i.e8w = t5a;
  this.s8m.e8w = a6b;
  this.z6f.e8w = k9f;

  this.i5z();
  this.l1a();
  this.n9z();
  this.u5u();

  const j8i = await new Promise((resolve) => {
    this.i5x.onclose = () => {
       resolve(this.i5x.returnValue === 'ok' ? this.a8j : this.z4x);
    };
    this.i5x.showModal();
  });

  v3r = false;
  return { j8i };
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
let v3r = false;

const i8a = 767;
let q7t = [];
let g8q = -1;
let x6h = new v2p();

let b7m = new i2p();
let h1b = new l3f();
let w2l = 1;
let t5a = 1;
let a6b = 1;
let k9f = 1;

window.onload = function()
{
  f2r();
  s7v();
  q2k();
};

document.onkeydown = b9z;

function b9z(e)
{
  if (e.f0m === "\x45\x73\x63\x61\x70\x65")
  {
    return;
  }

  if (v3r)
  {
    
    e.preventDefault();
    return;
  }

	let h7r = e || window.event;
	let f0m = h7r.keyCode;

	if (d2n) return;
	d2n = true;

	if (g8q == -1) return;

	if (e.ctrlKey)
	{
		if (f0m == 66) 
		{
				q7t[g8q].x0m();
				e.preventDefault();
				
				
				
		}
		d2n = false;
		return;
	}
	if (f0m)
	{
		
		y0s(f0m);
		e.preventDefault(); 
		
	}
	d2n = false;
}

function h0i(u5a)
{
	q7t[u5a].p6x.w6a.g8k();
}

function y0s(f0m)
{
	if (g8q == -1) return;

	if (f0m == r2j)
	{
		q7t[g8q].p6x.m9m.l0p.u5b();
	}
	else if (f0m == y1w)
	{
		q7t[g8q].p6x.m9m.l0p.m6v();
	}
	else if (f0m == z0o || f0m == p1f || f0m == t7c ||
	f0m == k9n || f0m == o7w || f0m == h8p ||
	f0m == i5q || f0m == t4p ||
	f0m == o0c || f0m == z7r)
	{
		q7t[g8q].p6x.m9m.l0p.g2q(f0m);
	}
	else if (f0m == b3a || f0m == e4i || f0m == o6y)
	{
		q7t[g8q].doFlipBoard();
	}
}

function x8l(v3s, n5o)
{
	let o9y = v3s.length;
	let g9v = 0;

	function check(n)
	{
		if (n == o9y)
		{
			n5o();
		}
	}

	for (let i = 0; i < v3s.length; ++i)
	{
    let e0n = v3s[i];
		let img = document.createElement("\x69\x6d\x67");
		img.z7z = v3s[i].replace("\x2e\x62\x6d\x70", "").replace("\x2e\x67\x69\x66", "").replace("\x2e\x6a\x70\x67", "").replace("\x2e\x70\x6e\x67", "").replace("\x2e\x73\x76\x67", "");
		x6h.add(img);
		img.addEventListener("\x6c\x6f\x61\x64", function()
		{
			g9v++;
			check(g9v);
		});
		img.src = e0n;
	}
}

function f2r()
{
 	x8l(c0a(), e3s);
  
  
}

function f4z()
{
	for (const d9p of q7t)
	{
		d9p.f4z();
	}
}

function e3s()
{
	let z4d = document.getElementsByClassName("\x74\x64\x72\x65\x70\x6c\x61\x79");
	for (const n7o of z4d)
	{
		let d9p = new t1a();
		d9p.m8z(q7t.length, n7o, n7o.innerHTML);
		d9p.m6f();
		q7t.push(d9p);
	}
	if (q7t.length)
	{
		g8q = 0;
	}
	window.addEventListener("\x72\x65\x73\x69\x7a\x65", f4z);
	f4z();
}

function n5n(w2a, o9b)
{
	let button = document.getElementById(w2a);
	if (o9b)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function l2a(button, o9b)
{
	if (o9b)
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

function q2k()
{
  const coordinatesValue = localStorage.getItem(t5q);
  if (coordinatesValue === null)
  {
    b7m.g6x = true;
  }
  else
  {
    b7m.g6x = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(f8z);
  if (piecesValue === null)
  {
    b7m.m6w = 0;
  }
  else
  {
    b7m.m6w = piecesValue;
  }
  b4s(b7m.m6w);

  const movesFontSizeValue = localStorage.getItem(v6h);
  if (movesFontSizeValue === null)
  {
    h1b.c5v = 15;
  }
  else
  {
    h1b.c5v = movesFontSizeValue;
  }

  
  const searchTime = localStorage.getItem(o7d);
  if (searchTime === null)
  {
    w2l = 10; 
  }
  else
  {
    w2l = searchTime;
  }
  const x6l = localStorage.getItem(a8g);
  if (x6l === null)
  {
    t5a = 1;
  }
  else
  {
    t5a = x6l;
  }
  const threads = localStorage.getItem(u6m);
  if (threads === null)
  {
    const logicalThreads = navigator.hardwareConcurrency || 4;
    const defaultThreads = Math.max(1, logicalThreads - 1);
    a6b = defaultThreads;
  }
  else
  {
    a6b = threads;
  }
  const memory = localStorage.getItem(e1t);
  if (memory === null)
  {
    k9f = 4; 
  }
  else
  {
    k9f = memory;
  }
}
const n6k =
[
	[ b3x.d3j, 			  	""      ],
	[ b3x.z2z,  		 		"\x67\x61\x6d\x65"  ],
	[ b3x.r5s,    		 	"\x6d\x61\x74\x63\x68" ],
	[ b3x.d1l,  	"\x74\x6f\x75\x72\x6e" ],
	[ b3x.c0u,   			"\x73\x77\x69\x73\x73" ],
	[ b3x.x1i,    	"\x6b\x2e\x6f\x2e"  ],
	[ b3x.z6t,	"\x73\x69\x6d\x75\x6c" ],
	[ b3x.e3j,	"\x73\x63\x68\x65\x76" ]
];

const i8h =
[
	[ h8z.p3p, ""        ],
	[ h8z.q7b,  "\x28\x72\x61\x70\x69\x64\x29" ],
	[ h8z.a8y,  "\x28\x62\x6c\x69\x74\x7a\x29" ],
	[ h8z.g5r,   "\x28\x63\x6f\x72\x72\x29"  ]
];

const i5y =
[
	[ s1v.d3j,     		 ""     ],
	[ s1v.z7t,       		 "\x24\x31\x34\x35" ],
	[ s1v.f4r, 		 "\x24\x31\x34\x32" ],
	[ s1v.y8d, 		 "\x24\x31\x34\x33" ],
	[ s1v.e7g, "\x24\x31\x34\x34" ],
	[ s1v.u0u,  "\x24\x31\x34\x30" ],
	[ s1v.q7l, "\x24\x31\x34\x31" ]
];

const m3c =
[
	[ m6y.d3j,     		""   ],
	[ m6y.u8f,       	"\x24\x31" ],
	[ m6y.u3m, 			  	"\x24\x32" ],
	[ m6y.x3e,	"\x24\x35" ],
	[ m6y.m5y, 		  "\x24\x36" ],
	[ m6y.b4p,  	"\x24\x33" ],
	[ m6y.g6g, 		  "\x24\x34" ],
	[ m6y.l8o, 		"\x24\x32\x32" ],
	[ m6y.u8w, 		"\x24\x38" ]
];

const r5r =
[
	[ g7e.d3j,     						""     ],
	[ g7e.i6u,      "\x24\x31\x38"  ],
	[ g7e.o9e, 					"\x24\x31\x36"  ],
	[ g7e.o5j,	"\x24\x31\x34"  ],
	[ g7e.i7r, 						"\x24\x31\x31"  ],
	[ g7e.x1p,  						"\x24\x31\x33"  ],
	[ g7e.j2j,  "\x24\x31\x35"  ],
	[ g7e.f8i, 					"\x24\x31\x37"  ],
	[ g7e.y2l, 			"\x24\x31\x39"  ],
	[ g7e.y8n,					"\x24\x34\x34"  ],
	[ g7e.w8a, 					"\x24\x31\x33\x32" ],
	[ g7e.w0b,  					"\x24\x33\x36"  ],
	[ g7e.f0d, 							"\x24\x34\x30"  ],
	[ g7e.j8j, 			  "\x24\x31\x33\x38" ],
	[ g7e.c2n,	"\x24\x33\x32"  ],
	[ g7e.h3q, 							"\x24\x31\x34\x36" ]
];

const o8h =
[
	[ m0e.d3j,     		""     ],
	[ m0e.s3i,     "\x24\x35\x31"  ],
	[ m0e.p0j, 			"\x24\x35\x32"  ],
	[ m0e.q2f,	    		"\x24\x35\x33"  ]
];

const w2q =
[
	[ v1k.j3d, 			 	""       ],
	[ v1k.p0j,   		"\x6d\x69\x64\x64\x6c\x65" ],
	[ v1k.t7x,   	   	 	"\x6c\x6f\x77"    ]
];


function m5n(y8j)
{
	return i8h[y8j][1];
}

function y9a(t7n)
{
	for (const y8j of i8h)
	{
		if (y8j[1] == t7n)
		{
			return y8j[0];
		}
	}
	return h8z.p3p;
}

function g1f(type)
{
	return n6k[type][1];
}

function v2a(t7n)
{
	for (const b1p of n6k)
	{
		if (b1p[1] == t7n)
		{
			return b1p[0];
		}
	}
	return b3x.d3j;
}

function j5w(h9e)
{
	return i5y[h9e][1];
}

function t1m(t7n)
{
	for (const h9e of i5y)
	{
		if (h9e[1] == t7n)
		{
			return h9e[0];
		}
	}
	return s1v.d3j;
}

function o0r(style)
{
	return m3c[style][1];
}

function n0s(t7n)
{
	for (const style of m3c)
	{
		if (style[1] == t7n)
		{
			return style[0];
		}
	}
	return m6y.d3j;
}

function r7s(e8w)
{
	return r5r[e8w][1];
}

function e2k(t7n)
{
	for (const e8w of r5r)
	{
		if (e8w[1] == t7n)
		{
			return e8w[0];
		}
	}
	return g7e.d3j;
}

function a3g(j0u)
{
	return o8h[j0u][1];
}

function k4c(t7n)
{
	for (const h6f of o8h)
	{
		if (h6f[1] == t7n)
		{
			return h6f[0];
		}
	}
	return m0e.d3j;
}

function x9q(t7n)
{
	return t7n.length == 0 ||
		t7n == "\x3f" ||
		t7n == "\x2d" ||
		t7n == "\x2a" ||
		t7n == "\x3f\x3f\x3f\x3f\x2e\x3f\x3f\x2e\x3f\x3f";
}

function p7s(t7n)
{
	if (x9q(t7n))
	{
		return "";
	}
	else
	{
		return t7n.trim();
	}
}

function x5s(t7n, g5b)
{
	if (x9q(t7n))
	{
		return g5b;
	}
	else
	{
		return q6d(t7n, g5b);
	}
}

function p3v(e8w)
{
	return e8w ? e8w.toString() : "";
}

function p6q(c9u)
{
	return w2q[c9u][1];
}

function k6y(t7n)
{
	for (const c9u of w2q)
	{
		if (c9u[1] == t7n)
		{
			return c9u[0];
		}
	}
	return v1k.j3d;
}

function v4y(u6r)
{
	if (!u6r)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(u6r / 60);
		let d9j = u6r % 60;
		return div.toString() + "\x2e" + d9j.toString().padStart(2, '0');
	}
}

function v9o(j8i)
{
	switch (j8i)
	{
		case x6s.i0u:
			return "\x31\x2d\x30";
		case x6s.h3x:
			return "\x31\x2f\x32\x2d\x31\x2f\x32";
		case x6s.r2x:
			return "\x30\x2d\x31";
		default:
			return "\x2a";
	}
}

function y1y(q2q)
{
	if (q2q > 0 && q2q <= 9999)
	{
		return q2q.toString().padStart(4, '0');
	}
	else
	{
		return "\x2d";
	}
}

function o3f(t4y)
{
	if (t4y.m7g())
	{
		return "\x3f\x3f\x3f\x3f\x2e\x3f\x3f\x2e\x3f\x3f";
	}
	let t7n = '';
	if (t4y.m0k)
	{
		t7n = t4y.m0k.toString().padStart(4, '0');
	}
	else
	{
		t7n = "\x3f\x3f\x3f\x3f";
	}
	t7n += "\x2e";
	if (t4y.z0y)
	{
		let r1p = t4y.z0y.toString().padStart(2, '0');
		t7n += r1p;
	}
	else
	{
		t7n += "\x3f\x3f";
	}
	t7n += "\x2e";
	if (t4y.h2i)
	{
		let k2v = t4y.h2i.toString().padStart(2, '0');;
		t7n += k2v;
	}
	else
	{
		t7n += "\x3f\x3f";
	}
	return t7n;
}

function x9m(i8s)
{
	if (x9q(i8s))
	{
		return new s5w();
	}
	else
	{
		let t4y = new s5w();
		t4y.w8k("\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64", i8s);
		return t4y;
	}
}

function b1m(i8s, d1l)
{
	d1l.j1b = (i8s.indexOf("\x74\x65\x61\x6d") != -1);
	d1l.type = b3x.d3j;
	for (const b1p of n6k)
	{
		if (i8s.indexOf(b1p[1]) != -1)
		{
			d1l.type = b1p[0];
			break;
		}
	}
	d1l.y8j = h8z.p3p;
	for (const y8j of i8h)
	{
		if (i8s.indexOf(y8j[1]) != -1)
		{
			d1l.y8j = y8j[0];
			break;
		}
	}
}

function l3v(i8s, l4x)
{
	l4x.x7e = 0;
	l4x.c2w = 0;
	let l2l = i8s.indexOf("\x2e");
	if (l2l != -1)
	{
		let y0i = i8s.substr(0, l2l);
		l4x.x7e = q6d(y0i, 0);
		let i5a = i8s.substr(l2l + 1, i8s.length);
		l2l = i5a.indexOf("\x2e");
		if (l2l != -1)
		{
			y0i = i5a.substr(0, l2l);
			l4x.c2w = q6d(y0i, 0);
		}
		else
		{
			l4x.c2w = q6d(i5a, 0);
		}
	}
	else
	{
		l4x.x7e = q6d(i8s, 0);
	}
}

function z3m(l4x)
{
	let i8s = '';
	if (l4x.c2w)
	{
		i8s = l4x.x7e.toString() + "\x2e" + l4x.c2w.toString();
	}
	else if (l4x.x7e)
	{
		i8s = l4x.x7e.toString();
	}
	return i8s;
}

function u5e(i8s)
{
	if (i8s == "\x32\x2d\x30" || i8s == "\x32\x30" || i8s == "\x31\x2d\x30" || i8s == "\x31\x30")
	{
		return x6s.i0u;
	}
	else if (i8s == "\x31\x2d\x31" || i8s == "\x31\x31" || i8s == "\x31\x2f\x32\x2d\x31\x2f\x32" ||
		i8s == "\x31\x2f\x32\x31\x2f\x32" || i8s == "\x30\x2e\x35\x2d\x30\x2e\x35")
	{
		return x6s.h3x;
	}
	else if (i8s == "\x30\x2d\x32" || i8s == "\x30\x32" || i8s == "\x30\x2d\x31" || i8s == "\x30\x31")
	{
		return x6s.r2x;
	}
	else
	{
		return x6s.d3j;
	}
}

function f3e(i8s)
{
	return q6d(i8s, 0);
}

function h8y(i8s)
{
	return q1f(i8s);
}

function y1x(i8s)
{
	return j4x(i8s);
}

function l5d(e8w)
{
	return e8w ? "\x31" : "";
}

function j4w(i8s)
{
	return i8s == "\x31";
}

function s6o(g6f)
{
	let l4x = new s2g();

	
	l4x.a0c.d8n.w2k(p7s(g6f.r3r));
	if (!x9q(g6f.j1g))
	{
		l4x.a0c.y6k.w2a = p7s(g6f.j1g);
		l4x.a0c.y6k.w0j = x5s(g6f.y2d, 0);
		if (!x9q(g6f.q1t))
		{
			let t4y = x9m(g6f.q1t);
			l4x.a0c.y6k.m0k = t4y.m0k;
		}
		l4x.a0c.y6k.l0c = j4w(g6f.o1x);
		l4x.a0c.y6k.u0n = v6w(p7s(g6f.b0a));
	}
	l4x.a0c.q2q = f3e(p7s(g6f.t9k));
	l4x.a0c.j4r = y1x(p7s(g6f.n1u));
	l4x.a0c.i3d = p7s(g6f.m8o);
	l4x.a0c.u0n = f7a(p7s(g6f.p4k));

	
	l4x.k3t.d8n.w2k(p7s(g6f.u4v));
	if (!x9q(g6f.e4c))
	{
		l4x.k3t.y6k.w2a = p7s(g6f.e4c);
		l4x.k3t.y6k.w0j = x5s(g6f.c6v, 0);
		if (!x9q(g6f.t0k))
		{
			let t4y = x9m(g6f.t0k);
			l4x.k3t.y6k.m0k = t4y.m0k;
		}
		l4x.k3t.y6k.l0c = j4w(g6f.q9b);
		l4x.k3t.y6k.u0n = v6w(p7s(g6f.j9k));
	}
	l4x.k3t.q2q = f3e(p7s(g6f.k5x));
	l4x.k3t.j4r = y1x(p7s(g6f.i8y));
	l4x.k3t.i3d = p7s(g6f.r0f);
	l4x.k3t.u0n = f7a(p7s(g6f.c3u));

	
	l4x.d1l.i3d = p7s(g6f.y6i);
	l4x.d1l.n7q = p7s(g6f.t6n);
	l4x.d1l.t7m = x9m(g6f.u9h);
	l4x.d1l.x3l = x9m(g6f.o7o);

	b1m(p7s(g6f.b1p), l4x.d1l);
	
	
	
	let b8j = y9a(g6f.b8j);
	if (b8j != h8z.p3p)
	{
		l4x.d1l.y8j = b8j;
	}
	l4x.d1l.u0n = v6w(p7s(g6f.g5s));
	l4x.d1l.x4a = x5s(g6f.u9x, 0);
	let b1p = v2a(g6f.b1p);
	if (b1p != b3x.d3j)
	{
		l4x.d1l.type= b1p;
	}
	l4x.d1l.c8h = x5s(g6f.q4g, 0);
	l4x.d1l.j1b = j4w(g6f.y1j);
	l4x.d1l.h1a = j4w(g6f.y0n);
	l4x.d1l.v3m = j4w(g6f.y1l);
	l4x.d1l.b6u = j4w(g6f.d6z);

	
	l4x.u3w.w2a = p7s(g6f.u3w);

	
	l4x.t1o.i3d = p7s(g6f.h1w);
	l4x.t1o.n0m = p7s(g6f.k1l);
	l4x.t1o.c0j = x9m(g6f.y8t);
	l4x.t1o.t4i = x5s(g6f.r4n, 0);
	l4x.t1o.a1v = x9m(g6f.y9r);
	l4x.t1o.c9u = k6y(g6f.y4f);

	
	l4x.i3d.i3d = p7s(g6f.i3d);

	
	l4x.t4y = x9m(g6f.t4y);
	l4x.j8i = u5e(p7s(g6f.j8i));
	l4x.d1t = h8y(p7s(g6f.d1t));
	l3v(p7s(g6f.x7e), l4x);

	
	let a6z = x5s(g6f.a6z, 0);
	l4x.a6z.g0i(a6z);

  
  l4x.z7z.f1p = g6f.f1p;

	return l4x;
}

function s4a(l4x)
{
	let g6f = new q7e();

	
	g6f.r3r = l4x.a0c.d8n.w2a();
	if (l4x.a0c.y6k.w2a.length)
	{
		g6f.j1g = l4x.a0c.y6k.w2a;
		if (l4x.a0c.y6k.w0j)
		{
			g6f.y2d = l4x.a0c.y6k.w0j;
		}
		if (l4x.a0c.y6k.m0k)
		{
			let z8k = new s5w();
			z8k.m0k = l4x.a0c.y6k.m0k;
			g6f.q1t = o3f(z8k);
		}
		if (l4x.a0c.y6k.l0c)
		{
			g6f.o1x = l5d(l4x.a0c.y6k.l0c);
		}
		if (l4x.a0c.y6k.u0n != r4b.d3j)
		{
			g6f.b0a = y6v(l4x.a0c.y6k.u0n);
		}
	}
	g6f.t9k = y1y(l4x.a0c.q2q);
	g6f.n1u = v4y(l4x.a0c.j4r);
	g6f.m8o = l4x.a0c.i3d;

	
	g6f.u4v = l4x.k3t.d8n.w2a();
	if (l4x.k3t.y6k.w2a.length)
	{
		g6f.e4c = l4x.k3t.y6k.w2a;
		if (l4x.k3t.y6k.w0j)
		{
			g6f.c6v = l4x.k3t.y6k.w0j;
		}
		if (l4x.k3t.y6k.m0k)
		{
			let r0j = new s5w();
			r0j.m0k = l4x.k3t.y6k.m0k;
			g6f.t0k = o3f(r0j);
		}
		if (l4x.k3t.y6k.l0c)
		{
			g6f.q9b = l5d(l4x.k3t.y6k.l0c);
		}
		if (l4x.k3t.y6k.u0n != r4b.d3j)
		{
			g6f.j9k = y6v(l4x.k3t.y6k.u0n);
		}
	}
	g6f.k5x = y1y(l4x.k3t.q2q);
	g6f.i8y = v4y(l4x.k3t.j4r);
	g6f.r0f = l4x.k3t.i3d;

	
	g6f.y6i = l4x.d1l.i3d;
	g6f.t6n = l4x.d1l.n7q;
	g6f.u9h = o3f(l4x.d1l.t7m);
	g6f.o7o = o3f(l4x.d1l.x3l);
	g6f.b8j = m5n(l4x.d1l.y8j);
	g6f.u9x = p3v(l4x.d1l.x4a);
	g6f.g5s = y6v(l4x.d1l.u0n);
	g6f.b1p = g1f(l4x.d1l.type);
	g6f.q4g = p3v(l4x.d1l.c8h);
	g6f.y1j = l5d(l4x.d1l.j1b);
	g6f.y0n = l5d(l4x.d1l.h1a);
	g6f.y1l = l5d(l4x.d1l.v3m);
	g6f.d6z = l5d(l4x.d1l.b6u);

	
	g6f.u3w = l4x.u3w.w2a;

	
	g6f.h1w = l4x.t1o.i3d;
	g6f.k1l = l4x.t1o.n0m;
	g6f.y8t = o3f(l4x.t1o.c0j);
	g6f.r4n = p3v(l4x.t1o.t4i);
	g6f.y9r = o3f(l4x.t1o.a1v);
	g6f.y4f = p6q(l4x.t1o.c9u);

	
	g6f.i3d = l4x.i3d.i3d;

	
	g6f.t4y = o3f(l4x.t4y);
	g6f.j8i = v9o(l4x.j8i);
	g6f.d1t = e5h(l4x.d1t);
	g6f.x7e = z3m(l4x);

	
	g6f.a6z = p3v(l4x.a6z.b7q());

	return g6f;
}

const l1b  					= "\x57\x68\x69\x74\x65";
const t1i					= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d";
const t2y 				= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x4e\x75\x6d\x62\x65\x72";
const e8u 					= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x59\x65\x61\x72";
const k9h 				= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x53\x65\x61\x73\x6f\x6e";
const k6a 			= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x43\x6f\x75\x6e\x74\x72\x79";
const y0f 						= "\x57\x68\x69\x74\x65\x52\x61\x74\x69\x6e\x67";
const g2g 							= "\x57\x68\x69\x74\x65\x54\x69\x6d\x65";
const r3i 							= "\x57\x68\x69\x74\x65\x45\x6c\x6f";
const s7k  						= "\x57\x68\x69\x74\x65\x54\x69\x74\x6c\x65";
const j0c						= "\x57\x68\x69\x74\x65\x43\x6f\x75\x6e\x74\x72\x79";

const g9o						= "\x42\x6c\x61\x63\x6b";
const r6w					= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d";
const b4t 				= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x4e\x75\x6d\x62\x65\x72";
const h3r 					= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x59\x65\x61\x72";
const n2k 				= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x53\x65\x61\x73\x6f\x6e";
const o4v 			= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x43\x6f\x75\x6e\x74\x72\x79";
const i2h 						= "\x42\x6c\x61\x63\x6b\x52\x61\x74\x69\x6e\x67";
const d9v 							= "\x42\x6c\x61\x63\x6b\x54\x69\x6d\x65";
const k7a 							= "\x42\x6c\x61\x63\x6b\x45\x6c\x6f";
const r1u  						= "\x42\x6c\x61\x63\x6b\x54\x69\x74\x6c\x65";
const b6o						= "\x42\x6c\x61\x63\x6b\x43\x6f\x75\x6e\x74\x72\x79";

const n5m 				= "\x45\x76\x65\x6e\x74";
const i4c				= "\x53\x69\x74\x65";
const v5g 			 	= "\x45\x76\x65\x6e\x74\x44\x61\x74\x65";
const y6u 		 	= "\x45\x76\x65\x6e\x74\x45\x6e\x64\x44\x61\x74\x65";
const o0d 			 	= "\x45\x76\x65\x6e\x74\x53\x70\x65\x65\x64";
const m3p 	 	= "\x45\x76\x65\x6e\x74\x43\x61\x74\x65\x67\x6f\x72\x79";
const h3o 		 	= "\x45\x76\x65\x6e\x74\x43\x6f\x75\x6e\x74\x72\x79";
const g7a 			 	= "\x45\x76\x65\x6e\x74\x54\x79\x70\x65";
const d5g 		 	= "\x45\x76\x65\x6e\x74\x52\x6f\x75\x6e\x64\x73";
const i1k 			 	= "\x45\x76\x65\x6e\x74\x54\x65\x61\x6d\x73";
const v2i		 	= "\x45\x76\x65\x6e\x74\x43\x6f\x6d\x70\x6c\x65\x74\x65";
const r7e 	= "\x45\x76\x65\x6e\x74\x54\x68\x72\x65\x65\x50\x6f\x69\x6e\x74\x73";
const i5s	= "\x45\x76\x65\x6e\x74\x42\x6f\x61\x72\x64\x50\x6f\x69\x6e\x74\x73";

const m9t 							= "\x41\x6e\x6e\x6f\x74\x61\x74\x6f\x72";

const y4u 				 		= "\x53\x6f\x75\x72\x63\x65\x54\x69\x74\x6c\x65";
const q5d 				 		= "\x50\x75\x62\x6c\x69\x63\x61\x74\x69\x6f\x6e";
const q8r		 		= "\x53\x6f\x75\x72\x63\x65\x50\x75\x62\x6c\x69\x73\x68\x65\x72";
const t2o		 		= "\x50\x75\x62\x6c\x69\x63\x61\x74\x69\x6f\x6e\x44\x61\x74\x65";
const s6j 				 		= "\x53\x6f\x75\x72\x63\x65\x44\x61\x74\x65";
const u1m 		= "\x53\x6f\x75\x72\x63\x65\x56\x65\x72\x73\x69\x6f\x6e\x4e\x75\x6d\x62\x65\x72";
const y6q 	 		= "\x53\x6f\x75\x72\x63\x65\x56\x65\x72\x73\x69\x6f\x6e\x44\x61\x74\x65";
const o2e 			 		= "\x53\x6f\x75\x72\x63\x65\x51\x75\x61\x6c\x69\x74\x79";

const b8y 					 		    = "\x54\x69\x74\x6c\x65";

const i8u 							 		= "\x44\x61\x74\x65";
const f7t 								= "\x52\x65\x73\x75\x6c\x74";
const v3q 										= "\x45\x43\x4f";
const i6y 									= "\x52\x6f\x75\x6e\x64";

const j1j			 							= "\x54\x61\x67\x73";

const j6v 									= "\x53\x65\x74\x75\x70";
const t1k 										= "\x46\x45\x4e";
const e0p 							= "\x50\x6c\x79\x43\x6f\x75\x6e\x74";

const s1u      							= "\x47\x55\x49\x44";

const i8p = "\x28";
const f1r   = "\x29";
const r9x    = "\x7b";

class p3z
{

constructor()
{
  this.k0o = new u6i();
  this.w7x = new s2q();
  this.z6c = new e4e();
  this.j9m = false;
  this.x6n = false;
  this.o3k = false;
  this.u9p = '';
}

}

class s1f
{

constructor(j8h)
{
	this.d0r = new q7e();
	this.x7o = j8h;
	this.h1d = 0;
	this.z0x = '';
	this.x3m = 0;
	this.j8a = 0;
	this.a6m = '';
	this.q1b = 0;
	this.e2y = false;
	this.b6d = '';
	this.w4a = '';
	this.u0z = null;
	this.c4y = new b7h();
	this.s0m = '';
	this.v5d = false;
 	this.o1a = false;
	this.s7j = false;
}

f0t()
{
  this.q1b = 0;
	let z2z = new j4b();
	this.u0z = z2z.r7v;
	try
	{
		this.y1k();
	}
	catch (err)
	{
	}
	z2z.c8b = s6o(this.d0r);
  z2z.j5p = this.q1b;
	return z2z;
}

y1k()
{
	this.e2y = false;
	this.t3j();
	if (this.e2y)
	{
		this.z3e = j7z(this.w4a);
		this.u0z.h5l(this.z3e, 1);
	}
 	this.o1f();
}

b8v()
{
	if (this.x7o.length == 0)
	{
		return false;
	}
	if (this.h1d >= this.x7o.length)
	{
		return false;
	}
	else
	{
		this.z0x = this.x7o[this.h1d];
		this.x3m = this.z0x.length;
		this.j8a = 0;
		this.h1d++;
		return true;
	}
}

t3j()
{
	this.s7j = false;
	this.o1a = false;
	while (true)
	{
		if (!this.b8v())
		{
			return;
		}
		this.h6b();
		if (!this.v4i())
		{
			return;
		}
		this.r1z();
	}
}


t4d(g3r)
{
	let i8s = this.a6m.substr(1, this.a6m.length - 1);
	return i8s.toUpperCase() === g3r.toUpperCase();
}

o1f()
{
 	if (this.a6m.length == 0) return;
	this.v5d = false;

	while (this.a6m[0] == '{')
	{
		let c9e = this.j3m();
    let d4d = new p3z();
		this.w9s(c9e, d4d);
    if (!d4d.k0o.m7g())
		{
			this.u0z.p8t(d4d.k0o);
		}
 		if (!d4d.w7x.m7g())
		{
			this.u0z.b2m(d4d.w7x);
		}
		if (!d4d.z6c.m7g())
		{
			this.u0z.j3x(d4d.z6c);
		}
 		c9e = d4d.u9p.trim();
    if (c9e.length)
    {
      
      
      if (c9e.startsWith("\x5b\x25\x61") && c9e.length > 7)
      {
        c9e = c9e.substr(7, c9e.length).trim();
      }
      let n5t = this.u0z.n5t();
      if (n5t.length)
      {
        n5t += ' ';
      }
      n5t += c9e;
      this.u0z.e7e(n5t);
		}
		this.h6b();
		if (this.a6m.length == 0)
		{
			return;
		}
	}
	this.j0l(this.u0z.h6c(), this.u0z.z3e());
}

j0l(s6d, c7s)
{
  let l2l = s6d.z0k();
  let k5l = c7s.z0k();

	let k2c = null;
 	let w1l = new l2d();

	do
	{
		if (this.a6m == i8p)
		{
			if (!k2c)
			{
				throw "\x65\x72\x72\x6f\x72";
			}
			if (!this.h6b())
			{
				throw "\x65\x72\x72\x6f\x72";
			}

 			k5l.z2n(l2l.b8i.k2j());
			k5l.y0b(w1l);
			this.u0z.z2n(l2l); 
      this.j0l(l2l, k5l);
			this.u0z.c7b(l2l); 
			k5l.c7b(l2l.b8i.k2j());

			while (this.h6b())
			{
				if (this.a6m != i8p)
				{
					break;
				}
				if (!this.h6b())
				{
					throw "\x65\x72\x72\x6f\x72";
				}
        k5l.z2n(l2l.b8i.k2j());
				k5l.y0b(w1l);
				this.u0z.z2n(l2l); 
				this.j0l(l2l, k5l);
				this.u0z.c7b(l2l);  
				k5l.c7b(l2l.b8i.k2j());
			}
		}

		if (this.a6m == f1r)
		{
			break;
		}

		if (
			this.a6m == "\x31\x2d\x30" ||
			this.a6m == "\x32\x2d\x30" ||
			this.a6m == "\x30\x2d\x31" ||
			this.a6m == "\x30\x2d\x32" ||
			this.a6m == "\x31\x2f\x32\x2d\x31\x2f\x32" ||
			this.a6m == "\x31\x2d\x31" ||
			this.a6m == "\x2a" ||
			this.a6m == "\x2a\x2a" ||
			this.a6m == "\x2d\x2a" ||
			this.a6m == "\x31\x2d\x30\x2a" ||
			this.a6m == "\x32\x2d\x30\x2a" ||
			this.a6m == "\x30\x2d\x31\x2a" ||
			this.a6m == "\x30\x2d\x32\x2a" ||
			this.a6m == "\x31\x2f\x32\x2d\x31\x2f\x32\x2a" ||
			this.a6m == "\x31\x2d\x31\x2a" ||
			this.a6m == "\x32\x2d\x30\x30\x2a" ||
			this.a6m == "\x30\x30\x2d\x32\x2a")
			break;

		if (this.a6m[0] == '$')
		{
			if (!k2c)
			{
				throw "\x65\x72\x72\x6f\x72";
			}
			let h9e = t1m(this.a6m);
			if (h9e != s1v.d3j)
			{
				k2c.g2o(h9e);
				continue;
			}
			let style = n0s(this.a6m);
			if (style != m6y.d3j)
			{
				k2c.v7d(style);
				continue;
			}
			let e8w = e2k(this.a6m);
			if (e8w != g7e.d3j)
			{
				k2c.i7g(e8w);
				continue;
			}
			let j0u = k4c(this.a6m);
			if (j0u != m0e.d3j)
			{
				k2c.s4i(j0u);
				continue;
			}
			continue;
		}
		if (this.a6m[0] == '{')
		{
			let c9e = this.j3m();
      let d4d = new p3z();
  		this.w9s(c9e, d4d);
      if (!d4d.k0o.m7g())
      {
		  	if (k2c)
			  {
				  k2c.o2w(d4d.k0o);
				}
			}
   		if (!d4d.w7x.m7g())
      {
				if (k2c)
				{
					k2c.r8y(d4d.w7x);
				}
			}
   		if (!d4d.z6c.m7g())
      {
				if (k2c)
				{
					k2c.p8c(d4d.z6c);
				}
			}
      if (d4d.x6n)
      {
				if (k2c)
				{
					k2c.k7n();
				}
			}
      if (d4d.o3k)
      {
				if (k2c)
				{
					k2c.j0j();
				}
			}
   		c9e = d4d.u9p.trim();
      if (!c9e.length)
      {
        continue;
      }
			if (k2c)
			{
        let j7d = k2c.j7d();
        if (j7d.length)
        {
          j7d += ' ';
        }
        j7d += c9e;
				k2c.i9b(j7d);
			}
			else
			{
        if (this.s0m.length)
        {
   				this.s0m += ' ';
        }
				this.s0m += c9e;
				this.v5d = true;
			}
			continue;
		}
		if (!this.j7y())
		{
			continue;
		}
		let u2i = false;
		if (this.a6m[this.a6m.length] == '*')
		{
			this.a6m = this.a6m.substr(0, this.a6m.length - 1);
			u2i = true;
		}
 		let j9o = this.u7u(this.a6m);
    let k2j = a5l(k5l, this.a6m);
 		w1l = k5l.w1l();
		k5l.c7b(k2j);
		let b8i = n8w(k2j);
    b8i.v7d(j9o);
    this.u0z.f9g(l2l, b8i);
		k2c = l2l.b8i;
		if (this.v5d)
		{
			k2c.i9l(this.s0m);
			this.v5d = false;
      this.s0m = '';
		}
		if (u2i)
		{
			break;
		}
	} while (this.h6b());
}

u7u(i8s)
{
	if (i8s.endsWith("\x3f\x3f"))
	{
		i8s = i8s.subString(0, i8s.length-2);
		return m6y.g6g;
	}
	else if (i8s.endsWith("\x21\x21"))
	{
		i8s = i8s.subString(0, i8s.length-2);
		return m6y.b4p;
	}
	else if (i8s.endsWith("\x3f\x21"))
	{
		i8s = i8s.subString(0, i8s.length-2);
		return m6y.m5y;
	}
	else if (i8s.endsWith("\x21\x3f"))
	{
		i8s = i8s.subString(0, i8s.length-2);
		return m6y.x3e;
	}
	else if (i8s.endsWith("\x3f"))
	{
		i8s = i8s.subString(0, i8s.length-1);
		return m6y.u3m;
	}
	else if (i8s.endsWith("\x21"))
	{
		i8s = i8s.subString(0, i8s.length-1);
		return m6y.u8f;
	}
	else
	{
		return m6y.d3j;
	}
}

j7y()
{
	let u1g = this.a6m.length;
	let l2l = -1;
	for (let i = 0; i < u1g; i++)
	{
		if (this.a6m[i] == '.')
		{
			l2l = i;
		}
	}
	if (l2l != -1)
	{
		this.a6m = this.a6m.substr(l2l + 1 , u1g);
	}
	return this.a6m.length != 0;
}

h6b()
{
	this.a6m = "";
	let n6f = '';
	let index = 0;
	let u1g = 0;
	while (true)
	{
		let y1n = 0;
		if (this.j8a < this.x3m)
		{
			y1n = this.z0x[this.j8a];
		}
		else
		{
			y1n = 0;
		}
		if (!y1n)
		{
			if (u1g)
			{
				break;
			}
			if (!this.b8v())
			{
				return false;
			}
			continue;
		}
		if (y1n == ';')
		{
			if (!this.b8v())
			{
				return false;
			}
			continue;
		}
		if (y1n == '(')
		{
			if (u1g)
			{
				break;
			}
			else
			{
				this.j8a++;
				this.a6m = i8p;
				return true;
			}
		}
		if (y1n == ')')
		{
			if (u1g)
			{
				break;
			}
			else
			{
				this.j8a++;
				this.a6m = f1r;
				return true;
			}
		}
		if (y1n == '{')
		{
			if (u1g)
			{
				break;
			}
			else
			{
				this.j8a++;
				this.a6m = r9x;
				return true;
			}
		}
		if (y1n == ' ' || y1n == '\r' || y1n == '\n')
		{
			if (u1g)
			{
				this.j8a++;
				break;
			}
			else
			{
				this.j8a++;
				continue;
			}
		}
		n6f += y1n;
		index++;
		u1g++;
		this.j8a++;
	}
	if (index)
	{
		this.a6m += n6f;
	}
	return this.a6m.length != 0;
}

j3m()
{
	let i8s = '';
	let n6f = '';
	let index = 0;
	let y5b = 0;
	while (true)
	{
		let y1n = 0;
		if (this.j8a < this.x3m)
		{
			y1n = this.z0x[this.j8a];
		}
		else
		{
			y1n = 0;
		}
		if (!y1n)
		{
			if (!this.b8v())
			{
				break;
			}
			if (index > 0)
			{
				n6f += ' '; 
				index++;
			}
			continue;
		}
		if (y1n == '{')
		{
			y5b++;
		}
		if (y1n == '}')
		{
			if (y5b)
			{
				y5b--;
			}
			else
			{
				this.j8a++;
				break;
			}
		}
		n6f += y1n;
		index++;
		this.j8a++;
	}
	if (index)
	{
		i8s += n6f;
	}
	return i8s.trim();
}

r2u()
{
	this.b6d = "";

	let q4h = 0;
	let u1g = this.z0x.length;
	for (let i = u1g - 1; i >= 0; i--)
	{
		if (this.z0x[i] == ']')
		{
			q4h = i;
			break;
		}
	}
	let index = 0;
	let a5z = false;
	let n6f = '';
	while (true)
	{
		let y1n = 0;
		if (this.j8a < this.x3m)
		{
			y1n = this.z0x[this.j8a];
		}
		else
		{
			y1n = 0;
		}
		if (!y1n)
		{
			if (!this.b8v())
			{
				break;
			}
			continue;
		}
		if (y1n == '\"')
		{
			a5z = true;
			this.j8a++;
			continue;
		}
		if (y1n == ']')
		{
			if (this.j8a == q4h)
			{
				this.j8a++;
				break;
			}
		}
		if (a5z)
		{
			n6f += y1n;
			index++;
		}
		this.j8a++;
	}
	if (index)
	{
		this.b6d += n6f;
	}
}

v4i()
{
	if (this.a6m.length == 0)
	{
		return false;
	}
	if (this.a6m[0] != '[')
	{
		return false;
	}
	
	let index = this.j8a;
	let o3d = false;
	while (index < this.x3m)
	{
		let y1n = this.z0x[index++];
		if (y1n == '\"' && this.z0x[index] == ']')
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

r1z()
{
	
	if (this.t4d(l1b))
	{
		this.r2u();
		this.d0r.r3r = this.b6d;
		return;
	}
	if (this.t4d(t1i))
	{
		this.r2u();
		this.d0r.j1g = this.b6d;
		return;
	}
	if (this.t4d(t2y))
	{
		this.r2u();
		this.d0r.y2d = this.b6d;
		return;
	}
	if (this.t4d(e8u))
	{
		this.r2u();
		this.d0r.q1t = this.b6d;
		return;
	}
	if (this.t4d(k9h))
	{
		this.r2u();
		this.d0r.o1x = this.b6d;
		return;
	}
	if (this.t4d(k6a))
	{
		this.r2u();
		this.d0r.b0a = this.b6d;
		return;
	}
	if (this.t4d(r3i) || this.t4d(y0f))
	{
		this.r2u();
		this.d0r.t9k = this.b6d;
		return;
	}
	if (this.t4d(g2g))
	{
		this.r2u();
		this.d0r.n1u = this.b6d;
		return;
	}
	if (this.t4d(s7k))
	{
		this.r2u();
		this.d0r.m8o = this.b6d;
		return;
	}
	if (this.t4d(j0c))
	{
		this.r2u();
		this.d0r.p4k = this.b6d;
		return;
	}

	
	if (this.t4d(g9o))
	{
		this.r2u();
		this.d0r.u4v = this.b6d;
		return;
	}
	if (this.t4d(r6w))
	{
		this.r2u();
		this.d0r.e4c = this.b6d;
		return;
	}
	if (this.t4d(b4t))
	{
		this.r2u();
		this.d0r.c6v = this.b6d;
		return;
	}
	if (this.t4d(h3r))
	{
		this.r2u();
		this.d0r.t0k = this.b6d;
		return;
	}
	if (this.t4d(n2k))
	{
		this.r2u();
		this.d0r.q9b = this.b6d;
		return;
	}
	if (this.t4d(o4v))
	{
		this.r2u();
		this.d0r.j9k = this.b6d;
		return;
	}
	if (this.t4d(k7a) || this.t4d(i2h))
	{
		this.r2u();
		this.d0r.k5x = this.b6d;
		return;
	}
	if (this.t4d(d9v))
	{
		this.r2u();
		this.d0r.i8y = this.b6d;
		return;
	}
	if (this.t4d(r1u))
	{
		this.r2u();
		this.d0r.r0f = this.b6d;
		return;
	}
	if (this.t4d(b6o))
	{
		this.r2u();
		this.d0r.c3u = this.b6d;
		return;
	}

	
	if (this.t4d(n5m))
	{
		this.r2u();
		this.d0r.y6i = this.b6d;
		return;
	}
	if (this.t4d(i4c))
	{
		this.r2u();
		this.d0r.t6n = this.b6d;
		return;
	}
	if (this.t4d(v5g))
	{
		this.r2u();
		this.d0r.u9h = this.b6d;
		return;
	}
	if (this.t4d(y6u))
	{
		this.r2u();
		this.d0r.o7o = this.b6d;
		return;
	}
	if (this.t4d(o0d))
	{
		this.r2u();
		this.d0r.b8j = this.b6d;
		return;
	}
	if (this.t4d(m3p))
	{
		this.r2u();
		this.d0r.u9x = this.b6d;
		return;
	}
	if (this.t4d(h3o))
	{
		this.r2u();
		this.d0r.g5s = this.b6d;
		return;
	}
	if (this.t4d(g7a))
	{
		this.r2u();
		this.d0r.b1p = this.b6d;
		return;
	}
	if (this.t4d(d5g))
	{
		this.r2u();
		this.d0r.q4g = this.b6d;
		return;
	}
	if (this.t4d(i1k))
	{
		this.r2u();
		this.d0r.y1j = this.b6d;
		return;
	}
	if (this.t4d(v2i))
	{
		this.r2u();
		this.d0r.y0n = this.b6d;
		return;
	}
	if (this.t4d(r7e))
	{
		this.r2u();
		this.d0r.y1l = this.b6d;
		return;
	}
	if (this.t4d(i5s))
	{
		this.r2u();
		this.d0r.d6z = this.b6d;
		return;
	}

	
	if (this.t4d(m9t))
	{
		this.r2u();
		this.d0r.u3w = this.b6d;
		return;
	}

	
	if (this.t4d(y4u))
	{
		this.r2u();
		this.d0r.h1w = this.b6d;
		return;
	}
	if (this.t4d(q5d))
	{
		this.r2u();
		this.d0r.h1w = this.b6d;
		return;
	}
	if (this.t4d(q8r))
	{
		this.r2u();
		this.d0r.k1l = this.b6d;
		return;
	}
	if (this.t4d(s6j))
	{
		this.r2u();
		this.d0r.y8t = this.b6d;
		return;
	}
	if (this.t4d(t2o))
	{
		this.r2u();
		this.d0r.y8t = this.b6d;
		return;
	}
	if (this.t4d(u1m))
	{
		this.r2u();
		this.d0r.r4n = this.b6d;
		return;
	}
	if (this.t4d(y6q))
	{
		this.r2u();
		this.d0r.y9r = this.b6d;
		return;
	}
	if (this.t4d(o2e))
	{
		this.r2u();
		this.d0r.y4f = this.b6d;
		return;
	}

	
	if (this.t4d(b8y))
	{
		this.r2u();
		this.d0r.i3d = this.b6d;
		return;
	}

	
	if (this.t4d(i8u))
	{
		this.r2u();
		this.d0r.t4y = this.b6d;
		return;
	}
	if (this.t4d(f7t))
	{
		this.r2u();
		this.d0r.j8i = this.b6d;
		return;
	}
	if (this.t4d(v3q))
	{
		this.r2u();
		this.d0r.d1t = this.b6d;
		return;
	}
	if (this.t4d(i6y))
	{
		this.r2u();
		this.d0r.x7e = this.b6d;
		return;
	}

	
	if (this.t4d(j1j))
	{
		this.r2u();
		this.d0r.a6z = this.b6d;
		return;
	}

	
	if (this.t4d(j6v))
	{
		this.r2u();
		return;
	}
	if (this.t4d(t1k))
	{
		this.r2u();
		if (this.b6d.length == 0 || this.b6d == "\x3f")
		{
			return;
		}
		this.e2y = true;
		this.w4a = this.b6d;
		return;
	}
	if (this.t4d(e0p))
	{
		this.r2u();
		this.q1b = q6d(this.b6d, 0);
		return;
	}
  
 	if (this.t4d(s1u))
	{
		this.r2u();
		this.d0r.f1p = this.b6d;
		return;
	}

}

y2t(c9e)
{
	let s0l = new u6i();
	let i8s = c9e.substr(6, c9e.length - 6);
	let m0d = i8s.split("\x2c");
	for (const s of m0d)
	{
		if (s.length < 5)
		{
			continue;
		}
		let g9q = j4y(s.substr(1, 2));
		let y4i = j4y(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let e2g = u6x(g9q, y4i, n6q.f0d);
			s0l.add(e2g);
		}
		else if (s[0] == 'G')
		{
			let e2g = u6x(g9q, y4i, n6q.j8p);
			s0l.add(e2g);
		}
		else if (s[0] == 'Y')
		{
			let e2g = u6x(g9q, y4i, n6q.g9u);
			s0l.add(e2g);
		}
	}
	return s0l;
}

m8s(c9e)
{
	let s8s = new s2q();
	let i8s = c9e.substr(6, c9e.length - 6);
	let m0d = i8s.split("\x2c");
	for (const s of m0d)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let e5o = j4y(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let k0l = x5n(e5o, o3t.s8e);
			s8s.add(k0l);
		}
		else if (s[0] == 'G')
		{
      let k0l = x5n(e5o, o3t.p6l);
			s8s.add(k0l);
		}
		else if (s[0] == 'Y')
		{
      let k0l = x5n(e5o, o3t.l0i);
			s8s.add(k0l);
		}
	}
	return s8s;
}

p9b(c9e)
{
	let i8s = c9e.substr(6, c9e.length - 6);
	let l2l = i8s.indexOf("\x5d");
	if (l2l != -1)
	{
		let z6c = new e4e();
		let e8w = q6d(i8s.substr(0, l2l), 0);
		z6c.g0i(e8w);
		return z6c;
	}
	else
	{
		return new e4e();
	}
}


w9s(c9e, d4d)
{
	if (
		c9e.startsWith("\x5b\x25\x63\x61\x6c") ||
    c9e.startsWith("\x5b\x25\x63\x73\x62") ||
		c9e.startsWith("\x5b\x25\x63\x73\x6c") ||
		c9e.startsWith("\x5b\x25\x6d\x64\x6c") ||
		c9e.startsWith("\x5b\x25\x65\x76\x70") ||
		c9e.startsWith("\x5b\x25\x65\x76\x61\x6c") ||
		c9e.startsWith("\x5b\x25\x65\x6d\x74") ||
		c9e.startsWith("\x5b\x25\x74\x71\x75") ||
		c9e.startsWith("\x5b\x25\x74\x71\x75") ||
		c9e.startsWith("\x5b\x25\x70\x77\x73") ||
		c9e.startsWith("\x5b\x25\x70\x74\x68") ||
		c9e.startsWith("\x5b\x25\x65\x6f\x67"))
	{
		let w6f = 0;
		{
     	let g5y = c9e.indexOf("\x5b\x25\x63\x61\x6c");
			if (g5y != -1)
			{
        let a2u = c9e.indexOf("\x5d", g5y);
				if (a2u != -1)
				{
     			let d8o = c9e.substring(g5y, a2u + 1);
					d4d.k0o = this.y2t(d8o).z0k();
					if (a2u > w6f) w6f = a2u;
				}
			}
		}
		{
     	let g5y = c9e.indexOf("\x5b\x25\x63\x73\x62");
   		if (g5y != -1)
			{
        let a2u = c9e.indexOf("\x5d", g5y);
				if (a2u != -1)
				{
          let g0o = c9e.substring(g5y, a2u + 1);
					d4d.w7x = this.m8s(g0o).z0k();
					if (a2u > w6f) w6f = a2u;
				}
			}
		}
		{
      let g5y = c9e.indexOf("\x5b\x25\x63\x73\x6c");
			if (g5y != -1)
			{
        let a2u = c9e.indexOf("\x5d", g5y);
				if (a2u != -1)
				{
          let g0o = c9e.substring(g5y, a2u + 1);
					d4d.w7x = this.m8s(g0o).z0k();
					if (a2u > w6f) w6f = a2u;
				}
			}
		}
		{
      let g5y = c9e.indexOf("\x5b\x25\x6d\x64\x6c");
			if (g5y != -1)
			{
        let a2u = c9e.indexOf("\x5d", g5y);
				if (a2u != -1)
				{
          let a7x = c9e.substring(g5y, a2u + 1);
					d4d.z6c = this.p9b(a7x).z0k();
					if (a2u > w6f) w6f = a2u;
				}
			}
		}
		{
      let g5y = c9e.indexOf("\x5b\x25\x65\x76\x70");
			if (g5y != -1)
			{
        let a2u = c9e.indexOf("\x5d", g5y);
				if (a2u != -1)
				{
					if (a2u > w6f) w6f = a2u;
				}
			}
		}
		{
      let g5y = c9e.indexOf("\x5b\x25\x65\x76\x61\x6c");
			if (g5y != -1)
			{
        let a2u = c9e.indexOf("\x5d", g5y);
				if (a2u != -1)
				{
					if (a2u > w6f) w6f = a2u;
				}
			}
		}
		{
      let g5y = c9e.indexOf("\x5b\x25\x65\x6d\x74");
			if (g5y = -1)
			{
        let a2u = c9e.indexOf("\x5d", g5y);
				if (a2u != -1)
				{
					if (a2u > w6f) w6f = a2u;
				}
			}
		}
		{
      let g5y = c9e.indexOf("\x5b\x25\x74\x71\x75");
			if (g5y != -1)
			{
        let a2u = c9e.indexOf("\x5d", g5y);
				if (a2u != -1)
				{
					if (a2u > w6f) w6f = a2u;
				}
			}
		}
		{
      let g5y = c9e.indexOf("\x5b\x25\x70\x77\x73");
			if (g5y != -1)
			{
        let a2u = c9e.indexOf("\x5d", g5y);
				if (a2u != -1)
				{
          d4d.j9m = true;
					if (a2u > w6f) w6f = a2u;
				}
			}
		}
		{
      let g5y = c9e.indexOf("\x5b\x25\x70\x74\x68");
			if (g5y != -1)
			{
        let a2u = c9e.indexOf("\x5d", g5y);
				if (a2u != -1)
				{
          d4d.x6n = true;
					if (a2u > w6f) w6f = a2u;
				}
			}
		}
		{
      let g5y = c9e.indexOf("\x5b\x25\x65\x6f\x67");
			if (g5y != -1)
			{
        let a2u = c9e.indexOf("\x5d", g5y);
				if (a2u != -1)
				{
					d4d.o3k = true; 
					if (a2u > w6f) w6f = a2u;
				}
			}
		}
    d4d.u9p = c9e.substring(w6f + 1);
	}
	else
	{
		d4d.u9p = c9e;
	}
}

}

class r1s
{

constructor()
{
  this.j5p = 0;
	this.c8b = new q7e();
	this.r7v = new g5i();
}

z0k()
{
	let g8g = new r1s();
  g8g.j5p = this.j5p;
	g8g.c8b = this.c8b.z0k();
	g8g.r7v = this.r7v.z0k();
	return g8g;
}

}

class q7e
{

constructor()
{
	this.r3r = '';
	this.j1g = '';
	this.y2d = '';
	this.q1t = '';
	this.o1x = '';
	this.b0a = '';
	this.t9k = '';
	this.n1u = '';
	this.m8o = '';
  this.p4k = '';
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
	this.y6i = '';
	this.t6n = '';
	this.u9h = '';
	this.o7o = '';
	this.b8j = '';
	this.u9x = '';
	this.g5s = '';
	this.b1p = '';
	this.q4g = '';
	this.y1j = '';
	this.y0n = '';
	this.y1l = '';
	this.d6z = '';
	this.u3w = '';
	this.h1w = '';
	this.k1l = '';
	this.y8t = '';
	this.r4n = '';
	this.y9r = '';
	this.y4f = '';
	this.i3d = '';
	this.t4y = '';
	this.j8i = '';
	this.d1t = '';
	this.x7e = '';
	this.a6z = '';
  this.f1p = '';
}

z0k()
{
	let k3i = new q7e();

	k3i.r3r = this.r3r;
	k3i.j1g = this.j1g;
	k3i.y2d = this.y2d;
	k3i.q1t = this.q1t;
	k3i.o1x = this.o1x;
	k3i.b0a = this.b0a;
	k3i.t9k = this.t9k;
	k3i.n1u = this.n1u;
	k3i.m8o = this.m8o;
	k3i.p4k = this.p4k;

	k3i.u4v = this.u4v;
	k3i.e4c = this.e4c;
	k3i.c6v = this.c6v;
	k3i.t0k = this.t0k;
	k3i.q9b = this.q9b;
	k3i.j9k = this.j9k;
	k3i.k5x = this.k5x;
	k3i.i8y = this.i8y;
	k3i.r0f = this.r0f;
	k3i.c3u = this.c3u;

	k3i.y6i = this.y6i;
	k3i.t6n = this.t6n;
	k3i.u9h = this.u9h;
	k3i.o7o = this.o7o;
	k3i.b8j = this.b8j;
	k3i.u9x = this.u9x;
	k3i.g5s = this.g5s;
	k3i.b1p = this.b1p;
	k3i.q4g = this.q4g;
	k3i.y1j = this.y1j;
	k3i.y0n = this.y0n;
	k3i.y1l = this.y1l;
	k3i.d6z = this.d6z;

	k3i.u3w = this.u3w;

	k3i.h1w = this.h1w;
	k3i.k1l = this.k1l;
	k3i.y8t = this.y8t;
	k3i.r4n = this.r4n;
	k3i.y9r = this.y9r;
	k3i.y4f = this.y4f;

	k3i.i3d = this.i3d;

	k3i.t4y = this.t4y;
	k3i.j8i = this.j8i;
	k3i.d1t = this.d1t;
	k3i.x7e = this.x7e;

	k3i.a6z = this.a6z;
 	k3i.f1p = this.f1p;

	return k3i;
}

}


const m5s =
[
		[ r4b.d3j, 				  									"",											            "", 																	"",   ""    ],
		[ r4b.q4o, 										  "\x41\x66\x67\x68\x61\x6e\x69\x73\x74\x61\x6e",											"\x41\x66\x67\x68\x61\x6e\x69\x73\x74\x61\x6e", 												"\x61\x66", "\x41\x46\x47" ],
		[ r4b.q2r, 									 	"\x41\x6c\x61\x6e\x64\x49\x73\x6c\x61\x6e\x64\x73",										  "\x41\x6c\x61\x6e\x64", 															"\x61\x78", "\x41\x4c\x41" ],
		[ r4b.q4b,  											 	"\x41\x6c\x62\x61\x6e\x69\x61",													"\x41\x6c\x62\x61\x6e\x69\x61", 														"\x61\x6c", "\x41\x4c\x42" ],
		[ r4b.m6p,  											 	"\x41\x6c\x67\x65\x72\x69\x61",													"\x41\x6c\x67\x65\x72\x69\x61", 														"\x64\x7a", "\x44\x5a\x41" ],
		[ r4b.c1j,  								 	"\x41\x6d\x65\x72\x69\x63\x61\x6e\x53\x61\x6d\x6f\x61",										"\x41\x6d\x65\x72\x69\x63\x61\x6e\x20\x53\x61\x6d\x6f\x61", 										"\x61\x73", "\x41\x53\x4d" ],
		[ r4b.d8k,  											 	"\x41\x6e\x64\x6f\x72\x72\x61",													"\x41\x6e\x64\x6f\x72\x72\x61", 														"\x61\x64", "\x41\x4e\x44" ],
		[ r4b.h9i,                           "\x41\x6e\x67\x6f\x6c\x61",													  "\x41\x6e\x67\x6f\x6c\x61", 														"\x61\x6f", "\x41\x47\x4f" ],
		[ r4b.o7h,  											  "\x41\x6e\x67\x75\x69\x6c\x6c\x61",												  "\x41\x6e\x67\x75\x69\x6c\x6c\x61", 													"\x61\x69", "\x41\x49\x41" ],
		[ r4b.i3w,  										  "\x41\x6e\x74\x61\x72\x63\x74\x69\x63\x61",											  "\x41\x6e\x74\x61\x72\x63\x74\x69\x63\x61", 												"\x61\x71", "\x41\x54\x41" ],
		[ r4b.e9k,  								  "\x41\x6e\x74\x69\x67\x75\x61\x42\x61\x72\x62\x75\x64\x61",									  "\x41\x6e\x74\x69\x67\x75\x61\x20\x26\x20\x42\x61\x72\x62\x75\x64\x61", 									"\x61\x67", "\x41\x54\x47" ],
		[ r4b.g9j,  										 	"\x41\x72\x67\x65\x6e\x74\x69\x6e\x61",												"\x41\x72\x67\x65\x6e\x74\x69\x6e\x61", 													"\x61\x72", "\x41\x52\x47" ],
		[ r4b.y0x,  											 	"\x41\x72\x6d\x65\x6e\x69\x61",													"\x41\x72\x6d\x65\x6e\x69\x61",														"\x61\x6d", "\x41\x52\x4d" ],
		[ r4b.a2s,  												 	"\x41\x72\x75\x62\x61",														"\x41\x72\x75\x62\x61",															"\x61\x77", "\x41\x42\x57" ],
		[ r4b.l4j,  										 	"\x41\x75\x73\x74\x72\x61\x6c\x69\x61",												"\x41\x75\x73\x74\x72\x61\x6c\x69\x61",													"\x61\x75", "\x41\x55\x53" ],
		[ r4b.b4v,  											 	"\x41\x75\x73\x74\x72\x69\x61",													"\x41\x75\x73\x74\x72\x69\x61",											 			"\x61\x74", "\x41\x55\x54" ],
		[ r4b.k4f,  										  "\x41\x7a\x65\x72\x62\x61\x69\x6a\x61\x6e",											  "\x41\x7a\x65\x72\x62\x61\x69\x6a\x61\x6e",													"\x61\x7a", "\x41\x5a\x45" ],
		[ r4b.t7o,  											 	"\x42\x61\x68\x61\x6d\x61\x73",													"\x42\x61\x68\x61\x6d\x61\x73",														"\x62\x73", "\x42\x48\x53" ],
		[ r4b.i7t,  											 	"\x42\x61\x68\x72\x61\x69\x6e",													"\x42\x61\x68\x72\x61\x69\x6e",														"\x62\x68", "\x42\x48\x52" ],
		[ r4b.f7g,  										  "\x42\x61\x6e\x67\x6c\x61\x64\x65\x73\x68",											  "\x42\x61\x6e\x67\x6c\x61\x64\x65\x73\x68",													"\x62\x64", "\x42\x47\x44" ],
		[ r4b.s8a,  											  "\x42\x61\x72\x62\x61\x64\x6f\x73",												  "\x42\x61\x72\x62\x61\x64\x6f\x73",														"\x62\x62", "\x42\x52\x42" ],
		[ r4b.h2u,  								 	"\x42\x61\x73\x71\x75\x65\x43\x6f\x75\x6e\x74\x72\x79",	 									"\x42\x61\x73\x71\x75\x65\x20\x43\x6f\x75\x6e\x74\x72\x79",     								"\x78\x31", "\x58\x58\x31" ], 
		[ r4b.y0u,  											 	"\x42\x65\x6c\x61\x72\x75\x73",													"\x42\x65\x6c\x61\x72\x75\x73",														"\x62\x79", "\x42\x4c\x52" ],
		[ r4b.u1v,  											 	"\x42\x65\x6c\x67\x69\x75\x6d",													"\x42\x65\x6c\x67\x69\x75\x6d",														"\x62\x65", "\x42\x45\x4c" ],
		[ r4b.j1p,  												  "\x42\x65\x6c\x69\x7a\x65",													  "\x42\x65\x6c\x69\x7a\x65",															"\x62\x7a", "\x42\x4c\x5a" ],
		[ r4b.o8v,  												 	"\x42\x65\x6e\x69\x6e",														"\x42\x65\x6e\x69\x6e",															"\x62\x6a", "\x42\x45\x4e" ],
		[ r4b.y1e,  											 	"\x42\x65\x72\x6d\x75\x64\x61",													"\x42\x65\x72\x6d\x75\x64\x61",														"\x62\x6d", "\x42\x4d\x55" ],
		[ r4b.z1s,  												  "\x42\x68\x75\x74\x61\x6e",													  "\x42\x68\x75\x74\x61\x6e",															"\x62\x74", "\x42\x54\x4e" ],
		[ r4b.n7r,  												"\x42\x6f\x6c\x69\x76\x69\x61",													"\x42\x6f\x6c\x69\x76\x69\x61",														"\x62\x6f", "\x42\x4f\x4c" ],
		[ r4b.m0n,  						  "\x42\x6f\x73\x6e\x69\x61\x48\x65\x72\x7a\x65\x67\x6f\x76\x69\x6e\x61",       				  "\x42\x6f\x73\x6e\x69\x61\x20\x26\x20\x48\x65\x72\x7a\x65\x67\x6f\x76\x69\x6e\x61", 							"\x62\x61", "\x42\x49\x48" ], 
		[ r4b.f0i,  											  "\x42\x6f\x74\x73\x77\x61\x6e\x61",                      	  "\x42\x6f\x74\x73\x77\x61\x6e\x61",														"\x62\x77", "\x42\x57\x41" ],
		[ r4b.f7c,  									  "\x42\x6f\x75\x76\x65\x74\x49\x73\x6c\x61\x6e\x64",                 		"\x42\x6f\x75\x76\x65\x74",															"\x62\x76", "\x42\x56\x54" ],
		[ r4b.x7g,  												  "\x42\x72\x61\x7a\x69\x6c",                        	  "\x42\x72\x61\x7a\x69\x6c",															"\x62\x72", "\x42\x52\x41" ],
		[ r4b.p0x,  	 	"\x42\x72\x69\x74\x69\x73\x68\x49\x6e\x64\x69\x61\x6e\x4f\x63\x65\x61\x6e\x54\x65\x72\x72\x69\x74\x6f\x72\x79",			"\x42\x72\x69\x74\x69\x73\x68\x20\x49\x6e\x64\x69\x61\x6e\x20\x4f\x63\x65\x61\x6e\x20\x54\x65\x72\x72\x69\x74\x6f\x72\x79", 		"\x69\x6f", "\x49\x4f\x54" ],
		[ r4b.h6h, 							 	"\x42\x72\x75\x6e\x65\x69\x44\x61\x72\x75\x73\x73\x61\x6c\x61\x6d",								  "\x42\x72\x75\x6e\x65\x69",															"\x62\x6e", "\x42\x52\x4e" ], 
		[ r4b.w1u,  											  "\x42\x75\x6c\x67\x61\x72\x69\x61",												  "\x42\x75\x6c\x67\x61\x72\x69\x61", 													"\x62\x67", "\x42\x47\x52" ],
		[ r4b.i9t, 										  "\x42\x75\x72\x6b\x69\x6e\x61\x46\x61\x73\x6f",											"\x42\x75\x72\x6b\x69\x6e\x61\x20\x46\x61\x73\x6f",												"\x62\x66", "\x42\x46\x41" ],
		[ r4b.r3q,  											 	"\x42\x75\x72\x75\x6e\x64\x69",													"\x42\x75\x72\x75\x6e\x64\x69",														"\x62\x69", "\x42\x44\x49" ],
		[ r4b.v1x,  											  "\x43\x61\x6d\x62\x6f\x64\x69\x61",												  "\x43\x61\x6d\x62\x6f\x64\x6a\x61",														"\x6b\x68", "\x4b\x48\x4d" ],
		[ r4b.u4l,  											  "\x43\x61\x6d\x65\x72\x6f\x6f\x6e",												  "\x43\x61\x6d\x65\x72\x6f\x6f\x6e",														"\x63\x6d", "\x43\x4d\x52" ],
		[ r4b.g1u,  												  "\x43\x61\x6e\x61\x64\x61",													  "\x43\x61\x6e\x61\x64\x61",															"\x63\x61", "\x43\x41\x4e" ],
		[ r4b.m9u,  										  "\x43\x61\x70\x65\x56\x65\x72\x64\x65",												"\x43\x61\x70\x65\x20\x56\x65\x72\x64\x65",													"\x63\x76", "\x43\x50\x56" ], 
		[ r4b.l0u,  										  "\x43\x61\x74\x61\x6c\x6f\x6e\x69\x61",												"\x43\x61\x74\x61\x6c\x6f\x6e\x69\x61",													"\x78\x32", "\x58\x58\x32" ], 
		[ r4b.a6g,  								  "\x43\x61\x79\x6d\x61\x6e\x49\x73\x6c\x61\x6e\x64\x73",										"\x43\x61\x79\x6d\x61\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73",											"\x6b\x79", "\x43\x59\x4d" ],
		[ r4b.p7i,  				  "\x43\x65\x6e\x74\x72\x61\x6c\x41\x66\x72\x69\x63\x61\x6e\x52\x65\x70\x75\x62\x6c\x69\x63",					  "\x43\x65\x6e\x74\x72\x61\x6c\x20\x41\x66\x72\x69\x63\x61\x6e\x20\x52\x65\x70\x75\x62\x6c\x69\x63",						"\x63\x66", "\x43\x41\x46" ],
		[ r4b.q6m,  													  "\x43\x68\x61\x64",														  "\x43\x68\x61\x64",																"\x74\x64", "\x54\x43\x44" ],
		[ r4b.f5h,  												 	"\x43\x68\x69\x6c\x65",														"\x43\x68\x69\x6c\x65",															"\x63\x6c", "\x43\x48\x4c" ],
		[ r4b.n0r,  												 	"\x43\x68\x69\x6e\x61",														"\x43\x68\x69\x6e\x61",															"\x63\x6e", "\x43\x48\x4e" ],
		[ r4b.r8k,  							 	"\x43\x68\x72\x69\x73\x74\x6d\x61\x73\x49\x73\x6c\x61\x6e\x64",									"\x43\x68\x72\x69\x73\x74\x6d\x61\x73",													"\x63\x78", "\x43\x58\x52" ],
		[ r4b.j4i,  					 	"\x43\x6f\x63\x6f\x73\x4b\x65\x65\x6c\x69\x6e\x67\x49\x73\x6c\x61\x6e\x64\x73",							"\x43\x6f\x63\x6f\x73\x20\x28\x4b\x65\x65\x6c\x69\x6e\x67\x29",										"\x63\x63", "\x43\x43\x4b" ], 
		[ r4b.o9k,  											  "\x43\x6f\x6c\x6f\x6d\x62\x69\x61",												  "\x43\x6f\x6c\x6f\x6d\x62\x69\x61",														"\x63\x6f", "\x43\x4f\x4c" ],
		[ r4b.f9z,  											 	"\x43\x6f\x6d\x6f\x72\x6f\x73",													"\x43\x6f\x6d\x6f\x72\x6f\x73",														"\x6b\x6d", "\x43\x4f\x4d" ],
		[ r4b.l8d,  												 	"\x43\x6f\x6e\x67\x6f",														"\x43\x6f\x6e\x67\x6f\x2d\x42\x72\x61\x7a\x7a\x61\x76\x69\x6c\x6c\x65", 						    	"\x63\x67", "\x43\x4f\x47" ],
		[ r4b.s5x,  			 	"\x43\x6f\x6e\x67\x6f\x44\x65\x6d\x6f\x63\x72\x61\x74\x69\x63\x52\x65\x70\x75\x62\x6c\x69\x63",					"\x43\x6f\x6e\x67\x6f\x2d\x4b\x69\x6e\x73\x68\x61\x73\x61\x28\x5a\x61\x69\x72\x65\x29",						  "\x63\x64", "\x43\x4f\x44" ],
		[ r4b.t4c,  									 	"\x43\x6f\x6f\x6b\x49\x73\x6c\x61\x6e\x64\x73",											"\x43\x6f\x6f\x6b\x20\x49\x73\x6c\x61\x6e\x64\x73",											 	"\x63\x6b", "\x43\x4f\x4b" ],
		[ r4b.n6n,  											"\x43\x6f\x73\x74\x61\x52\x69\x63\x61",												"\x43\x6f\x73\x74\x61\x20\x52\x69\x63\x61",												 	"\x63\x72", "\x43\x52\x49" ],
		[ r4b.h6d,  												"\x43\x72\x6f\x61\x74\x69\x61",													"\x43\x72\x6f\x61\x74\x69\x61",														"\x68\x72", "\x48\x52\x56" ],
		[ r4b.x4m,  													  "\x43\x75\x62\x61",														  "\x43\x75\x62\x61",															 	"\x63\x75", "\x43\x55\x42" ],
		[ r4b.x8i,  												"\x43\x75\x72\x61\x63\x61\x6f",													"\x43\x75\x72\x61\x63\x61\x6f",											  		"\x63\x77", "\x43\x55\x57" ],
		[ r4b.u8r,  												  "\x43\x79\x70\x72\x75\x73",													  "\x43\x79\x70\x72\x75\x73",														 	"\x63\x79", "\x43\x59\x50" ],
		[ r4b.x7u,  									      "\x43\x7a\x65\x63\x68\x69\x61",										      "\x43\x7a\x65\x63\x68\x20\x52\x65\x70\x75\x62\x6c\x69\x63", 										"\x63\x7a", "\x43\x5a\x45" ],
		[ r4b.p3d,  										  "\x43\x6f\x74\x65\x49\x76\x6f\x69\x72\x65",	   					 				  "\x43\x6f\x74\x65\x20\x64\x27\x49\x76\x6f\x69\x72\x65",											"\x63\x69", "\x43\x49\x56" ],
		[ r4b.h2s,  												"\x44\x65\x6e\x6d\x61\x72\x6b",													"\x44\x65\x6e\x6d\x61\x72\x6b",													  "\x64\x6b", "\x44\x4e\x4b" ],
		[ r4b.i9k,  											  "\x44\x6a\x69\x62\x6f\x75\x74\x69",												  "\x44\x6a\x69\x62\x6f\x75\x74\x69",													 	"\x64\x6a", "\x44\x4a\x49" ],
		[ r4b.d7n,  											  "\x44\x6f\x6d\x69\x6e\x69\x63\x61",												  "\x44\x6f\x6d\x69\x6e\x69\x63\x61",													 	"\x64\x6d", "\x44\x4d\x41" ],
		[ r4b.q6a,  							"\x44\x6f\x6d\x69\x6e\x69\x63\x61\x6e\x52\x65\x70\x75\x62\x6c\x69\x63",								"\x44\x6f\x6d\x69\x6e\x69\x63\x61\x6e\x20\x52\x65\x70\x75\x62\x6c\x69\x63",								 	"\x64\x6f", "\x44\x4f\x4d" ],
		[ r4b.s6f,  												"\x45\x63\x75\x61\x64\x6f\x72",													"\x45\x63\x75\x61\x64\x6f\x72",													 	"\x65\x63", "\x45\x43\x55" ],
		[ r4b.g3d,  													"\x45\x67\x79\x70\x74",														"\x45\x67\x79\x70\x74", 														 	"\x65\x67", "\x45\x47\x59" ],
		[ r4b.l8q,  										  "\x45\x6c\x53\x61\x6c\x76\x61\x64\x6f\x72",											  "\x45\x6c\x20\x53\x61\x6c\x76\x61\x64\x6f\x72",												"\x73\x76", "\x53\x4c\x56" ],
		[ r4b.t3k,  												"\x45\x6e\x67\x6c\x61\x6e\x64",													"\x45\x6e\x67\x6c\x61\x6e\x64",														"\x78\x33", "\x47\x42\x52" ],
		[ r4b.g4s,  							  "\x45\x71\x75\x61\x74\x6f\x72\x69\x61\x6c\x47\x75\x69\x6e\x65\x61",								  "\x45\x71\x75\x61\x74\x6f\x72\x69\x61\x6c\x20\x47\x75\x69\x6e\x65\x61",									"\x67\x71", "\x47\x4e\x51" ], 
		[ r4b.a1k,  												"\x45\x72\x69\x74\x72\x65\x61",													"\x45\x72\x69\x74\x72\x65\x61",														"\x65\x72", "\x45\x52\x49" ],
		[ r4b.n8x,  												"\x45\x73\x74\x6f\x6e\x69\x61",													"\x45\x73\x74\x6f\x6e\x69\x61",														"\x65\x65", "\x45\x53\x54" ],
		[ r4b.h4u,  											  "\x45\x74\x68\x69\x6f\x70\x69\x61",												  "\x45\x74\x68\x69\x6f\x70\x69\x61",													 	"\x65\x74", "\x45\x54\x48" ],
		[ r4b.v5f,  								"\x46\x61\x6c\x6b\x6c\x61\x6e\x64\x49\x73\x6c\x61\x6e\x64\x73",									"\x45\x6e\x67\x6c\x61\x6e\x64",														"\x66\x6b", "\x46\x4c\x4b" ], 
		[ r4b.d8r,  									  "\x46\x61\x72\x6f\x65\x49\x73\x6c\x61\x6e\x64\x73",										  "\x46\x61\x72\x6f\x65\x73",														 	"\x66\x6f", "\x46\x52\x4f" ],
		[ r4b.n4j,  													  "\x46\x69\x6a\x69",														  "\x46\x69\x6a\x69",															 	"\x66\x6a", "\x46\x4a\x49" ],
		[ r4b.h0w,  												"\x46\x69\x6e\x6c\x61\x6e\x64",													"\x46\x69\x6e\x6c\x61\x6e\x64",														"\x66\x69", "\x46\x49\x4e" ],
		[ r4b.v7g,  												  "\x46\x72\x61\x6e\x63\x65",													  "\x46\x72\x61\x6e\x63\x65",														 	"\x66\x72", "\x46\x52\x41" ],
		[ r4b.d5w,  									  "\x46\x72\x65\x6e\x63\x68\x47\x75\x69\x61\x6e\x61",										  "\x47\x75\x79\x61\x6e\x61", 														"\x67\x66", "\x47\x55\x46" ], 
		[ r4b.k0a,  								"\x46\x72\x65\x6e\x63\x68\x50\x6f\x6c\x79\x6e\x65\x73\x69\x61",									"\x54\x61\x68\x69\x74\x69\x28\x46\x72\x65\x6e\x63\x68\x20\x50\x6f\x6c\x69\x6e\x65\x73\x69\x61\x29", 					"\x70\x66", "\x50\x59\x46" ], 
		[ r4b.c2y,  			"\x46\x72\x65\x6e\x63\x68\x53\x6f\x75\x74\x68\x65\x72\x6e\x54\x65\x72\x72\x69\x74\x6f\x72\x69\x65\x73",				"\x46\x72\x65\x6e\x63\x68\x20\x53\x6f\x75\x74\x68\x65\x72\x6e\x20\x61\x6e\x64\x20\x41\x6e\x74\x61\x72\x63\x74\x69\x63\x20\x4c\x61\x6e\x64\x73","\x74\x66", "\x41\x54\x46" ],
		[ r4b.k2n,  													"\x47\x61\x62\x6f\x6e",														"\x47\x61\x62\x6f\x6e",															"\x67\x61", "\x47\x41\x42" ], 
		[ r4b.j5o,  												  "\x47\x61\x6d\x62\x69\x61",													  "\x47\x61\x6d\x62\x69\x61",															"\x67\x6d", "\x47\x4d\x42" ],
		[ r4b.x9k,  												"\x47\x65\x6f\x72\x67\x69\x61",													"\x47\x65\x6f\x72\x67\x69\x61",														"\x67\x65", "\x47\x45\x4f" ],
		[ r4b.v3o,  												"\x47\x65\x72\x6d\x61\x6e\x79",													"\x47\x65\x72\x6d\x61\x6e\x79",														"\x64\x65", "\x44\x45\x55" ],
		[ r4b.j4f, 													  "\x47\x68\x61\x6e\x61",														"\x47\x68\x61\x6e\x61",															"\x67\x68", "\x47\x48\x41" ],
		[ r4b.c6r,  											"\x47\x69\x62\x72\x61\x6c\x74\x61\x72",												"\x47\x69\x62\x72\x61\x6c\x74\x61\x72",													"\x67\x69", "\x47\x49\x42" ],
		[ r4b.j4c,  												  "\x47\x72\x65\x65\x63\x65",													  "\x47\x72\x65\x65\x63\x65",															"\x67\x72", "\x47\x52\x43" ],
		[ r4b.o0k,  											"\x47\x72\x65\x65\x6e\x6c\x61\x6e\x64",												"\x47\x72\x65\x65\x6e\x6c\x61\x6e\x64",													"\x67\x6c", "\x47\x52\x4c" ],
		[ r4b.l8u,  												"\x47\x72\x65\x6e\x61\x64\x61",													"\x47\x72\x65\x6e\x61\x64\x61",														"\x67\x64", "\x47\x52\x44" ],
		[ r4b.x6i,  										  "\x47\x75\x61\x64\x65\x6c\x6f\x75\x70\x65",											  "\x47\x75\x61\x64\x65\x6c\x6f\x75\x70\x65",													"\x67\x70", "\x47\x4c\x50" ],
		[ r4b.x8m,  													  "\x47\x75\x61\x6d",														  "\x47\x75\x61\x6d",																"\x67\x75", "\x47\x55\x4d" ],
		[ r4b.v3k,  											"\x47\x75\x61\x74\x65\x6d\x61\x6c\x61",												"\x47\x75\x61\x74\x65\x6d\x61\x6c\x61",													"\x67\x74", "\x47\x54\x4d" ],
		[ r4b.r1q,  											  "\x47\x75\x65\x72\x6e\x73\x65\x79",												  "\x47\x75\x65\x72\x6e\x73\x65\x79",														"\x67\x67", "\x47\x47\x59" ], 
		[ r4b.d1e,  												  "\x47\x75\x69\x6e\x65\x61",													  "\x47\x75\x69\x6e\x65\x61",															"\x67\x6e", "\x47\x49\x4e" ],
		[ r4b.p3s,  									  "\x47\x75\x69\x6e\x65\x61\x42\x69\x73\x73\x61\x75",										  "\x47\x75\x69\x6e\x65\x61\x2d\x42\x69\x73\x73\x61\x75",											"\x67\x77", "\x47\x4e\x42" ],
		[ r4b.b4u,  												  "\x47\x75\x79\x61\x6e\x61",													  "\x47\x75\x79\x61\x6e\x61",															"\x67\x79", "\x47\x55\x59" ],
		[ r4b.p2g,  													"\x48\x61\x69\x74\x69",														"\x48\x61\x69\x74\x69",															"\x68\x74", "\x48\x54\x49" ],
		[ r4b.y9o, 			"\x48\x65\x61\x72\x64\x49\x73\x6c\x61\x6e\x64\x4d\x63\x44\x6f\x6e\x61\x6c\x64\x49\x73\x6c\x61\x6e\x64\x73", 			"\x41\x75\x73\x74\x72\x61\x6c\x69\x61",   									  		"\x68\x6d", "\x48\x4d\x44" ],
		[ r4b.v7j,  			 	                "\x56\x61\x74\x69\x63\x61\x6e",	  			                "\x56\x61\x74\x69\x63\x61\x6e\x20\x43\x69\x74\x79", 											"\x76\x61", "\x56\x41\x54" ],
		[ r4b.s5j,  											  "\x48\x6f\x6e\x64\x75\x72\x61\x73",												  "\x48\x6f\x6e\x64\x75\x72\x61\x73",														"\x68\x6e", "\x48\x4e\x44" ],
		[ r4b.y0p,  											  "\x48\x6f\x6e\x67\x4b\x6f\x6e\x67",												  "\x48\x6f\x6e\x67\x20\x4b\x6f\x6e\x67",													"\x68\x6b", "\x48\x4b\x47" ],
		[ r4b.l9o,  											 	"\x48\x75\x6e\x67\x61\x72\x79",													"\x48\x75\x6e\x67\x61\x72\x79",														"\x68\x75", "\x48\x55\x4e" ],
		[ r4b.u3n,  											 	"\x49\x63\x65\x6c\x61\x6e\x64",													"\x49\x63\x65\x6c\x61\x6e\x64",														"\x69\x73", "\x49\x53\x4c" ],
		[ r4b.g6d,  												 	"\x49\x6e\x64\x69\x61",														"\x49\x6e\x64\x69\x61",															"\x69\x6e", "\x49\x4e\x44" ],
		[ r4b.z4p,  										 	"\x49\x6e\x64\x6f\x6e\x65\x73\x69\x61",												"\x49\x6e\x64\x6f\x6e\x65\x73\x69\x61",													"\x69\x64", "\x49\x44\x4e" ],
		[ r4b.z7i,  													  "\x49\x72\x61\x6e",														  "\x49\x72\x61\x6e",																"\x69\x72", "\x49\x52\x4e" ],
		[ r4b.p4z,  													  "\x49\x72\x61\x71",														  "\x49\x72\x61\x71",																"\x69\x71", "\x49\x52\x51" ],
		[ r4b.k8c,  											 	"\x49\x72\x65\x6c\x61\x6e\x64",													"\x49\x72\x65\x6c\x61\x6e\x64",														"\x69\x65", "\x49\x52\x4c" ],
		[ r4b.u7d,  										 	"\x49\x73\x6c\x65\x4f\x66\x4d\x61\x6e",												"\x49\x73\x6c\x65\x20\x6f\x66\x20\x4d\x61\x6e",												"\x69\x6d", "\x49\x4d\x4e" ],
		[ r4b.j5j,  												  "\x49\x73\x72\x61\x65\x6c",													  "\x49\x73\x72\x61\x65\x6c",															"\x69\x6c", "\x49\x53\x52" ],
		[ r4b.g0d,  												 	"\x49\x74\x61\x6c\x79",														"\x49\x74\x61\x6c\x79",															"\x69\x74", "\x49\x54\x41" ],
		[ r4b.a3p,  											 	"\x4a\x61\x6d\x61\x69\x63\x61",													"\x4a\x61\x6d\x61\x69\x63\x61",														"\x6a\x6d", "\x4a\x41\x4d" ],
		[ r4b.p4l,  											  "\x4a\x61\x6e\x4d\x61\x79\x65\x6e",								  			  "\x4e\x6f\x72\x77\x61\x79", 														"\x78\x34", "\x58\x58\x34" ], 
		[ r4b.i0q,  												 	"\x4a\x61\x70\x61\x6e",														"\x4a\x61\x70\x61\x6e",															"\x6a\x70", "\x4a\x50\x4e" ],
		[ r4b.c2s,  												  "\x4a\x65\x72\x73\x65\x79",													  "\x4a\x65\x72\x73\x65\x79",															"\x6a\x65", "\x4a\x45\x59" ],
		[ r4b.s2b,  												  "\x4a\x6f\x72\x64\x61\x6e",													  "\x4a\x6f\x72\x64\x61\x6e",															"\x6a\x6f", "\x4a\x4f\x52" ],
		[ r4b.u1b,  										  "\x4b\x61\x7a\x61\x6b\x68\x73\x74\x61\x6e",											  "\x4b\x61\x7a\x61\x6b\x68\x73\x74\x61\x6e",													"\x6b\x7a", "\x4b\x41\x5a" ],
		[ r4b.p9x,  												 	"\x4b\x65\x6e\x79\x61",														"\x4b\x65\x6e\x79\x61",															"\x6b\x65", "\x4b\x45\x4e" ],
		[ r4b.w3x,  											  "\x4b\x69\x72\x69\x62\x61\x74\x69",												  "\x4b\x69\x72\x69\x62\x61\x74\x69",														"\x6b\x69", "\x4b\x49\x52" ],
		[ r4b.v8j,  										  "\x4b\x6f\x72\x65\x61\x4e\x6f\x72\x74\x68",											  "\x4e\x6f\x72\x74\x68\x20\x4b\x6f\x72\x65\x61",												"\x6b\x70", "\x50\x52\x4b" ], 
		[ r4b.q2h,  										  "\x4b\x6f\x72\x65\x61\x53\x6f\x75\x74\x68",	 	  								  "\x53\x6f\x75\x74\x68\x20\x4b\x6f\x72\x65\x61", 												"\x6b\x72", "\x4b\x4f\x52" ], 
		[ r4b.r4d,  												  "\x4b\x6f\x73\x6f\x76\x6f",													  "\x4b\x6f\x73\x6f\x76\x6f",															"\x78\x35", "\x52\x4b\x53" ],
		[ r4b.h7z,  												  "\x4b\x75\x77\x61\x69\x74",													  "\x4b\x75\x77\x61\x69\x74",															"\x6b\x77", "\x4b\x57\x54" ],
		[ r4b.p2c,  										  "\x4b\x79\x72\x67\x79\x7a\x73\x74\x61\x6e",											  "\x4b\x79\x72\x67\x79\x7a\x73\x74\x61\x6e",													"\x6b\x67", "\x4b\x47\x5a" ],
		[ r4b.c8p,  													  "\x4c\x61\x6f\x73",														  "\x4c\x61\x6f\x73",																"\x6c\x61", "\x4c\x41\x4f" ],
		[ r4b.c4u, 	 											 	"\x4c\x61\x74\x76\x69\x61",													  "\x4c\x61\x74\x76\x69\x61",															"\x6c\x76", "\x4c\x56\x41" ],
		[ r4b.s4f,  											 	"\x4c\x65\x62\x61\x6e\x6f\x6e",													"\x4c\x65\x62\x61\x6e\x6f\x6e",														"\x6c\x62", "\x4c\x42\x4e" ],
		[ r4b.e0b, 												  "\x4c\x65\x73\x6f\x74\x68\x6f",													"\x4c\x65\x73\x6f\x74\x68\x6f",														"\x6c\x73", "\x4c\x53\x4f" ],
		[ r4b.w8g,  											 	"\x4c\x69\x62\x65\x72\x69\x61",													"\x4c\x69\x62\x65\x72\x69\x61",														"\x6c\x72", "\x4c\x42\x52" ],
		[ r4b.c4c,  												 	"\x4c\x69\x62\x79\x61",														"\x4c\x69\x62\x79\x61",															"\x6c\x79", "\x4c\x42\x59" ],
		[ r4b.u9m,  								 	"\x4c\x69\x65\x63\x68\x74\x65\x6e\x73\x74\x65\x69\x6e",										"\x4c\x69\x65\x63\x68\x74\x65\x6e\x73\x74\x65\x69\x6e",											"\x6c\x69", "\x4c\x49\x45" ],
		[ r4b.c0n,  										 	"\x4c\x69\x74\x68\x75\x61\x6e\x69\x61",												"\x4c\x69\x74\x68\x75\x61\x6e\x69\x61",													"\x6c\x74", "\x4c\x54\x55" ],
		[ r4b.j8y,  										  "\x4c\x75\x78\x65\x6d\x62\x6f\x75\x72\x67",											  "\x4c\x75\x78\x65\x6d\x62\x6f\x75\x72\x67",													"\x6c\x75", "\x4c\x55\x58" ],
		[ r4b.macau,  												 	"\x4d\x61\x63\x61\x75",														"\x4d\x61\x63\x61\x75",															"\x6d\x6f", "\x4d\x41\x43" ],
		[ r4b.h5c,  	  					 	  "\x4e\x6f\x72\x74\x68\x4d\x61\x63\x65\x64\x6f\x6e\x69\x61",	   							  "\x4d\x61\x63\x65\x64\x6f\x6e\x69\x61",													"\x6d\x6b", "\x4d\x4b\x44" ],
		[ r4b.f0v,  										  "\x4d\x61\x64\x61\x67\x61\x73\x63\x61\x72",											  "\x4d\x61\x64\x61\x67\x61\x73\x63\x61\x72",													"\x6d\x67", "\x4d\x44\x47" ],
		[ r4b.u9y,  												  "\x4d\x61\x6c\x61\x77\x69",													  "\x4d\x61\x6c\x61\x77\x69",															"\x6d\x77", "\x4d\x57\x49" ],
		[ r4b.x4w,  											  "\x4d\x61\x6c\x61\x79\x73\x69\x61",												  "\x4d\x61\x6c\x61\x79\x73\x69\x61",														"\x6d\x79", "\x4d\x59\x53" ],
		[ r4b.z6w,  											  "\x4d\x61\x6c\x64\x69\x76\x65\x73",												  "\x4d\x61\x6c\x64\x69\x76\x65\x73",														"\x6d\x76", "\x4d\x44\x56" ],
		[ r4b.c7p, 													 	"\x4d\x61\x6c\x69",														  "\x4d\x61\x6c\x69",																"\x6d\x6c", "\x4d\x4c\x49" ],
		[ r4b.o1h,  												 	"\x4d\x61\x6c\x74\x61",														"\x4d\x61\x6c\x74\x61",															"\x6d\x74", "\x4d\x4c\x54" ],
		[ r4b.x3g,  							 	"\x4d\x61\x72\x73\x68\x61\x6c\x6c\x49\x73\x6c\x61\x6e\x64\x73",									"\x4d\x61\x72\x73\x68\x61\x6c\x6c\x20\x49\x73\x6c\x61\x6e\x64\x73",										"\x6d\x68", "\x4d\x48\x4c" ],
		[ r4b.k1c,  										  "\x4d\x61\x72\x74\x69\x6e\x69\x71\x75\x65",											  "\x4d\x61\x72\x74\x69\x6e\x69\x71\x75\x65",													"\x6d\x71", "\x4d\x54\x51" ],
		[ r4b.f1y,  										  "\x4d\x61\x75\x72\x69\x74\x61\x6e\x69\x61",											  "\x4d\x61\x75\x72\x69\x74\x61\x6e\x69\x61",													"\x6d\x72", "\x4d\x52\x54" ],
		[ r4b.n1o,  										 	"\x4d\x61\x75\x72\x69\x74\x69\x75\x73",												"\x4d\x61\x75\x72\x69\x74\x69\x75\x73",													"\x6d\x75", "\x4d\x55\x53" ],
		[ r4b.z0j,  											  "\x4d\x61\x79\x6f\x74\x74\x65",													"\x4d\x61\x79\x6f\x74\x74\x65",														"\x79\x74", "\x4d\x59\x54" ],
		[ r4b.r7n,  												  "\x4d\x65\x78\x69\x63\x6f",													  "\x4d\x65\x78\x69\x63\x6f",															"\x6d\x78", "\x4d\x45\x58" ],
		[ r4b.j1e,  										  "\x4d\x69\x63\x72\x6f\x6e\x65\x73\x69\x61",											  "\x4d\x69\x63\x72\x6f\x6e\x65\x73\x69\x61",													"\x66\x6d", "\x46\x53\x4d" ],
		[ r4b.w4s,  											 	"\x4d\x6f\x6c\x64\x6f\x76\x61",													"\x4d\x6f\x6c\x64\x6f\x76\x61",														"\x6d\x64", "\x4d\x44\x41" ],
		[ r4b.d7w,  												  "\x4d\x6f\x6e\x61\x63\x6f",													  "\x4d\x6f\x6e\x61\x63\x6f",															"\x6d\x63", "\x4d\x43\x4f" ],
		[ r4b.v6r,  											  "\x4d\x6f\x6e\x67\x6f\x6c\x69\x61",												  "\x4d\x6f\x6e\x67\x6f\x6c\x69\x61",														"\x6d\x6e", "\x4d\x4e\x47" ],
		[ r4b.v6s,  										  "\x4d\x6f\x6e\x74\x65\x6e\x65\x67\x72\x6f",											  "\x4d\x6f\x6e\x74\x65\x6e\x65\x67\x72\x6f",													"\x6d\x65", "\x4d\x4e\x45" ],
		[ r4b.m8h,  										  "\x4d\x6f\x6e\x74\x73\x65\x72\x72\x61\x74",											  "\x4d\x6f\x6e\x74\x73\x65\x72\x72\x61\x74",													"\x6d\x73", "\x4d\x53\x52" ],
		[ r4b.z2x,  												"\x4d\x6f\x72\x6f\x63\x63\x6f",													"\x4d\x6f\x72\x6f\x63\x63\x6f",														"\x6d\x61", "\x4d\x41\x52" ],
		[ r4b.u3k,  										  "\x4d\x6f\x7a\x61\x6d\x62\x69\x71\x75\x65",											  "\x4d\x6f\x7a\x61\x6d\x62\x69\x71\x75\x65",													"\x6d\x7a", "\x4d\x4f\x5a" ],
		[ r4b.m4s, 												  "\x4d\x79\x61\x6e\x6d\x61\x72",													"\x4d\x79\x61\x6e\x6d\x61\x72\x28\x42\x75\x72\x6d\x61\x29", 										"\x6d\x6d", "\x4d\x4d\x52" ],
		[ r4b.z8a,  												"\x4e\x61\x6d\x69\x62\x69\x61",													"\x4e\x61\x6d\x69\x62\x69\x61",														"\x6e\x61", "\x4e\x41\x4d" ],
		[ r4b.d0l,  													"\x4e\x61\x75\x72\x75",														"\x4e\x61\x75\x72\x75",															"\x6e\x72", "\x4e\x52\x55" ],
		[ r4b.o7t,  													"\x4e\x65\x70\x61\x6c",														"\x4e\x65\x70\x61\x6c",															"\x6e\x70", "\x4e\x50\x4c" ],
		[ r4b.t4a,  										"\x54\x68\x65\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73",	  							  "\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73",												"\x6e\x6c", "\x4e\x4c\x44" ],
		[ r4b.b4d, 						  "\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73\x41\x6e\x74\x69\x6c\x6c\x65\x73",							"\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73\x20\x41\x6e\x74\x69\x6c\x6c\x65\x73",								"\x61\x6e", "\x41\x4e\x54" ],
		[ r4b.r7t,  									  "\x4e\x65\x77\x43\x61\x6c\x65\x64\x6f\x6e\x69\x61",										  "\x4e\x65\x77\x20\x43\x61\x6c\x65\x64\x6f\x6e\x69\x61",											"\x6e\x63", "\x4e\x43\x4c" ],
		[ r4b.h6l,  										  "\x4e\x65\x77\x5a\x65\x61\x6c\x61\x6e\x64",											  "\x4e\x65\x77\x20\x5a\x65\x61\x6c\x61\x6e\x64",												"\x6e\x7a", "\x4e\x5a\x4c" ],
		[ r4b.p5w,  											"\x4e\x69\x63\x61\x72\x61\x67\x75\x61",												"\x4e\x69\x63\x61\x72\x61\x67\x75\x61",													"\x6e\x69", "\x4e\x49\x43" ],
		[ r4b.k0e,  													"\x4e\x69\x67\x65\x72",														"\x4e\x69\x67\x65\x72",															"\x6e\x65", "\x4e\x45\x52" ],
		[ r4b.i7v,  												"\x4e\x69\x67\x65\x72\x69\x61",													"\x4e\x69\x67\x65\x72\x69\x61",														"\x6e\x67", "\x4e\x47\x41" ],
		[ r4b.z9c,  													  "\x4e\x69\x75\x65",														  "\x4e\x69\x75\x65",																"\x6e\x75", "\x4e\x49\x55" ],
		[ r4b.o6s,  									"\x4e\x6f\x72\x66\x6f\x6c\x6b\x49\x73\x6c\x61\x6e\x64",										"\x4e\x6f\x72\x66\x6f\x6c\x6b", 														"\x6e\x66", "\x4e\x46\x4b" ],
		[ r4b.k6k,  								"\x4e\x6f\x72\x74\x68\x65\x72\x6e\x49\x72\x65\x6c\x61\x6e\x64",									"\x4e\x6f\x72\x74\x68\x65\x72\x6e\x20\x49\x72\x65\x6c\x61\x6e\x64",										"\x78\x36", "\x47\x42\x52" ], 
		[ r4b.d9m,  				  "\x4e\x6f\x72\x74\x68\x65\x72\x6e\x4d\x61\x72\x69\x61\x6e\x61\x49\x73\x6c\x61\x6e\x64\x73",					  "\x4e\x6f\x72\x74\x68\x65\x72\x6e\x20\x4d\x61\x72\x69\x61\x6e\x61",										"\x6d\x70", "\x4d\x4e\x50" ],
		[ r4b.v6m,  												  "\x4e\x6f\x72\x77\x61\x79",													  "\x4e\x6f\x72\x77\x61\x79",															"\x6e\x6f", "\x4e\x4f\x52" ],
		[ r4b.e1n,  													  "\x4f\x6d\x61\x6e",														  "\x4f\x6d\x61\x6e",																"\x6f\x6d", "\x4f\x4d\x4e" ],
		[ r4b.w4w,  											  "\x50\x61\x6b\x69\x73\x74\x61\x6e",												  "\x50\x61\x6b\x69\x73\x74\x61\x6e",														"\x70\x6b", "\x50\x41\x4b" ],
		[ r4b.h4v,  													"\x50\x61\x6c\x61\x75",														"\x50\x61\x6c\x61\x75",															"\x70\x77", "\x50\x4c\x57" ],
		[ r4b.l6e,  											"\x50\x61\x6c\x65\x73\x74\x69\x6e\x65",												"\x50\x61\x6c\x65\x73\x74\x69\x6e\x65",													"\x70\x73", "\x50\x53\x45" ],
		[ r4b.e8f,  												  "\x50\x61\x6e\x61\x6d\x61",													  "\x50\x61\x6e\x61\x6d\x61",															"\x70\x61", "\x50\x41\x4e" ],
		[ r4b.b2k,  								  "\x50\x61\x70\x75\x61\x4e\x65\x77\x47\x75\x69\x6e\x65\x61",									  "\x50\x61\x70\x75\x61\x20\x4e\x65\x77\x20\x47\x75\x69\x6e\x65\x61",										"\x70\x67", "\x50\x4e\x47" ],
		[ r4b.v4x,  											  "\x50\x61\x72\x61\x67\x75\x61\x79",												  "\x50\x61\x72\x61\x67\x75\x61\x79",														"\x70\x79", "\x50\x52\x59" ],
		[ r4b.m5f,  													  "\x50\x65\x72\x75",														  "\x50\x65\x72\x75",																"\x70\x65", "\x50\x45\x52" ],
		[ r4b.o8k,  										"\x50\x68\x69\x6c\x69\x70\x70\x69\x6e\x65\x73",											"\x50\x68\x69\x6c\x69\x70\x70\x69\x6e\x65\x73",												"\x70\x68", "\x50\x48\x4c" ],
		[ r4b.u4p,  											  "\x50\x69\x74\x63\x61\x69\x72\x6e",												  "\x50\x69\x74\x63\x61\x69\x72\x6e",														"\x70\x6e", "\x50\x43\x4e" ],
		[ r4b.v0x,  												  "\x50\x6f\x6c\x61\x6e\x64",													  "\x50\x6f\x6c\x61\x6e\x64",															"\x70\x6c", "\x50\x4f\x4c" ],
		[ r4b.g3o,  											  "\x50\x6f\x72\x74\x75\x67\x61\x6c",												  "\x50\x6f\x72\x74\x75\x67\x61\x6c",														"\x70\x74", "\x50\x52\x54" ],
		[ r4b.g0q,  										  "\x50\x75\x65\x72\x74\x6f\x52\x69\x63\x6f",											  "\x50\x75\x65\x72\x74\x6f\x20\x52\x69\x63\x6f",												"\x70\x72", "\x50\x52\x49" ],
		[ r4b.q7d,  													"\x51\x61\x74\x61\x72",														"\x51\x61\x74\x61\x72",															"\x71\x61", "\x51\x41\x54" ],
		[ r4b.w6w,  												"\x52\x65\x75\x6e\x69\x6f\x6e",													"\x52\x65\x75\x6e\x69\x6f\x6e",														"\x72\x65", "\x52\x45\x55" ],
		[ r4b.q9h,  												"\x52\x6f\x6d\x61\x6e\x69\x61",													"\x52\x6f\x6d\x61\x6e\x69\x61",														"\x72\x6f", "\x52\x4f\x55" ],
		[ r4b.u3c,  												  "\x52\x75\x73\x73\x69\x61",													  "\x52\x75\x73\x73\x69\x61\x6e\x20\x46\x65\x64\x65\x72\x61\x74\x69\x6f\x6e", 								"\x72\x75", "\x52\x55\x53" ],
		[ r4b.f5f,  												  "\x52\x77\x61\x6e\x64\x61",													  "\x52\x77\x61\x6e\x64\x61",															"\x72\x77", "\x52\x57\x41" ],
		[ r4b.i2a,  								"\x53\x61\x69\x6e\x74\x42\x61\x72\x74\x68\x65\x6c\x65\x6d\x79",									"\x53\x61\x69\x6e\x74\x20\x42\x61\x72\x74\x68\x65\x6c\x65\x6d\x79", 									"\x62\x6c", "\x42\x4c\x4d" ],
		[ r4b.i2m,  										"\x53\x61\x69\x6e\x74\x48\x65\x6c\x65\x6e\x61",											"\x53\x61\x69\x6e\x74\x20\x48\x65\x6c\x65\x6e\x61", 											"\x73\x68", "\x53\x48\x4e" ], 
		[ r4b.h8d,  								"\x53\x61\x69\x6e\x74\x4b\x69\x74\x74\x73\x4e\x65\x76\x69\x73",									"\x53\x74\x20\x4b\x69\x74\x74\x73\x20\x26\x20\x4e\x65\x76\x69\x73", 									"\x6b\x6e", "\x4b\x4e\x41" ], 
		[ r4b.y0l, 											"\x53\x61\x69\x6e\x74\x4c\x75\x63\x69\x61",											  "\x53\x61\x69\x6e\x74\x20\x4c\x75\x63\x69\x61", 												"\x6c\x63", "\x4c\x43\x41" ], 
		[ r4b.k8n,  					"\x53\x61\x69\x6e\x74\x4d\x61\x72\x74\x69\x6e\x46\x72\x65\x6e\x63\x68\x50\x61\x72\x74",  					"\x53\x61\x69\x6e\x74\x20\x4d\x61\x72\x74\x69\x6e", 											"\x6d\x66", "\x4d\x41\x46" ],
		[ r4b.y9n,  						"\x53\x61\x69\x6e\x74\x50\x69\x65\x72\x72\x65\x4d\x69\x71\x75\x65\x6c\x6f\x6e",							"\x53\x61\x69\x6e\x74\x20\x50\x69\x65\x72\x72\x65\x20\x61\x6e\x64\x20\x4d\x69\x71\x75\x65\x6c\x6f\x6e", 					"\x70\x6d", "\x53\x50\x4d" ], 
		[ r4b.y8x,  				  "\x53\x61\x69\x6e\x74\x56\x69\x6e\x63\x65\x6e\x74\x47\x72\x65\x6e\x61\x64\x69\x6e\x65\x73",					  "\x53\x74\x20\x56\x69\x6e\x63\x65\x6e\x74\x20\x26\x20\x74\x68\x65\x20\x47\x72\x65\x6e\x61\x64\x69\x6e\x65\x73", 				"\x76\x63", "\x56\x43\x54" ], 
		[ r4b.b9e,  													"\x53\x61\x6d\x6f\x61",														"\x53\x61\x6d\x6f\x61",															"\x77\x73", "\x57\x53\x4d" ],
		[ r4b.w5t,  											"\x53\x61\x6e\x4d\x61\x72\x69\x6e\x6f",												"\x53\x61\x6e\x20\x4d\x61\x72\x69\x6e\x6f",													"\x73\x6d", "\x53\x4d\x52" ],
		[ r4b.w2j,  								"\x53\x61\x6f\x54\x6f\x6d\x65\x50\x72\x69\x6e\x63\x69\x70\x65",									"\x53\x61\x6f\x20\x54\x6f\x6d\x65\x20\x26\x20\x50\x72\x69\x6e\x63\x69\x70\x65", 								"\x73\x74", "\x53\x54\x50" ],
		[ r4b.i0e,  										"\x53\x61\x75\x64\x69\x41\x72\x61\x62\x69\x61",											"\x53\x61\x75\x64\x69\x20\x41\x72\x61\x62\x69\x61", 											"\x73\x61", "\x53\x41\x55" ],
		[ r4b.i9n,  											  "\x53\x63\x6f\x74\x6c\x61\x6e\x64",												  "\x53\x63\x6f\x74\x6c\x61\x6e\x64",														"\x78\x37", "\x47\x42\x52" ],
		[ r4b.j0o,  												"\x53\x65\x6e\x65\x67\x61\x6c",													"\x53\x65\x6e\x65\x67\x61\x6c",														"\x73\x6e", "\x53\x45\x4e" ],
		[ r4b.s9o,  												  "\x53\x65\x72\x62\x69\x61",													  "\x53\x65\x72\x62\x69\x61\x28\x59\x75\x67\x6f\x73\x6c\x61\x76\x69\x61\x29", 								"\x72\x73", "\x53\x52\x42" ],
		[ r4b.j7c,  										  "\x53\x65\x79\x63\x68\x65\x6c\x6c\x65\x73",											  "\x53\x65\x79\x63\x68\x65\x6c\x6c\x65\x73",													"\x73\x63", "\x53\x59\x43" ],
		[ r4b.z4t,  									  "\x53\x69\x65\x72\x72\x61\x4c\x65\x6f\x6e\x65",											"\x53\x69\x65\x72\x72\x61\x20\x4c\x65\x6f\x6e\x65",												"\x73\x6c", "\x53\x4c\x45" ],
		[ r4b.i1d,  										 	"\x53\x69\x6e\x67\x61\x70\x6f\x72\x65",												"\x53\x69\x6e\x67\x61\x70\x6f\x72\x65",													"\x73\x67", "\x53\x47\x50" ],
		[ r4b.c9d,						  "\x53\x69\x6e\x74\x4d\x61\x61\x72\x74\x65\x6e\x44\x75\x74\x63\x68\x50\x61\x72\x74",  					  "\x53\x69\x6e\x74\x20\x4d\x61\x61\x72\x74\x65\x6e",												"\x73\x78", "\x53\x58\x4d" ],
		[ r4b.w0d,  											  "\x53\x6c\x6f\x76\x61\x6b\x69\x61",												  "\x53\x6c\x6f\x76\x61\x6b\x69\x61",														"\x73\x6b", "\x53\x56\x4b" ],
		[ r4b.p2e,  											  "\x53\x6c\x6f\x76\x65\x6e\x69\x61",												  "\x53\x6c\x6f\x76\x65\x6e\x69\x61",														"\x73\x69", "\x53\x56\x4e" ],
		[ r4b.g3v,  								  "\x53\x6f\x6c\x6f\x6d\x6f\x6e\x49\x73\x6c\x61\x6e\x64\x73",									  "\x53\x6f\x6c\x6f\x6d\x6f\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73", 										"\x73\x62", "\x53\x4c\x42" ],
		[ r4b.k5g,  											 	"\x53\x6f\x6d\x61\x6c\x69\x61",													"\x53\x6f\x6d\x61\x6c\x69\x61",														"\x73\x6f", "\x53\x4f\x4d" ],
		[ r4b.q1z,  									 	"\x53\x6f\x75\x74\x68\x41\x66\x72\x69\x63\x61",											"\x53\x6f\x75\x74\x68\x20\x41\x66\x72\x69\x63\x61",												"\x7a\x61", "\x5a\x41\x46" ],
		[ r4b.v8q, "\x53\x6f\x75\x74\x68\x47\x65\x6f\x72\x67\x69\x61\x53\x6f\x75\x74\x68\x53\x61\x6e\x64\x77\x69\x63\x68\x49\x73\x6c\x61\x6e\x64\x73", "\x53\x6f\x75\x74\x68\x20\x47\x65\x6f\x72\x67\x69\x61\x20\x61\x6e\x64\x20\x53\x6f\x75\x74\x68\x20\x53\x61\x6e\x64\x77\x69\x63\x68", 	"\x67\x73", "\x53\x47\x53" ],
		[ r4b.y2o,  										  "\x53\x6f\x75\x74\x68\x53\x75\x64\x61\x6e",											  "\x53\x6f\x75\x74\x68\x65\x72\x6e\x20\x53\x75\x64\x61\x6e", 										"\x73\x73", "\x53\x53\x44" ],
		[ r4b.t7y,  									 	"\x53\x6f\x76\x69\x65\x74\x55\x6e\x69\x6f\x6e",											"\x53\x6f\x76\x69\x65\x74\x20\x55\x6e\x69\x6f\x6e", 			 								"\x73\x75", "\x55\x52\x53" ],
		[ r4b.a6u, 	 												  "\x53\x70\x61\x69\x6e",														"\x53\x70\x61\x69\x6e",															"\x65\x73", "\x45\x53\x50" ],
		[ r4b.v4p,  											  "\x53\x72\x69\x4c\x61\x6e\x6b\x61",												  "\x53\x72\x69\x20\x4c\x61\x6e\x6b\x61",													"\x6c\x6b", "\x4c\x4b\x41" ],
		[ r4b.r6z,  												 	"\x53\x75\x64\x61\x6e",														"\x53\x75\x64\x61\x6e",															"\x73\x64", "\x53\x44\x4e" ],
		[ r4b.i9x,  											  "\x53\x75\x72\x69\x6e\x61\x6d\x65",												  "\x53\x75\x72\x69\x6e\x61\x6d\x65",														"\x73\x72", "\x53\x55\x52" ], 
		[ r4b.f8e,  											  "\x53\x76\x61\x6c\x62\x61\x72\x64",												  "\x4e\x6f\x72\x77\x61\x79", 														"\x73\x6a", "\x53\x4a\x4d" ], 
		[ r4b.p9h,  										 	"\x53\x77\x61\x7a\x69\x6c\x61\x6e\x64",												"\x53\x77\x61\x7a\x69\x6c\x61\x6e\x64",													"\x73\x7a", "\x53\x57\x5a" ],
		[ r4b.v5l,  												  "\x53\x77\x65\x64\x65\x6e",													  "\x53\x77\x65\x64\x65\x6e",															"\x73\x65", "\x53\x57\x45" ],
		[ r4b.i4l,  									 	"\x53\x77\x69\x74\x7a\x65\x72\x6c\x61\x6e\x64",											"\x53\x77\x69\x74\x7a\x65\x72\x6c\x61\x6e\x64",												"\x63\x68", "\x43\x48\x45" ],
		[ r4b.z3a,  												 	"\x53\x79\x72\x69\x61",														"\x53\x79\x72\x69\x61",															"\x73\x79", "\x53\x59\x52" ],
		[ r4b.p2v,  												  "\x54\x61\x69\x77\x61\x6e",													  "\x54\x61\x69\x77\x61\x6e",															"\x74\x77", "\x54\x57\x4e" ],
		[ r4b.w2f,  										  "\x54\x61\x6a\x69\x6b\x69\x73\x74\x61\x6e",											  "\x54\x61\x6a\x69\x6b\x69\x73\x74\x61\x6e",													"\x74\x6a", "\x54\x4a\x4b" ],
		[ r4b.i6a,  											  "\x54\x61\x6e\x7a\x61\x6e\x69\x61",												  "\x54\x61\x6e\x7a\x61\x6e\x69\x61",														"\x74\x7a", "\x54\x5a\x41" ],
		[ r4b.u1l, 											  "\x54\x68\x61\x69\x6c\x61\x6e\x64",												  "\x54\x68\x61\x69\x6c\x61\x6e\x64",														"\x74\x68", "\x54\x48\x41" ],
		[ r4b.s7c,  										  "\x54\x69\x6d\x6f\x72\x4c\x65\x73\x74\x65",	  									  "\x54\x69\x6d\x6f\x72\x2d\x4c\x65\x73\x74\x65", 												"\x74\x6c", "\x54\x4c\x53" ], 
		[ r4b.q3x, 													 	"\x54\x6f\x67\x6f",														  "\x54\x6f\x67\x6f",																"\x74\x67", "\x54\x47\x4f" ],
		[ r4b.a8c,  											 	"\x54\x6f\x6b\x65\x6c\x61\x75",													"\x54\x6f\x6b\x65\x6c\x61\x75",														"\x74\x6b", "\x54\x4b\x4c" ], 
		[ r4b.b9y,  												 	"\x54\x6f\x6e\x67\x61",														"\x54\x6f\x6e\x67\x61",															"\x74\x6f", "\x54\x4f\x4e" ],
		[ r4b.g6o,  								  "\x54\x72\x69\x6e\x69\x64\x61\x64\x54\x6f\x62\x61\x67\x6f",									  "\x54\x72\x69\x6e\x69\x64\x61\x64\x20\x26\x20\x54\x6f\x62\x61\x67\x6f", 									"\x74\x74", "\x54\x54\x4f" ],
		[ r4b.s7z,  												"\x54\x75\x6e\x69\x73\x69\x61",													"\x54\x75\x6e\x69\x73\x69\x61",														"\x74\x6e", "\x54\x55\x4e" ],
		[ r4b.y3v,  												  "\x54\x75\x72\x6b\x65\x79",													  "\x54\x75\x72\x6b\x65\x79",															"\x74\x72", "\x54\x55\x52" ],
		[ r4b.k0s,  									  "\x54\x75\x72\x6b\x6d\x65\x6e\x69\x73\x74\x61\x6e",										  "\x54\x75\x72\x6b\x6d\x65\x6e\x69\x73\x74\x61\x6e",												"\x74\x6d", "\x54\x4b\x4d" ],
		[ r4b.j7x,  						  "\x54\x75\x72\x6b\x73\x43\x61\x69\x63\x6f\x73\x49\x73\x6c\x61\x6e\x64\x73",							  "\x54\x75\x72\x6b\x73\x20\x61\x6e\x64\x20\x43\x61\x69\x63\x6f\x73\x20\x49\x73\x6c\x61\x6e\x64\x73", 					"\x74\x63", "\x54\x43\x41" ],
		[ r4b.u8j,  												  "\x54\x75\x76\x61\x6c\x75",													  "\x54\x75\x76\x61\x6c\x75", 														"\x74\x76", "\x54\x55\x56" ],
		[ r4b.i0f,  												  "\x55\x67\x61\x6e\x64\x61",													  "\x55\x67\x61\x6e\x64\x61",															"\x75\x67", "\x55\x47\x41" ],
		[ r4b.n7l,  											  "\x55\x6b\x72\x61\x69\x6e\x65",													"\x55\x6b\x72\x61\x69\x6e\x65",														"\x75\x61", "\x55\x4b\x52" ],
		[ r4b.u4k,  						  "\x55\x6e\x69\x74\x65\x64\x41\x72\x61\x62\x45\x6d\x69\x72\x61\x74\x65\x73",							  "\x55\x6e\x69\x74\x65\x64\x20\x41\x72\x61\x62\x20\x45\x6d\x69\x72\x61\x74\x65\x73",								"\x61\x65", "\x41\x52\x45" ],
		[ r4b.i2l,  									"\x55\x6e\x69\x74\x65\x64\x4b\x69\x6e\x67\x64\x6f\x6d",										"\x55\x6e\x69\x74\x65\x64\x20\x4b\x69\x6e\x67\x64\x6f\x6d\x28\x47\x72\x65\x61\x74\x20\x42\x72\x69\x74\x61\x69\x6e\x29", 			"\x67\x62", "\x47\x42\x52" ], 
		[ r4b.i6i,  									  "\x55\x6e\x69\x74\x65\x64\x53\x74\x61\x74\x65\x73",										  "\x55\x6e\x69\x74\x65\x64\x20\x53\x74\x61\x74\x65\x73\x20\x6f\x66\x20\x41\x6d\x65\x72\x69\x63\x61", 					"\x75\x73", "\x55\x53\x41" ],
		[ r4b.w5i, "\x55\x6e\x69\x74\x65\x64\x53\x74\x61\x74\x65\x73\x4d\x69\x6e\x6f\x72\x4f\x75\x74\x6c\x79\x69\x6e\x67\x49\x73\x6c\x61\x6e\x64\x73", "\x55\x6e\x69\x74\x65\x64\x20\x53\x74\x61\x74\x65\x73\x20\x6f\x66\x20\x41\x6d\x65\x72\x69\x63\x61",						"\x75\x6d", "\x55\x4d\x49" ],
		[ r4b.m1l,  										 		"\x55\x72\x75\x67\x75\x61\x79",													"\x55\x72\x75\x67\x75\x61\x79",														"\x75\x79", "\x55\x52\x59" ],
		[ r4b.o2m,  									 	  "\x55\x7a\x62\x65\x6b\x69\x73\x74\x61\x6e",											  "\x55\x7a\x62\x65\x6b\x69\x73\x74\x61\x6e",													"\x75\x7a", "\x55\x5a\x42" ],
		[ r4b.i8k,  										 		"\x56\x61\x6e\x75\x61\x74\x75",													"\x56\x61\x6e\x75\x61\x74\x75",														"\x76\x75", "\x56\x55\x54" ],
		[ r4b.h4k,  											"\x56\x65\x6e\x65\x7a\x75\x65\x6c\x61",												"\x56\x65\x6e\x65\x7a\x75\x65\x6c\x61",													"\x76\x65", "\x56\x45\x4e" ],
		[ r4b.c7n,  												"\x56\x69\x65\x74\x6e\x61\x6d",													"\x56\x69\x65\x74\x20\x4e\x61\x6d",														"\x76\x6e", "\x56\x4e\x4d" ],
		[ r4b.l1h,  					  "\x56\x69\x72\x67\x69\x6e\x49\x73\x6c\x61\x6e\x64\x73\x42\x72\x69\x74\x69\x73\x68",       			"\x56\x69\x72\x67\x69\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73\x20\x42\x72\x69\x74\x69\x73\x68", 						"\x76\x67", "\x56\x47\x42" ],
		[ r4b.p6w,  								"\x56\x69\x72\x67\x69\x6e\x49\x73\x6c\x61\x6e\x64\x73\x55\x53",	  							"\x56\x69\x72\x67\x69\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73\x20\x55\x53", 									"\x76\x69", "\x56\x49\x52" ],
		[ r4b.b6v,  													"\x57\x61\x6c\x65\x73",														"\x57\x61\x6c\x65\x73",															"\x78\x38", "\x47\x42\x52" ],
		[ r4b.f3z,  									  "\x57\x61\x6c\x6c\x69\x73\x46\x75\x74\x75\x6e\x61",										  "\x57\x61\x6c\x6c\x69\x73\x20\x61\x6e\x64\x20\x46\x75\x74\x75\x6e\x61",									"\x77\x66", "\x57\x4c\x46" ],
		[ r4b.t1s,  									"\x57\x65\x73\x74\x65\x72\x6e\x53\x61\x68\x61\x72\x61",										"\x57\x65\x73\x74\x65\x72\x6e\x20\x53\x61\x68\x61\x72\x61",											"\x65\x68", "\x45\x53\x48" ],
		[ r4b.a5m,  											 		"\x59\x65\x6d\x65\x6e",														"\x59\x65\x6d\x65\x6e",															"\x79\x65", "\x59\x45\x4d" ],
		[ r4b.d1u,  											 		"\x5a\x61\x69\x72\x65",														"",																		"\x7a\x72", "\x5a\x52\x4e" ], 
		[ r4b.e6k,  											 	  "\x5a\x61\x6d\x62\x69\x61",													  "\x5a\x61\x6d\x62\x69\x61",															"\x7a\x6d", "\x5a\x4d\x42" ],
		[ r4b.h9f,  										 	  "\x5a\x69\x6d\x62\x61\x62\x77\x65",												  "\x5a\x69\x6d\x62\x61\x62\x77\x65",														"\x7a\x77", "\x5a\x57\x45" ],
];

function t9z(u0n)
{
	return m5s[u0n][2];
}

function y6v(u0n)
{
	return m5s[u0n][4];
}

function v6w(w3o)
{
	for (const u0n of m5s)
	{
		if (u0n[4] == w3o)
		{
			return u0n[0];
		}
	}
	return r4b.d3j;
}

function f7a(f7b)
{
	for (const u0n of m5s)
	{
		if (u0n[3] == f7b)
		{
			return u0n[0];
		}
	}
	return r4b.d3j;
}
class y2y
{

constructor()
{
	this.c9e = '';
}

i1n(i8s)
{
	this.c9e += i8s;
}

y4r(i8s)
{
	this.c9e += i8s + '\n';
}

i6x()
{
	this.c9e += '\n';
}

}




function q6d(e4g, y7z)
{
	let e8w = Number(e4g);
	if (isNaN(e8w))
	{
		return y7z;
	}
	else
	{
		return e8w;
	}
}
