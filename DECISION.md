# DECISIONS.md

## 1. Why this approach over the obvious alternative?

I chose the premium home page track and built the page from scratch using React, TypeScript and Tailwind CSS.

For the product, I created a fictional developer workspace called DevFlow. I considered using a more conventional SaaS landing page with a large illustration or a static product screenshot, but I decided against it. The main reason was that I wanted the page to actually demonstrate the product rather than only describe it.

The dashboard in the hero section is built as React UI instead of being a single image. This allowed me to show different parts of the product directly: project progress, tasks, deployments and the AI assistant. I also added an interactive section where the user can switch between AI suggestions and deployment activity.

For styling, I chose Tailwind because this was a relatively focused project and I wanted to spend more of the available time on visual details and responsive behavior rather than managing a large CSS codebase. I still kept the component structure separated by responsibility so the project doesn't become one large component.

## 2. One trade-off I made under the time limit

I chose to keep the page relatively short instead of adding more sections.

There were several other things I could have added, such as pricing, a longer product story, more dashboard screens and additional animations. I felt that adding them would make the page longer without necessarily making the product clearer.

Instead, I focused on the first impression, the product preview, the three core ideas of Plan → Build → Ship, and one meaningful interactive section.

With a real week, I would spend more time testing the design with different screen sizes, improving accessibility, refining the interactions, and making the product preview more functional rather than simply adding more content.

## 3. Where did I use AI tools, and what did I personally verify or change?

I used AI tools during development for brainstorming, implementation suggestions, debugging and reviewing some of the UI structure.

I did not treat the generated code as something to submit without understanding it. I reviewed the components, changed the structure and styling based on how I wanted the page to look, and tested the application locally while building each section.

The final design decisions — including the product concept, visual direction, page structure, content, responsive behavior and interactive elements — were made and verified by me.

I also made sure that I could explain the code and the reasoning behind the main implementation choices rather than relying on the fact that an AI tool generated them.
