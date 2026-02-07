"use client";

// 파일위치: app/_components/Hero.tsx
// 파일명: Hero.tsx

type HeroProps = {
  kakaoChatUrl: string;
  callPhone: string; // "010-1234-5678" 또는 "01012345678" 둘 다 OK
  heroImageSrc?: string; // 예: "/images/hero-a.png"
  leadAnchorId?: string; // 기본 "sms-lead"
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function digitsOnly(s: string) {
  return (s || "").replace(/\D/g, "");
}

export default function Hero({
  kakaoChatUrl,
  callPhone,
  heroImageSrc = "/images/hero-a.png",
  leadAnchorId = "sms-lead",
}: HeroProps) {
  const tel = digitsOnly(callPhone);

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, {
        event_category: "lead",
        event_label: "hero",
      });
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-10 pb-8 md:px-8 md:pt-16 md:pb-12">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
        {/* Left */}
        <div>
          <p className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700">
            Haccp 컨설팅
          </p>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            HACCP 인증,<span className="whitespace-nowrap">진짜 사업이 시작됩니다!</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
            <span className="font-semibold text-gray-900">
              인증에서 끝나는 컨설팅이 아닙니다!
            </span>
            <br />
            <span className="text-gray-600">
             HACCP → 공공급식 → 정부·고용지원까지
            </span>
            <br />
            <span className="text-gray-600">
             이어지는 실무형 구조를 설계합니다.
            </span>
          </p>
          
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {/* 📞 전화 (중간 페이지 /call → GA 이벤트 보장) */}
            <a
              href="/call"
              onClick={() => trackEvent("call_click")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:opacity-80"
              aria-label="전화로 도매 단가 바로 받기"
            >
              <span aria-hidden>📞</span>
              무료 상담
            </a>

            {/* 💬 카톡 */}
            <a
              href={kakaoChatUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("kakao_click")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 active:bg-gray-100"
              aria-label="카톡으로 도매 조건 문의"
            >
              <span aria-hidden>💬</span>
              카톡 문의
            </a>

            {/* ✉️ 문자 */}
            <a
              href={`#${leadAnchorId}`}
              onClick={() => trackEvent("sms_click")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 active:bg-gray-100"
              aria-label="문자요청 폼으로 이동"
            >
              <span aria-hidden>✉️</span>
              상담 신청
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            ※ Haccp인증 <span className="font-semibold">상담 전용</span> 페이지입니다
          </p>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
            <img
              src={heroImageSrc}
              alt="업소용 순살닭꼬치 도매 납품 제품 이미지"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
