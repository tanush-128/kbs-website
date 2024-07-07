"use client";
import { Invitation } from "@prisma/client";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { getIniviationByToken } from "~/app/admin/action";

const InvitePage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  //   const { token, role } = router.query;
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const role = searchParams.get("role");
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token && role) {
      fetchInvitation(token as string);
    }
  }, [token, role]);

  const fetchInvitation = async (token: string) => {
    getIniviationByToken(token).then((invitation) => {
      setInvitation(invitation);
      setLoading(false);
    });
  };

  const handleAcceptInvitation = async () => {
    if (invitation === null) {
      return;
    }

    if (session?.user?.email !== invitation.email) {
      signIn();
      return;
    }

    try {
      const response = await axios.get(
        "/api/invite?token=" + token + "&role=" + role,
      );
      alert(response.data.message);
      router.push("/admin"); // Redirect to dashboard or any other page
    } catch (error) {
      console.error("Error accepting invitation", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!invitation) {
    return <div>Invalid or expired invitation.</div>;
  }

  return (
    <div className="container mx-auto flex min-h-screen  items-center justify-center p-4">
      <div className="flex flex-col  items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold">
          You have been invited to join as an {role}
        </h1>
        {session?.user?.email === invitation.email ? (
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white"
            onClick={handleAcceptInvitation}
          >
            Accept Invitation
          </button>
        ) : (
          <div className="flex flex-col items-center">
            <p>
              Please log in with the email address this invitation was sent to:{" "}
              {invitation.email}
            </p>
            <button
              className="rounded bg-blue-500 px-4 py-2 text-white"
              onClick={() => signIn("google")}
            >
              Log in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const WithSuspenseInvitePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InvitePage />
    </Suspense>
  );
};

export default WithSuspenseInvitePage;
