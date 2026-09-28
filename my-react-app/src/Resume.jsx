import React from "react";

export function Header() {
  return (
    <header className="resume-header">
      <h1>Mitchel Bechtold</h1>
      <p>IT &amp; Cybersecurity Student | U.S. Air Force Veteran</p>
      <p>mcmitchel46@gmail.com | Fort Wayne, IN</p>
    </header>
  );
}

export function Summary() {
  return (
    <section className="resume-summary">
      <h2>Summary</h2>
      <p>
        Junior at Indiana Institute of Technology pursuing a B.S. in Cyber Security alongside a
        concurrent AI certificate. Brings five years of U.S. Air Force Security Forces experience —
        access control, incident response, and disciplined operations under pressure — combined with
        hands-on IT support and networking work. Active member of the university's competitive
        cybersecurity team, building practical skills through home lab and network segmentation projects.
      </p>
    </section>
  );
}

export function Experience() {
  return (
    <section className="resume-experience">
      <h2>Experience</h2>
      <ul>
        <li>
          <strong>Security Forces — U.S. Air Force</strong> (5 Years)
          <ul>
            <li>Enforced access control and physical security protocols across high-stakes, secure environments</li>
            <li>Responded to security incidents under pressure using structured, procedure-driven decision-making</li>
            <li>Operated within strict rules of engagement and reporting standards</li>
          </ul>
        </li>
        <li>
          <strong>IT Support Technician</strong>
          <ul>
            <li>Diagnosed and resolved hardware, software, and connectivity issues for end users</li>
            <li>Applied structured troubleshooting methodology to identify root causes and minimize downtime</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
export function Education() {
  return (
    <section className="resume-education">
      <h2>Education</h2>
      <ul>
        <li>
          B.S. in Cyber Security — Indiana Institute of Technology, Fort Wayne, IN (Expected 2027)
          <ul>
            <li>Concurrent AI certificate</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}


export function Skills() {
  return (
    <section className="resume-skills">
      <h2>Skills</h2>
      <ul>
        <li>Networking Fundamentals</li>
        <li>VLAN Segmentation &amp; Layer 3 Switching</li>
        <li>pfSense &amp; Firewall Configuration</li>
        <li>Git / GitHub</li>
        <li>Incident Response &amp; Access Control</li>
        <li>CompTIA Security+ (SY0-701) — In Progress</li>
        <li>Cisco CCNA (200-301) — Planned</li>
      </ul>
    </section>
  );
}

