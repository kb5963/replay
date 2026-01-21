const	chess = false; 

const n8u =
{
	t1y   : 0,
	a5z   : 1,
	d4a   : 2,
	t7q   : 3,
	y0l       : 4,
};

const h7x =
{
	b5c        : 0,
	i6o        : 1,
};

const	sq_1 = 0;
const c3f = 1;
const r7z = 2;
const y0n = 3;
const v9u = 4;
const l3z = 5;
const z1f = 6;
const e5y = 7;
const s4l = 8;
const k7a = 9;
const f2w = 10;
const d7w = 11;
const v4e = 12;
const c5t = 13;
const u6z = 14;
const a4f = 15;
const x6d = 16;
const t4o = 17;
const c8o = 18;
const v1h = 19;
const c7h = 20;
const k0h = 21;
const p8b = 22;
const f6h = 23;
const e8s = 24;
const h0t = 25;
const v7w = 26;
const y6x = 27;
const m5q = 28;
const d8g = 29;
const a1j = 30;
const c9x = 31;
const c5x = 32;
const w4y = 33;
const b8l = 34;
const h0u = 35;
const f2f = 36;
const j0l = 37;
const f7n = 38;
const k7c = 39;
const c0y = 40;
const r3t = 41;
const s4y = 42;
const e4p = 43;
const r5v = 44;
const e9x = 45;
const y5w = 46;
const b2e = 47;
const z7d = 48;
const c3o = 49;
const q8i = 50;

const v9s = 0;
const p9h = 1;
const u4s = 2;
const z6g = 3;
const c9e = 4;
const g3r = 5;
const e1f = 6;
const j2t = 7;
const j6t = 8;
const m2k = 9;
const d6n = 10;

const	rank_1 = 0;
const m1g = 1;
const d2p = 2;
const j8a = 3;
const a9s = 4;
const r0w = 5;
const t3z = 6;
const k8e = 7;
const c8e = 8;
const t5r = 9;
const s6y = 10;

const c4f        = 10;
const o1s       = 50;
const t5z      = 20;

const k1p =
[
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
 	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.d4a,  
	n8u.y0l,      
	n8u.y0l, 	    
	n8u.y0l, 	    
	n8u.y0l, 	    
	n8u.y0l, 	    
	n8u.y0l, 	    
	n8u.y0l, 	    
	n8u.y0l, 	    
	n8u.y0l, 	    
	n8u.y0l, 	    
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
	n8u.t1y,  
];

const t0x =
[
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
 	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
	n8u.y0l,  
];

const w7k =
[
	sq_1,  c3f,  r7z,  y0n,  v9u,
	l3z,  z1f,  e5y,  s4l,  k7a,
	f2w, d7w, v4e, c5t, u6z,
	a4f, x6d, t4o, c8o, v1h,
	c7h, k0h, p8b, f6h, e8s,
	h0t, v7w, y6x, m5q, d8g,
	a1j, c9x, c5x, w4y, b8l,
	h0u, f2f, j0l, f7n, k7c,
	c0y, r3t, s4y, e4p, r5v,
	e9x, y5w, b2e, z7d, c3o,
];

const a1p =
[
	v9s,
  p9h,
  u4s,
  z6g,
  c9e,
  g3r,
  e1f,
  j2t,
  j6t,
  m2k,
];

const z8a =
[
	rank_1,
  m1g,
  d2p,
  j8a,
  a9s,
  r0w,
  t3z,
  k8e,
  c8e,
  t5r,
];

function z1t(v8b)
{
	return v8b == n8u.d4a ||
    v8b == n8u.t7q;
}

function y3p(v8b)
{
	return v8b == n8u.t1y ||
    v8b == n8u.a5z;
}

function i2x(v8b)
{
	return v8b == n8u.t1y || v8b == n8u.d4a;
}

function z1m(v8b)
{
	return v8b == n8u.a5z || v8b == n8u.t7q;
}

function o3j(n4z)
{
	if (n4z == q8i)
	{
		return q8i;
	}
	else
	{
		return o1s - n4z - 1;
	}
}

const t1a =
[
	p9h,	z6g,	g3r,	j2t,	m2k,
	v9s,	u4s,	c9e,	e1f,	j6t,
	p9h,	z6g,	g3r,	j2t,	m2k,
	v9s,	u4s,	c9e,	e1f,	j6t,
	p9h,	z6g,	g3r,	j2t,	m2k,
	v9s,	u4s,	c9e,	e1f,	j6t,
	p9h,	z6g,	g3r,	j2t,	m2k,
	v9s,	u4s,	c9e,	e1f,	j6t,
	p9h,	z6g,	g3r,	j2t,	m2k,
	v9s,	u4s,	c9e,	e1f,	j6t,
];

function z6v(n4z)
{
	return t1a[n4z];
}

const h0f =
[
	t5r, t5r,	t5r, t5r,	t5r,
	c8e,	 c8e,	c8e,	 c8e,	c8e,
	k8e,	 k8e,	k8e,	 k8e,	k8e,
	t3z,	 t3z,	t3z,	 t3z,	t3z,
	r0w,	 r0w,	r0w,	 r0w,	r0w,
	a9s,	 a9s,	a9s,	 a9s,	a9s,
	j8a,	 j8a,	j8a,	 j8a,	j8a,
	d2p,	 d2p,	d2p,	 d2p,	d2p,
	m1g,	 m1g,	m1g,	 m1g,	m1g,
	rank_1,	 rank_1,	rank_1,	 rank_1,	rank_1,
];

function j6b(n4z)
{
	return h0f[n4z];
}

function y9m(a, b)
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

function s3s(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function o4s(o0g, v8b)
{
	let c5v = 0;
	for (const q4y of o0g)
	{
		if (q4y == v8b)
		{
			c5v++;
		}
	}
	return c5v;
}

function v5s(u6i)
{
 	let q4y = i6u(u6i, 0);
	if (q4y <= 0)
	{
		return q8i;
	}
	else
	{
		q4y--; 
		if (q4y >= sq_1 && q4y <= c3o)
		{
			return q4y;
		}
		else
		{
			return q8i;
		}
	}
}

function y3m(n4z)
{
 	let u6i = '';
	u6i = (n4z + 1);
  return u6i;
}







function o4l(n4z)
{
	return n4z >= e9x;
}

function f1m(n4z)
{
	return n4z <= v9u;
}

function c0g(r6w)
{
	return !(r6w % 2);
}

class d5f
{

constructor()
{
}

n7y()
{
	let o5b = new d5f();
  return Object.assign(o5b, this);
}

}


class n1y
{

constructor()
{
  this.y3t = Array(o1s).fill(n8u.y0l);
 	this.j3q = h7x.b5c;
 	this.s3z = new d5f();
 	this.a1m();
}

n7y()
{
	let k6i = new n1y();
	s3s(k6i.y3t, this.y3t);
	k6i.j3q = this.j3q;
  k6i.s3z = this.s3z.n7y();
	return k6i;
}

g0c(t3o)
{
	return this.j3q == t3o.j3q &&
		y9m(this.y3t, t3o.y3t);
}

e1j(t3o)
{
	return !this.g0c(t3o);
}

a4p()
{
 	s3s(this.y3t, k1p);
 	this.j3q = h7x.b5c;
}

d5c()
{
	return this.j3q == h7x.b5c && this.y5p();
}

y5p()
{
	return y9m(this.y3t, k1p);
}

a1m()
{
	this.y3t.fill(n8u.y0l);
	this.j3q = h7x.b5c;
}

t2z()
{
	return this.j3q == h7x.b5c && this.r3g();
}

r3g()
{
	return this.y3t.every(n8u.y0l);
}

o0g()
{
  return this.y3t.slice();
}

l7l(n4z)
{
	return this.y3t[n4z];
}

f2l(n4z, v8b)
{
	this.y3t[n4z] = v8b;
}

n1d()
{
	this.j3q = h7x.b5c;
}

x3c()
{
	this.j3q = h7x.i6o;
}

p0r()
{
	if (this.j3q == h7x.b5c)
	{
		this.j3q = h7x.i6o;
	}
	else
	{
		this.j3q = h7x.b5c;
	}
}

v7m()
{
	return this.j3q == h7x.b5c;
}

x0j()
{
	return this.j3q == h7x.i6o;
}

w5u(n4z)
{
	return this.y3t[n4z] == n8u.y0l;
}

y3p(n4z)
{
	let v8b = this.y3t[n4z];
	return v8b == n8u.t1y ||
    v8b == n8u.a5z;
}

z1t(n4z)
{
	let v8b = this.y3t[n4z];
	return v8b == n8u.d4a ||
    v8b == n8u.t7q;
}

s7i(n4z)
{
  let v8b = this.y3t[n4z];
	return v8b == n8u.t1y;
}

c9m(n4z)
{
  let v8b = this.y3t[n4z];
	return v8b == n8u.a5z;
}

i7v(n4z)
{
  let v8b = this.y3t[n4z];
	return v8b == n8u.d4a;
}

o4i(n4z)
{
  let v8b = this.y3t[n4z];
	return v8b == n8u.t7q;
}

n4n()
{
  let c5v = 0;
	for (const n4z of w7k)
	{
    if (this.y3p(n4z))
		{
			c5v++;
		}
	}
	return c5v;
}

n5e()
{
  let c5v = 0;
	for (const n4z of w7k)
	{
    if (this.z1t(n4z))
		{
			c5v++;
		}
	}
	return c5v;
}

g7d(h2p)
{
  this.s3z = h2p.n7y();
}

h2p()
{
  return this.s3z.n7y();
}

t2m(x6s)
{
	if (x6s.p5g())
	{
    this.p0r();
		return;
	}
	this.f2l(x6s.s2i, n8u.y0l);
	this.f2l(x6s.e3m, x6s.v3d);
	for (const n4z of x6s.s9q)
	{
		this.f2l(n4z, n8u.y0l);
	}
	this.p0r();
}

q3y(x6s)
{
	if (x6s.p5g())
	{
    this.p0r();
		return;
	}
	this.f2l(x6s.e3m, n8u.y0l);
	this.f2l(x6s.s2i, x6s.s6b);
	let i = 0;
	for (const n4z of x6s.s9q)
	{
		this.f2l(n4z, x6s.z5l[i]);
    i++;
	}
	this.p0r();
}

}
const z8p  = 0;
const e0z   = 1;
const u7l  = z8p;

function j3k()
{
  let n0j = [];
	n0j.push("\x45\x6c\x6c\x69\x70\x73\x65");
	n0j.push("\x43\x69\x72\x63\x6c\x65");
	return n0j;
}

class h2g
{

constructor()
{
	this.i4m = new m1c();
	this.u7f = null;
}

n7y()
{
	let c9y = new h2g();
	c9y.i4m = this.i4m.n7y();
	c9y.u7f = null;
	if (this.u7f)
	{
		c9y.u7f = this.u7f.n7y();
	}
	return c9y;
}

g0c(t3o)
{
	if (this.i4m.e1j(t3o))
	{
		return false;
	}
	return true;
}

e1j(t3o)
{
	return !this.g0c(t3o);
}

y0l()
{
	return this.i4m.y0l();
}

s2i()
{
	return this.i4m.s2i;
}

e3m()
{
	return this.i4m.e3m;
}

s6b()
{
	return this.i4m.s6b;
}

v3d()
{
	return this.i4m.v3d;
}

s9q()
{
  return this.i4m.s9q.slice();
}

z5l()
{
  return this.i4m.z5l.slice();
}

b5h()
{
	return this.i4m.b5h();
}

y3p()
{
	return this.i4m.y3p();
}

z1t()
{
	return this.i4m.z1t();
}

w2b()
{
	return this.i4m.w2b();
}

p5g()
{
	return this.i4m.p5g();
}

l9v()
{
	return this.i4m.l9v();
}

i2u()
{
	if (this.u7f == null)
	{
		this.u7f = new v0r();
	}
}

d3j()
{
	if (this.u7f)
	{
		if (this.u7f.y0l())
		{
			this.c7g();
		}
	}
}

f5e()
{
	return this.u7f != null;
}

c7g()
{
	this.u7f = null;
}

p2d(l5k)
{
	this.i2u();
	this.u7f = l5k.n7y();
}

a1y()
{
	return this.u7f;
}

y8o(t3o)
{
	if (this.u7f && !t3o.u7f)
	{
		return false;
	}
	if (!this.u7f && t3o.u7f)
	{
		return false;
	}
	if (!this.u7f && !t3o.u7f)
	{
		return true;
	}
	return this.u7f.g0c(t3o.u7f);
}

l4p()
{
	if (this.u7f)
	{
		this.u7f.f3w = '';
		this.d3j();
	}
}

x1e()
{
	if (this.u7f)
	{
		return this.u7f.f3w.length != 0;
	}
	else
	{
		return false;
	}
}

f3w()
{
	if (this.u7f)
	{
		return this.u7f.f3w;
	}
	else
	{
		return '';
	}
}

q1o(s7u)
{
	this.i2u();
	this.u7f.f3w = s7u;
	this.d3j();
}

l0p()
{
	if (this.u7f)
	{
		this.u7f.m3d = '';
		this.d3j();
	}
}

b7j()
{
	if (this.u7f)
	{
		return this.u7f.m3d.length != 0;
	}
	else
	{
		return false;
	}
}

m3d()
{
	if (this.u7f)
	{
		return this.u7f.m3d;
	}
	else
	{
		return '';
	}
}

j9h(s7u)
{
	this.i2u();
	this.u7f.m3d = s7u;
	this.d3j();
}

n7t()
{
	if (this.u7f)
	{
		this.u7f.a4t = x5i.r9e;
		this.d3j();
	}
}

t3v()
{
	if (this.u7f)
	{
		return this.u7f.a4t != x5i.r9e;
	}
	else
	{
		return false;
	}
}

a4t()
{
	if (this.u7f)
	{
		return this.u7f.a4t;
	}
	else
	{
		return x5i.r9e;
	}
}

r9g(a4t)
{
	this.i2u();
	this.u7f.a4t = a4t;
	this.d3j();
}

v3g()
{
	if (this.u7f)
	{
		this.u7f.style = v9v.r9e;
		this.d3j();
	}
}

h2o()
{
	if (this.u7f)
	{
		return this.u7f.style != v9v.r9e;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.u7f)
	{
		return this.u7f.style;
	}
	else
	{
		return v9v.r9e;
	}
}

d5g(style)
{
	this.i2u();
	this.u7f.style = style;
	this.d3j();
}

h1p()
{
	if (this.u7f)
	{
		this.u7f.q4y = l8k.r9e;
		this.d3j();
	}
}

z9p()
{
	if (this.u7f)
	{
		return this.u7f.q4y != l8k.r9e;
	}
	else
	{
		return false;
	}
}

q4y()
{
	if (this.u7f)
	{
		return this.u7f.q4y;
	}
	else
	{
		return l8k.r9e;
	}
}

b6i(q4y)
{
	this.i2u();
	this.u7f.q4y = q4y;
	this.d3j();
}

z5s()
{
	if (this.u7f)
	{
		this.u7f.o2d = x2n.r9e;
		this.d3j();
	}
}

f3x()
{
	if (this.u7f)
	{
		return this.u7f.o2d != x2n.r9e;
	}
	else
	{
		return false;
	}
}

o2d()
{
	if (this.u7f)
	{
		return this.u7f.o2d;
	}
	else
	{
		return x2n.r9e;
	}
}

p2g(o2d)
{
	this.i2u();
	this.u7f.o2d = o2d;
	this.d3j();
}

p4u()
{
  
}

c5f()
{
	if (this.u7f)
	{
 		if (this.u7f.f3w.length != 0)
    {
      let z4w = this.u7f.f3w.indexOf("\x5b\x23\x5d");
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

r5b()
{
  
}

b3p()
{
	if (this.u7f)
	{
		this.u7f.v8t = false;
		this.d3j();
	}
}

p3r()
{
	if (this.u7f)
	{
		return this.u7f.v8t;
	}
	else
	{
		return false;
	}
}

j0g()
{
	this.i2u();
	this.u7f.v8t = true;
	this.d3j();
}

q5a()
{
	if (this.u7f)
	{
		this.u7f.d5m = false;
		this.d3j();
	}
}

h6r()
{
	if (this.u7f)
	{
		return this.u7f.d5m;
	}
	else
	{
		return false;
	}
}

h7c()
{
	this.i2u();
	this.u7f.d5m = true;
	this.d3j();
}

e6r()
{
	if (this.u7f)
	{
		this.u7f.c0j.o7g();
		this.u7f.f9y.o7g();
		this.d3j();
	}
}

x1i()
{
	if (this.u7f)
	{
		return this.c6i() || this.w2r();
	}
	else
	{
		return false;
	}
}

k4u()
{
	if (this.u7f)
	{
		this.u7f.c0j.o7g();
		this.d3j();
	}
}

c6i()
{
	if (this.u7f)
	{
		return !this.u7f.c0j.y0l();
	}
	else
	{
		return false;
	}
}

c0j()
{
	if (this.u7f)
	{
		return this.u7f.c0j.n7y();
	}
	else
	{
		return new s7c();
	}
}

h6d(c0j)
{
	this.i2u();
	this.u7f.c0j = c0j.n7y();
	this.d3j();
}

n4c()
{
	if (this.u7f)
	{
		this.u7f.f9y.o7g();
		this.d3j();
	}
}

w2r()
{
	if (this.u7f)
	{
		return !this.u7f.f9y.y0l();
	}
	else
	{
		return false;
	}
}

f9y()
{
	if (this.u7f)
	{
		return this.u7f.f9y.n7y();
	}
	else
	{
		return new x6l();
	}
}

i7y(f9y)
{
	this.i2u();
	this.u7f.f9y = f9y.n7y();
	this.d3j();
}

y7p()
{
	if (this.u7f)
	{
		this.u7f.m4a.d4p();
		this.d3j();
	}
}

g3j()
{
	if (this.u7f)
	{
		return this.u7f.m4a.c7i();
	}
	else
	{
		return false;
	}
}

m4a()
{
	if (this.u7f)
	{
		return this.u7f.m4a.n7y();
	}
	else
	{
		return new c2u();
	}
}

b6n(m4a)
{
	this.i2u();
	this.u7f.m4a = m4a.n7y();
	this.d3j();
}

p7w(i0h)
{
	this.i4m = i0h.n7y();
	this.u7f = null;
}

i0h()
{
	let w2m = new m1c();
  return Object.assign(w2m, this.i4m);
}

}

function i5c(i0h)
{
  let f6t = new h2g();
  f6t.p7w(i0h);
  return f6t;
}
class m1c
{

constructor()
{
	this.s2i = q8i;
	this.s6b = n8u.y0l;
	this.e3m = q8i;
	this.v3d = n8u.y0l;
	this.s9q = [];
	this.z5l = [];
	this.q9g = [];
}

n7y()
{
	let w2m = new m1c();
	w2m.s2i = this.s2i;
	w2m.s6b = this.s6b;
	w2m.e3m = this.e3m;
	w2m.v3d = this.v3d;
	w2m.s9q = this.s9q.slice();
	w2m.z5l = this.z5l.slice();
	w2m.q9g = this.q9g.slice();
	return w2m;
}

g0c(t3o)
{
	if (
		this.s2i != t3o.s2i ||
		this.s6b != t3o.s6b ||
		this.e3m != t3o.e3m ||
		this.v3d != t3o.v3d)
	{
		return false;
	}
	else
	{
		for (const n4z of this.s9q)
		{
			let x8h = t3o.s9q.find(function(b2b){ return b2b == n4z; });
			if (x8h === undefined)
			{
				return false;
			}
		}
		for (const v8b of this.z5l)
		{
			let x8h = t3o.z5l.find(function(b2b){ return b2b == v8b; });
			if (x8h === undefined)
			{
				return false;
			}
		}
		return true;
	}
}

e1j(t3o)
{
	return !this.g0c(t3o);
}

y0l()
{
	return this.s2i == q8i;
}

y3p()
{
 	return this.s6b == n8u.t1y ||
		this.s6b == n8u.a5z;
}

z1t()
{
 	return this.s6b == n8u.d4a ||
		this.s6b == n8u.t7q;
}

l9v()
{
  return this.s9q.length > 0;
}

w2b()
{
	return this.s6b != this.v3d;
}

p5g()
{
	return this.s2i == q8i;
}

o2z(n4z)
{
	let x8h = this.s9q.find(function(b2b){ return b2b == n4z; });
	return (x8h !== undefined);
}


p1d(u7k)
{
	for (const n4z of u7k)
	{
		let x8h = this.s9q.find(function(b2b){ return b2b == n4z; });
		if (x8h === undefined)
		{
			return false;
		}
	}
	return true;
}


r3f(n4z)
{
	let x8h = this.q9g.find(function(b2b){ return b2b == n4z; });
	return (x8h !== undefined);
}

b7t(u7k)
{
	for (const n4z of u7k)
	{
		let x8h = this.q9g.find(function(b2b){ return b2b == n4z; });
		if (x8h === undefined)
		{
			return false;
		}
	}
	return true;
}

b5h()
{
  return this.s9q.length;
}

}

const t7e =
[
	q8i, q8i,	q8i, q8i,	q8i, q8i, q8i, q8i,	q8i, q8i, q8i, q8i, q8i, q8i,
	q8i, q8i,	q8i, q8i, q8i, q8i,	q8i, q8i,	q8i, q8i,	q8i, q8i,	q8i, q8i,
	q8i, q8i,	q8i, sq_1,	q8i, c3f,	q8i, r7z,	q8i, y0n,	q8i, v9u,	q8i, q8i,
	q8i, q8i,	l3z,  q8i,	z1f,  q8i,	e5y,  q8i,	s4l,  q8i,	k7a, q8i,	q8i, q8i,
	q8i, q8i,	q8i, f2w,	q8i, d7w,	q8i, v4e,	q8i, c5t,	q8i, u6z,	q8i, q8i,
	q8i, q8i,	a4f, q8i,	x6d, q8i,	t4o, q8i,	c8o, q8i,	v1h, q8i,	q8i, q8i,
	q8i, q8i,	q8i, c7h,	q8i, k0h,	q8i, p8b,	q8i, f6h,	q8i, e8s,	q8i, q8i,
	q8i, q8i, h0t, q8i,	v7w, q8i,	y6x, q8i,	m5q, q8i,	d8g, q8i,	q8i, q8i,
	q8i, q8i,	q8i, a1j,	q8i, c9x,	q8i, c5x,	q8i, w4y,	q8i, b8l,	q8i, q8i,
	q8i, q8i,	h0u, q8i,	f2f, q8i,	j0l, q8i,	f7n, q8i,	k7c, q8i,	q8i, q8i,
	q8i, q8i,	q8i, c0y,	q8i, r3t,	q8i, s4y,	q8i, e4p,	q8i, r5v,	q8i, q8i,
	q8i, q8i,	e9x, q8i,	y5w, q8i,	b2e, q8i,	z7d, q8i,	c3o, q8i,	q8i, q8i,
	q8i, q8i,	q8i, q8i,	q8i, q8i,	q8i, q8i,	q8i, q8i,	q8i, q8i,	q8i, q8i,
	q8i, q8i,	q8i, q8i,	q8i, q8i,	q8i, q8i,	q8i, q8i,	q8i, q8i,	q8i, q8i,
];

const c4b =
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

class h4r
{

constructor()
{
	this.v9y = [];
  this.w4r = Array(o1s).fill(q8i);
  this.c4c = Array(o1s).fill(q8i);
  this.f5s = Array(o1s).fill(n8u.y0l);
  this.u2m = Array(o1s).fill(false);
  this.x6h = 0;
	this.s1t = new n1y();
	this.w0o = 0;
	this.j9o = q8i;
	this.m5c = n8u.y0l;
	this.m2b = 0;
	this.u9e = 0;
	this.u4x = 0;
	this.y1n = 0;
	this.t8r = false;
}

n7a(x1l)
{
	this.s1t = x1l.n7y();
	this.u2m.fill(false);
  this.x6h = 0;
	let i9f = 14;
	if (this.s1t.v7m())
	{
		this.m2b = -(i9f + 1);
		this.u9e = -(i9f - 1);
		this.u4x = (i9f - 1);
		this.y1n = (i9f + 1);
	}
	else
	{
		this.m2b = (i9f + 1);
		this.u9e = (i9f - 1);
		this.u4x = -(i9f - 1);
		this.y1n = -(i9f + 1);
	}
}

b8f(s2i)
{
 	this.j9o = s2i;
	this.m5c = this.s1t.l7l(this.j9o);
	this.w0o = 0;
	if (
		(this.s1t.v7m() && this.m5c == n8u.t1y) ||
		(this.s1t.x0j() && this.m5c == n8u.d4a))
	{
		this.z3w(this.j9o);
	}
	else if (
		(this.s1t.v7m() && this.m5c == n8u.a5z) ||
		(this.s1t.x0j() && this.m5c == n8u.t7q))
	{
		this.a0h(this.j9o);
	}
}

z3w(n4z)
{
 	this.s5o(n4z, this.m2b);
	this.s5o(n4z, this.u9e);
}

s5o(s2i, z4d)
{
	let e3m = t7e[c4b[s2i] + z4d];
	if (e3m != q8i)
  {
    if (this.s1t.w5u(e3m))
  	{
	  	this.p4g(e3m);
  	}
  }
}

a0h(s2i)
{
	this.z2m(s2i, this.m2b);
	this.z2m(s2i, this.u9e);
	this.z2m(s2i, this.y1n);
	this.z2m(s2i, this.u4x);
}

z2m(s2i, z4d)
{
	let t8l = z4d;
	do
	{
		let e3m = t7e[c4b[s2i] + t8l];
		if (e3m == q8i)
    {
      break;
    }
    if (!this.s1t.w5u(e3m))
		{
			break;
		}
		this.p4g(e3m);
		t8l += z4d;
	} while (true);
}

p3e(s2i)
{
	this.j9o = s2i;
	this.m5c = this.s1t.l7l(this.j9o);
	this.w0o = 0;
	let v8b = this.s1t.l7l(this.j9o);
	if ((this.s1t.v7m() && this.m5c == n8u.t1y) ||
		(this.s1t.x0j() && this.m5c == n8u.d4a))
	{
		this.s1t.f2l(this.j9o, n8u.y0l);
		this.i8p(this.j9o);
	}
	else if (
		(this.s1t.v7m() && this.m5c == n8u.a5z) ||
		(this.s1t.x0j() && this.m5c == n8u.t7q))
	{
		this.s1t.f2l(this.j9o, n8u.y0l);
		this.t3w(this.j9o);
	}
	this.s1t.f2l(this.j9o, v8b);
}

i8p(s2i)
{
	let y6m = true;
	if (this.r4z(s2i, this.m2b))
	{
		y6m = false;
	}
	if (this.r4z(s2i, this.u9e))
	{
		y6m = false;
	}
	if (this.r4z(s2i, this.y1n))
	{
		y6m = false;
	}
	if (this.r4z(s2i, this.u4x))
	{
		y6m = false;
	}
	if (y6m)
	{
		this.x7l(s2i);
	}
}

r4z(s2i, z4d)
{
	let r5n = t7e[c4b[s2i] + z4d];
	if (r5n == q8i)
	{
		return false;
	}
	let e3m = t7e[c4b[s2i] + 2 * z4d];
	if (e3m == q8i)
	{
		return false;
	}
	if (!this.s1t.w5u(e3m))
	{
		return false;
	}
	if (this.u2m[r5n])
	{
		return false;
	}
	if (this.m5c == n8u.t1y)
	{
		if (!this.s1t.z1t(r5n))
		{
			return false;
		}
	}
	else
	{
		if (!this.s1t.y3p(r5n))
		{
			return false;
		}
	}
	this.w4r[this.w0o] = r5n;
	this.f5s[this.w0o] = this.s1t.l7l(r5n);
	this.c4c[this.w0o] = e3m;
	this.w0o++;
	let v8b = this.s1t.l7l(r5n);
	this.u2m[r5n] = true;
	this.i8p(e3m);
	this.u2m[r5n] = false;
	this.s1t.f2l(r5n, v8b);
	this.w0o--;
	return true;
}

t3w(s2i)
{
	let y6m = true;
	if (this.r9v(s2i, this.m2b))
	{
		y6m = false;
	}
	if (this.r9v(s2i, this.u9e))
	{
		y6m = false;
	}
	if (this.r9v(s2i, this.y1n))
	{
		y6m = false;
	}
	if (this.r9v(s2i, this.u4x))
	{
		y6m = false;
	}
	if (y6m)
	{
		this.x7l(s2i);
	}
}

r9v(k0b, z4d)
{
	let r5n = q8i;
	let t8l = z4d;
	do
	{
		r5n = t7e[c4b[k0b] + t8l];
		if (r5n == q8i)
		{
			return false;
		}
		if (this.u2m[r5n])
		{
			return false;
		}
		if (this.m5c == n8u.a5z)
		{
			if (this.s1t.z1t(r5n))
			{
				break;
			}
		}
		else
		{
			if (this.s1t.y3p(r5n))
			{
				break;
			}
		}
		if (!this.s1t.w5u(r5n))
		{
			return false;
		}
		t8l += z4d;
	} while (true);
	let j9b = false;
	do
	{
		t8l += z4d;
		let e3m = t7e[c4b[k0b] + t8l];
		if (e3m == q8i)
    {
      return j9b;
    }
    if (!this.s1t.w5u(e3m))
		{
			return j9b;
		}
		this.w4r[this.w0o] = r5n;
		this.f5s[this.w0o] = this.s1t.l7l(r5n);
		this.c4c[this.w0o] = e3m;
		this.w0o++;
		let s6n = this.s1t.l7l(r5n);
		this.u2m[r5n] = true;
		this.t3w(e3m);
		this.u2m[r5n] = false;
		this.s1t.f2l(r5n, s6n);
		this.w0o--;
		j9b = true;
	} while (true);
}

x7l(e3m)
{
	if (!this.w0o)
	{
		return;
	}
	if (this.w0o >= this.x6h)
	{
		if (this.w0o > this.x6h)
		{
      this.v9y.length = 0;
		}
		this.p4g(e3m);
	}
}

p4g(e3m)
{
	let x6s = new m1c();
	x6s.s2i = this.j9o;
	x6s.e3m = e3m;
	x6s.s6b = this.m5c;
	x6s.v3d = x6s.s6b;
	if (x6s.s6b == n8u.t1y)
	{
		if (f1m(x6s.e3m))
		{
			x6s.v3d = n8u.a5z;
		}
	}
	else if (x6s.s6b == n8u.d4a)
	{
		if (o4l(x6s.e3m))
		{
			x6s.v3d = n8u.t7q;
		}
	}
	for (let i = 0; i < this.w0o; i++)
	{
		x6s.s9q.push(this.w4r[i]);
		x6s.z5l.push(this.f5s[i]);
	}
	for (let i = 0; i < this.w0o - 1; i++)
	{
		x6s.q9g.push(this.c4c[i]);
	}

	if (this.t8r)
	{
		if (this.w0o >= 2)
		{
			let x8h = this.v9y.find(function(b2b)
			{
				if (b2b.g0c(x6s))
				{
					return true;
				}
			});
			if (x8h != undefined)
			{
				return;
			}
		}
	}
	this.x6h = x6s.b5h();
	this.v9y.push(x6s);
}

l1h(x1l, q8y)
{
	this.n7a(x1l);
	this.t8r = q8y;
	this.v9y.length = 0;

	for (const n4z of w7k)
	{
		this.p3e(n4z);
	}

	if (this.v9y.length === 0)
	{
		for (const n4z of w7k)
		{
			this.b8f(n4z);
		}
	}
	return this.v9y;
}

h0i(x1l)
{
	this.n7a(x1l);
	this.t8r = true;
	this.v9y.length = 0;

	for (const n4z of w7k)
	{
		this.p3e(n4z);
	}
	return this.v9y.length > 0;
}

b0l(x1l, r5n)
{
	this.n7a(x1l);
	this.t8r = true;
	this.v9y.length = 0;

	for (const n4z of w7k)
	{
		this.p3e(n4z);
	}
	for (const i0h of this.v9y)
	{
		if (i0h.o2z(r5n))
		{
			return true;
		}
	}
	return false;
}

q9g(x1l, x6s)
{
	this.n7a(x1l);
	this.t8r = true;
	this.v9y.length = 0;

	this.p3e(x6s.s2i);
	let r0f = [];
  let s9q = x6s.s9q;
	for (const r5n of s9q)
	{
		r0f.push(r5n);
	}
	for (const i0h of this.v9y)
	{
		if (i0h.e3m != x6s.e3m)
		{
			continue;
		}
		if (!i0h.p1d(r0f))
		{
			continue;
		}
		return i0h.q9g.slice();
	}
	return [];
}

s6k(x1l, x6s)
{
	this.n7a(x1l);
	this.t8r = true;
	this.v9y.length = 0;

	this.p3e(x6s.s2i);
	let g3s = 0;
	for (const i0h of this.v9y)
	{
		if (i0h.e3m == x6s.e3m)
		{
			g3s++;
		}
	}
	return g3s > 1;
}

} 


function d1l(x1l)
{
	let c8k = new h4r();
	return c8k.l1h(x1l, true);
}

function a6x(x1l, s2i)
{
	let c8k = new h4r();
	let i9b = c8k.l1h(x1l, true);
	let l9f = [];
	for (const i0h of i9b)
	{
		if (i0h.s2i == s2i)
		{
			l9f.push(i0h);
		}
	}
	return l9f;
}

function y5s(x1l, e3m)
{
	let c8k = new h4r();
	let i9b = c8k.l1h(x1l, true);
	let c6m = [];
	for (const i0h of i9b)
	{
		if (i0h.e3m == e3m)
		{
			c6m.push(i0h);
		}
	}
	return c6m;
}

function g8i(x1l, s2i, e3m)
{
	let c8k = new h4r();
	let i9b = c8k.l1h(x1l, true);
	let l5h = [];
	for (const i0h of i9b)
	{
		if (i0h.s2i == s2i && i0h.e3m == e3m)
		{
			l5h.push(i0h);
		}
	}
	return l5h;
}

function d0h(x1l, s2i, e3m, s9q)
{
	let c8k = new h4r();
	let i9b = c8k.l1h(x1l, true);
	let l1h = [];
	for (const i0h of i9b)
	{
		if (i0h.s2i != s2i)
		{
			continue;
		}
		if (i0h.e3m != e3m)
		{
			continue;
		}
		if (!i0h.o2z(s9q))
		{
			continue;
		}
		l1h.push(i0h);
	}
	return l1h;
}

function q6c(x1l, s2i, e3m, q9g)
{
	let c8k = new h4r();
	let i9b = c8k.l1h(x1l, false);
	let l1h = [];
	for (const i0h of i9b)
	{
		if (i0h.s2i != s2i)
		{
			continue;
		}
		if (i0h.e3m != e3m)
		{
			continue;
		}
		if (!i0h.b7t(q9g))
		{
			continue;
		}
		
		let q3e = false;
		for (const m of l1h)
		{
			if (m.g0c(x6s))
			{
				q3e = true;
				break;
			}
		}
		if (!q3e)
		{
			l1h.push(i0h);
		}
	}
	return l1h;
}

function v4n(x1l, x6s)
{
	let c8k = new h4r();
	return c8k.q9g(x1l, x6s);
}

function h0i(x1l)
{
	let c8k = new h4r();
	return c8k.h0i(x1l);
}

function b0l(x1l, r5n)
{
	let c8k = new h4r();
	return c8k.b0l(x1l, r5n);
}

function s6k(x1l, x6s)
{
	let c8k = new h4r();
	return c8k.s6k(x1l, x6s);
}

function h1h(x1l)
{
	let c8k = new h4r();
	if (c8k.h0i(x1l))
	{
		return false;
	}
	let x7p = x1l.n7y();
	x7p.p0r();
	return !c8k.h0i(x7p);
}

function a7j()
{
}
/* voor dammen niet nodig */
const o6j =
{
  r9e : 0,  
	l6p : 1,
	o5l : 2,
};

function y8a(x1l, x6s)
{
 	let u6i = '';
	if (x6s.y0l())
	{
		u6i += "\x2d\x2d";
	}
  else
  {
    u6i = y3m(x6s.s2i);
    if (x6s.s9q.length > 0)
    {
      u6i += 'x';
    }
    else
    {
      u6i += '-';
    }
    if (x6s.s9q.length > 2)
    {
      if (s6k(x1l, x6s))
      {
        let q9g = v4n(x1l, x6s);
        for (const n4z of q9g)
        {
          u6i += y3m(n4z);
          u6i += 'x';
        }
        u6i += y3m(x6s.e3m);
      }
      else
      {
        u6i += y3m(x6s.e3m);
      }
    }
    else
    {
      u6i += y3m(x6s.e3m);
    }
  }
	return u6i;
}


class p9o
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.h9e = 0;
}

}

function q9s(q0n,
  i8g,
  o6e,
  coordinate,
  coordinatesType,
  j8c,
  i6d,
  marginSize) 
{
 	let o4t = (coordinatesType == l8m.e7i ||
		coordinatesType == l8m.t2o ||
		coordinatesType == l8m.g5e);
	let h0b = (coordinatesType == l8m.e7i ||
		coordinatesType == l8m.t2o ||
		coordinatesType == l8m.q2r);
	let l1s =	(coordinatesType == l8m.e7i ||
		coordinatesType == l8m.g5e ||
		coordinatesType == l8m.l8r);
	let c0k = (coordinatesType == l8m.e7i ||
		coordinatesType == l8m.q2r ||
		coordinatesType == l8m.l8r);

	q0n.font = (coordinate.h9e).toString() + "\x70\x78\x20\x73\x65\x72\x69\x66";
	q0n.fillStyle = j8c;
  let d0p = coordinate.height;

	if (h0b)
	{
  	let f6y = 0;
		if (i6d)
		{
			f6y = o1s - c4f / 2;
		}
		else
		{
			f6y = c4f / 2 + 1;
		}
    for (let r6w = 0; r6w < c4f; r6w++)
		{
 			if (r6w % 2)
			{
				continue;
			}
			let u6b = q0n.measureText(f6y).width;
			let top = i8g.k0x + 1 + (r6w + 1) * o6e.c1e;
			top += (o6e.c1e - d0p) / 2 + d0p;
			let w7e = i8g.c1t - marginSize + (marginSize - u6b) / 2;
      q0n.fillText(f6y, w7e, top);
			if (i6d)
			{
				f6y -= c4f;
			}
			else
			{
				f6y += c4f;
			}
		}
	}

	if (l1s)
	{
		let f6y = 0;
		if (i6d)
		{
			f6y = o1s - c4f / 2 + 1;
		}
		else
		{
			f6y = c4f / 2;
		}
    for (let r6w = 0; r6w < c4f; r6w++)
		{
 			if (r6w % 2)
			{
				continue;
			}
      let u6b = q0n.measureText(f6y).width;
			let top = i8g.k0x + 1 + r6w * o6e.c1e;
			top += (o6e.c1e - d0p) / 2 + d0p;
			let w7e = i8g.c1t + i8g.u2s() +
        (marginSize - u6b) / 2;
      q0n.fillText(f6y, w7e, top);
			if (i6d)
			{
				f6y -= c4f;
			}
			else
			{
				f6y += c4f;
			}
		}
	}

	if (o4t)
	{
		let f6y = 0;
		if (i6d)
		{
			f6y = o1s;
		}
		else
		{
			f6y = 1;
		}
    for (let n9q = 0; n9q < c4f; n9q++)
		{
 			if (n9q % 2)
			{
				continue;
			}
			let left = i8g.c1t + 1 + (n9q + 1) * o6e.c1e;
      let u6b = q0n.measureText(f6y).width;
			let w7e = left + (o6e.c1e - u6b) / 2;
			let a9w = i8g.k0x - (marginSize - d0p) / 2 - 2;
      
      q0n.fillText(f6y, w7e, a9w);
			if (i6d)
			{
				f6y--;
			}
			else
			{
				f6y++;
			}
		}
	}

	if (c0k)
	{
		let f6y = 0;
		if (i6d)
		{
			f6y = c4f / 2;
		}
		else
		{
			f6y = o1s - c4f / 2 + 1;
		}
    for (let n9q = 0; n9q < c4f; n9q++)
		{
			if (n9q % 2)
			{
				continue;
			}
			let left = i8g.c1t + 1 + n9q * o6e.c1e;
      let u6b = q0n.measureText(f6y).width;
			let w7e = left + (o6e.c1e - u6b) / 2;
			let a9w = i8g.k0x + i8g.r3w() +
        (marginSize - d0p) / 2 + d0p - 2;
      
      q0n.fillText(f6y, w7e, a9w);
			if (i6d)
			{
				f6y--;
			}
			else
			{
				f6y++;
			}
		}
	}
}

function s7w(q0n, h9e)
{
	let k8r = new p9o();
	k8r.h9e = h9e;
	k8r.height = h9e;
	k8r.width = h9e;
	return k8r;
}
function u4v(q0n, rect, v8b)
{
 	q0n.lineWidth = "\x31";
  if (v8b == n8u.t1y || v8b == n8u.a5z)
  {
    q0n.fillStyle = "\x77\x68\x69\x74\x65";
    q0n.strokeStyle = "\x62\x6c\x61\x63\x6b";
  }
  else
  {
    q0n.fillStyle = "\x62\x6c\x61\x63\x6b";
    q0n.strokeStyle = "\x77\x68\x69\x74\x65";
  }
  let k5r = 80;
  let y7q = rect.u2s() + 1;
 	let u2y = ((0.19 * k5r) / 100) * y7q;
  let y1u = rect.c1t + y7q / 2;
  let s7l = (y7q / 4);
  let f4x = (y7q / 2.4);
	if (v8b == n8u.t1y || v8b == n8u.d4a)
	{
    let i8b = rect.k0x + y7q / 1.8;
    q0n.beginPath();
    q0n.ellipse(y1u, i8b, s7l, f4x, Math.PI / 2, 0, 2 * Math.PI);
    q0n.fill();
    q0n.stroke();
		i8b -= u2y;
    q0n.beginPath();
    q0n.ellipse(y1u, i8b, s7l, f4x, Math.PI / 2, 0, 2 * Math.PI);
    q0n.fill();
    q0n.stroke();
	}
	else if (v8b == n8u.a5z || v8b == n8u.t7q)
	{
    let i8b = rect.k0x + y7q / 1.55;
    q0n.beginPath();
    q0n.ellipse(y1u, i8b, s7l, f4x, Math.PI / 2, 0, 2 * Math.PI);
    q0n.fill();
    q0n.stroke();
		i8b -= u2y;
    q0n.beginPath();
    q0n.ellipse(y1u, i8b, s7l, f4x, Math.PI / 2, 0, 2 * Math.PI);
    q0n.fill();
    q0n.stroke();
		i8b -= u2y;
    q0n.beginPath();
    q0n.ellipse(y1u, i8b, s7l, f4x, Math.PI / 2, 0, 2 * Math.PI);
    q0n.fill();
    q0n.stroke();
	}
}

function k7u(q0n, rect, v8b)
{
 	q0n.lineWidth = "\x31";
  if (v8b == n8u.t1y || v8b == n8u.a5z)
  {
    q0n.fillStyle = "\x77\x68\x69\x74\x65";
    q0n.strokeStyle = "\x62\x6c\x61\x63\x6b";
  }
  else
  {
    q0n.fillStyle = "\x62\x6c\x61\x63\x6b";
    q0n.strokeStyle = "\x77\x68\x69\x74\x65";
  }

  let k5r = 80;
  let y7q = rect.u2s() + 1;
 	let u2y = ((0.19 * k5r) / 100) * y7q;
  let y1u = rect.c1t + y7q / 2;
  let s7l = (y7q / 4);
  let f4x = (y7q / 2.4);


  let i8b = rect.k0x + y7q / 2; 
  let w7u = y7q * 0.4;

  q0n.beginPath();
  q0n.arc(y1u, i8b, w7u, 0, Math.PI * 2);
  q0n.closePath();
  q0n.fill();
  q0n.stroke();

	if (z1m(v8b))
	{
		if (v8b == n8u.a5z)
		{
      q0n.fillStyle = "\x62\x6c\x61\x63\x6b";
      q0n.strokeStyle = "\x62\x6c\x61\x63\x6b";
		}
		else
		{
      q0n.fillStyle = "\x77\x68\x69\x74\x65";
      q0n.strokeStyle = "\x77\x68\x69\x74\x65";
		}
    w7u = y7q * 0.1;
    q0n.beginPath();
    q0n.arc(y1u, i8b, w7u, 0, Math.PI * 2);
    q0n.closePath();
    q0n.fill();
    q0n.stroke();
	}
}

function a2l(q0n, rect, v8b)
{
  if (v8b == n8u.y0l) return;
  if (h5y.t7o == 0)
  {
    u4v(q0n, rect, v8b);
  }
  else
  {
    k7u(q0n, rect, v8b);
  }
}


function s0y(t7o)
{
}
function t3d(b2b)
{
	let x1l = new n1y();
	let q7a = b2b.length;
	if (q7a < 6) 
	{
		return x1l;
	}
	if (b2b[0] != 'W' && b2b[0] != 'B')
	{
		return x1l;
	}
	if (b2b[0] == 'W')
	{
		x1l.n1d();
	}
	else if (b2b[0] == 'B')
	{
		x1l.x3c();
	}
	let t2h = b2b.indexOf("\x3a\x57");
	let w3v = b2b.indexOf("\x3a\x42");
	let v6m = b2b.indexOf("\x2e");
  if (v6m == -1)
	{
		v6m = b2b.length;
	}
	if (t2h == -1 || w3v == -1 || v6m <= w3v)
	{
		return x1l;
	}
	let w = b2b.substr(t2h + 2, w3v - (t2h + 2));
	let b = b2b.substr(w3v + 2, v6m - (w3v + 2));
	let j2x = w.split("\x2c");
	let d8i = b.split("\x2c");

	for (const s of j2x)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let m7p = s.substr(1, 2);
					let n4z = i6u(m7p, 0);
					if (n4z)
					{
						x1l.f2l(n4z-1, n8u.a5z);
					}
				}
			}
			else
			{
				let n4z = i6u(s, 0);
				if (n4z)
				{
					x1l.f2l(n4z-1, n8u.t1y);
				}
			}
		}
	}
	for (const s of d8i)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let m7p = s.substr(1, 2);
					let n4z = i6u(m7p, 0);
					if (n4z)
					{
						x1l.f2l(n4z-1, n8u.t7q);
					}
				}
			}
			else
			{
				let n4z = i6u(s, 0);
				if (n4z)
				{
					x1l.f2l(n4z-1, n8u.d4a);
				}
			}
		}
	}
	return x1l;
}

function p4e(x1l, p0d)
{
  let o1a = p0d.length;

 	
	if (p0d[0] == 'Z' || (o1a == 2 && p0d == "\x2d\x2d") || (o1a == 4 && p0d == "\x6e\x75\x6c\x6c"))
	{
		return new m1c();
	}

	let u7k = [];
	let i = 0;
	let q7a = p0d.length;
	while (i < q7a)
	{
		let w5c = i;
		let i5k = 0;
		let b6d = p0d[i];
		while (i < q7a && b6d != '-' && b6d != 'x' && b6d != ':')
		{
			i++;
			i5k++;
			if (i < q7a)
			{
				b6d = p0d[i];
			}
		}
		let c1i = p0d.substr(w5c, i5k);
    u7k.push(v5s(c1i));
		i++; 
	}
	let f3t = u7k.length;
	if (f3t < 2)
	{
		return false;
	}
	else if (f3t == 2)
	{
		let s2i = u7k[0];
		let e3m = u7k[1];
		let l1h = g8i(x1l, s2i, e3m);
		if (l1h.length == 1)
		{
			return l1h[0];
		}
		return false;
	}
	else
	{
		let s2i = u7k[0];
		let e3m = u7k[1];
		let s9q = [];
		for (let i = 2; i < f3t; i++)
		{
			s9q.push(u7k[i]);
		}
		let l1h = d0h(x1l, s2i, e3m, s9q);
		if (l1h.length == 1)
		{
			return l1h[0];
		}
		s2i = u7k[0];
		e3m = u7k[u7k.length - 1];
		let q9g = [];
		for (let i = 1; i < f3t - 1; i++)
		{
			q9g.push(u7k[i]);
		}
		l1h = q6c(x1l, s2i, e3m, q9g);
		if (l1h.length == 1)
		{
			return l1h[0];
		}
		return false;
	}
}

function l4o()
{
  let z6z = ["\x62\x6f\x61\x72\x64\x2f\x42\x6f\x61\x72\x64\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2e\x70\x6e\x67",
    "\x62\x6f\x61\x72\x64\x2f\x44\x61\x72\x6b\x53\x71\x75\x61\x72\x65\x2e\x70\x6e\x67",
    "\x62\x6f\x61\x72\x64\x2f\x4c\x69\x67\x68\x74\x53\x71\x75\x61\x72\x65\x2e\x70\x6e\x67",
    "\x62\x6f\x61\x72\x64\x2f\x4d\x61\x72\x67\x69\x6e\x2e\x70\x6e\x67"];
  return z6z;
}
class b5n
{

constructor()
{
	this.t7l = '';
}

n7y()
{
	let w2y = new b5n();
	w2y.t7l = this.t7l;
	return w2y;
}

y0l()
{
	return this.t7l.length == 0;
}

y2h()
{
	return this.t7l;
}

}


const y2m =
{
	r9e : 0,
	f4v : 1,
	a8u: 2,
	c3l: 3,
	b2d: 4,
	f5p: 5,
	u2k: 6,
	x4s: 7,
	a3y: 8,
	z8s: 9,
	s9h: 10,
	x2e: 11,
	e3c: 12,
	o3z: 13,
	g6i: 14,
	s9p: 15,
	a1b: 16,
	j3b: 17,
	z2d: 18,
	e6v: 19,
	q1s: 20,
	p3n: 21,
	l2x: 22,
	b2u: 23,
	y9l: 24,
	q5b: 25,
	z4v: 26,
	s3a: 27,
	n8j: 28,
	u3g: 29,
	x7c: 30,
	m5i: 31,
	b3r: 32,
	a5e: 33,
	z8u: 34,
	f0k: 35,
	x2h: 36,
	x0c: 37,
	w9z: 38,
	v5x: 39,
	x7v: 40,
	g2t: 41,
	j4r: 42,
	q3r: 43,
	t2a: 44,
	l7z: 45,
	q1h: 46,
	x2z: 47,
	s8i: 48,
	b0y: 49,
	m7e: 50,
	w3l: 51,
	m0o: 52,
	k4d: 53,
	u8e: 54,
	d1c: 55,
	p5k: 56,
	h5b: 57,
	v9e: 58,
	i0g: 59,
	o2c: 60,
	h8r: 61,
	m7i: 62,
	u5v: 63,
	w3r: 64,
	z1j: 65,
	s0h: 66,
	c7a: 67,
	e7q: 68,
	v9m: 69,
	w7r: 70,
	e3t: 71,
	n8h: 72,
	j4o: 73,
	v7p: 74,
	q6i: 75,
	q7h: 76,
	q2o: 77,
	u4f: 78,
	v6b: 79,
	q7d: 80,
	h8h: 81,
	u3j: 82,
	p3c: 83,
	y2e: 84,
	k7y: 85,
	g8f: 86,
	t1e: 87,
	b1y: 88,
	e3h: 89,
	z5m: 90,
	l4h: 91,
	j2m: 92,
	v2k: 93,
	v0o: 94,
	r9f: 95,
	z0a: 96,
	c6v: 97,
	m7r: 98,
	k0u: 99,
	a1l: 100,
	i5o: 101,
	j3z: 102,
	s0f: 103,
	t0g: 104,
	d1t: 105,
	a6b: 106,
	a9r: 107,
	x3e: 108,
	p4i: 109,
	t5q: 110,
	r7w: 111,
	h1t: 112,
	z4a: 113,
	e4g: 114,
	e5t: 115,
	i9l: 116,
	n1z: 117,
	o4r: 118,
	y7d: 119,
	a5b: 120,
	z8x: 121,
	m6u: 122,
	h9g: 123,
	b8p: 124,
	k6j: 125,
	x8q: 126,
	j5x: 127,
	o6h: 128,
	d2r: 129,
	e8e: 130,
	k6q: 131,
	q8v: 132,
	s5b: 133,
	o0s: 134,
	p6s: 135,
	e6o: 136,
	y6r: 137,
	b6j: 138,
	g7q: 139,
	u2b: 140,
	v6u: 141,
	c5z: 142,
	d9l: 143,
	e9d: 144,
	i2f: 145,
	g5b: 146,
	m1q: 147,
	g6r: 148,
	p0i: 149,
	h7r: 150,
	u9l: 151,
	d4v: 152,
	b8h: 153,
	s2l: 154,
	u5a: 155,
	u6v: 156,
	s5m: 157,
	v4u: 158,
	m1l: 159,
	r4r: 160,
	p5a: 161,
	l4z: 162,
	v5q: 163,
	s3u: 164,
	d8q: 165,
	r3k: 166,
	r1l: 167,
	n7v: 168,
	n6r: 169,
	n3h: 170,
	a7a: 171,
	s6p: 172,
	k0p: 173,
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
	y1y: 185,
	j4t: 186,
	m8s: 187,
	k6k: 188,
	g6w: 189,
	z0p: 190,
	i2k: 191,
	o7a: 192,
	r4l: 193,
	p6u: 194,
	p3f: 195,
	l5t: 196,
	h8d: 197,
	v5z: 198,
	r3v: 199,
	c2f: 200,
	z3p: 201,
	a7k: 202,
	b0a: 203,
	b6b: 204,
	d8b: 205,
	b4j: 206,
	p1n: 207,
	v7r: 208,
	p3l: 209,
	i4c: 210,
	s4a: 211,
	s5a: 212,
	d6x: 213,
	u4b: 214,
	n7s: 215,
	e9m: 216,
	c1b: 217,
	b3g: 218,
	g7b: 219,
	i6z: 220,
	a4l: 221,
	h8a: 222,
	k1e: 223,
	p4n: 224,
	p2k: 225,
	o4z: 226,
	s7m: 227,
	q8e: 228,
	p2p: 229,
	f7y: 230,
	f8g: 231,
	h1v: 232,
	w2o: 233,
	h6j: 234,
	j0q: 235,
	t4a: 236,
	d6p: 237,
	k8c: 238,
	c3b: 239,
	x3i: 240,
	t0h: 241,
	z5u: 242,
	m5a: 243,
	o6a: 244,
	f0e: 245,
	d9d: 246,
	p0j: 247,
	g1q: 248,
	e4x: 249,
	c6b: 250,
	c2h: 251,
	i4u: 252,
	y0s: 253,
	h2j: 254,
	w1j: 255,
	c7c: 256,
	x8l: 257,
	n3y: 258,
	k7p: 259
};


const s6s = 0;
const w9g = 500;

function u5m(u6i)
{
	if (u6i.length != 3)
	{
		return 0;
	}
	let c9t = u6i[0];
	let f7k = u6i[1];
	let k8q = u6i[2];

	let d5l = 0;
	if (c9t == 'A' || c9t == 'a') d5l = 0;
	else if (c9t == 'B' || c9t == 'b') d5l = 1;
	else if (c9t == 'C' || c9t == 'c') d5l = 2;
	else if (c9t == 'D' || c9t == 'd') d5l = 3;
	else if (c9t == 'E' || c9t == 'e') d5l = 4;
	else return 0;
	if (isNaN(f7k) || isNaN(k8q))
	{
		return 0;
	}
	return d5l * 100 + i6u(u6i.substr(1, 2), 0) + 1;
}

function a7e(t4q)
{
	if (t4q)
	{
		let div = Math.trunc((t4q - 1) / 100);
		let y8l = (t4q - 1) % 100;
		let r5q = 'A';
		if (div == 0) r5q = 'A';
		else if (div == 1) r5q = 'B';
		else if (div == 2) r5q = 'C';
		else if (div == 3) r5q = 'D';
		else if (div == 4) r5q = 'E';
		return r5q + y8l.toString().padStart(2, '0');
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
	this.u8v = 0;
	this.f0d = 0;
	this.b9q = 0;
}

n7y()
{
	let g6s = new j6w();
	g6s.b6q = this.u8v;
	g6s.p8d = this.f0d;
	g6s.z0r = this.b9q;
	return g6s;
}

y0l()
{
	return this.b9q == 0 && this.f0d == 0 && this.u8v == 0;
}

y0q()
{
	let z0r = this.b9q.toString().padStart(4, '0');
	let p8d = this.f0d.toString().padStart(2, '0');
	let b6q = this.u8v.toString().padStart(2, '0');
	return z0r + p8d + b6q;
}

j3g(i6b, u6i)
{
	let q7a = u6i.length;
	if (!q7a)
	{
		this.b9q = 0;
		this.f0d = 0;
		this.u8v = 0;
	}
	else if (i6b == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79" || i6b == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79\x79\x79")
	{
  	if (q7a == 4)
		{
      this.b9q = i6u(u6i.substr(1, 4), 0);
		}
		else if (q7a == 10)
		{
			this.u8v = i6u(u6i.substr(0, 2), 0);
			this.f0d = i6u(u6i.substr(3, 2), 0);
			this.b9q = i6u(u6i.substr(6, 4), 0);
		}
	}
	else if (i6b == "\x79\x79\x79\x79\x2d\x6d\x6d\x2d\x64\x64" || i6b == "\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64")
	{
  	if (q7a == 4)
		{
      this.b9q = i6u(u6i.substr(1, 4), 0);
		}
		else if (q7a == 10)
		{
			this.u8v = i6u(u6i.substr(8, 2), 0);
			this.f0d = i6u(u6i.substr(5, 2), 0);
			this.b9q = i6u(u6i.substr(0, 4), 0);
		}
	}
	else if (i6b == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79" || i6b == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79")
	{
		if (q7a == 8)
		{
			this.u8v = i6u(u6i.substr(0, 2), 0);
			this.f0d = i6u(u6i.substr(3, 2), 0);
			this.b9q = i6u(u6i.substr(6, 2), 0) + 2000;
		}
	}
}

toString(i6b)
{
	let u6i = '';
	if (this.y0l())
	{
	}
	else if (i6b == "\x6c\x69\x73\x74")
	{
		let z0r = this.b9q.toString().padStart(4, '0');
		let p8d = this.f0d.toString().padStart(2, '0');
		let b6q = this.u8v.toString().padStart(2, '0');
		if (this.u8v)
		{
			u6i = b6q + "\x2d" + p8d + "\x2d" + z0r;
		}
		else if (this.f0d)
		{
			u6i = p8d + "\x2d" + z0r;
		}
		else if (this.b9q)
		{
			u6i = z0r;
		}
	}
	else if (i6b == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79")
	{
		let z0r = this.b9q.toString().padStart(4, '0');
		let p8d = this.f0d.toString().padStart(2, '0');
		let b6q = this.u8v.toString().padStart(2, '0');
		u6i = b6q + "\x2d" + p8d + "\x2d" + z0r;
	}
	else if (i6b == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79\x79\x79")
	{
		let z0r = this.b9q.toString().padStart(4, '0');
		let p8d = this.f0d.toString().padStart(2, '0');
		let b6q = this.u8v.toString().padStart(2, '0');
		u6i = b6q + "\x2e" + p8d + "\x2e" + z0r;
	}
	else if (i6b == "\x79\x79\x79\x79\x2d\x6d\x6d\x2d\x64\x64")
	{
		let z0r = this.b9q.toString().padStart(4, '0');
		let p8d = this.f0d.toString().padStart(2, '0');
		let b6q = this.u8v.toString().padStart(2, '0');
		u6i = z0r + "\x2d" + p8d + "\x2d" + b6q;
	}
	else if (i6b == "\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64")
	{
		let z0r = this.b9q.toString().padStart(4, '0');
		let p8d = this.f0d.toString().padStart(2, '0');
		let b6q = this.u8v.toString().padStart(2, '0');
		u6i = z0r + "\x2e" + p8d + "\x2e" + b6q;
	}
	else if (i6b == "\x79\x79\x79\x79\x6d\x6d\x64\x64")
	{
		let z0r = this.b9q.toString().padStart(4, '0');
		let p8d = this.f0d.toString().padStart(2, '0');
		let b6q = this.u8v.toString().padStart(2, '0');
		u6i = z0r + p8d + b6q;
	}
	else if (i6b == "\x79\x79\x79\x79")
	{
		let z0r = this.b9q.toString().padStart(4, '0');
		u6i = z0r;
	}
	return u6i;
}

}

class b4h
{

constructor()
{
	this.a3h = new c8l();
	this.v4r = new e9p();
	this.q9a = 0;
	this.k5l = 0;
	this.s4t = "";
  this.e9r = y2m.r9e;
}

n7y()
{
	let v8u = new b4h();
	v8u.a3h = this.a3h.n7y();
	v8u.v4r = this.v4r.n7y();
	v8u.q9a = this.q9a;
	v8u.k5l = this.k5l;
	v8u.s4t = this.s4t;
  v8u.e9r = this.e9r;
	return v8u;
}

y0l()
{
	return this.a3h.y0l() &&
		this.v4r.y0l() &&
		this.q9a == 0 &&
		this.k5l == 0 &&
		this.s4t == "" &&
 		this.e9r == y2m.r9e;
}

}


class e5o
{

constructor()
{
	this.b5c = new b4h();
	this.i6o = new b4h();
	this.i9p = new r7g();
	this.v7h = new b5n();
	this.p9b = new d0k();
	this.s4t = new o8k();
	this.y0q = new j6w();
	this.g3u = l4v.r9e;
	this.t4q = 0;
	this.h4o = 0;
	this.c6a = 0;
	this.j5y = new u4d();
  this.u4j = new g0e();
}

n7y()
{
	let o4h = new e5o();
	o4h.b5c = this.b5c.n7y();
	o4h.i6o = this.i6o.n7y();
	o4h.i9p = this.i9p.n7y();
	o4h.v7h = this.v7h.n7y();
	o4h.p9b = this.p9b.n7y();
	o4h.s4t = this.s4t.n7y();
	o4h.y0q = this.y0q.n7y();
	o4h.g3u = this.g3u;
	o4h.t4q = this.t4q;
	o4h.h4o = this.h4o;
	o4h.c6a = this.c6a;
	o4h.j5y = this.j5y.n7y();
  o4h.u4j = this.u4j.n7y();
	return o4h;
}

y0l()
{
	return this.b5c.y0l() &&
		this.i6o.y0l() &&
		this.i9p.y0l() &&
		this.v7h.y0l() &&
		this.p9b.y0l() &&
		this.s4t.y0l() &&
		this.y0q.y0l() &&
		this.g3u == l4v.r9e &&
		this.t4q == 0 &&
		this.h4o == 0 &&
		this.c6a == 0 &&
		this.j5y.y0l();
}

x0b()
{
	let u6i = '';
	if (this.c6a)
	{
		u6i = this.h4o.toString() + "\x2e" + this.c6a.toString();
	}
	else if (this.h4o)
	{
		u6i = this.h4o.toString();
	}
	return u6i;
}

}


class g0e
{

constructor()
{
	this.l1n = '';
}

n7y()
{
	let r3m = new g0e();
	r3m.l1n = this.l1n;
	return r3m;
}

toString()
{
  return this.l1n;
}

}


class o8k
{

constructor()
{
	this.s4t = '';
}

n7y()
{
	let m6y = new o8k();
	m6y.s4t = this.s4t;
	return m6y;
}

y0l()
{
	return this.s4t.length == 0;
}

y2h()
{
	return this.s4t;
}

}


class c8l
{

constructor()
{
	this.n5i = '';
	this.v0j = '';
}

n7y()
{
	let w8u = new c8l();
	w8u.n5i = this.n5i;
	w8u.v0j = this.v0j;
	return w8u;
}

y0l()
{
	return this.v0j.length == 0 &&
		this.n5i.length == 0;
}

t7l()
{
	if (!this.v0j.length == 0 && !this.n5i.length == 0)
	{
		return this.v0j + "\x2c" + this.n5i;
	}
	else if (this.v0j.length == 0 && this.n5i.length == 0)
	{
		return "";
	}
	else if (this.n5i.length == 0)
	{
		return this.v0j;
	}
	else
	{
		return this.n5i;
	}
}

d8l()
{
	return this.t7l().replace(/,/g, "\x20");
}

q8l()
{
	return this.o4u(1).replace(/,/g, "\x20");
}

o4u(a4i)
{
	if (this.v0j.length == 0)
	{
		if (this.n5i.length == 0 || a4i < 1)
		{
			return "";
		}
		else
		{
			return this.n5i.substring(0, a4i);
		}
	}
	else
	{
		if (this.n5i.length == 0 || a4i < 1)
		{
			return this.v0j;
		}
		else
		{
			return this.v0j + "\x2c" + this.n5i.substring(0, a4i);
		}
	}
}

j0e(h5p)
{
	let u6i = h5p.trim();
	let z4w = u6i.lastIndexOf("\x2c");
	if (z4w != -1)
	{
		this.v0j = u6i.substr(0, z4w).trim();
		this.n5i = u6i.substr(z4w+1, u6i.length).trim();
		if (this.n5i.length != 0)
		{
			if (this.n5i.charAt(0).toLowerCase() == this.n5i.charAt(0))
			{
				this.v0j += "\x2c";
				this.v0j += this.n5i;
				this.n5i = "";
			}
		}
	}
	else
	{
		this.v0j = u6i;
		this.n5i = "";
	}
}

y2h()
{
	return this.t7l();
}

}

const l4v =
{
	r9e : 0,
	l6w : 1,
	c0f : 2,
	d1j : 3,
	g5c : 4,
	z4b : 5,
	t8m : 6,
	h1d : 7,
	r6y : 8,
	r4n : 9,
	y5m : 10,
	u3a : 11,
	y9e : 12,
	r0q : 13,
	e6a : 14,
	e6b : 15
};


function f9j(g3u)
{
	switch (g3u)
	{
		case l4v.l6w:
			return "\x32\x2d\x30";
		case l4v.d1j:
			return "\x31\x2d\x31";
		case l4v.c0f:
			return "\x30\x2d\x32";
		default:
			return "";
	}
}
const p6z =
{
	z2g : 0,
	z8c : 1,
	n4j : 2
};

const u9p =
[
	[ p6z.z2g,   "\x48\x69\x67\x68" ],
	[ p6z.z8c, "\x4d\x69\x64\x64\x6c\x65" ],
	[ p6z.n4j,    "\x4c\x6f\x77" ]
];

class d0k
{

constructor()
{
	this.s4t = '';
	this.t5h = '';
	this.r7n = new j6w();
	this.o8c = new j6w();
	this.g8e = 0;
	this.d2w = p6z.z2g;
}

n7y()
{
	let y1i = new d0k();
	y1i.s4t = this.s4t;
	y1i.t5h = this.t5h;
	y1i.r7n = this.r7n.n7y();
	y1i.o8c = this.o8c.n7y();
	y1i.g8e = this.g8e;
	y1i.d2w = this.d2w;
	return y1i;
}

y0l()
{
	return this.s4t.length == 0 &&
		this.t5h.length == 0 &&
		this.r7n.y0l() &&
		this.o8c.y0l() &&
		this.g8e == 0 &&
		this.d2w == p6z.z2g;
}

y2h()
{
	let u6i = this.s4t;
	if (this.t5h.length)
	{
		if (u6i.length)
		{
			u6i += "\x20";
		}
		u6i += this.t5h;
	}
	return u6i;
}

}


const e1x =
{
	k9g : 0,
	c9p : 1,
	l2z : 2,
	h1q : 3,
	g4e : 4,
	c4e : 5,
	m8o : 6,
	l2r : 7,
	e6j : 8,
	w2k : 9,
	x5k : 10,
	f2o : 11,
	d2d : 12,
	d2t : 13,
	y1r : 14,
	l4r : 15
};

class u4d
{

constructor()
{
	this.q4y = 0;
}

x4d(q4y)
{
	this.q4y = q4y;
}

n7y()
{
	let o5y = new u4d();
	o5y.q4y = this.q4y;
	return o5y;
}

y0l()
{
	return this.q4y == 0;
}

c7i()
{
	return this.q4y != 0;
}

r9e()
{
	return this.q4y == 0;
}

i5k()
{
	let c5v = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.e0v(i))
		{
			c5v++;
		}
	}
	return c5v;
}

d4p()
{
	this.q4y = 0;
}

set(f1i, u5i)
{
	if (u5i)
	{
		this.q4y |= (1 << f1i);
	}
	else
	{
		this.q4y &= ~(1 << f1i);
	}
}

e0v(f1i)
{
	return (this.q4y & (1 << f1i)) != 0;
}

c0x()
{
	return this.q4y;
}

}

function z8f(z0r)
{
	return z0r.toString().padStart(4, '0');
}

class e9p
{

constructor()
{
	this.t7l = '';
	this.c2w = 0;
	this.z0r = 0;
	this.v3t = false;
	this.e9r = y2m.r9e;
}

n7y()
{
	let k5j = new e9p();
	k5j.t7l = this.t7l;
	k5j.c2w = this.c2w;
	k5j.z0r = this.z0r;
	k5j.v3t = this.v3t;
	k5j.e9r = this.e9r;
	return k5j;
}

y0l()
{
	return this.t7l.length == 0 &&
		this.c2w == 0 &&
		this.z0r == 0 &&
		this.v3t == false &&
		this.e9r == y2m.r9e;
}

c7p()
{
	let u6i = this.t7l;
	if (this.c2w)
	{
		if (u6i.length)
		{
			u6i += "\x20";
		}
		u6i += this.c2w;
	}
	return u6i;
}

y2h()
{
	let u6i = this.t7l;
	if (this.c2w)
	{
		if (u6i.length)
		{
			u6i += "\x20";
		}
		u6i += this.c2w;
	}
	if (u6i.length)
	{
		u6i += "\x20";
	}
	u6i += this.k2h();
	return u6i;
}


d1g()
{
	let u6i = this.t7l;
	if (this.c2w > 1)
	{
		u6i += "\x20";
		u6i += this.c2w;
	}
	return u6i;
}

k2h()
{
	let u6i = '';
	if (this.v3t)
	{
		let s7n = z8f(this.z0r);
		let v4m = z8f(this.z0r + 1);
		let u2e = s7n + "\x2f" + v4m.substr(2, 2);
		u6i = u2e;
	}
	else
	{
		u6i = z8f(this.z0r);
	}
	return u6i;
}

}

class f6e
{

constructor()
{
	this.h6y = 0;
	this.a6d = 0;
	this.z7p = 0;

}

}

function l6c(u6i, d6j, k5l)
{
	k5l.h6y = 0;
	k5l.a6d = 0;
	k5l.z7p = 0;

	let q7a = u6i.length;
	if (!q7a || u6i == "\x3f")
	{
		return;
	}
	let i = 0;
	for (; i < q7a; i++)
	{
		if (!isNaN(u6i[i]))
		{
			break;
		}
	}
	let b1f = '';
	for (; i < q7a; i++)
	{
		if (isNaN(u6i[i]))
		{
			break;
		}
		b1f += u6i[i].toString();
	}
	for (; i < q7a; i++)
	{
		if (!isNaN(u6i[i]))
		{
			break;
		}
	}
	let t6k = '';
	for (; i < q7a; i++)
	{
		if (isNaN(u6i[i]))
		{
			break;
		}
		t6k += u6i[i].toString();
	}
	for (; i < q7a; i++)
	{
		if (!isNaN(u6i[i]))
		{
			break;
		}
	}
	let m1m = '';
	for (; i < q7a; i++)
	{
		if (isNaN(u6i[i]))
		{
			break;
		}
		m1m += u6i[i].toString();
	}
	let f6o = i6u(b1f, 0);
	let q0u = i6u(t6k, 0);
	let r6f = i6u(m1m, 0);
	if (
		f6o < 0 || f6o > d6j ||
		q0u < 0 || q0u > 59 ||
		r6f < 0 || r6f > 59)
	{
		f6o = 0;
		q0u = 0;
		r6f = 0;
	}
	k5l.h6y = f6o;
	k5l.a6d = q0u;
	k5l.z7p = r6f;
}

function s5h(u6i)
{
	if (u6i.length == 0)
	{
		return 0;
	}
	else
	{
		let k5l = new f6e();
		l6c(u6i, 9, k5l);
		return k5l.h6y * 60 + k5l.a6d;
	}
}


const o0c =
{
	r9e : 0,
	p0b : 1,
	t9j : 2,
	i9p : 3,
	d7c : 4,
	v4k : 5,
	z2z : 6,
	j3m : 7
};

const t2b =
[
	[ o0c.r9e, 			 	""                   ],
	[ o0c.p0b,  		 	"\x53\x69\x6e\x67\x6c\x65\x47\x61\x6d\x65"         ],
	[ o0c.t9j,  		 	"\x4d\x61\x74\x63\x68"              ],
	[ o0c.i9p,  "\x52\x6f\x75\x6e\x64\x52\x6f\x62\x69\x6e"         ],
	[ o0c.d7c,   		"\x53\x77\x69\x73\x73\x53\x79\x73\x74\x65\x6d"        ],
	[ o0c.v4k,    "\x4b\x6e\x6f\x63\x6b\x6f\x75\x74"           ],
	[ o0c.z2z,"\x53\x69\x6d\x75\x6c"              ],
	[ o0c.j3m,"\x53\x63\x68\x65\x76\x65\x6e\x69\x6e\x67\x65\x6e\x53\x79\x73\x74\x65\x6d" ]
];

class r7g
{

constructor()
{
	this.s4t = '';
	this.b9j = '';
	this.x4w = new j6w();
	this.b8s = new j6w();
	this.n8n = o9d.l6p;
	this.j9z = 0;
	this.e9r = y2m.r9e;
	this.type = o0c.r9e;
	this.q2s = 0;
	this.m5p = false;
	this.e0p = false;
	this.d9i = false;
	this.e7o = false;
}

n7y()
{
	let e5e = new r7g();
	e5e.s4t = this.s4t;
	e5e.b9j = this.b9j;
	e5e.x4w = this.x4w.n7y();
	e5e.b8s = this.b8s.n7y();
	e5e.n8n = this.n8n;
	e5e.j9z = this.j9z;
	e5e.e9r = this.e9r;
	e5e.type = this.type;
	e5e.q2s = this.q2s;
	e5e.m5p = this.m5p;
	e5e.e0p = this.e0p;
	e5e.d9i = this.d9i;
	e5e.e7o = this.e7o;
	return e5e;
}

y0l()
{
	return this.s4t.length == 0 &&
		this.b9j.length == 0 &&
		this.x4w.y0l() &&
		this.b8s.y0l() &&
		this.n8n == o9d.l6p &&
		this.j9z == 0 &&
		this.e9r == y2m.r9e &&
		this.type == o0c.r9e &&
		!this.q2s &&
		!this.m5p &&
		!this.e0p &&
		!this.d9i &&
		!this.e7o;
}

y2h()
{
	let u6i = this.s4t;
	if (this.b9j.length)
	{
		if (u6i.length)
		{
			u6i += "\x20";
		}
		u6i += this.b9j;
	}
	if (u6i.length)
	{
		u6i += "\x20";
	}
	let z0r = this.x4w.z0r.toString().padStart(4, '0');
	u6i += z0r;
	return u6i;
}

}



const o9d =
{
	l6p : 0,
	r8h : 1,
	r5f : 2,
	d7o : 3
};

const z9z =
[
	[ o9d.l6p, "\x4e\x6f\x72\x6d\x61\x6c" ],
	[ o9d.r8h,  "\x52\x61\x70\x69\x64"  ],
	[ o9d.r5f,  "\x42\x6c\x69\x74\x7a"  ],
	[ o9d.d7o,   "\x43\x6f\x72\x72"   ]
];

function a3q(n8n)
{
	return z9z[n8n][1];
}

function g4i()
{
	let u2n = [];
	for (const n8n of z9z)
	{
		u2n.push(n8n[1]);
	}
	return u2n;
}

class v0r
{

constructor()
{
	this.f3w = '';
	this.m3d = '';
	this.a4t = x5i.r9e;
	this.style = v9v.r9e;
	this.q4y = l8k.r9e;
	this.m4a = new c2u();
	this.c0j = new s7c();
	this.f9y = new x6l();
	this.o2d = x2n.r9e;
	this.v8t = false;
	this.p3a = false;
  this.d5m = false;
}

n7y()
{
	let k3c = new v0r();
	k3c.f3w = this.f3w;
	k3c.m3d = this.m3d;
	k3c.a4t = this.a4t;
	k3c.style = this.style;
	k3c.q4y = this.q4y;
	k3c.m4a = this.m4a.n7y();
	k3c.c0j = this.c0j.n7y();
	k3c.f9y = this.f9y.n7y();
	k3c.o2d = this.o2d;
	k3c.v8t = this.v8t;
	k3c.p3a = this.p3a;
 	k3c.d5m = this.d5m;
	return k3c;
}

y0l()
{
	return this.f3w.length == 0 &&
		this.m3d.length == 0 &&
		this.a4t == x5i.r9e &&
		this.style == v9v.r9e &&
		this.q4y == l8k.r9e &&
		this.m4a.y0l() &&
		this.c0j.y0l() &&
		this.f9y.y0l() &&
		this.o2d == x2n.r9e &&
		this.v8t == false &&
		this.p3a == false &&
 		this.d5m == false;
}

}

const x2n =
{
	r9e : 0,
	g3i : 1,
	z8c : 2,
	d1a : 3
};

const u3u =
{
	o9f : 0,
	q8t : 1,
	c9s : 2,
	s2u : 3,
	m9n : 4,
	n5g : 5,
	m0f : 6,
	e6b : 7,
	w3d : 8,
	q8a : 9,
	f1x : 10,
	j4i : 11,
	a3c : 12,
	m2w : 13,
	q0e : 14,
	v8n : 15
};

class c2u
{

constructor()
{
	this.q4y = 0;
}

x4d(q4y)
{
	this.q4y = q4y;
}

n7y()
{
	let r8e = new c2u();
	r8e.q4y = this.q4y;
	return r8e;
}

y0l()
{
	return this.q4y == 0;
}

c7i()
{
	return this.q4y != 0;
}

r9e()
{
	return this.q4y == 0;
}

i5k()
{
	let c5v = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.e0v(i))
		{
			c5v++;
		}
	}
	return c5v;
}

d4p()
{
	this.q4y = 0;
}

set(f1i, u5i)
{
	if (u5i)
	{
		this.q4y |= (1 << f1i);
	}
	else
	{
		this.q4y &= ~(1 << f1i);
	}
}

e0v(f1i)
{
	return (this.q4y & (1 << f1i)) != 0;
}

c0x()
{
	return this.q4y;
}

}

const x5i =
{
	r9e : 0,
	n9f : 1,
	h5x : 2,
	o1r : 3,
	h3i : 4,
	l9z : 5,
	i5y : 6
};

const b8t =
[
	[ x5i.r9e,     		  ""   ],
	[ x5i.n9f,       		  "\x52\x52" ],
	[ x5i.h5x, 		  "\x26\x23\x38\x39\x37\x39\x3b"  ],
	[ x5i.o1r, 		  "\x26\x23\x38\x38\x30\x34\x3b"  ],
	[ x5i.h3i,  "\x3d"  ],
	[ x5i.l9z,   "\x26\x23\x39\x36\x35\x31\x3b"  ],
	[ x5i.i5y,  "\x26\x23\x39\x36\x36\x31\x3b"  ]
];

function q8p(a4t)
{
	return b8t[a4t][1];
}


const v9v =
{
	r9e : 0,
	o7l : 1,
	p3t : 2,
	f5x : 3,
	b7l : 4,
	w1k : 5,
	t2l : 6,
	j4c : 7,
	g8o : 8
};

const e9u =
[
	[ v9v.r9e,     		"" 	 ],
	[ v9v.o7l,       	"\x21"  ],
	[ v9v.p3t, 					"\x3f"  ],
	[ v9v.f5x,	"\x21\x3f" ],
	[ v9v.b7l,	 		"\x3f\x21" ],
	[ v9v.w1k,  	"\x21\x21" ],
	[ v9v.t2l, 			"\x3f\x3f" ],
	[ v9v.j4c, 		"\x26\x23\x38\x38\x35\x37\x3b"  ],
	[ v9v.g8o, 		"\x26\x23\x39\x37\x32\x33\x3b"  ]
];

function z3y(style)
{
	return e9u[style][1];
}


class q5f
{

constructor()
{
	this.x6s = new h2g();
	this.j3r = null;
	this.t6j = null;
	this.e2y = null;
	this.j8j = null;
  this.c2w = 0; 
}

l3c(x6s)
{
	this.x6s = x6s.n7y();
}

p7w(x1l, o6w, r9j, f8o)
{
	this.x6s.p7w(x1l, o6w, r9j, f8o);
}

}

class j6q
{

constructor()
{
	this.r9x = null;
	this.x6s = null;
}

g0c(t3o)
{
	return this.r9x == t3o.r9x;
}

e1j(t3o)
{
	return !this.g0c(t3o);
}

n7y()
{
	let k9v = new j6q();
  k9v.r9x = this.r9x;
  k9v.x6s = this.x6s;
	return k9v;
}

}


class g5x
{

constructor()
{
	this.q2p = new n1y();
 	this.x1d = null;
	this.t9a = 1;
	this.q2p.a4p();
  this.z1q = new v0r();
}

a0b(t3o)
{
	this.k6w(t3o.q2p, t3o.t9a);
	this.z1q = t3o.z1q.n7y();
	this.x1d = this.s4e(t3o.x1d);
}

n7y()
{
	let m6n = new g5x();
	m6n.a0b(this);
	return m6n;
}

k6w(d4j, f1j)
{
	this.q2p = d4j.n7y();
	this.t9a = f1j;
	this.z1q = new v0r();
	this.x1d = null;
}

f1j()
{
	return this.t9a;
}

d4j()
{
	return this.q2p.n7y();
}

h5r(z4w)
{
  let x7m = this.l3n(z4w) + 1;
	if (x7m)
	{
		return this.t9a +
			Math.floor((x7m - 1 + this.q2p.x0j()) / 2);
	}
	else
	{
		return this.t9a;
	}
}

l3n(z4w)
{
	let x7m = 0;
	if (!z4w.r9x)
	{
		return 0;
	}
	let a9g = z4w.r9x;
	while (1)
	{
		x7m++;
		if (!a9g.t6j)
		{
			let h1j = a9g;
			while (h1j.e2y)
			{
				h1j = h1j.e2y;
			}
			if (!h1j.t6j)
			{
				break;
			}
		}
		if (a9g.t6j)
		{
			a9g = a9g.t6j;
		}
		else
		{
			let h1j = a9g;
			while (h1j.e2y)
			{
				h1j = h1j.e2y;
			}
			a9g = h1j.t6j;
		}
	}
	return x7m;
}

k1w()
{
	return this.x1d != null;
}

b3y(z4w)
{
	return z4w.g0c(this.f9i());
}

b3t(z4w)
{
	if (z4w.r9x)
	{
		return z4w.r9x.j3r == null;
	}
	else if (this.x1d)
	{
		return false;
	}
	else
	{
		return true;
	}
}

q3y(z4w)
{
	if (!this.b3y(z4w))
	{
		if (z4w.r9x.t6j)
		{
			z4w.r9x = z4w.r9x.t6j;
			z4w.x6s = z4w.r9x.x6s;
		}
		else
		{
			let a9g = z4w.r9x;
			while (a9g.e2y)
			{
				a9g = a9g.e2y;
			}
			a9g = a9g.t6j;
			z4w.r9x = a9g;
      if (z4w.r9x)
      {
  			z4w.x6s = z4w.r9x.x6s;
      }
      else
      {
        z4w.x6s = null;
      }
		}
	}
}

t2m(z4w)
{
	if (!this.b3t(z4w))
	{
		z4w.r9x = this.q5v(z4w);
		z4w.x6s = z4w.r9x.x6s;
	}
}

h7b(z4w, l9i)
{
	let d3y = this.q7b(z4w);
	if (l9i < 0 || l9i >= d3y)
	{
		return;
	}
	let h1j = this.q5v(z4w);
	let i = 0;
	while (i != l9i)
	{
		i++;
		h1j = h1j.j8j;
	}
	z4w.r9x = h1j;
	z4w.x6s = z4w.r9x.x6s;
}

x1r(z4w)
{
	if (!z4w.r9x)
	{
		return this.t9a;
	}
	let x7m = this.l3n(z4w);
	if (x7m)
	{
		return this.t9a +
      Math.floor((x7m - 1 + this.q2p.x0j()) / 2);
	}
	else
	{
		return this.t9a;
	}
}

f9i()
{
	let z4w = new j6q();
	z4w.r9x = null;
	z4w.x6s = null;
	return z4w;
}

f4i(z4w)
{
	if (!this.b3t(z4w))
	{
		let a9g = this.q5v(z4w);
		while (true)
		{
			if (!a9g.j3r)
			{
				break;
			}
			a9g = a9g.j3r;
		}
		z4w.r9x = a9g;
		z4w.x6s = z4w.r9x.x6s;
	}
}

h5j(b3a)
{
	let z4w = this.f9i();
	if (b3a > 0)
	{
    this.b3a = 0;
		this.e7g(z4w, b3a);
		return z4w;
	}
	else
	{
		return z4w;
	}
}

e7g(z4w, b3a)
{
	while (true)
	{
		if (this.b3t(z4w))
		{
			return false;
		}
		let d3y = this.q7b(z4w);
		if (d3y > 1)
		{
			let u2h = z4w.n7y();
			for (let i = 1; i < d3y; i++)
			{
				this.h7b(z4w, i);
				this.b3a++;
				if (this.b3a == b3a)
				{
					return true;
				}
				if (this.e7g(z4w, b3a))
				{
					return true;
				}
        z4w.r9x = u2h.r9x;
        z4w.x6s = u2h.x6s;
			}
		}
		this.t2m(z4w);
		this.b3a++;
		if (this.b3a == b3a)
		{
			return true;
		}
	}
}

s2p(z4w)
{
	if (!z4w.r9x)
	{
		return 0;
	}
	else
	{
		return z4w.r9x.c2w;
	}
}

f1a(z4w)
{
	let l1h = [];
 	if (!z4w.r9x)
  {
		return l1h;
	}
	let a9g = z4w.r9x;
	while (1)
	{
		l1h.push(a9g);
		if (!a9g.t6j)
		{
			let h1j = a9g;
			while (h1j.e2y)
			{
				h1j = h1j.e2y;
			}
			if (!h1j.t6j)
			{
				break;
			}
		}
		if (a9g.t6j)
		{
			a9g = a9g.t6j;
		}
		else
		{
			let h1j = a9g;
			while (h1j.e2y)
			{
				h1j = h1j.e2y;
			}
			a9g = h1j.t6j;
		}
	}
	return l1h.reverse();
}

y1o(z4w)
{
	let l1h = this.f1a(z4w);
	let d3y = this.q7b(z4w);
	if (d3y == 0)
	{
		return l1h;
	}
	let l3h = this.n1f(z4w, 0);
	while (l3h)
	{
		l1h.push(l3h);
		l3h = l3h.j3r;
	}
	return l1h;
}

q7b(z4w)
{
	let l3h = this.q5v(z4w);
	if (!l3h)
	{
		return 0;
	}
	let d3y = 1;
	while (l3h.j8j)
	{
		d3y++;
		l3h = l3h.j8j;
	}
	return d3y;
}

d1q(z4w, g6q)
{
	if (this.b3y(z4w))
	{
		this.x1d = g6q;
		z4w.r9x = g6q;
		z4w.x6s = z4w.r9x.x6s;
	}
	else
	{
		z4w.r9x.j3r = g6q;
		g6q.t6j = z4w.r9x;
		z4w.r9x = g6q;
		z4w.x6s = z4w.r9x.x6s;
	}
}

n8v(z4w, g6q)
{
	let h1j = this.q5v(z4w);
	while (h1j.j8j)
	{
		h1j = h1j.j8j;
	}
	h1j.j8j = g6q;
	g6q.e2y = h1j;

	z4w.r9x = g6q;
	z4w.x6s = z4w.r9x.x6s;
}

p4g(z4w, x6s)
{
	let g6q = new q5f();
 	g6q.l3c(x6s);
	if (this.b3t(z4w))
	{
		this.d1q(z4w, g6q);
	}
	else
	{
		this.n8v(z4w, g6q);
	}
}

f5c(z4w)
{
	let h1j = this.n1f(z4w, 1);
	if (!h1j)
	{
		return false;
	}
	while (h1j)
	{
		let b4a = h1j.j3r;
		while (b4a)
		{
			if (b4a.j8j)
			{
				return false;
			}
			b4a = b4a.j3r;
		}
		h1j = h1j.j8j;
	}
	return true;
}

l3k()
{
	let b4a = this.x1d;
	while (b4a)
	{
		if (b4a.j8j)
		{
			return true;
		}
		b4a = b4a.j3r;
	}
	return false;
}

f5e()
{
	if (!this.z1q.y0l())
	{
		return true;
	}
	if (this.l3k())
	{
		return true;
	}
	let b4a = this.x1d;
	while (b4a)
	{
		if (b4a.x6s.f5e())
		{
			return true;
		}
		b4a = b4a.j3r;
	}
	return false;
}

q5v(z4w)
{
	if (z4w.r9x)
	{
		return z4w.r9x.j3r;
	}
	return this.x1d;
}

n1f(z4w, l9i)
{
	let i = 0;
	let h1j = this.q5v(z4w);
	while (h1j && i != l9i)
	{
		h1j = h1j.j8j;
		i++;
	}
	return h1j;
}

s4e(h1j)
{
	let m6l = h1j;
	let i2z = null;
	let g6q = null;
	let r8x = null;
	while (m6l)
	{
		g6q = new q5f();
		g6q.l3c(m6l.x6s);
		if (i2z)
		{
			i2z.j3r = g6q;
			g6q.t6j = i2z;
		}
		else
		{
			r8x = g6q;
		}
		i2z = g6q;
		if (m6l.j8j && !m6l.e2y)
		{
			let x5g = m6l.j8j;
			let o7c = i2z;
			while (x5g)
			{
				let h0q = this.s4e(x5g);
				o7c.j8j = h0q;
				h0q.e2y = o7c;
				o7c = h0q;
				x5g = x5g.j8j;
			}
		}
		m6l = m6l.j3r;
	}
	return r8x;
}

w7y()
{
	return this.z1q;
}

d1y()
{
	return this.z1q.f3w;
}

f6u(s7u)
{
	this.z1q.f3w = s7u;
}

t2u()
{
	return !this.z1q.c0j.y0l();
}

j8l(c0j)
{
	this.z1q.c0j = c0j.n7y();
}

o1q()
{
	return this.z1q.c0j;
}

z1d()
{
	return !this.z1q.f9y.y0l();
}

e0q(f9y)
{
	this.z1q.f9y = f9y.n7y();
}

s9u()
{
	return this.z1q.f9y;
}

g1e()
{
	return !this.z1q.m4a.y0l();
}

y7k(m4a)
{
	this.z1q.m4a = m4a.n7y();
}

a9d()
{
	return this.z1q.m4a;
}

p7l(b3a)
{
  if (b3a == 0)
  {
    return true;
  }
	let b4a = this.x1d;
	while (b4a)
	{
    if (b4a.c2w == b3a)
    {
      return true;
    }
		b4a = b4a.j3r;
	}
	return false;
}

r4h()
{
	let z4w = this.f9i();
	this.b3a = 0;
	this.i3h(z4w);
}

i3h(z4w)
{
	while (true)
	{
		if (this.b3t(z4w))
		{
			return;
		}
		let d3y = this.q7b(z4w);
		if (d3y > 1)
		{
			let u2h = z4w.n7y();
			for (let i = 1; i < d3y; i++)
			{
				this.h7b(z4w, i);
				this.b3a++;
        z4w.r9x.c2w = this.b3a;
				this.i3h(z4w);
        z4w.r9x = u2h.r9x;
        z4w.x6s = u2h.x6s;
			}
		}
		this.t2m(z4w);
  	this.b3a++;
    z4w.r9x.c2w = this.b3a;
	}
}

x1l(z4w)
{
	let x1l = this.q2p.n7y();
	if (!z4w.r9x)
	{
		return x1l;
	}
	let l1h = this.c8c(z4w);
  for (const x6s of l1h)
	{
		x1l.t2m(x6s.i0h());
	}
	return x1l;
}

c8c(z4w)
{
	let l1h = [];
 	if (!z4w.r9x)
  {
		return l1h;
	}
	let a9g = z4w.r9x;
	while (1)
	{
		l1h.push(a9g.x6s);
		if (!a9g.t6j)
		{
			let h1j = a9g;
			while (h1j.e2y)
			{
				h1j = h1j.e2y;
			}
			if (!h1j.t6j)
			{
				break;
			}
		}
		if (a9g.t6j)
		{
			a9g = a9g.t6j;
		}
		else
		{
			let h1j = a9g;
			while (h1j.e2y)
			{
				h1j = h1j.e2y;
			}
			a9g = h1j.t6j;
		}
	}
	return l1h.reverse();
}

}

const l8k =
{
	r9e : 0,
	g5c : 1,
	z4b : 2,
	t8m : 3,
	h1d : 4,
	r6y : 5,
	r4n : 6,
	y5m : 7,
	u3a : 8,
	y9e : 9,
	r0q : 10,
	e6a : 11,
	e6b : 12,
	t4r : 13,
	x5f : 14,
	s2u : 15
};

const r2o =
[
	[ l8k.r9e,     						  ""    ],
	[ l8k.g5c,        "\x2b\x26\x23\x38\x32\x31\x31\x3b" ],
	[ l8k.z4b, 						"\x26\x23\x31\x37\x37\x3b" ],
	[ l8k.t8m,		"\x26\x23\x31\x30\x38\x36\x36\x3b"  ],
	[ l8k.h1d, 							"\x3d"   ],
	[ l8k.r6y,  							"\x26\x23\x38\x37\x33\x34\x3b" ],
	[ l8k.r4n,  	"\x26\x23\x31\x30\x38\x36\x35\x3b"],
	[ l8k.y5m, 						"\x26\x23\x38\x37\x32\x33\x3b" ],
	[ l8k.u3a, 				"\x26\x23\x38\x32\x31\x31\x3b\x2b"],
	[ l8k.y9e,						"\x26\x23\x38\x37\x37\x33\x3b" ],
	[ l8k.r0q, 						"\x26\x23\x38\x36\x34\x36\x3b" ],
	[ l8k.e6a,  						"\x26\x23\x38\x35\x39\x33\x3b" ],
	[ l8k.e6b, 								"\x26\x23\x38\x35\x39\x34\x3b" ],
	[ l8k.t4r, 					"\x26\x23\x38\x38\x35\x33\x3b" ],
	[ l8k.x5f,		"\x26\x23\x31\x30\x32\x32\x37\x3b"],
	[ l8k.s2u, 								"\x4e"   ]
];

function r5w(q4y)
{
	return r2o[q4y][1];
}


const b4f =
{
	f9a : 0,
	c1g : 1,
	h7p : 2
};

const o9q =
{
	r9e : 0,
	g2p : 1,
	p6f : 2,
	c8d : 3,
	y4e : 4,
	a4t : 5,
	m3d : 6,
	f3w : 7,
	b0x : 8,
	m4a : 9,
	v8t : 10,
	p3a : 11
};

class f1z
{

constructor()
{
	this.k2y = new l6g();
  this.y1b = true;
  this.k0q = true;
  this.a0s = b4f.f9a;
 	this.v1u = true;
 	this.f4p = -1;
  this.d9n = false;
  this.x3o = false;
	this.w0h = false;
	this.x7e = true;
  this.u7f = false;
  this.o3y = false;
  this.c7t = 0;
	this.c6n = true;
  this.f8a = null;
 	this.g9p = o9q.r9e;
}

b6s(l1h)
{
	this.f8a = l1h;
 	let f9i = this.f8a.f9i();
	let d4j = this.f8a.d4j();
	this.g9p = o9q.r9e;
	this.x7e = true;
	this.x3o = false;
	this.w0h = false;
	this.d9n = false;
	this.u7f = this.f8a.f5e();
	this.c6n = true;

	this.c7t = 0;
  if (this.a0s == b4f.c1g ||
    (this.a0s == b4f.h7p && !d4j.d5c()))
	{
		if (this.k0q)
		{
			this.e7n(f9i, d4j, c7t);
			this.x7e = true;
		}
	}

	this.h1s((this.u7f && !this.d5m) ? o9q.g2p : o9q.p6f);
  this.a7n(this.u7f);
  this.p4g(f9i, "");
	this.i0c(f9i, this.f8a.w7y().f3w);

	if (this.f8a.k1w())
	{
    this.h1z();
	}
	this.h1s(o9q.r9e);

 	this.b6m();
}

h1z()
{
  let k7l = 0;
 	let z4w = this.f8a.f9i();
	let x1l = this.f8a.d4j();
  let x1r = this.f8a.f1j();

	let w7i = 100000;
	if (this.f4p == 0)
	{
		return;
	}
	if (this.f4p != -1)
	{
		w7i = this.f4p;
	}
	let l4f = x1r + w7i - 1;
	this.x7e = true;
	while (true)
	{
		let q7b = this.f8a.q7b(z4w);
		while (x1r <= l4f && !this.f8a.b3t(z4w))
		{
      this.f8a.t2m(z4w);
    	this.h1s((this.u7f && !this.d5m) ? o9q.g2p : o9q.p6f);
			this.t3h(z4w, x1l, x1r);
			x1l.t2m(z4w.x6s.i0h());
 			if (x1l.v7m())
			{
				x1r++;
			}
			if (this.v1u && q7b > 1)
			{
				break;
			}
			q7b = this.f8a.q7b(z4w);
		}
		if (!q7b || x1r > l4f)
		{
			return;
		}
    x1l.q3y(z4w.x6s.i0h());
		if (x1l.x0j())
		{
			x1r--;
		}
    this.f8a.q3y(z4w);
		for (let i = 1; i < q7b; i++)
		{
      k7l++;
      let x0a = "<span class=\"tdline\" data-level=\"";
      x0a += k7l.toString();
      x0a += "\">";
      this.k2y.l7y(x0a);
			this.y6y(o9q.c8d);
			this.v3a("\x5b", true);
			let a4t = '';
      this.z0m(z4w, x1l, x1r, i, a4t, k7l);
			this.h1s(o9q.c8d);
			this.v3a("\x5d", true);
      this.k2y.l7y("\x3c\x2f\x73\x70\x61\x6e\x3e");
      k7l--;
     	this.h1s((this.u7f && !this.d5m) ? o9q.g2p : o9q.p6f);
		}
		this.y6y(this.g9p);
    this.f8a.t2m(z4w);
    x1l.t2m(z4w.x6s.i0h());
		if (x1l.v7m())
		{
			x1r++;
		}
		this.x7e = true;
	}
}

t3h(z4w, x1l, x1r)
{
	if (this.f8a.b3y(z4w))
	{
		return;
	}
 	let x6s = z4w.x6s;

	let u6i = '';
  let g5p = false;
  if (this.y1b)
	{
		if (x6s.z1t())
		{
			if (!this.f8a.b3y(z4w))
			{
        let u9r = z4w.n7y();
        this.f8a.q3y(u9r);
        if (u9r.x6s)
        {
  				if (u9r.x6s.x1e())
	  			{
		  			g5p = true;
			  	}
        }
			}
		}
  }
	if (this.x3o)
	{
		u6i = "\x28";
		this.x3o = false;
		if (this.y1b && x6s.b7j())
		{
			this.v3a("\x28", true);
			let f3z = this.g9p;
			this.z5p(z4w, x6s.m3d());
			this.h1s(f3z);
			u6i = "";
      g5p = true;
		}
	}
	else
	{
		if (this.y1b && x6s.b7j())
		{
  	  let f3z = this.g9p;
	  	this.z5p(z4w, x6s.m3d());
		  this.h1s(f3z);
      g5p = true;
    }
	}
	if (x6s.t3v())
	{
		u6i += q8p(x6s.a4t());
	}
	let w3q = x6s.y3p();
	if (w3q)
	{
    u6i += x1r;
		u6i += '.';
	}
	else
	{
		if (this.x7e || g5p)
		{
 			u6i += x1r;
			u6i += "\x2e\x2e\x2e";
		}
	}
	u6i += y8a(x1l, x6s.i0h(), false);
	if (x6s.h2o())
	{
		u6i += z3y(x6s.style());
	}
	if (x6s.z9p())
	{
		u6i += r5w(x6s.q4y());
	}
	if (x6s.h6r())
	{
		u6i += "\x20\x45\x6e\x64\x20\x4f\x66\x20\x47\x61\x6d\x65";
  }
	if (this.w0h || this.d9n)
	{
		if (this.f8a.b3t(z4w) && (!this.y1b || !x6s.x1e()))
		{
			if (this.w0h)
			{
				u6i += "\x29";
				this.w0h = false;
			}
			else
			{
				u6i += "\x3b";
				this.d9n = false;
			}
		}
	}
	this.p4g(z4w, u6i);
	this.x7e = false;

	if (x6s.c5f())
	{
		let f3w = x6s.f3w();
    let x2b = f3w.indexOf("\x5b\x23\x5d");
		let s9w = f3w.substring(0, x2b);
	  let m6h = f3w.substring(x2b + 3);
		if (s9w.length)
		{
			this.i0c(z4w, s9w);
		}
		this.c7t++;
		if (this.k0q)
		{
			this.y6y(o9q.r9e);
      this.e7n(z4w, x1l, this.c7t);
			this.x7e = true;
		}
		if (m6h.length)
		{
			this.i0c(z4w, m6h);
		}
	}
	else
	{
		this.i0c(z4w, x6s.f3w());
	}

  if (x6s.h6r())
	{
    this.k2y.j3a("\x3c\x64\x69\x76\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e"); 
   	this.b6m();
 	  this.a7n(false); 
 	  this.o3y = true;
	}
}

h1s(d8j)
{
	if (d8j != this.g9p)
	{
		this.v3c();
		this.g9p = d8j;
		this.j2k();
	}
}

j2k()
{
}

v3c()
{
	this.g9p = o9q.r9e;
}

y6y(d8j)
{
	this.v3c();
	this.g9p = o9q.r9e;
	if (d8j != o9q.r9e)
	{
		this.g9p = d8j;
		this.j2k();
	}
}

e7n(z4w, x1l, c2w)
{
  this.c6n = true;
	let x0a = "<span class=\"tddia\" movenr=\"";
  x0a += this.f8a.s2p(z4w).toString();
	x0a += "\">",
	this.k2y.l7y(x0a);
	this.k2y.l7y("\x3c\x63\x61\x6e\x76\x61\x73\x3e\x3c\x2f\x63\x61\x6e\x76\x61\x73\x3e");
	this.k2y.l7y("\x3c\x2f\x73\x70\x61\x6e\x3e");
	this.x7e = true;
}

p0y(z4w, s7u)
{
  this.w1d(z4w);
	this.l8c(s7u);
  this.o9y();
}

z0m(l2s, p8a, x1r, l9i, a4t, k7l)
{
  let z4w = l2s.n7y();
  let x1l = p8a.n7y();

	if (a4t.length)
	{
		this.h1s(o9q.a4t);
		let a1f = a4t;
		a1f += "\x29";
    let x0a = "<span class=\"tdprefix\">";
    this.k2y.l7y(x0a);
  	this.v3a(a1f);
    this.k2y.l7y("\x3c\x2f\x73\x70\x61\x6e\x3e");
	}
	let q7b = 0;
	let g3s = 1;
  this.f8a.h7b(z4w, l9i);
	this.x7e = true;
	do
	{
		this.h1s(o9q.c8d);
		this.t3h(z4w, x1l, x1r);
		if (q7b > 1)
		{
      this.f8a.q3y(z4w);
      this.b9h(z4w, x1l, x1r);
      this.f8a.t2m(z4w);
			this.x7e = true;
		}
		x1l.t2m(z4w.x6s.i0h());
		if (x1l.v7m())
		{
			x1r++;
		}
		q7b = this.f8a.q7b(z4w);
		if (q7b == 0)
		{
			break;
		}
		if (q7b > 1)
		{
			if (!this.f8a.f5c(z4w))
			{
				break;
			}
		}
    this.f8a.t2m(z4w);
		g3s++;
	} while (true);

	if (this.f8a.b3t(z4w))
	{
		return;
	}

	let e1i = a4t.length;
	let a1f = '';
	let y7c = 1;
	for (let i = 0; i < q7b; i++)
	{
		if (e1i == 0)
		{
      a1f = String.fromCharCode('A'.charCodeAt() + y7c - 1);
		}
		else if (e1i == 1)
		{
      a1f = a4t;
      a1f += y7c;
		}
		else if (e1i == 2)
		{
      a1f = a4t;
      a1f += String.fromCharCode('a'.charCodeAt() + y7c - 1);
		}
		else
		{
      a1f = a4t;
      a1f += y7c;
		}

    let x0a = "<span class=\"tdline\" data-level=\"";
    x0a += k7l.toString();
    x0a += "\">";
    this.k2y.l7y(x0a);
  	this.y6y(this.g9p);
    this.z0m(z4w, x1l, x1r, i, a1f, k7l);
    this.k2y.l7y("\x3c\x2f\x73\x70\x61\x6e\x3e");
		y7c++;
	}
}

b9h(l2s, p8a, x1r)
{
  let z4w = l2s.n7y();
  let x1l = p8a.n7y();

	this.h1s(o9q.y4e);
	this.x3o = true;
	this.d9n = false;
	let q7b = this.f8a.q7b(z4w);
	for (let i = 1; i < q7b; i++)
	{
		if (i == q7b - 1)
		{
			this.w0h = true;
		}
		if (i < q7b - 1)
		{
			this.d9n = true;
		}
    this.g0r(z4w, x1l, x1r, i);
		if (this.d9n)
		{
			this.h1s(o9q.y4e);
			this.v3a("\x3b", false);
			this.d9n = false;
		}
	}
	this.h1s(o9q.y4e);
	if (this.w0h)
	{
		this.v3a("\x29", false);
		this.w0h = false;
	}
}

g0r(l2s, p8a, x1r, l9i)
{
  let z4w = l2s.n7y();
  let x1l = p8a.n7y();

  this.f8a.h7b(z4w, l9i);
	let g3s = 0;
	this.x7e = true;
	do
	{
		g3s++;
		this.h1s(o9q.y4e);
		this.t3h(z4w, x1l, x1r);
		if (this.f8a.b3t(z4w))
		{
			break;
		}
		x1l.t2m(z4w.x6s.i0h());
		if (x1l.v7m())
		{
			x1r++;
		}
    this.f8a.t2m(z4w);
	} while (true);
}

p4g(z4w, u6i)
{
	if (u6i.length)
	{
 		this.s5d(z4w, u6i);
	}
	else
	{
    this.s5d(z4w, "\x5b\x2e\x2e\x2e\x5d");
	}
	if (z4w.x6s)
	{
		if (z4w.x6s.c6i() || z4w.x6s.w2r())
		{
			this.j3e(z4w, o9q.b0x);
		}
		if (z4w.x6s.c5f())
		{
		}
		if (z4w.x6s.p3r())
		{
			this.j3e(z4w, o9q.v8t);
		}
		if (z4w.x6s.g3j())
		{
			this.j3e(z4w, o9q.m4a);
		}
	}
	else
	{
		if (this.f8a.t2u() || this.f8a.z1d())
		{
			this.j3e(z4w, o9q.b0x);
		}
		if (this.f8a.g1e())
		{
		 	this.j3e(z4w, o9q.m4a);
		}
	}
}

v3a(u6i, a8d)
{
	if (u6i.length == 0)
	{
		return;
	}
	if (!this.c6n && a8d)
	{
		this.k2y.j3a("\x20");
	}
	this.k2y.j3a(u6i);
	this.c6n = false;
}

z5p(z4w, m3d)
{
	if (this.y1b && m3d.length)
	{
		this.h1s(o9q.m3d);
		this.p0y(z4w, m3d);
	}
}

i0c(z4w, f3w)
{
	if (this.y1b && f3w.length)
	{
		this.h1s(o9q.f3w);
		this.p0y(z4w, f3w);
	}
}

l8c(s7u)
{
  let s3y = s7u;
  let z3n = s3y.replaceAll("\x3c\x62\x72\x3e\x3c\x62\x72\x3e", "\x3c\x62\x72\x3e");
  let p8l = z3n.replaceAll("\x3c\x62\x72\x3e\x3c\x62\x72\x3e", "\x3c\x62\x72\x3e");
  let c2e = p8l.replaceAll("\x3c\x62\x72\x3e", "\x3c\x64\x69\x76\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e");
  let s = c2e;
  this.k2y.j3a(s);
}

s5d(z4w, u6i)
{
	if (u6i.length == 0)
	{
		return;
	}
	if (!this.c6n)
	{
		this.k2y.j3a("\x20");
	}
  let g5g = '';
  if (z4w.x6s)
  {
  	if (z4w.x6s.f3x())
	  {
		  if (z4w.x6s.o2d() == x2n.g3i)
  		{
	  		g5g = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x6f\x70\x65\x6e\x69\x6e\x67";
		  }
  		else if (z4w.x6s.o2d() == x2n.z8c)
	  	{
		  	g5g = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x6d\x69\x64\x64\x6c\x65";
  		}
	  	else if (z4w.x6s.o2d() == x2n.d1a)
		  {
  			g5g = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x65\x6e\x64";
	  	}
  	}
  }
	let o9z = "<span class=\"";
	if (g5g.length == 0)
	{
		o9z += "tdmove\" movenr=\"";
	}
	else
	{
		o9z += "\x74\x64\x6d\x6f\x76\x65\x20" + g5g + "\" movenr=\"";
	}
  o9z += this.f8a.s2p(z4w).toString();
  o9z += "\"";
	o9z += "\x3e",
	o9z += u6i;
	o9z += "\x3c\x2f\x73\x70\x61\x6e\x3e";

	this.k2y.l7y(o9z);
	this.c6n = false;
}

j3e(z4w, d8j)
{
  if (d8j == o9q.b0x)
  {
    this.l8q(z4w);
  }
  else if (d8j == o9q.m4a)
  {
    this.p5u(z4w);
  }
}

l8q(z4w)
{
	let x0a = "<span class=\"tdcolors\" movenr=\"";
  x0a += this.f8a.s2p(z4w).toString();
	x0a += "\">",
	this.k2y.l7y(x0a);
	this.k2y.l7y("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

p5u(z4w)
{
	let x0a = "<span class=\"tdmedal\" movenr=\"";
  x0a += this.f8a.s2p(z4w).toString();
	x0a += "\">",
	this.k2y.l7y(x0a);
	this.k2y.l7y("\x3c\x63\x61\x6e\x76\x61\x73\x3e\x3c\x2f\x63\x61\x6e\x76\x61\x73\x3e");
	this.k2y.l7y("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

a7n(w7n)
{
 	let x0a = "<span class=\"tdline\"";
	if (w7n)
	{
		x0a += " data-commented=\"1\"";
	}
	x0a += " data-level=\"0\">";
	this.k2y.j3a(x0a);
}

b6m()
{
  this.k2y.l7y("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

w1d(z4w)
{
  let x0a = "<span class=\"tdcomment\" movenr=\"";
  x0a += this.f8a.s2p(z4w).toString();
  x0a += "\">";
  this.k2y.j3a(x0a);
}

o9y()
{
  this.k2y.l7y("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

} 
const c3j =
{
	e6b : 1,
	q8a : 2,
	y8v : 3
};

class k7q
{

constructor()
{
	this.s2i = 0;
	this.e3m = 0;
	this.type = c3j.e6b;
}

n7y()
{
	let i8y = new k7q();
	i8y.s2i = this.s2i;
	i8y.e3m = this.e3m;
	i8y.type = this.type;
	return i8y;
}

}

function p9c(s2i, e3m, type)
{
	let s = new k7q();
	s.s2i = s2i;
	s.e3m = e3m;
	s.type = type;
	return s;
}
class s7c
{

constructor()
{
	this.f0i = [];
}

n7y()
{
	let c9b = new s7c();
	for (const y9c of this.f0i)
	{
		c9b.add(y9c.n7y());
	}
	return c9b;
}

o7g()
{
	this.f0i.length = 0;
}

y0l()
{
	return this.f0i.length == 0;
}

d7b()
{
	return this.f0i.length;
}

add(y9c)
{
	let z7q = y9c.n7y();
	this.f0i.push(z7q);
}

}

const c7m =
{
	s0p : 0,
	l7d : 1,
	q1l : 2
};

class r3c
{

constructor()
{
	this.n4z = 0;
	this.type = c7m.s0p;
}

n7y()
{
	let q6z = new r3c();
	q6z.n4z = this.n4z;
	q6z.type = this.type;
	return q6z;
}

}

function i1a(n4z, type)
{
	let u0j = new r3c();
	u0j.n4z = n4z;
	u0j.type = type;
	return u0j;
}

class x6l
{

constructor()
{
	this.m0s = [];
}

n7y()
{
	let z0k = new x6l();
	for (const c1n of this.m0s)
	{
		z0k.add(c1n.n7y());
	}
	return z0k;
}

o7g()
{
	this.m0s.length = 0;
}

y0l()
{
	return this.m0s.length == 0;
}

d7b()
{
	return this.m0s.length;
}

add(d7t)
{
	let z7m = d7t.n7y();
	this.m0s.push(z7m);
}

}

const v3w =
{
	e2n    : 0,
	i1g  : 1,
	g5u  : 2,
	w8t    : 3,
  n7e   : 4,
	p5i    : 5,
};


function l8b(v8b)
{
	let u6i = '';
	switch (v8b)
	{
		case v3w.e2n:
			u6i = "\x50";
			break;
		case v3w.i1g:
			u6i = "\x4e";
			break;
		case v3w.g5u:
			u6i = "\x42";
			break;
		case v3w.w8t:
			u6i = "\x52";
			break;
		case v3w.n7e:
			u6i = "\x51";
			break;
		case v3w.king:
			u6i = "\x4b";
			break;
	}
	return u6i;
}

class j0c
{

constructor()
{
  this.x6w = 0;
	this.j5a = new e5o();
	this.l1h = new g5x();
}

n7y()
{
	let x3x = new j0c();
  x3x.x6w = this.x6w;
	x3x.j5a = this.j5a.n7y();
	x3x.l1h = this.l1h.n7y();
	return x3x;
}

}

const x3b = 	 		"\x23\x37\x42\x38\x32\x39\x35";
const t0a =			"\x23\x39\x46\x39\x46\x39\x46";
const g9z = 			    "\x23\x37\x42\x38\x32\x39\x35";
const h2w = 		  "\x23\x46\x46\x46\x46\x46\x46";
const s1v =       "\x23\x44\x30\x42\x31\x39\x34";

const g4o	   = "\x23\x45\x31\x33\x31\x32\x39";
const b9b	 = "\x23\x33\x38\x39\x43\x31\x33";
const e6x = "\x23\x45\x32\x42\x36\x32\x38";

const e0w	 = "\x23\x45\x31\x33\x31\x32\x39";
const p0m	 = "\x23\x33\x38\x39\x43\x31\x33";
const o1h	   = "\x23\x45\x32\x42\x36\x32\x38";

class s0a
{

constructor()
{
	this.f7a = null;
	this.t1i = false;
	this.f7o = null;
	this.j0m = null;
	this.x8e = null;
	this.i9a = 0;
	this.z3v = 0;
	this.q2f = 0;
	this.i8a = 0;
	this.n5l = 0;
	this.u4n = 0;
	this.o6e = new j6p();
	this.x1l = new n1y();
	this.c0j = new s7c();
	this.f9y = new x6l();
  this.f1k = new m1c();
  this.u9n = true;
	this.c3m = true;
	this.d7i = true;
	this.i6d = false;
	this.u5j = x3b;
	this.x1c = t0a;
	this.j8c = r4g;
	this.n8s = c8h;
	this.q4x = c8h;
	this.c4n = l9h;
	this.o9l = true;
	this.b7y = q8i;
	this.q8j = q8i;
	this.h7n = false;
	this.v1n = [];
	this.h7l = 0;
}

l6q(f7a)
{
	this.f7a = f7a;
}

v8e(o6e)
{
	this.o6e = o6e;
	this.q2f = o6e.q2f();
	this.i8a = o6e.q2f();

	this.i9a = (this.f7a.width - this.q2f) / 2;
	let top = (this.f7a.height - this.i8a) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.z3v = top;
	this.n5l = this.i9a + this.q2f - 1;
	this.u4n = this.z3v + this.i8a - 1;
	this.t1i = false;
	this.m0x();
}

k6w(x1l)
{
	this.x1l = x1l.n7y();
	this.c0j.o7g();
	this.f9y.o7g();
}

h6d(c0j)
{
	this.c0j = c0j.n7y();
}

i7y(f9y)
{
	this.f9y = f9y.n7y();
}

k1u(x6s)
{
  this.f1k = x6s.n7y();
}

p3p(i6d)
{
	this.i6d = i6d;
}

u7n()
{
	this.i6d = !this.i6d;
}

d1j()
{
	if (!this.f7a) return;
	if (this.q2f <= 0 || this.i8a <= 0)
	{
		return;
	}
	this.i0p();
}

u9m()
{
	let j4q = this.o6e.j4q;
	if (this.t1i)
	{
		return;
	}
	this.t1i = true;
	if (j4q == k5t.e5k)
	{
  	this.f7o = q9x.g9u("\x62\x6f\x61\x72\x64\x2f\x4c\x69\x67\x68\x74\x53\x71\x75\x61\x72\x65");
  	this.j0m = q9x.g9u("\x62\x6f\x61\x72\x64\x2f\x44\x61\x72\x6b\x53\x71\x75\x61\x72\x65");
		this.x8e = q9x.g9u("\x62\x6f\x61\x72\x64\x2f\x4d\x61\x72\x67\x69\x6e");
	}
}

m0x()
{
	this.u9m();
	let j4q = this.o6e.j4q;
	if (j4q == k5t.e5k)
	{
		this.o9l = false;
		this.c3m = false;
		this.d7i = false;
		this.j8c = "\x23\x46\x46\x46\x46\x39\x37";
		this.n8s = "\x23\x39\x42\x32\x45\x33\x31";
		this.q4x = x3p;
	}
}

i0p()
{
	this.m0x();
	if (this.o6e.j4q == k5t.e5k)
	{
		let s0u = q9x.g9u("\x62\x6f\x61\x72\x64\x2f\x42\x6f\x61\x72\x64\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64");
		this.k9z(new l5s(0, 0, this.f7a.width, this.f7a.height), s0u);
	}
	this.z4x();  
	this.w1u(); 
	this.e8c(); 
  if (chess)
  {
	  this.g4w();
  }
  else
  {
	  this.l8a();
  	this.x4l();
  }
  
  this.g2k();
 	this.t9b();
 	this.l2i();
 	this.t1j();
	this.q9s(); 
	this.y1l();      
}

z4x()
{
	let m4z = this.z3v;
	let m6m = this.i9a;
	let q0o = this.n5l;
	let u3z = this.u4n;
	let j0h = this.o6e.m0t;
	this.n1u(new l5s(m6m, m4z, q0o, m4z+j0h-1), this.n8s);
	this.n1u(new l5s(m6m, u3z-j0h+1, q0o, u3z), this.q4x);
	this.n1u(new l5s(m6m, m4z, m6m+j0h-1, u3z), this.n8s);
	this.n1u(new l5s(q0o-j0h+1, m4z, q0o, u3z), this.q4x);
}

w1u()
{
	let m0t = this.o6e.m0t;
	let l8d = this.o6e.l8d;
	if (!l8d)
	{
		return;
	}
	if (this.o9l || !this.x8e)
	{
		this.r6e(this.c4n);
	}
	else
	{
		let left = this.i9a + m0t;
		let top = this.z3v + m0t;
		let x9m = this.n5l - m0t;
		let y7m = this.z3v + m0t + l8d - 1;
		this.k9z(new l5s(left, top, x9m, y7m), this.x8e);

		left = this.i9a + m0t;
		top = this.z3v + m0t;
		x9m = this.i9a + m0t + l8d - 1;
		y7m = this.u4n - m0t;
		this.k9z(new l5s(left, top, x9m, y7m), this.x8e);

		left = this.i9a + m0t;
		top = this.u4n - m0t - l8d + 1;
		x9m = this.n5l - m0t;
		y7m = this.u4n - m0t;
		this.k9z(new l5s(left, top, x9m, y7m), this.x8e);

		left = this.n5l - m0t - l8d + 1;
		top = this.z3v + m0t;
		x9m = this.n5l - m0t;
		y7m = this.u4n - m0t;
		this.k9z(new l5s(left, top, x9m, y7m), this.x8e);
	}
}

r6e()
{
	let m0t = this.o6e.m0t;
	let l8d = this.o6e.l8d;
	if (!l8d)
	{
		return;
	}

	let left = this.i9a + m0t;
	let top = this.z3v + m0t;
	let x9m = this.n5l - m0t;
	let y7m = this.z3v + m0t + l8d - 1;
	this.n1u(new l5s(left, top, x9m, y7m), this.c4n);

	left = this.i9a + m0t;
	top = this.z3v + m0t;
	x9m = this.i9a + m0t + l8d - 1;
	y7m = this.u4n - m0t;
	this.n1u(new l5s(left, top, x9m, y7m), this.c4n);

	left = this.i9a + m0t;
	top = this.u4n - m0t - l8d + 1;
	x9m = this.n5l - m0t;
	y7m = this.u4n - m0t;
	this.n1u(new l5s(left, top, x9m, y7m), this.c4n);

	left = this.n5l - m0t - l8d + 1;
	top = this.z3v + m0t;
	x9m = this.n5l - m0t;
	y7m = this.u4n - m0t;
	this.n1u(new l5s(left, top, x9m, y7m), this.c4n);
}

y1l()
{
	if (this.o6e.x0l)
	{
  	if (!this.o6e.l8d)
  	{
	  	return;
  	}
		let e6m = "\x23\x30\x30\x30\x30\x30\x30";
		if (this.x1l.v7m())
		{
			e6m = "\x23\x45\x44\x44\x37\x39\x30";
		}
		else
		{
			e6m = "\x23\x30\x30\x30\x30\x30\x30";
		}
		let rect = this.d6s();
		let q0n = this.f0c();
		q0n.beginPath();
		q0n.fillStyle = e6m;
		let w7u = rect.u2s() * 0.40;
		q0n.arc(rect.c1t + rect.u2s()/2 - 1, rect.k0x + rect.r3w()/2 - 1,
			w7u, 0, 2 * Math.PI);
		q0n.fill();
	}
}

e8c()
{
	let m3f = x3p;
	let m0t = this.o6e.m0t;
	let l8d = this.o6e.l8d;
	let j0h = this.o6e.j0h;
	let m4z = this.z3v + m0t + l8d;
	let m6m = this.i9a + m0t + l8d;
	let q0o = this.n5l - m0t - l8d;
	let u3z = this.u4n - m0t - l8d;
	this.n1u(new l5s(m6m, m4z, q0o, m4z+j0h-1), m3f);
	this.n1u(new l5s(m6m, u3z-j0h+1, q0o, u3z), m3f);
	this.n1u(new l5s(m6m, m4z, m6m+j0h-1, u3z), m3f);
	this.n1u(new l5s(q0o-j0h+1, m4z, q0o, u3z), m3f);
}

f0c()
{
	return this.f7a.getContext('2d');
}

u1e(rect, e6m)
{
	let q0n = this.f0c();
	q0n.beginPath();
	q0n.lineWidth = "\x31";
	q0n.strokeStyle = e6m;
	q0n.rect(rect.c1t, rect.k0x, rect.u2s(), rect.r3w());
	q0n.stroke();
}

n1u(rect, e6m)
{
	let q0n = this.f0c();
	q0n.fillStyle = e6m;
	q0n.fillRect(rect.c1t, rect.k0x, rect.u2s(), rect.r3w());
}

k9z(rect, img)
{
	let q0n = this.f0c();
	let t2f = q0n.createPattern(img, 'repeat');
	q0n.fillStyle = t2f;
	q0n.fillRect(rect.c1t, rect.k0x, rect.u2s(), rect.r3w());
}

g7c(rect, img)
{
	let q0n = this.f0c();
	let t2f = q0n.createPattern(img, 'no-repeat');
	q0n.fillStyle = t2f;
	q0n.fillRect(rect.c1t, rect.k0x, rect.u2s(), rect.r3w());
}

s6h(n4z)
{
	let n9q = d6n;
	let r6w = s6y;
	if (this.i6d)
	{
		n9q = z6v(o3j(n4z));
		r6w = j6b(o3j(n4z));
	}
	else
	{
		n9q = z6v(n4z);
		r6w = j6b(n4z);
	}
	if (c0g(r6w))
	{
		n9q++;
	}
	else
	{
		n9q--;
	}
	return this.v9n(r6w, n9q);
}

l8a()
{
	for (const n4z of w7k)
	{
		this.h7a(n4z);
	}
}

h7a(n4z)
{
	this.t6e(this.s6h(n4z), n4z);
}

t6e(rect, n4z)
{
	let g9u = this.f7o;
	if (this.d7i)
	{
		this.w0v(rect, this.x1c);
		return;
	}
	if (!g9u)
	{
		this.w0v(rect, this.x1c);
		return;
	}

	let z1o = g9u.width;
	let s1p = g9u.height;
	let u4a = this.o6e.c1e;
	if (z1o < u4a || s1p < u4a)
	{
		this.g7c(rect, g9u);
		return;
	}

	let l1i = Math.trunc(z1o / this.o6e.c1e);
	let l7a = Math.trunc(s1p / this.o6e.c1e);
	if (l1i == 0)
	{
		l1i = 1;
	}
	if (l7a == 0)
	{
		l7a = 1;
	}

	let w4z = Math.trunc((n4z) / l1i);
	let l3x = (n4z) % l1i;
	let y = Math.trunc(w4z / l7a);
	w4z = w4z % l7a;

  let t9y = new l5s();
	t9y.c1t = l3x * this.o6e.c1e;
	t9y.k0x = w4z * this.o6e.c1e;
	t9y.c9o = (l3x + 1) * this.o6e.c1e - 1;
	t9y.d7v = (w4z + 1) * this.o6e.c1e - 1;
	let q0n = this.f0c();
	a7h(q0n, rect, g9u, t9y);
}

n5a(n4z)
{
	let n9q = d6n;
	let r6w = s6y;
	if (this.i6d)
	{
		n9q = z6v(o3j(n4z));
		r6w = j6b(o3j(n4z));
	}
	else
	{
		n9q = z6v(n4z);
		r6w = j6b(n4z);
	}
	return this.v9n(r6w, n9q);
}

x4l()
{
	for (const n4z of w7k)
	{
		this.u9c(n4z);
	}
}

u9c(n4z)
{
	this.f0l(this.n5a(n4z), n4z);
}

f0l(rect, n4z)
{
	let g9u = this.j0m;
	if (this.c3m)
	{
		this.w0v(rect, this.u5j);
		return;
	}
	if (!g9u)
	{
		this.w0v(rect, this.u5j);
		return;
	}

	let z1o = g9u.width;
	let s1p = g9u.height;
	let u4a = this.o6e.c1e;
	if (z1o < u4a || s1p < u4a)
	{
		this.g7c(rect, g9u);
		return;
	}

	let l1i = Math.trunc(z1o / this.o6e.c1e);
	let l7a = Math.trunc(s1p / this.o6e.c1e);
	if (l1i == 0)
	{
		l1i = 1;
	}
	if (l7a == 0)
	{
		l7a = 1;
	}

	let w4z = Math.trunc((n4z) / l1i);
	let l3x = (n4z) % l1i;
	let y = Math.trunc(w4z / l7a);
	w4z = w4z % l7a;

  let t9y = new l5s();
	t9y.c1t = l3x * this.o6e.c1e;
	t9y.k0x = w4z * this.o6e.c1e;
	t9y.c9o = (l3x + 1) * this.o6e.c1e - 1;
	t9y.d7v = (w4z + 1) * this.o6e.c1e - 1;
	let q0n = this.f0c();
	a7h(q0n, rect, g9u, t9y);
}

v9n(r6w, n9q)
{
	let m0t = this.o6e.m0t;
	let l8d = this.o6e.l8d;
	let j0h = this.o6e.j0h;
	let c1e = this.o6e.c1e;
	let rect = new l5s();
	rect.c1t = this.i9a + m0t + l8d +	j0h + (n9q) * c1e;
	rect.c9o = rect.c1t + c1e - 1;
	rect.k0x = this.z3v + m0t + l8d +	j0h + (c4f - r6w - 1) * c1e;
	rect.d7v = rect.k0x + c1e - 1;
	return rect;
}

d4q(n4z)
{
	let n9q = d6n;
	let r6w = s6y;
	if (this.i6d)
	{
		n9q = z6v(o3j(n4z));
		r6w = j6b(o3j(n4z));
	}
	else
	{
		n9q = z6v(n4z);
		r6w = j6b(n4z);
	}
	return this.v9n(r6w, n9q);
}

g4w()
{
	for (const n4z of w7k)
	{
		this.q3z(n4z);
	}
}

q3z(n4z)
{
	this.m9b(this.d4q(n4z), n4z);
}

m9b(rect, n4z)
{
	let e3o = isDarkSquare(n4z);
	let g9u = this.f7o;
	if (e3o)
	{
		g9u = this.j0m;
	}
	if (e3o)
	{
		if (this.c3m)
		{
			this.w0v(rect, this.u5j);
			return;
		}
		if (!g9u)
		{
			this.w0v(rect, this.u5j);
			return;
		}
	}
	else
	{
		if (this.d7i)
		{
			this.w0v(rect, this.x1c);
			return;
		}
		if (!g9u)
		{
			this.w0v(rect, this.x1c);
			return;
		}
	}

 	let z1o = g9u.width;
	let s1p = g9u.height;
	let u4a = this.o6e.c1e;
	if (z1o < u4a || s1p < u4a)
	{
		this.g7c(rect, g9u);
		return;
	}
	let l1i = Math.trunc(z1o / this.o6e.c1e);
	let l7a = Math.trunc(s1p / this.o6e.c1e);
	if (l1i == 0)
	{
		l1i = 1;
	}
	if (l7a == 0)
	{
		l7a = 1;
	}

	let w4z = Math.trunc((n4z) / l1i);
	let l3x = (n4z) % l1i;
	let y = Math.trunc(w4z / l7a);
	w4z = w4z % l7a;

  let t9y = new l5s();
	t9y.c1t = l3x * this.o6e.c1e;
	t9y.k0x = w4z * this.o6e.c1e;
	t9y.c9o = (l3x + 1) * this.o6e.c1e - 1;
	t9y.d7v = (w4z + 1) * this.o6e.c1e - 1;
	let q0n = this.f0c();
	a7h(q0n, rect, g9u, t9y);
}

w0v(rect, e6m)
{
	this.n1u(rect, e6m);
}

l2i()
{
	for (const n4z of w7k)
	{
		this.b2c(n4z);
	}
}

z5w(s2i, e3m, r5n)
{
	this.b7y = s2i;
	this.q8j = e3m;
	this.h7n = r5n;

	this.v1n.length = 0;
 	let s3e = this.d4q(s2i);
  let j5l = this.d4q(e3m);
	let y7q = this.o6e.c1e;

	let s0o = 32;
	if (y7q < 32)
	{
		s0o = y7q;
	}

  
	if (false)
	{
    
    
		let x7q = new e5q(s3e.c1t + y7q / 2, s3e.k0x + y7q / 2);
		let j7e = new e5q(j5l.c1t + y7q / 2, j5l.k0x + y7q / 2);
		let z5g = Math.abs(x7q.X - j7e.X);
		let v5c = Math.abs(x7q.Y - j7e.Y);
		let q6r = Math.atan2(j7e.X - x7q.X, x7q.Y - j7e.Y);
		let s7l = Math.sqrt(z5g*z5g + v5c*v5c) / 2;
		j7e.X = x7q.X + s7l * 2;
		j7e.Y = x7q.Y;
		let u9t = new e5q(x7q.X + s7l, x7q.Y);
		let y8e = Math.PI / s0o;
		let f4x = y7q * 0.40;
		let e7x = Math.PI;
		let d9s = (j5l.c1t > s3e.c1t && j5l.k0x < s3e.k0x) ||
			(j5l.c1t < s3e.c1t && j5l.k0x > s3e.k0x);
		for (let i = 1; i < s0o; i++)
		{
			let u1e = new l5s();
			if (d9s)
			{
				e7x -= y8e;
			}
			else
			{
				e7x += y8e;
			}
			let y0x = Math.cos(e7x);
			let u0k = Math.sin(e7x);
			let i6i = new e5q(u9t.X + s7l * y0x,
				u9t.Y - f4x * u0k);
			this.v1n.push(i0z(i6i, x7q, q6r - Math.PI / 2));
		}
	}
	else
	{
		let x7q = new e5q(s3e.c1t + y7q / 2, s3e.k0x + y7q / 2);
		let j7e = new e5q(j5l.c1t + y7q / 2, j5l.k0x + y7q / 2);
		let j0p = (j7e.X - x7q.X) / s0o;
		let h0o = (j7e.Y - x7q.Y) / s0o;
		for (let i = 1; i < s0o; i++)
		{
			this.v1n.push(new e5q(x7q.X + i * j0p, x7q.Y + i * h0o));
		}
	}
	this.v1n.push(new e5q(j5l.c1t + y7q / 2, j5l.k0x + y7q / 2));
	this.h7l = 0;
}

b5v()
{
	this.b7y = q8i;
	this.q8j = q8i;
}

v9t()
{
	this.d1j(); 

	let s2x = this.v1n[this.h7l];
	let c1e = this.o6e.c1e;
	let u1e = new l5s();
	u1e.c1t = s2x.X - c1e / 2;
	u1e.k0x = s2x.Y - c1e / 2;
	u1e.e1q(c1e);
	u1e.x2v(c1e);
 	let q0n = this.f0c();
	a2l(q0n, u1e, this.x1l.l7l(this.b7y));

	this.h7l++;
	if (this.h7l >= this.v1n.length)
	{
		let v8b = this.x1l.l7l(this.b7y);
		this.x1l.f2l(this.b7y, n8u.y0l);
		this.x1l.f2l(this.q8j, v8b);
		this.b5v();
		return true;
	}
	else
	{
		return false;
	}
}

b2c(n4z)
{
	if (n4z == this.b7y)
	{
		return;
	}
	let t7s = this.d4q(n4z);
 	let q0n = this.f0c();
	a2l(q0n, t7s, this.x1l.l7l(n4z));
}

q9s()
{
	if (!this.o6e.g5q)
	{
    return;
  }

 	let j0h = this.o6e.j0h;
	let m0t = this.o6e.m0t;
	let l8d = this.o6e.l8d;
	let c1e = this.o6e.c1e;

	let i8g = new l5s();
	i8g.c1t = this.i9a + m0t + l8d;
	i8g.k0x = this.z3v + m0t + l8d;
	i8g.e1q(c4f * c1e + 2 * j0h);
	i8g.x2v(c4f * c1e + 2 * j0h);

 	let q0n = this.f0c();
  let k8r = s7w(q0n, l8d-8);

  q9s(q0n,
    i8g,
    this.o6e,
    k8r,
    l8m.q2r,
    this.j8c,
    this.i6d,
    l8d);
}

a1t(n4z, e6m)
{
	let rect = this.d4q(n4z);
	let q0n = this.f0c();
  q0n.save();
  q0n.globalAlpha = 0.25; 
	q0n.fillStyle = e6m;
	q0n.fillRect(rect.c1t, rect.k0x, rect.u2s(), rect.r3w());
  q0n.restore();
}

g2k()
{
	if (this.u9n)
	{
		if (!this.f1k.y0l())
		{
      let e6m = "\x23\x38\x30\x30\x30\x38\x30"; 
			this.a1t(this.f1k.s2i, e6m);
			this.a1t(this.f1k.e3m, e6m);
		}
  }
}

t9b()
{
	for (const c1n of this.f9y.m0s)
	{
		this.s7r(c1n);
	}
}

s7r(c1n)
{
	let rect = this.d4q(c1n.n4z);
	let h0p = '';
	switch (c1n.type)
	{
		case c7m.s0p:
			h0p = g4o;
			break;
		case c7m.l7d:
			h0p = b9b;
			break;
		case c7m.q1l:
			h0p = e6x;
			break;
	}
	let y7q = this.q2f / 10;
	let q0n = this.f0c();
  /* dit is met roundrect
  t0l(rect, 5);
	q0n.lineWidth = y7q / 15;
	q0n.strokeStyle = h0p;
	e2e(q0n, rect.c1t, rect.k0x, rect.u2s(), rect.r3w(), 10);
  */
  
  q0n.save();
  q0n.globalAlpha = 0.7; 
	q0n.fillStyle = h0p;
	q0n.fillRect(rect.c1t, rect.k0x, rect.u2s(), rect.r3w());
  q0n.restore();
}

t1j()
{
	for (const y9c of this.c0j.f0i)
	{
		this.k4o(y9c);
	}
}

k4o(y9c)
{
	let s2i = y9c.s2i;
	let e3m = y9c.e3m;
	let x0d = y9c.type;

	let s3e = this.d4q(s2i);
	let j5l = this.d4q(e3m);

	let e7s = s3e.c1t + s3e.u2s()/2;
	let l7o = s3e.k0x + s3e.r3w()/2;
	let i4f = new e5q(e7s, l7o);

	let m9a = j5l.c1t + j5l.u2s()/2;
	let k8g = j5l.k0x + j5l.r3w()/2;

	let h9k = (m9a-e7s)*(m9a-e7s) + (k8g-l7o)*(k8g-l7o);
	let o8n = Math.sqrt(h9k);

	let c0p = (this.x1l.w5u(s2i)) ? 0 : s3e.u2s() / 4;
	o8n -= c0p;
	let q6v = (this.x1l.w5u(e3m)) ? 0 : s3e.u2s() / 4;
	o8n -= q6v;

	let i8l = 5;
	let o0q = 5 * i8l;
	let g9l = 7 * i8l;

	let p7b = e7s + c0p;
	let l5v = l7o;

	let v2o = p7b + o8n - 1;
	let r8u = l7o;

	let w5x = v2o - g9l;
	let q2j = l7o;

	let q6r = Math.atan2((m9a - e7s), (l7o - k8g));

  
	let n0o = [];
  let n4u = 10; 
	n0o.push(new e5q(w5x, q2j));
	n0o.push(new e5q(w5x - n4u, q2j - o0q));
	n0o.push(new e5q(v2o, r8u));
	n0o.push(new e5q(w5x - n4u, q2j + o0q));
	n0o.push(new e5q(w5x, r8u));
	let c2q = [];
	for (let i = 0; i <= 4; i++)
	{
		c2q.push(i0z(n0o[i], i4f, q6r - Math.PI / 2));
	}

	let q0n = this.f0c();
  q0n.save();
  q0n.globalAlpha = 0.7;

 	let l7b = '';
	switch (x0d)
	{
		case c3j.e6b:
			l7b = e0w;
			break;
		case c3j.q8a:
			l7b = p0m;
			break;
		case c3j.y8v:
			l7b = o1h;
			break;
	}
 	q0n.fillStyle = l7b;
  q0n.strokeStyle = l7b;
	q0n.beginPath();
	q0n.moveTo(c2q[0].X, c2q[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		q0n.lineTo(c2q[i].X, c2q[i].Y);
	}
	q0n.closePath();
	q0n.fill();

  
	n0o.length = 0;
	n0o.push(new e5q(p7b, l5v - i8l));
	n0o.push(new e5q(p7b, l5v + i8l));
	n0o.push(new e5q(w5x, l5v + i8l));
	n0o.push(new e5q(w5x, l5v - i8l));
	c2q.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		c2q.push(i0z(n0o[i], i4f, q6r - Math.PI / 2));
	}
	if (e7s == m9a)
	{
		if (c2q[0].Y != c2q[1].Y)
		{
			c2q[0].Y = c2q[1].Y;
		}
		if (c2q[2].Y != c2q[3].Y)
		{
			c2q[2].Y = c2q[3].Y;
		}
	}
	if (l7o == k8g)
	{
		if (c2q[0].X != c2q[1].X)
		{
			c2q[0].X = c2q[1].X;
		}
		if (c2q[2].X != c2q[3].X)
		{
			c2q[2].X = c2q[3].X;
		}
	}
	q0n.beginPath();
	q0n.moveTo(c2q[0].X, c2q[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		q0n.lineTo(c2q[i].X, c2q[i].Y);
	}
	q0n.closePath();
	q0n.fill();
  q0n.restore();
}

d6s()
{
	let m0t = this.o6e.m0t;
	let l8d = this.o6e.l8d;
	let y7q = this.o6e.c1e;
	let rect = new l5s();
	rect.c1t = this.n5l - m0t - l8d + 1;
	rect.k0x = this.u4n - m0t - l8d;
	rect.d7v = this.u4n;
	rect.c9o = this.n5l - 1;
	return rect;
}

}

const q7j = 14;

const k5t =
{
	e5k : 0
};

const l6y =
{
	e5k : 0
};

const p9u =
{
	r9e : 0,
	l5d : 1,
};

const l8m =
{
	e7i: 0,
	t2o: 1,
	q2r: 2,
	g5e: 3,
	l8r: 4,
};

class j6p
{

constructor()
{
	this.j4q = k5t.e5k;
	this.t7o = 1; 
	this.m0t = 0;
	this.l8d = q7j;
	this.j0h = 2;
	this.c1e = 32;
	this.m5x = 20;
	this.g5q = true;
	this.s1a = p9u.l5d;
	this.x0l = true;
}

n7y()
{
	let x9b = new j6p();
	x9b.j4q = this.j4q;
	x9b.t7o = this.t7o;
	x9b.m0t = this.m0t;
	x9b.l8d = this.l8d;
	x9b.j0h = this.j0h;
	x9b.c1e = this.c1e;
	x9b.m5x = this.m5x;
	x9b.g5q = this.g5q;
	x9b.s1a = this.s1a;
	x9b.x0l = this.x0l;
	return x9b;
}

q2f()
{
	return this.c1e * c4f + 2 * (this.m0t + this.l8d + this.j0h);
}

f0j(rect)
{
	let w = rect.u2s();
	let h = rect.r3w();
	let t8c = 0;
	if (w < h)
	{
		t8c = w;
	}
	else
	{
		t8c = h;
	}
	if (this.l8d)
	{
		for (this.c1e = 2; this.c1e < 1000; this.c1e++)
		{
			this.l8d = (this.c1e / 100) * this.m5x;
			if (this.l8d < q7j)
			{
				this.l8d = q7j;
			}
			let d7b = 2 * (this.m0t + this.l8d + this.j0h) + c4f * this.c1e;
			if (d7b > t8c)
			{
				break;
			}
		}
		this.c1e--;
		this.l8d = (this.c1e / 100) * this.m5x;
		if (this.l8d < q7j)
		{
			this.l8d = q7j;
		}
	}
	else
	{
		for (this.c1e = 2; this.c1e < 1000; this.c1e++)
		{
			let d7b = 2 * (this.m0t + this.j0h) + c4f * this.c1e;
			if (d7b > t8c)
			{
				break;
			}
		}
		this.c1e--;
	}
	return this.q2f();
}

}


class b4c
{

constructor()
{
	this.d4j = new n1y();
	this.a6t = new n1y();
	this.c0j = new s7c();
	this.f9y = new x6l();
	this.j3r = new m1c();
 	this.t6j = new m1c();
	this.h5r = 0;
	this.x3t = false;
	this.r1u = false;
	this.g3s = 0;
	this.l3n = 0;
	this.f1x = '';
}

}

const a3z =
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

function t0l(rect, t8l)
{
	rect.c1t += t8l;
	rect.c9o -= t8l;
	if (rect.c1t > rect.c9o)
	{
		rect.c1t = rect.c9o;
	}
	rect.k0x += t8l;
	rect.d7v -= t8l;
	if (rect.k0x > rect.d7v)
	{
		rect.k0x = rect.d7v;
	}
}

function a7h(g3o, p0n, w1p, t9y)
{
	g3o.drawImage(w1p, t9y.c1t, t9y.k0x, t9y.u2s(), t9y.r3w(),
		p0n.c1t, p0n.k0x, p0n.u2s(), p0n.r3w());
}

function e2e(q0n, x, y, width, height, w7u)
{
	q0n.beginPath();
	q0n.moveTo(x, y + w7u);
	q0n.lineTo(x, y + height - w7u);
	q0n.arcTo(x, y + height, x + w7u, y + height, w7u);
	q0n.lineTo(x + width - w7u, y + height);
	q0n.arcTo(x + width, y + height, x + width, y + height-w7u, w7u);
	q0n.lineTo(x + width, y + w7u);
	q0n.arcTo(x + width, y, x + width - w7u, y, w7u);
	q0n.lineTo(x + w7u, y);
	q0n.arcTo(x, y, x, y + w7u, w7u);
	q0n.stroke();
}

function i0z(e4r, i4f, w9i)
{
	let p = new e5q();
	p.X = (Math.cos(w9i) * (e4r.X - i4f.X)) - (Math.sin(w9i) * (e4r.Y - i4f.Y)) + i4f.X;
	p.Y = (Math.sin(w9i) * (e4r.X - i4f.X)) + (Math.cos(w9i) * (e4r.Y - i4f.Y)) + i4f.Y;
	return p;
}

function x4a(q0n, rect, m4a)
{
	let left = rect.c1t;
	let top = rect.k0x;
	let x9m = rect.c9o;
	let y7m = rect.d7v;

	q0n.fillStyle = x5m;
	q0n.fillRect(rect.c1t, rect.k0x, rect.u2s(), rect.r3w());

	if (m4a.r9e())
	{
		return;
	}

	let a0u = m4a.i5k();
	let x0v = 0;
	if (a0u > 8)
	{
		x0v = (x9m - left) / 8;
	}
	else
	{
		x0v = (x9m - left) / a0u;
	}
	let b0s = left - x0v;
	let q7u = top;
	let i7t = b0s + x0v;
	let r8s = 0;
	if (a0u > 8)
	{
		r8s = (y7m - top + 1) / 2;
	}
	else
	{
		r8s = y7m - top + 1;
	}

	let d9x = top + r8s - 1;
	let q4r = 0;
	for (let i = 0; i < 16; i++)
	{
		if (m4a.e0v(i))
		{
			b0s += x0v;
			i7t += x0v;
			if (q4r == 7 || q4r == 15 ||
				(q4r < 8 && q4r == a0u - 1))
			{
				i7t = x9m;
			}
			if (q4r == 8)
			{
				b0s = left;
				i7t = b0s + x0v;
				q7u = top + r8s;
				d9x = y7m;
			}
			let z3s = new l5s(b0s, q7u, i7t, d9x);
			q0n.fillStyle = a3z[i];
			q0n.fillRect(z3s.c1t, z3s.k0x, z3s.u2s(), z3s.r3w());
			q4r++;
		}
	}
}




class i7n
{

constructor()
{
	this.t7l = '';
	this.g9u = null;
}

}

class l3a
{

constructor()
{
	this.j0s = [];
}

add(img)
{
	let o7x = new i7n();
	o7x.t7l = img.u4j;
	o7x.g9u = img;
	this.j0s.push(o7x);
}

g9u(t7l)
{
	for (const u6y of this.j0s)
	{
		if (u6y.t7l.toLowerCase() == t7l.toLowerCase())
		{
			return u6y.g9u;
		}
	}
	return null;
}

}
const l7v 				= "\x23\x30\x30\x46\x46\x46\x46";
const x3p 			= "\x23\x30\x30\x30\x30\x30\x30";
const l9h 				= "\x23\x30\x30\x30\x30\x46\x46";
const w3b 			= "\x23\x46\x46\x46\x42\x46\x30";
const q4j 			= "\x23\x38\x30\x38\x30\x38\x30";
const g2o 		= "\x23\x46\x46\x30\x30\x46\x46";
const k7z 				= "\x23\x38\x30\x38\x30\x38\x30";
const o8d 			= "\x23\x30\x30\x38\x30\x30\x30";
const c0l 				= "\x23\x30\x30\x46\x46\x30\x30";
const e5s 			= "\x23\x43\x30\x43\x30\x43\x30";
const y7u 			= "\x23\x38\x30\x30\x30\x30\x30";
const g6o 		= "\x23\x41\x30\x41\x30\x41\x34";
const y6a 	= "\x23\x43\x30\x44\x43\x43\x30";
const g5o 				= "\x23\x30\x30\x30\x30\x38\x30";
const r6v 			= "\x23\x38\x30\x38\x30\x30\x30";
const x9d 			= "\x23\x38\x30\x30\x30\x38\x30";
const x5m 				= "\x23\x46\x46\x30\x30\x30\x30";
const e2q 			= "\x23\x43\x30\x43\x30\x43\x30";
const k3d 		= "\x23\x41\x36\x43\x41\x46\x30";
const q2h 				= "\x23\x30\x30\x38\x30\x30\x30";
const c8h 			= "\x23\x46\x46\x46\x46\x46\x46";
const r4g 			= "\x23\x46\x46\x46\x46\x30\x30";

class e5q
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

n7y()
{
	let s7x = new e5q();
	s7x.c1t = this.X;
	s7x.k0x = this.Y;
	return s7x;
}

}

class l5s
{

constructor(left, top, x9m, y7m)
{
	if (left === undefined)
	{
		this.c1t = 0;
		this.k0x = 0;
		this.c9o = 0;
		this.d7v = 0;
	}
	else
	{
		this.c1t = left;
		this.k0x = top;
		this.c9o = x9m;
		this.d7v = y7m;
	}
}

n7y()
{
	let f2g = new l5s();
	f2g.c1t = this.c1t;
	f2g.k0x = this.k0x;
	f2g.c9o = this.c9o;
	f2g.d7v = this.d7v;
	return f2g;
}

u2s()
{
	return this.c9o - this.c1t + 1;
}

i0b()
{
	return this.c9o - this.c1t + 1;
}

e1q(width)
{
	this.c9o = this.c1t + width - 1;
}

r3w()
{
	return this.d7v - this.k0x + 1;
}

w3p()
{
	return this.d7v - this.k0x + 1;
}

x2v(height)
{
	this.d7v = this.k0x + height - 1;
}

o8u()
{
	this.c1t++;
	this.k0x++;
	this.c9o--;
	this.d7v--;
}

s5c(s2x)
{
	return s2x.X >= this.c1t &&
		s2x.X <= this.c9o &&
		s2x.Y >= this.k0x &&
		s2x.Y <= this.d7v;
}


}

class b2l
{

constructor(m6r)
{
	this.m6r = m6r;
	this.p6n = new n1y();
	this.o0g = new s0a();
	this.n6a = null;
	this.o6e = new j6p();
	this.y3r = true;
}

h9j()
{
	let n4w = window.devicePixelRatio;

	this.o0g.f7a.width = this.n6a.clientWidth * n4w;
	this.o0g.f7a.height = this.n6a.clientHeight * n4w;

	let p7x = 32 * n4w;
	let a7i = 32 * n4w;
	let l3j = this.o0g.f7a.width - p7x;
	let b6f = this.o0g.f7a.height - a7i;
	let t6q = b6f < l3j ? b6f : l3j;
	if (t6q < 128)
	{
		t6q = 128;
	}
	let rect = new l5s();
	rect.c1t = 0;
	rect.k0x = 0;
	rect.e1q(t6q);
	rect.x2v(t6q);
	this.o6e.l8d = t6q * 0.02;
  if (this.o6e.l8d < q7j)
  {
    this.o6e.l8d = q7j;
  }
	t6q = this.o6e.f0j(rect);
 	this.o0g.v8e(this.o6e);
	this.o0g.d1j();
}

u7n()
{
	this.o0g.u7n();
	this.o0g.d1j();
}

k2v()
{
	this.o6e.g5q = !this.o6e.g5q;
	this.o0g.v8e(this.o6e);
	this.o0g.d1j();
}

h0e()
{
	this.o0g.v8e(this.o6e);
	this.o0g.d1j();
}

z3f(e6h)
{
	this.p6n = e6h.a6t.n7y();
	this.o0g.k6w(this.p6n);
	this.o0g.h6d(e6h.c0j);
	this.o0g.i7y(e6h.f9y);
  
 	this.o0g.k1u(e6h.t6j);
	this.o0g.d1j();

	if (this.y3r)
	{
		z1e('playBackward' + this.m6r, e6h.x3t);
		z1e('goToBegin'+ this.m6r, e6h.x3t);
		z1e('playForward' + this.m6r, e6h.r1u);
		z1e('goToEnd' + this.m6r, e6h.r1u);
		z1e('autoPlay' + this.m6r, e6h.r1u);
	}
	else
	{
		z1e('goToBegin' + this.m6r, e6h.x3t);
		z1e('goToEnd' + this.m6r, e6h.r1u);
	}
}

k6w(x1l)
{
	let e6h = new b4c();
	e6h.a6t = x1l.n7y();
	this.k6w(e6h);
}

v8e(o6e)
{
  this.o6e = o6e.n7y();
}

}

class f0w
{

constructor(m6r)
{
	this.m6r = m6r;
	this.h3d = new e5o();
	this.w3w = new b2l(m6r);
	this.q0d = new w9y(m6r);
	this.q0d.b9l = this;
	this.w0m = new u9g();
}

u7n()
{
	this.w3w.u7n();
}

k2v()
{
	this.w3w.k2v();
}

h0e()
{
	this.w3w.h0e();
	this.q0d.h0e();
}

r0d(v8w, l4n, b3a, p0b)
{
	this.r7l(p0b, b3a);
}

r7l(p0b, b3a)
{
	this.h3d = p0b.j5a.n7y();
	this.c3d();
	this.q0d.h3l(p0b.l1h, b3a);
}

c3d()
{
	this.q0d.c3d(this.h3d);
}

o6t(e6h)
{
	this.w3w.z3f(e6h);
}

v0l()
{
	if (this.w0m.b0q())
	{
		this.w0m.k1n();
	}
	else
	{
		if (!this.q0d.g3w())
		{
			this.w0m.q0d = this.q0d;
			this.w0m.w5c();
			this.q0d.q9k();
		}
	}
}

}

const v1a =
{
	w4g : 0,
	u2o : 1,
	v2x : 2,
	z8i : 3,
	x8m : 4,
 	j7l : 5,
	g3u : 6,
	l1h : 7,
	z0r : 8,
	event : 9,
	h4o : 10
};

const m3k =
{
	r9e : 0,
	c0b : 1,
	z7g : 2
};

let q9c = 0;
let p4t = 0;
let k7k = 0;
let k0m = 0;
let n9a = 0;
let o3n = 0;
let e5p = 0;
let r7x = 0;

let z7g = false;

function y3q(f, s)
{
	let f2e = f.j5a.b5c.a3h.t7l();
	let a6q = s.j5a.b5c.a3h.t7l();
	if (f2e < a6q)
	{
		return z7g ? -1 : 1;
	}
	if (f2e > a6q)
	{
		return z7g ? 1 : -1;
	}
	f2e = f.j5a.i6o.a3h.t7l();
	a6q = s.j5a.i6o.a3h.t7l();
	if (f2e < a6q)
	{
		return -1;
	}
	if (f2e > a6q)
	{
		return 1;
	}
	return 0;
}

function h2u(f, s)
{
	let f2e = f.j5a.i6o.a3h.t7l();
	let a6q = s.j5a.i6o.a3h.t7l();
	if (f2e < a6q)
	{
		return z7g ? -1 : 1;
	}
	if (f2e > a6q)
	{
		return z7g ? 1 : -1;
	}
	f2e = f.j5a.b5c.a3h.t7l();
	a6q = s.j5a.b5c.a3h.t7l();
	if (f2e < a6q)
	{
		return -1;
	}
	if (f2e > a6q)
	{
		return 1;
	}
	return 0;
}

function m8v(f, s)
{
	let z4y = f.j5a.b5c.q9a - s.j5a.b5c.q9a;
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	z4y = f.j5a.i6o.q9a - s.j5a.i6o.q9a;
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	return y3q(f, s);
}

function h1g(f, s)
{
	let z4y = f.j5a.i6o.q9a - s.j5a.i6o.q9a;
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	z4y = f.j5a.b5c.q9a - s.j5a.b5c.q9a;
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	return y3q(f, s);
}

function g4l(f, s)
{
	let z4y = f.j5a.b5c.e9r - s.j5a.b5c.e9r;
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	z4y = f.j5a.i6o.e9r - s.j5a.i6o.e9r;
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	return y3q(f, s);
}

function c4m(f, s)
{
	let z4y = f.j5a.i6o.e9r - s.j5a.i6o.e9r;
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	z4y = f.j5a.b5c.e9r - s.j5a.b5c.e9r;
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	return y3q(f, s);
}

function z7f(f, s)
{
	let z4y = f.j5a.g3u - s.j5a.g3u;
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	return y3q(f, s);
}

function m1e(f, s)
{
	let z4y = s.j5a.y0q.y0q() - f.j5a.y0q.y0q();
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	return y3q(f, s);
}

function r8o(f, s)
{
	let f2t = f.j5a.i9p.s4t;
	let t7b = s.j5a.i9p.s4t;
	if (f2t < t7b)
	{
		return z7g ? -1 : 1;
	}
	if (f2t > t7b)
	{
		return z7g ? 1 : -1;
	}
	let z4y = f.j5a.i9p.x4w.y0q() - s.j5a.i9p.x4w.y0q();
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	z4y = f.j5a.h4o - s.j5a.h4o;
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	z4y = f.j5a.c6a - s.j5a.c6a;
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	return y3q(f, s);
}

function t1d(f, s)
{
	let z4y = s.j5a.h4o - f.j5a.h4o;
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	z4y = s.j5a.c6a - f.j5a.c6a;
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	return y3q(f, s);
}

function k6f(f, s)
{
	let z4y = s.x6w - f.x6w;
	if (z7g)
	{
		z4y = -z4y;
	}
	if (z4y < 0) return -1;
	if (z4y > 0) return 1;
	return y3q(f, s);
}

function a4b()
{
  x0u.a4b();
}

function k6a()
{
	x0u.k6a();
}

function v4p()
{
	x0u.v4p();
}

function e6z()
{
	x0u.e6z();
}

function v1x()
{
	x0u.v1x();
}

function n4t()
{
	x0u.n4t();
}

function o0h()
{
	x0u.o0h();
}

function d8s()
{
	x0u.d8s();
}

function i8u()
{
	x0u.i8u();
}

function w2j()
{
	x0u.w2j();
}

function n4a()
{
	x0u.n4a();
}


class o3l
{

constructor(m6r)
{
	this.m6r = m6r;
	this.i4g = [];
	this.s1s = null;
	this.l9m = null;
	this.l3w = null;
	this.c9n = [];
	this.o6c = [];
	this.q6p = -1;
	this.q4s = m3k.r9e;
	this.x7f = 0;
}

m3w()
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
	this.l3w.innerHTML = s;
	this.c9n = this.l3w.getElementsByTagName("\x54\x48");
	let m6r = this.m6r;
	this.c9n[v1a.w4g].onclick = function() { l1y(m6r); };
	this.c9n[v1a.u2o].onclick = function() { r2e(m6r); };
  this.c9n[v1a.v2x].onclick = function() { m9k(m6r); };
	this.c9n[v1a.z8i].onclick = function() { l8u(m6r); };
	this.c9n[v1a.x8m].onclick = function() { j6o(m6r); };
  this.c9n[v1a.j7l].onclick = function() { u5o(m6r); };
	this.c9n[v1a.g3u].onclick = function() { q0r(m6r); };
	this.c9n[v1a.l1h].onclick = function() { a4g(m6r); };
	this.c9n[v1a.z0r].onclick = function() { i5u(m6r); };
	this.c9n[v1a.event].onclick = function() { i4z(m6r); };
	this.c9n[v1a.h4o].onclick = function() { e2m(m6r); };
}

f6n(i4g)
{
	this.i4g = i4g;
	this.h9j();
}

s3l()
{
	this.j8m("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
	this.j8m("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
 	this.j8m("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67");
	this.j8m("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
	this.j8m("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73");
	this.j8m("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
	this.j8m("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
	this.j8m("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64");
}

m0l()
{
	this.i7j("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", q9c);
	this.i7j("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67", p4t);
 	this.i7j("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67", r7x);
	this.i7j("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74", k7k);
	this.i7j("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73", k0m);
	this.i7j("\x67\x72\x69\x64\x2d\x79\x65\x61\x72", n9a);
	this.i7j("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", o3n);
	this.i7j("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64", e5p);

}

j8m(i8h)
{
	let m6w = this.s1s.getElementsByClassName(i8h);
	for (let i = 0; i < m6w.length; i++) {
		m6w[i].style.display = "\x6e\x6f\x6e\x65";
	}
}

n8g(i8h)
{
	let m6w = this.s1s.getElementsByClassName(i8h);
	for (let i = 0; i < m6w.length; i++) {
		m6w[i].style.display = "\x74\x61\x62\x6c\x65\x2d\x63\x65\x6c\x6c";
	}
}

i7j(i8h, width)
{
	let m6w = this.s1s.getElementsByClassName(i8h);
	for (let i = 0; i < m6w.length; i++) {
		m6w[i].style.width = (width) + "\x70\x78";
	}
}

h9j()
{
	this.x7f = this.s1s.clientWidth;
	this.x7f -= 17;
	if (this.x7f < 100)
	{
		this.x7f = 100;
	}
	q9c = 200;
	p4t = 52;
	k7k = 34;
	k0m = 50;
	n9a = 52;
	o3n = 200;
	e5p = 50;
  r7x = 30;

 
	let q8r = document.getElementsByClassName("\x74\x64\x72\x65\x70\x6c\x61\x79")[0];
	if (q8r.clientWidth <= n2g)
	{
		let d6i = 0.7;
		q9c *= d6i;
		p4t *= d6i;
		k7k *= d6i;
		k0m *= d6i;
		n9a *= d6i;
		o3n *= d6i;
		e5p *= d6i;
	}
	this.b7w();
}

u2v()
{
	this.s3l();
	this.m0l();

  let j0x = 2.8;
  let q0w = 2.8;
  let f8m = 17;
	if (this.x7f <= 400)
	{
		this.n8g("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.n8g("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
    this.n8g("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.n8g("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
    let j6l = 5 * (j0x + q0w);
		let c8t = k7k + n9a;
		let e2c = Math.trunc((this.x7f - c8t - j6l - f8m) / 3);
		this.i7j("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", e2c);
		this.i7j("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", e2c);
	}
	else if (this.x7f <= 580)
	{
		this.n8g("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.n8g("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
		this.n8g("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
		this.n8g("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.n8g("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
    let j6l = 7 * (j0x + q0w);
		let c8t = 2 * p4t + k7k + n9a;
		let e2c = Math.trunc((this.x7f - c8t - j6l - f8m) / 3);
		this.i7j("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", e2c);
		this.i7j("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", e2c);
	}
	else
	{
		this.n8g("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.n8g("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
    this.n8g("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67");
		this.n8g("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
		this.n8g("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73");
		this.n8g("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.n8g("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
		this.n8g("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64");
    let j6l = 11 * (j0x + q0w);
		let c8t = 2 * p4t + 2 * r7x + k7k + k0m + n9a + e5p;
		let e2c = Math.trunc((this.x7f - c8t - j6l - f8m) / 3);
		this.i7j("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", e2c);
		this.i7j("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", e2c);
	}
}

b7w()
{
	let s = '';
	let w4z = 1;
	let i4k = 16;
	for (const p0b of this.i4g)
	{
		s += "<tr class=\"grid-row\" onclick=\"mainListClick(";
		s += this.m6r;
		s += ", this)\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += p0b.j5a.b5c.a3h.q8l();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-rating\">";
		if (p0b.j5a.b5c.q9a)
		{
			s += p0b.j5a.b5c.q9a;
		}
		s += "\x3c\x2f\x74\x64\x3e";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (p0b.j5a.b5c.e9r != y2m.r9e)
		{
      let z8j = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x74\x64\x61\x6d\x62\x61\x73\x65\x2e\x63\x6f\x6d\x2f\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + i4k.toString() + "\x2f" + t8y(p0b.j5a.b5c.e9r) + "\x2e\x70\x6e\x67";
  		s += "\x3c\x73\x70\x61\x6e\x3e";
      s += "<img src=\"";
      s += z8j;
      s += "\" height=\"16\"";
      s += "\x3e";
   		s += "\x3c\x2f\x73\x70\x61\x6e\x3e";
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-player\">";
		s += p0b.j5a.i6o.a3h.q8l();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-rating\">";
		if (p0b.j5a.i6o.q9a)
		{
			s += p0b.j5a.i6o.q9a;
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-flag\">";
		if (p0b.j5a.i6o.e9r != y2m.r9e)
		{
      let z8j = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x74\x64\x61\x6d\x62\x61\x73\x65\x2e\x63\x6f\x6d\x2f\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + i4k.toString() + "\x2f" + t8y(p0b.j5a.i6o.e9r) + "\x2e\x70\x6e\x67";
  		s += "\x3c\x73\x70\x61\x6e\x3e";
      s += "<img src=\"";
      s += z8j;
      s += "\" height=\"16\"";
      s += "\x3e";
   		s += "\x3c\x2f\x73\x70\x61\x6e\x3e";
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-result\">";
		s += f9j(p0b.j5a.g3u);
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-moves\">";
		s += p0b.x6w;
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-year\">";
		s += p0b.j5a.y0q.toString("\x79\x79\x79\x79");
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-event\">";
		s += p0b.j5a.i9p.s4t;
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-round\">";
		s += p0b.j5a.x0b();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "\x3c\x2f\x74\x72\x3e";
		w4z++;
	}
	this.l9m.innerHTML = s;
	this.u2v();
}

x9g(l4l)
{
	if (l4l != this.q6p)
	{
		this.q6p = l4l;
		this.q4s = m3k.c0b;
	}
	else
	{
		if (this.q4s == m3k.r9e)
		{
			this.q4s = m3k.c0b;
		}
		else if (this.q4s == m3k.c0b)
		{
			this.q4s = m3k.z7g;
		}
		else if (this.q4s == m3k.z7g)
		{
			this.q4s = m3k.c0b;
		}
	}
	z7g = (this.q4s == m3k.z7g);

	for (const e5b of this.c9n)
	{
		let s = e5b.className;
		let d7r = s.replace("\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x64\x65\x73\x63", "");
		let r4y = d7r.replace("\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x61\x73\x63", "");
		e5b.className = r4y;
	}
	let p9r = this.c9n[this.q6p];
	if (this.q4s == m3k.z7g)
	{
		p9r.className = p9r.className + "\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x64\x65\x73\x63";
	}
	else
	{
		p9r.className = p9r.className + "\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x61\x73\x63";
	}
}

a4b()
{
	this.x9g(v1a.w4g);
	this.i4g.sort(y3q);
	this.b7w();
}

k6a()
{
	this.x9g(v1a.u2o);
	this.i4g.sort(m8v);
	this.b7w();
}

v4p()
{
	this.x9g(v1a.v2x);
	this.i4g.sort(g4l);
	this.b7w();
}

e6z()
{
	this.x9g(v1a.z8i);
	this.i4g.sort(h2u);
	this.b7w();
}

v1x()
{
	this.x9g(v1a.x8m);
	this.i4g.sort(h1g);
	this.b7w();
}

n4t()
{
	this.x9g(v1a.j7l);
	this.i4g.sort(c4m);
	this.b7w();
}

o0h()
{
	this.x9g(v1a.g3u);
	this.i4g.sort(z7f);
	this.b7w();
}

d8s()
{
	this.x9g(v1a.z0r);
	this.i4g.sort(m1e);
	this.b7w();
}

i8u()
{
	this.x9g(v1a.event);
	this.i4g.sort(r8o);
	this.b7w();
}

w2j()
{
	this.x9g(v1a.h4o);
	this.i4g.sort(t1d);
	this.b7w();
}

n4a()
{
	this.x9g(v1a.l1h);
	this.i4g.sort(k6f);
	this.b7w();
}

}

class d0f
{

constructor()
{
	this.x1l = new n1y();
	this.i1k = new n1y();
	this.r5n = false;
	this.l5o = 0;
	this.b5h = 0;
	this.u7k = [];
}

}

class w9y
{

constructor(m6r)
{
	this.m6r = m6r;
	this.h3d = new e5o();
	this.f8a = new g5x();
	this.b9l = null;
	this.p2r = new d0f();
	this.l3r = null;
	this.w5z = null;
	this.y5o = [];
	this.t6r = [];
  this.v4x = [];
  this.u0c = [];
	this.v8d = -1;
	this.o6e = new j6p();
  this.z6a = null;
	this.h6c = true;
	this.t3s = false;
	this.b5z = [];
	this.u2j = 0;
}

h3l(x5b, b3a)
{
	this.f8a = x5b.n7y();
  this.f8a.r4h();
	this.z6a = this.f8a.h5j(b3a);
	this.r0d();
}

r2t(q6n)
{
  this.w6d(this.v4x[q6n]);
}

c3d(h3d)
{
	this.h3d = h3d.n7y();
	this.d3x();
}

d3x()
{
	let z0h = this.h3d.b5c.a3h.d8l();
	let o1w = this.h3d.i6o.a3h.d8l();

	let u8s = '';
	if (z0h.length && this.h3d.b5c.q9a)
	{
		u8s = this.h3d.b5c.q9a.toString();
	}
	let c4p = '';
	if (z0h.length && this.h3d.b5c.s4t.length)
	{
		c4p = this.h3d.b5c.s4t.toString();
	}

	let o0n = '';
	if (o1w.length && this.h3d.i6o.q9a)
	{
		o0n = this.h3d.i6o.q9a.toString();
	}
	let j1s = '';
	if (o1w.length && this.h3d.i6o.s4t.length)
	{
		j1s = this.h3d.i6o.s4t.toString();
	}

	let q6q = this.h3d.b5c.a3h.o4u(1);
	let o6r = this.h3d.i6o.a3h.o4u(1);

	let i1t = '';
	let n4l = '';
	if (!this.h3d.b5c.v4r.y0l() &&
		!this.h3d.i6o.v4r.y0l())
	{
		i1t = this.h3d.b5c.v4r.c7p();
		n4l = this.h3d.i6o.v4r.c7p();
	}

	let m1u = f9j(this.h3d.g3u);
	let i9p = this.h3d.i9p.s4t;
	if (!this.h3d.i9p.x4w.y0l())
	{
		i9p += "\x20";
		i9p += this.h3d.i9p.x4w.z0r.toString();
	}
	let a1e = '';
	if (!this.h3d.y0q.y0l())
	{
		a1e = this.h3d.y0q.toString("\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79");
	}
	let v7h = '';
	if (!this.h3d.v7h.y0l())
	{
		v7h = '</br>' + '[' + this.h3d.v7h.t7l + ']';
	}

	let i3x = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.m6r);
	let k2b = i3x.clientHeight;
	let e8v = 200;

  let index = this.m6r;
  let b9j = this.h3d.i9p.b9j;

	let s0k = true;
	if (this.l3r.clientWidth >= 374 && k2b >= e8v)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + z0h + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s += 					"<span class=\"rating\">" + u8s + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
		s += 				  "<span class=\"team\">" + i1t + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + m1u + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + o1w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=          "<span class=\"rating\">" + o0n + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
    s +=          "<span class=\"team\">" + n4l + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=      "\x3c\x74\x72\x3e";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "\x3c\x73\x70\x61\x6e\x3e" + c4p + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + i9p + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
    s +=          "<span class=\"tournamentPlace\">" + b9j + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=          "<span class=\"gameDate\">" + a1e + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"annotator\">" + v7h + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + j1s + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "\x3c\x2f\x74\x64\x3e";
		s +=      "\x3c\x2f\x74\x72\x3e";
		s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.l3r.innerHTML = s;

		
		
		let y4l = Math.trunc(this.l3r.clientWidth / 10);
		if (y4l < 24) y4l = 24;
    
		
		
		
		
		
		
	}
	else if (this.l3r.clientWidth >= 300 && k2b >= e8v)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + q6q + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + u8s + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
		s += 				  "<span class=\"team\">" + i1t + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + m1u + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + o6r + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + o0n + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
    s +=          "<span class=\"team\">" + n4l + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + c4p + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + i9p + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"tournamentPlace\">" + "\x3c\x2f\x62\x72\x3e" + b9j + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"gameDate\">" + a1e + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=          "<span class=\"annotator\">" + v7h + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + j1s + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.l3r.innerHTML = s;
	}
	else if (this.l3r.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + q6q + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + u8s + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + m1u + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + o6r + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + o0n + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.l3r.innerHTML = s;
	}
	else
	{
		
		s0k = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + q6q + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + m1u + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + o6r + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.l3r.innerHTML = s;
	}

	if (s0k)
	{
		let i4k = 16;
		if (this.l3r.clientWidth < 400)
		{
			i4k = 16;
		}
		else if (this.l3r.clientWidth < 500)
		{
			i4k = 24;
		}
		else
		{
			i4k = 32;
		}
    if (this.h3d.b5c.e9r != y2m.r9e)
    {
  		let u0i = document.getElementById("\x77\x68\x69\x74\x65\x50\x6c\x61\x79\x65\x72\x4e\x61\x74\x69\x6f\x6e"+this.m6r);
	  	u0i.src = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x74\x64\x61\x6d\x62\x61\x73\x65\x2e\x63\x6f\x6d\x2f\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + i4k.toString() +"\x2f" + t8y(this.h3d.b5c.e9r) + "\x2e\x70\x6e\x67";
		  u0i.height = i4k;
  		u0i.width = i4k;
    }
    if (this.h3d.i6o.e9r != y2m.r9e)
    {
  		let o3k = document.getElementById("\x62\x6c\x61\x63\x6b\x50\x6c\x61\x79\x65\x72\x4e\x61\x74\x69\x6f\x6e"+this.m6r);
	  	o3k.src = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x74\x64\x61\x6d\x62\x61\x73\x65\x2e\x63\x6f\x6d\x2f\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + i4k.toString() + "\x2f" + t8y(this.h3d.i6o.e9r) + "\x2e\x70\x6e\x67";
		  o3k.height = i4k;
  		o3k.width = i4k;
    }
	}
}

r0d()
{
	this.o5c();
	this.q9k();
  this.q5m(this.f8a.s2p(this.z6a));
}

o5c()
{
	let v2y = new f1z();
	v2y.b6s(this.f8a);
	this.w5z.innerHTML = v2y.k2y.s7u;

  this.y5o = this.w5z.getElementsByClassName("\x74\x64\x6d\x6f\x76\x65");
  this.t6r = this.w5z.getElementsByClassName("\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74");

	this.v0m("\x74\x64\x6d\x6f\x76\x65");
	this.v0m("\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74");
	this.v0m("\x74\x64\x64\x69\x61");
	this.v0m("\x74\x64\x6d\x65\x64\x61\x6c");
  this.v0m("\x74\x64\x63\x6f\x6c\x6f\x72\x73");

	this.r1a();
	this.x4a();
}

v0m(b7c)
{
	let m6r = this.m6r;
	let j5y = this.w5z.getElementsByClassName(b7c);
	for (const f1i of j5y)
	{
    f1i.onclick = function() { p2y(m6r, f1i);};
	}
}

h0e()
{
	this.r1a();
}

r1a()
{
	let c4d = this.w5z.getElementsByClassName("\x74\x64\x64\x69\x61");
	for (const v0e of c4d)
	{
		let o0g = new s0a();
		o0g.f7a = v0e.getElementsByTagName("\x63\x61\x6e\x76\x61\x73")[0];
		let t6q = this.o6e.q2f();
		o0g.f7a.width = t6q;
		o0g.f7a.height = t6q;
		o0g.v8e(this.o6e);
		let z4w = this.f8a.h5j(v0e.getAttribute('movenr'));
    o0g.k6w(this.f8a.x1l(z4w));
    if (z4w.x6s)
    {
  		o0g.h6d(z4w.x6s.c0j());
	  	o0g.i7y(z4w.x6s.f9y());
    }
    else
    {
   		o0g.h6d(this.f8a.o1q());
	  	o0g.i7y(this.f8a.s9u());
    }
		o0g.d1j();
	}
}

x4a()
{
	let l0o = this.w5z.getElementsByClassName("\x74\x64\x6d\x65\x64\x61\x6c");
	for (const w2h of l0o)
	{
		let f7a = w2h.getElementsByTagName("\x63\x61\x6e\x76\x61\x73")[0];
		f7a.width = 40;
		f7a.height = 16;
		let q0n = f7a.getContext('2d');
		let rect = new l5s();
		rect.e1q(40);
		rect.x2v(16);
		let z4w = this.f8a.h5j(w2h.getAttribute('movenr'));
    if (z4w.x6s)
    {
  		x4a(q0n, rect, z4w.x6s.m4a());
    }
    else
    {
  		x4a(q0n, rect, this.f8a.a9d());
    }
	}
}

q9k()
{
	let e6h = new b4c();
	e6h.d4j = this.f8a.d4j();
  e6h.a6t = this.f8a.x1l(this.z6a);
  if (this.b3y())
  {
    e6h.c0j = this.f8a.o1q();
	  e6h.f9y = this.f8a.s9u();
  }
  else
  {
  	e6h.c0j = this.z6a.x6s.c0j();
	  e6h.f9y = this.z6a.x6s.f9y();
  }
  
	if (this.g3w())
	{
		e6h.j3r = new m1c();
	}
	else
	{
    let t3g = this.z6a.n7y();
		this.f8a.t2m(t3g);
		e6h.j3r = t3g.x6s.i0h().n7y();
	}
  
 	if (!this.b3y())
	{
		e6h.t6j = this.z6a.x6s.i0h();
	}
	e6h.h5r = this.h5r();
	e6h.x3t = this.x3t();
	e6h.r1u = this.r1u();
	e6h.g3s = 0; 
  e6h.l3n = this.f8a.l3n(this.z6a);
	if (this.b9l)
	{
		this.b9l.o6t(e6h);
	}
}

v7j(f6y)
{
	this.z6a = this.f8a.h5j(f6y);
	this.q9k();
}

r6z(h0g)
{
	switch (h0g)
	{
		case c9v:
		case g1r:
		case r3o:
			this.f2x();
			break;
		case g8w:
		case z4m:
		case o0y:
			this.k1h();
			break;
		case w4t:
		case g6j:
		case z7o:
			this.j1l();
			break;
		case q5w:
		case z7h:
		case o4v:
			this.z2k();
			break;
		case k6e:
			break;
		case b2a:
			break;
	}
}

t5j()
{
  if (this.z6a.r9x)
  {
    this.q5m(this.z6a.r9x.c2w);
  }
  else
  {
    this.q5m(0);
  }
}

y0y()
{
	this.t5j();
	this.q9k();
}

x3t()
{
	return !this.b3y();
}

b3y()
{
	return this.f8a.b3y(this.z6a);
}

g3w()
{
	return this.f8a.b3t(this.z6a);
}

h5r()
{
	return this.f8a.h5r(this.z6a);
}

j3r(l9i)
{
	if (this.g3w())
	{
		return null;
	}
	else
	{
    let t3g = this.z6a.n7y();
		this.f8a.h7b(t3g, l9i);
		return t3g.x6s;
	}
}

k1h()
{
	if (this.x3t())
	{
		this.f8a.q3y(this.z6a);
		this.y0y();
	}
}

r1u()
{
	return !this.g3w();
}

f2x()
{
	if (this.r1u())
	{
		this.j0j(0);
	}
}

j0j(index)
{
	let d3y = this.f8a.q7b(this.z6a);
	if (index >= 0 && index < d3y)
	{
		this.f8a.h7b(this.z6a, index);
		this.y0y();
	}
}

z2k()
{
	if (this.r1u())
	{
		this.f8a.f4i(this.z6a);
		this.y0y();
	}
}

j1l()
{
	if (this.x3t())
	{
		this.z6a = this.f8a.f9i();
		this.y0y();
	}
}

i1y()
{
	if (this.h6c)
	{
		this.k3q();
	}
	else
	{
		this.y8y();
	}
}

h4h()
{
	if (this.t3s)
	{
		this.t3s = false;
		this.b9l.w3w.o0g.b5v();
		this.q9k();
	}
	else
	{
		this.q9k();
	}
}


y8y()
{
	if (this.g3w())
	{
		this.q9k();
		return;
	}
  if (chess)
  {
  	this.j0j(0);
    return;
  }

  
 	let x6s = this.j3r(0);
  if (!x6s.b5h())
 	{
  	this.j0j(0);
	  return;
 	}

  
	let h9n = false;
	if (!this.p2r.r5n)
	{
		h9n = true;
	}
	else
	{
		h9n = false;
		if (this.p2r.l5o < this.p2r.b5h)
		{
			if (this.p2r.i1k.e1j(this.p2r.x1l))
			{
				h9n = true;
			}
		}
	}
	if (h9n)
	{
		this.p2r.x1l = this.f8a.x1l(this.z6a);
		this.p2r.i1k = this.f8a.x1l(this.z6a);
		this.p2r.r5n = true;
		this.p2r.l5o = 0;
		this.p2r.u7k.length = 0;
		this.p2r.u7k.push(x6s.s2i()); 
		this.p2r.b5h = x6s.b5h();
		if (this.p2r.b5h > 1)
		{
			let a1r = v4n(this.p2r.i1k, x6s.i0h());
			for (let i = 0; i < this.p2r.b5h - 1; i++)
			{
				this.p2r.u7k.push(a1r[i]);
			}
		}
		this.p2r.u7k.push(x6s.r9j());
	}
	if (this.p2r.l5o < this.p2r.b5h)
	{
		let s6b = x6s.s6b();
		let o6w = this.p2r.u7k[this.p2r.l5o];
		let r9j = this.p2r.u7k[this.p2r.l5o + 1];
		this.p2r.i1k.f2l(o6w, n8u.y0l);
		this.p2r.i1k.f2l(r9j, s6b);
		this.p2r.x1l = this.p2r.i1k.n7y();
		this.p2r.l5o++;
		let e6h = new b4c();
		e6h.a6t = this.p2r.i1k.n7y();
		e6h.x3t = this.x3t();
		e6h.r1u = this.r1u();
		if (this.b9l)
		{
			this.b9l.o6t(e6h);
		}
	}
	else
	{
		this.p2r.r5n = false;
		this.j0j(0);
	}
}



k3q()
{
	if (this.t3s)
	{
		let o7v = this.b9l.w3w.o0g.v9t();
		if (o7v)
		{
			if (this.u2j < this.b5z.length - 1)
			{
				this.b9l.w3w.o0g.z5w(this.b5z[this.u2j],
					this.b5z[this.u2j+1], true);
				this.u2j++;
			}
			else
			{
				this.t3s = false;
				this.j0j(0);
			}
		}
		return;
	}

	if (this.g3w())
	{
		this.q9k();
		return;
	}

	this.b5z.length = 0;
	let x6s = this.j3r(0);
	let b5h = x6s.b5h();
	if (b5h == 0)
	{
		this.b5z.push(x6s.s2i()); 
		this.b5z.push(x6s.e3m());
	}
	else
	{
		this.b5z.push(x6s.s2i());
		if (b5h > 1)
		{
      let x1l = this.f8a.x1l(this.z6a);
      let a1r = v4n(x1l, x6s.i0h());
			for (let i = 0; i < b5h - 1; i++)
			{
				this.b5z.push(a1r[i]);
			}
		}
		this.b5z.push(x6s.e3m());
	}

	this.b9l.w3w.o0g.z5w(this.b5z[0],
		this.b5z[1], b5h > 0);
	this.u2j = 1;
	this.t3s = true;
}

f5y(p8t)
{
	for (const m of this.y5o)
	{
		if (m.getAttribute('movenr') == p8t)
		{
			return m;
		}
	}
	return null;
}

y7b(p8t)
{
	let s1m = [];
	for (const t5u of this.t6r)
	{
		if (t5u.getAttribute('movenr') == p8t)
		{
			s1m.push(t5u);
		}
	}
	return s1m;
}

w6d(d6h)
{
	let k0v = d6h.offsetTop;
	let h5w = d6h.scrollHeight;

	let g2e = this.w5z.offsetTop;
	let o1c = this.w5z.scrollTop;
	let z2e = this.w5z.clientHeight;
	let g9j = this.w5z.scrollHeight;
	let x8g = k0v - g2e;
	if (x8g >= o1c && x8g + h5w <= o1c + z2e - 1)
	{
		
	}
	else
	{
		
		let top = x8g - (z2e / 2);
		if (top < 0) top = 0;
		this.w5z.scrollTop = top;
	}
}

r1o(h1j, n9r)
{
	let b4a = h1j;
	while (b4a.e2y)
	{
		b4a = b4a.e2y;
	}
 	while (b4a)
	{
    if (this.f8a.p7l(b4a.c2w) == false)
    {
 	  	let d6h = this.f5y(b4a.c2w);
  	  if (d6h)
 		  {
  		  d6h.classList.add(n9r);
 	  	}
    }
    b4a = b4a.j8j;
  }
}

q5m(b3a)
{
  
 	for (const x6s of this.y5o)
	{
 		x6s.classList.remove('tdcurline');
    x6s.classList.remove('tdcurnode1');
	}
 	for (const t5u of this.t6r)
	{
 		t5u.classList.remove('tdcurline');
	}

  
	if (this.v8d >= 0)
	{
		let d6h = this.f5y(this.v8d);
		if (d6h)
		{
			d6h.classList.remove('tdcurmove');
		}
	}

  
  let r8x = true;
  let g7h = this.f8a.y1o(this.z6a);
 	for (const h1j of g7h)
	{
    if (h1j.e2y && r8x)
		{
		  this.r1o(h1j, 'tdcurnode1');
      r8x = false;
    }
    else
    {
      if (this.f8a.p7l(h1j.c2w) == false)
      {
   	  	let w5e = this.f5y(h1j.c2w);
	  	  if (w5e)
  		  {
	  		  w5e.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let d6h = this.f5y(b3a);
	if (d6h)
	{
    d6h.classList.remove('tdcurline');
		d6h.classList.add('tdcurmove');
		this.w6d(d6h);
	}
	this.v8d = b3a;
}

e5i()
{
	let x6s = this.f5y(this.v8d);
	if (!x6s) return;
	let g9i = x6s.offsetTop;
	let l0g = null;
	let f7p = -1;
	for (const m of this.y5o)
	{
		if (m.offsetTop < g9i)
		{
			if (m.offsetTop > f7p)
			{
				l0g = m;
				f7p = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (l0g)
	{
		this.t1c(l0g.getAttribute('movenr'));
	}
	else
	{
		if (this.y5o.length)
		{
			this.t1c(this.y5o[0].getAttribute('movenr'));
		}
	}
}

j7z()
{
	let x6s = this.f5y(this.v8d);
	if (!x6s)
	{
		this.f2x();
		return;
	}
	let g9i = x6s.offsetTop;
	for (const m of this.y5o)
	{
		if (m.offsetTop > g9i)
		{
			this.t1c(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.y5o.length)
	{
		this.t1c(this.y5o[this.y5o.length - 1].getAttribute('movenr'));
	}
}

t1c(f6y)
{
  
  
  
  
  if (this.z6a.r9x)
  {
    if (this.z6a.r9x.c2w == f6y)
    {
      return;
    }
  }
  else
  {
    if (f6y == 0)
    {
      return;
    }
  }
	
  this.v7j(f6y);
  this.q5m(f6y);
	
}

s2p()
{
	return this.f8a.s2p(this.z6a);
}

v8e(o6e)
{
  this.o6e = o6e.n7y();
	this.o6e.m0t = 0;
	this.o6e.l8d = 0;
	this.o6e.c1e = 32;
  this.o6e.j0h = 2;
 	this.o6e.g5q = false;
}

}

class s3i
{

constructor()
{
	this.h9e = 15;
  this.q0s = true;
 	this.v5r = true;
}

n7y()
{
  return Object.assign(new s3i(), this);
}

}
class u9g
{

constructor()
{
	this.p2h = false;
	this.q0d = null;
	this.m8c = null;
	this.f7j = 6;
	this.s9v = null;
	this.d1e = null;
	this.u4i = null;
	this.o5o = null;
	this.f7i = null;
	this.q7i = false;
}

w5c()
{
	this.p2h = false;
	this.n2o();
	this.s9v.classList.replace('autoPlay', 'autoStop');
	this.o5o.style.display = 'none';
	this.f7i.style.display = 'none';
	this.d1e.style.display = 'inline-block';
	this.u4i.style.display = 'inline-block';
	this.u1y();
	this.q0d.b9l.w3w.y3r = false;
}

k1n()
{
	if (this.m8c)
	{
		clearInterval(this.m8c);
		this.m8c = null;
		this.s9v.classList.replace('autoStop', 'autoPlay');
		this.o5o.style.display = 'inline-block';
		this.f7i.style.display = 'inline-block';
		this.d1e.style.display = 'none';
		this.u4i.style.display = 'none';
		this.q0d.b9l.w3w.y3r = true;
		this.q0d.h4h();
	}
}

n2o()
{
	let m6r = this.q0d.b9l.m6r;
	this.m8c = setInterval(function(){ l0j(m6r); },
		this.q0d.h6c ? this.f7j * 2 : this.f7j * 100);
}

b0q()
{
	return this.m8c != null;
}

x3t()
{
	return !this.q0d.b3y();
}

r1u()
{
	return !this.q0d.g3w();
}

d7h()
{
	if (this.q7i)
	{
		return;
	}
	else
	{
		this.q7i = true;
	}
	if (!this.r1u())
	{
		this.k1n();
	}
	else
	{
		this.q0d.i1y();
	}
	this.q7i = false;
}

u7c()
{
	if (this.m8c)
	{
		if (this.f7j < 50)
		{
			this.f7j++;
			clearInterval(this.m8c);
			this.n2o();
			this.u1y();
		}
	}
}

d0w()
{
	if (this.m8c)
	{
		if (this.f7j > 1)
		{
			this.f7j--;
			clearInterval(this.m8c);
			this.n2o();
			this.u1y();
		}
	}
}

u1y()
{
	y5a(this.d1e, this.f7j < 50);
	y5a(this.u4i, this.f7j > 1);
}

}

let g6k = null;
let t8l = 0;
let b3k = null;

class b9s
{

constructor()
{
	this.index = 0;
	this.u0y = '';
	this.q8r = null;
	this.v8q = false;
	this.b9l = null;
	this.x0u = null;
  this.i4g = [];
	this.a1v = 0;
  this.e5f = 0;

	this.n8y = null;
	this.w7p = null;
	this.left = null;
	this.e4n = null;
	this.g1b = null;
	this.g0g = null;
	this.r3s = null;
	this.n6a = null;
	this.m0v = null;
	this.n3k = null;
	this.i6l = null;
 	this.f1c = null;
 	this.h2l = null;
	this.z9k = null;
	this.o5o = null;
	this.d1e = null;
	this.s9v = null;
	this.f7i = null;
	this.u4i = null;
	this.m6c = null;
 	this.z7r = null;
  this.q0q = null;
	this.m9g = null;
  this.k5x = null;
	this.w5k = null;
	this.k1k = null;
	this.s1s = null;
	this.u5z = null;
	this.q8g = null;
	this.f3e = null;
  this.w5y = null;
  this.p2a = null;
	this.g0w = null;
	this.x9m = null;
	this.y3f = null;
	this.f3q = null;
	this.i3x = null;
	this.a7c = null;
	this.l3r = null;
	this.w5z = null;

  
  this.t2c = null;
  this.j9d = null;
  this.t8e = null;
  this.b7x = null;
  this.b0e = null;
  this.d5n = null;
}

j3x(index, q8r, u0y)
{
	this.index = index;
	this.q8r = q8r;
	this.u0y = u0y;
	q8r.innerHTML = '';
	q8r.u4j = "\x72\x65\x70\x6c\x61\x79";

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

  
  s += "<dialog id=\"settingsDialog" + index + "\" class=\"settingsDialog\">";
  s += "\x3c\x68\x32\x3e\x53\x65\x74\x74\x69\x6e\x67\x73\x3c\x2f\x68\x32\x3e";

  s += "<div class=\"selectContainer\">";
  let n0j = j3k();
  s += "<label for=\"pieceSelect\">Pieces:</label>";
  s += "<select id=\"pieceSelect"+ index + "\" class=\"pieceSelect\">";
  for (let i = 0; i < n0j.length; i++)
  {
    s += "<option value=\"" + i + "\">" + n0j[i] + "\x3c\x2f\x6f\x70\x74\x69\x6f\x6e\x3e";
  }
  s += "\x3c\x2f\x73\x65\x6c\x65\x63\x74\x3e";
  s += "\x3c\x2f\x64\x69\x76\x3e";


  s += "<label class=\"checkboxLabel\">";
  s += "<input type=\"checkbox\" id=\"coordinatesCheckbox" + index + "\">";
  s += "\x3c\x73\x70\x61\x6e\x3e\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x3c\x2f\x73\x70\x61\x6e\x3e";
  s += "\x3c\x2f\x6c\x61\x62\x65\x6c\x3e";

  s += "<div class=\"selectContainer\">";
  s += "<label for=\"notationFontSizeSelect\">Notation font size:</label>";
  s += "<select id=\"notationFontSizeSelect"+ index + "\" class=\"notationFontSizeSelect\">";
  s += "<option value=\"12\">Small</option>";
  s += "<option value=\"15\">Default</option>";
  s += "<option value=\"18\">Medium</option>";
  s += "<option value=\"22\">Large</option>";
  s += "\x3c\x2f\x73\x65\x6c\x65\x63\x74\x3e";
  s += "\x3c\x2f\x64\x69\x76\x3e";

  s += "<form method=\"dialog\">";
  s += "<button value=\"Ok\" id=\"okButton" +         index + "\" class=\"settingsButton\">OK</button>";
  s += "<button value=\"Cancel\" id=\"cancelButton" + index + "\" class=\"settingsButton\">Cancel</button>";
  s += "\x3c\x2f\x66\x6f\x72\x6d\x3e";
  s += "\x3c\x2f\x64\x69\x61\x6c\x6f\x67\x3e";

	q8r.innerHTML = s;

	this.n8y = document.getElementById("\x72\x6f\x6f\x74\x50\x61\x72\x65\x6e\x74"+index);
	this.w7p = document.getElementById("\x72\x6f\x6f\x74"+index);
	this.left = document.getElementById("\x6c\x65\x66\x74"+index);
	this.e4n = document.getElementById("\x6c\x65\x66\x74\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.g1b = document.getElementById("\x6c\x65\x66\x74\x4e\x65\x73\x74"+index);
	this.g0g = document.getElementById("\x6c\x65\x66\x74\x4e\x6f\x72\x74\x68"+index);
	this.r3s = document.getElementById("\x62\x6f\x61\x72\x64\x48\x6f\x6c\x64\x65\x72"+index);
	this.n6a = document.getElementById("\x62\x6f\x61\x72\x64\x50\x61\x6e\x65\x6c"+index);
	this.m0v = document.getElementById("\x62\x6f\x61\x72\x64\x43\x61\x6e\x76\x61\x73"+index);
	this.n3k = document.getElementById("\x62\x65\x6c\x6f\x77\x42\x6f\x61\x72\x64"+index);
	this.i6l = document.getElementById("\x72\x65\x70\x6c\x61\x79\x50\x61\x6e\x65\x6c"+index);
 	this.f1c = document.getElementById("\x67\x6f\x54\x6f\x50\x72\x65\x76\x69\x6f\x75\x73"+index);
 	this.h2l = document.getElementById("\x67\x6f\x54\x6f\x4e\x65\x78\x74"+index);
	this.z9k = document.getElementById("\x67\x6f\x54\x6f\x42\x65\x67\x69\x6e"+index);
	this.o5o = document.getElementById("\x70\x6c\x61\x79\x42\x61\x63\x6b\x77\x61\x72\x64"+index);
	this.d1e = document.getElementById("\x70\x6c\x61\x79\x53\x6c\x6f\x77\x65\x72"+index);
	this.s9v = document.getElementById("\x61\x75\x74\x6f\x50\x6c\x61\x79"+index);
	this.f7i = document.getElementById("\x70\x6c\x61\x79\x46\x6f\x72\x77\x61\x72\x64"+index);
	this.u4i = document.getElementById("\x70\x6c\x61\x79\x46\x61\x73\x74\x65\x72"+index);
	this.m6c = document.getElementById("\x67\x6f\x54\x6f\x45\x6e\x64"+index);
  this.z7r = document.getElementById("\x66\x6c\x69\x70\x42\x6f\x61\x72\x64"+index);
  this.q0q = document.getElementById("\x64\x6f\x77\x6e\x6c\x6f\x61\x64"+index);
	this.m9g = document.getElementById("\x73\x68\x6f\x77\x47\x61\x6d\x65\x4c\x69\x73\x74"+index);
  this.k5x = document.getElementById("\x73\x65\x74\x74\x69\x6e\x67\x73"+index);
	this.w5k = document.getElementById("\x6c\x65\x66\x74\x53\x6f\x75\x74\x68"+index);
	this.k1k = document.getElementById("\x6c\x65\x66\x74\x53\x6f\x75\x74\x68\x4e\x65\x73\x74"+index);
	this.s1s = document.getElementById("\x6c\x69\x73\x74\x50\x61\x72\x65\x6e\x74"+index);
	this.u5z = document.getElementById("\x6c\x69\x73\x74\x48\x65\x61\x64\x65\x72"+index);
	this.q8g = document.getElementById("\x6c\x69\x73\x74\x48\x65\x61\x64\x65\x72\x54\x61\x62\x6c\x65"+index);
	this.f3e = document.getElementById("\x6c\x69\x73\x74\x42\x6f\x64\x79"+index);
  this.w5y = document.getElementById("\x6c\x69\x73\x74\x2d\x62\x75\x74\x74\x6f\x6e\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
  this.p2a = document.getElementById("\x68\x69\x64\x65\x47\x61\x6d\x65\x4c\x69\x73\x74"+index);
	this.g0w = document.getElementById("\x67\x61\x6d\x65\x4c\x69\x73\x74"+index);
	this.x9m = document.getElementById("\x72\x69\x67\x68\x74"+index);
	this.y3f = document.getElementById("\x72\x69\x67\x68\x74\x4e\x65\x73\x74"+index);
	this.f3q = document.getElementById("\x72\x69\x67\x68\x74\x4e\x6f\x72\x74\x68"+index);
	this.i3x = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.a7c = document.getElementById("\x6e\x6f\x74\x61\x2d\x68\x65\x61\x64\x65\x72\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.l3r = document.getElementById("\x68\x65\x61\x64\x65\x72\x50\x61\x6e\x65\x6c"+index);
	this.w5z = document.getElementById("\x6d\x6f\x76\x65\x73\x50\x61\x6e\x65\x6c"+index);

  this.i3x.style.h9e = y6n.h9e + 'px';

  
  this.t2c = document.getElementById("\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67"+index);
  this.j9d = document.getElementById("\x70\x69\x65\x63\x65\x53\x65\x6c\x65\x63\x74"+index);
  this.t8e = document.getElementById("\x63\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x43\x68\x65\x63\x6b\x62\x6f\x78"+index);
  this.b7x = document.getElementById("\x6e\x6f\x74\x61\x74\x69\x6f\x6e\x46\x6f\x6e\x74\x53\x69\x7a\x65\x53\x65\x6c\x65\x63\x74"+index);
  this.b0e = document.getElementById("\x6f\x6b\x42\x75\x74\x74\x6f\x6e"+index);
  this.d5n = document.getElementById("\x63\x61\x6e\x63\x65\x6c\x42\x75\x74\x74\x6f\x6e"+index);
}

m3w()
{
	this.q8r.style.display = 'block';
	this.d1e.style.display = 'none';
	this.u4i.style.display = 'none';
	this.s1s.style.display = 'none';

	this.v8q = false;
	if (this.q8r.clientWidth <= n2g)
	{
		this.w8i();
		this.v8q = true;
	}
	else
	{
		this.e4y();
		this.m4t();
	}
  this.r9w();
	let m6r = this.index;
	this.q8r.onclick = function() { b5u(m6r); };
 	this.f1c.onclick = function() { g5t(m6r); };
	this.z9k.onclick = function() { t4w(m6r); };
	this.o5o.onclick = function() { s4j(m6r); };
	this.d1e.onclick = function() { s3v(m6r); };
	this.s9v.onclick = function() { t4y(m6r); };
	this.u4i.onclick = function() { j6e(m6r); };
	this.f7i.onclick = function() { u0g(m6r); };
	this.m6c.onclick = function() { p7h(m6r); };
 	this.h2l.onclick = function() { g0f(m6r); };
	this.z7r.onclick = function() { l2o(m6r); };
 	this.q0q.onclick = function() { k2o(m6r); };
	this.m9g.onclick = function() { p0w(m6r); };
 	this.p2a.onclick = function() { e9c(m6r); };
 	this.k5x.onclick = function() { z6x(m6r); };
 	this.b0e.onclick = function() { x0s(m6r); };
 	this.d5n.onclick = function() { n3a(m6r); };

	this.b9l = new f0w(this.index);
	this.b9l.w3w.o0g.l6q(this.m0v);
	this.b9l.w3w.n6a = this.n6a;
  this.b9l.w3w.v8e(h5y);
	this.b9l.q0d.l3r = this.l3r;
	this.b9l.q0d.w5z = this.w5z;
  this.b9l.q0d.v8e(h5y);
	this.b9l.w0m.s9v = this.s9v;
	this.b9l.w0m.d1e = this.d1e;
	this.b9l.w0m.u4i = this.u4i;
	this.b9l.w0m.o5o = this.o5o;
	this.b9l.w0m.f7i = this.f7i;

	this.x0u = new o3l(this.index);
	this.x0u.s1s = this.s1s;
	this.x0u.l9m = this.g0w;
	this.x0u.l3w = this.q8g;
	this.x0u.m3w();

	this.x0u.f6n(this.i4g);
	if (this.x0u.i4g.length)
	{
		this.r0d(0, 0);
	}
	else
	{
		let p0b = new j0c();
		this.b9l.r0d(null, 1, 0, p0b);
	}
}

f0a(u0y)
{
	this.u0y = u0y;
 	let f7g = this.u0y.split('\n');
	let u0d = 0;
	for (const m9d of f7g)
	{
		if (m9d.startsWith("[Event \""))
		{
			let r6q = u0d;
      let e7m = f7g.length;
   		let q4c = f7g.slice(r6q, e7m);
  		let t1z = new q3c(q4c);
	  	this.x0u.i4g[this.a1v] = t1z.g7n();
      break;
    }
    u0d++;
	}
  this.r0d(0, 0);
}

r9w()
{
	let f7g = this.u0y.split('\n');
	let u4m = [];
	let u0d = 0;
	for (const m9d of f7g)
	{
		if (m9d.startsWith("[Event \""))
		{
			u4m.push(u0d);
		}
		u0d++;
	}
	let i = 0;
	this.i4g = [];
	for (const t4u of u4m)
	{
		let r6q = t4u;
		let e7m = 0;
		if (i < u4m.length - 1)
		{
			e7m = u4m[i + 1];
		}
		else
		{
			e7m = f7g.length;
		}
		let q4c = f7g.slice(r6q, e7m);
		let t1z = new q3c(q4c);
		let p0b = t1z.g7n();
		this.i4g.push(p0b);
		i++;
	}
}

g1s()
{
	if (this.v8q || this.w7p.clientHeight <= n2g)
	{
		this.q8r.style.m6m = "\x30\x70\x78";
		this.q8r.style.q0o = "\x30\x70\x78";
		this.q8r.style.width = "\x31\x30\x30\x25";
		this.q8r.style.height = "\x38\x38\x76\x68";
	}
	else
	{
		this.q8r.style.m6m = "\x31\x70\x78\x20\x73\x6f\x6c\x69\x64\x20\x67\x72\x61\x79";
		this.q8r.style.q0o = "\x31\x70\x78\x20\x73\x6f\x6c\x69\x64\x20\x67\x72\x61\x79";
		this.q8r.style.height = "\x38\x38\x76\x68";
	}
}

c3c()
{
	this.g1s();

	this.left.style.width = "\x31\x30\x30\x25";

	let k3x = this.g0g.getBoundingClientRect();
	this.w5k.style.top = (k3x.height) + "\x70\x78";
	this.m4t();

	this.d4o();
	this.e4y();
	this.n7n();
	this.x4h();
}

l6s()
{
	this.g1s();

	let j6s = this.w7p.getBoundingClientRect();
	this.left.style.width = (j6s.width * 0.50) + "\x70\x78";
	let j5b = this.left.getBoundingClientRect();

	let k3x = this.g0g.getBoundingClientRect();
	this.w5k.style.top = (k3x.height) + "\x70\x78";
	this.m4t();

	this.x9m.style.left = (j5b.width) + "\x70\x78";
	this.x9m.style.width = (j6s.width - j5b.width) + "\x70\x78";

	this.d4o();
	this.e4y();
	this.n7n();
	this.x4h();
}

e4y()
{
}

i9k()
{
  this.g0g.style.height = '100%';
	this.f3q.appendChild(this.i3x);
	this.x9m.style.display = 'block';
}

w8i()
{
  this.g0g.style.height = '70%';
	this.k1k.appendChild(this.i3x);
	this.x9m.style.display = 'none';
}

b1i()
{
	this.s1s.style.display = 'block';
  let c5y = this.s1s.clientHeight - this.u5z.clientHeight - this.w5y.clientHeight;
  this.f3e.style.height = c5y + "\x70\x78";
	this.n7n();
}

u1n()
{
 	this.s1s.style.display = 'none';
}

i0i()
{
  this.j9d.q4y = h5y.t7o;
  this.t8e.checked = h5y.g5q;
  this.b7x.q4y = y6n.h9e;
  this.t2c.showModal();
}

a2m()
{
  h5y.t7o = this.j9d.q4y;
  localStorage.setItem(p6t, h5y.t7o);
  s0y(h5y.t7o);

  h5y.g5q = this.t8e.checked;
  localStorage.setItem(p9p, h5y.g5q.toString());

  y6n.h9e = this.b7x.q4y;
  localStorage.setItem(o2p, y6n.h9e);
}

c5s()
{
}

g1t()
{
  this.b9l.w3w.v8e(h5y);
  this.b9l.w3w.h9j();
  this.b9l.q0d.v8e(h5y);
  this.b9l.q0d.o5c();
  let i3x = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.index);
  i3x.style.h9e = y6n.h9e + 'px';
}

x4h()
{
	this.b9l.q0d.d3x();
}

n7n()
{
  this.x0u.h9j();
}

d4o()
{
	let k3x = this.g0g.getBoundingClientRect();
	let y7x = this.n3k.getBoundingClientRect();
	this.r3s.style.height = (k3x.height - y7x.height - 1) + "\x70\x78";
	this.b9l.w3w.h9j();
}

m4t()
{
	let c6j = this.g1b.getBoundingClientRect();
	let k3x = this.g0g.getBoundingClientRect();
	let y4a = c6j.height - k3x.height;
	if (y4a < 0) y4a = 0;
	this.w5k.style.height = y4a + "\x70\x78";
}

h7o()
{
  z1e('goToPrevious'+this.index, this.a1v > 0);
  z1e('goToNext'+this.index, this.a1v < this.x0u.i4g.length - 1);
}

n4d(e)
{
	this.b9l.w3w.o0g.mouseDown(e);
}

u3o(e)
{
	this.b9l.w3w.o0g.mouseMove(e);
}

z7x(e)
{
	this.b9l.w3w.o0g.mouseUp(e);
}

k6l(e)
{
	this.b9l.w3w.o0g.touchStart(e);
}

x9n(e)
{
	this.b9l.w3w.o0g.touchMove(e);
}

g8m(e)
{
	this.b9l.w3w.o0g.touchEnd(e);
}

u7c()
{
	this.b9l.w0m.u7c();
}

d0w()
{
	this.b9l.w0m.d0w();
}

k1h()
{
	this.b9l.w0m.k1n();
	this.b9l.q0d.k1h();
}

f2x()
{
	this.b9l.w0m.k1n();
	this.b9l.q0d.f2x();
}

v2d()
{
	this.b9l.w0m.k1n();
	this.b9l.q0d.j1l();
}

e9k()
{
	this.b9l.w0m.k1n();
	this.b9l.q0d.z2k();
}

y2n()
{
	this.b9l.v0l();
}

w1q()
{
 	if (this.x0u.i4g.length)
  {
    this.r0d(0, 0);
  }
}

b3q()
{
 	if (this.a1v > 0)
  {
    this.r0d(this.a1v - 1, 0);
  }
}

j4a()
{
  if (this.a1v < this.x0u.i4g.length - 1)
  {
    this.r0d(this.a1v + 1, 0);
  }
}

a9n()
{
	if (this.x0u.i4g.length)
  {
    this.a1v = this.x0u.i4g.length - 1;
    this.r0d(this.x0u.i4g.length - 1, 0);
	}
}

r0d(a1v, b3a)
{
  if (a1v >= 0 && a1v <= this.x0u.i4g.length - 1)
  {
    this.a1v = a1v;
  	this.b9l.r0d(null, 1, b3a, this.x0u.i4g[this.a1v]);
  }
  this.h7o();
}

u7n()
{
	this.b9l.u7n();
}

k2v()
{
	this.b9l.k2v();
}

e1l(x)
{
	if (x.rowIndex >= 0 && x.rowIndex < this.x0u.i4g.length)
	{
		this.r0d(x.rowIndex, 0);
    this.u1n();
	}
}

h4t()
{
	if (this.q8r.clientWidth <= n2g)
	{
		if (this.v8q)
		{
			this.c3c();
		}
		else
		{
			this.w8i();
			this.v8q = true;
			this.c3c();
		}
	}
	else
	{
		if (!this.v8q)
		{
			this.l6s();
		}
		else
		{
			this.i9k();
			this.v8q = false;
			this.l6s();
		}
	}
}

e6q(f6y)
{
	this.b9l.q0d.t1c(f6y);
}

l1o()
{
  const a = document.createElement("\x61");
  a.style.display = "\x6e\x6f\x6e\x65";
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
  a.href = window.URL.createObjectURL(new Blob([u0y], { type: "\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e" }));
  a.setAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64", "\x67\x61\x6d\x65\x73\x2e\x70\x67\x6e");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

}
const e0y = 38;
const j0n = 40;
const g8w = 37;
const z4m = 37;
const o0y = 52;
const c9v = 39;
const g1r = 39;
const r3o = 54;
const w4t = 36;
const g6j = 36;
const z7o = 55;
const q5w = 35;
const z7h = 35;
const o4v = 49;
const j5w = 187;
const k4s = 107;
const h1o = 61;
const c6g = 42;
const t9u = 170;
const b2a = 8;
const k6e = 13;
let i2w = false;

const n2g = 767;
let h7i = [];
let o0o = -1;
let q9x = new l3a();

let h5y = new j6p();
let y6n = new s3i();

window.onload = function()
{
  z1b();
  a7j();
  p8x();
};

document.onkeydown = z9l;

function z9l(e)
{
	let l2c = e || window.event;
	let h0g = l2c.keyCode;

	if (i2w) return;
	i2w = true;

	if (o0o == -1) return;

	if (e.ctrlKey)
	{
		if (h0g == 66) 
		{
				h7i[o0o].u7n();
				e.preventDefault();
				
				
				
		}
		i2w = false;
		return;
	}
	if (h0g)
	{
		
		b2s(h0g);
		e.preventDefault(); 
		
	}
	i2w = false;
}

function l0j(m6r)
{
	h7i[m6r].b9l.w0m.d7h();
}

function b2s(h0g)
{
	if (o0o == -1) return;

	if (h0g == e0y)
	{
		h7i[o0o].b9l.q0d.e5i();
	}
	else if (h0g == j0n)
	{
		h7i[o0o].b9l.q0d.j7z();
	}
	else if (h0g == g8w || h0g == z4m || h0g == o0y ||
	h0g == c9v || h0g == g1r || h0g == r3o ||
	h0g == w4t || h0g == g6j ||
	h0g == q5w || h0g == z7h)
	{
		h7i[o0o].b9l.q0d.r6z(h0g);
	}
	else if (h0g == j5w || h0g == k4s || h0g == h1o)
	{
		h7i[o0o].doFlipBoard();
	}
}

function u4p(m8n, c8n)
{
	let c0u = m8n.length;
	let i5k = 0;

	function check(n)
	{
		if (n == c0u)
		{
			c8n();
		}
	}

	for (let i = 0; i < m8n.length; ++i)
	{
		
    let a0g = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x74\x64\x61\x6d\x62\x61\x73\x65\x2e\x63\x6f\x6d\x2f\x69\x6d\x61\x67\x65\x73\x2f" + m8n[i];
		let img = document.createElement("\x69\x6d\x67");
		img.u4j = m8n[i].replace("\x2e\x62\x6d\x70", "").replace("\x2e\x67\x69\x66", "").replace("\x2e\x6a\x70\x67", "").replace("\x2e\x70\x6e\x67", "").replace("\x2e\x73\x76\x67", "");
		q9x.add(img);
		img.addEventListener("\x6c\x6f\x61\x64", function()
		{
			i5k++;
			check(i5k);
		});
		img.src = a0g;
	}
}

function z1b()
{
 	u4p(l4o(), d5e);
}

function h4t()
{
	for (const b5p of h7i)
	{
		b5p.h4t();
	}
}

function d5e()
{
	let g1d = document.getElementsByClassName("\x74\x64\x72\x65\x70\x6c\x61\x79");
	for (const q8r of g1d)
	{
		let b5p = new b9s();
		b5p.j3x(h7i.length, q8r, q8r.innerHTML);
		b5p.m3w();
		h7i.push(b5p);
	}
	if (h7i.length)
	{
		o0o = 0;
	}
	window.addEventListener("\x72\x65\x73\x69\x7a\x65", h4t);
	h4t();
}

function z1e(t7l, a5m)
{
	let button = document.getElementById(t7l);
	if (a5m)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function y5a(button, a5m)
{
	if (a5m)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function b5u(m6r)
{
	o0o = m6r;
}

function s3v(m6r)
{
	o0o = m6r;
	h7i[m6r].u7c();
}

function j6e(m6r)
{
	o0o = m6r;
	h7i[m6r].d0w();
}

function s4j(m6r)
{
	o0o = m6r;
	h7i[m6r].k1h();
}

function u0g(m6r)
{
	o0o = m6r;
	h7i[m6r].f2x();
}

function t4w(m6r)
{
	o0o = m6r;
	h7i[m6r].v2d();
}

function p7h(m6r)
{
	o0o = m6r;
	h7i[m6r].e9k();
}

function t4y(m6r)
{
	o0o = m6r;
	h7i[m6r].y2n();
}

function g5t(m6r)
{
	o0o = m6r;
  let b5p = h7i[m6r];
 	b5p.b3q();
}

function g0f(m6r)
{
	o0o = m6r;
  let b5p = h7i[m6r];
 	b5p.j4a();
}

function k2o(m6r)
{
	o0o = m6r;
	h7i[m6r].l1o();
}

function l2o(m6r)
{
	o0o = m6r;
	h7i[m6r].u7n();
}

function h3c(m6r)
{
	o0o = m6r;
	h7i[m6r].k2v();
}

function p2y(m6r, f1i)
{
	o0o = m6r;
  let b3a = f1i.getAttribute('movenr');
	h7i[m6r].e6q(b3a);
}

function mainListClick(m6r, x)
{
	o0o = m6r;
	h7i[m6r].e1l(x);
}

function p0w(m6r)
{
 	o0o = m6r;
	h7i[m6r].b1i();
}

function e9c(m6r)
{
 	o0o = m6r;
	h7i[m6r].u1n();
}

function z6x(m6r)
{
 	o0o = m6r;
	h7i[m6r].i0i();
}

function x0s(m6r)
{
 	o0o = m6r;
	h7i[m6r].a2m();
	for (const b5p of h7i)
	{
		b5p.g1t();
	}
}

function n3a(m6r)
{
 	o0o = m6r;
	h7i[m6r].c5s();
}

function l1y(m6r)
{
	o0o = m6r;
	h7i[m6r].x0u.a4b();
}

function r2e(m6r)
{
	o0o = m6r;
	h7i[m6r].x0u.k6a(m6r);
}

function m9k(m6r)
{
	o0o = m6r;
	h7i[m6r].x0u.v4p(m6r);
}

function l8u(m6r)
{
	o0o = m6r;
	h7i[m6r].x0u.e6z();
}

function j6o(m6r)
{
	o0o = m6r;
	h7i[m6r].x0u.v1x(m6r);
}

function u5o(m6r)
{
	o0o = m6r;
	h7i[m6r].x0u.n4t(m6r);
}

function q0r(m6r)
{
	o0o = m6r;
	h7i[m6r].x0u.o0h();
}

function i5u(m6r)
{
	o0o = m6r;
	h7i[m6r].x0u.d8s();
}

function i4z(m6r)
{
	o0o = m6r;
	h7i[m6r].x0u.i8u();
}

function e2m(m6r)
{
	o0o = m6r;
	h7i[m6r].x0u.w2j();
}

function a4g(m6r)
{
	o0o = m6r;
	h7i[m6r].x0u.n4a();
}

const p9p = 'Coordinates';
const p6t = 'Pieces';
const o2p = 'NotationFontSize';
function p8x()
{
  const coordinatesValue = localStorage.getItem(p9p);
  if (coordinatesValue === null)
  {
    h5y.g5q = true;
  }
  else
  {
    h5y.g5q = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(p6t);
  if (piecesValue === null)
  {
    h5y.t7o = 0;
  }
  else
  {
    h5y.t7o = piecesValue;
  }
  s0y(h5y.t7o);

  const notationFontSizeValue = localStorage.getItem(o2p);
  if (notationFontSizeValue === null)
  {
    y6n.h9e = 0;
  }
  else
  {
    y6n.h9e = notationFontSizeValue;
  }
}
const z3x =
[
	[ o0c.r9e, 			  	""      ],
	[ o0c.p0b,  		 		"\x67\x61\x6d\x65"  ],
	[ o0c.t9j,    		 	"\x6d\x61\x74\x63\x68" ],
	[ o0c.i9p,  	"\x74\x6f\x75\x72\x6e" ],
	[ o0c.d7c,   			"\x73\x77\x69\x73\x73" ],
	[ o0c.v4k,    	"\x6b\x2e\x6f\x2e"  ],
	[ o0c.z2z,	"\x73\x69\x6d\x75\x6c" ],
	[ o0c.j3m,	"\x73\x63\x68\x65\x76" ]
];

const d0x =
[
	[ o9d.l6p, ""        ],
	[ o9d.r8h,  "\x28\x72\x61\x70\x69\x64\x29" ],
	[ o9d.r5f,  "\x28\x62\x6c\x69\x74\x7a\x29" ],
	[ o9d.d7o,   "\x28\x63\x6f\x72\x72\x29"  ]
];

const n2u =
[
	[ x5i.r9e,     		 ""     ],
	[ x5i.n9f,       		 "\x24\x31\x34\x35" ],
	[ x5i.h5x, 		 "\x24\x31\x34\x32" ],
	[ x5i.o1r, 		 "\x24\x31\x34\x33" ],
	[ x5i.h3i, "\x24\x31\x34\x34" ],
	[ x5i.l9z,  "\x24\x31\x34\x30" ],
	[ x5i.i5y, "\x24\x31\x34\x31" ]
];

const x8t =
[
	[ v9v.r9e,     		""   ],
	[ v9v.o7l,       	"\x24\x31" ],
	[ v9v.p3t, 			  	"\x24\x32" ],
	[ v9v.f5x,	"\x24\x35" ],
	[ v9v.b7l, 		  "\x24\x36" ],
	[ v9v.w1k,  	"\x24\x33" ],
	[ v9v.t2l, 		  "\x24\x34" ],
	[ v9v.j4c, 		"\x24\x32\x32" ],
	[ v9v.g8o, 		"\x24\x38" ]
];

const k7h =
[
	[ l8k.r9e,     						""     ],
	[ l8k.g5c,      "\x24\x31\x38"  ],
	[ l8k.z4b, 					"\x24\x31\x36"  ],
	[ l8k.t8m,	"\x24\x31\x34"  ],
	[ l8k.h1d, 						"\x24\x31\x31"  ],
	[ l8k.r6y,  						"\x24\x31\x33"  ],
	[ l8k.r4n,  "\x24\x31\x35"  ],
	[ l8k.y5m, 					"\x24\x31\x37"  ],
	[ l8k.u3a, 			"\x24\x31\x39"  ],
	[ l8k.y9e,					"\x24\x34\x34"  ],
	[ l8k.r0q, 					"\x24\x31\x33\x32" ],
	[ l8k.e6a,  					"\x24\x33\x36"  ],
	[ l8k.e6b, 							"\x24\x34\x30"  ],
	[ l8k.t4r, 			  "\x24\x31\x33\x38" ],
	[ l8k.x5f,	"\x24\x33\x32"  ],
	[ l8k.s2u, 							"\x24\x31\x34\x36" ]
];

const a5l =
[
	[ x2n.r9e,     		""     ],
	[ x2n.g3i,     "\x24\x35\x31"  ],
	[ x2n.z8c, 			"\x24\x35\x32"  ],
	[ x2n.d1a,	    		"\x24\x35\x33"  ]
];

const j7i =
[
	[ p6z.z2g, 			 	""       ],
	[ p6z.z8c,   		"\x6d\x69\x64\x64\x6c\x65" ],
	[ p6z.n4j,   	   	 	"\x6c\x6f\x77"    ]
];


function j3j(n8n)
{
	return d0x[n8n][1];
}

function k1s(r5r)
{
	for (const n8n of d0x)
	{
		if (n8n[1] == r5r)
		{
			return n8n[0];
		}
	}
	return o9d.l6p;
}

function t3i(type)
{
	return z3x[type][1];
}

function q7y(r5r)
{
	for (const k9w of z3x)
	{
		if (k9w[1] == r5r)
		{
			return k9w[0];
		}
	}
	return o0c.r9e;
}

function z0e(a4t)
{
	return n2u[a4t][1];
}

function g9x(r5r)
{
	for (const a4t of n2u)
	{
		if (a4t[1] == r5r)
		{
			return a4t[0];
		}
	}
	return x5i.r9e;
}

function e6g(style)
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
	return v9v.r9e;
}

function q1p(q4y)
{
	return k7h[q4y][1];
}

function y7g(r5r)
{
	for (const q4y of k7h)
	{
		if (q4y[1] == r5r)
		{
			return q4y[0];
		}
	}
	return l8k.r9e;
}

function u3t(o2d)
{
	return a5l[o2d][1];
}

function h3t(r5r)
{
	for (const t9p of a5l)
	{
		if (t9p[1] == r5r)
		{
			return t9p[0];
		}
	}
	return x2n.r9e;
}

function o4f(r5r)
{
	return r5r.length == 0 ||
		r5r == "\x3f" ||
		r5r == "\x2d" ||
		r5r == "\x2a" ||
		r5r == "\x3f\x3f\x3f\x3f\x2e\x3f\x3f\x2e\x3f\x3f";
}

function a8s(r5r)
{
	if (o4f(r5r))
	{
		return "";
	}
	else
	{
		return r5r.trim();
	}
}

function f7z(r5r, j4v)
{
	if (o4f(r5r))
	{
		return j4v;
	}
	else
	{
		return i6u(r5r, j4v);
	}
}

function p6h(q4y)
{
	return q4y ? q4y.toString() : "";
}

function s6z(d2w)
{
	return j7i[d2w][1];
}

function a3k(r5r)
{
	for (const d2w of j7i)
	{
		if (d2w[1] == r5r)
		{
			return d2w[0];
		}
	}
	return p6z.z2g;
}

function y0m(a6d)
{
	if (!a6d)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(a6d / 60);
		let y8l = a6d % 60;
		return div.toString() + "\x2e" + y8l.toString().padStart(2, '0');
	}
}

function p6q(g3u)
{
	switch (g3u)
	{
		case l4v.l6w:
			return "\x31\x2d\x30";
		case l4v.d1j:
			return "\x31\x2f\x32\x2d\x31\x2f\x32";
		case l4v.c0f:
			return "\x30\x2d\x31";
		default:
			return "\x2a";
	}
}

function v5t(q9a)
{
	if (q9a > 0 && q9a <= 9999)
	{
		return q9a.toString().padStart(4, '0');
	}
	else
	{
		return "\x2d";
	}
}

function w5n(y0q)
{
	if (y0q.y0l())
	{
		return "\x3f\x3f\x3f\x3f\x2e\x3f\x3f\x2e\x3f\x3f";
	}
	let r5r = '';
	if (y0q.z0r)
	{
		r5r = y0q.z0r.toString().padStart(4, '0');
	}
	else
	{
		r5r = "\x3f\x3f\x3f\x3f";
	}
	r5r += "\x2e";
	if (y0q.p8d)
	{
		let y3x = y0q.p8d.toString().padStart(2, '0');
		r5r += y3x;
	}
	else
	{
		r5r += "\x3f\x3f";
	}
	r5r += "\x2e";
	if (y0q.b6q)
	{
		let u5b = y0q.b6q.toString().padStart(2, '0');;
		r5r += u5b;
	}
	else
	{
		r5r += "\x3f\x3f";
	}
	return r5r;
}

function x6r(u6i)
{
	if (o4f(u6i))
	{
		return new j6w();
	}
	else
	{
		let y0q = new j6w();
		y0q.j3g("\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64", u6i);
		return y0q;
	}
}

function q2u(u6i, i9p)
{
	i9p.m5p = (u6i.indexOf("\x74\x65\x61\x6d") != -1);
	i9p.type = o0c.r9e;
	for (const k9w of z3x)
	{
		if (u6i.indexOf(k9w[1]) != -1)
		{
			i9p.type = k9w[0];
			break;
		}
	}
	i9p.n8n = o9d.l6p;
	for (const n8n of d0x)
	{
		if (u6i.indexOf(n8n[1]) != -1)
		{
			i9p.n8n = n8n[0];
			break;
		}
	}
}

function h8y(u6i, h3d)
{
	h3d.h4o = 0;
	h3d.c6a = 0;
	let z4w = u6i.indexOf("\x2e");
	if (z4w != -1)
	{
		let r6n = u6i.substr(0, z4w);
		h3d.h4o = i6u(r6n, 0);
		let a6c = u6i.substr(z4w + 1, u6i.length);
		z4w = a6c.indexOf("\x2e");
		if (z4w != -1)
		{
			r6n = a6c.substr(0, z4w);
			h3d.c6a = i6u(r6n, 0);
		}
		else
		{
			h3d.c6a = i6u(a6c, 0);
		}
	}
	else
	{
		h3d.h4o = i6u(u6i, 0);
	}
}

function w6a(h3d)
{
	let u6i = '';
	if (h3d.c6a)
	{
		u6i = h3d.h4o.toString() + "\x2e" + h3d.c6a.toString();
	}
	else if (h3d.h4o)
	{
		u6i = h3d.h4o.toString();
	}
	return u6i;
}

function d4m(u6i)
{
	if (u6i == "\x32\x2d\x30" || u6i == "\x32\x30" || u6i == "\x31\x2d\x30" || u6i == "\x31\x30")
	{
		return l4v.l6w;
	}
	else if (u6i == "\x31\x2d\x31" || u6i == "\x31\x31" || u6i == "\x31\x2f\x32\x2d\x31\x2f\x32" ||
		u6i == "\x31\x2f\x32\x31\x2f\x32" || u6i == "\x30\x2e\x35\x2d\x30\x2e\x35")
	{
		return l4v.d1j;
	}
	else if (u6i == "\x30\x2d\x32" || u6i == "\x30\x32" || u6i == "\x30\x2d\x31" || u6i == "\x30\x31")
	{
		return l4v.c0f;
	}
	else
	{
		return l4v.r9e;
	}
}

function c2k(u6i)
{
	return i6u(u6i, 0);
}

function p7t(u6i)
{
	return u5m(u6i);
}

function h2n(u6i)
{
	return s5h(u6i);
}

function g4q(q4y)
{
	return q4y ? "\x31" : "";
}

function t9z(u6i)
{
	return u6i == "\x31";
}

function c1d(j7f)
{
	let h3d = new e5o();

	
	h3d.b5c.a3h.j0e(a8s(j7f.w4g));
	if (!o4f(j7f.j0v))
	{
		h3d.b5c.v4r.t7l = a8s(j7f.j0v);
		h3d.b5c.v4r.c2w = f7z(j7f.x9e, 0);
		if (!o4f(j7f.i0y))
		{
			let y0q = x6r(j7f.i0y);
			h3d.b5c.v4r.z0r = y0q.z0r;
		}
		h3d.b5c.v4r.v3t = t9z(j7f.q9l);
		h3d.b5c.v4r.e9r = b6a(a8s(j7f.h1b));
	}
	h3d.b5c.q9a = c2k(a8s(j7f.u2o));
	h3d.b5c.k5l = h2n(a8s(j7f.i9e));
	h3d.b5c.s4t = a8s(j7f.j5j);
	h3d.b5c.e9r = f8d(a8s(j7f.e3i));

	
	h3d.i6o.a3h.j0e(a8s(j7f.z8i));
	if (!o4f(j7f.s4n))
	{
		h3d.i6o.v4r.t7l = a8s(j7f.s4n);
		h3d.i6o.v4r.c2w = f7z(j7f.q3k, 0);
		if (!o4f(j7f.e7e))
		{
			let y0q = x6r(j7f.e7e);
			h3d.i6o.v4r.z0r = y0q.z0r;
		}
		h3d.i6o.v4r.v3t = t9z(j7f.w7l);
		h3d.i6o.v4r.e9r = b6a(a8s(j7f.x8y));
	}
	h3d.i6o.q9a = c2k(a8s(j7f.x8m));
	h3d.i6o.k5l = h2n(a8s(j7f.y7s));
	h3d.i6o.s4t = a8s(j7f.v7x);
	h3d.i6o.e9r = f8d(a8s(j7f.x1z));

	
	h3d.i9p.s4t = a8s(j7f.q9u);
	h3d.i9p.b9j = a8s(j7f.h5g);
	h3d.i9p.x4w = x6r(j7f.s3f);
	h3d.i9p.b8s = x6r(j7f.r7i);

	q2u(a8s(j7f.k9w), h3d.i9p);
	
	
	
	let m5m = k1s(j7f.m5m);
	if (m5m != o9d.l6p)
	{
		h3d.i9p.n8n = m5m;
	}
	h3d.i9p.e9r = b6a(a8s(j7f.o8m));
	h3d.i9p.j9z = f7z(j7f.s2n, 0);
	let k9w = q7y(j7f.k9w);
	if (k9w != o0c.r9e)
	{
		h3d.i9p.type= k9w;
	}
	h3d.i9p.q2s = f7z(j7f.y3a, 0);
	h3d.i9p.m5p = t9z(j7f.a8o);
	h3d.i9p.e0p = t9z(j7f.e5u);
	h3d.i9p.d9i = t9z(j7f.u4e);
	h3d.i9p.e7o = t9z(j7f.o3w);

	
	h3d.v7h.t7l = a8s(j7f.v7h);

	
	h3d.p9b.s4t = a8s(j7f.m9w);
	h3d.p9b.t5h = a8s(j7f.e2l);
	h3d.p9b.r7n = x6r(j7f.m7j);
	h3d.p9b.g8e = f7z(j7f.n4b, 0);
	h3d.p9b.o8c = x6r(j7f.m1r);
	h3d.p9b.d2w = a3k(j7f.c2d);

	
	h3d.s4t.s4t = a8s(j7f.s4t);

	
	h3d.y0q = x6r(j7f.y0q);
	h3d.g3u = d4m(a8s(j7f.g3u));
	h3d.t4q = p7t(a8s(j7f.t4q));
	h8y(a8s(j7f.h4o), h3d);

	
	let j5y = f7z(j7f.j5y, 0);
	h3d.j5y.x4d(j5y);

  
  h3d.u4j.l1n = j7f.l1n;

	return h3d;
}

function d0n(h3d)
{
	let j7f = new i8o();

	
	j7f.w4g = h3d.b5c.a3h.t7l();
	if (h3d.b5c.v4r.t7l.length)
	{
		j7f.j0v = h3d.b5c.v4r.t7l;
		if (h3d.b5c.v4r.c2w)
		{
			j7f.x9e = h3d.b5c.v4r.c2w;
		}
		if (h3d.b5c.v4r.z0r)
		{
			let j8u = new j6w();
			j8u.z0r = h3d.b5c.v4r.z0r;
			j7f.i0y = w5n(j8u);
		}
		if (h3d.b5c.v4r.v3t)
		{
			j7f.q9l = g4q(h3d.b5c.v4r.v3t);
		}
		if (h3d.b5c.v4r.e9r != y2m.r9e)
		{
			j7f.h1b = b4q(h3d.b5c.v4r.e9r);
		}
	}
	j7f.u2o = v5t(h3d.b5c.q9a);
	j7f.i9e = y0m(h3d.b5c.k5l);
	j7f.j5j = h3d.b5c.s4t;

	
	j7f.z8i = h3d.i6o.a3h.t7l();
	if (h3d.i6o.v4r.t7l.length)
	{
		j7f.s4n = h3d.i6o.v4r.t7l;
		if (h3d.i6o.v4r.c2w)
		{
			j7f.q3k = h3d.i6o.v4r.c2w;
		}
		if (h3d.i6o.v4r.z0r)
		{
			let d9a = new j6w();
			d9a.z0r = h3d.i6o.v4r.z0r;
			j7f.e7e = w5n(d9a);
		}
		if (h3d.i6o.v4r.v3t)
		{
			j7f.w7l = g4q(h3d.i6o.v4r.v3t);
		}
		if (h3d.i6o.v4r.e9r != y2m.r9e)
		{
			j7f.x8y = b4q(h3d.i6o.v4r.e9r);
		}
	}
	j7f.x8m = v5t(h3d.i6o.q9a);
	j7f.y7s = y0m(h3d.i6o.k5l);
	j7f.v7x = h3d.i6o.s4t;

	
	j7f.q9u = h3d.i9p.s4t;
	j7f.h5g = h3d.i9p.b9j;
	j7f.s3f = w5n(h3d.i9p.x4w);
	j7f.r7i = w5n(h3d.i9p.b8s);
	j7f.m5m = j3j(h3d.i9p.n8n);
	j7f.s2n = p6h(h3d.i9p.j9z);
	j7f.o8m = b4q(h3d.i9p.e9r);
	j7f.k9w = t3i(h3d.i9p.type);
	j7f.y3a = p6h(h3d.i9p.q2s);
	j7f.a8o = g4q(h3d.i9p.m5p);
	j7f.e5u = g4q(h3d.i9p.e0p);
	j7f.u4e = g4q(h3d.i9p.d9i);
	j7f.o3w = g4q(h3d.i9p.e7o);

	
	j7f.v7h = h3d.v7h.t7l;

	
	j7f.m9w = h3d.p9b.s4t;
	j7f.e2l = h3d.p9b.t5h;
	j7f.m7j = w5n(h3d.p9b.r7n);
	j7f.n4b = p6h(h3d.p9b.g8e);
	j7f.m1r = w5n(h3d.p9b.o8c);
	j7f.c2d = s6z(h3d.p9b.d2w);

	
	j7f.s4t = h3d.s4t.s4t;

	
	j7f.y0q = w5n(h3d.y0q);
	j7f.g3u = p6q(h3d.g3u);
	j7f.t4q = a7e(h3d.t4q);
	j7f.h4o = w6a(h3d);

	
	j7f.j5y = p6h(h3d.j5y.c0x());

	return j7f;
}

const x3y  					= "\x57\x68\x69\x74\x65";
const g3z					= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d";
const x2d 				= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x4e\x75\x6d\x62\x65\x72";
const r1g 					= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x59\x65\x61\x72";
const a7d 				= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x53\x65\x61\x73\x6f\x6e";
const u9j 			= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x43\x6f\x75\x6e\x74\x72\x79";
const z0x 						= "\x57\x68\x69\x74\x65\x52\x61\x74\x69\x6e\x67";
const y2p 							= "\x57\x68\x69\x74\x65\x54\x69\x6d\x65";
const y1k 							= "\x57\x68\x69\x74\x65\x45\x6c\x6f";
const j3o  						= "\x57\x68\x69\x74\x65\x54\x69\x74\x6c\x65";
const w2v						= "\x57\x68\x69\x74\x65\x43\x6f\x75\x6e\x74\x72\x79";

const m6o						= "\x42\x6c\x61\x63\x6b";
const t1o					= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d";
const a2y 				= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x4e\x75\x6d\x62\x65\x72";
const d4k 					= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x59\x65\x61\x72";
const j8h 				= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x53\x65\x61\x73\x6f\x6e";
const q7w 			= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x43\x6f\x75\x6e\x74\x72\x79";
const e2r 						= "\x42\x6c\x61\x63\x6b\x52\x61\x74\x69\x6e\x67";
const z0t 							= "\x42\x6c\x61\x63\x6b\x54\x69\x6d\x65";
const a0x 							= "\x42\x6c\x61\x63\x6b\x45\x6c\x6f";
const u1r  						= "\x42\x6c\x61\x63\x6b\x54\x69\x74\x6c\x65";
const i4x						= "\x42\x6c\x61\x63\x6b\x43\x6f\x75\x6e\x74\x72\x79";

const m5g 				= "\x45\x76\x65\x6e\x74";
const h8n				= "\x53\x69\x74\x65";
const p2m 			 	= "\x45\x76\x65\x6e\x74\x44\x61\x74\x65";
const m3j 		 	= "\x45\x76\x65\x6e\x74\x45\x6e\x64\x44\x61\x74\x65";
const j7x 			 	= "\x45\x76\x65\x6e\x74\x53\x70\x65\x65\x64";
const w3m 	 	= "\x45\x76\x65\x6e\x74\x43\x61\x74\x65\x67\x6f\x72\x79";
const e0l 		 	= "\x45\x76\x65\x6e\x74\x43\x6f\x75\x6e\x74\x72\x79";
const k7f 			 	= "\x45\x76\x65\x6e\x74\x54\x79\x70\x65";
const w5o 		 	= "\x45\x76\x65\x6e\x74\x52\x6f\x75\x6e\x64\x73";
const w3g 			 	= "\x45\x76\x65\x6e\x74\x54\x65\x61\x6d\x73";
const k9b		 	= "\x45\x76\x65\x6e\x74\x43\x6f\x6d\x70\x6c\x65\x74\x65";
const i1q 	= "\x45\x76\x65\x6e\x74\x54\x68\x72\x65\x65\x50\x6f\x69\x6e\x74\x73";
const b6o	= "\x45\x76\x65\x6e\x74\x42\x6f\x61\x72\x64\x50\x6f\x69\x6e\x74\x73";

const v5h 							= "\x41\x6e\x6e\x6f\x74\x61\x74\x6f\x72";

const t0s 				 		= "\x53\x6f\x75\x72\x63\x65\x54\x69\x74\x6c\x65";
const l3m 				 		= "\x50\x75\x62\x6c\x69\x63\x61\x74\x69\x6f\x6e";
const i3l		 		= "\x53\x6f\x75\x72\x63\x65\x50\x75\x62\x6c\x69\x73\x68\x65\x72";
const n6p		 		= "\x50\x75\x62\x6c\x69\x63\x61\x74\x69\x6f\x6e\x44\x61\x74\x65";
const l3y 				 		= "\x53\x6f\x75\x72\x63\x65\x44\x61\x74\x65";
const m7s 		= "\x53\x6f\x75\x72\x63\x65\x56\x65\x72\x73\x69\x6f\x6e\x4e\x75\x6d\x62\x65\x72";
const f3u 	 		= "\x53\x6f\x75\x72\x63\x65\x56\x65\x72\x73\x69\x6f\x6e\x44\x61\x74\x65";
const h7w 			 		= "\x53\x6f\x75\x72\x63\x65\x51\x75\x61\x6c\x69\x74\x79";

const y2s 					 		    = "\x54\x69\x74\x6c\x65";

const q2l 							 		= "\x44\x61\x74\x65";
const h2v 								= "\x52\x65\x73\x75\x6c\x74";
const m9t 										= "\x45\x43\x4f";
const v3n 									= "\x52\x6f\x75\x6e\x64";

const q4k			 							= "\x54\x61\x67\x73";

const g7g 									= "\x53\x65\x74\x75\x70";
const j0t 										= "\x46\x45\x4e";
const k4i 							= "\x50\x6c\x79\x43\x6f\x75\x6e\x74";

const b1e      							= "\x47\x55\x49\x44";

const r5y = "\x28";
const t8a   = "\x29";
const y1t    = "\x7b";

class x9h
{

constructor()
{
  this.l2q = new s7c();
  this.y7j = new x6l();
  this.m4a = new c2u();
  this.m9n = false;
  this.v8t = false;
  this.d5m = false;
  this.s4r = '';
}

}

class q3c
{

constructor(f7g)
{
	this.i2y = new i8o();
	this.o5k = f7g;
	this.p3w = 0;
	this.g1j = '';
	this.d1o = 0;
	this.y5u = 0;
	this.g3t = '';
	this.y6k = 0;
	this.z4u = false;
	this.n1m = '';
	this.t0j = '';
	this.f8a = null;
	this.q2p = new n1y();
	this.i3m = '';
	this.b8x = false;
 	this.m4u = false;
	this.d6z = false;
}

g7n()
{
  this.y6k = 0;
	let p0b = new j0c();
	this.f8a = p0b.l1h;
	try
	{
		this.x4c();
	}
	catch (err)
	{
	}
	p0b.j5a = c1d(this.i2y);
  p0b.x6w = this.y6k;
	return p0b;
}

x4c()
{
	this.z4u = false;
	this.x7d();
	if (this.z4u)
	{
		this.d4j = t3d(this.t0j);
		this.f8a.k6w(this.d4j, 1);
	}
 	this.a2u();
}

c2b()
{
	if (this.o5k.length == 0)
	{
		return false;
	}
	if (this.p3w >= this.o5k.length)
	{
		return false;
	}
	else
	{
		this.g1j = this.o5k[this.p3w];
		this.d1o = this.g1j.length;
		this.y5u = 0;
		this.p3w++;
		return true;
	}
}

x7d()
{
	this.d6z = false;
	this.m4u = false;
	while (true)
	{
		if (!this.c2b())
		{
			return;
		}
		this.n4s();
		if (!this.v5g())
		{
			return;
		}
		this.v1d();
	}
}


q0z(h7d)
{
	let u6i = this.g3t.substr(1, this.g3t.length - 1);
	return u6i.toUpperCase() === h7d.toUpperCase();
}

a2u()
{
 	if (this.g3t.length == 0) return;
	this.b8x = false;

	while (this.g3t[0] == '{')
	{
		let s7u = this.x5d();
    let y9a = new x9h();
		this.v0g(s7u, y9a);
    if (!y9a.l2q.y0l())
		{
			this.f8a.j8l(y9a.l2q);
		}
 		if (!y9a.y7j.y0l())
		{
			this.f8a.e0q(y9a.y7j);
		}
		if (!y9a.m4a.y0l())
		{
			this.f8a.y7k(y9a.m4a);
		}
 		s7u = y9a.s4r.trim();
    if (s7u.length)
    {
      
      
      if (s7u.startsWith("\x5b\x25\x61") && s7u.length > 7)
      {
        s7u = s7u.substr(7, s7u.length).trim();
      }
      let d1y = this.f8a.d1y();
      if (d1y.length)
      {
        d1y += ' ';
      }
      d1y += s7u;
      this.f8a.f6u(d1y);
		}
		this.n4s();
		if (this.g3t.length == 0)
		{
			return;
		}
	}
	this.q0t(this.f8a.f9i(), this.f8a.d4j());
}

q0t(l2s, p8a)
{
  let z4w = l2s.n7y();
  let x1l = p8a.n7y();

	let l1d = null;
 	let h2p = new d5f();

	do
	{
		if (this.g3t == r5y)
		{
			if (!l1d)
			{
				throw "\x65\x72\x72\x6f\x72";
			}
			if (!this.n4s())
			{
				throw "\x65\x72\x72\x6f\x72";
			}

 			x1l.q3y(z4w.x6s.i0h());
			x1l.g7d(h2p);
			this.f8a.q3y(z4w); 
      this.q0t(z4w, x1l);
			this.f8a.t2m(z4w); 
			x1l.t2m(z4w.x6s.i0h());

			while (this.n4s())
			{
				if (this.g3t != r5y)
				{
					break;
				}
				if (!this.n4s())
				{
					throw "\x65\x72\x72\x6f\x72";
				}
        x1l.q3y(z4w.x6s.i0h());
				x1l.g7d(h2p);
				this.f8a.q3y(z4w); 
				this.q0t(z4w, x1l);
				this.f8a.t2m(z4w);  
				x1l.t2m(z4w.x6s.i0h());
			}
		}

		if (this.g3t == t8a)
		{
			break;
		}

		if (
			this.g3t == "\x31\x2d\x30" ||
			this.g3t == "\x32\x2d\x30" ||
			this.g3t == "\x30\x2d\x31" ||
			this.g3t == "\x30\x2d\x32" ||
			this.g3t == "\x31\x2f\x32\x2d\x31\x2f\x32" ||
			this.g3t == "\x31\x2d\x31" ||
			this.g3t == "\x2a" ||
			this.g3t == "\x2a\x2a" ||
			this.g3t == "\x2d\x2a" ||
			this.g3t == "\x31\x2d\x30\x2a" ||
			this.g3t == "\x32\x2d\x30\x2a" ||
			this.g3t == "\x30\x2d\x31\x2a" ||
			this.g3t == "\x30\x2d\x32\x2a" ||
			this.g3t == "\x31\x2f\x32\x2d\x31\x2f\x32\x2a" ||
			this.g3t == "\x31\x2d\x31\x2a" ||
			this.g3t == "\x32\x2d\x30\x30\x2a" ||
			this.g3t == "\x30\x30\x2d\x32\x2a")
			break;

		if (this.g3t[0] == '$')
		{
			if (!l1d)
			{
				throw "\x65\x72\x72\x6f\x72";
			}
			let a4t = g9x(this.g3t);
			if (a4t != x5i.r9e)
			{
				l1d.r9g(a4t);
				continue;
			}
			let style = z9w(this.g3t);
			if (style != v9v.r9e)
			{
				l1d.d5g(style);
				continue;
			}
			let q4y = y7g(this.g3t);
			if (q4y != l8k.r9e)
			{
				l1d.b6i(q4y);
				continue;
			}
			let o2d = h3t(this.g3t);
			if (o2d != x2n.r9e)
			{
				l1d.p2g(o2d);
				continue;
			}
			continue;
		}
		if (this.g3t[0] == '{')
		{
			let s7u = this.x5d();
      let y9a = new x9h();
  		this.v0g(s7u, y9a);
      if (!y9a.l2q.y0l())
      {
		  	if (l1d)
			  {
				  l1d.h6d(y9a.l2q);
				}
			}
   		if (!y9a.y7j.y0l())
      {
				if (l1d)
				{
					l1d.i7y(y9a.y7j);
				}
			}
   		if (!y9a.m4a.y0l())
      {
				if (l1d)
				{
					l1d.b6n(y9a.m4a);
				}
			}
      if (y9a.v8t)
      {
				if (l1d)
				{
					l1d.j0g();
				}
			}
      if (y9a.d5m)
      {
				if (l1d)
				{
					l1d.h7c();
				}
			}
   		s7u = y9a.s4r.trim();
      if (!s7u.length)
      {
        continue;
      }
			if (l1d)
			{
        let f3w = l1d.f3w();
        if (f3w.length)
        {
          f3w += ' ';
        }
        f3w += s7u;
				l1d.q1o(f3w);
			}
			else
			{
        if (this.i3m.length)
        {
   				this.i3m += ' ';
        }
				this.i3m += s7u;
				this.b8x = true;
			}
			continue;
		}
		if (!this.m1p())
		{
			continue;
		}
		let f1k = false;
		if (this.g3t[this.g3t.length] == '*')
		{
			this.g3t = this.g3t.substr(0, this.g3t.length - 1);
			f1k = true;
		}
 		let c8w = this.m7d(this.g3t);
    let i0h = p4e(x1l, this.g3t);
 		h2p = x1l.h2p();
		x1l.t2m(i0h);
		let x6s = i5c(i0h);
    x6s.d5g(c8w);
    this.f8a.p4g(z4w, x6s);
		l1d = z4w.x6s;
		if (this.b8x)
		{
			l1d.j9h(this.i3m);
			this.b8x = false;
      this.i3m = '';
		}
		if (f1k)
		{
			break;
		}
	} while (this.n4s());
}

m7d(u6i)
{
	if (u6i.endsWith("\x3f\x3f"))
	{
		u6i = u6i.subString(0, u6i.length-2);
		return v9v.t2l;
	}
	else if (u6i.endsWith("\x21\x21"))
	{
		u6i = u6i.subString(0, u6i.length-2);
		return v9v.w1k;
	}
	else if (u6i.endsWith("\x3f\x21"))
	{
		u6i = u6i.subString(0, u6i.length-2);
		return v9v.b7l;
	}
	else if (u6i.endsWith("\x21\x3f"))
	{
		u6i = u6i.subString(0, u6i.length-2);
		return v9v.f5x;
	}
	else if (u6i.endsWith("\x3f"))
	{
		u6i = u6i.subString(0, u6i.length-1);
		return v9v.p3t;
	}
	else if (u6i.endsWith("\x21"))
	{
		u6i = u6i.subString(0, u6i.length-1);
		return v9v.o7l;
	}
	else
	{
		return v9v.r9e;
	}
}

m1p()
{
	let q7a = this.g3t.length;
	let z4w = -1;
	for (let i = 0; i < q7a; i++)
	{
		if (this.g3t[i] == '.')
		{
			z4w = i;
		}
	}
	if (z4w != -1)
	{
		this.g3t = this.g3t.substr(z4w + 1 , q7a);
	}
	return this.g3t.length != 0;
}

n4s()
{
	this.g3t = "";
	let h9k = '';
	let index = 0;
	let q7a = 0;
	while (true)
	{
		let b6d = 0;
		if (this.y5u < this.d1o)
		{
			b6d = this.g1j[this.y5u];
		}
		else
		{
			b6d = 0;
		}
		if (!b6d)
		{
			if (q7a)
			{
				break;
			}
			if (!this.c2b())
			{
				return false;
			}
			continue;
		}
		if (b6d == ';')
		{
			if (!this.c2b())
			{
				return false;
			}
			continue;
		}
		if (b6d == '(')
		{
			if (q7a)
			{
				break;
			}
			else
			{
				this.y5u++;
				this.g3t = r5y;
				return true;
			}
		}
		if (b6d == ')')
		{
			if (q7a)
			{
				break;
			}
			else
			{
				this.y5u++;
				this.g3t = t8a;
				return true;
			}
		}
		if (b6d == '{')
		{
			if (q7a)
			{
				break;
			}
			else
			{
				this.y5u++;
				this.g3t = y1t;
				return true;
			}
		}
		if (b6d == ' ' || b6d == '\r' || b6d == '\n')
		{
			if (q7a)
			{
				this.y5u++;
				break;
			}
			else
			{
				this.y5u++;
				continue;
			}
		}
		h9k += b6d;
		index++;
		q7a++;
		this.y5u++;
	}
	if (index)
	{
		this.g3t += h9k;
	}
	return this.g3t.length != 0;
}

x5d()
{
	let u6i = '';
	let h9k = '';
	let index = 0;
	let f8e = 0;
	while (true)
	{
		let b6d = 0;
		if (this.y5u < this.d1o)
		{
			b6d = this.g1j[this.y5u];
		}
		else
		{
			b6d = 0;
		}
		if (!b6d)
		{
			if (!this.c2b())
			{
				break;
			}
			if (index > 0)
			{
				h9k += ' '; 
				index++;
			}
			continue;
		}
		if (b6d == '{')
		{
			f8e++;
		}
		if (b6d == '}')
		{
			if (f8e)
			{
				f8e--;
			}
			else
			{
				this.y5u++;
				break;
			}
		}
		h9k += b6d;
		index++;
		this.y5u++;
	}
	if (index)
	{
		u6i += h9k;
	}
	return u6i.trim();
}

w3s()
{
	this.n1m = "";

	let z4c = 0;
	let q7a = this.g1j.length;
	for (let i = q7a - 1; i >= 0; i--)
	{
		if (this.g1j[i] == ']')
		{
			z4c = i;
			break;
		}
	}
	let index = 0;
	let x8h = false;
	let h9k = '';
	while (true)
	{
		let b6d = 0;
		if (this.y5u < this.d1o)
		{
			b6d = this.g1j[this.y5u];
		}
		else
		{
			b6d = 0;
		}
		if (!b6d)
		{
			if (!this.c2b())
			{
				break;
			}
			continue;
		}
		if (b6d == '\"')
		{
			x8h = true;
			this.y5u++;
			continue;
		}
		if (b6d == ']')
		{
			if (this.y5u == z4c)
			{
				this.y5u++;
				break;
			}
		}
		if (x8h)
		{
			h9k += b6d;
			index++;
		}
		this.y5u++;
	}
	if (index)
	{
		this.n1m += h9k;
	}
}

v5g()
{
	if (this.g3t.length == 0)
	{
		return false;
	}
	if (this.g3t[0] != '[')
	{
		return false;
	}
	
	let index = this.y5u;
	let u0f = false;
	while (index < this.d1o)
	{
		let b6d = this.g1j[index++];
		if (b6d == '\"' && this.g1j[index] == ']')
		{
			index++;
			u0f = true;
			continue;
		}
		if (b6d == '\r' || b6d == '\n')
		{
			break;
		}
		if (u0f)
		{
			u0f = false;
			break;
		}
	}
	return u0f;
}

v1d()
{
	
	if (this.q0z(x3y))
	{
		this.w3s();
		this.i2y.w4g = this.n1m;
		return;
	}
	if (this.q0z(g3z))
	{
		this.w3s();
		this.i2y.j0v = this.n1m;
		return;
	}
	if (this.q0z(x2d))
	{
		this.w3s();
		this.i2y.x9e = this.n1m;
		return;
	}
	if (this.q0z(r1g))
	{
		this.w3s();
		this.i2y.i0y = this.n1m;
		return;
	}
	if (this.q0z(a7d))
	{
		this.w3s();
		this.i2y.q9l = this.n1m;
		return;
	}
	if (this.q0z(u9j))
	{
		this.w3s();
		this.i2y.h1b = this.n1m;
		return;
	}
	if (this.q0z(y1k) || this.q0z(z0x))
	{
		this.w3s();
		this.i2y.u2o = this.n1m;
		return;
	}
	if (this.q0z(y2p))
	{
		this.w3s();
		this.i2y.i9e = this.n1m;
		return;
	}
	if (this.q0z(j3o))
	{
		this.w3s();
		this.i2y.j5j = this.n1m;
		return;
	}
	if (this.q0z(w2v))
	{
		this.w3s();
		this.i2y.e3i = this.n1m;
		return;
	}

	
	if (this.q0z(m6o))
	{
		this.w3s();
		this.i2y.z8i = this.n1m;
		return;
	}
	if (this.q0z(t1o))
	{
		this.w3s();
		this.i2y.s4n = this.n1m;
		return;
	}
	if (this.q0z(a2y))
	{
		this.w3s();
		this.i2y.q3k = this.n1m;
		return;
	}
	if (this.q0z(d4k))
	{
		this.w3s();
		this.i2y.e7e = this.n1m;
		return;
	}
	if (this.q0z(j8h))
	{
		this.w3s();
		this.i2y.w7l = this.n1m;
		return;
	}
	if (this.q0z(q7w))
	{
		this.w3s();
		this.i2y.x8y = this.n1m;
		return;
	}
	if (this.q0z(a0x) || this.q0z(e2r))
	{
		this.w3s();
		this.i2y.x8m = this.n1m;
		return;
	}
	if (this.q0z(z0t))
	{
		this.w3s();
		this.i2y.y7s = this.n1m;
		return;
	}
	if (this.q0z(u1r))
	{
		this.w3s();
		this.i2y.v7x = this.n1m;
		return;
	}
	if (this.q0z(i4x))
	{
		this.w3s();
		this.i2y.x1z = this.n1m;
		return;
	}

	
	if (this.q0z(m5g))
	{
		this.w3s();
		this.i2y.q9u = this.n1m;
		return;
	}
	if (this.q0z(h8n))
	{
		this.w3s();
		this.i2y.h5g = this.n1m;
		return;
	}
	if (this.q0z(p2m))
	{
		this.w3s();
		this.i2y.s3f = this.n1m;
		return;
	}
	if (this.q0z(m3j))
	{
		this.w3s();
		this.i2y.r7i = this.n1m;
		return;
	}
	if (this.q0z(j7x))
	{
		this.w3s();
		this.i2y.m5m = this.n1m;
		return;
	}
	if (this.q0z(w3m))
	{
		this.w3s();
		this.i2y.s2n = this.n1m;
		return;
	}
	if (this.q0z(e0l))
	{
		this.w3s();
		this.i2y.o8m = this.n1m;
		return;
	}
	if (this.q0z(k7f))
	{
		this.w3s();
		this.i2y.k9w = this.n1m;
		return;
	}
	if (this.q0z(w5o))
	{
		this.w3s();
		this.i2y.y3a = this.n1m;
		return;
	}
	if (this.q0z(w3g))
	{
		this.w3s();
		this.i2y.a8o = this.n1m;
		return;
	}
	if (this.q0z(k9b))
	{
		this.w3s();
		this.i2y.e5u = this.n1m;
		return;
	}
	if (this.q0z(i1q))
	{
		this.w3s();
		this.i2y.u4e = this.n1m;
		return;
	}
	if (this.q0z(b6o))
	{
		this.w3s();
		this.i2y.o3w = this.n1m;
		return;
	}

	
	if (this.q0z(v5h))
	{
		this.w3s();
		this.i2y.v7h = this.n1m;
		return;
	}

	
	if (this.q0z(t0s))
	{
		this.w3s();
		this.i2y.m9w = this.n1m;
		return;
	}
	if (this.q0z(l3m))
	{
		this.w3s();
		this.i2y.m9w = this.n1m;
		return;
	}
	if (this.q0z(i3l))
	{
		this.w3s();
		this.i2y.e2l = this.n1m;
		return;
	}
	if (this.q0z(l3y))
	{
		this.w3s();
		this.i2y.m7j = this.n1m;
		return;
	}
	if (this.q0z(n6p))
	{
		this.w3s();
		this.i2y.m7j = this.n1m;
		return;
	}
	if (this.q0z(m7s))
	{
		this.w3s();
		this.i2y.n4b = this.n1m;
		return;
	}
	if (this.q0z(f3u))
	{
		this.w3s();
		this.i2y.m1r = this.n1m;
		return;
	}
	if (this.q0z(h7w))
	{
		this.w3s();
		this.i2y.c2d = this.n1m;
		return;
	}

	
	if (this.q0z(y2s))
	{
		this.w3s();
		this.i2y.s4t = this.n1m;
		return;
	}

	
	if (this.q0z(q2l))
	{
		this.w3s();
		this.i2y.y0q = this.n1m;
		return;
	}
	if (this.q0z(h2v))
	{
		this.w3s();
		this.i2y.g3u = this.n1m;
		return;
	}
	if (this.q0z(m9t))
	{
		this.w3s();
		this.i2y.t4q = this.n1m;
		return;
	}
	if (this.q0z(v3n))
	{
		this.w3s();
		this.i2y.h4o = this.n1m;
		return;
	}

	
	if (this.q0z(q4k))
	{
		this.w3s();
		this.i2y.j5y = this.n1m;
		return;
	}

	
	if (this.q0z(g7g))
	{
		this.w3s();
		return;
	}
	if (this.q0z(j0t))
	{
		this.w3s();
		if (this.n1m.length == 0 || this.n1m == "\x3f")
		{
			return;
		}
		this.z4u = true;
		this.t0j = this.n1m;
		return;
	}
	if (this.q0z(k4i))
	{
		this.w3s();
		this.y6k = i6u(this.n1m, 0);
		return;
	}
  
 	if (this.q0z(b1e))
	{
		this.w3s();
		this.i2y.l1n = this.n1m;
		return;
	}

}

u5r(s7u)
{
	let c0j = new s7c();
	let u6i = s7u.substr(6, s7u.length - 6);
	let o9x = u6i.split("\x2c");
	for (const s of o9x)
	{
		if (s.length < 5)
		{
			continue;
		}
		let s2i = v5s(s.substr(1, 2));
		let e3m = v5s(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let y9c = p9c(s2i, e3m, c3j.e6b);
			c0j.add(y9c);
		}
		else if (s[0] == 'G')
		{
			let y9c = p9c(s2i, e3m, c3j.q8a);
			c0j.add(y9c);
		}
		else if (s[0] == 'Y')
		{
			let y9c = p9c(s2i, e3m, c3j.y8v);
			c0j.add(y9c);
		}
	}
	return c0j;
}

o5h(s7u)
{
	let f9y = new x6l();
	let u6i = s7u.substr(6, s7u.length - 6);
	let o9x = u6i.split("\x2c");
	for (const s of o9x)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let n4z = v5s(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let c1n = i1a(n4z, c7m.s0p);
			f9y.add(c1n);
		}
		else if (s[0] == 'G')
		{
      let c1n = i1a(n4z, c7m.l7d);
			f9y.add(c1n);
		}
		else if (s[0] == 'Y')
		{
      let c1n = i1a(n4z, c7m.q1l);
			f9y.add(c1n);
		}
	}
	return f9y;
}

o2k(s7u)
{
	let u6i = s7u.substr(6, s7u.length - 6);
	let z4w = u6i.indexOf("\x5d");
	if (z4w != -1)
	{
		let m4a = new c2u();
		let q4y = i6u(u6i.substr(0, z4w), 0);
		m4a.x4d(q4y);
		return m4a;
	}
	else
	{
		return new c2u();
	}
}


v0g(s7u, y9a)
{
	if (
		s7u.startsWith("\x5b\x25\x63\x61\x6c") ||
    s7u.startsWith("\x5b\x25\x63\x73\x62") ||
		s7u.startsWith("\x5b\x25\x63\x73\x6c") ||
		s7u.startsWith("\x5b\x25\x6d\x64\x6c") ||
		s7u.startsWith("\x5b\x25\x65\x76\x70") ||
		s7u.startsWith("\x5b\x25\x65\x76\x61\x6c") ||
		s7u.startsWith("\x5b\x25\x65\x6d\x74") ||
		s7u.startsWith("\x5b\x25\x74\x71\x75") ||
		s7u.startsWith("\x5b\x25\x74\x71\x75") ||
		s7u.startsWith("\x5b\x25\x70\x77\x73") ||
		s7u.startsWith("\x5b\x25\x70\x74\x68") ||
		s7u.startsWith("\x5b\x25\x65\x6f\x67"))
	{
		let o7o = 0;
		{
     	let j7v = s7u.indexOf("\x5b\x25\x63\x61\x6c");
			if (j7v != -1)
			{
        let f4i = s7u.indexOf("\x5d", j7v);
				if (f4i != -1)
				{
     			let q7n = s7u.substring(j7v, f4i + 1);
					y9a.l2q = this.u5r(q7n).n7y();
					if (f4i > o7o) o7o = f4i;
				}
			}
		}
		{
     	let j7v = s7u.indexOf("\x5b\x25\x63\x73\x62");
   		if (j7v != -1)
			{
        let f4i = s7u.indexOf("\x5d", j7v);
				if (f4i != -1)
				{
          let e8p = s7u.substring(j7v, f4i + 1);
					y9a.y7j = this.o5h(e8p).n7y();
					if (f4i > o7o) o7o = f4i;
				}
			}
		}
		{
      let j7v = s7u.indexOf("\x5b\x25\x63\x73\x6c");
			if (j7v != -1)
			{
        let f4i = s7u.indexOf("\x5d", j7v);
				if (f4i != -1)
				{
          let e8p = s7u.substring(j7v, f4i + 1);
					y9a.y7j = this.o5h(e8p).n7y();
					if (f4i > o7o) o7o = f4i;
				}
			}
		}
		{
      let j7v = s7u.indexOf("\x5b\x25\x6d\x64\x6c");
			if (j7v != -1)
			{
        let f4i = s7u.indexOf("\x5d", j7v);
				if (f4i != -1)
				{
          let g9c = s7u.substring(j7v, f4i + 1);
					y9a.m4a = this.o2k(g9c).n7y();
					if (f4i > o7o) o7o = f4i;
				}
			}
		}
		{
      let j7v = s7u.indexOf("\x5b\x25\x65\x76\x70");
			if (j7v != -1)
			{
        let f4i = s7u.indexOf("\x5d", j7v);
				if (f4i != -1)
				{
					if (f4i > o7o) o7o = f4i;
				}
			}
		}
		{
      let j7v = s7u.indexOf("\x5b\x25\x65\x76\x61\x6c");
			if (j7v != -1)
			{
        let f4i = s7u.indexOf("\x5d", j7v);
				if (f4i != -1)
				{
					if (f4i > o7o) o7o = f4i;
				}
			}
		}
		{
      let j7v = s7u.indexOf("\x5b\x25\x65\x6d\x74");
			if (j7v = -1)
			{
        let f4i = s7u.indexOf("\x5d", j7v);
				if (f4i != -1)
				{
					if (f4i > o7o) o7o = f4i;
				}
			}
		}
		{
      let j7v = s7u.indexOf("\x5b\x25\x74\x71\x75");
			if (j7v != -1)
			{
        let f4i = s7u.indexOf("\x5d", j7v);
				if (f4i != -1)
				{
					if (f4i > o7o) o7o = f4i;
				}
			}
		}
		{
      let j7v = s7u.indexOf("\x5b\x25\x70\x77\x73");
			if (j7v != -1)
			{
        let f4i = s7u.indexOf("\x5d", j7v);
				if (f4i != -1)
				{
          y9a.m9n = true;
					if (f4i > o7o) o7o = f4i;
				}
			}
		}
		{
      let j7v = s7u.indexOf("\x5b\x25\x70\x74\x68");
			if (j7v != -1)
			{
        let f4i = s7u.indexOf("\x5d", j7v);
				if (f4i != -1)
				{
          y9a.v8t = true;
					if (f4i > o7o) o7o = f4i;
				}
			}
		}
		{
      let j7v = s7u.indexOf("\x5b\x25\x65\x6f\x67");
			if (j7v != -1)
			{
        let f4i = s7u.indexOf("\x5d", j7v);
				if (f4i != -1)
				{
					y9a.d5m = true; 
					if (f4i > o7o) o7o = f4i;
				}
			}
		}
    y9a.s4r = s7u.substring(o7o + 1);
	}
	else
	{
		y9a.s4r = s7u;
	}
}

}

class w6u
{

constructor()
{
  this.x6w = 0;
	this.j5a = new i8o();
	this.l1h = new g5x();
}

n7y()
{
	let p5j = new w6u();
  p5j.x6w = this.x6w;
	p5j.j5a = this.j5a.n7y();
	p5j.l1h = this.l1h.n7y();
	return p5j;
}

}

class i8o
{

constructor()
{
	this.w4g = '';
	this.j0v = '';
	this.x9e = '';
	this.i0y = '';
	this.q9l = '';
	this.h1b = '';
	this.u2o = '';
	this.i9e = '';
	this.j5j = '';
  this.e3i = '';
	this.z8i = '';
	this.s4n = '';
	this.q3k = '';
	this.e7e = '';
	this.w7l = '';
	this.x8y = '';
	this.x8m = '';
	this.y7s = '';
	this.v7x = '';
  this.x1z = '';
	this.q9u = '';
	this.h5g = '';
	this.s3f = '';
	this.r7i = '';
	this.m5m = '';
	this.s2n = '';
	this.o8m = '';
	this.k9w = '';
	this.y3a = '';
	this.a8o = '';
	this.e5u = '';
	this.u4e = '';
	this.o3w = '';
	this.v7h = '';
	this.m9w = '';
	this.e2l = '';
	this.m7j = '';
	this.n4b = '';
	this.m1r = '';
	this.c2d = '';
	this.s4t = '';
	this.y0q = '';
	this.g3u = '';
	this.t4q = '';
	this.h4o = '';
	this.j5y = '';
  this.l1n = '';
}

n7y()
{
	let v0d = new i8o();

	v0d.w4g = this.w4g;
	v0d.j0v = this.j0v;
	v0d.x9e = this.x9e;
	v0d.i0y = this.i0y;
	v0d.q9l = this.q9l;
	v0d.h1b = this.h1b;
	v0d.u2o = this.u2o;
	v0d.i9e = this.i9e;
	v0d.j5j = this.j5j;
	v0d.e3i = this.e3i;

	v0d.z8i = this.z8i;
	v0d.s4n = this.s4n;
	v0d.q3k = this.q3k;
	v0d.e7e = this.e7e;
	v0d.w7l = this.w7l;
	v0d.x8y = this.x8y;
	v0d.x8m = this.x8m;
	v0d.y7s = this.y7s;
	v0d.v7x = this.v7x;
	v0d.x1z = this.x1z;

	v0d.q9u = this.q9u;
	v0d.h5g = this.h5g;
	v0d.s3f = this.s3f;
	v0d.r7i = this.r7i;
	v0d.m5m = this.m5m;
	v0d.s2n = this.s2n;
	v0d.o8m = this.o8m;
	v0d.k9w = this.k9w;
	v0d.y3a = this.y3a;
	v0d.a8o = this.a8o;
	v0d.e5u = this.e5u;
	v0d.u4e = this.u4e;
	v0d.o3w = this.o3w;

	v0d.v7h = this.v7h;

	v0d.m9w = this.m9w;
	v0d.e2l = this.e2l;
	v0d.m7j = this.m7j;
	v0d.n4b = this.n4b;
	v0d.m1r = this.m1r;
	v0d.c2d = this.c2d;

	v0d.s4t = this.s4t;

	v0d.y0q = this.y0q;
	v0d.g3u = this.g3u;
	v0d.t4q = this.t4q;
	v0d.h4o = this.h4o;

	v0d.j5y = this.j5y;
 	v0d.l1n = this.l1n;

	return v0d;
}

}


const f1h =
[
		[ y2m.r9e, 				  									"",											            "", 																	"",   ""    ],
		[ y2m.f4v, 										  "\x41\x66\x67\x68\x61\x6e\x69\x73\x74\x61\x6e",											"\x41\x66\x67\x68\x61\x6e\x69\x73\x74\x61\x6e", 												"\x61\x66", "\x41\x46\x47" ],
		[ y2m.a8u, 									 	"\x41\x6c\x61\x6e\x64\x49\x73\x6c\x61\x6e\x64\x73",										  "\x41\x6c\x61\x6e\x64", 															"\x61\x78", "\x41\x4c\x41" ],
		[ y2m.c3l,  											 	"\x41\x6c\x62\x61\x6e\x69\x61",													"\x41\x6c\x62\x61\x6e\x69\x61", 														"\x61\x6c", "\x41\x4c\x42" ],
		[ y2m.b2d,  											 	"\x41\x6c\x67\x65\x72\x69\x61",													"\x41\x6c\x67\x65\x72\x69\x61", 														"\x64\x7a", "\x44\x5a\x41" ],
		[ y2m.f5p,  								 	"\x41\x6d\x65\x72\x69\x63\x61\x6e\x53\x61\x6d\x6f\x61",										"\x41\x6d\x65\x72\x69\x63\x61\x6e\x20\x53\x61\x6d\x6f\x61", 										"\x61\x73", "\x41\x53\x4d" ],
		[ y2m.u2k,  											 	"\x41\x6e\x64\x6f\x72\x72\x61",													"\x41\x6e\x64\x6f\x72\x72\x61", 														"\x61\x64", "\x41\x4e\x44" ],
		[ y2m.x4s,                           "\x41\x6e\x67\x6f\x6c\x61",													  "\x41\x6e\x67\x6f\x6c\x61", 														"\x61\x6f", "\x41\x47\x4f" ],
		[ y2m.a3y,  											  "\x41\x6e\x67\x75\x69\x6c\x6c\x61",												  "\x41\x6e\x67\x75\x69\x6c\x6c\x61", 													"\x61\x69", "\x41\x49\x41" ],
		[ y2m.z8s,  										  "\x41\x6e\x74\x61\x72\x63\x74\x69\x63\x61",											  "\x41\x6e\x74\x61\x72\x63\x74\x69\x63\x61", 												"\x61\x71", "\x41\x54\x41" ],
		[ y2m.s9h,  								  "\x41\x6e\x74\x69\x67\x75\x61\x42\x61\x72\x62\x75\x64\x61",									  "\x41\x6e\x74\x69\x67\x75\x61\x20\x26\x20\x42\x61\x72\x62\x75\x64\x61", 									"\x61\x67", "\x41\x54\x47" ],
		[ y2m.x2e,  										 	"\x41\x72\x67\x65\x6e\x74\x69\x6e\x61",												"\x41\x72\x67\x65\x6e\x74\x69\x6e\x61", 													"\x61\x72", "\x41\x52\x47" ],
		[ y2m.e3c,  											 	"\x41\x72\x6d\x65\x6e\x69\x61",													"\x41\x72\x6d\x65\x6e\x69\x61",														"\x61\x6d", "\x41\x52\x4d" ],
		[ y2m.o3z,  												 	"\x41\x72\x75\x62\x61",														"\x41\x72\x75\x62\x61",															"\x61\x77", "\x41\x42\x57" ],
		[ y2m.g6i,  										 	"\x41\x75\x73\x74\x72\x61\x6c\x69\x61",												"\x41\x75\x73\x74\x72\x61\x6c\x69\x61",													"\x61\x75", "\x41\x55\x53" ],
		[ y2m.s9p,  											 	"\x41\x75\x73\x74\x72\x69\x61",													"\x41\x75\x73\x74\x72\x69\x61",											 			"\x61\x74", "\x41\x55\x54" ],
		[ y2m.a1b,  										  "\x41\x7a\x65\x72\x62\x61\x69\x6a\x61\x6e",											  "\x41\x7a\x65\x72\x62\x61\x69\x6a\x61\x6e",													"\x61\x7a", "\x41\x5a\x45" ],
		[ y2m.j3b,  											 	"\x42\x61\x68\x61\x6d\x61\x73",													"\x42\x61\x68\x61\x6d\x61\x73",														"\x62\x73", "\x42\x48\x53" ],
		[ y2m.z2d,  											 	"\x42\x61\x68\x72\x61\x69\x6e",													"\x42\x61\x68\x72\x61\x69\x6e",														"\x62\x68", "\x42\x48\x52" ],
		[ y2m.e6v,  										  "\x42\x61\x6e\x67\x6c\x61\x64\x65\x73\x68",											  "\x42\x61\x6e\x67\x6c\x61\x64\x65\x73\x68",													"\x62\x64", "\x42\x47\x44" ],
		[ y2m.q1s,  											  "\x42\x61\x72\x62\x61\x64\x6f\x73",												  "\x42\x61\x72\x62\x61\x64\x6f\x73",														"\x62\x62", "\x42\x52\x42" ],
		[ y2m.p3n,  								 	"\x42\x61\x73\x71\x75\x65\x43\x6f\x75\x6e\x74\x72\x79",	 									"\x42\x61\x73\x71\x75\x65\x20\x43\x6f\x75\x6e\x74\x72\x79",     								"\x78\x31", "\x58\x58\x31" ], 
		[ y2m.l2x,  											 	"\x42\x65\x6c\x61\x72\x75\x73",													"\x42\x65\x6c\x61\x72\x75\x73",														"\x62\x79", "\x42\x4c\x52" ],
		[ y2m.b2u,  											 	"\x42\x65\x6c\x67\x69\x75\x6d",													"\x42\x65\x6c\x67\x69\x75\x6d",														"\x62\x65", "\x42\x45\x4c" ],
		[ y2m.y9l,  												  "\x42\x65\x6c\x69\x7a\x65",													  "\x42\x65\x6c\x69\x7a\x65",															"\x62\x7a", "\x42\x4c\x5a" ],
		[ y2m.q5b,  												 	"\x42\x65\x6e\x69\x6e",														"\x42\x65\x6e\x69\x6e",															"\x62\x6a", "\x42\x45\x4e" ],
		[ y2m.z4v,  											 	"\x42\x65\x72\x6d\x75\x64\x61",													"\x42\x65\x72\x6d\x75\x64\x61",														"\x62\x6d", "\x42\x4d\x55" ],
		[ y2m.s3a,  												  "\x42\x68\x75\x74\x61\x6e",													  "\x42\x68\x75\x74\x61\x6e",															"\x62\x74", "\x42\x54\x4e" ],
		[ y2m.n8j,  												"\x42\x6f\x6c\x69\x76\x69\x61",													"\x42\x6f\x6c\x69\x76\x69\x61",														"\x62\x6f", "\x42\x4f\x4c" ],
		[ y2m.u3g,  						  "\x42\x6f\x73\x6e\x69\x61\x48\x65\x72\x7a\x65\x67\x6f\x76\x69\x6e\x61",       				  "\x42\x6f\x73\x6e\x69\x61\x20\x26\x20\x48\x65\x72\x7a\x65\x67\x6f\x76\x69\x6e\x61", 							"\x62\x61", "\x42\x49\x48" ], 
		[ y2m.x7c,  											  "\x42\x6f\x74\x73\x77\x61\x6e\x61",                      	  "\x42\x6f\x74\x73\x77\x61\x6e\x61",														"\x62\x77", "\x42\x57\x41" ],
		[ y2m.m5i,  									  "\x42\x6f\x75\x76\x65\x74\x49\x73\x6c\x61\x6e\x64",                 		"\x42\x6f\x75\x76\x65\x74",															"\x62\x76", "\x42\x56\x54" ],
		[ y2m.b3r,  												  "\x42\x72\x61\x7a\x69\x6c",                        	  "\x42\x72\x61\x7a\x69\x6c",															"\x62\x72", "\x42\x52\x41" ],
		[ y2m.a5e,  	 	"\x42\x72\x69\x74\x69\x73\x68\x49\x6e\x64\x69\x61\x6e\x4f\x63\x65\x61\x6e\x54\x65\x72\x72\x69\x74\x6f\x72\x79",			"\x42\x72\x69\x74\x69\x73\x68\x20\x49\x6e\x64\x69\x61\x6e\x20\x4f\x63\x65\x61\x6e\x20\x54\x65\x72\x72\x69\x74\x6f\x72\x79", 		"\x69\x6f", "\x49\x4f\x54" ],
		[ y2m.z8u, 							 	"\x42\x72\x75\x6e\x65\x69\x44\x61\x72\x75\x73\x73\x61\x6c\x61\x6d",								  "\x42\x72\x75\x6e\x65\x69",															"\x62\x6e", "\x42\x52\x4e" ], 
		[ y2m.f0k,  											  "\x42\x75\x6c\x67\x61\x72\x69\x61",												  "\x42\x75\x6c\x67\x61\x72\x69\x61", 													"\x62\x67", "\x42\x47\x52" ],
		[ y2m.x2h, 										  "\x42\x75\x72\x6b\x69\x6e\x61\x46\x61\x73\x6f",											"\x42\x75\x72\x6b\x69\x6e\x61\x20\x46\x61\x73\x6f",												"\x62\x66", "\x42\x46\x41" ],
		[ y2m.x0c,  											 	"\x42\x75\x72\x75\x6e\x64\x69",													"\x42\x75\x72\x75\x6e\x64\x69",														"\x62\x69", "\x42\x44\x49" ],
		[ y2m.w9z,  											  "\x43\x61\x6d\x62\x6f\x64\x69\x61",												  "\x43\x61\x6d\x62\x6f\x64\x6a\x61",														"\x6b\x68", "\x4b\x48\x4d" ],
		[ y2m.v5x,  											  "\x43\x61\x6d\x65\x72\x6f\x6f\x6e",												  "\x43\x61\x6d\x65\x72\x6f\x6f\x6e",														"\x63\x6d", "\x43\x4d\x52" ],
		[ y2m.x7v,  												  "\x43\x61\x6e\x61\x64\x61",													  "\x43\x61\x6e\x61\x64\x61",															"\x63\x61", "\x43\x41\x4e" ],
		[ y2m.g2t,  										  "\x43\x61\x70\x65\x56\x65\x72\x64\x65",												"\x43\x61\x70\x65\x20\x56\x65\x72\x64\x65",													"\x63\x76", "\x43\x50\x56" ], 
		[ y2m.j4r,  										  "\x43\x61\x74\x61\x6c\x6f\x6e\x69\x61",												"\x43\x61\x74\x61\x6c\x6f\x6e\x69\x61",													"\x78\x32", "\x58\x58\x32" ], 
		[ y2m.q3r,  								  "\x43\x61\x79\x6d\x61\x6e\x49\x73\x6c\x61\x6e\x64\x73",										"\x43\x61\x79\x6d\x61\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73",											"\x6b\x79", "\x43\x59\x4d" ],
		[ y2m.t2a,  				  "\x43\x65\x6e\x74\x72\x61\x6c\x41\x66\x72\x69\x63\x61\x6e\x52\x65\x70\x75\x62\x6c\x69\x63",					  "\x43\x65\x6e\x74\x72\x61\x6c\x20\x41\x66\x72\x69\x63\x61\x6e\x20\x52\x65\x70\x75\x62\x6c\x69\x63",						"\x63\x66", "\x43\x41\x46" ],
		[ y2m.l7z,  													  "\x43\x68\x61\x64",														  "\x43\x68\x61\x64",																"\x74\x64", "\x54\x43\x44" ],
		[ y2m.q1h,  												 	"\x43\x68\x69\x6c\x65",														"\x43\x68\x69\x6c\x65",															"\x63\x6c", "\x43\x48\x4c" ],
		[ y2m.x2z,  												 	"\x43\x68\x69\x6e\x61",														"\x43\x68\x69\x6e\x61",															"\x63\x6e", "\x43\x48\x4e" ],
		[ y2m.s8i,  							 	"\x43\x68\x72\x69\x73\x74\x6d\x61\x73\x49\x73\x6c\x61\x6e\x64",									"\x43\x68\x72\x69\x73\x74\x6d\x61\x73",													"\x63\x78", "\x43\x58\x52" ],
		[ y2m.b0y,  					 	"\x43\x6f\x63\x6f\x73\x4b\x65\x65\x6c\x69\x6e\x67\x49\x73\x6c\x61\x6e\x64\x73",							"\x43\x6f\x63\x6f\x73\x20\x28\x4b\x65\x65\x6c\x69\x6e\x67\x29",										"\x63\x63", "\x43\x43\x4b" ], 
		[ y2m.m7e,  											  "\x43\x6f\x6c\x6f\x6d\x62\x69\x61",												  "\x43\x6f\x6c\x6f\x6d\x62\x69\x61",														"\x63\x6f", "\x43\x4f\x4c" ],
		[ y2m.w3l,  											 	"\x43\x6f\x6d\x6f\x72\x6f\x73",													"\x43\x6f\x6d\x6f\x72\x6f\x73",														"\x6b\x6d", "\x43\x4f\x4d" ],
		[ y2m.m0o,  												 	"\x43\x6f\x6e\x67\x6f",														"\x43\x6f\x6e\x67\x6f\x2d\x42\x72\x61\x7a\x7a\x61\x76\x69\x6c\x6c\x65", 						    	"\x63\x67", "\x43\x4f\x47" ],
		[ y2m.k4d,  			 	"\x43\x6f\x6e\x67\x6f\x44\x65\x6d\x6f\x63\x72\x61\x74\x69\x63\x52\x65\x70\x75\x62\x6c\x69\x63",					"\x43\x6f\x6e\x67\x6f\x2d\x4b\x69\x6e\x73\x68\x61\x73\x61\x28\x5a\x61\x69\x72\x65\x29",						  "\x63\x64", "\x43\x4f\x44" ],
		[ y2m.u8e,  									 	"\x43\x6f\x6f\x6b\x49\x73\x6c\x61\x6e\x64\x73",											"\x43\x6f\x6f\x6b\x20\x49\x73\x6c\x61\x6e\x64\x73",											 	"\x63\x6b", "\x43\x4f\x4b" ],
		[ y2m.d1c,  											"\x43\x6f\x73\x74\x61\x52\x69\x63\x61",												"\x43\x6f\x73\x74\x61\x20\x52\x69\x63\x61",												 	"\x63\x72", "\x43\x52\x49" ],
		[ y2m.p5k,  												"\x43\x72\x6f\x61\x74\x69\x61",													"\x43\x72\x6f\x61\x74\x69\x61",														"\x68\x72", "\x48\x52\x56" ],
		[ y2m.h5b,  													  "\x43\x75\x62\x61",														  "\x43\x75\x62\x61",															 	"\x63\x75", "\x43\x55\x42" ],
		[ y2m.v9e,  												"\x43\x75\x72\x61\x63\x61\x6f",													"\x43\x75\x72\x61\x63\x61\x6f",											  		"\x63\x77", "\x43\x55\x57" ],
		[ y2m.i0g,  												  "\x43\x79\x70\x72\x75\x73",													  "\x43\x79\x70\x72\x75\x73",														 	"\x63\x79", "\x43\x59\x50" ],
		[ y2m.o2c,  									      "\x43\x7a\x65\x63\x68\x69\x61",										      "\x43\x7a\x65\x63\x68\x20\x52\x65\x70\x75\x62\x6c\x69\x63", 										"\x63\x7a", "\x43\x5a\x45" ],
		[ y2m.h8r,  										  "\x43\x6f\x74\x65\x49\x76\x6f\x69\x72\x65",	   					 				  "\x43\x6f\x74\x65\x20\x64\x27\x49\x76\x6f\x69\x72\x65",											"\x63\x69", "\x43\x49\x56" ],
		[ y2m.m7i,  												"\x44\x65\x6e\x6d\x61\x72\x6b",													"\x44\x65\x6e\x6d\x61\x72\x6b",													  "\x64\x6b", "\x44\x4e\x4b" ],
		[ y2m.u5v,  											  "\x44\x6a\x69\x62\x6f\x75\x74\x69",												  "\x44\x6a\x69\x62\x6f\x75\x74\x69",													 	"\x64\x6a", "\x44\x4a\x49" ],
		[ y2m.w3r,  											  "\x44\x6f\x6d\x69\x6e\x69\x63\x61",												  "\x44\x6f\x6d\x69\x6e\x69\x63\x61",													 	"\x64\x6d", "\x44\x4d\x41" ],
		[ y2m.z1j,  							"\x44\x6f\x6d\x69\x6e\x69\x63\x61\x6e\x52\x65\x70\x75\x62\x6c\x69\x63",								"\x44\x6f\x6d\x69\x6e\x69\x63\x61\x6e\x20\x52\x65\x70\x75\x62\x6c\x69\x63",								 	"\x64\x6f", "\x44\x4f\x4d" ],
		[ y2m.s0h,  												"\x45\x63\x75\x61\x64\x6f\x72",													"\x45\x63\x75\x61\x64\x6f\x72",													 	"\x65\x63", "\x45\x43\x55" ],
		[ y2m.c7a,  													"\x45\x67\x79\x70\x74",														"\x45\x67\x79\x70\x74", 														 	"\x65\x67", "\x45\x47\x59" ],
		[ y2m.e7q,  										  "\x45\x6c\x53\x61\x6c\x76\x61\x64\x6f\x72",											  "\x45\x6c\x20\x53\x61\x6c\x76\x61\x64\x6f\x72",												"\x73\x76", "\x53\x4c\x56" ],
		[ y2m.v9m,  												"\x45\x6e\x67\x6c\x61\x6e\x64",													"\x45\x6e\x67\x6c\x61\x6e\x64",														"\x78\x33", "\x47\x42\x52" ],
		[ y2m.w7r,  							  "\x45\x71\x75\x61\x74\x6f\x72\x69\x61\x6c\x47\x75\x69\x6e\x65\x61",								  "\x45\x71\x75\x61\x74\x6f\x72\x69\x61\x6c\x20\x47\x75\x69\x6e\x65\x61",									"\x67\x71", "\x47\x4e\x51" ], 
		[ y2m.e3t,  												"\x45\x72\x69\x74\x72\x65\x61",													"\x45\x72\x69\x74\x72\x65\x61",														"\x65\x72", "\x45\x52\x49" ],
		[ y2m.n8h,  												"\x45\x73\x74\x6f\x6e\x69\x61",													"\x45\x73\x74\x6f\x6e\x69\x61",														"\x65\x65", "\x45\x53\x54" ],
		[ y2m.j4o,  											  "\x45\x74\x68\x69\x6f\x70\x69\x61",												  "\x45\x74\x68\x69\x6f\x70\x69\x61",													 	"\x65\x74", "\x45\x54\x48" ],
		[ y2m.v7p,  								"\x46\x61\x6c\x6b\x6c\x61\x6e\x64\x49\x73\x6c\x61\x6e\x64\x73",									"\x45\x6e\x67\x6c\x61\x6e\x64",														"\x66\x6b", "\x46\x4c\x4b" ], 
		[ y2m.q6i,  									  "\x46\x61\x72\x6f\x65\x49\x73\x6c\x61\x6e\x64\x73",										  "\x46\x61\x72\x6f\x65\x73",														 	"\x66\x6f", "\x46\x52\x4f" ],
		[ y2m.q7h,  													  "\x46\x69\x6a\x69",														  "\x46\x69\x6a\x69",															 	"\x66\x6a", "\x46\x4a\x49" ],
		[ y2m.q2o,  												"\x46\x69\x6e\x6c\x61\x6e\x64",													"\x46\x69\x6e\x6c\x61\x6e\x64",														"\x66\x69", "\x46\x49\x4e" ],
		[ y2m.u4f,  												  "\x46\x72\x61\x6e\x63\x65",													  "\x46\x72\x61\x6e\x63\x65",														 	"\x66\x72", "\x46\x52\x41" ],
		[ y2m.v6b,  									  "\x46\x72\x65\x6e\x63\x68\x47\x75\x69\x61\x6e\x61",										  "\x47\x75\x79\x61\x6e\x61", 														"\x67\x66", "\x47\x55\x46" ], 
		[ y2m.q7d,  								"\x46\x72\x65\x6e\x63\x68\x50\x6f\x6c\x79\x6e\x65\x73\x69\x61",									"\x54\x61\x68\x69\x74\x69\x28\x46\x72\x65\x6e\x63\x68\x20\x50\x6f\x6c\x69\x6e\x65\x73\x69\x61\x29", 					"\x70\x66", "\x50\x59\x46" ], 
		[ y2m.h8h,  			"\x46\x72\x65\x6e\x63\x68\x53\x6f\x75\x74\x68\x65\x72\x6e\x54\x65\x72\x72\x69\x74\x6f\x72\x69\x65\x73",				"\x46\x72\x65\x6e\x63\x68\x20\x53\x6f\x75\x74\x68\x65\x72\x6e\x20\x61\x6e\x64\x20\x41\x6e\x74\x61\x72\x63\x74\x69\x63\x20\x4c\x61\x6e\x64\x73","\x74\x66", "\x41\x54\x46" ],
		[ y2m.u3j,  													"\x47\x61\x62\x6f\x6e",														"\x47\x61\x62\x6f\x6e",															"\x67\x61", "\x47\x41\x42" ], 
		[ y2m.p3c,  												  "\x47\x61\x6d\x62\x69\x61",													  "\x47\x61\x6d\x62\x69\x61",															"\x67\x6d", "\x47\x4d\x42" ],
		[ y2m.y2e,  												"\x47\x65\x6f\x72\x67\x69\x61",													"\x47\x65\x6f\x72\x67\x69\x61",														"\x67\x65", "\x47\x45\x4f" ],
		[ y2m.k7y,  												"\x47\x65\x72\x6d\x61\x6e\x79",													"\x47\x65\x72\x6d\x61\x6e\x79",														"\x64\x65", "\x44\x45\x55" ],
		[ y2m.g8f, 													  "\x47\x68\x61\x6e\x61",														"\x47\x68\x61\x6e\x61",															"\x67\x68", "\x47\x48\x41" ],
		[ y2m.t1e,  											"\x47\x69\x62\x72\x61\x6c\x74\x61\x72",												"\x47\x69\x62\x72\x61\x6c\x74\x61\x72",													"\x67\x69", "\x47\x49\x42" ],
		[ y2m.b1y,  												  "\x47\x72\x65\x65\x63\x65",													  "\x47\x72\x65\x65\x63\x65",															"\x67\x72", "\x47\x52\x43" ],
		[ y2m.e3h,  											"\x47\x72\x65\x65\x6e\x6c\x61\x6e\x64",												"\x47\x72\x65\x65\x6e\x6c\x61\x6e\x64",													"\x67\x6c", "\x47\x52\x4c" ],
		[ y2m.z5m,  												"\x47\x72\x65\x6e\x61\x64\x61",													"\x47\x72\x65\x6e\x61\x64\x61",														"\x67\x64", "\x47\x52\x44" ],
		[ y2m.l4h,  										  "\x47\x75\x61\x64\x65\x6c\x6f\x75\x70\x65",											  "\x47\x75\x61\x64\x65\x6c\x6f\x75\x70\x65",													"\x67\x70", "\x47\x4c\x50" ],
		[ y2m.j2m,  													  "\x47\x75\x61\x6d",														  "\x47\x75\x61\x6d",																"\x67\x75", "\x47\x55\x4d" ],
		[ y2m.v2k,  											"\x47\x75\x61\x74\x65\x6d\x61\x6c\x61",												"\x47\x75\x61\x74\x65\x6d\x61\x6c\x61",													"\x67\x74", "\x47\x54\x4d" ],
		[ y2m.v0o,  											  "\x47\x75\x65\x72\x6e\x73\x65\x79",												  "\x47\x75\x65\x72\x6e\x73\x65\x79",														"\x67\x67", "\x47\x47\x59" ], 
		[ y2m.r9f,  												  "\x47\x75\x69\x6e\x65\x61",													  "\x47\x75\x69\x6e\x65\x61",															"\x67\x6e", "\x47\x49\x4e" ],
		[ y2m.z0a,  									  "\x47\x75\x69\x6e\x65\x61\x42\x69\x73\x73\x61\x75",										  "\x47\x75\x69\x6e\x65\x61\x2d\x42\x69\x73\x73\x61\x75",											"\x67\x77", "\x47\x4e\x42" ],
		[ y2m.c6v,  												  "\x47\x75\x79\x61\x6e\x61",													  "\x47\x75\x79\x61\x6e\x61",															"\x67\x79", "\x47\x55\x59" ],
		[ y2m.m7r,  													"\x48\x61\x69\x74\x69",														"\x48\x61\x69\x74\x69",															"\x68\x74", "\x48\x54\x49" ],
		[ y2m.k0u, 			"\x48\x65\x61\x72\x64\x49\x73\x6c\x61\x6e\x64\x4d\x63\x44\x6f\x6e\x61\x6c\x64\x49\x73\x6c\x61\x6e\x64\x73", 			"\x41\x75\x73\x74\x72\x61\x6c\x69\x61",   									  		"\x68\x6d", "\x48\x4d\x44" ],
		[ y2m.a1l,  			 	                "\x56\x61\x74\x69\x63\x61\x6e",	  			                "\x56\x61\x74\x69\x63\x61\x6e\x20\x43\x69\x74\x79", 											"\x76\x61", "\x56\x41\x54" ],
		[ y2m.i5o,  											  "\x48\x6f\x6e\x64\x75\x72\x61\x73",												  "\x48\x6f\x6e\x64\x75\x72\x61\x73",														"\x68\x6e", "\x48\x4e\x44" ],
		[ y2m.j3z,  											  "\x48\x6f\x6e\x67\x4b\x6f\x6e\x67",												  "\x48\x6f\x6e\x67\x20\x4b\x6f\x6e\x67",													"\x68\x6b", "\x48\x4b\x47" ],
		[ y2m.s0f,  											 	"\x48\x75\x6e\x67\x61\x72\x79",													"\x48\x75\x6e\x67\x61\x72\x79",														"\x68\x75", "\x48\x55\x4e" ],
		[ y2m.t0g,  											 	"\x49\x63\x65\x6c\x61\x6e\x64",													"\x49\x63\x65\x6c\x61\x6e\x64",														"\x69\x73", "\x49\x53\x4c" ],
		[ y2m.d1t,  												 	"\x49\x6e\x64\x69\x61",														"\x49\x6e\x64\x69\x61",															"\x69\x6e", "\x49\x4e\x44" ],
		[ y2m.a6b,  										 	"\x49\x6e\x64\x6f\x6e\x65\x73\x69\x61",												"\x49\x6e\x64\x6f\x6e\x65\x73\x69\x61",													"\x69\x64", "\x49\x44\x4e" ],
		[ y2m.a9r,  													  "\x49\x72\x61\x6e",														  "\x49\x72\x61\x6e",																"\x69\x72", "\x49\x52\x4e" ],
		[ y2m.x3e,  													  "\x49\x72\x61\x71",														  "\x49\x72\x61\x71",																"\x69\x71", "\x49\x52\x51" ],
		[ y2m.p4i,  											 	"\x49\x72\x65\x6c\x61\x6e\x64",													"\x49\x72\x65\x6c\x61\x6e\x64",														"\x69\x65", "\x49\x52\x4c" ],
		[ y2m.t5q,  										 	"\x49\x73\x6c\x65\x4f\x66\x4d\x61\x6e",												"\x49\x73\x6c\x65\x20\x6f\x66\x20\x4d\x61\x6e",												"\x69\x6d", "\x49\x4d\x4e" ],
		[ y2m.r7w,  												  "\x49\x73\x72\x61\x65\x6c",													  "\x49\x73\x72\x61\x65\x6c",															"\x69\x6c", "\x49\x53\x52" ],
		[ y2m.h1t,  												 	"\x49\x74\x61\x6c\x79",														"\x49\x74\x61\x6c\x79",															"\x69\x74", "\x49\x54\x41" ],
		[ y2m.z4a,  											 	"\x4a\x61\x6d\x61\x69\x63\x61",													"\x4a\x61\x6d\x61\x69\x63\x61",														"\x6a\x6d", "\x4a\x41\x4d" ],
		[ y2m.e4g,  											  "\x4a\x61\x6e\x4d\x61\x79\x65\x6e",								  			  "\x4e\x6f\x72\x77\x61\x79", 														"\x78\x34", "\x58\x58\x34" ], 
		[ y2m.e5t,  												 	"\x4a\x61\x70\x61\x6e",														"\x4a\x61\x70\x61\x6e",															"\x6a\x70", "\x4a\x50\x4e" ],
		[ y2m.i9l,  												  "\x4a\x65\x72\x73\x65\x79",													  "\x4a\x65\x72\x73\x65\x79",															"\x6a\x65", "\x4a\x45\x59" ],
		[ y2m.n1z,  												  "\x4a\x6f\x72\x64\x61\x6e",													  "\x4a\x6f\x72\x64\x61\x6e",															"\x6a\x6f", "\x4a\x4f\x52" ],
		[ y2m.o4r,  										  "\x4b\x61\x7a\x61\x6b\x68\x73\x74\x61\x6e",											  "\x4b\x61\x7a\x61\x6b\x68\x73\x74\x61\x6e",													"\x6b\x7a", "\x4b\x41\x5a" ],
		[ y2m.y7d,  												 	"\x4b\x65\x6e\x79\x61",														"\x4b\x65\x6e\x79\x61",															"\x6b\x65", "\x4b\x45\x4e" ],
		[ y2m.a5b,  											  "\x4b\x69\x72\x69\x62\x61\x74\x69",												  "\x4b\x69\x72\x69\x62\x61\x74\x69",														"\x6b\x69", "\x4b\x49\x52" ],
		[ y2m.z8x,  										  "\x4b\x6f\x72\x65\x61\x4e\x6f\x72\x74\x68",											  "\x4e\x6f\x72\x74\x68\x20\x4b\x6f\x72\x65\x61",												"\x6b\x70", "\x50\x52\x4b" ], 
		[ y2m.m6u,  										  "\x4b\x6f\x72\x65\x61\x53\x6f\x75\x74\x68",	 	  								  "\x53\x6f\x75\x74\x68\x20\x4b\x6f\x72\x65\x61", 												"\x6b\x72", "\x4b\x4f\x52" ], 
		[ y2m.h9g,  												  "\x4b\x6f\x73\x6f\x76\x6f",													  "\x4b\x6f\x73\x6f\x76\x6f",															"\x78\x35", "\x52\x4b\x53" ],
		[ y2m.b8p,  												  "\x4b\x75\x77\x61\x69\x74",													  "\x4b\x75\x77\x61\x69\x74",															"\x6b\x77", "\x4b\x57\x54" ],
		[ y2m.k6j,  										  "\x4b\x79\x72\x67\x79\x7a\x73\x74\x61\x6e",											  "\x4b\x79\x72\x67\x79\x7a\x73\x74\x61\x6e",													"\x6b\x67", "\x4b\x47\x5a" ],
		[ y2m.x8q,  													  "\x4c\x61\x6f\x73",														  "\x4c\x61\x6f\x73",																"\x6c\x61", "\x4c\x41\x4f" ],
		[ y2m.j5x, 	 											 	"\x4c\x61\x74\x76\x69\x61",													  "\x4c\x61\x74\x76\x69\x61",															"\x6c\x76", "\x4c\x56\x41" ],
		[ y2m.o6h,  											 	"\x4c\x65\x62\x61\x6e\x6f\x6e",													"\x4c\x65\x62\x61\x6e\x6f\x6e",														"\x6c\x62", "\x4c\x42\x4e" ],
		[ y2m.d2r, 												  "\x4c\x65\x73\x6f\x74\x68\x6f",													"\x4c\x65\x73\x6f\x74\x68\x6f",														"\x6c\x73", "\x4c\x53\x4f" ],
		[ y2m.e8e,  											 	"\x4c\x69\x62\x65\x72\x69\x61",													"\x4c\x69\x62\x65\x72\x69\x61",														"\x6c\x72", "\x4c\x42\x52" ],
		[ y2m.k6q,  												 	"\x4c\x69\x62\x79\x61",														"\x4c\x69\x62\x79\x61",															"\x6c\x79", "\x4c\x42\x59" ],
		[ y2m.q8v,  								 	"\x4c\x69\x65\x63\x68\x74\x65\x6e\x73\x74\x65\x69\x6e",										"\x4c\x69\x65\x63\x68\x74\x65\x6e\x73\x74\x65\x69\x6e",											"\x6c\x69", "\x4c\x49\x45" ],
		[ y2m.s5b,  										 	"\x4c\x69\x74\x68\x75\x61\x6e\x69\x61",												"\x4c\x69\x74\x68\x75\x61\x6e\x69\x61",													"\x6c\x74", "\x4c\x54\x55" ],
		[ y2m.o0s,  										  "\x4c\x75\x78\x65\x6d\x62\x6f\x75\x72\x67",											  "\x4c\x75\x78\x65\x6d\x62\x6f\x75\x72\x67",													"\x6c\x75", "\x4c\x55\x58" ],
		[ y2m.macau,  												 	"\x4d\x61\x63\x61\x75",														"\x4d\x61\x63\x61\x75",															"\x6d\x6f", "\x4d\x41\x43" ],
		[ y2m.e6o,  	  					 	  "\x4e\x6f\x72\x74\x68\x4d\x61\x63\x65\x64\x6f\x6e\x69\x61",	   							  "\x4d\x61\x63\x65\x64\x6f\x6e\x69\x61",													"\x6d\x6b", "\x4d\x4b\x44" ],
		[ y2m.y6r,  										  "\x4d\x61\x64\x61\x67\x61\x73\x63\x61\x72",											  "\x4d\x61\x64\x61\x67\x61\x73\x63\x61\x72",													"\x6d\x67", "\x4d\x44\x47" ],
		[ y2m.b6j,  												  "\x4d\x61\x6c\x61\x77\x69",													  "\x4d\x61\x6c\x61\x77\x69",															"\x6d\x77", "\x4d\x57\x49" ],
		[ y2m.g7q,  											  "\x4d\x61\x6c\x61\x79\x73\x69\x61",												  "\x4d\x61\x6c\x61\x79\x73\x69\x61",														"\x6d\x79", "\x4d\x59\x53" ],
		[ y2m.u2b,  											  "\x4d\x61\x6c\x64\x69\x76\x65\x73",												  "\x4d\x61\x6c\x64\x69\x76\x65\x73",														"\x6d\x76", "\x4d\x44\x56" ],
		[ y2m.v6u, 													 	"\x4d\x61\x6c\x69",														  "\x4d\x61\x6c\x69",																"\x6d\x6c", "\x4d\x4c\x49" ],
		[ y2m.c5z,  												 	"\x4d\x61\x6c\x74\x61",														"\x4d\x61\x6c\x74\x61",															"\x6d\x74", "\x4d\x4c\x54" ],
		[ y2m.d9l,  							 	"\x4d\x61\x72\x73\x68\x61\x6c\x6c\x49\x73\x6c\x61\x6e\x64\x73",									"\x4d\x61\x72\x73\x68\x61\x6c\x6c\x20\x49\x73\x6c\x61\x6e\x64\x73",										"\x6d\x68", "\x4d\x48\x4c" ],
		[ y2m.e9d,  										  "\x4d\x61\x72\x74\x69\x6e\x69\x71\x75\x65",											  "\x4d\x61\x72\x74\x69\x6e\x69\x71\x75\x65",													"\x6d\x71", "\x4d\x54\x51" ],
		[ y2m.i2f,  										  "\x4d\x61\x75\x72\x69\x74\x61\x6e\x69\x61",											  "\x4d\x61\x75\x72\x69\x74\x61\x6e\x69\x61",													"\x6d\x72", "\x4d\x52\x54" ],
		[ y2m.g5b,  										 	"\x4d\x61\x75\x72\x69\x74\x69\x75\x73",												"\x4d\x61\x75\x72\x69\x74\x69\x75\x73",													"\x6d\x75", "\x4d\x55\x53" ],
		[ y2m.m1q,  											  "\x4d\x61\x79\x6f\x74\x74\x65",													"\x4d\x61\x79\x6f\x74\x74\x65",														"\x79\x74", "\x4d\x59\x54" ],
		[ y2m.g6r,  												  "\x4d\x65\x78\x69\x63\x6f",													  "\x4d\x65\x78\x69\x63\x6f",															"\x6d\x78", "\x4d\x45\x58" ],
		[ y2m.p0i,  										  "\x4d\x69\x63\x72\x6f\x6e\x65\x73\x69\x61",											  "\x4d\x69\x63\x72\x6f\x6e\x65\x73\x69\x61",													"\x66\x6d", "\x46\x53\x4d" ],
		[ y2m.h7r,  											 	"\x4d\x6f\x6c\x64\x6f\x76\x61",													"\x4d\x6f\x6c\x64\x6f\x76\x61",														"\x6d\x64", "\x4d\x44\x41" ],
		[ y2m.u9l,  												  "\x4d\x6f\x6e\x61\x63\x6f",													  "\x4d\x6f\x6e\x61\x63\x6f",															"\x6d\x63", "\x4d\x43\x4f" ],
		[ y2m.d4v,  											  "\x4d\x6f\x6e\x67\x6f\x6c\x69\x61",												  "\x4d\x6f\x6e\x67\x6f\x6c\x69\x61",														"\x6d\x6e", "\x4d\x4e\x47" ],
		[ y2m.b8h,  										  "\x4d\x6f\x6e\x74\x65\x6e\x65\x67\x72\x6f",											  "\x4d\x6f\x6e\x74\x65\x6e\x65\x67\x72\x6f",													"\x6d\x65", "\x4d\x4e\x45" ],
		[ y2m.s2l,  										  "\x4d\x6f\x6e\x74\x73\x65\x72\x72\x61\x74",											  "\x4d\x6f\x6e\x74\x73\x65\x72\x72\x61\x74",													"\x6d\x73", "\x4d\x53\x52" ],
		[ y2m.u5a,  												"\x4d\x6f\x72\x6f\x63\x63\x6f",													"\x4d\x6f\x72\x6f\x63\x63\x6f",														"\x6d\x61", "\x4d\x41\x52" ],
		[ y2m.u6v,  										  "\x4d\x6f\x7a\x61\x6d\x62\x69\x71\x75\x65",											  "\x4d\x6f\x7a\x61\x6d\x62\x69\x71\x75\x65",													"\x6d\x7a", "\x4d\x4f\x5a" ],
		[ y2m.s5m, 												  "\x4d\x79\x61\x6e\x6d\x61\x72",													"\x4d\x79\x61\x6e\x6d\x61\x72\x28\x42\x75\x72\x6d\x61\x29", 										"\x6d\x6d", "\x4d\x4d\x52" ],
		[ y2m.v4u,  												"\x4e\x61\x6d\x69\x62\x69\x61",													"\x4e\x61\x6d\x69\x62\x69\x61",														"\x6e\x61", "\x4e\x41\x4d" ],
		[ y2m.m1l,  													"\x4e\x61\x75\x72\x75",														"\x4e\x61\x75\x72\x75",															"\x6e\x72", "\x4e\x52\x55" ],
		[ y2m.r4r,  													"\x4e\x65\x70\x61\x6c",														"\x4e\x65\x70\x61\x6c",															"\x6e\x70", "\x4e\x50\x4c" ],
		[ y2m.p5a,  										"\x54\x68\x65\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73",	  							  "\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73",												"\x6e\x6c", "\x4e\x4c\x44" ],
		[ y2m.l4z, 						  "\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73\x41\x6e\x74\x69\x6c\x6c\x65\x73",							"\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73\x20\x41\x6e\x74\x69\x6c\x6c\x65\x73",								"\x61\x6e", "\x41\x4e\x54" ],
		[ y2m.v5q,  									  "\x4e\x65\x77\x43\x61\x6c\x65\x64\x6f\x6e\x69\x61",										  "\x4e\x65\x77\x20\x43\x61\x6c\x65\x64\x6f\x6e\x69\x61",											"\x6e\x63", "\x4e\x43\x4c" ],
		[ y2m.s3u,  										  "\x4e\x65\x77\x5a\x65\x61\x6c\x61\x6e\x64",											  "\x4e\x65\x77\x20\x5a\x65\x61\x6c\x61\x6e\x64",												"\x6e\x7a", "\x4e\x5a\x4c" ],
		[ y2m.d8q,  											"\x4e\x69\x63\x61\x72\x61\x67\x75\x61",												"\x4e\x69\x63\x61\x72\x61\x67\x75\x61",													"\x6e\x69", "\x4e\x49\x43" ],
		[ y2m.r3k,  													"\x4e\x69\x67\x65\x72",														"\x4e\x69\x67\x65\x72",															"\x6e\x65", "\x4e\x45\x52" ],
		[ y2m.r1l,  												"\x4e\x69\x67\x65\x72\x69\x61",													"\x4e\x69\x67\x65\x72\x69\x61",														"\x6e\x67", "\x4e\x47\x41" ],
		[ y2m.n7v,  													  "\x4e\x69\x75\x65",														  "\x4e\x69\x75\x65",																"\x6e\x75", "\x4e\x49\x55" ],
		[ y2m.n6r,  									"\x4e\x6f\x72\x66\x6f\x6c\x6b\x49\x73\x6c\x61\x6e\x64",										"\x4e\x6f\x72\x66\x6f\x6c\x6b", 														"\x6e\x66", "\x4e\x46\x4b" ],
		[ y2m.n3h,  								"\x4e\x6f\x72\x74\x68\x65\x72\x6e\x49\x72\x65\x6c\x61\x6e\x64",									"\x4e\x6f\x72\x74\x68\x65\x72\x6e\x20\x49\x72\x65\x6c\x61\x6e\x64",										"\x78\x36", "\x47\x42\x52" ], 
		[ y2m.a7a,  				  "\x4e\x6f\x72\x74\x68\x65\x72\x6e\x4d\x61\x72\x69\x61\x6e\x61\x49\x73\x6c\x61\x6e\x64\x73",					  "\x4e\x6f\x72\x74\x68\x65\x72\x6e\x20\x4d\x61\x72\x69\x61\x6e\x61",										"\x6d\x70", "\x4d\x4e\x50" ],
		[ y2m.s6p,  												  "\x4e\x6f\x72\x77\x61\x79",													  "\x4e\x6f\x72\x77\x61\x79",															"\x6e\x6f", "\x4e\x4f\x52" ],
		[ y2m.k0p,  													  "\x4f\x6d\x61\x6e",														  "\x4f\x6d\x61\x6e",																"\x6f\x6d", "\x4f\x4d\x4e" ],
		[ y2m.t6x,  											  "\x50\x61\x6b\x69\x73\x74\x61\x6e",												  "\x50\x61\x6b\x69\x73\x74\x61\x6e",														"\x70\x6b", "\x50\x41\x4b" ],
		[ y2m.e1k,  													"\x50\x61\x6c\x61\x75",														"\x50\x61\x6c\x61\x75",															"\x70\x77", "\x50\x4c\x57" ],
		[ y2m.j4k,  											"\x50\x61\x6c\x65\x73\x74\x69\x6e\x65",												"\x50\x61\x6c\x65\x73\x74\x69\x6e\x65",													"\x70\x73", "\x50\x53\x45" ],
		[ y2m.a3e,  												  "\x50\x61\x6e\x61\x6d\x61",													  "\x50\x61\x6e\x61\x6d\x61",															"\x70\x61", "\x50\x41\x4e" ],
		[ y2m.r7j,  								  "\x50\x61\x70\x75\x61\x4e\x65\x77\x47\x75\x69\x6e\x65\x61",									  "\x50\x61\x70\x75\x61\x20\x4e\x65\x77\x20\x47\x75\x69\x6e\x65\x61",										"\x70\x67", "\x50\x4e\x47" ],
		[ y2m.r7y,  											  "\x50\x61\x72\x61\x67\x75\x61\x79",												  "\x50\x61\x72\x61\x67\x75\x61\x79",														"\x70\x79", "\x50\x52\x59" ],
		[ y2m.c3a,  													  "\x50\x65\x72\x75",														  "\x50\x65\x72\x75",																"\x70\x65", "\x50\x45\x52" ],
		[ y2m.t5v,  										"\x50\x68\x69\x6c\x69\x70\x70\x69\x6e\x65\x73",											"\x50\x68\x69\x6c\x69\x70\x70\x69\x6e\x65\x73",												"\x70\x68", "\x50\x48\x4c" ],
		[ y2m.l5e,  											  "\x50\x69\x74\x63\x61\x69\x72\x6e",												  "\x50\x69\x74\x63\x61\x69\x72\x6e",														"\x70\x6e", "\x50\x43\x4e" ],
		[ y2m.t9d,  												  "\x50\x6f\x6c\x61\x6e\x64",													  "\x50\x6f\x6c\x61\x6e\x64",															"\x70\x6c", "\x50\x4f\x4c" ],
		[ y2m.g5y,  											  "\x50\x6f\x72\x74\x75\x67\x61\x6c",												  "\x50\x6f\x72\x74\x75\x67\x61\x6c",														"\x70\x74", "\x50\x52\x54" ],
		[ y2m.y1y,  										  "\x50\x75\x65\x72\x74\x6f\x52\x69\x63\x6f",											  "\x50\x75\x65\x72\x74\x6f\x20\x52\x69\x63\x6f",												"\x70\x72", "\x50\x52\x49" ],
		[ y2m.j4t,  													"\x51\x61\x74\x61\x72",														"\x51\x61\x74\x61\x72",															"\x71\x61", "\x51\x41\x54" ],
		[ y2m.m8s,  												"\x52\x65\x75\x6e\x69\x6f\x6e",													"\x52\x65\x75\x6e\x69\x6f\x6e",														"\x72\x65", "\x52\x45\x55" ],
		[ y2m.k6k,  												"\x52\x6f\x6d\x61\x6e\x69\x61",													"\x52\x6f\x6d\x61\x6e\x69\x61",														"\x72\x6f", "\x52\x4f\x55" ],
		[ y2m.g6w,  												  "\x52\x75\x73\x73\x69\x61",													  "\x52\x75\x73\x73\x69\x61\x6e\x20\x46\x65\x64\x65\x72\x61\x74\x69\x6f\x6e", 								"\x72\x75", "\x52\x55\x53" ],
		[ y2m.z0p,  												  "\x52\x77\x61\x6e\x64\x61",													  "\x52\x77\x61\x6e\x64\x61",															"\x72\x77", "\x52\x57\x41" ],
		[ y2m.i2k,  								"\x53\x61\x69\x6e\x74\x42\x61\x72\x74\x68\x65\x6c\x65\x6d\x79",									"\x53\x61\x69\x6e\x74\x20\x42\x61\x72\x74\x68\x65\x6c\x65\x6d\x79", 									"\x62\x6c", "\x42\x4c\x4d" ],
		[ y2m.o7a,  										"\x53\x61\x69\x6e\x74\x48\x65\x6c\x65\x6e\x61",											"\x53\x61\x69\x6e\x74\x20\x48\x65\x6c\x65\x6e\x61", 											"\x73\x68", "\x53\x48\x4e" ], 
		[ y2m.r4l,  								"\x53\x61\x69\x6e\x74\x4b\x69\x74\x74\x73\x4e\x65\x76\x69\x73",									"\x53\x74\x20\x4b\x69\x74\x74\x73\x20\x26\x20\x4e\x65\x76\x69\x73", 									"\x6b\x6e", "\x4b\x4e\x41" ], 
		[ y2m.p6u, 											"\x53\x61\x69\x6e\x74\x4c\x75\x63\x69\x61",											  "\x53\x61\x69\x6e\x74\x20\x4c\x75\x63\x69\x61", 												"\x6c\x63", "\x4c\x43\x41" ], 
		[ y2m.p3f,  					"\x53\x61\x69\x6e\x74\x4d\x61\x72\x74\x69\x6e\x46\x72\x65\x6e\x63\x68\x50\x61\x72\x74",  					"\x53\x61\x69\x6e\x74\x20\x4d\x61\x72\x74\x69\x6e", 											"\x6d\x66", "\x4d\x41\x46" ],
		[ y2m.l5t,  						"\x53\x61\x69\x6e\x74\x50\x69\x65\x72\x72\x65\x4d\x69\x71\x75\x65\x6c\x6f\x6e",							"\x53\x61\x69\x6e\x74\x20\x50\x69\x65\x72\x72\x65\x20\x61\x6e\x64\x20\x4d\x69\x71\x75\x65\x6c\x6f\x6e", 					"\x70\x6d", "\x53\x50\x4d" ], 
		[ y2m.h8d,  				  "\x53\x61\x69\x6e\x74\x56\x69\x6e\x63\x65\x6e\x74\x47\x72\x65\x6e\x61\x64\x69\x6e\x65\x73",					  "\x53\x74\x20\x56\x69\x6e\x63\x65\x6e\x74\x20\x26\x20\x74\x68\x65\x20\x47\x72\x65\x6e\x61\x64\x69\x6e\x65\x73", 				"\x76\x63", "\x56\x43\x54" ], 
		[ y2m.v5z,  													"\x53\x61\x6d\x6f\x61",														"\x53\x61\x6d\x6f\x61",															"\x77\x73", "\x57\x53\x4d" ],
		[ y2m.r3v,  											"\x53\x61\x6e\x4d\x61\x72\x69\x6e\x6f",												"\x53\x61\x6e\x20\x4d\x61\x72\x69\x6e\x6f",													"\x73\x6d", "\x53\x4d\x52" ],
		[ y2m.c2f,  								"\x53\x61\x6f\x54\x6f\x6d\x65\x50\x72\x69\x6e\x63\x69\x70\x65",									"\x53\x61\x6f\x20\x54\x6f\x6d\x65\x20\x26\x20\x50\x72\x69\x6e\x63\x69\x70\x65", 								"\x73\x74", "\x53\x54\x50" ],
		[ y2m.z3p,  										"\x53\x61\x75\x64\x69\x41\x72\x61\x62\x69\x61",											"\x53\x61\x75\x64\x69\x20\x41\x72\x61\x62\x69\x61", 											"\x73\x61", "\x53\x41\x55" ],
		[ y2m.a7k,  											  "\x53\x63\x6f\x74\x6c\x61\x6e\x64",												  "\x53\x63\x6f\x74\x6c\x61\x6e\x64",														"\x78\x37", "\x47\x42\x52" ],
		[ y2m.b0a,  												"\x53\x65\x6e\x65\x67\x61\x6c",													"\x53\x65\x6e\x65\x67\x61\x6c",														"\x73\x6e", "\x53\x45\x4e" ],
		[ y2m.b6b,  												  "\x53\x65\x72\x62\x69\x61",													  "\x53\x65\x72\x62\x69\x61\x28\x59\x75\x67\x6f\x73\x6c\x61\x76\x69\x61\x29", 								"\x72\x73", "\x53\x52\x42" ],
		[ y2m.d8b,  										  "\x53\x65\x79\x63\x68\x65\x6c\x6c\x65\x73",											  "\x53\x65\x79\x63\x68\x65\x6c\x6c\x65\x73",													"\x73\x63", "\x53\x59\x43" ],
		[ y2m.b4j,  									  "\x53\x69\x65\x72\x72\x61\x4c\x65\x6f\x6e\x65",											"\x53\x69\x65\x72\x72\x61\x20\x4c\x65\x6f\x6e\x65",												"\x73\x6c", "\x53\x4c\x45" ],
		[ y2m.p1n,  										 	"\x53\x69\x6e\x67\x61\x70\x6f\x72\x65",												"\x53\x69\x6e\x67\x61\x70\x6f\x72\x65",													"\x73\x67", "\x53\x47\x50" ],
		[ y2m.v7r,						  "\x53\x69\x6e\x74\x4d\x61\x61\x72\x74\x65\x6e\x44\x75\x74\x63\x68\x50\x61\x72\x74",  					  "\x53\x69\x6e\x74\x20\x4d\x61\x61\x72\x74\x65\x6e",												"\x73\x78", "\x53\x58\x4d" ],
		[ y2m.p3l,  											  "\x53\x6c\x6f\x76\x61\x6b\x69\x61",												  "\x53\x6c\x6f\x76\x61\x6b\x69\x61",														"\x73\x6b", "\x53\x56\x4b" ],
		[ y2m.i4c,  											  "\x53\x6c\x6f\x76\x65\x6e\x69\x61",												  "\x53\x6c\x6f\x76\x65\x6e\x69\x61",														"\x73\x69", "\x53\x56\x4e" ],
		[ y2m.s4a,  								  "\x53\x6f\x6c\x6f\x6d\x6f\x6e\x49\x73\x6c\x61\x6e\x64\x73",									  "\x53\x6f\x6c\x6f\x6d\x6f\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73", 										"\x73\x62", "\x53\x4c\x42" ],
		[ y2m.s5a,  											 	"\x53\x6f\x6d\x61\x6c\x69\x61",													"\x53\x6f\x6d\x61\x6c\x69\x61",														"\x73\x6f", "\x53\x4f\x4d" ],
		[ y2m.d6x,  									 	"\x53\x6f\x75\x74\x68\x41\x66\x72\x69\x63\x61",											"\x53\x6f\x75\x74\x68\x20\x41\x66\x72\x69\x63\x61",												"\x7a\x61", "\x5a\x41\x46" ],
		[ y2m.u4b, "\x53\x6f\x75\x74\x68\x47\x65\x6f\x72\x67\x69\x61\x53\x6f\x75\x74\x68\x53\x61\x6e\x64\x77\x69\x63\x68\x49\x73\x6c\x61\x6e\x64\x73", "\x53\x6f\x75\x74\x68\x20\x47\x65\x6f\x72\x67\x69\x61\x20\x61\x6e\x64\x20\x53\x6f\x75\x74\x68\x20\x53\x61\x6e\x64\x77\x69\x63\x68", 	"\x67\x73", "\x53\x47\x53" ],
		[ y2m.n7s,  										  "\x53\x6f\x75\x74\x68\x53\x75\x64\x61\x6e",											  "\x53\x6f\x75\x74\x68\x65\x72\x6e\x20\x53\x75\x64\x61\x6e", 										"\x73\x73", "\x53\x53\x44" ],
		[ y2m.e9m,  									 	"\x53\x6f\x76\x69\x65\x74\x55\x6e\x69\x6f\x6e",											"\x53\x6f\x76\x69\x65\x74\x20\x55\x6e\x69\x6f\x6e", 			 								"\x73\x75", "\x55\x52\x53" ],
		[ y2m.c1b, 	 												  "\x53\x70\x61\x69\x6e",														"\x53\x70\x61\x69\x6e",															"\x65\x73", "\x45\x53\x50" ],
		[ y2m.b3g,  											  "\x53\x72\x69\x4c\x61\x6e\x6b\x61",												  "\x53\x72\x69\x20\x4c\x61\x6e\x6b\x61",													"\x6c\x6b", "\x4c\x4b\x41" ],
		[ y2m.g7b,  												 	"\x53\x75\x64\x61\x6e",														"\x53\x75\x64\x61\x6e",															"\x73\x64", "\x53\x44\x4e" ],
		[ y2m.i6z,  											  "\x53\x75\x72\x69\x6e\x61\x6d\x65",												  "\x53\x75\x72\x69\x6e\x61\x6d\x65",														"\x73\x72", "\x53\x55\x52" ], 
		[ y2m.a4l,  											  "\x53\x76\x61\x6c\x62\x61\x72\x64",												  "\x4e\x6f\x72\x77\x61\x79", 														"\x73\x6a", "\x53\x4a\x4d" ], 
		[ y2m.h8a,  										 	"\x53\x77\x61\x7a\x69\x6c\x61\x6e\x64",												"\x53\x77\x61\x7a\x69\x6c\x61\x6e\x64",													"\x73\x7a", "\x53\x57\x5a" ],
		[ y2m.k1e,  												  "\x53\x77\x65\x64\x65\x6e",													  "\x53\x77\x65\x64\x65\x6e",															"\x73\x65", "\x53\x57\x45" ],
		[ y2m.p4n,  									 	"\x53\x77\x69\x74\x7a\x65\x72\x6c\x61\x6e\x64",											"\x53\x77\x69\x74\x7a\x65\x72\x6c\x61\x6e\x64",												"\x63\x68", "\x43\x48\x45" ],
		[ y2m.p2k,  												 	"\x53\x79\x72\x69\x61",														"\x53\x79\x72\x69\x61",															"\x73\x79", "\x53\x59\x52" ],
		[ y2m.o4z,  												  "\x54\x61\x69\x77\x61\x6e",													  "\x54\x61\x69\x77\x61\x6e",															"\x74\x77", "\x54\x57\x4e" ],
		[ y2m.s7m,  										  "\x54\x61\x6a\x69\x6b\x69\x73\x74\x61\x6e",											  "\x54\x61\x6a\x69\x6b\x69\x73\x74\x61\x6e",													"\x74\x6a", "\x54\x4a\x4b" ],
		[ y2m.q8e,  											  "\x54\x61\x6e\x7a\x61\x6e\x69\x61",												  "\x54\x61\x6e\x7a\x61\x6e\x69\x61",														"\x74\x7a", "\x54\x5a\x41" ],
		[ y2m.p2p, 											  "\x54\x68\x61\x69\x6c\x61\x6e\x64",												  "\x54\x68\x61\x69\x6c\x61\x6e\x64",														"\x74\x68", "\x54\x48\x41" ],
		[ y2m.f7y,  										  "\x54\x69\x6d\x6f\x72\x4c\x65\x73\x74\x65",	  									  "\x54\x69\x6d\x6f\x72\x2d\x4c\x65\x73\x74\x65", 												"\x74\x6c", "\x54\x4c\x53" ], 
		[ y2m.f8g, 													 	"\x54\x6f\x67\x6f",														  "\x54\x6f\x67\x6f",																"\x74\x67", "\x54\x47\x4f" ],
		[ y2m.h1v,  											 	"\x54\x6f\x6b\x65\x6c\x61\x75",													"\x54\x6f\x6b\x65\x6c\x61\x75",														"\x74\x6b", "\x54\x4b\x4c" ], 
		[ y2m.w2o,  												 	"\x54\x6f\x6e\x67\x61",														"\x54\x6f\x6e\x67\x61",															"\x74\x6f", "\x54\x4f\x4e" ],
		[ y2m.h6j,  								  "\x54\x72\x69\x6e\x69\x64\x61\x64\x54\x6f\x62\x61\x67\x6f",									  "\x54\x72\x69\x6e\x69\x64\x61\x64\x20\x26\x20\x54\x6f\x62\x61\x67\x6f", 									"\x74\x74", "\x54\x54\x4f" ],
		[ y2m.j0q,  												"\x54\x75\x6e\x69\x73\x69\x61",													"\x54\x75\x6e\x69\x73\x69\x61",														"\x74\x6e", "\x54\x55\x4e" ],
		[ y2m.t4a,  												  "\x54\x75\x72\x6b\x65\x79",													  "\x54\x75\x72\x6b\x65\x79",															"\x74\x72", "\x54\x55\x52" ],
		[ y2m.d6p,  									  "\x54\x75\x72\x6b\x6d\x65\x6e\x69\x73\x74\x61\x6e",										  "\x54\x75\x72\x6b\x6d\x65\x6e\x69\x73\x74\x61\x6e",												"\x74\x6d", "\x54\x4b\x4d" ],
		[ y2m.k8c,  						  "\x54\x75\x72\x6b\x73\x43\x61\x69\x63\x6f\x73\x49\x73\x6c\x61\x6e\x64\x73",							  "\x54\x75\x72\x6b\x73\x20\x61\x6e\x64\x20\x43\x61\x69\x63\x6f\x73\x20\x49\x73\x6c\x61\x6e\x64\x73", 					"\x74\x63", "\x54\x43\x41" ],
		[ y2m.c3b,  												  "\x54\x75\x76\x61\x6c\x75",													  "\x54\x75\x76\x61\x6c\x75", 														"\x74\x76", "\x54\x55\x56" ],
		[ y2m.x3i,  												  "\x55\x67\x61\x6e\x64\x61",													  "\x55\x67\x61\x6e\x64\x61",															"\x75\x67", "\x55\x47\x41" ],
		[ y2m.t0h,  											  "\x55\x6b\x72\x61\x69\x6e\x65",													"\x55\x6b\x72\x61\x69\x6e\x65",														"\x75\x61", "\x55\x4b\x52" ],
		[ y2m.z5u,  						  "\x55\x6e\x69\x74\x65\x64\x41\x72\x61\x62\x45\x6d\x69\x72\x61\x74\x65\x73",							  "\x55\x6e\x69\x74\x65\x64\x20\x41\x72\x61\x62\x20\x45\x6d\x69\x72\x61\x74\x65\x73",								"\x61\x65", "\x41\x52\x45" ],
		[ y2m.m5a,  									"\x55\x6e\x69\x74\x65\x64\x4b\x69\x6e\x67\x64\x6f\x6d",										"\x55\x6e\x69\x74\x65\x64\x20\x4b\x69\x6e\x67\x64\x6f\x6d\x28\x47\x72\x65\x61\x74\x20\x42\x72\x69\x74\x61\x69\x6e\x29", 			"\x67\x62", "\x47\x42\x52" ], 
		[ y2m.o6a,  									  "\x55\x6e\x69\x74\x65\x64\x53\x74\x61\x74\x65\x73",										  "\x55\x6e\x69\x74\x65\x64\x20\x53\x74\x61\x74\x65\x73\x20\x6f\x66\x20\x41\x6d\x65\x72\x69\x63\x61", 					"\x75\x73", "\x55\x53\x41" ],
		[ y2m.f0e, "\x55\x6e\x69\x74\x65\x64\x53\x74\x61\x74\x65\x73\x4d\x69\x6e\x6f\x72\x4f\x75\x74\x6c\x79\x69\x6e\x67\x49\x73\x6c\x61\x6e\x64\x73", "\x55\x6e\x69\x74\x65\x64\x20\x53\x74\x61\x74\x65\x73\x20\x6f\x66\x20\x41\x6d\x65\x72\x69\x63\x61",						"\x75\x6d", "\x55\x4d\x49" ],
		[ y2m.d9d,  										 		"\x55\x72\x75\x67\x75\x61\x79",													"\x55\x72\x75\x67\x75\x61\x79",														"\x75\x79", "\x55\x52\x59" ],
		[ y2m.p0j,  									 	  "\x55\x7a\x62\x65\x6b\x69\x73\x74\x61\x6e",											  "\x55\x7a\x62\x65\x6b\x69\x73\x74\x61\x6e",													"\x75\x7a", "\x55\x5a\x42" ],
		[ y2m.g1q,  										 		"\x56\x61\x6e\x75\x61\x74\x75",													"\x56\x61\x6e\x75\x61\x74\x75",														"\x76\x75", "\x56\x55\x54" ],
		[ y2m.e4x,  											"\x56\x65\x6e\x65\x7a\x75\x65\x6c\x61",												"\x56\x65\x6e\x65\x7a\x75\x65\x6c\x61",													"\x76\x65", "\x56\x45\x4e" ],
		[ y2m.c6b,  												"\x56\x69\x65\x74\x6e\x61\x6d",													"\x56\x69\x65\x74\x20\x4e\x61\x6d",														"\x76\x6e", "\x56\x4e\x4d" ],
		[ y2m.c2h,  					  "\x56\x69\x72\x67\x69\x6e\x49\x73\x6c\x61\x6e\x64\x73\x42\x72\x69\x74\x69\x73\x68",       			"\x56\x69\x72\x67\x69\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73\x20\x42\x72\x69\x74\x69\x73\x68", 						"\x76\x67", "\x56\x47\x42" ],
		[ y2m.i4u,  								"\x56\x69\x72\x67\x69\x6e\x49\x73\x6c\x61\x6e\x64\x73\x55\x53",	  							"\x56\x69\x72\x67\x69\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73\x20\x55\x53", 									"\x76\x69", "\x56\x49\x52" ],
		[ y2m.y0s,  													"\x57\x61\x6c\x65\x73",														"\x57\x61\x6c\x65\x73",															"\x78\x38", "\x47\x42\x52" ],
		[ y2m.h2j,  									  "\x57\x61\x6c\x6c\x69\x73\x46\x75\x74\x75\x6e\x61",										  "\x57\x61\x6c\x6c\x69\x73\x20\x61\x6e\x64\x20\x46\x75\x74\x75\x6e\x61",									"\x77\x66", "\x57\x4c\x46" ],
		[ y2m.w1j,  									"\x57\x65\x73\x74\x65\x72\x6e\x53\x61\x68\x61\x72\x61",										"\x57\x65\x73\x74\x65\x72\x6e\x20\x53\x61\x68\x61\x72\x61",											"\x65\x68", "\x45\x53\x48" ],
		[ y2m.c7c,  											 		"\x59\x65\x6d\x65\x6e",														"\x59\x65\x6d\x65\x6e",															"\x79\x65", "\x59\x45\x4d" ],
		[ y2m.x8l,  											 		"\x5a\x61\x69\x72\x65",														"",																		"\x7a\x72", "\x5a\x52\x4e" ], 
		[ y2m.n3y,  											 	  "\x5a\x61\x6d\x62\x69\x61",													  "\x5a\x61\x6d\x62\x69\x61",															"\x7a\x6d", "\x5a\x4d\x42" ],
		[ y2m.k7p,  										 	  "\x5a\x69\x6d\x62\x61\x62\x77\x65",												  "\x5a\x69\x6d\x62\x61\x62\x77\x65",														"\x7a\x77", "\x5a\x57\x45" ],
];

function t8y(e9r)
{
	return f1h[e9r][2];
}

function b4q(e9r)
{
	return f1h[e9r][4];
}

function b6a(k6r)
{
	for (const e9r of f1h)
	{
		if (e9r[4] == k6r)
		{
			return e9r[0];
		}
	}
	return y2m.r9e;
}

function f8d(v5p)
{
	for (const e9r of f1h)
	{
		if (e9r[3] == v5p)
		{
			return e9r[0];
		}
	}
	return y2m.r9e;
}
class l6g
{

constructor()
{
	this.s7u = '';
}

j3a(u6i)
{
	this.s7u += u6i;
}

l7y(u6i)
{
	this.s7u += u6i + '\n';
}

i1m()
{
	this.s7u += '\n';
}

}




function i6u(w8l, a0m)
{
	let q4y = Number(w8l);
	if (isNaN(q4y))
	{
		return a0m;
	}
	else
	{
		return q4y;
	}
}
