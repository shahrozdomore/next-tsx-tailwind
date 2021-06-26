import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Layout from "../components/layouts/Layout";

const IndexPage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {/* <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>Homepage_title: {t("homepage_title")}</p>
      <p>Homepage_description: {t("homepage_description")}</p>
      <p>Current locale: {locale}</p>
      <p>
        <Link href="/" locale="en">
          <a>Change to english</a>
        </Link>
      </p>
      <p>
        <Link href="/" locale="fr">
          <a>Change to french</a>
        </Link>
      </p> */}
    </Layout>
  );
};

export default IndexPage;
