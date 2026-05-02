---
title: "Electro-mechanic analogy of a non-linear system"
subtitle: "Exploring the structural analogy between mechanical nonlinear oscillators and equivalent electrical or fluid systems."
category: "Vibratory Mechanics"
icon: "〰️"
summary: "Investigated the mathematical and physical analogy between nonlinear mechanical vibration systems (Duffing oscillator) based on a specific fan vibratory mechanism and equivalent analogous systems using PCB. The primary objective was to determine the existence of some configuration of a specific mode called \"isolate\" and to define a methodology to obtain it despite extremely unstable behavior and a non-directly achievable path."
tools: [Python, MATLAB]
keywords: [nonlinear dynamics, vibrations, analogy, Duffing oscillator, mechanical systems]
image: /assets/images/Vib1.jpeg
images:
  - src: /assets/images/Vib1.jpeg
    caption: "Fig. 1 — Phase portrait of the Duffing oscillator"
  - src: /assets/images/Vib2.jpeg
    caption: "Fig. 2 — Nonlinear frequency response (jump phenomenon)"
  - src: /assets/images/Vib3.jpeg
    caption: "Fig. 3 — Chaotic time history: displacement and velocity"
order: 3
---

## Overview

Classical mechanics and structural dynamics share deep mathematical connections with other physical domains through the concept of **system analogy**. This project investigates nonlinear vibration phenomena — specifically large-amplitude oscillations and limit-cycle behaviour — through the lens of analogous systems, exploiting the isomorphism between governing equations to gain physical intuition and cross-validate numerical solutions.

## Objectives

- Review classical linear analogies (mass–spring–damper ↔ RLC circuit).
- Extend the analogy framework to **nonlinear** oscillators (Duffing, Van der Pol).
- Simulate the dynamics of both mechanical and analogous systems.
- Identify regimes of quasi-periodic, chaotic, and limit-cycle behaviour.
- Discuss practical implications for structural health monitoring and vibration control.

## Background

### Linear Analogy

The equation of motion for a damped linear oscillator:

$$m\ddot{x} + c\dot{x} + kx = F(t)$$

is formally identical to Kirchhoff's voltage law for a series RLC circuit:

$$L\ddot{q} + R\dot{q} + \frac{q}{C} = V(t)$$

with the correspondences \\(m \leftrightarrow L\\), \\(c \leftrightarrow R\\), \\(k \leftrightarrow 1/C\\).

### Nonlinear Extension: Duffing Oscillator

The **Duffing equation** introduces a cubic stiffness nonlinearity:

$$\ddot{x} + \delta\dot{x} + \alpha x + \beta x^3 = \gamma\cos(\omega t)$$

Depending on parameters, this system exhibits:
- **Hardening** (\\(\beta > 0\\)) or **softening** (\\(\beta < 0\\)) frequency response
- Jump phenomena and bistability
- Period-doubling cascades leading to chaos

## Methodology

### Phase-Plane Analysis

Phase portraits \\((x, \dot{x})\\) are computed for different parameter regimes to map:

- Fixed points and their stability
- Limit cycles (Van der Pol regime)
- Chaotic attractors (Duffing with forcing)

### Numerical Integration

The equations are integrated using a 4th-order Runge–Kutta scheme. Key diagnostics:

| Diagnostic | Purpose |
|---|---|
| Phase portrait | Visualise attractor geometry |
| Poincaré section | Detect chaos / quasi-periodicity |
| Frequency spectrum | Identify harmonic content |
| Lyapunov exponent | Quantify chaos |

### Analogy Mapping

For each nonlinear mechanical system studied, the **equivalent analogous system** is derived and simulated independently. Agreement between solutions validates both models and provides physical intuition from the alternate domain.

## Results

> Replace this section with your actual results and figures.

- Demonstrated that the **Duffing backbone curve** can be reproduced in the analogous system with identical topology.
- Identified the critical forcing amplitude beyond which chaotic motion emerges.
- Showed that energy dissipation mechanisms in the mechanical and analogous systems are structurally equivalent.

## Figures

<figure>
  <img src="{{ '/assets/images/Vib1.jpeg' | relative_url }}" alt="Duffing phase portrait">
  <figcaption>Fig. 1 — Phase portrait of the Duffing oscillator in the chaotic regime. The two stable fixed points x₋ and x₊ (●) correspond to the two potential wells. The saddle point at the origin (○) separates their basins of attraction.</figcaption>
</figure>

## References & Tools

- **Python (SciPy / Matplotlib)** — numerical integration, phase-plane plots, Poincaré sections
- **MATLAB** — parametric sweeps, frequency-domain analysis
- Strogatz, S.H. — *Nonlinear Dynamics and Chaos* (reference)
- Guckenheimer & Holmes — *Nonlinear Oscillations, Dynamical Systems, and Bifurcations*
