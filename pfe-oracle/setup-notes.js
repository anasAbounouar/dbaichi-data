// Script to populate speaker notes for the PFE Oracle presentation
const API_BASE_URL = 'http://localhost:3000/api';
const PRESENTATION_ID = 'pfe-oracle-2025';

const speakerNotes = [
    // Slide 0 - Title
    `Welcome everyone. This presentation covers my end-of-studies project on Infrastructure as Code support in Graal CI.

Key points to mention:
• Project duration and context
• Collaboration with Oracle team
• Focus on improving cloud infrastructure management`,

    // Slide 1 - Agenda
    `Quick overview of presentation structure:
• Company background and team introduction
• Problem statement and our solution approach
• Technical implementation details
• Results and future enhancements

Estimated duration: 20-25 minutes with Q&A`,

    // Slide 2 - Company & Team divider
    `Transitioning to company overview section.`,

    // Slide 3 - Oracle Overview
    `Oracle is a global leader in cloud infrastructure and database solutions.

Emphasize:
• Market position and scale
• Cloud infrastructure expertise
• Enterprise focus
• Innovation in cloud technologies`,

    // Slide 4 - Oracle Mission
    `Oracle's mission centers on empowering businesses through integrated cloud solutions.

Focus on how this aligns with our project goals.`,

    // Slide 5 - Graal Systems Overview
    `Graal Systems specializes in cloud-native solutions and infrastructure automation.

Key points:
• Partnership with Oracle
• Focus on modern DevOps practices
• Expertise in IaC and CI/CD`,

    // Slide 6 - My Role
    `As PFE intern, my responsibilities included:

• Designing the IaC framework architecture
• Implementing core components
• Integrating with existing CI/CD pipeline
• Testing and validation

Duration: 6 months full-time`,

    // Slide 7 - Team Structure
    `Collaborative team environment:

• Project supervisor: Technical guidance
• DevOps team: Integration support
• Regular sprint meetings and code reviews
• Agile methodology with 2-week sprints`,

    // Slide 8 - Problem & Solution divider
    `Moving to the core problem statement.`,

    // Slide 9 - Current Challenges
    `Infrastructure management pain points:

• Manual OCI resource provisioning
• Time-consuming and error-prone
• Lack of version control
• Difficulty in reproducing environments
• No infrastructure history or audit trail

These issues were blocking team productivity.`,

    // Slide 10 - Manual Process Issues
    `Manual approach drawbacks:

• Human errors in configuration
• Inconsistent environments
• Time waste (hours per deployment)
• No rollback capability
• Knowledge siloed in individuals`,

    // Slide 11 - Why IaC?
    `Infrastructure as Code benefits:

• Declarative configuration
• Version control integration
• Automated provisioning
• Reproducible environments
• Documentation through code
• Team collaboration enabled

Perfect solution for our challenges.`,

    // Slide 12 - Solution Requirements
    `Project requirements:

• Support OCI resources (VCN, compute, storage)
• Integration with GitLab CI/CD
• JSON-based configuration
• Pulumi as IaC engine
• Validation and error handling
• Team-friendly abstraction layer`,

    // Slide 13 - Pulumi Advantages
    `Why Pulumi over alternatives:

• Modern architecture
• Programming language support
• Better state management
• Strong typing and validation
• Active community
• OCI provider support`,

    // Slide 14 - How Pulumi Works
    `Pulumi workflow:

1. Define infrastructure in code
2. Pulumi generates dependency graph
3. Calls cloud provider APIs
4. Manages state automatically
5. Provides diff and preview

This simplifies our framework implementation.`,

    // Slide 15 - Project Management divider
    `Project organization and methodology.`,

    // Slide 16 - Agile Methodology
    `We used Kanban agile approach:

• Continuous flow of tasks
• Visual board for tracking
• Regular team meetings
• Iterative development
• Quick adaptation to changes

This kept project on track.`,

    // Slide 17 - Project Timeline
    `6-month timeline breakdown:

Month 1-2: Research and design
Month 3-4: Core implementation
Month 5: Integration and testing
Month 6: Documentation and refinement

Milestones met on schedule.`,

    // Slide 18 - Communication Tools
    `Tools for collaboration:

• Jira: Task tracking and planning
• GitLab: Code repository and CI/CD
• Slack: Daily communication
• Confluence: Documentation

Ensured team alignment.`,

    // Slide 19 - Technical Implementation divider
    `Now diving into technical details.`,

    // Slide 20 - Solution Architecture
    `High-level architecture:

• JSON configuration layer (user-facing)
• Framework abstraction layer
• Pulumi engine
• OCI API

Clean separation of concerns.`,

    // Slide 21 - Use Case Diagram
    `System actors:

• DevOps Engineer: Defines infrastructure
• CI/CD Pipeline: Executes provisioning
• OCI: Provides resources

Clear interaction model.`,

    // Slide 22 - Project Structure
    `Organized codebase:

• /config: JSON schemas
• /src: Framework code
• /resources: Resource implementations
• /tests: Validation tests
• /docs: Documentation

Maintainable structure.`,

    // Slide 23 - JSON Configuration Example
    `Simple, declarative configuration:

• Define VCNs, subnets, instances
• Specify properties clearly
• No complex syntax
• Version controlled
• Team readable

Example shows production VCN setup.`,

    // Slide 24 - Core Framework Components
    `Framework architecture:

• BaseResource: Common interface
• ResourceFactory: Object creation
• ConfigParser: JSON validation
• DependencyResolver: Order management
• PulumiAdapter: Engine integration

Each component has single responsibility.`,

    // Slide 25 - Class Diagram
    `Technical design:

• Abstract base classes
• Concrete resource implementations
• Factory pattern for creation
• Dependency injection
• Extensible architecture

Follows SOLID principles.`,

    // Slide 26 - Factory Pattern
    `ResourceFactory benefits:

• Centralized object creation
• Type safety
• Easy to add new resources
• Consistent initialization
• Validation at creation

Example: createResource('vcn', config)`,

    // Slide 27 - Dependency Resolver
    `Automatic dependency management:

• Detects resource dependencies
• Builds DAG (directed acyclic graph)
• Determines correct order
• Prevents circular dependencies
• Ensures successful provisioning

Critical for complex infrastructures.`,

    // Slide 28 - Implemented Resources
    `Currently supported OCI resources:

• VCN (Virtual Cloud Network)
• Subnets (public/private)
• Internet Gateway
• Compute Instances
• Security Lists
• Route Tables

More resources easily added.`,

    // Slide 29 - Development Workflow
    `Standard development process:

1. Write JSON config
2. Commit to Git
3. Pipeline validates
4. Preview changes
5. Apply to OCI
6. Verify deployment

Fast and safe.`,

    // Slide 30 - GitLab CI Pipeline
    `Automated pipeline stages:

• Validate: Check JSON syntax
• Plan: Preview changes
• Apply: Deploy resources
• Test: Verify infrastructure

Runs on every commit to main branch.`,

    // Slide 31 - Pull Request Workflow
    `Code review process:

• Developer creates feature branch
• Writes infrastructure config
• Opens merge request
• Pipeline runs validation
• Team reviews
• Merge to main triggers deployment

Quality assurance built-in.`,

    // Slide 32 - Results & Validation divider
    `Project outcomes and achievements.`,

    // Slide 33 - Testing Strategy
    `Comprehensive testing:

• Unit tests: Component validation
• Integration tests: End-to-end flows
• Validation tests: JSON schema
• Pipeline tests: CI/CD verification

Ensures reliability.`,

    // Slide 34 - Test Results
    `Testing achievements:

• 95%+ test coverage
• All critical paths tested
• Pipeline working smoothly
• Zero production failures

High quality delivered.`,

    // Slide 35 - Performance Metrics
    `Significant improvements:

• Deployment time: ~1 hour (vs 3+ hours manual)
• Error reduction: Human errors eliminated
• Team collaboration: Enhanced through code review
• Audit trail: Full Git history

Measurable success.`,

    // Slide 36 - Real Deployment Example
    `Live production deployment:

• Multi-tier application infrastructure
• 3 VCNs, 6 subnets, 12 instances
• Deployed in 45 minutes
• Zero errors
• Fully reproducible

Demonstrates framework capability.`,

    // Slide 37 - Benefits Achieved
    `Key improvements delivered:

• Speed: 70% faster deployments
• Reliability: Consistent configurations
• Collaboration: Git-based workflows
• Documentation: Infrastructure as code
• Scalability: Easy to replicate

Project objectives met.`,

    // Slide 38 - Future Enhancements divider
    `Roadmap for future improvements.`,

    // Slide 39 - Planned Features
    `Enhancement roadmap:

• Additional OCI resources (Load balancers, databases)
• Terraform compatibility layer
• Web UI for configuration
• Better error messages
• Cost estimation preview

Continuous improvement planned.`,

    // Slide 40 - Lessons Learned
    `Key takeaways:

• Importance of good abstractions
• Value of comprehensive testing
• Team communication critical
• Iterative development works
• Documentation saves time

Valuable professional experience.`,

    // Slide 41 - Conclusion
    `Project summary:

• Successfully implemented IaC framework
• Integrated with GitLab CI/CD
• Improved team productivity significantly
• Production-ready and stable
• Foundation for future enhancements

Thank you for your attention!`,

    // Slide 42 - Questions
    `Open for questions and discussion.

Be prepared to discuss:
• Technical architecture choices
• Pulumi vs other IaC tools
• Integration challenges
• Testing approach
• Future roadmap`,

    // Slide 43 - Thank You
    `Express gratitude:

• Oracle team for opportunity
• Graal Systems for guidance
• Project supervisor
• DevOps team for collaboration

Acknowledge support received.`
];

async function clearAndSetupNotes() {
    console.log('Starting notes setup...');

    for (let i = 0; i < speakerNotes.length; i++) {
        try {
            const response = await fetch(`${API_BASE_URL}/notes/${PRESENTATION_ID}/${i}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ notes: speakerNotes[i] })
            });

            if (response.ok) {
                console.log(`✓ Slide ${i}: Notes saved`);
            } else {
                console.error(`✗ Slide ${i}: Failed to save`);
            }
        } catch (error) {
            console.error(`✗ Slide ${i}: Error -`, error.message);
        }

        // Small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log('\n✅ All notes have been set up!');
    console.log('Refresh your presentation to see the new notes.');
}

// Run the setup
clearAndSetupNotes();
