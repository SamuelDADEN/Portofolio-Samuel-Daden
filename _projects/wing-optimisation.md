---
title: "Wing Aerodynamic Optimisation"
subtitle: "Shape optimisation of a wing using OpenVSP for geometry and Xfoil for 2D aerodynamic analysis."
category: "Computational Aerodynamics"
icon: "🛩️"
summary: "Optimised wing planform and airfoil shape to maximise the lift-to-drag ratio at cruise condition, using OpenVSP for 3D geometry and Xfoil for section-level aerodynamic evaluation."
tools: [OpenVSP, Xfoil, Python]
keywords: [wing optimisation, aerodynamics, lift-to-drag, airfoil, OpenVSP, Xfoil]
image: /assets/images/wing-polar.svg
order: 2
---

## Overview

Wing design is a multidisciplinary challenge that balances aerodynamic efficiency, structural constraints, and manufacturing considerations. This project focuses on the **aerodynamic optimisation** of a wing at cruise conditions, coupling **OpenVSP** for parametric 3D geometry with **Xfoil** for fast, accurate 2D section analysis.

## Objectives

- Define a parametric wing geometry (sweep, taper, twist, span).
- Select and optimise the airfoil section(s) for the operating Reynolds and Mach number.
- Maximise cruise lift-to-drag ratio \\(L/D\\) subject to minimum lift and structural thickness constraints.
- Analyse the sensitivity of \\(L/D\\) to key design variables.

## Tools & Workflow

### OpenVSP

OpenVSP is used to define the **3D parametric geometry**:

- Wing planform (span, aspect ratio, sweep, taper ratio)
- Spanwise twist distribution
- Section-to-section lofting

Geometric parameters are exported and varied programmatically via Python scripting.

### Xfoil

Xfoil evaluates the **2D aerodynamic polars** of each spanwise section:

- Lift coefficient \\(C_l(\alpha)\\)
- Drag polar \\(C_d(C_l)\\)
- Transition prediction with \\(e^N\\) method

Results are integrated spanwise using a strip-theory approach to obtain total wing \\(C_L\\) and \\(C_D\\).

## Methodology

### Design Variables

| Variable | Range |
|---|---|
| Aspect ratio \\(AR\\) | 6 – 12 |
| Taper ratio \\(\lambda\\) | 0.3 – 0.7 |
| Root airfoil max thickness \\((t/c)_r\\) | 12% – 18% |
| Tip airfoil max thickness \\((t/c)_t\\) | 9% – 14% |
| Washout twist | 0° – 4° |

### Objective & Constraints

$$\max_{x} \; \frac{L}{D} \quad \text{subject to} \quad C_L \geq C_{L,\text{cruise}}, \; (t/c) \geq (t/c)_{\min}$$

A surrogate model (response surface) is built from sampled evaluations to reduce computational cost.

## Results

> Replace this section with your actual results, tables, and figures.

- Best configuration achieved \\(L/D = \text{XX}\\) at cruise \\(\alpha\\).
- Optimal taper ratio reduced induced drag by **X%** compared to the rectangular baseline.
- Twist distribution postponed tip stall, improving low-speed handling.

## Figures

<figure>
  <img src="{{ '/assets/images/wing-polar.svg' | relative_url }}" alt="Wing drag polar">
  <figcaption>Fig. 1 — Drag polar comparison between the baseline (dashed) and optimised wing. The tangent from the origin gives the maximum L/D operating point (●).</figcaption>
</figure>

## References & Tools

- **OpenVSP 3.x** — parametric aircraft geometry
- **Xfoil 6.99** — 2D viscous panel method
- **Python** — automation, optimisation loop, post-processing
