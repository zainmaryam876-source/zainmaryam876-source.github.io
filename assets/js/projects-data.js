window.PORTFOLIO_PROJECTS = [
  {
    "id": "01",
    "slug": "enterprise-product-configuration-framework",
    "title": "Enterprise Product Configuration Framework",
    "category": "Enterprise Systems",
    "accent": "cyan",
    "summary": "A high-level functional framework for translating complex product requirements into validated, order-ready configurations through structured rules, controlled workflows, and cross-functional delivery.",
    "glance": {
      "domain": "Industrial and configurable products",
      "role": "Senior Business Analyst / Technical Product Manager",
      "team": "Cross-functional enterprise delivery",
      "delivery": "Multiple iterative releases"
    },
    "workflow": [
      {
        "title": "Requirement Intake",
        "description": "Customer needs, use cases, constraints, and expected outcomes are clarified.",
        "tools": [
          "Azure DevOps",
          "Workshops"
        ],
        "icon": "requirements"
      },
      {
        "title": "Product Selection",
        "description": "Product families, models, attributes, and supported options are structured.",
        "tools": [
          "SAP ERP",
          "Product data"
        ],
        "icon": "products"
      },
      {
        "title": "Configuration Logic",
        "description": "Business rules, dependencies, constraints, and decision logic are modeled.",
        "tools": [
          "Decision tables",
          "Rule repository"
        ],
        "icon": "logic"
      },
      {
        "title": "Validation Engine",
        "description": "Completeness, invalid combinations, and conflicts are checked.",
        "tools": [
          "Validation rules",
          "Test evidence"
        ],
        "icon": "validation"
      },
      {
        "title": "Compatibility Review",
        "description": "Technical constraints and interdependencies are verified.",
        "tools": [
          "Compatibility matrix",
          "Review"
        ],
        "icon": "compatibility"
      },
      {
        "title": "Review & Approval",
        "description": "Technical, commercial, and stakeholder reviews are coordinated.",
        "tools": [
          "Workflow",
          "Approvals"
        ],
        "icon": "approval"
      },
      {
        "title": "Order-Ready Output",
        "description": "Validated configuration, documentation, and downstream handoff are produced.",
        "tools": [
          "Reports",
          "Handover"
        ],
        "icon": "output"
      }
    ],
    "supporting": [
      {
        "title": "Product Catalog",
        "description": "Centralized master data, attributes, and classifications.",
        "icon": "database"
      },
      {
        "title": "Business Rules",
        "description": "Controlled rule repository with version traceability.",
        "icon": "sliders"
      },
      {
        "title": "Validation Logic",
        "description": "Rule execution, completeness, and conflict resolution.",
        "icon": "chart"
      },
      {
        "title": "Process Workflows",
        "description": "Standardized end-to-end business processes.",
        "icon": "workflow"
      },
      {
        "title": "Documentation",
        "description": "Functional specifications, tests, and user guidance.",
        "icon": "document"
      },
      {
        "title": "Security & Access",
        "description": "Role-based access, audit trail, and ownership.",
        "icon": "shield"
      }
    ],
    "challenge": "Product configurations depended on interrelated attributes, compatibility constraints, commercial checks, and engineering decisions that were difficult to apply consistently.",
    "contributions": [
      "Elicited and documented business requirements through workshops and stakeholder sessions.",
      "Analyzed product structures, attributes, dependencies, and configuration rules.",
      "Designed end-to-end configuration workflows and validation logic.",
      "Created user stories, acceptance criteria, process flows, and functional specifications.",
      "Managed backlog clarification, UAT support, release readiness, and post-release follow-through."
    ],
    "features": [
      "Rule-based configuration with structured validation.",
      "Attribute dependencies and compatibility management.",
      "Completeness and conflict detection.",
      "Controlled technical and commercial review workflows.",
      "Standardized downstream output and documentation.",
      "Traceability from requirement through release."
    ],
    "tools": [
      "SAP ERP",
      "Azure DevOps",
      "Excel",
      "Power Query",
      "Power Automate",
      "Visio",
      "SharePoint",
      "Decision Tables"
    ],
    "outcomes": [
      "Reduced manual validation risk.",
      "Improved consistency across configuration decisions.",
      "Strengthened traceability between requirements, rules, and tests.",
      "Improved collaboration between business and engineering.",
      "Created a scalable foundation for future product expansion."
    ],
    "skills": [
      "Business Analysis",
      "Requirements Engineering",
      "Process Design",
      "Enterprise Systems",
      "Product Strategy",
      "Stakeholder Management",
      "Data Analysis",
      "Agile Delivery"
    ]
  },
  {
    "id": "02",
    "slug": "enterprise-product-data-integration-framework",
    "title": "Enterprise Product Data Integration Framework",
    "category": "Systems Integration",
    "accent": "blue",
    "summary": "A high-level integration model for moving structured product information across configuration, transformation, API, lifecycle, and ERP layers.",
    "glance": {
      "domain": "Enterprise product data",
      "role": "Business Analyst / Integration Lead",
      "team": "Business, application, and integration teams",
      "delivery": "Phased integration releases"
    },
    "workflow": [
      {
        "title": "Source Output",
        "description": "Structured product and configuration data are produced by the source application.",
        "tools": [
          "Source model",
          "Data contract"
        ],
        "icon": "database"
      },
      {
        "title": "Transformation",
        "description": "Payloads are reshaped and normalized for downstream consumption.",
        "tools": [
          "XML",
          "XSLT"
        ],
        "icon": "transform"
      },
      {
        "title": "Validation",
        "description": "Required fields, hierarchy, formats, and business rules are checked.",
        "tools": [
          "Schema checks",
          "Rules"
        ],
        "icon": "validation"
      },
      {
        "title": "API Exchange",
        "description": "Requests, responses, errors, and retry behavior are defined.",
        "tools": [
          "REST API",
          "JSON/XML"
        ],
        "icon": "api"
      },
      {
        "title": "Lifecycle Update",
        "description": "Product structures and lifecycle records are synchronized.",
        "tools": [
          "PLM",
          "Workflow"
        ],
        "icon": "workflow"
      },
      {
        "title": "ERP Alignment",
        "description": "Enterprise master data and downstream records are updated.",
        "tools": [
          "SAP ERP",
          "Master data"
        ],
        "icon": "products"
      },
      {
        "title": "Release Verification",
        "description": "End-to-end data behavior and operational readiness are confirmed.",
        "tools": [
          "Integration tests",
          "Evidence"
        ],
        "icon": "approval"
      }
    ],
    "supporting": [
      {
        "title": "Data Contracts",
        "description": "Required fields, formats, and expected payload structure.",
        "icon": "document"
      },
      {
        "title": "Mappings",
        "description": "Source-to-target field and hierarchy relationships.",
        "icon": "workflow"
      },
      {
        "title": "Transformation Rules",
        "description": "Structural, value, and format conversion logic.",
        "icon": "transform"
      },
      {
        "title": "API Behavior",
        "description": "Requests, responses, errors, and exception handling.",
        "icon": "api"
      },
      {
        "title": "Traceability",
        "description": "Data lineage and requirement-to-test linkage.",
        "icon": "chart"
      },
      {
        "title": "Testing",
        "description": "Payload validation and end-to-end release evidence.",
        "icon": "validation"
      }
    ],
    "challenge": "Product data crossed multiple systems and formats, creating risk around hierarchy, mapping, transformation behavior, error handling, and end-to-end traceability.",
    "contributions": [
      "Mapped current- and future-state integration flows.",
      "Defined source-to-target requirements and data contracts.",
      "Clarified API behavior, errors, and validation expectations.",
      "Reviewed structured payloads and transformation outputs.",
      "Supported integration testing, defect triage, and release verification."
    ],
    "features": [
      "Source-to-target mapping with clear ownership.",
      "Structured transformation and validation rules.",
      "API request, response, and error-path definition.",
      "Cross-system traceability and data lineage.",
      "Integration test evidence and release controls.",
      "Downstream master-data alignment."
    ],
    "tools": [
      "SAP ERP",
      "PLM",
      "REST APIs",
      "XML",
      "XSLT",
      "JSON",
      "Azure DevOps",
      "Integration Testing"
    ],
    "outcomes": [
      "Improved clarity of data ownership across systems.",
      "Reduced integration ambiguity before implementation.",
      "Strengthened validation of payload structure and hierarchy.",
      "Improved defect isolation and release evidence.",
      "Created a reusable integration-analysis pattern."
    ],
    "skills": [
      "Systems Integration",
      "Data Mapping",
      "API Requirements",
      "XML Validation",
      "Gap Analysis",
      "Release Readiness",
      "Technical Analysis",
      "Stakeholder Alignment"
    ]
  },
  {
    "id": "03",
    "slug": "requirements-to-release-delivery-framework",
    "title": "Requirements-to-Release Delivery Framework",
    "category": "Agile Delivery",
    "accent": "violet",
    "summary": "A traceable delivery model that converts business needs into structured backlog items, testable criteria, release evidence, and production-ready outcomes.",
    "glance": {
      "domain": "Enterprise delivery governance",
      "role": "Business Analyst / Project Lead",
      "team": "Product, engineering, QA, and business",
      "delivery": "Agile and release-based delivery"
    },
    "workflow": [
      {
        "title": "Discovery",
        "description": "Business problem, users, scope, constraints, and desired outcomes are clarified.",
        "tools": [
          "Workshops",
          "Process review"
        ],
        "icon": "requirements"
      },
      {
        "title": "Backlog Design",
        "description": "Epics, features, stories, dependencies, and priorities are structured.",
        "tools": [
          "Azure DevOps",
          "Roadmap"
        ],
        "icon": "products"
      },
      {
        "title": "Acceptance Criteria",
        "description": "Expected behavior, edge cases, and completion evidence are made testable.",
        "tools": [
          "BDD-style criteria",
          "Examples"
        ],
        "icon": "document"
      },
      {
        "title": "Implementation Support",
        "description": "Questions, gaps, dependencies, and design decisions are resolved.",
        "tools": [
          "Refinement",
          "Collaboration"
        ],
        "icon": "workflow"
      },
      {
        "title": "UAT & Regression",
        "description": "Business behavior, defects, and cross-system impacts are validated.",
        "tools": [
          "UAT",
          "Regression"
        ],
        "icon": "validation"
      },
      {
        "title": "Release Readiness",
        "description": "Risk, evidence, ownership, communication, and support plans are confirmed.",
        "tools": [
          "Checklist",
          "Release notes"
        ],
        "icon": "approval"
      },
      {
        "title": "Production Support",
        "description": "Post-release behavior, issues, adoption, and follow-up work are monitored.",
        "tools": [
          "Service management",
          "Backlog"
        ],
        "icon": "chart"
      }
    ],
    "supporting": [
      {
        "title": "Traceability",
        "description": "Business need linked to story, test, release, and outcome.",
        "icon": "workflow"
      },
      {
        "title": "Prioritization",
        "description": "Value, dependency, risk, and sequence decisions.",
        "icon": "sliders"
      },
      {
        "title": "Definition of Ready",
        "description": "Clear inputs before implementation begins.",
        "icon": "document"
      },
      {
        "title": "Definition of Done",
        "description": "Evidence and acceptance before closure.",
        "icon": "validation"
      },
      {
        "title": "Release Artifacts",
        "description": "Notes, evidence, communication, and ownership.",
        "icon": "output"
      },
      {
        "title": "Feedback Loop",
        "description": "Production learning returned to the backlog.",
        "icon": "chart"
      }
    ],
    "challenge": "Complex enterprise changes required consistent traceability from initial need through implementation, testing, release, and production support.",
    "contributions": [
      "Facilitated discovery and clarified business outcomes.",
      "Structured epics, features, user stories, and acceptance criteria.",
      "Resolved implementation questions and cross-team dependencies.",
      "Led UAT coordination, defect review, and regression planning.",
      "Supported release evidence, stakeholder communication, and post-production triage."
    ],
    "features": [
      "End-to-end requirement traceability.",
      "Testable acceptance criteria and examples.",
      "Dependency and risk visibility.",
      "UAT and regression coordination.",
      "Release-readiness governance.",
      "Production feedback integrated into future delivery."
    ],
    "tools": [
      "Azure DevOps",
      "Agile Scrum",
      "User Stories",
      "Acceptance Criteria",
      "UAT",
      "Regression Testing",
      "ServiceNow",
      "Release Governance"
    ],
    "outcomes": [
      "Improved delivery clarity before development.",
      "Reduced ambiguity in acceptance and completion.",
      "Strengthened release evidence and ownership.",
      "Improved communication across business, engineering, and QA.",
      "Created a repeatable delivery-governance framework."
    ],
    "skills": [
      "Backlog Management",
      "Requirements Ownership",
      "Agile Delivery",
      "UAT Leadership",
      "Defect Triage",
      "Release Management",
      "Facilitation",
      "Governance"
    ]
  },
  {
    "id": "04",
    "slug": "automated-business-reporting-workflow",
    "title": "Automated Business Reporting Workflow",
    "category": "Reporting Automation",
    "accent": "green",
    "summary": "A reusable workflow for extracting recurring source data, transforming it into structured output, validating key fields, and refreshing user-facing reports.",
    "glance": {
      "domain": "Business reporting and automation",
      "role": "Business Analyst / Automation Designer",
      "team": "Business users and reporting stakeholders",
      "delivery": "Reusable reporting workflow"
    },
    "workflow": [
      {
        "title": "Source Intake",
        "description": "The latest file, report, or folder input is identified and controlled.",
        "tools": [
          "PDF/Excel",
          "Folder input"
        ],
        "icon": "document"
      },
      {
        "title": "Extraction",
        "description": "Required blocks, fields, and repeated records are captured.",
        "tools": [
          "Power Query",
          "Import"
        ],
        "icon": "database"
      },
      {
        "title": "Transformation",
        "description": "Data is normalized, flattened, and converted into a tabular model.",
        "tools": [
          "Power Query",
          "Mapping"
        ],
        "icon": "transform"
      },
      {
        "title": "Validation",
        "description": "Required fields, references, totals, and exceptions are checked.",
        "tools": [
          "Rules",
          "Exception log"
        ],
        "icon": "validation"
      },
      {
        "title": "User Controls",
        "description": "Users select columns, clear outputs, and trigger refresh behavior.",
        "tools": [
          "Excel UI",
          "VBA"
        ],
        "icon": "sliders"
      },
      {
        "title": "Refresh",
        "description": "The latest source data is loaded without rebuilding the report.",
        "tools": [
          "Folder refresh",
          "Automation"
        ],
        "icon": "workflow"
      },
      {
        "title": "Output",
        "description": "A consistent, filterable, and auditable business report is produced.",
        "tools": [
          "Excel table",
          "Reporting"
        ],
        "icon": "output"
      }
    ],
    "supporting": [
      {
        "title": "Source Control",
        "description": "Latest valid input is identified and retained.",
        "icon": "document"
      },
      {
        "title": "Field Dictionary",
        "description": "Expected fields, names, and business definitions.",
        "icon": "database"
      },
      {
        "title": "Validation Rules",
        "description": "Missing, inconsistent, and invalid values are flagged.",
        "icon": "validation"
      },
      {
        "title": "User Controls",
        "description": "Clear, refresh, and field-selection actions.",
        "icon": "sliders"
      },
      {
        "title": "Scalability",
        "description": "New fields and additional reports can be added.",
        "icon": "workflow"
      },
      {
        "title": "Auditability",
        "description": "Source and output trace are maintained.",
        "icon": "shield"
      }
    ],
    "challenge": "Recurring reports required repeated manual extraction and spreadsheet preparation, creating rework, inconsistent outputs, and limited scalability.",
    "contributions": [
      "Designed the user flow for file selection, refresh, and output control.",
      "Defined the normalized data model and key validation fields.",
      "Created scalable field-selection and column-display behavior.",
      "Documented exception handling and reusable report patterns.",
      "Planned folder-based refresh and expansion to additional reports."
    ],
    "features": [
      "Reusable source-to-output pipeline.",
      "Automatic transformation of repeated report blocks.",
      "Required-field and total validation.",
      "User-controlled column selection.",
      "Clear and refresh actions.",
      "Scalable pattern for additional finance and business reports."
    ],
    "tools": [
      "Excel",
      "Power Query",
      "VBA",
      "PDF Import",
      "Folder Refresh",
      "Validation Rules",
      "Data Transformation",
      "User Controls"
    ],
    "outcomes": [
      "Reduced repetitive manual handling.",
      "Improved report consistency and repeatability.",
      "Made validation issues more visible.",
      "Improved usability for recurring report execution.",
      "Created a scalable foundation for additional reporting workflows."
    ],
    "skills": [
      "Process Automation",
      "Data Transformation",
      "Reporting Design",
      "Validation Logic",
      "User Experience",
      "Scalability Planning",
      "Requirements Analysis",
      "Documentation"
    ]
  },
  {
    "id": "05",
    "slug": "technical-issue-analysis-framework",
    "title": "Technical Issue Analysis Framework",
    "category": "Technical Validation",
    "accent": "orange",
    "summary": "A structured investigation model for analyzing system behavior, logs, structured files, defect patterns, and validation evidence before resolution.",
    "glance": {
      "domain": "Technical issue management",
      "role": "Technical Business Analyst",
      "team": "Application, support, QA, and business teams",
      "delivery": "Operational and release support"
    },
    "workflow": [
      {
        "title": "Issue Intake",
        "description": "Symptoms, severity, affected users, timing, and business context are captured.",
        "tools": [
          "Service ticket",
          "Triage"
        ],
        "icon": "requirements"
      },
      {
        "title": "Evidence Collection",
        "description": "Logs, XML files, screenshots, data, and system output are gathered.",
        "tools": [
          "Logs",
          "Structured files"
        ],
        "icon": "document"
      },
      {
        "title": "Pattern Analysis",
        "description": "Recurring behavior, conditions, and cross-system relationships are identified.",
        "tools": [
          "Comparison",
          "Data review"
        ],
        "icon": "chart"
      },
      {
        "title": "Root-Cause Review",
        "description": "Likely failure point, dependency, and ownership are isolated.",
        "tools": [
          "5 Whys",
          "Technical review"
        ],
        "icon": "logic"
      },
      {
        "title": "Validation",
        "description": "Fix behavior, edge cases, and supporting evidence are reviewed.",
        "tools": [
          "Regression",
          "Evidence"
        ],
        "icon": "validation"
      },
      {
        "title": "Stakeholder Update",
        "description": "Status, risk, decisions, and next steps are communicated clearly.",
        "tools": [
          "Summary",
          "Coordination"
        ],
        "icon": "approval"
      },
      {
        "title": "Closure",
        "description": "Resolution evidence, knowledge, and follow-up actions are documented.",
        "tools": [
          "Knowledge base",
          "Closure"
        ],
        "icon": "output"
      }
    ],
    "supporting": [
      {
        "title": "Issue Taxonomy",
        "description": "Consistent categories, severity, and priority.",
        "icon": "sliders"
      },
      {
        "title": "Evidence Standard",
        "description": "Minimum proof required before closure.",
        "icon": "document"
      },
      {
        "title": "Cross-System Analysis",
        "description": "Behavior compared across applications and interfaces.",
        "icon": "api"
      },
      {
        "title": "Traceability",
        "description": "Issue, root cause, fix, and test linkage.",
        "icon": "workflow"
      },
      {
        "title": "Reporting",
        "description": "Recurring patterns and operational risk summarized.",
        "icon": "chart"
      },
      {
        "title": "Knowledge Transfer",
        "description": "Findings and prevention guidance shared.",
        "icon": "database"
      }
    ],
    "challenge": "Priority issues crossed multiple applications and data sources, making ownership, root cause, and validation difficult to establish quickly.",
    "contributions": [
      "Captured business context and technical symptoms.",
      "Analyzed logs, structured files, and recurring patterns.",
      "Coordinated application, QA, and business stakeholders.",
      "Reviewed fix evidence and regression impacts.",
      "Documented closure evidence and reusable knowledge."
    ],
    "features": [
      "Consistent issue intake and severity classification.",
      "Evidence-based root-cause investigation.",
      "Cross-system behavior comparison.",
      "Clear ownership and status communication.",
      "Validation evidence before closure.",
      "Knowledge reuse for recurring issues."
    ],
    "tools": [
      "Log Analysis",
      "XML",
      "SQL",
      "Defect Tracking",
      "Technical Validation",
      "Root-Cause Analysis",
      "Issue Reporting",
      "Stakeholder Communication"
    ],
    "outcomes": [
      "Improved clarity of issue ownership.",
      "Strengthened evidence used for validation and closure.",
      "Improved visibility of recurring failure patterns.",
      "Reduced ambiguity in stakeholder updates.",
      "Created a repeatable technical-analysis workflow."
    ],
    "skills": [
      "Technical Analysis",
      "Defect Triage",
      "Root-Cause Analysis",
      "Validation",
      "Data Interpretation",
      "Communication",
      "Stakeholder Management",
      "Operational Support"
    ]
  },
  {
    "id": "06",
    "slug": "enterprise-data-migration-rules-framework",
    "title": "Enterprise Data Migration & Rules Framework",
    "category": "Data Migration",
    "accent": "magenta",
    "summary": "A structured approach for reconciling business rules, mapping source data to target systems, identifying gaps, and confirming cutover readiness.",
    "glance": {
      "domain": "Enterprise data migration",
      "role": "Business Analyst / Migration Lead",
      "team": "Business, data, application, and QA teams",
      "delivery": "Migration and cutover releases"
    },
    "workflow": [
      {
        "title": "Source Assessment",
        "description": "Existing data structures, behavior, quality, and business rules are reviewed.",
        "tools": [
          "Profiling",
          "Rule review"
        ],
        "icon": "database"
      },
      {
        "title": "Target Definition",
        "description": "Required target structure, behavior, ownership, and constraints are clarified.",
        "tools": [
          "Target model",
          "Requirements"
        ],
        "icon": "requirements"
      },
      {
        "title": "Mapping",
        "description": "Source-to-target fields, values, hierarchy, and transformations are documented.",
        "tools": [
          "Mapping workbook",
          "SQL"
        ],
        "icon": "transform"
      },
      {
        "title": "Gap Analysis",
        "description": "Missing rules, conflicts, exceptions, and unresolved ownership are identified.",
        "tools": [
          "Gap register",
          "Workshops"
        ],
        "icon": "logic"
      },
      {
        "title": "Validation",
        "description": "Mapped data, workflows, exceptions, and business behavior are tested.",
        "tools": [
          "UAT",
          "Reconciliation"
        ],
        "icon": "validation"
      },
      {
        "title": "Cutover Readiness",
        "description": "Evidence, ownership, sequence, communication, and fallback are confirmed.",
        "tools": [
          "Checklist",
          "Release plan"
        ],
        "icon": "approval"
      },
      {
        "title": "Post-Migration Review",
        "description": "Issues, adoption, data quality, and follow-up work are monitored.",
        "tools": [
          "Issue log",
          "Metrics"
        ],
        "icon": "chart"
      }
    ],
    "supporting": [
      {
        "title": "Mapping Repository",
        "description": "Field, value, hierarchy, and transformation relationships.",
        "icon": "transform"
      },
      {
        "title": "Business Rules",
        "description": "Reference for expected source and target behavior.",
        "icon": "logic"
      },
      {
        "title": "Gap Register",
        "description": "Open conflicts, missing logic, and decisions.",
        "icon": "document"
      },
      {
        "title": "Validation Evidence",
        "description": "Proof of mapped data and workflow behavior.",
        "icon": "validation"
      },
      {
        "title": "Cutover Checklist",
        "description": "Readiness criteria, sequence, and ownership.",
        "icon": "approval"
      },
      {
        "title": "Change Communication",
        "description": "Stakeholder updates, impacts, and release notes.",
        "icon": "output"
      }
    ],
    "challenge": "Migration work exposed undocumented rules, inconsistent source behavior, and mapping gaps that could affect downstream workflows, data quality, and user adoption.",
    "contributions": [
      "Gathered source and target requirements.",
      "Created source-to-target mappings and rule documentation.",
      "Led business-rule gap analysis and decision tracking.",
      "Supported validation, reconciliation, and UAT.",
      "Coordinated cutover readiness and change communication."
    ],
    "features": [
      "Traceable source-to-target mapping.",
      "Business-rule reconciliation.",
      "Gap and decision management.",
      "Validation and reconciliation evidence.",
      "Cutover readiness controls.",
      "Post-migration issue and adoption tracking."
    ],
    "tools": [
      "Data Mapping",
      "Business Rules",
      "Gap Analysis",
      "SQL",
      "Oracle",
      "Excel",
      "UAT",
      "Release Notes"
    ],
    "outcomes": [
      "Improved migration traceability.",
      "Clarified business-rule ownership.",
      "Reduced ambiguity in mappings and exceptions.",
      "Strengthened cutover evidence and readiness.",
      "Improved visibility of post-migration follow-up."
    ],
    "skills": [
      "Data Migration",
      "Business Rules",
      "Requirements Analysis",
      "Gap Analysis",
      "UAT",
      "Change Communication",
      "Data Validation",
      "Release Readiness"
    ]
  }
];
