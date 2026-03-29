export default function Footer() {
  return (
    <footer className="w-full bg-transparent px-8 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-end justify-between gap-6 md:flex-row">
        <div className="space-y-4">
          <div className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.2em] opacity-50">
            ©2024 mjldotdev. All rights reserved
          </div>
        </div>
        <div className="flex flex-wrap gap-8">
          {/* <div className="cursor-default font-mono text-[10px] text-gray-600 uppercase tracking-[0.2em] opacity-50 transition-opacity hover:opacity-100">
            LAT: 14.5995
          </div>
          <div className="cursor-default font-mono text-[10px] text-gray-600 uppercase tracking-[0.2em] opacity-50 transition-opacity hover:opacity-100">
            LNG: 120.9842
          </div> */}
          <div className="cursor-default font-mono text-[10px] text-gray-600 uppercase tracking-[0.2em] opacity-50 transition-opacity hover:opacity-100">
            Designed with intent
          </div>
        </div>
      </div>
    </footer>
  );
}
