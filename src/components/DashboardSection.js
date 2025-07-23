import React from "react";

// CSS for animating SVG lines
const animateStyle = `
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
`;

const legend = [
  { color: "#F94CCC", label: "829", text: "Video Edits Completed" },
  { color: "#FF7A38", label: "218", text: "Graphics Designed" },
  { color: "#A366FF", label: "119", text: "Strategies Implemented" },
];

// The background for the dashboard card (rounded, white, shadow) with black shadow
const DashboardCard = ({ children }) => (
  <div className="w-full max-w-7.5xl bg-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-10" style={{ boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.75)', borderWidth: '1px', borderColor: '#000', borderStyle: 'solid' }}>
    {children}
  </div>
);

const AnimatedGraph = () => (
  <svg width="100%" height="200" viewBox="0 0 560 200" fill="none">
    {/* Pink-Purple-Orange Path 1 */}
    <defs>
      <linearGradient id="line1" x1="0" y1="0" x2="560" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F94CCC" />
        <stop offset="0.5" stopColor="#FF7A38" />
        <stop offset="1" stopColor="#A366FF" />
      </linearGradient>
      <linearGradient id="line2" x1="0" y1="0" x2="560" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF7A38" />
        <stop offset="1" stopColor="#F94CCC" />
      </linearGradient>
      <linearGradient id="line3" x1="0" y1="0" x2="560" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A366FF" />
        <stop offset="1" stopColor="#8383FF" />
      </linearGradient>
    </defs>
    <style>{animateStyle}</style>
    {/* Graph Patterned Lines */}
    <path
      d="M10 170 Q60 120 110 170 T210 120 T310 170 T410 100 T510 160"
      stroke="url(#line1)"
      strokeWidth="6"
      fill="none"
      strokeDasharray="950"
      strokeDashoffset="950"
      style={{
        animation: "dash 2s linear forwards"
      }}
    />
    {/* Orange Line */}
    <path
      d="M10 160 Q60 80 110 140 T210 170 T310 100 T410 120 T510 130"
      stroke="url(#line2)"
      strokeWidth="5"
      fill="none"
      opacity="0.7"
      strokeDasharray="950"
      strokeDashoffset="950"
      style={{
        animation: "dash 2.2s 0.15s linear forwards"
      }}
    />
    {/* Purple/Blue Line */}
    <path
      d="M10 180 Q70 180 110 150 T210 160 T310 170 T410 60 T510 110"
      stroke="url(#line3)"
      strokeWidth="4"
      fill="none"
      opacity="0.5"
      strokeDasharray="950"
      strokeDashoffset="950"
      style={{
        animation: "dash 2.4s 0.3s linear forwards"
      }}
    />
    {/* Foreground faded lines (gray) */}
    <path d="M10 120 Q60 100 110 145 T210 132 T310 160 T410 135 T510 145"
      stroke="#C2C2C9"
      strokeWidth="3"
      fill="none"
      opacity="0.4"
    />
    <path d="M10 105 Q70 130 110 100 T210 125 T310 105 T410 140 T510 160"
      stroke="#C2C2C9"
      strokeWidth="3"
      fill="none"
      opacity="0.3"
    />
    {/* Large graph dots */}
    <circle cx="110" cy="170" r="8" fill="#fff" stroke="#F94CCC" strokeWidth="4"/>
    <circle cx="210" cy="120" r="8" fill="#fff" stroke="#FF7A38" strokeWidth="4"/>
    <circle cx="410" cy="100" r="8" fill="#fff" stroke="#A366FF" strokeWidth="4"/>
  </svg>
);

const DashboardSection = () => (
  <section className="flex flex-col md:flex-row gap-10 md:gap-16 px-6 sm:px-10 py-16 bg-white">
    <DashboardCard>
      {/* Left (Dashboard Graph and Metrics) */}
      <div className="flex-1">
        <div className="flex items-center mb-2">
          <span className="text-[2.5rem] font-bold text-[#F94CCC] leading-none mr-4">03</span>
          <div className="flex flex-col">
            <span className="text-[#060101] text-lg font-semibold">Years of Building Brands</span>
          </div>
        </div>
        <div className="mt-2 mb-6">
          <AnimatedGraph />
        </div>
        <div className="flex justify-center gap-10 mt-2">
          {legend.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="flex items-center gap-2">
                <span className={`w-4 h-4 rounded-full`} style={{background:item.color}}></span>
                <span className="text-base font-medium" style={{color:item.color}}>{item.label}</span>
              </div>
              <span className="text-xs text-[#AFAEC5] mt-1">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Right (Matter/Content) */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-black text-xl font-bold mb-2">Our Growth Insights</div>
        <p className="text-gray-700 text-base mb-4">
          At Logical Media, we track key metrics to showcase how our services drive real results for brands. This dashboard highlights our performance in video editing, graphic designing, and content strategy.
        </p>
        <ul className="list-disc pl-5 text-gray-700 text-base">
          <li>Over 800 video edits that have boosted client engagement by up to 40%.</li>
          <li>Gained above 10,000 Followers less than 5 months.</li>
          <li>Strategies implemented, leading to millions of views and faster brand growth.</li>
        </ul>
      </div>
    </DashboardCard>
  </section>
);

export default DashboardSection;
