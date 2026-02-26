import { useMemo, useState } from "react";

// "DB에서 가져온 것처럼" 1~100개 데이터
const ALL = Array.from({ length: 100 }, (_, i) => i + 1);

export default function Offset() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const totalPages = Math.max(1, Math.ceil(ALL.length / pageSize));

  // 핵심: offset 계산
  const offset = (page - 1) * pageSize;

  // 핵심: offset 기반 slice
  const items = useMemo(() => {
    return ALL.slice(offset, offset + pageSize);
  }, [offset, pageSize]);

  return (
    <div style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
      <h1>Offset Pagination</h1>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <label>
          Page size:&nbsp;
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
          >
            {[5, 10, 20, 50].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>

        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button onClick={() => setPage(1)} disabled={page === 1}>
            {"<<"}
          </button>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Prev
          </button>

          <span style={{ minWidth: 140, textAlign: "center" }}>
            Page <b>{page}</b> / {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
          <button
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
          >
            {">>"}
          </button>
        </div>
      </div>

      {/* Google 스타일 페이지 번호 */}
      <div style={{ marginTop: 12, display: "flex", gap: 6, flexWrap: "wrap" }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            style={{
              padding: "4px 8px",
              border: n === page ? "2px solid #fff" : "1px solid #555",
              fontWeight: n === page ? 700 : 400,
            }}
          >
            {n}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        <p style={{ opacity: 0.7 }}>offset = (page-1) * pageSize = {offset}</p>
        <ul>
          {items.map((x) => (
            <li key={x}>Item {x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
