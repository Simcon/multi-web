---
title: 'Introducing Multi: A Product-Ready Foundation Built on .NET MAUI'
pubDate: 2026-02-04T00:00:00Z
description: "MAUI provides the engine; Multi builds the rest of the system around it."
author: 'Paul C'
image: '/blog/post-01-cover.png'
tags: ['productivity', 'announcement', 'MAUI']
---

### Introducing Multi: A Product-Ready Foundation Built on .NET MAUI

If you’ve spent any time building real applications with .NET MAUI, you’ll know the framework itself is powerful — but deliberately low-level. MAUI gives you the runtime, the platform abstractions, and the ability to target multiple devices from a single codebase. What it doesn’t give you is a finished application architecture, deployment pipeline, or a clear opinion on how all the moving parts should fit together.

That gap is exactly where Multi sits.

Multi is built directly on top of .NET MAUI using MAUI Blazor Hybrid. It’s not a replacement for MAUI, and it’s not something you choose instead of it. MAUI provides the engine; Multi builds the rest of the system around it. The goal is simple: remove the repeated decisions, boilerplate, and wiring that every serious MAUI project ends up recreating, and give you a production-ready starting point from day one.

### From framework to foundation

Vanilla MAUI is intentionally flexible. That flexibility is great for experimentation, but it also means every team has to answer the same questions over and over again:

How should the solution be structured?
Where does business logic live?
How do you handle authentication across apps and APIs?
How do browser extensions or web surfaces fit in?
How do you test, deploy, and ship consistently across platforms?

Multi answers those questions up front.

It provides a clean, opinionated architecture based on proven patterns like Clean Architecture and CQRS, layered on top of MAUI Blazor Hybrid. Business logic is separated from UI concerns, cross-cutting behaviour is centralised, and the application flow is message-driven rather than UI-driven. The result is a codebase that’s easier to reason about, easier to test, and easier to evolve as the product grows.

### Built for real apps, not demos

Multi is designed for applications that need to ship, scale, and be maintained over time. Authentication is configured using ASP.NET Identity and applies consistently across UI and APIs. Mobile apps, desktop apps, and browser extensions all share the same identity and backend. Developer infrastructure is managed using Aspire. Deployment pipelines are included from the start, taking your app from source control to the App Store and Play Store as a single, repeatable process.

Testing is treated as a first-class concern, with unit and integration test examples that align with the underlying architecture. Sample code demonstrates how different render modes, platforms, and native capabilities are handled in practice, not just in theory.

### What follows

The sections below break down the concrete features Multi adds on top of vanilla .NET MAUI — from architecture and authentication, through deployment, testing, and sample applications. Think of it less as a list of features, and more as a description of everything you no longer need to build yourself before you can focus on your actual product.

If MAUI gives you the building blocks, Multi gives you the blueprint.

### Key Features

#### Architecture & Structure

- **Clean Architecture by default**: Enforced separation between Domain, Application, Infrastructure, and Presentation layers.
- **Opinionated solution layout**: A production-ready structure designed for long-lived applications.
- **Business logic isolation**: Core logic kept independent of UI frameworks and platform concerns.
- **CQRS-style messaging pipeline**: Commands, queries, and events flow through a consistent, explicit application pipeline.
- **Centralised cross-cutting concerns**: Validation, logging, and persistence handled without leaking into UI code.
- **Messaging-first application flow**: Application behaviour driven by messages rather than UI events.

#### UI & Application Model

- **MAUI Blazor Hybrid UI**: Blazor and Razor components hosted inside native MAUI applications.
- **Shared Razor components**: Reuse the same UI components across mobile, desktop, web, and extensions.
- **Product-ready layouts and navigation**: Common application patterns included from the start.
- **Feed and stream UI patterns**: Built-in approaches for content- and activity-driven applications.
- **Consistent application shell**: Unified structure across all platforms.
- **No blank-canvas starting point**: Sensible defaults instead of empty templates.

#### Authentication & Security

- **ASP.NET Identity integration**: Identity configured out of the box.
- **Unified authentication model**: Authentication applied consistently to Blazor UI, Razor pages, and API endpoints.
- **Built-in login and registration flows**: Ready-to-use auth screens included.
- **Shared identity across clients**: One identity and session model for all platforms.
- **Security as a foundation**: Authentication and authorization treated as core concerns.

#### Multi-Surface Clients

- **iOS client support**: Native iOS app with login and registration flows.
- **Android client support**: Native Android app with login and registration flows.
- **macOS desktop support**: Desktop application targeting macOS.
- **Windows desktop support**: Desktop application targeting Windows.
- **Browser extension support**: Extensions integrated into the same application ecosystem.
- **Shared business logic across surfaces**: No duplicated or cut-down implementations.

#### Web & Extension Integration

- **First-class browser extensions**: Extensions treated as a core surface, not an add-on.
- **JavaScript orchestration hooks**: Structured mechanisms for invoking and coordinating JavaScript.
- **Shared backend and data model**: Apps and extensions use the same APIs, identity, and storage.
- **In-context feature delivery**: Surface functionality directly in the user’s workflow.

#### Developer Infrastructure

- **Aspire integration**: Aspire included and preconfigured for development.
- **Local service orchestration**: Databases and services managed as part of the solution.
- **Environment configuration management**: Clear handling of local and development environments.
- **Multi-device debugging support**: Streamlined debugging across devices, emulators, and simulators.
- **End-to-end local execution**: Run and observe the full system locally with minimal setup.

#### Deployment & Delivery

- **End-to-end deployment pipeline**: Complete pipeline from repository to production.
- **Single deployment flow**: One repeatable process across all platforms.
- **App Store support from day one**: Apple App Store publishing built in.
- **Play Store support from day one**: Google Play publishing built in.
- **Automated signing and packaging**: Certificates and provisioning handled in the pipeline.
- **Low-friction releases**: Predictable, repeatable store deployments.

#### Testing

- **Unit test examples**: Sample tests for domain and application layers.
- **Integration test examples**: Tests covering APIs, persistence, and messaging boundaries.
- **Testable architecture**: Structure designed to support isolation and verification.
- **Layer-aligned testing**: Tests map cleanly to architectural boundaries.
- **Testing as a first-class concern**: Not optional or deferred.

#### Sample Code & Reference Applications

- **Render mode examples**: Code samples covering Static, Interactive Server, Interactive WebAssembly, and native client devices.
- **JavaScript invocation samples**: Demonstrations of JS interop across platforms.
- **Native functionality examples**: Samples showing access to device- and platform-specific features.
- **Complete Todo App**: A full reference application demonstrating how everything fits together end to end.

#### Productivity & Defaults

- **Boilerplate handled for you**: Common setup and wiring already implemented.
- **Sensible defaults**: Practical choices made up front to reduce decision fatigue.
- **Faster time to first feature**: Start building product logic immediately.
- **Designed for real products**: Optimised for shipping and evolving applications, not demos.
