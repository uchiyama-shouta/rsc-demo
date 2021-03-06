import { Suspense } from "react";

// Shared Components
import Spinner from "../components/spinner";

// Client Components
import Page from "../components/page/index.client";
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
        return (
          <Suspense key={id} fallback={<Spinner />}>
            <StoryWithData id={id} />
          </Suspense>
        );
      })}
    </>
  );
}

export default function News() {
  return (
    <Page>
      <Suspense fallback={<Spinner />}>
        <NewsWithData />
      </Suspense>
    </Page>
  );
}
