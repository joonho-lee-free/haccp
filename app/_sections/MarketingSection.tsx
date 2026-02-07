"use client";

import { useEffect, useState } from "react";

const MARKETING_IMAGES = [
  {
    src: "/images/marketingsection/marketing-01.jpg",
    alt: "프랜차이즈 홈페이지구축",
    label: "공공급식",
  },
  {
    src: "/images/marketingsection/marketing-02.jpg",
    alt: "신규가맹점 유치",
    label: "공급시 신청",
  },
  {
    src: "/images/marketingsection/marketing-03.jpg",
    alt: "유통라인업",
    label: "입찰-낙찰",
  },
  {
    src: "/images/marketingsection/marketing-04.jpg",
    alt: "온라인홍보",
    label: "생산-배송원라인",
  },
] as const;

export default function MarketingSection() {
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
    <div className="group rounded-2xl border border-cyan-100 bg-cyan-50/40 p-6 ring-1 ring-cyan-100 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-50/60 hover:shadow-lg hover:shadow-cyan-100/50 hover:ring-cyan-200 active:translate-y-0 md:p-8">
      {/* ✅ 그리드 강제 (전역 CSS 방어) */}
      <style jsx global>{`
        .ss-marketing-grid {
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 8px !important;
          align-items: stretch !important;
        }
        @media (min-width: 768px) {
          .ss-marketing-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            gap: 12px !important;
          }
        }
        .ss-marketing-grid > * {
          min-width: 0 !important;
          width: auto !important;
          max-width: none !important;
        }
      `}</style>

      {/* 헤더 */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-900">
            <span aria-hidden>📣</span>
            <span>공공급식 지원</span>
          </div>

          <h2 className="mt-3 text-lg font-bold text-gray-900 md:text-xl">
            공공급식 입찰·생산·배송까지 원라인으로 편하게
          </h2>

          <p className="mt-2 text-sm text-gray-700">
            HACCP인증 이후, <strong>공공급식과 연결되는 안전한 매출구조</strong>를 만듭니다
          </p>
        </div>

        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-sm transition-transform duration-200 ease-out group-hover:scale-105"
          aria-hidden
        >
          📣
        </div>
      </div>

      {/* 안내 문구 */}
      <ul className="mt-4 grid gap-3 text-sm text-gray-800 md:grid-cols-2">
        <li>1️⃣<strong>공공급식 입찰부터</strong><p>&nbsp;&nbsp;&nbsp;&nbsp;생산·배송까지,한 번에 이어지는 원라인 구조</p> </li>
        <li>2️⃣<strong>입찰은 따로, 생산은 따로?</strong><p>&nbsp;&nbsp;&nbsp;&nbsp;이제 아닙니다.공공급식, 생산·배송까지 한 번에</p> </li>
        <li>3️⃣<strong>HACCP 인증→ 공공급식 연계→ 지속 가능한 매출 확보</strong><p>&nbsp;&nbsp;&nbsp;&nbsp;단발성 거래가 아닌 공공급식 기반의 매출처를 확보합니다.</p> </li>
        <li>4️⃣<strong>중학생도 이해할 수 있도록 설명하고</strong><p>&nbsp;&nbsp;&nbsp;&nbsp;입찰부터 생산 배송까지 안전하게 실제로 납품 가능한 구조를 만듭니다</p> </li>
      </ul>

      <p className="mt-3 text-sm text-gray-600">HACCP → 공공급식 → 정부·고용지원까지 이어지는 실무형 구조를 설계합니다</p>

      {/* 이미지 4장 + 오더 섹션과 동일한 오버레이 */}
      <div className="ss-marketing-grid mt-4">
        {MARKETING_IMAGES.map((img) => (
          <div
            key={img.src}
            className="min-w-0 overflow-hidden rounded-xl border border-cyan-100 bg-white/70 ring-1 ring-cyan-100/60"
          >
            <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onClick={() => setOpenImage(img.src)} // ✅ 클릭 시 확대
                className="absolute inset-0 h-full w-full cursor-zoom-in object-cover object-center"
              />

              {/* 하단 그라데이션 (오더 섹션 동일) */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />

              {/* 우측하단 칩 (오더 섹션과 동일) */}
              <div className="absolute bottom-2 right-2 z-10 rounded-md bg-black/35 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm md:bottom-3 md:right-3 md:text-sm">
                {img.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-5 h-1 w-full rounded-full bg-cyan-200 transition-opacity duration-200 group-hover:opacity-90"
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
