import React, { useState, useEffect } from 'react';
import { Shield, Server, Cpu, Lock, Download, ChevronRight, Menu, X, Mail, MapPin } from 'lucide-react';

// --- Components ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Technology', href: '#technology' },
    { name: 'Specifications', href: '#specs' },
    { name: 'White Paper', href: '#whitepaper' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold tracking-tight text-white">AEGIS <span className="text-blue-400">APPLIED</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-white hover:text-blue-400 transition-colors text-sm font-medium uppercase tracking-wider">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/80 to-slate-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              Mission Ready
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Sovereign Compute <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">For The Edge</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
              Turnkey, air-gapped GPU infrastructure designed for secure LLM inference and fine-tuning. Deployed instantly, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#whitepaper" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/50">
                View Assessment Paper
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#specs" className="inline-flex justify-center items-center px-8 py-4 border border-slate-600 text-base font-bold rounded-lg text-slate-300 hover:bg-slate-800 transition-all">
                Technical Specs
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Decorative abstract server rack visual */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl p-6">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>
              <div className="grid grid-cols-1 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-16 bg-slate-950 rounded border border-slate-800 flex items-center px-4 justify-between group hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="h-2 w-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                      <div className="w-24 h-2 bg-slate-800 rounded animate-pulse"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-1 w-8 bg-blue-900/50 rounded"></div>
                      <div className="h-1 w-8 bg-blue-900/50 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800 flex justify-between text-xs text-slate-500 font-mono">
                <span>STATUS: ONLINE</span>
                <span>AEGIS-1 NODE</span>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-xl">
              <div className="flex items-center space-x-2 text-white font-bold">
                <Cpu className="h-5 w-5 text-blue-400" />
                <span>8x H100 GPU</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-xl">
              <div className="flex items-center space-x-2 text-white font-bold">
                <Lock className="h-5 w-5 text-green-400" />
                <span>Air-Gapped Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Secure Staging",
      description: "Pre-provisioned at secure colocation facilities to ensure hardware integrity before deployment.",
      icon: <Lock className="h-6 w-6 text-blue-400" />
    },
    {
      title: "Turnkey Deployment",
      description: "Ships with hardened OS, drivers, and containerized AI libraries. No internet required for setup.",
      icon: <Server className="h-6 w-6 text-blue-400" />
    },
    {
      title: "High Density",
      description: "Optimized 4U chassis with liquid-assist cooling options for maximum compute per rack unit.",
      icon: <Cpu className="h-6 w-6 text-blue-400" />
    }
  ];

  return (
    <div id="technology" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">Technology</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Built for the Disconnected Edge
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            Aegis Applied Computing bridges the gap between commercial innovation and mission-critical security requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-900/20">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 border border-blue-500/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Specs = () => {
  return (
    <div id="specs" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-8">Aegis-1 Specifications</h2>
            <div className="space-y-6">
              {[
                { label: "Compute", value: "8x NVIDIA H100 (NVLink)" },
                { label: "Memory", value: "2TB DDR5 System RAM" },
                { label: "Storage", value: "30TB NVMe Gen5 (Raid 10)" },
                { label: "Networking", value: "Dual Isolated 100GbE NICs" },
                { label: "Power", value: "Max 30A @ 208V (Standard Rack)" },
                { label: "Software", value: "Hardened Linux, K8s, Local LLM Repo" }
              ].map((spec, i) => (
                <div key={i} className="flex justify-between border-b border-slate-800 pb-4">
                  <span className="text-slate-400 font-medium">{spec.label}</span>
                  <span className="text-white font-mono font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative">
            <div className="bg-slate-950 rounded-lg border border-slate-700 p-2 font-mono text-xs text-green-400 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between bg-slate-800 p-2 rounded-t mb-2 text-slate-400">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span>admin@aegis-1:~</span>
              </div>
              <div className="p-4 space-y-2 h-64 overflow-y-auto">
                <p>$ systemctl status aegis-core</p>
                <p className="text-white">● aegis-core.service - Aegis Inference Engine</p>
                <p className="pl-4">Loaded: loaded (/etc/systemd/system/aegis.service; enabled)</p>
                <p className="pl-4">Active: <span className="text-green-500 font-bold">active (running)</span> since Thu 2025-11-27 10:00:00 UTC</p>
                <p>$ nvidia-smi --query-gpu=utilization.gpu --format=csv</p>
                <p className="text-white">utilization.gpu [%]</p>
                <p className="text-white">98 %</p>
                <p className="text-white">99 %</p>
                <p className="text-white">98 %</p>
                <p className="text-white">...</p>
                <p>$ check-isolation --network</p>
                <p className="text-green-500"> [PASS] NIC 1 (Unclassified) -> Isolated</p>
                <p className="text-green-500"> [PASS] NIC 2 (Classified) -> Isolated</p>
                <p className="animate-pulse">_</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhitePaperViewer = () => {
  return (
    <div id="whitepaper" className="py-24 bg-slate-50 border-t border-slate-200 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">SOFWERX Assessment Submission</h2>
          <p className="mt-4 text-lg text-slate-600">
            Official White Paper response for the Hardware-Enabled AI Acceleration Event.
          </p>
        </div>

        {/* Paper Container */}
        <div className="bg-white shadow-2xl shadow-slate-200 rounded-lg overflow-hidden border border-slate-200">

          {/* Paper Header */}
          <div className="bg-slate-100 px-8 py-6 border-b border-slate-200 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Assessment Event (AE) White Paper</h3>
              <p className="text-sm text-slate-500">Document Ref: AEGIS-WP-2025-001</p>
            </div>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </button>
          </div>

          {/* Paper Content */}
          <div className="p-8 md:p-12 prose prose-slate max-w-none">

            {/* Title Page Content Styled */}
            <div className="text-center border-b-2 border-slate-100 pb-8 mb-8">
              <h1 className="text-3xl font-bold mb-2 text-slate-900">Aegis-1: High-Density, Air-Gapped Ready AI Inference Node</h1>
              <p className="text-xl font-medium text-slate-700 mb-6">Turnkey GPU Infrastructure for Remote LLM Workloads</p>

              <div className="grid grid-cols-2 gap-4 text-left max-w-lg mx-auto bg-slate-50 p-6 rounded-lg text-sm">
                <div>
                  <span className="block font-bold text-slate-500 uppercase text-xs">Company</span>
                  <span className="block text-slate-900 font-semibold">Aegis Applied Computing</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-500 uppercase text-xs">Date</span>
                  <span className="block text-slate-900">November 27, 2025</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-500 uppercase text-xs">Point of Contact</span>
                  <span className="block text-slate-900">Nathan Alam</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-500 uppercase text-xs">Contact</span>
                  <span className="block text-slate-900">nathanalam99@gmail.com</span>
                </div>
                <div className="col-span-2">
                  <span className="block font-bold text-slate-500 uppercase text-xs">Technology Focus Area</span>
                  <span className="block text-slate-900">Hardware-Enabled AI Acceleration</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8 font-serif leading-relaxed text-slate-800">

              <section>
                <h4 className="text-lg font-bold uppercase tracking-wider text-blue-800 border-l-4 border-blue-600 pl-3 mb-4">Executive Summary</h4>
                <p>
                  Aegis Applied Computing proposes the <strong>Aegis-1</strong>, a fully turnkey, rack-mounted high-performance computing (HPC) appliance designed specifically for secure, remote Large Language Model (LLM) inference. Addressing the USSOCOM J24 need for a solution supporting 100+ concurrent users, the Aegis-1 integrates enterprise-grade GPU acceleration with a proprietary "Secure-boot" software architecture derived from experience deploying AI agents on classified networks.
                </p>
                <p className="mt-4">
                  Unlike standard commercial-off-the-shelf (COTS) servers that require extensive on-site configuration, the Aegis-1 is pre-provisioned at a secure staging facility with all necessary drivers, containerized LLM libraries, and network isolation protocols prior to shipment. This approach ensures the system is "mission-ready" immediately upon installation at the remote site. Leveraging the Principal Investigator’s background in high-reliability hardware controls at SpaceX and classified AI deployment at Scale AI, this solution prioritizes physical robustness, thermal efficiency, and logical network isolation.
                </p>
                <div className="bg-blue-50 p-4 rounded-md mt-4 border border-blue-100">
                  <p className="text-sm font-semibold text-blue-900">
                    <span className="uppercase text-blue-600 mr-2">TRL Status:</span>
                    Current TRL 4 (Component Validation). Targeting TRL 7 within 4 months via Digital Realty partnership validation.
                  </p>
                </div>
              </section>

              <section>
                <h4 className="text-lg font-bold uppercase tracking-wider text-blue-800 border-l-4 border-blue-600 pl-3 mb-4">Technology Concept</h4>
                <p>The Aegis-1 is a 4U rack-mounted server optimized for high-throughput LLM inference and fine-tuning.</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li><strong>Compute Architecture:</strong> 8x NVIDIA H100 interconnected via high-bandwidth NVLink bridges to ensure unified memory access, essential for large model parameter handling.</li>
                  <li><strong>Memory & Storage:</strong> 2TB of System RAM to support RAG vector databases in-memory, paired with 30TB of NVMe Gen5 storage for rapid model swapping.</li>
                  <li><strong>Physical Infrastructure:</strong> The chassis is designed to fit standard EIA-310 racks with a maximum power draw capped at 30A per rack to align with remote site limitations.</li>
                  <li><strong>Secure Isolation:</strong> Physically distinct NICs for dual-network support, ensuring total physical and logical separation between classified and unclassified data streams.</li>
                </ul>
              </section>

              <section>
                <h4 className="text-lg font-bold uppercase tracking-wider text-blue-800 border-l-4 border-blue-600 pl-3 mb-4">Approach</h4>
                <p>USSOCOM requires a solution that balances "reliability," "scalability," and "immediate operation". Our approach solves this through <strong>Pre-Deployment Staging.</strong></p>

                <div className="mt-4 grid gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-bold text-slate-400">01</div>
                    <div>
                      <strong className="text-slate-900">Hardware Integration:</strong> Utilizing a "Bring-Your-Own-Hardware" assembly model validated with Digital Realty. We integrate high-density GPUs into a chassis optimized for air cooling efficiency.
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-bold text-slate-400">02</div>
                    <div>
                      <strong className="text-slate-900">Software Readiness:</strong> Drawing on experience building custom AI platforms for national security, Aegis-1 ships with a pre-hardened Linux kernel and pre-loaded containerized environments. No internet required.
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-bold text-slate-400">03</div>
                    <div>
                      <strong className="text-slate-900">Network Isolation:</strong> Hardware-level virtualization constraints to prevent data leakage between the two required network interfaces.
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-500 italic">
                  <strong>Past/Current Efforts:</strong> The architecture is informed by the Principal Investigator's work deploying AI on classified networks for 500+ customers at Scale AI and managing high-reliability hardware at SpaceX.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-bold uppercase tracking-wider text-blue-800 border-l-4 border-blue-600 pl-3 mb-4">ROM Cost/Schedule</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded border border-slate-200">
                    <h5 className="font-bold text-slate-900 mb-2">Cost Structure</h5>
                    <p className="text-3xl font-bold text-blue-600 mb-2">$385,000 <span className="text-sm font-normal text-slate-500">per unit</span></p>
                    <ul className="text-sm space-y-1 text-slate-600">
                      <li>• Hardware (GPUs, Chassis, NVMe): $325,000</li>
                      <li>• Integration & Secure Staging: $60,000</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-6 rounded border border-slate-200">
                    <h5 className="font-bold text-slate-900 mb-2">6-Month Schedule</h5>
                    <ul className="text-sm space-y-2 text-slate-600">
                      <li><strong>Mo 1:</strong> Design & Procure (MVP Specs)</li>
                      <li><strong>Mo 2-3:</strong> Assembly & Staging at Digital Realty</li>
                      <li><strong>Mo 4:</strong> Software Load & Stress Test</li>
                      <li><strong>Mo 5:</strong> Validation (100+ User Load)</li>
                      <li><strong>Mo 6:</strong> Delivery to Remote Site</li>
                    </ul>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-bold tracking-tight text-white">AEGIS <span className="text-blue-400">APPLIED</span></span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Empowering national security with sovereign, high-performance AI infrastructure. Built in Virginia, deployed globally.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> slam@mba2027.hbs.edu</li>
              <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Fairfax Station, VA 22039</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="/" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="/" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="/" className="hover:text-blue-400">CAGE Code (Pending)</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">© 2025 Aegis Applied Computing. All rights reserved.</p>
          <p className="text-slate-600 text-xs mt-2 md:mt-0">FOUO // PROPRIETARY</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-blue-500 selection:text-white">
      <Navigation />
      <Hero />
      <Features />
      <Specs />
      <WhitePaperViewer />
      <Footer />
    </div>
  );
};

export default App;