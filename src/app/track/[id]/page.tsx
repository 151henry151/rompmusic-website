/**
 * Redirect /track/:id to /app/track/:id so shared links (e.g. rompmusic.com/track/49434)
 * open the client app on the track detail page.
 */
import { redirect } from 'next/navigation';

type Props = { params: Promise<{ id: string }> };

export default async function TrackRedirectPage({ params }: Props) {
  const { id } = await params;
  if (!id || !/^\d+$/.test(id)) {
    redirect('/app');
  }
  redirect(`/app/track/${id}`);
}
