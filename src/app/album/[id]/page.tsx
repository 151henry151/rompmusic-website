/**
 * Redirect /album/:id to /app/album/:id so shared links (e.g. rompmusic.com/album/4946)
 * open the client app on the album detail page.
 */
import { redirect } from 'next/navigation';

type Props = { params: Promise<{ id: string }> };

export default async function AlbumRedirectPage({ params }: Props) {
  const { id } = await params;
  if (!id || !/^\d+$/.test(id)) {
    redirect('/app');
  }
  redirect(`/app/album/${id}`);
}
