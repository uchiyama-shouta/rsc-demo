import { Suspense } from "react";

// Shared Components
import Skeletons from "../components/skeletons";

// Server Components
import Footer from "../components/layout/footer.server";
import SystemInfo from "../components/server-info.server";

// Client Components
import Page from "../components/page.client";
import Story from "../components/story.client";

// Utils
import fetchData from "../lib/fetch-data";
import { transform } from "../lib/get-item";
import useData from "../lib/use-data";

function StoryWithData({ id }: { id: number }) {
  const data = useData(`s-${id}`, () =>
    fetchData(`item/${id}`).then(transform),
  );
  return <Story {...data} />;
}

function NewsWithData() {
  const storyIds = useData("top", () => fetchData("topstories"));
  return (
    <>
      {storyIds.slice(0, 30).map((id: number) => {
        return <StoryWithData id={id} key={id} />;
      })}
    </>
  );
}

export default function News() {
  return (
    <Page>
      <Suspense fallback={<Skeletons />}>
        <NewsWithData />
      </Suspense>
      <Footer />
      <SystemInfo />
    </Page>
  );
}
