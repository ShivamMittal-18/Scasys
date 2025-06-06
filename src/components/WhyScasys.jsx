import { CheckCircle, Zap, Users, Shield, TrendingUp } from "lucide-react";

export default function Whyscasys() {
  const values = [
    {
      icon: TrendingUp,
      title: "Scalability First",
      description: "We build solutions that grow with your business, from startup to enterprise scale.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Design-Driven Development",
      description: "We believe great design leads to better user experiences and business outcomes.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "End-to-End Reliability",
      description: "Our fully managed approach ensures consistent quality across all project phases.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Performance Obsessed",
      description: "We optimize every aspect of your application for speed, efficiency, and user satisfaction.",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div id="Why Us" className="min-h-screen relative border-b-1 border-[#f1f1f1] overflow-hidden" style={{ backgroundColor: '#FEFEFE' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full text-blue-700 text-sm font-medium border border-blue-400/30 backdrop-blur-sm">
              Excellence in Every Detail
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-8">
            <span className="start bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Why
            </span>
            <span className="start bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-clip-text text-transparent ml-4">
              scasys
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            We combine technical expertise with business acumen to deliver solutions
            <br />
            <span className="text-gray-800 font-medium">that drive real results.</span>
          </p>
        </div>

        {/* Main Content - 50/50 Split */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Our Values Section - Left Half */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <h2 className="text-4xl font-bold text-gray-800">
                Our Values
              </h2>
            </div>
            
            <div className="grid gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 hover:border-gray-300/70 transition-all duration-500 hover:scale-[1.02] hover:bg-white/90 shadow-lg hover:shadow-xl"
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}></div>
                    
                    <div className="relative flex items-start gap-6">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Our Approach Section - Right Half */}
          <div className=" lg:sticky  lg:top-8">
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-200/50 shadow-xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 border border-gray-300/30 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-gray-300/30 rounded-full"></div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Our Approach
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="group bg-gray-50/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-gray-100/70 hover:border-gray-300/60 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 group-hover:scale-125 transition-transform"></div>
                      <div className="w-full h-px bg-gradient-to-r from-blue-400/40 to-transparent"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      At scasys, we believe in a collaborative, transparent approach to
                      web development. We work closely with our clients at every stage,
                      ensuring that the final product not only meets but exceeds
                      expectations.
                    </p>
                  </div>
                  
                  <div className="group bg-gray-50/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-gray-100/70 hover:border-gray-300/60 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 group-hover:scale-125 transition-transform"></div>
                      <div className="w-full h-px bg-gradient-to-r from-purple-400/40 to-transparent"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      Our team combines technical expertise with creative problem-
                      solving to deliver solutions that are not just technically sound but
                      also user-friendly and business-focused.
                    </p>
                  </div>
                  
                  <div className="group bg-gray-50/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-gray-100/70 hover:border-gray-300/60 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 group-hover:scale-125 transition-transform"></div>
                      <div className="w-full h-px bg-gradient-to-r from-pink-400/40 to-transparent"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      We're committed to long-term partnerships, providing ongoing
                      support and guidance to help our clients succeed in an ever-
                      evolving digital landscape.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}