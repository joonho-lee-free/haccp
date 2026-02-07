"use client";

import { useEffect, useState } from "react";

const PRODUCT_IMAGES = [
  { src: "/images/productsection/product-01.jpg", alt: "왕순살왕파닭", label: "Haccp기준서준비" },
  { src: "/images/productsection/product-02.jpg", alt: "일본식순살파닭", label: "시설 공사 보완" },
  { src: "/images/productsection/product-03.jpg", alt: "염통꼬치", label: "CCP준비 유효성평가" },
  { src: "/images/productsection/product-04.jpg", alt: "Haccp심사", label: "Haccp심사" },
] as const;

export default function ProductSection() {
  // ✅ 추가: 클릭한 이미지 확대(라이트박스)
  const [openImage, setOpenImage] = useState<string | null>(null);

  // ✅ 추가: ESC로 닫기 + 열려있을 때 배경 스크롤 방지
  useEffect(() => {
    if (!openImage) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImage(null);
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [openImage]);

  return (
    <div className="group rounded-2xl border border-violet-100 bg-violet-50/40 p-6 ring-1 ring-violet-100 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-50/60 hover:shadow-lg hover:shadow-violet-100/50 hover:ring-violet-200 active:translate-y-0 md:p-8">
      <style jsx global>{`
        .ss-product-grid {
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 8px !important;
          align-items: stretch !important;
        }
        @media (min-width: 768px) {
          .ss-product-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            gap: 12px !important;
          }
        }
        .ss-product-grid > * {
          min-width: 0 !important;
          width: auto !important;
          max-width: none !important;
        }
      `}</style>

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">
            <span aria-hidden>🍢</span>
            <span>서비스 안내</span>
          </div>
          <h2 className="mt-3 text-lg font-bold md:text-xl">Haccp컨설팅 서비스 내용</h2>
          <p className="mt-2 text-sm text-gray-700">
           담당자가 상담후 직접 현장을 방문하여 도와드립니다.
          </p>
        </div>

        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-sm transition-transform duration-200 ease-out group-hover:scale-105"
          aria-hidden
        >
          🍢
        </div>
      </div>

      <ul className="mt-4 grid gap-2 text-sm text-gray-800 md:grid-cols-2">
        <li><strong>• Haccp 기준서 준비</strong><p>&nbsp;&nbsp;&nbsp;Haccp관련 서류를 준비합니다</p> </li>
        <li><strong>• 시설 · 공사 보완</strong><p>&nbsp;&nbsp;&nbsp;Haccp기준에 맞게 동선 및 구조를 보완합니다</p> </li>
        <li><strong>• ccp준비과정</strong><p>&nbsp;&nbsp;&nbsp;회사별 맞춤 ccp관리(미생물관리, 금속검출기)를 준비합니다.</p> </li>
        <li><strong>• Haccp심사신청 및 심사</strong><p>&nbsp;&nbsp;&nbsp;Haccp인증원에 Haccp plan을 제출 심사</p> </li>

      </ul>

      <p className="mt-3 text-sm text-gray-600">
        ※ Haccp지원사업으로 <b>최대 1,000만원까지 지원받을 수 있습니다</b>
      </p>

      {/* ✅ 이미지 4장 */}
      <div className="ss-product-grid mt-4">
        {PRODUCT_IMAGES.map((img) => (
          <div
            key={img.src}
            className="min-w-0 overflow-hidden rounded-xl border border-violet-100 bg-white/60 ring-1 ring-violet-100/60"
          >
            <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onClick={() => setOpenImage(img.src)} // ✅ 클릭 시 확대
                className="absolute inset-0 h-full w-full cursor-zoom-in object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-2 right-2 z-10 rounded-md bg-black/35 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm md:bottom-3 md:right-3 md:text-sm">
                {img.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-5 h-1 w-full rounded-full bg-violet-200 transition-opacity duration-200 group-hover:opacity-90"
        aria-hidden
      />

      {/* ✅ 추가: 라이트박스(뉴스처럼 크게 보기) + 닫기 버튼 */}
      {openImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpenImage(null)} // ✅ 배경 클릭하면 닫힘
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
        >
          {/* ✅ 중앙 컨테이너 (닫기 버튼 포함) */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* ✅ 닫기 버튼 (우상단 X) */}
            <button
              type="button"
              onClick={() => setOpenImage(null)}
              className="absolute -right-3 -top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg ring-1 ring-black/10 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="닫기"
            >
              <span className="text-xl leading-none">×</span>
            </button>

            {/* ✅ 확대 이미지 */}
            <img
              src={openImage}
              alt="확대 이미지"
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />

            {/* ✅ 안내 문구 */}
            <div className="mt-3 text-center text-xs text-white/80">
              배경을 누르거나 <b>ESC</b> 또는 <b>×</b>로 닫을 수 있어요.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
