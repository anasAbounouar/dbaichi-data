// Script to populate speaker notes for the PFE Oracle presentation
const API_BASE_URL = 'http://localhost:3000/api';
const PRESENTATION_ID = 'pfe-oracle-2025';

const speakerNotes = [
    // Slide 0 - Title
    `• Greet jury
• 6-month internship at Oracle/Graal Systems
• IaC framework for OCI provisioning via GitLab CI`,

    // Slide 1 - Agenda
    `• ~20 min presentation
• 6 main sections
• Q&A at end`,

    // Slide 2 - Company & Team divider
    `[Section transition - no notes needed]`,

    // Slide 3 - Oracle Overview
    `• Global leader in DB & cloud
• Focus: Enterprise solutions
• Strong R&D investment`,

    // Slide 4 - Oracle Mission
    `• Mission: Empower businesses via integrated cloud
• Aligns with project: Cloud automation`,

    // Slide 5 - Graal Systems Overview
    `• Cloud-native specialists
• Oracle partnership
• DevOps & IaC expertise`,

    // Slide 6 - My Role
    `• Framework architecture design
• Core implementation
• CI/CD integration
• Testing & validation
• 6 months full-time`,

    // Slide 7 - Team Structure
    `• Supervisor + DevOps team
• Kanban methodology
• Regular meetings & code reviews`,

    // Slide 8 - Problem & Solution divider
    `[Section transition - no notes needed]`,

    // Slide 9 - Current Challenges
    `• Manual OCI provisioning = slow & error-prone
• No version control
• Can't reproduce environments
• No audit trail
• Blocking productivity`,

    // Slide 10 - Manual Process Issues
    `• Human errors
• Inconsistent configs
• Hours wasted
• No rollback
• Knowledge silos`,

    // Slide 11 - Why IaC?
    `• Declarative configs
• Git versioning
• Automated provisioning
• Reproducible
• Self-documenting
• Team collaboration`,

    // Slide 12 - Solution Requirements
    `• Support: VCN, compute, storage, networking
• GitLab CI/CD integration
• JSON configs (simple)
• Pulumi engine
• Validation built-in
• Team-friendly abstractions`,

    // Slide 13 - Pulumi Advantages
    `• Modern vs Terraform
• Multi-language support
• Better state management
• Strong typing
• Active community
• Native OCI support`,

    // Slide 14 - How Pulumi Works
    `• Code → Dependency graph → API calls → State
• Auto diff/preview
• Simplifies framework`,

    // Slide 15 - Project Management divider
    `[Section transition - no notes needed]`,

    // Slide 16 - Agile Methodology
    `• Kanban board
• Continuous flow
• Regular meetings
• Iterative dev`,

    // Slide 17 - Project Timeline
    `• M1-2: Research & design
• M3-4: Core dev
• M5: Integration & tests
• M6: Docs & polish
• All milestones met`,

    // Slide 18 - Communication Tools
    `• Jira: Task tracking
• GitLab: Code & CI/CD
• Slack: Daily comms
• Confluence: Docs`,

    // Slide 19 - Technical Implementation divider
    `[Section transition - no notes needed]`,

    // Slide 20 - Solution Architecture
    `• 4 layers: JSON → Framework → Pulumi → OCI
• Clean separation of concerns`,

    // Slide 21 - Use Case Diagram
    `• DevOps: Defines infra
• Pipeline: Executes
• OCI: Provisions`,

    // Slide 22 - Project Structure
    `• /config, /src, /resources, /tests, /docs
• Organized & maintainable`,

    // Slide 23 - JSON Configuration Example
    `• Simple, declarative
• Human-readable names
• Version controlled
• Example: Prod VCN + subnet`,

    // Slide 24 - Core Framework Components
    `• BaseResource: Interface
• ResourceFactory: Creation
• ConfigParser: Validation
• DependencyResolver: Order
• PulumiAdapter: Integration
• Single responsibility`,

    // Slide 25 - Class Diagram
    `• Abstract base classes
• Factory pattern
• SOLID principles
• Extensible design`,

    // Slide 26 - Factory Pattern
    `• Centralized creation
• Type safety
• Easy to extend
• Example: createResource('vcn', config)`,

    // Slide 27 - Dependency Resolver
    `• Auto-detect dependencies
• Build DAG
• Correct provisioning order
• Prevent circular deps
• Critical for complex infra`,

    // Slide 28 - Implemented Resources
    `• VCN, Subnets, IGW
• Compute instances
• Security lists, Route tables
• Easy to add more`,

    // Slide 29 - Development Workflow
    `• Write JSON → Git commit → Pipeline → Preview → Apply → Verify
• Fast & safe`,

    // Slide 30 - GitLab CI Pipeline
    `• Validate → Plan → Apply → Test
• Runs on every main commit`,

    // Slide 31 - Pull Request Workflow
    `• Feature branch → MR → Validation → Review → Merge
• Quality assurance built-in`,

    // Slide 32 - Results & Validation divider
    `[Section transition - no notes needed]`,

    // Slide 33 - Testing Strategy
    `• Unit, integration, validation, pipeline tests
• Comprehensive coverage`,

    // Slide 34 - Test Results
    `• 95%+ coverage
• All critical paths tested
• Zero prod failures`,

    // Slide 35 - Performance Metrics
    `• 1 hour (vs 3+ manual)
• No human errors
• Full Git audit trail
• 70% faster`,

    // Slide 36 - Real Deployment Example
    `• 3 VCNs, 6 subnets, 12 instances
• 45 min deployment
• Zero errors
• Fully reproducible`,

    // Slide 37 - Benefits Achieved
    `• Speed, reliability, collaboration
• Documentation via code
• Scalable
• Objectives met`,

    // Slide 38 - Future Enhancements divider
    `[Section transition - no notes needed]`,

    // Slide 39 - Planned Features
    `• More resources (LB, DB)
• Terraform compat
• Web UI
• Cost estimation`,

    // Slide 40 - Lessons Learned
    `• Good abstractions matter
• Testing crucial
• Communication key
• Iterative dev works`,

    // Slide 41 - Conclusion
    `• Framework complete & production-ready
• GitLab CI/CD integrated
• Team productivity improved
• Foundation for future`,

    // Slide 42 - Questions
    `• Open for Q&A
• Ready to discuss: Architecture, Pulumi choice, challenges, testing`,

    // Slide 43 - Thank You
    `• Thank Oracle, Graal Systems, supervisor, DevOps team`
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
