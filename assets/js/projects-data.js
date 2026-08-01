window.PORTFOLIO_PROJECTS = [
  {
    id: "01",
    slug: "enterprise-product-configuration-framework",
    title: "Enterprise Product Configuration Framework",
    category: "Enterprise Systems",
    accent: "cyan",
    summary:
      "A high-level framework for translating complex product requirements into validated, order-ready configurations through structured rules and controlled workflows.",

    workflow: [
      ["Requirement Intake", "Business needs, use cases and constraints"],
      ["Product Selection", "Families, attributes and options"],
      ["Rule Modelling", "Dependencies, constraints and configuration logic"],
      ["Validation", "Completeness, conflicts and invalid combinations"],
      ["Compatibility Review", "Technical and commercial checks"],
      ["Approval", "Structured review and ownership"],
      ["Order-Ready Output", "Validated configuration and handover"]
    ],

    supporting: [
      ["Product Data", "Attributes and classifications"],
      ["Business Rules", "Controlled rule repository"],
      ["Validation Logic", "Conflict and completeness checks"],
      ["Process Workflow", "Review and approval path"],
      ["Documentation", "Stories, tests and guidance"],
      ["Governance", "Traceability and change control"]
    ],

    challenge:
      "Complex product logic depended on interrelated attributes, compatibility constraints, commercial checks and engineering decisions that were difficult to apply consistently.",

    role:
      "Requirements analysis, process design, user stories, acceptance criteria, rule documentation, backlog support, UAT and release-readiness coordination.",

    outcome:
      "A repeatable foundation for product configuration, rule validation, review and downstream handover.",

    tools: [
      "SAP ERP",
      "Azure DevOps",
      "Excel",
      "Visio",
      "Decision Tables",
      "Agile Scrum",
      "Functional Specifications",
      "Process Mapping"
    ],

    skills: [
      "Business Analysis",
      "Product Delivery",
      "Requirements Engineering",
      "Enterprise Systems",
      "Process Design",
      "Stakeholder Management"
    ]
  },

  {
    id: "02",
    slug: "enterprise-product-data-integration-framework",
    title: "Enterprise Product Data Integration Framework",
    category: "Systems Integration",
    accent: "blue",
    summary:
      "A high-level data flow for moving structured product information across configuration, transformation, API, lifecycle and ERP layers.",

    workflow: [
      ["Source Output", "Structured product data generated"],
      ["Transformation", "Payload reshaped for downstream use"],
      ["Validation", "Fields, hierarchy and formats checked"],
      ["API Layer", "Data transmitted across services"],
      ["Lifecycle System", "Product structure updated"],
      ["ERP Master Data", "Enterprise records aligned"],
      ["Release Verification", "End-to-end behaviour confirmed"]
    ],

    supporting: [
      ["Data Contracts", "Expected fields and formats"],
      ["Mappings", "Source-to-target relationships"],
      ["Transformation Rules", "Structural conversion"],
      ["API Behaviour", "Requests, responses and errors"],
      ["Traceability", "Data lineage across systems"],
      ["Testing", "Payload and release evidence"]
    ],

    challenge:
      "Product data moved through multiple systems and formats, creating risk around hierarchy, mapping, transformation behaviour and end-to-end traceability.",

    role:
      "Current- and future-state analysis, source-to-target requirements, structured payload validation, API clarification, integration testing and defect triage.",

    outcome:
      "Clearer data-flow ownership, stronger validation before release and more consistent enterprise data handoff.",

    tools: [
      "SAP ERP",
      "PLM",
      "REST APIs",
      "XML",
      "XSL Transformation",
      "Azure DevOps",
      "Integration Testing",
      "Data Flow Modelling"
    ],

    skills: [
      "Systems Integration",
      "Data Mapping",
      "API Requirements",
      "XML Validation",
      "Gap Analysis",
      "Release Readiness"
    ]
  },

  {
    id: "03",
    slug: "requirements-to-release-delivery-framework",
    title: "Requirements-to-Release Delivery Framework",
    category: "Agile Delivery",
    accent: "violet",
    summary:
      "A delivery framework that turns business needs into traceable backlog items, acceptance criteria, release evidence and production-ready outcomes.",

    workflow: [
      ["Discovery", "Business need and scope clarified"],
      ["Backlog Design", "Epics, features and stories structured"],
      ["Acceptance Criteria", "Expected behaviour made testable"],
      ["Implementation Support", "Questions and dependencies resolved"],
      ["UAT & Regression", "Business and system behaviour validated"],
      ["Release Readiness", "Evidence, risk and ownership confirmed"],
      ["Production Support", "Post-release issues monitored"]
    ],

    supporting: [
      ["Traceability", "Need-to-story-to-test linkage"],
      ["Prioritisation", "Scope and sequence decisions"],
      ["Readiness", "Clear input before development"],
      ["Completion", "Evidence before closure"],
      ["Release Artifacts", "Notes and change summaries"],
      ["Support Loop", "Feedback into backlog"]
    ],

    challenge:
      "Complex enterprise changes required consistent traceability from initial need through implementation, testing, release and production support.",

    role:
      "Scope definition, backlog structuring, acceptance criteria, implementation clarification, UAT coordination, release evidence and post-release triage.",

    outcome:
      "Improved delivery clarity, stronger release evidence and more consistent stakeholder alignment.",

    tools: [
      "Azure DevOps",
      "Agile Scrum",
      "User Stories",
      "Acceptance Criteria",
      "UAT",
      "Regression Testing",
      "Service Management",
      "Release Governance"
    ],

    skills: [
      "Backlog Management",
      "Requirements Ownership",
      "Agile Delivery",
      "UAT Leadership",
      "Defect Triage",
      "Release Management"
    ]
  },

  {
    id: "04",
    slug: "automated-business-reporting-workflow",
    title: "Automated Business Reporting Workflow",
    category: "Reporting Automation",
    accent: "green",
    summary:
      "A reusable workflow for extracting source data, transforming it into structured output, validating key fields and refreshing business reports.",

    workflow: [
      ["Source Intake", "Latest report or file identified"],
      ["Extraction", "Required blocks and fields captured"],
      ["Transformation", "Data normalized into tabular form"],
      ["Validation", "References and required fields checked"],
      ["User Selection", "Columns and report views controlled"],
      ["Refresh", "Latest source data loaded"],
      ["Output", "Structured report produced"]
    ],

    supporting: [
      ["Source Control", "Latest input identified"],
      ["Field Dictionary", "Expected columns documented"],
      ["Validation Rules", "Exceptions flagged"],
      ["User Controls", "Clear and refresh actions"],
      ["Scalability", "New fields supported"],
      ["Auditability", "Source and output trace"]
    ],

    challenge:
      "Recurring reports required repeated manual extraction and spreadsheet preparation, creating rework, inconsistent outputs and limited scalability.",

    role:
      "User-flow design, output modelling, field-selection logic, validation rules, refresh controls, scalability planning and process documentation.",

    outcome:
      "Reduced repetitive handling, improved report consistency and created a reusable pattern for additional reports.",

    tools: [
      "Excel",
      "Power Query",
      "VBA",
      "PDF Import",
      "Folder Refresh",
      "Validation Rules",
      "Data Transformation",
      "User Controls"
    ],

    skills: [
      "Process Automation",
      "Data Transformation",
      "Reporting Design",
      "Validation Logic",
      "User Experience",
      "Scalability Planning"
    ]
  },

  {
    id: "05",
    slug: "technical-issue-analysis-framework",
    title: "Technical Issue Analysis Framework",
    category: "Technical Validation",
    accent: "orange",
    summary:
      "A structured investigation model for analysing system behaviour, logs, structured files, defect patterns and validation evidence.",

    workflow: [
      ["Issue Intake", "Symptoms and severity captured"],
      ["Evidence Collection", "Logs, files and outputs gathered"],
      ["Pattern Analysis", "Recurring behaviour identified"],
      ["Root-Cause Review", "Likely failure point isolated"],
      ["Validation", "Fix behaviour and evidence reviewed"],
      ["Stakeholder Update", "Status and next steps communicated"],
      ["Closure", "Resolution evidence documented"]
    ],

    supporting: [
      ["Issue Taxonomy", "Categories and severity"],
      ["Evidence Standards", "Proof before closure"],
      ["Cross-System Analysis", "Application behaviour compared"],
      ["Traceability", "Issue-to-fix linkage"],
      ["Reporting", "Patterns summarised"],
      ["Knowledge Transfer", "Findings shared"]
    ],

    challenge:
      "Priority issues crossed multiple applications and data sources, making ownership, root cause and validation difficult to establish quickly.",

    role:
      "Context gathering, log and file analysis, pattern identification, stakeholder communication, validation-evidence review and closure support.",

    outcome:
      "Clearer issue ownership, more consistent validation evidence and improved stakeholder visibility.",

    tools: [
      "Log Analysis",
      "XML",
      "SQL",
      "Defect Tracking",
      "Technical Validation",
      "Root-Cause Analysis",
      "Issue Reporting",
      "Stakeholder Communication"
    ],

    skills: [
      "Technical Analysis",
      "Defect Triage",
      "Root-Cause Analysis",
      "Validation",
      "Data Interpretation",
      "Communication"
    ]
  },

  {
    id: "06",
    slug: "enterprise-data-migration-rules-framework",
    title: "Enterprise Data Migration & Rules Framework",
    category: "Data Migration",
    accent: "magenta",
    summary:
      "A structured approach for reconciling business rules, mapping source data to target systems, identifying gaps and confirming cutover readiness.",

    workflow: [
      ["Source Assessment", "Existing data and rules reviewed"],
      ["Target Definition", "Required target structure clarified"],
      ["Mapping", "Source-to-target relationships documented"],
      ["Gap Analysis", "Missing and conflicting rules identified"],
      ["Validation", "Mapped data and workflows tested"],
      ["Cutover Readiness", "Evidence and ownership confirmed"],
      ["Post-Migration Review", "Issues and adoption tracked"]
    ],

    supporting: [
      ["Mapping Repository", "Field and rule relationships"],
      ["Business Rules", "Expected behaviour reference"],
      ["Gap Register", "Open conflicts and missing logic"],
      ["Validation Evidence", "Proof of mapped behaviour"],
      ["Cutover Checklist", "Readiness criteria"],
      ["Change Communication", "Stakeholder updates"]
    ],

    challenge:
      "Migration work exposed undocumented rules, inconsistent source behaviour and mapping gaps that could affect downstream workflows and adoption.",

    role:
      "Requirements gathering, source-to-target mapping, business-rule gap analysis, validation support, cutover readiness and change communication.",

    outcome:
      "Improved migration traceability, clearer rule ownership and stronger readiness validation.",

    tools: [
      "Data Mapping",
      "Business Rules",
      "Gap Analysis",
      "SQL",
      "Oracle",
      "Excel",
      "UAT",
      "Release Notes"
    ],

    skills: [
      "Data Migration",
      "Business Rules",
      "Requirements Analysis",
      "Gap Analysis",
      "UAT",
      "Change Communication"
    ]
  }
];
